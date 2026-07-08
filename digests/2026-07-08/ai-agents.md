# OpenClaw 生态日报 2026-07-08

> Issues: 198 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-08 02:41 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-08
**项目仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

过去 24 小时内，OpenClaw 社区保持极高活跃度：共产生 **198 条 Issues 更新**（其中 182 条为新开或重新活跃，16 条已关闭）和 **500 条 PR 更新**（362 条待合并，138 条已合并/关闭），但未发布新版本。今日社区讨论呈现三大主线：**① 多智能体并发场景下的会话状态一致性与资源泄漏问题持续发酵；② 安全边界与 API Key 保护路线图引发深度关注；③ 多个 channel 插件（Slack、Feishu、Discord、Matrix 等）正在系统性修复无界内存缓存导致的内存增长隐患**。整体来看，项目处于高迭代密度阶段，核心 agent 运行时稳定性问题与 channel 生态扩展并行推进，建议关注即将到来的大规模 PR 合入窗口。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时共有 **138 条 PR 状态变更**（含合并与关闭），以下为值得关注的推进方向：

### 3.1 Agent 核心运行时修复（高优先级）

| PR 链接 | 作者 | 摘要 | 状态 |
|---------|------|------|------|
| [#101648](https://github.com/openclaw/openclaw/pull/101648) | @zhangqueping | **fix:** 跳过 `MidTurnPrecheckSignal` 控制流错误的 `pushLoopFailure`，修复"Context overflow"误报问题 | ⏳ waiting on author |
| [#101950](https://github.com/openclaw/openclaw/pull/101950) | @ZOOWH | **fix(agents):** 减少 mid-turn precheck 中工具结果 token 的过度计数（当前高估 2.3–2.6×），关联 #101929 | 📣 needs proof |
| [#101952](https://github.com/openclaw/openclaw/pull/101952) | @ZengWen-DT | **fix(agents):** 对齐 mid-turn 工具结果 precheck 估算，解决大工具结果触发的假性 context-overflow | 👀 ready for maintainer look |
| [#101928](https://github.com/openclaw/openclaw/pull/101928) | @tzy-17 | **fix(agents):** 允许 overflow-recovery 压缩时重入会话写锁，修复 #97747 | 📣 needs proof |
| [#101715](https://github.com/openclaw/openclaw/pull/101715) | @LZY3538 | **fix(model-fallback):** mid-turn 模型切换时重新抛出 `LiveSessionModelSwitchError` 以触发外层重试循环 | 📣 needs proof |
| [#101970](https://github.com/openclaw/openclaw/pull/101970) | @moguangyu5-design | **fix(agents):** `sanitizeMode: "images-only"` 时保留工具结果的文本块，防止降级为占位符 | OPEN |

### 3.2 Channel 插件内存安全修复（系统性推进）

多个 channel 插件正在统一修复无界 `Map` 缓存导致的内存泄漏问题：

| PR 链接 | 插件 | 修复内容 |
|---------|------|----------|
| [#101744](https://github.com/openclaw/openclaw/pull/101744) | Google Chat | 限制 `approvalCardBindings` Map 规模 |
| [#101800](https://github.com/openclaw/openclaw/pull/101800) | Mattermost | 限制出站目标缓存，防止无界内存增长 |
| [#101742](https://github.com/openclaw/openclaw/pull/101742) | Feishu | 限制 `senderNameCache` 和 `tokenCache` |
| [#101743](https://github.com/openclaw/openclaw/pull/101743) | Slack (thread-ownership) | 限制 mention 缓存 + 限制 forwarder JSON 读取 |
| [#101968](https://github.com/openclaw/openclaw/pull/101968) | Slack (thread-ownership) | 限制 forwarder 冲突处理 JSON 解析 + mention 缓存上限 2000 条 |
| [#101794](https://github.com/openclaw/openclaw/pull/101794) | Matrix | 识别 `mm:` 和 `antml:` reasoning tags，防止原始标签泄漏到聊天 |
| [#99417](https://github.com/openclaw/openclaw/pull/99417) | Matrix | 为 `THINKING_TAG_RE` 添加 `mm:` 命名空间前缀 |
| [#101781](https://github.com/openclaw/openclaw/pull/101781) | Telegram | DM topic 自动重命名时保证 UTF-16 安全 |

### 3.3 CLI 与工具链改进

| PR 链接 | 作者 | 摘要 |
|---------|------|------|
| [#101973](https://github.com/openclaw/openclaw/pull/101973) | @giodl73-repo | **cli:** `claws apply --yes` 时应用 workspace 文件，新增 `--workspace` 作用域参数 |
| [#101942](https://github.com/openclaw/openclaw/pull/101942) | @wm0018 | **fix(cli):** 插件描述截断保证 UTF-16 安全，防止 emoji/CJK 字符产生 U+FFFD |
| [#101960](https://github.com/openclaw/openclaw/pull/101960) | @ruel225 | **fix(cron):** 跳过无 heartbeat 配置的 cron 任务的 heartbeat 检查（已关闭） |

### 3.4 文档与架构

| PR 链接 | 作者 | 摘要 |
|---------|------|------|
| [#94023](https://github.com/openclaw/openclaw/pull/94023) | @sheyanmin | **docs:** 新增 `docs/gateway/agent-runtime-boundary.md`，明确 host agent 边界规则 |

---

## 4. 社区热点

以下 Issues 和 PR 在过去 24 小时内获得最多社区关注（按评论数排序）：

### 4.1 最热 Issues

| # | 链接 | 标题 | 评论 | 核心诉求 |
|---|------|------|------|----------|
| 1 | [#11829](https://github.com/openclaw/openclaw/issues/11829) | **[安全路线图] Protecting API Keys from Agent Access** | 20 | 多向量 API Key 泄漏风险，呼吁分层保护方案 |
| 2 | [#22676](https://github.com/openclaw/openclaw/issues/22676) | **Signal daemon `stop()` race condition — SIGUSR1 重启时孤儿进程** | 17 | 信号处理竞态导致端口/文件锁冲突 |
| 3 | [#29387](https://github.com/openclaw/openclaw/issues/29387) | **Bootstrap files in `agentDir` 被静默忽略** | 14 | per-agent 目录下的 `.md` 引导文件不生效 |
| 4 | [#43367](https://github.com/openclaw/openclaw/issues/43367) | **多智能体编排不稳定：并发覆盖、session-lock 失败** | 13 | 并发 `agents add` 不安全，配置被反复覆盖 |
| 5 | [#31583](https://github.com/openclaw/openclaw/issues/31583) | **`exec` 工具不继承 `skills.entries.*.env` 环境变量** | 13 | 回归 bug，技能配置的 env 变量未传递到子进程 |
| 6 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | **工具输出有时渲染为图片附件，agent 无法读取** | 13 | ANSI 重度输出被替换为图片占位符 |
| 7 | [#39604](https://github.com/openclaw/openclaw/issues/39604) | **Feature: `tools.web.fetch.allowPrivateNetwork`** | 13 | 允许 `web_fetch` 访问内网地址（opt-in） |
| 8 | [#22358](https://github.com/openclaw/openclaw/issues/22358) | **Feature: Post-subagent completion extension hook** | 12 | 子 agent 完成后触发扩展钩子 |
| 9 | [#27445](https://github.com/openclaw/openclaw/issues/27445) | **Feature: `announceTarget` 子 agent 完成路由** | 11 | 子 agent 完成消息路由到父会话而非直接发往 channel |
| 10 | [#40001](https://github.com/openclaw/openclaw/issues/40001) | **Write 工具缺少 append 模式 — 隔离 cron 会话破坏共享文件** | 11 | 写工具无追加模式，静默覆盖共享文件导致数据丢失 |

**热点分析：** 安全（#11829）和多智能体稳定性（#43367、#29387）是最受关注的两个方向。安全路线图讨论（20 条评论）表明社区对 API Key 暴露问题已有系统性认知，期望官方给出明确方案。多智能体并发问题（#43367）则反映出当前架构在并行场景下的脆弱性。

### 4.2 关联 PR 热度

| PR 链接 | 标签 | 热度信号 |
|---------|------|----------|
| [#101648](https://github.com/openclaw/openclaw/pull/101648) | P1, session-state | 等待作者响应 |
| [#101715](https://github.com/openclaw/openclaw/pull/101715) | P1, auth-provider, session-state | 需要 proof |
| [#101952](https://github.com/openclaw/openclaw/pull/101952) | P1, diamond lobster | ready for maintainer look |
| [#101794](https://github.com/openclaw/openclaw/pull/101794) | P1, message-delivery | 需要 proof |

---

## 5. Bug 与稳定性

按严重程度（P1 > P2）排列今日报告的 Bug：

### 5.1 P1 — 关键 Bug（影响核心功能或导致崩溃）

| # | 链接 | 标题 | 状态 | 已有 Fix PR? |
|---|------|------|------|-------------|
| 1 | [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon `stop()` race condition — SIGUSR1 重启时孤儿进程 | OPEN | ❌ |
| 2 | [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in `agentDir` 被静默忽略 | OPEN | ❌ |
| 3 | [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多智能体编排不稳定：并发覆盖、session-lock 失败 | OPEN | ❌ |
| 4 | [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` 工具不继承 `skills.entries.*.env` 环境变量（回归） | OPEN | ❌ |
| 5 | [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" — gemini-3.1-pro-preview（回归） | OPEN | ❌ |
| 6 | [#40255](https://github.com/openclaw/openclaw/issues/40255) | 用户配置的 heartbeat prompt 不再被尊重（回归） | OPEN | ❌ |
| 7 | [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DMs 仍被路由到 `agent:main:main` | OPEN | ❌ |
| 8 | [#43374](https://github.com/openclaw/openclaw/issues/43374) | 多智能体并发时所有 LLM API 调用同时超时 | OPEN | ❌ |
| 9 | [#41199](https://github.com/openclaw/openclaw/issues/41199) | Agent-to-Agent 通信工具参数冲突 | OPEN | ❌ |
| 10 | [#38091](https://github.com/openclaw/openclaw/issues/38091) | WebSocket reconnect 导致会话 terminated | OPEN | ❌ |
| 11 | [#41346](https://github.com/openclaw/openclaw/issues/41346) | 外部注册的 cron 作业自动启用，无确认无费用熔断 | OPEN | ❌ |
| 12 | [#39807](https://github.com/openclaw/openclaw/issues/39807) | Billing 错误 (402) 导致无退避的无限重试死亡螺旋 | OPEN（stale） | ❌ |

### 5.2 P2 — 重要 Bug

| # | 链接 | 标题 | 备注 |
|---|------|------|------|
| 1 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出渲染为图片附件，agent 无法读取 | 关联 PR #101970 |
| 2 | [#38439](https://github.com/openclaw/openclaw/issues/38439) | `/avatar/{agentId}` 返回 404（回归） | |
| 3 | [#41201](https://github.com/openclaw/openclaw/issues/41201) | Control UI 头像不显示（回归） | |
| 4 | [#40919](https://github.com/openclaw/openclaw/issues/40919) | 会话内存同步性能退化：JSONL 文件全量删除-重插入 | |
| 5 | [#40880](https://github.com/openclaw/openclaw/issues/40880) | `MEDIA_MAX_BYTES` (5MB) 硬编码不可配置（回归） | |
| 6 | [#52972](https://github.com/openclaw/openclaw/issues/52972) | 调度 cron 提醒后错误追加"未调度"提示 | CLOSED |
| 7 | [#42273](https://github.com/openclaw/openclaw/issues/42273) | `backup create` 在大目录 (4GB+) 上卡死 | |
| 8 | [#41949](https://github.com/openclaw/openclaw/issues/41949) | 浏览器交互注入过多页面内容耗尽上下文 | |

**稳定性小结：** 今日共报告 **12 个 P1 Bug**，其中 **多个为回归问题**（`exec` env 继承、heartbeat prompt、avatar 端点、媒体大小限制等），建议优先确认回归引入的 commit 并评估是否需要 hotfix。另有 **8 个 P2 Bug** 值得关注，其中 `backup create` 卡死和 JSONL 性能退化直接影响用户体验。

---

## 6. 功能请求与路线图信号

以下功能请求获得较多社区支持（👍 反应）或与已有 PR 形成呼应：

### 6.1 高支持度功能请求

| # | 链接 | 功能 | 👍 | 相关 PR |
|---|------|------|---|---------|
| 1 | [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` — 允许内网访问 | 11 | 无 |
| 2 | [#37634](https://github.com/openclaw/openclaw/issues/37634) | sandbox `workspaceAccess: none` 时保持 workspace 可写 | 7 | 无 |
| 3 | [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot 支持 (`business_message`) | 6 | 无 |
| 4 | [#28300](https://github.com/openclaw/openclaw/issues/28300) | 主题定制系统 — 预设主题 + 自定义主题工作室 | 5 | 无 |
| 5 | [#43117](https://github.com/openclaw/openclaw/issues/43117) | `memorySearch` 支持多模态 embedding (gemini-embedding-2-preview) | 2 | 无 |
| 6 | [#45508](https://github.com/openclaw/openclaw/issues/45508) | Webchat TTS/STT 路由通过 gateway 而非浏览器 Web Speech API | 2 | 无 |

### 6.2 RFC 与架构提案

| # | 链接 | 标题 | 评论 | 方向 |
|---|------|------|------|------|
| 1 | [#35203](https://github.com/openclaw/openclaw/issues/35203) | 多智能体协作增强：能力画像 + 共享黑板 + 分层内存 + Token 成本治理 | 10 | 架构 |
| 2 | [#42026](https://github.com/openclaw/openclaw/issues/42026) | RFC: 分布式 Agent Runtime — 控制面与计算面分离 | 7 | 架构 |
| 3 | [#41366](https://github.com/openclaw/openclaw/issues/41366) | 持久化自然语言规则学习 + 多提及回复语义 | 7 | 功能 |
| 4 | [#42650](https://github.com/openclaw/openclaw/issues/42650) | Memory MVP：增加 review、edit、forget、冲突解决流程 | 4 | 功能 |

**路线图信号：** 多智能体协作（#35203、#42026）正在从单点功能请求向系统性架构演进。`allowPrivateNetwork`（#39604）是一个相对独立且实现成本可控的功能，有较高概率在近期版本中落地。Memory 系统的 review/forget 流程（#42650）补全了 Memory MVP 的最后一块短板。

---

## 7. 用户反馈摘要

从 Issues 评论和讨论中提炼的真实用户痛点：

### 7.1 核心痛点

1. **多智能体并发可靠性不足**
   - 并发场景下配置被覆盖（#43367）、session-lock 失败、API 超时同时发生（#43374）
   - 子 agent 完成路由不灵活，无法让主 agent 编排多步工作流（#27445）
   - 子 agent 超时恢复存在幂等性缺口，产生重复 POST（#37446）

2. **安全与隐私焦虑**
   - API Key 多向量泄漏风险（#11829）引发社区高度关注，20 条评论表明用户对 LLM 访问密钥暴露极为敏感
   - 外部 cron 作业自动启用无确认（#41346）存在成本失控风险
   - 信任代理模式下缺少默认用户降级（#23585）

3. **回归问题影响生产稳定性**
   - `exec` 工具环境变量丢失（#31583）影响现有工作流
   - heartbeat prompt 被覆盖（#40255）破坏用户定制行为
   - 头像端点 404（#38439、#41201）影响 UI 体验

4. **存储与备份痛点**
   - `write` 工具无 append 模式，隔离 cron 会话静默覆盖共享文件（#40001）
   - `backup create` 在大目录上卡死（#42273）
   - 备份 CLI 缺少 `.gitignore` 式的排除模式（#40786）

### 7.2 用户满意的方向

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-08  
**数据覆盖范围：** OpenClaw、NousResearch/hermes-agent、NanmiCoder/cc-haha、BigPizzaV3/CodexPlusPlus

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强、需求分化"**的格局。OpenClaw 以日均 500 条 PR 变更、198 条 Issues 活跃度的绝对规模领跑生态，其多智能体并发、session 状态管理、channel 插件生态构成核心壁垒；Hermes Agent 以相近的 PR 吞吐量紧随其后，但更侧重安全加固与多平台集成；cc-haha 和 Codex++ 则聚焦细分场景——前者深耕桌面端交互体验，后者专注协议转换与模型兼容性。整体来看，**多智能体稳定性、安全边界、跨平台 channel 扩展**是全生态共同面临的三大技术主线，而各项目在实现路径上已出现明显分化。

---

## 2. 各项目活跃度对比

| 项目 | Issues 今日更新 | PR 今日更新 | 待合并 PR | Release 情况 | 健康度评估 |
|------|----------------|-------------|-----------|--------------|------------|
| **OpenClaw** | 198 条（182 新/活跃，16 关闭） | 500 条（362 待合并，138 合并/关闭） | 362 条 | 无新版本 | 🔴 高迭代密度，核心稳定性承压 |
| **Hermes Agent** | 120 条（89 新/活跃，31 关闭） | 500 条（318 待合并，182 合并/关闭） | 318 条 | v0.18.1（7月7日） | 🟡 功能与安全并重，发布节奏稳定 |
| **cc-haha** | 8 条（6 新/活跃，2 关闭） | 1 条（1 待合并） | 1 条 | 无新版本 | 🟢 小步快跑，社区参与度良好 |
| **Codex++** | 24 条（23 新/活跃，1 关闭） | 6 条（5 待合并，1 合并） | 5 条 | 无新版本 | 🟡 快速迭代，聚焦协议兼容性修复 |

**关键数据洞察：**
- OpenClaw 与 Hermes Agent 的 PR 吞吐量相近（日均 500 条），但 OpenClaw 的待合并比例更高（72.4% vs 63.6%），反映出更大的代码积压压力
- cc-haha 的活跃度与其他三者存在数量级差异，社区规模约为 OpenClaw 的 4%，适合作为垂直场景补充而非生态主力
- Codex++ 的 Issues 新增数（23）远超关闭数（1），积压问题突出，35 天未响应的 Issue 仍有 3 个

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 是当前生态中**规模最大的项目**，其日均 Issues 活跃量（198 条）约为 Hermes Agent（120 条）的 1.65 倍，是 Codex++（24 条）的 8.25 倍。这种规模优势使其在 channel 插件生态（Slack、Feishu、Discord、Matrix、Telegram 等）上形成了难以复制的网络效应。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | Codex++ |
|------|----------|--------------|---------|
| **核心架构** | Agent Runtime + Channel 插件分离 | Gateway + Profile 隔离 | 协议转换层（API 代理） |
| **并发模型** | 多智能体 session-lock + 并发覆盖问题 | Profile 隔离 + OAuth 并发 | 单线程模型请求转发 |
| **安全策略** | API Key 保护路线图中（待落地） | Bearer Token 撤销 + CSRF 防护（已推进） | 无明确安全框架 |
| **扩展机制** | MCP 插件 + skills 系统 | MCP 子进程（存在泄漏问题） | 插件市场（CSP 限制） |

### 3.3 社区规模对比

- **OpenClaw**：12 个 P1 Bug、8 个 P2 Bug并行处理，20 条评论的安全路线图讨论
- **Hermes Agent**：v0.18.1 汇总 660 个 PR，体现成熟的大规模协作能力
- **cc-haha**：Issue #779 积压 27 天无有效修复，维护资源有限
- **Codex++**：35 天未响应的 Issue 仍有 3 个，响应效率偏低

**结论：** OpenClaw 是生态中**技术深度最深、社区规模最大、迭代压力也最大**的项目。其优势在于 channel 生态的广覆盖和 agent 运行时能力，但多智能体并发稳定性是当前最大短板。

---

## 4. 共同关注的技术方向

以下技术方向在多个项目中同步涌现，反映出行业共识性需求：

### 4.1 多模态模型兼容性（OpenClaw、Hermes Agent、Codex++）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | `sanitizeMode: "images-only"` 时保留工具结果文本块，防止降级为占位符（PR #101970） |
| **Hermes Agent** | Claude Code OAuth 并发序列化修复（PR #60639） |
| **Codex++** | DeepSeek 等纯文本模型遇图片即报错，对话永久损坏（Issue #959 等 5 个高优先级 Bug） |

**核心诉求：** 当模型不支持多模态输入时，系统应自动过滤或转换历史消息中的图片内容，而非让请求失败或线程损坏。

### 4.2 安全与凭证保护（OpenClaw、Hermes Agent）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | API Key 多向量泄漏风险，呼吁分层保护方案（Issue #11829，20 条评论） |
| **Hermes Agent** | 多 Profile 模式下 `os.getenv()` 导致跨 Profile 凭证泄漏（PR #59674）；MCP URL 敏感参数脱敏（PR #24302） |

**核心诉求：** 在多租户/多 Profile 场景下，凭证必须严格隔离，防止跨会话泄漏。

### 4.3 多智能体并发稳定性（OpenClaw 为主）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | 并发覆盖、session-lock 失败（Issue #43367）；API 超时同时发生（Issue #43374）；子 agent 完成路由不灵活（Issue #27445） |

**核心诉求：** 多智能体并行执行时的状态一致性、资源竞争、任务编排可靠性。

### 4.4 存储与文件操作安全（OpenClaw、Hermes Agent）

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | `write` 工具无 append 模式，静默覆盖共享文件（Issue #40001）；`backup create` 大目录卡死（Issue #42273） |
| **Hermes Agent** | 写入前验证 JSON/YAML/TOML 语法，防止畸形数据落盘（PR #60629） |

**核心诉求：** 文件操作的事务性保障、备份可靠性、语法校验。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 主攻方向 |
|------|----------|----------|
| **OpenClaw** | 通用 Agent Runtime | 多智能体编排、channel 生态、session 状态管理 |
| **Hermes Agent** | 安全网关 + 多平台集成 | 安全加固、OAuth 认证、跨平台消息桥接 |
| **cc-haha** | 桌面端交互体验 | 快捷键、UI 优化、权限审批流程 |
| **Codex++** | 协议转换 + 模型兼容 | API 代理、多模型切换、图片过滤 |

### 5.2 目标用户

| 项目 | 目标用户画像 |
|------|--------------|
| **OpenClaw** | 企业级部署、需要多 channel 接入（Slack/Discord/飞书等）的团队 |
| **Hermes Agent** | 对安全性有高要求、需要多 Profile 隔离的开发者 |
| **cc-haha** | 偏好桌面端 UI、注重本地化体验的个人用户 |
| **Codex++** | 需要在多个模型 API 之间灵活切换的开发者 |

### 5.3 技术架构关键差异

```
OpenClaw:     Agent Runtime <-> Channel Plugins (Slack/Discord/Feishu/Matrix/Telegram...)
                    |
              Session Manager (并发覆盖风险)
                    |
              MCP Plugins + Skills System

Hermes Agent: Gateway <-> Profile Isolation <-> OAuth Providers
                    |
              Security Layer (Bearer Token Revocation + CSRF)
                    |
              Cron + Approval Workflow

cc-haha:      Desktop UI <-> Permission Approval <-> API Calls
                    |
              Local-first Experience

Codex++:      API Proxy <-> Model Adapter <-> Protocol Converter
                    |
              Image Filter (多模态兼容性)
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **第一梯队** | OpenClaw、Hermes Agent | 日均 500 条 PR 变更，数百个 Issues 并行处理，具备大规模社区协作能力 |
| **第二梯队** | Codex++ | 日均 6 条 PR，聚焦特定问题修复，迭代速度较快但社区规模有限 |
| **第三梯队** | cc-haha | 日均 1 条 PR，维护资源有限，依赖核心贡献者驱动 |

### 6.2 成熟度评估

| 项目 | 成熟度信号 | 风险点 |
|------|------------|--------|
| **OpenClaw** | 多 channel 生态完整、文档体系健全（新增 agent-runtime-boundary.md） | 12 个 P1 Bug 并行，多为回归问题，核心稳定性承压 |
| **Hermes Agent** | 定期发布补丁版本（v0.18.1 汇总 660 PR），安全修复流程规范 | MCP 子进程泄漏问题长期存在（Issue #59349、#57228） |
| **cc-haha** | 功能迭代稳定，用户反馈积极 | Issue #779 积压 27 天，响应效率需提升 |
| **Codex++** | 快速响应多模态兼容性需求 | 35 天未响应 Issue 仍有 3 个，积压问题突出 |

**结论：** OpenClaw 和 Hermes Agent 处于**快速迭代向质量巩固过渡**阶段，需要在保持功能推进的同时加强回归测试；cc-haha 和 Codex++ 仍处于**功能完善期**，社区规模限制了问题响应速度。

---

## 7. 值得关注的趋势信号

### 7.1 多智能体并发稳定性成为行业瓶颈

OpenClaw 的 12 个 P1 Bug 中有 4 个直接与多智能体并发相关（#43367、#43374、#27445、#41199），社区对 session-lock、并发覆盖、API 超时同时发生等问题反应强烈。**预计未来 1-2 个版本，多智能体并发架构将迎来系统性重构**。

### 7.2 安全从可选特性走向核心需求

API Key 保护（OpenClaw #11829，20 条评论）、跨 Profile 凭证泄漏（Hermes Agent #59674）、MCP URL 脱敏（Hermes Agent #24302）等安全议题同步涌现，表明**安全已从高级特性变为生产部署的必备条件**。建议开发者优先评估各项目的安全加固进度。

### 7.3 多模态兼容性是下一阶段焦点

Codex++ 的 5 个高优先级 Bug 全部指向多模态模型兼容性问题，OpenClaw 也在修复图片处理逻辑。**当模型能力分化加剧（部分模型支持图片，部分不支持），跨模型对话历史的一致性将成为普遍挑战**。

### 7.4 桌面端与协议层成为差异化切入点

cc-haha 聚焦桌面端交互（Ctrl+F 搜索、权限审批优化），Codex++ 专注协议转换（API 代理、图片过滤），两者均避开了与 OpenClaw/Hermes Agent 在核心 Runtime 上的正面竞争。**对于新进入者，垂直场景切入可能是更务实的策略**。

### 7.5 回归问题频发提示测试覆盖缺口

OpenClaw 今日报告中出现多个回归 Bug（`exec` env 继承、heartbeat prompt、avatar 端点、媒体大小限制），Hermes Agent 也有 Dashboard 认证回归问题。**大规模快速迭代与测试覆盖不足的矛盾正在显现**，建议关注各项目的 CI/CD 改进计划。

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 日均 Issues 活跃 | 198 | 120 | 8 | 24 |
| 日均 PR 吞吐量 | 500 | 500 | 1 | 6 |
| 待合并 PR 比例 | 72.4% | 63.6% | 100% | 83.3% |
| 今日 P1 Bug | 12 | 2 | 2 | 5 |
| 最新 Release | 无 | v0.18.1 | 无 | 无 |
| 安全相关 PR | 3 | 4 | 0 | 0 |
| 长期积压 Issue（>7 天） | 多 | 少 | 1 | 3 |

---

*本报告基于 2026-07-08 各项目 GitHub 公开数据生成，供技术决策者和开发者参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-07-08  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 项目在过去 24 小时内保持极高活跃度，共产生 **120 条 Issues 更新**（89 条新开/活跃，31 条关闭）和 **500 条 PR 更新**（318 条待合并，182 条已合并/关闭）。项目于 7 月 7 日发布了 **v0.18.1 补丁版本**，汇总了自 v0.18.0 以来的约 660 个 PR，涵盖 Bug 修复、强化及进行中的功能工作。社区讨论热度集中在 Dashboard 认证问题、Desktop 客户端功能增强、以及 MCP 子进程泄漏等稳定性问题上。今日有多项安全相关 PR 值得关注，包括生产部署加固、敏感信息脱敏和跨 Profile 凭证泄漏修复。

---

## 2. 版本发布

### ✅ v2026.7.7 — Hermes Agent v0.18.1

| 项目 | 详情 |
|------|------|
| **发布日期** | 2026 年 7 月 7 日 |
| **版本类型** | 补丁发布（Patch Release） |
| **合并范围** | 自 v0.18.0（7 月 1 日）以来的 ~660 个 PR |

**更新内容概述：**
- 汇总了自 v0.18.0 以来的大量 Bug 修复、系统强化和进行中的功能工作
- 为下游消费者（Docker 镜像、托管部署、PyPI 安装）提供稳定标签版本

**迁移注意事项：**
- 无破坏性变更，属于平滑升级
- 建议所有生产环境用户升级至 v0.18.1 以获取最新稳定版本

🔗 [Release 页面](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7)

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，涵盖功能推进、Bug 修复和安全加固：

### 🔐 安全相关修复

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#59674](https://github.com/NousResearch/hermes-agent/pull/59674) | fix(gateway/platforms): use get_secret() for WEIXIN_TOKEN | OPEN | 修复多 Profile 模式下 `os.getenv()` 导致的跨 Profile 凭证泄漏问题 |
| [#24302](https://github.com/NousResearch/hermes-agent/pull/24302) | fix: redact sensitive MCP URL query values | OPEN | 对 MCP HTTP URL 中的敏感查询参数值进行脱敏处理 |
| [#60527](https://github.com/NousResearch/hermes-agent/pull/60527) | fix(approval): honor /stop cancel over racing /approve | OPEN | 修复竞态条件下 `/stop` 取消被 `/approve` 覆盖的安全问题（fail-closed） |
| [#60636](https://github.com/NousResearch/hermes-agent/pull/60636) | Harden Hermes for production deployment | OPEN | 添加 Bearer Token 撤销、Cookie 认证 CSRF 防护、生产部署 Dockerfile 等 |

### 🐛 关键 Bug 修复

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#56886](https://github.com/NousResearch/hermes-agent/pull/56886) | fix: dashboard auth crash with NotImplementedError | OPEN | 修复仅配置密码认证时 Dashboard 500 错误 |
| [#60629](https://github.com/NousResearch/hermes-agent/pull/60629) | fix(file-ops): pre-write syntax gate for JSON/YAML/TOML | OPEN | 在写入磁盘前验证 JSON/YAML/TOML 语法，防止畸形数据落盘 |
| [#60631](https://github.com/NousResearch/hermes-agent/pull/60631) | fix(gateway,cron): make shutdown drain visible to in-flight cron work | OPEN | 修复关闭时 Cron 任务未正确等待的问题 |
| [#60324](https://github.com/NousResearch/hermes-agent/pull/60324) | fix: auto-refresh member cache in _build_msg_body_with_mentions | OPEN | 修复 @ 提及在成员缓存为空时失效的问题 |
| [#60639](https://github.com/NousResearch/hermes-agent/pull/60639) | fix(anthropic): serialize Claude Code OAuth refresh | OPEN | 修复并发负载下 Claude Code OAuth 静默回退问题 |
| [#60317](https://github.com/NousResearch/hermes-agent/pull/60317) | CLOSED | fix(environments): profile-aware snapshot store paths | 修复多 Profile 运行时快照路径和权限问题 |

### ✨ 功能增强

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#60643](https://github.com/NousResearch/hermes-agent/pull/60643) | fix(whatsapp): unpin Baileys from git commit | OPEN | WhatsApp 桥接安装时间从 ~3 分钟降至 ~3 秒 |
| [#58460](https://github.com/NousResearch/hermes-agent/pull/58460) | feat: add Codex operations support | OPEN | 添加 Codex 操作插件和 CLI，支持更安全的可观测工作流 |
| [#60640](https://github.com/NousResearch/hermes-agent/pull/60640) | feat(desktop): add Italian (it) locale | OPEN | 桌面应用新增意大利语本地化 |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) | feat(desktop): add 15-language i18n | OPEN | 桌面应用扩展至 15 种语言 |
| [#60642](https://github.com/NousResearch/hermes-agent/pull/60642) | feat(tools): use sequential auto-incrementing IDs | OPEN | 改进待处理写入记录的 ID 生成策略 |

---

## 4. 社区热点

### 💬 讨论最活跃的 Issues

**1. [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) — Response truncated due to output length limit** ✅ 已关闭
- **评论数：** 53 | **👍：** 6
- **问题描述：** 在 CLI 聊天或网关消息（Telegram/Discord/Slack）中使用 Hermes Agent 时，生成较长响应时频繁抛出输出长度限制截断错误
- **诉求分析：** 用户对长文本生成场景有强烈需求，当前输出限制影响实际使用体验
- **状态：** 已关闭（修复中）

**2. [Issue #34390](https://github.com/NousResearch/hermes-agent/issues/34390) — Dashboard --allowed-hosts flag**
- **评论数：** 11 | **👍：** 0
- **问题描述：**  Dashboard 默认绑定 `127.0.0.1:9119`，在反向代理（包括 Tailscale Serve、nginx、Caddy）后无法正常访问
- **诉求分析：** 用户希望在反向代理环境下灵活配置 Dashboard 访问，需要新增 `--allowed-hosts` 参数
- **状态：** OPEN，标记为 P3 功能请求

**3. [Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602) — Desktop Client-Only Installation**
- **评论数：** 10 | **👍：** 42
- **问题描述：** 用户希望将 Hermes Desktop 作为瘦客户端，连接至远程 Hermes 实例，而非每次都本地启动运行时
- **诉求分析：** 高热度功能请求（42 赞），用户期待更灵活的客户端-服务器架构
- **状态：** OPEN，标记为 P3

**4. [Issue #19986](https://github.com/NousResearch/hermes-agent/issues/19986) — Make non-core bundled skills optional**
- **评论数：** 9 | **👍：** 3
- **问题描述：** 当前 Hermes 将大量技能直接打包到每个 Profile 的 skills 目录，导致安装体积大、更新负担重
- **诉求分析：** 用户希望最小化默认安装，仅按需安装核心技能
- **状态：** OPEN，标记为 P3

**5. [Issue #38061](https://github.com/NousResearch/hermes-agent/issues/38061) — Can't connect to Remote Gateway via Tailscale**
- **评论数：** 9 | **👍：** 1
- **问题描述：** 通过 Tailscale 连接远程网关时，测试连接成功但实际连接失败
- **诉求分析：** 远程访问场景下的连接可靠性问题
- **状态：** OPEN，标记为 P2

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### 🔴 P1 - 紧急

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#60629](https://github.com/NousResearch/hermes-agent/issues/60629) | fix(file-ops): pre-write syntax gate for JSON/YAML/TOML | OPEN | ✅ [#60629](https://github.com/NousResearch/hermes-agent/pull/60629) |
| [#60631](https://github.com/NousResearch/hermes-agent/issues/60631) | fix(gateway,cron): make shutdown drain visible | OPEN | ✅ [#60631](https://github.com/NousResearch/hermes-agent/pull/60631) |

### 🟠 P2 - 高优先级

| Issue 编号 | 标题 | 评论数 | 状态 | 是否有 Fix PR |
|------------|------|--------|------|---------------|
| [#60543](https://github.com/NousResearch/hermes-agent/issues/60543) | /steer race condition: steer lost between tool batch drain and next API call | 3 | OPEN | ❌ |
| [#60345](https://github.com/NousResearch/hermes-agent/issues/60345) | fix(moa): reference models silently degrade on context overflow | 3 | OPEN | ❌ |
| [#58810](https://github.com/NousResearch/hermes-agent/issues/58810) | Dashboard: 500 on unauthenticated `/` with password-only provider | 3 | OPEN | ✅ [#56886](https://github.com/NousResearch/hermes-agent/pull/56886) |
| [#57868](https://github.com/NousResearch/hermes-agent/issues/57868) | Dashboard basic auth crashes with 500 on first page load | 3 | OPEN | ✅ [#56886](https://github.com/NousResearch/hermes-agent/pull/56886) |
| [#38061](https://github.com/NousResearch/hermes-agent/issues/38061) | Can't connect to Remote Gateway via Tailscale | 9 | OPEN | ❌ |
| [#55790](https://github.com/NousResearch/hermes-agent/issues/55790) | Stale credential pool entries cause removed providers to persist | 6 | CLOSED | ❌ |
| [#50404](https://github.com/NousResearch/hermes-agent/issues/50404) | Discord config is not profile-isolated | 2 | OPEN | ❌ |
| [#60597](https://github.com/NousResearch/hermes-agent/issues/60597) | UI Wrapper Crash: Attempted to access streaming response content | 2 | OPEN | ❌ |

### 🟡 P3 - 中优先级

| Issue 编号 | 标题 | 评论数 | 状态 |
|------------|------|--------|------|
| [#60616](https://github.com/NousResearch/hermes-agent/issues/60616) | hermes -z crashes with SIGABRT after response (memory.provider=honcho) | 2 | OPEN |
| [#60429](https://github.com/NousResearch/hermes-agent/issues/60429) | hermes agent keeps violating rules | 3 | OPEN |
| [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) | Background Self-Improvement Review misclassifies content | 3 | OPEN |
| [#54990](https://github.com/NousResearch/hermes-agent/issues/54990) | Profile switch leaves shell CWD stuck in previous profile | 2 | OPEN |

### 🔵 已关闭的重要 Bug

| Issue 编号 | 标题 | 评论数 | 说明 |
|------------|------|--------|------|
| [#7237](https://github.com/NousResearch/hermes-agent/issues/7237) | Response truncated due to output length limit | 53 | 高热度问题，已关闭 |
| [#6838](https://github.com/NousResearch/hermes-agent/issues/6838) | Frequent RemoteProtocolError with MiniMax provider | 7 | 已关闭 |
| [#60584](https://github.com/NousResearch/hermes-agent/issues/60584) | hermes chat -q clears screen + scrollback | 3 | 已关闭 |
| [#50199](https://github.com/NousResearch/hermes-agent/issues/50199) | delegation.base_url ignored at runtime | 3 | 已关闭 |
| [#18946](https://github.com/NousResearch/hermes-agent/issues/18946) | hermes config set delegation.* silently has no effect | 3 | 已关闭 |
| [#59349](https://github.com/NousResearch/hermes-agent/issues/59349) | Gateway leaks stdio-MCP subprocesses → EMFILE | 3 | 已关闭 |
| [#57228](https://github.com/NousResearch/hermes-agent/issues/57228) | MCP stdio subprocesses leak on reconnect | 3 | 已关闭 |

---

## 6. 功能请求与路线图信号

### 🔥 高热度功能请求（按 👍 数排序）

| Issue 编号 | 标题 | 👍 | 评论 | 状态 | 潜在纳入信号 |
|------------|------|-----|------|------|-------------|
| [#38602](https://github.com/NousResearch/hermes-agent/issues/38602) | Desktop Client-Only Installation | 42 | 10 | OPEN | 高需求，Desktop 团队正在推进 |
| [#

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-07-08  
**项目仓库**：https://github.com/NanmiCoder/cc-haha

---

## 1. 今日速览

2026-07-08，cc-haha 项目保持较高活跃度，过去24小时内共产生 **8 条 Issues 更新**（6 条新开/活跃，2 条已关闭）和 **1 条待合并 PR**。项目当前无新版本发布，但社区功能需求旺盛——用户对对话内搜索、VS Code 集成、Claude Code "Auto" 模式支持等方向提出明确诉求。Bug 报告集中在 Windows 桌面端 v0.4.5 的权限审批 UI 和 API 错误问题，需维护者重点关注。整体来看，项目处于功能迭代与稳定性修复并行的阶段，社区参与度良好。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 待合并 PR

| 编号 | 标题 | 作者 | 标签 | 状态 |
|------|------|------|------|------|
| [#979](https://github.com/NanmiCoder/cc-haha/pull/979) | Feature(Desktop): #974 Add ctrl+F keyboard shortcut to open find-in-page | @rechardguo | enhancement, size:L, area:desktop, needs-maintainer-approval | OPEN |

**摘要**：该 PR 针对 Issue #974 的功能请求，实现了类似 Chrome 浏览器的页面内搜索功能（Ctrl+F 快捷键唤起搜索框）。开发者参考了 `GlobalSearchModal.tsx` 的实现方式，并解释了未使用 Electron 内置 `FindInPage` API 的原因——该方法为全局模式，会导致搜索框自身也被高亮，造成焦点丢失、体验不佳。最终采用原生查找方式实现。

**评估**：该 PR 响应了用户高频需求，若合并将显著提升长对话场景下的使用体验。建议维护者尽快审核。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 编号 | 标题 | 评论数 | 状态 | 链接 |
|------|------|--------|------|------|
| #779 | [BUG] 有些任务或者有些模型的时候遇到权限问题直接卡住不回复 | 8 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/779) |
| #957 | [BUG] 无法编辑已完成会话 | 2 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/957) |
| #955 | [建议] 优化技能展示 | 2 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/955) |

**分析**：

- **#779（8条评论）**：这是当前讨论最活跃的 Issue，用户反馈在执行某些任务时，程序会因权限问题卡住，暂停后才能重新选择其他方法。问题持续时间较长（6月10日创建），涉及桌面端 Windows 用户，反映出权限审批机制存在交互缺陷。
  
- **#957（2条评论）**：用户希望能够编辑已完成会话的描述并重新发送，而非必须重新发起对话。这是提升对话管理效率的合理需求。

- **#955（2条评论，已关闭）**：建议在技能选择时展示技能描述而非仅显示名称，参考 Claude Code 的实现。该 Issue 已关闭，可能已被接受或在其他渠道处理。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | 编号 | 标题 | 状态 | 是否有 Fix PR |
|----------|------|------|------|---------------|
| 🔴 高 | #982 | [BUG] V0.4.5 API Error: `messages.1.content.0: Invalid signature in thinking block` | OPEN | ❌ |
| 🔴 高 | #779 | [BUG] 权限问题导致任务卡住不回复 | OPEN | ❌ |
| 🟡 中 | #980 | [BUG] Windows 桌面端 v0.4.5 Read 工具调用后卡住，疑似多文件权限审批 UI 问题 | OPEN | ❌ |
| 🟡 中 | #957 | [BUG] 无法编辑已完成会话 | OPEN | ❌ |

**详细说明**：

1. **#982（高优先级）**：用户在使用 v0.4.5 时遇到 API 错误，提示 `thinking` 块中的 `signature` 无效。这可能与 API 请求格式或签名机制有关，影响核心功能可用性。

2. **#779（高优先级）**：长期未解决的权限卡顿问题，用户在执行任务时程序无响应，token 也不消耗。问题在 6 月 10 日首次报告，至今仍有 8 条评论讨论，但尚未修复。

3. **#980（中优先级）**：Windows 桌面端用户在调用 Read 工具后程序卡住，疑似与多文件权限审批 UI 相关。问题在 7 月 7 日报告，暂无修复进展。

4. **#957（中优先级）**：功能缺失问题，用户无法编辑已完成会话，影响工作流效率。

**建议**：#779 和 #982 涉及核心功能稳定性，建议维护者优先排查。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

| 编号 | 标题 | 类型 | 状态 | 链接 |
|------|------|------|------|------|
| #974 | 可否增加一个可以Ctrl+F搜索对话的功能，就像浏览器一样？ | question | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/974) |
| #978 | 支持Claude Code的 "Auto" 模式 | enhancement | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/978) |
| #981 | 可否增加一个 VS Code 插件，用来连接 CLI 进行使用 | question | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/981) |

**分析**：

1. **#974 → 已对应 PR #979**：用户请求的 Ctrl+F 搜索功能已有对应实现（见第 3 节），预计近期可合并。

2. **#978**：用户希望支持 Claude Code 的 "Auto" 模式，这是对标官方功能的合理需求，可能需要评估实现复杂度和优先级。

3. **#981（已关闭）**：VS Code 插件建议已被关闭，可能因超出当前项目范围或资源限制。

**路线图信号**：对话管理（搜索、编辑）、跨平台集成（VS Code）、模型能力对齐（Auto 模式）是用户最关注的方向。

---

## 7. 用户反馈摘要

### 真实用户痛点与使用场景

| 场景 | 反馈来源 | 核心诉求 |
|------|----------|----------|
| 长对话回顾 | #974 | 对话可能非常长，需要定位特定内容，当前只能全文浏览 |
| 会话管理 | #957 | 希望编辑已完成会话的描述并重新发送，避免重复发起对话 |
| 技能选择 | #955 | 技能列表仅显示名称，不显示描述，不便于快速识别 |
| 权限交互 | #779, #980 | 权限审批 UI 导致程序卡住，影响任务执行效率 |
| API 稳定性 | #982 | v0.4.5 出现 API 签名错误，影响正常使用 |

**用户满意度信号**：
- 正面：用户积极提出功能改进建议，说明对项目有较高期待和使用粘性
- 负面：Windows 桌面端的权限审批和 API 错误问题影响核心体验，需尽快修复

---

## 8. 待处理积压

### 长期未响应的 Issues

| 编号 | 标题 | 创建时间 | 最后更新 | 积压天数 | 状态 | 链接 |
|------|------|----------|----------|----------|------|------|
| #779 | [BUG] 权限问题导致任务卡住不回复 | 2026-06-10 | 2026-07-07 | **27 天** | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/779) |

**说明**：Issue #779 自 6 月 10 日创建以来，已有 27 天未得到有效修复，社区评论数达 8 条，是当前最活跃的 Bug 报告。该问题严重影响 Windows 桌面端用户体验，建议维护者优先评估并给出修复计划。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去24小时 Issues 更新 | 8 条（新开/活跃: 6，已关闭: 2） |
| 过去24小时 PR 更新 | 1 条（待合并: 1，已合并: 0） |
| 新版本发布 | 0 个 |
| 当前 OPEN Issues 总数（示例） | 6 条 |
| 当前 CLOSED Issues 总数（示例） | 2 条 |

---

*报告生成时间：2026-07-08 | 数据来源：GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-07-08  
**数据来源**: GitHub Codex++ Repository

---

## 1. 今日速览

2026年7月8日，Codex++ 项目保持高度活跃，共产生 **24 条 Issues 更新**（23 新开/活跃，1 已关闭）和 **6 条 PR 更新**（5 待合并，1 已合并）。今日社区焦点集中在**多模态兼容性问题**——多个用户报告在使用 DeepSeek 等纯文本模型时，图片上传导致对话永久损坏，这是目前最高频的 Bug 集群。项目维护团队已提交多个 fix PR 覆盖该问题，预计近期将合并修复。整体来看，项目处于快速迭代期，功能完善与稳定性修复并行推进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并 PR

| PR 编号 | 标题 | 贡献者 | 说明 |
|---------|------|--------|------|
| [#1369](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1369) | fix: fall through to config.toml when aggregate profile has no models | @Marnie0415 | **重要修复**：解决了聚合中继配置下 Codex 模型选择器不显示自定义模型的问题。当 `settings.json` 存在且 `activeRelayId` 指向聚合中继配置时，原逻辑直接返回空模型列表，现已修复为回退读取 `config.toml`。 |

### 待合并 PR（5 条）

| PR 编号 | 标题 | 贡献者 | 状态说明 |
|---------|------|--------|----------|
| [#1325](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1325) | fix: model catalog fallback for not_configured status | @Marnie0415 | 修复 Codex App 26.623+ 模型白名单注入失败问题 |
| [#1358](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1358) | feat: add goal resume guard / 添加目标续跑保护 | @Yuimi-chaya | 新增目标续跑保护功能，支持读取状态文件作为恢复锚点 |
| [#1364](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1364) | fix(bridge): bypass Codex page CSP for injected scripts | @LeoLin990405 | 修复插件市场安装被 CSP 拦截的问题 |
| [#1363](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1363) | fix(model-catalog): keep versioned base URL when fetching model list | @LeoLin990405 | 修复火山引擎 ARK 供应商模型列表获取 404 问题 |
| [#1360](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1360) | fix(inject): graceful fallback for app-server model patch | @LeoLin990405 | 修复 Codex 26.623+ 版本模块缺失导致的异常上报问题 |

**推进评估**: 今日项目在模型配置、中继代理、插件系统三个维度均有实质性推进，5 个待合并 PR 覆盖核心功能与稳定性修复，预计将显著提升用户体验。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 热度分析 |
|------------|------|--------|-----|----------|
| [#959](https://github.com/BigPizzaV3/CodexPlusPlus/issues/959) | DeepSeek 纯文本模型遇图片即报错 | 8 | 0 | **最高热度**：多用户反馈的核心痛点 |
| [#451](https://github.com/BigPizzaV3/CodexPlusPlus/issues/451) | 上下文窗口配置不生效 | 8 | 0 | 配置类问题，用户困惑 |
| [#766](https://github.com/BigPizzaV3/CodexPlusPlus/issues/766) | 后端连接总是断开 | 4 | 0 | 稳定性问题 |
| [#1353](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1353) | 无法使用 Codex++ 入口启动 Code | 4 | 0 | 启动失败问题 |
| [#1194](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1194) | DeepSeek-v4-pro 模型上传图片 JSON 解析异常 | 4 | 0 | 多模态兼容性问题 |
| [#1158](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1158) | DeepSeek 模型发送图片后无法对话 | 4 | 1 | 线程永久损坏问题 |

### 热点分析

**核心诉求**：社区讨论高度集中于**多模态模型兼容性问题**。用户在使用 DeepSeek 等不支持图片输入的模型时，一旦对话历史包含图片，将导致：
1. JSON 解析错误 `unknown variant 'image_url', expected 'text'`
2. 对话线程永久损坏，即使切换模型也无法恢复
3. 只能手动开新线程规避

用户强烈呼吁在转发请求前自动过滤或转换图片内容，详见功能请求 [#1191](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1191)。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

#### 🔴 高优先级（影响核心功能）

| Issue 编号 | 标题 | 影响范围 | 状态 | 是否有 Fix PR |
|------------|------|----------|------|---------------|
| [#1158](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1158) | DeepSeek 模型发送图片后无法对话 | 协议转换/代理 | OPEN | 关联 #1191 |
| [#790](https://github.com/BigPizzaV3/CodexPlusPlus/issues/790) | 发送图片后报错 unknown variant 'image_url'，对话永久损坏 | 协议转换/代理 | OPEN | 关联 #1191 |
| [#574](https://github.com/BigPizzaV3/CodexPlusPlus/issues/574) | DeepSeek 模型下应拦截图片上传，否则线程永久损坏 | 协议转换/代理 | OPEN | 关联 #1191 |
| [#1353](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1353) | 无法使用 Codex++ 入口启动 Code | 启动/重启 | OPEN | 无 |
| [#1356](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1356) | 切换 API 提供商后删除 config.toml 的 [desktop] 段导致无法启动 | 启动/重启 | OPEN | 无 |

#### 🟡 中优先级（影响使用体验）

| Issue 编号 | 标题 | 影响范围 | 状态 |
|------------|------|----------|------|
| [#766](https://github.com/BigPizzaV3/CodexPlusPlus/issues/766) | 后端连接总是断开 | 启动/重启 | OPEN |
| [#1367](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1367) | 涉及网络搜索或打开网页的操作直接闪退 | 界面/交互 | OPEN |
| [#1368](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1368) | 配置 DeepSeek 一直连接不上，显示断开连接 | 供应商切换/配置写入 | OPEN |
| [#525](https://github.com/BigPizzaV3/CodexPlusPlus/issues/525) | 偶发输入框无法输入 | 界面/交互 | OPEN |

#### 🟢 低优先级（功能性问题）

| Issue 编号 | 标题 | 影响范围 | 状态 |
|------------|------|----------|------|
| [#1365](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1365) | 对话不支持图片 | 启动/重启 | OPEN |
| [#839](https://github.com/BigPizzaV3/CodexPlusPlus/issues/839) | 智谱 GLM 模型发送图片导致报错 | 协议转换/代理 | OPEN |
| [#1017](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1017) | 图片识别异常 unexpected status 404 | 界面/交互 | OPEN |

**稳定性评估**：今日共报告 **16 个 Bug**，其中 **5 个高优先级**问题集中于多模态兼容性与启动失败。建议优先处理图片过滤功能（#1191）以系统性解决图片相关 Bug 集群。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue 编号 | 标题 | 功能范围 | 用户需求 | 关联 PR |
|------------|------|----------|----------|---------|
| [#1191](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1191) | 自动过滤不支持多模态模型的消息中的图片内容 | 供应商管理 | 对不支持图片的模型自动替换/移除 image_url content block | 无 |
| [#1371](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1371) | 供应商增加配置：接管供应商配置or不接管 | 供应商管理 | 支持切换是否接管供应商配置，兼容 cc-switch 等工具 | 无 |
| [#1370](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1370) | 有计划接入 Claude 吗？ | 协议转换 | 支持在 Codex++ 中使用 Claude、Codex、 Gemini 等模型 | 无 |

### 路线图信号分析

1. **多模态兼容性**：多个 Issue 指向同一问题，预计将成为下一版本的**核心优化方向**
2. **供应商管理增强**：用户希望更灵活的配置管理方案，支持多工具协同
3. **模型扩展**：社区对 Claude 接入有明确需求

**已纳入开发的功能**：
- 目标续跑保护（#1358）— 已在 PR 阶段
- 模型目录修复（#1325, #1363）— 已在 PR 阶段

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 痛点描述 | 代表 Issue |
|------|----------|-----------|
| **多模态模型混用** | 使用 DeepSeek 等纯文本模型时，历史对话中的图片导致请求失败，且线程永久损坏 | #574, #790, #1158 |
| **启动失败** | 切换 API 提供商后 Codex 无法启动，需手动修复 config.toml | #1356 |
| **后端断连** | 长时间挂在后台后后端连接断开，修复按钮无效 | #766 |
| **供应商配置混乱** | 新增/删除供应商后其他供应商链接变动 | #1319 |

### 用户使用场景

- **SSH 开发场景**：用户通过 Codex++ 启动 Codex 后连接 SSH 进行远程开发（#1362）
- **多模型切换**：用户在 GPT 额度用完后切换 DeepSeek，但图片历史导致兼容问题（#631）
- **插件生态**：用户依赖插件市场安装扩展，但受 CSP 限制（#1364）

### 满意度信号

- **正面**：用户对项目整体框架认可，多个 Issue 提供了详细的复现步骤和日志
- **负面**：多模态兼容性问题严重影响使用体验，用户期待系统性解决方案

---

## 8. 待处理积压

### 长期未响应的重要 Issue（超过 7 天无维护者回复）

| Issue 编号 | 标题 | 创建日期 | 未响应天数 | 优先级 |
|------------|------|----------|------------|--------|
| [#574](https://github.com/BigPizzaV3/CodexPlusPlus/issues/574) | DeepSeek 模型下应拦截图片上传，否则线程永久损坏 | 2026-06-03 | 35 天 | 🔴 高 |
| [#525](https://github.com/BigPizzaV3/CodexPlusPlus/issues/525) | 偶发输入框无法输入 | 2026-06-02 | 36 天 | 🟡 中 |
| [#631](https://github.com/BigPizzaV3/CodexPlusPlus/issues/631) | Failed to deserialize JSON body (image_url) | 2026-06-04 | 34 天 | 🔴 高 |
| [#451](https://github.com/BigPizzaV3/CodexPlusPlus/issues/451) | 上下文窗口配置不生效 | 2026-05-31 | 38 天 | 🟡 中 |

### 建议关注

1. **Issue #574**：该问题详细分析了根因并提出了解决方案建议，已获得 3 个 👍，建议优先评估并合并相关修复
2. **Issue #451**：上下文窗口配置问题影响用户使用大上下文模型，需确认配置逻辑
3. **Issue #525**：偶发性 UI 问题难以复现，建议添加遥测或日志收集机制

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 今日新增 Issues | 23 |
| 今日关闭 Issues | 1 |
| 今日新增 PRs | 6 |
| 今日合并 PRs | 1 |
| 待合并 PRs | 5 |
| 新版本发布 | 0 |
| 高优先级 Bug | 5 |
| 功能请求 | 3 |

---

*报告生成时间: 2026-07-08 | 数据覆盖: 2026-07-07 00:00 至 2026-07-08 00:00 (UTC)*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*