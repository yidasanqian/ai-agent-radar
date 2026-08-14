# OpenClaw 生态日报 2026-08-14

> Issues: 135 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-08-14 01:54 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**日期：2026-08-14**
**数据周期：过去 24 小时**

---

## 1. 今日速览

OpenClaw 仓库在过去 24 小时继续保持高强度迭代节奏：Issues 侧新增/活跃 135 条（关闭 23 条），PR 侧更新 500 条（待合并 385 条，已合并/关闭 115 条），但**无新版本发布**。从标签分布看，`clawsweeper:no-new-fix-pr` 与 `clawsweeper:needs-product-decision` 标签大量出现，说明大量 Issue 已进入"等待维护者/产品决策"阶段，积压风险上升。整体活跃度评估：**高活跃、高积压**，项目处于密集修复期但缺乏版本节奏收口。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到任何 Release 标签或版本 tag 推送。结合 Issues 中频繁出现的 `2026.7.2-beta.4`、`2026.7.1-2` 等版本号，社区当前主要在 beta 与稳定版之间反复横跳，缺少明确的版本收口信号。

---

## 3. 项目进展

今日合并/关闭的 PR 中，多个高优先级修复已落地，主要集中在 **Control UI 体验**、**Gateway 稳定性** 与 **Anthropic 集成** 三个方向：

| PR | 标题 | 影响面 | 链接 |
|---|---|---|---|
| #123386 | fix(ui): keep composer pickers visible near viewport edges | Control UI 模型/力度选择器在视口边缘不再被裁剪 | [#123386](https://github.com/openclaw/openclaw/pull/123386) |
| #123399 | fix: install externalized configured plugins during upgrades | 升级时自动安装已外置化的渠道插件，避免 descriptor 与运行时脱节 | [#123399](https://github.com/openclaw/openclaw/pull/123399) |
| #123390 | fix(cli): emit Directory errors as JSON | `openclaw directory --json` 失败时输出可解析 JSON，便于自动化 | [#123399](https://github.com/openclaw/openclaw/pull/123390) |
| #123374 | fix(skills): keep shared skill roots safe during collection review | 防止 Skill Workshop 评审时通过 symlink 越权写入共享 skill 根目录 | [#123374](https://github.com/openclaw/openclaw/pull/123374) |

**整体评估：** 项目在 UI 细节、CLI 自动化、供应链安全三条线上稳步推进，但缺少标志性大功能合入，更多是"修修补补"型迭代。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数）

| 排名 | Issue | 评论数 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | #43747 Memory management is in chaos | 11 | 0 | [#43747](https://github.com/openclaw/openclaw/issues/43747) |
| 2 | #44431 Browser tool: 7 improvements from real-world automation field test | 11 | 1 | [#44431](https://github.com/openclaw/openclaw/issues/44431) |
| 3 | #67777 Subagent completion delivery can be lost on direct-announce timeout | 10 | 0 | [#67777](https://github.com/openclaw/openclaw/issues/67777) |
| 4 | #47975 Subagent sessions persist after completion, main session becomes unresponsive | 10 | 1 | [#47975](https://github.com/openclaw/openclaw/issues/47975) |
| 5 | #91363 Isolated cron consistently fails with "LLM request failed" | 10 | 6 | [#91363](https://github.com/openclaw/openclaw/issues/91363) |

### 反应最多的 Issues（按 👍）

- **#91363**（👍6）：Isolated cron 在 `model-call-started` 阶段稳定失败，是当前社区情绪最强烈的痛点。
- **#87295**（👍4）：LTS 版本呼声高，长期支持版本缺失被广泛认同。
- **#9409**（👍3）：上下文溢出错误信息缺乏诊断细节。

### 诉求分析

社区热点高度集中在 **三个反复出现的主题**：
1. **Subagent / 会话生命周期管理**：#67777、#47975、#62968 均指向子代理完成消息丢失或会话残留。
2. **Cron / 自动化可靠性**：#91363、#56078、#58574 反映定时任务在生产环境中的脆弱性。
3. **Memory 子系统失控**：#43747、#114612、#111799 共同指向 SQLite 无限增长、缓存命中率归零等长期积累问题。

---

## 5. Bug 与稳定性

### P0 / P1 高严重度（按优先级排列）

| Issue | 标题 | 严重度 | 是否有 fix PR | 链接 |
|---|---|---|---|---|
| #115436 | WhatsApp Web login: Non-Error rejection (baileys 7.0.0-rc13) | P0 / 回归 | ❌ | [#115436](https://github.com/openclaw/openclaw/issues/115436) |
| #67777 | Subagent completion delivery lost on timeout/drain/orphan prune | P1 | ❌ | [#67777](https://github.com/openclaw/openclaw/issues/67777) |
| #47975 | Subagent sessions persist after completion, main session unresponsive | P1 | ❌ | [#47975](https://github.com/openclaw/openclaw/issues/47975) |
| #91363 | Isolated cron fails with "LLM request failed" | P1 | ❌ | [#91363](https://github.com/openclaw/openclaw/issues/91363) |
| #97983 | iOS/WebChat messages append but don't trigger assistant replies | P1 | ❌ | [#97983](https://github.com/openclaw/openclaw/issues/97983) |
| #111498 | Main agent blocked by persistent workspace-state migration after Anthropic auth recovery | P1 / 回归 | ❌ | [#111498](https://github.com/openclaw/openclaw/issues/111498) |
| #97616 | OpenClaw leaks unreaped hook/tool child processes (zombie accumulation) | P1 / 回归 | ❌ | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| #84393 | Codex runtime silently injects coding-agent base prompt into operational agents | P1 / 安全 | ❌ | [#84393](https://github.com/openclaw/openclaw/issues/84393) |
| #111944 | Codex commentary not delivered to Telegram progress/block streaming | P1 / 回归 | ❌ | [#111944](https://github.com/openclaw/openclaw/issues/111944) |
| #123342 | Responses stream reused active output index 0 on retry | P1 | ✅ 已关闭 | [#123342](https://github.com/openclaw/openclaw/issues/123342) |
| #123242 | Android 2026.7.4 chat remains queued on stable Gateway 2026.7.1-2 | P1 | 🔗 有 linked PR | [#123242](https://github.com/openclaw/openclaw/issues/123242) |
| #120563 | Conversation history not sent on custom/Ollama provider | P1 | ❌ | [#120563](https://github.com/openclaw/openclaw/issues/120563) |
| #114020 | Feishu/Telegram channel dispatch fails: runChannelInboundEvent requires runDispatchLifecycle | P1 | ❌ | [#114020](https://github.com/openclaw/openclaw/issues/114020) |
| #108215 | Context usage drops from 57% to 13% without compaction | P1 | ❌ | [#108215](https://github.com/openclaw/openclaw/issues/108215) |

