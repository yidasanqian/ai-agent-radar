# OpenClaw 生态日报 2026-06-14

> Issues: 230 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-14 04:06 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-14  
**项目仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

过去 24 小时内，OpenClaw 保持极高的社区活跃度：共产生 **230 条 Issue 更新**（192 新开/活跃，38 关闭）和 **500 条 PR 更新**（299 待合并，201 已合并/关闭）。项目发布了两个 beta 版本（v2026.6.7-beta.1 和 v2026.6.8-beta.1），聚焦于 Telegram/WhatsApp 富文本消息投递优化和 Slack 频道交付稳定性。今日社区讨论热度较高，Session 状态管理、Subagent 生命周期、内存泄漏等问题持续受到关注，同时多个安全相关 Issue（如未信任内容注入、权限绕过）需要优先处理。整体来看，项目迭代速度稳健，但积压的 P1 级 Issue 仍需维护者加速跟进。

---

## 2. 版本发布

### v2026.6.8-beta.1
**发布时间：** 2026-06-14  
**发布说明：** Telegram 和 WhatsApp 频道的消息投递能力显著增强，包括支持结构化富文本（表格、列表、可展开引用块）、保留提示词的 CLI 后端投递、废弃原生草稿迁移机制，以及更安全的富媒体边界处理。

### v2026.6.7-beta.1
**发布时间：** 2026-06-14  
**发布说明：** 聚焦于 Slack、Telegram、出站媒体、静默回复、进度草稿和分页操作结果的跨频道交付一致性优化。Slack 同频道最终消息保留在转录中，顶级 `image` 消息工具支持附加媒体，可展开 Telegram 引用块和缓冲机制得到改进。

> **迁移注意事项：** v2026.6.8-beta.1 包含废弃的原生草稿迁移机制，建议用户关注迁移文档以避免消息丢失。

---

## 3. 项目进展

今日共有 **201 个 PR 被合并/关闭**，以下是推进关键功能的代表性 PR：

