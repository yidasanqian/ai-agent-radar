# OpenClaw 生态日报 2026-06-27

> Issues: 197 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-27 03:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**：2026-06-27  
**项目**：openclaw/openclaw  
**数据周期**：过去 24 小时

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高活跃度，共产生 **197 条 Issues 更新**（188 新开/活跃，9 关闭）和 **500 条 PR 更新**（442 待合并，58 已合并/关闭）。项目整体呈现快速迭代态势，维护者响应及时，多个 P1 级别问题获得关注。今日无新版本发布，但社区贡献热度不减，Slack 频道修复、Feishu 身份保持、WebChat 消息发送等关键功能 PR 正在推进中。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Autofix: add PR review autofix pipeline + Windows daemon | CLOSED | 新增 PR review 自动修复流水线及 Windows 后台守护进程 |
| [#33962](https://github.com/openclaw/openclaw/issues/33962) | slug-generator: use lightweight model | CLOSED | 解决 slug 生成器使用重型模型导致车道拥堵问题 |
| [#97136](https://github.com/openclaw/openclaw/pull/97136) | Add TrustedRouter provider extension | CLOSED | 新增 TrustedRouter 提供商扩展，支持隐私保护路由 |
| [#97164](https://github.com/openclaw/openclaw/pull/97164) | prevent daily rollover splitting active transcripts | OPEN | 修复活跃会话在每日轮换时被拆分的问题 |

### 正在推进的关键 PR

| PR 编号 | 标题 | 状态 | 优先级 |
|---------|------|------|--------|
| [#97166](https://github.com/openclaw/openclaw/pull/97166) | feat(media): allow host-read vCard (.vcf) files | OPEN | P2 |
| [#97145](https://github.com/openclaw/openclaw/pull/97145) | fix(approval): distinguish policy vs non-persistable reason | OPEN | P2 |
| [#97169](https://github.com/openclaw/openclaw/pull/97169) | fix(feishu): preserve identity on aborted startup probe | OPEN | P1 |
| [#93218](https://github.com/openclaw/openclaw/pull/93218) | feat: add session stream mode command | OPEN | P2 |
| [#97167](https://github.com/openclaw/openclaw/pull/97167) | fix #96840: Targetless message.send fails in WebChat | OPEN | P2 |
| [#94335](https://github.com/openclaw/openclaw/pull/94335) | fix(subagent): reconcile child output before lost-context sweep | OPEN | P2 |
| [#94235](https://github.com/openclaw/openclaw/pull/94235) | fix(cron): unconditionally allow empty assistant replies | OPEN | P1 |
| [#97131](https://github.com/openclaw/openclaw/pull/97131) | Fix ACP manual-spawn task tracking | OPEN | P2 |
| [#51762](https://github.com/openclaw/openclaw/pull/51762) | feat: configurable default agent ID (escape the 'main' prison) | OPEN | P2 |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition — orphaned processes | 17 | SIGUSR1 重启时进程竞态条件导致孤儿进程 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading for progressive context control | 17 | 分层加载引导文件以控制上下文窗口消耗 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir are silently ignored | 14 | agentDir 中的引导文件被静默忽略 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit support for agent messages | 13 | 支持 Slack Block Kit 消息格式 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | Post-subagent completion extension hook | 12 | 子代理完成后触发扩展钩子 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 12 | 按来源标记记忆信任级别 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks (hard gates) | 11 | 强制执行工具调用前的硬性门控 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook sessions should reuse existing session | 9 | Webhook 会话应复用现有会话 |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker Install + Sandbox can't workspaceAccess at all | 9 | Docker 环境下沙箱无法访问工作区 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem Sandboxing Config (tools.fileAccess) | 9 | 文件系统沙箱访问控制配置 |

### 热点分析

**安全与权限类需求突出**：社区对 Memory Trust Tagging (#7707)、Pre-response enforcement hooks (#13583)、Filesystem Sandboxing (#7722)、Capability-based permissions (#12678) 等安全相关功能表现出强烈关注，反映用户对 AI Agent 安全可控的重视。

**上下文管理优化需求旺盛**：Tiered bootstrap file loading (#22438)、Reduce tool schema token overhead (#14785)、Memory/Embedding setup (#16670) 等议题均指向降低 token 消耗、提升上下文效率的核心诉求。

**多渠道集成持续热门**：Slack Block Kit (#12602)、Telegram Business Bot (#20786)、WhatsApp message delete (#14344) 等跨平台功能请求活跃，显示 OpenClaw 作为多渠道 AI 助手框架的广泛应用场景。

---

## 5. Bug 与稳定性

### P1 严重 Bug（需立即关注）

| Issue 编号 | 标题 | 状态 | 已有 Fix PR? |
|------------|------|------|--------------|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon stop() race condition — orphaned processes | OPEN | 否 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | Bootstrap files in agentDir silently ignored | OPEN | 否 |
| [#25574](https://github.com/openclaw/openclaw/issues/25574) | Config warnings logged repeatedly, spamming error log | OPEN | 否 |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker + Sandbox can't workspaceAccess at all | OPEN | 否 |

### P2 重要 Bug

| Issue 编号 | 标题 | 状态 | 已有 Fix PR? |
|------------|------|------|--------------|
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook sessions not reusing existing session | OPEN | 否 |
| [#33102](https://github.com/openclaw/openclaw/issues/33102) | TUI: --deliver flag default config support | OPEN | 否 |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot support missing | OPEN | 否 |

### 稳定性风险提示

- **日志膨胀问题** (#25574)：配置警告每 10-15 秒重复记录，长期运行实例可能产生数千条重复日志
- **Docker 工作区访问** (#31331)：容器环境下沙箱绑定 /workspace 失败，影响核心功能
- **引导文件加载失效** (#29387)：agentDir 配置被静默忽略，可能导致用户自定义引导行为不生效

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（社区强烈期待）

| Issue 编号 | 标题 | 优先级 | 潜在价值 |
|------------|------|--------|----------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | P2 | 显著降低 token 消耗 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit support | P2 | 丰富 Slack 交互体验 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | Post-subagent completion extension hook | P2 | 增强工作流集成能力 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | P2 | 提升安全防护 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks | P2 | 满足高风险场景合规需求 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session) | P2 | 大幅降低每次会话成本 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | Backup/restore utility for config, cron jobs, session history | P2 | 完善运维能力 |
| [#26370](https://github.com/openclaw/openclaw/issues/26370) | Isolated cron scheduled jobs per agent | P1 | 支撑多租户部署 |
| [#23353](https://github.com/openclaw/openclaw/issues/23353) | Support Anthropic native server-side tools | P2 | 扩展模型能力边界 |

### 路线图信号分析

从 PR #51762（configurable default agent ID）和 #93218（session stream mode command）的推进来看，项目正在向**多代理架构**和**会话控制精细化**方向演进。Memory Trust Tagging、Pre-response hooks 等安全相关功能的高讨论度，暗示下一版本可能加强**企业级安全合规**能力。

---

## 7. 用户反馈摘要

### 核心痛点

1. **上下文窗口浪费严重**
   - Bootstrap 文件每次会话全量加载，消耗 ~3,500 tokens
   - 工具 schema 全量注入，不考虑实际使用场景
   - 用户呼吁分层加载和按需注入机制

2. **安全信任边界模糊**
   - 记忆条目无来源标记，无法区分用户指令与第三方内容
   - 技能权限不透明，存在潜在供应链风险
   - 缺乏强制执行的门控机制

3. **多渠道体验不一致**
   - Slack 不支持 Block Kit，消息呈现单调
   - WhatsApp 无法撤回消息
   - Telegram Business 模式消息接收缺失

4. **Docker/沙箱环境配置复杂**
   - 容器内工作区挂载失败
   - 沙箱文件系统访问控制不生效

### 用户满意点

- 子代理（subagent）功能受到好评，#22358 的扩展 hook 需求表明该功能已被广泛使用
- Webhook 集成基本可用，但会话复用逻辑需优化
- Cron 作业的静默失败处理得到认可（#94235 正在修复空回复问题）

---

## 8. 待处理积压

### 长期未响应的 P1/P2 Issues（超过 4 个月未获维护者回复）

| Issue 编号 | 创建日期 | 标题 | 最后更新 | 积压天数 |
|------------|----------|------|----------|----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | Memory Trust Tagging by Source | 2026-06-27 | ~145 天 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | 2026-02-03 | Filesystem Sandboxing Config | 2026-06-27 | ~145 天 |
| [#7476](https://github.com/openclaw/openclaw/issues/7476) | 2026-02-02 | WhatsApp sticker send support | 2026-06-27 | ~146 天 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | 2026-02-01 | Add denylist support for exec-approvals | 2026-06-27 | ~147 天 |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | 2026-02-09 | Slack Block Kit support | 2026-06-27 | ~139 天 |
| [#12678](https://github.com/openclaw/openclaw/issues/12678) | 2026-02-09 | Capability-based permissions for skills/tools | 2026-06-27 | ~139 天 |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) | 2026-02-09 | Built-in auto-update with configurable schedule | 2026-06-27 | ~139 天 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | 2026-02-10 | Pre-response enforcement hooks | 2026-06-27 | ~138 天 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | 2026-02-10 | Backup/restore utility | 2026-06-27 | ~138 天 |

### 建议关注

1. **安全类功能**（#7707, #7722, #6615, #12678）长期积压，建议优先评估纳入路线图
2. **多渠道功能**（#12602, #7476）用户期待度高，可考虑社区共建
3. **运维工具**（#13616, #12855）企业用户刚需，建议加快处理

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 更新总数 | 197 |
| - 新开/活跃 | 188 |
| - 已关闭 | 9 |
| PR 更新总数 | 500 |
| - 待合并 | 442 |
| - 已合并/关闭 | 58 |
| 新版本发布 | 0 |
| 评论数最多的 Issue | #22676 (17 条) |
| P1 Bug 总数 | 4 |
| P2 Bug 总数 | 3+ |

---

*本报告由 OpenClaw 项目动态监控系统自动生成 | 报告时间：2026-06-27*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-27  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**双极主导、垂直分化**的格局。OpenClaw 与 Hermes Agent 以日均 500+ PR 更新的超高速迭代领跑生态，二者在多渠道集成、上下文管理、安全合规等核心能力上形成直接竞争；cc-haha 聚焦桌面端用户体验优化，走差异化轻量化路线；Codex++ 则专注于多供应商模型聚合场景，但因版本稳定性问题正面临社区信任危机。整体而言，生态正处于从功能堆砌向工程化成熟度过渡的关键阶段，安全可控、多模态融合、本地化部署成为共同的技术演进方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/活跃) | PRs (待合并/已合并) | Release | 健康度评级 | 核心特征 |
|------|-------------------|---------------------|---------|-----------|----------|
| **OpenClaw** | 197 (188/9) | 500 (442/58) | 0 | 🟢 优秀 | 超高迭代速度，多 P1 Bug 并行处理 |
| **Hermes Agent** | 75 (57/18) | 500 (431/69) | 0 | 🟢 优秀 | 平台扩展激进，安全漏洞需关注 |
| **cc-haha** | 9 | 6 (5/1) | 0 | 🟡 良好 | 稳定迭代，聚焦 UI 优化 |
| **Codex++** | 31 (30/1) | 2 (2/0) | 0 | 🔴 需关注 | 高 Issue 积压，v1.2.18 稳定性危机 |

**数据洞察：** OpenClaw 与 Hermes Agent 的 PR 吞吐量相近（日均 ~500），但 OpenClaw 的 Issue 开放量是 Hermes 的 2.6 倍，反映其功能复杂度更高或社区参与更广泛。cc-haha 与 Codex++ 的规模约为前两者的 1/10-1/20，仍处于细分场景深耕阶段。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 以 **197 条 Issues + 500 条 PR** 的日更量稳居生态头部，其社区规模约为 cc-haha 的 22 倍、Codex++ 的 6 倍。更关键的是，其 PR 待合并队列（442 条）是 Hermes Agent（431 条）的 1.03 倍，表明 OpenClaw 在代码贡献量上略占优势。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| **架构定位** | 多渠道 AI 助手框架 | 本地优先 AI 助手 | 桌面端 AI 工具 | 多供应商聚合层 |
| **核心能力** | 渠道集成、subagent、cron | 语音唤醒、本地推理、桌面 GUI | 会话管理、UI 体验 | 模型切换、token 统计 |
| **安全路径** | Memory Trust Tagging、Capability-based permissions | MCP OAuth、TUI 冻结修复 | 权限配置优化 | 供应商隔离 |
| **上下文策略** | 分层引导文件加载（#22438） | 上下文压缩机制（存在数据丢失风险） | 轻量级会话 | 上下文保留（#1214） |

### 3.3 社区规模对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| 日均 Issue 增量 | 188 | 57 | 9 | 30 |
| 日均 PR 增量 | ~60 | ~70 | 6 | 2 |
| P1 Bug 积压 | 4 | 9 | 0 | 2+ |
| 长期未响应 Issue | 9+ (>4个月) | 多个 | 0 | 3+ |

**结论：** OpenClaw 在社区规模上领先 Hermes Agent，但 Hermes Agent 在安全漏洞数量上更需警惕。cc-haha 以小规模团队实现高质量输出，Codex++ 则面临增长瓶颈。

---

## 4. 共同关注的技术方向

### 4.1 多渠道/多平台集成（OpenClaw、Hermes Agent）

两个头部项目均将跨平台支持列为核心路线图：

- **Slack Block Kit 支持**（OpenClaw #12602）：富文本消息格式，13 条评论
- **Telegram Bot API 10.1 富消息**（Hermes Agent #44428）：sendRichMessage、表格、嵌套列表，8 条评论 + 6 👍
- **微信二维码 onboarding**（Hermes Agent #50044）：与 Telegram 体验对齐

**诉求本质：** 打破消息平台能力差异，实现一致的 AI 交互体验。

### 4.2 上下文效率优化（OpenClaw、Hermes Agent、cc-haha）

| 项目 | 具体诉求 | 影响 |
|------|----------|------|
| OpenClaw | 分层引导文件加载（#22438） | 降低 ~3,500 tokens/session |
| OpenClaw | 减少工具 schema token 开销（#14785） | 大幅降低会话成本 |
| Hermes Agent | 上下文压缩数据丢失修复（#29522, #28093） | 防止消息永久丢失 |
| cc-haha | Socket 连接稳定性（#917） | Windows 长任务可靠性 |

**诉求本质：** 在模型上下文窗口有限的前提下，最大化有效信息密度。

### 4.3 安全与权限控制（OpenClaw、Hermes Agent）

| 项目 | 安全功能 | 状态 |
|------|----------|------|
| OpenClaw | Memory Trust Tagging by Source（#7707） | 积压 145 天 |
| OpenClaw | Pre-response enforcement hooks（#13583） | 积压 138 天 |
| OpenClaw | Filesystem Sandboxing Config（#7722） | 积压 145 天 |
| Hermes Agent | 内存上下文注入数据泄露（#40170） | **P1 安全漏洞** |

**诉求本质：** 企业级安全合规，防止供应链攻击和数据泄露。

### 4.4 桌面端体验优化（cc-haha、Codex++、Hermes Agent）

| 项目 | 优化方向 |
|------|----------|
| cc-haha | 会话列表加载性能、标题气泡、启动延迟 |
| Hermes Agent | 桌面 GUI 自动滚动、主题定制、文本大小 |
| Codex++ | 批量会话删除、UI 视觉一致性 |

**诉求本质：** 从 CLI 工具向生产级桌面应用演进。

---

## 5. 差异化定位分析

### 5.1 目标用户分层

```
┌─────────────────────────────────────────────────────────────┐
│                    企业/高阶开发者                            │
│  ┌─────────────────┐    ┌─────────────────┐                  │
│  │   OpenClaw      │    │ Hermes Agent   │                  │
│  │  多渠道集成      │    │  本地推理/隐私  │                  │
│  │  subagent 架构  │    │  语音唤醒       │                  │
│  └─────────────────┘    └─────────────────┘                  │
│                                                             │
│                    个人开发者/极客                            │
│  ┌─────────────────┐    ┌─────────────────┐                  │
│  │   Codex++       │    │   cc-haha       │                  │
│  │  多供应商聚合    │    │  桌面端优化     │                  │
│  │  token 统计     │    │  轻量级工具     │                  │
│  └─────────────────┘    └─────────────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| **核心语言** | 多语言（推测） | 多语言 | 多语言 | 多语言 |
| **部署模式** | 服务器/云原生 | 本地优先 + 云端 | 桌面端 | 桌面端 |
| **模型绑定** | 厂商 agnostic | Ollama/GGUF 优先 | Claude Code 集成 | 多供应商切换 |
| **扩展机制** | Provider extension、subagent | MCP、skills-index | CLI 插件 | 供应商插件 |
| **安全模型** | Capability-based | MCP OAuth | 权限配置 | 供应商隔离 |

### 5.3 商业化路径暗示

- **OpenClaw**：企业多渠道 AI 助手平台，对标 Intercom/Zendesk AI
- **Hermes Agent**：本地优先隐私 AI，对标 PrivateGPT/Ollama
- **cc-haha**：Claude Code 桌面增强工具，依赖 Anthropic 生态
- **Codex++**：多模型聚合中间件，定位模型路由层

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|------|------|------|----------|
| **第一梯队** | OpenClaw、Hermes Agent | 日均 500+ PR，100+ Issue | 🔥 快速迭代期，功能高速扩张 |
| **第二梯队** | cc-haha | 日均 6 PR，9 Issue | ⚙️ 稳定优化期，质量打磨 |
| **第三梯队** | Codex++ | 日均 2 PR，30 Issue | ⚠️ 问题消化期，版本稳定性优先 |

### 6.2 成熟度评估

| 评估维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|----------|----------|-------------|---------|---------|
| **Bug 响应速度** | 高（多 P1 并行处理） | 中（安全漏洞积压） | 高 | 低（v1.2.18 危机） |
| **版本稳定性** | 中（无 Release，但 PR 质量可控） | 中（上下文压缩有风险） | 高 | 低（回归问题频发） |
| **社区治理** | 活跃（Slack/Feishu 集成） | 活跃（多平台反馈） | 良好（核心贡献者稳定） | 需改善（Issue 积压） |
| **文档完整性** | 推测良好 | 推测良好 | 推测良好 | 推测一般 |

### 6.3 关键风险项

| 项目 | 最高风险 | 建议 |
|------|----------|------|
| OpenClaw | 9 个长期未响应 Issue（安全类为主） | 优先处理 #7707、#7722、#6615 |
| Hermes Agent | #40170 安全漏洞（内存上下文泄露） | **立即评估修复** |
| cc-haha | #917 Windows socket 稳定性 | 0.4.3 版本补丁 |
| Codex++ | v1.2.18 全面回归 | 紧急发布补丁或回滚 |

---

## 7. 值得关注的趋势信号

### 7.1 安全可控成为核心竞争力

**信号强度：** ⭐⭐⭐⭐⭐

OpenClaw 的 Memory Trust Tagging（#7707，145 天积压）、Pre-response hooks（#13583）、Hermes Agent 的内存上下文泄露（#40170）均表明：

> **行业正在从「功能优先」转向「安全优先」**，企业级 AI Agent 的信任边界、权限最小化、审计追溯能力将从「nice to have」变为「must have」。

**对开发者的建议：** 在架构设计阶段引入 Capability-based security 模型，提前规划 Memory Trust 机制。

### 7.2 本地推理与隐私保护成为差异化卖点

**信号强度：** ⭐⭐⭐⭐

Hermes Agent 的 "Hey Hermes" 纯本地语音唤醒（#53378）、Ollama/GGUF 优先支持、cc-haha 的离线能力优化表明：

> **本地优先（Local-first）正在从极客圈向主流渗透**，隐私敏感场景（医疗、金融、法律）将成为 AI Agent 的下一个爆发点。

**对开发者的建议：** 提前布局 Ollama/MLX 集成能力，优化本地推理性能。

### 7.3 多渠道统一体验成为标配

**信号强度：** ⭐⭐⭐

Slack Block Kit、Telegram 10.1、微信 onboarding 的并行需求表明：

> **用户期望在任意平台上获得一致的 AI 能力**，跨平台适配将从定制开发转向框架原生支持。

**对开发者的建议：** 选择多渠道集成能力成熟的框架，降低自研成本。

### 7.4 上下文效率优化进入深水区

**信号强度：** ⭐⭐⭐⭐

分层引导文件加载（#22438）、工具 schema 按需注入（#14785）、上下文压缩防丢失（#29522）等议题表明：

> **Token 成本优化已从「减少浪费」进入「智能调度」阶段**，按需加载、动态 schema、压缩安全机制将成为技术壁垒。

**对开发者的建议：** 关注分层加载、增量上下文更新等前沿方案。

### 7.5 桌面端从 CLI 向 GUI 演进

**信号强度：** ⭐⭐⭐

cc-haha 的会话列表优化、Hermes Agent 的主题/字体定制、Codex++ 的批量操作表明：

> **AI Agent 工具正在从命令行向生产级桌面应用升级**，UI/UX 质量将成为用户留存的关键因素。

**对开发者的建议：** 投入桌面端 UX 优化，参考 VS Code 的交互范式。

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| 日均 Issues | 188 | 57 | 9 | 30 |
| 日均 PRs | ~60 | ~70 | 6 | 2 |
| P1 Bug | 4 | 9 | 0 | 2+ |
| 安全漏洞 | 0（积压） | 1（#40170） | 0 | 0 |
| 长期积压 Issue | 9+ | 多个 | 0 | 3+ |
| 路线图信号 | 多代理架构、安全合规 | 本地优先、语音唤醒 | 桌面端优化 | 多供应商聚合 |

---

**报告结论：** 当前生态呈现「两强主导、多点突破」的格局。OpenClaw 与 Hermes Agent 在技术深度和社区规模上领先，但均面临安全功能积压和特定场景稳定性问题；cc-haha 以轻量化路线在细分场景建立优势；Codex++ 需优先解决版本信任危机。对于 AI 智能体开发者，建议优先关注 OpenClaw 的多渠道架构和 Hermes Agent 的本地推理方案，同时密切跟踪安全可控、本地优先两大趋势。

---

*本报告基于 2026-06-27 GitHub 公开数据生成 | 分析师：MiniMax-M2.7*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-06-27  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

过去 24 小时，Hermes Agent 项目保持极高活跃度：共处理 **75 条 Issues 更新**（57 条新开/活跃，18 条关闭）和 **500 条 PR 更新**（431 条待合并，69 条已合并/关闭）。项目整体呈现快速迭代态势，未发布新版本但有多个重要 Bug 修复和功能 PR 进入合并阶段。今日社区讨论焦点集中在 Telegram Bot API 10.1 富消息支持、macOS 平台稳定性问题（launchd 重启、桌面应用段错误）以及上下文压缩机制的行为异常。建议优先关注 3 个 P1 级安全/稳定性问题。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时已合并/关闭的重要 PR：

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#39323](https://github.com/NousResearch/hermes-agent/pull/39323) | Bug Fix | 抑制所有聊天网关的操作状态/错误噪音（不仅是 Telegram） | ✅ 已关闭 |
| [#36207](https://github.com/NousResearch/hermes-agent/pull/36207) | Bug Fix | 修复流式工具调用参数拼接问题，防止 JSON 载荷粘连 | ✅ 已关闭 |
| [#36810](https://github.com/NousResearch/hermes-agent/pull/36810) | Bug Fix | 阻止不可修复的编辑工具参数被清空为 `{}`，避免重复恢复循环 | ✅ 已关闭 |

**进入待合并队列的重要 PR：**

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#53336](https://github.com/NousResearch/hermes-agent/pull/53336) | Bug Fix | MCP EventBridge 轮询异常现在记录日志而非静默吞掉 | ⏳ 待合并 |
| [#41500](https://github.com/NousResearch/hermes-agent/pull/41500) | Bug Fix | Ollama 输出长度截断修复 + GGUF 上下文检测 | ⏳ 待合并 |
| [#53380](https://github.com/NousResearch/hermes-agent/pull/53380) | Bug Fix | 网关卫生压缩失败添加有界超时和会话冷却机制 | ⏳ 待合并 |
| [#53381](https://github.com/NousResearch/hermes-agent/pull/53381) | Bug Fix | TUI 网关 SIGINT 处理替换为两阶段处理器，修复卡死问题 | ⏳ 待合并 |
| [#53383](https://github.com/NousResearch/hermes-agent/pull/53383) | Bug Fix | Cron 投递前剥离未标记的推理前导文本 | ⏳ 待合并 |
| [#53378](https://github.com/NousResearch/hermes-agent/pull/53378) | Feature | 新增 "Hey Hermes" 语音唤醒词功能，纯本地运行 | ⏳ 待合并 |
| [#53375](https://github.com/NousResearch/hermes-agent/pull/53375) | Feature | CLI/TUI 状态栏显示提供商配额和速率限制 | ⏳ 待合并 |
| [#50044](https://github.com/NousResearch/hermes-agent/pull/50044) | Feature | 微信网页端二维码 onboarding，与 Telegram 体验对齐 | ⏳ 待合并 |

---

## 4. 社区热点

**评论数最多的 Issues（讨论最活跃）：**

| 编号 | 标题 | 评论数 | 👍 | 链接 |
|------|------|--------|-----|------|
| #38240 | [skills-index-watchdog] Skills index is stale or degraded | 18 | 0 | [查看](https://github.com/NousResearch/hermes-agent/issues/38240) |
| #44428 | [Feature]: Support Telegram Bot API 10.1 Rich Messages | 8 | 6 | [查看](https://github.com/NousResearch/hermes-agent/issues/44428) |
| #43564 | [Bug]: `hermes update` workspace refresh can prune repo-root `agent-browser` dependency | 8 | 2 | [查看](https://github.com/NousResearch/hermes-agent/issues/43564) |
| #42006 | macOS: launchd_restart missing bootout before bootstrap | 7 | 0 | [查看](https://github.com/NousResearch/hermes-agent/issues/42006) |
| #34120 | [Bug]: cronjob tool create action always fails with "schedule is required" | 6 | 2 | [查看](https://github.com/NousResearch/hermes-agent/issues/34120) |
| #44147 | [Bug]: Web dashboard cannot load messages for non-default profile sessions | 6 | 0 | [查看](https://github.com/NousResearch/hermes-agent/issues/44147) |
| #52261 | [Bug]: Provider memory/resource 400s misclassified as `context_overflow` | 5 | 0 | [查看](https://github.com/NousResearch/hermes-agent/issues/52261) |
| #31668 | [Bug]: Hermes w/ Anthropic models ratelimit/extra usage | 5 | 1 | [查看](https://github.com/NousResearch/hermes-agent/issues/31668) |
| #12020 | [Feature]: How to prevent output of `hermes.tool.progress` event | 5 | 0 | [查看](https://github.com/NousResearch/hermes-agent/issues/12020) |

**热点分析：**

1. **Skills Index 降级问题（#38240，18 条评论）**：这是今日讨论最激烈的问题。自动化新鲜度探测失败，Skills Hub 依赖的 `/docs/api/skills-index.json` 索引重建失败（GitHub Actions cron 任务未正常运行）。社区正在积极排查 `.github/workflows/skills-index.yml` 和 `.github/workflows/deploy-site.yml` 的触发条件。

2. **Telegram Bot API 10.1 富消息支持（#44428，8 条评论，6 👍）**：Telegram 于 6 月 11 日发布了 Bot API 10.1，新增 `sendRichMessage`、`sendRichMessageDraft` 及丰富的块级元素（表格、标题、嵌套列表、内联媒体、数学公式等）。社区强烈请求 Hermes 尽快适配，已有对应 PR [#53377](https://github.com/NousResearch/hermes-agent/pull/53377) 添加测试配方。

3. **macOS 平台稳定性（#42006，7 条评论）**：launchd 重启逻辑存在缺陷，更新后网关回退到 detached 模式。这是影响 macOS 用户生产使用的重要问题。

---

## 5. Bug 与稳定性

**按严重程度排列的活跃 Bug：**

### P1（关键/紧急）

| 编号 | 描述 | 状态 | 已有 Fix PR? |
|------|------|------|-------------|
| [#42006](https://github.com/NousResearch/hermes-agent/issues/42006) | macOS launchd_restart 缺少 bootout，导致更新后网关回退到 detached | 开放 | ❌ |
| [#46789](https://github.com/NousResearch/hermes-agent/issues/46789) | macOS 桌面应用进程执行段错误（exit code -11），terminal/execute_code/read_file 均失败 | 开放 | ❌ |
| [#20250](https://github.com/NousResearch/hermes-agent/issues/20250) | VS Code ACP 会话在重复压缩超时后可能无限期处于飞行状态 | 开放 | ❌ |
| [#29522](https://github.com/NousResearch/hermes-agent/issues/29522) | 自动上下文压缩可能隐藏或丢弃刚完成的助手回复 | 开放 | ❌ |
| [#28093](https://github.com/NousResearch/hermes-agent/issues/28093) | 上下文压缩期间丢弃用户消息 | 开放 | ❌ |
| [#40170](https://github.com/NousResearch/hermes-agent/issues/40170) | **[安全]** 使用 Honcho 作为内存提供商时，客户面向的网关在 API 调用用户消息层注入 `<memory-context>` 块，可能导致数据泄露 | 开放 | ❌ |
| [#27715](https://github.com/NousResearch/hermes-agent/issues/27715) | get_hermes_dir 向后兼容解析器静默覆盖新路径数据 | 开放 | ❌ |
| [#35927](https://github.com/NousResearch/hermes-agent/issues/35927) | MCP OAuth 授权时 TUI 冻结 | 开放 | ❌ |
| [#24100](https://github.com/NousResearch/hermes-agent/issues/24100) | Discord 审批提示路由到错误的线程——会话密钥跨并发网关泄漏 | 开放 | ❌ |

### P2（重要）

| 编号 | 描述 | 状态 | 已有 Fix PR? |
|------|------|------|-------------|
| [#43564](https://github.com/NousResearch/hermes-agent/issues/43564) | `hermes update` 可能剪除 repo-root `agent-browser` 依赖 | 开放 | ❌ |
| [#34120](https://github.com/NousResearch/hermes-agent/issues/34120) | cronjob 工具 create 操作始终失败 | 开放 | ❌ |
| [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) | 本地推理（oMLX/MLX）资源 400 错误被误分类为 `context_overflow`，导致破坏性压缩/重置循环 | 开放 | ❌ |
| [#31668](https://github.com/NousResearch/hermes-agent/issues/31668) | Hermes + Anthropic 模型速率限制/额外使用问题 | 开放 | ❌ |
| [#53374](https://github.com/NousResearch/hermes-agent/issues/53374) | Windows 睡眠后桌面 GUI 创建新会话（WebSocket 断开，会话上下文丢失） | 开放 | ❌ |

### P3（一般）

| 编号 | 描述 | 状态 | 已有 Fix PR? |
|------|------|------|-------------|
| [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) | Skills index 过期或降级 | 开放 | ❌ |
| [#44147](https://github.com/NousResearch/hermes-agent/issues/44147) | Web dashboard 无法加载非默认 profile 会话的消息 | 开放 | ❌ |
| [#45520](https://github.com/NousResearch/hermes-agent/issues/45520) | Linux VPS WebGL 不可用（llvmpipe）导致 /chat 页面报错 | 开放 | ❌ |
| [#46131](https://github.com/NousResearch/hermes-agent/issues/46131) | Ollama 推理模型返回空内容 | 开放 | ❌ |
| [#52318](https://github.com/NousResearch/hermes-agent/issues/52318) | /agents TUI 命令不更新子代理完成状态 | 开放 | ❌ |
| [#53382](https://github.com/NousResearch/hermes-agent/issues/53382) | here-now 技能使用无效的前置元数据名称 'here.now' | 开放 | ❌ |

---

## 6. 功能请求与路线图信号

**高关注度功能请求：**

| 编号 | 功能描述 | 评论数 | 👍 | 预计纳入版本 | 链接 |
|------|----------|--------|-----|-------------|------|
| #44428 | Telegram Bot API 10.1 富消息支持（Rich Messages、sendRichMessageDraft、表格/标题/列表等块元素） | 8 | 6 | 即将（已有测试 PR） | [查看](https://github.com/NousResearch/hermes-agent/issues/44428) |
| #53378 | "Hey Hermes" 语音唤醒词，纯本地运行，无需云端 | 0 | 0 | 待审查（PR 已开） | [查看 PR](https://github.com/NousResearch/hermes-agent/pull/53378) |
| #53375 | CLI/TUI 状态栏显示提供商配额和速率限制 | 0 | 0 | 待审查（PR 已开） | [查看 PR](https://github.com/NousResearch/hermes-agent/pull/53375) |
| #44140 | 桌面 GUI 自动滚动、侧边栏重叠修复、自定义会话分组 | 3 | 4 | 路线图中 | [查看](https://github.com/NousResearch/hermes-agent/issues/44140) |
| #53349 | 支持 cwd-local soul.md 实现按目录代理身份 | 2 | 0 | 路线图中 | [查看](https://github.com/NousResearch/hermes-agent/issues/53349) |
| #39020 | 桌面应用专用 Providers 设置区域，支持按提供商管理 API Key 和启用/禁用 | 2 | 1 | 路线图中 | [查看](https://github.com/NousResearch/hermes-agent/issues/39020) |
| #12020 | 提供开关关闭 `hermes.tool.progress` 事件输出，解决 OpenAI 兼容前端解析失败 | 5 | 0 | 待评估 | [查看](https://github.com/NousResearch/hermes-agent/issues/12020) |
| #50044 | 微信网页端二维码 onboarding（与 Telegram 体验对齐） | 0 | 0 | 待审查（PR 已开） | [查看 PR](https://github.com/NousResearch/hermes-agent/pull/50044) |
| #49958 | 桌面应用新增 cmux 主题（黑色聊天面、终端绿正文） | 0 | 0 | 待审查（PR 已开） | [查看 PR](https://github.com/NousResearch/hermes-agent/pull/49958) |
| #49902 | 桌面应用外观设置：可调文本大小 + 聊天宽度 | 0 | 0 | 待审查（PR 已开） | [查看 PR](https://github.com/NousResearch/hermes-agent/pull/49902) |

**路线图信号分析：**
- **平台扩展**：Telegram 10.1 富消息、微信 onboarding 表明项目持续强化多平台支持
- **桌面应用成熟化**：多个 UI/UX 改进 PR（主题、文本大小、聊天宽度、自动滚动）表明桌面客户端正在走向生产就绪
- **本地优先**："Hey Hermes" 唤醒词纯本地运行，契合隐私敏感用户需求
- **可观测性**：状态栏配额显示、Provider 配额追踪反映用户对成本控制的需求

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点和使用场景：

### 痛点

1. **macOS 平台稳定性堪忧**
   - 多个用户报告 `hermes update` 后 launchd 重启失败（#42006）
   - 桌面应用段错误问题严重影响 macOS 用户（#46789）
   - Windows 睡眠恢复后会话丢失（#53374）

2. **上下文压缩机制存在数据丢失风险**
   - 压缩期间用户消息可能永久丢失（#28093）
   - 刚完成的助手回复被隐藏或丢弃（#29522）
   - VS Code ACP 会话在压缩失败后无限期挂起（#20250）

3. **本地推理支持不完善**
   - Ollama 推理模型返回空内容（#46131）
   - oMLX/MLX 资源错误被误分类为 context_overflow，触发破坏性重置循环（#52261）

4. **多平台消息格式兼容性问题**
   - Discord 不支持 Markdown 表格，渲染为乱码（#21168，已关闭）
   - Telegram 富消息支持缺失（#44428）

### 使用场景

- **个人 AI 助手**：通过 Telegram/Discord/WhatsApp 与 Hermes 交互
- **本地 LLM 部署**：使用 Ollama/GGUF 模型进行私有化部署
- **开发者工作流**：VS Code 集成、ACP 会话管理
- **企业场景**：多 Provider 配额管理、内存上下文注入（安全漏洞关注）

### 满意/不满意

- **不满意**：平台特定问题（mac

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期：** 2026-06-27  
**数据来源：** GitHub NanmiCoder/cc-haha

---

## 1. 今日速览

过去24小时，cc-haha 项目保持高度活跃，共产生 **9 条新 Issue** 和 **6 条 PR 更新**。项目整体呈现良好的开发节奏，1 个 PR 已合并（#915），5 个 PR 处于待合并状态，均来自核心贡献者 @zhbdesign。社区讨论围绕 **API 连接稳定性** 和 **桌面端 UI 体验** 两个主题展开，其中 Issue #917（socket 连接异常）引发最多关注（8 条评论）。项目健康度评级：**良好** — 维护响应及时，功能迭代稳步推进。

---

## 2. 版本发布

**无新版本发布。** 上一个正式版本为 0.4.3（用户反馈存在 Windows 长篇报告场景下的 socket 连接问题）。

---

## 3. 项目进展

### 已合并 PR

| PR | 标题 | 变更范围 | 状态 |
|----|------|----------|------|
| [#915](https://github.com/NanmiCoder/cc-haha/pull/915) | 优化会话列表加载性能，会话标题添加气泡 | desktop / server / cli-core | ✅ 已合并 |

**说明：** 该 PR 合并后，相关优化内容在 PR #925 中继续迭代，变更范围涵盖会话列表加载性能优化及标题气泡功能增强。

### 待合并 PR（5 条）

| PR | 标题 | 规模 | 范围 |
|----|------|------|------|
| [#931](https://github.com/NanmiCoder/cc-haha/pull/931) | 优化 trace 加载页大小，增加清空按钮 | M | desktop / server |
| [#930](https://github.com/NanmiCoder/cc-haha/pull/930) | 优化 Settings/Scheduled/Traces 等非 session tab 切换缓存 | M | desktop |
| [#927](https://github.com/NanmiCoder/cc-haha/pull/927) | 优化切换项目提示词消失 | S | desktop |
| [#921](https://github.com/NanmiCoder/cc-haha/pull/921) | 修复新会话运行按钮转为停止按钮的延迟 | L | desktop |
| [#925](https://github.com/NanmiCoder/cc-haha/pull/925) | 优化会话列表加载性能，会话标题添加气泡 | L | desktop / server |

**评估：** 所有待合并 PR 均来自 @zhbdesign，聚焦 **桌面端 UI 优化** 和 **交互体验修复**，预计将在维护者审核后陆续合并。

---

## 4. 社区热点

### 讨论最活跃的 Issues

**🥇 Issue #917** — API Error: The socket connection was closed unexpectedly  
- **活跃度：** 8 条评论  
- **链接：** https://github.com/NanmiCoder/cc-haha/issues/917  
- **摘要：** Windows 用户在使用 0.4.3 版本进行大模型长篇报告生成时，频繁遇到 socket 连接意外关闭的错误。用户已提供参考链接指向 Claude Code 官方 issue 中的类似问题及解决方案。  
- **诉求分析：** 核心痛点为 **生产环境稳定性**，用户期望在长时间任务中保持连接可靠。

**🥈 Issue #928** — 部分模型读取非 PDF 文件时误传 pages 参数  
- **活跃度：** 1 条评论  
- **链接：** https://github.com/NanmiCoder/cc-haha/issues/928  
- **摘要：** GPT 等模型调用 Read 工具读取非 PDF 文件（如 .png、.py、.ts）时，系统错误地传递了 `pages` 参数，导致 Invalid pages parameter 错误循环。  
- **诉求分析：** 工具调用参数校验问题，影响非 PDF 文件处理流程。

**🥉 Issue #910** — 权限给到最高权限跳过，为什么还要审批点运行  
- **活跃度：** 1 条评论  
- **链接：** https://github.com/NanmiCoder/cc-haha/issues/910  
- **摘要：** 用户反馈即使授予最高权限，仍需手动点击审批才能运行，交互流程存在冗余。  
- **诉求分析：** **用户体验优化**，期望权限配置能真正实现免审批执行。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 优先级 | Issue | 描述 | 评论数 | 状态 |
|--------|-------|------|--------|------|
| 🔴 高 | [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | Windows socket 连接意外关闭（长任务场景） | 8 | 开放 |
| 🔴 高 | [#928](https://github.com/NanmiCoder/cc-haha/issues/928) | 非 PDF 文件误传 pages 参数导致错误循环 | 1 | 开放 |
| 🟡 中 | [#923](https://github.com/NanmiCoder/cc-haha/issues/923) | ripgrep 不可用错误 | 1 | 开放 |
| 🟡 中 | [#924](https://github.com/NanmiCoder/cc-haha/issues/924) | MAC 桌面端启动延迟约 1 分钟 | 0 | 开放 |
| 🟡 中 | [#926](https://github.com/NanmiCoder/cc-haha/issues/926) | 输入的 skill 消息被隐藏 | 0 | 开放 |
| 🟢 低 | [#932](https://github.com/NanmiCoder/cc-haha/issues/932) | 保存记忆时 md 预览框位置异常 | 0 | 开放 |

**稳定性评估：** 当前存在 **2 个高优先级 Bug** 待修复，均涉及核心功能可用性。建议优先处理 #917（影响 Windows 生产环境）和 #928（影响多模型文件读取）。

---

## 6. 功能请求与路线图信号

### 新增功能请求

| Issue | 请求内容 | 链接 |
|-------|----------|------|
| #929 | 配置页增加 `CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS` 开关，兼容第三方 API 通道 | [查看](https://github.com/NanmiCoder/cc-haha/issues/929) |
| #922 | 支持 ACP (Agent Client Protocol) 协议 | [查看](https://github.com/NanmiCoder/cc-haha/issues/922) |

### 功能请求分析

- **#929 第三方 API 兼容性：** 用户期望通过配置开关禁用实验性功能，以兼容非官方 Claude API 通道。这是一个明确的 **企业/开发者需求**，已有详细实现方案（README 确认、第三方模型指南确认），预计纳入下一版本的可行性较高。

- **#922 ACP 协议支持：** 用户期望 cc-haha 支持 Anthropic 推动的 Agent 间通信标准协议，可作为客户端或服务端。需求描述完整，包含具体用例（连接外部 Agent 服务端、暴露自身为服务端）。该功能涉及架构层面变更，短期内可能不会实现，但代表了项目 **长期互操作性方向**。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 反馈内容 | 来源 |
|------|----------|------|
| **Windows 长任务稳定性** | "Windows 下使用最新 0.4.3 版本，在大模型写长篇报告时高可复现" | #917 |
| **权限配置体验** | "权限给到最高权限跳过，为什么还要审批点运行" | #910 |
| **MAC 启动性能** | "mac 桌面端启动后似乎要等1分钟才能真正发出消息" | #924 |
| **文件读取健壮性** | "GPT 等 AI 模型在调用 Read 工具读取非 PDF 文件时误传 pages 参数" | #928 |

### 正面反馈信号

- 用户积极提交详细 Issue（包含截图、日志、复现步骤），说明社区参与度高
- 核心贡献者 @zhbdesign 持续输出高质量 PR，维护者响应及时

---

## 8. 待处理积压

### 需关注的重要 Issue（长期未响应或高优先级）

| Issue | 描述 | 创建时间 | 评论数 | 建议 |
|-------|------|----------|--------|------|
| [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | Windows socket 连接异常 | 2026-06-25 | 8 | 🔴 优先处理，已有社区讨论 |
| [#928](https://github.com/NanmiCoder/cc-haha/issues/928) | 非 PDF 文件 pages 参数错误 | 2026-06-26 | 1 | 🔴 优先处理，影响多模型 |
| [#922](https://github.com/NanmiCoder/cc-haha/issues/922) | ACP 协议支持 | 2026-06-26 | 0 | 🟡 架构层面需求，需评估 |

### PR 积压提醒

| PR | 状态 | 建议 |
|----|------|------|
| [#931](https://github.com/NanmiCoder/cc-haha/pull/931) | 待合并 | 建议维护者审核 |
| [#930](https://github.com/NanmiCoder/cc-haha/pull/930) | 待合并 | 建议维护者审核 |
| [#927](https://github.com/NanmiCoder/cc-haha/pull/927) | 待合并 | 建议维护者审核 |
| [#921](https://github.com/NanmiCoder/cc-haha/pull/921) | 待合并 | 建议维护者审核 |
| [#925](https://github.com/NanmiCoder/cc-haha/pull/925) | 待合并 | 建议维护者审核 |

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issue | 9 | 📈 +9 |
| 新增 PR | 6 | 📈 +6 |
| PR 合并 | 1 | ✅ |
| 待合并 PR | 5 | ⏳ |
| 高优先级 Bug | 2 | ⚠️ |
| 新功能请求 | 2 | 💡 |

---

**报告生成时间：** 2026-06-27  
**数据截止：** 2026-06-27 23:59 UTC

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-27  
**项目仓库：** github.com/BigPizzaV3/CodexPlusPlus

---

## 1. 今日速览

2026年6月27日，Codex++ 项目保持高度活跃，共产生 **31 条 Issue 更新**（30条新开/活跃，1条关闭）和 **2 条 PR 更新**（均待合并）。本日未发布新版本。项目当前面临的主要挑战集中在 **插件市场故障**、**多供应商模型兼容性**和**升级后稳定性**三大领域。社区反馈显示 v1.2.18 版本存在较多回归问题，建议维护者优先处理影响核心功能的 Bug。整体项目健康度评级：**⚠️ 需关注**（高活跃但问题积压较多）。

---

## 2. 版本发布

**本日无新版本发布。**

最近一个版本为 v1.2.18（根据 Issue #1217 用户反馈推测），但该版本存在较多问题反馈，建议关注维护者是否会紧急发布补丁版本。

---

## 3. 项目进展

### PR 状态

| PR 编号 | 标题 | 状态 | 贡献者 | 摘要 |
|---------|------|------|--------|------|
| [#1220](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1220) | feature(codex-plus-manager): add bulk session selection and delete | 待合并 | @fly233338 | 新增批量会话选择删除功能，复用 `deleteLocalSessions` 接口，支持多选操作 |
| [#907](https://github.com/BigPizzaV3/CodexPlusPlus/pull/907) | ui: align Codex++ injected UI with Codex appearance | 待合并 | @wangbax | 修复新版 Codex 桌面端 UI 视觉回归问题，统一暗色模式和控件风格 |

**进展评估：** 两个 PR 均处于待合并状态，#1220 解决了用户长期反馈的会话管理痛点，#907 改善了 UI 一致性问题，预计近期将合并。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 评论数 | 标题 | 热度分析 |
|------------|--------|------|----------|
| [#1169](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1169) | 5 | [Bug]: 更新1.2.18，提示修复插件市场，修复后，codex打开插件页面提示出错 | 🔥 **最高热度** - 插件市场功能完全不可用，影响大量用户 |
| [#888](https://github.com/BigPizzaV3/CodexPlusPlus/issues/888) | 4 | [Question]: codex++配置后测试没问题，但与codex对话出现了这个问题 | 供应商配置与实际运行不一致的典型问题 |
| [#1142](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1142) | 4 | [Bug]:手机控制不可用 | WebCrypto 兼容性问题，涉及移动端控制场景 |

**热点分析：**
- **插件市场问题**（#1169）引发最多讨论，用户反馈更新 v1.2.18 后插件页面完全无法访问，这是影响面极广的阻塞性问题
- **供应商配置问题**（#888, #1142）持续受到关注，说明多供应商切换场景下的兼容性测试存在盲区
- **Feature Request** #1214（供应商切换保留上下文）获得用户共鸣，反映了产品经理等非重度开发者对长周期项目的强需求

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 清单

#### 🔴 阻塞级（影响核心功能，无法正常使用）

| Issue | 标题 | 影响范围 | 状态 |
|-------|------|----------|------|
| [#1169](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1169) | 插件市场修复后仍报错 | 启动/重启 | OPEN |
| [#1205](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1205) | 升级后 Codex++ 无法启动 | 启动/重启 | OPEN |
| [#1217](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1217) | 更新后会话全部丢失、config.toml 被写入 BOM 头 | 供应商切换/配置写入 | **CLOSED** |
| [#1215](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1215) | 历史会话被清空，对话502错误 | 供应商管理 | OPEN |

#### 🟠 严重级（功能受限但可部分使用）

| Issue | 标题 | 影响范围 | 状态 |
|-------|------|----------|------|
| [#1063](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1063) | 使用mimo模型会话提示401 | 界面/交互 | OPEN |
| [#1194](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1194) | DeepSeek-v4-pro模型上传图片JSON解析异常 | 界面/交互 | OPEN |
| [#1142](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1142) | 手机控制不可用 | 其他 | OPEN |
| [#1210](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1210) | 混合API模式下Chrome/MCP工具不注入 | MCP/Chrome注入 | OPEN |

#### 🟡 一般级（体验问题）

| Issue | 标题 | 影响范围 | 状态 |
|-------|------|----------|------|
| [#1198](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1198) | 每次重启后插件恢复默认三个 | MCP/skills/plugins | OPEN |
| [#773](https://github.com/BigPizzaV3/CodexPlusPlus/issues/773) | 6月2日新增的插件都没有显示 | MCP/skills/plugins | OPEN |
| [#1206](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1206) | 识别到的.codex目录与实际目录不符 | 供应商切换/配置写入 | OPEN |

**Bug 修复进展：**
- ✅ **#1217** 已关闭（config.toml BOM 头问题），建议确认修复方案是否已合并
- ⚠️ 其他 20+ Bug 均为 OPEN 状态，v1.2.18 版本稳定性堪忧

---

## 6. 功能请求与路线图信号

### 高价值 Feature Requests

| Issue | 标题 | 用户场景 | 关联 PR | 纳入可能性 |
|-------|------|----------|---------|------------|
| [#1214](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1214) | 供应商切换保留上下文 | 产品经理长周期项目，需跨模型继续对话 | - | ⭐⭐⭐ 高 |
| [#1028](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1028) | 增加token统计、重置功能 | 多供应商用户需手动查询用量 | - | ⭐⭐ 中 |
| [#1191](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1191) | 自动过滤不支持多模态模型的消息图片 | DeepSeek V4 等模型不支持图片输入 | - | ⭐⭐ 中 |
| [#1209](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1209) | 增加原生工具类型映射配置 | 第三方模型工具调用兼容 | 关联 #586 | ⭐⭐⭐ 高 |
| [#1202](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1202) | 目标模式自动错误恢复与重试机制 | 长时间自动化任务无人值守 | - | ⭐⭐ 中 |

**路线图信号分析：**
- **供应商切换体验优化** 是当前最强烈的用户诉求（#1214），涉及上下文保留、模型能力判断等
- **Token 用量统计** 需求明确，与多供应商管理痛点契合
- **#1220 PR** 已实现批量会话删除，预计下版本合并

---

## 7. 用户反馈摘要

### 核心痛点

1. **升级即崩溃**（#1205, #1217）
   > "升级后点击 Codex++ 没有反应"、"更新后会话全部丢失、config.toml 被写入 BOM 头"
   - **情绪：** 沮丧，信任度下降
   - **根因：** v1.2.18 版本存在破坏性变更

2. **插件市场形同虚设**（#1169, #773, #1198）
   > "打开插件页面后提示出错"、"6月2日新增的插件都没有显示"、"每次重启后插件恢复默认"
   - **情绪：** 失望
   - **根因：** 插件持久化机制存在缺陷

3. **多供应商兼容性问题**（#888, #1063, #1194）
   > "配置后测试没问题，但与codex对话出现 stream disconnected"、"使用mimo模型会话提示401"
   - **情绪：** 困惑
   - **根因：** Responses API 与 Chat Completions API 转换层存在兼容性问题

### 用户场景洞察

- **产品经理群体**（#1214）：需要跨模型、长周期、保留上下文的工作流
- **自动化开发者**（#1202）：需要无人值守的错误恢复机制
- **多供应商用户**（#1028）：需要统一的用量监控

### 满意度信号

- **正面：** 批量会话删除 PR（#1220）获得社区期待
- **负面：** v1.2.18 版本的回归问题严重影响用户信任

---

## 8. 待处理积压

### 长期未解决的重要 Issues

| Issue | 创建时间 | 标题 | 未响应天数 | 优先级 |
|-------|----------|------|------------|--------|
| [#888](https://github.com/BigPizzaV3/CodexPlusPlus/issues/888) | 2026-06-11 | stream disconnected 问题 | ~16天 | 🔴 高 |
| [#773](https://github.com/BigPizzaV3/CodexPlusPlus/issues/773) | 2026-06-08 | 6月2日新增的插件都没有显示 | ~19天 | 🟠 中 |
| [#1063](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1063) | 2026-06-17 | mimo模型401错误 | ~10天 | 🟠 中 |

### 建议维护者关注

1. **v1.2.18 稳定性回滚/补丁**：当前版本反馈的 Bug 数量异常多（10+ 条），建议评估是否需要发布紧急修复
2. **插件市场核心路径**：#1169、#773、#1198 均涉及插件，建议统一排查持久化机制
3. **供应商配置测试覆盖**：#888、#1063、#1194 说明多供应商场景测试不足
4. **BOM 头问题修复确认**：#1217 已关闭，需确认修复方案已合并到主分支

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去24小时新增/活跃 Issues | 30 |
| 过去24小时关闭 Issues | 1 |
| 过去24小时新增 PRs | 2 |
| 待合并 PRs | 2 |
| 新版本发布 | 0 |
| 评论最多的 Issue | #1169 (5条) |
| Bug 类 Issues | ~18 |
| Feature Request Issues | ~8 |
| Config/Question Issues | ~5 |

---

*报告生成时间：2026-06-27 | 数据来源：GitHub Codex++ Repository*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*