# OpenClaw 生态日报 2026-06-21

> Issues: 108 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-21 04:15 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-21  
**数据区间：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **108 条 Issues 更新**（含 102 条新开/活跃）和 **500 条 PR 更新**（含 46 条已合并/关闭）。项目发布了 **v2026.6.9** 版本，重点改进了 Telegram 富文本消息渲染。社区讨论围绕 SQLite 会话迁移（#88838，31 条评论）、内存泄漏（#91588）、thinking 签名验证问题（#92201、#94228、#95429）等核心稳定性问题展开。PR 层面，Codex 超时修复（#94833）已进入 automerge 状态，多个 channel 适配器（WhatsApp、Feishu、Telegram）修复正在 review 中。整体项目处于快速迭代期，功能推进与稳定性修复并行。

---

## 2. 版本发布

### v2026.6.9 发布 ✅

**发布时间：** 2026-06-21  
**变更类型：** 常规迭代  
**PR：** [#95482](https://github.com/openclaw/openclaw/pull/95482)

**主要更新：**

| 领域 | 改进内容 |
|------|----------|
| **Telegram 富文本** | 支持 HTML 富文本发送、保留 Markdown 和贴纸路径、更忠实渲染进度草图和命令输出、安全规范化 HTML 表格、正确处理 mentions 和 spooled handlers |

> Telegram 消息渲染质量显著提升，解决了长期存在的格式丢失问题。

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 意义 |
|------|------|------|------|
| [#95482](https://github.com/openclaw/openclaw/pull/95482) | chore(release): update appcast for 2026.6.9 | ✅ 已合并 | 发布 v2026.6.9 |
| [#91239](https://github.com/openclaw/openclaw/pull/91239) | fix(opencode-go): complete catalog, onboarding, and tiered pricing | ✅ 已关闭 | 修复 OpenCode Go 定价目录 |
| [#94294](https://github.com/openclaw/openclaw/pull/94294) | fix: dedupe duplicate non-streaming final replies | ✅ 已关闭 | 解决重复回复投递问题 |
| [#94427](https://github.com/openclaw/openclaw/pull/94427) | fix(feishu): render streaming card footer | ✅ 已关闭 | Feishu 流式卡片页脚渲染修复 |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Autofix: add PR review autofix pipeline + Windows daemon | ✅ 已关闭 | 新增 PR 自动修复流水线 |

### 处于 Review 阶段的重要 PRs

| PR # | 标题 | 状态 | 风险评估 |
|------|------|------|----------|
| [#94833](https://github.com/openclaw/openclaw/pull/94833) | fix(codex): release timed-out app-server lanes | 🚀 **automerge armed** | session-state, message-delivery |
| [#88992](https://github.com/openclaw/openclaw/pull/88992) | fix: recover stranded replies in message_tool_only mode | 👀 ready for maintainer look | compatibility, message-delivery, security-boundary |
| [#95483](https://github.com/openclaw/openclaw/pull/95483) | fix(whatsapp): preserve native quote replies | 👀 ready for maintainer look | - |
| [#95413](https://github.com/openclaw/openclaw/pull/95413) | fix(telegram): preserve persistent rich message line breaks | 👀 ready for maintainer look | message-delivery |
| [#85249](https://github.com/openclaw/openclaw/pull/85249) | fix(cron): guard against undefined sourceDelivery in isolated executor | 👀 ready for maintainer look | compatibility, message-delivery |
| [#93224](https://github.com/openclaw/openclaw/pull/93224) | [codex] Allow message tool in default sandbox allowlist | ⏳ waiting on author | compatibility, message-delivery, security-boundary |

**推进亮点：**
- **Codex 稳定性**：#94833 修复 app-server 超时车道释放问题，已进入 automerge 状态，预计近期合入
- **消息可靠性**：#88992 修复 `message_tool_only` 模式下 stranded replies 问题，解决 LLM 忘记调用 message tool 时的静默丢弃
- **Channel 适配**：WhatsApp（#95483）、Telegram（#95413）、Feishu（#94427）均有修复推进

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 核心诉求 |
|---------|------|--------|----------|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Track core session/transcript SQLite migration via accessor seam | **31** | 核心架构演进：分阶段小 PR 完成 SQLite 迁移，避免大爆炸式重写 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | [Regression] 2026.5.27: Codex app-server turn-completion stall | **16** | 回归问题：5.27 版本引入的 turn 完成停滞 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB | **13** | 严重内存泄漏：Gateway 进程 2-3 天内内存膨胀至 15.5GB |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner: thinking signatures intermittently invalid on replay | **11** | Anthropic thinking 块签名验证失败，recovery wrapper 未触发 |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) | [Regression] Nextcloud Talk agent sessions plugin approval stalls | **8** | 回归问题：插件审批停滞导致工具执行超时 |

### 热点分析

**架构演进讨论（#88838）**  
社区正在推进核心 session/transcript 运行时状态迁移至 SQLite 的工作，采用"分支抽象缝"（branch-by-abstraction seam）策略，将大迁移拆解为可审查的小 PR 序列。这是避免技术债务累积的重要举措。

**内存稳定性危机（#91588）**  
Gateway 内存从 350MB 增长至 15.5GB 的泄漏问题引发持续关注，已标记为 P0/Critical，影响生产环境稳定性。

**Anthropic 集成问题（#92201、#94228、#95429）**  
多条 issue 聚焦 thinking 块签名验证问题，形成问题链：
- #92201：签名间歇性无效，recovery wrapper 未触发
- #94228：长工具链会话最终 brick（400 错误）
- #95429：async streamFn 绕过 recovery 逻辑

---

## 5. Bug 与稳定性

### P0/P1 严重 Bug（需优先处理）

| Issue # | 标题 | 严重度 | 状态 | 是否有 Fix PR |
|---------|------|--------|------|---------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak (350MB→15.5GB, OOM) | **P0** | OPEN | ❌ |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall regression | **P1** | OPEN | ❌ |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Thinking signatures invalid on replay (Anthropic) | **P1** | OPEN | ❌ |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic path: thinking blocks brick long sessions | **P1** | OPEN | ❌ |
| [#95429](https://github.com/openclaw/openclaw/issues/95429) | wrapAnthropicStreamWithRecovery bypassed (async) | **P1** | OPEN | ❌ |
| [#93858](https://github.com/openclaw/openclaw/issues/93858) | fix(auto-reply): defer foreground fence to delivery | **P1** | OPEN | ❌ |
| [#93831](https://github.com/openclaw/openclaw/issues/93831) | Foreground reply fence still cancels older in-flight reply | **P1** | OPEN | ❌ |
| [#85822](https://github.com/openclaw/openclaw/issues/85822) | Silent ~48s post-embedded run done gap (Discord) | **P1** | OPEN | ❌ |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama remote provider streaming not consumed | **P1** | OPEN | ❌ |
| [#91839](https://github.com/openclaw/openclaw/issues/91839) | Terminal provider model_not_available triggers history storm | **P1** | OPEN | ❌ |

### P2 中等 Bug

| Issue # | 标题 | 状态 | 是否有 Fix PR |
|---------|------|------|---------------|
| [#93807](https://github.com/openclaw/openclaw/issues/93807) | web_fetch ignores NO_PROXY env variable | OPEN | ❌ |
| [#94053](https://github.com/openclaw/openclaw/issues/94053) | Heartbeat runner leaks private replies to Telegram | OPEN | ❌ |
| [#91171](https://github.com/openclaw/openclaw/issues/91171) | Sub-agent model routing ignores model parameter | OPEN | ❌ |
| [#85771](https://github.com/openclaw/openclaw/issues/85771) | WebChat UI renders duplicate assistant messages | OPEN | ❌ |
| [#85439](https://github.com/openclaw/openclaw/issues/85439) | Feishu card delivery loses tool-call progress | OPEN | ❌ |

### 安全相关 Bug

| Issue # | 标题 | 严重度 | 状态 |
|---------|------|--------|------|
| [#93807](https://github.com/openclaw/openclaw/issues/93807) | NO_PROXY ignored by web_fetch useTrustedEnvProxy | P2 | OPEN |
| [#77121](https://github.com/openclaw/openclaw/issues/77121) | exec tool launches heavy upstream validation in live Gateway | P1 | OPEN |
| [#94053](https://github.com/openclaw/openclaw/issues/94053) | Heartbeat leaks private replies to Telegram | P2 | OPEN |

**稳定性警示：**
- 内存泄漏（#91588）已造成生产环境 OOM 崩溃，需紧急处理
- Thinking 签名问题形成系列影响（#92201、#94228、#95429），建议统一排查
- Foreground reply fence 问题（#93858、#93831）影响消息顺序保证

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 标题 | 优先级 | 社区支持 | 潜在纳入 |
|---------|------|--------|----------|----------|
| [#85473](https://github.com/openclaw/openclaw/issues/85473) | Decouple dreaming from memory-core — allow any memory plugin | P2 | 👍 3 | 中期 |
| [#85914](https://github.com/openclaw/openclaw/issues/85914) | Native tool-call failure recovery in run-loop | P2 | 👍 1 | 中期 |
| [#85938](https://github.com/openclaw/openclaw/issues/85938) | Policy plugin: per-agent scoping for tool/exec/sandbox rules | P2 | 👍 1 | 中期 |
| [#78879](https://github.com/openclaw/openclaw/issues/78879) | Doctor & docs should warn when sandbox config is no-op with CLI runtimes | P2 | 👍 1 | 近期 |
| [#95388](https://github.com/openclaw/openclaw/issues/95388) | Self-learning skills (inspired by Hermes Agent/SkillClaw) | P3 | 👍 1 | 远期 |
| [#85332](https://github.com/openclaw/openclaw/issues/85332) | Add slim Docker image mode with configurable APT installation | P3 | 👍 1 | 中期 |

### 功能请求分析

**内存插件解耦（#85473）**  
用户希望 dreaming 功能支持非 memory-core 的内存插件（如 memory-lancedb-pro），当前紧耦合限制了多插件生态发展。

**工具失败恢复（#85914）**  
原生支持工具调用失败后的恢复步骤，而非依赖外部逻辑，提升 agent 健壮性。

**自学习技能（#95388）**  
受 Hermes Agent 和 SkillClaw 启发，用户期望 agent 能自动从对话中学习并编写可复用技能，这是差异化竞争点。

**Policy 插件粒度（#85938）**  
多 agent 工作空间需要按 agent 区分工具/执行/沙箱规则，当前单作用域限制灵活性。

---

## 7. 用户反馈摘要

### 核心痛点

| 场景 | 问题 | 影响范围 |
|------|------|----------|
| **生产稳定性** | 内存泄漏导致 Gateway OOM 崩溃（#91588） | 多用户生产环境 |
| **回归问题** | 5.27 版本后 Codex app-server turn 完成停滞（#88312） | Codex 用户 |
| **消息丢失** | LINE channel 消息静默丢失（#86012）、Telegram group 回复丢失（#85654） | 特定 channel 用户 |
| **配置复杂性** | CLI 运行时下 sandbox 配置静默失效（#78879） | CLI 用户 |
| **认证问题** | sudo update 导致混合文件所有权（#78493） | macOS 用户 |

### 用户满意点

- **Telegram 富文本改进**（v2026.6.9）：HTML 支持、Markdown 保留、表格规范化
- **Channel 适配器丰富**：WhatsApp、Feishu、Discord、Telegram 等多平台支持
- **文档完善**：OpenCode Go 定价目录修复（#91239）

### 典型使用场景

1. **多 agent 部署**：跨 Discord/Slack/Telegram 的统一 agent 编排
2. **本地模型集成**：Ollama、vLLM 等本地推理引擎支持
3. **企业安全**：Policy 插件、sandbox 隔离、exec 工具限制

---

## 8. 待处理积压

### 长期未解决的高优先级 Issues（>7 天无更新）

| Issue # | 标题 | 创建日期 | 状态 | 积压原因 |
|---------|------|----------|------|----------|
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | SQLite migration tracking | 2026-06-01 | OPEN | 需要维护者决策 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex regression stall | 2026-05-30 | OPEN | 需要 live repro |
| [#86047](https://github.com/openclaw/openclaw/issues/86047) | Nextcloud Talk regression | 2026-05-24 | OPEN | 需要 product decision |
| [#85822](https://github.com/openclaw/openclaw/issues/85822) | Discord 48s silent gap | 2026-05-23 | OPEN | 无 trace emit，难以定位 |
| [#85743](https://github.com/openclaw/openclaw/issues/85743) | pendingFinalDelivery heartbeat loops | 2026-05-23 | OPEN | 需要 product decision |
| [#85654](https://github.com/openclaw/openclaw/issues/85654) | Telegram group reply dropped | 2026-05-23 | OPEN | 需要 maintainer review |
| [#77121](https://github.com/openclaw/openclaw/issues/77121) | exec tool heavy validation | 2026-05-04 | OPEN | 需要 security review |

### 建议维护者关注

1. **#91588 内存泄漏**：P0 级别，已造成 OOM，建议优先分配资源
2. **#88838 SQLite 迁移**：架构级变更，需明确里程碑和验收标准
3. **#88312 回归问题**：影响核心用户体验，需定位 5.27 版本变更
4. **#92201/#94228/#95429 thinking 签名系列**：形成问题链，建议统一排查根因

---

## 附录：关键链接

| 资源 | 链接 |
|------|------|
| 项目主页 | https://github.com/openclaw/openclaw |
| 最新 Release | https://github.com/openclaw/openclaw/releases/tag/v2026.6.9 |
| Issues 列表 | https://github.com/openclaw/openclaw/issues |
| PRs 列表 | https://github.com/openclaw/openclaw/pulls |

---

*报告生成时间：2026-06-21

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-21  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"两极分化、中间争夺"**的格局：头部项目（OpenClaw、Hermes Agent）日均处理 100+ Issues 和 500 条 PR，处于高速迭代期，但同时背负 P0/P1 技术债（内存泄漏、Token 开销优化等）；腰部项目（Codex++）以周级发版节奏聚焦垂直场景稳定性；尾部项目（cc-haha）活跃度骤降，维护者响应滞后。值得关注的是，**跨平台消息可靠性**（Telegram/WhatsApp/Feishu）、**Token 成本优化**和**上下文压缩稳定性**正成为全生态共同挑战，单一项目难以独立解决的技术瓶颈正在形成。

---

## 2. 各项目活跃度对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|----------|
| **Issues 活跃（24h）** | 108 | 127 | 6 | 30 |
| **PR 活跃（24h）** | 500 | 500 | 3 | 2 |
| **新版本发布** | ✅ v2026.6.9 | ❌ 无 | ❌ 无 | ✅ v1.2.16 + v1.2.17 |
| **PR 积压** | 未披露 | ⚠️ 321 待合并 | 2 待审 | 0 |
| **P0/P1 Bug** | 10 个 | 4 个 | 0 | 2 个 |
| **维护者响应** | <24h | <24h | ⚠️ 0/6 | <24h |
| **健康度评估** | 🟡 高风险迭代 | 🟡 高负荷运转 | 🔴 维护停滞 | 🟢 稳健 |

**数据洞察：** Hermes Agent 的 321 PR 积压与 OpenClaw 的 10 个未修复 P0/P1 形成鲜明对比——前者是审查吞吐量问题，后者是问题复杂度问题。cc-haha 维护者今日未响应任何新 Issue，积压 8 天 Issue 未处理，呈现退出风险。

---

## 3. OpenClaw 在生态中的定位

### 优势

- **架构完整性**：唯一覆盖 SQLite 迁移（#88838）、thinking 签名验证（#92201/#94228/#95429）、多 channel 适配（WhatsApp/Feishu/Telegram）的项目，架构演进路径清晰
- **社区规模**：108 Issues + 500 PRs 的日活跃度，显著高于 cc-haha（6 Issues）和 Codex++（30 Issues），具备生态影响力
- **发布节奏**：保持周级迭代，v2026.6.9 聚焦 Telegram 富文本渲染，解决长期痛点

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心定位** | 通用自主智能体运行时 | 工具调用优化 + Token 效率 | 本地 AI 开发工具 | Codex 前端增强 |
| **存储架构** | SQLite 迁移进行中 | transcript 压缩旋转 | 未披露 | 供应商配置持久化 |
| **平台适配** | 全平台（Discord/Slack/Telegram/Feishu/WhatsApp） | 全平台 + WeCom | CLI 为主 | Windows/macOS 桌面 |
| **安全模型** | Policy 插件 + sandbox 隔离 | 未披露 | 未披露 | API Key 模式 |

### 社区规模对比

- **OpenClaw**：Issue 讨论深度最高（#88838 达 31 条评论），社区参与质量优于数量
- **Hermes Agent**：Issue 数量领先（127），但 PR 积压严重，社区贡献转化率受限
- **cc-haha**：社区参与度骤降，Issue 评论数普遍 <3
- **Codex++**：功能请求（#1130 速率限制）获得 8 条评论，需求驱动明显

---

## 4. 共同关注的技术方向

### 🔴 P0 共性问题：消息可靠性与平台适配

| 项目 | 具体问题 | 涉及 channel |
|------|----------|--------------|
| OpenClaw | Telegram group reply dropped（#85654）、LINE 静默丢失（#86012） | Telegram、LINE |
| Hermes Agent | Telegram fd 泄漏（#31599，已修复）、WeCom 100% CPU（#49941） | Telegram、WeCom |
| cc-haha | 内置浏览器预览状态污染（#819） | Web UI |
| Codex++ | 插件市场显示不完整（#1131） | Plugin Market |

**诉求汇总：** 各项目均面临跨平台消息投递一致性挑战，涉及连接管理（fd 泄漏）、状态隔离（预览缓存）、路由逻辑（群组回复）三个层面。

### 🟡 P1 共性问题：Token 成本与上下文管理

| 项目 | 具体问题 | 数据支撑 |
|------|----------|----------|
| Hermes Agent | 73% API 调用为固定开销（#4379），每次 "who u?" 消耗 16K+ tokens（#13983） | 用户监控 dashboard |
| Hermes Agent | 上下文压缩导致 session 旋转后 Persistent /goal 丢失（#33618） | 4 条评论 |
| OpenClaw | SQLite 迁移讨论（#88838）暗示现有存储方案存在瓶颈 | 31 条评论 |
| cc-haha | Prompt too long 问题（#860） | 1 条评论 |

**诉求汇总：** Token 效率优化（Lazy Tool Schema Loading、Two-Pass Tool Injection）正成为 Hermes Agent 社区最强音，OpenClaw 的 SQLite 迁移可视为同一问题的不同解法——前者优化计算成本，后者优化存储成本。

### 🟢 功能演进共识：插件生态与可观测性

| 项目 | 功能请求 | 热度 |
|------|----------|------|
| OpenClaw | Policy 插件粒度化（#85938）、自学习技能（#95388） | P2/P3 |
| Hermes Agent | 统一插件路由选择器（#41190）、可分享 Profile 模板（#43784） | 5 评论 |
| Codex++ | 速率限制功能（#1130）、用量查询（#1122） | 8 评论 |
| cc-haha | 对话锚点跳转（#875，已提交 PR） | 新功能 |

**诉求汇总：** 插件化架构、多租户配置、可观测性是全生态共识，但实现深度不一——OpenClaw 侧重安全策略粒度，Hermes Agent 侧重路由灵活性，Codex++ 侧重运营管理。

---

## 5. 差异化定位分析

### 功能侧重

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心能力** | 自主智能体运行时 + 多 channel 编排 | 工具调用优化 + Token 效率 | 本地 AI 开发/调试 | Codex 桌面端增强 |
| **差异化功能** | SQLite 迁移、thinking 签名验证、sandbox 隔离 | Lazy Tool Schema、context compression、73% 开销分析 | 对话锚点、md 预览 | 插件市场、供应商管理、ccswitch 导入 |
| **技术深度** | 架构演进（seam 策略） | Token 成本建模 | UI 交互 | 跨平台兼容（Windows Store、macOS） |

### 目标用户

| 项目 | 核心用户画像 |
|------|--------------|
| OpenClaw | 企业级多 agent 部署者、需要跨平台消息编排的团队 |
| Hermes Agent | 追求 Token 效率的深度用户、需要工具调用定制的开发者 |
| cc-haha | 本地 AI 开发者和调试场景用户 |
| Codex++ | Codex 重度用户、需要在多供应商间切换的 API 消费者 |

### 技术架构关键差异

- **OpenClaw**：采用 accessor seam 策略实现 SQLite 迁移，避免大爆炸式重写；thinking 签名验证涉及 Anthropic 原生集成
- **Hermes Agent**：Two-Pass Tool Injection 方案减少 Token 开销；context compression 采用 session 旋转机制
- **cc-haha**：轻量级 CLI 工具，架构复杂度低，聚焦单一场景
- **Codex++**：前端增强层，不涉及核心 AI 逻辑，依赖上游 Codex 稳定性

---

## 6. 社区热度与成熟度

### 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队（生态核心）                                         │
│  OpenClaw: 108 Issues + 500 PRs + 周级发版                    │
│  Hermes Agent: 127 Issues + 500 PRs + 321 PR 积压              │
│  特征：高速迭代 + 技术债并行 + 社区规模大                      │
├─────────────────────────────────────────────────────────────┤
│  第二梯队（垂直场景）                                         │
│  Codex++: 30 Issues + 2 PRs + 双周发版                        │
│  特征：聚焦稳定性 + 快速响应用户反馈 + 平台兼容                │
├─────────────────────────────────────────────────────────────┤
│  第三梯队（维护停滞）                                         │
│  cc-haha: 6 Issues + 3 PRs + 0 维护者响应                    │
│  特征：功能迭代放缓 + 积压未处理 + 退出风险                    │
└─────────────────────────────────────────────────────────────┘
```

### 成熟度评估

| 项目 | 迭代阶段 | 质量信号 | 风险信号 |
|------|----------|----------|----------|
| OpenClaw | 快速迭代期 | Issue 评论深度高（31 条/核心 issue） | P0 内存泄漏未修复（15.5GB OOM） |
| Hermes Agent | 质量巩固期 | PR 合并率高（179/500） | 321 PR 积压，审查瓶颈 |
| cc-haha | 维护停滞期 | PR #875 质量尚可 | 8 天未响应 Issue，维护者失联 |
| Codex++ | 稳健运营期 | 版本连续发布（v1.2.16 + v1.2.17） | macOS 稳定性问题 17 天未处理 |

---

## 7. 值得关注的趋势信号

### 🔮 对 AI 智能体开发者的参考价值

#### 趋势 1：Token 效率正成为下一代竞争焦点

Hermes Agent 社区的 73% 固定开销分析（#4379）和 Lazy Tool Schema Loading 提案（#6839，26 评论）预示：**当模型调用成本趋于稳定后，Token 效率将成为差异化核心**。建议开发者关注：
- 工具 schema 懒加载实现
- Two-Pass Tool Injection 方案
- 上下文压缩策略的边界条件处理

#### 趋势 2：跨平台消息可靠性是全生态瓶颈

OpenClaw（#85654）、Hermes Agent（#31599）、cc-haha（#819）均涉及平台适配问题，表明**当前架构在多 channel 场景下面临共性挑战**。建议：
- 建立统一的连接管理抽象层
- 关注 fd 泄漏、状态隔离、路由逻辑的测试覆盖
- 优先解决 Telegram 适配（社区反馈最集中）

#### 趋势 3：存储架构演进是长期技术债

OpenClaw 的 SQLite 迁移（#88838）和 Hermes Agent 的 context compression 问题（#33618）指向同一问题：**现有存储方案无法支撑大规模生产部署**。建议：
- 评估 SQLite/LMDB 等嵌入式数据库的扩展性
- 关注 session 旋转机制的正确性验证
- 避免"大爆炸"式重写，采用 seam 策略分阶段演进

#### 趋势 4：插件生态是留存关键

Codex++ 的插件市场修复（v1.2.17）和 OpenClaw 的 Policy 插件请求（#85938）表明：**插件生态的稳定性直接影响用户留存**。建议：
- 优先解决插件持久化问题（Codex++ #753）
- 建立插件市场的注册/安装/管理标准化流程
- 关注插件卸载后的状态清理

#### 趋势 5：维护者带宽是稀缺资源

Hermes Agent 的 321 PR 积压和 cc-haha 的维护者失联形成对比，表明**社区健康度取决于维护者响应效率**。建议：
- 引入 automerge 机制（OpenClaw #94833 已实践）
- 建立 PR 分类和优先级排序流程
- 对长期未响应 Issue 建立归档机制

---

## 附录：关键数据汇总

| 项目 | 今日活跃度 | 版本状态 | P0/P1 Bug | PR 积压 | 建议关注 |
|------|------------|----------|-----------|---------|----------|
| OpenClaw | 极高 | v2026.6.9 | 10 个 | 未披露 | 内存泄漏、thinking 签名系列 |
| Hermes Agent | 极高 | 无 | 4 个 | 321 | Token 开销优化、PR 审查瓶颈 |
| cc-haha | 低 | 无 | 0 | 2 | 维护者响应、退出风险 |
| Codex++ | 中 | v1.2.17 | 2 个 | 0 | macOS 稳定性、插件持久化 |

---

**报告生成时间：** 2026-06-21  
**分析师：** AI 智能体技术分析师

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-06-21  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

Hermes Agent 今日保持极高活跃度，共产生 **127 条 Issues 更新**（78 新开/活跃，49 关闭）和 **500 条 PR 更新**（179 已合并/关闭，321 待处理）。项目整体处于快速迭代状态，未发布新版本。社区焦点集中在 **Token 开销优化**（多条 Issue 讨论 73% 固定开销问题）、**上下文压缩稳定性**（session 旋转导致状态丢失）和 **Telegram 平台适配**（连接泄漏、Markdown 渲染问题）。今日合并了多个 P1 修复（Gateway transcript 保留、Telegram fd 泄漏），但积压的 321 个待合并 PR 表明审查压力较大。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的重要 PR：

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#49925](https://github.com/NousResearch/hermes-agent/pull/49925) | Bugfix (P1) | **Gateway transcript 保留修复**：修复自动压缩无法旋转 session 时丢失原始 transcript 的 P1 数据丢失问题 | ✅ CLOSED |
| [#49930](https://github.com/NousResearch/hermes-agent/pull/49930) | Bugfix (P1) | **Telegram keepalive 修复**：应用 TCP keepalive 限制，防止 CLOSE_WAIT fd 泄漏（关闭 #31599） | ✅ CLOSED |
| [#49941](https://github.com/NousResearch/hermes-agent/pull/49941) | Bugfix (P2) | **WeCom 100% CPU 修复**：防止 WebSocket 静默关闭时进入 tight loop | ✅ CLOSED |
| [#49921](https://github.com/NousResearch/hermes-agent/pull/49921) | Bugfix (P2) | **Feishu group rules 配置桥接**：从 config.yaml 正确加载飞书群规则 | ✅ CLOSED |
| [#47425](https://github.com/NousResearch/hermes-agent/pull/47425) | Feature | **MiniMax M2.7 模型支持**：将 M2.7 添加到 OpenRouter 和 Nous provider 模型目录（$0.25/M 输入，$1.00/M 输出，204.8K context） | ✅ CLOSED |
| [#49947](https://github.com/NousResearch/hermes-agent/pull/49947) | Enhancement | **OpenViking 同步预取强化**：增加 1.5s 超时保护和可配置分数阈值 | 🆕 OPEN |
| [#49944](https://github.com/NousResearch/hermes-agent/pull/49944) | Docs | **文档 backlog 抢救**：将 28 个已验证的文档 PR 合并到 main | 🆕 OPEN |
| [#32513](https://github.com/NousResearch/hermes-agent/pull/32513) | Feature | **降低 attach/usage 检查 Token 消耗**：添加轻量级预路由路径 | 🆕 OPEN |

**依赖更新（已合并）：** 4 个 JS 依赖升级（launch-editor、webpack-dev-server、dompurify、undici）

---

## 4. 社区热点

今日讨论最活跃的 Issues：

### 🔥 Token 开销优化成为核心议题

**#6839** - Lazy Tool Schema Loading（26 评论，13 👍）
> 链接：https://github.com/NousResearch/hermes-agent/issues/6839

**核心诉求：** 每次 API 调用注入所有启用的 toolsets 完整 schema，50+ 工具消耗 3,500-5,000 tokens。提议 Two-Pass Tool Injection 方案减少 Token 开销。

**#4379** - Token overhead analysis（15 评论）
> 链接：https://github.com/NousResearch/hermes-agent/issues/4379

**核心诉求：** 监控数据显示 73% 的 API 调用是固定开销（~13.9K tokens），用户开发了专用 dashboard 进行分析。

**#13983** - 16K Tokens consumption by default（5 评论）
> 链接：https://github.com/NousResearch/hermes-agent/issues/13983

**核心诉求：** 默认安装下 "who u?" 消耗 16K+ tokens，用户质疑是否正常。

### 💬 平台与集成问题

**#41190** - Unified plugin route selector（5 评论）
> 链接：https://github.com/NousResearch/hermes-agent/issues/41190

**核心诉求：** 缺乏统一的插件路由钩子来覆盖每个 LLM 调用点的 provider 和 model。

**#49297** - Hermes + gemma4 + ollama 失败（5 评论）
> 链接：https://github.com/NousResearch/hermes-agent/issues/49297

**核心诉求：** v0.17.0 仍无法与 ollama 后端的 gemma4 配合工作。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### P0-P1（需立即关注）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#48061](https://github.com/NousResearch/hermes-agent/issues/48061) | **v0.16.0 Linux pipx 安装发送空 runtime model/provider** | 🆕 OPEN | 无 |
| [#31599](https://github.com/NousResearch/hermes-agent/issues/31599) | **Telegram 适配器泄漏 httpx 连接，~2 天后 fd 耗尽** | 🆕 OPEN | #49930 已合并 |
| [#49824](https://github.com/NousResearch/hermes-agent/issues/49824) | **v0.17.0 gateway 启动失败：ModuleNotFoundError cron.scheduler_provider** | ✅ CLOSED | 无 |
| [#49768](https://github.com/NousResearch/hermes-agent/issues/49768) | **Dashboard 上下文压缩时 CPU 100%，桌面客户端超时** | ✅ CLOSED | 无 |

### P2（高优先级）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#33618](https://github.com/NousResearch/hermes-agent/issues/33618) | **上下文压缩旋转 session_id 后 Persistent /goal 丢失** | 🆕 OPEN | 无 |
| [#49297](https://github.com/NousResearch/hermes-agent/issues/49297) | **gemma4 + ollama 集成失败** | 🆕 OPEN | 无 |
| [#27633](https://github.com/NousResearch/hermes-agent/issues/27633) | **压缩边界丢失 platform kwarg，导致 source=unknown** | 🆕 OPEN | 无 |
| [#17144](https://github.com/NousResearch/hermes-agent/issues/17144) | **Docker 内存工具创建 root-owned 文件** | 🆕 OPEN | 无 |
| [#47048](https://github.com/NousResearch/hermes-agent/issues/47048) | **Telegram 富文本回复重叠渲染** | 🆕 OPEN | 无 |
| [#28902](https://github.com/NousResearch/hermes-agent/issues/28902) | **Anthropic Max skills 工具集触发 "out of extra usage" 400** | 🆕 OPEN | 无 |

### P3（中优先级）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#29651](https://github.com/NousResearch/hermes-agent/issues/29651) | **Windows subprocess.Popen creationflags 双重传递 bug** | ✅ CLOSED |
| [#29643](https://github.com/NousResearch/hermes-agent/issues/29643) | **Telegram vision_analyze 对缓存图片返回 "no image attached"** | ✅ CLOSED |
| [#29617](https://github.com/NousResearch/hermes-agent/issues/29617) | **web.search_backend/extract_backend 默认为空导致静默禁用** | ✅ CLOSED |

---

## 6. 功能请求与路线图信号

社区提出的新功能需求（按讨论热度）：

| Issue | 功能 | 讨论热度 | 纳入可能性 |
|-------|------|----------|------------|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | **Lazy Tool Schema Loading** - Two-Pass Tool Injection | 26 评论，13 👍 | ⭐⭐⭐ 高 |
| [#41190](https://github.com/NousResearch/hermes-agent/issues/41190) | **统一插件路由选择器** - per-turn provider/model override | 5 评论 | ⭐⭐ 中 |
| [#43784](https://github.com/NousResearch/hermes-agent/issues/43784) | **可分享 Profile 模板** | 4 评论 | ⭐⭐ 中 |
| [#37543](https://github.com/NousResearch/hermes-agent/issues/37543) | **i18n/本地化支持** - 中文等多语言 UI | 3 评论 | ⭐ 低 |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | **跨平台会话上下文共享** - CLI ↔ Telegram | 3 评论 | ⭐ 低 |
| [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | **Dashboard --allowed-hosts 标志** - 支持 Tailscale/反向代理 | 4 评论 | ⭐⭐ 中 |
| [#44662](https://github.com/NousResearch/hermes-agent/issues/44662) | **添加 qwen3.7-plus 到 alibaba-coding-plan 模型列表** | 3 评论 | ⭐⭐⭐ 高（PR 已可提交） |

**路线图信号：** Token 开销优化是社区最强烈的诉求，多个 Issue 从不同角度（工具 schema 懒加载、73% 固定开销分析、16K 默认消耗）指向同一问题，预计将成为下一版本的优化重点。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点：

### 😤 主要痛点

1. **Token 消耗过高**
   - "16K tokens per 'who u?' prompt — the bloatiest I've seen"
   - "73% of every API call is fixed overhead (~13.9K tokens)"
   - 用户开发了专用监控 dashboard 来分析消耗

2. **上下文压缩副作用**
   - "Persistent /goal state disappears after context compression rotates session_id"
   - "Assistant messages lost between compaction boundary and compaction event"
   - "Compression creates orphan sessions missing from state.db"

3. **平台集成不稳定**
   - "Telegram rich-message overlaps in single render"
   - "WeCom websocket silent close causes 100% CPU"
   - "Docker memory writes create root-owned files unreadable by gateway user"

### 😊 正面反馈

- CorpusIQ Hermes Community Hub 文档库获得认可（308+ 工具、skills、MCP servers）
- MiniMax M2.7 模型支持获得积极响应

---

## 8. 待处理积压

以下 Issue 长期未解决或未响应，维护者应关注：

| Issue | 创建日期 | 优先级 | 问题 | 未响应天数 |
|-------|----------|--------|------|------------|
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) | 2026-04-01 | P3 | Token overhead analysis - 73% 固定开销 | ~81 天 |
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | 2026-04-09 | P3 | Lazy Tool Schema Loading | ~73 天 |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | 2026-03-31 | P3 | 跨平台会话上下文共享 | ~82 天 |
| [#17144](https://github.com/NousResearch/hermes-agent/issues/17144) | 2026-04-28 | P2 | Docker root-owned 文件问题 | ~54 天 |
| [#49297](https://github.com/NousResearch/hermes-agent/issues/49297) | 2026-06-19 | P2 | gemma4 + ollama 失败（v0.17.0 仍存在） | ~2 天 |

**积压警告：** 当前有 **321 个 PR 待合并**，审查压力较大。建议优先处理 P1/P2 Bug fix PR，避免积压导致贡献者流失。

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 127 条/24h | 📈 高 |
| PR 活跃度 | 500 条/24h | 📈 极高 |
| PR 积压 | 321 待合并 | ⚠️ 需关注 |
| P1 Bug | 4 个（2 已关闭） | ⚠️ 需关注 |
| 新版本 | 0 | ➖ 无 |

---

*报告生成时间：2026-06-21 | 数据截止：2026-06-21 23:59 UTC*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-06-21  
**项目**: NanmiCoder/cc-haha  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，cc-haha 项目保持较高活跃度，共产生 **6 条新 Issue** 和 **3 条 PR 更新**。项目整体呈现"问题发现与修复并行"的态势：维护者已合并 1 个关键修复 PR（#876），同时社区提交了 2 个待审 PR（功能增强 + Bug 修复各 1）。值得注意的是，今日所有新 Issue 均为 Bug 报告（5 个）或问题咨询（1 个），暂无功能请求，表明当前版本可能处于稳定性打磨阶段。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内无 Release 记录。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#876](https://github.com/NanmiCoder/cc-haha/pull/876) | fix(server): close prewarm idle timer race in CLI-startup blind window | ✅ CLOSED | 修复了 CLI 启动盲窗口期间的 prewarm idle timer 竞态条件问题，由维护者 @NanmiCoder 提交并合并 |

**详情**: 该修复解决了 #865 引入的并发保护机制在 CLI 启动窗口期失效的问题——由于 `messageSent` 仅在 CLI 启动完成后才置为 true，导致启动期间的用户请求对保护机制不可见。

### 待合并 PR

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#881](https://github.com/NanmiCoder/cc-haha/pull/881) | 标题生成未正确调用模型接口 | 🔄 OPEN | 修复 Bug（size:M, area:server），待维护者审批 |
| [#875](https://github.com/NanmiCoder/cc-haha/pull/875) | feat: 新增对话界面锚点，支持点击跳转对应提问 | 🔄 OPEN | 功能增强（size:L, area:desktop），由 @adrve 提交，待维护者审批 |

**详情 #875**: 该 PR 为对话界面右侧新增书签面板（MessageNavigation.tsx），支持用户快速跳转到指定提问消息，仅改动桌面端 UI 组件，无服务端逻辑变更，是用户交互体验的显著提升。

---

## 4. 社区热点

### 热门 Issues/PRs（按活跃度排序）

| # | 类型 | 标题 | 活跃度 | 链接 |
|---|------|------|--------|------|
| 1 | Issue | [BUG] 生成的md文件，点击打开，默认使用内置浏览器打开预览了... | 2 条评论 | [#819](https://github.com/NanmiCoder/cc-haha/issues/819) |
| 2 | Issue | [问题] Prompt is too long | 1 条评论 | [#860](https://github.com/NanmiCoder/cc-haha/issues/860) |
| 3 | PR | feat: 新增对话界面锚点，支持点击跳转对应提问 | 新功能 | [#875](https://github.com/NanmiCoder/cc-haha/pull/875) |

**热点分析**:

- **Issue #819** 持续引发讨论：该 Bug 涉及内置浏览器预览功能的缓存/状态问题，用户反映首次打开的 md 文件内容会"污染"后续预览行为，表明可能存在全局状态未正确隔离的问题。
- **Issue #860** 反映 Prompt 长度限制问题：用户遇到 Prompt 超长导致的可用性问题，可能需要考虑 Prompt 压缩或截断策略。
- **PR #875** 获得社区关注：新增的对话锚点功能直击长对话导航痛点，是用户呼声较高的体验改进。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度推测排列）

| 优先级 | # | 标题 | 状态 | 是否有 Fix PR |
|--------|---|------|------|---------------|
| 🔴 高 | #877 | [BUG] 请求工作链路阻断，没预期持续工作 | OPEN | ❌ 无 |
| 🔴 高 | #819 | [BUG] md文件预览缓存问题 | OPEN | ❌ 无 |
| 🟡 中 | #880 | [BUG] 历史会话时间显示异常（全部显示成"刚刚更新"） | OPEN | ❌ 无 |
| 🟡 中 | #878 | [BUG] 内置浏览器全屏预览效果不理想 | OPEN | ❌ 无 |
| 🟡 中 | #881 | 标题生成未正确调用模型接口 | OPEN | ✅ PR #881 |
| 🟢 低 | #879 | [BUG] 内置浏览器元素获取弹窗 UI 自适应问题 | OPEN | ❌ 无 |

**关键问题说明**:

1. **#877 请求链路阻断**: 这是唯一涉及核心工作流的 Bug，可能影响用户正常任务执行，需优先关注。
2. **#819 预览缓存问题**: 涉及内置浏览器状态管理，属于交互层面的回归问题。
3. **#880 时间显示 Bug**: 可能是日期格式化或时区处理逻辑错误，影响用户历史记录查找体验。

---

## 6. 功能请求与路线图信号

### 今日功能相关提交

| # | 类型 | 标题 | 链接 | 纳入版本可能性 |
|---|------|------|------|----------------|
| #875 | Enhancement | feat: 新增对话界面锚点，支持点击跳转对应提问 | [#875](https://github.com/NanmiCoder/cc-haha/pull/875) | ⭐⭐⭐ 高 |

**分析**: PR #875 改动范围小（仅桌面端 UI）、需求明确（解决长对话导航痛点）、无破坏性变更，预计短期内可能被接受合并。

### 潜在路线图信号

从 Issue #860（Prompt too long）可推断，用户对 **Prompt 工程工具** 或 **长文本处理能力** 有需求，建议关注：
- Prompt 长度监控与警告机制
- Prompt 压缩/摘要功能
- 上下文窗口优化策略

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 痛点描述 | 来源 |
|------|----------|------|
| **内置浏览器使用** | 预览功能不稳定，首次打开的文件内容会"污染"后续预览 | #819 |
| **历史会话管理** | 时间显示全部错误，无法区分新旧会话 | #880 |
| **弹窗交互** | 元素获取弹窗在窗口靠下时按钮不可见 | #879 |
| **Prompt 工程** | Prompt 长度超出限制，无法正常工作 | #860 |
| **工作流稳定性** | 请求链路意外阻断，任务无法持续执行 | #877 |

### 用户满意度信号

- **正面**: PR #875 的提交表明用户（@adrve）积极参与功能改进，且改动质量较高。
- **负面**: 今日集中爆发的 Bug 报告（5 个）可能反映近期版本存在回归问题，需关注测试覆盖。

---

## 8. 待处理积压

### 长期未响应 Issue（>3 天无维护者回复）

| # | 标题 | 创建时间 | 状态 | 链接 |
|---|------|----------|------|------|
| #819 | [BUG] 生成的md文件预览问题 | 2026-06-13 | OPEN | [#819](https://github.com/NanmiCoder/cc-haha/issues/819) |

**提醒**: Issue #819 已创建 8 天，有 2 条评论但未获维护者回复，建议优先处理。

### 待审 PR 积压

| # | 标题 | 提交时间 | 等待时长 | 链接 |
|---|------|----------|----------|------|
| #875 | feat: 新增对话界面锚点 | 2026-06-20 | ~1 天 | [#875](https://github.com/NanmiCoder/cc-haha/pull/875) |
| #881 | 标题生成未正确调用模型接口 | 2026-06-20 | ~1 天 | [#881](https://github.com/NanmiCoder/cc-haha/pull/881) |

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issue | 6 | 📈 较前日上升 |
| 新增 PR | 3 | ➡️ 持平 |
| Bug 报告占比 | 83% (5/6) | ⚠️ 需关注质量 |
| PR 合并率 | 33% (1/3) | ➡️ 正常 |
| 维护者响应 Issue | 0/6 | ⚠️ 需提升 |

---

**报告生成时间**: 2026-06-21  
**数据来源**: GitHub API (github.com/NanmiCoder/cc-haha)

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-21  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年6月21日，Codex++ 项目保持高度活跃，共处理 **30 条 Issues**（新开/活跃19条，已关闭11条）和 **2 条 PRs**（均已合并）。项目方连续发布 v1.2.16 和 v1.2.17 两个版本，重点修复了插件市场相关的多个问题，包括插件安装后不可用、市场注册逻辑缺失等长期痛点。社区反馈积极，多个用户报告的插件显示问题在新版本中得到改善。当前项目整体状态健康，维护响应及时。

---

## 2. 版本发布

### 🔗 v1.2.17（2026-06-21）
**发布说明：** 聚焦插件市场核心问题修复

| 修复/改进 | 详情 |
|-----------|------|
| ✅ Bug Fix | 修复 API Key 模式下插件市场补全后安装成功但管理中不可用的问题 |
| ➕ New Feature | 新增本地 openai-curated 插件市场注册逻辑，避免插件配置缺少 marketplace source |
| ➕ New Feature | 新增从 openai/plugins 初始化插件市场的修复能力，新机器可在管理工具中一键修复 |
| ➕ New Feature | 管理工具启动时检测插件市场缺失并提示修复，修复过程显示进度 |
| ⚡ Optimization | 改进新版 Codex 插件市场请求拦截，保留官方 marketplace 名称并补全插件描述、图标与安装状态 |

**迁移注意事项：** 无破坏性变更，建议所有用户升级至最新版本以解决插件市场兼容性问题。

---

### 🔗 v1.2.16（2026-06-20）
**发布说明：** 供应商管理增强与 macOS 稳定性修复

| 修复/改进 | 详情 |
|-----------|------|
| ➕ New Feature | 手机控制入口增加"测试版"标识，明确功能状态 |
| ➕ New Feature | 新增从第三方程序（ccswitch）导入供应商配置入口，名称中标注来源 |
| ✅ Bug Fix | 修复 macOS 安装/修复入口可能依赖临时路径导致 App 不再可用的问题 |
| ⚡ Optimization | 优化 macOS 启动器查找管理工具/主程序的路径逻辑 |

**验证状态：** ✅ 已通过 `npm run vite:build` 和 `cargo build -p codex-plus-manager --release`

---

## 3. 项目进展

### 已合并 PRs

| PR # | 标题 | 合并时间 | 影响范围 |
|------|------|----------|----------|
| [#914](https://github.com/BigPizzaV3/CodexPlusPlus/pull/914) | fix: 修复第一次打开右边栏并选择 Files/Browser/Terminal 会触发错误 | 2026-06-21 | 界面稳定性 |
| [#953](https://github.com/BigPizzaV3/CodexPlusPlus/pull/953) | fix: 支持 Windows 商店 Codex Beta 包检测 | 2026-06-20 | Windows 兼容性 |

**PR #914 详情：**  
修复了在开启「页面增强」和「模型白名单解锁」后，首次点击 Codex 右侧工作区侧栏的 Files/Browser/Terminal 时触发错误页的问题。核心报错为 `TypeError: this.events[e].clear is not a function`，现已修复。

**PR #953 详情：**  
增加了对 Windows Microsoft Store 版 Codex Beta 的支持。之前 Windows 商店应用路径检测逻辑只匹配 `OpenAI.Codex_` 前缀，现已扩展支持 `OpenAI.CodexBeta_` 前缀，确保版本解析和 AUMID 生成正确。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 类型 | 热度分析 |
|---------|------|--------|------|----------|
| [#1118](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1118) | BadRequestError: Expecting ',' delimiter | 8 | Bug | 多个用户报告 API 请求格式错误，可能是上游兼容性问题 |
| [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | codex++启动codex闪退 | 8 | Bug | macOS Intel 用户频繁反馈，影响范围广 |
| [#711](https://github.com/BigPizzaV3/CodexPlusPlus/issues/711) | 插件太少了，只有几个插件 | 8 | Question | 插件显示不完整问题持续受关注 |
| [#1099](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1099) | 点击codex++无反应，软件启动不了 | 6 | Question | 启动无响应问题，多个用户遇到 |
| [#1016](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1016) | 移动失败:Unsupported local storage schema | 6 | Bug | 对话移动功能报错，影响日常使用 |

**热点分析：**  
社区讨论主要集中在三大类问题：
1. **插件系统问题**（#711, #648, #864, #1110）：插件显示不完整、下载后消失、无法管理
2. **启动/稳定性问题**（#455, #1099, #610）：macOS 和 Windows 平台均有闪退报告
3. **供应商切换问题**（#1125, #931）：模型切换后配置丢失、上下文窗口限制

---

## 5. Bug 与稳定性

### 今日新报告 Bug（按严重程度）

| 优先级 | Issue # | 标题 | 系统 | 状态 | Fix PR |
|--------|---------|------|------|------|--------|
| 🔴 高 | [#1126](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1126) | 最新版本启动不了codex beta | Windows | Open | - |
| 🔴 高 | [#1079](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1079) | 1.2.13版本无法使用computer use | Windows | Open | - |
| 🟡 中 | [#1129](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1129) | 无法移动线程 | Windows | Open | - |
| 🟡 中 | [#1131](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1131) | plugin市场无法显示已下载插件 | - | Open | - |
| 🟡 中 | [#1125](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1125) | 无法有效切换模型 | - | Open | - |
| 🟢 低 | [#1098](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1098) | 400报错 | - | Open | - |

### 今日已关闭 Bug

| Issue # | 标题 | 关闭原因 |
|---------|------|----------|
| [#1114](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1114) | 账号登录无法显示历史会话 | 已关闭 |
| [#1127](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1127) | 切换供应商后历史对话消失 | 已关闭 |
| [#1124](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1124) | 更新1.2.15以后插件列表看不到了 | 已关闭 |
| [#1110](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1110) | codex app更新后插件只剩下几个 | 已关闭 |

**稳定性评估：**  
今日 Bug 报告数量较多（30条 Issues 中约 60% 为 Bug 类型），但维护团队响应及时，v1.2.17 版本已修复多个插件相关问题。建议用户升级至最新版本。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 功能描述 | 功能范围 | 可行性评估 |
|---------|----------|----------|------------|
| [#1130](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1130) | **请求速率限制功能**：增加 rpm/tpm 负载均衡，自定义最大请求数目，避免 429 错误 | 构建/发布 | ⭐⭐⭐ 高需求，litellm 已有类似功能 |
| [#1122](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1122) | **供应商用量查询功能**：查看各 API 供应商使用量统计 | 供应商管理 | ⭐⭐ 中等需求 |
| [#940](https://github.com/BigPizzaV3/CodexPlusPlus/issues/940) | 支持 ccswitch 配置 1M 上下文 | 配置管理 | ⭐⭐ 已有 workaround |

**路线图信号分析：**  
1. **速率限制功能**（#1130）是今日最新功能请求，用户明确提到 litellm 已有此功能，期待集成。这是生产环境高频需求，可能进入下一版本规划。
2. **用量查询**（#1122）是运营管理类需求，有助于用户控制成本。
3. **1M 上下文支持**（#940）已有社区 workaround，维护团队可考虑原生支持。

---

## 7. 用户反馈摘要

### 真实用户痛点

| 痛点类型 | 用户描述 | 影响版本 | 频率 |
|----------|----------|----------|------|
| **插件易失** | "每次重启之后之前下载的插件就没了，需要重新下载安装" | v1.2.3 | 多用户反馈 |
| **macOS 不稳定** | "用一定时间，就出现这种情况，然后就无法使用了" | 多个版本 | 持续问题 |
| **插件显示不完整** | "codex++启动插件只显示插件3，应当同时显示插件1插件2插件3" | v1.2.4 | 普遍问题 |
| **供应商切换丢失配置** | "切换供应商之后打开codex历史对话消失" | 多个版本 | 偶发 |

### 用户满意的地方

- **ccswitch 导入功能**（v1.2.16 新增）受到好评，用户可便捷导入第三方供应商配置
- **插件市场一键修复**（v1.2.17 新增）解决了新用户初始化难题
- **Windows 商店 Codex Beta 支持**（PR #953）扩展了平台覆盖

### 典型使用场景

1. **跨供应商切换**：用户需要在 OpenAI、DeepSeek 等多个供应商之间切换，要求配置持久化
2. **插件生态依赖**：用户重度依赖插件功能（GitHub、Line 等），期望稳定可用
3. **长上下文需求**：部分用户配置 1M 上下文用于大文件处理

---

## 8. 待处理积压

### 长期未响应的重要 Issues

| Issue # | 创建时间 | 标题 | 优先级 | 建议 |
|---------|----------|------|--------|------|
| [#610](https://github.com/BigPizzaV3/CodexPlusPlus/issues/610) | 2026-06-04 | mac用一会儿就失效的问题 | 🔴 高 | 17天未响应，需优先处理 |
| [#701](https://github.com/BigPizzaV3/CodexPlusPlus/issues/701) | 2026-06-05 | Chat Completions 协议返回 400 error | 🟡 中 | 16天未响应 |
| [#689](https://github.com/BigPizzaV3/CodexPlusPlus/issues/689) | 2026-06-05 | 中转站API插件功能问题 | 🟡 中 | 16天未响应 |

### 建议维护者关注

1. **macOS 稳定性问题**（#610）：持续 17 天未响应，影响用户体验
2. **插件持久化问题**（#753）：用户多次反馈插件重启后消失
3. **上下文窗口限制**（#931）：1M 配置不生效，影响高级用户

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 今日 Issues 活跃 | 30 条 | 📈 +15% |
| 今日 PRs 合并 | 2 条 | ➖ 持平 |
| 新版本发布 | 2 个 | 📈 +100% |
| Bug 关闭率 | 11/30 (36.7%) | ➖ 持平 |
| 平均响应时间 | <24h | ✅ 良好 |

---

**报告生成时间：** 2026-06-21  
**数据来源：** GitHub Issues & Pull Requests API  
**分析师：** AI 智能体

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*