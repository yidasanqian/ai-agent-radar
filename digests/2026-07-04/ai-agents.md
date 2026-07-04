# OpenClaw 生态日报 2026-07-04

> Issues: 177 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-04 02:55 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-04  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共产生 **177 条 Issues 更新**（新开/活跃 149 条，关闭 28 条）和 **500 条 PR 更新**（待合并 433 条，已合并/关闭 67 条）。项目整体处于快速迭代阶段，代码审查压力较大。社区重点关注 Codex worker 安全加固、Slack Block Kit 集成、敏感信息掩码等核心功能。值得注意的是，今日有多个 P1 级别的 Bug 被报告，包括 v2026.6.11 的 reentrancy guard 回归问题以及 Mattermost 插件外部化后的 401 认证回归问题。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#99581](https://github.com/openclaw/openclaw/pull/99581) | feat: block broad protected-root shell searches | CLOSED | 阻止 Codex/OpenClaw workers 对高风险目录执行递归搜索，提升安全性 |
| [#99755](https://github.com/openclaw/openclaw/pull/99755) | refactor: consolidate policy-free deferred promises | CLOSED | 合并重复的 deferred-promise 工厂实现 |
| [#99771](https://github.com/openclaw/openclaw/pull/99771) | refactor: consolidate free-port test helpers | CLOSED | 移除根目录测试中重复的 TCP 端口发现实现 |
| [#99426](https://github.com/openclaw/openclaw/pull/99426) | feat: add slash command picker in chat composer | CLOSED | iOS 聊天编辑器新增斜杠命令选择器 |
| [#99624](https://github.com/openclaw/openclaw/pull/99624) | fix(plugins): surface runtime registry on partial plugin-id overlap | CLOSED | 修复插件 ID 部分重叠时的运行时注册表暴露问题 |

### 待合并的高优先级 PR

| PR 编号 | 标题 | 状态 | 风险评估 |
|---------|------|------|----------|
| [#99747](https://github.com/openclaw/openclaw/pull/99747) | fix: protect uncovered cleanup window in runCodexAppServerAttempt | OPEN | 🚨 session-state |
| [#99748](https://github.com/openclaw/openclaw/pull/99748) | fix(embedded-agent): strip stale thinking signatures on replay_invalid retry | OPEN | 🚨 session-state |
| [#99208](https://github.com/openclaw/openclaw/pull/99208) | fix(agent-core): resolve tool-name mismatches for Claude Code alias calls | OPEN | 🚨 session-state, 🚨 security-boundary |
| [#99767](https://github.com/openclaw/openclaw/pull/99767) | feat(macos): install and run the local Gateway automatically | OPEN | 🚨 compatibility, 🚨 session-state, 🚨 security-boundary |
| [#99733](https://github.com/openclaw/openclaw/pull/99733) | feat(google): add Antigravity agy auth bridge | OPEN | 🚨 compatibility, 🚨 auth-provider, 🚨 session-state |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 编号 | 标题 | 评论 | 👍 | 标签 |
|------|------|------|-----|------|
| [#99551](https://github.com/openclaw/openclaw/issues/99551) | [Tracker]: Codex worker runaway hardening sprint | 14 | 1 | P1, security |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | [Feature]: Slack Block Kit support for agent messages | 13 | 0 | enhancement, P2 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys | 13 | 4 | P1, security |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | Bug: 180s compaction timeout is a single wall clock... | 11 | 3 | P1, session-state |
| [#98416](https://github.com/openclaw/openclaw/issues/98416) | [Bug] v2026.6.11 published dist missing reentrancy guard | 11 | 5 | P1, regression |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh failures can wedge an agent for hours | 10 | 1 | P1, auth-provider |

### 热点分析

**安全与稳定性成为焦点：**
- **#99551** (14 评论) - Codex worker 失控加固冲刺正在进行，这是 incident worker `019f18dc-0080-7201-a969-4efa8dd87949` 引发的安全审查
- **#10659** (13 评论) - 敏感信息掩码功能获得 4 个 👍，社区对防止 API key 泄露需求强烈
- **#98416** (11 评论) - v2026.6.11 发布的 dist 缺少 reentrancy guard，这是一个 P1 回归 Bug

**功能增强需求：**
- **#12602** - Slack Block Kit 支持呼声高，代理消息需要更丰富的交互能力
- **#14785** - 工具 schema token 开销优化（~3,500 tok/session），可显著降低每次会话成本

---

## 5. Bug 与稳定性

### P0/P1 严重 Bug（需立即关注）

| 编号 | 标题 | 严重度 | 状态 | 是否有 Fix PR |
|------|------|--------|------|---------------|
| [#98416](https://github.com/openclaw/openclaw/issues/98416) | v2026.6.11 published dist missing reentrancy guard | P1 | OPEN | ❌ |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 180s compaction timeout 导致长压缩失败 | P1 | OPEN | ❌ |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh failures 可导致 agent 卡死数小时 | P1 | OPEN | ❌ |
| [#98740](https://github.com/openclaw/openclaw/issues/98740) | Mattermost slash commands 返回 401（回归） | P1 | CLOSED | ❌ |
| [#99499](https://github.com/openclaw/openclaw/issues/99499) | pendingFinalDelivery 消息无法送达 | P1 | CLOSED | ❌ |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | memory_search 间歇性 "index metadata is missing" | P1 | OPEN | ❌ |

### P2 中等 Bug

| 编号 | 标题 | 严重度 | 状态 |
|------|------|--------|------|
| [#25574](https://github.com/openclaw/openclaw/issues/25574) | Config warnings 每次 reload 重复记录数千条 | P2 | OPEN |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) | 工具文本输出退化为 "(see attached image)" 占位符 | P2 | OPEN |
| [#80131](https://github.com/openclaw/openclaw/issues/80131) | per-request auth (5.5s) 和 tool bundling (8.9s) 主导 TTFT | P2 | OPEN |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（可能纳入下一版本）

| 编号 | 标题 | 评论 | 👍 | 相关 PR |
|------|------|------|-----|---------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets - 防止 Agent 访问原始 API Keys | 13 | 4 | - |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit 支持 | 13 | 0 | - |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 完全动态模型发现（OpenRouter + beyond） | 9 | 3 | - |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard 应包含 Memory/Embedding 设置 | 8 | 1 | - |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) | 基于能力的技能/工具权限（默认拒绝高风险操作） | 6 | 0 | - |
| [#26370](https://github.com/openclaw/openclaw/issues/26370) | 多用户部署中每个 agent 独立的 cron scheduled jobs | 5 | 0 | - |

### 正在推进的功能 PR

| PR 编号 | 标题 | 状态 |
|---------|------|------|
| [#99767](https://github.com/openclaw/openclaw/pull/99767) | macOS 自动安装和运行 Gateway | 👀 ready for maintainer look |
| [#99733](https://github.com/openclaw/openclaw/pull/99733) | Google Antigravity agy auth bridge | ⏳ waiting on author |
| [#86655](https://github.com/openclaw/openclaw/pull/86655) | Claude Code app-server harness extension | 📣 needs proof |
| [#93265](https://github.com/openclaw/openclaw/pull/93265) | Agent 辅助配置的流线化 onboarding | ⏳ waiting on author |
| [#99076](https://github.com/openclaw/openclaw/pull/99076) | Tencent Hy3 provider 支持 | 📣 needs proof |

---

## 7. 用户反馈摘要

### 核心痛点

1. **安全性担忧**
   - API keys 以明文存储在 `~/.openclaw/.env`，Agent 可直接访问，存在泄露风险（#10659）
   - Codex worker 可能执行高风险目录的递归搜索（#99551）
   - 技能安装无权限声明标准（#12219）

2. **稳定性问题**
   - OAuth refresh 失败可导致 agent 卡死数小时无告警（#86215）
   - 180s compaction timeout 对长历史会话过于严格（#92043）
   - Config warnings 重复记录导致日志膨胀（#25574）

3. **用户体验**
   - Onboarding 缺少 Memory/Embedding 配置引导（#16670）
   - TUI 不支持多行消息输入（#10118）
   - Telegram 解析模式硬编码为 Markdown（#10944）

### 正面反馈信号

- 工具 schema token 优化需求表明用户关注成本控制（#14785）
- Slack Block Kit 功能请求表明用户需要更丰富的交互能力（#12602）
- 多个 accessibility 相关请求（禁用 emoji、Unicode 符号）表明无障碍需求被重视

---

## 8. 待处理积压

### 长期未响应的 P1/P2 Issues（超过 30 天无维护者回复）

| 编号 | 标题 | 创建日期 | 最后更新 | 优先级 | 积压原因 |
|------|------|----------|----------|--------|----------|
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh failures | 2026-05-24 | 2026-07-04 | P1 | 需要 product decision |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 180s compaction timeout | 2026-06-10 | 2026-07-03 | P1 | 需要 source-repro |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | memory_search "index metadata is missing" | 2026-06-04 | 2026-07-03 | P1 | 需要 source-repro |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets | 2026-02-06 | 2026-07-04 | P1 | 需要 security-review, product-decision |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit | 2026-02-09 | 2026-07-04 | P2 | 需要 product-decision |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Dynamic model discovery | 2026-02-06 | 2026-07-04 | P2 | 需要 live-repro |

### 建议优先处理

1. **#98416** - v2026.6.11 reentrancy guard 缺失是明确的回归问题，需紧急修复
2. **#99551** - Codex worker 安全加固 sprint 正在进行，需持续跟进
3. **#86215** - OAuth refresh 失败无告警问题影响生产稳定性
4. **#10659** - 敏感信息掩码是用户高度期待的安全功能

---

**报告生成时间：** 2026-07-04  
**数据来源：** GitHub OpenClaw Repository (github.com/openclaw/openclaw)

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-04  
**数据周期：** 过去 24 小时

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**两极分化格局**：头部项目（OpenClaw、Hermes Agent）处于超高速迭代期，日均代码流动量达 500 条 PR 量级，社区规模与复杂度已接近中等规模商业开源项目；腰部项目（cc-haha、Codex++）则聚焦细分场景，以功能增强和稳定性修复为主。值得关注的是，**安全与稳定性**成为全生态共识性焦点——四个项目均涉及 OAuth/认证安全、敏感信息保护、回归 Bug 修复等议题，表明随着用户规模扩大，安全生产能力正从差异化优势演变为基础门槛。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃→关闭) | PRs (待合并→已合/关) | Release | 核心健康指标 |
|------|------------------------|----------------------|---------|--------------|
| **OpenClaw** | 177 (149→28) | 500 (433→67) | 无 | 🚨 高迭代压力，审查积压严重 |
| **Hermes Agent** | 156 (144→12) | 500 (366→134) | 无 | ✅ 安全修复驱动，质量把控积极 |
| **cc-haha** | 16 (12→4) | 1 (0→1) | 无 | ⚠️ 高反馈低产出，配置回归问题 |
| **Codex++** | 13 (9→4) | 5 (2→3) | **v1.2.31** | ✅ 维护响应及时，版本节奏稳定 |

**关键发现：**

- **代码吞吐量差距悬殊**：头部项目日 PR 量是腰部的 100 倍，反映出生态已形成明显的规模壁垒
- **Issue 关闭率**：OpenClaw 15.8%、Hermes Agent 7.7%、cc-haha 25%、Codex++ 30.8%——腰部项目反而在问题闭环效率上占优
- **版本发布节奏**：Codex++ 是唯一保持版本发布的项目，v1.2.31 聚焦插件市场缓存修复，体现成熟的项目管理能力

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 与 Hermes Agent 并列为生态双核，日代码流动量（500 PR/日）远超 cc-haha（1 PR）和 Codex++（5 PR）两个数量级。其 Issue 规模（177 条/日）表明拥有大量外部贡献者和用户参与，形成正向社区飞轮。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心定位** | 企业级多平台集成 | 多模型路由 + 平台插件 | 轻量桌面助手 | Codex 增强层 |
| **安全投入** | Codex worker 隔离、敏感信息掩码 | OAuth TOCTOU 修复、凭证隔离 | 尚未涉及 | 尚未涉及 |
| **平台覆盖** | Slack、Mattermost、Telegram | Linear、飞书、Discord | 微信、Terminal | 仅 Codex 原生 |
| **架构风格** | 微内核 + 插件化 | Gateway 中心化路由 | 单体轻量 | 中间件拦截 |

### 3.3 社区规模对比

- **OpenClaw**：P1 Bug 积压 6 个，长期未响应 Issue 6 个（>30天），表明维护者资源已接近瓶颈
- **Hermes Agent**：安全修复 PR 集中涌现（4 个 Security 级别），社区质量意识强
- **cc-haha**：依赖单一维护者响应，社区贡献率低
- **Codex++**：Issue 积压仅 1 个（#455，>30天），维护效率较高

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映出生态层面的共性挑战：

### 4.1 安全与凭证管理（OpenClaw、Hermes Agent）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| OpenClaw | 敏感信息掩码（#10659）、Codex worker 目录访问隔离（#99551） | 讨论中 |
| Hermes Agent | OAuth TOCTOU 修复（#58006）、凭证跨 Profile 泄漏（#58022）、.env 密钥明文泄露（#48441） | PR 已提交 |

**共性根因**：随着 Agent 能力增强（文件访问、API 调用），传统基于环境变量的凭证管理范式已无法满足安全边界要求。

### 4.2 多模型路由与按需升级（OpenClaw、Hermes Agent、Codex++）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| Hermes Agent | Model Presets 按需升级（#20249，11 评论） | 需求阶段 |
| OpenClaw | 工具 schema token 优化（#14785） | 讨论中 |
| Codex++ | 模型白名单注入修复（#1325） | PR 待合并 |

**共性根因**：用户希望在单一会话内根据任务复杂度动态切换模型，而非全程使用单一模型。

### 4.3 平台集成与消息渲染（OpenClaw、Hermes Agent）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| OpenClaw | Slack Block Kit 支持（#12602，13 评论） | 功能请求 |
| Hermes Agent | 飞书 Markdown 表格渲染（#58019） | PR 已提交 |

**共性根因**：跨平台部署时，各平台消息格式差异导致 Agent 输出渲染不一致。

### 4.4 稳定性与回归防控（cc-haha、OpenClaw）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| cc-haha | 版本更新后配置丢失（#959、#960） | 未修复 |
| OpenClaw | v2026.6.11 reentrancy guard 缺失（#98416） | 未修复 |

**共性根因**：快速迭代节奏下，配置迁移和构建流程的自动化测试覆盖不足。

---

## 5. 差异化定位分析

### 5.1 目标用户分层

```
┌─────────────────────────────────────────────────────────────┐
│                    企业级/专业用户                            │
│  OpenClaw ── 多平台集成、安全合规、企业部署                    │
│  Hermes Agent ── 多模型路由、平台插件生态                     │
├─────────────────────────────────────────────────────────────┤
│                    开发者/高级用户                             │
│  Codex++ ── Codex 增强、Subagent、模型白名单                   │
├─────────────────────────────────────────────────────────────┤
│                    普通用户/轻量场景                           │
│  cc-haha ── 桌面端轻量助手、微信集成、Terminal 使用             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心抽象** | Worker + Plugin | Gateway + Profile | 单体应用 | 中间件拦截 |
| **扩展机制** | 插件注册表、运行时 Registry | 平台适配器、Skills | 有限插件 | MCP 集成 |
| **配置管理** | 分布式配置、Policy 引擎 | Profile 隔离、OAuth 桥接 | 本地存储 | config.toml |
| **部署模式** | 自托管、企业私有化 | 混合云、多租户 | 桌面端本地 | 桌面端增强 |

### 5.3 功能侧重

- **OpenClaw**：安全 > 集成 > 稳定性（Codex worker 隔离、敏感信息掩码走在前列）
- **Hermes Agent**：多模型 > 平台生态 > 安全（Linear、飞书、阿拉伯语 RTL 本地化）
- **cc-haha**：用户体验 > 稳定性（Docker 支持、消息回退需求明确）
- **Codex++**：性能 > 兼容性 > 插件生态（启动速度优化 34s、模型白名单修复）

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 | 成熟度评估 |
|------|------|------|------------|
| **第一梯队** | OpenClaw、Hermes Agent | 日 PR 量 500+，Issue 150+，多维护者 | 快速迭代期，流程成熟但积压严重 |
| **第二梯队** | Codex++ | 日 PR 量 5，Issue 13，保持版本发布 | 质量巩固期，关注稳定性 |
| **第三梯队** | cc-haha | 日 PR 量 1，Issue 16，依赖单一维护者 | 早期维护期，用户反馈驱动 |

### 6.2 成熟度关键指标

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **版本发布节奏** | 无（>24h） | 无（>24h） | 无（>24h） | ✅ v1.2.31 |
| **PR 合并率** | 13.4% | 26.8% | 100% | 60% |
| **Bug 闭环率** | 15.8% | 7.7% | 25% | 30.8% |
| **长期积压（>30天）** | 6 个 P1/P2 | 0 | 0 | 1 |
| **安全专项投入** | ✅ 高 | ✅ 高 | ❌ 无 | ❌ 无 |

### 6.3 阶段判断

- **OpenClaw**：从早期创新进入**规模化运营**阶段，核心挑战是维护者带宽与社区贡献质量的平衡
- **Hermes Agent**：**技术深耕**阶段，安全修复系统性推进，体现成熟的安全开发文化
- **cc-haha**：**用户验证**阶段，高反馈低产出表明产品方向获认可，但工程能力待加强
- **Codex++**：**稳定维护**阶段，版本节奏健康，聚焦性能与兼容性优化

---

## 7. 值得关注的趋势信号

### 7.1 安全能力从差异化变为基础门槛

**信号**：OpenClaw 和 Hermes Agent 均将大量资源投入 OAuth/凭证安全修复，cc-haha 和 Codex++ 尚未涉及。

**对开发者的启示**：Agent 能力边界扩展（文件访问、API 调用）倒逼安全架构升级，敏感信息掩码、凭证隔离、OAuth 可靠性将成为 2026H2 生态标配功能。

### 7.2 多模型路由从高端走向标配

**信号**：Hermes Agent 的 Model Presets 需求（11 评论）、OpenClaw 的 token 优化需求、Codex++ 的模型白名单修复——三个项目从不同角度指向同一问题：如何在单一会话内高效调度多模型。

**对开发者的启示**：随着模型成本下降和能力分化，按需路由将成为用户体验核心差异点，建议提前设计模型抽象层。

### 7.3 平台集成从"能跑"到"跑好"

**信号**：Slack Block Kit、飞书 Markdown 表格渲染等平台特定功能请求涌现，表明集成深度从"消息可达"升级到"体验一致"。

**对开发者的启示**：跨平台 Agent 的核心竞争力将从"支持多少平台"转向"在每个平台上体验多接近原生"。

### 7.4 快速迭代与质量控制的张力加剧

**信号**：OpenClaw 433 条 PR 待合并但仅 67 条已处理；cc-haha 和 OpenClaw 均出现配置丢失类回归问题。

**对开发者的启示**：代码吞吐量与质量保障的失衡是规模化的必经挑战，自动化测试覆盖、配置迁移验证将成为项目健康度的关键指标。

### 7.5 隐私优先需求崛起

**信号**：Hermes Agent 的 Mind 离线记忆技能（零依赖、零 API key、MIT 许可）获得社区关注；OpenClaw 的敏感信息掩码需求强烈。

**对开发者的启示**：在企业合规和个人隐私意识提升的双重驱动下，"本地优先"、"无云依赖"将成为差异化卖点。

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 日 Issue 总量 | 177 | 156 | 16 | 13 |
| 日 PR 总量 | 500 | 500 | 1 | 5 |
| 待合并 PR | 433 | 366 | 0 | 2 |
| P0/P1 Bug | 6 | 3 | 3 | 3 |
| 安全专项 PR | 0 | 4 | 0 | 0 |
| 版本发布 | 无 | 无 | 无 | v1.2.31 |
| 长期积压 Issue | 6 | 0 | 0 | 1 |
| 社区健康度 | ⚠️ 高压 | ✅ 稳健 | ⚠️ 依赖 | ✅ 良好 |

---

**报告生成时间：** 2026-07-04  
**分析框架：** 生态全景 → 项目对比 → 趋势提炼  
**适用读者：** 技术决策者、项目管理者、AI 智能体开发者

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-07-04  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

2026-07-04 是 Hermes Agent 极高活跃度的一天。社区共产生 **156 条 Issues 更新**（144 新开/活跃，12 已关闭）和 **500 条 PR 更新**（366 待合并，134 已合并/关闭），整体代码流动极为健康。尽管无新版本发布，但安全修复类 PR 集中涌现——至少 4 个 Security 级别 PR 正在审查中，涵盖多因素认证隔离、OAuth 令牌 TOCTOU 漏洞和网关凭证泄漏等高危问题。功能层面，Linear Agent 平台插件、阿拉伯语 RTL 本地化、Mind 离线记忆技能等大型 PR 均进入 Open 状态，预计将成为下一版本亮点。

---

## 2. 版本发布

**本日无新版本发布。** 最近一个版本信息请参阅项目 [Releases 页面](https://github.com/NousResearch/hermes-agent/releases)。

---

## 3. 项目进展

以下 PR 已合并或在审查中取得重要进展，代表项目核心功能的实质性推进：

### 🔐 安全修复（高优先级）

| PR 链接 | 描述 | 涉及组件 |
|---------|------|----------|
| [#57563](https://github.com/NousResearch/hermes-agent/pull/57563) | 修复 BWS multiplexing 凭证隔离、OAuth 路径劫持和 cron 调度器线程安全问题 | gateway, cron, auth |
| [#58006](https://github.com/NousResearch/hermes-agent/pull/58006) | 修复 OAuth 令牌写入的 TOCTOU 竞态条件，改为原子性 0o600 权限写入 | dashboard, auth |
| [#58022](https://github.com/NousResearch/hermes-agent/pull/58022) | Profile 克隆时剥离网关平台凭证，防止跨 profile 凭证泄漏 | profiles, auth |
| [#58014](https://github.com/NousResearch/hermes-agent/pull/58014) | Anthropic OAuth 令牌交换在 HTTP 429 时重试而非烧毁授权码 | auth, anthropic |

### 🛠️ 核心功能修复

| PR 链接 | 描述 | 涉及组件 |
|---------|------|----------|
| [#56522](https://github.com/NousResearch/hermes-agent/pull/56522) | 处理流式响应中 Provider 以内容形式返回 API 错误的问题（复现于阿里云 Bailian DashScope） | agent, openai, qwen |
| [#58024](https://github.com/NousResearch/hermes-agent/pull/58024) | 消息序列修复时丢弃重复的 tool 结果，防止会话状态损坏 | agent |
| [#58027](https://github.com/NousResearch/hermes-agent/pull/58027) | 确保长上下文截断后 API payload 仍保留 `user` 角色锚点 | agent |
| [#50030](https://github.com/NousResearch/hermes-agent/pull/50030) | 修复 `session_search` 范围为当前网关 chat 而非 profile 级历史 | tools, gateway |
| [#58028](https://github.com/NousResearch/hermes-agent/pull/58028) | 修复 dashboard graceful shutdown，防止 systemctl stop 被 SIGKILL 打断 | dashboard |
| [#58016](https://github.com/NousResearch/hermes-agent/pull/58016) | 允许 multiplexed profiles 中使用飞书 WebSocket 模式 | gateway, feishu |

### ✨ 新功能

| PR 链接 | 描述 | 涉及组件 |
|---------|------|----------|
| [#57734](https://github.com/NousResearch/hermes-agent/pull/57734) | **Linear Agent 平台插件** — 在 Linear 中 @提及 Agent，响应通过 Agent Sessions 呈现，完全归属追踪 | gateway, plugins |
| [#44987](https://github.com/NousResearch/hermes-agent/pull/44987) | **阿拉伯语本地化** — 完整 RTL 支持，覆盖 desktop、dashboard、agent 三个界面 | desktop, dashboard, agent |
| [#56859](https://github.com/NousResearch/hermes-agent/pull/56859) | **Mind 技能** — 脑-like 离线项目记忆，无依赖、无 API key、MIT 许可 | skills, memory |
| [#58015](https://github.com/NousResearch/hermes-agent/pull/58015) | **成就系统导出端点** — 将成就数据从 state.json 解放，支持 Agent 通信 | achievements |

---

## 4. 社区热点

以下 Issues 和 PR 获得最多社区关注（按评论数排序）：

### 🔥 Issues 热议

**1. [#26847](https://github.com/NousResearch/hermes-agent/issues/26847) — xAI OAuth 对标准 SuperGrok 订阅者返回 HTTP 403**（31 评论，已关闭）
- **根因：** xAI 后端强制 Heavy-only 订阅，但文档声称所有层级均可使用
- **状态：** 已关闭（可能为外部 API 问题）
- **启示：** OAuth 提供商文档与实际行为不一致时需及时同步或上报

**2. [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) — Model Presets：按需模型升级功能**（11 评论）
- **诉求：** 当前会话全程使用单一模型，希望在需要 Opus 级推理时动态切换到更强模型
- **相关 PR：** [#56655](https://github.com/NousResearch/hermes-agent/issues/56655) 提出了 `pre_llm_call` 模型覆盖机制
- **社区价值：** 高——这是多模型策略的核心需求

**3. [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) — 将 memory-context 作为背景上下文而非权威用户消息**（9 评论）
- **诉求：** 避免 memory-context 被当作用户输入处理，减少混淆和潜在安全风险
- **社区价值：** 中高——涉及 Agent 行为可预测性

**4. [#48441](https://github.com/NousResearch/hermes-agent/issues/48441) — 终端会话快照以明文泄露 .env 密钥**（5 评论，已关闭）
- **严重性：** P1 / Security
- **状态：** 已关闭（可能已修复或标记为重复）

**5. [#5826](https://github.com/NousResearch/hermes-agent/issues/5826) — Linear 平台适配器**（5 评论，👍 7）
- **进展：** 对应 PR [#57734](https://github.com/NousResearch/hermes-agent/pull/57734) 已 Open，社区呼声高

### 🔥 PR 热议

| PR | 描述 | 亮点 |
|----|------|------|
| [#57563](https://github.com/NousResearch/hermes-agent/pull/57563) | BWS multiplexing 凭证隔离 + OAuth 劫持 + cron 线程安全 | 一次性解决 4 个安全/稳定性问题 |
| [#58022](https://github.com/NousResearch/hermes-agent/pull/58022) | Profile 克隆时剥离网关凭证 | 解决多 profile 并发运行时的凭证串台问题 |
| [#58014](https://github.com/NousResearch/hermes-agent/pull/58014) | Anthropic OAuth 429 重试 | 避免单次 429 导致整个 OAuth 流程失败 |

---

## 5. Bug 与稳定性

按严重程度排列本日报告的 Bug：

### P1 — 关键 / 安全

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#48534](https://github.com/NousResearch/hermes-agent/issues/48534) | Anthropic Max OAuth 令牌交换 404 — Anthropic 屏蔽 claude-cli User-Agent | Open | [#58014](https://github.com/NousResearch/hermes-agent/pull/58014) |
| [#48441](https://github.com/NousResearch/hermes-agent/issues/48441) | 终端快照明文泄露 .env 密钥到 `cache/terminal/hermes-snap-*.sh` | Closed | — |
| [#54675](https://github.com/NousResearch/hermes-agent/issues/54675) | Multiplexed gateway：平台 Bot Token 通过 `os.getenv` 绕过 per-profile 隔离 | Open | — |

### P2 — 高优先级

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#55658](https://github.com/NousResearch/hermes-agent/issues/55658) | 桌面应用更新后无法启动 | Open | — |
| [#7746](https://github.com/NousResearch/hermes-agent/issues/7746) | Qwen OAuth 刷新返回 invalid JSON | Open | — |
| [#25106](https://github.com/NousResearch/hermes-agent/issues/25106) | CLI `--global` 模型切换不持久化 `model.base_url` 和 `model.api_mode` | Open | — |
| [#50051](https://github.com/NousResearch/hermes-agent/issues/50051) | One-gateway-multi-profile multiplexer 两个 bug 导致配置无效 | Open | — |
| [#12058](https://github.com/NousResearch/hermes-agent/issues/12058) | OpenAI Codex OAuth 在 CLI 正常但 Telegram 网关报"无凭证" | Open | — |

### P3 — 中优先级

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#31873](https://github.com/NousResearch/hermes-agent/issues/31873) | `check_web_api_key()` 硬编码内置后端，第三方搜索插件被静默禁用 | Closed | — |
| [#32698](https://github.com/NousResearch/hermes-agent/issues/32698) | 仅配置 SearXNG 时 `web_extract` 返回死胡同错误 | Closed | — |
| [#69](https://github.com/NousResearch/hermes-agent/issues/69) | 安装脚本在缺少 ripgrep 时静默中止 | Closed | — |
| [#29607](https://github.com/NousResearch/hermes-agent/issues/29607) | 第三方代理 + DeepSeek：thinking 块被剥离导致 HTTP 400 | Open | — |
| [#57967](https://github.com/NousResearch/hermes-agent/issues/57967) | `hermes kanban create` 在 COMMIT 前返回 task_id，网关竞争时静默丢失 | Open | — |
| [#36755](https://github.com/NousResearch/hermes-agent/issues/36755) | `check_systemd_timing_alignment` 对不存在的 --user unit 误报 | Open | — |

---

## 6. 功能请求与路线图信号

以下功能请求具有较高社区呼声或已有对应 PR，预计进入下一版本：

### 🔮 高可能性纳入

| 请求 | Issue | 对应 PR | 说明 |
|------|-------|---------|------|
| **Linear Agent 平台** | [#5826](https://github.com/NousResearch/hermes-agent/issues/5826) | [#57734](https://github.com/NousResearch/hermes-agent/pull/57734) | 社区 👍 7，PR 已 Open，功能完整 |
| **阿拉伯语 RTL 本地化** | — | [#44987](https://github.com/NousResearch/hermes-agent/pull/44987) | 覆盖三个界面，完整 RTL + 字体栈 + 复数语法 |
| **Mind 离线记忆技能** | — | [#56859](https://github.com/NousResearch/hermes-agent/pull/56859) | 零依赖、零 API key，MIT，契合隐私需求 |
| **Anthropic OAuth 429 重试** | — | [#58014](https://github.com/NousResearch/hermes-agent/pull/58014) | 修复 OAuth 可靠性，PR 已 Open |
| **飞书 Markdown 表格渲染** | — | [#58019](https://github.com/NousResearch/hermes-agent/pull/58019) | 修复 #52786、#23938 等重复 issue |

### 🔹 值得关注的长期需求

| 请求 | Issue | 说明 |
|------|-------|------|
| **按需模型升级（Model Presets）** | [#20249](https://github.com/NousResearch/hermes-agent/issues/20249) | 11 条评论，核心多模型策略需求 |
| **Per-turn 模型路由** | [#56655](https://github.com/NousResearch/hermes-agent/issues/56655) | 插件级任务感知路由 |
| **会话标题自动生成** | [#624](https://github.com/NousResearch/hermes-agent/issues/624) | 灵感来自 DeerFlow，轻量 LLM 调用 |
| **Agent 迁移系统** | [#524](https://github.com/NousResearch/hermes-agent/issues/524) | 从 Claude Code、Codex 等导入配置 |
| **Telegram channel_profiles** | [#40173](https://github.com/NousResearch/hermes-agent/issues/40173) | 单网关多 profile 路由 |
| **Google Cloud STT/TTS** | [#57120](https://github.com/NousResearch/hermes-agent/issues/57120) | ADC 认证无需 API key |
| **Discord 语音超时可配置** | [#17790](https://github.com/NousResearch/hermes-agent/issues/17790) | 当前硬编码 300 秒 |
| **成就系统导出端点** | — | [#58015](https://github.com/NousResearch/hermes-agent/pull/58015) | PR 已 Open |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

### 😤 痛点

1. **OAuth 可靠性不足** — 多个提供商（xAI、Qwen、Anthropic）的 OAuth 流程存在偶发失败，用户被迫降级到 API Key 认证，失去了 SSO 的便利性。
2. **多 Profile 体验破碎** — `gateway.multiplex_profiles` 功能文档存在但实际不可用（两个 bug 叠加），用户期望单网关多人格但被迫运行多个实例。
3. **Docker 部署配置困难** — `hermes model` 命令无法通过环境变量注入，用户必须进入容器交互式配置，增加了自动化部署复杂度。
4. **第三方插件生态割裂** — Web 搜索插件注册机制与 `check_web_api_key()` 白名单不兼容，导致社区插件被静默禁用，用户困惑。
5. **Windows 平台 MCP 卸载失败** — `git clone` 的 MCP 目录含只读 `.git` 文件，`shutil.rmtree` 在 Windows 上抛出 `PermissionError`。

### 😊 满意点

1. **Kanban 功能** — 任务事件日志和通知循环设计受到好评，但需要事件抽象层以支持更多平台。
2. **成就系统** — 用户希望成就数据能导出和与 Agent 通信（对应 PR #58015）。
3. **飞书集成** — 社区有活跃的飞书用户，Markdown 表格渲染修复呼声高。

### 💡 新场景

- **WhatsApp 群组权限控制** — 用户希望在群组中只回复被 @提及的用户，但无需将所有人加入白名单。
- **持久语音频道** — Discord

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-07-04  
**项目仓库**：https://github.com/NanmiCoder/cc-haha  
**数据周期**：过去 24 小时

---

## 1. 今日速览

过去 24 小时内，cc-haha 项目保持较高社区活跃度，共产生 **16 条 Issue 更新**（新开/活跃 12 条，关闭 4 条），**1 条 PR 合并**。项目整体呈现"高反馈、低产出"特征——用户报告的 Bug 集中在版本更新后的配置丢失、UI 显示异常等问题，而功能请求主要聚焦于用户体验优化（如 Docker 支持、消息回退）。维护者响应及时，已合并 1 个针对 Terminal 重复启动问题的修复 PR。建议关注配置持久化相关的回归问题，这可能是近期版本迭代中的系统性风险。

---

## 2. 版本发布

**无新版本发布。**

> 近期用户反馈中多次提及"更新版本后配置丢失"问题（#959、#960、#965），建议维护者在下一版本发布前重点排查配置迁移逻辑。

---

## 3. 项目进展

### PR 合并

| PR 编号 | 标题 | 领域 | 状态 |
|---------|------|------|------|
| [#967](https://github.com/NanmiCoder/cc-haha/pull/967) | Fix issue #964: Prevent starting terminal if already starting | desktop | ✅ 已合并 |

**PR #967 详情**：
- **作者**：@rechardguo
- **修复内容**：解决 Terminal 命令行重复启动的问题，添加了启动状态守卫保护
- **测试覆盖**：包含 E2E 测试
- **影响评估**：✅ 已合并，属于小而重要的稳定性修复，改善桌面端用户体验

---

## 4. 社区热点

### 热门 Issues（按评论数排序）

| 排名 | Issue 编号 | 标题 | 评论数 | 状态 |
|------|------------|------|--------|------|
| 1 | [#903](https://github.com/NanmiCoder/cc-haha/issues/903) | 为什么会有道德审查，我在CLAUDE CODE命令行里没有这个问题 | 4 | 已关闭 |
| 2 | [#900](https://github.com/NanmiCoder/cc-haha/issues/900) | goal功能遇到模型接口未返回需要的json，直接退出，状态未清理 | 4 | 开放 |
| 3 | [#959](https://github.com/NanmiCoder/cc-haha/issues/959) | 推送更新0.4.5，所有配置及对话全部清空 | 3 | 开放 |
| 4 | [#960](https://github.com/NanmiCoder/cc-haha/issues/960) | 更新软件版本之后，出现丢失服务商数据问题 | 3 | 已关闭 |
| 5 | [#814](https://github.com/NanmiCoder/cc-haha/issues/814) | 调用第三方中转站，错误: API Error: 400 | 3 | 已关闭 |

**热点分析**：

1. **#903 道德审查问题**：用户反映在使用过程中频繁遭遇"恶意软件分析"提示，影响正常使用。这是已关闭 Issue，但反映出用户对内容审查策略的不满，可能需要文档或 FAQ 说明。

2. **#900 goal 功能 JSON 解析问题**：用户报告模型接口未返回预期 JSON 时程序直接退出且状态未清理。这是一个**潜在的数据丢失风险**，需要优先关注。

3. **#959/#960 配置丢失问题**：多名用户反馈更新后配置和对话数据全部清空，这是**高严重性回归问题**，直接损害用户信任。

---

## 5. Bug 与稳定性

### 今日新增 Bug（按严重程度排列）

| 严重程度 | Issue 编号 | 描述 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🔴 高 | [#959](https://github.com/NanmiCoder/cc-haha/issues/959) | 更新 0.4.5 后所有配置及对话全部清空 | 开放 | ❌ |
| 🔴 高 | [#960](https://github.com/NanmiCoder/cc-haha/issues/960) | 更新后服务商数据丢失 | 已关闭 | ❌ |
| 🔴 高 | [#900](https://github.com/NanmiCoder/cc-haha/issues/900) | goal 功能 JSON 解析失败导致状态未清理 | 开放 | ❌ |
| 🟡 中 | [#970](https://github.com/NanmiCoder/cc-haha/issues/970) | 提问过程中莫名白屏 | 开放 | ❌ |
| 🟡 中 | [#969](https://github.com/NanmiCoder/cc-haha/issues/969) | agent 状态不更新，一直显示进行中 | 开放 | ❌ |
| 🟡 中 | [#961](https://github.com/NanmiCoder/cc-haha/issues/961) | win11 启动失败 | 开放 | ❌ |
| 🟡 中 | [#964](https://github.com/NanmiCoder/cc-haha/issues/964) | terminal 命令行出现 2 行 | 开放 | ✅ #967 已合并 |
| 🟢 低 | [#965](https://github.com/NanmiCoder/cc-haha/issues/965) | Computer Use 配置参数重置 | 开放 | ❌ |
| 🟢 低 | [#966](https://github.com/NanmiCoder/cc-haha/issues/966) | 输出风格选项文案未翻译中文 | 开放 | ❌ |

**稳定性评估**：

- **关键风险**：配置/数据丢失类问题（#959、#960）出现 2 例，表明近期版本更新可能引入了配置迁移或存储逻辑的回归。
- **已修复**：#964 通过 PR #967 已解决。
- **待响应**：#900（状态管理问题）和 #961（平台兼容性）需要优先调查。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue 编号 | 功能描述 | 类型 | 状态 | 纳入可能性 |
|------------|----------|------|------|------------|
| [#963](https://github.com/NanmiCoder/cc-haha/issues/963) | 请求增加 Docker 版本，支持 NAS 运行、远程办公、SSH 维护 | enhancement | 开放 | ⭐⭐⭐ 高 |
| [#962](https://github.com/NanmiCoder/cc-haha/issues/962) | 会话消息支持回退 | enhancement | 开放 | ⭐⭐ 中 |
| [#898](https://github.com/NanmiCoder/cc-haha/issues/898) | 参考 Codex，已变更文件与展开文件夹入口分离，支持更丰富展现 | enhancement | 开放 | ⭐⭐ 中 |
| [#968](https://github.com/NanmiCoder/cc-haha/issues/968) | 服务商配置优化 | discuss | 开放 | ⭐ 待定 |

**路线图建议**：

1. **Docker 支持（#963）**：用户需求明确（NAS 部署、远程办公），实现难度适中，建议纳入下一版本规划。
2. **消息回退（#962）**：属于高频需求，与 #898（文件管理优化）可作为 UI/UX 改进包统一规划。

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点类型 | 具体描述 | 相关 Issue |
|----------|----------|------------|
| **数据丢失** | 版本更新后配置、对话、服务商数据全部清空，用户工程进度受影响 | #959、#960 |
| **状态管理** | goal 功能执行失败后状态未清理；agent 完成后仍显示"进行中" | #900、#969 |
| **平台兼容** | win11 启动失败；旧版微信不兼容扫码登录 | #961、#956 |
| **内容审查** | 频繁触发"恶意软件分析"提示，阻断正常使用 | #903 |

### 用户使用场景

- **开发者场景**：运行一半的工程因配置丢失中断（#959 用户反馈）
- **企业场景**：需要 Docker 部署在 NAS 进行远程办公（#963）
- **日常使用**：Terminal 多行显示、UI 文案翻译等细节体验问题

### 满意/不满意的地方

- **不满意**：版本更新导致的数据丢失问题严重损害用户信任；道德审查机制过于敏感
- **积极信号**：维护者响应速度快（#960、#956 已关闭），社区贡献者积极提交修复（#967）

---

## 8. 待处理积压

### 长期未响应的 Issue（超过 3 天无维护者回复）

| Issue 编号 | 标题 | 创建时间 | 最后更新 | 评论数 | 优先级 |
|------------|------|----------|----------|--------|--------|
| [#900](https://github.com/NanmiCoder/cc-haha/issues/900) | goal 功能 JSON 解析问题 | 2026-06-23 | 2026-07-03 | 4 | 🔴 高 |
| [#898](https://github.com/NanmiCoder/cc-haha/issues/898) | 已变更文件与展开文件夹入口分离 | 2026-06-23 | 2026-07-03 | 2 | 🟡 中 |
| [#814](https://github.com/NanmiCoder/cc-haha/issues/814) | 第三方中转站 API Error 400 | 2026-06-12 | 2026-07-03 | 3 | 🟡 中 |

**提醒维护者**：

1. **#900** 已开放 10 天，虽有评论讨论但未给出解决方案，需优先处理状态管理相关 Bug。
2. **#814** 涉及第三方 API 兼容性，建议在文档中补充 1m 上下文使用说明。
3. **#898** 是功能增强请求，建议评估后给出"计划中"或"暂不考虑"的明确回复。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去 24 小时 Issue 更新总数 | 16 |
| - 其中新开/活跃 | 12 |
| - 其中已关闭 | 4 |
| 过去 24 小时 PR 更新总数 | 1 |
| - 其中待合并 | 0 |
| - 其中已合并/关闭 | 1 |
| 新版本发布数 | 0 |
| 今日新增 Bug 数 | 9 |
| 今日新增功能请求数 | 4 |

---

*报告生成时间：2026-07-04 | 数据来源：GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-07-04  
**项目**: BigPizzaV3/CodexPlusPlus  
**数据来源**: GitHub Repository

---

## 1. 今日速览

Codex++ 项目在 2026-07-03 保持高度活跃，共处理 **13 条 Issues**（新开/活跃 9 条，关闭 4 条）和 **5 条 PRs**（2 条待合并，3 条已关闭）。项目发布了 **v1.2.31** 小版本，聚焦插件市场缓存和供应商配置的稳定性修复。社区反馈显示**插件市场**和**模型白名单注入**是当前痛点集中区，同时性能优化（启动速度）方向有重要 PR 推进中。整体项目健康度良好，维护响应及时。

---

## 2. 版本发布

### ✅ v1.2.31 已发布

| 项目 | 说明 |
|------|------|
| **版本号** | v1.2.31 |
| **发布时间** | 2026-07-03 |
| **破坏性变更** | 无 |

**更新内容**:

1. **插件市场缓存修复**: 修复已缓存的官方远端插件安装后，重新进入插件市场又显示为"未安装"的问题
2. **供应商配置增强**: 供应商配置写入 `config.toml` 时会保留本地 `openai-curated-remote` 插件市场注册，Product Design 等 Pro 插件的安装状态可持续保持
3. **版本号同步**: 版本号更新至 1.2.31

**验证方式**:
```bash
npm run build
cargo test -p codex-plus-core --test relay_config apply_relay_config_preserves_cached_remote_plugin_marketplac
```

🔗 [Release v1.2.31](https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.31)

---

## 3. 项目进展

### 已合并/关闭 PRs (3 条)

| PR # | 标题 | 类型 | 贡献者 | 状态 |
|------|------|------|--------|------|
| [#1283](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1283) | 改进 Stepwise 刷新控制和回答检测 | 功能增强 | @0xTotoroX | ✅ CLOSED |
| [#1292](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1292) | fix: strip image_url for text-only models (DeepSeek) | Bug修复 | @Dawninnng | ✅ CLOSED |
| [#1314](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1314) | fix(config): strip UTF-8 BOM from relay config file input | Bug修复 | @lennney | ✅ CLOSED |

**关键修复说明**:

- **#1314**: 修复 `config.toml` 含 UTF-8 BOM 时 relay 配置解析失败的问题（`root_key_value()` 的 `trim()` 不去除 BOM）
- **#1292**: 修复 DeepSeek 等纯文本模型错误携带 `image_url` 参数的问题
- **#1283**: 增强 Stepwise 面板，增加手动刷新按钮，改善长对话场景下的建议刷新稳定性

### 待合并 PRs (2 条)

| PR # | 标题 | 类型 | 贡献者 | 状态 |
|------|------|------|--------|------|
| [#1304](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1304) | perf: short-circuit model list via bridge (−34s startup) | 性能优化 | @lennney | 🔄 OPEN |
| [#1325](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1325) | fix: model catalog fallback for not_configured status | Bug修复 | @Marnie0415 | 🔄 OPEN |

**重点关注**:

- **#1304**: 通过拦截 `list-models-for-host` 调用，从 Codex++ bridge 直接返回模型列表（<1ms），替代等待 app-server RPC（~34s），可显著缩短启动时间
- **#1325**: 修复 Codex App 26.623+ 模型白名单注入失败问题，当 settings.json 存在但 relay profile 无模型时，fallback 到 config.toml

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热度原因 |
|---------|------|--------|------|----------|
| [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | [Bug]: codex++启动codex闪退 | 9 | 🔴 OPEN | Mac Intel 用户启动闪退问题，持续讨论中 |
| [#1308](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1308) | [Bug]: win插件无法解锁 | 2 | 🟢 CLOSED | 已关闭 |
| [#1313](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1313) | [Feature]: 添加"路由端口局域网开启"功能 | 1 | 🟢 CLOSED | 功能请求已关闭 |
| [#1322](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1322) | [Bug]: 打开"插件"报错，无法进入插件市场 | 1 | 🟢 CLOSED | 已关闭 |

**热点分析**:

1. **#455 持续高热**: Mac Intel 用户报告切换 DeepSeek 配置后启动 Codex 闪退，已有 9 条评论讨论复现条件和根因分析，是当前最需关注的未解决问题
2. **插件市场问题集中**: #1322、#1323 均报告插件市场打开报错，可能与 v1.2.31 修复范围相关
3. **局域网路由功能请求**: #1313 来自无头 Linux 服务器用户场景，已关闭可能表示已实现或延期

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue # | 标题 | 系统 | 状态 | 是否有 Fix PR |
|---------|------|------|------|---------------|
| [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | codex++启动codex闪退 | macOS Intel | 🔴 OPEN | 无 |
| [#1318](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1318) | 当不开vpn时codex++连接不到codex导致codex闪退 | Windows | 🔴 OPEN | 无 |
| [#1324](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1324) | Model whitelist injection fails (Codex 26.623+) | 通用 | 🔴 OPEN | #1325 待合并 |

### 严重程度：中 🟡

| Issue # | 标题 | 系统 | 状态 | 是否有 Fix PR |
|---------|------|------|------|---------------|
| [#1320](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1320) | 长对话反复断连且无法继续对话 | 通用 | 🟡 OPEN | 无 |
| [#1316](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1316) | 从项目内移动至普通会话失败 | 通用 | 🟡 OPEN | 无 |
| [#1323](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1323) | 插件市场打开后显示糟糕，出错了 | 通用 | 🟡 OPEN | 无 |

### 已关闭 Bug

| Issue # | 标题 | 解决方案 |
|---------|------|----------|
| [#1308](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1308) | win插件无法解锁 | 已关闭 |
| [#1322](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1322) | 打开"插件"报错，无法进入插件市场 | 已关闭 |
| [#1321](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1321) | computer use插件无法使用 | 已关闭 |

**稳定性预警**: 
- **闪退问题**（#455、#1318）影响核心功能，需优先排查
- **长对话断连**（#1320）影响生产使用，背景信息窗口利用到 150k 左右时触发

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue # | 标题 | 功能范围 | 状态 | 纳入版本可能性 |
|---------|------|----------|------|----------------|
| [#1326](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1326) | 增加第三方非gpt模型能够创建使用Subagents子代理功能 | MCP/skills/plugins | 🔵 OPEN | 中 |
| [#1317](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1317) | 禁止codex更新 | 其他 | 🔵 OPEN | 低 |
| [#1319](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1319) | 供应商管理链接变动问题 | 供应商管理 | 🔵 OPEN | 待确认 |

**路线图信号分析**:

1. **Subagents 扩展需求**: 用户希望第三方模型（非官方 GPT）也能使用子代理并行处理功能，当前仅 CPA OAuth 登录的官方模型支持
2. **版本锁定需求**: Codex 更新频繁，部分用户希望锁定版本避免兼容性问题
3. **性能优化方向**: #1304 PR 表明启动速度优化是项目重点方向

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 相关 Issue | 用户场景 |
|------|------------|----------|
| **启动闪退** | #455, #1318 | Mac Intel 和 Windows 用户，切换供应商配置后无法正常启动 Codex |
| **插件市场不稳定** | #1322, #1323 | 点击插件按钮后报错，无法进入市场 |
| **长对话断连** | #1320 | 背景信息窗口利用到 150k 左右时反复断连重连 |
| **局域网路由缺失** | #1313 | 无头 Linux 服务器用户无法通过局域网访问桌面端路由端口 |

### 用户场景

1. **跨平台用户**: Mac Intel 用户遇到启动兼容性问题（#455）
2. **无头服务器场景**: Ubuntu 24.04 服务器需要复用桌面端路由端口，但当前仅本地开放（#1313）
3. **深度用户**: 258k 背景信息窗口的重度用户遭遇长对话稳定性问题（#1320）
4. **插件依赖用户**: 依赖 Product Design 等 Pro 插件的用户需要安装状态持久化（v1.2.31 已修复）

### 满意点

- v1.2.31 对插件市场缓存和供应商配置的修复获得正面反馈
- DeepSeek 模型支持通过 #1292 修复得到改善

---

## 8. 待处理积压

### 长期未响应 Issue（>7 天无更新）

| Issue # | 标题 | 创建时间 | 最后更新 | 优先级 |
|---------|------|----------|----------|--------|
| [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | codex++启动codex闪退 | 2026-05-31 | 2026-07-03 | 🔴 高 |

### 建议关注

1. **#455 需维护者介入**: 该 Issue 创建于 5 月 31 日，虽有 9 条评论讨论，但仍未解决，Mac Intel 用户群体反馈强烈
2. **#1324 + #1325 联动**: 模型白名单注入失败问题已有 PR #1325 修复，建议尽快合并
3. **#1319 供应商管理**: 链接变动问题可能影响用户体验稳定性，建议确认是否为预期行为

---

## 统计概览

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 9 |
| Issues 已关闭 | 4 |
| PRs 待合并 | 2 |
| PRs 已合并/关闭 | 3 |
| 新版本发布 | 1 (v1.2.31) |
| Open Issues 总量 | 9 |
| 关键 Bug 未修复 | 3 |
| 功能请求待评估 | 3 |

---

**报告生成时间**: 2026-07-04  
**数据截止**: 2026-07-03 24:00 UTC

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*