### 稳定性观察

- **回归类 Bug 占比偏高**：#115436、#111498、#97616、#111944 均为明确标注的回归问题，集中在 beta 通道。
- **Subagent 投递链路是系统性弱点**：#67777、#47975、#62968 三个 Issue 指向同一代码路径（`runSubagentAnnounceDispatch`），但目前**均无对应 fix PR**。
- **Memory 子系统存在长期泄漏风险**：#114612 指出 `memory_index_chunks` 与 `memory_embedding_cache` 无保留策略，生产实例已观察到磁盘填满。

---

## 6. 功能请求与路线图信号

### 高潜力功能请求（已有对应 PR 或讨论热度高）

| Issue | 标题 | 状态 | 链接 |
|---|---|---|---|
| #10213 | Add Anthropic server-side compaction API support | 🔗 PR #123402 已开放（feat(anthropic): opt-in server-side compaction） | [#10213](https://github.com/openclaw/openclaw/issues/10213) / [#123402](https://github.com/openclaw/openclaw/pull/123402) |
| #45758 | Support YAML as config file format | 讨论中 | [#45758](https://github.com/openclaw/openclaw/issues/45758) |
| #45771 | Built-in pace-aware rate limiting for autonomous agents | 讨论中 | [#45771](https://github.com/openclaw/openclaw/issues/45771) |
| #16555 | Add TTL/Expiry for Delivery Queue Messages | 讨论中 | [#16555](https://github.com/openclaw/openclaw/issues/16555) |
| #45390 | Session TTL / max lifetime for automatic rotation | 讨论中 | [#45390](https://github.com/openclaw/openclaw/issues/45390) |
| #45508 | Self-hosted STT/TTS provider support in webchat | 讨论中 | [#45508](https://github.com/openclaw/openclaw/issues/45508) |
| #9016 | Expose OpenRouter usage cost to agent runtime | 讨论中 | [#9016](https://github.com/openclaw/openclaw/issues/9016) |
| #87295 | LTS version | 👍4，呼声高 | [#87295](https://github.com/openclaw/openclaw/issues/87295) |

### 路线图信号

- **Anthropic 服务端 compaction** 是当前最明确的"下一版本候选"功能，PR #123402 已进入 ready for maintainer look 状态。
- **LTS 版本** 社区诉求强烈（👍4），但维护者尚未给出时间表。
- **YAML 配置 / 速率限制 / Session TTL** 三项构成"运维友好性"主题集群，可能打包进入下一个 minor 版本。

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **多用户环境下 Memory 行为不一致**（#43747）：3 人团队使用同一 OpenClaw 实例，记忆存储路径、chunking 策略各不相同，提示缺乏统一规范。
2. **生产环境 Cron 静默失败**（#91363）：`sessionTarget: "isolated"` 的 cron 任务在 `model-call-started` 阶段稳定超时，`usage.input=0` 说明请求从未到达 provider，但用户看到的只是通用错误。
3. **WhatsApp 登录回归**（#115436）：升级到 2026.7.1-2 后 `channels login --channel whatsapp` 持续报 "Non-Error rejection"，影响 macOS 用户。
4. **Ollama/自定义 provider 对话历史丢失**（#120563）：每个 turn 都从固定大小上下文开始，等价于"无记忆"。
5. **Codex 提示词污染**（#84393）：运营型 agent 被路由到 Codex harness 后，意外收到 "You are Codex..." 的编码 agent 基础指令，存在安全/语义风险。
6. **Android 客户端队列卡死**（#123242）：2026.7.4 Android 客户端在稳定 Gateway 上持续显示 "Queued — sends when reconnected"。

### 使用场景

- **浏览器自动化**（#44431）：用户基于 9+ 邮件服务商的真实注册流程提出 7 项改进，反映 OpenClaw 已被用于生产级自动化任务。
- **多 agent 部署**（#76247）：用户需要区分 dispatcher 与 receiver 的 ACK 遥测，说明 OpenClaw 已进入多 agent 编排阶段。
- **移动端**（#46058、#97983）：社区正在探索 chat-first 的 Android 客户端，iOS/WebChat 消息投递可靠性成为焦点。

### 满意度信号

- 👍6 的 #91363 表明用户对 cron 失败容忍度极低，期望更明确的错误归因。
- 👍4 的 #87295 表明稳定版用户对"快速迭代但缺乏 LTS"感到焦虑。
- 多个 P1 Issue 长期停留在 `clawsweeper:needs-product-decision` 状态，反映用户对**响应延迟**的不满。

---

## 8. 待处理积压

以下 Issue/PR 已长期处于等待状态，建议维护者优先关注：

### 长期未推进的 P1 Issue（无 fix PR）

| Issue | 标题 | 等待标签 | 链接 |
|---|---|---|---|
| #67777 | Subagent completion delivery lost | needs-product-decision | [#67777](https://github.com/openclaw/openclaw/issues/67777) |
| #47975 | Subagent sessions persist after completion | （无明确标签但 4 个月未推进） | [#47975](https://github.com/openclaw/openclaw/issues/47975) |
| #91363 | Isolated cron fails with "LLM request failed" | needs-info | [#91363](https://github.com/openclaw/openclaw/issues/91363) |
| #97983 | iOS/WebChat messages don't trigger assistant replies | source-repro | [#97983](https://github.com/openclaw/openclaw/issues/97983) |
| #111498 | Main agent blocked by workspace-state migration | needs-info | [#111498](https://github.com/openclaw/openclaw/issues/111498) |
| #97616 | Zombie child process accumulation | needs-info | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| #84393 | Codex runtime injects coding-agent base prompt | needs-security-review | [#84393](https://github.com/openclaw/openclaw/issues/84393) |
| #120563 | Conversation history not sent on Ollama provider | needs-product-decision | [#120563](https://github.com/openclaw/openclaw/issues/120563) |
| #114020 | Feishu/Telegram dispatch fails | not-repro-on-main | [#114020](https://github.com/openclaw/openclaw/issues/114020) |
| #108215 | Context usage drops without compaction | needs-product-decision | [#108215](https://github.com/openclaw/openclaw/issues/108215) |

### 长期等待的 PR

