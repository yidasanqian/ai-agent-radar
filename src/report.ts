/**
 * LLM invocation and file output helpers.
 * Supports OpenAI-compatible chat/completions endpoints and Anthropic Messages API.
 */

import fs from "node:fs";
import path from "node:path";

const DEFAULT_OPENAI_BASE_URL = "https://api.openai.com/v1";
const DEFAULT_ANTHROPIC_BASE_URL = "https://api.anthropic.com/v1";
const DEFAULT_MODEL = "gpt-4.1-mini";
const DEFAULT_LLM_CONCURRENCY = 3;
const DEFAULT_ANTHROPIC_MODEL = "claude-3-5-haiku-latest";
const ANTHROPIC_VERSION = "2023-06-01";

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

function getPositiveIntEnv(name: string, fallback: number): number {
  const raw = process.env[name];
  if (!raw) return fallback;

  const parsed = Number.parseInt(raw, 10);
  if (Number.isFinite(parsed) && parsed > 0) return parsed;

  console.warn(`[config] Invalid ${name}="${raw}", using ${fallback}`);
  return fallback;
}

const LLM_CONCURRENCY = getPositiveIntEnv("LLM_CONCURRENCY", DEFAULT_LLM_CONCURRENCY);
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 10;
const RETRY_BASE_MS = 5_000; // exponential backoff: 5 s, 10 s, 20 s, ...

function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

type LlmProvider = "openai" | "anthropic";

function readEnv(...names: string[]): string | undefined {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return undefined;
}

function getLlmApiKey(): string {
  return readEnv("OPENAI_API_KEY", "ANTHROPIC_API_KEY") ?? "";
}

function getConfiguredBaseUrl(): string | undefined {
  return readEnv("OPENAI_BASE_URL", "ANTHROPIC_BASE_URL");
}

function normalizeBaseUrl(provider: LlmProvider, baseUrl: string): string {
  const normalized = baseUrl.replace(/\/$/, "");
  if (/\/(?:chat\/completions|messages)$/i.test(normalized)) {
    throw new Error(
      "LLM base URL must be a base path such as https://api.openai.com/v1 or https://api.anthropic.com/v1, not a full completion endpoint",
    );
  }
  if (provider === "openai" && /^https:\/\/api\.openai\.com$/i.test(normalized)) {
    return `${normalized}/v1`;
  }
  if (provider === "anthropic" && /^https:\/\/api\.anthropic\.com$/i.test(normalized)) {
    return `${normalized}/v1`;
  }
  return normalized;
}

function getLlmModel(): string {
  const configured = readEnv("OPENAI_MODEL", "ANTHROPIC_MODEL");
  if (configured) return configured;
  return getLlmProvider() === "anthropic" ? DEFAULT_ANTHROPIC_MODEL : DEFAULT_MODEL;
}

function getLlmProvider(): LlmProvider {
  const configuredProvider = readEnv("LLM_PROVIDER")?.toLowerCase();
  if (configuredProvider === "anthropic" || configuredProvider === "openai") {
    return configuredProvider;
  }

  const configuredBaseUrl = getConfiguredBaseUrl();
  if (configuredBaseUrl && /(^|\.)anthropic\.com(\/|$)/i.test(configuredBaseUrl)) {
    return "anthropic";
  }

  const hasOpenAiKey = Boolean(readEnv("OPENAI_API_KEY"));
  const hasAnthropicKey = Boolean(readEnv("ANTHROPIC_API_KEY"));
  if (!hasOpenAiKey && hasAnthropicKey) return "anthropic";

  const model = readEnv("OPENAI_MODEL", "ANTHROPIC_MODEL");
  if (!configuredBaseUrl && model?.toLowerCase().startsWith("claude-")) {
    return "anthropic";
  }

  return "openai";
}

export function getLlmBaseUrl(): string {
  const provider = getLlmProvider();
  const fallback = provider === "anthropic" ? DEFAULT_ANTHROPIC_BASE_URL : DEFAULT_OPENAI_BASE_URL;
  return normalizeBaseUrl(provider, getConfiguredBaseUrl() ?? fallback);
}

export function getLlmConfigSummary(): string {
  return `provider: ${getLlmProvider()} | endpoint: ${getLlmBaseUrl()} | model: ${getLlmModel()}`;
}

export function hasLlmCredentials(): boolean {
  return getLlmApiKey().length > 0;
}

function extractTextContent(content: unknown): string {
  if (typeof content === "string") return content.trim();
  if (Array.isArray(content)) {
    const text = content
      .map((part) => {
        if (typeof part === "string") return part;
        if (
          part &&
          typeof part === "object" &&
          "type" in part &&
          part.type === "text" &&
          "text" in part &&
          typeof part.text === "string"
        ) {
          return part.text;
        }
        return "";
      })
      .join("")
      .trim();
    if (text) return text;
  }
  throw new Error("Unexpected response type from LLM");
}

export async function callLlm(prompt: string, maxTokens = 4096): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      const apiKey = getLlmApiKey();
      if (!apiKey) throw new Error("Missing required environment variable: OPENAI_API_KEY");

      const provider = getLlmProvider();
      const baseUrl = getLlmBaseUrl();
      const url = provider === "anthropic" ? `${baseUrl}/messages` : `${baseUrl}/chat/completions`;
      const resp =
        provider === "anthropic"
          ? await fetch(url, {
              method: "POST",
              headers: {
                "x-api-key": apiKey,
                "anthropic-version": ANTHROPIC_VERSION,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: getLlmModel(),
                messages: [{ role: "user", content: prompt }],
                temperature: 0.2,
                max_tokens: maxTokens,
              }),
            })
          : await fetch(url, {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: getLlmModel(),
                messages: [{ role: "user", content: prompt }],
                temperature: 0.2,
                max_tokens: maxTokens,
              }),
            });
      if (!resp.ok) {
        throw new Error(`LLM API ${provider} ${resp.status} at ${url}: ${await resp.text()}`);
      }

      const data = (await resp.json()) as {
        content?: unknown;
        choices?: Array<{
          message?: {
            content?: unknown;
          };
        }>;
      };
      const content = provider === "anthropic" ? data.content : data.choices?.[0]?.message?.content;
      return extractTextContent(content);
    } catch (err) {
      if (attempt < MAX_RETRIES && is429(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(`[llm] 429 — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: "zh" | "en" = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? process.env["GITHUB_REPOSITORY"] ?? "";
  if (!digestRepo) return "";
  return lang === "en"
    ? `\n\n---\n*This digest is auto-generated by [AI Agent Radar](https://github.com/${digestRepo}).*`
    : `\n\n---\n*本日报由 [AI Agent Radar](https://github.com/${digestRepo}) 自动生成。*`;
}
