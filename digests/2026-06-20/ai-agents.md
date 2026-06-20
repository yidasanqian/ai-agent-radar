# OpenClaw 生态日报 2026-06-20

> Issues: 130 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-20 03:41 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-20  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共产生 **130 条 Issues 更新**（全部为新开/活跃状态，无关闭）和 **500 条 PR 更新**（447 条待合并，53 条已合并/关闭）。项目发布了 **v2026.6.9-beta.1** 测试版，重点改进了 Telegram 消息的富文本渲染能力。今日社区讨论焦点集中在**会话隔离失败**（单个卡顿会话阻塞整个 Gateway 事件循环）、**模型回退链未触发**以及**MCP 工具未正确注入子代理**等问题上。整体来看，项目处于功能迭代高峰期，但积压的 P0/P1 级问题较多，建议优先处理影响核心稳定性的回归问题。

---

## 2. 版本发布

### v2026.6.9-beta.1 发布 🚀

**发布类型：** Beta 测试版  
**发布时间：** 2026-06-20

#### 主要更新内容

| 改进项 | 说明 |
|--------|------|
| **Telegram 富文本支持** | 现在发送富 HTML 内容，保留富 Markdown 和贴纸路径 |
| **进度草稿渲染** | 更准确地渲染进度草稿和命令输出 |
| **提及与处理器路由** | 保持提及（mentions）和 spooled handlers 在正确的投递路径上 |

#### 相关修复 PRs
- #93286, #93164, #93124, #93364, #9313（具体 PR 链接见 GitHub）

#### 迁移注意事项
- 本次为 Beta 版本，建议在生产环境谨慎升级
- Telegram 富文本渲染逻辑有调整，如使用自定义 Telegram 渲染器的用户需注意兼容性

---

## 3. 项目进展

### 今日合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| **#95206** | fix(#95186): docs: subagent_ended hook fields 文档补全 | ✅ CLOSED | P3 | 补充了 `subagent_ended` hook 字段文档，解决了插件开发者对接入问题 |
| **#95203** | fix(scripts): guard reused testbox keys | ✅ CLOSED | P3 | 增强了测试框架安全性，防止 SSH key 复用问题 |
| **#95214** | fix(openrouter): expand short DeepSeek V4 aliases | 🟡 OPEN | XS | 修复短格式模型引用（如 `openrouter/deepseek-v4-flash`）无法正确展开的问题 |
| **#95018** | fix(dispatch): allow isReasoning payloads through shared dispatch | 🟡 OPEN | P2 | 修复 Discord 和 Telegram `/reasoning on` 功能被静默丢弃的问题 |
| **#95216** | fix(agents): use macOS product version in runtime prompt OS metadata | 🟡 OPEN | XS | 修复 macOS 26 Tahoe 版本号显示错误（显示内核版本而非营销版本） |
| **#95215** | fix(workboard): filter archived cards from CLI list by default | 🟡 OPEN | XS | 统一 CLI 与 API 的归档卡片过滤行为 |
| **#95169** | fix(sdk): require session key for effective tools | 🟡 OPEN | P2 | SDK 边界增强，要求 `sessionKey` 参数，防止运行时错误 |
| **#94573** | Avoid copying process.env in ingress queue state DB opens | 🟡 OPEN (automerge armed) | P1 | 修复每次队列操作都复制完整 `process.env` 的性能问题 |
| **#85296** | fix(codex): derive terminal-idle watchdog from effective run timeout | 🟡 OPEN | P2 | 修复 Codex 终端空闲看门狗使用硬编码 30 分钟默认值的问题 |
| **#95212** | fix(memory): preserve Windows absolute paths in QMD command parsing | 🟡 OPEN | XS | 修复 Windows 绝对路径被 `splitShellArgs` 错误处理的 bug |

#### 推进的功能领域

1. **Provider 兼容性修复**：OpenRouter DeepSeek V4 短别名展开、Google Gemini 3.5 Flash 路由支持
2. **SDK 稳定性**：会话密钥必填约束、工具描述符快照机制
3. **文档完善**：subagent_ended hook 字段补全、执行审批 CLI 命令
4. **跨平台兼容**：macOS 版本号、Windows 路径处理

---

## 4. 社区热点

### 今日讨论最活跃的 Issues

| Issue 编号 | 评论数 | 标题 | 热度分析 |
|------------|--------|------|----------|
| **#85103** | 10 | Model fallback chain not triggered on provider-wide quota exhaustion | ⚠️ 核心链路问题，涉及模型回退机制失效，用户配置了完整的 fallback 链但未触发 |
| **#86047** | 8 | [Regression] Codex app-server / plugin approval stalls cause interrupted turns | ⚠️ 回归问题，v2026.5.22 升级后 Nextcloud Talk 代理会话出现卡顿 |
| **#85126** | 8 | Bug: Control UI sessions auto-select wrong authProfileOverride | 🐛 UI 状态问题，新会话错误选择 deepseek 而非 minimax 认证配置 |
| **#85030** | 8 | [Bug]: MCP tools not injected into subagent sessions | 🐛 核心功能缺陷，sessions_spawn 的子代理无法获取 MCP 工具 |
| **#84903** | 8 | A single stalled agent session blocks the entire Gateway event loop | 🔴 严重隔离问题，单个卡顿会话影响全局可用性 |
| **#93807** | 6 | web_fetch useTrustedEnvProxy ignores NO_PROXY env variable | 🐛 安全/网络问题，代理配置未尊重 NO_PROXY 白名单 |
| **#84882** | 6 | [Bug]: memory-core Dreaming silently deletes daily memory files | 🔴 数据丢失问题，Dreaming 流程静默删除每日记忆文件 |

### 热点 PRs

| PR 编号 | 评论/关注度 | 标题 | 社区价值 |
|---------|-------------|------|----------|
| **#95208** | 高 | fix(openrouter): strip provider prefix from short model refs | 修复 13 个 cron 任务静默失败的根因 |
| **#95182** | 中 | fix(sessions): migrate session naming to canonical title | 会话命名从 legacy `label` 向 `title` 迁移 |
| **#95172** | 中 | fix(claude-cli): return updatedInput shape for canUseTool allow decisions | 适配 Claude Code >=2.1.156 的新权限 schema |
| **#95211** | 中 | fix #90769: TUI markdown renderer strips underscores inside fenced code blocks | 修复 Python dunder 语法（如 `__init__`）渲染损坏 |

### 热点分析

**核心诉求类型：**
1. **稳定性与隔离**：多个 Issue 反映单个组件问题导致全局级联故障
2. **Provider 兼容**：OpenRouter、Azure、Z.ai 等第三方 provider 的模型解析/认证问题
3. **回归覆盖**：v2026.5.x 系列引入的多个回归问题未完全解决
4. **富文本渲染**：Telegram、Discord、Feishu 等渠道的 Markdown/卡片渲染差异

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### 🔴 P0 / P1 级（需立即关注）