| PR | 标题 | 状态 | 链接 |
|---|---|---|---|
| #97135 | fix(auto-reply): hide recovered failed tool progress | 📣 needs proof（已开放 18 天） | [#97135](https://github.com/openclaw/openclaw/pull/97135) |
| #118650 | fix(compaction): guard shouldCompact against missing contextWind… | 📣 needs proof（已开放 11 天） | [#118650](https://github.com/openclaw/openclaw/pull/118650) |
| #110129 | fix(telegram): require decimal watermark message ids | 📣 needs proof（已开放 28 天） | [#110129](https://github.com/openclaw/openclaw/pull/110129) |
| #120302 | fix(ui): recover Model Providers usage cards after failed usage.status | 📣 needs proof（已开放 7 天） | [#120302](https://github.com/openclaw/openclaw/pull/120302) |
| #117712 | chore(deps): bump the actions group with 10 updates | ⏳ waiting on author（已开放 12 天） | [#117712](https://github.com/openclaw/openclaw/pull/117712) |

### 维护者关注建议

1. **Subagent 投递链路** 是当前最大的系统性弱点，#67777 + #47975 + #62968 应作为一组统一修复。
2. **Memory 子系统** 需立即给出保留策略（#114612），否则生产用户磁盘将持续被填满。
3. **Cron 失败归因**（#91363）需要明确错误分类，避免 `usage.input=0` 的请求被误报为通用 LLM 失败。
4. **LTS 版本**（#87295）建议维护者给出明确时间表，以稳定企业用户预期。

---

**报告生成时间：** 2026-08-14
**数据来源：** OpenClaw GitHub 仓库公开 Issues/PRs

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告

**报告日期：2026-08-14**
**覆盖项目：OpenClaw、Hermes Agent、cc-haha、Codex++**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态呈现**"高活跃、高积压、强分化"**的总体态势：四个项目 24 小时内合计处理 266 条 Issue 更新与 1017 条 PR 更新，迭代强度普遍处于历史高位，但**版本收口能力普遍不足**——仅 Hermes Agent 发布 v0.20.1 补丁，其余三家均无新版本。技术焦点高度集中在 **Subagent/会话生命周期管理**、**多供应商集成**、**桌面端稳定性** 与 **Memory 子系统治理** 四大方向，反映出生态正从"功能可用"向"生产可靠"过渡。社区情绪方面，用户对**回归 Bug 的容忍度持续走低**，对 LTS 版本、可观测性、错误归因的诉求显著上升。

---

## 2. 各项目活跃度对比

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|---|---|---|---|---|
| **Issues 更新** | 135（关闭 23） | 120（关闭 19） | 2（关闭 0） | 9（关闭 1） |
| **PR 更新** | 500（合并/关闭 115） | 500（合并/关闭 157） | 0 | 17（合并/关闭 4） |
| **新版本发布** | ❌ 无 | ✅ v0.20.1 | ❌ 无 | ❌ 无 |
| **P1 级未修复 Bug** | 13 | 5 | 1 | 2 |
| **长期积压（>30 天）** | 多项 P1 等待决策 | 135 天富电子表格 Skill | 无 | 43 天 MCP 启用失败 |
| **健康度评级** | 🟡 高活跃/高积压 | 🟡 高活跃/回归风险 | 🔴 静默期 | 🟢 中活跃/回归待修 |
| **核心特征** | 密集修复期，缺版本节奏 | v0.20.0 升级阵痛 | 用户向生产场景演进 | 功能深化 + 稳定性修复并行 |

**关键观察**：OpenClaw 与 Hermes Agent 的 PR 处理量级相当（均 500），但 Hermes Agent 的合并率（31.4%）显著高于 OpenClaw（23.0%），反映其代码评审节奏更健康；cc-haha 处于明显的维护静默期，需警惕社区流失风险。

---

## 3. OpenClaw 在生态中的定位

### 优势

- **功能广度领先**：覆盖 Control UI、Gateway、Anthropic 集成、Skill Workshop、Codex runtime 等完整链路，是四家中功能面最广的项目。
- **社区规模最大**：单日 135 条 Issue 活跃度约为 Hermes Agent 的 1.1 倍、Codex++ 的 15 倍、cc-haha 的 67 倍。
- **企业级诉求已显现**：LTS 版本呼声（👍4）、Memory 保留策略、生产环境 Cron 可靠性等议题表明已进入企业评估视野。

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | Codex++ | cc-haha |
|---|---|---|---|---|
| **架构重心** | Gateway + 多渠道插件 | Desktop + TUI 双端 | 模型路由 + 协议扩展 | 本地数据 + Memory Hub |
| **集成策略** | 外置化插件（升级时安装） | 适配器矩阵（Slack/Teams/Signal） | 供应商切换 + Stepwise 协议 | 第三方 Memory Hub 兼容 |
| **安全模型** | Skill 沙箱 + symlink 防护 | Bitwarden 边界 + Slack token 隔离 | 官方/第三方混合登录 | 未见显著安全加固 |

### 社区规模对比

OpenClaw 的 Issue 积压量（10 项长期 P1 无 fix PR）也最大，说明其**用户基数与维护压力同步增长**，已进入"需要专职维护团队"的阶段，而 Hermes Agent 仍可由核心贡献者驱动。

---

## 4. 共同关注的技术方向

| 技术方向 | OpenClaw | Hermes Agent | Codex++ | cc-haha | 共同诉求 |
|---|---|---|---|---|---|
| **Subagent / 会话生命周期** | ✅ #67777/#47975 | ✅ #82001/#69592 | — | — | 完成消息丢失、会话残留、压缩后状态不一致 |
| **多供应商集成** | ✅ Ollama 历史丢失 #120563 | ✅ DeepSeek 400 #83390 | ✅ 切换供应商中断 #1851 | — | 切换时的会话连续性与配置保护 |
| **桌面/移动端稳定性** | ✅ Android 队列卡死 #123242 | ✅ Windows/macOS 误杀 #83683/#85344 | — | — | 升级不应破坏现有部署 |
| **Memory 子系统治理** | ✅ SQLite 无限增长 #114612 | — | — | ✅ 腾讯云 Memory Hub 边界 #1225 | 保留策略、并发安全、第三方兼容性 |
| **可观测性** | ✅ 错误归因 #91363 | ✅ Langfuse 盲区 #77518 | ✅ 自诊断能力有限 #1726 | — | 错误分类、执行链路追踪、内存监控 |
| **LTS / 版本治理** | ✅ LTS 呼声 #87295 | — | — | — | 稳定版用户对快速迭代的焦虑 |

