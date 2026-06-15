# OpenClaw 生态日报 2026-06-15

> Issues: 235 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-15 04:18 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**: 2026-06-15  
**项目**: openclaw/openclaw  
**数据窗口**: 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **235 条 Issues 更新**（新开/活跃 204 条，关闭 31 条）和 **500 条 PR 更新**（待合并 422 条，已合并/关闭 78 条）。项目发布了 **v2026.6.8-beta.1** 测试版，重点改进 Telegram 和 WhatsApp 的富文本消息投递能力。社区讨论围绕 **会话状态管理**（`EmbeddedAttemptSessionTakeoverError`）、**消息丢失**和**重复投递**问题展开，多个 P1 级别回归 Bug 持续发酵。PR 积压较重（422 条待合并），建议优先处理已标记 `automerge armed` 的诊断修复 PR。

---

## 2. 版本发布

### ✅ v2026.6.8-beta.1 已发布

**发布时间**: 2026-06-15  
**版本类型**: Beta 测试版

**主要更新亮点**:

| 改进项 | 说明 |
|--------|------|
| **Telegram 富文本支持** | 支持结构化富文本、表格、列表、可展开引用块（blockquote） |
| **CLI 后端投递优化** | 保留提示词的 CLI 后端投递方式更稳定 |
| **WhatsApp 投递增强** | 富媒体边界更安全，减少投递失败 |
| **原生草稿迁移** | 完成旧版原生草稿的迁移路径 |

> 📎 Release 链接: https://github.com/openclaw/openclaw/releases/tag/v2026.6.8-beta.1