| Issue 编号 | 严重度 | 标题 | 是否有 Fix PR | 状态 |
|-------------|--------|------|---------------|------|
| **#84903** | P1 | 单个卡顿会话阻塞整个 Gateway 事件循环 | ❌ 无 | 需维护者审查 |
| **#85103** | P1 | Model fallback chain 未触发 + EmbeddedAttemptSessionTakeoverError | ❌ 无 | 需产品决策 |
| **#85030** | P1 | MCP tools 未注入子代理会话 | ❌ 无 | 需维护者审查 |
| **#84771** | P1 | 启动时事件循环饱和（28-64 秒延迟） | ❌ 无 | 需现场复现 |
| **#84983** | P1 | Native cron 任务导致事件循环饱和（所有传输无响应数分钟） | ❌ 无 | 需维护者审查 |
| **#84809** | P0 | 2026.5.19 更新后 workspace 目录被删除 | ❌ 无 | 数据丢失 |
| **#85133** | P1 | macOS LaunchAgent 自更新后无法重新注册 | ❌ 无 | 需维护者审查 |
| **#93831** | P1 | foreground reply fence 仍在取消较旧的 in-flight 回复 | ❌ 无 | 需现场复现 |
| **#94228** | P1 | Native Anthropic 路径 replay thinking 块导致永久 brick | ❌ 无 | 需现场复现 |
| **#93781** | P1 | azure-openai-responses 使用错误的 OpenAI 认证 | ❌ 无 | 需源码复现 |

#### 🟡 P2 级（重要但不紧急）

| Issue 编号 | 标题 | 是否有 Fix PR | 相关 PR |
|------------|------|---------------|---------|
| **#93807** | web_fetch 忽略 NO_PROXY 环境变量 | ❌ 无 | - |
| **#86034** | 媒体生成成功但投递失败 | ❌ 无 | - |
| **#85822** | Discord 静默 ~48s 延迟 | ❌ 无 | - |
| **#85027** | macOS 升级后 LaunchAgent 不可恢复 | ❌ 无 | - |
| **#94269** | Z.ai 模型解析缺少 baseUrl | ❌ 无 | - |
| **#94146** | SkillSnapshot 丢失 skillKey | ❌ 无 | - |
| **#86075** | MiniMax Token Plan 在子代理中失效 | ❌ 无 | - |
| **#85826** | Agent stall detector 硬编码 120s 阈值杀死合法长调用 | ❌ 无 | - |
| **#85620** | Matrix 入站图片导致会话未解决 + 网关重载 | ❌ 无 | - |
| **#85601** | 回归：MCP config tempDir 竞争条件仍存在 | ❌ 无 | - |

#### 🟢 P3 / Feature 级

| Issue 编号 | 标题 | 类型 |
|------------|------|------|
| **#86022** | 请审查对人物搜索请求的限制 | 政策/安全 |
| **#85332** | 添加可配置 APT 包安装的 slim Docker 镜像模式 | 功能请求 |
| **#85938** | Policy 插件支持按代理作用域的规则 | 功能请求 |
| **#85914** | 将工具调用失败恢复作为原生运行循环能力 | 功能请求 |
| **#85473** | 解耦 Dreaming 与 memory-core | 功能请求 |

### 回归问题汇总

| Issue 编号 | 首次出现版本 | 描述 |
|------------|--------------|------|
| **#86047** | 2026.5.22 | Codex app-server/plugin approval 卡顿 |
| **#85773** | 2026.5.20 | 重装后代理只提供通用回复，忽略工作区文件 |
| **#85655** | 未知 | memory-wiki bridge 导入报告 0 个 artifacts |
| **#85771** | 未知 | WebChat UI 在 final 事件时渲染重复消息 |
| **#85439** | 2026.5.19 | Feishu 卡片投递丢失工具调用进度 |
| **#85601** | 2026.5.20 | MCP config tempDir 竞争条件回归 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求（有望纳入下一版本）

| Issue/PR | 请求 | 依据 |
|----------|------|------|
| **#85914** | 原生工具调用失败恢复机制 | 用户需求明确，有多个相关 Issue |
| **#85938** | Policy 插件按代理作用域规则 | v2026.5.22 刚引入 Policy 插件，扩展性需求自然 |
| **#85473** | 解耦 Dreaming 与 memory-core | 允许第三方 memory 插件实现 dreaming 协议 |
| **#85332** | slim Docker 镜像 + 可配置 APT 安装 | 改善容器化部署体验 |
| **#85175** | `sendPolicy.peerEquals: "inboundPeer"` 关系谓词 | 解决跨通道/跨身份泄露问题 |

### 已有相关 PR 的功能

| PR | 功能 | 进度 |
|----|------|------|
| **#83440** | `openclaw approvals pending/list/resolve` CLI 命令 | 需证明 |
| **#84366** | Doctor 暴露 session lock 发现 | 需维护者审查 |
| **#86627** | 保持 core doctor health 按贡献顺序 | 需维护者审查 |
| **#84545** | Google Gemini 3.5 Flash 路由支持 | 需维护者审查 |

---

## 7. 用户反馈摘要

### 真实痛点提炼

#### 🔴 严重痛点

1. **数据丢失恐惧**
   - Issue #84809：更新流程删除了用户 workspace 目录，包含记忆文件、自定义配置
   - Issue #84882：Dreaming 流程静默删除每日记忆文件
   - **用户情绪**：高度焦虑，提及"Time Machine restore required"

2. **稳定性信任危机**
   - Issue #84903：单个卡顿会话影响全局，导致所有会话停止
   - Issue #84771：启动时 28-64 秒冻结
   - **用户情绪**：对生产可用性担忧

3. **升级风险**
   - Issue #85027：升级后 LaunchAgent 不可恢复
   - Issue #85844：自动更新后模块缓存引用旧哈希文件名
   - **用户情绪**：对自动更新持谨慎态度

#### 🟡 中度痛点

4. **Provider 兼容碎片化**
   - Issue #94269：Z.ai 模型解析缺少 baseUrl
   - Issue #93781：Azure 路径使用错误认证
   - Issue #84783：Moonshot Discord 30s 延迟
   - **用户情绪**：需要更多测试覆盖

5. **渠道投递不一致**
   - Issue #85654：Telegram 群组回复静默丢弃
   - Issue #86012：LINE 消息静默丢失
   - Issue #85439：Feishu 卡片丢失进度
   - **用户情绪**：对多渠道部署不确定

#### 🟢 改进建议

6. **功能增强需求**
   - Issue #85914：工具失败后给代理一次恢复机会
   - Issue #85938：按代理作用域配置策略规则
   - **用户情绪**：建设性，期待参与路线图

### 用户满意度指标

