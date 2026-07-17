# OpenClaw 生态日报 2026-07-17

> Issues: 73 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-17 02:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-17  
**数据来源：** GitHub openclaw/openclaw 仓库

---

## 1. 今日速览

2026年7月17日，OpenClaw 项目保持极高活跃度。过去24小时内共产生 **73条 Issues 更新**（新开/活跃69条，关闭4条）和 **500条 PR 更新**（待合并336条，已合并/关闭164条），整体开发节奏稳健。今日未发布新版本，但社区讨论热度高涨，尤其是围绕 **Codex app-server 回归问题**、**WebSocket 会话稳定性** 以及 **多平台应用支持**（Linux/Windows）引发了大量技术讨论。值得注意的是，今日有多个 P0/P1 级 Bug 被报告，主要涉及消息丢失、会话状态异常和内存泄漏问题，需要维护团队重点关注。

---

## 2. 版本发布

**今日无新版本发布。**

最近一个版本为 2026.7.1，相关变更请参阅 [Release 页面](https://github.com/openclaw/openclaw/releases)。

---

## 3. 项目进展

过去24小时内，项目共合并/关闭了 **164条 Pull Requests**。以下是推进了重要功能或修复的代表性 PR：

### 已合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#109212](https://github.com/openclaw/openclaw/pull/109212) | feat: add native inline widget support | CLOSED | 解决 Control UI 与原生客户端 widget 渲染不一致问题，支持 iOS/Android/macOS 内联组件 |
| [#102296](https://github.com/openclaw/openclaw/pull/102296) | Add plan-first Claw status and remove | OPEN | 添加 `claws status` 命令和 `claws remove` 干运行验证机制，安全性提升 |
| [#109388](https://github.com/openclaw/openclaw/pull/109388) | fix: keep /think and /verbose session prefs past freshness gate | OPEN | 修复会话首选项在新鲜度检查时被丢弃的问题 |
| [#109441](https://github.com/openclaw/openclaw/pull/109441) | fix(ui): follow Gateway queue mode for active-run messages | OPEN | 修复 Control UI 与 Gateway 队列模式不一致问题 |
| [#109233](https://github.com/openclaw/openclaw/pull/109233) | fix(file-transfer): denyPaths does not deny listing the denied directory itself | OPEN | 修复安全漏洞，denyPaths 现在正确拒绝目录列表访问 |
| [#97731](https://github.com/openclaw/openclaw/pull/97731) | fix(process): add zombie reaper to prevent child process leak | CLOSED | 解决 Docker 环境中僵尸进程累积问题（800+僵尸进程场景） |
| [#97633](https://github.com/openclaw/openclaw/pull/97633) | fix(acp): resolve delivery threadId from session deliveryContext | CLOSED | 修复 ACP 会话（如 Discord）无法正确路由回复到线程的问题 |
| [#100585](https://github.com/openclaw/openclaw/pull/100585) | fix(cli): harden JSON.parse in secrets apply and model-auth status | CLOSED | 加固 CLI 中 JSON.parse 调用，防止语法错误导致崩溃 |
| [#105835](https://github.com/openclaw/openclaw/pull/105835) | fix: inherit provider-level contextWindow/maxTokens when applying model defaults | CLOSED | 修复模型默认配置未继承 provider 级设置的问题 |

**项目整体评估：** 今日 PR 活动以 Bug 修复为主（特别是进程管理、配置继承、错误处理类），同时推进了跨平台 UI 一致性和安全加固功能。

---

## 4. 社区热点

以下 Issues 和 PRs 引发了最多的社区讨论和反馈：

### 讨论最活跃的 Issues

| 排名 | Issue 编号 | 评论数 | 标题 | 核心诉求 |
|------|-----------|--------|------|----------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) | 114 | Linux/Windows Clawdbot Apps | 社区强烈呼吁支持 Linux 和 Windows 平台，与 macOS/iOS/Android 功能看齐 |
| 2 | [#88312](https://github.com/openclaw/openclaw/issues/88312) | 21 | [Regression] Codex app-server turn-completion stall | 2026.5.27 版本引入回归，Codex 多工具代理回合可靠失败 |
| 3 | [#11665](https://github.com/openclaw/openclaw/issues/11665) | 11 | Webhook hook sessions should reuse existing session | Webhook 文档声称支持多轮会话，但实际实现总是生成新 session |
| 4 | [#38091](https://github.com/openclaw/openclaw/issues/38091) | 7 | WebSocket reconnect 导致会话 terminated | WSL2 环境下 WebSocket 频繁重连导致 AI 会话中断 |
| 5 | [#109421](https://github.com/openclaw/openclaw/issues/109421) | 5 | Timed-out Codex native hook relays can survive and exhaust memory | 超时 hook relay 进程未正确清理，可能耗尽主机内存 |

### 热点分析

**平台扩展需求突出：** Issue #75 自2026年1月创建以来持续保持高讨论量（114条评论），反映出社区对 Linux/Windows 客户端的强烈需求。维护者应考虑将其纳入路线图优先级。

**回归问题引发关注：** Issue #88312 涉及 Codex app-server 的回归问题，自5月30日创建以来已有21条评论，表明该问题影响了不少 Plus 用户。

---

## 5. Bug 与稳定性

今日共报告 **多个 P0/P1 级 Bug**，按严重程度排列如下：

### P0 级（紧急/发布阻塞）

| Issue 编号 | 标题 | 严重程度 | 是否有 Fix PR |
|-----------|------|----------|---------------|
| [#109420](https://github.com/openclaw/openclaw/issues/109420) | iOS app — agent visible but starting new chat does nothing | P0, UX release blocker | 无 |
| [#107347](https://github.com/openclaw/openclaw/issues/107347) | @qingchencloud/openclaw-zh@2026.7.1-zh.1 包含 workspace:* 协议依赖 | P0, npm install EUNSUPPORTEDPROTOCOL | 无 |

### P1 级（高优先级）

| Issue 编号 | 标题 | 影响范围 | 是否有 Fix PR |
|-----------|------|----------|---------------|
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall 回归 | 会话状态、消息丢失 | 无 |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | codex app-server: turn interrupted after client-delegated message tool result | 消息丢失 | 无 |
| [#109478](https://github.com/openclaw/openclaw/issues/109478) | Literal \n injected into multi-line tool-call string arguments | 跨模型、间歇性 | 无 |
| [#109465](https://github.com/openclaw/openclaw/issues/109465) | conversations/ directory not persisting + pre-compaction flush injects messages | 数据丢失 | 无 |
| [#109443](https://github.com/openclaw/openclaw/issues/109443) | Transcript repair drops tool results when tool-call ids repeat | 消息丢失 | 无 |
| [#109436](https://github.com/openclaw/openclaw/issues/109436) | Model fallback selection ignores candidate context windows | 会话状态 | 无 |
| [#109435](https://github.com/openclaw/openclaw/issues/109435) | Loop detection: global circuit breaker is unreachable | 崩溃循环 | 无 |
| [#105712](https://github.com/openclaw/openclaw/issues/105712) | Stuck-session recovery skips phantom embedded_run claims | 会话状态、消息丢失 | 无 |
| [#38091](https://github.com/openclaw/openclaw/issues/38091) | WebSocket reconnect 导致会话 terminated | 会话状态 | 无 |
| [#109488](https://github.com/openclaw/openclaw/issues/109488) | WhatsApp requireMention — native @-mentions short-circuit gating | 消息丢失 | 无 |
| [#109471](https://github.com/openclaw/openclaw/issues/109471) | Mattermost tool-error warning deletes streaming reply | 消息丢失 | 无 |
| [#109409](https://github.com/openclaw/openclaw/issues/109409) | @openclaw/feishu plugin cannot send DM replies — error 230101 | 飞书频道 | 无 |
| [#109527](https://github.com/openclaw/openclaw/issues/109527) | Ollama-backed models silently lose thinking level | 行为异常 | 无 |

### 稳定性风险提示

1. **消息丢失问题突出：** 今日有 **9个 P1 Issue** 涉及消息丢失（impact:message-loss），主要集中在 Codex 集成、WebSocket 会话、WhatsApp/飞书等渠道，建议优先排查核心消息路由逻辑。

2. **内存/进程泄漏：** Issue #109421 报告的 hook relay 内存耗尽问题与 Issue #97731（已合并）解决的僵尸进程问题相关，需验证修复是否完整。

3. **回归风险：** Issue #88312 涉及 2026.5.27 引入的回归，建议检查该版本的变更集。

---

## 6. 功能请求与路线图信号

以下功能请求具有较高的社区支持度或已有相关 PR 推进，可能被纳入下一版本：

### 高优先级功能请求

| Issue 编号 | 标题 | 优先级 | 相关 PR | 纳入可能性 |
|-----------|------|--------|---------|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | P2 | 无 | 中（社区呼声高） |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook sessions 多轮会话支持 | P2 | 无 | 高（文档承诺未实现） |
| [#10213](https://github.com/openclaw/openclaw/issues/10213) | Anthropic server-side compaction API 支持 | P2 | 无 | 中（依赖 API 发布） |
| [#11040](https://github.com/openclaw/openclaw/issues/11040) | First-class session/task chain tracking | P2 | 无 | 中（架构改进） |
| [#109402](https://github.com/openclaw/openclaw/issues/109402) | Add OS-level resource caps to exec budget primitive | P2 | 无 | 中（安全增强） |
| [#105025](https://github.com/openclaw/openclaw/pull/105025) | feat: add Twilio RCS channel | P3 | OPEN | 中（渠道扩展） |

### 路线图信号分析

1. **跨平台扩展：** Linux/Windows 客户端需求持续强劲（#75，114评论），建议评估开发成本与收益。

2. **Webhook 承诺未兑现：** Issue #11665 指出文档描述的多轮会话功能实际不可用，这是一个明确的技术债务点。

3. **Anthropic 集成深化：** Anthropic Opus 4.6 的 server-side compaction API 支持（#10213）将提升上下文管理效率。

---

## 7. 用户反馈摘要

从今日 Issues 评论和内容中提炼的真实用户痛点：

### 核心痛点

| 痛点类别 | 具体描述 | 相关 Issue |
|---------|----------|-----------|
| **平台缺失** | Linux/Windows 用户无法使用 OpenClaw 桌面应用，只能通过 CLI 或 Web UI | [#75](https://github.com/openclaw/openclaw/issues/75) |
| **回归问题** | 2026.5.27 后 Codex 多工具代理回合可靠失败，影响 Plus 用户核心体验 | [#88312](https://github.com/openclaw/openclaw/issues/88312) |
| **会话稳定性** | WebSocket 重连导致会话中断，WSL2 环境尤为严重 | [#38091](https://github.com/openclaw/openclaw/issues/38091) |
| **消息丢失** | 多个渠道（飞书、WhatsApp、Mattermost）存在消息静默丢弃问题 | 多条 P1 Issues |
| **文档不一致** | Webhook 文档承诺的多轮会话功能实际不可用 | [#11665](https://github.com/openclaw/openclaw/issues/11665) |
| **安装问题** | Windows zip 包缺少 exe 二进制文件，无法运行 | [#107658](https://github.com/openclaw/openclaw/issues/107658) |

### 用户满意度观察

- **正面反馈：** 社区对 OpenClaw 的多渠道集成能力（Slack、Discord、Telegram 等）总体满意，Issue #109212 的 inline widget 支持改善了原生客户端体验。
- **负面反馈：** 回归问题（#88312）和消息丢失问题引发较多不满，用户期望更快的修复响应。

---

## 8. 待处理积压

以下 Issue 长期未响应或存在重要功能缺口，建议维护团队关注：

### 长期未解决的高优先级 Issues

| Issue 编号 | 创建日期 | 标题 | 未响应天数 | 备注 |
|-----------|----------|------|-----------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | Linux/Windows Clawdbot Apps | ~197天 | 社区高度关注，114评论 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 2026-05-30 | Codex app-server turn-completion stall | ~48天 | 回归问题，影响核心功能 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | 2026-02-08 | Webhook hook sessions 多轮会话 | ~160天 | 文档承诺未实现 |
| [#38091](https://github.com/openclaw/openclaw/issues/38091) | 2026-03-06 | WebSocket reconnect 导致会话 terminated | ~133天 | 影响生产环境稳定性 |
| [#7359](https://github.com/openclaw/openclaw/issues/7359) | 2026-02-02 | Slack agent 缺少自身频道消息可见性 | ~166天 | 体验问题 |

### PR 积压提醒

以下 PR 已等待维护者审查超过3天，建议优先处理：

| PR 编号 | 标题 | 状态 | 等待时间 |
|---------|------|------|----------|
| [#102296](https://github.com/openclaw/openclaw/pull/102296) | Add plan-first Claw status and remove | 👀 ready for maintainer look | ~9天 |
| [#109233](https://github.com/openclaw/openclaw/pull/109233) | fix(file-transfer): denyPaths 安全修复 | 👀 ready for maintainer look | ~1天 |
| [#109388](https://github.com/openclaw/openclaw/pull/109388) | fix: keep /think and /verbose session prefs | 📣 needs proof | ~1天 |

---

## 总结

**项目健康度评估：**

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 500条 PR 更新，73条 Issues，活跃度极高 |
| Bug 压力 | ⚠️ 高 | 2个 P0 + 13个 P1 Bug 待处理，消息丢失问题突出 |
| 社区参与 | ⭐⭐⭐⭐ | Issue #75 持续高讨论，平台扩展需求强烈 |
| 维护响应 | ⚠️ 待提升 | 多个长期 Issue 未解决，部分 PR 等待审查 |

**建议行动项：**
1. 优先处理 P0 级 Bug（iOS 聊天无响应、workspace 协议问题）
2. 评估 Issue #88312 回归问题的根因和修复方案
3. 推进 Issue #75（Linux/Windows 支持）的路线图决策
4. 清理长期未响应的 Issues，提升社区信任

---

*报告生成时间：2026-07-17 | 数据截止：2026-07-17 23:59 UTC*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-17  
**分析范围：** OpenClaw / Hermes Agent / cc-haha / Codex++

---

## 1. 生态全景

2026年7月中旬，个人 AI 助手开源生态呈现**"三高"态势**：高活跃度、高 Bug 压力、高功能需求。四大项目在过去24小时内合计处理 **221 条 Issues** 和 **509 条 PRs**，但均面临不同程度的稳定性挑战——OpenClaw 和 Hermes Agent 的 Bug 积压最为严重，分别有 15 个和 11 个高优先级 Issue 待处理；cc-haha 和 Codex++ 则处于功能密集迭代期，版本发布节奏稳定但存在回归风险。值得关注的是，**跨平台一致性**（Linux/Windows 支持）、**消息可靠性**（会话稳定性、消息不丢失）和**成本优化**（Prompt Cache、订阅集成）成为多个项目共同面临的挑战，表明生态正从功能扩展期进入**体验深耕期**。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 新版本 | Bug 压力 | 健康度评估 |
|------|-------------|-----------|--------|----------|------------|
| **OpenClaw** | 73 (69活/4关) | 500 (336待/164合) | 无 | ⚠️ 高（2 P0 + 13 P1） | 活跃度高，Bug 积压严重，维护响应待提升 |
| **Hermes Agent** | 95 (76活/19关) | 500 (388待/112合) | 无 | ⚠️ 高（1 P0 + 多 P2） | 快速迭代，P0 修复已提交待合并 |
| **cc-haha** | 10 (5活/5关) | 1 (待合并) | ✅ v0.4.9 | 🔴 高（2高危） | 中高活跃，功能推进稳健但存在回归 |
| **Codex++** | 43 (13活/30关) | 8 (3待/5合) | ✅ v1.2.38 | 🟡 中（修复率70%） | 良好，维护响应及时 |

**数据洞察：**  
- OpenClaw 与 Hermes Agent 的 PR 吞吐量相当（各500条/24h），但 OpenClaw 的待合并比例更高（67% vs 78%），说明审查积压更重  
- cc-haha 和 Codex++ 已进入**版本发布节奏**，分别发布 v0.4.9 和 v1.2.38，迭代重心从功能开发转向质量巩固  
- Bug 修复率方面，Codex++ 表现最佳（70%），OpenClaw 和 Hermes Agent 因 Issue 总量大，修复绝对数量虽高但积压仍重

---

## 3. OpenClaw 在生态中的定位

### 优势分析

| 维度 | OpenClaw 表现 | 生态对比 |
|------|--------------|----------|
| **社区规模** | Issue #75 持续197天、114条评论 | 四大项目中长期 Issue 讨论量最大，社区粘性最强 |
| **多渠道覆盖** | Slack/Discord/Telegram/飞书/WhatsApp/Mattermost | 渠道数量领先，cc-haha 主打桌面+H5，Codex++ 侧重桌面端 |
| **安全加固** | denyPaths 目录访问控制、JSON.parse 加固、zombie reaper | 安全功能密度高于竞品，符合企业级需求 |
| **CLI 深度** | `claws status/remove` 干运行验证、secrets 管理 | Hermes Agent CLI 功能相对基础，cc-haha 侧重桌面 UI |

### 技术路线差异

| 特性 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心架构** | Gateway + Control UI 分离 | Agent Core + 多端适配器 | 桌面端 + H5 + Sidecar | 桌面端 + 供应商抽象层 |
| **平台策略** | 全平台（Linux/Windows/macOS/iOS/Android） | 全平台（CLI/Desktop/Telegram/Web） | 桌面 + H5 | 桌面为主 |
| **模型支持** | 多 Provider 统一抽象 | Anthropic 原生 + OpenAI 兼容 | OpenAI 兼容 + Ollama | GPT 全系列 + 国产模型 |
| **差异化重点** | 安全、稳定性、多渠道 | 订阅集成、Prompt Cache | 本地索引、搜索增强 | 工具调用、协议兼容 |

### 社区规模对比

- **OpenClaw**：Issue 讨论深度最高，#75（Linux/Windows 支持）持续197天、114条评论，反映核心用户群体的强烈诉求
- **Hermes Agent**：Issue 总量最大（95条/24h），但单 Issue 评论数偏低，社区更偏向**快速反馈**而非深度讨论
- **cc-haha**：社区规模较小，但 PR #674 历时50天未合并，说明维护资源有限
- **Codex++**：Issue 关闭率高（70%），社区反馈循环快，但缺乏长期讨论的明星 Issue

---

## 4. 共同关注的技术方向

以下需求在多个项目中**同时涌现**，反映行业共性挑战：

### 4.1 跨平台桌面应用（Linux/Windows 支持）

| 项目 | 具体诉求 | Issue 编号 |
|------|----------|------------|
| **OpenClaw** | Linux/Windows Clawdbot Apps，与 macOS/iOS/Android 功能对齐 | #75（114评论，197天） |
| **cc-haha** | 桌面终端重启后对话列表消失，跨平台数据一致性 | #1016 |
| **Codex++** | macOS UI 频闪、AppTranslocation 路径错误 | #1417, #1473 |

**核心诉求**：用户期望在非 macOS 平台上获得一致的 AI 助手体验，当前各项目均未完全满足。

### 4.2 会话稳定性与消息可靠性

| 项目 | 具体问题 | Issue 编号 |
|------|----------|------------|
| **OpenClaw** | WebSocket 重连导致会话 terminated、消息丢失（9个 P1 Issue） | #38091, #88312 |
| **Hermes Agent** | Desktop 每条消息创建新会话、消息泄漏 | #65384, #59305 |
| **cc-haha** | 使用技能后有概率不显示后续输出 | #1047 |
| **Codex++** | 工具调用在协议转换时丢失 | #1539 |

**核心诉求**：多轮会话的可靠性是生产级应用的基础，当前各项目均存在不同程度的会话状态管理问题。

### 4.3 成本优化与 API 集成

| 项目 | 具体需求 | Issue 编号 |
|------|----------|------------|
| **Hermes Agent** | Claude 订阅 OAuth 集成，避免双重计费 | #25267（41👍） |
| **Hermes Agent** | Prompt Cache 在 OpenAI 兼容网关上失效 | #56776（已修复） |
| **OpenClaw** | Codex app-server 回归问题影响 Plus 用户 | #88312 |
| **cc-haha** | 本地 API 401 认证失败 | #1025 |

**核心诉求**：用户对 API 成本高度敏感，期望更灵活的计费模式和更低的接入门槛。

### 4.4 MCP 工具系统稳定性

| 项目 | 具体问题 | Issue 编号 |
|------|----------|------------|
| **Hermes Agent** | MCP 轮询循环 OOM（TimeoutError 被吞没） | #66039（P0） |
| **Hermes Agent** | MCP keepalive 使用 list_tools() 导致大工具服务器超时 | #65787 |
| **OpenClaw** | 超时 hook relay 进程未正确清理，内存耗尽 | #109421 |

**核心诉求**：MCP 作为工具调用标准，各项目均需加强其稳定性和资源管理。

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心功能 | 辅助功能 | 目标用户 |
|------|----------|----------|----------|
| **OpenClaw** | 多渠道集成、安全加固、Gateway 架构 | CLI 工具、文件传输、ACP 会话路由 | 企业级多渠道部署、注重安全的团队 |
| **Hermes Agent** | Claude 原生集成、订阅 OAuth、Prompt Cache | 标题生成、多语言支持、跨平台会话 | 成本敏感的个人用户、Claude 订阅者 |
| **cc-haha** | 本地 SQLite 索引、文件搜索、H5 移动端 | PlantUML/KaTeX 渲染、软连接支持 | 桌面端重度用户、移动办公场景 |
| **Codex++** | 工具调用优化、供应商抽象、协议兼容 | VLM 视觉分析、音频转录、多模态 | 开发者、多模型切换用户 |

### 目标用户差异

```
OpenClaw ──────────────────────────────────────────────────────────► 企业/团队
    │  多渠道、安全、稳定性
    │
Hermes Agent ──────────────────────────────────────► 个人用户（Claude 订阅）
    │  成本优化、原生集成
    │
cc-haha ──────────────────────────────────────────► 桌面+移动混合用户
    │  本地化、搜索、移动端
    │
Codex++ ─────────────────────────────────────────► 开发者/极客
       多模型、工具调用、协议兼容
```

### 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **通信协议** | Gateway + WebSocket | WebSocket + HTTP | HTTP + Sidecar | HTTP + WebSocket |
| **状态管理** | 会话状态 + Freshness Gate | 会话标题隔离 | SQLite 本地索引 | 供应商状态抽象 |
| **部署模式** | Gateway 中心化 | 分布式适配器 | 桌面端为主 | 桌面端为主 |
| **扩展机制** | ACP 协议、Hook 系统 | MCP 工具、多 Provider | 插件系统 | 供应商插件 |

---

## 6. 社区热度与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|------|------|------|----------|
| **🔥 快速迭代期** | OpenClaw, Hermes Agent | PR 吞吐量500+/24h，Issue 积压重，Bug 压力大 | 处于功能扩展向稳定性过渡阶段 |
| **⚙️ 质量巩固期** | cc-haha, Codex++ | 版本发布节奏稳定，修复率高，功能密度提升 | 从功能开发转向体验优化 |

### 成熟度评估

| 项目 | 代码质量 | 文档完善度 | 维护响应 | 社区治理 |
|------|----------|-----------|----------|----------|
| **OpenClaw** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⚠️ 待提升（长期 Issue 未解决） | ⭐⭐⭐⭐（讨论活跃） |
| **Hermes Agent** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐（P0 修复快速提交） | ⭐⭐⭐⭐（Issue 量大） |
| **cc-haha** | ⭐⭐⭐ | ⭐⭐⭐ | ⚠️ 待提升（PR #674 50天未合并） | ⭐⭐⭐（社区较小） |
| **Codex++** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐（修复率70%） | ⭐⭐⭐⭐（反馈循环快） |

### 关键差距

- **OpenClaw**：Issue 积压严重，#75（197天）、#11665（160天）等长期未解决，影响社区信任
- **Hermes Agent**：P0 Bug 响应快，但 Desktop 应用稳定性问题（会话丢失、消息泄漏）持续存在
- **cc-haha**：维护资源有限，PR #674 历时50天未合并，功能推进受阻
- **Codex++**：整体健康，但 #754（混合认证模式）长期未解决，影响特定用户群体

---

## 7. 值得关注的趋势信号

### 7.1 从"功能扩展"到"体验深耕"

**信号**：四大项目均出现大量 P0/P1 Bug，且集中在会话稳定性、消息可靠性等基础体验层面，而非功能缺失。

**对开发者的启示**：
- 下一阶段竞争焦点将从"功能数量"转向"稳定性与体验"
- 会话状态管理、WebSocket 重连机制、消息路由可靠性需要系统性投入

### 7.2 跨平台一致性成为刚需

**信号**：OpenClaw #75（114评论）、cc-haha #1016、Codex++ #1417 均反映跨平台问题。

**对开发者的启示**：
- Linux/Windows 桌面客户端是明显缺口，有先发优势的机会
- 跨平台数据同步（会话历史、配置、状态）是技术难点，也是差异化点

### 7.3 MCP 工具系统进入关键期

**信号**：Hermes Agent P0 Bug（OOM）、OpenClaw hook relay 内存泄漏均与 MCP 相关。

**对开发者的启示**：
- MCP 作为工具调用标准正在被广泛采用，但其稳定性问题集中爆发
- 资源管理（内存、进程、超时）是 MCP 集成的核心挑战

### 7.4 成本敏感度持续上升

**信号**：Hermes Agent #25267（Claude 订阅 OAuth，41👍）、Prompt Cache 优化需求。

**对开发者的启示**：
- 用户期望复用现有订阅而非单独付费，双重计费模式受抵制
- Prompt Cache、上下文压缩等技术可显著降低用户成本

### 7.5 本地化与隐私需求增长

**信号**：cc-haha 的 SQLite 本地索引功能、Ollama 集成需求（#1048）、本地模型支持。

**对开发者的启示**：
- 本地模型（Ollama）集成是差异化方向，用户对数据隐私日益重视
- 本地索引可减少云端依赖，提升响应速度

---

## 总结与建议

| 维度 | 核心发现 | 建议 |
|------|----------|------|
| **生态态势** | 高活跃、高 Bug、高需求并存，正从功能扩展期进入体验深耕期 | 开发者应关注稳定性而非功能数量 |
| **OpenClaw** | 社区规模最大，多渠道覆盖领先，但 Bug 积压严重 | 优先解决长期 Issue，提升维护响应 |
| **Hermes Agent** | 快速迭代，P0 响应及时，Desktop 稳定性需加强 | 聚焦 Desktop 应用质量，简化架构 |
| **cc-haha** | 功能推进稳健，但维护资源有限 | 加速 PR #674 合并，引入更多贡献者 |
| **Codex++** | 修复率高，社区反馈快，但长期 Issue 存在 | 解决 #754 等长期问题，提升完整性 |
| **行业趋势** | 跨平台一致性、会话可靠性、MCP 稳定性、成本优化、本地化 | 围绕这些方向构建差异化竞争力 |

---

**报告生成时间：** 2026-07-17  
**分析师：** AI Project Analyst  
**免责声明：** 本报告基于 GitHub 公开数据生成，仅供技术决策和开发参考。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-07-17  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 项目保持极高活跃度：共处理 **95 条 Issues 更新**（76 条新开/活跃，19 条关闭）和 **500 条 PR 更新**（388 条待合并，112 条已合并/关闭）。项目整体呈现快速迭代态势，今日出现 **1 个 P0 级紧急修复**（MCP 轮询循环 OOM 问题），多个 P2 级 Bug 正在处理中。社区对 Web UI Gateway 功能呼声强烈，Claude 订阅集成和 Prompt Cache 优化成为近期热点话题。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，涵盖功能增强与 Bug 修复：

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#66039](https://github.com/NousResearch/hermes-agent/pull/66039) | Bug (P0) | 修复 MCP 轮询循环 OOM 问题，防止 TimeoutError 被吞没导致内存泄漏 | OPEN |
| [#46752](https://github.com/NousResearch/hermes-agent/pull/46752) | Feature | 让 summary/title 生成提示词遵循 `display.language` 配置 | CLOSED |
| [#60042](https://github.com/NousResearch/hermes-agent/pull/60042) | Bug | 会话标题唯一性按 source 作用域隔离，TUI/CLI 会话不再阻塞 Desktop 重命名 | CLOSED |
| [#61075](https://github.com/NousResearch/hermes-agent/pull/61075) | Bug | 标题唯一性和解析按 source 作用域处理 | CLOSED |
| [#56779](https://github.com/NousResearch/hermes-agent/pull/56779) | Bug | 为 OpenAI 兼容网关上的 Claude 模型启用 Prompt Caching | CLOSED |
| [#41878](https://github.com/NousResearch/hermes-agent/pull/41878) | Bug | CLI 通知显示、delegate_task schema、标题超时三处修复 | CLOSED |
| [#42548](https://github.com/NousResearch/hermes-agent/pull/42548) | Bug | 标题生成器传递超时参数，max_tokens 从 128 降至 64 | CLOSED |
| [#20266](https://github.com/NousResearch/hermes-agent/pull/20266) | Bug | 支持推理模型（Qwen3.5、DeepSeek）的标题生成 | CLOSED |
| [#17797](https://github.com/NousResearch/hermes-agent/pull/17797) | Bug | 从 reasoning 字段剥离 think 块，防止标题显示原始思考内容 | CLOSED |
| [#61118](https://github.com/NousResearch/hermes-agent/pull/61118) | Bug | 清理生成的会话标题（单行、移除零宽字符等） | CLOSED |
| [#61901](https://github.com/NousResearch/hermes-agent/pull/61901) | Feature | 为 kimi-coding 提供商添加 `kimi-for-coding-highspeed` 模型 | CLOSED |
| [#63776](https://github.com/NousResearch/hermes-agent/pull/63776) | Bug | 修复 honcho dialecticCadence 在 per-host 配置中被忽略的问题 | CLOSED |
| [#48602](https://github.com/NousResearch/hermes-agent/pull/48602) | Bug | 修复 honcho_search 在 directional observation 模式返回空结果的问题 | CLOSED |
| [#66026](https://github.com/NousResearch/hermes-agent/pull/66026) | Bug (P2) | 防止 Telegram 编辑失败后发送重复消息 | OPEN |
| [#64759](https://github.com/NousResearch/hermes-agent/pull/64759) | Bug (P2) | 修复附件同步期间新聊天绑定不稳定的问题 | OPEN |
| [#66041](https://github.com/NousResearch/hermes-agent/pull/66041) | Bug (P2) | 模型向导识别 credential pool 中的密钥 | OPEN |
| [#66040](https://github.com/NousResearch/hermes-agent/pull/66040) | Bug (P2) | Windows 更新时隐藏控制台窗口 | OPEN |

**项目整体向前推进：**
- 标题生成系统完成全面重构，支持多语言、推理模型和会话隔离
- Prompt Caching 功能扩展至 OpenAI 兼容网关
- MCP 工具系统获得关键稳定性修复

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃，反映核心用户诉求：

### 热门 Issues

| Issue 编号 | 评论数 | 标题 | 热度分析 |
|------------|--------|------|----------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | 15 | **[Feature] Web UI Gateway — Local Browser-Based Interface** | 用户强烈要求 Web UI，竞品均有此功能。提议支持 Streaming、Artifacts 和富文本渲染。 |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | 11 | **[Feature] Claude Agent SDK model provider with subscription OAuth** | 41 👍。用户希望使用已有 Claude 订阅而非单独付费 API，避免双重计费。 |
| [#56776](https://github.com/NousResearch/hermes-agent/issues/56776) | 6 | Claude models on multi-model OpenAI gateways get 0% prompt cache hit rate | Prompt Caching 在 OpenAI 协议下失效，影响成本和延迟。已有 PR #56779 修复。 |
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | 6 | Hermes sends extremely large prompts to local OpenAI-compatible models | 导致多分钟卡顿，影响本地模型用户体验。 |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | 6 | **Feature**: Cross-platform session context sharing (CLI ↔ Telegram) | 跨平台会话隔离是长期痛点，用户希望统一对话历史。 |
| [#15985](https://github.com/NousResearch/hermes-agent/issues/15985) | 5 | Hermes agent running via ollama seems to forget it has skills | Ollama 集成稳定性问题，技能丢失影响核心体验。 |
| [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) | 4 | **Bug**: MCP keepalive uses list_tools() — guaranteed timeout on large servers | MCP 服务器工具多时必然超时，引发重连循环。P2 级风险。 |
| [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) | 4 | **Bug**: Desktop App creates new session on every message with non-default profile | 非默认 profile 用户遭遇会话丢失。 |
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | 4 | **Feature** Multi-gateway connections with per-gateway tabs in Desktop | 多网关用户（VPS、家庭服务器等）需要统一管理界面。 |
| [#36641](https://github.com/NousResearch/hermes-agent/issues/36641) | 4 | **Bug**: WhatsApp bridge dependencies fail to install after docker recreate | Docker 重建后 WhatsApp 集成失效，影响容器化部署用户。 |

### 热点分析

**核心诉求集中于三个方向：**

1. **多模态接入体验**：Web UI Gateway（#501）和多网关连接（#45779）反映用户希望更灵活地访问 Hermes
2. **成本优化**：Claude 订阅集成（#25267）和 Prompt Cache（#56776）反映用户对 API 成本的敏感
3. **跨平台一致性**：会话上下文共享（#4335）和 Desktop 稳定性问题反映多端用户痛点

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### P0 级（紧急）

| Issue 编号 | 描述 | 状态 | Fix PR |
|------------|------|------|--------|
| [#66039](https://github.com/NousResearch/hermes-agent/pull/66039) | MCP 轮询循环 OOM：Python 3.8+ 中 `concurrent.futures.TimeoutError` 是内置 `TimeoutError` 的别名，轮询循环捕获该异常实现短间隔轮询（100ms），导致真正的 `TimeoutError` 被吞没，引发内存泄漏 | OPEN | [PR #66039](https://github.com/NousResearch/hermes-agent/pull/66039) 已提交 |

### P2 级（高优先级）

| Issue 编号 | 描述 | 状态 | Fix PR |
|------------|------|------|--------|
| [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) | MoA/local 调用 30 秒后崩溃：`stale_timeout` 为非有限值时无法转换为整数 | OPEN | - |
| [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) | MCP keepalive 使用 `list_tools()`（O(tool-count)），大工具服务器必然超时并触发重连循环 | OPEN | - |
| [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) | Desktop 使用非默认 profile 时每条消息创建新会话 | OPEN | - |
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | 向本地 OpenAI 兼容模型发送极大 prompt，导致多分钟卡顿 | OPEN | - |
| [#58345](https://github.com/NousResearch/hermes-agent/issues/58345) | xAI grok-4.3 丢弃 MCP 工具调用的可选多行字符串参数，导致邮件发送空白 | OPEN | - |
| [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) | Desktop 启动时平台适配器导入或 MCP 注册超过 15s 就绪超时 | OPEN | - |
| [#59305](https://github.com/NousResearch/hermes-agent/issues/59305) | Desktop 多聊天标签页间消息泄漏，内容混淆 | OPEN | - |
| [#53002](https://github.com/NousResearch/hermes-agent/issues/53002) | Z.ai 429/code 1305 在 chat/completions 路径仍存在，#47685 修复仅覆盖 Anthropic 适配器 | OPEN | - |
| [#65650](https://github.com/NousResearch/hermes-agent/issues/65650) | `/model` 选择器在启用 discover_models 时慢约 5 秒 | OPEN | - |
| [#65854](https://github.com/NousResearch/hermes-agent/issues/65854) | 卸载可能删除共享 Python 文件夹中的其他包 | OPEN | - |

### P3 级（中等优先级）

| Issue 编号 | 描述 | 状态 |
|------------|------|------|
| [#56776](https://github.com/NousResearch/hermes-agent/issues/56776) | Claude 模型在 OpenAI 兼容网关上 0% prompt cache 命中率 | 已修复 ([PR #56779](https://github.com/NousResearch/hermes-agent/pull/56779)) |
| [#63679](https://github.com/NousResearch/hermes-agent/issues/63679) | Desktop 每条助手消息渲染两次 | OPEN |
| [#15985](https://github.com/NousResearch/hermes-agent/issues/15985) | Ollama 运行时 Hermes 似乎忘记拥有技能 | OPEN |
| [#57539](https://github.com/NousResearch/hermes-agent/issues/57539) | vertex provider 缺失 HERMES_OVERLAYS 条目 | OPEN |
| [#65949](https://github.com/NousResearch/hermes-agent/issues/65949) | hermes setup 无法识别 Google Cloud Vertex provider | OPEN |

**稳定性小结：** Desktop 应用和 MCP 集成是当前 Bug 高发区，分别有 4+ 和 3+ 相关问题。P0 级 OOM 修复已提交，需尽快审查合并。

---

## 6. 功能请求与路线图信号

以下功能请求获得较多关注，可能进入下一版本：

### 高优先级功能请求

| Issue 编号 | 请求 | 社区支持 | 评估 |
|------------|------|----------|------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | **Web UI Gateway**：本地浏览器界面，支持 Streaming、Artifacts 和富文本渲染 | 15 评论，2 👍 | 竞品均有此功能，需求强烈。已有详细设计草案。 |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | **Claude 订阅 OAuth 集成**：使用现有 Claude 订阅而非单独 API 密钥 | 11 评论，41 👍 | 成本敏感用户刚需，已有实现思路。 |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | **跨平台会话上下文共享**：CLI ↔ Telegram 等平台会话互通 | 6 评论，1 👍 | 架构改动较大，但用户呼声高。 |
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | **Desktop 多网关连接**：每个网关对应独立标签页 | 4 评论，4 👍 | 多机器用户痛点，实现复杂度适中。 |
| [#41152](https://github.com/NousResearch/hermes-agent/issues/41152) | **HTTP 消息追加 API**：POST `/api/sessions/{id}/messages` + skip-agent 标志 | 2 评论 | 企业集成场景需要。 |
| [#6741](https://github.com/NousResearch/hermes-agent/issues/6741) | **结构化会话追踪**：带开始/结束时间戳 | 3 评论 | 可观测性增强。 |
| [#8642](https://github.com/NousResearch/hermes-agent/issues/8642) | **TUI 状态栏插件钩子**：`on_status_bar_render` | 2 评论，1 👍 | 插件生态扩展。 |
| [#26881](https://github.com/NousResearch/hermes-agent/issues/26881) | **辅助任务 skip_parameters 配置**：处理 provider API 怪癖 | 3 评论 | 提升 provider 兼容性。 |

### 路线图信号分析

1. **Web UI 是最大缺口**：所有竞品都有本地 Web 界面，Hermes 仅有 CLI/Desktop/Telegram 等，缺乏轻量级浏览器入口
2. **成本优化是持续诉求**：Claude 订阅集成和 Prompt Cache 优化反映用户对 API 成本的高度敏感
3. **多端一致性需求**：跨平台会话共享和多网关管理反映高级用户的使用模式

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点和使用场景：

### 痛点汇总

| 类别 | 痛点描述 | 相关 Issue |
|------|----------|------------|
| **成本** | Claude 订阅用户需额外支付 API 费用，双重计费不合理 | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) |
| **性能** | 本地模型因 prompt 过大导致多分钟卡顿 | [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) |
| **稳定性** | Desktop 应用启动失败、消息泄漏、会话丢失 | [#60144](https://github.com/NousResearch/hermes-agent/issues/60144), [#59305](https://github.com/NousResearch/hermes-agent/issues/59305), [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) |
| **集成** | Ollama 运行时技能丢失、Docker 重建后 WhatsApp 失效 | [#15985](https://github.com/NousResearch/hermes-agent/issues/15985), [#36641](https://github.com/NousResearch/hermes-agent/issues/36641) |
| **可用性** | 模型选择器慢、标题冲突、跨平台会话隔离 | [#65650](https://github.com/NousResearch/hermes-agent/issues/65650), [#60020](https://github.com/NousResearch/hermes-agent/issues/60020), [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) |

### 正面反馈

- 标题生成系统改进获得积极评价（支持多语言、推理模型）
- Prompt Cache 修复解决了长期成本问题
- 会话标题按 source 隔离解决了命名冲突

---

## 8. 待处理积压

以下 Issue 长期未响应或存在决策点，需维护者关注：

| Issue 编号 | 创建日期 | 优先级 | 描述 | 状态 |
|------------|----------|--------|------|------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | 2026-03-06 | Feature | Web UI Gateway — 超过 4 个月，15 条评论，需求强烈 | OPEN |

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-07-17  
**项目**：NanmiCoder/cc-haha (Claude Code Haha)  
**数据来源**：GitHub Issues & Pull Requests

---

## 1. 今日速览

2026-07-17，cc-haha 项目保持较高活跃度。过去24小时内共产生 **10 条 Issues 更新**（5 新开/活跃，5 已关闭），**1 个新版本 v0.4.9 正式发布**，另有 **1 个大型功能增强 PR #674 等待合并**。项目整体向前推进，版本迭代节奏稳定。但需关注的是，今日集中报告了 **4 个 BUG**（含内存泄漏、认证失败等严重问题），社区反馈显示 v0.4.8→v0.4.9 升级过程中存在一定回归风险，建议用户谨慎升级或等待补丁版本。

---

## 2. 版本发布

### 🎉 v0.4.9 已发布

**发布说明**：这是 `v0.4.8` 之后的本地数据、搜索与网络兼容性版本。

#### 核心新功能

| 功能模块 | 更新内容 |
|---------|---------|
| **SQLite 本地索引** | 会话、活动统计、定时任务运行记录、Trace 和可搜索内容投影到可重建的本地数据库，减少重复扫描大量文件的开销 |
| **文件搜索增强** | 未展开工作区文件搜索支持 |
| **跨平台工具** | 内置跨平台 `ripgrep` |
| **附件操作** | 本地附件打开操作优化 |

#### Bug 修复

- ✅ OpenAI 兼容 Provider 的本地代理鉴权问题
- ✅ 系统代理动态路由
- ✅ H5 触屏交互问题
- ✅ 文件预览连续行评论显示异常

#### 迁移注意事项

> ⚠️ 原始 JSON/JSONL 文件仍是权威数据源；索引损坏或不可用时会回退到文件读取。用户可在「设置」中管理索引行为。

---

## 3. 项目进展

### PR #674 - 大型功能增强（待合并）

| 属性 | 详情 |
|-----|------|
| **状态** | OPEN（待合并） |
| **作者** | @yangzexuan-cc |
| **创建时间** | 2026-05-31 |
| **标签** | enhancement, size:XXL, area:desktop, area:server |
| **影响范围** | 文件树、内容渲染、后端优化 |

#### 改动摘要

| 模块 | 改动内容 |
|------|---------|
| **文件树** | 隐藏文件控制、软连接支持（`isSymlink` 检测 + 图标）、文件监听（`chokidar` 替代 `fs.watch`） |
| **内容渲染** | Markdown 中 PlantUML `@startuml` 代码块 → SVG 图表、KaTeX `$...$` / `$$...$$` 公式渲染 |
| **后端优化** | PlantUML `spawn -pipe` 渲染、`pathHasSymlinkComponent` 跳过 canonical 边界检查、覆盖率门禁容忍测试失败 |

> 📎 **链接**：[PR #674](https://github.com/NanmiCoder/cc-haha/pull/674)

**评估**：该 PR 历时近 **50 天**仍未合并，包含多项重要功能增强，建议维护者尽快 review 并推进合并。

---

## 4. 社区热点

### 讨论最活跃的 Issues

#### 🔥 Issue #1016 - 桌面终端重启后对话列表消失（8 条评论）

| 属性 | 详情 |
|-----|------|
| **状态** | CLOSED |
| **作者** | @Alix-li |
| **创建** | 2026-07-13 |
| **更新** | 2026-07-16 |

**问题摘要**：用户重启桌面终端后，聊天记录全部消失，怀疑是以下原因之一：
- 桌面终端没有正确索引 projects 下的旧 jsonl
- 启动时换了配置目录或 profile
- cc-haha/settings.json 指向了自定义 API/model
- 插件 reload 或 marketplace 操作后 UI 侧状态刷新异常
- Windows 桌面端缓存/登录态重置

> 📎 **链接**：[Issue #1016](https://github.com/NanmiCoder/cc-haha/issues/1016)

---

#### 🔥 Issue #1025 - 更新到 0.4.8 后本地 API 报 401 错误（6 条评论）

| 属性 | 详情 |
|-----|------|
| **状态** | CLOSED |
| **作者** | @ChainZeaxion |
| **创建** | 2026-07-14 |
| **更新** | 2026-07-16 |

**问题摘要**：用户更新到 0.4.8 后，之前的本地 API 无法使用，直接报错 `http 401`。

> 📎 **链接**：[Issue #1025](https://github.com/NanmiCoder/cc-haha/issues/1025)

---

#### 🔥 Issue #1023 - 文件搜索问题，无法搜索到文件（5 条评论）

| 属性 | 详情 |
|-----|------|
| **状态** | CLOSED |
| **作者** | @Dinny-xu |
| **创建** | 2026-07-14 |
| **更新** | 2026-07-16 |

**问题摘要**：文件搜索功能失效，用户无法搜索到目标文件。

> 📎 **链接**：[Issue #1023](https://github.com/NanmiCoder/cc-haha/issues/1023)

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

#### Issue #1049 - Sidecar 内存泄漏导致端口持续占用、网络断连

| 属性 | 详情 |
|-----|------|
| **状态** | OPEN |
| **作者** | @zzw1235 |
| **创建** | 2026-07-16 |
| **评论** | 0 |

**问题摘要**：
- Claude Code Haha 的 sidecar 进程存在**内存泄漏**
- 处理较重网络任务（如 clone 完整网站）时，内存持续增长不释放
- 最终导致进程卡死但僵尸不退，端口被锁死，网络连接断开
- 实测涨至 **608MB 后锁死**

**复现步骤**：
1. 打开 Claude Code Haha v0.4.9
2. 让它执行一个较重任务（例如让 AI 爬取并克隆一个完整网站的所有功能到本地目录）
3. 观察 sidecar 进程 (`claude-sidecar-x86_64-pc-windows-m...`)

> 📎 **链接**：[Issue #1049](https://github.com/NanmiCoder/cc-haha/issues/1049)

---

#### Issue #1046 - 升级 0.4.8 之后打不开了

| 属性 | 详情 |
|-----|------|
| **状态** | CLOSED |
| **作者** | @yourfei |
| **创建** | 2026-07-16 |
| **评论** | 1 |

**问题摘要**：用户升级到 0.4.8 后应用无法启动。

> 📎 **链接**：[Issue #1046](https://github.com/NanmiCoder/cc-haha/issues/1046)

---

### 严重程度：中 🟡

#### Issue #1039 - H5 访问认证失败 (403)

| 属性 | 详情 |
|-----|------|
| **状态** | OPEN |
| **作者** | @vhr2wsm55r-sys |
| **创建** | 2026-07-15 |
| **评论** | 4 |

**问题摘要**：升级到 0.4.8 后，opencode go 无法使用，报错：
```
Failed to authenticate. API Error: 403 H5 access is disabled. Enable H5 access from the local desktop app first.
```
用户表示 0.4.7 时使用正常。

> 📎 **链接**：[Issue #1039](https://github.com/NanmiCoder/cc-haha/issues/1039)

---

#### Issue #1047 - 使用技能后有概率不显示后续输出

| 属性 | 详情 |
|-----|------|
| **状态** | OPEN |
| **作者** | @ZenCat-coder |
| **创建** | 2026-07-16 |
| **评论** | 0 |

**问题摘要**：使用技能后，有概率不显示后续输出，重启后自动显示。

> 📎 **链接**：[Issue #1047](https://github.com/NanmiCoder/cc-haha/issues/1047)

---

#### Issue #1050 - 0.4.9 BUG

| 属性 | 详情 |
|-----|------|
| **状态** | OPEN |
| **作者** | @firstip-cpu |
| **创建** | 2026-07-17 |
| **评论** | 0 |

**问题摘要**：今日新报告的 BUG，详情见附件截图。

> 📎 **链接**：[Issue #1050](https://github.com/NanmiCoder/cc-haha/issues/1050)

---

## 6. 功能请求与路线图信号

### Issue #1020 - H5 页面 fork 会话按钮常驻显示

| 属性 | 详情 |
|-----|------|
| **状态** | CLOSED |
| **作者** | @yiYangGit |
| **评论** | 1 |

**需求**：H5 页面的 fork 会话按钮能否常驻显示，因为 hover 在手机上无法触发。

> 📎 **链接**：[Issue #1020](https://github.com/NanmiCoder/cc-haha/issues/1020)

---

### Issue #1048 - Ollama 源 API 格式选择问题

| 属性 | 详情 |
|-----|------|
| **状态** | OPEN |
| **作者** | @kidxxx |
| **评论** | 0 |

**问题摘要**：
- 添加 Ollama 源后再次编辑时，会出现 API 格式选择
- 默认是原生，有的工具调用不了，不适配
- 选择 chat 或 responses 后，在使用模型时会出现验证失败
- 走 H5 的逻辑去了，也用不了
- **结论**：Ollama 添加的都没有办法使用

> 📎 **链接**：[Issue #1048](https://github.com/NanmiCoder/cc-haha/issues/1048)

---

### 路线图信号分析

基于 PR #674 和 Issues 反馈，以下功能可能进入下一版本：

| 功能 | 来源 | 可能性 |
|------|------|--------|
| 隐藏文件控制 | PR #674 | ⭐⭐⭐⭐⭐ |
| 软连接支持 | PR #674 | ⭐⭐⭐⭐⭐ |
| PlantUML 图表渲染 | PR #674 | ⭐⭐⭐⭐ |
| KaTeX 公式渲染 | PR #674 | ⭐⭐⭐⭐ |
| H5 fork 按钮常驻 | Issue #1020 | ⭐⭐⭐ |
| Ollama 兼容性修复 | Issue #1048 | ⭐⭐⭐⭐ |

---

## 7. 用户反馈摘要

### 痛点与问题

| 痛点 | 相关 Issue | 频率 |
|------|-----------|------|
| **升级后功能异常** | #1046, #1039, #1025 | 高 |
| **内存泄漏/性能问题** | #1049 | 高 |
| **文件搜索失效** | #1023 | 中 |
| **H5 访问限制** | #1039 | 中 |
| **数据丢失风险** | #1016 | 中 |

### 使用场景

- 桌面终端重度使用（对话管理、文件搜索）
- 本地 API 集成（Ollama、第三方 Provider）
- H5 移动端访问
- 重型网络任务（网站克隆、数据爬取）

### 满意/不满意

| 维度 | 反馈 |
|------|------|
| **正向** | v0.4.9 的 SQLite 索引功能受到期待，可减少文件扫描开销 |
| **负向** | 升级后回归问题多，用户对稳定性存疑 |
| **负向** | 内存泄漏问题严重影响生产使用 |

---

## 8. 待处理积压

### 长期未合并的 PR

| PR | 状态 | 创建时间 | 历时 | 阻塞功能 |
|----|------|---------|------|---------|
| **#674** | OPEN | 2026-05-31 | **~50 天** | 隐藏文件、软连接、PlantUML、公式渲染 |

> ⚠️ 建议维护者优先 review 并合并 PR #674，该 PR 包含多项用户期待的功能增强。

---

### 长期未响应的 Issues

| Issue | 创建时间 | 状态 | 建议 |
|-------|---------|------|------|
| #1049 | 2026-07-16 | OPEN | 内存泄漏问题需优先处理 |
| #1039 | 2026-07-15 | OPEN | H5 认证问题影响用户体验 |
| #1048 | 2026-07-16 | OPEN | Ollama 兼容性需修复 |
| #1050 | 2026-07-17 | OPEN | 今日新报，需确认是否重复 |

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 新开/活跃 | 5 | - |
| Issues 已关闭 | 5 | - |
| PR 待合并 | 1 | - |
| 新版本发布 | 1 (v0.4.9) | ↑ |
| 严重 Bug (高) | 2 | ⚠️ |
| 社区活跃度 | 中高 | → |

---

**报告生成时间**：2026-07-17  
**分析师**：AI Project Analyst  
**免责声明**：本报告基于 GitHub 公开数据生成，仅供参考。

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-07-17  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年7月17日，Codex++ 项目保持高度活跃。今日共处理 **43 条 Issues**（新开/活跃 13 条，已关闭 30 条）和 **8 条 PRs**（待合并 3 条，已合并 5 条），并发布了 **v1.2.38** 版本。社区反馈显示项目在多供应商切换、插件生态和模型兼容性方面持续迭代，但 **5.6 系列模型的工具调用问题** 和 **界面稳定性** 仍是用户反馈焦点。整体项目健康度良好，维护响应及时。

---

## 2. 版本发布

### 🆕 v1.2.38 已发布

**发布时间：** 2026-07-17

**更新内容：**

| 类别 | 更新项 | 说明 |
|------|--------|------|
| 🖼️ 多模态 | 纯文本模型图片处理 | 支持 send-as-is / strip images / VLM analysis 三种模式 |
| 🤖 模型支持 | GPT-5.6 系列元数据补全 | 完成 Fast 兼容，保守使用 272K 上下文（官方临时回滚） |
| 🔊 音频 | audio transcriptions 代理支持 | 新增 `/v1/audio/transcriptions` 路由转发 |
| 🐛 Bug 修复 | 安装目录误识别 | 修复 Codex++ 目录被误识别为 Codex Desktop 路径 |
| 🛡️ 稳定性 | 供应商切换状态保留 | 保留 Codex App 安全状态，增强无项目任务兜底 |
| ✅ 测试 | 稳定性与格式化 | 补充测试稳定性，Rust 格式化修复 |

**验证命令：**
```bash
npm run check
cargo fmt --all -- --check
npm run
```

**迁移注意事项：**
- GPT-5.6 Sol 上下文上限已由官方临时回滚至 272K，建议用户关注后续官方公告恢复 372K
- 供应商切换功能已加固，建议更新后重新测试多供应商配置

---

## 3. 项目进展

### ✅ 已合并 PRs（5 条）

| PR # | 标题 | 贡献者 | 状态 | 说明 |
|------|------|--------|------|------|
| [#1519](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1519) | 修复供应商状态与无项目任务 | @Yuimi-chaya | ✅ 已合并 | 解决供应商切换后状态丢失、无项目任务失效问题 |
| [#1525](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1525) | fix: reject Codex++ path as Codex desktop app | @FHY12345-ALT | ✅ 已合并 | 收紧路径验证逻辑，拒绝将 Codex++ 目录识别为桌面应用 |
| [#1496](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1496) | Add audio transcriptions proxy support | @EthenJ | ✅ 已合并 | 新增音频转录 API 代理路由 |
| [#1447](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1447) | 完善 GPT-5.6 三模型元数据与 Fast 兼容 | @Yuimi-chaya | ✅ 已合并 | 补全模型元数据，同步上下文回滚 |
| [#1405](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1405) | feat: VLM vision analysis | @kanchengw | ✅ 已合并 | 纯文本模型图片拦截与 VLM 描述注入 |

### 🔄 待合并 PRs（3 条）

| PR # | 标题 | 贡献者 | 状态 | 说明 |
|------|------|--------|------|------|
| [#1293](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1293) | fix: tolerate Windows reserved launcher ports | @577fkj | 🔄 待合并 | 修复 Windows 保留端口导致的启动失败 |
| [#1538](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1538) | 补齐 #1519 的 Hook 与显式项目保护 | @Yuimi-chaya | 🔄 待合并 | #1519 追加补丁，修复项目选择后仍被改写为无项目任务的问题 |
| [#1537](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1537) | 加固 Browser/Chrome/Computer Use 内置插件保护 | @Yuimi-chaya | 🔄 待合并 | 应对新版异步刷新导致的插件状态覆盖问题 |

**项目推进评估：** 本次更新重点在供应商状态管理、插件生态保护和协议兼容性三大方向，v1.2.38 版本标志着项目在多模型支持和稳定性方面持续完善。

---

## 4. 社区热点

### 🔥 热门 Issues（按评论数排序）

| Issue # | 标题 | 评论 | 状态 | 热点分析 |
|---------|------|------|------|----------|
| [#1477](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1477) | 总是出现"没有可用的文件读取或命令工具" | 8 | 🔴 已关闭 | **工具调用失效** - 用户频繁遇到任务无法执行，工具不可用 |
| [#1421](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1421) | Codex 更新后主程序变更为 ChatGPT.exe | 8 | 🔴 已关闭 | **启动兼容** - 绿色免安装版无法启动新版 ChatGPT Desktop |
| [#1514](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1514) | 无法使用操控电脑和浏览器 | 7 | 🔴 已关闭 | **插件功能** - Computer Use / Browser 工具不可用 |
| [#1417](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1417) | macOS 使用 codex++ 启动后 UI 频闪 | 6 | 🔴 已关闭 | **界面稳定性** - macOS 平台交互异常 |
| [#1523](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1523) | 界面卡死，因日志快速积累过大导致 | 4 | 🟡 已打开 | **性能问题** - 日志积累至 4G，界面加载卡死 |
| [#1513](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1513) | 使用 5.6 模型时 agent 无法调用工具 | 4 | 🔴 已关闭 | **模型兼容** - GPT-5.6 工具调用异常 |
| [#1512](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1512) | 供应商配置列表无法滚动 | 4 | 🔴 已关闭 | **UI Bug** - 列表滚动失效 |
| [#754](https://github.com/BigPizzaV3/CodexPlusPlus/issues/754) | 官方登录+API混入模式无法调用模型 | 4 | 🟡 已打开 | **混合模式** - 长期未解决的认证问题 |

### 💡 热点诉求分析

1. **工具调用稳定性（#1477, #1513, #1464）**：GPT-5.6 系列模型的工具调用问题持续被反馈，涉及文件读取、Shell 执行、Computer Use 等核心功能
2. **插件生态（#1514, #1499, #1437, #1507, #1491）**：Browser/Chrome/Computer Use 插件在多个平台出现可用性问题
3. **供应商切换（#1519 已修复，#1527 新增）**：状态保留和偏好同步问题已通过 PR 修复，但仍有新反馈
4. **界面性能（#1523, #1417, #1540）**：日志积累、UI 频闪、界面卡死等问题影响用户体验

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

| Issue # | 标题 | 严重程度 | 状态 | Fix PR | 说明 |
|---------|------|----------|------|--------|------|
| [#1477](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1477) | 工具调用不可用 | 🔴 高 | ✅ 已关闭 | - | 运行时频繁提示无工具可用 |
| [#1421](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1421) | ChatGPT.exe 启动兼容 | 🔴 高 | ✅ 已关闭 | [#1525](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1525) | 绿色版主程序变更导致无法启动 |
| [#1513](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1513) | GPT-5.6 工具调用失效 | 🔴 高 | ✅ 已关闭 | [#1447](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1447) | 5.6 模型无法使用 agent 工具 |
| [#1539](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1539) | 工具调用在协议转换时丢失 | 🔴 高 | 🟡 已打开 | - | GLM/DeepSeek 等模型 tool_calls 丢失 |

### 🟡 中优先级 Bug

| Issue # | 标题 | 严重程度 | 状态 | Fix PR | 说明 |
|---------|------|----------|------|--------|------|
| [#1523](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1523) | 日志积累导致界面卡死 | 🟡 中 | 🟡 已打开 | - | 需异步加载和自动清理 |
| [#1417](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1417) | macOS UI 频闪 | 🟡 中 | ✅ 已关闭 | - | 页面交互异常 |
| [#1535](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1535) | 死循环消耗大量 token | 🟡 中 | ✅ 已关闭 | - | 复杂任务触发死循环 |

### 🟢 低优先级 / 已修复

| Issue # | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#1512](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1512) | 供应商列表无法滚动 | ✅ 已关闭 | UI 滚动问题 |
| [#1473](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1473) | AppTranslocation 路径错误 | ✅ 已关闭 | macOS 启动路径问题 |
| [#631](https://github.com/BigPizzaV3/CodexPlusPlus/issues/631) | image_url 反序列化失败 | ✅ 已关闭 | 多模态消息处理 |

**Bug 修复率：** 43 条 Issues 中 30 条已关闭，修复率约 **70%**，响应及时。

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue # | 标题 | 类型 | 状态 | 可行性评估 |
|---------|------|------|------|------------|
| [#1191](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1191) | 自动过滤不支持多模态模型的消息图片 | Feature | ✅ 已关闭 | ✅ 已实现（#1405 VLM 分析） |
| [#1527](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1527) | 切换供应商保留本地偏好 | Config | ✅ 已关闭 | ✅ 已实现（#1519） |

### 📋 路线图信号

1. **协议兼容性增强**：GLM/DeepSeek 等国产模型的 tool_calls 转发问题（#1539）可能推动 Responses API 兼容性改进
2. **日志与性能优化**：#1523 提出的日志异步加载和自动清理需求，可能成为下一版本优化方向
3. **插件生态加固**：#1537 PR 正在处理 Browser/Chrome/Computer Use 的异步刷新保护

---

## 7. 用户反馈摘要

### ✅ 用户满意点

- **多模型支持**：GPT-5.6 系列元数据补全获得正面反馈
- **音频转录**：新增的 audio transcriptions 代理支持满足语音场景需求
- **VLM 分析**：纯文本模型的图片处理能力受到关注

### ⚠️ 用户痛点

| 痛点 | 相关 Issue | 影响范围 |
|------|-----------|----------|
| 工具调用不稳定 | #1477, #1513, #1464 | 核心功能体验 |
| 界面卡死/频闪 | #1523, #1417, #1540 | macOS/Windows 多平台 |
| 插件不可用 | #1514, #1499, #1437, #1507 | 浏览器/Computer Use |
| 供应商切换状态丢失 | #1527, #754 | 多供应商用户 |
| 死循环消耗 token | #1535 | 成本控制 |

### 💬 典型用户场景

> **#1477 用户反馈**："运行时经常出现'当前任务无法继续执行：本轮没有可用的文件读取或命令执行工具'，严重影响使用体验。"

> **#1535 用户反馈**："近期几个版本总是出现自动陷入死循环问题，无辜消耗大量 token。当让 codex++ 分析大项目，或者说思考度大的问题就会一直陷入死循环。"

---

## 8. 待处理积压

### ⏳ 长期未解决 Issue

| Issue # | 标题 | 创建时间 | 状态 | 关注度 | 说明 |
|---------|------|----------|------|--------|------|
| [#754](https://github.com/BigPizzaV3/CodexPlusPlus/issues/754) | 官方登录+API混入模式无法调用模型 | 2026-06-07 | 🟡 已打开 | 4 评论 | 长期未解决，混合认证模式问题 |
| [#1539](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1539) | 工具调用在协议转换时丢失 | 2026-07-16 | 🟡 已打开 | 1 评论 | 新报告，涉及 MCP 和 tool_calls |
| [#1540](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1540) | 界面卡死，切换会话后无法操作 | 2026-07-16 | 🟡 已打开 | 1 评论 | 新报告，界面稳定性 |

### ⚠️ 维护者提醒

1. **#754 长期未解决**：自 6 月 7 日创建至今，官方登录+API 混入模式问题仍未完全修复，建议优先排查
2. **#1539 新报告**：国产模型 tool_calls 丢失问题可能影响 GLM/DeepSeek 用户群体
3. **macOS 稳定性**：多个 macOS 相关 Issue（#1417, #1473, #1491）表明该平台需要更多测试覆盖

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 43 条/24h | 📈 较高 |
| PR 合并率 | 5/8 (62.5%) | ✅ 良好 |
| Bug 修复率 | 30/43 (70%) | ✅ 良好 |
| 版本发布 | v1.2.38 | 🆕 最新 |
| 待合并 PRs | 3 条 | ⏳ 需关注 |

---

**报告生成时间：** 2026-07-17  
**数据来源：** GitHub Codex++ Repository  
**分析师：** AI Assistant

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*