# AI Agent Radar

[English](./README.en.md)

AI Agent Radar 是一个基于 GitHub Actions 的 AI Agent 生态观察器。它每天自动抓取 AI CLI 工具、OpenClaw、Hermes Agent、cc-haha、Codex++、Anthropic/OpenAI 官网、GitHub Trending 和 Hacker News 的公开动态，调用 OpenAI 兼容模型生成 Markdown 报告，并提交到仓库内的 `digests/YYYY-MM-DD/`。

## 输出

| 文件 | 内容 |
|---|---|
| `ai-cli.md` / `ai-cli-en.md` | AI CLI 工具日报 |
| `ai-agents.md` / `ai-agents-en.md` | OpenClaw、Hermes Agent、cc-haha、Codex++ 生态报告 |
| `ai-web.md` / `ai-web-en.md` | Anthropic / OpenAI 官网内容追踪 |
| `ai-trending.md` / `ai-trending-en.md` | GitHub AI 开源趋势 |
| `ai-hn.md` / `ai-hn-en.md` | Hacker News AI 社区动态 |
| `ai-weekly.md` / `ai-weekly-en.md` | 周报 |
| `ai-monthly.md` / `ai-monthly-en.md` | 月报 |

`manifest.json` 用于 Web UI 导航，`feed.xml` 用于 RSS 订阅。

## 追踪源

### AI CLI 工具

- `anthropics/claude-code`
- `openai/codex`
- `google-gemini/gemini-cli`

### AI Agent App 生态

- `openclaw/openclaw`
- `NousResearch/hermes-agent`
- `NanmiCoder/cc-haha`
- `BigPizzaV3/CodexPlusPlus`

### 其他信息源

- `anthropics/skills`
- Anthropic 官网 sitemap
- OpenAI 官网 sitemap
- GitHub Trending
- GitHub Search API 的 AI 相关 topic
- Hacker News Algolia API

## 配置

仓库追踪列表在 `config.yml` 中维护。默认只保留三个 AI CLI 工具，以及 OpenClaw、Hermes Agent、cc-haha、Codex++：

```yaml
openclaw:
  id: openclaw
  repo: openclaw/openclaw
  name: OpenClaw
  paginated: true

openclaw_peers:
  - id: hermes-agent
    repo: NousResearch/hermes-agent
    name: Hermes Agent
    paginated: true
  - id: cc-haha
    repo: NanmiCoder/cc-haha
    name: cc-haha
  - id: codex-plus-plus
    repo: BigPizzaV3/CodexPlusPlus
    name: Codex++
    paginated: true
```

## GitHub Actions Secrets

| 名称 | 必需 | 用途 |
|---|---:|---|
| `OPENAI_API_KEY` | 是 | OpenAI 兼容接口 key |
| `OPENAI_BASE_URL` | 否 | OpenAI 兼容接口地址 |
| `OPENAI_MODEL` | 否 | 模型名，默认 `gpt-4.1-mini` |
| `TELEGRAM_BOT_TOKEN` | 否 | Telegram 通知 |
| `TELEGRAM_CHAT_ID` | 否 | Telegram 通知目标 |

`GITHUB_TOKEN` 由 GitHub Actions 自动提供，只用于读取 GitHub API 和提交生成文件。

可选变量：

| 名称 | 用途 |
|---|---|
| `REPORT_LANGS` | 报告语言，例如 `zh` 或 `zh,en`，默认 `zh` |
| `PAGES_URL` | GitHub Pages 站点地址，用于 RSS 和 Telegram 链接 |

## 本地运行

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export OPENAI_BASE_URL=https://api.openai.com/v1
export OPENAI_API_KEY=sk-xxxxxxxx
export OPENAI_MODEL=gpt-4.1-mini
export REPORT_LANGS=zh

pnpm start
pnpm manifest
```

报告只会写入本地文件，不会创建 GitHub Issue。

## 开发命令

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm manifest
pnpm weekly
pnpm monthly
pnpm notify
```

## 发布模型

- 日报、周报、月报都只提交 Markdown 文件。
- Web UI 读取 `manifest.json` 和 `digests/` 下的 Markdown。
- RSS 读取最近报告生成 `feed.xml`。
- Telegram 通知只发送 Web UI 链接。
- 不创建 GitHub Issues。
- 不包含 MCP / Cloudflare Worker 服务。
