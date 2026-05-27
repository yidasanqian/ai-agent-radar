# CLAUDE.md

## Project Overview

AI Agent Radar is a file-first daily digest generator for the AI agent ecosystem. GitHub Actions runs the pipeline on a schedule, writes Markdown reports under `digests/YYYY-MM-DD/`, updates `manifest.json` and `feed.xml`, and optionally sends Telegram notifications.

The project intentionally publishes file-based reports only.

## Commands

```bash
pnpm start          # run the full daily digest locally
pnpm weekly         # generate a weekly rollup from existing digests
pnpm monthly        # generate a monthly rollup from existing digests
pnpm manifest       # regenerate manifest.json and feed.xml
pnpm notify         # send Telegram notification when configured
pnpm typecheck      # tsc --noEmit
pnpm lint           # ESLint
pnpm format:check   # Prettier check
```

Required env vars for local digest runs:

```bash
export GITHUB_TOKEN=ghp_xxxxx
export OPENAI_API_KEY=sk-xxxxx
export OPENAI_BASE_URL=https://api.openai.com/v1
export OPENAI_MODEL=gpt-4.1-mini
export REPORT_LANGS=zh
```

## Architecture

The daily pipeline is implemented in `src/index.ts`:

1. `fetchAllData` fetches GitHub issues, PRs, releases, Claude Skills data, Anthropic/OpenAI sitemap content, GitHub Trending/Search data, and HN stories in parallel.
2. `generateSummaries` calls the OpenAI-compatible LLM for per-source summaries, rate-limited by `src/report.ts`.
3. Comparison prompts generate cross-tool and agent ecosystem synthesis.
4. Save functions write Markdown files only.

## Key Files

| File | Responsibility |
|---|---|
| `config.yml` | Tracked repositories |
| `src/config.ts` | Config loader and defaults |
| `src/index.ts` | Daily orchestration |
| `src/github.ts` | GitHub API fetch helpers |
| `src/prompts.ts` | LLM prompt builders |
| `src/report.ts` | LLM caller, concurrency limiter, file writer |
| `src/web.ts` | Sitemap-based official web content tracking |
| `src/trending.ts` | GitHub Trending and Search API fetcher |
| `src/hn.ts` | Hacker News Algolia API fetcher |
| `src/rollup.ts` | Weekly and monthly rollups |
| `src/generate-manifest.ts` | Web UI manifest and RSS feed generator |
| `index.html` | Static Web UI |

## Tracked AI CLI Repositories

Keep the default CLI scope focused:

- `anthropics/claude-code`
- `openai/codex`
- `google-gemini/gemini-cli`

## Tracked AI Agent App Ecosystem

Keep the default agent app ecosystem focused:

- `openclaw/openclaw`
- `NousResearch/hermes-agent`
- `NanmiCoder/cc-haha`
- `BigPizzaV3/CodexPlusPlus`

Do not re-add PicoClaw, Zeroclaw, NanoBot, or other historical peers unless the product scope explicitly changes.

## Publishing Rules

- Reports are committed as Markdown files.
- `manifest.json` and `feed.xml` are committed after report generation.
- GitHub Issues are not used as a publishing channel.
- MCP / Cloudflare Worker code is out of scope for this project.
