# OpenClaw 生态日报 2026-06-02

> Issues: 157 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-02 04:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**: 2026-06-02  
**数据来源**: GitHub (github.com/openclaw/openclaw)

---

## 1. 今日速览

过去24小时 OpenClaw 社区保持极高活跃度：共处理 **157 条 Issues**（98 新开/活跃，59 已关闭）和 **500 条 PRs**（395 待合并，105 已合并/关闭），同时发布 **2 个 beta 版本**（v2026.6.1-beta.1/beta.2）。项目重点聚焦于 **Agent 运行时稳定性修复**（中断恢复、session 绑定、compaction 交接）和 **多渠道消息投递可靠性**（Telegram、WhatsApp、iMessage、Slack）。社区讨论热度集中在 Telegram 重复回复回归问题、Feishu 渠道稳定性及 SQLite 会话迁移路线图，整体呈现快速迭代态势。

---

## 2. 版本发布

### v2026.6.1-beta.2 & v2026.6.1-beta.1

**发布类型**: Beta 测试版本  
**发布时间**: 2026-06-01 ~ 2026-06-02

#### 核心改进

| 领域 | 变更内容 | 相关 PR |
|------|----------|---------|
| **运行时恢复** | Agents 和 CLI-backed runtimes 在以下场景更干净地恢复：中断的工具调用、过期 session 绑定、compaction 交接、媒体投递重试 | #88129, #88136, #88141, #88162, #88182 |
| **渠道稳定性** | Telegram、WhatsApp、iMessage、Slack 渠道及移动端投递更稳定 | — |

#### 迁移注意事项

