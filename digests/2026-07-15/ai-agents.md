# OpenClaw 生态日报 2026-07-15

> Issues: 126 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-15 02:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-15  
**数据来源：** github.com/openclaw/openclaw

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高活跃度：共处理 **126 条 Issues**（新开/活跃 110 条，关闭 16 条）和 **500 条 PR 更新**（待合并 347 条，已合并/关闭 153 条）。项目整体呈现快速迭代态势，但需关注近期版本（2026.7.1）引入的多起回归 Bug，包括 Gateway 启动失败、SQLite 版本兼容性问题等。今日未发布新版本，维护者正集中修复已发现的严重问题。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时共合并/关闭 **153 条 PR**，以下为重要进展：

### 核心功能修复

| PR | 作者 | 说明 | 状态 |
|---|---|---|---|
| [#107903](https://github.com/openclaw/openclaw/pull/107903) | @steipete | **OpenClaw system-agent delegation + gateway narrowing**（系统代理委托与网关收窄，Phase 2/3） | Open |
| [#106963](https://github.com/openclaw/openclaw/pull/106963) | @SunnyShu0925 | **修复中断的工具调用** - 修复会话中断后遗留的 `tool_use` 块导致后续恢复失败 | Open |
| [#95996](https://github.com/openclaw/openclaw/pull/95996) | @kklouzal | **保持 yield 父轮次非终止状态** - 修复 Codex harness 中 sessions_yield 的生命周期合约 | Open |
| [#98328](https://github.com/openclaw/openclaw/pull/98328) | @SunnyShu0925 | **CLI 会话历史用户标签使用发送者元数据** - 修复群聊中所有用户消息显示相同 `User:` 标签的问题 | Open |

### 渠道与插件修复

| PR | 作者 | 说明 | 状态 |
|---|---|---|---|
| [#107931](https://github.com/openclaw/openclaw/pull/107931) | @steipete | **修复 Mattermost 渠道配置元数据** - 恢复变更后的 bundled channel metadata | Open |
| [#107615](https://github.com/openclaw/openclaw/pull/107615) | @hugenshen | **Google Meet 出勤检查边界修复** - 防止超大 CLI 参数导致 grace 时间为 `Infinity` | Open |
| [#107565](https://github.com/openclaw/openclaw/pull/107565) | @QiuYuang | **拒绝格式错误的 Telnyx 时间戳** - 修复 Webhook 验证接受带后缀时间戳的漏洞 | Open |
| [#107610](https://github.com/openclaw/openclaw/pull/107610) | @hugenshen | **Discord 线程创建前拒绝无效 auto-archive 时长** | Open |

### 安全与稳定性

| PR | 作者 | 说明 | 状态 |
|---|---|---|---|
| [#107611](https://github.com/openclaw/openclaw/pull/107611) | @wanyongstar | **JSON 解析错误日志改进** - 当 JSON 和 JSON5 解析均失败时保留诊断信息 | Open |
| [#106971](https://github.com/openclaw/openclaw/pull/106971) | @kagura-agent | **exec-approvals 同进程同步/异步锁竞争处理** | Open |
| [#107608](https://github.com/openclaw/openclaw/pull/107608) | @hugenshen | **sessions.get 大数值 limit 上限** - 防止 `Number.MAX_SAFE_INTEGER` 导致无界请求 | Open |

### 依赖与维护

| PR | 作者 | 说明 | 状态 |
|---|---|---|---|
| [#104027](https://github.com/openclaw/openclaw/pull/104027) | @dependabot[bot] | **14 项 GitHub Actions 依赖更新** | 待作者处理 |
| [#107926](https://github.com/openclaw/openclaw/pull/107926) | @steipete | **macOS Peekaboo 更新至 Swift 6.2** | Open |
| [#107927](https://github.com/openclaw/openclaw/pull/107927) | @steipete | **CI runner lint 和 chat cycle 修复** | Open |

---

## 4. 社区热点

### 讨论最活跃的 Issues

**1. [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** ⭐ 置顶
- **评论：113** | **👍 81**
- **诉求：** 扩展 OpenClaw 至 Linux 和 Windows 平台，实现与 macOS 相似的功能集
- **分析：** 这是项目长期未解决的功能缺口，社区呼声极高，已有 81 人点赞支持

**2. [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)**
- **评论：18** | **👍 0**
- **诉求：** 按来源（用户命令/网页抓取/第三方技能）对 Agent 记忆条目打标签，防范记忆污染攻击
- **分析：** 安全相关功能请求，与近期隐私和安全热点高度契合

**3. [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)**
- **评论：14** | **👍 4**
- **诉求：** 实现"掩码密钥"系统，允许 Agent 使用 API 密钥但无法查看，防止泄露和提示注入攻击
- **分析：** 安全增强功能，评论数较高表明实现细节存在分歧

**4. [#94518 DeepSeek 缓存命中率骤降](https://github.com/openclaw/openclaw/issues/94518)**
- **评论：9** | **👍 10**
- **诉求：** 升级至 2026.6.x 后，DeepSeek V4 缓存命中率从正常跌至 <10%
- **分析：** 升级后回归问题，影响使用 DeepSeek 的用户

---

## 5. Bug 与稳定性

### 🔴 P0 / P1 严重问题（需立即处理）

| Issue | 标题 | 严重程度 | 状态 | Fix PR |
|---|---|---|---|---|
| [#107607](https://github.com/openclaw/openclaw/issues/107607) | **2026.7.1 gateway 启动失败 - Ubuntu SQLite 版本不兼容** | P0, 崩溃循环 | Open | 无 |
| [#102749](https://github.com/openclaw/openclaw/issues/102749) | **启动时 legacy-state 迁移永不收敛，Gateway 永久拒绝启动** | P0, 崩溃循环 | Closed | 无 |
| [#107727](https://github.com/openclaw/openclaw/issues/107727) | **2026.7.1 更新后 Gateway 因插件元数据冲突拒绝就绪** | P0, 回归 | Closed | 无 |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | **sessions_yield 恢复回复已记录但未投递，导致消息丢失** | P1, 消息丢失 | Open | 无 |
| [#92769](https://github.com/openclaw/openclaw/issues/92769) | **MiniMax M3 via OpenRouter 的 reasoning/reasoning_details 完全丢失** | P1, 回归 | Open | 无 |
| [#91456](https://github.com/openclaw/openclaw/issues/91456) | **Telegram DM 通道在发送超时后保持守卫状态** | P1 | Open | 无 |

### 🟡 P2 问题（影响功能）

| Issue | 标题 | 问题类型 | 状态 |
|---|---|---|---|
| [#90213](https://github.com/openclaw/openclaw/issues/90213) | 2026.6.1 更新后 legacy state 迁移警告持续出现 | 回归 | Open |
| [#90414](https://github.com/openclaw/openclaw/issues/90414) | agentmemory__memory_search 持续返回"index metadata is missing" | 回归 | Open |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | OAuth 失效导致空占位符回复；提供商切换导致重复执行；冷缓存引导丢失上下文 | 级联故障 | Open |
| [#94922](https://github.com/openclaw/openclaw/issues/94922) | 飞书插件在 DM 聊天中错误使用回复模式 | 回归 | Open |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) | 嵌入式 prompt-lock 会话接管在工具失败后中止可见 WebChat 轮次 | 回归 | Open |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（社区强烈诉求）

| Issue | 功能 | 优先级 | 相关 PR | 纳入可能性 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **Linux/Windows 桌面应用** | P2 | 无 | ⭐⭐⭐ 高 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | **掩码密钥系统**（API 密钥使用但不暴露） | P1 | 无 | ⭐⭐⭐ 高 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | **记忆信任标签**（按来源分级） | P2 | 无 | ⭐⭐ 中 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | **exec-approvals 拒绝名单** | P2 | 无 | ⭐⭐ 中 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | **Webhook hook 会话复用**（多轮支持） | P2 | 无 | ⭐⭐ 中 |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | **上下文超限时触发模型回退** | P2 | 无 | ⭐⭐ 中 |

### 渠道与集成增强

| Issue | 功能 | 渠道 |
|---|---|---|
| [#8355](https://github.com/openclaw/openclaw/issues/8355) | 语音通话流式 TTS 管道（句子级 LLM→TTS→音频） | Voice Call |
| [#9764](https://github.com/openclaw/openclaw/issues/9764) | Google Chat 用户 OAuth 支持（反应和媒体上传） | Google Chat |
| [#11460](https://github.com/openclaw/openclaw/issues/11460) | WhatsApp 消息反应查询支持 | WhatsApp |
| [#7406](https://github.com/openclaw/openclaw/issues/7406) | Telegram 论坛主题可读名称显示 | Telegram |

### 开发者体验

| Issue | 功能 |
|---|
| [#8892](https://github.com/openclaw/openclaw/issues/8892) | TUI `--agent` 标志选择会话处理器 |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) | `session:end` 内部钩子事件（集成 Temporal 等工作流编排） |
| [#9409](https://github.com/openclaw/openclaw/issues/9409) | 上下文溢出错误消息增加具体信息 |
| [#8969](https://github.com/openclaw/openclaw/issues/8969) | `skills.validate` CLI 命令 |

---

## 7. 用户反馈摘要

### 核心痛点

1. **版本升级回归严重**
   - 多名用户报告 2026.6.x/2026.7.1 升级后出现功能退化，包括缓存失效、Gateway 启动失败、迁移警告不消失等
   - 建议：维护者应加强升级路径测试，特别是跨版本迁移场景

2. **平台覆盖不完整**
   - Linux/Windows 用户强烈要求官方支持，评论数（113）和点赞数（81）均为最高
   - 现有功能在不同平台表现不一致（如 WSL 测试不稳定）

3. **安全功能缺失**
   - 记忆污染防护、密钥掩码等安全功能请求集中，反映用户对 AI Agent 安全性的关注

4. **会话管理复杂**
   - 多用户反馈 sessions_yield、多轮对话、OAuth 失效处理等场景存在问题
   - 子 agent 超时直接终止导致工作丢失（#6625）

### 满意点

- 现有渠道（Telegram、Discord、飞书等）功能较为完善
- CLI 和 TUI 工具链成熟
- 社区响应积极，维护者（@steipete 等）活跃度高

---

## 8. 待处理积压

以下 Issues 长期未解决或缺乏维护者响应，建议优先关注：

### 长期开放 Issues（>30 天无明确进展）

| Issue | 创建日期 | 最后更新 | 评论数 | 状态 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 2026-07-14 | 113 | Open, 需产品决策 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | 2026-07-14 | 18 | Open, 需维护者审查 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 2026-02-06 | 2026-07-14 | 14 | Open, 需维护者审查 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | 2026-02-01 | 2026-07-14 | 9 | Open, 需维护者审查 |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | 2026-02-05 | 2026-07-14 | 6 | Open, 需产品决策 |

### 待合并的 Fix PR（风险：自动化/安全边界）

| PR | 风险标签 | 状态 |
|---|---|---|
| [#104027](https://github.com/openclaw/openclaw/pull/104027) | 🚨 automation, 🚨 security-boundary | 待作者处理 |
| [#107611](https://github.com/openclaw/openclaw/pull/107611) | 🚨 security-boundary, 🚨 availability | 需证明 |
| [#106971](https://github.com/openclaw/openclaw/pull/106971) | 🚨 security-boundary, 🚨 availability | 需证明 |

---

## 📊 项目健康度指标

| 指标 | 数值 | 评估 |
|---|---|---|
| Issues 活跃度 | 126 条/24h | 🟢 极高 |
| PR 吞吐量 | 500 条/24h | 🟢 极高 |
| 关闭率 | 16/126 (12.7%) | 🟡 需提升 |
| P0/P1 Bug 数 | 6 个 | 🔴 需紧急处理 |
| 版本发布 | 0 | 🟡 无新版本 |
| 维护者响应 | 活跃 | 🟢 良好 |

---

*报告生成时间：2026-07-15 | 数据截止：2026-07-15 23:59 UTC*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-15  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强、快速迭代"**的格局。头部项目（OpenClaw、Hermes Agent）日均处理 500+ PR 更新，展现出极高的社区活跃度，但同时面临严重的版本回归问题——OpenClaw 的 2026.7.1 版本导致 Gateway 启动失败，cc-haha 的 v0.4.8 引发大规模配置丢失投诉。生态整体处于**功能快速扩张期**，安全机制（密钥掩码、记忆信任标签）、跨平台覆盖（Linux/Windows）、插件生态扩展成为多项目共同诉求，但质量巩固与稳定性建设明显滞后于功能发布节奏。

---

## 2. 各项目活跃度对比

| 项目 | Issues/24h | PR/24h | 待合并 PR | Release | 关键风险 |
|------|-------------|--------|-----------|---------|----------|
| **OpenClaw** | 126 (110 活跃/16 关闭) | 500 (347 待/153 合并) | 347 | 无 | 🔴 6 个 P0/P1 Bug，版本回归严重 |
| **Hermes Agent** | 45 (12 活跃/33 关闭) | 500 (441 待/59 合并) | 441 | 无 | 🟡 441 条 PR 积压，P1 Telegram 崩溃 |
| **cc-haha** | 32 (17 活跃/15 关闭) | 0 | 0 | v0.4.8 | 🟡 升级后配置丢失投诉集中 |
| **Codex++** | 35 (31 活跃/4 关闭) | 12 (6 待/6 合并) | 6 | v1.2.36 | 🟢 维护者响应及时，问题快速收敛 |

**数据洞察：** OpenClaw 与 Hermes Agent 规模相近，但 OpenClaw 的关闭率（12.7%）显著低于 Hermes Agent（73%），积压问题更严重。cc-haha 和 Codex++ 规模较小但迭代节奏健康，Codex++ 的 PR 合并效率最高（50%）。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心地位

OpenClaw 被定位为**"核心参照"**项目，其技术路线和架构设计对生态具有标杆意义：

| 维度 | OpenClaw | 生态平均 |
|------|----------|----------|
| 日 PR 吞吐量 | 500 | ~260 |
| 核心功能覆盖 | 系统代理委托、网关收窄、多渠道集成 | 单一渠道或功能增强 |
| Issue 响应速度 | 活跃（@steipete 等维护者） | 差异大 |
| 安全功能布局 | 密钥掩码、记忆信任标签（路线图中） | 多数项目未涉及 |

### 3.2 技术路线差异

- **OpenClaw**：采用**网关中心化架构**，强调 agent 委托、sessions_yield 生命周期管理、跨渠道统一抽象
- **Hermes Agent**：侧重**插件系统可扩展性**，通过声明式插件包支持多技能集成
- **cc-haha**：**桌面客户端定位**，聚焦 Claude Code 集成与本地工作流
- **Codex++**：**增强工具定位**，通过注入层扩展官方 Codex/ChatGPT 功能

### 3.3 社区规模对比

| 项目 | Star 数（估算） | 核心贡献者 | Issue 评论密度 |
|------|----------------|------------|----------------|
| OpenClaw | 高 | @steipete, @SunnyShu0925 等 | 最高（单 Issue 最高 113 评论） |
| Hermes Agent | 高 | 分散式 | 中（单 Issue 最高 10 评论） |
| cc-haha | 中 | 单一维护者 | 中（单 Issue 最高 7 评论） |
| Codex++ | 中 | 单一维护者 | 中（单 Issue 最高 7 评论） |

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映了生态层面的共性痛点：

### 4.1 安全与信任机制

| 需求 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **密钥掩码系统** | OpenClaw (#10659) | API 密钥使用但不暴露，防止提示注入攻击 |
| **记忆信任标签** | OpenClaw (#7707) | 按来源（用户/网页/第三方）对记忆条目分级 |
| **Webhook 认证加固** | Hermes Agent (#51328) | BlueBubbles 时序安全 webhook 认证 |

### 4.2 跨平台覆盖

| 需求 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **Linux/Windows 桌面应用** | OpenClaw (#75) | 81 赞，113 评论，呼声最高 |
| **WSL 模式支持** | Codex++ (#1500) | 会话同步问题待修复 |
| **跨平台配置迁移** | cc-haha (#1000, #959) | Windows 升级后数据目录丢失 |

### 4.3 插件/技能生态

| 需求 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **插件包系统** | Hermes Agent (#64166) | 声明式、可分享的插件集，支持 `pack export/install` |
| **捆绑技能扩展** | Hermes Agent (#43169) | 新增 5 个技能（1password, github-pr-conflict-resolution） |
| **MCP 工具暴露** | Codex++ (#1346) | node_repl MCP 工具未暴露给 Agent |

### 4.4 多模型/多提供商支持

| 需求 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **Gemini 原生搜索** | Hermes Agent (#51449) | Gemini 模型原生 Google Search Grounding |
| **Gemini OAuth** | cc-haha (#1026) | 用户有 Pro 账号但无法使用 |
| **第三方模型兼容** | Codex++ (#564) | DeepSeek 等模型的 guardian_approval 不可用 |
| **远程 Mem0 API** | Hermes Agent (#51894) | 自托管支持 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心定位** | 通用 Agent 框架 | 插件化 Agent 平台 | Claude Code 桌面客户端 | Codex/ChatGPT 增强工具 |
| **目标用户** | 企业/开发者 | 开发者/高级用户 | Claude 用户 | Codex/ChatGPT 用户 |
| **架构特点** | 网关中心化、多渠道抽象 | 插件驱动、声明式扩展 | Electron 桌面应用 | 注入层/中间件 |
| **主要优势** | 功能全面、渠道覆盖广 | 插件生态、可定制性强 | 本地集成、UI 体验 | 轻量、增强官方功能 |
| **主要短板** | 版本稳定性、升级回归 | PR 积压、Desktop 稳定性 | Windows 兼容性 | 功能深度有限 |
| **技术栈** | Python/Go | Python | Electron/TypeScript | Electron/TypeScript |

**关键差异：** OpenClaw 和 Hermes Agent 面向**构建 Agent 系统**的开发者，而 cc-haha 和 Codex++ 面向**使用现有 AI 服务**的终端用户。前者强调可扩展性和集成能力，后者强调易用性和增强体验。

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：极高活跃度                                        │
│  OpenClaw (500 PR/24h)                                      │
│  Hermes Agent (500 PR/24h)                                  │
│  特征：大规模协作，快速迭代，但存在积压和回归问题             │
├─────────────────────────────────────────────────────────────┤
│  第二梯队：中高活跃度                                        │
│  Codex++ (35 Issues/24h, 12 PR/24h)                         │
│  cc-haha (32 Issues/24h, 0 PR/24h)                          │
│  特征：功能迭代稳定，问题响应及时                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 阶段判断 | 依据 |
|------|----------|------|
| **OpenClaw** | 🔴 快速迭代期（质量风险） | P0/P1 Bug 集中，版本回归严重，关闭率仅 12.7% |
| **Hermes Agent** | 🟡 快速迭代期（积压风险） | 441 条 PR 待合并，但 P2 Bug 响应积极 |
| **cc-haha** | 🟡 功能扩张期（稳定性风险） | v0.4.8 发布后配置丢失投诉集中 |
| **Codex++** | 🟢 质量巩固期 | PR 合并率 50%，维护者响应及时，问题快速收敛 |

### 6.3 社区成熟度信号

- **OpenClaw**：Issue 评论密度最高（#75 达 113 条），社区参与深度强，但长期未解决问题多（>30 天无进展）
- **Hermes Agent**：插件系统讨论热烈（#64182），社区驱动演进明显
- **cc-haha**：用户反馈两极分化，痛点集中但正面反馈也有（感谢维护者）
- **Codex++**：中文社区活跃度高，本地化需求突出

---

## 7. 值得关注的趋势信号

### 7.1 安全优先化

**趋势：** 多项目同步推进安全功能（密钥掩码、记忆信任标签、Webhook 认证），反映 AI Agent 从"功能优先"向"安全优先"转型。

**对开发者的价值：** 在设计 Agent 系统时，应将安全机制（输入验证、密钥管理、记忆隔离）纳入核心架构，而非后期补丁。

### 7.2 跨平台一致性需求爆发

**趋势：** Linux/Windows 桌面应用需求在 OpenClaw 社区获得最高点赞（81 赞），cc-haha 的 Windows 配置丢失问题引发集中投诉。

**对开发者的价值：** 跨平台支持已从"nice-to-have"变为"must-have"，建议采用 Electron/Tauri 等跨平台框架，并建立自动化跨平台测试。

### 7.3 插件生态成为竞争焦点

**趋势：** Hermes Agent 的插件包系统提案、OpenClaw 的渠道/插件修复、Codex++ 的 MCP 工具暴露需求，均指向**插件化架构**成为下一代 Agent 平台的核心差异点。

**对开发者的价值：** 构建 Agent 系统时，应设计清晰的插件接口规范，支持第三方扩展，这将是生态护城河的关键。

### 7.4 版本回归问题普遍化

**趋势：** 四个项目均出现升级后功能退化（OpenClaw Gateway 启动失败、cc-haha 配置丢失、Codex++ 便携版启动问题），且修复响应速度参差不齐。

**对开发者的价值：** 建立完善的升级路径测试（特别是跨版本迁移）、灰度发布机制、自动回滚能力，是当前开源项目的普遍短板，也是差异化机会。

### 7.5 多模型/多提供商成为标配

**趋势：** Gemini OAuth 需求、DeepSeek 缓存问题、远程 Mem0 API 支持等，表明用户强烈要求**不被单一模型绑定**。

**对开发者的价值：** 设计抽象层支持多模型切换、缓存共享、fallback 机制，将提升产品的企业采纳率。

---

## 8. 总结与建议

### 8.1 生态格局总结

| 定位 | 项目 | 建议 |
|------|------|------|
| **生态基础设施** | OpenClaw | 优先解决版本回归问题，加强升级路径测试 |
| **插件生态标杆** | Hermes Agent | 加速 PR 积压处理，推进插件包系统落地 |
| **垂直场景深耕** | cc-haha | 重点修复 Windows 稳定性，巩固桌面体验 |
| **增强工具赛道** | Codex++ | 保持快速响应节奏，强化中文社区运营 |

### 8.2 对 AI 智能体开发者的建议

1. **架构选型**：若构建通用 Agent 平台，参考 OpenClaw 的网关架构；若聚焦垂直场景，参考 cc-haha 的客户端集成模式
2. **安全先行**：将密钥管理、记忆隔离、输入验证纳入核心设计
3. **插件优先**：设计清晰的插件接口，支持第三方扩展
4. **跨平台测试**：建立自动化跨平台测试矩阵，避免重蹈 OpenClaw/cc-haha 的回归覆辙
5. **关注 Hermes Agent**：其插件包系统若落地，可能成为生态新的事实标准

---

*报告生成时间：2026-07-15 | 数据截止：2026-07-15 23:59 UTC*  
*分析师：AI Assistant | 仅供参考，以各项目官方披露为准*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-07-15  
**项目：** NousResearch/hermes-agent  
**数据来源：** GitHub Activity (过去24小时)

---

## 1. 今日速览

Hermes Agent 项目在过去24小时保持极高活跃度，共处理 **500 条 PR 更新**（其中 441 条待合并，59 条已合并/关闭）和 **45 条 Issue 更新**（12 条新开/活跃，33 条已关闭）。项目整体处于快速迭代阶段，未发布新版本。社区围绕插件系统扩展、Telegram 平台兼容性和 Desktop 端稳定性展开热烈讨论。值得注意的是，P1 级别的 Telegram 适配器崩溃问题需要优先关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

过去24小时内合并/关闭了 **59 条 PR**，以下是具有代表性的重要进展：

| PR # | 类型 | 描述 | 状态 |
|------|------|------|------|
| [#64707](https://github.com/NousResearch/hermes-agent/pull/64707) | Bug Fix | fix(wecom): 添加 CLOSING 状态到 `_wait_for_handshake` 终端处理器 | OPEN |
| [#64706](https://github.com/NousResearch/hermes-agent/pull/64706) | Bug Fix | fix(telegram): 使轮询网络重试上限可通过环境变量配置 | OPEN |
| [#64705](https://github.com/NousResearch/hermes-agent/pull/64705) | Bug Fix | fix(sessions): 恢复完整的远程 profile 会话列表 | OPEN |
| [#51449](https://github.com/NousResearch/hermes-agent/pull/51449) | Feature | feat(gemini): 支持 Gemini 模型原生 Google Search Grounding | OPEN |
| [#43169](https://github.com/NousResearch/hermes-agent/pull/43169) | Feature | feat(skills): 新增 5 个捆绑技能（1password, github-pr-conflict-resolution 等） | OPEN |
| [#46164](https://github.com/NousResearch/hermes-agent/pull/46164) | Perf | perf(terminal): 短路 scratch 磁盘使用扫描 | CLOSED |

**推进的功能领域：**
- **平台集成**：WeCom、Telegram 适配器稳定性改进
- **AI 模型支持**：Gemini 原生搜索 grounding 功能
- **技能生态**：新增 5 个捆绑技能扩展工具集
- **性能优化**：终端工具磁盘扫描性能改进

---

## 4. 社区热点

### 评论最多的 Issues

| Issue # | 标题 | 评论数 | 热度分析 |
|---------|------|--------|----------|
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | Plugin Interface Expansion — 插件接口扩展追踪 | **10** | 社区驱动的插件系统重构计划，汇集 Discord 讨论中的想法 |
| [#51873](https://github.com/NousResearch/hermes-agent/issues/51873) | Desktop 登录 UI 在连接远程后端时从不显示 | **4** | 严重用户体验问题，影响生产使用 |
| [#55191](https://github.com/NousResearch/hermes-agent/issues/55191) | macOS 渲染器在 ~128K token 压缩阈值时崩溃 | **4** | Electron 渲染进程稳定性问题 |
| [#64674](https://github.com/NousResearch/hermes-agent/issues/64674) | Telegram 适配器在 multiplex_profiles 下启动失败 | **3** | 多 profile 配置下的平台集成问题 |
| [#51288](https://github.com/NousResearch/hermes-agent/issues/51288) | 请求添加 HERMES_TUI_WS_WRITE_TIMEOUT_S 环境变量 | **3** | TUI 网关可配置性需求 |

### 热点分析

**插件系统扩展（#64182）** 是当前最热话题，反映社区对 Hermes 开放性的期待。追踪 Issue 旨在为贡献者提供稳定的插件接口规范，加速长期积压的 PR 落地。

**Desktop 端稳定性** 引发持续关注，登录 UI 缺失（#51873）和渲染器崩溃（#55191）两个问题均获得较多评论，表明桌面客户端是用户痛点集中领域。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### P1 - 紧急

| Issue # | 描述 | 状态 | Fix PR |
|---------|------|------|--------|
| [#64694](https://github.com/NousResearch/hermes-agent/issues/64694) | **Telegram 适配器启动崩溃**：python-telegram-bot 22.6 下 `HTTPXRequest.do_request` 只读属性错误 | OPEN | 无 |

#### P2 - 高优先级

| Issue # | 描述 | 状态 | Fix PR |
|---------|------|------|--------|
| [#64674](https://github.com/NousResearch/hermes-agent/issues/64674) | Telegram 适配器在 `multiplex_profiles: true` 且 bot token 在次级 profile 时启动失败 | OPEN | 无 |
| [#60485](https://github.com/NousResearch/hermes-agent/issues/60485) | Cron 脚本在子进程保持 stdout 管道打开时错误报告超时 | OPEN | 无 |
| [#51853](https://github.com/NousResearch/hermes-agent/issues/51853) | Cron 从受限 profile 绕过工具限制并通过错误 bot 投递 | CLOSED | 已实现 |
| [#51844](https://github.com/NousResearch/hermes-agent/issues/51844) | Stale-stream 恢复调用 OpenAI 客户端重建导致静默失败 | CLOSED | 已实现 |
| [#51820](https://github.com/NousResearch/hermes-agent/issues/51820) | execute_code 沙箱生成的文件对主机文件系统不可见 | CLOSED | 已实现 |

#### P3 - 中优先级

| Issue # | 描述 | 状态 |
|---------|------|------|
| [#51873](https://github.com/NousResearch/hermes-agent/issues/51873) | Desktop 登录 UI 在连接远程后端时从不显示 |
| [#55191](https://github.com/NousResearch/hermes-agent/issues/55191) | macOS 渲染器在 ~128K token 时崩溃循环 |
| [#51278](https://github.com/NousResearch/hermes-agent/issues/51278) | 标题生成将主模型名发送到 fallback provider 端点 |

**稳定性总结：** 今日报告 1 个 P1 级别 Telegram 崩溃问题，需紧急处理。多个 P2 问题已通过 sweeper 标记为 `implemented-on-main`，表明维护响应积极。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 请求 | 潜在影响 | 关联 PR |
|---------|------|----------|---------|
| [#64166](https://github.com/NousResearch/hermes-agent/issues/64166) | **插件包系统**：声明式、可分享的插件集，支持 `pack export/install` | 高 | 无 |
| [#51200](https://github.com/NousResearch/hermes-agent/issues/51200) | 会话导出支持 Markdown/HTML 格式（当前仅 JSONL） | 中 | 无 |
| [#51918](https://github.com/NousResearch/hermes-agent/issues/51918) | Desktop UI 持久化字体大小/缩放设置 | 中 | 无 |
| [#51894](https://github.com/NousResearch/hermes-agent/issues/51894) | 支持远程 Mem0 API 端点（自托管） | 中 | 无 |
| [#51414](https://github.com/NousResearch/hermes-agent/issues/51414) | 辅助模型槽位支持 fallback providers | 中 | 无 |

### 路线图信号

1. **插件生态扩展** 是明确方向，#64182 追踪 Issue 和 #64166 插件包提案表明下一版本可能强化插件系统
2. **多模态/多提供商** 需求明显，Mem0 远程支持和辅助槽位 fallback 反映用户对灵活性的追求
3. **Desktop 客户端完善** 是持续主题，涵盖 UI 设置、稳定性、性能

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 用户反馈 | 来源 |
|------|----------|------|
| **零编码能力用户** | 用户 @qweheerwa-cmd 分享完全通过对话 Hermes 构建了社区网站，表达对工具易用性的高度认可 | [#51718](https://github.com/NousResearch/hermes-agent/issues/51718) |
| **多平台用户** | Telegram 适配器在多 profile 场景下不稳定，影响生产工作流 | [#64674](https://github.com/NousResearch/hermes-agent/issues/64674) |
| **桌面用户** | 字体太小且无法持久化设置，每次重启需重新调整 | [#51918](https://github.com/NousResearch/hermes-agent/issues/51918) |
| **开发者** | 沙箱文件系统隔离导致生成的文件无法访问，破坏工作流 | [#51820](https://github.com/NousResearch/hermes-agent/issues/51820) |

### 满意度指标

- **正面反馈**：社区展示项目（#51718）表明非技术用户也能成功使用
- **改进空间**：Desktop 端体验（登录、渲染稳定性、设置持久化）需重点优化
- **平台兼容性**：Telegram 等第三方平台适配需更健壮

---

## 8. 待处理积压

### 长期未响应的 Issue（>7天无更新）

| Issue # | 优先级 | 描述 | 最后更新 |
|---------|--------|------|----------|
| [#43169](https://github.com/NousResearch/hermes-agent/pull/43169) | P3 | feat(skills): 新增 5 个捆绑技能 | 2026-06-10 |
| [#43166](https://github.com/NousResearch/hermes-agent/pull/43166) | P3 | feat(skills): 新增 5 个捆绑技能 | 2026-06-10 |
| [#46164](https://github.com/NousResearch/hermes-agent/pull/46164) | P3 | perf(terminal): 短路 scratch 磁盘扫描 | 2026-06-14 |
| [#46366](https://github.com/NousResearch/hermes-agent/pull/46366) | P3 | feat(cron): 记录代理 cron 运行的耗时和 token 使用 | 2026-06-15 |

### 积压 PR 提醒

**441 条 PR 待合并**，其中包括多个功能增强和安全修复。建议优先处理：

1. **安全相关 PR**：
   - [#51328](https://github.com/NousResearch/hermes-agent/pull/51328) - BlueBubbles 时序安全 webhook 认证
   - [#51433](https://github.com/NousResearch/hermes-agent/pull/51433) - API Server X-Hermes-Error 头 sanitization

2. **高价值功能 PR**：
   - [#51449](https://github.com/NousResearch/hermes-agent/pull/51449) - Gemini 原生搜索 grounding
   - [#43169](https://github.com/NousResearch/hermes-agent/pull/43169) - 5 个新捆绑技能

---

## 总结

**项目健康度：良好但需关注积压**

- **活跃度**：极高（500 PR 更新/24h）
- **响应速度**：多个 P2 Bug 已标记 `implemented-on-main`
- **待处理**：441 条 PR 积压，P1 Telegram 崩溃问题需紧急修复
- **社区氛围**：积极，插件系统扩展讨论热烈

**建议关注：**
1. 优先解决 #64694 Telegram P1 崩溃问题
2. 加速安全相关 PR 合并
3. Desktop 端稳定性改进（登录 UI、渲染器崩溃）

---

*报告生成时间：2026-07-15 | 数据截止：2026-07-15 23:59 UTC*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-07-15  
**项目**: NanmiCoder/cc-haha (GitHub.com/NanmiCoder/cc-haha)

---

## 1. 今日速览

2026-07-15 项目保持高度活跃，共产生 **32 条 Issue 更新**（17 新开/活跃，15 已关闭），但 **无 PR 合并**。新版本 **v0.4.8** 于当日发布，带来 Grok OAuth、Claude Code Auto 权限模式、内联 Diff 评审等重要功能。然而，升级后出现 **大量配置丢失和启动失败的反馈**，社区反馈热烈，评论数创近期新高。整体项目处于功能快速迭代期，但 **稳定性风险需关注**。

---

## 2. 版本发布

### 🆕 v0.4.8 发布

**发布时间**: 2026-07-15  
**发布类型**: 常规版本（桌面工作流、Provider 兼容性和安全加固）

#### 核心更新内容

| 类别 | 更新项 |
|------|--------|
| **新功能** | Grok 官方 OAuth 登录支持 |
| **新功能** | Claude Code Auto 权限模式 |
| **新功能** | 内联 Diff 评审（Inline Diff Comments） |
| **新功能** | 对话导航目录 |
| **新功能** | 推理强度滑杆（Reasoning Intensity Slider） |
| **Bug 修复** | Windows 升级后数据目录丢失问题 |
| **Bug 修复** | 断线重连后持续"思考"问题 |
| **Bug 修复** | 受限端口启动失败 |
| **Bug 修复** | 权限操作被遮挡 |
| **改进** | 诊断与 Doctor 流程补齐（脱敏、并发写入、损坏日志、安全修复边界） |

#### ⚠️ 迁移注意事项

> **Windows 用户请注意**: 升级前请确认旧安装目录中的用户数据已备份。安装器现已改进，会在升级前识别并保护用户数据。

**相关链接**: https://github.com/NanmiCoder/cc-haha/releases/tag/v0.4.8

---

## 3. 项目进展

### PR 合并情况

**过去 24 小时**: 0 条 PR 更新（待合并: 0，已合并/关闭: 0）

> 📊 **分析**: 无 PR 活动可能与维护者集中处理 Issue 和发布版本有关。建议明日关注是否有对应 Bug 修复的 PR 提交。

---

## 4. 社区热点

### 🔥 评论数最多的 Issues（Top 5）

| 排名 | Issue # | 标题 | 评论数 | 状态 | 链接 |
|:----:|---------|------|:------:|------|------|
| 1 | #1016 | [BUG] 重启桌面终端后，聊天列表都不见了 | 7 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1016) |
| 2 | #1000 | [BUG] 每次升级后配置和记忆全部消失（win11） | 6 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/1000) |
| 3 | #959 | [BUG] 推送更新0.4.5，所有配置及对话全部清空 | 6 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/959) |
| 4 | #961 | [BUG] win11启动失败 | 5 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/961) |
| 5 | #782 | [问题] 桌面端聊天页面右侧添加对话导航目录 | 5 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/782) |

#### 热点分析

1. **#1016 聊天列表丢失**（OPEN）: 用户报告重启桌面终端后对话列表消失，怀疑是配置目录切换或 UI 状态刷新异常导致。这是 **v0.4.8 发布后首个高关注度 Bug**，需优先处理。

2. **#1000/#959 配置丢失**（CLOSED）: 两个 Issue 均反映升级后配置清空问题，已被关闭但未说明解决方案，可能需要确认是否已修复或用户自行解决。

3. **#782 对话导航目录**（CLOSED）: 用户强烈请求的功能，已被关闭，疑似已纳入 v0.4.8。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度排列）

#### 🔴 高优先级（影响核心功能）

| Issue # | 标题 | 状态 | 评论数 | 链接 |
|---------|------|:----:|:------:|------|
| #1032 | 安装0.4.8版本后无法打开（win11） | OPEN | 2 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1032) |
| #1025 | 更新到0.4.8后本地API无法使用（http 401） | OPEN | 4 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1025) |
| #1033 | 工具调用后 Sidecar/CLI 自动重启，丢失工作上下文 | OPEN | 0 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1033) |
| #1031 | 对话和压缩报错（403 H5 access disabled） | OPEN | 0 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1031) |

#### 🟡 中优先级（功能异常）

| Issue # | 标题 | 状态 | 评论数 | 链接 |
|---------|------|:----:|:------:|------|
| #1016 | 重启后聊天列表消失 | OPEN | 7 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1016) |
| #1023 | 文件搜索无法搜索到文件 | OPEN | 4 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1023) |
| #1022 | /status 报错 normalizeAttachmentForAPI is not defined | OPEN | 3 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1022) |
| #1036 | 更新版本时进程状态检测错误 | OPEN | 0 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1036) |

#### 🟢 低优先级（UI/体验问题）

| Issue # | 标题 | 状态 | 评论数 | 链接 |
|---------|------|:----:|:------:|------|
| #1035 | AssistantOutputTargetCard 展示不存在的文件 | OPEN | 0 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1035) |
| #1034 | 活动弹窗历史轮次无法完成 | OPEN | 0 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1034) |

#### ✅ 已关闭的 Bug（今日处理）

| Issue # | 标题 | 状态 | 链接 |
|---------|------|:----:|------|
| #1000 | 升级后配置消失（win11） | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/1000) |
| #959 | 更新后配置清空 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/959) |
| #961 | win11启动失败 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/961) |
| #973 | 电脑重启后设置重置 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/973) |
| #1002 | 关闭电脑后持续思考消耗 token | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/1002) |

> 📊 **Bug 统计**: 今日新开 Bug Issue **17 条**，关闭 **8 条**，净新增 **9 条**。v0.4.8 升级相关问题占比较高。

---

## 6. 功能请求与路线图信号

### ✨ 今日功能请求

| Issue # | 请求内容 | 评论数 | 状态 | 链接 |
|---------|----------|:------:|:----:|------|
| #1026 | 请求增加 Gemini OAuth 登录方式 | 3 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1026) |
| #1019 | 后台 cli 进程资源泄漏风险 | 1 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1019) |
| #1021 | 实现 btw 功能或会话栏直接复制会话 | 1 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/1021) |
| #1007 | 思考程度设置改为滑动条样式 | 1 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/1007) |
| #624 | Agent 工作可视化界面 | 1 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/624) |

#### 路线图信号分析

1. **#1026 Gemini OAuth**: 用户有 Pro 账号但无法使用，暗示 Provider 多元化需求强烈。建议评估是否纳入下一版本。

2. **#1007 思考程度滑动条**: 用户期望类似 Claude/Codex 的滑动条体验。v0.4.8 已实现推理强度滑杆，该 Issue 可关闭。

3. **#624 Agent 可视化**: 长期功能请求，建议评估优先级。

---

## 7. 用户反馈摘要

### 😰 主要痛点

| 痛点 | 涉及 Issue | 影响用户数 |
|------|-----------|:----------:|
| **升级后配置/记忆丢失** | #1000, #959, #1016, #1028 | 多位用户 |
| **Windows 启动失败** | #961, #1032 | Windows 用户 |
| **本地 API 认证失败** | #1025 | 第三方 API 用户 |
| **对话上下文丢失** | #1033 | 高频使用者 |

### 😊 正面反馈

| 反馈内容 | 来源 Issue |
|----------|-----------|
| 感谢作者业余时间创作这么好的 cc 客户端 | #1003 |
| 深色主题适配需求（功能已认可） | #1003 |

### 💡 使用场景

- **开发工作流**: 代码审阅、长对话定位、模型推理强度调整
- **跨平台需求**: Windows/Linux Web UI 模式
- **第三方集成**: 本地 API、Gemini Pro 账号

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issue

| Issue # | 标题 | 创建日期 | 状态 | 链接 |
|---------|------|:--------:|:----:|------|
| #654 | cc-haha 客户端覆盖 ~/.claude/settings.json | 2026-05-29 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/654) |
| #624 | Agent 工作可视化界面 | 2026-05-27 | CLOSED | [查看](https://github.com/NanmiCoder/cc-haha/issues/624) |

> **说明**: 以上 Issue 已关闭但未标注解决方案，建议维护者补充说明以便社区知晓处理结果。

### 📋 建议优先处理

| Issue # | 标题 | 理由 |
|---------|------|------|
| #1016 | 重启后聊天列表消失 | 评论数最高，影响核心体验 |
| #1025 | 本地 API 401 错误 | v0.4.8 升级回归问题 |
| #1032 | 0.4.8 无法打开 | Windows 用户升级阻塞 |

---

## 📈 数据摘要

| 指标 | 数值 |
|------|------|
| 今日 Issue 更新 | 32 条 |
| 新开/活跃 Issue | 17 条 |
| 已关闭 Issue | 15 条 |
| 今日 PR 合并 | 0 条 |
| 新版本发布 | 1 个 (v0.4.8) |
| 评论数最多的 Issue | #1016 (7 条) |
| 今日新增 Bug | 17 条 |
| 今日关闭 Bug | 8 条 |

---

**报告生成时间**: 2026-07-15  
**数据来源**: GitHub NanmiCoder/cc-haha  
**分析师**: AI Assistant

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-07-15  
**项目**: BigPizzaV3/CodexPlusPlus  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Codex++ 项目在过去 24 小时保持高度活跃，共产生 **35 条 Issues 更新**（31 新开/活跃，4 已关闭）和 **12 条 PR 更新**（6 待合并，6 已合并/关闭）。项目于今日发布了 **v1.2.36** 版本，重点修复了 Windows 便携版启动和 macOS 管理器 UI 问题。社区讨论热度较高，中文本地化和第三方模型兼容性成为焦点话题。整体项目健康度良好，维护者响应及时，多个关键 Bug 已通过 PR 修复。

---

## 2. 版本发布

### ✅ v1.2.36 已发布

**发布时间**: 2026-07-15

**主要更新内容**:

| 类别 | 更新说明 |
|------|----------|
| **UI 重构** | 重构 Codex++ 管理工具界面，统一深浅主题、侧栏、卡片、按钮、输入框、圆角与交互状态 |
| **控件优化** | 将布尔设置统一为滑轨切换开关，Codex 增强功能不再使用普通复选框 |
| **Windows 修复** | 修复便携版启动：同时存在 `ChatGPT.exe` 与 `Codex.exe` 时优先启动真实桌面入口 |
| **窗口管理** | 修复重复启动管理工具时无法唤醒已有窗口的问题，避免误激活托盘、IME 等辅助窗口 |
| **macOS 修复** | 修复 AppTranslocation 场景下 launcher 与 manager 互相启动失败的问题 |

**迁移注意事项**: 无破坏性变更，建议所有用户升级。

---

## 3. 项目进展

### 已合并/关闭的 PR（6 条）

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#1509](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1509) | fix: restore forced Chinese locale on latest Codex | ✅ 已合并 | 通过 Electron fetch RPC 写入官方 Codex localeOverride 设置，修复中文切换问题 |
| [#1508](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1508) | fix: 修复 macOS 管理器长页面无法滚动 | ✅ 已合并 | 修复 #1503，解决 macOS 上 UI 显示不全问题 |
| [#1502](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1502) | fix: 修复 relay 配置中模型名称输入框失焦问题 | ✅ 已合并 | 修复 React key 导致的焦点丢失问题（改动 1 行） |
| [#1482](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1482) | fix: repair Windows portable launch and manager activation | ✅ 已合并 | 优先启动 ChatGPT.exe，修复便携版启动问题 |
| [#1494](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1494) | feat(manager): add GitHub Star CTA to script cards | ✅ 已合并 | 脚本市场增加 GitHub Star 引导按钮 |
| [#1489](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1489) | fix: 新建 V2 WebP 桌宠紧急兼容 | ✅ 已合并 | 紧急修复新版 App 创建的 WebP 桌宠不响应问题 |

### 待合并的 PR（6 条）

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#1485](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1485) | fix: 清理供应商同步后的幽灵任务索引 | 🔄 待合并 | 两阶段清理流程，用户确认后执行原子清理 |
| [#1405](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1405) | feat: VLM vision analysis | 🔄 待合并 | 为纯文本模型添加视觉分析拦截，支持调用 VLM API 描述图片 |
| [#1293](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1293) | fix: tolerate Windows reserved launcher ports | 🔄 待合并 | 修复 Windows 保留端口导致的启动失败 |
| [#1496](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1496) | Add audio transcriptions proxy support | 🔄 待合并 | 添加 `/v1/audio/transcriptions` 协议代理路由 |
| [#1500](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1500) | fix: 修复 Codex Desktop WSL 模式会话同步 | 🔄 待合并 | 修复 WSL 模式下会话索引与 Windows 不同步问题 |
| [#1447](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1447) | 完善 GPT-5.6 三模型元数据与 Fast 兼容 | 🔄 待合并 | 同步官方上下文上限回滚（372K→272K），修复 Fast 兼容 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 👍 | 热度分析 |
|---------|------|--------|-----|----------|
| [#1442](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1442) | codex++已配置zh-cn可是无法切换成中文页面 | 7 | 1 | **最高热度** - 用户反馈配置中文后主页面菜单栏仍为英文，管理工具中多处仍是英文。已通过 PR #1509 修复 |
| [#1421](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1421) | Codex更新后主程序变更为ChatGPT.exe，绿色免安装版无法启动 | 5 | 0 | 新版 Codex Desktop 合并到 ChatGPT Desktop，便携版主程序变更导致启动失败。已通过 PR #1482 修复 |
| [#564](https://github.com/BigPizzaV3/CodexPlusPlus/issues/564) | 第三方模型下guardian_approval不可用→自动审批全部拒绝 | 5 | 0 | DeepSeek 等第三方模型使用时报错 `codex-auto-review` 不被支持，根因分析已给出 |
| [#403](https://github.com/BigPizzaV3/CodexPlusPlus/issues/403) | Windows下Chrome Native Host注册项未创建 | 4 | 0 | Chrome 扩展无法连接，Windows 注册表项缺失 |
| [#1492](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1492) | 今天7月14 codex更新后codex++无法打开 | 4 | 0 | 今日最新更新后启动失败，日志显示 bridge 相关事件 |
| [#1477](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1477) | 总是出现"没有可用的文件读取或命令工具" | 4 | 0 | 运行时频繁提示无可用工具，影响任务执行 |

### 热点分析

**核心诉求**:
1. **中文本地化**: 多个用户反馈中文配置不生效（#1442, #1506），维护者已通过 PR #1509 修复
2. **第三方模型兼容**: DeepSeek 等模型在自动审批、guardian_approval 等功能上存在兼容性问题
3. **启动/兼容性**: Windows 便携版、WSL 模式、macOS AppTranslocation 等场景的启动问题

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### 🔴 高优先级（影响核心功能）

| Issue # | 标题 | 状态 | 已有 Fix PR? |
|---------|------|------|--------------|
| [#1492](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1492) | 今天7月14 codex更新后codex++无法打开 | OPEN | ❌ |
| [#1501](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1501) | 点击"在内部浏览器打开"codex直接闪退 | OPEN | ❌ |
| [#1477](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1477) | 总是出现"没有可用的文件读取或命令工具" | OPEN | ❌ |
| [#1507](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1507) | 不能使用 Browser/Computer use | OPEN | ❌ |

#### 🟡 中优先级（影响使用体验）

| Issue # | 标题 | 状态 | 已有 Fix PR? |
|---------|------|------|--------------|
| [#1512](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1512) | 更新后供应商配置列表无法滚动 | OPEN | ❌ |
| [#1511](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1511) | 插件列表不能滚动，删除插件无反应 | OPEN | ❌ |
| [#1480](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1480) | 纯API模式codex生成图片出不来 | OPEN | ❌ |
| [#1457](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1457) | 自动审批无法提供授予权限 | OPEN | ❌ |

#### 🟢 低优先级（UI/配置问题）

| Issue # | 标题 | 状态 | 已有 Fix PR? |
|---------|------|------|--------------|
| [#1510](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1510) | 部分中转站检测调用channel不兼容 | OPEN | ❌ |
| [#1505](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1505) | 脚本市场加载失败 | OPEN | ❌ |

### 已关闭的 Bug

| Issue # | 标题 | 状态 | 修复方式 |
|---------|------|------|----------|
| [#1503](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1503) | macOS UI 显示不全无法滚动 | CLOSED | PR #1508 |
| [#1481](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1481) | v1.2.35 portable Windows bundle 启动失败 | CLOSED | PR #1482 |
| [#1187](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1187) | WIN11最小化后无法再打开管理工具 | CLOSED | PR #1482 |
| [#1486](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1486) | 二狗api注入问题 | CLOSED | - |

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 功能请求 | 评论数 | 需求分析 |
|---------|----------|--------|----------|
| [#1028](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1028) | 希望增加token统计、重置功能 | 3 | 多供应商场景下需要统一查看用量，已有类似 PR #1504 |
| [#731](https://github.com/BigPizzaV3/CodexPlusPlus/issues/731) | Codex++ 不支持图片/视频生成 API | 1 | 需支持 `/v1/images/generations` 和 `/v1/videos` |
| [#575](https://github.com/BigPizzaV3/CodexPlusPlus/issues/575) | 能否添加 homebrew 安装方法 | 1 | 简化 macOS 安装流程 |
| [#1346](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1346) | node_repl MCP 工具未暴露给 Agent | 3 | 影响 browser/chrome/computer-use 插件 |

### 可能纳入下一版本的功能

| PR # | 功能 | 状态 | 纳入可能性 |
|------|------|------|------------|
| [#1405](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1405) | VLM vision analysis | 待合并 | ⭐⭐⭐ 高 - 扩展纯文本模型能力 |
| [#1496](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1496) | audio transcriptions proxy | 待合并 | ⭐⭐⭐ 高 - 完善 API 覆盖 |
| [#1500](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1500) | WSL 模式会话同步 | 待合并 | ⭐⭐ 中 - 修复已知问题 |
| [#1485](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1485) | 供应商同步幽灵任务清理 | 待合并 | ⭐⭐ 中 - 提升稳定性 |

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 痛点描述 | 相关 Issue |
|------|----------|------------|
| **多供应商管理** | 多个供应商需要分别去网站查询用量，非常麻烦 | #1028, #1504 |
| **中文体验** | 配置了中文但多处仍是英文，影响使用 | #1442, #1506 |
| **启动兼容性** | 新版 Codex 桌面合并后便携版无法启动 | #1421, #1481, #1492 |
| **工具可用性** | 运行时频繁提示无可用工具，任务中断 | #1477 |
| **MCP 插件** | node_repl MCP 工具未暴露，导致 browser 等插件不可用 | #1346, #1507 |

### 用户满意的地方

- **UI 重构**: v1.2.36 的界面统一深浅主题、控件优化获得正面反馈
- **脚本市场 Star

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*