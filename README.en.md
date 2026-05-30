# AI Agent Radar

[中文](./README.md)

AI Agent Radar is a GitHub Actions based digest generator for the AI agent ecosystem. It fetches public activity from selected AI CLI tools, OpenClaw, Hermes Agent, cc-haha, Codex++, Anthropic/OpenAI websites, GitHub Trending, and Hacker News, then uses an OpenAI-compatible model to generate Markdown reports under `digests/YYYY-MM-DD/`.

## Outputs

| File | Content |
|---|---|
| `ai-cli.md` / `ai-cli-en.md` | AI CLI tools daily digest |
| `ai-agents.md` / `ai-agents-en.md` | OpenClaw, Hermes Agent, cc-haha, and Codex++ ecosystem report |
| `ai-web.md` / `ai-web-en.md` | Anthropic / OpenAI official content tracking |
| `ai-trending.md` / `ai-trending-en.md` | GitHub AI open-source trends |
| `ai-hn.md` / `ai-hn-en.md` | Hacker News AI community digest |
| `ai-weekly.md` / `ai-weekly-en.md` | Weekly rollup |
| `ai-monthly.md` / `ai-monthly-en.md` | Monthly rollup |

`manifest.json` powers the Web UI navigation, and `feed.xml` powers RSS.

## Tracked AI CLI Repositories

- `anthropics/claude-code`
- `openai/codex`
- `google-gemini/gemini-cli`

## Tracked AI Agent App Repositories

- `openclaw/openclaw`
- `NousResearch/hermes-agent`
- `NanmiCoder/cc-haha`
- `BigPizzaV3/CodexPlusPlus`

## Local Usage

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export OPENAI_BASE_URL=https://api.openai.com/v1
export OPENAI_API_KEY=sk-xxxxxxxx
export OPENAI_MODEL=gpt-4.1-mini
export REPORT_LANGS=zh
export LLM_CONCURRENCY=3

pnpm start
pnpm manifest
```

Reports are written as local files only. The project does not create GitHub Issues.

`OPENAI_BASE_URL` must be a base URL such as `https://api.openai.com/v1` or
`https://api.anthropic.com/v1`, not a full `/chat/completions` or `/messages`
endpoint. The runtime automatically detects Anthropic's native API and calls
`/v1/messages`. Legacy `ANTHROPIC_API_KEY`, `ANTHROPIC_BASE_URL`, and
`ANTHROPIC_MODEL` variables are still supported. `LLM_PROVIDER` can optionally
force `openai` or `anthropic`, but is usually not needed.

## Development

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm manifest
pnpm weekly
pnpm monthly
pnpm notify
```