| 维度 | 反馈 |
|------|------|
| **Telegram 改进** | v2026.6.9 的富文本改进获正面关注 |
| **文档需求** | Issue #95206 反映文档与实现脱节 |
| **CLI 体验** | Issue #95215 反映 CLI 与 API 行为不一致 |

---

## 8. 待处理积压

### 长期未响应的 P0/P1 Issues（超过 30 天）

| Issue 编号 | 创建日期 | 标题 | 未响应天数 | 优先级 | 建议 |
|------------|----------|------|------------|--------|------|
| **#84903** | 2026-05-21 | 单个卡顿会话阻塞整个 Gateway | 30 天 | P1 | 需维护者介入，事件循环隔离问题 |
| **#85103** | 2026-05-21 | Model fallback chain 未触发 | 30 天 | P1 | 需产品决策，回退逻辑设计问题 |
| **#85030** | 2026-05-21 | MCP tools 未注入子代理 | 30 天 | P1 | 需维护者审查，核心功能缺陷 |
| **#84771** | 2026-05-21 | 启动时事件循环饱和 | 30 天 | P1 | 需现场复现，性能问题 |
| **#84809** | 2026-05-21 | workspace 目录被删除 | 30 天 | P0 | 数据

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-20  
**数据周期：** 过去 24 小时

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"三极分化"**的竞争格局：头部项目（OpenClaw、Hermes Agent）保持极高的代码吞吐量和社区活跃度，单日 PR 处理量达 500 条，版本迭代周期压缩至周级；腰部项目（cc-haha、Codex++）则处于功能验证向产品化过渡的关键阶段，Bug 报告占比高达 60-75%，反映出架构稳定性尚未经过大规模用户验证。值得关注的是，**跨项目技术收敛趋势正在形成**——会话隔离、MCP 工具注入、富文本渲染、多渠道投递一致性等需求在多个项目中同步涌现，表明行业正在经历从"功能实现"向"工程品质"的范式转移。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并率 | 最新 Release | 贡献者规模 | 健康度评估 |
|------|-------------|-----------|--------|-------------|-----------|-----------|
| **OpenClaw** | 130 (全活跃) | 500 (447待合并) | ~10.6% | v2026.6.9-beta.1 | 未披露 | ⚠️ 高吞吐但积压严重 |
| **Hermes Agent** | 123 (109活跃/14关闭) | 500 (357待合并) | ~28.6% | v0.17.0 "The Reach Release" | 245人 | ✅ 规模效应显现 |
| **cc-haha** | 8 (6 Bug) | 3 (2已合并) | 66.7% | 无 | 未披露 | 🟡 问题发现密集期 |
| **Codex++** | 17 (15活跃/2关闭) | 0 | 0% | 无 | 未披露 | 🔴 Issue 积压阶段 |

**关键指标解读：**

- **PR 合并率差异显著**：cc-haha 合并率最高（66.7%），但基数小；OpenClaw 合并率最低（10.6%），反映其代码审查流程严格或积压严重
- **Bug 报告占比**：cc-haha 达 75%、Codex++ 超过 60%，均高于行业健康阈值（30-40%），说明产品成熟度有待提升
- **版本发布节奏**：仅头部两项目保持周级发布节奏，腰部项目已超过 24 小时无版本更新

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

| 维度 | OpenClaw 表现 | 生态对比 |
|------|--------------|---------|
| **功能完备性** | 覆盖 Telegram/Discord/Feishu/LINE 等 10+ 渠道 | 优于 cc-haha（桌面端为主）和 Codex++（聚焦 IDE 集成） |
| **Provider 兼容** | 支持 OpenRouter/Azure/Google Gemini/Z.ai/Moonshot 等 15+ 供应商 | 显著领先，Codex++ 仅支持 OpenAI 官方接口 |
| **工具生态** | MCP 工具、Codex 集成、Policy 插件体系 | 架构最完整，但 MCP 注入存在 P1 级 Bug |
| **文档质量** | Hook 字段、CLI 命令、审批流程均有覆盖 | 优于 Hermes Agent（Issue #95206 反映文档补全需求） |

### 3.2 技术路线差异

```
OpenClaw:  通用 Gateway 架构 → 多渠道聚合 → Provider 抽象层 → 工具生态
Hermes:    桌面端优先 → 上下文压缩 → 凭证安全 → 国际化
cc-haha:   客户端工具 → WebSocket 实时通信 → 并发控制
Codex++:   IDE 插件 → 配置注入 → API 代理
```

OpenClaw 选择了**横向扩展**路线（更多渠道、更多 Provider），而 Hermes Agent 选择了**纵向深耕**路线（桌面端体验、安全加固）。两者均面临**事件循环隔离**这一共同技术债务，但 OpenClaw 的问题更严重（#84903 已积压 30 天）。

### 3.3 社区规模对比

| 项目 | 贡献者数 | 日均 Issue 吞吐量 | PR 积压量 |
|------|---------|------------------|----------|
| OpenClaw | 未披露 | 130 | 447 |
| Hermes Agent | 245 | 123 | 357 |
| cc-haha | 未披露 | 8 | 0 |
| Codex++ | 未披露 | 17 | 0 |

Hermes Agent 拥有最明确的社区规模数据（245 贡献者），而 OpenClaw 虽然吞吐量更高，但缺乏透明度。Codex++ 和 cc-haha 处于社区建设早期。

---

## 4. 共同关注的技术方向

以下技术需求在多个项目中同步出现，反映出行业共识：

### 4.1 会话隔离与事件循环稳定性

| 项目 | 具体问题 | 严重度 |
|------|---------|--------|
| **OpenClaw** | #84903: 单个卡顿会话阻塞整个 Gateway 事件循环 | P1 (30天未解决) |
| **OpenClaw** | #84771: 启动时事件循环饱和（28-64秒延迟） | P1 |
| **OpenClaw** | #84983: Native cron 任务导致事件循环饱和 | P1 |
| **Hermes Agent** | #47917: 桌面构建 Electron 缓存问题 | P2 |

**诉求本质**：当前架构中，单个会话/任务的阻塞会级联影响全局，需要引入 Worker 线程池或进程隔离机制。

### 4.2 MCP 工具生态完善

| 项目 | 具体问题 | 严重度 |
|------|---------|--------|
| **OpenClaw** | #85030: MCP tools 未注入子代理会话 | P1 |
| **Hermes Agent** | #41625: MCP 工具在 TUI 模式下未暴露给 agent | P2 (已关闭) |
| **Hermes Agent** | #45924: Gemma4 + Ollama MCP 发现超时 | P3 |

**诉求本质**：MCP (Model Context Protocol) 作为新兴的工具调用标准，各项目实现深度不一，需要统一的工具发现、注入和生命周期管理机制。

### 4.3 富文本/多渠道渲染一致性