| PR 编号 | 作者 | 功能/修复 | 状态 |
|---------|------|----------|------|
| [#92819](https://github.com/openclaw/openclaw/pull/92819) | @TurboTheTurtle | 修复陈旧的自动回退源模型选择逻辑，确保回复和 agent 命令选择一致 | 待合并（等待作者） |
| [#92856](https://github.com/openclaw/openclaw/pull/92856) | @Solvely-Colin | WebUI 新增会话工作区侧边栏，显示变更文件、读取文件、产物和项目浏览器条目 | 待合并（等待作者） |
| [#92824](https://github.com/openclaw/openclaw/pull/92824) | @bek91 | 修复 OpenAI OAuth 媒体路由问题 | 待合并（等待维护者审查） |
| [#92859](https://github.com/openclaw/openclaw/pull/92859) | @liuhao1024 | WhatsApp 提取 GIF 元数据并区分 gifPlayback | 待合并 |
| [#92842](https://github.com/openclaw/openclaw/pull/92842) | @zhangguiping-xydt | 修复 Telegram 进度气泡在进度流式传输模式下停留在后续助手消息上方的问题 | 待合并（需要证明） |
| [#83933](https://github.com/openclaw/openclaw/pull/83933) | @Jerry-Xin | 修复 Cron 手动运行跳过 deleteAfterRun 并保留计数器 | 待合并（等待维护者审查） |
| [#91586](https://github.com/openclaw/openclaw/pull/91586) | @fuller-stack-dev | 修复 update 命令在包 doctor 警告后继续执行 | **已合并** |
| [#89057](https://github.com/openclaw/openclaw/pull/89057) | @Kovisun | 禁用 transcriptMirror 防止会话转录中重复助手回复条目 | 待合并（需要证明） |
| [#89055](https://github.com/openclaw/openclaw/pull/89055) | @ghitafilali | 隔离 Cron 设置超时时重启网关 | 待合并（等待维护者审查） |
| [#89039](https://github.com/openclaw/openclaw/pull/89039) | @Jerry-Xin | 防止 EmbeddedAttemptSessionTakeoverError 导致的消息静默丢失 | 待合并（等待维护者审查） |

**今日合并率评估：** 约 40%（201/500），考虑到大量 PR 处于"等待作者"或"需要证明"状态，实际推进效率受限于贡献者响应速度。

---

## 4. 社区热点

以下 Issues 和 PRs 今日评论数最多，反映了社区最关切的问题：

### 热门 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|-----------|------|--------|----------|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) | Feishu 监控状态清理不完整 — httpServers Map 潜在内存泄漏 | 19 | 修复 Map 条目在服务器完全关闭前被删除的问题 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失 — 超时后无重试、无通知、无自动重启 | 19 | 解决 Subagent 任务编排中结果静默丢失的多个故障模式 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 集中式文件名编码工具，用于多编码 Content-Disposition 处理 | 18 | 架构层面统一处理多种字符编码（Shift-JIS、EUC-KR、GB18030 等） |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh-issues skill：未信任的 issue body 直接注入子 agent 提示词 | 13 | 安全问题：原始 issue body 未做清理直接注入，存在注入攻击风险 |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | Cron 计划触发器污染全局运行时状态，导致瞬时系统级过载故障 | 13 | 隔离 Cron 运行时环境，防止全局状态污染 |
| [#48573](https://github.com/openclaw/openclaw/issues/48573) | 嵌入式运行会话状态泄漏 — 父 agent 终止后僵尸 agent 持续存在 | 12 | 修复子 agent 僵尸状态残留问题 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式未在主会话回合中注入消息 | 12 | 修复消息队列 steer 模式在工具边界处未正确注入的问题 |

### 热门 PRs

| PR 编号 | 标题 | 状态 | 热度来源 |
|--------|------|------|----------|
| [#92819](https://github.com/openclaw/openclaw/pull/92819) | 修复陈旧的自动回退源模型选择 | 等待作者 | 解决模型选择不一致问题 |
| [#92856](https://github.com/openclaw/openclaw/pull/92856) | WebUI 新增会话工作区侧边栏 | 等待作者 | 提升开发者体验 |
| [#89033](https://github.com/openclaw/openclaw/pull/89033) | WhatsApp 群组管理 agent 工具 | 积极开发中 | 新功能需求旺盛 |

**热点分析：** 社区最关注三大主题：
1. **Session 状态管理**（内存泄漏、僵尸进程、状态持久化）— 影响系统稳定性
2. **Subagent 生命周期**（完成通知、超时处理、错误恢复）— 影响可靠性
3. **安全隔离**（未信任内容注入、权限边界）— 影响生产部署

---

## 5. Bug 与稳定性

### P1 级（严重/阻塞）

| Issue 编号 | 标题 | 严重程度 | 是否有 Fix PR |
|-----------|------|---------|--------------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失 | 影响消息丢失 | 无 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Gemini 3.1 Pro Preview 中 "Cannot convert undefined or null to object" | 崩溃循环 | 无 |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | Playwright 断言错误导致网关崩溃 | 崩溃循环 | 无 |
| [#90093](https://github.com/openclaw/openclaw/issues/90093) | OpenAI Codex 加密推理导致下一轮 invalid_encrypted_content | 影响认证提供商 | 无 |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex 导致长响应延迟、钩子超时、启动中止 | 性能问题 | 无 |

### P2 级（重要）

| Issue 编号 | 标题 | 类型 | 是否有 Fix PR |
|-----------|------|------|--------------|
| [#48183](https://github.com/openclaw/openclaw/issues/48183) | Feishu httpServers Map 内存泄漏 | 内存泄漏 | 无 |
| [#48573](https://github.com/openclaw/openclaw/issues/48573) | 嵌入式运行会话状态泄漏 | 状态泄漏 | 无 |
| [#44993](https://github.com/openclaw/openclaw/issues/44993) | Heartbeat/Cron 时间戳陈旧 | 回归问题 | 无 |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh-issues skill 未信任内容注入 | 安全问题 | 无 |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | tools.elevated.enabled: true 破坏 exec 路由逻辑 | 回归问题 | 无 |

**稳定性评估：** 今日无新增 P1 Fix PR 合并，积压的 P1 Issue 数量为 **5 个**，建议优先处理 Subagent 完成丢失（#44925）和 Playwright 崩溃（#45224）。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue 编号 | 标题 | 需求来源 | 潜在纳入信号 |
|-----------|------|---------|-------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 按来源的记忆信任标签 | @LumenLantern | 安全增强需求明确 |
| [#48874](https://github.com/openclaw/openclaw/issues/48874) | 多会话架构：共享 LLM + 隔离会话 + 公共知识库 | @KilimiaoSix | RFC 阶段，架构讨论活跃 |
| [#49178](https://github.com/openclaw/openclaw/issues/49178) | 可复用的网关 WebSocket 客户端 SDK 包 | @DeJeune | 生态建设需求 |
| [#46656](https://github.com/openclaw/openclaw/issues/46656) | Webchat/Control UI 内联按钮支持 | @sys-fairy-eve | 用户体验优化 |
| [#47856](https://github.com/openclaw/openclaw/issues/47856) | image 工具的可配置 mediaLocalRoots | @chad42777 | 文件访问灵活性需求 |
| [#89033](https://github.com/openclaw/openclaw/pull/89033) | WhatsApp 群组管理 agent 工具 | @pallaoro | **已有 PR**，正在积极开发 |

**路线图信号：** 
- Telegram/WhatsApp 富文本能力已在新版本中落地（v2026.6.8-beta.1）
- WebUI 会话工作区功能正在推进（#92856）
- WhatsApp 群组管理工具即将可用（#89033）

---

## 7. 用户反馈摘要

### 核心痛点

1. **Session 状态管理混乱**
   - 多名用户反馈内存管理不一致（#43747）：不同用户的 OpenClaw 记忆管理方式完全不同
   - 会话文件无限增长（#45718）：skillsSnapshot 和 systemPromptReport 在每次运行后累积
   - 群聊会话未持久化（#45573）：166+ 条消息的群组仅记录 1 个会话

2. **Subagent 可靠性不足**
   - 完成静默丢失、无重试机制（#44925）
   - 会话在完成后持续存在，导致主会话无响应（#47975）
   - 模拟工具调用而非真实调用（#45049）

3. **安全隔离问题**
   - gh-issues skill 直接注入未净化内容（#45740）
   - 工具权限边界模糊（#46786）
   - WebSocket 连接权限范围问题（#48229）

4. **第三方集成问题**
   - Feishu 代理配置下 token 获取失败（#48949）
   - Google Vertex Gemini 兼容性问题（#38327）
   - OpenAI Codex 错误泄露到用户聊天（#44910）

### 用户满意度信号

- **正面：** Telegram 富文本投递改进（v2026.6.8）受到期待
- **负面：** 内存泄漏、Session 状态问题长期未解决导致用户不满

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或停滞，建议维护者关注：

### 长期未响应的 P1 Issues

| Issue 编号 | 创建时间 | 标题 | 未响应天数 |
|-----------|---------|------|-----------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 2026-03-06 | Gemini 3.1 Pro Preview 崩溃 | ~100 天 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 2026-03-13 | Subagent 完成静默丢失 | ~93 天 |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | 2026-03-13 | Playwright 崩溃 | ~93 天 |
| [#45049](https://github.com/openclaw/openclaw/issues/45049) | 2026-03-13 | Agent 循环允许模拟工具调用 | ~93 天 |

### 停滞的 PRs

| PR 编号 | 创建时间 | 标题 | 状态 |
|--------|---------|------|------|
| [#68106](https://github.com/openclaw/openclaw/pull/68106) | 2026-04-17 | 修复 lobster 工作流路径错误 | 需要行为证明 |
| [#67783](https://github.com/openclaw/openclaw/pull/67783) | 2026-04-16 | Feishu 目标打字反应 | 等待作者 |
| [#89057](https://github.com/openclaw/openclaw/pull/89057) | 2026-06-01 | 禁用 transcriptMirror | 需要证明 |

### 建议行动

1. **优先处理：** #44925（Subagent 完成丢失）、#45224（Playwright 崩溃）、#38327（Gemini 崩溃）
2. **清理停滞 PR：** 联系 #68106、#67783 作者补充证明材料
3. **安全优先：** #45740（未信任内容注入）应尽快评估并提供修复路径

---

**报告生成时间：** 2026-06-14  
**数据来源：** GitHub OpenClaw 仓库活动日志  
**分析师：** OpenClaw 项目动态监控系统

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-14  
**数据来源：** GitHub 公开活动数据

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强、快速分化"**的格局。头部项目（OpenClaw、Hermes Agent）日均产生 300+ 条社区活动，迭代速度堪比商业项目；垂直领域项目（cc-haha 专注 Claude Code 桌面化、Codex++ 聚焦 Codex 增强）则围绕特定用户群体深耕。整体生态正处于**从功能验证向生产可用性过渡**的关键阶段：核心框架的基础能力已相对完善，但 Session 状态管理、上下文压缩、安全隔离等工程化问题成为制约大规模部署的瓶颈。多项目同时涌现的 Web UI 需求和富文本消息投递能力，折射出终端用户对"类 Claude Artifact 体验"的强烈诉求。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 今日 Releases | 合并率 | 问题闭环率 | 健康度评估 |
|------|-------------|-----------|--------------|--------|-----------|-----------|
| **OpenClaw** | 230 (192新开/活跃) | 500 (299待合并) | 2 个 beta | ~40% | — | ⚠️ 高活跃但积压重 |
| **Hermes Agent** | 132 (116新开/活跃) | 500 (345待合并) | 0 | ~31% | — | ⚠️ 高迭代但 Bug 多 |
| **cc-haha** | 34 (10新开/活跃) | 0 | 1 个稳定版 | — | **70.6%** | ✅ 质量优先 |
| **Codex++** | 45 (40新开/活跃) | 6 (0合并) | 2 个版本 | 0% | — | 🔴 回归问题爆发 |

**关键数据洞察：**

- **OpenClaw** 和 **Hermes Agent** 占据生态活跃度顶端，但均面临 PR 积压问题（待合并比例 >60%），代码审查能力成为瓶颈
- **cc-haha** 以 70.6% 的问题闭环率展现最优的社区运营效率，维护者响应时间 <24h
- **Codex++** 今日 0 PR 合并、多个回归问题集中爆发（会话丢失、插件失效），需警惕版本质量失控风险

---

## 3. OpenClaw 在生态中的定位

### 3.1 定位概述

OpenClaw 是生态中**功能最全面、集成渠道最多**的通用型 AI Agent 框架，定位接近"AI Agent 领域的 Spring Boot"——提供开箱即用的多平台接入（Slack/Telegram/WhatsApp/Feishu）、Subagent 编排、Session 管理和安全隔离能力。

### 3.2 与同类项目对比

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **架构定位** | 通用 Agent 框架 | 通用 Agent 框架 | Claude Code 桌面化 | Codex 增强工具 |
| **多平台支持** | ✅ Slack/Telegram/WhatsApp/Feishu | ✅ Matrix/Telegram/Slack | ❌ 纯桌面 | ❌ 浏览器插件 |
| **Subagent 能力** | ✅ 完善但有可靠性问题 | ✅ 有待完善 | ❌ 无 | ❌ 无 |
| **上下文管理** | Session 状态管理为主 | 上下文压缩为特色 | 依赖 Claude Code | 依赖 Codex |
| **安全隔离** | ⚠️ 存在注入风险 | — | — | — |
| **社区规模** | 超大（500 PRs/日） | 大（500 PRs/日） | 中（34 Issues/日） | 中（45 Issues/日） |

### 3.3 OpenClaw 的差异化优势

1. **多渠道统一交付**：唯一同时支持 Slack/Telegram/WhatsApp/Feishu 四大平台的项目，v2026.6.8-beta.1 已实现富文本消息统一投递
2. **Subagent 编排体系**：完整的子 Agent 生命周期管理（虽然 #44925 存在可靠性问题，但架构领先）
3. **Cron 任务调度**：支持定时触发的自动化工作流

### 3.4 需正视的短板

- **P1 Bug 积压严重**：5 个 P1 级 Issue 超过 90 天未解决，包括 Subagent 完成丢失（#44925）、Playwright 崩溃（#45224）
- **安全隔离缺陷**：gh-issues skill 未信任内容注入（#45740）存在生产环境风险
- **PR 审查瓶颈**：299 个 PR 待合并，贡献者响应速度成为推进效率的主要制约

---

## 4. 共同关注的技术方向

以下需求在多个项目中**独立涌现**，反映行业共识性技术挑战：

### 4.1 Web UI / 富文本渲染能力

| 项目 | 具体诉求 | Issue/PR |
|------|----------|----------|
| **Hermes Agent** | Web UI Gateway — 本地浏览器界面，支持流式输出和富文本渲染，对标 Claude Artifact | #501 (14 条评论) |
| **OpenClaw** | Telegram/WhatsApp 富文本消息投递（表格、列表、可展开引用块） | v2026.6.8-beta.1 |
| **cc-haha** | 生成物预览链路优化 | v0.4.2 |

**分析：** 三项目均意识到纯 CLI/TUI 交互的局限性，Web UI 成为下一代交互形态共识。

### 4.2 上下文压缩与内存管理

| 项目 | 具体诉求 | Issue/PR |
|------|----------|----------|
| **Hermes Agent** | 上下文压缩可被网关消息中断（#23975）；压缩后产生孤立会话（#33907）；内存满时静默挂起（#42405） | 多 Issue |
| **OpenClaw** | Session 状态管理混乱（#43747）；会话文件无限增长（#45718） | #43747, #45718 |
| **cc-haha** | /compact 手动压缩显示 100% 但实际未生效（#743） | #743 |

**分析：** 上下文压缩是长会话场景的必备能力，但各项目实现均存在稳定性隐患，尚未出现成熟解决方案。

### 4.3 多供应商接入与配置管理

| 项目 | 具体诉求 | Issue/PR |
|------|----------|----------|
| **Codex++** | 1M 上下文配置失效（#540, #931, #948）；聚合供应商策略轮转 | #540, PR #428 |
| **Hermes Agent** | api_key_env 别名被静默忽略（#44666）；自定义 provider 配置失败（#43586） | #44666, #43586 |
| **cc-haha** | GPT5.5 中转缓存无法命中（#789）；火山引擎 API 需求 | #789, #822 |
| **OpenClaw** | 未信任内容注入风险（#45740）；权限边界模糊（#46786） | #45740, #46786 |

**分析：** 多供应商接入是降低 AI 成本和提升可用性的关键，但配置复杂度高、边界情况多是共同痛点。

### 4.4 桌面端/客户端稳定性

| 项目 | 具体诉求 | Issue/PR |
|------|----------|----------|
| **cc-haha** | 桌面端卡死（#766）；Windows 11 窗口拖动异常（#770）；退出时多个 CMD 窗口闪过（#802） | #766, #770, #802 |
| **Hermes Agent** | Desktop App 会话续期失败、API key 丢失、重复回复（#31977）；远程网关模式不稳定（#38873） | #31977, #38873 |
| **Codex++** | 更新后会话丢失（#916, #920）；插件无法加载（#922） | #916, #922 |

**分析：** 桌面客户端的稳定性问题集中爆发，与 Web/CLI 相比，桌面端面临更复杂的运行环境（OS 兼容性、文件系统权限、进程管理）。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 辅助功能 |
|------|----------|----------|
| **OpenClaw** | 多平台 Agent 编排、Subagent 生命周期、Cron 调度 | 富文本消息投递、Session 持久化 |
| **Hermes Agent** | 上下文压缩、外部记忆服务、Provider 适配 | Matrix/Telegram 集成、Desktop App |
| **cc-haha** | Claude Code 桌面化、H5 远程访问、Auto-dream | Trace 诊断、Provider 排序 |
| **Codex++** | Codex 浏览器增强、供应商切换、图片覆盖层 | Computer Use 适配、插件市场 |

### 5.2 目标用户

| 项目 | 目标用户画像 |
|------|--------------|
| **OpenClaw** | 企业级 AI Agent 开发者，需要多平台接入和 Subagent 编排能力 |
| **Hermes Agent** | 技术能力较强的个人用户，追求上下文管理和记忆能力 |
| **cc-haha** | Claude Code 用户，需要桌面端体验和移动端远程访问 |
| **Codex++** | Codex 用户，需要供应商切换和界面增强功能 |

### 5.3 技术架构差异

| 项目 | 架构特点 | 技术选型 |
|------|----------|----------|
| **OpenClaw** | 模块化 Gateway 架构，支持插件化 Channel 接入 | TypeScript/Node.js |
| **Hermes Agent** | Transport 抽象层，支持多种消息协议 | Python |
| **cc-haha** | Electron 桌面应用 + H5 远程访问 | Electron + Web |
| **Codex++** | 浏览器插件架构，注入式增强 | 浏览器扩展 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：超大规模迭代                                       │
│  ┌─────────────────┐    ┌─────────────────┐                 │
│  │   OpenClaw      │    │ Hermes Agent    │                 │
│  │ 500 PRs/日      │    │ 500 PRs/日      │                 │
│  │ 230 Issues/日   │    │ 132 Issues/日   │                 │
│  └─────────────────┘    └─────────────────┘                 │
│  特征：高速迭代，但 PR 积压严重，Bug 数量多                   │
├─────────────────────────────────────────────────────────────┤
│  第二梯队：垂直领域深耕                                       │
│  ┌─────────────────┐    ┌─────────────────┐                 │
│  │   cc-haha       │    │   Codex++       │                 │
│  │ 34 Issues/日    │    │ 45 Issues/日    │                 │
│  │ 0 PRs/日        │    │ 6 PRs/日        │                 │
│  └─────────────────┘    └─────────────────┘                 │
│  特征：聚焦特定用户群体，cc-haha 质量优先，Codex++ 需关注回归  │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度阶段 | 判断依据 |
|------|-----------|----------|
| **OpenClaw** | 🔄 功能验证 → 生产可用 | 核心功能完善，但 P1 Bug 积压、安全问题未解决 |
| **Hermes Agent** | 🔄 功能验证 → 生产可用 | 上下文压缩、Provider 适配存在架构性缺陷 |
| **cc-haha** | ✅ 生产可用 | 问题闭环率 70.6%，维护者响应 <24h，版本稳定 |
| **Codex++** | ⚠️ 回归风险期 | 版本更新频繁（2 天 3 版），回归问题集中爆发 |

### 6.3 社区运营效率

| 项目 | 指标 | 评价 |
|------|------|------|
| **cc-haha** | 问题闭环率 70.6%，平均响应 <24h | ⭐⭐⭐⭐⭐ 优秀 |
| **OpenClaw** | PR 合并率 ~40%，P1 积压 5 个 | ⭐⭐⭐ 中等 |
| **Hermes Agent** | PR 合并率 ~31%，Bug 20+ 个 | ⭐⭐ 中等偏下 |
| **Codex++** | PR 合并率 0%，回归问题爆发 | ⭐ 需改进 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

**趋势 1：Web UI 成为下一代交互形态共识**

- Hermes Agent 的 #501（Web UI Gateway）获得 14 条评论，是今日热度最高的 Issue
- OpenClaw 推进富文本消息投递（v2026.6.8-beta.1）
- cc-haha 优化生成物预览链路

**趋势 2：上下文压缩从"有"向"稳"演进**

- 各项目均实现上下文压缩，但稳定性问题频发（中断、孤立会话、静默挂起）
- Hermes Agent 的 #26051（压缩失败保留上下文）PR 长期未合并
- 预计未来 1-2 个版本将出现系统性重构

**趋势 3：多供应商接入标准化需求迫切**

- 1M 上下文配置失效、API key 配置失败、缓存无法命中等问题在多项目独立出现
- 聚合供应商策略轮转（Codex++ PR #428）代表用户对成本优化的期待
- 预计将出现跨项目的 Provider 配置最佳实践

**趋势 4：桌面客户端稳定性是下一阶段重点**

- cc-haha、Hermes Agent、Codex++ 均面临桌面端稳定性问题
- Windows 11 兼容性、进程管理、文件系统权限是主要挑战
- cc-haha 的 70.6% 闭环率为行业提供参考

**趋势 5：安全隔离从"可选"向"必选"演进**

- OpenClaw 的 #45740（未信任内容注入）引发社区关注
- gh-issues skill 直接注入未净化内容存在生产环境风险
- 预计安全将成为生产部署的硬性要求

### 7.2 对 AI 智能体开发者的参考建议

| 优先级 | 建议 | 依据 |
|--------|------|------|
| **P0** | 重视上下文压缩稳定性，避免"有但不可用" | 多项目压缩模块问题频发 |
| **P0** | 建立安全隔离机制，特别是外部内容注入防护 | OpenClaw #45740 警示 |
| **P1** | 桌面端需提前测试 Windows 11 兼容性 | cc-haha/Codex++ 均出现兼容性问题 |
| **P1** | Provider 配置需考虑边界情况（别名、缓存、环境变量） | 多项目出现静默失败 |
| **P2** | 关注 Web UI 趋势，提前规划浏览器端交互能力 | Hermes Agent #501 需求强烈 |

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 今日 Issues 总数 | 230 | 132 | 34 | 45 |
| 今日 PRs 总数 | 500 | 500 | 0 | 6 |
| 今日 Releases | 2 | 0 | 1 | 2 |
| PR 合并率 | ~40% | ~31% | — | 0% |
| 问题闭环率 | — | — | **70.6%** | — |
| P1 Bug 积压 | 5 个 | 3 个 | 0 | 多个回归 |
| 社区热度最高 Issue | #48183 (19 评论) | #501 (14 评论) | #766 (14 评论) | #540 (8 评论) |
| 核心痛点 | Session 状态、安全隔离 | 上下文压缩、Provider 配置 | 桌面稳定性 | 会话丢失、1M 上下文 |

---

**报告生成时间：** 2026-06-14  
**分析师：** AI 生态监控系统

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-06-14  
**项目：** NousResearch/hermes-agent  
**数据来源：** GitHub 公开数据

---

## 1. 今日速览

Hermes Agent 在过去 24 小时内保持极高的社区活跃度，共产生 **132 条 Issues 更新**（116 新开/活跃，16 已关闭）和 **500 条 PR 更新**（345 待合并，155 已合并/关闭）。项目整体呈现快速迭代态势，未发布新版本。今日社区讨论焦点集中在 Web UI Gateway 功能提案、上下文压缩稳定性问题以及多平台集成（Matrix、Telegram、Slack）相关 Bug 修复上。大量新 PR 涌入（尤其是 #45925 巨型捆绑包含 86 个 PR），代码审查和合并压力显著。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 Pull Requests：

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#45920](https://github.com/NousResearch/hermes-agent/pull/45920) | fix(agent): return Anthropic-shaped partial stream stub in anthropic_messages mode | CLOSED | 修复流式响应在非连续 content_block 索引时的崩溃问题，防止 AnthropicTransport 错误 |
| [#24306](https://github.com/NousResearch/hermes-agent/pull/24306) | fix: add configurable User-Agent for custom providers | CLOSED | 为自定义 provider 添加可配置 User-Agent，解决 Cloudflare WAF 导致的 403 错误 |
| [#45925](https://github.com/NousResearch/hermes-agent/pull/45925) | Mega bundle: 86 open PRs — 43 AIalliAI + pages 1–2 cherry-picked onto main | OPEN | 巨型捆绑包，整合 86 个开放 PR 以便统一构建和审查 |

**其他值得关注的 Open PRs：**

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#45944](https://github.com/NousResearch/hermes-agent/pull/45944) | feat(memory): manage Hindsight local external service | 新增 Hindsight 本地外部服务的生命周期管理（install/status/restart/logs） |
| [#45941](https://github.com/NousResearch/hermes-agent/pull/45941) | feat(compression): add knowledge checkpoints to compaction | 为上下文压缩添加结构化历史知识检查点和检索索引 |
| [#42922](https://github.com/NousResearch/hermes-agent/pull/42922) | feat(tui): native OpenTUI terminal UI — the new default | 实验性 OpenTUI 替代默认 TUI 引擎 |
| [#37043](https://github.com/NousResearch/hermes-agent/pull/37043) | feat: add interactive effort picker | 新增交互式推理努力选择器及 `/effort` 命令别名 |

---

## 4. 社区热点

以下 Issues 和 PRs 今日讨论最为活跃（按评论数排序）：

### Issues 热议

| 编号 | 标题 | 评论数 | 核心诉求 |
|------|------|--------|----------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | [type/feature] Feature: Web UI Gateway — Local Browser-Based Interface with Streaming, Artifacts & Rich Rendering | 14 | **强烈需求**：用户呼吁增加本地 Web UI 界面，对标 Claude Artifact 功能，支持流式输出和富文本渲染 |
| [#13891](https://github.com/NousResearch/hermes-agent/issues/13891) | [Bug]: Matrix gateway unable to decrypt message | 9 | Matrix 网关长时间运行后出现解密失败，只能重建房间 |
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | Feature Request: Automatic Memory Consolidation (Auto Dream) | 8 | 灵感来自 Claude Code 的自动内存整理机制，定期清理、去重、优化记忆文件 |
| [#36151](https://github.com/NousResearch/hermes-agent/issues/36151) | bedrock_adapter: Opus 4.8 (and 4.7) on Bedrock Converse 400s with "temperature is deprecated" | 7 | Bedrock 路径未正确处理 Opus 模型的采样参数弃用警告 |
| [#31977](https://github.com/NousResearch/hermes-agent/issues/31977) | v0.5.1 Desktop App: Session continuation error, api_key lost, duplicate replies | 6 | macOS 桌面应用会话续期失败、API key 丢失、重复回复 |
| [#44428](https://github.com/NousResearch/hermes-agent/issues/44428) | [Feature]: Support Telegram Bot API 10.1 Rich Messages and rich draft streaming | 5 | 支持 Telegram 10.1 新增的 Rich Messages API |
| [#23975](https://github.com/NousResearch/hermes-agent/issues/23975) | Context compression can be interrupted by gateway messages | 5 | 上下文压缩可能被网关消息中断，导致回退摘要标记 |

### 热点分析

**Web UI Gateway (#501)** 是社区呼声最高的功能请求（14 条评论），用户指出所有竞品都已具备本地 Web 界面，而 Hermes Agent 仅支持 CLI 和各类消息平台，缺乏浏览器端交互能力。这可能成为下一版本的重要方向。

**Matrix 解密问题 (#13891)** 引发较多关注，反映出 Matrix 网关在长期运行场景下的稳定性隐患。

---

## 5. Bug 与稳定性

按严重程度（P1 > P2 > P3）排列的今日报告 Bug：

### P1 - 关键/阻断

| 编号 | 标题 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#13891](https://github.com/NousResearch/hermes-agent/issues/13891) | Matrix gateway unable to decrypt message | CLOSED | ❌ 无 |
| [#36151](https://github.com/NousResearch/hermes-agent/issues/36151) | bedrock_adapter: Opus 4.8/4.7 temperature deprecated error | CLOSED | ❌ 无 |
| [#29205](https://github.com/NousResearch/hermes-agent/issues/29205) | Anthropic fallback can fail after Codex reasoning-only empty turns | CLOSED | ❌ 无 |

### P2 - 高优先级

| 编号 | 标题 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#31977](https://github.com/NousResearch/hermes-agent/issues/31977) | Desktop App: Session continuation error, api_key lost, duplicate replies | OPEN | ❌ 无 |
| [#23975](https://github.com/NousResearch/hermes-agent/issues/23975) | Context compression interrupted by gateway messages | OPEN | ❌ 无 |
| [#31155](https://github.com/NousResearch/hermes-agent/issues/31155) | delegation.model override ignored — subagents always inherit parent model | OPEN | ❌ 无 |
| [#33597](https://github.com/NousResearch/hermes-agent/issues/33597) | Docker restart persists gateway as stopped | OPEN | ❌ 无 |
| [#44312](https://github.com/NousResearch/hermes-agent/issues/44312) | /restart never respawns outside service managers | OPEN | ❌ 无 |
| [#43586](https://github.com/NousResearch/hermes-agent/issues/43586) | model: block with bare 'provider: custom' + key_env ignores API key | OPEN | ❌ 无 |
| [#44666](https://github.com/NousResearch/hermes-agent/issues/44666) | `api_key_env` alias silently ignored in providers entries | OPEN | ❌ 无 |
| [#19245](https://github.com/NousResearch/hermes-agent/issues/19245) | session_search returns empty after crash | OPEN | ❌ 无 |
| [#42405](https://github.com/NousResearch/hermes-agent/issues/42405) | Memory at capacity → 'replace' zero-match retry loop → no response | OPEN | ❌ 无 |
| [#33907](https://github.com/NousResearch/hermes-agent/issues/33907) | Context compression creates orphan sessions missing from state.db | OPEN | ❌ 无 |

### P3 - 中等优先级

| 编号 | 标题 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#38873](https://github.com/NousResearch/hermes-agent/issues/38873) | Hermes Desktop remote gateway mode flaps back to local backend | OPEN | ❌ 无 |
| [#45493](https://github.com/NousResearch/hermes-agent/issues/45493) | Matrix: agent's own thread-initial message lost from next-turn context | OPEN | ❌ 无 |
| [#42366](https://github.com/NousResearch/hermes-agent/issues/42366) | Hermes Desktop chat does not auto-scroll | OPEN | ❌ 无 |
| [#42228](https://github.com/NousResearch/hermes-agent/issues/42228) | Desktop/TUI compressed sessions can move into No workspace | OPEN | ❌ 无 |

**稳定性警示：** 今日共报告 **20+ 个 Bug**，其中大量涉及上下文压缩、内存管理、provider 配置等核心功能。上下文压缩模块（#23975, #33907, #26051）问题尤为突出，建议优先处理。

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本路线图：

| 编号 | 标题 | 优先级 | 社区支持 | 分析 |
|------|------|--------|----------|------|
| [#501](https://github.com/NousResearch/hermes-agent/issues/501) | Web UI Gateway — Local Browser-Based Interface | P1 | 👍 1, 💬 14 | 高需求，已有详细设计草案，可能成为 v0.6.x 主打功能 |
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | Automatic Memory Consolidation (Auto Dream) | P3 | 👍 5, 💬 8 | 灵感来自 Claude Code，社区反响良好 |
| [#44428](https://github.com/NousResearch/hermes-agent/issues/44428) | Support Telegram Bot API 10.1 Rich Messages | P3 | 👍 3, 💬 5 | 跟进 Telegram 最新 API |
| [#19344](https://github.com/NousResearch/hermes-agent/issues/19344) | Planning Consultant — model-initiated frontier-model review via /consult | P3 | 👍 0, 💬 4 | 创新性功能，允许低成本模型在复杂决策时咨询前沿模型 |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Integrate headroom-ai for tool output compression | P3 | 👍 6, 💬 3 | 社区最高点赞功能请求，与 #45941 PR 形成呼应 |
| [#34271](https://github.com/NousResearch/hermes-agent/issues/34271) | Add Mnemosyne to official memory provider documentation | P3 | 👍 3, 💬 4 | 文档完善类请求 |
| [#42199](https://github.com/NousResearch/hermes-agent/issues/42199) | x86_64 (Intel) macOS build for Desktop App | P3 | 👍 0, 💬 3 | 扩大桌面应用兼容性覆盖 |

**路线图信号：** Web UI Gateway 和上下文压缩增强（知识检查点）是当前最明确的功能演进方向。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的用户痛点和使用场景：

### 核心痛点

1. **上下文压缩可靠性不足**
   - 用户反映压缩过程易被网关消息中断（#23975）
   - 压缩后产生孤立会话，丢失于 state.db（#33907）
   - 内存满时 replace 操作零匹配导致静默挂起（#42405）

2. **Provider 配置复杂度高**
   - `api_key_env` 别名被静默忽略（#44666）
   - 自定义 provider 的 API key 配置失败（#43586）
   - 9router 等第三方路由集成困难（#13849）

3. **桌面应用稳定性**
   - macOS 桌面应用会话续期失败、重复回复（#31977）
   - 远程网关模式不稳定，频繁切回本地（#38873）
   - 聊天窗口不自动滚动（#42366）

### 积极反馈

- 用户基于 Hermes Agent 开发了 ThinkCheck 3.0 推理评估引擎集成（#22417），展示生态扩展性
- Telegram 平台集成需求旺盛，推动 API 10.1 支持请求

---

## 8. 待处理积压

以下 Issue 长期未响应或存在架构性限制，建议维护者关注：

| 编号 | 标题 | 创建日期 | 状态 | 积压原因 |
|------|------|----------|------|----------|
| [#9763](https://github.com/NousResearch/hermes-agent/issues/9763) | Cron jobs hardcode skip_memory=True, making external memory providers unusable | 2026-04-14 | OPEN | 架构限制，需修改 cron/scheduler.py 核心逻辑 |
| [#43367](https://github.com/NousResearch/hermes-agent/issues/43367) | cron jobs cannot use memory() tool — skip_memory=True blocks automation surface | 2026-06-10 | CLOSED | 与 #9763 重复，已关闭但根本问题未解决 |
| [#26051](https://github.com/NousResearch/hermes-agent/pull/26051) | fix: preserve context on compression failures | 2026-05-15 | OPEN | PR 长期未合并，上下文压缩核心修复 |
| [#30936](https://github.com/NousResearch/hermes-agent/pull/30936) | fix(slack): suppress explicit NO_REPLY sentinel before chat_postMessage | 2026-05-23 | OPEN | Slack 平台集成 Bug 修复 |

**积压警示：** 上下文压缩和 Cron 任务的 `skip_memory=True` 限制是已知架构问题，需系统性重构而非临时补丁。

---

## 附录：关键链接

- **项目主页：** https://github.com/NousResearch/hermes-agent
- **今日热点 Issue：** [#501](https://github.com/NousResearch/hermes-agent/issues/501) | [#13891](https://github.com/NousResearch/hermes-agent/issues/13891) | [#10771](https://github.com/NousResearch/hermes-agent/issues/10771)
- **巨型 PR 捆绑包：** [#45925](https://github.com/NousResearch/hermes-agent/pull/45925)
- **上下文压缩修复：** [#26051](https://github.com/NousResearch/hermes-agent/pull/26051)

---

*本报告由 AI 基于公开 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-06-14  
**项目**: NanmiCoder/cc-haha (Claude Code Haha)  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

2026-06-14 项目保持高度活跃，共处理 **34 条 Issues**（新开/活跃 10 条，已关闭 24 条），发布 **v0.4.2 稳定版本**。今日未产生新的 Pull Request。社区反馈集中在桌面端窗口行为问题（窗口拖动异常增长）、H5 移动端体验优化、以及第三方 Provider 兼容性方面。整体项目处于快速迭代期，维护者响应及时，多数问题在 24 小时内得到闭环处理。

---

## 2. 版本发布

### ✅ v0.4.2 - Claude Code Haha 稳定版发布

**发布时间**: 2026-06-14  
**版本类型**: 稳定性和桌面体验补丁版本

**主要更新内容**:

| 类别 | 更新项 |
|------|--------|
| **桌面端稳定性** | 修复桌面端卡住问题（CLI 端正常） |
| **窗口行为** | 修复 Windows 11 25h2 下拖动窗口逐渐变大、窗口无限增长问题 |
| **H5 远程访问** | 提升手机 H5 连接稳定性，优化 active turn 排队输入 |
| **可观测性** | Trace 诊断增强，修复 Agent Trace 设置界面显示异常 |
| **Provider/Runtime** | 提升慢速第三方 Provider 兼容性，修复 GPT5.5 中转缓存命中问题 |
| **内置浏览器** | 修复生成物预览链路问题 |
| **新功能** | 服务商列表拖拽排序、Auto-dream 设置入口、Activity 插件/Skill 使用统计 |

**迁移注意事项**: 无破坏性变更，建议所有用户升级至 v0.4.2 以获得最佳桌面体验。

🔗 [Release 页面](https://github.com/NanmiCoder/cc-haha/releases/tag/v0.4.2)

---

## 3. 项目进展

**今日 PR 活动**: 无

> 维护者将主要精力投入在 Issues 响应和 v0.4.2 版本发布上，24 条 Issues 已在今日内关闭，体现了高效的社区运营能力。

---

## 4. 社区热点

以下 Issues 引发最多讨论（按评论数排序）:

### 🔥 #766 - 桌面端卡住，CLI 端正常
- **作者**: @zhbdesign | **评论**: 14 | **状态**: CLOSED
- **核心问题**: 桌面客户端出现卡死现象，但 CLI 模式运行正常
- **诉求分析**: 桌面端与 CLI 端行为不一致，用户需要稳定可靠的 GUI 体验
- 🔗 [查看详情](https://github.com/NanmiCoder/cc-haha/issues/766)

### 🔥 #757 - 会话中 token 用量单位统一
- **作者**: @zhbdesign | **评论**: 5 | **状态**: CLOSED
- **核心问题**: 会话中 token 统计单位显示不统一
- **诉求分析**: 用户需要清晰一致的用量计量单位
- 🔗 [查看详情](https://github.com/NanmiCoder/cc-haha/issues/757)

### 🔥 #770 - Windows 11 25h2 下拖动窗口会逐渐变大
- **作者**: @XianSamx | **评论**: 5 | **👍**: 1 | **状态**: CLOSED
- **核心问题**: Windows 最新版本下窗口拖动行为异常
- **诉求分析**: 窗口交互体验问题，影响日常使用
- 🔗 [查看详情](https://github.com/NanmiCoder/cc-haha/issues/770)

### 💬 #793 - 任务计划模式界面优化
- **作者**: @spellyaohui | **评论**: 4 | **状态**: CLOSED
- **核心问题**: 任务计划模式的最终计划展示界面体验不佳
- **诉求分析**: 用户期待更友好的 UI 设计
- 🔗 [查看详情](https://github.com/NanmiCoder/cc-haha/issues/793)

### 💬 #789 - GPT5.5 中转缓存无法命中
- **作者**: @ghostboyzone | **评论**: 4 | **状态**: CLOSED
- **核心问题**: 通过 OpenAI Response API 配置三方中转使用 GPT5.5，始终无法命中缓存
- **诉求分析**: 成本优化需求，缓存失效导致额外费用
- 🔗 [查看详情](https://github.com/NanmiCoder/cc-haha/issues/789)

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue | 问题描述 | 状态 | 修复情况 |
|-------|----------|------|----------|
| [#766](https://github.com/NanmiCoder/cc-haha/issues/766) | 桌面端卡住，CLI 端正常 | CLOSED | v0.4.2 已修复 |
| [#770](https://github.com/NanmiCoder/cc-haha/issues/770) | Windows 25h2 拖动窗口逐渐变大 | CLOSED | v0.4.2 已修复 |
| [#796](https://github.com/NanmiCoder/cc-haha/issues/796) | 按住标题栏移动窗口，窗口无限增长 | CLOSED | v0.4.2 已修复 |
| [#805](https://github.com/NanmiCoder/cc-haha/issues/805) | 鼠标拖动往左上角蹭，窗口会慢慢变大 | CLOSED | v0.4.2 已修复 |

### 严重程度：中 🟡

| Issue | 问题描述 | 状态 | 修复情况 |
|-------|----------|------|----------|
| [#791](https://github.com/NanmiCoder/cc-haha/issues/791) | 设置-通用-启用系统通知，直接白屏 | CLOSED | 已修复 |
| [#788](https://github.com/NanmiCoder/cc-haha/issues/788) | 点击设置-通用-收集 Agent Trace 后，设置界面显示异常 | CLOSED | v0.4.2 已修复 |
| [#759](https://github.com/NanmiCoder/cc-haha/issues/759) | Sidebar 只显示前 2 条会话 | CLOSED | 已修复 |
| [#743](https://github.com/NanmiCoder/cc-haha/issues/743) | /compact 手动压缩上下文提示成功但显示 100% | CLOSED | 已修复 |
| [#802](https://github.com/NanmiCoder/cc-haha/issues/802) | Windows 退出时多个 CMD 窗口闪过，退出慢 | CLOSED | 已修复 |

### 严重程度：低 🟢

| Issue | 问题描述 | 状态 |
|-------|----------|------|
| [#817](https://github.com/NanmiCoder/cc-haha/issues/817) | 本地 0.3.1 检查更新失败 | OPEN |
| [#813](https://github.com/NanmiCoder/cc-haha/issues/813) | 运行中的时间不动了 | OPEN |
| [#823](https://github.com/NanmiCoder/cc-haha/issues/823) | 使用三方模型导致 toolsearch 不生效 | OPEN |

---

## 6. 功能请求与路线图信号

### 新增功能请求

| Issue | 请求内容 | 评论 | 状态 |
|-------|----------|------|------|
| [#825](https://github.com/NanmiCoder/cc-haha/issues/825) | 添加文生图以及视频模型支持（参考 Agnes AI 平台） | 0 | OPEN |
| [#824](https://github.com/NanmiCoder/cc-haha/issues/824) | 将 thinking 功能做成可配置化 | 0 | OPEN |
| [#822](https://github.com/NanmiCoder/cc-haha/issues/822) | 添加火山引擎 API 接口 | 0 | OPEN |
| [#800](https://github.com/NanmiCoder/cc-haha/issues/800) | 支持 Claude Code AutoDream 功能 | 3 | CLOSED |
| [#799](https://github.com/NanmiCoder/cc-haha/issues/799) | Trace 功能记录 tool 调用耗时 | 3 | CLOSED |
| [#753](https://github.com/NanmiCoder/cc-haha/issues/753) | 服务商列表支持排序功能 | 2 | CLOSED（v0.4.2 已实现） |

**路线图信号分析**:
- **可观测性增强**: Trace 功能完善（tool 调用耗时记录）是明确的优化方向
- **多模态扩展**: 文生图/视频模型支持请求表明用户期待更丰富的 AI 能力
- **国产化需求**: 火山引擎 API 请求反映国内用户群体需求
- **AutoDream 集成**: v0.4.2 已添加 Auto-dream 设置入口，功能即将落地

---

## 7. 用户反馈摘要

### 正面反馈
- v0.4.2 版本对桌面端稳定性和窗口行为进行了系统性修复，用户反馈积极
- 服务商列表拖拽排序功能获得好评（#753 已实现）
- H5 远程访问功能受到移动端用户认可（#767 讨论热烈）

### 痛点与改进建议

| 场景 | 痛点 | 相关 Issue |
|------|------|------------|
| **移动端体验** | 手机 H5 连接不稳定（30 秒断连），部分按钮无法显示 | [#780](https://github.com/NanmiCoder/cc-haha/issues/780), [#764](https://github.com/NanmiCoder/cc-haha/issues/764) |
| **H5 令牌管理** | 令牌每次变化，无法固定，不便于远程访问 | [#767](https://github.com/NanmiCoder/cc-haha/issues/767) |
| **第三方 Provider** | GPT5.5 中转缓存无法命中，增加成本 | [#789](https://github.com/NanmiCoder/cc-haha/issues/789) |
| **Windows 兼容性** | RaiDrive 挂载路径权限处理异常 | [#591](https://github.com/NanmiCoder/cc-haha/issues/591) |
| **交互体验** | 任务计划模式界面展示有待优化 | [#793](https://github.com/NanmiCoder/cc-haha/issues/793) |

---

## 8. 待处理积压

以下 Issues 已开放超过 48 小时仍未响应，需维护者关注:

| Issue | 类型 | 创建时间 | 核心诉求 |
|-------|------|----------|----------|
| [#825](https://github.com/NanmiCoder/cc-haha/issues/825) | enhancement | 2026-06-14 | 文生图/视频模型支持 |
| [#824](https://github.com/NanmiCoder/cc-haha/issues/824) | feature | 2026-06-13 | thinking 配置化 |
| [#823](https://github.com/NanmiCoder/cc-haha/issues/823) | bug | 2026-06-13 | 三方模型 toolsearch 不生效 |
| [#822](https://github.com/NanmiCoder/cc-haha/issues/822) | enhancement | 2026-06-13 | 火山引擎 API |
| [#817](https://github.com/NanmiCoder/cc-haha/issues/817) | bug | 2026-06-12 | 检查更新失败 |
| [#813](https://github.com/NanmiCoder/cc-haha/issues/813) | bug | 2026-06-12 | 运行时间不更新 |

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 34 条/24h | 📈 较高 |
| PR 合并量 | 0 条/24h | ➖ 持平 |
| 版本发布 | 1 个 (v0.4.2) | 🆕 新版本 |
| 问题闭环率 | 70.6% (24/34) | ✅ 优秀 |
| 平均响应时间 | < 24h | ⚡ 快速 |

---

*报告生成时间: 2026-06-14*  
*数据来源: GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-14
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026-06-14，Codex++ 项目保持高度活跃。过去24小时内共产生 **45 条 Issues 更新**（新开/活跃 40 条，关闭 5 条）和 **6 条 PR 更新**（全部待合并）。项目连续发布两个版本（v1.2.7 和 v1.2.6），重点改进了供应商切换逻辑、图片覆盖层功能和界面配色。社区讨论热度集中在 **1M 上下文配置失效**、**更新后会话丢失** 和 **插件市场加载失败** 三大类问题。整体来看，项目迭代节奏稳健，但因近期版本更新频繁，**回归问题（Regression）呈集中爆发态势**，需重点关注。

---

## 2. 版本发布

### v1.2.7

**发布时间：** 2026-06-14

| 类别 | 更新内容 |
|------|----------|
| **新增** | 🔖 新增 Codex 图片覆盖层功能：可在设置中选择本地图片，以半透明层叠加到 Codex 页面上。覆盖层改为注入 data URI，避免 Codex 页面拦截本地 helper 图片请求导致破图。 |
| **改进** | 🔧 重做供应商切换逻辑，切换时使用独立的供应商配置写入流程；优化供应商配置保存与切换校验，降低切换时误用旧配置的风险；调整界面配色并修复浅色模式失效问题；更新版本号与更新检测版本到 1.2.7。 |
| **移除** | 🗑️ 移除 cc-switch 联动相关逻辑与配置协调模块。 |

> ⚠️ **迁移注意：** v1.2.7 移除了 cc-switch 联动逻辑，使用 cc-switch 的用户需确认现有配置是否受影响，建议在升级前备份 `config.toml`。

**链接：** https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.7

### v1.2.6

**发布时间：** 2026-06-14

| 类别 | 更新内容 |
|------|----------|
| **改进** | 适配最新版 Codex 的会话目录结构。 |

**链接：** https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.6

---

## 3. 项目进展

过去24小时内共有 **6 条 PR 处于活跃状态**，全部为待合并状态，尚未有 PR 被合并。值得关注的是以下 PR：

### PR #918 — 适配 Codex++ 1.2.5 的 Windows Computer Use Guard
- **作者：** @YUANLITONGZAI
- **状态：** OPEN（待合并）
- **摘要：** 基于 Codex++ 1.2.5 / upstream main 重新适配的 Windows Computer Use Guard 方案，用于改善 Codex++ 启动 Codex 后 Computer Use 插件不可用的问题。主要在 Windows 启动路径加入 Computer Use prefli...（摘要截断）
- **关联 Issue：** #498 等
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/918

### PR #914 — 修复第一次打开右边栏并选择 Files/Browser/Terminal 会触发错误
- **作者：** @kerzhang
- **状态：** OPEN（待合并）
- **摘要：** 修复 Issue #900：在开启「页面增强」和「模型白名单解锁」后，启动程序并第一次点击 Codex 右侧工作区侧栏的 Files / Browser / Terminal 会触发错误页。核心报错为 `TypeError: this.events[e].clear is not a function`。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/914

### PR #428 — 新增聚合供应商按策略轮转功能
- **作者：** @kokotao
- **状态：** OPEN（待合并）
- **摘要：** 添加聚合中继供应商设置、持久化和活跃供应商处理；添加前端创建/编辑流程，支持成员选择、策略配置和验证消息；通过聚合轮转和故障转移路由协议代理请求。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/428

### PR #939 — Apply preferred Codex++ defaults
- **作者：** @Dautlers
- **状态：** OPEN（待合并）
- **摘要：** 将 Codex++ manager、注入 UI、后端通知和安装程序命名切换为英文界面；默认禁用 Conversation Timeline 并在注入的渲染器中强制关闭；保留会话可靠性调整。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/939

### PR #906 — 增强 Windows Computer Use 启动前检查与 CDP 就绪判定
- **作者：** @YUANLITONGZAI
- **状态：** OPEN（Draft）
- **摘要：** 为 Codex++ 增加 Windows-only 的 Computer Use 启动前检查和启动链路加固，目标是让 Computer Use 在 Codex++ 中更稳定地可用。修复范围集中在启动前配置修复、bundled 插件可用性、CDP 目标判定、已有实例复用路径，以及 bundled runtime 的兼容性兜底。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/906

### PR #907 — ui: align Codex++ injected UI with Codex appearance
- **作者：** @wangbax
- **状态：** OPEN（待合并）
- **摘要：** 修复 Codex++ 注入 UI 在新版 Codex 桌面端中的视觉和交互回归问题。Codex++ 的菜单、设置弹框、侧边栏会话操作和 Upstream worktree 弹框需要跟随 Codex 原生页面的 Appearance、语言、菜单层级和原生控件状态。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/907

---

## 4. 社区热点

以下 Issues 在过去24小时内获得了最多的社区关注（按评论数排序）：

### 🔥 Issue #540 — [Config] deepseekAPI接入无法开启1M上下文
- **作者：** @zxd1019 | **评论：8** | **👍：0**
- **状态：** OPEN | 创建于 2026-06-02，更新于 2026-06-13
- **摘要：** 用户在使用纯 API 模式 + Responses API 协议接入 DeepSeek API 时，无法开启 1M 上下文。配置后实际上下文窗口被限制在 258K 左右。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/540

### 🔥 Issue #916 — [Bug] 更新后会话被清空，无法同步了
- **作者：** @maxjove | **评论：8** | **👍：0**
- **状态：** OPEN | 创建于 2026-06-13，更新于 2026-06-13
- **摘要：** 更新 Codex++ 后会话被清空，Codex 原始的也没有了。管理工具里会话列表有，但 Codex 或 Codex++ 里都没法切换会话了。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/916

### 🔥 Issue #749 — [Feature] product design 插件找不到
- **作者：** @vsic | **评论：7** | **👍：4**
- **状态：** OPEN | 创建于 2026-06-07，更新于 2026-06-14
- **摘要：** 在 Codex 插件列表中找不到 product design 插件，希望更新插件列表。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/749

### 🔥 Issue #920 — [Bug] 对话记录无法正常读取
- **作者：** @someone-tokki | **评论：4** | **👍：0**
- **状态：** OPEN | 创建于 2026-06-13，更新于 2026-06-13
- **摘要：** 更新后会话记录无法正常读取。系统为 macOS，Codex++ 版本 v1.2.5。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/920

### 🔥 Issue #922 — [Bug] 更新之后无法挂载codex++，右上方也无法显示codex++
- **作者：** @yuanxingke-z | **评论：2** | **👍：0**
- **状态：** CLOSED | 创建于 2026-06-13，更新于 2026-06-13
- **摘要：** 更新后无法使用 Codex++，版本 1.2.5 都无法使用。插件无法加载。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/922

---

## 5. Bug 与稳定性

按严重程度排列，以下是今日报告的主要 Bug 和回归问题：

### 🔴 高优先级 — 会话数据丢失 / 无法读取

| Issue | 描述 | 系统 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#916](https://github.com/BigPizzaV3/CodexPlusPlus/issues/916) | 更新后会话被清空，无法同步 | Windows | OPEN | — |
| [#920](https://github.com/BigPizzaV3/CodexPlusPlus/issues/920) | 对话记录无法正常读取 | macOS | OPEN | — |
| [#945](https://github.com/BigPizzaV3/CodexPlusPlus/issues/945) | 更新后 Codex 之前的对话都没了，且无法使用沙盒 | — | OPEN | — |
| [#917](https://github.com/BigPizzaV3/CodexPlusPlus/issues/917) | 更新后会话恢复功能失效 | Windows | OPEN | — |
| [#915](https://github.com/BigPizzaV3/CodexPlusPlus/issues/915) | 更新后对话清空 | — | OPEN | — |
| [#937](https://github.com/BigPizzaV3/CodexPlusPlus/issues/937) | 经常打开 Codex 发现记录没了，需反复重启 | — | CLOSED | — |

> ⚠️ **风险评估：** 会话丢失问题在多个 Issue 中被独立报告，涉及 Windows 和 macOS 双平台，且与最近的版本更新强相关（v1.2.5/v1.2.6），**高度疑似回归问题（Regression）**。建议优先排查 v1.2.6 中对会话目录结构的适配改动。

### 🔴 高优先级 — 1M 上下文配置失效

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#540](https://github.com/BigPizzaV3/CodexPlusPlus/issues/540) | deepseekAPI 接入无法开启 1M 上下文 | OPEN | — |
| [#931](https://github.com/BigPizzaV3/CodexPlusPlus/issues/931) | Custom provider context window capped at 258K, ignoring 1M configuration | OPEN | — |
| [#948](https://github.com/BigPizzaV3/CodexPlusPlus/issues/948) | codex++ 调用 deepseek v4pro，上下文最大容量永远都是 258k | OPEN | — |
| [#857](https://github.com/BigPizzaV3/CodexPlusPlus/issues/857) | 分享一下如何搞定 1M 上下文问题的配置 | OPEN | — |
| [#787](https://github.com/BigPizzaV3/CodexPlusPlus/issues/787) | 增加对大模型 1M 上下文的支持 | OPEN | — |

> ⚠️ **风险评估：** 1M 上下文配置失效是社区长期关注的痛点，涉及多个供应商（DeepSeek、GLM 等）。v1.2.7 虽然改进了供应商切换逻辑，但 Issue #540 和 #931 仍处于 OPEN 状态，说明问题尚未完全解决。

### 🟡 中优先级 — 插件 / 脚本市场问题

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | product design 插件找不到 | OPEN | — |
| [#789](https://github.com/BigPizzaV3/CodexPlusPlus/issues/789) | 更新之后 Codex 上的插件市场用不了 | OPEN | — |
| [#894](https://github.com/BigPizzaV3/CodexPlusPlus/issues/894) | 脚本市场加载失败：failed to decode script market index JSON | OPEN | — |
| [#818](https://github.com/BigPizzaV3/CodexPlusPlus/issues/818) | Bundled marketplace 指向 temp 目录导致 computer-use / browser 等插件缺失 | OPEN | — |

### 🟡 中优先级 — 启动 / 挂载问题

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#922](https://github.com/BigPizzaV3/CodexPlusPlus/issues/922) | 更新后无法挂载 Codex++，插件无法加载 | CLOSED | — |
| [#921](https://github.com/BigPizzaV3/CodexPlusPlus/issues/921) | 更新后重启连接不上 API，502 Bad Gateway | CLOSED | — |
| [#947](https://github.com/BigPizzaV3/CodexPlusPlus/issues/947) | 无法自动检测通过微软商店安装的 Codex (Beta) 版本的路径 | OPEN | — |
| [#509](https://github.com/BigPizzaV3/CodexPlusPlus/issues/509) | 检查不到 Codex beta 的版本 | OPEN | — |

### 🟢 低优先级 — 界面 / 交互问题

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#949](https://github.com/BigPizzaV3/CodexPlusPlus/issues/949) | fast 按钮消失了 | OPEN | — |
| [#938](https://github.com/BigPizzaV3/CodexPlusPlus/issues/938) | 会话无法删除，报 thread not found in local storage | OPEN | — |
| [#946](https://github.com/BigPizzaV3/CodexPlusPlus/issues/946) | 重置背景的设置会将添加过的供应商也一块重置了 | OPEN | — |
| [#842](https://github.com/BigPizzaV3/CodexPlusPlus/issues/842) | DeepSeek API 模式下个性化面板中文 AGENTS.md 显示为乱码 | OPEN | — |
| [#944](https://github.com/BigPizzaV3/CodexPlusPlus/issues/944) | 在 Codex 中 GLM-5.1 无法开启思考 | OPEN | — |

---

## 6. 功能请求与路线图信号

以下功能请求获得了较高的社区关注，可能被纳入下一版本：

### 📌 Issue #749 — product design 插件找不到
- **作者：** @vsic | **评论：7** | **👍：4**
- **诉求：** 在 Codex 插件列表中找不到 product design 插件，希望更新插件列表。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/749

### 📌 Issue #834 — 希望提供强制汉化功能
- **作者：** @mixiaodiao | **评论：1** | **👍：0**
- **诉求：** 公司大规模安装时没条件使用代理，希望程序直接接管汉化下载。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/834

### 📌 Issue #787 — 增加对大模型 1M 上下文的支持
- **作者：** @SmartLearnr | **评论：1** | **👍：0**
- **诉求：** 增加对大模型 1M 上下文的支持。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/issues/787

### 📌 PR #428 — 新增聚合供应商按策略轮转功能（已有实现）
- **作者：** @kokotao
- **状态：** OPEN（待合并）
- **价值：** 该 PR 实现了聚合中继供应商的策略轮转和故障转移功能，是用户长期期待的多供应商负载均衡能力。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/428

### 📌 PR #939 — Apply preferred Codex++ defaults（已有实现）
- **作者：** @Dautlers
- **状态：** OPEN（待合并）
- **价值：** 将 Codex++ 界面切换为英文默认，解决中文环境下的一些兼容性问题。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/939

---

## 7. 用户反馈摘要

从 Issues 评论和内容中提炼的真实用户痛点与使用场景：

### 😤 主要痛点

1. **更新后数据丢失（高发）：** 多名用户在更新 Codex++ 后遭遇会话被清空、对话记录无法读取的问题，严重影响使用体验。用户 @maxjove 反馈："更新后会话被清空了，codex 原始的也没有了，管理工具里会话列表有，但是 codex 或者 codex++ 里都没法切换会话了"。@eyisyou-create 反馈："从 1.1.7 更新到最新版本后，对话全都没有了"。

2. **1M 上下文配置不生效：** 大量用户反馈配置了 1M 上下文后，实际运行时上下文窗口被限制在 258K。用户 @Waking2024 描述："开启一个对话，输入：帮我打开网易云音乐，刚执行几秒钟，就提示上下文已自动压缩"。用户怀疑是 Codex++ 的处理机制引起的。

3. **插件市场不可用：** 多名用户反馈更新后 Codex 上的插件市场无法使用，computer-use、browser 等内置插件不可见。@therain2020 分析了根因："Codex++ 在 config.toml 中写入了显式的 bundled marketplace 路径指向 temp 目录"。

4. **VPN 环境下超时：** 用户 @DaMaoCheng 反馈："最近开着 ++ 运行时，用 VPN 会很容易导致超时，以前是很正常的"。

### 😊 正面反馈

- 用户 @huangpeihp 在 Issue #857 中表示希望分享 1M 上下文的配置方案，说明项目在高级用户群体中有一定口碑。
- 用户 @vsic 提出的 product design 插件需求获得了 4 个 👍，说明项目在专业用户中有一定影响力。

### 💡 使用场景

- **企业部署：** @mixiaodiao 提到公司大规模安装时没有代理条件，期望强制汉化功能。
- **多供应商接入：** 用户使用 DeepSeek、GLM-5.1 等多种自定义供应商，对供应商切换和配置管理

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*