**迁移注意事项**: 暂无破坏性变更报告，但建议关注富文本渲染行为变化。

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 优先级 | 说明 |
|---------|------|------|--------|------|
| [#87550](https://github.com/openclaw/openclaw/pull/87550) | fix(diagnostics): clear stale session activity | 🚀 automerge armed | P1 | 清理陈旧会话活动，修复 `blocked_tool_call` 问题 |
| [#93088](https://github.com/openclaw/openclaw/pull/93088) | fix(telegram): bind bot mentions to assistant identity | 👀 ready for maintainer look | P1 | 修复 Telegram 群组中 @bot 提及被误判为非助手消息的问题 |
| [#89041](https://github.com/openclaw/openclaw/pull/89041) | fix(discord): disable ws 8.21.0 receiver part limits | 👀 ready for maintainer look | P1 | 修复 ws 8.21.0 引入的连接限制导致的 Discord 连接断开问题 |
| [#87560](https://github.com/openclaw/openclaw/pull/87560) | fix(agents): isolate RTL lines on outbound assistant text | 👀 ready for maintainer look | P2 | 提取 RTL 隔离逻辑到共享模块，支持希伯来语/阿拉伯语正确显示 |
| [#87590](https://github.com/openclaw/openclaw/pull/87590) | fix(memory-core): show signalCount in promotion annotations | 👀 ready for maintainer look | P2 | 修复梦境提升注释中显示 `recallCount` 而非 `signalCount` 的问题 |
| [#87572](https://github.com/openclaw/openclaw/pull/87572) | fix(memory): increase QMD embedTimeoutMs default to 600s | 📣 needs proof | P2 | 将本地 GGUF 模型嵌入超时从 120s 提升至 600s |
| [#59490](https://github.com/openclaw/openclaw/pull/59490) | feat(cli): add --dry-run flag to cron add | CLOSED | P3 | CLI 新增 cron 任务的 dry-run 预览功能 |

**今日亮点**: 
- `#87550` 已进入 `automerge armed` 状态，预计将自动合并，该修复直接解决多个 P1 Issue 中报告的会话阻塞问题
- `#93088` 和 `#89041` 两个 P1 修复已准备就绪，等待维护者审核

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 👍 | 优先级 | 链接 |
|------------|------|--------|-----|--------|------|
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies sent as normal replies; /status and /model silent | 14 | 1 | P1 | 链接 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Agent repeats identical replies 2-10x on Telegram after 5.20 update | 9 | 1 | P1 | 链接 |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex app-server path causes latency/timeout/startup aborts | 9 | 1 | P1 | 链接 |
| [#86508](https://github.com/openclaw/openclaw/issues/86508) | EmbeddedAttemptSessionTakeoverError during Discord runs | 9 | 4 | P1 | 链接 |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent delivery lanes | 8 | 1 | P1 | 链接 |
| [#86184](https://github.com/openclaw/openclaw/issues/86184) | Telegram direct gets generic /new fallback after successful tool turn | 7 | 1 | P2 | 链接 |
| [#86881](https://github.com/openclaw/openclaw/issues/86881) | Gateway-lite mode without AI harness for deterministic deployments | 7 | 0 | P2 | 链接 |

### 热点分析

**核心诉求**:

1. **会话状态稳定性** — 多名用户报告 `EmbeddedAttemptSessionTakeoverError` 在 Discord、cron 任务、群聊等场景频繁出现，导致会话卡死或消息丢失
2. **Telegram 消息可靠性** — 重复投递、thread 回复降级为普通回复、/new 回退等问题影响核心体验
3. **轻量部署需求** — `#86881` 提出无 AI 引擎的 Gateway-lite 模式诉求，适合 webhook/cron/确定性插件场景

---

## 5. Bug 与稳定性

### P1 严重 Bug（需优先处理）

| Issue | 标题 | 状态 | 是否有 Fix PR | 影响范围 |
|-------|------|------|--------------|----------|
| [#87307](https://github.com/openclaw/openclaw/issues/87307) | Matrix thread replies 回归 | OPEN | ❌ 无 | Matrix 频道消息线程 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复 2-10x | OPEN | ❌ 无 | Telegram 频道 |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex 导致延迟/超时/启动中止 | OPEN | ❌ 无 | 内存模块 + Codex |
| [#86508](https://github.com/openclaw/openclaw/issues/86508) | Discord EmbeddedAttemptSessionTakeoverError | OPEN | ❌ 无 | Discord 频道 |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock 超时阻塞子代理 | OPEN | ❌ 无 | 多代理场景 |
| [#86827](https://github.com/openclaw/openclaw/issues/86827) | 群聊 session 失败后静默丢弃消息 | OPEN | ❌ 无 | 群聊场景 |
| [#87417](https://github.com/openclaw/openclaw/issues/87417) | 所有 isolated agentTurn cron 任务失败 | OPEN | ❌ 无 | Cron 调度 |
| [#87407](https://github.com/openclaw/openclaw/issues/87407) | Anthropic UND_ERR_SOCKET 触发静默回退 | OPEN | ❌ 无 | Anthropic 提供商 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway 堆内存增长至 1073MB+，cron 静默失败 | OPEN | ❌ 无 | 内存管理 |
| [#87068](https://github.com/openclaw/openclaw/issues/87068) | Telegram 重复发送 2-4x | OPEN | ❌ 无 | Telegram 频道 |
| [#86845](https://github.com/openclaw/openclaw/issues/86845) | EmbeddedAttemptSessionTakeoverError 集群（13 事件/7 任务） | OPEN | ❌ 无 | Cron + 多代理 |
| [#87263](https://github.com/openclaw/openclaw/issues/87263) | iMessage RPC watch.subscribe 超时 | OPEN | ❌ 无 | iMessage 频道 |
| [#87505](https://github.com/openclaw/openclaw/issues/87505) | web_search 在 v2026.5.26 后超时 | OPEN | ❌ 无 | Web 搜索功能 |
| [#87315](https://github.com/openclaw/openclaw/issues/87315) | WhatsApp 泄露内部工具追踪行 | OPEN | ❌ 无 | WhatsApp 安全 |
| [#87212](https://github.com/openclaw/openclaw/issues/87212) | Telegram 群组+主题会话泄露系统信封 | OPEN | ❌ 无 | Telegram 安全 |

### P2 中等 Bug

| Issue | 标题 | 状态 | 是否有 Fix PR | 备注 |
|-------|------|------|--------------|------|
| [#86184](https://github.com/openclaw/openclaw/issues/86184) | Telegram tool 成功后返回 /new 回退 | CLOSED | ❌ 无 | 已关闭 |
| [#86231](https://github.com/openclaw/openclaw/issues/86231) | Codex harness 提示延迟开销 | CLOSED | ❌ 无 | 已关闭 |
| [#86090](https://github.com/openclaw/openclaw/issues/86090) | runHeartbeatOnce 返回 ran 但无实际执行 | CLOSED | ❌ 无 | 已关闭 |
| [#84976](https://github.com/openclaw/openclaw/issues/84976) | 非 codex cron 在 codex 主模型上重复执行 | CLOSED | ❌ 无 | 已关闭 |
| [#87391](https://github.com/openclaw/openclaw/issues/87391) | Telegram 回复路由错误 | OPEN | ❌ 无 | 消息路由 |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) | 缺少任务流生命周期钩子事件 | OPEN | ❌ 无 | 插件可观测性 |
| [#87325](https://github.com/openclaw/openclaw/issues/87325) | 支持 Azure Foundry GPT Realtime Talk | OPEN | ❌ 无 | Azure 集成 |
| [#87322](https://github.com/openclaw/openclaw/issues/87322) | Mattermost 流式编辑行为异常 | OPEN | ❌ 无 | Mattermost 频道 |
| [#87295](https://github.com/openclaw/openclaw/issues/87295) | LTS 版本请求 | OPEN | ❌ 无 | 版本策略 |
| [#86861](https://github.com/openclaw/openclaw/issues/86861) | Cron 任务因 rate-limit 超时失败 | OPEN | ❌ 无 | Cron 调度 |

### 回归问题汇总

今日报告 **7 个明确标记为 regression 的 Bug**，主要集中在：
- Telegram 频道（重复投递、thread 回复降级）
- Discord 频道（连接限制、session takeover）
- Web 搜索（SSRF guard 导致超时）
- iMessage 频道（RPC 连接失败）

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 标题 | 评论数 | 优先级 | 是否有对应 PR | 分析 |
|-------|------|--------|--------|--------------|------|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) | Gateway-lite 模式（无 AI 引擎） | 7 | P2 | ❌ 无 | 确定性部署场景有明确需求 |
| [#87362](https://github.com/openclaw/openclaw/issues/87362) | 任务流生命周期钩子事件 | 4 | P2 | ❌ 无 | 插件可观测性基础能力 |
| [#87325](https://github.com/openclaw/openclaw/issues/87325) | Azure Foundry GPT Realtime Talk 支持 | 4 | P2 | ❌ 无 | 企业级 Azure 用户需求 |
| [#87295](https://github.com/openclaw/openclaw/issues/87295) | LTS 版本 | 4 | P3 | ❌ 无 | 关键项目稳定版需求强烈 |
| [#87494](https://github.com/openclaw/openclaw/issues/87494) | 集成 Cua Driver 跨平台桌面自动化 | 3 | P3 | ❌ 无 | MCP 原生桌面自动化新方向 |
| [#86573](https://github.com/openclaw/openclaw/issues/86573) | inboundContextHook 注入/拒绝钩子 | 3 | P3 | ❌ 无 | 多代理上下文路由需求 |
| [#87002](https://github.com/openclaw/openclaw/issues/87002) | Telegram DM 消息去抖/聚合窗口 | 3 | P3 | ❌ 无 | 快速连续消息处理优化 |

### 已有关联 PR 的功能

| PR | 标题 | 状态 | 对应 Issue |
|----|------|------|-----------|
| [#91476](https://github.com/openclaw/openclaw/pull/91476) | feat(claude-cli): add ultracode backend config flag | ⏳ waiting on author | #91475 |
| [#70990](https://github.com/openclaw/openclaw/pull/70990) | feat(plugins): add model failover and terminal failure hooks | ⏳ waiting on author | - |
| [#89569](https://github.com/openclaw/openclaw/pull/89569) | feat(channels): add pre-auth access requests and grouped DM allowlists | ⏳ waiting on author | - |
| [#87568](https://github.com/openclaw/openclaw/pull/87568) | feat(ui): add KaTeX math rendering support | ⏳ waiting on author | - |
| [#87529](https://github.com/openclaw/openclaw/pull/87529) | Add generic webhooks plugin | ⏳ waiting on author | - |

---

## 7. 用户反馈摘要

### 真实痛点提炼

**1. 生产环境可靠性不足**
> 多名用户报告 Gateway 长时间运行后堆内存从 ~558MB 增长至 1073MB+，导致 cron 任务静默失败、无输出、无推送、无错误上报（[#87109](https://github.com/openclaw/openclaw/issues/87109)）

**2. 消息丢失/静默失败**
> Telegram 直接会话在完成 tool-heavy 任务后，用户只收到通用回退消息而非实际回复（[#86184](https://github.com/openclaw/openclaw/issues/86184)）

**3. 升级后回归严重**
> 从 2026.5.12 升级到 5.20 后，Agent 在 Telegram 上发送 2-10 次相同回复（[#86519](https://github.com/openclaw/openclaw/issues/86519)）

**4. 开发者体验问题**
> `openclaw doctor` 报告 "Could not determine the installed Chrome version" 但 Chrome 148 已正确安装（[#87312](https://github.com/openclaw/openclaw/issues/87312)）

**5. 企业级功能缺口**
> 飞书插件读取卡片消息时返回 `[Interactive Card]` 而非实际内容（[#78289](https://github.com/openclaw/openclaw/issues/78289)）

### 正面反馈信号

- `#87447` 报告梦境日记功能正常运行，只是文件增长无上限（需优化，非功能缺陷）
- `#87592` PR 获得正面响应：用户希望侧边栏增加"重置会话"按钮

---

## 8. 待处理积压

### 长期未响应的 P1 Issues（>7 天无维护者回复）

| Issue | 标题 | 创建时间 | 最后更新 | 状态 |
|-------|------|----------|----------|------|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复 2-10x | 2026-05-25 | 2026-06-15 | OPEN, clawsweeper:no-new-fix-pr |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex 延迟问题 | 2026-05-26 | 2026-06-15 | OPEN,

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-06-15 | **覆盖项目**: OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

2026 年中，个人 AI 助手与自主智能体开源生态呈现**两极分化格局**：头部项目（OpenClaw、Hermes Agent）保持每日数百量级的 Issues/PR 吞吐，迭代节奏接近商业级 SaaS；腰部项目（Codex++）以功能增强和稳定性修复为重心；尾部项目（cc-haha）则面临社区反馈积压、贡献断层的风险。**跨平台消息路由、多 Agent 会话管理、Provider 抽象与 OAuth 集成**构成当前生态的三大技术主线，而**内存/上下文泄漏、重复投递、静默失败**则是各项目共同面临的可靠性瓶颈。

---

## 2. 各项目活跃度对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| **Issues 活跃量** | 235 条/24h | 98 条/24h | 9 条/24h | 38 条/24h |
| **PR 活跃量** | 500 条/24h | 500 条/24h | 0 条/24h | 6 条/24h |
| **待合并 PR** | 422 条 | 373 条 | 0 条 | 5 条 |
| **今日 Release** | v2026.6.8-beta.1 | 无 | 无 | v1.2.9 + v1.2.8 |
| **P1 Bug 未修复** | 13 个 | 2 个 | 0 个 | 3 个高严重性 |
| **Issue 响应率** | 较高（多 PR 在途） | 较高（1-2 天内响应） | **0%**（0/9 有官方回复） | 中等（部分 Issue 已关闭） |
| **健康度评级** | ⚠️ 高风险（积压重） | ✅ 良好 | 🔴 预警 | 🟡 待观察 |

**数据洞察**：OpenClaw 与 Hermes Agent 的 PR 积压均超 370 条，反映出维护团队 review 能力成为瓶颈；cc-haha 的零 PR 活动与零响应率是最危险的信号。

---

## 3. OpenClaw 在生态中的定位

### 优势

- **最全的多平台覆盖**：Telegram、WhatsApp、Discord、Matrix、iMessage 等 10+ 渠道原生集成，生态中覆盖最广
- **最高的事件吞吐**：单日 235 Issues + 500 PRs，活跃度是 Hermes Agent 的 2.4 倍、cc-haha 的 26 倍
- **自动化合并机制**：`automerge armed` 流程成熟，关键修复可快速落地

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| **核心定位** | 多渠道消息路由 + AI Agent 编排 | 本地 Agent 运行时 + Provider 抽象 | 多 Agent 并行 UI | Codex 桌面增强层 |
| **架构风格** | 微内核 + 插件化渠道适配器 |单体 + Provider 插件体系 | 前端主导（Electron?） | 中间件/注入式 |
| **部署模式** | Gateway（自托管） | Desktop / CLI / Gateway | Web UI | 桌面客户端 |
| **AI Provider** | 多 Provider 抽象 | 多 Provider 抽象 + OAuth | 依赖 Codex 本身 | 透传 Codex API |

### 社区规模对比

OpenClaw 的 Issue 规模（235 条/天）是 Hermes Agent（98 条）的 **2.4 倍**，但两者 PR 积压量相当（422 vs 373），说明 OpenClaw 的社区贡献者密度更高，但维护者 review 速度未能匹配。Codex++ 和 cc-haha 的规模不在同一量级。

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，代表行业共识方向：

### 🔴 多 Provider 抽象与 OAuth 集成

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | Anthropic `UND_ERR_SOCKET` 静默回退（#87407） |
| **Hermes Agent** | Claude 订阅 OAuth 支持（#25267，21 👍）、Codex 原生 web_search（#16634） |
| **Codex++** | 多供应商切换与 TOML 配置回填（#618） |

**分析**：各项目均在强化 Provider 层的稳定性与灵活性，OAuth 认证成为企业用户的核心诉求。

### 🔴 会话状态管理与隔离

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | `EmbeddedAttemptSessionTakeoverError` 集群（#86845）、Session write-lock 超时（#86538） |
| **Hermes Agent** | 并发会话共享内存注入导致数据交叉污染（#46303） |
| **cc-haha** | 多 Agent 并行 UI 无工具活动显示（#829） |

**分析**：多 Agent 并发场景下的状态隔离是全生态共同难题，尚未出现统一解决方案。

### 🟠 内存管理与资源泄漏

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | Gateway 堆内存从 ~558MB 增长至 1073MB+（#87109） |
| **Hermes Agent** | 内存上下文行为优化（#31584） |

**分析**：长时间运行稳定性是生产部署的核心门槛，各项目均面临内存泄漏或无界增长问题。

### 🟡 平台特定可靠性

| 平台 | 受影响项目 | 问题类型 |
|------|-----------|----------|
| **Telegram** | OpenClaw、Codex++ | 重复投递、thread 回复降级、富文本支持 |
| **Discord** | OpenClaw | 连接断开、Session takeover |
| **Matrix** | Hermes Agent | 媒体发送一次性密钥耗尽、thread 回复回归 |
| **macOS** | Codex++ | Apple Silicon 界面空白、盒盖断连 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| **目标用户** | 自托管多渠道 AI 助手运营者 | 本地 AI 开发者、隐私敏感用户 | 多 Agent 并行任务执行者 | Codex 桌面用户增强 |
| **核心价值** | 跨平台消息统一接入 | 本地运行时 + 灵活 Provider | 多 Agent 并行 UI | 插件生态 + 配置增强 |
| **技术架构** | Gateway 中心化路由 | Desktop/CLI 去中心化 | 前端 UI 聚合 | 中间件注入 |
| **护城河** | 渠道适配器数量 | Provider 生态 + OAuth | 多 Agent 编排 UI | Codex 原生体验增强 |
| **当前瓶颈** | P1 Bug 积压严重 | PR review 积压 | 社区响应断裂 | 启动稳定性回归 |

**关键差异**：OpenClaw 是**渠道集成层**，解决"AI 如何触达用户"；Hermes Agent 是**运行时层**，解决"AI 如何本地运行"；cc-haha 是**编排 UI 层**，解决"多 Agent 如何协同"；Codex++ 是**体验增强层**，解决"现有工具体验如何优化"。

---

## 6. 社区热度与成熟度

### 活跃度分层

```
🔥 头部（快速迭代阶段）
├── OpenClaw:     235 Issues/天，500 PRs/天，beta 频繁发布
└── Hermes Agent: 98 Issues/天，500 PRs/天，功能 PR 持续推进

🟡 腰部（质量巩固阶段）
└── Codex++:      38 Issues/天，6 PRs/天，patch 版本密集修复

🔴 尾部（停滞/预警阶段）
└── cc-haha:      9 Issues/天，0 PRs/天，0% 响应率
```

### 成熟度评估

| 项目 | 阶段判断 | 依据 |
|------|----------|------|
| **OpenClaw** | 快速迭代 + 质量阵痛期 | 功能快速推进但 P1 Bug 积压 13 个，regression 问题多 |
| **Hermes Agent** | 稳定迭代期 | P1 Bug 仅 2 个且有明确修复路径，社区响应及时 |
| **Codex++** | 密集修复期 | patch 版本连发，启动回归问题突出但修复速度快 |
| **cc-haha** | 社区濒临失活 | 无 PR 活动，Issue 零响应，积压 9 条无跟进 |

---

## 7. 值得关注的趋势信号

### 📈 趋势一：多 Agent 并发场景成为新刚需

**信号**：OpenClaw 的 Session write-lock 超时（#86538）、Hermes Agent 的并发内存隔离问题（#46303）、cc-haha 的多 Agent 并行 UI（#829）均指向同一方向——**当前架构在多 Agent 并发场景下存在系统性设计缺陷**。这是 2026 年 AI Agent 从单 Agent 向多 Agent 协作演进的缩影。

### 📈 趋势二：生产部署可靠性缺口显著

**信号**：OpenClaw 内存增长至 1073MB+ 导致 cron 静默失败（#87109）、Gateway 堆内存问题与 Hermes Agent 的内存管理 Issue 呼应。**"能跑起来"到"能稳定跑"之间的 gap 是全生态共同挑战**，预计未来 3-6 个月将涌现更多专注于长时间运行稳定性的工具和最佳实践。

### 📈 趋势三：OAuth 与 Provider 抽象成为生态基础设施

**信号**：Hermes Agent 的 Claude 订阅 OAuth（21 👍）、OpenClaw 的 Anthropic 静默回退、Codex++ 的多供应商 TOML 配置——三方独立演进却收敛到同一需求。**Provider 层的标准化认证与优雅降级将成为开源 Agent 项目的标配能力**，类似 `litellm` 的抽象层在生态中的价值将持续放大。

### 📈 趋势四：桌面端增强成为轻量落地路径

**信号**：Codex++ 以中间件形式降低用户门槛（无需自托管），Hermes Agent Desktop 专注本地体验，cc-haha 以 UI 为核心。**对于非技术用户，"在现有工具上增强"比"部署独立 Agent 系统"门槛低得多**，桌面端增强路线在 2026 年下半年仍有显著增长空间。

### 📈 趋势五：cc-haha 模式警示——社区响应断裂即项目死亡

**信号**：cc-haha 9 条 Issue 零官方回复、零 PR 活动，与 OpenClaw 422 条 PR 积压形成对比。**开源 Agent 项目的生死线不在代码质量，而在社区信任的维护效率**。建议技术决策者在评估/选型时，将 Issue 响应率和 PR 合并速度作为核心指标。

---

## 📋 决策参考摘要

| 决策场景 | 推荐关注 |
|----------|----------|
| **自托管多渠道 AI 助手** | 选 OpenClaw，接受 beta 迭代节奏，关注 P1 Bug 修复进度 |
| **本地隐私敏感部署** | 选 Hermes Agent，社区健康度最佳，Provider 生态成熟 |
| **增强现有 Codex 体验** | 选 Codex++，但需关注启动稳定性 patch 的发布节奏 |
| **多 Agent 并行任务** | 暂不推荐 cc-haha，建议等待社区恢复或自建方案 |
| **技术投资/生态研究** | 优先跟进 OpenClaw + Hermes Agent 的 Provider/OAuth 抽象演进 |

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期**: 2026-06-15  
**项目**: NousResearch/hermes-agent  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日保持极高的社区活跃度，共处理 **98 条 Issues**（84 新开/活跃，14 已关闭）和 **500 条 PRs**（127 已合并/关闭，373 待处理）。项目整体向前推进显著，尤其在平台集成（Matrix、Feishu）、安全修复（密码脱敏、OAuth 凭证解析）和桌面端体验优化方面有实质性进展。值得注意的是，今日未发布新版本，但有多个 P1/P2 级 Bug 已通过 PR 修复，社区讨论热度较昨日持平，项目健康度评级为 **良好**。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 PRs，按影响范围排序：

### 🔧 关键修复

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#46407](https://github.com/NousResearch/hermes-agent/pull/46407) | fix(matrix): reuse single adapter for multi-chunk media sends | **OPEN** | 修复 Matrix 媒体发送时每块创建新适配器导致的一次性密钥耗尽和消息静默丢失问题（P1） |
| [#46315](https://github.com/NousResearch/hermes-agent/pull/46315) | fix(gateway): deterministic systemd unit PATH for named profiles | **OPEN** | 确保服务单元 PATH 稳定，不受 profile 调用上下文影响 |
| [#46289](https://github.com/NousResearch/hermes-agent/pull/46289) | fix(s6): clear stale log lock before startup | **CLOSED** | 解决 virtiofs 容器中 s6-log 锁文件导致的启动死循环问题 |
| [#46433](https://github.com/NousResearch/hermes-agent/pull/46433) | fix(gateway): surface broken post-update models before chat goes dark | **OPEN** | 更新后模型故障时主动警告，避免静默失败 |
| [#46348](https://github.com/NousResearch/hermes-agent/pull/46348) | fix(agent): respect disabled_toolsets in memory provider tool injection | **CLOSED** | 修复 `disabled_toolsets=['memory']` 时内存工具仍被泄露的问题 |

### ✨ 新功能

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#46451](https://github.com/NousResearch/hermes-agent/pull/46451) | feat: add Unsloth Studio plugin | **OPEN** | 新增本地微调 UI 工作流插件，支持模型工具和 CLI 界面 |
| [#36286](https://github.com/NousResearch/hermes-agent/pull/36286) | feat(minimax): add minimax-cn-oauth provider for China-region OAuth | **OPEN** | 新增中国区 OAuth provider，支持 minimax-cn-oauth |

### 🛡️ 安全与稳定性

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#46453](https://github.com/NousResearch/hermes-agent/pull/46453) | fix(browser): suppress macOS "Keychain Not Found" modal | **OPEN** | 修复后台/无会话环境下 Chrome 自动启动时的 Keychain 弹窗问题 |
| [#17480](https://github.com/NousResearch/hermes-agent/pull/17480) | fix(auth): resolve Codex usage credentials from auth fallbacks | **OPEN** | 增强 OAuth 凭证回退解析逻辑 |

---

## 4. 社区热点

今日讨论最活跃的 Issues：

### 🔥 最热门 Issue

**[#7237](https://github.com/NousResearch/hermes-agent/issues/7237)** — `[CLOSED]` **Response truncated due to output length limit**  
- **评论数**: 46 | **👍**: 6  
- **核心问题**: CLI/Gateway 消息场景下生成长文本时频繁触发截断错误  
- **诉求分析**: 用户需要更智能的上下文压缩或输出分段机制，而非简单截断  
- **状态**: 已关闭（可能通过其他 PR 间接修复）

**[#10567](https://github.com/NousResearch/hermes-agent/issues/10567)** — `[OPEN]` **Add --host and CORS config for hermes dashboard to enable Tailscale/VPN access**  
- **评论数**: 10 | **👍**: 12  
- **核心诉求**: Dashboard 默认绑定 127.0.0.1 且 CORS 硬编码，阻止远程访问  
- **用户场景**: 通过 Tailscale/VPN 远程使用 Web UI 的开发者  
- **优先级**: P3，建议纳入下一版本

**[#25267](https://github.com/NousResearch/hermes-agent/issues/25267)** — `[OPEN]` **Claude Agent SDK model provider with subscription OAuth (Codex-style)**  
- **评论数**: 7 | **👍**: 21  
- **核心诉求**: 允许使用 Claude 订阅而非单独 API 密钥计费  
- **用户价值**: 避免双重付费，降低使用门槛  
- **优先级**: P3，已有相关 PR [#16634](https://github.com/NousResearch/hermes-agent/pull/16634) 推进

### 💬 其他高互动讨论

| Issue | 主题 | 评论 | 👍 | 状态 |
|-------|------|------|-----|------|
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | Desktop 安装失败（no git） | 8 | 0 | CLOSED |
| [#45058](https://github.com/NousResearch/hermes-agent/issues/45058) | web_search 静默路由到 Parallel.ai | 7 | 15 | CLOSED |
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | 密码脱敏后模型仍读取历史 | 7 | 0 | OPEN (P1) |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | memory-context 应为后台上下文 | 6 | 0 | OPEN (P2) |

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 P1（紧急）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) | 密码被 `***` 替换后，模型读取对话历史导致第二次工具调用失败 | OPEN | 无 |
| [#32091](https://github.com/NousResearch/hermes-agent/issues/32091) | 非默认 profile 创建的 Cron jobs 写入错误路径，成为静默孤儿 | OPEN | 无 |

### 🟠 P2（高优先级）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | 并发会话共享内存注入和 git worktree，无隔离机制 | OPEN | 无 |
| [#44560](https://github.com/NousResearch/hermes-agent/issues/44560) | model.options handler 同步调用所有 provider，导致 WebSocket 超时 | OPEN | 无 |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | Windows 11 Desktop 安装失败（no git） | CLOSED | 无 |
| [#45519](https://github.com/NousResearch/hermes-agent/issues/45519) | GLM-5.2 上下文窗口误检测为 202,752 | CLOSED | 无 |
| [#23704](https://github.com/NousResearch/hermes-agent/issues/23704) | Mattermost 无法发送文件附件 | OPEN | 无 |

### 🟡 P3（普通）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) | Ollama reasoning 模型返回空内容 | OPEN | 无 |
| [#43389](https://github.com/NousResearch/hermes-agent/issues/43389) | memory update_fact 遇到 UNIQUE 约束时崩溃 | OPEN | 无 |
| [#40480](https://github.com/NousResearch/hermes-agent/issues/40480) | Desktop 自定义 provider 模型不在下拉菜单显示 | OPEN | 无 |
| [#42651](https://github.com/NousResearch/hermes-agent/issues/42651) | Desktop 显示所有 profile 的 cronjobs（应按 profile 隔离） | OPEN | 无 |

---

## 6. 功能请求与路线图信号

今日功能请求反映了以下趋势：

### 🚀 高价值功能请求

| Issue | 功能 | 👍 | 预计版本 | 相关 PR |
|-------|------|-----|----------|--------|
| [#10567](https://github.com/NousResearch/hermes-agent/issues/10567) | Dashboard 支持 --host 和 CORS 配置（远程访问） | 12 | 可能 v0.17 | 无 |
| [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | Claude 订阅 OAuth 支持 | 21 | 待定 | [#16634](https://github.com/NousResearch/hermes-agent/pull/16634) |
| [#42199](https://github.com/NousResearch/hermes-agent/issues/42199) | Desktop App 支持 Intel Mac (x86_64) | 0 | 待定 | 无 |
| [#46253](https://github.com/NousResearch/hermes-agent/issues/46253) | GBrain 作为 memory provider 插件 | 0 | 待定 | 无 |
| [#44107](https://github.com/NousResearch/hermes-agent/pull/44107) | 统一 dashboard 外观和 chat skins | 0 | 进行中 | [#44107](https://github.com/NousResearch/hermes-agent/pull/44107) |

### 📊 功能请求分布

- **桌面端体验优化**: 5 个请求（Intel Mac 支持、字体缩放、自动滚动、侧边栏摘要、无障碍修复）
- **平台集成增强**: 3 个请求（Tailscale/VPN 访问、Telegram Rich Messages、Mattermost 文件）
- **Provider/认证**: 3 个请求（Claude OAuth、Minimax CN OAuth、账户移除）
- **内存/上下文管理**: 2 个请求（GBrain 插件、memory-context 行为）

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点：

### 😤 主要痛点

1. **安全顾虑**: Issue [#43083](https://github.com/NousResearch/hermes-agent/issues/43083) 暴露密码脱敏不彻底的问题，用户担心敏感信息泄露
2. **平台兼容性问题**: Windows Desktop 安装失败（#38963）、Intel Mac 无法运行（#42199）影响用户覆盖
3. **并发场景缺失**: 多个用户报告并发会话导致数据交叉污染（#46303）
4. **计费模式不合理**: Claude 用户被迫双重付费（订阅 + API），社区强烈要求 OAuth 支持（#25267，21 👍）

### 😊 正面反馈信号

1. **功能完整性认可**: Issue [#41553](https://github.com/NousResearch/hermes-agent/issues/41553) 提到社区工具 `hermes-workspace` 与官方 Desktop 的集成需求，说明生态活跃
2. **快速迭代认可**: 多个 Bug 在 1-2 天内被修复并合并（#45058、#38963）

### 💡 使用场景洞察

- **远程工作流**: Tailscale/VPN 用户需要 Dashboard 远程访问（#10567）
- **本地微调**: Unsloth Studio 插件需求（#46451）表明用户希望在 Hermes 内完成模型训练
- **无障碍需求**: 屏幕阅读器用户反馈 Hermes Desktop 过于"话痨"（#46225）

---

## 8. 待处理积压

以下 Issues 长期未响应或未分配，建议维护者关注：

### ⚠️ 长期未解决

| Issue | 年龄 | 描述 | 优先级 | 建议 |
|-------|------|------|--------|------|
| [#12020](https://github.com/NousResearch/hermes-agent/issues/12020) | ~2 个月 | 关闭 `hermes.tool_progress` 事件输出的开关 | P3 | 评估实现复杂度 |
| [#16108](https://github.com/NousResearch/hermes-agent/issues/16108) | ~2 个月 | Gateway 事件幂等性、取消和过期响应抑制 | P3 | 核心可靠性功能 |
| [#16634](https://github.com/NousResearch/hermes-agent/pull/16634) | ~2 个月 | Codex 原生 web_search 支持 | P3 | 推进合并 |
| [#21774](https://github.com/NousResearch/hermes-agent/pull/21774) | ~1 个月 | Google Workspace OAuth 硬化 | P3 | 推进合并 |

### 📈 PR 积压警告

- **373 个 PR 待合并**，其中包含多个已审查但未合并的功能 PR
- 建议优先处理涉及安全（P1/P2）的 PR，避免安全债务积累

---

## 📋 总结建议

| 维度 | 状态 | 建议 |
|------|------|------|
| **Bug 修复** | P1 有 2 个未修复 | 优先处理密码脱敏和 Cron jobs 路径问题 |
| **功能推进** | 多个 OAuth/平台集成 PR 待合并 | 加快 #16634、#21774 审查 |
| **社区响应** | 高互动 Issue 普遍在 1-2 天内响应 | 保持当前响应速度 |
| **PR 积压** | 373 个待处理 | 建议增加 reviewer 或自动化测试加速 |

---

*报告生成时间: 2026-06-15 | 数据来源: GitHub Hermes Agent Repository*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-06-15  
**项目仓库**：https://github.com/NanmiCoder/cc-haha  
**数据周期**：2026-06-14 00:00 至 2026-06-15 00:00 (UTC+8)

---

## 1. 今日速览

2026-06-15 项目活跃度**中等偏低**。过去24小时内共产生 **9 条新 Issue**，但 **0 条 PR 更新**，无版本发布，社区呈现"问题报告多、解决进度少"的态势。Issue 类型以 Bug 报告为主（占比 100%），其中 **超时配置失效**、**Token 用量数据丢失**、**多 Agent 并行 UI 问题** 等问题引发较多讨论。整体项目处于问题收集阶段，建议维护者尽快响应高优先级 Bug，避免积压影响用户体验。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**过去24小时无 PR 合并或关闭**

项目当前无代码贡献活动，建议关注 Issue 积压情况，尽快将社区反馈转化为可合并的修复 PR。

---

## 4. 社区热点

以下 Issues 讨论较为活跃，值得重点关注：

| Issue 编号 | 标题 | 评论数 | 链接 |
|-----------|------|--------|------|
| #826 | [BUG] 自定义请求超时配置没预期工作 | **4** | [查看](https://github.com/NanmiCoder/cc-haha/issues/826) |
| #820 | 会话结束，标题下方会显示token数量，但是关闭标签页，再打开，token用量数据丢失 | **3** | [查看](https://github.com/NanmiCoder/cc-haha/issues/820) |
| #830 | [BUG] 推理强度最高报错以及上下文窗口 | **1** | [查看](https://github.com/NanmiCoder/cc-haha/issues/830) |

### 热点分析

- **#826 超时配置问题**：多位用户反馈自定义超时设置未生效，这是影响核心功能的阻塞性问题，讨论热度最高（4条评论），需优先处理。
- **#820 Token 用量数据丢失**：用户反映会话关闭后 Token 统计丢失，涉及数据持久化逻辑，影响用户使用体验和成本追踪。
- **#830 推理强度报错**：用户在使用最高推理强度时遇到报错，可能与上下文窗口限制有关，需确认是否为配置问题或代码缺陷。

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

### 🔴 高优先级（影响核心功能）

| Issue 编号 | 标题 | 评论数 | 是否有 Fix PR |
|-----------|------|--------|---------------|
| #826 | [BUG] 自定义请求超时配置没预期工作 | 4 | ❌ 无 |
| #820 | 会话关闭后 Token 用量数据丢失 | 3 | ❌ 无 |
| #830 | [BUG] 推理强度最高报错以及上下文窗口 | 1 | ❌ 无 |
| #831 | 制定计划后提示 "You are not in plan mode" | 0 | ❌ 无 |

### 🟡 中优先级（功能异常）

| Issue 编号 | 标题 | 评论数 | 是否有 Fix PR |
|-----------|------|--------|---------------|
| #829 | 多 Agent 并行，没有任何工具活动显示 | 0 | ❌ 无 |
| #827 | 粘贴图片发送后，输入框里还是有图片 | 0 | ❌ 无 |
| #828 | askuserrequest 出现 tool error | 0 | ❌ 无 |

### 🟢 低优先级（UI/体验问题）

| Issue 编号 | 标题 | 评论数 | 是否有 Fix PR |
|-----------|------|--------|---------------|
| #833 | 输入 "/agent [AgentName] message" 后样式问题 | 0 | ❌ 无 |

---

## 6. 功能请求与路线图信号

| Issue 编号 | 标题 | 类型 | 链接 |
|-----------|------|------|------|
| #832 | 供应商健康检查不再发送真实的流式模型请求 | Feature | [查看](https://github.com/NanmiCoder/cc-haha/issues/832) |

### 功能请求分析

- **#832 健康检查优化**：用户建议供应商健康检查应避免发送真实流式模型请求，以节省 API 调用成本。这是一个合理的性能优化需求，符合"减少不必要的 API 消耗"的用户期望。建议维护者评估可行性后纳入路线图。

---

## 7. 用户反馈摘要

从 Issue 评论和内容中提炼的用户痛点：

### 核心痛点

1. **配置失效问题**：用户反馈自定义超时配置无法正常工作，怀疑是代码逻辑问题。
2. **数据持久化缺陷**：Token 用量数据在标签页关闭后丢失，用户无法追踪历史使用情况。
3. **多 Agent 体验不佳**：并行执行时 UI 不显示工具活动，用户感知不透明。

### 使用场景

- 用户尝试在复杂对话场景下使用多 Agent 并行功能。
- 用户依赖 Token 统计进行成本控制。
- 用户使用高推理强度进行复杂任务处理。

### 满意/不满意的地方

- **不满意**：Bug 反馈后响应速度慢，多个 Issue 无评论回复。
- **期望**：希望健康检查不消耗真实 API 配额，希望配置项能按预期工作。

---

## 8. 待处理积压

以下 Issue 长期未响应或问题较为严重，需维护者关注：

| Issue 编号 | 标题 | 创建时间 | 评论数 | 状态 | 建议 |
|-----------|------|----------|--------|------|------|
| #820 | Token 用量数据丢失 | 2026-06-13 | 3 | OPEN | 高优先级，需修复数据持久化逻辑 |
| #826 | 超时配置失效 | 2026-06-14 | 4 | OPEN | 高优先级，阻塞核心功能 |
| #829 | 多 Agent 并行 UI 问题 | 2026-06-14 | 0 | OPEN | 需确认是否为 UI 渲染问题 |

**积压风险提示**：当前 9 条 Issue 均处于 OPEN 状态且无 Fix PR，建议维护者按优先级逐一响应，避免社区活跃度下降。

---

## 📊 数据统计

| 指标 | 数值 |
|------|------|
| 新增 Issue | 9 |
| 关闭 Issue | 0 |
| 新增 PR | 0 |
| 合并 PR | 0 |
| 新版本发布 | 0 |
| Issue 响应率 | 0% (0/9 有官方回复) |
| 热门 Issue | #826 (4 条评论) |

---

*报告生成时间：2026-06-15 08:00 (UTC+8）*  
*数据来源：GitHub API & NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**：2026-06-15  
**项目**：BigPizzaV3/CodexPlusPlus  
**数据周期**：过去 24 小时

---

## 1. 今日速览

2026-06-15，Codex++ 项目保持高度活跃，共产生 **38 条 Issues 更新**（新开/活跃 27 条，关闭 11 条）和 **6 条 PR 更新**（待合并 5 条，已合并 1 条）。项目方同步发布了 **v1.2.9 和 v1.2.8 两个版本**，重点修复了会话删除、API Key 安全、供应商配置重置等关键问题。今日社区讨论热度较高，**会话管理和启动稳定性**成为用户反馈的核心痛点，多个 Bug 已通过新版本修复或有待 PR 解决。

---

## 2. 版本发布

### 🔗 v1.2.9（最新正式版）

**发布时间**：2026-06-15  
**更新类型**：Bug 修复补丁

| 修复项 | 说明 |
|--------|------|
| 会话删除逻辑 | 修复删除本地会话时提示 `Thread not found in local storage` 的问题，同时清理候选数据库里的重复 thread 记录 |
| API Key 安全 | 修复启动/重启 Codex++ 时自动应用供应商配置导致 `config.toml` / `auth.json` 中 API Key 被清空的风险 |
| 背景覆盖层重置 | 修复背景覆盖层“重置设置”会把供应商配置一起重置的问题，现在只重置背景覆盖层相关设置 |
| Microsoft Store 检测 | 修复无法自动检测 Microsoft Store 安装的 Codex Beta (`OpenAI.CodexBeta`) |

**迁移注意事项**：无破坏性变更，建议所有用户升级到此版本以解决上述问题。

---

### 🔗 v1.2.8（上一版本）

**发布时间**：2026-06-14  
**更新类型**：功能 + 修复

| 更新项 | 说明 |
|--------|------|
| Computer Use Guard | 新增 Windows Computer Use Guard，默认关闭的设置开关 |
| 配置保留 | 仅在 toggle 启用时保留 Computer Use 配置 |
| 会话删除修复 | 修复跨 duplicate/current/legacy Codex SQLite stores 的本地会话删除问题 |

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR

| PR # | 标题 | 说明 |
|------|------|------|
| **#918** | 为 Codex++ Windows 启用 Computer Use Guard（已适配 1.2.7） | 基于 1.2.5 重新适配 Windows Computer Use Guard 方案，改善 Codex++ 启动 Codex 后 Computer Use 插件不可用的问题。在 Windows 启动路径加入 Computer Use prefli... |

**链接**：https://github.com/BigPizzaV3/CodexPlusPlus/pull/918

---

### 🔄 待合并的 PR（5 条）

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| **#907** | ui: align Codex++ injected UI with Codex appearance | OPEN | 优化 Codex++ 注入 UI 与 Codex 原生外观的对齐，解决视觉和交互回归问题 |
| **#972** | Add optional sidebar thread ID badge | OPEN | 新增可选的侧边栏会话 ID 徽章，显示短会话 ID 和时间戳 |
| **#901** | fix: gpt5.5 最大上下文窗口 | OPEN | 修复 GPT-5.5 1M 上下文未被正确透传的问题 |
| **#953** | fix: 支持 Windows 商店 Codex Beta 包检测 | OPEN | 支持 `OpenAI.CodexBeta_` 前缀的 Microsoft Store 版本检测 |
| **#950** | fix: Enable native Fast service tier UI for API-key auth | OPEN | 为 API-key 用户启用原生 Fast service tier UI |

**链接汇总**：
- https://github.com/BigPizzaV3/CodexPlusPlus/pull/907
- https://github.com/BigPizzaV3/CodexPlusPlus/pull/972
- https://github.com/BigPizzaV3/CodexPlusPlus/pull/901
- https://github.com/BigPizzaV3/CodexPlusPlus/pull/953
- https://github.com/BigPizzaV3/CodexPlusPlus/pull/950

---

## 4. 社区热点

### 🔥 评论最多的 Issues

| Issue # | 标题 | 评论数 | 👍 | 状态 | 热点分析 |
|---------|------|--------|-----|------|----------|
| **#749** | [Feature]: product design 插件找不到 | 8 | 5 | OPEN | 用户希望在插件列表中增加 product design 插件，属于供应商管理功能扩展需求 |
| **#618** | 供应商切换回填当前供应商配置失败：config.toml TOML 解析失败 | 5 | 0 | OPEN | 供应商切换时配置回填失败，涉及 TOML 解析问题，影响 API 接入模式用户 |
| **#969** | 更新 codex++ 后无法启动 codex | 5 | 0 | CLOSED | 更新后 Codex 无法启动，官方入口可用但 ccswitch 中转 API 被破坏，已关闭（可能随 v1.2.9 修复） |
| **#958** | 会话无法删除 | 5 | 0 | CLOSED | 删除会话时提示 `Thread not found in local storage`，与存储路径变化相关，v1.2.9 已修复 |
| **#959** | 用 DeepSeek 纯文本模型时图片导致报错 | 4 | 0 | OPEN | 纯文本模型场景下项目文件夹和聊天中的图片会触发报错，需模型兼容性处理 |
| **#272** | macOS Apple Silicon 上 Codex++ 启动后界面空白 | 4 | 0 | OPEN | 长期未解决的 macOS M1/M2 兼容性问题，界面加载异常但 helper 和 bridge 日志正常 |

**链接汇总**：
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/749
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/618
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/969
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/958
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/959
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/272

**热点分析**：今日社区焦点集中在 **会话管理**（删除、修复、丢失）和 **启动稳定性**（Windows/macOS 多平台启动失败）两大问题。供应商配置和 API 接入的 TOML 解析问题也获得较多关注。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue # | 标题 | 状态 | 已有 Fix PR？ |
|----------|---------|------|------|---------------|
| **高** | #980 | codex++ 启动没反应 | OPEN | ❌ |
| **高** | #974 | win10 升级 1.2.9 版本启动不了 codex | OPEN | ❌ |
| **高** | #977 | 最新版本的 CODEX++ 启动就会卡死 | OPEN | ❌ |
| **中** | #979 | Macbook 盒盖导致后端连接断开 | OPEN | ❌ |
| **中** | #975 | 模型映射后 codex 内模型没有改变或消失 | OPEN | ❌ |
| **中** | #973 | 后端链接无法通过点击修复 | OPEN | ❌ |
| **中** | #971 | kimi coding plan 报错 403 | OPEN | ❌ |
| **中** | #965 | 接入 agnes 完成项目过程中报错 | OPEN | ❌ |
| **中** | #956 | 启用 codex++ 后部分插件无法被索引 | OPEN | ❌ |
| **低** | #954 | 退出账号后重新启动需要重新登录 | OPEN | ❌ |
| **低** | #938 | 会话无法删除（thread not found） | OPEN | ✅ v1.2.9 已修复 |
| **低** | #962 | 修复历史会话失败，所有历史会话丢失 | CLOSED | 部分修复中 |

**链接汇总**：
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/980
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/974
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/977
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/979
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/975
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/973
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/971
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/965
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/956
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/954
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/938
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/962

**稳定性评估**：今日 **3 个高严重性 Bug** 集中在启动无反应/卡死问题，可能与 v1.2.9 的某些改动相关，建议优先排查。macOS 盒盖断连问题为长期未解决的老问题。

---

## 6. 功能请求与路线图信号

### ✨ 今日功能请求

| Issue # | 请求内容 | 评论数 | 优先级信号 |
|---------|----------|--------|------------|
| **#749** | 希望增加 product design 插件 | 8 | 高（社区关注度高） |
| **#957** | Codex Context Used Meter 改为一行小字显示 | 1 | 低（UI 优化建议） |
| **#964** | 关闭 codex++ 页面后服务停止，希望加后台运行 | 1 | 中（用户体验需求） |

**链接**：
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/749
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/957
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/964

### 🔄 与功能请求相关的待合并 PR

| PR # | 功能 | 与 Issue 关联 |
|------|------|---------------|
| **#907** | UI 视觉对齐优化 | 提升整体 UI 体验 |
| **#972** | 侧边栏会话 ID 徽章 | 增强会话管理可视化 |
| **#950** | API-key 用户 Fast service tier UI | 提升 API 用户体验 |

---

## 7. 用户反馈摘要

### 😤 主要痛点

1. **启动稳定性问题**：大量用户反馈更新后 Codex++ 无法启动或启动无反应，Windows 10/11 和 macOS 均受影响
2. **会话管理混乱**：会话删除失败、历史会话丢失、修复功能失效等问题频发
3. **供应商配置风险**：切换供应商时 TOML 解析失败，API Key 被意外清空
4. **多平台兼容性问题**：macOS Apple Silicon 界面空白、盒盖断连问题长期未解决

### 😊 用户满意点

1. **v1.2.9 修复及时**：API Key 安全和会话删除问题得到修复
2. **Computer Use Guard 功能**：Windows 用户对新增的安全功能表示认可（#918 已合并）
3. **插件生态**：用户希望扩展更多插件（如 product design）

### 💡 使用场景

- **API 中转接入**：大量用户通过 ccswitch 等工具中转 API，配置兼容性问题突出
- **多模型切换**：DeepSeek、Kimi、GLM 等国产模型接入需求旺盛
- **长上下文需求**：1M 上下文配置需求强烈，但存在透传问题（#901 正在修复）

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issues（超过 7 天无维护者回复）

| Issue # | 标题 | 创建时间 | 未响应天数 | 优先级 |
|---------|------|----------|------------|--------|
| **#272** | macOS Apple Silicon 上 Codex++ 启动后界面空白 | 2026-05-23 | 23 天 | 高 |
| **#618** | 供应商切换回填配置失败 TOML 解析 | 2026-06-04 | 11 天 | 中 |
| **#404** | 回答质量不好，经常中断 | 2026-05-28 | 18 天 | 中 |

### 🔄 长期未合并的 PRs

| PR # | 标题 | 创建时间 | 状态 | 备注 |
|------|------|----------|------|------|
| **#901** | fix: gpt5.5 最大上下文窗口 | 2026-06-12 | OPEN | 3 天，待 review |
| **#907** | ui: align Codex++ injected UI | 2026-06-12 | OPEN | 3 天，待 review |

**链接汇总**：
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/272
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/618
- https://github.com/BigPizzaV3/CodexPlusPlus/issues/404
- https://github.com/BigPizzaV3/CodexPlusPlus/pull/901
- https://github.com/BigPizzaV3/CodexPlusPlus/pull/907

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 38 条/24h | 📈 较昨日持平 |
| PR 活跃度 | 6 条/24h | 📈 较昨日持平 |
| 合并率 | 16.7% (1/6) | 需加快 review |
| Bug 报告数 | 12 条 | ⚠️ 偏高 |
| 功能请求数 | 3 条 | 正常 |
| 关闭率 | 28.9% (11/38) | 正常 |

---

**报告生成时间**：2026-06-15  
**数据来源**：GitHub Codex++ Repository (BigPizzaV3/CodexPlusPlus)

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*