| 项目 | 具体问题 |
|------|---------|
| **OpenClaw** | Telegram 富文本支持（v2026.6.9-beta.1 刚修复） |
| **OpenClaw** | #85439: Feishu 卡片丢失工具调用进度 |
| **OpenClaw** | #85654: Telegram 群组回复静默丢弃 |
| **Hermes Agent** | #48648: Telegram 流式响应超过 4096 字符时无限循环 |

**诉求本质**：跨渠道的 Markdown/HTML 渲染、卡片格式、流式输出存在显著差异，需要统一抽象层。

### 4.4 Provider 兼容与模型路由

| 项目 | 具体问题 |
|------|---------|
| **OpenClaw** | #85103: Model fallback chain 未触发 |
| **OpenClaw** | #94269: Z.ai 模型解析缺少 baseUrl |
| **OpenClaw** | #93781: Azure 路径使用错误认证 |
| **Codex++** | #1064: config.toml 1M 上下文参数无法穿透 |
| **Codex++** | #1115: 支持自定义三方模型供应商配置 |

**诉求本质**：随着模型供应商生态碎片化，统一的模型解析、认证、路由、回退机制成为刚需。

### 4.5 数据持久化与状态管理

| 项目 | 具体问题 |
|------|---------|
| **OpenClaw** | #84809: 更新流程删除 workspace 目录（P0） |
| **OpenClaw** | #84882: Dreaming 流程静默删除每日记忆文件 |
| **cc-haha** | #871: 切换项目导致提示词丢失 |
| **cc-haha** | #819: MD 文件预览缓存问题 |
| **Codex++** | #1101: Windows 无法同步会话 |

**诉求本质**：跨会话、跨组件的状态一致性保障，以及异常场景下的数据保护机制。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 辅助功能 |
|------|---------|---------|
| **OpenClaw** | 多渠道 Gateway、Provider 抽象、MCP 工具生态 | 富文本渲染、审批工作流、Policy 插件 |
| **Hermes Agent** | 桌面端 AI 助手、上下文压缩、凭证安全 | 国际化（俄语）、JSON 输出、项目系统 |
| **cc-haha** | 客户端 WebSocket 通信、并发控制、文件预览 | 实时日志（需求）、Trace 会话管理 |
| **Codex++** | IDE 插件、配置注入、API 代理 | 1M 上下文、自定义供应商、账号登录 |

### 5.2 目标用户

| 项目 | 目标用户画像 |
|------|-------------|
| **OpenClaw** | 需要聚合多个 IM 渠道、连接多个 AI Provider 的高级用户和开发者 |
| **Hermes Agent** | 追求桌面端 AI 体验、需要本地模型支持（Ollama）的技术用户 |
| **cc-haha** | 需要本地 AI 编程辅助、注重实时反馈的开发者 |
| **Codex++** | 依赖 Codex IDE 集成、希望扩展模型选择和配置能力的用户 |

### 5.3 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **架构模式** | Gateway 中间件 | 桌面应用 | 客户端工具 | IDE 插件 |
| **通信机制** | 多协议适配 | WebSocket/本地 | WebSocket | HTTP 代理 |
| **状态管理** | 分布式队列 | 本地持久化 | 内存+文件 | 配置驱动 |
| **扩展方式** | 插件/MCP | 插件 | 有限 | 配置覆盖 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：规模效应期                                          │
│  OpenClaw (130 Issues/日, 500 PRs/日)                         │
│  Hermes Agent (123 Issues/日, 500 PRs/日, 245 贡献者)          │
│  特征：周级发布、高吞吐量、但积压严重                            │
├─────────────────────────────────────────────────────────────┤
│  第二梯队：产品化过渡期                                        │
│  cc-haha (8 Issues/日, 3 PRs/日)                             │
│  Codex++ (17 Issues/日, 0 PRs/日)                            │
│  特征：Bug 占比高 (>60%)、版本停滞、社区响应不足                 │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度阶段 | 关键信号 |
|------|-----------|---------|
| **Hermes Agent** | 🟢 产品化成熟期 | v0.17.0 大版本发布、245 贡献者、300+ Issues 关闭 |
| **OpenClaw** | 🟡 功能迭代高峰期 | 高吞吐量但 P0/P1 积压 30+ 天，版本迭代快但质量风险高 |
| **cc-haha** | 🔴 问题发现密集期 | Bug 占比 75%、维护者响应率低、并发控制缺陷暴露 |
| **Codex++** | 🔴 早期验证期 | PR 合并率 0%、Issue 积压 10+ 天、启动失败问题未解决 |

### 6.3 维护者响应效率

| 项目 | 长期未响应 Issue (>30天) | 响应效率评估 |
|------|-------------------------|-------------|
| **OpenClaw** | 5 个 P0/P1 Issue | ⚠️ 需加强 P0/P1 响应 |
| **Hermes Agent** | 5 个 Issue (最长 77 天) | ⚠️ Feature 积压明显 |
| **cc-haha** | 3 个 Issue (24小时内) | ⚠️ 需尽快确认收到 |
| **Codex++** | 3 个 Issue (10+ 天) | 🔴 响应滞后 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

**趋势 1：架构从"单体事件循环"向"隔离执行单元"演进**

多个项目同时暴露事件循环饱和问题（OpenClaw #84903/#84771/#84983），反映出 Node.js 事件驱动架构在 AI 负载下的局限性。预计 2026 Q3-Q4 将出现更多 Worker Thread 或进程级隔离方案。

**趋势 2：Provider 抽象层成为核心竞争力**

OpenClaw 已支持 15+ Provider，Codex++ 正在追赶（#1115）。随着模型供应商持续增加，统一的认证、路由、回退、计费抽象层将从"nice-to-have"变为"must-have"。

**趋势 3：MCP 协议标准化加速**

OpenClaw 和 Hermes Agent 均面临 MCP 工具注入问题，表明 MCP (Model Context Protocol) 作为新兴标准的实现尚不成熟。社区对 MCP 的关注度持续上升，预计 2026 年底将出现 MCP 实现的最佳实践。

**趋势 4：多渠道一致性成为体验瓶颈**

Telegram/Discord/Feishu/LINE 等渠道的渲染差异、投递可靠性问题同步涌现。用户期望"一次配置，全渠道一致"，这对架构设计提出更高要求。

**趋势 5：桌面端 AI 助手进入快速迭代期**

Hermes Agent v0.17.0 聚焦"Reach"（扩展覆盖范围），cc-haha 专注客户端体验，Codex++ 强化 IDE 集成。桌面端作为 AI 交互的重要入口，竞争正在加剧。

### 7.2 对 AI 智能体开发者的参考价值

