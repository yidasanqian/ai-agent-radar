# OpenClaw 生态日报 2026-06-05

> Issues: 151 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-05 03:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-05  
**项目仓库：** [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 项目今日保持极高活跃度，24小时内共产生 **151 条 Issues 更新**（新开/活跃 126 条，关闭 25 条）和 **500 条 PR 更新**（待合并 398 条，已合并/关闭 102 条），社区参与热情高涨。**无新版本发布**。今日出现多个 P0/P1 级别严重 Bug，包括 fuzzy edit 静默重写文件、Codex 迁移导致模型丢失等回归问题，需维护团队紧急关注。整体项目健康度评分：**⚠️ 需重点关注**，多个关键路径存在稳定性风险。

---

## 2. 版本发布

**今日无新版本发布。**

> 📌 提醒：当前最新稳定版本为 2026.6.1，建议用户关注即将到来的版本更新以获取 Bug 修复。

---

## 3. 项目进展

### 已合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#90533](https://github.com/openclaw/openclaw/pull/90533) | fix(openai): accept missing content-type on ChatGPT Responses SSE stream | ✅ CLOSED | 修复 ChatGPT OAuth 响应流缺少 content-type 头导致的 `invalid_provider_content_type` 错误 |
| [#90389](https://github.com/openclaw/openclaw/pull/90389) | fix(mattermost): anchor slash state on globalThis | ✅ CLOSED | 修复 Mattermost 原生斜杠命令返回 HTTP 503 错误（回归问题） |
| [#90532](https://github.com/openclaw/openclaw/pull/90532) | Fix main CI guard drift | ✅ CLOSED | 修复 CI 守卫漂移问题，更新 Oxlint 抑制和 TTS 流别名弃用标记 |
| [#90527](https://github.com/openclaw/openclaw/pull/90527) | feat(reply-payload): tag cron-driven payloads with origin metadata | ✅ CLOSED | 为 cron 驱动的 payload 添加来源元数据，便于区分调度发送与常规回复 |

### 待合并的高优先级 PRs

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#90514](https://github.com/openclaw/openclaw/pull/90514) | fix(session): clear stale fallback model state on reset | 👀 Ready for maintainer look | 重置时清除陈旧的 fallback 模型状态，修复 Discord 会话问题 |
| [#90060](https://github.com/openclaw/openclaw/pull/90060) | fix(edit): preserve unrelated lines during fuzzy text matching | 👀 Ready for maintainer look | **P0 修复**：防止 fuzzy edit 静默重写不相关行 |
| [#90212](https://github.com/openclaw/openclaw/pull/90212) | fix(agents): deliver native /compact replies through source suppression | 👀 Ready for maintainer look | 修复 `/compact` 回复在所有渠道被静默丢弃的问题 |
| [#90138](https://github.com/openclaw/openclaw/pull/90138) | fix(minimax): exempt M3 from thinking-disabled wrapper | 👀 Ready for maintainer look | 修复 MiniMax-M3 模型被 thinking-disabled wrapper 破坏的问题 |
| [#90411](https://github.com/openclaw/openclaw/pull/90411) | fix(runtime): snapshot tool definitions | 👀 Ready for maintainer look | 大型 PR，修复工具定义快照和 Code Mode 过滤问题 |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 链接 |
|-----------|------|--------|------|
| #88838 | Track core session/transcript SQLite migration via accessor seam | 17 | [查看](https://github.com/openclaw/openclaw/issues/88838) |
| #87307 | Matrix thread replies sent as normal replies on 2026.5.22; /status and /model silent | 13 | [查看](https://github.com/openclaw/openclaw/issues/87307) |
| #90083 | [Bug]: 2026.6.1 OpenAI ChatGPT Responses transport fails with invalid_provider_content_type | 11 | [查看](https://github.com/openclaw/openclaw/issues/90083) |
| #67777 | [Bug]: Subagent completion delivery can be lost on direct-announce timeout, drain, or orphan prune | 10 | [查看](https://github.com/openclaw/openclaw/issues/67777) |
| #88929 | Feishu streaming card: abnormal typewriter effect and final content truncated | 8 | [查看](https://github.com/openclaw/openclaw/issues/88929) |
| #64810 | [Bug]: Heartbeat / async system events can interrupt and swallow in-progress replies | 8 | [查看](https://github.com/openclaw/openclaw/issues/64810) |

### 热点分析

1. **SQLite 迁移追踪**（#88838，17条评论）：社区高度关注核心 session/transcript 向 SQLite 的迁移策略，希望通过分支抽象接缝（branch-by-abstraction seam）拆分为小而可审查的 PRs，避免大范围重写风险。

2. **Matrix 渠道回归**（#87307，13条评论）：2026.5.22 版本后 Matrix thread 回复行为退化，用户强烈要求修复。

3. **OpenAI 传输失败**（#90083，11条评论）：2026.6.1 版本升级后 gpt-5.4/gpt-5.5 模型出现 `invalid_provider_content_type` 错误，影响大量用户。

---

## 5. Bug 与稳定性

### P0 级别（紧急，需立即处理）

| Issue 编号 | 标题 | 严重程度 | 是否有 Fix PR |
|-----------|------|----------|---------------|
| [#89994](https://github.com/openclaw/openclaw/issues/89994) | Bug: fuzzy edit silently normalizes and rewrites unrelated lines | P0，数据丢失 | [#90060](https://github.com/openclaw/openclaw/pull/90060) 待合并 |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | Cron store migrated to SQLite silently, new jobs default to delivery.mode=announce | P0，配置破坏 | 无 |

### P1 级别（高优先级）

| Issue 编号 | 标题 | 严重程度 | 是否有 Fix PR |
|-----------|------|----------|---------------|
| [#90047](https://github.com/openclaw/openclaw/issues/90047) | Codex migration drops gpt-5.5 model when canonical openai provider exists | P1，消息丢失 | 无 |
| [#90185](https://github.com/openclaw/openclaw/issues/90185) | /compact reply silently dropped (replies=0) on all channels | P1，消息丢失 | [#90212](https://github.com/openclaw/openclaw/pull/90212) 待合并 |
| [#90072](https://github.com/openclaw/openclaw/issues/90072) | Cron state silently wiped during SQLite migration on upgrade | P1，数据丢失 | 无 |
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI ChatGPT Responses transport fails for gpt-5.4/gpt-5.5 | P1，认证 provider | [#90533](https://github.com/openclaw/openclaw/pull/90533) 已关闭 |
| [#90082](https://github.com/openclaw/openclaw/issues/90082) | active-memory circuit breaker too aggressive; fallback pollutes session | P1，session 状态 | 无 |
| [#89809](https://github.com/openclaw/openclaw/issues/89809) | Codex app-server turn idle timeout during long subagent workflow | P1，session 状态 | 无 |
| [#86119](https://github.com/openclaw/openclaw/issues/86119) | Orphaned node server.js worker processes accumulate | P1，崩溃循环 | 无 |
| [#65799](https://github.com/openclaw/openclaw/issues/65799) | Feishu WebSocket inherits ambient proxy env (安全相关) | P1，安全 | 无 |

### 回归问题（Regression）

| Issue 编号 | 标题 | 版本 | 链接 |
|-----------|------|------|------|
| #90325 | Matrix channel dispatch broken in v2026.6.1 — TypeError | 2026.6.1 | [查看](https://github.com/openclaw/openclaw/issues/90325) |
| #90428 | exec tool triggers gateway SIGTERM restart on WSL2 with Node 24 | 2026.6.2-beta.1 | [查看](https://github.com/openclaw/openclaw/issues/90428) |
| #90491 | GatewayRequestError: file is not a database | 2026.6.1 | [查看](https://github.com/openclaw/openclaw/issues/90491) |
| #88867 | Feishu streaming card: only last character displayed | 2026.6.x | [查看](https://github.com/openclaw/openclaw/issues/88867) |

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue 编号 | 标题 | 优先级 | 链接 |
|-----------|------|--------|------|
| #90246 | Allow hiding or collapsing the Workspace / Files rail in WebChat | Enhancement | [查看](https://github.com/openclaw/openclaw/issues/90246) |
| #90101 | feat: add runtime self context config and tool | P2 | [查看](https://github.com/openclaw/openclaw/issues/90101) |
| #89138 | [Feature]: batched memory embedding should batch over files | P2 | [查看](https://github.com/openclaw/openclaw/pull/89138) |
| #90353 | [Feature]: TestFlight access for iOS app | P3 | [查看](https://github.com/openclaw/openclaw/issues/90353) |
| #78038 | [Feature]: Improve zh-CN translation accuracy and completeness | P3 | [查看](https://github.com/openclaw/openclaw/issues/78038) |

### 路线图相关信号

1. **SQLite 迁移正在进行**（#88838）：核心 session/transcript 运行时状态迁移到 SQLite 是重大架构变更，预计将持续多个版本。

2. **Runtime Self Context**（#90101）：实现配置支持的运行时自上下文功能，是 `runtime/offload/scale/cost-awareness` 更大计划的一部分。

3. **批量内存嵌入**（#89138）：支持跨文件的批量内存嵌入工作，提升性能。

---

## 7. 用户反馈摘要

### 核心痛点

1. **升级风险高**：多个用户报告从 2026.5.x 升级到 2026.6.1 后出现严重问题，包括：
   - Cron 任务状态被静默清空（44/45 个任务丢失）
   - Codex 迁移导致模型配置失效
   - SQLite 数据库损坏

2. **消息丢失问题**：多个渠道（Matrix、Telegram、Feishu、Discord）存在消息/回复丢失问题，用户体验受损。

3. **认证 Provider 不稳定**：OpenAI/Codex OAuth 刷新失败、ChatGPT Responses 传输错误等问题影响生产环境使用。

### 用户满意的地方

- 感谢 OpenClaw 团队将 OpenAI Codex 处理迁移到更清洁的规范基础（#90047）
- 对 MiniMax-M3 模型支持的期待（#90138 相关）

### 跨平台问题

- **macOS**：sqlite-vec 扩展无法加载（#66977）、更新/重装可能覆盖生成的 gateway env wrapper（#90518）
- **WSL2**：exec 工具在 Node 24 下触发 SIGTERM 重启（#90428）
- **Docker/Azure Container Apps**：数据库损坏问题（#90491）

---

## 8. 待处理积压

### 长期未响应的 P1+ Issues（超过 7 天无维护者回复）

| Issue 编号 | 标题 | 创建日期 | 优先级 | 链接 |
|-----------|------|----------|--------|------|
| #65799 | Feishu WebSocket should not inherit ambient proxy env | 2026-04-13 | P1，安全 | [查看](https://github.com/openclaw/openclaw/issues/65799) |
| #66977 | sqlite-vec extension cannot load on macOS | 2026-04-15 | P2 | [查看](https://github.com/openclaw/openclaw/issues/66977) |
| #67777 | Subagent completion delivery can be lost | 2026-04-16 | P1 | [查看](https://github.com/openclaw/openclaw/issues/67777) |
| #71592 | TUI local mode advertises /status and /compact but falls through | 2026-04-25 | P2 | [查看](https://github.com/openclaw/openclaw/issues/71592) |
| #72704 | Excessive inline JSON metadata in Telegram user messages | 2026-04-27 | P2 | [查看](https://github.com/openclaw/openclaw/issues/72704) |
| #79589 | Command queue has no priority support | 2026-05-09 | Stale | [查看](https://github.com/openclaw/openclaw/issues/79589) |
| #79588 | Compaction quality guard does not verify identifier survival | 2026-05-09 | Stale | [查看](https://github.com/openclaw/openclaw/issues/79588) |

### 建议维护团队关注

1. **安全相关**（#65799）：Feishu WebSocket 代理继承问题已超过 50 天未解决，存在安全风险。
2. **P0 Bug**（#89994）：fuzzy edit 问题已有 Fix PR（#90060），建议优先合并。
3. **回归问题**：多个 v2026.6.1 回归问题需要回滚或热修复。

---

## 📊 今日数据摘要

| 指标 | 数值 |
|------|------|
| Issues 更新总数 | 151 条 |
| PRs 更新总数 | 500 条 |
| 新版本发布 | 0 个 |
| P0 级别 Bug | 2 个 |
| P1 级别 Bug | 9+ 个 |
| 回归问题 | 4+ 个 |
| 待合并 PRs | 398 条 |

---

*报告生成时间：2026-06-05 | 数据来源：GitHub openclaw/openclaw*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-05  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

2026年6月初，个人 AI 助手/自主智能体开源生态呈现**双极活跃、多层分化**的格局。头部项目 OpenClaw 与 Hermes Agent 保持日均 500+ PR 更新的极高迭代强度，社区规模已达数千级活跃贡献者量级；腰部项目 Codex++ 通过垂直场景深耕维持稳定输出；cc-haha 则完成重大架构迁移进入稳定期。**跨平台一致性、数据库可扩展性、多租户权限体系**成为生态共识性技术方向，但各项目在实现路径上存在显著分化。整体生态处于从单用户工具向企业级平台演进的关键窗口期。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度 | 核心矛盾 |
|------|-------------|---------|---------|--------|----------|
| **OpenClaw** | 151 (126活/25关) | 500 (398待/102合) | 0 | ⚠️ 需关注 | P0 Bug × 2，回归问题 × 4 |
| **Hermes Agent** | 111 (88活/23关) | 500 (362待/138合) | 0 | ✅ 正常 | Desktop 稳定性，i18n |
| **cc-haha** | 14 (9活/5关) | 2 (0待/2合) | 0 | ✅ 正常 | v0.4.0 兼容性修复 |
| **Codex++** | 73 (57活/16关) | 8 (6待/2合) | v1.2.2 | ⚠️ 需关注 | macOS M 芯片兼容性 |

**数据洞察：**
- OpenClaw 与 Hermes Agent 活跃度相近，但 OpenClaw 待合并 PR 积压率更高（79.6% vs 72.4%）
- cc-haha 合并率达 100%，显示维护者对 PR 质量把控严格
- Codex++ 是唯一今日有版本发布的项目，发布节奏更接近产品导向

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw | 生态对比 |
|------|----------|----------|
| **社区规模** | 日均 500 PR，151 Issues | 生态最大，远超 Hermes Agent（111 Issues） |
| **渠道覆盖** | Matrix/Telegram/Feishu/Discord 全覆盖 | 最全面，无明显短板 |
| **架构演进** | SQLite 迁移进行中 | 唯一推进核心存储架构升级的项目 |
| **Bug 响应** | P0 Bug 有 Fix PR（#90060） | 响应速度优于 Codex++（macOS Bug 无 Fix） |

### 3.2 技术路线差异

```
OpenClaw ──► 核心存储 SQLite 迁移 ──► 多渠道统一抽象层
Hermes ────► 可插拔 SessionDB（PostgreSQL/MySQL）──► Gateway RBAC 多租户
cc-haha ───► Electron 统一渲染层 ──► 跨平台一致性
Codex++ ───► 插件系统 + 供应商聚合 ──► 性能优化（启动时间-30~50%）
```

### 3.3 社区规模对比

| 项目 | 活跃 Issues | 待合并 PR | 贡献者估算 |
|------|-------------|-----------|------------|
| OpenClaw | 126 活跃 | 398 | 50+ 核心 |
| Hermes Agent | 88 活跃 | 362 | 50+ 核心 |
| cc-haha | 9 活跃 | 0 | 小型团队 |
| Codex++ | 57 活跃 | 6 | 中型团队 |

**结论：** OpenClaw 是生态中**社区规模最大、渠道覆盖最全、架构演进最激进**的项目，但当前面临较高的稳定性风险（2 个 P0 Bug、4+ 回归问题）。

---

## 4. 共同关注的技术方向

### 4.1 数据库可扩展性（跨项目共识）

| 项目 | 诉求 | 现状 |
|------|------|------|
| **OpenClaw** | SQLite 迁移核心 session/transcript | 进行中（#88838） |
| **Hermes Agent** | 可插拔 SessionDB（PostgreSQL/MySQL）| RFC 阶段（#23717） |
| **cc-haha** | 配置迁移问题（#736） | 待修复 |

**分析：** SQLite 在高并发场景下的局限性已被多个项目认知，OpenClaw 率先推进迁移，Hermes Agent 规划更灵活的插件架构。

### 4.2 多渠道消息一致性

| 项目 | 关注点 |
|------|--------|
| **OpenClaw** | Matrix thread 回复退化（#87307）、Telegram 流式截断 |
| **Hermes Agent** | 钉钉/飞书 Markdown 渲染（#39510） |
| **cc-haha** | 流式响应状态不同步（#687） |

**分析：** 跨平台消息渲染、状态同步是共同挑战，OpenClaw 问题最严重，Hermes Agent 正在系统性修复。

### 4.3 国际化与本地化

| 项目 | 进展 |
|------|------|
| **Hermes Agent** | Desktop 新增简体中文支持（#38241） |
| **cc-haha** | 新增日语、韩语、繁体中文（#717） |
| **Codex++** | 英文、越南语 README（#622, #623） |

**分析：** 中文用户群体庞大，i18n 是提升渗透率的关键，cc-haha 覆盖最广。

### 4.4 安全性与权限体系

| 项目 | 诉求 |
|------|------|
| **Hermes Agent** | Gateway RBAC 权限分层（#527） |
| **OpenClaw** | Feishu WebSocket 代理继承问题（#65799，P1 安全） |

**分析：** 企业级场景需求浮现，权限模型演进是下一阶段重点。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 差异化功能 |
|------|----------|------------|
| **OpenClaw** | 通用型多渠道 AI 助手框架 | 核心运行时架构、SQLite 迁移、Codex 集成 |
| **Hermes Agent** | 企业级多租户 Gateway | RBAC、Desktop 应用、统一遥测 |
| **cc-haha** | 本地化 Claude Code 客户端 | Electron 统一渲染、深度 Claude 集成 |
| **Codex++** | Codex 增强工具 | 插件系统、供应商聚合、性能优化 |

### 5.2 目标用户

```
OpenClaw ──► 开发者/技术团队（自托管多渠道助手）
Hermes Agent ──► 企业用户（多租户、权限管理需求）
cc-haha ──► Claude 深度用户（本地优先、隐私敏感）
Codex++ ──► Codex 重度用户（插件生态、供应商轮转）
```

### 5.3 技术架构

| 项目 | 渲染层 | 存储层 | 部署模式 |
|------|--------|--------|----------|
| **OpenClaw** | TUI + Web | SQLite（迁移中） | 自托管 |
| **Hermes Agent** | Electron Desktop + TUI | SQLite（可插拔） | 自托管/Gateway |
| **cc-haha** | Electron（v0.4.0 新迁） | 本地文件 | 本地优先 |
| **Codex++** | 原生 + WebView | 本地存储 | 桌面应用 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
🔥 超级活跃层（>100 Issues/日）
├── OpenClaw：151 Issues，500 PRs ──► 快速迭代，稳定性承压
└── Hermes Agent：111 Issues，500 PRs ──► 快速迭代，功能扩展期

📈 稳定迭代层（10-100 Issues/日）
├── Codex++：73 Issues，8 PRs ──► 功能优化期，版本节奏稳定
└── cc-haha：14 Issues，2 PRs ──► 架构稳定，修复期

⚠️ 积压风险层
├── OpenClaw：398 待合并 PRs（P0/P1 Bug 未解）
├── Hermes Agent：362 待合并 PRs
└── Codex++：macOS M 芯片问题无 Fix PR（>10 天）
```

### 6.2 成熟度评估

| 项目 | 阶段 | 信号 |
|------|------|------|
| **OpenClaw** | 架构重构期 | SQLite 迁移、回归问题多 |
| **Hermes Agent** | 功能扩展期 | RBAC、SessionDB 等大型 Feature 推进 |
| **cc-haha** | 质量巩固期 | v0.4.0 迁移完成，修复兼容性问题 |
| **Codex++** | 产品化期 | 版本发布节奏稳定，性能优化优先 |

---

## 7. 值得关注的趋势信号

### 7.1 企业级需求浮现

**信号：** Hermes Agent 的 Gateway RBAC（#527）、可插拔 SessionDB（#23717）RFC 引发社区热议，评论数分别为 10 和 7。

**影响：** AI 助手开源生态正从「个人工具」向「团队协作平台」演进，多租户、权限管理、审计日志将成为下一阶段差异化竞争点。

### 7.2 数据库架构升级窗口期

**信号：** OpenClaw 推进 SQLite 迁移（#88838），Hermes Agent 规划 PostgreSQL/MySQL 支持（#23717），cc-haha 出现配置迁移 Bug（#736）。

**影响：** SQLite 在高并发、多实例部署场景下的局限性已被广泛认知，2026 年下半年可能成为生态数据库升级的关键节点。

### 7.3 跨平台一致性仍是痛点

**信号：** 
- cc-haha 专门从 Tauri 迁移到 Electron 以解决 macOS/Windows 行为不一致（#723）
- Codex++ macOS M 芯片问题积压 10+ 天无 Fix（#406, #668, #610）
- OpenClaw 多个渠道回归问题（Matrix、Telegram、Feishu）

**影响：** 跨平台一致性是用户体验的基础设施问题，投入产出比高，建议开发者重点关注 Electron/原生渲染层的统一抽象。

### 7.4 插件生态成为差异化方向

**信号：** 
- Codex++ 插件系统问题集中爆发（#588, #658, #648）
- Hermes Agent MCP 工具生态（#39418 `/reload-mcp`）
- OpenClaw 工具定义快照问题（#90411）

**影响：** 插件/工具生态是扩展用户场景的关键，但稳定性要求极高，建议参考 VS Code 插件市场的质量门禁实践。

### 7.5 中文用户群体崛起

**信号：** 
- Hermes Agent 合并简体中文 i18n PR（#38241）
- cc-haha 新增日语、韩语、繁体中文（#717）
- 多个项目出现中文 IME 输入问题（#38826）

**影响：** 中文开发者社区参与度提升，i18n 支持将成为国际化项目的标配，建议优先覆盖简体中文。

---

## 📊 总结

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|----------|
| **定位** | 通用多渠道框架 | 企业级 Gateway | 本地 Claude 客户端 | Codex 增强工具 |
| **活跃度** | 🔥🔥🔥 | 🔥🔥🔥 | 📈 | 📈 |
| **健康度** | ⚠️ | ✅ | ✅ | ⚠️ |
| **成熟度** | 架构重构期 | 功能扩展期 | 质量巩固期 | 产品化期 |
| **核心机会** | 渠道覆盖最全 | 企业场景 | Claude 深度集成 | 插件生态 |
| **核心风险** | 稳定性积压 | Desktop 稳定性 | 兼容性修复 | macOS 兼容性 |

**建议：**
1. **技术决策者**：关注 OpenClaw 与 Hermes Agent 的数据库升级路线，选择时需评估团队规模与运维能力
2. **开发者**：优先解决跨平台一致性问题，插件生态质量门禁是提升用户留存的关键
3. **生态参与者**：中文 i18n 是快速获取中国开发者社区认可的捷径，建议优先覆盖

---

*报告生成时间：2026-06-05 | 数据来源：GitHub 各项目实时数据*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-06-05  
**项目：** NousResearch/hermes-agent  
**数据区间：** 过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日保持极高社区活跃度，共产生 **111 条 Issues 更新**（新开/活跃 88 条，关闭 23 条）和 **500 条 PR 更新**（待合并 362 条，已合并/关闭 138 条）。项目整体呈现快速迭代态势，未发布新版本但有大量功能增强和 Bug 修复正在推进。今日社区焦点集中在 **Gateway 权限分层**、**多语言支持（中文 IME）** 和 **Desktop 应用稳定性** 三大主题，多个高优先级 Bug 已出现对应修复 PR。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日共合并/关闭 **138 条 PR**，以下为重要进展：

| PR | 类型 | 描述 | 状态 |
|---|---|---|---|
| [#39270](https://github.com/NousResearch/hermes-agent/pull/39270) | docs | 明确 Desktop 安装路径文档，引导用户访问官方下载页 | ✅ 已合并 |
| [#39543](https://github.com/NousResearch/hermes-agent/pull/39543) | fix | Dashboard session token 注入保持，解决 `.env` 覆盖问题 | ✅ 已合并 |
| [#39542](https://github.com/NousResearch/hermes-agent/pull/39542) | fix | 修复自定义 `HERMES_HOME` 路径下 named profiles 嵌套问题 | ✅ 已合并 |
| [#39541](https://github.com/NousResearch/hermes-agent/pull/39541) | fix | 安装脚本自动安装 `xz` 工具，解决 Node.js 归档解压依赖 | ✅ 已合并 |
| [#38241](https://github.com/NousResearch/hermes-agent/pull/38241) | feat | Desktop 应用新增简体中文 (zh-Hans) 国际化支持 | ✅ 已合并 |
| [#39416](https://github.com/NousResearch/hermes-agent/pull/39416) | fix | Discord 适配器运行时任务退出自动恢复机制 | 🔄 开放 |
| [#39537](https://github.com/NousResearch/hermes-agent/pull/39537) | feat | TUI 会话切换器/技能中心/代理叠加层新增类型过滤功能 | 🔄 开放 |
| [#39506](https://github.com/NousResearch/hermes-agent/pull/39506) | feat | 隐藏内部 agent 会话（默认用户不可见），优化会话列表 | 🔄 开放 |
| [#39508](https://github.com/NousResearch/hermes-agent/pull/39508) | fix | Memory bridge 修复 `add/replace/remove` 与 `old_text` 传递 | 🔄 开放 |
| [#39510](https://github.com/NousResearch/hermes-agent/pull/39510) | fix | 钉钉/飞书 Markdown 渲染修复（表格支持） | 🔄 开放 |

**关键推进方向：**
- Desktop 应用稳定性（国际化、session token、bootstrap）
- 多平台消息渲染一致性（钉钉、飞书、Discord）
- CLI/TUI 交互体验优化

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 主题 | 评论数 | 链接 |
|---|---|---|---|
| #527 | **Gateway 权限分层** — 提议引入 Owner/Admin/User/Guest 角色体系替代二元授权模型 | 10 | [查看](https://github.com/NousResearch/hermes-agent/issues/527) |
| #21587 | Telegram 新功能 — Guest Bots、Bot-to-Bot、Stickers 和聊天自动化 | 8 | [查看](https://github.com/NousResearch/hermes-agent/issues/21587) |
| #23717 | **RFC: 可插拔 SessionDB** — 支持 PostgreSQL/MySQL，解决 SQLite 热更新死锁 | 7 | [查看](https://github.com/NousResearch/hermes-agent/issues/23717) |
| #38826 | 中文 IME 输入问题 — 回车键提交空/不完整文本 | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/38826) |
| #37549 | Desktop 聊天窗口闪烁 — 响应流式输出时滚动位置跳动 | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/37549) |

**热点分析：**
- **权限模型演进**（#527）是长期讨论焦点，社区对多租户 Gateway 场景有强烈需求
- **可插拔数据库**（#23717）直击生产部署痛点，SQLite 在并发场景下的局限性已被广泛认知
- **中文用户群体活跃** — 多个中文 IME 相关 Bug 被报告，i18n PR 已合并

---

## 5. Bug 与稳定性

### P2 严重 Bug（需优先处理）

| Issue | 描述 | 状态 | 链接 |
|---|---|---|---|
| #39365 | Desktop 误导性错误提示 — 显示 "OpenRouter API key missing" 实际是 Gateway 认证 401 | 有 PR | [查看](https://github.com/NousResearch/hermes-agent/issues/39365) |
| #39332 | Mac 安装失败 — npm build 阶段报错 | 有 PR | [查看](https://github.com/NousResearch/hermes-agent/issues/39332) |
| #39281 | Ollama gemma4 后端输出截断警告导致任务中止 | 待确认 | [查看](https://github.com/NousResearch/hermes-agent/issues/39281) |
| #39503 | Desktop 0.15.1 启动失败 — `--tui` 参数无法识别 | 今日新增 | [查看](https://github.com/NousResearch/hermes-agent/issues/39503) |
| #39505 | Desktop 首次启动循环 — `uvicorn.supervisors` 模块缺失 | 今日新增 | [查看](https://github.com/NousResearch/hermes-agent/issues/39505) |
| #39418 | `/reload-mcp` 命令导致 CLI 终端冻结 | 今日新增 | [查看](https://github.com/NousResearch/hermes-agent/issues/39418) |

### P3 Bug（影响体验）

| Issue | 描述 | 链接 |
|---|---|---|
| #38826 | 中文 IME 输入回车提交空文本（需 Shift+Enter） | [查看](https://github.com/NousResearch/hermes-agent/issues/38826) |
| #37549 | 聊天窗口响应时闪烁、滚动位置跳动 | [查看](https://github.com/NousResearch/hermes-agent/issues/37549) |
| #38272 | Desktop 聊天窗口自动滚动与用户输入冲突 | [查看](https://github.com/NousResearch/hermes-agent/issues/38272) |
| #39231 | CJK IME 组合期间发送按钮不显示 | [查看](https://github.com/NousResearch/hermes-agent/issues/39231) |
| #39534 | Windows 版 Desktop 中文提示被截断 | [查看](https://github.com/NousResearch/hermes-agent/issues/39534) |

**稳定性评估：** Desktop 应用（Electron）在跨平台场景下问题较多，主要集中在 UI 渲染、IME 输入和启动流程。

---

## 6. 功能请求与路线图信号

### 高价值功能提案

| Issue | 描述 | 潜在影响 | 链接 |
|---|---|---|---|
| #527 | **Gateway 权限分层** — RBAC 角色体系 | 多租户/企业场景核心需求 | [查看](https://github.com/NousResearch/hermes-agent/issues/527) |
| #23717 | **可插拔 SessionDB** — PostgreSQL/MySQL 支持 | 生产级部署必备 | [查看](https://github.com/NousResearch/hermes-agent/issues/23717) |
| #21587 | Telegram Guest Bots / Bot-to-Bot 通信 | 扩展多代理协作场景 | [查看](https://github.com/NousResearch/hermes-agent/issues/21587) |
| #6642 | 统一遥测 + 成本/延迟/成功率分析 | 可观测性基础设施 | [查看](https://github.com/NousResearch/hermes-agent/issues/6642) |
| #19469 | 定价层解耦 OpenRouter — 通用成本报告 | 跨提供商成本管理 | [查看](https://github.com/NousResearch/hermes-agent/issues/19469) |
| #21172 | **循环合约** — 声明式预算/停止/刷新机制 | 持久化 Agent 循环控制 | [查看](https://github.com/NousResearch/hermes-agent/issues/21172) |
| #39492 | 禁用内置 memory tool 但保留外部 provider | 灵活配置需求 | [查看](https://github.com/NousResearch/hermes-agent/issues/39492) |

**路线图信号：** 项目正从单用户工具向多租户企业级平台演进，权限管理、数据库灵活性和可观测性是三大核心方向。

---

## 7. 用户反馈摘要

### 核心痛点

1. **Desktop 应用稳定性堪忧**
   - 跨平台启动失败（Mac/Windows）、UI 渲染异常（闪烁、滚动冲突）
   - 中文用户受 IME 问题影响严重

2. **生产部署局限**
   - SQLite 热更新死锁（#23717）
   - 定价层强依赖 OpenRouter（#19469）
   - Docker/Podman DNS 解析问题（#7905）

3. **Gateway 多租户能力不足**
   - 二元授权模型无法满足企业场景（#527）
   - Discord 自动线程行为未文档化（#7184）

### 正面反馈

- 中文国际化 PR（#38241）获得积极响应
- Dashboard session token 修复（#39543）解决了长期痛点
- TUI 类型过滤功能（#39537）提升交互效率

---

## 8. 待处理积压

以下 Issues 创建时间较早或讨论充分但尚未解决：

| Issue | 年龄 | 描述 | 优先级 | 链接 |
|---|---|---|---|---|
| #527 | ~3 个月 | Gateway 权限分层 RBAC | 高 | [查看](https://github.com/NousResearch/hermes-agent/issues/527) |
| #23717 | ~25 天 | 可插拔 SessionDB | 高 | [查看](https://github.com/NousResearch/hermes-agent/issues/23717) |
| #6642 | ~57 天 | 统一遥测分析 | 中 | [查看](https://github.com/NousResearch/hermes-agent/issues/6642) |
| #19469 | ~32 天 | 定价层解耦 OpenRouter | 中 | [查看](https://github.com/NousResearch/hermes-agent/issues/19469) |
| #4876 | ~63 天 | Node.js 20 → 22 升级 | 中 | [查看](https://github.com/NousResearch/hermes-agent/issues/4876) |
| #6775 | ~57 天 | ACP 会话 token 计数和成本数据 | 低 | [查看](https://github.com/NousResearch/hermes-agent/issues/6775) |

**建议：** 维护者关注 #527 和 #23717，这两个提案涉及架构变更，尽早明确立场有助于社区预期管理。

---

## 附录：数据统计

```
📊 今日数据概览
├── Issues: 111 条更新 (新开/活跃: 88, 关闭: 23)
├── PRs: 500 条更新 (待合并: 362, 已合并/关闭: 138)
├── Releases: 0 个
└── 活跃贡献者: 50+ 人
```

**报告生成时间：** 2026-06-05  
**数据来源：** GitHub NousResearch/hermes-agent 实时数据

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-06-05  
**项目仓库**: [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha)

---

## 1. 今日速览

2026年6月5日，cc-haha 项目保持较高活跃度，共产生 **14 条 Issue 更新**（9 条新开/活跃，5 条已关闭）和 **2 条 PR 更新**（均已合并）。项目近期完成了从 Tauri 到 Electron 的重大架构迁移（v0.4.0），社区反馈积极但也伴随部分兼容性问题的报告。整体来看，项目处于功能迭代与稳定性修复并行的阶段，用户参与度较高，维护者响应及时。

---

## 2. 版本发布

**无新版本发布**

> 近期重要版本回顾：v0.4.0 已将桌面端从 Tauri 迁移至 Electron，统一使用内置 Chromium 渲染层，以消除跨平台差异（macOS/Windows 行为不一致问题）。详情见 Issue #723。

---

## 3. 项目进展

### 合并的 Pull Requests

| PR # | 标题 | 领域 | 变更概要 |
|------|------|------|----------|
| **#717** | feat(desktop): add Japanese, Korean, and Traditional Chinese UI locales | desktop | 新增日语、韩语、繁体中文三种 UI 语言支持，用户现可在 Settings → General → Language 中切换 **English / 简体中文 / 繁體中文 / 日本語 / 한국語** 五种语言 |
| **#498** | fix: show hidden files, sort dotfiles first, restore uploaded file names, fix close tabs killing running sessions, fix telegram streaming truncation | desktop, server, adapters | 修复多项长期问题：工作区树显示隐藏文件并优先排序 dotfiles、历史重载时恢复上传文件名、会话关闭时检查 chatState 避免误杀运行中任务、Telegram 流式消息截断问题 |

**进展评估**：两个 PR 均已合并，#717 推进了国际化进程，#498 修复了多个影响用户体验的痛点问题，项目整体功能完整度和稳定性有所提升。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 状态 | 热度分析 |
|---------|------|--------|------|----------|
| **#651** | [BUG] cchaha无法持续性回答 | 12 | CLOSED | 核心功能缺陷，用户反馈应用无法维持长对话，引发对会话管理机制的广泛讨论 |
| **#731** | [BUG] v4.0 在win11系统情况下UI打不开 | 6 | OPEN | v0.4.0 迁移后的兼容性问题，Windows 11 用户受影响，关注度高 |
| **#548** | [BUG] 会话经常中断 | 6 | CLOSED | 长期痛点问题，已关闭但可能存在回归风险 |
| **#687** | [BUG] cchaha流式响应中途关闭了 TCP，但是还一直显示执行中 | 6 | OPEN | 流式响应状态管理问题，用户体验受损 |
| **#734** | [BUG] 关于会话卡住不动的两点分析 | 5 | OPEN | 用户主动进行问题根因分析，提供技术细节，协作氛围良好 |

**热点分析**：当前社区讨论集中在 **会话稳定性** 和 **v0.4.0 兼容性** 两大主题。#651 和 #548 均涉及会话中断问题，表明这是用户高频痛点；#731 反映了重大版本升级后的适配挑战。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 优先级 | Issue # | 描述 | 状态 | Fix PR |
|--------|---------|------|------|--------|
| 🔴 高 | **#731** | v4.0 在 Win11 系统下 UI 打不开 | OPEN | 无 |
| 🔴 高 | **#687** | 流式响应中途关闭 TCP，但仍显示执行中 | OPEN | 无 |
| 🔴 高 | **#738** | 修改执行权限为"跳过"后，任务自动停止 | OPEN | 无 |
| 🟡 中 | **#732** | 思考结束依然显示"思考中" | OPEN | 无 |
| 🟡 中 | **#736** | 更换缓存目录后，服务商配置丢失，需重新填写 | OPEN | 无 |
| 🟡 中 | **#735** | 修改便携目录后 Claude Code 会话丢失 | CLOSED | 无 |
| 🟢 低 | **#680** | 内置浏览器刷新会话页面后显示异常 | CLOSED | 无 |

**稳定性评估**：今日新增 7 个 Bug，其中 3 个高优先级问题尚未解决。v0.4.0 迁移带来的兼容性问题（#731）是当前最紧迫的挑战，建议优先处理。

---

## 6. 功能请求与路线图信号

### 用户提出的功能需求

| Issue # | 类型 | 需求描述 | 可行性评估 |
|---------|------|----------|------------|
| **#449** | enhancement | 自定义代理配置支持（HTTP/SOCKS5）及请求超时时间可配置 | 已有关注，Issue 已关闭但需求合理，可能在后续版本考虑 |
| **#733** | enhancement | 项目和会话层级区分更清晰（如添加展开/折叠图标） | UI/UX 改进建议，实现成本较低 |
| **#737** | question | 桌面版配置火山引擎 Coding Plan 测试连接不通过 | 配置问题或 API 兼容性，需进一步排查 |

**路线图信号**：从 Issue #449 的讨论来看，**自定义代理和超时配置** 是本地部署用户的强烈需求（尤其是大模型冷启动时间可达 180s+ 的场景），建议纳入下一版本的配置项扩展计划。

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

1. **本地部署延迟问题**：用户反馈在低配机器上运行本地大模型时，首 token 生成时间可达 180 秒，默认 30 秒超时设置导致请求频繁失败。（来源：#449）

2. **跨平台一致性**：用户反映桌面端在 macOS 和 Windows 上行为不一致，这是推动 v0.4.0 从 Tauri 迁移到 Electron 的核心动力。（来源：#723）

3. **会话管理缺陷**：
   - 无法持续性回答（#651）
   - 会话经常中断（#548）
   - 流式响应状态不同步（#687）

4. **配置迁移问题**：更换缓存目录后所有服务商配置丢失，用户对此表示不满。（来源：#736）

### 正面反馈

- v0.4.0 迁移公告（#723）获得社区关注，用户对跨平台一致性问题得到解决表示期待
- 多语言支持（#717）上线后，国际化用户群体满意度提升

---

## 8. 待处理积压

### 长期未解决或高优先级 Issue

| Issue # | 创建时间 | 状态 | 摘要 | 建议 |
|---------|----------|------|------|------|
| **#687** | 2026-06-01 | OPEN | 流式响应中途关闭 TCP 但仍显示执行中 | 4 天未响应，需确认复现步骤 |
| **#732** | 2026-06-04 | OPEN | 思考结束依然显示"思考中" | 1 天未响应，UI 状态同步问题 |
| **#736** | 2026-06-04 | OPEN | 更换缓存目录后配置丢失 | 1 天未响应，影响用户体验 |
| **#733** | 2026-06-04 | OPEN | 项目和会话层级区分不清晰 | 1 天未响应，UI 改进建议 |

**积压评估**：当前积压 Issue 整体响应及时，大部分在 1-2 天内有维护者回复。#687 积压 4 天，建议优先跟进流式响应相关的状态管理问题。

---

## 附录：数据来源

- **Issues 统计**: [cc-haha Issues](https://github.com/NanmiCoder/cc-haha/issues)
- **PR 统计**: [cc-haha Pull Requests](https://github.com/NanmiCoder/cc-haha/pulls)
- **项目主页**: [github.com/NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha)

---

*本报告由 AI 自动生成，基于 2026-06-05 00:00 至 23:59 的 GitHub 活动数据。*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-05  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年6月5日，Codex++ 项目保持高度活跃，共产生 **73 条 Issues 更新**（57 新开/活跃，16 已关闭）和 **8 条 PR 更新**（6 待合并，2 已合并）。今日正式发布 **v1.2.2 版本**，主要改进了插件解锁兼容性和会话同步功能。社区反馈显示 **macOS M 芯片兼容性** 和 **插件系统稳定性** 成为焦点问题，多个相关 Bug 正在积极处理中。性能优化 PR 进展顺利，有望将启动时间缩短 30-50%。

---

## 2. 版本发布

### 🆕 v1.2.2 正式发布

| 项目 | 内容 |
|------|------|
| **版本号** | v1.2.2 |
| **发布时间** | 2026-06-05 |
| **发布类型** | 常规功能更新 |

**更新内容：**
- ✅ 兼容旧版 Codex 插件解锁方式
- ✅ 会话同步功能新增供应商 ID 选择支持

**迁移注意事项：** 无破坏性变更，建议所有用户升级以获得最佳插件兼容性体验。

---

## 3. 项目进展

### ✅ 已合并/关闭的 PRs

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#622](https://github.com/BigPizzaV3/CodexPlusPlus/pull/622) | docs: translate maintained copy to English | ✅ CLOSED | 完成维护日志和 Token 使用桥接说明的英文翻译，完善英文 README |
| [#623](https://github.com/BigPizzaV3/CodexPlusPlus/pull/623) | docs: add Vietnamese translation | ✅ CLOSED | 新增越南语 README 翻译，提升国际化覆盖 |

### 🚧 待合并的重要 PRs

| PR # | 标题 | 状态 | 重要性 | 说明 |
|------|------|------|--------|------|
| [#620](https://github.com/BigPizzaV3/CodexPlusPlus/pull/620) | perf: reduce startup time by 30-50% | OPEN | ⭐⭐⭐ | 通过优化 CDP 注入轮询和模型列表请求，启动时间预计缩短 30-50% |
| [#626](https://github.com/BigPizzaV3/CodexPlusPlus/pull/626) | Reapply thread storage fixes for 1.2.1 | OPEN | ⭐⭐⭐ | 修复线程存储问题，支持 `CODEX_HOME` 环境变量，解决远程项目删除报错 |
| [#428](https://github.com/BigPizzaV3/CodexPlusPlus/pull/428) | 新增聚合供应商按策略轮转功能 | OPEN | ⭐⭐ | 实现聚合中继供应商的策略轮转和故障转移机制 |
| [#629](https://github.com/BigPizzaV3/CodexPlusPlus/pull/629) | fix(relay): preserve live Codex UI settings | OPEN | ⭐⭐ | 保留 Codex UI 设置（非 provider 相关配置），新增回归测试 |
| [#659](https://github.com/BigPizzaV3/CodexPlusPlus/pull/659) | Optimize button display effect | OPEN | ⭐ | 优化 macOS 各页面按钮显示效果 |
| [#543](https://github.com/BigPizzaV3/CodexPlusPlus/pull/543) | fix: reduce sidebar polling | OPEN | ⭐ | 减少侧边栏轮询频率，优化空闲状态处理 |

---

## 4. 社区热点

### 🔥 评论数最多的 Issues

| Issue # | 标题 | 评论数 | 状态 | 链接 |
|---------|------|--------|------|------|
| #406 | [Bug] MAC M1 502 Bad Gateway 错误 | 15 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) |
| #588 | 插件安装失败 | 12 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/588) |
| #451 | 上下文修改为 1M 无效，仍显示 258k | 7 | CLOSED | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/451) |
| #668 | mac M 芯片程序无法打开 | 6 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/668) |
| #638 | 升级 1.2.1 后插件提示需登录 ChatGPT | 6 | CLOSED | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/638) |

### 📊 热点分析

**核心诉求：**

1. **macOS M 芯片兼容性危机**（Issue #406, #668, #610）
   - 多名用户报告 M 芯片 Mac 使用一段时间后程序崩溃或无法启动
   - 涉及 DeepSeek 模型调用时的 502/503 错误
   - 社区急需稳定版本修复

2. **插件系统问题集中爆发**（Issue #588, #638, #658, #648）
   - 插件安装失败、插件列表不完整、插件变灰色等问题频发
   - Computer Use 和浏览器控制功能不可用
   - 可能与 v1.2.1/v1.2.2 版本更新相关

3. **上下文窗口配置问题**（Issue #451, #540）
   - 用户配置 1M 上下文后仍显示 258k
   - DeepSeek API 无法开启 1M 上下文

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug（影响核心功能）

| Issue # | 标题 | 严重程度 | 状态 | 是否有 Fix PR |
|---------|------|----------|------|---------------|
| #668 | mac M 芯片程序无法打开 | 🔴 高 | OPEN | ❌ |
| #406 | MAC M1 502 Bad Gateway | 🔴 高 | OPEN | ❌ |
| #610 | mac 用一会儿就失效 | 🔴 高 | OPEN | ❌ |
| #674 | 更新 1.2.2 报病毒警告 | 🔴 高 | OPEN | ❌ |
| #673 | 新版本下载显示病毒 | 🔴 高 | CLOSED | ❌ |

### 🟡 中优先级 Bug

| Issue # | 标题 | 严重程度 | 状态 | 是否有 Fix PR |
|---------|------|----------|------|---------------|
| #658 | 插件系统不稳定 | 🟡 中 | OPEN | ❌ |
| #657 | Codex++ 管理器无响应 | 🟡 中 | OPEN | ❌ |
| #631 | JSON 反序列化错误 (image_url) | 🟡 中 | OPEN | ❌ |
| #614 | 流式响应丢失 tool_call name | 🟡 中 | OPEN | ❌ |
| #50 | 删除远程项目报错 | 🟡 中 | OPEN | ✅ #626 |

### 🟢 已关闭/修复的 Bug

| Issue # | 标题 | 状态 | 说明 |
|---------|------|------|------|
| #451 | 上下文 1M 显示 258k | CLOSED | - |
| #638 | 插件需登录 ChatGPT | CLOSED | - |
| #624 | 插件消失 | CLOSED | - |
| #636 | 插件界面变灰色 | CLOSED | - |

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue # | 标题 | 类型 | 链接 |
|---------|------|------|------|
| #678 | 目前不支持语音输入吗 | Feature | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/678) |
| #634 | 增加本地代理功能 | Feature | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/634) |
| #660 | Chrome 控制插件无法使用 | Feature | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/660) |

### 📈 路线图信号分析

1. **性能优化方向明确**
   - PR #620 正在推进 30-50% 启动时间优化
   - PR #543 减少侧边栏不必要的轮询

2. **供应商管理功能增强**
   - PR #428 实现聚合供应商策略轮转
   - 用户请求本地代理功能（#634），可能成为未来版本方向

3. **国际化持续推进**
   - 英文、越南语文档已完成
   - 社区国际化程度提升

---

## 7. 用户反馈摘要

### 😫 主要痛点

| 痛点 | 相关 Issue | 影响用户数 |
|------|-----------|-----------|
| macOS M 芯片兼容性差 | #406, #668, #610 | 大量 Mac 用户 |
| 插件系统不稳定 | #588, #658, #648 | 广泛影响 |
| 更新后报病毒 | #674, #673 | Windows 用户 |
| 上下文窗口配置失效 | #451, #540 | DeepSeek 用户 |

### 💡 用户场景

- **开发者场景**：使用 Codex++ 连接远程 Codex Server 进行开发
- **成本优化场景**：通过中转站使用 GPT-5.4/5.5、Claude Sonnet 4.6 等模型
- **多供应商轮转**：用户期望按策略自动切换供应商实现负载均衡

### 🙏 正面反馈

- 会话同步功能新增供应商 ID 选择（v1.2.2）获得认可
- 性能优化方向（启动时间缩短）受到期待

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue

| Issue # | 标题 | 创建时间 | 状态 | 等待天数 |
|---------|------|----------|------|----------|
| #32 | 插件安装失败 | 2026-05-10 | OPEN | ~26 天 |
| #50 | 删除远程项目报错 | 2026-05-12 | OPEN | ~24 天 |
| #351 | mac 点击重启报错 | 2026-05-26 | OPEN | ~10 天 |

### 🎯 建议优先处理

1. **macOS M 芯片稳定性问题**（Issue #406, #668, #610）
   - 影响大量 Mac 用户
   - 已有多个相关 Issue，建议统一排查

2. **插件系统重构**（Issue #588, #638, #658, #648）
   - 多个插件相关 Issue 指向系统性问题
   - 建议在下一版本重点修复

3. **病毒误报问题**（Issue #674, #673）
   - 影响用户正常更新
   - 需与安全软件厂商沟通或调整签名策略

---

## 📋 总结

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 73 条/24h | 📈 持平 |
| PR 活跃度 | 8 条/24h | 📈 持平 |
| 合并率 | 2/8 (25%) | - |
| Bug 报告集中度 | macOS 兼容性、插件系统 | ⚠️ 需关注 |
| 功能 PR 进展 | 性能优化、聚合供应商 | ✅ 良好 |

**整体评估：** 项目保持健康活跃状态，v1.2.2 版本发布顺利。需重点关注 macOS M 芯片兼容性和插件系统稳定性问题，建议优先处理相关 Issue 以提升用户体验。

---

*报告生成时间：2026-06-05 | 数据来源：GitHub Codex++ Repository*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*