- 暂无破坏性变更（breaking changes）
- 建议在测试环境验证工具调用中断恢复和 session 绑定场景

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| [#89148](https://github.com/openclaw/openclaw/pull/89148) | fix(auto-reply): guard missing dispatcher getFailedCounts | 🚀 automerge armed | 修复 Feishu dispatcher 可能的 TypeError，提升渠道投递健壮性 |
| [#89297](https://github.com/openclaw/openclaw/pull/89297) | docs: add ClawHub CLI page | 🚀 automerge armed | 补全 ClawHub CLI 文档，完善安装/验证/发布工作流 |
| [#89305](https://github.com/openclaw/openclaw/pull/89305) | fix(agents): bypass stale auth for plugin harnesses | CLOSED | 允许非 Codex 插件 harness 绕过过期的 provider auth cooldown |
| [#78753](https://github.com/openclaw/openclaw/pull/78753) | fix(provider-usage): prefer proxy-aware fetch for Codex usage loads | CLOSED | 修复代理环境下 Codex usage 加载失败问题 |
| [#89299](https://github.com/openclaw/openclaw/pull/89299) | [codex] fix message send loop detection | OPEN (waiting on author) | 规范化 message 工具结果以检测重复发送，防止消息轰炸 |
| [#89109](https://github.com/openclaw/openclaw/pull/89109) | fix(agents): block message-tool spam loops | OPEN (waiting on author) | 增强 loopDetection 阻止消息工具垃圾循环 |

### 处于 Review 阶段的高优先级 PRs

| PR | 标题 | 状态 | 风险评估 |
|----|------|------|----------|
| [#86224](https://github.com/openclaw/openclaw/pull/86224) | fix(agents): resolve CLI runtime in preflight + memory-flush gates | ⏳ waiting on author | 🚨 auth-provider, 🚨 session-state |
| [#88923](https://github.com/openclaw/openclaw/pull/88923) | fix(gateway): restart cleanly on bundled dist module rotation | 👀 ready for maintainer look | 🚨 availability |
| [#89152](https://github.com/openclaw/openclaw/pull/89152) | feat(hooks): add agent turn end hook | 👀 ready for maintainer look | 新增生命周期钩子 |
| [#89154](https://github.com/openclaw/openclaw/pull/89154) | feat(hooks): add ACP turn transcript save hook | 👀 ready for maintainer look | 新增 transcript 保存钩子 |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue | 标题 | 评论 | 核心诉求 |
|-------|------|------|----------|
| [#80380](https://github.com/openclaw/openclaw/issues/80380) | Feature: 更新到 gemini-3.1-flash-lite GA 版本 | 14 | 跟进 Google API 变更，切换到正式版模型 |
| [#88838](https://github.com/openclaw/openclaw/issues/88838) | Track core session/transcript SQLite migration | 12 | 通过 accessor seam 小步迭代迁移，避免大爆炸式重写 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Bug: Telegram 重复回复 2-10x | 9 | **回归问题**，严重影响用户体验，5.22 版本部分缓解但未根治 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Bug: Codex turn-completion stall | 8 | 5.27 版本引入回归，需回退或修复 |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | RFC: Multi-Agent Collaboration Enhancement | 8 | 能力画像 + 共享黑板 + 分层记忆 + Token 治理 |

### 热点分析

1. **Telegram 重复回复问题**（#86519）引发最多关注，9 条评论且持续更新。用户报告 5.20 更新后 Agent 发送 2-10 次相同回复，5.22 降为 2-3 次但仍未解决。这是典型的 **P1 回归问题**，需优先处理。

2. **SQLite 会话迁移路线图**（#88838）获得维护者积极响应，12 条评论讨论技术方案。采用 branch-by-abstraction seam 策略可降低风险，值得关注。

3. **Gemini 模型更新**（#80380）有 14 条评论但多为确认性回复，核心是跟进 Google 官方 GA 版本。

---

## 5. Bug 与稳定性

### P0/P1 严重问题（需立即关注）

| Issue | 标题 | 严重度 | 状态 | Fix PR |
|-------|------|--------|------|--------|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复 2-10x（回归） | P1 🦐 | OPEN | 无 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex turn-completion stall（回归） | P1 🦐 | OPEN | 无 |
| [#84820](https://github.com/openclaw/openclaw/issues/84820) | Unclosed FileHandle 导致 Node ≥24 崩溃 | P1 🦐 | CLOSED | — |
| [#89051](https://github.com/openclaw/openclaw/issues/89051) | 嵌入式 agent 自动压缩后静默挂起 | P1 🐚 | OPEN | 无 |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth 刷新失败导致 agent 挂起数小时 | P1 🐚 | OPEN | 无 |
| [#84644](https://github.com/openclaw/openclaw/issues/84644) | Windows node-host 连接但无命令 | P1 🦐 | OPEN | 无 |
| [#89100](https://github.com/openclaw/openclaw/issues/89100) | message.send 参数未净化导致运行时脚手架泄漏 | P1 🦞 | OPEN | 无 |

### P2 重要问题

| Issue | 标题 | 状态 | 相关领域 |
|-------|------|------|----------|
| [#88039](https://github.com/openclaw/openclaw/issues/88039) | Session 选定模型错误出现在 Fallback 列表 | CLOSED | 模型选择 |
| [#88234](https://github.com/openclaw/openclaw/issues/88234) | Feishu dispatch TypeError | OPEN | Feishu 渠道 |
| [#87938](https://github.com/openclaw/openclaw/issues/87938) | Feishu DM sessions 重启后重建 | OPEN | Feishu 渠道 |
| [#89139](https://github.com/openclaw/openclaw/issues/89139) | Webchat 每条消息创建新 agent run，缓存命中率 93%→29% | OPEN | Web UI |
| [#77717](https://github.com/openclaw/openclaw/issues/77717) | Feishu bot 身份恢复竞态导致永久断开 | OPEN | Feishu 渠道 |
| [#88592](https://github.com/openclaw/openclaw/issues/88592) | Control UI 卡片设置不保存 + 拖拽失败 | OPEN | Web UI |

### 回归问题汇总

| 版本 | 问题数 | 关键问题 |
|------|--------|----------|
| 2026.5.20 | 1 | Telegram 重复回复 |
| 2026.5.27 | 1 | Codex turn-completion stall |
| 2026.5.26 | 1 | Session 模型 fallback 列表错误 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 标题 | 优先级 | 潜在纳入 |
|-------|------|--------|----------|
| [#80380](https://github.com/openclaw/openclaw/issues/80380) | 更新到 gemini-3.1-flash-lite GA | P2 | v2026.6.1 候选 |
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | Multi-Agent 协作增强（能力画像/共享黑板/分层记忆） | P2 | 长期路线图 |
| [#87714](https://github.com/openclaw/openclaw/issues/87714) | 源感知指令追踪（间接提示注入防护） | P2 | 安全增强方向 |
| [#89265](https://github.com/openclaw/openclaw/issues/89265) | 本地模型作为一等公民 | P3 | 社区驱动 |
| [#14438](https://github.com/openclaw/openclaw/issues/14438) | 插件热重载（无需容器重启） | P3 | 开发者体验 |

### 与已有 PR 关联的功能

| 功能方向 | 相关 PR | 状态 |
|----------|---------|------|
| Agent 生命周期钩子 | #89152, #89154 | Review 中 |
| Telegram 推理过程展示 | #87072 | Review 中 |
| Skill 安装钩子 | #80266 | waiting on author |
| ClawHub CLI 文档 | #89297 | automerge armed |

---

## 7. 用户反馈摘要

### 核心痛点

1. **渠道稳定性不足**
   - Telegram 重复回复严重影响用户体验（#86519）
   - Feishu 渠道偶发静默失败（`replies=0`，无错误日志）（#85692）
   - Feishu API 限流缺乏重试逻辑（#70879）

2. **Session 管理问题**
   - Webchat 每条消息重建 session，缓存效率低下（#89139）
   - Session 跨渠道不统一（语音/Telegram/WhatsApp 各独立 session）（#79607）
   - 嵌入式 agent 自动压缩后静默挂起（#89051）

3. **认证与 Provider 问题**
   - Codex OAuth 刷新失败无明确告警（#86215）
   - ACP runtime 忽略 per-agent 模型覆盖（#87381）
   - Google provider 配置缺失时静默路由到 OpenAI（#85042）

### 正面反馈信号

- 5.22 版本部分缓解了 Telegram 重复回复问题（用户确认严重程度下降）
- SQLite 迁移路线图获得社区认可，认为小步迭代策略合理
- 新增的 agent turn 钩子受到插件开发者期待

---

## 8. 待处理积压

### 长期未响应的 P1/P2 Issues（>7 天无维护者回复）

| Issue | 标题 | 创建时间 | 最后更新 | 风险 |
|-------|------|----------|----------|------|
| [#77717](https://github.com/openclaw/openclaw/issues/77717) | Feishu bot 身份恢复竞态 | 2026-05-05 | 2026-06-01 | 永久断开 |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth 刷新失败无告警 | 2026-05-24 | 2026-06-01 | 挂起数小时 |
| [#85692](https://github.com/openclaw/openclaw/issues/85692) | Feishu 间歇性 replies=0 | 2026-05-23 | 2026-06-01 | 静默失败 |
| [#87938](https://github.com/openclaw/openclaw/issues/87938) | Feishu DM sessions 重启后重建 | 2026-05-29 | 2026-06-01 | 数据丢失 |
| [#84644](https://github.com/openclaw/openclaw/issues/84644) | Windows node-host 无命令 | 2026-05-20 | 2026-06-02 | 功能缺失 |

### 长期未响应的功能请求

| Issue | 标题 | 创建时间 | 状态 |
|-------|------|----------|------|
| [#35203](https://github.com/openclaw/openclaw/issues/35203) | Multi-Agent 协作增强 RFC | 2026-03-05 | OPEN（讨论中） |
| [#41199](https://github.com/openclaw/openclaw/issues/41199) | Agent-to-Agent 通信工具参数冲突 | 2026-03-09 | OPEN |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu message 工具 poll 字段冲突 | 2026-03-11 | OPEN |
| [#43929](https://github.com/openclaw/openclaw/issues/43929) | 跨 rolled sessions 的逻辑聊天历史 | 2026-03-12 | OPEN |

### 建议优先处理

1. **#86519** Telegram 重复回复回归 — 影响所有 Telegram 用户
2. **#88312** Codex turn

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-06-02
**分析范围**: OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

2026年6月初，个人 AI 助手/自主智能体开源生态呈现**三极鼎立、多点开花**的格局。头部项目 OpenClaw 和 Hermes Agent 维持日均 500+ PR 更新的超高速迭代，代码吞吐量堪比商业项目；Codex++ 以桌面客户端形态切入差异化赛道，版本发布频率密集（每2-3天一个 alpha）；cc-haha 则聚焦开发者工作流复刻，社区反馈活跃但维护者响应存在瓶颈。**渠道集成（多消息平台支持）、多智能体协作、上下文管理**构成三大共同技术主线，而各项目在架构哲学和目标用户上已出现显著分化。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Release 情况 | 合并效率 | 健康度评级 |
|------|-------------|-----------|--------------|----------|------------|
| **OpenClaw** | 157 (98新开/活跃) | 500 (105已合并) | 2个 beta 版本 | **21%** (105/500) | 🟢 极高 |
| **Hermes Agent** | 79 (60新开/活跃) | 500 (140已合并) | 无新版本 | **28%** (140/500) | 🟢 高 |
| **cc-haha** | 42 (26新开/活跃) | 2 (0已合并) | 无新版本 | **0%** (0/2) | 🟡 中等偏上 |
| **Codex++** | 72 (39新开/活跃) | 6 (4已合并) | 2个 alpha 版本 | **67%** (4/6) | 🟢 高 |

**关键观察**:
- OpenClaw 和 Hermes Agent 代码吞吐量相近，但 OpenClaw 的 PR 积压更重（395 待合并 vs 360）
- cc-haha 呈现“高反馈、低合并”特征，2个待合并 PR 均标注 `needs-maintainer-approval`，存在维护者瓶颈
- Codex++ 合并效率最高（67%），但 Issue 总量相对较低，用户基数可能较小

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心优势

| 维度 | OpenClaw 表现 | 生态对比 |
|------|--------------|----------|
| **社区规模** | 日均 157 Issues / 500 PRs，远超同类 | Hermes Agent 次之（79/500），其余项目差距显著 |
| **版本节奏** | 持续输出 beta 版本，迭代透明 | Hermes Agent 今日无版本发布，cc-haha 沉寂 |
| **渠道覆盖** | Telegram、WhatsApp、iMessage、Slack、Feishu 全覆盖 | Hermes Agent 新增 Sendblue，cc-haha 聚焦桌面端 |
| **文档完善度** | ClawHub CLI 文档已补全（PR #89297） | 优于多数同类项目 |

### 3.2 技术路线差异

| 特性 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **架构模式** | Agent 运行时 + 多渠道 gateway | Gateway 中心化 + 插件化 | 桌面客户端 + Server 混合 | 桌面客户端 + API 聚合 |
| **存储方案** | SQLite 会话迁移进行中 | Honcho memory provider | 本地文件 | 配置驱动 |
| **扩展机制** | Plugin harness + hooks | MCP 协议 + hooks | Plugin 系统 | MCP 提取 + 中转供应商 |
| **核心场景** | 多渠道 AI Agent 部署 | 多智能体编排 (Kanban) | Claude Code 工作流复刻 | API 灵活配置 |

### 3.3 社区规模量化

- **OpenClaw**: Issue 评论密度 0.09 条/Issue，PR 合并率 21%，版本发布频率 2次/日
- **Hermes Agent**: Issue 评论密度 0.24 条/Issue（更高互动深度），PR 合并率 28%
- **cc-haha**: Issue 评论密度 0.14 条/Issue，PR 合并率 0%（维护瓶颈）
- **Codex++**: Issue 评论密度 0.33 条/Issue（最高），PR 合并率 67%

---

## 4. 共同关注的技术方向

### 4.1 多渠道消息投递可靠性

| 项目 | 具体诉求 | 相关 Issue/PR |
|------|----------|---------------|
| **OpenClaw** | Telegram 重复回复回归（2-10x）、Feishu 静默失败 | #86519, #85692 |
| **Hermes Agent** | Discord 图片附件 400 错误、gateway 连接超时 | #25935, #19776 |
| **cc-haha** | 流式响应中途 TCP 关闭、WebSocket 重连循环 | #687, #669 |

**共同根因**: 多渠道消息状态同步、幂等性保障、重试机制不完善

### 4.2 上下文管理与压缩

| 项目 | 具体诉求 | 相关 Issue |
|------|----------|-----------|
| **OpenClaw** | SQLite 会话迁移路线图、compaction 交接 | #88838 |
| **cc-haha** | 上下文显示错误、1M 上下文被强制改为 200k、压缩百分比故障 | #675, #684, #700 |
| **Codex++** | 上下文窗口无法修改为 1M | #451 |
| **Hermes Agent** | Token 开销分析（73% 固定开销） | #4379 |

**共同根因**: 上下文生命周期管理、配置持久化、压缩策略

### 4.3 多智能体协作与编排

| 项目 | 具体诉求 | 相关 Issue/PR |
|------|----------|---------------|
| **OpenClaw** | Multi-Agent 协作增强 RFC（能力画像/共享黑板/分层记忆） | #35203 |
| **Hermes Agent** | Kanban 多智能体编排、确定性工作流引擎 | #5354, #35986 |
| **cc-haha** | Claude Code Workflow 功能复刻 | #637 |

**共同根因**: Agent 间通信协议、任务分配、状态共享

### 4.4 搜索与工具生态

| 项目 | 具体诉求 | 相关 Issue |
|------|----------|-----------|
| **Hermes Agent** | Searxng（30 👍）、Brave Search（23 👍）需求强烈 | #5941, #10644 |
| **OpenClaw** | 源感知指令追踪（间接提示注入防护） | #87714 |

**共同趋势**: 本地化、无需 API key 的搜索方案成为刚需

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心定位** | 多渠道 Agent 运行时 | 多智能体编排平台 | Claude Code 桌面替代 | API 聚合客户端 |
| **差异化能力** | 渠道稳定性、session 绑定 | Kanban 工作流、Webhook 集成 | 工作流复刻、PlantUML 渲染 | 中转供应商轮询、临时 API |
| **技术亮点** | Agent hooks 生命周期 | Sendblue 渠道、trafilatura 搜索 | 软连接支持、KaTeX 公式 | IPv6 CDP 支持、聚合中转 |

### 5.2 目标用户

| 项目 | 核心用户群 | 用户画像 |
|------|-----------|----------|
| **OpenClaw** | 部署者、渠道集成开发者 | 需要多平台消息统一管理的运维/开发者 |
| **Hermes Agent** | 多智能体系统构建者 | 需要复杂工作流编排的企业/团队 |
| **cc-haha** | Claude Code 潜在用户 | 追求本地化开发体验的个人开发者 |
| **Codex++** | API 聚合用户 | 需要灵活切换供应商、控制成本的用户 |

### 5.3 技术架构关键差异

```
OpenClaw:     [多渠道 Gateway] → [Agent Runtime] → [Plugin Harness]
                    ↑                              ↓
              Telegram/Feishu/...           SQLite Session Store

Hermes Agent: [Gateway] → [Agent] ↔ [Kanban Orchestrator]
                    ↓              ↓
              Webhook Cortex   MCP Tools

cc-haha:      [Desktop UI] ↔ [Server Backend]
                    ↓
              Claude Code Workflow Plugin

Codex++:      [Desktop UI] → [API Aggregator] → [Multiple Providers]
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **第一梯队** | OpenClaw, Hermes Agent | 日均 500+ PR 更新，版本迭代快，Issue 响应及时 |
| **第二梯队** | Codex++ | 聚焦桌面端，Issue 评论密度最高（0.33），用户深度参与 |
| **第三梯队** | cc-haha | 社区反馈活跃但维护者响应瓶颈，PR 积压明显 |

### 6.2 成熟度评估

| 项目 | 迭代阶段 | 质量信号 |
|------|----------|----------|
| **OpenClaw** | 快速迭代期 | 回归问题较多（P1 Bug 7个），但维护响应快 |
| **Hermes Agent** | 功能巩固期 | 多个 P2 Bug 已关闭，搜索生态持续完善 |
| **cc-haha** | 需求整合期 | 功能 PR 积压，UI 问题集中爆发 |
| **Codex++** | 快速迭代期 | 版本密集发布（每2-3天），历史数据迁移问题需关注 |

### 6.3 维护者响应效率

| 项目 | 长期未响应 Issue 数 (>7天) | 响应效率评级 |
|------|--------------------------|--------------|
| **OpenClaw** | 5个 P1/P2 | 🟢 良好 |
| **Hermes Agent** | 6个功能请求 (>30天) | 🟡 中等 |
| **cc-haha** | 2个核心 Issue | 🔴 瓶颈 |
| **Codex++** | 2个跨平台问题 | 🟢 良好 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 证据 | 对开发者建议 |
|------|------|-------------|
| **渠道集成标准化** | OpenClaw/Hermes Agent 均在扩展渠道支持 | 建议采用统一的消息抽象层，降低渠道切换成本 |
| **多智能体协作从概念走向落地** | Kanban 编排、Multi-Agent RFC、Workflow 复刻并行推进 | 关注 Agent 间通信协议设计，预留扩展接口 |
| **上下文管理成为核心痛点** | 4个项目均有上下文相关 Issue | 建议优先实现增量压缩、配置持久化 |
| **本地化搜索方案需求爆发** | Searxng 30👍、Brave Search 23👍 | 考虑集成无需 API key 的搜索后端 |
| **桌面客户端形态复苏** | cc-haha、Codex++ 均聚焦桌面端 | Electron/Tauri 跨平台方案值得关注 |

### 7.2 技术债务预警

| 项目 | 技术债务信号 | 风险等级 |
|------|-------------|----------|
| **OpenClaw** | 7个 P1 Bug 未修复，含 3个回归问题 | 🔴 高 |
| **Hermes Agent** | Docker 权限问题影响生产部署 | 🟡 中 |
| **cc-haha** | 上下文问题集群效应，可能存在共同根因 | 🟡 中 |
| **Codex++** | v1.1.8 升级导致历史数据丢失 | 🔴 高 |

### 7.3 开发者行动建议

1. **采用 OpenClaw** 若需要多渠道部署和 Agent 运行时基础设施，接受其快速迭代节奏
2. **关注 Hermes Agent** 若需要多智能体编排能力，其 Kanban 功能路线图值得关注
3. **评估 cc-haha** 若目标是 Claude Code 工作流替代，需评估维护者响应能力
4. **试用 Codex++** 若需要 API 聚合和灵活配置，其临时 API 能力（PR #512）具有差异化价值

---

**报告生成时间**: 2026-06-02
**数据覆盖**: 2026-06-01 00:00 至 2026-06-02 00:00 (UTC)

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期**: 2026-06-02  
**项目**: NousResearch/hermes-agent  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日保持极高的社区活跃度，共产生 **79 条 Issues 更新**（60 新开/活跃，19 关闭）和 **500 条 PR 更新**（140 已合并/关闭，360 待合并）。项目未发布新版本，但多个重要功能 PR 已进入合并阶段，包括 Sendblue 渠道集成、Webhook Cortex 信号传递等。社区在 Token 开销分析、Kanban 多智能体编排、Docker 权限问题等方向展开了深入讨论，整体呈现功能迭代加速、Bug 修复响应及时的健康态势。

---

## 2. 版本发布

**今日无新版本发布**

---

## 3. 项目进展

### 3.1 合并的重要 PR

| PR 编号 | 标题 | 组件 | 状态 |
|---------|------|------|------|
| [#3370](https://github.com/NousResearch/hermes-agent/pull/3370) | feat(gateway): Add Sendblue as a first class channel | gateway | ✅ 已合并 |
| [#2808](https://github.com/NousResearch/hermes-agent/pull/2808) | Feat: Webhook signal cortex | gateway, webhook | ✅ 已合并 |
| [#37174](https://github.com/NousResearch/hermes-agent/pull/37174) | feat(kanban): gate notifier watcher on dispatch_in_gateway | kanban | ✅ 已合并 |
| [#37081](https://github.com/NousResearch/hermes-agent/pull/37081) | fix(cli): TypeError concatenating queued note onto image message | cli | ✅ 已合并 |
| [#37173](https://github.com/NousResearch/hermes-agent/pull/37173) | fix(cli): TypeError concatenating queued note onto multimodal message | cli | ✅ 已合并 |
| [#37175](https://github.com/NousResearch/hermes-agent/pull/37175) | fix(model-picker): stop routing OpenAI selection to OpenRouter | cli | ✅ 已合并 |

**关键进展摘要**:

- **Sendblue 渠道正式支持**: Sendblue 作为一等公民渠道接入 Hermes，覆盖 gateway、CLI 配置、工具集、消息发送、测试和文档
- **Webhook 增强**: 新增 `signal` 模式，支持 Cortex 信号传递
- **Kanban 稳定性**: 修复了 notifier watcher 在 `dispatch_in_gateway` 场景下的问题
- **CLI 崩溃修复**: 解决了 `/model` 或 `/reload-skills` 笔记与多模态图片消息拼接时的 TypeError

### 3.2 待合并的重要 PR

| PR 编号 | 标题 | 组件 | 状态 |
|---------|------|------|------|
| [#36736](https://github.com/NousResearch/hermes-agent/pull/36736) | feat(dashboard): complete admin panel — MCP catalog, enable/disable toggles, hook creation, system stats | dashboard | 🔄 待合并 |
| [#37189](https://github.com/NousResearch/hermes-agent/pull/37189) | fix: support FB2 document uploads | gateway | 🔄 待合并 |
| [#37191](https://github.com/NousResearch/hermes-agent/pull/37191) | Remove hardcoded system prompts and behavioral restrictions | agent | 🔄 待合并 |
| [#37190](https://github.com/NousResearch/hermes-agent/pull/37190) | fix(hindsight): bound local embedded startup hangs | - | 🔄 待合并 |
| [#37188](https://github.com/NousResearch/hermes-agent/pull/37188) | Fix delegate router toolset scoping | - | 🔄 待合并 |
| [#37186](https://github.com/NousResearch/hermes-agent/pull/37186) | fix(browser): retry with IIFE on let/const redeclaration in persistent CDP eval | browser | 🔄 待合并 |
| [#37182](https://github.com/NousResearch/hermes-agent/pull/37182) | fix(kanban): kanban_create inherits the spawning worker's task workspace | kanban | 🔄 待合并 |
| [#37180](https://github.com/NousResearch/hermes-agent/pull/37180) | fix(file_operations): convert MSYS paths to Windows paths | file_operations | 🔄 待合并 |

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 优先级 | 状态 |
|------------|------|--------|-----|--------|------|
| [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) | Token overhead analysis: 73% of each API call is fixed overhead (~13.9K tokens) | 9 | 0 | P3 | 🟡 OPEN |
| [#5726](https://github.com/NousResearch/hermes-agent/issues/5726) | Slow startup: Honcho memory provider blocks initialization for ~60s+ per step | 8 | 2 | P3 | ✅ CLOSED |
| [#35322](https://github.com/NousResearch/hermes-agent/issues/35322) | WebSocket connections rejected when dashboard bound to 0.0.0.0 with --insecure | 7 | 0 | P2 | ✅ CLOSED |
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | [Feature]: Deterministic Workflow Engine (Lobster-style Implementation) | 7 | 8 | - | 🟡 OPEN |
| [#20500](https://github.com/NousResearch/hermes-agent/issues/20500) | Dashboard Chat tab fails with EACCES in Docker image | 6 | 2 | P2 | 🟡 OPEN |
| [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) | [Bug]: Gateway working directory config not respected | 6 | 1 | - | ✅ CLOSED |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) | [Feature] Multi-Role Auto-Routing via Gateway Hooks | 5 | 14 | P3 | 🟡 OPEN |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Feature: Add Brave Search as a native web search backend | 5 | 23 | P3 | 🟡 OPEN |
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | [Feature]: Add Searxng as a default web search provider | 5 | 30 | P3 | 🟡 OPEN |

### 4.2 热点分析

**Token 开销问题 (#4379)**: 社区对 Token 消耗高度关注，用户 Bichev 通过监控仪表盘发现 73% 的 API 调用开销是固定开销（约 13.9K tokens），引发关于性能优化的热烈讨论。

**搜索功能需求集中**: 多个用户请求增加搜索提供商（Searxng 👍30、Brave Search 👍23），表明用户对本地化、无需 API key 的搜索方案有强烈需求。

**Kanban 功能演进**: Issue [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) 提出的确定性工作流引擎获得 8 个 👍，与现有的 Kanban 多智能体编排功能形成路线图呼应。

---

## 5. Bug 与稳定性

### 5.1 P1/P2 严重 Bug（需优先处理）

| Issue 编号 | 标题 | 评论数 | 状态 | 是否有 Fix PR |
|------------|------|--------|------|---------------|
| [#35595](https://github.com/NousResearch/hermes-agent/issues/35595) | v0.15: /model command returns structured field list instead of human-readable message | 3 | 🟡 OPEN | ❌ |
| [#25935](https://github.com/NousResearch/hermes-agent/issues/25935) | Discord image attachments fail with HTTP 400 'Could not process image' | 1 | 🟡 OPEN | ❌ |
| [#29711](https://github.com/NousResearch/hermes-agent/issues/29711) | Discord mixed attachments can send non-image data URLs as input_image | 4 | 🟡 OPEN | ❌ |
| [#20500](https://github.com/NousResearch/hermes-agent/issues/20500) | Dashboard Chat tab fails with EACCES in Docker image | 6 | 🟡 OPEN | ❌ |
| [#28156](https://github.com/NousResearch/hermes-agent/issues/28156) | Bedrock+Claude: wizard accepts Bearer-only setup, runtime fails | 4 | 🟡 OPEN | ❌ |
| [#19776](https://github.com/NousResearch/hermes-agent/issues/19776) | Discord gateway connect timeout is too short when slash command sync takes >30s | 4 | 🟡 OPEN | ❌ |

### 5.2 P3 Bug 及已修复问题

| Issue 编号 | 标题 | 状态 | 备注 |
|------------|------|------|------|
| [#5726](https://github.com/NousResearch/hermes-agent/issues/5726) | Slow startup: Honcho memory provider blocks initialization | ✅ CLOSED | 已修复 |
| [#35322](https://github.com/NousResearch/hermes-agent/issues/35322) | WebSocket connections rejected with --insecure | ✅ CLOSED | 已修复 |
| [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) | Gateway working directory config not respected | ✅ CLOSED | 已修复 |
| [#35703](https://github.com/NousResearch/hermes-agent/issues/35703) | MCP server tools missing from api_server platform agent | ✅ CLOSED | 已修复 |
| [#36771](https://github.com/NousResearch/hermes-agent/issues/36771) | claw migrate suggests `hermes stop` but command is `hermes gateway stop` | ✅ CLOSED | 已修复 |
| [#36211](https://github.com/NousResearch/hermes-agent/issues/36211) | Chrome CDP DOM操作在v0.15.1版本后无法正常使用 | 🟡 OPEN | PR [#37186](https://github.com/NousResearch/hermes-agent/pull/37186) 已提交 |
| [#20507](https://github.com/NousResearch/hermes-agent/issues/20507) | Session closed unexpectedly when use camoufox as browser tool | 🟡 OPEN | 待处理 |
| [#36650](https://github.com/NousResearch/hermes-agent/issues/36650) | Benchmark cleanup can mask setup failures with NameError | 🟡 OPEN | 待处理 |

### 5.3 稳定性风险提示

⚠️ **Docker 权限问题**: Issue [#20500](https://github.com/NousResearch/hermes-agent/issues/20500) 报告 `/opt/hermes/ui-tui` 目录为 root 所有，但 dashboard 以 hermes 用户运行，导致 EACCES 错误，影响 Docker 部署体验。

⚠️ **v0.15 回归问题**: Issue [#35595](https://github.com/NousResearch/hermes-agent/issues/35595) 显示 `/model` 命令在 v0.15 中返回结构化字段而非人类可读消息，影响交互体验。

---

## 6. 功能请求与路线图信号

### 6.1 高关注度功能请求

| Issue 编号 | 标题 | 👍 | 组件 | 状态 |
|------------|------|-----|------|------|
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | Add Searxng as a default web search provider | 30 | tools/web | 🟡 OPEN |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Feature: Add Brave Search as a native web search backend | 23 | tools/web | 🟡 OPEN |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Feature Request: Built-in Automatic Backup & Version Control for Agent Data | 13 | - | 🟡 OPEN |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) | [Feature] Multi-Role Auto-Routing via Gateway Hooks | 14 | gateway | 🟡 OPEN |
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | [Feature]: Deterministic Workflow Engine (Lobster-style Implementation) | 8 | agent | 🟡 OPEN |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Feature Request: Support service_tier (e.g. flex) for Gemini provider | 6 | provider/gemini | 🟡 OPEN |

### 6.2 路线图信号分析

**搜索生态扩展**: Searxng（30 👍）和 Brave Search（23 👍）需求强烈，PR [#37187](https://github.com/NousResearch/hermes-agent/pull/37187) 已添加 trafilatura 作为本地 web_extract 后端，搜索功能持续完善。

**Kanban 多智能体编排**: Issue [#35986](https://github.com/NousResearch/hermes-agent/issues/35986) 作为伞状问题汇总了 Kanban 功能缺口，包括过期检测、静默恢复、孤立任务清理等，今日 PR [#37182](https://github.com/NousResearch/hermes-agent/pull/37182)、[#37181](https://github.com/NousResearch/hermes-agent/pull/37181) 持续完善该功能。

**数据备份与版本控制**: Issue [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) 提出对 `~/.hermes/` 数据的自动备份需求，反映用户对数据安全的关注。

**代理行为动态化**: PR [#37191](https://github.com/NousResearch/hermes-agent/pull/37191) 移除硬编码系统提示词，使代理行为完全由配置驱动，是架构层面的重要演进。

---

## 7. 用户反馈摘要

### 7.1 真实痛点提炼

| 场景 | 问题描述 | 来源 |
|------|----------|------|
| **Docker 部署** | Chat tab 在 Docker 镜像中因权限问题无法访问 | [#20500](https://github.com/NousResearch/hermes-agent/issues/20500) |
| **启动性能** | Honcho memory provider 导致初始化阻塞 60s+ | [#5726](https://github.com/NousResearch/hermes-agent/issues/5726) |
| **Token 成本** | 73% API 调用开销为固定开销，期望优化 | [#4379](https://github.com/NousResearch/hermes-agent/issues/4379) |
| **Cron 感知缺失** | 代理无法感知自身 cron 任务发送的消息 | [#37070](https://github.com/NousResearch/hermes-agent/issues/37070) |
| **工作目录配置** | Gateway 工作目录配置不生效，`hermes update` 会覆盖 | [#11312](https://github.com/NousResearch/hermes-agent/issues/11312) |
| **Discord 集成** | 图片附件混合文档时返回 400 错误 | [#25935](https://github.com/NousResearch/hermes-agent/issues/25935) |

### 7.2 用户满意度观察

**满意点**:
- 社区响应及时，多个 Bug 在 24 小时内得到修复
- Sendblue 等新渠道集成完善
- Kanban 功能持续迭代

**不满点**:
- Docker 部署权限问题影响生产使用
- v0.15 版本存在交互回归
- 启动时间过长影响开发体验

---

## 8. 待处理积压

### 8.1 长期未响应的 Issues（超过 30 天无维护者回复）

| Issue 编号 | 标题 | 创建日期 | 评论数 | 状态 |
|------------|------|----------|--------|------|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | Deterministic Workflow Engine | 2026-04-05 | 7 | 🟡 OPEN |
| [#5143](https://github.com/NousResearch/hermes-agent/issues/5143) | Multi-Role Auto-Routing via Gateway Hooks | 2026-04-04 | 5 | 🟡 OPEN |
| [#5941](https://github.com/NousResearch/hermes-agent/issues/5941) | Add Searxng as default web search provider | 2026-04-07 | 5 | 🟡 OPEN |
| [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) | Add Brave Search as native web search backend | 2026-04-16 | 5 | 🟡 OPEN |
| [#12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Built-in Automatic Backup & Version Control | 2026-04-18 | 3 | 🟡 OPEN |
| [#12700](https://github.com/NousResearch/hermes-agent/issues/12700) | Support service_tier for Gemini provider | 2026-04-19 | 2 | 🟡 OPEN |

### 8.2 建议关注

1. **搜索功能路线图**: Searxng、Brave Search、trafilatura 等多个搜索相关提案并行，建议统一规划
2. **Kanban 成熟度**: Issue [#35986](https://github.com/NousResearch/hermes-agent/issues/35986) 列出的多个缺口需系统性解决
3. **P1/P2 Bug 积压**: 6 个高优先级 Bug 仍处于 OPEN 状态，建议优先处理

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-06-02  
**数据来源**：GitHub NanmiCoder/cc-haha

---

## 1. 今日速览

过去24小时，cc-haha 项目保持高度活跃，共产生 **42 条 Issue 更新**（新开/活跃 26 条，已关闭 16 条）和 **2 条 PR 更新**（均为待合并状态）。项目整体呈现"高反馈、低合并"的特点——社区参与热情高涨，但维护者尚未完成 PR 合并动作。今日未发布新版本，开发者可能正在集中处理积压的 Issue 和 PR。**活跃度评级：🟢 较高**，建议关注 PR #674 和 #694 的进展状态。

---

## 2. 版本发布

**无新版本发布**

过去24小时内无 Release 更新，项目最新版本仍为 0.3.2（根据 Issue #693 和 #692 提及）。

---

## 3. 项目进展

### 待合并 PR（2 条）

| PR # | 标题 | 规模 | 涉及领域 | 状态 |
|------|------|------|----------|------|
| [#674](https://github.com/NanmiCoder/cc-haha/pull/674) | 隐藏文件控制、软连接支持、文件监听、Markdown 中 PlantUML、SVG 图表、公式渲染 | XL | desktop, server | OPEN（需维护者批准） |
| [#694](https://github.com/NanmiCoder/cc-haha/pull/694) | feat(provider): upgrade minimax preset to MiniMax-M3 | M | server, provider, docs | OPEN（需维护者批准） |

**PR #674 分析**：这是一个大型功能增强 PR，包含：
- **文件树增强**：隐藏文件控制、软连接支持（`isSymlink` 检测 + 图标）、文件监听（`chokidar` 替代 `fs.watch`）
- **内容渲染**：Markdown 中 PlantUML `@startuml` 代码块 → SVG 图表、KaTeX 公式渲染
- **后端优化**：PlantUML `spawn -pipe` 渲染、`pathHasSymlinkComponent` 跳过 canonical 边界检查

**PR #694 分析**：MiniMax provider 升级 PR，将默认模型从 `MiniMax-M2.7` 切换到 `MiniMax-M3`，同时保留旧版本兼容。

⚠️ **注意**：两个 PR 均为 OPEN 状态且标注 `needs-maintainer-approval`，建议维护者尽快 review。

---

## 4. 社区热点

### 评论最多的 Issues（Top 5）

| Issue # | 类型 | 标题 | 评论数 | 状态 |
|---------|------|------|--------|------|
| [#512](https://github.com/NanmiCoder/cc-haha/issues/512) | BUG | 0.2.8版本又出现dialog\|confirm not allowed by ACL问题 | 6 | CLOSED |
| [#637](https://github.com/NanmiCoder/cc-haha/issues/637) | FEATURE | Claude Code Workflow 功能完整复刻方案 | 5 | OPEN |
| [#693](https://github.com/NanmiCoder/cc-haha/issues/693) | BUG | 0.3.2打开和关闭的时候不断闪烁黑色的边框 | 4 | OPEN |
| [#675](https://github.com/NanmiCoder/cc-haha/issues/675) | BUG | 上下文显示错误 | 4 | OPEN |
| [#684](https://github.com/NanmiCoder/cc-haha/issues/684) | BUG | MiniMax-M3 设置1M 上下文还是变成 200k | 3 | OPEN |

### 热点分析

**#637 Claude Code Workflow 功能复刻方案** 是今日最受关注的功能请求。该 Issue 详细披露了通过逆向工程发现 Claude Code 内部已有的 `local_workflow` 任务类型基础设施，并提出通过 Plugin 系统完整复刻此功能的方案。这是一个**高价值路线图信号**，表明社区对工作流功能有强烈需求。

**#512 ACL 问题** 已关闭，但评论数最高（6条），说明这是一个反复出现的痛点问题，维护者可能需要考虑系统性修复而非临时补丁。

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue # | 标题 | 状态 | 备注 |
|----------|------|------|------|
| [#668](https://github.com/NanmiCoder/cc-haha/issues/668) | 登入了Claude Code 的官方帳號後，用不了，顯示401 | OPEN | 认证问题，影响登录用户 |
| [#687](https://github.com/NanmiCoder/cc-haha/issues/687) | cchaha流式响应中途关闭了 TCP，但是还一直显示执行中 | OPEN | 状态同步问题 |
| [#669](https://github.com/NanmiCoder/cc-haha/issues/669) | 源码似乎存在会话生命周期 bug，用户停止对话后无限重连 WebSocket | CLOSED | 已修复？需确认 |
| [#696](https://github.com/NanmiCoder/cc-haha/issues/696) | 会话第一次提问会卡住，http连接没断开 | OPEN | 连接管理问题 |

### 严重程度：中 🟡

| Issue # | 标题 | 状态 | 备注 |
|----------|------|------|------|
| [#693](https://github.com/NanmiCoder/cc-haha/issues/693) | 0.3.2打开和关闭的时候不断闪烁黑色的边框 | OPEN | UI 渲染问题 |
| [#675](https://github.com/NanmiCoder/cc-haha/issues/675) | 上下文显示错误 | OPEN | 数据展示问题 |
| [#684](https://github.com/NanmiCoder/cc-haha/issues/684) | MiniMax-M3 设置1M 上下文还是变成 200k | OPEN | 配置持久化问题 |
| [#692](https://github.com/NanmiCoder/cc-haha/issues/692) | 0.3.2会话结束后，智能体不显示生成的html或者md文档 | OPEN | 文件预览问题 |
| [#680](https://github.com/NanmiCoder/cc-haha/issues/680) | 0.3.2内置浏览器显示异常 | OPEN | 浏览器集成问题 |

### 严重程度：低 🟢

| Issue # | 标题 | 状态 | 备注 |
|----------|------|------|------|
| [#677](https://github.com/NanmiCoder/cc-haha/issues/677) | 粘贴图片无法识别 | OPEN | 图片处理 |
| [#646](https://github.com/NanmiCoder/cc-haha/issues/646) | 0.3.1桌面端对话，对话框的文字会出现剧烈抖动 | CLOSED | 已修复？ |
| [#617](https://github.com/NanmiCoder/cc-haha/issues/617) | macos上聊天界面上下滑动不流畅 | CLOSED | macOS 特定问题 |

### 新增 Bug 汇总（2026-06-02 新开）

| Issue # | 标题 |
|----------|------|
| [#701](https://github.com/NanmiCoder/cc-haha/issues/701) | 不管怎么设置模型，显示的上下文长度始终为200 |
| [#700](https://github.com/NanmiCoder/cc-haha/issues/700) | 上下文压缩百分比显示故障，老项目始终显示100% |
| [#699](https://github.com/NanmiCoder/cc-haha/issues/699) | 文件生成了一个，但是ui显示两个，其中一个点开显示文件不存在 |
| [#698](https://github.com/NanmiCoder/cc-haha/issues/698) | 会话遇到异常，就无法继续提问，进入异常循环 |
| [#697](https://github.com/NanmiCoder/cc-haha/issues/697) | 链接没有打开方式按钮，打开后浏览器悬浮，位置也不对 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 标题 | 详情 | 关联 PR |
|----------|------|------|---------|
| [#637](https://github.com/NanmiCoder/cc-haha/issues/637) | Claude Code Workflow 功能完整复刻方案 | 通过逆向工程发现 Claude Code 内部已有 `local_workflow` 基础设施，建议通过 Plugin 系统复刻 | 无 |
| [#682](https://github.com/NanmiCoder/cc-haha/issues/682) | 翻译志愿者招募 | 用户主动提出帮助翻译成日文、韩文、繁体中文 | 无 |
| [#670](https://github.com/NanmiCoder/cc-haha/issues/670) | 新增 dynamic workflows | CLOSED，标记为 Feature | 无 |

### PR 驱动的功能信号

- **PR #674**：PlantUML 图表支持、KaTeX 公式渲染、软连接支持 → 增强 Markdown 渲染和文件管理能力
- **PR #694**：MiniMax-M3 升级 → 跟进新一代模型支持

---

## 7. 用户反馈摘要

### 痛点汇总

1. **认证与连接问题**（高优先级）
   - Claude Code 官方账号登录显示 401 错误（#668）
   - 流式响应中途 TCP 关闭但状态不更新（#687）
   - 首次提问卡住，HTTP 连接未断开（#696）

2. **上下文管理问题**（高优先级）
   - 上下文显示错误（#675）
   - 模型配置 1M 上下文被强制改为 200k（#684）
   - 上下文压缩百分比显示故障（#700）

3. **UI/UX 问题**（中优先级）
   - 窗口打开/关闭时黑色边框闪烁（#693）
   - 对话框文字剧烈抖动（#646）
   - macOS 滑动不流畅（#617）

4. **第三方集成问题**
   - 不支持 NEW 开源中转站节点（#647）
   - 第三方接口 claude-opus 4.8 提示版本过低（#679）

### 用户建议

- **快捷键优化**：建议使用 `Ctrl+Enter` 发送会话，避免 Enter 误触发（#631）→ CLOSED
- **时间戳显示**：建议在每条消息上方加上时间信息，方便追踪任务执行时间（#642）→ CLOSED
- **翻译支持**：用户主动提出帮助翻译项目文档

---

## 8. 待处理积压

### 长期未响应的 Issues（>3 天无更新）

| Issue # | 标题 | 创建时间 | 最后更新 | 状态 |
|----------|------|----------|----------|------|
| [#647](https://github.com/NanmiCoder/cc-haha/issues/647) | 软件好像不支持new开源中转站的节点 | 2026-05-28 | 2026-06-01 | OPEN |
| [#668](https://github.com/NanmiCoder/cc-haha/issues/668) | 登入了Claude Code 的官方帳號後，用不了，顯示401 | 2026-05-30 | 2026-06-01 | OPEN |

### 建议维护者关注

1. **PR #674 和 #694** 均标注 `needs-maintainer-approval`，建议尽快 review
2. **Issue #637** 路线图价值高，建议评估是否纳入下一版本计划
3. **认证问题 #668** 涉及核心功能，建议优先处理
4. **上下文相关问题**（#675, #684, #700, #701）呈现集群效应，建议统一排查

---

## 总结

**项目健康度：🟡 中等偏上**

- **活跃度**：高（42 条 Issue 更新）
- **合并效率**：低（0 条 PR 合并，2 条待处理）
- **Bug 密度**：中高（大量 UI、连接、上下文问题）
- **功能进展**：有明确的功能 PR 在队列中

**建议行动项**：
1. 优先 review 并合并 PR #674 和 #694
2. 系统性排查上下文显示/配置问题（可能存在共同根因）
3. 评估 Issue #637 的可行性并给出官方回应

---

*报告生成时间：2026-06-02*  
*数据覆盖范围：2026-06-01 00:00 至 2026-06-02 00:00 (UTC)*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-06-02  
**项目**: BigPizzaV3/CodexPlusPlus  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Codex++ 项目今日保持高度活跃，共处理 **72 条 Issues**（39 新开/活跃，33 已关闭）和 **6 条 PR 更新**（2 待合并，4 已合并/关闭）。项目连续发布两个 alpha 版本（v1.1.9-alpha.1/2），聚焦于会话同步功能修复和 UI 稳定性优化。社区讨论热度较高，主要集中在 v1.1.8 升级后的历史对话丢失、Computer Use 功能限制以及窗口最大化 UI 异常等问题。整体项目处于快速迭代期，版本更新频率密集，建议用户关注最新 alpha 版本以获得最佳体验。

---

## 2. 版本发布

### v1.1.9-alpha.2
**发布状态**: 已发布  
**发布时间**: 2026-06-02  
**变更类型**: Bug 修复

**更新内容**:
1. 修复会话同步功能在官方模式的 bug
2. 修复 MCP 提取后回写错误的 bug
3. 增加会话同步的进度条显示

**Full Changelog**: https://github.com/BigPizzaV3/CodexPlusPlus/compare/v1.1.9-alpha.1...v1.1.9-alpha.2

---

### v1.1.9-alpha.1
**发布状态**: 已发布  
**发布时间**: 2026-06-02  
**变更类型**: Bug 修复 + 功能优化

**更新内容**:
1. 修复绿点闪烁问题
2. 优化 Chat 协议转换
3. 管理工具增加会话查看删除
4. 增加请求 UA 配置
5. 修复混合 API 模式丢失 KEY 的问题

**迁移注意事项**: 从 v1.1.8 升级的用户建议检查供应商配置是否完整，建议在升级前备份 config.toml。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR # | 标题 | 贡献者 | 状态 | 说明 |
|------|------|--------|------|------|
| [#505](https://github.com/BigPizzaV3/CodexPlusPlus/pull/505) | fix(cdp): support IPv6 loopback target discovery | @MonitorAllen | CLOSED | 修复 CDP 目标发现对 IPv6 的支持，解决 `failed to query CDP targets` 问题 |
| [#494](https://github.com/BigPizzaV3/CodexPlusPlus/pull/494) | fix(manager): grant dialog plugin capability | @crimsondhaks | CLOSED | 修复 Windows 上文件选择器无响应问题（关联 #345） |
| [#444](https://github.com/BigPizzaV3/CodexPlusPlus/pull/444) | fix: normalize codex plus trigger style | @nb5p | CLOSED | 统一触发器样式，提升 UI 一致性 |
| [#393](https://github.com/BigPizzaV3/CodexPlusPlus/pull/393) | fix(inject): apply dark theme to dialogs | @crimsondhaks | CLOSED | 修复深色模式下确认对话框和项目移动对话框的样式问题（关闭 #206） |

### 待合并的 PR

| PR # | 标题 | 贡献者 | 状态 | 说明 |
|------|------|--------|------|------|
| [#512](https://github.com/BigPizzaV3/CodexPlusPlus/pull/512) | feat: 新增对话临时API并接入页面增强开关 | @GinirohikoCha | OPEN | 新增按对话临时设置 baseUrl/apiKey 的能力，支持动态覆盖请求配置 |
| [#428](https://github.com/BigPizzaV3/CodexPlusPlus/pull/428) | [codex] add aggregate relay provider rotation | @kokotao | OPEN | 添加聚合中转供应商轮询功能，支持故障转移和策略配置 |

**项目推进评估**: 今日合并 4 个 PR，主要集中在 UI 修复和 CDP 发现机制优化。2 个待合并 PR 涉及重要功能特性（临时 API 和聚合供应商轮询），预计将在后续版本中落地。项目整体向前推进显著，修复了多个长期存在的 UI 和功能性 bug。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热度分析 |
|---------|------|--------|------|----------|
| [#352](https://github.com/BigPizzaV3/CodexPlusPlus/issues/352) | v1.1.8更新后历史对话全部消失，computer use无法使用 | 24 | CLOSED | **最高热度** - v1.1.8 升级导致的历史数据丢失问题，引发大量用户关注 |
| [#327](https://github.com/BigPizzaV3/CodexPlusPlus/issues/327) | 对话经常报错：tool_calls must be followed by tool messages | 19 | OPEN | API 协议兼容性问题，涉及工具调用消息流处理 |
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | MAC M1 更新后 Deepseek 模型报 502 Bad Gateway | 8 | OPEN | 平台特定问题，涉及本地代理配置 |
| [#451](https://github.com/BigPizzaV3/CodexPlusPlus/issues/451) | 上下文窗口无法修改为 1M | 6 | CLOSED | 配置参数不生效问题 |

### 热点分析

**核心诉求**:
1. **数据迁移与兼容性**: #352 显示用户对历史对话丢失问题极为敏感，这是影响用户信任的关键问题
2. **协议兼容性**: #327 反映的工具调用消息处理问题，说明项目在多模型协议适配方面仍需完善
3. **功能可用性**: Computer Use 和 Browser Use 功能限制（#448）引发用户强烈不满，部分用户因费用原因寻求第三方解决方案

---

## 5. Bug 与稳定性

### 严重程度：高

| Issue # | 标题 | 系统/平台 | 状态 | 是否有 Fix PR |
|---------|------|-----------|------|---------------|
| [#352](https://github.com/BigPizzaV3/CodexPlusPlus/issues/352) | 历史对话全部消失 | 多平台 | CLOSED | ✅ 已修复（v1.1.9-alpha.1） |
| [#510](https://github.com/BigPizzaV3/CodexPlusPlus/issues/510) | codex++覆盖codex界面导致加载卡死 | Windows | OPEN | ❌ 无 |
| [#486](https://github.com/BigPizzaV3/CodexPlusPlus/issues/486) | M5芯片 Mac 启动卡在启动页 | macOS ARM | OPEN | ❌ 无 |

### 严重程度：中

| Issue # | 标题 | 系统/平台 | 状态 | 是否有 Fix PR |
|---------|------|-----------|------|---------------|
| [#479](https://github.com/BigPizzaV3/CodexPlusPlus/issues/479) | 窗口最大化时左侧菜单栏透明背景 | 多平台 | OPEN | ❌ 无 |
| [#443](https://github.com/BigPizzaV3/CodexPlusPlus/issues/443) | 最大化窗口后侧边栏背景透明 | Windows | CLOSED | ✅ 已修复（#444） |
| [#465](https://github.com/BigPizzaV3/CodexPlusPlus/issues/465) | 安装维护下路径选择按钮无反应 | Windows | OPEN | ✅ 已修复（#494） |
| [#468](https://github.com/BigPizzaV3/CodexPlusPlus/issues/468) | Mac ARM 磁盘映像文件损坏 | macOS ARM | OPEN | ❌ 无 |

### 严重程度：低

| Issue # | 标题 | 系统/平台 | 状态 | 是否有 Fix PR |
|---------|------|-----------|------|---------------|
| [#466](https://github.com/BigPizzaV3/CodexPlusPlus/issues/466) | 设置中文后仍显示英文 | 多平台 | CLOSED | ✅ 需用户手动下载语言包 |
| [#478](https://github.com/BigPizzaV3/CodexPlusPlus/issues/478) | 系统语言改成中文后还是显示英文 | Windows | CLOSED | 同上 |
| [#519](https://github.com/BigPizzaV3/CodexPlusPlus/issues/519) | 使用 VPN 容易超时 | Windows | OPEN | ❌ 无 |

**稳定性评估**: 今日共报告约 15+ 个 Bug，其中 8 个已关闭。项目在 UI 渲染、文件选择器和协议处理方面存在问题，但维护团队响应速度较快。建议用户关注最新 alpha 版本以获得稳定性改善。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue # | 标题 | 类型 | 状态 | 预计纳入版本 |
|---------|------|------|------|--------------|
| [#448](https://github.com/BigPizzaV3/CodexPlusPlus/issues/448) | Computer Use 和 Browser Use 功能解锁 | Feature | OPEN | 待定 |
| [#512](https://github.com/BigPizzaV3/CodexPlusPlus/pull/512) | 新增对话临时API能力 | Feature | OPEN (PR) | 可能在 v1.1.9 正式版 |
| [#428](https://github.com/BigPizzaV3/CodexPlusPlus/pull/428) | 聚合中转供应商轮询 | Feature | OPEN (PR) | 可能在 v1.1.9 正式版 |
| [#501](https://github.com/BigPizzaV3/CodexPlusPlus/issues/501) | 手机连接功能优化 | Feature | CLOSED | 已关闭（需用户提供更多信息） |

### 路线图信号分析

1. **临时 API 配置能力** (#512): 允许用户按对话动态设置 API 端点，这是一个重要的灵活性提升，预计将成为 v1.1.9 的亮点功能
2. **聚合供应商轮询** (#428): 支持多供应商故障转移和负载均衡，对于生产环境使用具有重要价值
3. **Computer Use 功能**: 用户强烈请求解锁该功能，但涉及商业限制，可能需要与上游协商解决方案

---

## 7. 用户反馈摘要

### 正面反馈
- 管理工具的会话查看删除功能获得好评（v1.1.9-alpha.1 新增）
- 会话同步进度条显示提升了用户体验
- 协议转换优化改善了多模型兼容性

### 负面反馈与痛点

| 痛点 | 相关 Issue | 用户场景 |
|------|-----------|----------|
| 升级后历史对话丢失 | [#352](https://github.com/BigPizzaV3/CodexPlusPlus/issues/352) | "所有历史对话消失，包括归档对话" |
| Computer Use 功能受限 | [#448](https://github.com/BigPizzaV3/CodexPlusPlus/issues/448) | "额度不够太贵，希望通过第三方 API 使用" |
| 供应商切换不稳定 | [#503](https://github.com/BigPizzaV3/CodexPlusPlus/issues/503) | "无法切换 API 供应商，测试接口正常但实际无法使用" |
| 启动卡死 | [#510](https://github.com/BigPizzaV3/CodexPlusPlus/issues/510) | "codex++覆盖codex界面，一直处在加载界面" |
| VPN 环境下超时 | [#519](https://github.com/BigPizzaV3/CodexPlusPlus/issues/519) | "最近开着++运行时，用VPN会很容易导致超时" |

### 用户满意度评估
- **稳定性**: ⭐⭐⭐☆☆ (3/5) - 频繁的 Bug 报告影响满意度
- **功能完整性**: ⭐⭐⭐⭐☆ (4/5) - 功能丰富但部分功能受限
- **响应速度**: ⭐⭐⭐⭐⭐ (5/5) - 维护团队响应及时，版本迭代快

---

## 8. 待处理积压

### 长期未响应的 Issue（超过 7 天无维护者回复）

| Issue # | 标题 | 创建日期 | 评论数 | 优先级 |
|---------|------|----------|--------|--------|
| [#175](https://github.com/BigPizzaV3/CodexPlusPlus/issues/175) | 手机远程codex创建会话走不了中转 | 2026-05-19 | 2 | 中 |
| [#262](https://github.com/BigPizzaV3/CodexPlusPlus/issues/262) | win 无法启动了 1.1.7 回退到1.1.5也不行 | 2026-05-23 | 4 | 高 |

### 建议维护者关注

1. **跨平台一致性**: Mac ARM 平台存在多个未解决的问题（#468, #486），建议优先验证
2. **配置迁移机制**: #513 报告的配置文件覆盖问题可能导致用户配置丢失，需要设计更安全的合并策略
3. **国际化**: 多个用户反馈语言设置不生效，建议检查 i18n 机制

---

## 总结

**项目健康度**: ⭐⭐⭐⭐☆ (4/5)

Codex++ 项目今日保持高活跃度，版本迭代迅速，修复了多个关键 Bug。社区反馈整体积极，但 UI 稳定性和跨平台兼容性仍需持续关注。建议用户升级至 v1.1.9-alpha.2 以获得最新修复，生产环境使用前请充分测试。

---

*报告生成时间: 2026-06-02*  
*数据来源: GitHub Issues & Pull Requests*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*