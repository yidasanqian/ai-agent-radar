# OpenClaw 生态日报 2026-06-19

> Issues: 147 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-19 04:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-19  
**项目仓库：** github.com/openclaw/openclaw

---

## 1. 今日速览

2026-06-19，OpenClaw 项目保持高度活跃，过去 24 小时内共产生 **147 条 Issues 更新**（新开/活跃 131 条，关闭 16 条）和 **500 条 PR 更新**（待合并 452 条，已合并/关闭 48 条），整体开发节奏稳健。今日未发布新版本，但多个关键 Bug 修复正在推进中。社区关注焦点集中在**会话状态管理**（锁超时、消息丢失）、**平台集成稳定性**（Telegram、WhatsApp、Discord）以及**内存与性能优化**三大领域。多个 P1 级别问题已出现待合并的 Fix PR，预计将在近期版本中得到修复。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时内共 **合并/关闭 48 个 PR**，以下为重要进展：

### 已合并的重要修复

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#92873](https://github.com/openclaw/openclaw/pull/92873) | test(diffs): add viewerState, toolbar toggle, shadow root, and hydrateProps tests | ✅ 已合并 | 为 `extensions/diffs` 添加全面测试覆盖，包含 4 个未测试代码路径 |
| [#94739](https://github.com/openclaw/openclaw/pull/94739) | fix(tool-result): increase default max tool result chars for larger payloads | ✅ 已合并 | 将 `DEFAULT_MAX_LIVE_TOOL_RESULT_CHARS` 从 16K 提升至 32K，解决大分辨率截图被截断问题 |
| [#92383](https://github.com/openclaw/openclaw/pull/92383) | fix(gateway): never return an empty chat.history transcript | ✅ 已合并 | 修复超大消息导致空会话历史返回的问题 |
| [#94337](https://github.com/openclaw/openclaw/pull/94337) | fix(tui): show 0 not ? for fresh-session context tokens in footer | ✅ 已合并 | 修复新会话 TUI 页脚显示 `?/1.0m` 而非 `0/1.0m` 的问题 |
| [#94539](https://github.com/openclaw/openclaw/pull/94539) | fix(android): group settings by intent | ✅ 已合并 | Android 设置页面按意图分组，优化用户体验 |
| [#92574](https://github.com/openclaw/openclaw/pull/92574) | test(browser): cover action-input CLI request bodies | ✅ 已合并 | 增强浏览器 action-input CLI 命令测试覆盖 |
| [#94386](https://github.com/openclaw/openclaw/pull/94386) | feat(whatsapp): notify sender after pairing approval | ✅ 已合并 | WhatsApp 配对审批后增加通知发送功能 |

### 正在审查的待合并 PR

| PR 编号 | 标题 | 状态 | 优先级 |
|---------|------|------|--------|
| [#89045](https://github.com/openclaw/openclaw/pull/89045) | fix: recover terminal session status on visible inbound turns | 👀 Ready for maintainer look | P1 |
| [#94761](https://github.com/openclaw/openclaw/pull/94761) | fix(feishu): route p2p DM replies to user open_id instead of p2p group chat_id | 📣 Needs proof | P1 |
| [#94778](https://github.com/openclaw/openclaw/pull/94778) | feat(telegram): set ThreadLabel from topicName for forum sessions | 📣 Needs proof | P2 |
| [#94779](https://github.com/openclaw/openclaw/pull/94779) | perf(agents): parallelize MCP and LSP initialization to reduce cold-start latency | 📣 Needs proof | P2 |
| [#94782](https://github.com/openclaw/openclaw/pull/94782) | fix(sandbox): ensure skills directories exist for read-only mount resolution | 📣 Needs proof | P1 |
| [#94783](https://github.com/openclaw/openclaw/pull/94783) | fix(memory-core): lower default promotion minScore for Gemini embedding compatibility | 📣 Needs proof | P2 |

---

## 4. 社区热点

以下 Issues 和 PRs 在过去 24 小时内获得最多社区关注：

### 讨论最活跃的 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 优先级 | 链接 |
|------------|------|--------|--------|------|
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | Cron jobs consistently fail with MiniMax 503 overload during early morning (05:00-07:30 CST) | 12 | P2 | [查看](https://github.com/openclaw/openclaw/issues/85888) |
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent delivery lanes | 11 | P1 | [查看](https://github.com/openclaw/openclaw/issues/86538) |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex app-server: long agent replies silently truncated at ~1000-1100 chars | 11 | P1 | [查看](https://github.com/openclaw/openclaw/issues/84516) |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Agent repeats identical replies 2-10x on Telegram after 5.20 update | 9 | P1 | [查看](https://github.com/openclaw/openclaw/issues/86519) |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app-server emits notification:turn/started then goes silent | 8 | P1 | [查看](https://github.com/openclaw/openclaw/issues/85251) |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | cron announce delivery triggers EmbeddedAttemptSessionTakeoverError | 8 | P2 | [查看](https://github.com/openclaw/openclaw/issues/84583) |

### 热点分析

**核心诉求：**
1. **可靠性问题**：多个 Issues 反映 OpenClaw 在生产环境中出现静默失败（cron 任务静默失败、消息静默丢失），用户对"无错误上报但功能异常"的情况表示担忧
2. **平台集成稳定性**：Telegram、WhatsApp、Discord 等平台的消息传递可靠性问题突出
3. **性能与资源**：内存泄漏（Gateway heap 增长至 1073MB+）和冷启动延迟（~6-7秒）影响用户体验

---

## 5. Bug 与稳定性

### P1 严重问题（需立即关注）

| Issue 编号 | 问题描述 | 严重程度 | 是否有 Fix PR | 链接 |
|------------|----------|----------|---------------|------|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent delivery lanes | 影响会话状态、消息丢失 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/86538) |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex app-server 长回复在 ~1000-1100 字符处被静默截断 | 影响会话状态、消息丢失 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/84516) |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 机器人在 5.20 更新后重复发送 2-10x 相同回复 | 回归问题 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/86519) |
| [#86827](https://github.com/openclaw/openclaw/issues/86827) | 群聊会话卡在 'failed' 状态后静默丢弃所有后续消息 | 影响消息丢失 | ✅ [#89045](https://github.com/openclaw/openclaw/pull/89045) | [查看](https://github.com/openclaw/openclaw/issues/86827) |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex app-server client 在大日志文件时中途关闭 | 影响会话状态、消息丢失 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/86214) |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap 增长至 1073MB+，cron 任务静默失败 | 影响崩溃循环、消息丢失 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/87109) |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp 会话在长模型调用时停滞，回复未送达 | 影响消息丢失 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/84569) |
| [#84536](https://github.com/openclaw/openclaw/issues/84536) | 上下文溢出静默杀死嵌入式会话，未通知用户 | 影响消息丢失、崩溃循环 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/84536) |

### P2 次要问题

| Issue 编号 | 问题描述 | 严重程度 | 是否有 Fix PR | 链接 |
|------------|----------|----------|---------------|------|
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | Cron 任务在早 5-7 点因 MiniMax 503 过载持续失败 | P2 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/85888) |
| [#86063](https://github.com/openclaw/openclaw/issues/86063) | Anthropic 1h 缓存在每轮对话时失效 | P2 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/86063) |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | cron announce delivery 触发 EmbeddedAttemptSessionTakeoverError | P2 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/84583) |

### 回归问题（Regression）

| Issue 编号 | 问题描述 | 引入版本 | 链接 |
|------------|----------|----------|------|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复 2-10x | 2026.5.20 | [查看](https://github.com/openclaw/openclaw/issues/86519) |
| [#86050](https://github.com/openclaw/openclaw/issues/86050) | Gateway 缓冲 claude-cli 流事件，表面仅显示最终组装消息 | 回归 | [查看](https://github.com/openclaw/openclaw/issues/86050) |
| [#86957](https://github.com/openclaw/openclaw/issues/86957) | Telegram 入口路由 Bug | 回归 | [查看](https://github.com/openclaw/openclaw/issues/86957) |
| [#86178](https://github.com/openclaw/openclaw/issues/86178) | Memory Dreaming Promotion cron 自 2026-05-09 起静默 NO_REPLY | 回归 | [查看](https://github.com/openclaw/openclaw/issues/86178) |

---

## 6. 功能请求与路线图信号

### 重大功能提案（进行中）

| PR/Issue 编号 | 功能描述 | 规模 | 状态 | 链接 |
|---------------|----------|------|------|------|
| [#88504](https://github.com/openclaw/openclaw/pull/88504) | **feat(memory): 多槽内存角色架构** - 新增 `memory.recall`、`memory.compaction`、`memory.capture`、`memory.recall` 等标准内存角色槽位，支持内存插件组合而非相互替代 | XL | ⏳ Waiting on author | [查看](https://github.com/openclaw/openclaw/pull/88504) |
| [#86655](https://github.com/openclaw/openclaw/pull/86655) | **feat(claude): Claude-Bridge app-server harness 扩展** - 为 Anthropic 模型添加第一类 harness 支持 | XL | ⏳ Waiting on author | [查看](https://github.com/openclaw/openclaw/pull/86655) |
| [#90741](https://github.com/openclaw/openclaw/pull/90741) | **perf(models-config): 统一 auth-profile 指纹缓存 + targetProvider 短路** - 优化模型配置准备，减少昂贵的隐式 provider 发现 | XL | 👀 Ready for maintainer look | [查看](https://github.com/openclaw/openclaw/pull/90741) |
| [#94707](https://github.com/openclaw/openclaw/pull/94707) | **feat(slack): 添加 Slack relay 模式** - 支持从外部 `openclaw-slack-router` websocket 接收 Slack 事件 | L | 📣 Needs proof | [查看](https://github.com/openclaw/openclaw/pull/94707) |
| [#94779](https://github.com/openclaw/openclaw/pull/94779) | **perf(agents): 并行化 MCP 和 LSP 初始化以减少冷启动延迟** - 将 ~6-7 秒冷启动降至更低 | L | 📣 Needs proof | [查看](https://github.com/openclaw/openclaw/pull/94779) |

### 用户功能请求

| Issue 编号 | 功能描述 | 优先级 | 链接 |
|------------|----------|--------|------|
| [#86113](https://github.com/openclaw/openclaw/issues/86113) | Channel Broker Phase 3 - 官方 app/API 渠道支持 | P2 | [查看](https://github.com/openclaw/openclaw/issues/86113) |
| [#86534](https://github.com/openclaw/openclaw/issues/86534) | TUI 竞品分析：15 个差距需追赶 Claude Code、Aider、Codex CLI、Kimi CLI、Goose | P3 | [查看](https://github.com/openclaw/openclaw/issues/86534) |
| [#86425](https://github.com/openclaw/openclaw/issues/86425) | 为 OpenAI Realtime Talk 添加 describe_view 摄像头帧支持 | P2 | [查看](https://github.com/openclaw/openclaw/issues/86425) |
| [#86237](https://github.com/openclaw/openclaw/issues/86237) | 将 'cron' 子系统重命名以避免与 Unix 系统 cron 冲突 | P3 | [查看](https://github.com/openclaw/openclaw/issues/86237) |

---

## 7. 用户反馈摘要

### 核心痛点

1. **静默失败问题**
   - 用户反映 cron 任务、WhatsApp 会话等多种场景下出现"无错误但功能异常"的情况
   - 建议：需要增加更完善的错误上报机制和健康检查

2. **平台集成可靠性**
   - Telegram 重复回复、消息丢失问题严重影响用户体验
   - Discord 房间事件可能导致最终回复仅写入 transcript 而不回传到频道

3. **资源管理**
   - Gateway 内存持续增长（558MB → 1073MB+）导致 cron 任务静默失败
   - 孤儿 node server.js worker 进程累积

4. **性能问题**
   - MCP/LSP 初始化串行执行导致 ~6-7 秒冷启动延迟
   - Codex 热启动仍需 ~7.5 秒进行认证/工具设置

### 用户满意度

- **正面反馈**：Codex app-server 集成、Memory Dreaming 功能获得积极评价
- **负面反馈**：5.20 更新引入的 Telegram 重复回复问题引发较多投诉
- **改进建议**：用户呼吁更好的文档

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-19  
**分析范围：** OpenClaw、NousResearch/Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强"格局**，OpenClaw 以日均 147 条 Issues、500 条 PR 的绝对规模领跑，Hermes Agent 紧随其后形成第二梯队。整体生态正处于**从功能堆砌向稳定性收敛**的关键转型期：会话状态管理、平台集成可靠性、内存与性能优化成为跨项目共性挑战。值得注意的是，cc-haha 与 Codex++ 作为轻量级/垂直化选手，在细分场景中展现出差异化竞争力，但社区规模差距显著（约为头部的 5-20 倍）。

---

## 2. 各项目活跃度对比

| 项目 | Issues/24h | PRs/24h | 待合并 PR | 今日 Release | 健康度评估 |
|------|------------|---------|-----------|--------------|------------|
| **OpenClaw** | 147 (131 活跃) | 500 (452 待合) | 452 | ❌ 无 | ⚠️ 高风险：8 个 P1 问题无 Fix PR |
| **Hermes Agent** | 83 (68 活跃) | 500 (374 待合) | 374 | ❌ 无 | ⚠️ 中风险：3 个 P1 问题仍 OPEN |
| **cc-haha** | 8 | 3 (1 待合) | 1 | ❌ 无 | ✅ 低风险：已有 PR 覆盖关键 Bug |
| **Codex++** | 28 (26 活跃) | 4 (2 待合) | 2 | ✅ v1.2.15 | ⚠️ 中风险：启动问题影响新用户体验 |

**关键发现：** OpenClaw 与 Hermes Agent 的 PR 积压率均超 90%（待合并/总 PR），反映出维护者审核能力成为瓶颈；Codex++ 通过快速迭代（v1.2.15 热修复）维持了较好的版本质量。

---

## 3. OpenClaw 在生态中的定位

### 规模优势

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| Issues 规模 | 基准 (147) | 56% | 5% | 19% |
| PR 规模 | 基准 (500) | 100% | 0.6% | 0.8% |
| 功能覆盖 | 全栈 | 全栈 | 轻量 CLI | 桌面应用 |

### 技术路线差异

- **OpenClaw**：采用多平台统一抽象层（Gateway 架构），支持 Telegram/WhatsApp/Discord/飞书等 10+ 渠道，代价是内存占用高（Gateway heap 达 1073MB+）
- **Hermes Agent**：强调 Session 持久化与多角色编排（Doer/Reviewer 双角色），TUI/Desktop 体验优化为当前重心
- **cc-haha**：极简 CLI 定位，依赖第三方中转站，无自建 Agent 框架
- **Codex++**：桌面应用封装，聚焦供应商配置管理与会话同步

### 社区规模对比

OpenClaw 的社区规模约为：
- Hermes Agent 的 **1.8 倍**（Issues 口径）
- Codex++ 的 **5.3 倍**
- cc-haha 的 **18 倍**

---

## 4. 共同关注的技术方向

### 跨项目共性需求

| 技术方向 | OpenClaw | Hermes Agent | cc-haha | Codex++ | 具体诉求 |
|----------|----------|--------------|---------|---------|----------|
| **会话状态管理** | ✅ P1 | ✅ P1 | ✅ | ✅ | 锁超时、消息丢失、静默失败 |
| **平台集成稳定性** | ✅ P1 | ✅ P2 | ❌ | ❌ | Telegram 重复回复、WhatsApp 停滞 |
| **内存/性能优化** | ✅ P1 | ❌ | ❌ | ❌ | 冷启动延迟（6-7s）、内存泄漏 |
| **多供应商兼容** | ❌ | ❌ | ✅ | ✅ | 中转站适配、模型名称映射 |
| **配置隔离** | ❌ | ❌ | ❌ | ✅ | 供应商切换不覆盖用户设置 |

### 关键共性问题分析

**静默失败问题**（影响所有项目）：
- OpenClaw：cron 任务静默失败、Gateway heap 增长至 1073MB+
- Hermes Agent：上下文压缩后 `/goal` 丢失、SQLite 连接泄漏
- cc-haha：prewarm 竞态导致页面卡死
- Codex++：会话同步失效、API 连接不稳定

**建议：** 生态内可考虑共建"错误上报与健康检查"规范，避免各项目重复造轮子。

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心定位 | 差异化功能 | 技术架构 |
|------|----------|------------|----------|
| **OpenClaw** | 多平台消息中枢 | 10+ 渠道统一抽象、Memory Dreaming | Gateway + Agent 双层架构 |
| **Hermes Agent** | 开发者友好 CLI | 多角色编排、Composer 符号跳转 | 模块化插件系统 |
| **cc-haha** | 轻量代理工具 | 第三方中转站集成、极简启动 | 单体 CLI |
| **Codex++** | 桌面增强封装 | 聚合供应商、模型名称映射 | Electron + 供应商代理层 |

### 目标用户

- **OpenClaw**：需要多平台统一管理的企业/高级用户
- **Hermes Agent**：追求 CLI 效率的开发者
- **cc-haha**：轻度使用、依赖第三方服务的用户
- **Codex++**：需要桌面 GUI 的非技术用户

### 技术架构关键差异

```
OpenClaw:    [Gateway] → [Agent] → [多渠道适配器]
Hermes Agent: [CLI/TUI] → [Agent] → [插件系统]
cc-haha:     [CLI] → [代理层] → [第三方 API]
Codex++:     [Electron] → [供应商代理] → [本地/远程 API]
```

---

## 6. 社区热度与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|------|------|------|----------|
| **第一梯队** | OpenClaw、Hermes Agent | 日 PR 量 500+，Issue 80-150 | 🚀 快速迭代期：功能密集开发，稳定性债务累积 |
| **第二梯队** | Codex++ | 日 PR 量 4-28 | ⚖️ 质量巩固期：从功能堆砌转向稳定性修复 |
| **第三梯队** | cc-haha | 日 PR 量 3-8 | 🔧 精细化运营期：小步快跑，聚焦核心体验 |

### 成熟度信号

| 信号 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 版本发布节奏 | 慢（今日无） | 慢 | 慢 | 快（v1.2.15） |
| P1 问题积压 | 8 个（无 Fix） | 3 个仍 OPEN | 1 个（有 Fix） | 3 个（无 Fix） |
| 回归问题 | 4 个 | 1 个 | 1 个（v0.4.3） | 1 个（v1.2.14） |
| 文档完善度 | 中 | 中 | 高 | 中 |

**结论：** OpenClaw 与 Hermes Agent 处于"大跃进"阶段，代码吞吐量高但技术债积累快；Codex++ 通过快速热修复展现更好的版本控制能力；cc-haha 虽规模小但维护响应积极。

---

## 7. 值得关注的趋势信号

### 行业趋势提炼

| 趋势 | 证据 | 对开发者建议 |
|------|------|--------------|
| **1. 平台集成可靠性成生死线** | OpenClaw 8 个 P1 中 5 个与平台集成相关；Telegram/WhatsApp 问题引发大量投诉 | 投入资源建设集成测试矩阵，优先保障消息传递的 at-least-once 语义 |
| **2. 静默失败是用户流失主因** | 4 个项目均出现"无错误但功能异常"反馈 | 建议统一错误上报规范，增加健康检查端点 |
| **3. 多供应商适配是刚需** | cc-haha 中转站问题、Codex++ 模型名称映射需求旺盛 | 抽象供应商层，支持配置化的模型名重写 |
| **4. 冷启动优化进入深水区** | OpenClaw MCP/LSP 初始化 6-7s，Codex 热启动 7.5s | 并行化初始化、预热策略、增量加载是可行方向 |
| **5. 桌面化与轻量化并行** | Hermes Agent 推 Plan 模式、Desktop 字体缩放；cc-haha 坚持极简 CLI | 根据目标用户选择路径，避免功能蔓延 |

### 开发者参考价值

1. **架构选型**：若追求多平台覆盖，参考 OpenClaw 的 Gateway 架构；若追求开发效率，参考 Hermes Agent 的插件化设计
2. **稳定性建设**：Codex++ 的快速热修复（v1.2.15）值得借鉴，建立回归测试与灰度发布机制
3. **社区运营**：cc-haha 的小规模高响应模式表明，社区健康度不完全与规模正相关
4. **技术债预警**：OpenClaw 与 Hermes Agent 的 P1 积压问题需在下一版本集中消化，否则可能引发用户流失

---

**报告结语：** 当前生态正处于从"功能竞争"向"体验竞争"过渡的拐点。会话可靠性、平台集成稳定性、配置隔离将成为决定项目成败的关键因素。建议各项目在保持迭代速度的同时，将资源向 P1 问题修复倾斜，避免技术债累积影响长期用户留存。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-06-19  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

2026年6月19日，Hermes Agent 项目保持极高活跃度。过去24小时内共产生 **83条 Issues 更新**（68条新开/活跃，15条已关闭）和 **500条 PR 更新**（374条待合并，126条已合并/关闭）。项目整体呈现快速迭代态势，社区参与度显著。今日重点集中在 **Session/DB 稳定性修复**、**TUI/Desktop 体验优化** 和 **多平台消息适配** 三大方向。值得注意的是，多个 P1 级 Session 数据丢失问题已通过 PR 修复，但仍有部分问题处于 Open 状态需持续关注。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，推进了关键功能或修复：

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#48817](https://github.com/NousResearch/hermes-agent/pull/48817) | Bug Fix (P1) | `persist_session` 修复：避免对实时消息列表进行变异，确保 group-chat 上下文不被剥离 | OPEN |
| [#48816](https://github.com/NousResearch/hermes-agent/pull/48816) | Bug Fix (P2) | `hermes update` 批准 npm install scripts，解决更新流程中的脚本执行问题 | OPEN |
| [#48815](https://github.com/NousResearch/hermes-agent/pull/48815) | Bug Fix (P2) | TUI 修复：默认导入 `signal-exit` 而非命名导入，兼容更多 Node/bundler 配置 | OPEN |
| [#48814](https://github.com/NousResearch/hermes-agent/pull/48814) | Bug Fix (P2) | `clarify` 多选提示可读性修复：避免字典 repr 被截断显示 | OPEN |
| [#48812](https://github.com/NousResearch/hermes-agent/pull/48812) | Bug Fix (P2) | Photon (iMessage) 插件 sidecar 文件缺失修复：确保打包时包含 Node.js 侧文件 | OPEN |
| [#48810](https://github.com/NousResearch/hermes-agent/pull/48810) | Security (P2) | WhatsApp 平台错误信息脱敏：防止内部错误泄露至用户可见渠道 | OPEN |
| [#48127](https://github.com/NousResearch/hermes-agent/pull/48127) | Bug Fix (P2) | Gateway 运行时 `max_turns` 刷新修复：确保配置变更后立即生效 | OPEN |
| [#48629](https://github.com/NousResearch/hermes-agent/issues/48629) | Bug Fix (P2) | Memory 工具修复：不再在每次写入时无条件返回所有条目（已在 main 分支修复） | CLOSED |
| [#48809](https://github.com/NousResearch/hermes-agent/pull/48809) | Feature (P3) | 支持配置外部上下文文件 (`context.external_files`) | OPEN |
| [#48819](https://github.com/NousResearch/hermes-agent/pull/48819) | Feature (P2) | Telegram 入口加固：批量处理快速分割的消息片段 | OPEN |
| [#48818](https://github.com/NousResearch/hermes-agent/pull/48818) | Feature (P3) | Composer 新增 `@symbol:` 上下文提及：模糊跳转到代码符号 | OPEN |
| [#48821](https://github.com/NousResearch/hermes-agent/pull/48821) | Feature (P3) | Desktop Plan 模式切换：类似 Cursor 的计划编写模式 | OPEN |
| [#48813](https://github.com/NousResearch/hermes-agent/pull/48813) | Feature (P3) | Cursor 风格 Agent 编辑审查：支持接受/拒绝文件差异 | OPEN |
| [#13767](https://github.com/NousResearch/hermes-agent/pull/13767) | Feature (P2) | Microsoft Teams 平台适配器 V2：完整 Bot Framework 集成 | OPEN |
| [#23243](https://github.com/NousResearch/hermes-agent/pull/23243) | Feature (P3) | TUI 国际化框架：支持 Dashboard 多语言 | OPEN |
| [#48737](https://github.com/NousResearch/hermes-agent/pull/48737) | Feature (P3) | Slack 适配器：Markdown 表格转换为 Block Kit 表格块 | OPEN |
| [#48807](https://github.com/NousResearch/hermes-agent/pull/48807) | Feature (P3) | 飞书适配器：Markdown 表格渲染为 CardKit v2 原生表格组件 | OPEN |
| [#48806](https://github.com/NousResearch/hermes-agent/pull/48806) | Refactor (P3) | `delegate_task` 后台任务契约收紧：明确异步子任务定位 | OPEN |
| [#48805](https://github.com/NousResearch/hermes-agent/pull/48805) | Feature (P3) | Dashboard 使用配额页面 + 模型标签修正 | OPEN |
| [#48490](https://github.com/NousResearch/hermes-agent/pull/48490) | Bug Fix (P3) | Desktop 修复：尊重 profile-scoped HERMES_HOME | OPEN |

**今日亮点：** 项目在 **Session 稳定性**（多个 P1 级数据丢失修复）、**Desktop/TUI 体验**（Plan 模式、编辑审查、国际化）和 **多平台消息适配**（Teams、Slack、飞书）三个维度同步推进，显示出健康的并行开发节奏。

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最活跃（按评论数排序）：

### 热门 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 状态 | 链接 |
|-----------|------|--------|-----|------|------|
| #40166 | [Desktop app] 添加字体大小/缩放控制 | 6 | 6 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/40166) |
| #34592 | Doer/Reviewer 双角色并行编排 + Hindsight 共享记忆实践 | 5 | 0 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/34592) |
| #41625 | MCP tools 在 TUI 模式下被发现但未暴露给 agent | 5 | 1 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/41625) |
| #47477 | WhatsApp 群发功能指南（Termux） | 5 | 0 | CLOSED | [查看](https://github.com/NousResearch/hermes-agent/issues/47477) |
| #38478 | camofox 浏览器截图被裁剪 | 5 | 0 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/38478) |
| #48083 | Web/core toolsets 在本地 Ollama 模型默认路径下未注册 | 4 | 0 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/48083) |
| #33618 | 上下文压缩后持久化 /goal 丢失 | 4 | 0 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/33618) |
| #33314 | post-update 检查钩子功能请求 | 4 | 0 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/33314) |
| #37369 | FD 泄漏：response_store.db 打开多个 SQLite 连接未关闭 | 4 | 0 | CLOSED | [查看](https://github.com/NousResearch/hermes-agent/issues/37369) |

### 热点分析

1. **Desktop 体验需求强烈** (#40166)：macOS 用户强烈要求字体缩放功能，标准快捷键和触控板缩放均不工作，6个 👍 表明这是广泛痛点。

2. **高级编排实践分享** (#34592)：社区成员分享了运行近一个月的 Doer+Reviewer 双角色系统，展示了 Hermes 在复杂任务处理上的潜力。

3. **MCP 集成问题** (#41625)：MCP server 工具被发现但未在 TUI 中暴露，说明 TUI 与 MCP 生态的集成存在缺口。

4. **跨平台消息需求** (#47477)：WhatsApp 群发功能受到关注，反映了用户对 Hermes 作为多平台消息中枢的期待。

---

## 5. Bug 与稳定性

### P1 - 严重（需立即处理）

| Issue 编号 | 描述 | 状态 | Fix PR | 链接 |
|-----------|------|------|--------|------|
| #41386 | CLI/Desktop 在 state.db 不可用时仍可运行，导致会话截断 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/41386) |
| #47002 | v0.16.0 回归：SQLite 无 trigram tokenizer 时 SessionDB 崩溃 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/47002) |
| #3960 | Daytona 后端安全修复：shell mkdir 路径未加引号 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/pull/3960) |
| #44794 | /compress 删除原始消息（session rotation 失败时） | CLOSED | - | [查看](https://github.com/NousResearch/hermes-agent/issues/44794) |
| #46122 | _flush_messages_to_session_db 游标过期（无 rotation） | CLOSED | - | [查看](https://github.com/NousResearch/hermes-agent/issues/46122) |
| #39704 | Session Hygiene 压缩在 _session_db 为 None 时覆盖原始消息 | CLOSED | - | [查看](https://github.com/NousResearch/hermes-agent/issues/39704) |
| #47202 | 上下文压缩静默丢失未刷新消息 | CLOSED | - | [查看](https://github.com/NousResearch/hermes-agent/issues/47202) |
| #32243 | OAuth Pro/Max 凭证立即返回 "out of extra usage" | CLOSED | - | [查看](https://github.com/NousResearch/hermes-agent/issues/32243) |

**⚠️ 警告：** 今日有 **8个 P1 级问题**，其中 5个已关闭但可能存在未完全修复的风险。**#41386** 和 **#47002** 仍处于 OPEN 状态，建议优先处理。

### P2 - 高优先级

| Issue 编号 | 描述 | 状态 | Fix PR | 链接 |
|-----------|------|------|--------|------|
| #41625 | MCP tools 在 TUI 模式未暴露 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/41625) |
| #38478 | camofox 浏览器截图被裁剪/缩放异常 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/38478) |
| #48083 | 本地 Ollama 模型默认路径下 Web toolsets 未注册 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/48083) |
| #33618 | 上下文压缩后持久化 /goal 丢失 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/33618) |
| #48731 | /model 切换时优先使用原生 provider 而非当前 reseller | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/48731) |
| #48689 | hermes doctor 报告过期 npm 漏洞和误报 gemini API key 错误 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/48689) |
| #41517 | Desktop/Dashboard 聊天 worker 丢失 profile 选择 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/41517) |
| #30594 | hermes update 在 PEP 668 环境失败 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/30594) |
| #48649 | Cron 任务不感知 profile：skills 和存储使用全局路径 | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/48649) |
| #48629 | Memory 工具每次写入返回所有条目（已修复） | CLOSED | #main | [查看](https://github.com/NousResearch/hermes-agent/issues/48629) |

**✅ 已修复：** #48629 (memory tool token 浪费问题) 已在 main 分支修复。

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本，结合已有 PR 判断：

### 高期待度功能

| Issue 编号 | 功能描述 | P | 相关 PR | 链接 |
|-----------|---------|---|---------|------|
| #40166 | Desktop 字体大小/缩放控制 | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/40166) |
| #41190 | 统一插件路由选择器（支持 main/delegate/auxiliary 模型覆盖） | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/41190) |
| #41889 | delegate_task 跨 profile 子 agent 支持 | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/41889) |
| #35409 | delegate_task 添加 profile/model 覆盖参数 | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/35409) |
| #48011 | 任务/项目第一性原语（Mission/Project source-of-truth） | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/48011) |
| #40297 | Desktop 每个会话可选择工作区（非仅启动时） | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/40297) |
| #48716 | Windows 原生集成包（无需 Docker/WSL2） | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/48716) |
| #31621 | Web tools 支持 Gemini + Google-grounding | P3 | - | [查看](https://github.com/NousResearch/hermes-agent/issues/31621) |

### 已有 PR 推进的功能

| PR 编号 | 功能 | 状态 | 链接 |
|--------|------|------|------|
| #48809 | 外部上下文文件注入 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/pull/48809) |
| #48821 | Desktop Plan 模式切换 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/pull/48821) |
| #48813 | Cursor 风格编辑审查界面 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/pull/48813) |
| #13767 | Microsoft Teams 平台适配器 V2 | OPEN | [查看](https://github

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目日报 | 2026-06-19

---

## 1. 今日速览

cc-haha 项目今日保持较高活跃度，共产生 **8 条 Issues** 和 **3 条 PRs** 更新。社区反馈集中在 **CLI 稳定性**（启动失败、prewarm 会话冲突）和 **用户体验**（日志复制、MCP 命名限制）两个方向。值得注意的是，今日有 **2 个 PR 被关闭**（含 1 个 bug fix），另有 1 个针对 prewarm 竞态条件的优化 PR 等待合并，整体项目推进节奏良好，无新增版本发布。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

| PR | 状态 | 领域 | 摘要 |
|----|------|------|------|
| [#861](https://github.com/NanmiCoder/cc-haha/pull/861) | ✅ CLOSED | server | 优化 `keep_alive` 导致无法获取模型数据的问题 |
| [#862](https://github.com/NanmiCoder/cc-haha/pull/862) | ✅ CLOSED | server | 修复 Zhipu GLM 预设缺少环境变量导致的兼容性问题（code 1305 过载错误） |
| [#865](https://github.com/NanmiCoder/cc-haha/pull/865) | ⏳ OPEN | server | 解决 `prewarm_session` 与 `user_message` 同时发送导致的会话卡死问题 |

**推进亮点：**
- **#862** 修复了智谱 GLM 预设与 Anthropic 兼容端点的不兼容问题，移除了错误的 Beta API 字段（`defer_loading`），预计可改善使用智谱服务的用户体验。
- **#865** 针对 Issue #863 提出的竞态条件问题提出了解决方案，添加了安全检查防止 prewarm 空闲计时器中断活跃会话，该 PR 正在等待维护者审批。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 类型 | 评论数 | 摘要 |
|-------|------|--------|------|
| [#851](https://github.com/NanmiCoder/cc-haha/issues/851) | bug | 2 | GPT 模型使用异常，中转站模型偶发性失效 |
| [#859](https://github.com/NanmiCoder/cc-haha/issues/859) | bug | 1 | v0.4.3 启动 CLI 失败 |

**热点分析：**
- **#851** 引发 2 条评论讨论，用户反映通过中转站使用 GPT 模型时偶发异常，新开窗口后可恢复。这可能指向会话状态管理或连接保活机制的问题。
- **#859** 涉及最新版本 CLI 启动失败，配有截图说明，是今日唯一涉及 v0.4.3 版本的回归性问题，需优先关注。

---

## 5. Bug 与稳定性

按严重程度排列的 Bug 报告：

| 优先级 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 高 | [#859](https://github.com/NanmiCoder/cc-haha/issues/859) | v0.4.3 启动 CLI 失败 | OPEN |
| 🔴 高 | [#863](https://github.com/NanmiCoder/cc-haha/issues/863) | prewarm 与 user_message 竞态导致页面卡死 | OPEN，PR [#865](https://github.com/NanmiCoder/cc-haha/pull/865) 待合并 |
| 🟡 中 | [#851](https://github.com/NanmiCoder/cc-haha/issues/851) | GPT 中转模型偶发异常 | OPEN |
| 🟡 中 | [#867](https://github.com/NanmiCoder/cc-haha/issues/867) | 终端日志无法复制 | OPEN |
| 🟡 中 | [#866](https://github.com/NanmiCoder/cc-haha/issues/866) | 未描述具体 Bug | OPEN |
| 🟢 低 | [#864](https://github.com/NanmiCoder/cc-haha/issues/864) | MCP 服务器名称不支持中文 | OPEN |

**稳定性警示：**
- v0.4.3 版本的启动失败问题（#859）可能影响大量用户升级，建议优先排查。
- #863 已有对应 PR #865，建议优先审核合并。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 摘要 | 潜在价值 |
|-------|------|------|----------|
| [#868](https://github.com/NanmiCoder/cc-haha/issues/868) | question/feature | trace 页面缺少手动删除会话的功能 | ⭐⭐⭐ 用户明确需求，可提升使用体验 |
| [#864](https://github.com/NanmiCoder/cc-haha/issues/864) | bug/feature | MCP 服务器名称不支持中文，建议放宽校验 | ⭐⭐ 用户国际化使用场景需求 |
| [#860](https://github.com/NanmiCoder/cc-haha/issues/860) | question | Prompt is too long 错误 | ⭐⭐ 可能涉及上下文长度限制或 Prompt 压缩机制 |

**路线图建议：**
- **#868** 的会话管理功能是高频需求，建议评估后纳入下一版本。
- **#864** 的 MCP 命名限制问题已有明确根因（`src/services/mcp/config.ts:640` 正则校验），修复成本较低。

---

## 7. 用户反馈摘要

从 Issues 评论和内容中提炼的用户痛点：

| 场景 | 痛点 | 相关 Issue |
|------|------|------------|
| **第三方模型使用** | 中转站 GPT 模型偶发失效，需重启窗口 | [#851](https://github.com/NanmiCoder/cc-haha/issues/851) |
| **版本升级** | 升级到 v0.4.3 后 CLI 无法启动 | [#859](https://github.com/NanmiCoder/cc-haha/issues/859) |
| **会话管理** | trace 页面无法手动清理不需要的会话 | [#868](https://github.com/NanmiCoder/cc-haha/issues/868) |
| **调试体验** | 终端输出的日志无法复制，影响排查 | [#867](https://github.com/NanmiCoder/cc-haha/issues/867) |
| **国际化** | MCP 服务器命名不支持中文，影响非英文用户 | [#864](https://github.com/NanmiCoder/cc-haha/issues/864) |

**用户满意度信号：**
- 多个用户已阅读 README 和第三方模型使用指南后提交 Issue，说明文档覆盖较完善。
- #862 的修复表明维护者对第三方 provider 兼容性问题响应积极。

---

## 8. 待处理积压

以下 Issues 超过 24 小时无维护者响应，建议关注：

| Issue | 创建时间 | 类型 | 摘要 | 等待时长 |
|-------|----------|------|------|----------|
| [#860](https://github.com/NanmiCoder/cc-haha/issues/860) | 2026-06-18 | question | Prompt is too long | ~1 天 |
| [#863](https://github.com/NanmiCoder/cc-haha/issues/863) | 2026-06-18 | bug | prewarm 竞态问题 | ~1 天（已有 PR #865） |
| [#864](https://github.com/NanmiCoder/cc-haha/issues/864) | 2026-06-18 | bug/feature | MCP 名称中文支持 | ~1 天 |
| [#866](https://github.com/NanmiCoder/cc-haha/issues/866) | 2026-06-18 | bug | 未描述具体问题 | ~1 天 |

**积压提醒：**
- **#866** 内容不完整，建议维护者请求用户提供更多信息。
- **#863** 已有对应 PR #865，建议优先审核以解决用户痛点。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 新开/活跃 Issues | 8 |
| 已关闭 Issues | 0 |
| 待合并 PRs | 1 |
| 已合并/关闭 PRs | 2 |
| 新版本发布 | 0 |
| 讨论最活跃 Issue | #851（2 条评论） |

---

*报告生成时间：2026-06-19 | 数据来源：GitHub cc-haha 仓库*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目日报 | 2026-06-19

---

## 1. 今日速览

2026年6月19日，Codex++ 项目保持高度活跃。过去24小时内共产生 **28 条 Issues 更新**（新开/活跃26条，关闭2条）和 **4 条 PR 更新**（待合并2条，已合并/关闭2条）。项目发布了 **v1.2.15** 版本，重点修复了聚合供应商切换的回归问题。今日社区讨论围绕会话管理、供应商配置同步、以及多供应商场景下的稳定性展开，整体呈现问题报告密集、功能需求多元的态势，建议优先处理影响核心功能的 Bug。

---

## 2. 版本发布

### ✅ v1.2.15 已发布

**发布时间**：2026-06-19

**更新内容**：

| 类型 | 描述 |
|------|------|
| 🐛 Bug Fix | 修复聚合供应商切换时误判“缺少独立 config.toml”的问题 |
| 🔧 功能增强 | 聚合供应商现在会正确写入本地 Responses 代理配置，用于按策略转发到成员供应商 |
| 🧪 测试 | 补充聚合供应商切换与代理转发回归测试，降低后续改动破坏风险 |

**影响评估**：此次更新为热修复，主要针对 v1.2.14 引入的聚合供应商回归问题。建议使用聚合供应商功能的用户尽快升级。

🔗 [Release 页面](https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.15)

---

## 3. 项目进展

### 合并/关闭的 PR

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| **#428** | 新增聚合供应商按策略轮转功能 | ✅ 已合并 | 完成了聚合供应商的核心功能开发，包括成员选择、策略配置、故障转移路由等，是 v1.2.15 的核心功能基础 |
| **#1104** | feat: add model name rewriting for sub-agent spawn | ❌ 已关闭 | 作者主动关闭，可能正在重新调整后重新提交 |

### 待合并的 PR

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| **#1109** | feat: add model name rewriting for sub-agent spawn | 🔄 待合并 | 新增模型名称重写功能，允许用户在配置中映射 Codex 内部模型名到上游供应商的实际模型名，解决非 OpenAI 直连场景下子代理请求失败的问题 |
| **#1089** | fix: enable native fast service tier for API-key auth | 🔄 待合并 | 恢复 API-key 认证用户的 Codex 原生 Fast Service Tier 支持，使 API-key 用户能够使用与登录用户相同的速度选择流程 |

🔗 [所有 PR](https://github.com/BigPizzaV3/CodexPlusPlus/pulls)

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 👍 | 热度分析 |
|---------|------|--------|-----|----------|
| **#540** | deepseekAPI接入无法开启1M上下文 | 9 | 0 | 用户强烈关注上下文长度限制问题，涉及 DeepSeek API 特定配置 |
| **#895** | 历史会话无法恢复 | 7 | 0 | 多名用户反馈更换中转站后会话同步失效，影响核心使用体验 |
| **#618** | 供应商切换回填当前供应商配置失败：config.toml TOML 解析失败 | 6 | 0 | 供应商切换功能的配置持久化问题，与 v1.2.15 修复相关 |
| **#1099** | 点击codex++无反应，软件启动不了 | 4 | 0 | 启动问题，可能影响新用户首次体验 |

**热点分析**：
- **会话管理** 是当前最大痛点，多个 Issue 反映历史会话无法恢复、同步失效等问题
- **供应商配置** 相关问题（#618、#1093、#1079）持续高热，涉及配置写入、模型选择、API 连接等
- **平台兼容性** 问题（#1065 Mac 重启、#1103 Mac 启动、#1101 Windows 同步）表明跨平台稳定性需加强

🔗 [所有 Issues](https://github.com/BigPizzaV3/CodexPlusPlus/issues)

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

| 严重程度 | Issue # | 标题 | 状态 | 是否有 Fix PR |
|----------|---------|------|------|---------------|
| 🔴 严重 | **#1103** | 应用程序"Codex++"已不能再打开（Mac） | OPEN | ❌ |
| 🔴 严重 | **#1065** | mac最新版本依然重启codex++失败 | CLOSED | ✅ 已修复 |
| 🔴 严重 | **#1099** | 点击codex++无反应，软件启动不了 | OPEN | ❌ |
| 🟠 高 | **#895** | 历史会话无法恢复 | OPEN | ❌ |
| 🟠 高 | **#1057** | 无法刷新对话，无法恢复历史会话 | OPEN | ❌ |
| 🟠 高 | **#1101** | windows无法同步 | OPEN | ❌ |
| 🟡 中 | **#540** | deepseekAPI接入无法开启1M上下文 | OPEN | ❌ |
| 🟡 中 | **#1088** | 图片无法发送 404 错误 | OPEN | ❌ |
| 🟡 中 | **#1079** | Codex++1.2.13版本无法使用computer use | OPEN | ❌ |
| 🟡 中 | **#1100** | 使用几分钟后出现 400 报错 | OPEN | ❌ |
| 🟡 中 | **#1106** | 经常报错 BadRequestError | OPEN | ❌ |
| 🟢 低 | **#1091** | 使用llama.cpp做后端时偶尔无法连接 | OPEN | ❌ |
| 🟢 低 | **#1110** | codex app更新后插件只剩下几个 | OPEN | ❌ |

**稳定性小结**：
- **启动类问题**（#1103、#1099、#1065）影响用户基本使用，需优先排查
- **会话管理问题**（#895、#1057、#1101）涉及数据持久化，影响用户粘性
- **API 错误**（#1100、#1106）多为 BadRequestError，可能与上游响应格式解析有关

🔗 [Bug 标签 Issues](https://github.com/BigPizzaV3/CodexPlusPlus/labels/Bug)

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue # | 功能请求 | 点赞 | 预计价值 | 与现有 PR 关联 |
|---------|----------|------|----------|----------------|
| **#1108** | 支持模型名称映射（modelMappings）以兼容非 OpenAI 上游供应商 | 0 | ⭐⭐⭐⭐⭐ | 🔗 对应 PR #1109 |
| **#1028** | 希望增加 token 统计、重置功能 | 1 | ⭐⭐⭐⭐ | ❌ 无关联 PR |
| **#1095** | 最小化到任务栏的图标和 codex 图标重复 | 0 | ⭐⭐ | ❌ 无关联 PR |
| **#1097** | 供应商切换不应覆盖 live desktop 设置 | 0 | ⭐⭐⭐⭐ | ❌ 无关联 PR |

**路线图信号分析**：
1. **模型名称映射**（#1108）已有对应 PR #1109，预计下一版本可能合并，是解决多供应商兼容性的关键功能
2. **Token 统计**（#1028）是用户高频需求，可考虑纳入供应商管理模块
3. **供应商切换行为**（#1097）涉及配置管理设计，需在架构层面统一规划

🔗 [Feature 标签 Issues](https://github.com/BigPizzaV3/CodexPlusPlus/labels/Feature)

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 用户反馈 | 影响范围 |
|------|----------|----------|
| **会话同步失效** | "更换中转站之后历史会话无法恢复，同步目标都选了个边都没啥用" | 核心功能 |
| **启动无响应** | "点击codex++无反应，软件启动不了。打开原始的codex可以正常打开" | 新用户体验 |
| **配置覆盖** | "切换供应商后字体大小、默认打开目标等设置在不同供应商之间来回恢复" | 配置管理 |
| **API 连接不稳定** | "使用llama.cpp做后端时，codex++经常会无法连接，上午还正常，下午就不行" | 稳定性 |
| **沙盒限制** | "Codex只会拟真执行，不会去实际执行命令和操作" | 功能完整性 |

### 用户满意的地方

- **聚合供应商功能**：PR #428 的合并表明用户对多供应商轮转、故障转移有强烈需求
- **Fast Service Tier 支持**：PR #1089 旨在恢复 API-key 用户的原生加速体验

### 核心诉求提炼

1. **稳定性优先**：启动、连接、会话管理等核心路径需更健壮
2. **配置隔离**：供应商配置与桌面设置应解耦，避免意外覆盖
3. **多供应商兼容**：需要更灵活的模型名称映射和协议转换

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue # | 标题 | 创建时间 | 更新 | 评论 | 优先级 |
|---------|------|----------|------|------|--------|
| **#540** | deepseekAPI接入无法开启1M上下文 | 2026-06-02 | 2026-06-18 | 9 | 🔴 高 |
| **#618** | 供应商切换回填配置失败 | 2026-06-04 | 2026-06-18 | 6 | 🔴 高 |
| **#884** | MiMo API 流式响应解码失败 | 2026-06-11 | 2026-06-18 | 1 | 🟠 中 |
| **#966** | 自动化任务模型报错 | 2026-06-14 | 2026-06-18 | 2 | 🟠 中 |

### 建议优先处理

1. **#540** - DeepSeek 1M 上下文问题已有 9 条评论，是当前最热门的未解决 Issue
2. **#618** - 供应商切换 TOML 解析问题与 v1.2.15 修复相关，需确认是否彻底解决
3. **#895** - 历史会话恢复问题影响核心体验，需系统性排查同步机制

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 28 条/24h | 📈 上升 |
| PR 活跃度 | 4 条/24h | ➡️ 持平 |
| 今日新版本 | v1.2.15 | 🆕 |
| 待合并 PR | 2 个 | ⏳ |
| Open Issues 总数 | 26 个 | ⚠️ 需关注 |
| 关闭 Issues | 2 个 | ✅ |

---

**报告生成时间**：2026-06-19  
**数据来源**：[Codex++ GitHub](https://github.com/BigPizzaV3/CodexPlusPlus)

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*