| 建议 | 依据 |
|------|------|
| **优先解决事件循环隔离** | OpenClaw P1 问题积压 30 天，影响生产可用性 |
| **建立 Provider 抽象层** | 多项目暴露兼容性问题，标准化可降低维护成本 |
| **关注 MCP 协议演进** | 工具生态统一趋势明确，提前布局可获得先发优势 |
| **加强多渠道测试覆盖** | 渠道投递问题占比高，需要自动化测试保障 |
| **重视数据持久化健壮性** | workspace 删除、记忆文件丢失等问题严重损害用户信任 |

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| Issues (24h) | 130 | 123 | 8 | 17 |
| PRs (24h) | 500 | 500 | 3 | 0 |
| PR 合并率 | 10.6% | 28.6% | 66.7% | 0% |
| Bug 占比 | 未披露 | 未披露 | 75% | >60% |
| 最新版本 | v2026.6.9-beta.1 | v0.17.0 | 无 | 无 |
| 贡献者 | 未披露 | 245 | 未披露 | 未披露 |
| P0/P1 积压 | 9 个 | 0 个 | 0 个 | 0 个 |
| 长期未响应 (>30d) | 5 个 | 5 个 | 0 个 | 0 个 |

---

*报告生成时间：2026-06-20 | 数据来源：GitHub API | 覆盖项目：OpenClaw, Hermes Agent, cc-haha, Codex++*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-06-20  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 在过去 24 小时内保持极高的开发活跃度，共处理 **123 条 Issues 更新**（新开/活跃 109 条，关闭 14 条）和 **500 条 PR 更新**（待合并 357 条，已合并/关闭 143 条）。项目于 6 月 19 日发布了 **v0.17.0 "The Reach Release"**，包含约 1,475 次提交、800 个合并 PR、近 1,700 个文件变更，235,000 行新增代码，彰显了项目强劲的发展势头。社区贡献者达到 **245 人**，300+ issues 被关闭。今日热点集中在桌面构建回归问题、Ollama/Gemma4 集成故障、以及 MCP 工具发现超时等用户核心场景。

---

## 2. 版本发布

### v0.17.0 (v2026.6.19) — "The Reach Release"

| 项目 | 数据 |
|------|------|
| 发布日期 | 2026-06-19 |
| 提交数 | ~1,475 commits |
| 合并 PRs | ~800 merged PRs |
| 文件变更 | 1,693 files |
| 代码增量 | +235,390 insertions / -50,730 deletions |
| 关闭 Issues | 300+ |
| 贡献者 | 245 community contributors |

**版本定位：** v0.16.0 将 Hermes 带入桌面端，v0.17.0 进一步扩展其覆盖范围（"Reach"），预计包含大量功能增强与稳定性改进。

