# OpenClaw 生态日报 2026-07-02

> Issues: 40 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-02 03:36 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-02
**项目仓库：** github.com/openclaw/openclaw

---

## 1. 今日速览

过去 24 小时，OpenClaw 社区保持极高活跃度：共处理 **40 条 Issues 更新**（25 条新开/活跃，15 条关闭）和 **500 条 PR 更新**（410 条待合并，90 条已合并/关闭）。项目整体处于高压力状态——**P1 严重问题集中爆发**，至少 **15 个 P1 Issue 处于 OPEN 状态**，涵盖安全、消息丢失、会话状态损坏等核心问题，涉及 Telegram、Mattermost、Discord、WhatsApp 等多个渠道以及 embedded runner、memory-core 等核心模块。今日合并了 90 条 PR（含多条 memory-wiki、memory-core、session-memory 的重要修复），但新开 Issue 数量远超关闭数量，积压趋势明显，建议维护团队优先处理 P1 安全与稳定性问题。

---

## 2. 版本发布

**今日无新版本发布。** 最新稳定版仍为 `v2026.6.11`（发布于 2026-06-30）。值得注意的是，多个新开的 P1 Issue 直接关联 `v2026.6.11` 的变更——包括 Mattermost 插件外部化导致的 401 回归（#98740）、reply session 初始化冲突（#98416）等，说明该版本可能需要尽快发布 patch 修复。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，按模块分类：

### 内存模块（memory-core / memory-wiki）——多条重要修复