**结论**：Subagent 投递链路、多供应商切换、Memory 治理是**三家以上项目共同面临的系统性挑战**，构成下一阶段生态级技术债务。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈 AI 助手平台（UI + Gateway + 渠道 + Skill） | 企业团队、多 agent 编排者、自动化工程师 | Gateway-centric，插件外置化，强调供应链安全 |
| **Hermes Agent** | Desktop-first 跨平台助手（Windows/macOS/Linux） | 个人开发者、TUI 重度用户、跨平台部署者 | Desktop + TUI 双端，Kanban worker 协议，Webhook 革命 |
| **Codex++** | 模型路由与协议扩展（官方/第三方混合） | 模型爱好者、多供应商用户、移动端用户 | Stepwise 多协议 + 按模型自动路由，强调供应商切换体验 |
| **cc-haha** | 本地数据 + Memory Hub 集成 | 单机深度用户、Memory 功能依赖者 | 本地优先，第三方 Memory Hub 适配，轻量级 |

**关键差异点**：
- OpenClaw 与 Hermes Agent 正面竞争"全平台 AI 助手"赛道，但前者偏 Gateway/服务端、后者偏 Desktop/客户端。
- Codex++ 切入"模型路由"细分市场，与前两者形成互补而非直接竞争。
- cc-haha 聚焦"本地 + Memory"垂直场景，体量最小但用户粘性可能最高。

---

## 6. 社区热度与成熟度分层

### 🔥 快速迭代阶段
- **OpenClaw**：500 PR/日、135 Issue/日，但合并率仅 23%，处于"功能爆发 + 债务累积"期。
- **Hermes Agent**：500 PR/日、合并率 31%，v0.20.0 升级后正经历"回归阵痛 + 快速修复"期。

### ⚖️ 质量巩固阶段
- **Codex++**：17 PR/日、4 合并，节奏稳健，但 1.2.47 引入的界面回归与内存泄漏提示其进入"功能深化需补稳定性"的拐点。

### 😴 维护静默阶段
- **cc-haha**：0 PR、2 Issue 无响应，处于明显的低活跃期，需警惕社区流失。

**成熟度排序**（综合功能完整度 + 稳定性 + 社区响应）：OpenClaw ≈ Hermes Agent > Codex++ > cc-haha

---

## 7. 值得关注的趋势信号

### 趋势一：从"功能可用"到"生产可靠"的范式转移
- **信号**：四个项目均出现 P1 级回归 Bug 集中爆发（OpenClaw 13 项、Hermes Agent 5 项），用户对升级的恐惧情绪上升（"我要回退到 26"）。
- **参考价值**：AI 智能体开发者应将**回归测试、灰度发布、可回滚升级机制**纳入基础架构，而非仅关注新功能。

### 趋势二：Subagent / 多 Agent 编排成为系统性挑战
- **信号**：OpenClaw 的 `runSubagentAnnounceDispatch` 路径、Hermes Agent 的 Kanban worker 协议均出现反复出现的稳定性问题。
- **参考价值**：多 Agent 系统的**消息投递可靠性、会话隔离、生命周期管理**是当前未解的工程难题，建议在架构设计阶段优先考虑 ACK 机制与超时重试。

### 趋势三：可观测性从"加分项"变为"刚需"
- **信号**：Hermes Agent 补齐 Langfuse 追踪（#77518）、OpenClaw 用户要求 Cron 失败归因（#91363）、Codex++ 用户要求内存监控（#1726）。
- **参考价值**：错误分类、执行链路追踪、资源使用监控应作为 AI 智能体的**一等公民功能**，而非事后补丁。

### 趋势四：LTS 与版本治理意识觉醒
- **信号**：OpenClaw LTS 呼声（👍4）、Hermes Agent 聚合性补丁 v0.20.1 的发布策略。
- **参考价值**：快速迭代与生产稳定之间的矛盾日益突出，**双轨发布机制**（stable + LTS）将成为头部项目的标配。

### 趋势五：第三方集成边界成为新的故障面
- **信号**：cc-haha 腾讯云 Memory Hub 边界条件、Codex++ 供应商切换配置损坏、OpenClaw Ollama 历史丢失。
- **参考价值**：在与第三方服务对接时，**入参校验、兼容性测试矩阵、配置保护机制**的重要性已超过功能本身。

### 趋势六：安全边界持续收紧
- **信号**：Hermes Agent 修复 Bitwarden `bws` 子进程边界（#81623）与 Slack token 重放（#81748）；OpenClaw 修复 Skill symlink 越权（#123374）与 Codex 提示词污染（#84393）。
- **参考价值**：AI 智能体的攻击面已从"模型层"扩展到"插件/适配器/会话层"，**纵深防御**成为必需。

---

## 总结建议

| 角色 | 建议 |
|---|---|
| **技术决策者** | 优先评估 OpenClaw（功能广度）与 Hermes Agent（Desktop 体验）；Codex++ 适合多供应商场景；cc-haha 需观察维护活跃度 |
| **AI 智能体开发者** | 重点关注 Subagent 投递、Memory 治理、可观测性三大方向；将回归测试与可回滚升级纳入基础架构 |
| **生态观察者** | 跟踪 LTS 版本实践、第三方集成边界、安全加固三个趋势信号，预判下一轮生态分化 |

---

*报告基于 2026-08-14 各项目 GitHub 公开数据生成，仅供技术决策参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-08-14**

---

## 1. 今日速览

Hermes Agent 今日继续保持高强度迭代节奏，过去 24 小时共产生 **120 条 Issue 更新**（新开/活跃 101 条，已关闭 19 条）和 **500 条 PR 更新**（待合并 343 条，已合并/关闭 157 条），并发布 **v0.20.1 补丁版本**。社区关注焦点集中在 **Desktop 应用回归问题**（Windows/macOS 网关被误杀）、**会话状态一致性**（压缩/恢复/工具调用修复）以及 **插件与适配器扩展**（Slack/Teams/Signal）。整体活跃度极高，但 P1 级回归 Bug 集中爆发，提示 v0.20.0 升级后稳定性需要重点关注。

---

## 2. 版本发布

### v2026.8.13 — Hermes Agent v0.20.1（2026-08-13）

**类型**：补丁版本（Patch Release）

**核心说明**：将自 v0.20.0 以来的约 **656 个合并 PR** 打包为稳定标签版本，供 Docker 镜像、托管部署及通过 `latest` tag 安装的下游用户使用。

**重点关注**：
- 该版本为聚合性补丁，主要用于稳定下游消费链路
- 鉴于今日多个 P1 级回归 Bug 报告（详见第 5 节），建议生产环境用户在升级前关注以下修复是否已纳入：
  - Desktop 重启误杀网关（#83683）
  - macOS launchd 监管网关被 reap（#85344）
  - SQLite POSIX 锁冲突（#80117）