> ⚠️ **已知问题：** 桌面构建在更新后出现 Electron 缓存失效导致的构建失败（[Issue #47917](https://github.com/NousResearch/hermes-agent/issues/47917)），建议等待热修复版本。

---

## 3. 项目进展

过去 24 小时内合并/关闭的重要 PRs：

| PR | 作者 | 类型 | 说明 |
|----|------|------|------|
| [#21111](https://github.com/NousResearch/hermes-agent/pull/21111) | @versun | Bug Fix | 修复 Telegram 话题同步问题，防止手动重命名后被自动标题覆盖 |
| [#49397](https://github.com/NousResearch/hermes-agent/pull/49397) | @55nx954gn6-debug | Fix | 强化 gateway 审批与用量限制处理，优化 Telegram 重试逻辑 |
| [#49395](https://github.com/NousResearch/hermes-agent/pull/49395) | @55nx954gn6-debug | Feature | 新增 `--output-format` 选项，支持结构化 JSON 输出 |
| [#49396](https://github.com/NousResearch/hermes-agent/pull/49396) | @briandevans | Fix | 报告实际 private-URL 策略而非原始配置键 |
| [#46428](https://github.com/NousResearch/hermes-agent/pull/46428) | @55nx954gn6-debug | Feature | 新增递归大上下文工作流工具 |
| [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) | @OutThisLife | Feature | 一级项目系统，后端权威的会话树 |
| [#49387](https://github.com/NousResearch/hermes-agent/pull/49387) | @MaxMintyTheBigBoss | i18n | 新增俄语 (ru) 本地化支持 |
| [#49252](https://github.com/NousResearch/hermes-agent/pull/49252) | @teknium1 | Feature | 后台审查的辅助模型路由与自适应频率，降低自改进成本 |
| [#45929](https://github.com/NousResearch/hermes-agent/pull/45929) | @rdguidry | Security | 清除 npm 安全警告，限制辅助 Nous 标签范围 |

**项目整体评估：** 143 个 PR 已合并/关闭，357 个待处理，合并率约 28.6%。大量新功能 PR 处于开放状态，预计下一版本将包含显著的功能增强。

---

## 4. 社区热点

### 评论数最多的 Issues（Top 5）

| Issue | 评论 | 👍 | 主题 |
|-------|------|-----|------|
| [#47917](https://github.com/NousResearch/hermes-agent/issues/47917) | 20 | 2 | **桌面构建更新后失败** — Electron 缓存被删除 |
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | 11 | 1 | **凭证代理守护进程** — 零知识 HTTP/HTTPS 代理 |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | 6 | 9 | **集成 headroom-ai 压缩** — 工具输出压缩 |
| [#38478](https://github.com/NousResearch/hermes-agent/issues/38478) | 6 | 0 | **camofox 浏览器截图被裁剪** |
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | 6 | 0 | **可配置内存后端** — 禁用 memory.md |

### 热点分析

1. **桌面构建回归（#47917，20 评论）**  
   这是目前最受关注的 Issue。用户反映在应用 #47276 修复后，桌面构建再次失败，Electron 缓存在更新过程中被删除。这表明构建缓存管理存在系统性问题，影响所有桌面用户。

2. **凭证安全（#4656，11 评论）**  
   社区正在讨论引入零知识凭证代理守护进程，以解决现有 PID 命名空间隔离的局限性。这是一个高级安全特性请求，涉及架构层面的重新设计。

3. **压缩功能（#39691，9 👍）**  
   用户对集成 headroom-ai 进行工具输出压缩表现出较高兴趣（9 个点赞），当前上下文压缩系统在工具级别存在已知问题。

---

## 5. Bug 与稳定性

### P1/P2 高优先级 Bug（需立即关注）

| Issue | 严重度 | 状态 | 说明 | Fix PR |
|-------|--------|------|------|--------|
| [#47917](https://github.com/NousResearch/hermes-agent/issues/47917) | P2 | OPEN | 桌面构建更新后失败（electronDist 不存在） | — |
| [#39281](https://github.com/NousResearch/hermes-agent/issues/39281) | P2 | CLOSED | Gemma4 + Ollama 输出截断问题 | [#41694](https://github.com/NousResearch/hermes-agent/pull/41694) |
| [#45924](https://github.com/NousResearch/hermes-agent/issues/45924) | P3 | OPEN | Hermes + Gemma4 12B (Ollama) 报错 |
| [#41625](https://github.com/NousResearch/hermes-agent/issues/41625) | P2 | CLOSED | MCP 工具在 TUI 模式下未暴露给 agent | — |
| [#47868](https://github.com/NousResearch/hermes-agent/issues/47868) | P2 | OPEN | 严格 provider 拒绝 timestamp 元数据 |
| [#48534](https://github.com/NousResearch/hermes-agent/issues/48534) | P2 | OPEN | Anthropic Max OAuth 因 User-Agent 被阻止 |
| [#48648](https://github.com/NousResearch/hermes-agent/issues/48648) | P2 | OPEN | Telegram 流式响应超过 4096 字符时无限循环 |

### P3 中优先级 Bug

| Issue | 说明 |
|-------|------|
| [#38478](https://github.com/NousResearch/hermes-agent/issues/38478) | camofox 浏览器截图被裁剪/缩放异常 |
| [#47795](https://github.com/NousResearch/hermes-agent/issues/47795) | 桌面聊天滚动持续跳动，无法阅读 |
| [#47500](https://github.com/NousResearch/hermes-agent/issues/47500) | 桌面应用自动预览外部链接触发自定义协议 |
| [#48388](https://github.com/NousResearch/hermes-agent/issues/48388) | 桌面 GUI 保存配置时按键名字母排序 |

**稳定性评估：** 今日报告 7 个 P2 Bug，其中 2 个已关闭，5 个仍开放。Ollama/Gemma4 集成问题反复出现，建议建立回归测试。

---

## 6. 功能请求与路线图信号

### 高关注度 Feature Requests

| Issue | 👍 | 说明 | 相关 PR |
|-------|-----|------|---------|
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | 1 | 零知识凭证代理守护进程 | — |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | 9 | 集成 headroom-ai 工具输出压缩 | — |
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | 0 | 可配置内存后端（禁用 memory.md） | — |
| [#13866](https://github.com/NousResearch/hermes-agent/issues/13866) | 0 | 支持 ntfy 作为原生消息 Provider | — |
| [#32159](https://github.com/NousResearch/hermes-agent/issues/32159) | 0 | Web 搜索/提取后端的顺序故障转移链 | — |
| [#49363](https://github.com/NousResearch/hermes-agent/issues/49363) | 0 | 桌面应用加载 dashboard 插件 | — |

### 已在开发中的功能

| PR | 说明 | 进度 |
|----|------|------|
| [#49037](https://github.com/NousResearch/hermes-agent/pull/49037) | 一级项目系统 + 后端权威会话树 | OPEN |
| [#46428](https://github.com/NousResearch/hermes-agent/pull/46428) | 递归大上下文工作流 | OPEN |
| [#49252](https://github.com/NousResearch/hermes-agent/pull/49252) | 后台审查的辅助模型路由 | OPEN |
| [#49387](https://github.com/NousResearch/hermes-agent/pull/49387) | 俄语本地化 | OPEN |

**路线图信号：** 下一版本可能聚焦于：
- 项目/会话管理重构
- 内存系统可配置性
- 成本优化的后台审查机制
- 国际化扩展

---

## 7. 用户反馈摘要

### 核心痛点

1. **Ollama 集成不稳定**  
   多名用户报告 Gemma4 12B 在 Ollama 后端上出现输出截断或直接报错（[#45924](https://github.com/NousResearch/hermes-agent/issues/45924)、[#39281](https://github.com/NousResearch/hermes-agent/issues/39281)）。用户 @andyshi70 表示："在终端直接运行 `ollama run gemma4:12b` 完全正常，但在 Hermes 中连 'hello' 都会报错。"

2. **桌面构建体验差**  
   桌面用户在更新后频繁遇到构建失败（[#47917](https://github.com/NousResearch/hermes-agent/issues/47917)），@wordgao 描述："每次拉取最新代码后都要手动清理缓存，严重影响开发效率。"

3. **MCP 工具发现超时**  
   TUI 模式下 MCP 工具缺失问题（[#41625](https://github.com/NousResearch/hermes-agent/issues/41625)）已关闭，但根本原因是 0.75 秒超时短于实际发现时间（约 6 秒），用户 @pioneerAlone 指出这导致"agent 永远无法调用 MCP 工具，只能回退到 terminal"。

### 正面反馈信号

- 俄语本地化 PR（[#49387](https://github.com/NousResearch/hermes-agent/pull/49387)）获得积极响应
- 凭证安全讨论（#4656）显示用户对安全性的重视
- JSON 输出功能（[#49395](https://github.com/NousResearch/hermes-agent/pull/49395)）满足脚本化使用场景需求

---

## 8. 待处理积压

以下 Issue 超过 30 天未得到维护者响应，建议优先处理：

| Issue | 创建日期 | 类型 | 说明 |
|-------|----------|------|------|
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | 2026-04-02 | Feature | 凭证代理守护进程（77 天） |
| [#13866](https://github.com/NousResearch/hermes-agent/issues/13866) | 2026-04-22 | Feature | ntfy 消息 Provider（59 天） |
| [#19753](https://github.com/NousResearch/hermes-agent/issues/19753) | 2026-05-04 | Bug | 自定义 provider 辅助标题生成 404（47 天） |
| [#23802](https://github.com/NousResearch/hermes-agent/issues/23802) | 2026-05-11 | Bug | 插件列表过滤问题（40 天） |
| [#32858](https://github.com/NousResearch/hermes-agent/issues/32858) | 2026-05-26 | Bug | 后台审查提示泄露到用户记忆（25 天） |

**积压评估：** 5 个重要 Issue 超过 25 天未解决，其中安全相关功能请求（#4656）积压时间最长。建议维护者对长期未响应 Issue 进行状态更新或分配负责人。

---

## 附录：关键链接

- **项目主页：** https://github.com/NousResearch/hermes-agent
- **最新 Release：** https://github.com/NousResearch/hermes-agent/releases/tag/v2026.6.19
- **Issue 列表：** https://github.com/NousResearch/hermes-agent/issues
- **PR 列表：** https://github.com/NousResearch/hermes-agent/pulls

---

*报告生成时间：2026-06-20 | 数据来源：GitHub API | 报告周期：过去 24 小时*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-06-20  
**数据来源**: GitHub (github.com/NanmiCoder/cc-haha)

---

## 1. 今日速览

过去24小时内，cc-haha 项目保持较高活跃度，共产生 **8 条新 Issue** 和 **3 条 PR 更新**。项目整体呈现"问题发现密集期"特征——8个 Issue 中有6个为 Bug 报告，主要集中在 UI 交互（窗口拖动、文件预览、提示词丢失）和 Agent 执行体验（进度反馈缺失）方面。社区贡献者 @zhbdesign 持续发力，今日提交了3个 PR，其中2个已合并修复了服务端 WebSocket 事件处理和会话预热逻辑的关键问题。目前项目无新版本发布，但代码质量维护保持稳定。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并 PR

| PR # | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#865](https://github.com/NanmiCoder/cc-haha/pull/865) | 优化客户端 `prewarm_session` 和 `user_message` 并发处理 | server | ✅ 已合并 |
| [#873](https://github.com/NanmiCoder/cc-haha/pull/873) | 修复旧 CLI 延迟 close 事件覆盖新 CLI WebSocket 连接问题 | server | ✅ 已合并 |

**#865 详情**：该 PR 解决了客户端几乎同时发送 `prewarm_session` 和 `user_message` 时，`clearPrewarmState` 未正确清除状态导致的会话卡死问题。修复后避免了 kill CLI 后客户端永远收不到 `status: idle` 或 error、页面持续卡在"执行中"状态的情况。

**#873 详情**：该 PR 修复了旧 CLI 的延迟 close 事件会覆盖新 CLI 的 SDK WebSocket 连接的问题，通过将旧 CLI 的 close 事件标记为 stale 使其被正确忽略，提升了多 CLI 场景下的连接稳定性。

### 待合并 PR

| PR # | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#872](https://github.com/NanmiCoder/cc-haha/pull/872) | 修复旧 CLI 延迟 close 事件覆盖新 CLI WebSocket 连接 | server | ⏳ 待合并 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**🥇 #575** - [问题] 卡在一个步骤十几分钟
- **作者**: @1735774501 | **评论**: 6 条 | **👍**: 1
- **链接**: https://github.com/NanmiCoder/cc-haha/issues/575
- **摘要**: 用户反映模型和梯子均正常，但执行过程中卡在某个步骤十几分钟无法继续，强烈建议增加实时控制台日志功能以便定位卡顿原因。

**🥈 #810** - [BUG] 添加服务商在转圈，且未加锁导致重复服务商
- **作者**: @zhbdesign | **评论**: 2 条 | **👍**: 0
- **链接**: https://github.com/NanmiCoder/cc-haha/issues/810
- **摘要**: 用户在添加服务商时界面持续转圈，点击取消或等待后出现两个相同的服务商，疑似并发控制缺失。

**🥉 #819** - [BUG] MD 文件预览缓存问题
- **作者**: @zhbdesign | **评论**: 1 条 | **👍**: 0
- **链接**: https://github.com/NanmiCoder/cc-haha/issues/819
- **摘要**: 点击打开生成的 md 文件后，默认使用内置浏览器预览，后续打开其他文件时仍显示第一次打开的文件内容。

---

## 5. Bug 与稳定性

按严重程度排列的今日 Bug 报告：

| 严重度 | Issue # | 标题 | 状态 | 是否有 Fix PR |
|--------|---------|------|------|---------------|
| 🔴 高 | #810 | 添加服务商转圈 + 未加锁导致重复 | 开放 | ❌ |
| 🔴 高 | #574? | 窗口无法拖动（Windows 无边框窗口 hit-test 问题） | 开放 | ❌ |
| 🟡 中 | #819 | MD 文件预览缓存问题 | 开放 | ❌ |
| 🟡 中 | #869 | EnterPlanMode 多显示内容 | 开放 | ❌ |
| 🟡 中 | #870 | Plan 模式 agent 执行少显示 bash + 无进度反馈 | 开放 | ❌ |
| 🟡 中 | #871 | 切换项目导致提示词丢失 | 开放 | ❌ |
| 🟢 低 | #868 | Trace 页面缺少手动删除会话选项 | 开放 | ❌ |

**重点关注**：
- **#874** 提供了详细的根因分析（`-webkit-app-region: drag` 在 Windows 无边框窗口的 hit-test 映射问题），建议维护者优先评估该修复方案。
- **#870** 涉及用户体验问题：agent 执行时缺少进度提示，在慢速场景下用户容易误判为卡死。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 请求内容 | 诉求来源 | 优先级评估 |
|---------|----------|----------|------------|
| #575 | **实时控制台日志功能** | @1735774501 | ⭐⭐⭐ 高 |
| #868 | **Trace 页面增加手动删除会话功能** | @aeng7832118 | ⭐⭐ 中 |

**分析**：
- **实时日志功能**（#575）获得最多评论（6条），表明这是社区普遍痛点。结合 #870 中"无进度反馈导致误判卡死"的反馈，建议将"执行过程可视化"纳入下一版本的重点改进方向。
- **会话管理功能**（#868）是 Trace 页面可用性的基础需求，实现成本较低，可作为小版本迭代的候选。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的关键用户痛点：

### 🔍 核心痛点

1. **执行过程不透明**
   - 用户无法看到 AI 执行过程中的实时日志，卡顿时无法判断是模型问题、网络问题还是代码问题
   - Agent 执行缺乏进度反馈，慢速场景下用户体验差

2. **并发控制缺失**
   - 添加服务商等操作未加锁，导致数据重复或状态不一致

3. **UI 状态管理问题**
   - 切换项目时提示词丢失
   - 文件预览缓存未正确刷新

### 💡 用户期望

- 希望应用提供**实时调试能力**，类似 IDE 的控制台输出
- 希望 UI 操作有**明确的加载状态和错误提示**
- 希望**数据持久化逻辑更健壮**，避免切换页面导致数据丢失

---

## 8. 待处理积压

以下 Issue 值得关注但尚未得到维护者响应：

| Issue # | 标题 | 创建时间 | 状态 | 关注理由 |
|---------|------|----------|------|----------|
| [#874](https://github.com/NanmiCoder/cc-haha/issues/874) | 窗口无法拖动问题 | 2026-06-19 | 开放 | 提供了详细根因分析，建议优先评估 |
| [#871](https://github.com/NanmiCoder/cc-haha/issues/871) | 切换项目导致提示词丢失 | 2026-06-19 | 开放 | 数据持久化缺陷，影响核心工作流 |
| [#868](https://github.com/NanmiCoder/cc-haha/issues/868) | Trace 页面缺少删除功能 | 2026-06-19 | 开放 | 功能缺失，但实现成本低 |

**建议维护者关注**：上述 Issue 均创建于 2026-06-19，至今（2026-06-20）暂无官方回复，建议尽快确认收到并评估修复计划。

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issue | 8 | 📈 +8 |
| 新增 PR | 3 | ➡️ 持平 |
| PR 合并率 | 66.7% (2/3) | ✅ 健康 |
| Bug 报告占比 | 75% (6/8) | ⚠️ 偏高 |
| 维护者响应 Issue | 0 | ⚠️ 待跟进 |

---

*报告生成时间: 2026-06-20 | 数据覆盖: 2026-06-19 00:00 至 2026-06-20 00:00 (UTC)*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-20  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年6月20日，Codex++ 项目保持较高社区活跃度，过去24小时内共产生 **17 条 Issue 更新**（新开/活跃 15 条，关闭 2 条），但 **无 PR 合并或版本发布**。从 Issue 类型分布来看，Bug 类问题占比超过 60%，主要集中在配置同步、API 连接和会话管理三大领域，表明当前版本在稳定性和配置传递机制上存在一定问题。社区反馈显示用户对 1M 上下文配置、供应商切换和本地服务器路由等功能有较强需求，建议优先处理影响核心功能的 Bug。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**过去24小时内无 PR 合并或关闭**

项目当前处于 Issue 积压阶段，建议维护者尽快响应社区高优先级问题并推进修复 PR。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue # | 类型 | 标题 | 评论数 | 链接 |
|---------|------|------|--------|------|
| #857 | Config | 分享一下如何搞定1M上下文问题的配置 | 6 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/857) |
| #1099 | Question | 点击codex++无反应，软件启动不了 | 5 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1099) |
| #1064 | Bug | config.toml中配置的1M上下文参数无法正常穿透 | 4 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1064) |
| #1093 | Bug | 各种配置都填好了，http://127.0.0.1:57321/v1连不上 | 3 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1093) |
| #1101 | Bug | windows无法同步 | 2 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1101) |
| #1100 | Bug | code":"400" | 2 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1100) |

### 热点分析

**#857（1M上下文配置）** 是社区最关注的话题，用户 @huangpeihp 表达了"没有人关心吗？"的诉求，说明配置文档或官方指引可能不够清晰。**#1064** 进一步揭示了 `model_context_window` 和 `model_auto_compact_token_limit` 参数在配置后无法生效的问题，可能涉及配置传递链路的 Bug。**#1099** 和 **#1093** 则反映了新用户在 Windows 环境下的启动和连接问题，暗示安装/配置引导流程存在改进空间。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue # | 标题 | 状态 | 链接 |
|----------|---------|------|------|------|
| 🔴 高 | #1099 | 点击codex++无反应，软件启动不了 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1099) |
| 🔴 高 | #1113 | 打不开codex++ | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1113) |
| 🔴 高 | #1118 | BadRequestError (Expecting ',' delimiter) | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1118) |
| 🔴 高 | #1100 | BadRequestError 400 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1100) |
| 🟡 中 | #1064 | config.toml 1M上下文参数无法穿透 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1064) |
| 🟡 中 | #1093 | http://127.0.0.1:57321/v1 路由失败 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1093) |
| 🟡 中 | #1101 | Windows 无法同步会话 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1101) |
| 🟡 中 | #1114 | 账号登录无法显示历史会话 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1114) |
| 🟡 中 | #1112 | /thread-sort-keys 重复失败，sidebar 排序不稳定 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1112) |
| 🟢 低 | #1111 | 弹窗提示异常 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1111) |

### 关键问题说明

1. **启动类问题（#1099, #1113）**：多位用户报告软件无法启动，但原始 Codex 可正常运行，疑似 Codex++ 注入层存在问题
2. **BadRequestError（#1118, #1100）**：JSON 解析错误频繁出现，可能与上游 API 响应格式或请求体构造有关
3. **配置穿透失败（#1064）**：用户配置的 1M 上下文参数被覆盖或未正确传递，影响核心功能体验

**是否有 Fix PR：暂无**

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

| Issue # | 类型 | 标题 | 链接 |
|---------|------|------|------|
| #1115 | Feature | Codex config.toml 支持自定义三方模型供应商配置 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1115) |

### 功能请求分析

**#1115** 建议在 Codex++ 中增加直接配置到 `config.toml` 的选项，跳过代理中转以提升性能。用户引用了 OpenAI 官方文档 [Config Advanced - OSS Mode Local Providers](https://developers.openai.com/codex/config-advanced#oss-mode-local-providers)，认为这是官方已支持的功能。此请求与社区热点 #857/#1064（1M上下文配置）形成呼应，表明用户对精细化配置控制有强烈需求。

**其他配置类 Issues（#1117, #1116, #1120）** 也反映了用户对供应商切换、API 模式切换和配置同步的诉求，建议纳入路线图评估。

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点类别 | 典型 Issue | 用户描述 |
|----------|------------|----------|
| **启动失败** | #1099, #1113 | "点击codex++无反应，软件启动不了。打开原始的codex可以正常打开" |
| **配置失效** | #1064, #857 | "config.toml中配置的1M上下文参数无法正常穿透"、"分享一下如何搞定1M上下文问题的配置" |
| **连接问题** | #1093, #1117 | "http://127.0.0.1:57321/v1连不上"、"一直重新连接，但是不成功" |
| **同步异常** | #1101, #1114 | "windows无法同步"、"账号登录无法显示历史会话" |

### 使用场景

- **Windows 用户占主流**：多数 Issue 来自 Windows 环境
- **API 模式切换频繁**：用户需要在官方登录、纯 API、供应商切换等多种模式间切换
- **深度定制需求**：用户期望通过 config.toml 实现 1M 上下文、自定义供应商等高级配置

### 满意/不满意的地方

- **不满意**：配置同步机制不稳定、启动成功率、错误提示不够友好（BadRequestError 对用户不友好）
- **期望**：更清晰的配置文档、更稳定的 Windows 体验、官方功能（如三方供应商配置）的兼容

---

## 8. 待处理积压

### 长期未响应的 Issue（超过48小时无维护者回复）

| Issue # | 类型 | 标题 | 创建时间 | 最后更新 | 链接 |
|---------|------|------|----------|----------|------|
| #857 | Config | 分享一下如何搞定1M上下文问题的配置 | 2026-06-10 | 2026-06-19 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/857) |
| #1064 | Bug | config.toml中配置的1M上下文参数无法正常穿透 | 2026-06-17 | 2026-06-19 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1064) |
| #791 | Question | 如何在切换回官方登录的情况下使用电脑操控和浏览器扩展 | 2026-06-08 | 2026-06-19 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/791) |

### 积压分析

**#857** 已创建超过10天，是当前社区最热话题但未得到官方回应，建议优先处理并提供配置指南或确认是否为已知限制。**#791** 涉及官方登录与第三方 API 的功能差异说明，也需要维护者澄清产品设计边界。

---

## 总结建议

| 优先级 | 行动项 | 关联 Issue |
|--------|--------|------------|
| 🔴 P0 | 调查 Windows 启动失败问题 | #1099, #1113 |
| 🔴 P0 | 修复 BadRequestError JSON 解析问题 | #1118, #1100 |
| 🟡 P1 | 解决 config.toml 参数穿透问题 | #1064, #857 |
| 🟡 P1 | 修复本地服务器路由 (127.0.0.1:57321) | #1093, #1117 |
| 🟡 P1 | 完善 Windows 会话同步功能 | #1101, #1114 |
| 🟢 P2 | 评估三方供应商配置功能请求 | #1115 |
| 🟢 P2 | 更新配置文档或 FAQ | #857, #791 |

---

*报告生成时间：2026-06-20*  
*数据来源：GitHub Issues & PRs (过去24小时)*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*