| PR | 描述 | 评级 |
|---|---|---|
| [#94537](https://github.com/openclaw/openclaw/pull/94537) | **harden dreaming daily-file writes** — 修复 `fs.writeFile` 非原子性导致的崩溃截断问题，同时清理 dangling recall refs | 🦐 Gold Shrimp / P0 |
| [#96734](https://github.com/openclaw/openclaw/pull/96734) | **refactor: use replaceFileAtomic for dreaming file writes** — 原子化写入，消除崩溃风险 | 🧂 Unranked / P2 |
| [#97177](https://github.com/openclaw/openclaw/pull/97177) | **gracefully handle unparsable YAML frontmatter in vault scans** — 单个损坏 frontmatter 导致整个 vault 工作流崩溃的回归修复（automerge） | 🧂 Unranked / P2 |
| [#95149](https://github.com/openclaw/openclaw/pull/95149) | **resolve bridge zero-artifact report in CLI snapshot mode** — 修复 `wiki bridge import` 报告零工件的 bug | 🧂 Unranked / P1 |
| [#94240](https://github.com/openclaw/openclaw/pull/94240) | **degrade non-local embedding provider on persistent failure** — 远程 embedding provider 持续失败时优雅降级到 FTS 模式，避免无限挂起 | 🧂 Unranked / P2 |
| [#94180](https://github.com/openclaw/openclaw/pull/94180) | **allow private network endpoints for memory embedding** — 解除对私有 IP embedding endpoint 的封锁，支持自托管 Ollama 等场景 | 🧂 Unranked / P2 |
| [#96092](https://github.com/openclaw/openclaw/pull/96092) | **schedule qmd embed when embedInterval is explicitly configured in lexical search mode** | 🧪 Silver Shellfish / P2 |
| [#94369](https://github.com/openclaw/openclaw/pull/94369) | **exclude durable reference pages from stale report** — 概念页/综合页不再被误标为过期 | 🐚 Platinum Hermit / P2 |

### 会话与消息模块

| PR | 描述 | 评级 |
|---|---|---|
| [#97034](https://github.com/openclaw/openclaw/pull/97034) | **strip orphan plain-text role lines from session-memory transcripts** — 修复模型产生的孤立 role 行导致 memory 文件重复的问题 | 🦪 Silver Shellfish / P1 |
| [#96918](https://github.com/openclaw/openclaw/pull/96918) | **enable pre-compaction memory flush for CLI backends** — CLI 后端（claude-cli, codex-cli）现在会在原生压缩前执行 memory flush，提供恢复点 | 🧂 Unranked / P1 |
| [#97221](https://github.com/openclaw/openclaw/pull/97221) | **remove stale reasoning envelope when DeepSeek V4 wrapper emits native effort** — 修复 OpenRouter DeepSeek V4 请求因重复 reasoning 参数导致的 HTTP 400 错误 | 🧂 Unranked / P2 |
| [#96318](https://github.com/openclaw/openclaw/pull/96318) | **set liveModelSwitchPending when switching to default model with runtime fields mismatch** | 🐚 Platinum Hermit / P2 |
| [#96070](https://github.com/openclaw/openclaw/pull/96070) | **enable bundled static catalog fallback for cron Attempt 2** — 插件提供的模型现在可被非插件 harness 的 cron session 解析 | 🐚 Platinum Hermit / P2 |
| [#94401](https://github.com/openclaw/openclaw/pull/94401) | **skip transcript-only assistant messages in getRecentSessionContent** — 消除 thinking/reasoning 模型导致的重复 assistant 行 | 🐚 Platinum Hermit / P2 |

### 安全与渠道修复

| PR | 描述 | 评级 |
|---|---|---|
| [#54904](https://github.com/openclaw/openclaw/pull/54904) | **fix(feishu): enforce configured webhookPath** — 修复飞书 webhook 任意路径接受请求的安全漏洞（信息泄露风险） | 🦐 Gold Shrimp / P2 |
| [#55592](https://github.com/openclaw/openclaw/pull/55592) | **fix(ui): sync message delete to session transcript backend** — 删除消息现在同时清理后端 .jsonl 记录，修复 AI 仍能"看见"已删除内容的隐私问题 | 🧂 Unranked / P1 |

### 其他值得关注的 Open PR

| PR | 描述 | 状态 |
|---|---|---|
| [#98882](https://github.com/openclaw/openclaw/pull/98882) | **fix(backup): filter agent volatile dirs, browser cache, and lock files from archives** — 对应 Issue #98865，今日新开 | OPEN |
| [#98880](https://github.com/openclaw/openclaw/pull/98880) | **fix(codex): honor timeoutSeconds for dynamic tool calls** — 对应 Issue #98864，今日新开 | OPEN |
| [#98841](https://github.com/openclaw/openclaw/pull/98841) | **fix(gateway): include session label in deriveSessionTitle fallback chain** | 👀 ready for maintainer look |
| [#55828](https://github.com/openclaw/openclaw/pull/55828) | **feat(msteams): add native plugin interactivity parity** — Teams 渠道原生插件交互功能（大型 PR，size: XL） | 📣 needs proof |

---

## 4. 社区热点

### 评论最多的 Issues（按评论数排序）

1. **#25592** — Text between tool calls leaks to messaging channels（33 条评论，P1）
   - 链接：https://github.com/openclaw/openclaw/issues/25592
   - 核心诉求：Agent 在 tool call 之间产生的文本（如错误处理、处理确认）被错误路由到 Slack/iMessage 等消息渠道作为可见消息暴露，这是严重的 UX 和信息泄露问题。社区讨论热烈（33 条评论），涉及多个渠道的通用性问题。

2. **#92201** — Embedded runner: freshly streamed thinking signatures intermittently invalid on replay（17 条评论，P1）
   - 链接：https://github.com/openclaw/openclaw/issues/92201
   - 核心诉求：Anthropic thinking block 签名在回放时偶发失效，recovery wrapper 因错误文本被 genericize 而从未触发，影响 Slack 嵌入式 runner 的会话持久性。

3. **#38327** — "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview（10 条评论，P1）
   - 链接：https://github.com/openclaw/openclaw/issues/38327
   - 核心诉求：升级到 2026.3.2 后任何消息都导致 embedded agent 崩溃，影响使用 Gemini 的用户。

4. **#94228** — Native Anthropic path: replaying historical thinking blocks bricks long tool-use threads（10 条评论，P1）
   - 链接：https://github.com/openclaw/openclaw/issues/94228
   - 核心诉求：长生命周期多轮 tool-use session 最终永久 brick，每次后续 turn 返回 HTTP 400 `Invalid signature in thinking block`。

### 热点 PR

- **#55828**（feat(msteams): add native plugin interactivity parity）— size: XL，涉及 Teams 渠道原生交互功能，社区关注度高
- **#55351**（Preserve Open WebUI UUID sessions across Control UI）— size: XL，涉及 session 跨 UI 持久化

---

## 5. Bug 与稳定性

### P1 — 严重（需立即关注）

| Issue | 描述 | 状态 | 已有 Fix PR？ |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool call 之间的文本泄漏到消息渠道（Slack/iMessage 等） | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner Anthropic thinking 签名回放偶发失效，recovery 不触发 | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **回归** v2026.3.2 后 Gemini-3.1-pro-preview 导致 "Cannot convert undefined or null to object" | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic 路径长 tool-use session 永久 brick（HTTP 400） | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#98416](https://github.com/openclaw/openclaw/issues/98416) | **v2026.6.11 回归** reply session 初始化冲突（reentrancy guard 缺失） | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#98740](https://github.com/openclaw/openclaw/issues/98740) | **v2026.6.11 回归** Mattermost 插件外部化后所有 `/oc_*` 命令返回 401 | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#98777](https://github.com/openclaw/openclaw/issues/98777) | Telegram webhook 模式在持久化前 ack 200，崩溃后消息永久丢失 | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#98842](https://github.com/openclaw/openclaw/issues/98842) | 外部化插件丢失非 gateway-auth 公共产物（doctor/secret/message-tool 等） | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#98814](https://github.com/openclaw/openclaw/issues/98814) | Direct-session compaction 继承 OpenAI OAuth profile 导致 Responses API 认证失败 | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#98827](https://github.com/openclaw/openclaw/issues/98827) | **OOM 崩溃循环** `.usage-cost-cache.json` 膨胀导致 Gateway 崩溃（repro of #95379） | OPEN | ❌ |
| [#98820](https://github.com/openclaw/openclaw/issues/98820) | iOS 官方 App 消息送达但无响应（session routing + client ID 碰撞） | OPEN | ❌ |
| [#98790](https://github.com/openclaw/openclaw/issues/98790) | 并发 agent-to-agent turn 分叉 session 树，compaction 后产生 Anthropic 拒绝的 assistant-terminal 请求 | OPEN | ❌ `clawsweeper:no-new-fix-pr` |
| [#98873](https://github.com/openclaw/openclaw/issues/98873) | lossless-claw deferred turn maintenance 运行时新消息报 "reply session initialization conflicted" | OPEN | ❌ |
| [#98874](https://github.com/openclaw/openclaw/issues/98874) | Tool 文本结果有时渲染为图片附件而非文本（WebChat direct session） | OPEN | ❌ `clawsweeper:needs-live-repro` |
| [#98882](https://github.com/openclaw/openclaw/issues/98882) | 备份归档包含 volatile runtime 路径导致备份失败 | OPEN | ✅ PR #98882 已开 |

### P2 — 中等

| Issue | 描述 | 状态 | 已有 Fix PR？ |
|---|---|---|---|
| [#32530](https://github.com/openclaw/openclaw/issues/32530) | **Feature**: 自动发现外部 workspace 中的 agent 配置 | OPEN | ❌ |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) | 正常 tool 文本输出退化为 "(see attached image)" 占位符 | OPEN | ❌ |
| [#88362](https://github.com/openclaw/openclaw/issues/88362) | WhatsApp 入站图片第二次读取失败（UUID 不匹配） | OPEN | ❌ |
| [#84466](https://github.com/openclaw/openclaw/issues/84466) | MEMORY.md 在 Discord guild 频道加载，违反文档声明的安全边界 | OPEN | ❌ |
| [#98859](https://github.com/openclaw/openclaw/issues/98859) | Follow-up: harden one-click install wrapper 和 stale-lock recovery | OPEN | ❌ |
| [#98713](https://github.com/openclaw/openclaw/issues/98713) | 配置 `opencode-go/kimi-k2.6` 但运行时使用 `deepseek-v4-pro` | OPEN | ❌ |
| [#98871](https://github.com/openclaw/openclaw/issues/98871) | Mattermost peer directory 只读取前 200 名团队成员 | OPEN | ❌ |
| [#98870](https://github.com/openclaw/openclaw/issues/98870) | Teams thread 只获取前 50 条回复，新回复被忽略 | OPEN | ❌ |
| [#98866](https://github.com/openclaw/openclaw/issues/98866) | 嵌入式本地 agent 运行应在共享 app-server 时全局序列化 | OPEN | ❌ |
| [#98864](https://github.com/openclaw/openclaw/issues/98864) | Dynamic tool hard timeout 应在缺少 `timeoutMs` 时使用 `timeoutSeconds` | OPEN | ✅ PR #98880 已开 |
| [#98825](https://github.com/openclaw/openclaw/issues/98825) | Tool-result replay 可能丢失非数组 output 内容 | OPEN | ❌ |
| [#98805](https://github.com/openclaw/openclaw/issues/98805) | **Feature**: 从 live change events 刷新 Workboard | OPEN | ❌ |
| [#98807](https://github.com/openclaw/openclaw/issues/98807) | **Feature**: 在每条回复中显示使用的模型 | OPEN | ❌ |
| [#98799](https://github.com/openclaw/openclaw/issues/98799) | `install.sh: config set channels --json` 缺少 `--merge` 覆盖现有渠道配置 | OPEN | ❌ |
| [#98681](https://github.com/openclaw/openclaw/issues/98681) | 手动设置用非十进制数字语法时存储错误的 gateway port | CLOSED | ❌ |
| [#98810](https://github.com/openclaw/openclaw/issues/98810) | Silent session stall: preflightRecovery 在 `compact_only`/`compact_then_truncate` 路由缺少 `handled:true`（确认 2026.6.5–2026.6.11 均受影响） | CLOSED | ❌ |
| [#92257](https://github.com/openclaw/openclaw/issues/92257) | sessions_send announce 模式向 isolated cron session 注入 Argus 回复上下文导致反馈循环 | CLOSED | ❌ |

---

## 6. 功能请求与路线图信号

以下功能请求在今日获得较高关注或已有对应 PR，可能进入下一版本

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-02  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**高速迭代与质量承压并存的态势**。四大项目在过去 24 小时内合计处理 **226 条 Issues** 和 **1,012 条 PRs**，反映出极高的社区活跃度与开发吞吐量。然而，高产出背后存在显著的稳定性隐患：OpenClaw 有 15 个 P1 严重问题积压，Hermes Agent 存在平台适配器可靠性问题，Codex++ 面临性能退化投诉，cc-haha 则在快速修复周期中仍有关键功能缺陷未解。整体生态处于**功能快速推进阶段**，但各项目均需在迭代速度与质量稳定性之间寻求更好的平衡。

---

## 2. 各项目活跃度对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **Issues（24h）** | 40（25 新开/活跃，15 关闭） | 114（102 新开/活跃，12 关闭） | 38（8 新开/活跃，30 关闭） | 34（26 新开/活跃，8 关闭） |
| **PRs（24h）** | 500（410 待合并，90 已合并） | 500（382 待合并，118 已合并） | 10（3 待合并，7 已合并） | 6（5 待合并，1 已合并） |
| **版本发布** | 无新版本（最新 v2026.6.11） | ✅ v0.18.0 "The Judgment Release" | ✅ v0.4.4 | ✅ 3 个版本（v1.2.26~v1.2.28） |
| **贡献者规模** | 未披露 | 370+ | 核心贡献者 @zhbdesign | 未披露 |
| **PR 积压率** | 82%（410/500） | 76.4%（382/500） | 30%（3/10） | 83%（5/6） |
| **P1 Bug 数量** | 15 个（严重积压） | 2 个（已关闭待确认） | 0 个 | 5 个（含 1 个安全漏洞） |
| **Issue 关闭率** | 37.5%（15/40） | 10.5%（12/114） | 78.9%（30/38） | 23.5%（8/34） |
| **健康度评估** | ⚠️ 高压 | ⚠️ 中高 | ✅ 良好 | ⚠️ 中等 |

**关键发现：** Hermes Agent 和 OpenClaw 的 PR 吞吐量最高（各 500 条/24h），但积压率也最高；cc-haha 的 Issue 关闭效率最优（78.9%），响应速度最快；Codex++ 版本发布最频繁（3 个/日），但社区讨论热度较低。

---

## 3. OpenClaw 在生态中的定位

### 3.1 定位特征

OpenClaw 是四大项目中**定位最接近"通用自主智能体基础设施"**的项目，核心差异体现在：

| 维度 | OpenClaw | 生态对比 |
|------|----------|----------|
| **架构定位** | 多渠道统一网关（Gateway）+ 嵌入式 Runner | cc-haha 偏桌面端 UI，Codex++ 偏 IDE 增强，Hermes 偏平台适配 |
| **渠道覆盖** | Telegram、Mattermost、Discord、WhatsApp、飞书、Teams 等 10+ 渠道 | Hermes Agent 侧重 Discord/BlueBubbles/iMessage，cc-haha 桌面端，Codex++ 依赖 Codex 主程序 |
| **内存系统** | 深度自研（memory-core、memory-wiki、session-memory） | Hermes 有 Memory 模块但不如 OpenClaw 完善 |
| **安全优先级** | 高（今日多条安全修复：飞书 webhook、消息删除隐私） | 其他项目安全相关 Issue 较少 |

### 3.2 技术路线差异

- **OpenClaw** 采用**插件外部化架构**，支持多渠道、多后端解耦，但今日 Issue #98842 暴露了外部化导致公共产物丢失的问题
- **Hermes Agent** 侧重**平台适配器生态**（Discord、BlueBubbles、Telegram），功能丰富但平台稳定性问题集中
- **cc-haha** 专注**桌面端 Claude Code 封装**，UI/UX 优化导向，代码量相对轻量
- **Codex++** 定位**Codex 增强工具**，依赖主程序，侧重会话管理与供应商集成

### 3.3 社区规模对比

| 项目 | 社区规模信号 | 评估 |
|------|-------------|------|
| OpenClaw | 500 PRs/24h，15 个 P1 并发 | 大型活跃社区，但维护压力极大 |
| Hermes Agent | 370+ 贡献者，v0.18.0 含 998 个合并 PR | 生态最成熟，贡献者最多 |
| cc-haha | 核心贡献者驱动，Issue 响应快 | 小而精的社区 |
| Codex++ | 社区讨论热度较低 | 相对小众，用户基数可能有限 |

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映出生态层面的共性挑战：

### 4.1 平台适配器可靠性

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | Telegram webhook 消息丢失（#98777），Mattermost 401 回归（#98740） |
| **Hermes Agent** | iMessage sidecar 崩溃死循环（#49858），BlueBubbles 重复处理（#30708、#34372），Discord auto_thread 禁用问题（#26058） |
| **cc-haha** | 代理冲突导致连接失败（#896、#947） |
| **Codex++** | macOS AMFI 拦截导致管理工具无法运行（#1207、#1288） |

**共性诉求：** 各项目均面临平台渠道适配的稳定性挑战，需要统一的错误恢复机制、重连策略和测试覆盖。

### 4.2 MCP 工具生态

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | 外部化插件丢失 MCP 工具（#98842） |
| **Hermes Agent** | Docker 环境下 Exa 搜索不可用（#49445），技能目录路径解析错误（#41561） |
| **Codex++** | MCP Node REPL 工具无法调用（#1255、#1271） |

**共性诉求：** MCP（Model Context Protocol）工具的跨环境兼容性、路径解析、权限管理是共同的技术难点。

### 4.3 会话与内存管理

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | session-memory 重复（#97034），reply session 初始化冲突（#98416） |
| **Hermes Agent** | Cron 结果注入 Live Session 需求（#5712，11 点赞） |
| **cc-haha** | Session 预热竞争条件（已在 v0.4.4 修复） |
| **Codex++** | 会话移动失败（#1016），历史会话无法刷新（#1057） |

**共性诉求：** 多轮会话状态管理、长生命周期 session 持久化、跨 UI/平台会话迁移是普遍需求。

### 4.4 安全与隐私

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | 飞书 webhook 任意路径接受请求（#54904），消息删除后端未同步（#55592） |
| **Hermes Agent** | 命令执行黑名单可被绕过（#36846，已关闭需确认） |
| **Codex++** | 任意文件写入漏洞（#1270，已关闭） |
| **cc-haha** | MCP secret 展示漏洞（已在 v0.4.4 修复） |

**共性诉求：** 渠道消息隔离、敏感信息保护、权限边界控制是各项目共同的安全焦点。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心定位** | 多渠道 AI 网关 + 自主智能体框架 | 平台适配器生态 + 自主运行 | Claude Code 桌面客户端 | Codex IDE 增强工具 |
| **目标用户** | 开发者/运维（自托管多渠道 bot） | 高级用户（多平台消息集成） | Claude Code 用户（桌面交互） | Codex 用户（代码助手增强） |
| **技术架构** | Gateway 中心化 + 插件外部化 | 适配器解耦 + Cron/技能系统 | Electron 桌面 + 服务端分离 | Rust/Node 混合 + SQLite 存储 |
| **核心功能** | 多渠道接入、Memory 系统、Embedded Runner | 平台集成、Kanban、Cron、Delegation | 桌面 UI、Provider 管理、Trace | 会话管理、供应商诊断、MCP 工具 |
| **迭代策略** | 功能全面但积压严重 | 大版本激进迭代 | 小步快跑、快速修复 | 频繁小版本发布 |
| **主要痛点** | P1 Bug 积压、版本稳定性 | 平台适配器可靠性 | 图片读取、模型连接 | 性能退化、MCP 工具 |

**关键洞察：** 四个项目覆盖了从"基础设施层"（OpenClaw）到"平台集成层"（Hermes Agent）再到"应用层"（cc-haha、Codex++）的完整生态位。OpenClaw 和 Hermes Agent 面向更复杂的部署场景，cc-haha 和 Codex++ 则专注于提升特定工具的桌面体验。

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **🔥 第一梯队（极高活跃）** | OpenClaw、Hermes Agent | PR 吞吐量 500/24h，Issue 量 100+/24h，社区贡献者 300+，处于**功能爆发期** |
| **⚡ 第二梯队（高活跃）** | cc-haha | Issue 响应快（78.9% 关闭率），版本迭代稳定，处于**质量巩固期** |
| **📦 第三梯队（中等活跃）** | Codex++ | 版本发布频繁但社区讨论有限，处于**快速修复期** |

### 6.2 成熟度评估

| 项目 | 成熟度信号 | 风险点 |
|------|-----------|--------|
| **OpenClaw** | 功能完整、架构清晰、Memory 系统深入 | P1 Bug 积压严重，版本稳定性存疑（v2026.6.11 多项回归） |
| **Hermes Agent** | v0.18.0 包含 25 万行新增代码，370+ 贡献者 | 破坏性变更风险高，平台适配器可靠性不足 |
| **cc-haha** | Issue 响应及时，版本迭代规范 | 核心贡献者集中（@zhbdesign），单点依赖风险 |
| **Codex++** | 版本发布频繁，修复效率可观 | 长期未解决 Issue 较多（#480 约 31 天），性能问题持续 |

### 6.3 积压健康度

| 项目 | 长期未解决 Issue（>30 天） | PR 积压（>7 天未合并） | 评估 |
|------|---------------------------|----------------------|------|
| OpenClaw | 未明确披露 | 410 条待合并 | ⚠️ 需关注 |
| Hermes Agent | 8 个（#5712、#5879 等） | 4 个（#21774、#17480 等） | ⚠️ 需关注 |
| cc-haha | 0 个 | 1 个（#674，30+ 天） | ✅ 良好 |
| Codex++ | 4 个（#480、#766、#721 等） | 5 个待合并 | ⚠️ 需关注 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

**趋势 1：多渠道统一网关成为基础设施需求**

OpenClaw 的多渠道接入架构（10+ 渠道）和 Hermes Agent 的平台适配器生态表明，开发者越来越需要统一的智能体网关来整合分散的消息渠道。这一趋势对 AI 智能体开发者的启示：**构建渠道抽象层**是降低多平台适配成本的关键。

**趋势 2：Memory 系统从"锦上添花"变为"核心依赖"**

OpenClaw 的 memory-core、memory-wiki、session-memory 模块获得大量 PR 投入（今日 9 条相关 PR），Hermes Agent 的 Cron 结果注入需求（#5712）反映用户对**持久化上下文**的强烈诉求。趋势信号：**长期记忆、跨会话状态、语义检索**将成为下一代 AI 助手的标配功能。

**趋势 3：平台适配器可靠性是制约规模化的瓶颈**

iMessage sidecar 崩溃（Hermes #49858）、Telegram 消息丢失（OpenClaw #98777）、macOS AMFI 拦截（Codex++ #1207）等平台层问题集中爆发，揭示了当前生态的**系统性脆弱点**。对开发者的启示：在追求功能丰富度之前，需优先建立**平台适配器的容错、重连、监控**机制。

**趋势 4：安全与隐私从"附加项"变为"必选项"**

今日四个项目均有安全相关修复：OpenClaw 飞书 webhook 漏洞、cc-haha MCP secret 泄露、Codex++ 任意文件写入、Hermes Agent 命令执行绕过。随着 AI 助手处理敏感信息的场景增多，**安全设计需内嵌于架构层面**，而非事后打补丁。

**趋势 5：桌面端体验优化成为差异化竞争点**

cc-haha 聚焦桌面端 UI 优化（会话列表、Trace 页面、设置缓存），Codex++ 强化供应商诊断和会话管理功能。趋势信号：在核心功能趋同的情况下，**本地桌面客户端的响应速度、隐私保护、离线可用性**将成为用户选择的重要因素。

### 7.2 对 AI 智能体开发者的参考建议

| 优先级 | 建议 | 依据 |
|--------|------|------|
| **P0** | 建立平台适配器的容错与自动恢复机制 | 平台问题（iMessage、Telegram、macOS）是当前最高频投诉 |
| **P1** | 完善 Memory 系统的原子写入与损坏恢复 | OpenClaw 今日 2 条 P0 PR 修复文件写入原子性问题 |
| **P1** | 引入安全审计流程，覆盖命令执行、文件写入、消息隔离 | 各项目安全漏洞频发，社区对安全问题的容忍度降低 |
| **P2** | 优化 MCP 工具的跨环境路径解析 | MCP 工具问题在 OpenClaw、Codex++、Hermes 均出现 |
| **P2** | 关注 Token 消耗与上下文管理优化 | Hermes 用户质疑 16K tokens 消耗，cc-haha 用户反馈 Prompt 过长 |

---

## 总结

| 维度 | 核心结论 |
|------|----------|
| **生态态势** | 高速迭代与质量承压并存，功能推进积极但稳定性需加强 |
| **OpenClaw 定位** | 通用多渠道网关 + Memory 系统领先者，但 P1 Bug 积压需优先处理 |
| **共同挑战** | 平台适配器可靠性、MCP 工具兼容性、会话状态管理、安全隐私 |
| **成熟度分层** | Hermes Agent（生态最成熟）> cc-haha（质量巩固）> OpenClaw（功能爆发）> Codex++（快速修复） |
| **趋势信号** | 多渠道统一网关、持久化 Memory 系统、平台可靠性内建、安全设计前置、桌面端体验差异化 |

**建议行动项：**

1. **OpenClaw 维护团队**：优先处理 15 个 P1 Issue，尤其是 v2026.6.11 回归问题，建议尽快发布 patch
2. **Hermes Agent 维护团队**：加强平台适配器测试覆盖，重点解决 iMessage/BlueBubbles 可靠性问题
3. **cc-haha 维护团队**：加快 PR #674 审查，避免长期积压；考虑引入更多核心贡献者降低单点风险
4. **Codex++ 维护团队**：优先解决性能退化问题（#1278、#1269），加强 MCP 工具兼容性测试

---

*报告生成时间：2026-07-02*  
*数据来源：GitHub Issues/PRs 实时动态*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-07-02  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 项目保持极高活跃度：共处理 **114 条 Issues**（新开/活跃 102 条，关闭 12 条）和 **500 条 PRs**（待合并 382 条，已合并/关闭 118 条）。项目于 7 月 1 日发布了 **v0.18.0 "The Judgment Release"**，包含约 1,720 次提交、998 个合并 PR、2,215 个文件变更，吸引了 370+ 位社区贡献者。社区讨论集中在 Discord/BlueBubbles 平台适配器问题、Docker 环境下的文件权限与搜索功能缺陷，以及新版本升级后的兼容性问题。整体来看，项目处于快速迭代期，功能推进积极，但部分 P2 级别 Bug 尚未解决，需关注稳定性。

---

## 2. 版本发布

### v2026.7.1 — Hermes Agent v0.18.0 "The Judgment Release"

**发布日期：** 2026 年 7 月 1 日  
**发布链接：** https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.1

**本次更新亮点：**

| 指标 | 数值 |
|------|------|
| 提交数 | ~1,720 |
| 合并 PRs | 998 |
| 文件变更 | 2,215 |
| 代码新增 | ~251,000 行 |
| 代码删除 | ~41,000 行 |
| 关闭 Issues | 949 |
| 贡献者 | 370+ |

**破坏性变更提示：** 根据 Release 标题 "The Judgment Release" 推测，本次更新可能涉及判断逻辑或决策机制的调整，建议用户在新版本部署后密切关注 Agent 行为变化。

**迁移注意事项：** 暂无明确 breaking changes 披露，但鉴于代码量巨大（25 万行新增），建议在非生产环境先行验证。

---

## 3. 项目进展

过去 24 小时共合并/关闭 **118 条 PRs**，以下是评论最多的重要 PR：

### 已合并 PRs

| PR 链接 | 描述 | 状态 |
|---------|------|------|
| [#56763](https://github.com/NousResearch/hermes-agent/pull/56763) | feat(kanban): add safe Discord projection loop — 添加 Kanban Discord 父线程投影接缝和仅报告出站流程 | ✅ 已合并 |
| [#56728](https://github.com/NousResearch/hermes-agent/pull/56728) | fix(cwd): honor gateway session cwd in tool surfaces — 修复终端/文件/代码执行工具中的工作目录继承问题 | ✅ 已合并 |
| [#56707](https://github.com/NousResearch/hermes-agent/pull/56707) | fix(computer-use): guard against None pid/window_id from list_windows — 防止 Linux/WSL 下 X11 窗口列表返回空值导致的 TypeError | ✅ 已合并 |

### 待合并 PRs（重要功能）

| PR 链接 | 描述 | 优先级 |
|---------|------|--------|
| [#56671](https://github.com/NousResearch/hermes-agent/pull/56671) | fix(model): named custom providers keep their prefix and identity — 修复命名自定义 providers 的身份识别问题 | P2 |
| [#56751](https://github.com/NousResearch/hermes-agent/pull/56751) | fix(auth): use SameSite=None for PKCE cookie over HTTPS — 修复 OAuth 登录在 Electron/Chromium 中间歇性失败 | P2 |
| [#56766](https://github.com/NousResearch/hermes-agent/pull/56766) | feat: add --board flag on kanban create and prompt_file for cronjob tool | P3 |
| [#56104](https://github.com/NousResearch/hermes-agent/pull/56104) | fix(desktop): preserve multi-round streamed text in message.complete — 修复桌面端多轮流式文本丢失问题 | P3 |
| [#41561](https://github.com/NousResearch/hermes-agent/pull/41561) | fix(skills): resolve ${HERMES_SKILL_DIR} to backend-visible paths on remote terminal backends — 修复 Docker/Singularity 等远程后端的技能目录路径解析 | P2 |
| [#48342](https://github.com/NousResearch/hermes-agent/pull/48342) | fix(anthropic): enable fast mode for Opus 4.8 — 更新 Anthropic 快速模式支持列表以匹配 Opus 4.8 | P2 |

**项目整体评估：** 382 条 PR 待合并表明项目有较大的功能积压，但同时也显示社区贡献活跃。多个 P2 级别修复正在 review 中，预计近期将集中合并。

---

## 4. 社区热点

以下 Issues 和 PRs 引发最多讨论（按评论数排序）：

### 热门 Issues

| Issue 链接 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| [#5712](https://github.com/NousResearch/hermes-agent/issues/5712) | [Feature]: True Autonomy - Automatically Inject Cron Results into Live Gateway Chat Sessions | 11 | 用户希望 Cron 任务结果能自动注入到活跃的 Gateway 聊天会话中，实现真正的自主运行 |
| [#49858](https://github.com/NousResearch/hermes-agent/issues/49858) | Photon iMessage: sidecar death causes silent reconnect death spiral | 8 | iMessage 适配器的 sidecar 进程崩溃后无法自动恢复，导致静默重连死循环 |
| [#13983](https://github.com/NousResearch/hermes-agent/issues/13983) | [Bug]: 16K Tokens consumption by default | 6 | 用户质疑默认安装下 "who u?" 提示消耗 16K tokens 是否正常 |
| [#56524](https://github.com/NousResearch/hermes-agent/issues/56524) | Telegram in-band hermes update can leave launchd gateway offline | 6 | Telegram 会话内执行更新可能导致 macOS launchd 网关离线 |
| [#5879](https://github.com/NousResearch/hermes-agent/issues/5879) | openai-codex provider always returns response.output is empty | 6 | Codex provider 端点损坏，返回空输出 |

### 热门 PRs

| PR 链接 | 标题 | 状态 |
|---------|------|------|
| [#56763](https://github.com/NousResearch/hermes-agent/pull/56763) | feat(kanban): add safe Discord projection loop | 已合并 |
| [#56671](https://github.com/NousResearch/hermes-agent/pull/56671) | fix(model): named custom providers keep their prefix and identity | 待合并 |

**热点分析：**
- **自主性增强**（#5712）是社区强烈诉求，11 个点赞表明用户期待更智能的 Cron 与实时会话集成
- **平台稳定性**问题（iMessage、Discord、Telegram）持续困扰用户，平台适配器可靠性需重点关注
- **Token 消耗**问题（#13983）反映用户对成本控制的关注，可能需要优化默认 prompt 长度

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### P0 - 紧急

| Issue 链接 | 描述 | 状态 |
|------------|------|------|
| [#36846](https://github.com/NousResearch/hermes-agent/issues/36846) | Security: dangerous-command denylist is bypassable with trivial shell escapes → silent RCE | ⚠️ 已关闭（需确认修复状态） |

**风险：** 命令执行安全黑名单可被简单 shell 转义绕过，存在静默远程代码执行风险。

### P1 - 高优先级

| Issue 链接 | 描述 | 状态 |
|------------|------|------|
| [#26530](https://github.com/NousResearch/hermes-agent/issues/26530) | codex app-server tool calls fail closed on gateway with no surfaceable approval prompt | ⚠️ 已关闭（需确认修复状态） |

### P2 - 中优先级

| Issue 链接 | 描述 | 是否有 Fix PR |
|------------|------|---------------|
| [#49858](https://github.com/NousResearch/hermes-agent/issues/49858) | Photon iMessage sidecar 崩溃后静默重连死循环 | ❌ 无 |
| [#56524](https://github.com/NousResearch/hermes-agent/issues/56524) | Telegram 内更新导致 launchd 网关离线 | ❌ 无 |
| [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | auto_thread disabled for free_response_channels breaks legitimate use case | ❌ 无 |
| [#17144](https://github.com/NousResearch/hermes-agent/issues/17144) | Docker agent/tool memory writes create root-owned files | ❌ 无 |
| [#49445](https://github.com/NousResearch/hermes-agent/issues/49445) | search.exa 在官方 Docker 镜像中完全不可用 | ❌ 无 |
| [#55265](https://github.com/NousResearch/hermes-agent/issues/55265) | Cron delivery to private chat forum-topics lands in General | ❌ 无 |
| [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) | BlueBubbles adapter lacks inbound dedup → duplicate processing | ❌ 无 |
| [#34372](https://github.com/NousResearch/hermes-agent/issues/34372) | BlueBubbles webhook auto-registration includes 'updated-message' causing double processing | ❌ 无 |
| [#56717](https://github.com/NousResearch/hermes-agent/issues/56717) | non-default profile can keep stale runtime after update | ❌ 无 |
| [#56671](https://github.com/NousResearch/hermes-agent/pull/56671) | named custom providers identity issue | ✅ 有 Fix PR |

### P3 - 低优先级

| Issue 链接 | 描述 | 是否有 Fix PR |
|------------|------|---------------|
| [#56533](https://github.com/NousResearch/hermes-agent/issues/56533) | /journey slash command leaks raw ANSI escape codes | ❌ 无 |
| [#55658](https://github.com/NousResearch/hermes-agent/issues/55658) | Desktop app cannot be started after updating | ❌ 无 |
| [#53049](https://github.com/NousResearch/hermes-agent/issues/53049) | Desktop left menu keeps refreshing, high CPU usage | ❌ 无 |
| [#31335](https://github.com/NousResearch/hermes-agent/issues/31335) | hermes-codex-bug-report: image_gen plugin fails | ❌ 无 |

**稳定性评估：** 今日新增多个 P2 Bug，尤其集中在平台适配器（iMessage、Discord、Telegram、BlueBubbles）和 Docker 环境。建议优先处理 #49858（iMessage 静默死循环）和 #49445（Docker 搜索不可用），这两个问题直接影响核心功能可用性。

---

## 6. 功能请求与路线图信号

### 高关注度功能请求

| Issue 链接 | 标题 | 点赞数 | 评估 |
|------------|------|--------|------|
| [#5712](https://github.com/NousResearch/hermes-agent/issues/5712) | True Autonomy - Cron Results 自动注入 Live Gateway | 11 | 社区强烈需求，已有详细设计提案，可能纳入后续版本 |
| [#466](https://github.com/NousResearch/hermes-agent/issues/466) | feat: File transfer between sandboxed environments and users | 1 | 沙箱环境文件传输功能，提案完整，实现价值高 |
| [#10572](https://github.com/NousResearch/hermes-agent/issues/10572) | Support payload filtering or script param in webhooks | 2 | Webhook 过滤需求，与 Todoist 集成场景相关 |
| [#37543](https://github.com/NousResearch/hermes-agent/issues/37543) | Feature: i18n/Localization support — configurable UI language | 0 | 国际化需求，长期呼声，但实现工作量较大 |
| [#16493](https://github.com/NousResearch/hermes-agent/issues/16493) | Proposal: Move Hermes toward a more progressive-loading architecture | 0 | 渐进式加载架构提案，方向性建议，可能影响长期架构 |
| [#56762](https://github.com/NousResearch/hermes-agent/issues/56762) | Context Management Optimization: Conditional Injection for Tool Results | 0 | 上下文管理优化，减少 token 浪费 |

### 可能的下一版本功能

根据已有 PR 判断，以下功能可能近期合并：

| PR 链接 | 功能 | 评估 |
|---------|------|------|
| [#56766](https://github.com/NousResearch/hermes-agent/pull/56766) | kanban create 增加 --board 标志 | 小功能，易合并 |
| [#16634](https://github.com/NousResearch/hermes-agent/pull/16634) | opt-in native Codex web search support | 重要功能扩展 |
| [#15205](https://github.com/NousResearch/hermes-agent/pull/15205) | honor pre_llm_call short_circuit_response | 插件系统增强 |

---

## 7. 用户反馈摘要

### 真实痛点

1. **Docker 环境配置复杂**
   - Exa 搜索在官方 Docker 镜像中完全不可用（#49445）
   - Docker 环境下文件权限问题导致 root-owned 文件无法被网关用户读取（#17144）
   - 远程后端（Docker/SSH）技能目录路径解析错误（#41561）

2. **平台适配器可靠性不足**
   - iMessage sidecar 崩溃后无法自动恢复（#49858）
   - BlueBubbles 重复处理消息（#30708、#34372）
   - Discord auto_thread 在 free_response_channels 中被禁用（#26058）

3. **升级风险**
   - Telegram 内更新可能导致网关离线（#56524）
   - 非默认 profile 升级后保留陈旧运行时（#56717）
   - 桌面端升级后无法启动（#55658）

### 用户满意点

- 项目迭代速度快，v0.18.0 包含大量改进
- 370+ 社区贡献者表明生态健康
- 功能丰富（Kanban、Skills、Memory、Delegation、Cron 等）

### 成本与效率关注

- 用户质疑默认安装下 16K tokens 消耗是否正常（#13983）
- 上下文管理优化需求（#56762）反映长对话场景下的 token 浪费问题

---

## 8. 待处理积压

以下 Issues/PRs 长期未解决或未响应，建议维护者关注：

### 长期开放 Issues（超过 30 天未解决）

| Issue 链接 | 创建日期 | 标题 | 优先级 |
|------------|----------|------|--------|
| [#5712](https://github.com/NousResearch/hermes-agent/issues/5712) | 2026-04-07 | True Autonomy - Cron Results 自动注入 | P2 |
| [#5879](https://github.com/NousResearch/hermes-agent/issues/5879) | 2026-04-07 | openai-codex provider 返回空输出 | P2 |
| [#466](https://github.com/NousResearch/hermes-agent/issues/466) | 2026-03-06 | 沙箱环境文件传输功能 | P2 |
| [#17144](https://github.com/NousResearch/hermes-agent/issues/17144) | 2026-04-28 | Docker 文件权限问题 | P2 |
| [#18019](https://github.com/NousResearch/hermes-agent/issues/18019) | 2026-04-30 | Stream stalled mid tool-call | P2 |
| [#27284](https://github.com/NousResearch/hermes-agent/issues/27284) | 2026-05-17 | Memory 和 MCP 提示注入扫描器漏检 | P3 |
| [#30708](https://github.com/NousResearch/hermes-agent/issues/30708) | 2026-05-23 | BlueBubbles 重复处理消息 | P2 |
| [#34372](https://github.com/NousResearch/hermes-agent/issues/34372) | 2026-05-29 | BlueBubbles webhook 双处理问题 | P2 |

### 长期未合并 PRs

| PR 链接 | 创建日期 | 标题 | 状态 |
|---------|----------|------|------|
| [#21774](https://github.com/NousResearch/hermes-agent/pull/21774) | 2026-05-08 | fix: harden Google Workspace OAuth setup | 待合并 |
| [#17480](https://github.com/NousResearch/hermes-agent/pull/17480) | 2026-04-29 | fix(auth): resolve Codex usage credentials from auth fallbacks | 待合并 |
| [#16634](https://github.com/NousResearch/hermes-agent/pull/16634) | 2026-04-27 | feat: add opt-in native Codex web search support | 待合并 |
| [#15205](https://github.com/NousResearch/hermes-agent/pull/15205) | 2026-04-24 | fix(plugins): honor pre_llm_call short_circuit_response | 待合并 |

**积压评估：** 存在多个创建于 4-5 月的 Issues/PRs 仍未解决，可能需要人手分配或优先级调整。建议对 P2 及以上问题进行 triage，确保关键问题不被遗漏。

---

## 总结

| 维度 | 评估 |
|------|------|
| **活跃度** | 🔥 极高（500 PRs / 24h） |
| **版本发布** | ✅ 刚发布 v0.18.0 |
| **Bug 压力** | ⚠️ 中高（多个 P2 未解决） |
| **功能推进** | ✅ 积极（382 PRs 待合并） |
| **社区参与** | ✅ 健康（370+ 贡献者） |
| **稳定性** | ⚠️ 需关注（平台适配器问题集中） |

**建议行动项：**
1. 优先处理 iMessage side

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-07-02  
**项目**: Claude Code Haha (cc-haha)  
**GitHub**: https://github.com/NanmiCoder/cc-haha

---

## 1. 今日速览

2026-07-02 期间，cc-haha 项目保持高度活跃。社区共提交 **38 条 Issues**（其中 8 条新开/活跃，30 条已关闭），合并 **7 条 Pull Requests**，另有 **3 条 PR 待合并**。项目于今日发布了 **v0.4.4 稳定版本**，聚焦桌面体验优化与后台任务稳定性修复。从 Issue 关闭效率来看，维护团队响应迅速，24 小时内关闭率达 78.9%，项目健康度良好。

---

## 2. 版本发布

### v0.4.4 发布 ✅

**发布时间**: 2026-07-02  
**发布类型**: 稳定版补丁 (Patch Release)  
**变更范围**: 桌面端 / 服务端 / Agent Loop

**核心改进**:

| 领域 | 修复内容 |
|------|----------|
| **后台任务** | Agent 任务在前台回答结束后仍可见，减少任务通知回灌噪音 |
| **Session 预热** | 修复预热竞争条件、历史会话误预热问题 |
| **Provider/Proxy** | 修复 CLI-only provider proxy、loopback proxy 问题 |
| **安全** | 修复 MCP secret 展示漏洞 |
| **Trace** | 修复 Trace 删除功能及 provider 相关问题 |
| **隐私** | 优化设置页面隐私保护 |
| **浏览器预览** | 修复 Markdown 文件预览行为 |
| **Windows** | 修复窗口拖动与边框行为 |

**破坏性变更**: 无  
**迁移注意事项**: 建议从 v0.4.3 直接升级至 v0.4.4

🔗 https://github.com/NanmiCoder/cc-haha/releases/tag/v0.4.4

---

## 3. 项目进展

### 已合并 PRs (7 条)

| PR | 作者 | 类型 | 范围 | 说明 |
|----|------|------|------|------|
| #913 | @zhbdesign | Bug Fix | desktop | 修复服务商保存速度慢，添加防重复提交 |
| #881 | @zhbdesign | Bug Fix | server | 标题生成未正确调用模型接口 |
| #921 | @zhbdesign | Bug Fix | desktop | 修复新会话运行按钮转为停止按钮的延迟 |
| #925 | @zhbdesign | Enhancement | desktop/server | 优化会话列表加载性能，会话标题添加气泡 |
| #927 | @zhbdesign | Enhancement | desktop | 优化切换项目提示词消失 |
| #930 | @zhbdesign | Enhancement | desktop | 优化 Settings/Scheduled/Traces 等非 session tab 切换缓存 |
| #931 | @zhbdesign | Enhancement | desktop/server | 优化 trace 加载页大小，增加清空按钮 |

**进展评估**: 本周期合并的 PR 全部来自核心贡献者 @zhbdesign，主要聚焦桌面端 UX 优化与 bug 修复，项目迭代节奏稳定。

🔗 https://github.com/NanmiCoder/cc-haha/pulls?q=is%3Apr+merged%3A2026-07-01..2026-07-02

### 待合并 PRs (3 条)

| PR | 作者 | 类型 | 范围 | 说明 |
|----|------|------|------|------|
| #674 | @yangzexuan-cc | Enhancement | desktop/server | 隐藏文件控制、软连接支持、文件监听、Markdown PlantUML/SVG/公式渲染 |
| #946 | @706412584 | Enhancement | 多模块 | 侧边栏添加"复制会话文件路径"和"在文件管理器中打开"功能 |
| #945 | @706412584 | Enhancement | 多模块 | H5 Access 一键 Cloudflare Tunnel 公网访问 |

**待关注**: PR #674 体积为 XXL，涉及多模块改动，需维护者重点审查。

🔗 https://github.com/NanmiCoder/cc-haha/pulls?q=is%3Apr+is%3Aopen+updated%3A%3E%3D2026-07-01

---

## 4. 社区热点

### 热门 Issues（按评论数排序）

| Issue | 作者 | 评论数 | 状态 | 主题 |
|-------|------|--------|------|------|
| [#857](https://github.com/NanmiCoder/cc-haha/issues/857) | @zlt2000 | 4 | CLOSED | v0.4.3 启动失败 (Server healthcheck failed) |
| [#836](https://github.com/NanmiCoder/cc-haha/issues/836) | @ghostboyzone | 3 | CLOSED | OpenAI chat/response 协议 trace 未记录请求头 |
| [#819](https://github.com/NanmiCoder/cc-haha/issues/819) | @zhbdesign | 3 | CLOSED | Markdown 预览默认使用内置浏览器问题 |
| [#813](https://github.com/NanmiCoder/cc-haha/issues/813) | @zhbdesign | 3 | CLOSED | 运行中时间不更新 |
| [#810](https://github.com/NanmiCoder/cc-haha/issues/810) | @zhbdesign | 3 | CLOSED | 添加服务商时重复提交问题 |

### 热点分析

**核心诉求**: 本周期社区反馈集中在 **桌面端稳定性** 与 **用户体验细节**。

1. **启动/连接问题** (#857, #859, #947): 多名用户报告启动失败或模型连接异常，涉及 healthcheck、proxy 冲突等场景。
2. **Trace 功能** (#836, #868): Trace 页面的请求头记录与手动删除功能存在痛点。
3. **UI/UX 问题** (#813, #819, #811): 时间显示、浏览器预览、设置缓存等细节问题频繁出现。

**社区活跃度**: 核心贡献者 @zhbdesign 持续参与 Issue 讨论与 PR 提交，社区参与度较高。

🔗 https://github.com/NanmiCoder/cc-haha/issues?q=is%3Aissue+updated%3A%3E%3D2026-07-01

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#857](https://github.com/NanmiCoder/cc-haha/issues/857) | v0.4.3 启动失败 (Server healthcheck failed) | CLOSED | - |
| [#947](https://github.com/NanmiCoder/cc-haha/issues/947) | 无法正常连接 LongCat 2.0 模型 (HTTP 404) | OPEN | - |
| [#884](https://github.com/NanmiCoder/cc-haha/issues/884) | v0.4.3 工具调用卡住，权限不询问 | CLOSED | - |
| [#889](https://github.com/NanmiCoder/cc-haha/issues/889) | v0.4.3 工具调用卡住 | CLOSED | - |

### 严重程度：中 🟡

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#936](https://github.com/NanmiCoder/cc-haha/issues/936) | 新会话开始后几轮对话思考时间过长 | OPEN | - |
| [#944](https://github.com/NanmiCoder/cc-haha/issues/944) | v0.4.4 仍无法读取图片 | OPEN | - |
| [#894](https://github.com/NanmiCoder/cc-haha/issues/894) | 经常出现 client_api_request_failed | CLOSED | - |
| [#896](https://github.com/NanmiCoder/cc-haha/issues/896) | v0.4.3 与 dev-sidecar 代理冲突 | CLOSED | - |

### 严重程度：低 🟢

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#819](https://github.com/NanmiCoder/cc-haha/issues/819) | Markdown 预览缓存问题 | CLOSED | - |
| [#813](https://github.com/NanmiCoder/cc-haha/issues/813) | 运行时间不更新 | CLOSED | - |
| [#811](https://github.com/NanmiCoder/cc-haha/issues/811) | 设置页面切换后重置 | CLOSED | PR #930 |

**稳定性评估**: 高优先级 bug 多已关闭，但仍有 2 个 open 的高/中优先级问题待处理（#936, #944, #947）。建议优先跟进图片读取与模型连接问题。

---

## 6. 功能请求与路线图信号

### 用户功能请求

| Issue | 作者 | 请求内容 | 潜在价值 |
|-------|------|----------|----------|
| [#901](https://github.com/NanmiCoder/cc-haha/issues/901) | @zhbdesign | Goal 模式下，end_turn 后轮次间添加标识 | UI 体验优化 |
| [#868](https://github.com/NanmiCoder/cc-haha/issues/868) | @aeng7832118 | Trace 页面添加手动删除会话功能 | 数据管理 |
| [#860](https://github.com/NanmiCoder/cc-haha/issues/860) | @daviddalao | Prompt is too long 问题 | 稳定性 |

### 路线图信号（从 Open PRs 判断）

| PR | 功能 | 覆盖范围 | 纳入可能性 |
|----|------|----------|------------|
| #674 | 隐藏文件控制、软连接、PlantUML/SVG/公式渲染 | desktop/server | 高（功能完整） |
| #946 | 侧边栏复制会话路径/文件管理器打开 | 多模块 | 高（用户体验增强） |
| #945 | H5 一键 Cloudflare Tunnel | 多模块 | 中（依赖外部服务） |

**建议**: PR #674 和 #946 功能完整且覆盖核心场景，预计下一版本可能纳入。

---

## 7. 用户反馈摘要

### 正面反馈

- **版本迭代快**: 用户对 v0.4.4 的后台任务可见性改进表示认可
- **响应及时**: Issue #857 等高优先级问题在 24 小时内关闭

### 痛点与不满

1. **稳定性问题**: 多名用户反馈 v0.4.3 启动失败、工具调用卡住、代理冲突
2. **图片功能**: #944 报告 v0.4.4 仍无法读取图片，期望尽快修复
3. **UI 细节**: 设置缓存、预览行为、时间显示等细节问题影响使用体验
4. **Trace 功能**: 请求头记录缺失、手动删除功能缺失

### 典型场景

- **Windows 用户**: 窗口拖动、代理冲突问题集中
- **定时任务用户**: #846, #847 反馈超时机制与权限设置问题
- **H5 用户**: #945 PR 响应公网访问需求

---

## 8. 待处理积压

### 长期未响应 Issues (>7 天)

| Issue | 创建时间 | 主题 | 优先级 |
|-------|----------|------|--------|
| [#936](https://github.com/NanmiCoder/cc-haha/issues/936) | 2026-06-28 | 新会话思考时间过长 | 中 |
| [#944](https://github.com/NanmiCoder/cc-haha/issues/944) | 2026-06-30 | 无法读取图片 | 中 |
| [#947](https://github.com/NanmiCoder/cc-haha/issues/947) | 2026-07-01 | LongCat 2.0 模型连接失败 | 高 |

### 待审查 PRs

| PR | 创建时间 | 状态 | 建议 |
|----|----------|------|------|
| #674 | 2026-05-31 | OPEN | 体积大，建议尽快审查 |
| #946 | 2026-07-01 | OPEN | 功能清晰，建议优先 |
| #945 | 2026-06-30 | OPEN | 功能清晰，建议优先 |

**提醒维护者**: PR #674 自 5 月 31 日创建，已超过 30 天，建议尽快安排审查。

---

## 总结

| 维度 | 状态 | 评分 |
|------|------|------|
| **活跃度** | 高 | ⭐⭐⭐⭐⭐ |
| **响应速度** | 快 | ⭐⭐⭐⭐⭐ |
| **版本迭代** | 稳定 | ⭐⭐⭐⭐ |
| **Bug 修复** | 良好 | ⭐⭐⭐⭐ |
| **积压处理** | 需关注 | ⭐⭐⭐ |

**建议行动项**:
1. 优先处理 #944（图片读取）和 #947（模型连接）问题
2. 审查并合并 #946、#945（功能清晰）
3. 加快 #674 的审查进度

---

*报告生成时间: 2026-07-02*  
*数据来源: GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-07-02  
**数据来源：** github.com/BigPizzaV3/CodexPlusPlus

---

## 1. 今日速览

2026年7月2日，Codex++ 项目保持高度活跃，共产生 **34 条 Issue 更新**（新开/活跃 26 条，关闭 8 条）和 **6 条 PR 更新**（待合并 5 条，已合并 1 条）。项目一口气发布 **3 个版本**（v1.2.26 → v1.2.28），重点修复了会话移动、供应商诊断等核心问题。社区讨论热度较高，集中在会话管理、MCP 工具调用、macOS 兼容性等老问题上。整体来看，项目迭代节奏紧凑，修复效率可观，但部分历史遗留问题（如 node_repl 工具通道、macOS AMFI 拦截）仍需持续关注。

---

## 2. 版本发布

### 🔗 v1.2.28
**发布时间：** 2026-07-02  
**更新内容：**
- 合并 stepwise 与本轮界面/诊断相关改动
- 新增**供应商诊断弹框**与逐项进度展示
- 恢复 Codex 图标、Windows/macOS zip release 产物流程
- 版本号更新到 1.2.28

**验证方式：** `npm run check` | `cargo test -p codex-plus-manager` | `cargo test -p codex-plus-core` | `cargo test -p codex-plus-data`

---

### 🔗 v1.2.27
**发布时间：** 2026-07-01  
**更新内容：**
- 修复新版 Codex 下会话移动依赖旧前端 asset hash 导致失败的问题
- 修复会话移动时查到旧 SQLite 数据库导致 Thread not found 的问题
- 修复移动到普通会话后项目状态残留、Provider Sync 恢复旧 cwd 的问题
- 改进会话移动相关诊断信息

**验证方式：** `node tools/i18n-verify.mjs` | `npm run check` | `cargo test -p codex-plus-core` | `cargo test -p codex-plus-data` | `npm run build`

---

### 🔗 v1.2.26
**发布时间：** 2026-07-01  
**更新内容：**
- 移除特殊插件强制安装功能，保留插件市场解锁等其他增强
- 更新 Codex++ 图标资源
- 修复 config.toml UTF-8 BOM 解析/写入兼容问题
- 版本升级到 1.2.26

**验证方式：** `node tools/i18n-verify.mjs` | `npm run check` | `cargo test -p codex-plus-core` | `npm run build`

---

## 3. 项目进展

### ✅ 已合并 PR

| PR | 作者 | 描述 | 状态 |
|----|------|------|------|
| [#374](https://github.com/BigPizzaV3/CodexPlusPlus/pull/374) | @nanshanzhaoji | fix: map codex-auto-review model to user-configured model | **CLOSED** |

**说明：** 该 PR 在 `protocol proxy` 中添加 `normalize_model_name()` 函数，将第三方 API（如 DeepSeek）不识别的 `codex-auto-review` 模型名映射到用户配置的模型，解决了使用第三方供应商时守护子代理模型名称不匹配的问题。

---

### ⏳ 待合并 PR（5 条）

| PR | 作者 | 描述 | 关联 Issue |
|----|------|------|------------|
| [#1293](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1293) | @577fkj | fix: tolerate Windows reserved launcher ports | - |
| [#1292](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1292) | @Dawninnng | fix: strip image_url for text-only models (DeepSeek) | - |
| [#1089](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1089) | @moooyy | fix: enable native fast service tier for API-key auth | - |
| [#1290](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1290) | @lzx8589561 | Fix macOS backend reconnect after sleep | - |
| [#1283](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1283) | @0xTotoroX | 改进 Stepwise 刷新控制和回答检测 | - |

**亮点 PR 解读：**

- **#1293** 修复 Windows 保留端口导致的 Codex++ 启动失败问题，提升 Windows 平台兼容性。
- **#1292** 为纯文本模型（如 DeepSeek）剥离 `image_url` 字段，解决图片相关参数在文本模型上的兼容性问题。
- **#1290** 为 macOS 静默启动路径添加 bridge watchdog，检测并重新注入过期的 CDP bridge，修复睡眠/唤醒后的后端重连问题。
- **#1283** 在 Stepwise 面板标题栏增加刷新按钮，增强回答定位稳定性，改善长对话场景下的用户体验。

---

## 4. 社区热点

### 🔥 评论最多的 Issues

| Issue | 作者 | 评论数 | 状态 | 摘要 |
|-------|------|--------|------|------|
| [#1016](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1016) | @sky0602 | 11 | CLOSED | 移动失败:Unsupported local storage schema |
| [#480](https://github.com/BigPizzaV3/CodexPlusPlus/issues/480) | @stinnner | 6 | OPEN | fast 按钮消失 |
| [#1278](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1278) | @9527-git | 4 | OPEN | 越更新越卡 |
| [#1167](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1167) | @liao924 | 4 | CLOSED | 使用内置浏览器后自动退出 |
| [#1255](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1255) | @feigeasd | 4 | OPEN | codex 无法正常调用 MCP Node REPL 工具 |
| [#1269](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1269) | @Danborad | 4 | OPEN | 软件卡死，电脑风扇起飞 |

**热点分析：**

1. **会话移动问题持续发酵**（#1016, 11 条评论）：这是本周期讨论最激烈的话题，用户反馈将对话移动到新项目文件夹时报错 "Unsupported local storage schema"。虽然该 Issue 已关闭，但相关问题在 #1282 中仍有延续。

2. **性能问题引发不满**（#1278, #1269）：多名用户反映"越更新越卡"、"添加供应商后卡死"，电脑风扇狂转。这类问题严重影响用户体验，需优先排查。

3. **MCP 工具调用问题突出**（#1255, #1271）：多个用户报告 node_repl/js 工具通道无法暴露或接上，导致依赖 MCP 的插件/技能无法正常使用。该问题已存在多个版本，建议优先处理。

---

## 5. Bug 与稳定性

### 🚨 高优先级 Bug

| Issue | 作者 | 严重程度 | 状态 | 说明 |
|-------|------|----------|------|------|
| [#1270](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1270) | @asmit25805 | 🔴 安全 | CLOSED | 🔒 Arbitrary file write via unchecked backup path（任意文件写入漏洞） |
| [#1143](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1143) | @EOS-cino | 🔴 高 | OPEN | 打开软件后坚持不到一分钟自动卡死闪退，风扇狂转 |
| [#1269](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1269) | @Danborad | 🔴 高 | OPEN | 添加 kimchi 供应商后卡死，无法切换供应商 |
| [#1207](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1207) | @sunleo994946-source | 🔴 高 | OPEN | macOS 15.7.5 (Sequoia) 上管理工具完全无法运行 - AMFI 拦截 |
| [#1288](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1288) | @chongbaak | 🔴 高 | OPEN | Mac 的 codex++ 管理工具打不开，闪退 |

**安全漏洞警示：**
[#1270](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1270) 报告了 `crates/codex-plus-data/src/storage.rs` 中 `undo` 函数存在任意文件写入漏洞（Confidence: 96%），攻击者可通过构造恶意 backup JSON 写入任意路径。该 Issue 已关闭，建议确认是否已在最新版本中修复。

---

### ⚠️ 中等优先级 Bug

| Issue | 作者 | 状态 | 说明 |
|-------|------|------|------|
| [#1255](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1255) | @feigeasd | OPEN | MCP Node REPL 工具无法调用 |
| [#1271](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1271) | @xuan-lin-616 | OPEN | node_repl/js 工具通道无法暴露/无法接上 |
| [#1057](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1057) | @li9270501-design | OPEN | 无法刷新对话，无法恢复历史会话 |
| [#1291](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1291) | @Romantic8888 | OPEN | 无法新建会话，Timeout |
| [#1296](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1296) | @qingcejiandi | OPEN | 配置 DeepSeek 但实际请求了 GPT 模型 |
| [#1262](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1262) | @yangych2011 | OPEN | OpenAI 官方 Provider 无法显示历史会话 |

---

## 6. 功能请求与路线图信号

### 📋 新功能请求

| Issue | 作者 | 功能描述 | 潜在价值 |
|-------|------|----------|----------|
| [#1295](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1295) | @davanchen | 增加 fetch bridge，解决用户脚本受 CSP/CORS 限制的问题 | ⭐⭐⭐ 高 |
| [#1294](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1294) | @Kindred0126 | codex 多开功能，支持同时使用多个不同模型 | ⭐⭐ 高 |
| [#1289](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1289) | @cnleken | 减少审批弹窗频率 | ⭐⭐ 中 |
| [#1273](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1273) | @YMRwithNoworry | 关闭时最小化不再询问 | ⭐ 低 |

**路线图信号分析：**

1. **Fetch Bridge**（#1295）：用户脚本在 Codex 页面环境中受浏览器 CSP、CORS、Private Network Access 限制，无法稳定调用外部 API。该需求合理，若实现将大幅提升用户脚本的扩展能力。

2. **多开功能**（#1294）：用户希望同时使用不同模型（如 DeepSeek 做代码修改，GPT 做规划），目前只能手动切换。若实现，需考虑会话隔离、状态管理等复杂性。

---

## 7. 用户反馈摘要

### 😠 主要痛点

| 痛点 | 相关 Issue | 用户声音 |
|------|------------|----------|
| **性能下降** | #1278, #1269, #1143 | "越更新越烂，越用越卡"、"添加供应商后卡死，风扇起飞" |
| **会话管理问题** | #1016, #1057, #1291 | "移动对话失败"、"无法刷新对话"、"无法新建会话" |
| **MCP 工具失效** | #1255, #1271 | "涉及调用 MCP 工具的插件/技能全部无法正常使用" |
| **macOS 兼容性问题** | #1207, #1288, #721 | "管理工具完全无法打开"、"AMFI 内核级拦截" |

### 😊 正面反馈

- v1.2.27 修复会话移动问题后，相关 Issue（#1016, #1282）已关闭
- v1.2.28 新增供应商诊断弹框获得期待
- 社区活跃度高，维护者响应及时

---

## 8. 待处理积压

### ⚠️ 长期未解决的重要 Issue

| Issue | 创建时间 | 未响应天数 | 说明 | 优先级 |
|-------|----------|------------|------|--------|
| [#480](https://github.com/BigPizzaV3/CodexPlusPlus/issues/480) | 2026-06-01 | ~31 天 | fast 按钮消失，影响 UI 交互 | 🔴 高 |
| [#766](https://github.com/BigPizzaV3/CodexPlusPlus/issues/766) | 2026-06-08 | ~24 天 | 后端连接总是断开，需重启 | 🟡 中 |
| [#721](https://github.com/BigPizzaV3/CodexPlusPlus/issues/721) | 2026-06-06 | ~26 天 | MAC 重新安装后无法启动 | 🔴 高 |
| [#1207](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1207) | 2026-06-25 | ~7 天 | macOS Sequoia AMFI 拦截 | 🔴 高 |

**提醒维护者：**
- Issue #480（fast 按钮消失）已存在约一个月，6 条评论，仍未解决
- Issue #766（后端断开）用户明确反馈"长时间挂在后台不使用就断开"，影响日常使用
- macOS 兼容性问题（#1207, #1288, #721）集中爆发，建议优先排查

---

## 📊 数据总览

| 指标 | 数值 |
|------|------|
| Issue 更新（24h） | 34 条（新开/活跃 26，已关闭 8） |
| PR 更新（24h） | 6 条（待合并 5，已合并/关闭 1） |
| 新版本发布 | 3 个（v1.2.26 ~ v1.2.28） |
| 高优先级 Bug | 5 个（含 1 个安全漏洞） |
| 待合并 PR | 5 个 |
| 长期未解决 Issue | 4 个

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*