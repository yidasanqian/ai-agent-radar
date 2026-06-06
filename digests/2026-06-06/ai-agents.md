# OpenClaw 生态日报 2026-06-06

> Issues: 152 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-06 03:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-06  
**数据区间：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高活跃度，共产生 **152 条 Issues 更新**（114 新开/活跃，38 已关闭）和 **500 条 PR 更新**（363 待合并，137 已合并/关闭）。项目整体呈现**高度迭代状态**，社区参与积极。今日未发布新版本，但多个高优先级 Bug 修复 PR 已进入 review 阶段，包括针对 v2026.6.1 回归问题的关键修复。安全相关 Issues 持续受到关注，多个涉及 session 状态、消息丢失和认证 provider 的 P1 问题需要优先处理。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去 24 小时共合并/关闭 **137 条 PR**，以下为重要进展：

### 关键修复 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#90812](https://github.com/openclaw/openclaw/pull/90812) | fix(voice-call): preserve live Twilio streams in stale reaper | 🚀 automerge armed |
| [#90790](https://github.com/openclaw/openclaw/pull/90790) | fix(codex): preserve completed replies after client close | 👀 ready for maintainer look |
| [#90565](https://github.com/openclaw/openclaw/pull/90565) | fix(sessions): include sender metadata in group chat session JSONL | 👀 ready for maintainer look |
| [#90819](https://github.com/openclaw/openclaw/pull/90819) | fix(gateway): pin plugin workspace dir during sessions.list to stop O(rows) metadata scans | 👀 ready for maintainer look |
| [#90828](https://github.com/openclaw/openclaw/pull/90828) | fix(mac-gateway): route launchd plist stderr to log file instead of /dev/null | 📣 needs proof |

### 功能增强 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#90833](https://github.com/openclaw/openclaw/pull/90833) | feat(control-ui): allow renaming sessions in sidebar | 📣 needs proof |
| [#90328](https://github.com/openclaw/openclaw/pull/90328) | Expose model picker agent runtimes | 👀 ready for maintainer look |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | feat(subagents): forward toolsAllow from sessions_spawn | 👀 ready for maintainer look |

### 稳定性改进 PR

| PR | 描述 | 状态 |
|---|---|---|
| [#90811](https://github.com/openclaw/openclaw/pull/90811) | fix(agents): stabilize user-turn serialization across turns to preserve prompt cache | ⏳ waiting on author |
| [#90821](https://github.com/openclaw/openclaw/pull/90821) | fix(compact): make /compact command cancelable via abortEmbeddedAgentRun | 📣 needs proof |
| [#90832](https://github.com/openclaw/openclaw/pull/90832) | fix(gateway): surface in-progress assistant response on session reconnect | 📣 needs proof |

---

## 4. 社区热点

以下 Issues 和 PRs 引发最多讨论（按评论数排序）：

### 最活跃 Issues

1. **[#76562](https://github.com/openclaw/openclaw/issues/76562)** - High CPU, extreme control-plane RPC latency after upgrade (13 条评论) **[已关闭]**
   - **诉求：** 升级后 CPU 接近 100%，control-plane RPC 延迟极高
   - **背景：** 影响从 2026.4.24 升级到 2026.4.29/2026.5.2 的用户

2. **[#78308](https://github.com/openclaw/openclaw/issues/78308)** - Channel-mediated approval for MCP tool calls (12 条评论) **[OPEN]**
   - **诉求：** 允许 MCP 服务器使用与 shell-exec 相同的 `/approve <id>` 审批管道
   - **价值：** 增强 MCP 工具调用的安全审批机制

3. **[#90083](https://github.com/openclaw/openclaw/issues/90083)** - OpenAI ChatGPT Responses transport fails (12 条评论) **[OPEN]**
   - **诉求：** v2026.6.1 中 gpt-5.4/gpt-5.5 返回 `invalid_provider_content_type` 错误
   - **影响：** P1 问题，影响 OpenAI 最新模型集成

4. **[#78016](https://github.com/openclaw/openclaw/issues/78016)** - Voice messages on Matrix don't work (11 条评论) **[已关闭]**
   - **诉求：** Matrix 上的语音消息无法被 agent 正确处理
   - **状态：** 已关闭，可能已修复

5. **[#63829](https://github.com/openclaw/openclaw/issues/63829)** - Per-agent memory-wiki vault configuration (9 条评论) **[OPEN]**
   - **诉求：** 支持多 agent 场景下各自独立的 knowledge wiki
   - **价值：** 提升多 agent 架构的隔离性

### 最活跃 PRs

1. **[#90811](https://github.com/openclaw/openclaw/pull/90811)** - fix(agents): stabilize user-turn serialization across turns to preserve prompt cache (Size: L)
   - **价值：** 修复 prompt cache 在多轮对话中的稳定性问题

2. **[#88245](https://github.com/openclaw/openclaw/pull/88245)** - refactor(whatsapp): introduce inbound message contexts (Size: XL)
   - **价值：** 重构 WhatsApp 消息结构，提升可维护性

3. **[#90798](https://github.com/openclaw/openclaw/pull/90798)** - fix(agents): materialize sandbox skills for rw sandboxes (Size: XL)
   - **价值：** 修复 rw sandbox 中非 workspace skills 的读取问题

---

## 5. Bug 与稳定性

### P0/P1 严重问题（需立即关注）

| Issue | 描述 | 严重程度 | 是否有 Fix PR |
|---|---|---|---|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI ChatGPT Responses transport fails for gpt-5.4/gpt-5.5 | P1 | 无 |
| [#90093](https://github.com/openclaw/openclaw/issues/90093) | openai-chatgpt-responses native replay sends encrypted reasoning | P1 | 无 |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP tools not injected into subagent sessions | P1 | 无 |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | Matrix channel dispatch broken in v2026.6.1 | P1 | 无 |
| [#90667](https://github.com/openclaw/openclaw/issues/90667) | Extended thinking sessions permanently broken after restart | P1 | 无 |
| [#90771](https://github.com/openclaw/openclaw/issues/90771) | Gateway restart drops final reply after model.completed | P1 | 无 |
| [#90786](https://github.com/openclaw/openclaw/issues/90786) | memory status --index and --deep fail with "Unknown memory embedding provider: google" | P1 | 无 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | WebChat session transcript overwritten on every turn | P1 | 无 |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | launchd plist StandardErrorPath hardcoded to /dev/null | P2 | [#90828](https://github.com/openclaw/openclaw/pull/90828) |
| [#90072](https://github.com/openclaw/openclaw/issues/90072) | Cron state silently wiped during SQLite migration | P1 | 无 |

### 回归问题（Regression）

| Issue | 描述 | 版本 | 是否有 Fix PR |
|---|---|---|---|
| [#87756](https://github.com/openclaw/openclaw/issues/87756) | Lobster workflow hangs on nested /tools/invoke when prompt-launched | v2026.6.1 | 无 |
| [#90585](https://github.com/openclaw/openclaw/issues/90585) | Tool calls with arguments arrive as empty objects when using LM Studio | v2026.5.27 | 无 |
| [#90466](https://github.com/openclaw/openclaw/issues/90466) | memory-core dreaming writes fallback despite valid prose responses | v2026.6.1 | 无 |
| [#90756](https://github.com/openclaw/openclaw/issues/90756) | Skill workshop does not show anything in the GUI | v6.1 | 无 |

### 稳定性风险

- **[#76562](https://github.com/openclaw/openclaw/issues/76562)** - sessions.list 在并发场景下 O(rows) 慢查询问题，相关 PR [#90819](https://github.com/openclaw/openclaw/pull/90819) 正在 review
- **[#84110](https://github.com/openclaw/openclaw/issues/84110)** - Codex app-server rewrites prompt busting OpenAI prompt cache (93% → 47%)

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 描述 | 优先级 | 相关 PR |
|---|---|---|---|
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls (consent envelope) | P2 | 无 |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault configuration | P1 | 无 |
| [#87967](https://github.com/openclaw/openclaw/issues/87967) | Session Rename / Custom Session Labels | - | [#90833](https://github.com/openclaw/openclaw/pull/90833) |
| [#39127](https://github.com/openclaw/openclaw/issues/39127) | Per-session activity state (busy/idle + awaiting_user) | P2 | 无 |
| [#60864](https://github.com/openclaw/openclaw/issues/60864) | RFC: Task Continuation Across Gateway Restarts (Checkpoint + Auto-Resume) | P2 | 无 |
| [#90246](https://github.com/openclaw/openclaw/issues/90246) | Allow hiding or collapsing the Workspace / Files rail in WebChat | - | 无 |
| [#60602](https://github.com/openclaw/openclaw/issues/60602) | Per-Agent Bedrock requestMetadata Injection for Multi-Agent Cost Attribution | P2 | 无 |

### 可能的下一版本特性

根据已有 PR 判断，以下功能可能进入下一版本：
- **Session 重命名功能** - [#90833](https://github.com/openclaw/openclaw/pull/90833) 接近 ready 状态
- **Model Picker 显示 Agent Runtime** - [#90328](https://github.com/openclaw/openclaw/pull/90328) 正在 review
- **Subagent toolsAllow 转发** - [#78441](https://github.com/openclaw/openclaw/pull/78441) 正在 review
- **WhatsApp 消息上下文重构** - [#88245](https://github.com/openclaw/openclaw/pull/88245) 正在 review

---

## 7. 用户反馈摘要

### 核心痛点

1. **升级风险高** - 多名用户报告升级后出现严重回归问题（CPU 飙升、session 丢失、功能失效）
   - > "After upgrading OpenClaw from `2026.4.24` to newer releases (`2026.4.29` and later `2026.5.2`), the gateway exhibits severe performance regressions"

2. **Session 状态管理脆弱** - Session transcript 被覆盖、extended thinking 永久损坏、subagent 消息丢失
   - > "In OpenClaw v2026.5.2, the webchat session JSONL transcript is **overwritten on every turn**"

3. **Provider 集成不稳定** - OpenAI Codex/ChatGPT、Anthropic、DeepSeek 等 provider 的 OAuth、token、fallback 机制问题频发
   - > "When Codex OAuth refresh starts timing out... OpenClaw can keep retrying inside the same provider/auth lane for hours"

4. **多平台兼容性问题** - Windows Hub、macOS launchd、Matrix、WhatsApp 等平台特定问题
   - > "OpenClaw Windows Hub setup fails at the `preflight-wsl` step on Simplified Chinese Windows 11"

### 用户满意点

- Voice messages 功能在部分渠道正常工作（#78016 已关闭）
- 多 agent 架构获得积极反馈，多个功能请求围绕多 agent 场景

---

## 8. 待处理积压

以下 Issues 长期未解决或缺乏响应，需维护者关注：

### 超过 30 天未响应的 P1 Issues

| Issue | 创建时间 | 描述 | 评论数 |
|---|---|---|---|
| [#37446](https://github.com/openclaw/openclaw/issues/37446) | 2026-03-06 | Sub-agent timeout recovery creates duplicate API posts | 5 |
| [#49523](https://github.com/openclaw/openclaw/issues/49523) | 2026-03-18 | Session transcript mirroring writes header cwd from process.cwd() | 4 |
| [#39599](https://github.com/openclaw/openclaw/issues/39599) | 2026-03-08 | Cron allows invalid Feishu announce jobs without delivery.to | 3 |
| [#39127](https://github.com/openclaw/openclaw/issues/39127) | 2026-03-07 | Per-session activity state feature request | 4 |
| [#60542](https://github.com/openclaw/openclaw/issues/60542) | 2026-04-03 | Persisted main session row can become stale | 3 |
| [#60864](https://github.com/openclaw/openclaw/issues/60864) | 2026-04-04 | RFC: Task Continuation Across Gateway Restarts | 4 |
| [#62615](https://github.com/openclaw/openclaw/issues/62615) | 2026-04-07 | Add gateway-side circuit breaker for unhealthy sessions | 3 |

### 长期未响应的安全相关 Issues

| Issue | 创建时间 | 描述 | 标签 |
|---|---|---|---|
| [#49523](https://github.com/openclaw/openclaw/issues/49523) | 2026-03-18 | Session transcript mirroring allows cross

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-06  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强、快速迭代"**的格局。OpenClaw 以 500+ PR/Issue 周转量领跑生态，具备最完整的会话管理、Provider 集成和 Agent 编排能力；Hermes Agent 凭借 v0.16.0 的 874 次提交和 170 位贡献者展现爆发式增长，聚焦桌面客户端和国际化；Codex++ 通过插件化架构和 API 聚合功能开辟细分赛道；cc-haha 则处于 v0.4.0 的稳定性重构期。整体来看，**会话生命周期管理、跨平台兼容性、多 Provider 集成** 是当前生态的核心技术主线，而安全审批机制、上下文压缩和 Agent 协作正在成为下一阶段的功能高地。

---

## 2. 各项目活跃度对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **Issues (24h)** | 152 (114 新/活跃) | 115 (106 新/活跃) | 17 (13 新/活跃) | 46 (43 新/活跃) |
| **PR 更新 (24h)** | 500 (363 待合并) | 500 (117 已合并) | 0 | 5 (4 待合并) |
| **版本发布** | 无 | v0.16.0 (874 commits) | 无 | v1.2.3 |
| **合并 PR (24h)** | 137 | 117 | 0 | 1 |
| **活跃贡献者** | 未披露 | 170 人 | 未披露 | 未披露 |
| **Bug 积压 (P1)** | 9 个 | 1 个 | 0 个 | 4 个 |
| **健康度评估** | 🟡 高迭代压力 | 🟢 规模扩张期 | 🔴 稳定性危机 | 🟡 功能完善期 |

**关键发现：** OpenClaw 和 Hermes Agent 活跃度相当，但 OpenClaw 的 Bug 积压显著高于 Hermes Agent；cc-haha 出现 PR 合并停滞，需警惕项目活力衰退；Codex++ 虽 Issue 量适中，但高严重性 Bug 占比突出。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

| 维度 | OpenClaw 表现 | 生态对比 |
|------|--------------|---------|
| **会话管理深度** | 支持 session transcript JSONL、extended thinking、subagent 协作 | 生态最完整，Hermes Agent 次之 |
| **Provider 覆盖** | OpenAI Codex/ChatGPT、Anthropic、DeepSeek、Matrix、WhatsApp 等 | 覆盖最广，Codex++ 聚焦 API 聚合 |
| **安全机制** | MCP 工具审批通道、Tirith 审批门（部分覆盖） | 布局较早但覆盖不完整 |
| **多 Agent 架构** | sessions_spawn、toolsAllow 转发、per-agent memory-wiki | 生态领先，cc-haha 尚未涉及 |

### 3.2 技术路线差异

- **OpenClaw** 采用 Gateway-Centric 架构，强调 session 持久化和跨渠道消息路由
- **Hermes Agent** 侧重 Desktop-First，v0.16.0 暗示 UI 层重构，OAuth 和 i18n 为当前重心
- **cc-haha** 走轻量化路线，聚焦会话交互体验，但架构深度不足
- **Codex++** 定位为 Codex 增强层，插件系统和 API 聚合为核心竞争力

### 3.3 社区规模估算

基于 Issue/PR 活跃度推断，OpenClaw 和 Hermes Agent 属于**第一梯队**（月活贡献者估计 50-200 人），cc-haha 和 Codex++ 属于**第二梯队**（月活贡献者估计 10-30 人）。OpenClaw 的 P1 Bug 积压（9 个）反映出社区规模与维护压力的矛盾。

---

## 4. 共同关注的技术方向

### 4.1 跨平台桌面客户端兼容性

| 项目 | 具体问题 |
|------|---------|
| **OpenClaw** | Windows Hub preflight-wsl 失败、macOS launchd stderr 路由 |
| **Hermes Agent** | macOS ARM/Intel 架构冲突、Windows 启动崩溃、Remote gateway WebSocket 拒绝 |
| **cc-haha** | Win11 UI 无法打开 |
| **Codex++** | MAC M1 502 错误、MacOS 启动失败 |

**诉求汇总：** 统一的跨平台构建流程、系统路径处理规范、远程连接稳定性保障。

### 4.2 多 Provider 集成与路由

| 项目 | 具体问题 |
|------|---------|
| **OpenClaw** | OpenAI ChatGPT Responses transport 失败、Anthropic/DeepSeek OAuth 超时 |
| **Hermes Agent** | MCP server 瞬时故障后永久放弃重连、QQ Bot 重连静默循环 |
| **Codex++** | DeepSeek API 1M 上下文无法开启、硅基流动 API 工具调用失败 |
| **cc-haha** | Anthropic OAuth 认证依赖 |

**诉求汇总：** 多 Provider 自动轮询、故障转移路由、OAuth token 刷新容错机制。

### 4.3 会话状态管理与生命周期

| 项目 | 具体问题 |
|------|---------|
| **OpenClaw** | Session transcript 覆盖、extended thinking 永久损坏、subagent 消息丢失 |
| **Hermes Agent** | cron 调度器上下文泄漏、session 行过期 |
| **cc-haha** | 会话卡住不动、WebSocket 无限重连、AI 循环思考 |
| **Codex++** | 启动后插件消失、relay 切换丢失设置 |

**诉求汇总：** 可靠的会话状态机设计、重连后状态恢复、后台任务正确终止。

### 4.4 上下文压缩与 Token 优化

| 项目 | 具体诉求 |
|------|---------|
| **OpenClaw** | prompt cache 在多轮对话中的稳定性（#90811） |
| **Hermes Agent** | 上下文感知技能提示和系统提示预算管理（#10164） |
| **cc-haha** | /compact 压缩后 UI 不同步、窗口计算错误 |
| **Codex++** | 1M 上下文快捷配置需求 |

**诉求汇总：** 高效的上下文压缩算法、压缩状态可视化反馈、Token 消耗可预期性。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心定位** | 企业级 Agent 编排平台 | 跨平台桌面 AI 助手 | 轻量级会话交互工具 | Codex 增强插件层 |
| **目标用户** | 技术团队、多 Agent 场景 | 桌面用户、i18n 需求者 | 个人用户 | Codex 重度用户 |
| **技术架构** | Gateway-Centric、session 持久化 | Desktop-First、OAuth 集成 | 轻量化、Electron/Tauri | 插件化、API 聚合 |
| **核心功能** | 多渠道路由、Provider 集成、安全审批 | 桌面客户端、i18n、安全修复 | 会话交互、权限控制 | 启动加速、插件管理 |
| **成熟度** | 功能完备但 Bug 积压 | 规模扩张期，质量待验证 | 稳定性危机，需重构 | 功能完善，稳定性待提升 |

**关键差异：** OpenClaw 是唯一具备完整 Agent 编排和安全审批机制的项目；Hermes Agent 是唯一将 i18n 提上议程的项目；cc-haha 定位最轻但稳定性问题最严重；Codex++ 是唯一围绕单一产品（Codex）构建增强生态的项目。

---

## 6. 社区热度与成熟度分层

### 6.1 热度分层

```
第一梯队（高热度）
├── OpenClaw      ████████████████████ 152 Issues + 500 PRs/24h
└── Hermes Agent  ████████████████████ 115 Issues + 500 PRs/24h

第二梯队（中等热度）
├── Codex++       ████████ 46 Issues + 5 PRs/24h
└── cc-haha       ████ 17 Issues + 0 PRs/24h
```

### 6.2 成熟度评估

| 项目 | 阶段 | 特征 | 风险 |
|------|------|------|------|
| **OpenClaw** | 质量巩固期 | 功能完备但 Bug 积压严重，9 个 P1 未修复 | 升级回归问题频发，用户信任受损 |
| **Hermes Agent** | 快速迭代期 | v0.16.0 规模空前，170 贡献者参与 | 新功能引入可能带来稳定性波动 |
| **cc-haha** | 稳定性危机期 | PR 合并停滞，v0.4.0 问题未收敛 | 项目活力衰退风险 |
| **Codex++** | 功能完善期 | 插件系统和 API 聚合稳步推进 | 高严重性 Bug 占比高（4/10） |

---

## 7. 值得关注的趋势信号

### 7.1 技术趋势

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|---------|-------------------|
| **Agent 协作标准化** | OpenClaw subagent toolsAllow 转发、per-agent memory-wiki | 多 Agent 架构设计需提前考虑权限隔离和状态共享 |
| **安全审批机制演进** | MCP 工具审批通道、Tirith 审批门缺失讨论 | 自主 Agent 的安全边界定义是行业难题，OpenClaw 正在探索 |
| **跨平台桌面客户端成为标配** | 4 个项目均有桌面客户端问题 | 开发者需重视 Electron/Tauri 的平台差异测试 |
| **上下文管理精细化** | prompt cache 稳定性、/compact 可视化 | 长上下文场景下的 Token 优化将成为核心竞争力 |
| **Provider 路由自动化** | 多供应商轮询需求（Codex++ #428） | API 聚合和故障转移是降低使用成本的关键 |

### 7.2 社区运营趋势

| 趋势 | 信号来源 | 对项目维护者的参考价值 |
|------|---------|----------------------|
| **升级回归问题影响用户信任** | OpenClaw 多名用户报告升级后严重回归 | 版本发布需加强回归测试覆盖，建议提供 LTS 版本 |
| **i18n 需求涌现** | Hermes Agent 日语、葡萄牙语支持请求 | 国际化是扩大用户基础的重要手段 |
| **Issue 积压影响社区活跃度** | cc-haha PR 合并停滞 | 需平衡功能开发与 Bug 修复节奏，避免社区疲劳 |
| **安全漏洞响应滞后** | Hermes Agent urllib3 CVE 未修复 | 安全问题需建立快速响应机制 |

### 7.3 行业信号

1. **自主 Agent 的安全性尚未形成共识**：OpenClaw 的 MCP 审批通道、Tirith 审批门覆盖不完整，Hermes Agent 的 Tirith 绕过问题，反映出行业对"Agent 何时需要人工审批"缺乏统一标准。

2. **桌面客户端是下一战场**：4 个项目均在桌面客户端上投入大量精力，但跨平台兼容性尚未解决，预计未来 6-12 个月将出现标准化方案。

3. **Provider 集成复杂度超预期**：OpenAI Codex/ChatGPT、Anthropic、DeepSeek 等 Provider 的 OAuth、token、fallback 机制问题频发，表明 Provider API 稳定性仍是行业痛点。

4. **轻量化路线面临挑战**：cc-haha 的稳定性危机表明，在功能快速迭代的同时保持稳定性需要更强的架构设计和测试覆盖。

---

## 8. 总结与建议

### 对技术决策者

- **采用 OpenClaw**：适合需要完整 Agent 编排、多渠道集成、安全审批的企业场景，但需关注 P1 Bug 积压，建议等待 v2026.6.x 稳定版本
- **采用 Hermes Agent**：适合桌面 AI 助手场景，i18n 支持和跨平台桌面客户端是亮点，但 v0.16.0 为大规模更新，建议评估稳定性
- **采用 cc-haha**：当前不建议生产使用，v0.4.0 稳定性问题严重，建议等待 0.4.x 补丁版本
- **采用 Codex++**：适合 Codex 重度用户，插件系统和 API 聚合功能实用，但需关注 MAC 平台兼容性问题

### 对开发者

- **参与 OpenClaw**：Bug 修复机会多，subagent 协作、安全审批方向有贡献空间
- **参与 Hermes Agent**：i18n、桌面客户端、安全修复是当前热点
- **关注 Codex++**：插件系统、API 聚合方向可贡献代码

---

*报告生成时间：2026-06-06*  
*数据来源：GitHub 各项目公开数据（过去 24 小时）*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-06-06  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

Hermes Agent 在过去 24 小时内保持极高的开发活跃度，共处理 **500 条 PR 更新**（其中 117 条已合并/关闭）和 **115 条 Issue 更新**（106 条新开/活跃，9 条已关闭）。项目于 2026-06-05 发布了 **v0.16.0 "The Surface Release"**，包含 874 次提交、542 个合并 PR、170 位贡献者，是一次规模空前的版本迭代。从 Issue 分布看，跨平台桌面客户端（Windows/macOS）的兼容性问题、本地化支持（i18n）需求、以及安全相关的依赖漏洞修复成为当前社区焦点。整体项目处于快速迭代阶段，代码合并效率高，但积压的 P1/P2 级 Bug 仍需优先处理。

---

## 2. 版本发布

### v2026.6.5: Hermes Agent v0.16.0 "The Surface Release"

**发布日期：** 2026 年 6 月 5 日  
**版本跨度：** 自 v0.15.2 以来的重大更新

| 指标 | 数值 |
|------|------|
| 提交数 | 874 commits |
| 合并 PRs | 542 |
| 文件变更 | 1,962 files |
| 代码增量 | +205,216 insertions / -46,217 deletions |
| 关闭 Issues | 399 (含 2 个 P0、62 个 P1、16 个安全标签) |
| 贡献者 | 170 人（含联合作者） |

**主要特性：** 此次版本代号"The Surface"，暗示可能聚焦于用户界面层和桌面客户端的优化，但具体功能说明在提供的数据中未完整展示。建议查阅 [Release 页面](https://github.com/NousResearch/hermes-agent/releases) 获取完整变更日志。

---

## 3. 项目进展

过去 24 小时内合并/关闭的重要 PR（按评论数/重要性筛选）：

### 关键 Bug 修复

| PR 编号 | 描述 | 严重程度 | 状态 |
|---------|------|----------|------|
| [#40260](https://github.com/NousResearch/hermes-agent/pull/40260) | fix(compression): 防止上下文压缩后的证据伪造问题 | P1 | OPEN |
| [#40253](https://github.com/NousResearch/hermes-agent/pull/40253) | fix(security): 替换 sys.path.insert 以防止恶意模块注入 | P2 | OPEN |
| [#40255](https://github.com/NousResearch/hermes-agent/pull/40255) | fix: 在平台异步处理器中使用 async_is_safe_url | P2 | OPEN |
| [#40237](https://github.com/NousResearch/hermes-agent/pull/40237) | fix(patch): V4A patch 无头部时返回错误而非静默成功 | P2 | OPEN |
| [#40233](https://github.com/NousResearch/hermes-agent/pull/40233) | fix(desktop/windows): 尊重 legacy ~/.hermes 配置 | P2 | OPEN |
| [#39773](https://github.com/NousResearch/hermes-agent/pull/39773) | fix(windows): 解析 PATH 中的 Git Bash 路径 | P2 | OPEN |

### 平台适配改进

| PR 编号 | 描述 | 组件 |
|---------|------|------|
| [#40247](https://github.com/NousResearch/hermes-agent/pull/40247) | fix(wsl): 转换 Windows cwd 值供终端工具使用 | ACP, Terminal |
| [#40244](https://github.com/NousResearch/hermes-agent/pull/40244) | fix(whatsapp): 区分音频附件与语音笔记 | Gateway |
| [#40245](https://github.com/NousResearch/hermes-agent/pull/40245) | fix(whatsapp): 尊重仅环境变量的白名单配置 | Gateway |
| [#40241](https://github.com/NousResearch/hermes-agent/pull/40241) | fix(whatsapp): 通过 logger 记录运行时桥接和媒体失败 | Gateway |

### 新功能提案

| PR 编号 | 描述 | 类型 |
|---------|------|------|
| [#40252](https://github.com/NousResearch/hermes-agent/pull/40252) | feat(prompt): 通过 ephemeral_system_prompt 注入当前挂钟时间 | Feature |
| [#40248](https://github.com/NousResearch/hermes-agent/pull/40248) | feat(memory): 添加 Hermex MVP 代理 | Feature |
| [#40258](https://github.com/NousResearch/hermes-agent/pull/40258) | feat(desktop): 在远程后端上浏览和上传网关文件系统 | Feature |
| [#40257](https://github.com/NousResearch/hermes-agent/pull/40257) | feat(acp): 将 authenticate() OAuth bearer 转发至 provider api_key | Feature |

### 工具链与文档

| PR 编号 | 描述 | 类型 |
|---------|------|------|
| [#40243](https://github.com/NousResearch/hermes-agent/pull/40243) | fix: 允许枚举延迟加载的工具 | Bug |
| [#40236](https://github.com/NousResearch/hermes-agent/pull/40236) | fix(schema_sanitizer): 为严格后端剥离无效属性键 | Bug |
| [#40249](https://github.com/NousResearch/hermes-agent/pull/40249) | docs(curator): 澄清 prune_builtins 行为 | Docs |
| [#40242](https://github.com/NousResearch/hermes-agent/pull/40242) | test(desktop): 覆盖 OAuth 会话请求头测试 | Test |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

**1. #25495** - Matrix/Synapse 网关在官方 Docker 镜像中损坏（15 条评论，已关闭）  
   标签：`type/bug, P1`  
   摘要：官方 Docker 镜像中的 Matrix/Synapse 网关在特定 SHA 之后无法启动，日志停留在"fixing ownership :1000"。  
   链接：https://github.com/NousResearch/hermes-agent/issues/25495

**2. #13944** - 系统提示技能索引将描述截断至 60 字符（6 条评论，已关闭）  
   标签：`type/bug, P2`  
   摘要：技能索引硬截断所有技能描述至 60 字符，可能导致触发标准和上下文信息丢失，影响模型路由准确性。  
   链接：https://github.com/NousResearch/hermes-agent/issues/13944

**3. #37505** - Hermes Desktop macOS DMG 仅支持 arm64，在 Intel Mac 上失败（5 条评论）  
   标签：`type/bug, P3`  
   摘要：当前 macOS DMG 仅提供 arm64 安装包，Intel Mac 用户收到"Bad CPU type in executable"错误。  
   链接：https://github.com/NousResearch/hermes-agent/issues/37505

**4. #34824** - 在任务开始时打印委托任务模型（4 条评论）  
   标签：`type/feature, P3`  
   摘要：用户希望在委托任务启动时能看到所选模型，用于成本分析、质量监控和调试。  
   链接：https://github.com/NousResearch/hermes-agent/issues/34824

**5. #40219** - 添加日语语言支持（4 条评论）  
   标签：`type/feature, P3`  
   摘要：Hermes Agent 目前仅支持英语和简体中文，日语用户面临界面全英文和输入法兼容性问题。  
   链接：https://github.com/NousResearch/hermes-agent/issues/40219

**6. #31101** - QQ Bot 适配器在重连失败后进入静默循环（4 条评论）  
   标签：`type/bug, P2`  
   摘要：QQ Bot WebSocket 重连失败后，适配器进入无限静默循环，永不重试，导致永久断开连接。  
   链接：https://github.com/NousResearch/hermes-agent/issues/31101

**7. #933** - 支持多个 OAuth token 并自动回退（4 条评论，已关闭）  
   标签：`type/feature`  
   摘要：用户请求支持在 auth.json 中配置多个 OAuth token 以处理多账户或速率限制场景。  
   链接：https://github.com/NousResearch/hermes-agent/issues/933

### 热点 PR 分析

当前社区讨论集中于三个主题：

1. **跨平台桌面客户端兼容性**：macOS ARM/Intel 架构问题、Windows 安装路径冲突、远程网关连接问题
2. **国际化（i18n）需求**：日语、葡萄牙语等语言支持请求涌现
3. **安全性修复**：依赖漏洞（urllib3、python-multipart）和 sys.path 注入风险

---

## 5. Bug 与稳定性

### P0/P1 级严重问题（需立即关注）

| Issue | 描述 | 严重程度 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| [#39886](https://github.com/NousResearch/hermes-agent/issues/39886) | cron 调度器：profile-job 上下文泄漏到并发非-profile 任务 | P1 | OPEN | 无 |
| [#22196](https://github.com/NousResearch/hermes-agent/issues/22196) | Anthropic provider 将所有模型的点号转换为连字符，破坏第三方兼容 API | P2 | OPEN | 无 |
| [#31101](https://github.com/NousResearch/hermes-agent/issues/31101) | QQ Bot 适配器重连失败后进入静默循环 | P2 | OPEN | 无 |
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | MCP server 在瞬时后端故障后永久放弃重连 | P2 | OPEN | 无 |
| [#40176](https://github.com/NousResearch/hermes-agent/issues/40176) | pinned Python 依赖携带已知 CVE（urllib3 2.6.3 等） | P2 | OPEN | 无 |

### P2 级问题

| Issue | 描述 | 状态 | 相关 Fix PR |
|-------|------|------|-------------|
| [#25495](https://github.com/NousResearch/hermes-agent/issues/25495) | Matrix/Synapse Docker 镜像损坏 | CLOSED | - |
| [#13944](https://github.com/NousResearch/hermes-agent/issues/13944) | 技能描述截断至 60 字符 | CLOSED | - |
| [#39694](https://github.com/NousResearch/hermes-agent/issues/39694) | Telegram clarify prompts 显示错误的会话控制 | OPEN | 无 |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | Hermes Desktop 启动失败，显示"no git???" | OPEN | 无 |
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | Desktop "Remote gateway" WebSocket 连接被拒绝 (4403) | OPEN | 无 |

### P3 级问题（桌面客户端为主）

| Issue | 描述 | 平台 |
|-------|------|------|
| [#37505](https://github.com/NousResearch/hermes-agent/issues/37505) | macOS DMG 仅 arm64，Intel Mac 失败 | macOS |
| [#39570](https://github.com/NousResearch/hermes-agent/issues/39570) | Windows 原生应用启动时崩溃 | Windows |
| [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) | IME 输入中文时发送按钮不切换 | Desktop |
| [#37663](https://github.com/NousResearch/hermes-agent/issues/37663) | Desktop 客户端无法连接现有 VPS 实例 | Desktop |
| [#38227](https://github.com/NousResearch/hermes-agent/issues/38227) | macOS Intel 版本不可用 | macOS |

### 安全相关问题

| Issue | 描述 | 严重程度 | Fix PR |
|-------|------|----------|--------|
| [#40176](https://github.com/NousResearch/hermes-agent/issues/40176) | urllib3、python-multipart 等依赖携带 CVE | P2 | 无 |
| [#4464](https://github.com/NousResearch/hermes-agent/issues/4464) | npm 依赖已弃用，包含已知内存泄漏和安全公告 | P3 | 无 |
| [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) | Tirith 审批门未覆盖非 shell 工具，send_message/write_file 绕过人工审核 | P3 | 无 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 描述 | 优先级 | 已有相关 PR |
|-------|------|--------|-------------|
| [#10164](https://github.com/NousResearch/hermes-agent/issues/10164) | 上下文感知技能提示和系统提示预算管理 | P2 | 无 |
| [#15176](https://github.com/NousResearch/hermes-agent/issues/15176) | 本地开源模型失败后回退到闭源模型的路由机制 | P3 | 无 |
| [#34320](https://github.com/NousResearch/hermes-agent/issues/34320) | 确定性审批门：在执行前拦截重大工具调用 | P3 | 无 |

### i18n/本地化需求（多个 PR 正在推进）

| Issue | 语言 | 状态 |
|-------|------|------|
| [#40219](https://github.com/NousResearch/hermes-agent/issues/40219) | 日语 | OPEN |
| [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) | 葡萄牙语 (pt-BR) | OPEN |

### CLI/交互改进

| Issue | 描述 | 优先级 |
|-------|------|--------|
| [#34824](https://github.com/NousResearch/hermes-agent/issues/34824) | 在任务开始时打印委托任务模型 | P3 |
| [#39425](https://github.com/NousResearch/hermes-agent/issues/39425) | `/approvals` 斜杠命令切换审批模式 | P3 |
| [#37713](https://github.com/NousResearch/hermes-agent/issues/37713) | Desktop Remote gateway 应支持从 UI 切换活跃 Hermes profile | P3 |

### 新功能 PR 趋势

从 PR 数据看，以下方向可能进入下一版本：
- **时间感知增强**：通过 ephemeral_system_prompt 注入当前时间（#40252）
- **远程文件交互**：Desktop 客户端浏览/上传远程网关文件系统（#40258）
- **Hermex MVP**：新的 LLM 代理和会话指纹识别模块（#40248）
- **OAuth 增强**：支持 OAuth bearer 转发至 provider（#40257）

---

## 7. 用户反馈摘要

### 核心痛点

**1. 跨平台桌面客户端体验不佳**
- macOS Intel 用户完全无法使用官方 DMG
- Windows 用户遭遇启动崩溃、路径冲突、Git 检测失败
- 远程网关连接存在 WebSocket 握手问题

**2. 国际化支持不足**
- 日语用户反馈界面全英文难以理解
- 中文 IME 输入时按钮状态不更新
- 社区强烈要求添加日语、葡萄牙语等多语言支持

**3. 安全性担忧**
- 依赖项携带已知 CVE 未修复
- sys.path.insert 存在恶意模块注入风险
- Tirith 审批门未覆盖所有工具类型

**4. 稳定性问题**
- QQ Bot、MCP server 在网络波动后无法自动恢复
- cron 调度器存在上下文泄漏
- Docker 镜像在特定版本后无法启动

### 用户满意度来源

- v0.16.0 发布获得 170 位贡献者参与，规模空前
- OAuth 多 token 支持需求被积极响应（#933 已关闭）
- 技能路由和上下文管理功能持续优化

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或需要维护者关注：

### 长期未响应的 P1/P2 Issue

| Issue | 创建日期 | 描述 | 优先级 |
|-------|----------|------|--------|
| [#39886](https://github.com/NousResearch/hermes-agent/issues/39886) | 2026-06-05 | cron 调度器上下文泄漏 | P1 |
| [#22196](https://github.com/NousResearch/hermes-agent/issues/22196) | 2026-05-09 | Anthropic provider 模型名称转换破坏第三方 API | P2 |
| [#31101](https://github.com/NousResearch/hermes-agent/issues/31101) | 2026-05-23 | QQ Bot 重连静默循环 | P2 |
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | 2026-06-03 | MCP server 永久放弃重连 | P2 |
| [#40176](https://github.com/NousResearch/hermes-agent/issues/40176) | 2026-06-05 | Python 依赖 CVE 漏洞 | P2 |

### 跨平台桌面客户端问题（需统一规划）

| Issue | 平台 | 描述 |
|-------|------|------|
| [#37505](https://github.com/NousResearch/hermes-agent/issues/37505) | macOS | ARM-only DMG 破坏 Intel 兼容性 |
| [#38227](https://github.com/NousResearch/hermes-agent/issues/38227) | macOS | Intel 版本不可用 |
| [#39570](https://github.com/NousResearch/hermes-agent/issues/39570) | Windows | 启动时崩溃 |
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | Desktop | Remote gateway WebSocket 拒绝 |
| [#37663](https://github.com/NousResearch/hermes-agent/issues/376

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-06-06  
**项目仓库**：https://github.com/NanmiCoder/cc-haha

---

## 1. 今日速览

过去24小时内，cc-haha 项目保持较高社区活跃度，共产生 **17 条 Issues 更新**（新开/活跃 13 条，关闭 4 条），但 **无 PR 合并或版本发布**。项目当前主要面临 **v0.4.0 版本稳定性问题**，集中体现在会话管理、上下文处理和权限控制三个核心模块。今日社区反馈显示用户对会话生命周期管理（WebSocket 重连、循环思考）和上下文压缩功能（UI 显示滞后）问题反应强烈，建议优先处理。整体来看，项目处于 **问题修复驱动的迭代阶段**，建议维护者尽快响应高优先级 Bug。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去24小时内 **无 PR 合并或关闭**。项目代码更新暂时停滞，建议关注 Issues 积压情况。

---

## 4. 社区热点

以下 Issues 获得较多评论或互动，值得重点关注：

| Issue 编号 | 标题 | 评论数 | 类型 | 链接 |
|-----------|------|--------|------|------|
| #731 | v4.0 在 win11 系统情况下 UI 打不开 | 7 | Bug | [查看](https://github.com/NanmiCoder/cc-haha/issues/731) |
| #687 | 流式响应中途关闭 TCP，但一直显示执行中 | 6 | Bug | [查看](https://github.com/NanmiCoder/cc-haha/issues/687) |
| #734 | 关于会话卡住不动的两点分析 | 6 | Bug | [查看](https://github.com/NanmiCoder/cc-haha/issues/734) |
| #669 | 会话生命周期 Bug：停止对话后无限重连 WebSocket | 3 | Bug | [查看](https://github.com/NanmiCoder/cc-haha/issues/669) |

**热点分析**：
- **会话管理问题**成为今日焦点，#687、#734、#669 均涉及会话卡住、WebSocket 重连等生命周期问题，表明 v0.4.0 在会话状态机处理上存在系统性缺陷。
- **跨平台兼容性**：#731 报告 Win11 UI 无法打开，需关注 Electron 或 Tauri 框架的 Windows 适配问题。
- **上下文压缩功能**：#743、#739 均反馈手动压缩上下文后 UI 显示不正确，可能存在状态同步问题。

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

### 🔴 高优先级（已关闭，需确认修复）

| Issue | 描述 | 状态 | 链接 |
|-------|------|------|------|
| #731 | Win11 系统 UI 打不开 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/731) |
| #687 | 流式响应中途关闭 TCP，仍显示执行中 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/687) |
| #734 | 会话卡住不动 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/734) |
| #669 | 停止对话后无限重连 WebSocket | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/669) |

### 🟡 中优先级（待处理）

| Issue | 描述 | 状态 | 链接 |
|-------|------|------|------|
| #742 | 会话结束后 AI 自动反复思考，陷入循环 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/742) |
| #743 | /compact 手动压缩上下文后仍显示 100%，超时错误 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/743) |
| #739 | 手动压缩上下文后 UI 仍显示原额度 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/739) |
| #740 | Computer Use 授权成功但仍报错 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/740) |
| #741 | 设置"跳过"权限后仍反复请求授权 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/741) |
| #738 | 修改执行权限为"跳过"后任务自动停止 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/738) |
| #744 | 上下文窗口显示不对 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/744) |
| #725 | 历史 untitled session 点击后置顶，会话列表加载失败 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/725) |

### 🟢 低优先级

| Issue | 描述 | 状态 | 链接 |
|-------|------|------|------|
| #747 | 新建会话不要展示在会话列表 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/747) |

**Bug 趋势总结**：v0.4.0 版本稳定性堪忧，主要问题集中在：
1. **会话状态管理**：WebSocket 重连、循环思考、卡住不动
2. **上下文处理**：压缩功能 UI 不同步、窗口计算错误
3. **权限系统**：授权状态判断逻辑混乱

---

## 6. 功能请求与路线图信号

以下功能请求值得关注，可能影响下一版本规划：

| Issue | 请求内容 | 类型 | 链接 |
|-------|---------|------|------|
| #749 | 新建会话时初始化工作台默认不使用项目路径 | Enhancement | [查看](https://github.com/NanmiCoder/cc-haha/issues/749) |
| #748 | 支持本地语音模型实现 Voice Mode | Feature | [查看](https://github.com/NanmiCoder/cc-haha/issues/748) |

**功能分析**：
- **#749**（来自 @zhbdesign）：降低新建会话门槛，减少用户配置负担，符合易用性优化方向。
- **#748**（来自 @Davwei）：Voice Mode 目前依赖 Anthropic OAuth 认证，用户希望支持本地模型以降低使用成本。这是一个较大的功能扩展，涉及语音模型集成。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键用户痛点：

### 痛点 1：会话管理不稳定
- **场景**：用户进行对话时，会话经常卡住不动，或在结束后 AI 继续"思考"陷入循环（#742）
- **影响**：严重影响使用体验，用户无法正常结束对话
- **根因推测**：会话状态机未正确处理完成信号，或存在后台任务未正确终止

### 痛点 2：上下文压缩功能不工作
- **场景**：用户手动触发 `/compact` 压缩上下文后，UI 仍显示 100%，且出现 30 秒超时错误（#743）
- **影响**：用户无法确认压缩是否成功，对 Token 消耗不可预期
- **根因推测**：压缩请求可能失败但 UI 未正确反馈，或状态同步存在竞态条件

### 痛点 3：权限系统逻辑混乱
- **场景**：用户设置了"跳过"权限，但系统仍反复请求授权（#741）；Computer Use 已授权但报错（#740）
- **影响**：用户对权限控制失去信任，可能导致用户放弃使用该功能
- **根因推测**：权限状态判断与 UI 反馈不一致

### 痛点 4：跨平台兼容性问题
- **场景**：Win11 系统 UI 完全无法打开（#731）
- **影响**：Windows 用户完全无法使用
- **根因推测**：可能是 Electron/Tauri 渲染进程或系统 API 调用问题

### 痛点 5：配置复杂度
- **场景**：用户询问如何配置 RTK 减少 Token 消耗（#746）、MCP 配置不工作（#745）
- **影响**：新用户入门门槛较高
- **建议**：完善文档或提供配置向导

---

## 8. 待处理积压

以下 Issues 已有一段时间但仍未得到响应或修复，建议维护者关注：

| Issue | 标题 | 创建时间 | 状态 | 链接 |
|-------|------|----------|------|------|
| #669 | 会话生命周期 Bug：停止对话后无限重连 WebSocket | 2026-05-30 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/669) |
| #687 | 流式响应中途关闭 TCP，仍显示执行中 | 2026-06-01 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/687) |

> **注**：上述 Issue 已标记为 CLOSED，但鉴于今日仍有类似问题（#742 会话循环、#734 会话卡住）被报告，建议确认修复是否完整，或是否存在回归问题。

---

## 📊 数据摘要

| 指标 | 数值 |
|------|------|
| Issues 新增/活跃 | 13 |
| Issues 关闭 | 4 |
| PR 合并 | 0 |
| 版本发布 | 0 |
| 最高评论数 | 7 (#731) |
| Bug 报告总数 | 12 |
| 功能请求数 | 2 |

---

**报告生成时间**：2026-06-06  
**数据来源**：GitHub Issues (过去 24 小时)

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-06  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年6月6日，Codex++ 项目保持高度活跃。今日共产生 **46 条 Issue 更新**（新开/活跃 43 条，关闭 3 条）和 **5 条 PR 更新**（待合并 4 条，已合并 1 条）。项目于今日发布了 **v1.2.3** 版本，优化了插件解锁方式自动选择逻辑。社区讨论热度较高，主要集中在 **启动性能问题**、**插件系统稳定性** 以及 **DeepSeek API 集成** 三个方面。值得注意的是，针对启动速度优化的 PR #620 已进入待合并状态，预计可提升 30-50% 启动速度，有望缓解用户核心痛点。

---

## 2. 版本发布

### v1.2.3 发布 ✅

| 项目 | 内容 |
|------|------|
| **版本号** | v1.2.3 |
| **发布时间** | 2026-06-06 |
| **更新内容** | 根据 Codex 版本自动选择插件解锁方式 |
| **破坏性变更** | 无 |
| **迁移注意事项** | 无 |

**说明：** 此版本为插件系统的兼容性优化，解决了不同 Codex 版本下插件解锁方式不一致的问题。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#687](https://github.com/BigPizzaV3/CodexPlusPlus/pull/687) | fix: 恢复 settings 页面 Context-Aware Suggestions 开关可见性 | ✅ 已合并 | 修复了通过 Codex++ 启动时设置页面开关被隐藏的问题，避免后台持续消耗 token |
| [#620](https://github.com/BigPizzaV3/CodexPlusPlus/pull/620) | perf: reduce startup time by 30-50% via faster CDP polling and model list shortcut | 🔄 待合并 | **重要性能优化**：通过优化 CDP 注入轮询和模型列表请求，预计减少 30-50% 启动时间 |
| [#428](https://github.com/BigPizzaV3/CodexPlusPlus/pull/428) | 新增聚合供应商按策略轮转功能 | 🔄 待合并 | 支持多供应商聚合、策略配置、故障转移路由 |
| [#629](https://github.com/BigPizzaV3/CodexPlusPlus/pull/629) | fix(relay): preserve live Codex UI settings | 🔄 待合并 | 修复切换 relay 时丢失 Codex UI 设置的问题 |
| [#697](https://github.com/BigPizzaV3/CodexPlusPlus/pull/697) | feat: add Zed remote project registry | 🔄 待合并 | 新增 Zed 远程项目注册功能，支持多种打开策略 |

**项目推进评估：** 今日项目进展显著，尤其是启动性能优化 PR #620 若合并将大幅提升用户体验。聚合供应商轮转功能 (#428) 的推进也将满足用户多 API 轮询的强烈需求。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热点分析 |
|---------|------|--------|------|----------|
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | [Bug]: MAC M1 今天更新到 Codex++ 1.1.8 后正常显示 DeepSeek 模型但对话 502 Bad Gateway | 16 | 🔴 OPEN | **最高热度**，涉及 MAC M1 平台兼容性问题，用户反馈强烈 |
| [#287](https://github.com/BigPizzaV3/CodexPlusPlus/issues/287) | 希望添加一个快捷修改模型上下文为 1M 的按钮 | 6 | 🔴 OPEN | 用户对长上下文功能有强烈需求 |
| [#540](https://github.com/BigPizzaV3/CodexPlusPlus/issues/540) | DeepSeek API 接入无法开启 1M 上下文 | 5 | 🔴 OPEN | 与 #287 相关，1M 上下文配置问题持续受关注 |
| [#660](https://github.com/BigPizzaV3/CodexPlusPlus/issues/660) | chrome 控制插件无法使用 | 5 | 🔴 OPEN | 插件安装后无法使用，用户体验问题 |
| [#640](https://github.com/BigPizzaV3/CodexPlusPlus/issues/640) | 刚更新了最新版本，现在不能用 DeepSeek 了 | 5 | 🔴 OPEN | 更新后兼容性问题，需关注 |

### 热点诉求分析

1. **平台兼容性**：MAC M1 用户遇到 502 错误，表明 ARM 架构支持可能存在问题
2. **长上下文支持**：多个 Issue 反映 1M 上下文无法开启，用户期望更便捷的配置方式
3. **插件系统**：插件安装失败、消失、不稳定等问题频繁出现，插件系统稳定性待提升

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue # | 标题 | 状态 | 是否有 Fix PR |
|----------|---------|------|------|---------------|
| 🔴 高 | [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | MAC M1 502 Bad Gateway 错误 | OPEN | ❌ |
| 🔴 高 | [#640](https://github.com/BigPizzaV3/CodexPlusPlus/issues/640) | 更新后不能用 DeepSeek | OPEN | ❌ |
| 🔴 高 | [#715](https://github.com/BigPizzaV3/CodexPlusPlus/issues/715) | V1.2.2 及 V1.2.3 报错 400 及 404 | OPEN | ❌ |
| 🔴 高 | [#712](https://github.com/BigPizzaV3/CodexPlusPlus/issues/712) | MacOS 根本没法用，启动不了 | OPEN | ❌ |
| 🟡 中 | [#658](https://github.com/BigPizzaV3/CodexPlusPlus/issues/658) | 插件系统不稳定，插件会消失 | OPEN | ❌ |
| 🟡 中 | [#648](https://github.com/BigPizzaV3/CodexPlusPlus/issues/648) | 插件不完整 | OPEN | ❌ |
| 🟡 中 | [#683](https://github.com/BigPizzaV3/CodexPlusPlus/issues/683) | 401 unauthorized 认证错误 | OPEN | ❌ |
| 🟡 中 | [#676](https://github.com/BigPizzaV3/CodexPlusPlus/issues/676) | 硅基流动 API 无法调用工具 | OPEN | ❌ |
| 🟢 低 | [#700](https://github.com/BigPizzaV3/CodexPlusPlus/issues/700) | 每次重新打开控制电脑就没有这个插件 | OPEN | ❌ |
| 🟢 低 | [#716](https://github.com/BigPizzaV3/CodexPlusPlus/issues/716) | 重启 Codex++ 没有反应 | OPEN | ❌ |

### 稳定性问题汇总

- **启动问题**：多个 Issue 反映启动失败、闪退、重启无响应
- **插件系统**：插件消失、安装失败、不完整等问题频发
- **API 集成**：多平台（DeepSeek、硅基流动、百炼）出现认证或调用问题
- **平台覆盖**：MAC (M1/Intel) 和 Windows 均有稳定性问题

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 功能请求 | 评论数 | 相关 PR | 纳入可能性 |
|---------|----------|--------|---------|------------|
| [#287](https://github.com/BigPizzaV3/CodexPlusPlus/issues/287) | 添加快捷修改模型上下文为 1M 的按钮 | 6 | - | ⭐⭐⭐ 中等 |
| [#632](https://github.com/BigPizzaV3/CodexPlusPlus/issues/632) | 增加多个供应商轮询和一个供应商多个 API 轮询功能 | 1 | [#428](https://github.com/BigPizzaV3/CodexPlusPlus/pull/428) | ⭐⭐⭐⭐⭐ **高**（PR 已待合并）|
| [#678](https://github.com/BigPizzaV3/CodexPlusPlus/issues/678) | 支持语音输入 | 2 | - | ⭐⭐ 较低 |
| [#710](https://github.com/BigPizzaV3/CodexPlusPlus/issues/710) | 请求更新 Codex 官方 Product Design 插件 | 0 | - | ⭐⭐⭐ 中等 |
| [#717](https://github.com/BigPizzaV3/CodexPlusPlus/issues/717) | 编辑 config.toml 功能 | 0 | - | ⭐⭐ 较低 |

### 路线图信号分析

1. **多供应商轮询**（#632）：用户因 API 限速问题迫切需要此功能，PR #428 已实现相关功能，预计下一版本可能合并
2. **长上下文配置**：1M 上下文是用户高频需求，建议优先考虑
3. **语音输入**：有用户询问但反馈较少，可作为后续功能储备

---

## 7. 用户反馈摘要

### 真实用户痛点

| 痛点类型 | 典型 Issue | 用户描述 |
|----------|------------|----------|
| **启动慢** | [#425](https://github.com/BigPizzaV3/CodexPlusPlus/issues/425) | "Codex++ 启动耗时约 1 分钟，原始 Codex 仅需 15 秒" |
| **插件不稳定** | [#658](https://github.com/BigPizzaV3/CodexPlusPlus/issues/658) | "插件总共有 1,2,3，有时候 1 会消失，有时候 3 会消失" |
| **API 集成困难** | [#540](https://github.com/BigPizzaV3/CodexPlusPlus/issues/540) | "DeepSeek API 接入无法开启 1M 上下文" |
| **平台兼容** | [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | "MAC Intel 电脑 codex++ 启动 Codex 闪退" |
| **插件安装** | [#660](https://github.com/BigPizzaV3/CodexPlusPlus/issues/660) | "每次登录之后 chrome 插件都需要重新下载安装，安装之后也无法使用" |

### 用户使用场景

- **开发者场景**：使用 Codex++ 管理多供应商 API，希望实现自动轮询和故障转移
- **长对话场景**：需要 1M 上下文支持进行大型项目开发
- **跨平台场景**：Windows 和 Mac 用户均有使用，部分平台存在兼容性问题

### 用户满意度

- **不满意点**：启动速度慢、插件系统不稳定、API 集成配置复杂
- **满意点**：聚合供应商功能、多供应商轮询需求强烈

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue # | 标题 | 创建时间 | 更新 | 评论数 | 优先级 |
|---------|------|----------|------|--------|--------|
| [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | codex++ 启动 codex 闪退 (MAC Intel) | 2026-05-31 | 2026-06-05 | 1 | 🔴 高 |
| [#589](https://github.com/BigPizzaV3/CodexPlusPlus/issues/589) | 为什么 Windows 电脑经常启动不了 code++ | 2026-06-03 | 2026-06-05 | 3 | 🔴 高 |
| [#507](https://github.com/BigPizzaV3/CodexPlusPlus/issues/507) | 无法设置想要的上下文长度 | 2026-06-01 | 2026-06-05 | 2 | 🟡 中 |

### 积压分析

- **启动问题**：涉及 MAC 和 Windows 双平台，建议优先排查
- **上下文配置**：用户持续反馈，建议尽快提供解决方案
- **整体积压**：Issue 总量较大（46 条/24h），建议按严重程度分类处理

---

## 总结

| 维度 | 状态 | 评估 |
|------|------|------|
| **活跃度** | 🟢 高 | 46 条 Issue + 5 条 PR，活跃度高 |
| **版本发布** | 🟢 正常 | v1.2.3 已发布 |
| **Bug 数量** | 🔴 较高 | 多个高严重性 Bug 待修复 |
| **PR 进展** | 🟢 良好 | 4 条 PR 待合并，含重要性能优化 |
| **社区参与** | 🟢 良好 | 评论活跃，最高 16 条评论 |
| **稳定性** | 🟡 中等 | 启动和插件系统问题较多 |

**建议关注：**
1. 优先处理 MAC 平台兼容性问题（#406, #712, #455）
2. 推进 PR #620 合并，解决启动速度痛点
3. 评估插件系统重构计划，提升稳定性
4. 关注 1M 上下文配置需求，考虑添加快捷配置入口

---

*报告生成时间：2026-06-06*  
*数据来源：GitHub Codex++ Repository*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*