- **迁移注意事项**：v0.20.0 → v0.20.1 应为平滑升级，但 Windows/macOS Desktop 用户建议等待后续修复版本

🔗 [Release 链接](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.13)

---

## 3. 项目进展

今日合并/关闭的 PR 中，多个关键修复已落地：

| PR | 标题 | 影响 |
|---|---|---|
| [#85743](https://github.com/NousResearch/hermes-agent/pull/85743) | fix(gateway): exclude service-managed PIDs from orphan reaping | **P1 修复**：解决 macOS launchd / Windows 计划任务监管的网关被误杀问题，直接对应 #85344 |
| [#85748](https://github.com/NousResearch/hermes-agent/pull/85748) | fix(kanban): protocol violation — nudge budget 2→4 | 修复 78% 的 Kanban worker 崩溃运行（窗口 2026-08-06 → 2026-08-13 共 209 次崩溃） |
| [#85751](https://github.com/NousResearch/hermes-agent/pull/85751) | fix(aux): stop probe stubs poisoning the client cache | 修复辅助客户端缓存被探测桩污染问题 |
| [#85752](https://github.com/NousResearch/hermes-agent/pull/85752) | fix(config): stop valid reasoning effort settings from triggering warnings | 消除合法 `reasoning_effort` 配置的误报警告 |
| [#85757](https://github.com/NousResearch/hermes-agent/pull/85757) | fix(config): recognize agent.reasoning_effort as a known key | 同源修复，关闭 #85741 |
| [#85755](https://github.com/NousResearch/hermes-agent/pull/85755) | fix: voice dictation broken in profiles created via profiles.create | 修复通过 `profiles.create` 创建的 profile 缺失 STT/TTS 配置问题 |
| [#85747](https://github.com/NousResearch/hermes-agent/pull/85747) | fix(slack): hydrate thread-root document attachments | Slack 线程根文档附件可被后续回复的 agent 检查 |
| [#85754](https://github.com/NousResearch/hermes-agent/pull/85754) | feat(teams): allow plugins to handle Adaptive Card Action.Execute | Teams 适配器支持插件处理 Adaptive Card 动作 |
| [#81623](https://github.com/NousResearch/hermes-agent/pull/81623) | fix(security): validate Bitwarden server_url and terminate bws argv | **安全修复**：关闭 Bitwarden `bws` 子进程的安全边界漏洞（#77480） |
| [#81748](https://github.com/NousResearch/hermes-agent/pull/81748) | fix(slack): bind approval and slash-confirm buttons to opaque tokens | **安全修复**：Slack Block Kit 按钮不再嵌入原始 session_key，防止跨会话重放 |
| [#82023](https://github.com/NousResearch/hermes-agent/pull/82023) | test: make test suite pass on macOS (Apple Silicon) | 修复 npm audit 问题并使 macOS Apple Silicon 测试套件通过 |

**整体评估**：项目在 **稳定性修复**、**安全加固** 和 **适配器扩展** 三个方向均有显著推进，特别是 Kanban 协议违规修复（78% 崩溃率下降）和 Slack/Teams 安全加固值得肯定。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 35 | 插件接口扩展追踪（7 月社区想法汇总） |
| 2 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 25 | Skills 索引陈旧/降级（自动化探针失败，索引 29.8h 旧） |
| 3 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 20 | **Windows Desktop 重启误杀网关，WeChat/QQ/Telegram 静默** |
| 4 | [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | 16 | Webhook 革命 — 图门控修复活动（meta-issue） |
| 5 | [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | 16 | Agent flush 在压缩后未采用实时延续，误报"磁盘已满" |
| 6 | [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) | 12 | TUI 中 `/sessions` 和 `/models` 浮层被环境小部件遮挡 |
| 7 | [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | 9 | DeepSeek 标题生成失败（HTTP 400） |
| 8 | [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) | 8 | 富电子表格 Skill（xlsx/csv）功能请求 |

### 诉求分析

- **平台稳定性焦虑**：Windows/macOS Desktop 用户对 v0.20.0 升级后的回归问题反应强烈，#83683 和 #85344 形成"双胞胎"问题
- **会话状态可靠性**：#82001、#69592、#81639 均指向会话生命周期管理的脆弱性
- **可观测性需求**：#66616 的 Skills 索引陈旧问题反映自动化监控已上线但需要人工介入
- **生态扩展愿望**：#64182（插件接口）和 #84834（Webhook 革命）体现社区对扩展性的强烈诉求

---

## 5. Bug 与稳定性

### P1 级（严重，影响核心功能）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Windows Desktop 重启 force-kill 运行中的消息网关，WeChat/QQ/Telegram 静默 | ⚠️ 间接相关（#85743 修复 macOS launchd 场景） |
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | Agent flush 在压缩后未采用实时延续，误报"磁盘已满" | ❌ 待修复 |
| [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) | TUI `/sessions` 和 `/models` 浮层被遮挡（Day 13 未修复） | ❌ 待修复 |
| [#85344](https://github.com/NousResearch/hermes-agent/issues/85344) | macOS `_reap_unsupervised_gateway_orphans` 误杀 launchd 监管网关 | ✅ [#85743](https://github.com/NousResearch/hermes-agent/pull/85743) |
| [#62142](https://github.com/NousResearch/hermes-agent/issues/62142) | TUI verification-stop 丢弃流式最终答案，cron 报告丢失 | ❌ 待修复 |

### P2 级（中等，影响使用体验）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#72064](https://github.com/NousResearch/hermes-agent/issues/72064) | `oneshot` (`-z`) 无法跳过内置内存注入，`--ignore-rules` 被静默忽略 | ❌ 待修复 |
| [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) | 终端更新重建 Desktop 但 `/Applications/Hermes.app` 残留 | ❌ 待修复 |
| [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | Windows 11 25H2 `hermes dashboard --status` 误报无 dashboard | ❌ 待修复 |
| [#70131](https://github.com/NousResearch/hermes-agent/issues/70131) | Emoji 修复 #14572 不完整，✨ U+2728 和 ✅ U+2705 仍触发截断循环 | ❌ 待修复 |
| [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | `browser_exec` 崩溃：`pydantic_core` ModuleNotFoundError | ❌ 待修复 |
| [#80117](https://github.com/NousResearch/hermes-agent/issues/80117) | SQLite POSIX 锁冲突导致 APIConnectionError | ❌ 待修复 |
| [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | Windows ZIP 回退删除已构建的 desktop app 且不再重建 | ❌ 待修复 |
| [#70050](https://github.com/NousResearch/hermes-agent/issues/70050) | Cron drift 阻塞 free→free；`hermes cron edit` 缺少 `--model` | ❌ 待修复 |
| [#85215](https://github.com/NousResearch/hermes-agent/issues/85215) | Cron 任务固定到失效模型，忽略 `fallback_providers`，连续 HTTP 402 失败 | ❌ 待修复 |

### P3 级（轻微）

- [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) DeepSeek 标题生成失败
- [#62728](https://github.com/NousResearch/hermes-agent/issues/62728) 真实测试运行对验证器不可见
- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills 索引陈旧

**稳定性评估**：⚠️ **需警惕**。P1 级问题集中在 v0.20.0 引入的 Desktop 重构和会话生命周期管理，建议维护者优先处理 #83683、#82001、#69592。

---

## 6. 功能请求与路线图信号

### 高潜力功能请求

| Issue | 功能 | 已有相关 PR | 纳入下一版本可能性 |
|---|---|---|---|
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) | 富电子表格 Skill（xlsx/csv） | ❌ | 中（长期需求，8 条评论） |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | Signal 适配器：原生 quote/reply、edit、remote-delete、read-receipt | ❌ | 中（3 👍，需决策） |
| [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) | 生命周期钩子成为跨执行面的共享运行时契约 | ❌ | 高（架构级需求） |
| [#33049](https://github.com/NousResearch/hermes-agent/issues/33049) | 凭证池耗尽 TTL 可配置 | ❌ | 中（1 👍） |
| [#76207](https://github.com/NousResearch/hermes-agent/issues/76207) | 隐藏 Vite 警告并更新 npm | ❌ | 低（1 👍） |

### 已有 PR 推进的功能

- **Git 历史审查**（[#82793](https://github.com/NousResearch/hermes-agent/pull/82793)）：Desktop Review 新增 Git 提交历史视图，支持懒加载 diff
- **Langfuse 追踪辅助 LLM 调用**（[#77518](https://github.com/NousResearch/hermes-agent/pull/77518)）：补齐可观测性盲区
- **TUI Gateway profile 缺失时 fail-closed**（[#69182](https://github.com/NousResearch/hermes-agent/pull/69182)）：安全加固
- **Skill 描述重写为路由触发器**（[#71772](https://github.com/NousResearch/hermes-agent/pull/71772)）：78 个 skill 描述优化，提升路由准确性

### 路线图信号

- **Webhook 革命**（#84834）：5×2×3 修复活动，覆盖整个 webhook 表面（入口、执行、交付、配置、管理 UI、部署、文档），是当前最大的架构级计划
- **插件接口扩展**（#64182）：社区驱动的插件系统增强计划
- **跨执行面生命周期钩子**（#67798）：从 gateway-owned 向 runtime-owned 演进

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **Desktop 升级恐惧**（#83683、#85344、#83846）
   - Windows 用户：每次重启 Desktop 都会让 WeChat/QQ/Telegram 静默
   - macOS 用户：launchd 监管的网关被 reap 误杀
   - Windows 用户：ZIP 回退更新会删除已构建的 app，后续更新报告"已是最新"
   - **核心诉求**：升级不应破坏现有部署

2. **会话状态不可靠**（#82001、#69592、#81639）
   - 压缩后客户端写入失败，误报"磁盘已满"
   - TUI 中 `/sessions` 和 `/models` 浮层被遮挡 13 天未修复
   - 工具调用参数无法修复时被替换为 `{}` 并写入持久化历史
   - **核心诉求**：会话生命周期需要更鲁棒的错误处理

3. **配置体验问题**（#72064、#52339、#75791）
   - `oneshot` 模式无法跳过内存注入
   - macOS `/Applications/Hermes.app` 更新后残留
   - Windows 11 25H2 dashboard 状态误报
   - **核心诉求**：配置和更新流程需要更直观的反馈

4. **可观测性盲区**（#62728、#77518）
   - 真实测试运行对验证器不可见，agent 重复运行临时测试
   - 辅助 LLM 调用（压缩、视觉、web 提取等）对 Langfuse 不可见
   - **核心诉求**：需要更完整的执行链路追踪

### 满意/正面反馈

- Kanban 协议违规修复（#85748）一次性解决 78% 崩溃率，社区对此类系统性修复反应积极
- 安全加固 PR（#81623、#81748）体现项目对安全边界的重视

---

## 8. 待处理积压

### 长期未响应的重要 Issue（按严重程度）

| Issue | 创建日期 | 等待天数 | 主题 |
|---|---|---|---|
| [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) | 2026-07-22 | **23 天** | TUI `/sessions` 和 `/models` 浮层被遮挡 |
| [#4438](https://github.com/NousResearch/hermes-agent/issues/4438) | 2026-04-01 | **135 天** | 富电子表格 Skill |
| [#33049](https://github.com/NousResearch/hermes-agent/issues/33049) | 2026-05-27 | **79 天** | 凭证池耗尽 TTL 可配置 |
| [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | 2026-06-04 | **71 天** | Signal 适配器完整功能 |
| [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) | 2026-06-25 | **50 天** | macOS Desktop 更新残留 |
| [#70050](https://github.com/NousResearch/hermes-agent/issues/70050) | 2026-07-23 | **22 天** | Cron drift 阻塞 repin |
| [#70131](https://github.com/NousResearch/hermes-agent/issues/70131) | 2026-07-23 | **22 天** | Emoji 修复不完整 |
| [#72064](https://github.com/NousResearch/hermes-agent/issues/72064) | 2026-07-26 | **19 天** | `oneshot` 无法跳过内存注入 |
| [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | 2026-08-01 | **13 天** | Windows 11 25H2 dashboard 误报 |

### 长期未合并的重要 PR

| PR | 创建日期 | 等待天数 | 主题 |
|---|---|---|---|
| [#71772](https://github.com/NousResearch/hermes-agent/pull/71772) | 2026-07-26 | **19 天** | Skill 描述重写为路由触发器（78 个 skill） |
| [#69182](https://github.com/NousResearch/hermes-agent/pull/69182) | 2026-07-22 | **23 天** | TUI Gateway profile 缺失 fail-closed |
| [#77518](https://github.com/NousResearch/hermes-agent/pull/77518) | 2026-08-03 | **11 天** | Langfuse 追踪辅助 LLM 调用 |
| [#82793](https://github.com/NousResearch/hermes-agent/pull/82793) | 2026-08-09 | **5 天** | Desktop Git 历史审查 |

### 维护者关注建议

1. **优先处理 P1 回归**：#83683、#82001、#69592 直接影响 v0.20.x 用户核心功能
2. **清理 30 天以上积压**：#4438（135 天）和 #33049（79 天）已严重超期
3. **推进安全 PR 合并**：#81623 和 #817

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**日期：2026-08-14**
**数据周期：过去 24 小时**

---

## 1. 今日速览

cc-haha 项目今日活跃度处于**低位**。过去 24 小时内仅有 2 条新 Issue 被创建，无 PR 提交，无新版本发布。社区互动几乎为零（2 条 Issue 评论数均为 0，无点赞），表明项目可能处于维护期或用户活跃度自然回落阶段。值得关注的是，今日新开的两条 Issue 均涉及**实际生产环境中的功能缺陷**，对核心使用场景有直接影响，建议维护者优先响应。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 项目代码层面今日无推进。

---

## 4. 社区热点

今日社区讨论度整体偏低，无高互动 Issue 或 PR。两条新开 Issue 均为首次创建，尚未形成讨论：

- **#1225** - 腾讯云 Memory Hub 集成兼容性问题（0 评论，0 👍）
  https://github.com/NanmiCoder/cc-haha/issues/1225
- **#1224** - 多会话并发导致本地数据读取延迟/失败（0 评论，0 👍）
  https://github.com/NanmiCoder/cc-haha/issues/1224

**诉求分析**：两条 Issue 均指向**多会话/多消息场景下的稳定性问题**，反映出用户已从单会话测试逐步进入真实生产使用阶段，对并发与集成兼容性的需求开始显现。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度 - #1224 [BUG] 多会话并发读取本地数据延迟或失败
- **作者**：@LibraCastle
- **链接**：https://github.com/NanmiCoder/cc-haha/issues/1224
- **影响**：当多个会话同时开启任务时，本地数据读取功能出现巨大延迟或完全无法读取
- **场景**：直接影响多任务并行工作流，是项目向"生产可用"演进的关键障碍
- **修复状态**：❌ 暂无对应 PR

### 🟡 中严重度 - #1225 [问题] 首条消息数为 2 时腾讯云 Memory Hub 判定失败
- **作者**：@zzj756321
- **链接**：https://github.com/NanmiCoder/cc-haha/issues/1225
- **影响**：当首条发送的消息数为 2 时，腾讯云 Memory Hub 无法正常进行记忆选择与注入；仅在首条消息数为 1 时才生效
- **场景**：影响使用腾讯云 Memory Hub 的用户记忆功能可用性
- **修复状态**：❌ 暂无对应 PR

---

## 6. 功能请求与路线图信号

今日未收到明确的功能请求（feature request）类 Issue。但从两条 Bug 报告可推断出**隐含的路线图信号**：

1. **多会话并发支持**（来自 #1224）—— 用户期望项目支持真正的并发使用场景，这可能推动本地数据存储层引入锁机制或异步队列优化。
2. **第三方 Memory Hub 兼容性扩展**（来自 #1225）—— 腾讯云 Memory Hub 的集成边界条件处理，提示项目需要更严格的入参校验与兼容性测试矩阵。

由于无相关 PR 提交，上述方向尚未进入实现阶段。

---

## 7. 用户反馈摘要

由于两条 Issue 均无评论与点赞，直接用户反馈有限。但从 Issue 内容可提炼以下**真实使用痛点**：

- **痛点 A：并发场景下的可靠性缺失**
  用户 @LibraCastle 在多会话并行使用时遭遇本地数据读取阻塞，说明当前实现在并发模型上存在设计缺陷，无法满足进阶用户的多任务需求。

- **痛点 B：第三方集成的边界条件处理不足**
  用户 @zzj756321 揭示了腾讯云 Memory Hub 在"首条消息数 ≠ 1"时的兼容性问题，反映出项目在与外部服务对接时缺乏充分的边界测试。

- **使用场景**：两条 Issue 均来自**实际生产/集成环境**而非简单试用，说明项目的用户群体正在向深度使用演进。

---

## 8. 待处理积压

⚠️ **维护者关注提醒**：

- **#1224** 与 **#1225** 均为今日新开 Issue，虽创建时间不足 24 小时，但均涉及**核心功能可用性**，建议维护者在 1-2 个工作日内完成初步响应（确认/复现/分配）。
- 由于今日无 PR 活动，仓库整体推进节奏放缓，建议维护者评估是否需要在 README 或社区渠道发布近况说明，以维持贡献者信心。

---

## 项目健康度评估

| 维度 | 状态 | 说明 |
|------|------|------|
| 代码活跃度 | 🟡 低 | 无 PR 提交 |
| 社区活跃度 | 🟡 低 | Issues 无互动 |
| 问题响应速度 | ⚪ 待观察 | 新 Issue 尚未被响应 |
| 版本发布节奏 | ⚪ 持平 | 无新版本 |
| 风险信号 | 🔴 存在 | 两条高/中严重度 Bug 未处理 |

**总体判断**：项目今日处于**静默期**，但新报告的两个 Bug 均为真实生产问题，建议维护者优先处理以避免问题累积。

---

*报告生成时间：2026-08-14 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**日期：2026-08-14**
**数据周期：过去 24 小时**

---

## 1. 今日速览

Codex++ 今日保持中高强度开发节奏，过去 24 小时共产生 **9 条 Issue 更新**（含 1 条关闭）与 **17 条 PR 更新**（含 4 条关闭/合并），无新版本发布。开发侧聚焦于 **Stepwise 多协议扩展、CDP/Bridge 生命周期稳定化、跨平台构建可靠性** 三条主线；社区侧则集中反馈 **1.2.47 升级后的界面回归**（导出/删除按钮消失）与 **供应商切换引发的配置损坏**。整体看，项目处于"功能深化 + 稳定性修复"并行的阶段，活跃度健康，但 1.2.47 引入的若干回归需要维护者优先处理。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版仍为 **v1.2.47**（基于 Issue #1843、PR #1806 等多处提及），但该版本已暴露多项用户可见的界面与功能回归（详见第 5 节）。

---

## 3. 项目进展

今日共 **4 条 PR 关闭/合并**，整体推进了"官方登录体验优化"与"会话生命周期修复"两条线：

| PR | 标题 | 作者 | 意义 |
|---|---|---|---|
| [#1759](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1759) | feat: add optional official usage alert hiding | @Rat0323 | 新增"隐藏官方低额度提醒"可选项，默认关闭，仅作用于官方登录供应商。直接回应 Issue #1734。 |
| [#1740](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1740) | fix: resolve temporary new-thread IDs before deletion | @Rat0323 | 修复新建会话使用临时 `client-new-thread` ID 时删除失败的问题，提升侧栏会话管理可靠性。 |
| [#1789](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1789) | fix: recover official-mix Mobile Remote Control sessions | @Rat0323 | 完善手机端 Mobile Remote Control 会话在官方混合模式下的持久化恢复路径，限定作用域为 `relayMode=official` 且 `officialMixApiKey=true`。 |
| [#1641](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1641) | feat: 按模型自动路由供应商 | @121103qwq | 实现"模型栏一键切换官方/第三方 API"，无需重启或调整配置。 |

**整体评估**：今日合并的 PR 集中在用户体验细节与边界场景修复，未涉及大型架构变更，属于"打磨型"迭代。

---

## 4. 社区热点

按评论数与互动量排序：

| 排名 | 编号 | 标题 | 评论 | 关注点 |
|---|---|---|---|---|
| 1 | [#1734](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1734) | [Feature] 官方登录时可选关闭官方低额度提示 | 4 | 已关闭，对应 PR #1759 已合并 |
| 2 | [#1843](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1843) | [Bug] 更新至 1.2.47 后"导出对话"与删除按钮消失 | 2 | **高优先级回归** |
| 3 | [#1312](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1312) | creative production 和 product design 安装后启用不了 | 2 | 长期未解决 |
| 4 | [#1726](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1726) | [Bug] 内存泄漏 | 1 | 严重性能问题 |

**诉求分析**：用户当前最集中的痛点是 **1.2.47 升级后的功能缺失感**（导出、删除按钮消失），以及 **官方额度提醒无法关闭**。前者属于回归，后者已通过 PR #1759 解决。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重

1. **[#1726](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1726) 内存泄漏**（@pyw799）
   - 现象：最近 1-2 个版本打开 Codex 后内存持续飙升，电脑卡顿
   - 版本：v1.2.44
   - 状态：**无对应 fix PR**，需维护者排查

2. **[#1851](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1851) 切换供应商后会话中断**
   - 现象：官方账号 ↔ DeepSeekV4 切换后继续会话报 `array_above_max_length`，无法继续
   - 版本：ChatGPT 26.812.11052
   - 状态：**无对应 fix PR**

### 🟠 中等

3. **[#1843](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1843) 1.2.47 界面回归**
   - 现象：右键对话栏目"导出对话"消失，删除按钮消失
   - 版本：v1.2.47
   - 状态：**无对应 fix PR**，与 #1838 疑似同源

4. **[#1847](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1847) 切换 API 供应商导致 config.toml 中 node_repl 配置失效**
   - 现象：切换供应商后 `mcp_servers.node_repl` 配置被破坏，启动报错
   - 状态：**无对应 fix PR**

### 🟡 一般

5. **[#1312](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1312) creative production / product design 启用失败**
   - 版本：v1.2.30（macOS）
   - 状态：**长期未解决**（已开放 43 天）

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有相关 PR | 进入下一版本可能性 |
|---|---|---|---|
| 隐藏官方低额度提醒 | [#1734](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1734) | ✅ #1759 已合并 | **已落地** |
| 恢复导出功能 | [#1838](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1838) | ❌ 无 | 高（用户明确要求回退） |
| 手机端支持第三方模型 | [#1850](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1850) | ❌ 无 | 中 |
| DeepSeekV4 Pro 配置模板 | [#1848](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1848) | 部分相关：#1769（DeepSeek Responses 端点） | 高 |
| Stepwise 多协议 + 回答大纲 | — | ✅ #1846、#1853 待合并 | **高** |
| 按模型上下文管理 + 自动压缩 | — | ✅ #1837 待合并 | 中 |
| 聚合供应商恢复 + 批量模型测试 | — | ✅ #1845 待合并 | 中 |
| VLM 双格式与测试入口 | — | ✅ #1550 待合并 | 中 |

**路线图信号**：下一版本（推测 v1.2.48 或 v1.3.0）很可能聚焦于 **Stepwise 体验升级**（#1846、#1853）与 **供应商管理增强**（#1845、#1837），同时需紧急修复 1.2.47 的界面回归。

---

## 7. 用户反馈摘要

- **@HachimiInstratosphere**（#1843）：对 1.2.47 升级后丢失导出/删除功能表示困惑，"不确定是不是 bug"，反映用户对升级变更缺乏明确说明。
- **@nanlis**（#1838）：情绪强烈——"不行，我要回退到 26"，说明导出功能对部分用户属于刚需。
- **@Alen-wang**（#1850）：对项目整体持肯定态度，"希望 Codex++ 越来越好，这样我们就可以不用安装那么多的第三方工具了"，体现用户粘性，但指出手机端体验短板。
- **@pyw799**（#1726）：多次让 Codex 自身排查内存问题未果，反映 **自诊断能力有限**，用户期待更明确的内存监控工具。
- **@wsyfree**（#1851）：供应商切换场景下的会话中断严重影响工作流，提示 **状态切换的会话连续性** 是关键体验指标。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者优先关注：

| 编号 | 类型 | 标题 | 开放天数 | 备注 |
|---|---|---|---|---|
| [#1312](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1312) | Bug | creative production / product design 启用失败 | **43 天** | macOS 平台，影响 MCP/skills 核心功能 |
| [#1550](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1550) | PR | 视觉与推理能力增强 + VLM 双格式 | 28 天 | 大型 PR，需多轮 review |
| [#1551](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1551) | PR | fix: skip Stepwise runtime when disabled | 28 天 | 与 #1846、#1853 存在功能重叠，需协调 |
| [#1726](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1726) | Bug | 内存泄漏 | 14 天 | 严重性能问题，无 fix PR |
| [#1769](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1769) | PR | support official DeepSeek Responses endpoints | 10 天 | 与 #1848 用户诉求直接相关 |

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 17 条 PR 更新，4 条关闭，多名核心贡献者参与 |
| 社区响应度 | ⭐⭐⭐ | 24h 内有互动，但部分 Issue 长期积压 |
| 稳定性 | ⭐⭐⭐ | 1.2.47 引入多项回归，内存泄漏未解决 |
| 路线图清晰度 | ⭐⭐⭐⭐ | Stepwise、供应商管理、VLM 三条主线明确 |
| 用户满意度 | ⭐⭐⭐ | 正面反馈与回归抱怨并存 |

**总体判断**：项目处于功能快速迭代期，但需在下一版本优先解决 **1.2.47 回归** 与 **内存泄漏** 两类高优先级问题，以维持用户信任。

---

*日报基于 GitHub 公开数据生成，数据时间窗口为 2026-08-13 至 2026-08-14。*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*