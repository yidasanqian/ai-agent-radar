# OpenClaw 生态日报 2026-06-23

> Issues: 37 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-23 03:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**：2026-06-23
**数据来源**：GitHub openclaw/openclaw 仓库

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 37 条 Issues（26 条新开/活跃，11 条关闭）和 500 条 PR 更新（59 条已合并/关闭，441 条待合并）。项目发布了 v2026.6.10-beta.2 版本，引入自动快速对话模式和更可靠的模型路由功能。社区聚焦于 Cron 调度器的全局状态污染问题、子代理完成通知丢失、以及非 Anthropic 模型的工具调用兼容性问题。安全方面存在 3 个 P2 级问题待修复，包括 macOS 定位权限疯狂请求和 Gemini API 密钥明文写入 systemd 服务文件。整体项目健康度良好，但积压待处理 PR 数量庞大（441 条），建议优先处理高优先级安全修复。

---

## 2. 版本发布

### v2026.6.10-beta.2 已发布

**发布时间**：2026-06-23
**发布说明**：

本次 Beta 版本包含两项重要改进：

**自动快速对话模式（Automatic fast mode for talks）**：OpenClaw 现在能够自动为短对话轮次启用快速模式，并在较长运行时自动切换回正常模式，同时提供有界回退和交付行为。该功能由 @alexph-dev 和 @vincentkoc 贡献（#85104）。

**更可靠的模型路由（More reliable model routing）**：Zai 相关的模型路由逻辑得到优化，提升了多模型环境下的路由稳定性。

**破坏性变更**：无
**迁移注意事项**：无

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR 编号 | 标题 | 状态 | 贡献者 | 说明 |
|---------|------|------|--------|------|
| [#95826](https://github.com/openclaw/openclaw/pull/95826) | Fix Codex message-tool-only reply latency | CLOSED | @omarshahine | 修复 Codex 在 message_tool_only 模式下发送可见回复后仍等待助手合成的延迟问题 |
| [#95417](https://github.com/openclaw/openclaw/pull/95417) | fix(agents): bound Google prompt cache response reads | CLOSED | @Alix-007 | 修复 Google 提示缓存响应读取无界问题，防止潜在 DoS |
| [#95922](https://github.com/openclaw/openclaw/pull/95922) | fix(ci): finalize testbox sessions after setup failures | CLOSED | @vincentkoc | 修复 CI 中 Windows Testbox 在设置失败后未正确清理的问题 |
| [#95931](https://github.com/openclaw/openclaw/pull/95931) | fix(commitments): use single-char ellipsis in truncate | OPEN | @hanZeng-08 | 修复 `openclaw commitments` 表格列溢出 2 字符的显示 bug |
| [#95943](https://github.com/openclaw/openclaw/pull/95943) | fix(cron): preserve provider/model on isolated-run timeout row | OPEN | @ZengWen-DT | 修复 Cron 隔离运行超时/中止时丢失 provider 和 model 信息的日志问题 |
| [#95942](https://github.com/openclaw/openclaw/pull/95942) | Fix Codex message-tool-only source reply completion | OPEN | @omarshahine | 修复 Codex message_tool_only 模式下 iMessage 回复完成识别问题 |
| [#95945](https://github.com/openclaw/openclaw/pull/95945) | fix(media): retry direct delivery when wake returns false | OPEN | @Papilionidae | 修复媒体生成成功后 wakeTaskCompletion 返回 false 时静默丢弃的问题 |

**项目整体向前推进**：今日关闭 11 条 Issues 和 59 条 PRs，涵盖安全修复、延迟优化、显示 bug 修复等多个领域。大量 P1 级问题已有对应 fix PR 正在 review 中。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

**1. #90991** — Cron 调度触发器污染全局运行时状态导致瞬时系统级过载故障
- **评论数**：14 | **👍**：1
- **状态**：CLOSED
- **链接**：https://github.com/openclaw/openclaw/issues/90991
- **分析**：这是一个 P1 级严重问题，涉及 Cron 触发器导致全局状态污染，引发系统级过载。已关闭但需关注是否彻底修复。

**2. #92460** — 隔离 Cron 完成通知器在最终控制器返回时丢弃显式 delivery.channel
- **评论数**：9 | **👍**：1
- **状态**：OPEN
- **链接**：https://github.com/openclaw/openclaw/issues/92460
- **分析**：用户明确设置了 `delivery.mode: "announce"` 和 `delivery.channel: "webchat"`，但隔离 Cron 完成交付仍失败。核心诉求是确保显式配置不被覆盖。

**3. #94032** — exec 无法访问私有 LAN 主机，但同一用户通过 GUI/LaunchAgent 可以
- **评论数**：7 | **👍**：1
- **状态**：OPEN | **优先级**：P2 | **影响**：安全
- **链接**：https://github.com/openclaw/openclaw/issues/94032
- **分析**：OpenClaw exec 工具与系统级网络访问存在差异，可能是权限或环境变量问题。

**4. #95724** — feat(memory): 按源目录而非代理建立索引，消除同工作区代理的重复向量存储
- **评论数**：5 | **👍**：1
- **状态**：OPEN | **优先级**：P2
- **链接**：https://github.com/openclaw/openclaw/issues/95724
- **分析**：多个代理共享同一工作区时各自维护独立向量索引，造成资源浪费。用户期望共享索引以提升效率。

**5. #90288** — 非 Anthropic 模型将工具调用输出为纯文本 '[tool: exec]' 而非 tool_use 块
- **评论数**：4 | **👍**：1
- **状态**：OPEN | **优先级**：P1
- **链接**：https://github.com/openclaw/openclaw/issues/90288
- **分析**：使用 MiniMax-M3、MiniMax-M2.7-highspeed、DeepSeek-V4-Flash 等模型时，工具调用格式不兼容。这是多模型生态的关键互操作性问题。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

#### P1 级（关键/阻塞）

| Issue | 标题 | 状态 | 是否有 Fix PR | 链接 |
|-------|------|------|---------------|------|
| #90288 | 非 Anthropic 模型输出工具调用为纯文本 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/90288) |
| #92460 | 隔离 Cron 完成通知器丢弃显式 delivery.channel | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/92460) |
| #94153 | 子代理完成通知应持久化到消息队列而非直接会话调度 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/94153) |
| #90178 | 子代理 announce 放弃时不唤醒父级导致永久死锁 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/90178) |
| #94432 | OpenAI/Codex OAuth 提供商从 chatgpt.com/backend-api 收到 Cloudflare 403 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/94432) |

#### P2 级（重要）

| Issue | 标题 | 状态 | 是否有 Fix PR | 链接 |
|-------|------|------|---------------|------|
| #94032 | exec 无法访问私有 LAN 主机（安全问题） | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/94032) |
| #94147 | macOS app CLLocationManager 每秒重建导致 TCC 权限疯狂请求 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/94147) |
| #95895 | GEMINI_API_KEY 以明文写入 systemd 服务单元文件 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/95895) |
| #95894 | 插件安装导致 Express 4.x 路由崩溃 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/95894) |
| #95915 | 嵌入式运行中止时堆内存未释放 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/95915) |
| #95907 | 隔离 Cron 会话代理循环在运行标记"ok"后继续消耗 token | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/95907) |
| #95904 | 非 Codex 回退模型在 2026.6.9 中 code-mode 工具调用失败 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/95904) |
| #95878 | Telegram 长消息自动分割回归仍存在于 2026.6.9 | OPEN | 无 | [链接](https://github.com/openclaw/openclaw/issues/95878) |

#### 已关闭的 Bug

| Issue | 标题 | 状态 | 链接 |
|-------|------|------|------|
| #90991 | Cron 调度触发器污染全局运行时状态 | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/90991) |
| #95489 | claude-cli 信用耗尽错误绕过模型回退链 | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/95489) |
| #95394 | LM Studio 模型标识符在重试路径追加量化后缀 | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/95394) |
| #95882 | Persist CLI 设备配对请求恶化到每 4 秒一次 | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/95882) |

**稳定性评估**：今日新增 3 个安全相关 P2 Bug（#94032、#94147、#95895），建议优先处理。嵌入式运行内存泄漏（#95915）和 Cron token 消耗问题（#95907）可能影响生产环境稳定性。

---

## 6. 功能请求与路线图信号

### 值得关注的功能请求

**1. #84527** — 添加 Antigravity CLI (agy) 作为 CLI 后端替代已弃用的 google-gemini-cli
- **优先级**：P2 | **👍**：9（今日最高）
- **状态**：OPEN | **标签**：enhancement
- **链接**：https://github.com/openclaw/openclaw/issues/84527
- **背景**：Google 在 2026 年 5 月 I/O 大会上宣布 Gemini CLI 将过渡到 Antigravity CLI (agy)，个人层用户需在 2026 年 6 月 18 日前完成迁移。
- **纳入版本可能性**：高（迁移截止日期紧迫）

**2. #95724** — 按源目录而非代理建立内存索引，消除重复向量存储
- **优先级**：P2 | **👍**：1
- **状态**：OPEN | **标签**：enhancement, feat(memory)
- **链接**：https://github.com/openclaw/openclaw/issues/95724
- **分析**：资源优化类功能，多代理共享工作区场景下的效率提升需求。

**3. #29372** — FEATURE: Per-agent subagents.workspace 配置
- **优先级**：P2 | **👍**：0
- **状态**：OPEN | **标签**：enhancement
- **链接**：https://github.com/openclaw/openclaw/issues/29372
- **分析**：子代理工作区隔离功能，允许父代理为子代理指定独立工作目录。

**4. #92666** — Channel-aware 设备范围升级审批——将审批卡片发送回触发渠道
- **优先级**：P2 | **👍**：1
- **状态**：OPEN | **标签**：enhancement
- **链接**：https://github.com/openclaw/openclaw/issues/92666
- **分析**：改善多渠道场景下的设备配对体验。

**5. #95941** — Cron command-payload 添加 per-stream 交付过滤器
- **优先级**：P3 | **👍**：0
- **状态**：OPEN
- **链接**：https://github.com/openclaw/openclaw/issues/95941
- **分析**：允许 Cron 命令负载过滤特定交付流（如仅 stdout），减少噪音。

**6. #77225** — feat(sessions): 通过 AI 摘要自动生成会话标题
- **优先级**：P2 | **👍**：0
- **状态**：OPEN | **标签**：feat
- **链接**：https://github.com/openclaw/openclaw/issues/77225
- **分析**：改善用户体验，会话默认使用截断的首条用户消息作为标题往往不够有用。

**路线图信号**：从高 👍 数和紧迫截止日期看，Antigravity CLI 迁移（#84527）最可能进入下一版本。子代理相关功能（#29372、#76332）和会话管理改进（#77225）也是社区关注焦点。

---

## 7. 用户反馈摘要

### 真实用户痛点与使用场景

**痛点 1：Cron 调度可靠性问题**
- 多名用户报告 Cron 触发器导致全局状态污染（#90991 已关闭但问题可能复现）
- 隔离 Cron 完成通知丢失（#92460），用户明确配置 delivery.channel 但被忽略
- 子代理完成通知导致父级死锁（#90178），生产环境长时间运行任务可能卡死

**痛点 2：多模型兼容性问题**
- 非 Anthropic 模型（MiniMax、DeepSeek 等）工具调用格式不兼容（#90288）
- LM Studio 模型标识符在重试时追加量化后缀导致错误（#95394 已关闭）
- 非 Codex 回退模型 code-mode 工具调用失败（#95904）

**痛点 3：安全与权限问题**
- macOS 定位权限每 10 秒请求约 45 次（#94147），严重影响用户体验
- Gemini API 密钥明文写入 systemd 服务文件（#95895），安全风险
- exec 无法访问私有 LAN 主机（#94032），与 GUI 行为不一致

**痛点 4：桌面应用配置持久化问题**
- 桌面应用每次重启覆盖自定义 agents.defaults 字段（#95939），如 bootstrapMaxChars 从 30000 重置为 12000
- 插件安装导致 Express 4.x 路由崩溃（#95894），开发者体验差

**正面反馈信号**
- v2026.6.10-beta.2 的自动快速对话模式获得积极关注
- 社区贡献活跃，今日有多个高质量 fix PR 提交

---

## 8. 待处理积压

### 长期未响应的重要 Issue（超过 14 天无维护者回复）

| Issue | 标题 | 创建日期 | 最后更新 | 优先级 | 链接 |
|-------|------|----------|----------|--------|------|
| #29372 | Per-agent subagents.workspace 配置 | 2026-02-28 | 2026-06-23 | P2 | [链接](https://github.com/openclaw/openclaw/issues/29372) |
| #67868 | memory status 报告 "Dreaming: off" 当仅启用 light phase | 2026-04-17 | 2026-06-22 | P2 | [链接](https://github.com/openclaw/openclaw/issues/67868) |
| #65312 | 文档缺口：头像图片 2MB 限制 | 2026-04-12 | 2026-06-23 | P3 | [链接](https://github.com/openclaw/openclaw/issues/65312) |
| #84527 | 添加 Antigravity CLI (agy) 替代 google-gemini-cli | 2026-05-20 | 2026-06-23 | P2 | [链接](https://github.com/openclaw/openclaw/issues/84527) |
| #87253 | 子代理工作目录隔离内置预防 |

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-06-23
**数据来源**：GitHub 公开数据

---

## 1. 生态全景

2026年6月下旬，个人 AI 助手与自主智能体开源生态呈现**"头部活跃、尾部追赶"**的格局。OpenClaw 与 Hermes Agent 构成第一梯队，日均 Issue/PR 吞吐量达百位数级别，社区贡献生态成熟；cc-haha 与 Codex++ 处于快速成长阶段，Issue 量在10-20区间但 Bug 密度较高。值得关注的是，**多模型兼容性**（非 Anthropic 模型工具调用）、**安全与权限隔离**、**跨平台一致性**构成全生态共同挑战，尚未出现统一解决方案。各项目均在"功能快速迭代"与"稳定性保障"之间寻找平衡点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (日新增/活跃) | PR (日更新) | 待合并 PR | 今日 Release | 关键 Bug (P1/P2) | 健康度评估 |
|------|---------------------|-------------|-----------|--------------|-----------------|------------|
| **OpenClaw** | 37 (26/11) | 500 | 441 | v2026.6.10-beta.2 | 5 P1 / 8 P2 | ⚠️ PR 积压严重，安全问题待处理 |
| **Hermes Agent** | 129 (114/15) | 500 | 342 | 无 | 6 P1 / 6 P2 | ⚠️ 高活跃但 P1 问题集中 |
| **cc-haha** | 10 (5/5) | 2 | 1 | 无 | 3 高危 | 🟡 v0.4.3 回归问题，需补丁 |
| **Codex++** | 18 | 2 | 1 | 无 | 4 高危 | 🔴 稳定性集中爆发，积压 13 天未处理 |

**数据洞察**：
- OpenClaw 与 Hermes Agent 规模相近，但 OpenClaw PR 积压率（88%）高于 Hermes（68%）
- cc-haha 与 Codex++ 规模相近，但 Codex++ 高危 Bug 占比（22%）显著高于 cc-haha（12%）
- 今日仅 OpenClaw 发布新版本，其余项目处于维护状态

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模对比

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 日 Issue 吞吐量 | 37 | 129 | 10 | 18 |
| 日 PR 吞吐量 | 500 | 500 | 2 | 2 |
| 核心贡献者 | @alexph-dev, @vincentkoc | 分散式 | @zhbdesign | 未明确 |
| 社区讨论深度 | 高（14 条评论 Issue） | 中（22 条评论 Issue） | 低 | 中（7 条评论 Issue） |

### 3.2 技术路线差异

| 特性 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心架构** | 通用 Agent 框架 + Cron 调度 | 多平台消息网关 + 技能系统 | 对话式 Agent | Codex 增强工具 |
| **模型支持** | 多模型路由（Anthropic + Google + OpenAI） | 多 Provider 抽象 | 主要依赖 Claude | 聚焦 Codex/OpenAI |
| **差异化能力** | 自动快速对话模式、模型路由优化 | 跨平台（Discord/Telegram/Teams） | 流式响应优化 | 富文本处理、插件生态 |
| **安全机制** | 权限隔离、API 密钥管理 | 角色冒充风险（待修复） | 未明确 | 未明确 |

### 3.3 OpenClaw 优势

1. **版本发布节奏稳定**：今日发布 v2026.6.10-beta.2，是唯一保持版本迭代的项目
2. **多模型生态布局**：明确支持非 Anthropic 模型（#90288 正在解决工具调用兼容性问题）
3. **Cron 调度深度集成**：差异化功能，但存在全局状态污染风险（#90991）
4. **社区响应效率**：Issue #90991 14 条评论快速关闭

### 3.4 OpenClaw 短板

1. **PR 积压严重**：441 条待合并，占日 PR 总量的 88%
2. **安全技术债**：3 个 P2 安全问题（macOS 权限、API 密钥明文、LAN 访问）
3. **子代理机制不成熟**：完成通知丢失（#92460）、死锁问题（#90178）

---

## 4. 共同关注的技术方向

### 4.1 多模型兼容性（跨项目共鸣度：高）

| 项目 | 具体问题 | 诉求 |
|------|----------|------|
| **OpenClaw** | #90288：非 Anthropic 模型工具调用输出纯文本 | 统一 tool_use 块格式 |
| **Hermes Agent** | #12639：请求原生 Google/Vertex AI Provider | 减少对 OpenRouter 依赖 |
| **cc-haha** | #889：工具调用卡住 | 异常处理与超时机制 |
| **Codex++** | #1158：deepseek 模型图片对话失败 | 多模型图像处理支持 |

**分析**：各项目均面临"模型碎片化"挑战，工具调用格式、图像处理、认证机制存在差异。行业需要统一的 Agent Tool Protocol（类似 MCP）来降低适配成本。

### 4.2 安全与权限隔离（跨项目共鸣度：高）

| 项目 | 具体问题 | 风险等级 |
|------|----------|----------|
| **OpenClaw** | #95895：GEMINI_API_KEY 明文写入 systemd | P2 |
| **OpenClaw** | #94032：exec 无法访问私有 LAN 主机 | P2 |
| **Hermes Agent** | #25839：系统角色冒充用户，可能导致未授权技能修改 | P1 |
| **cc-haha** | #894：频繁 client_api_request_failed | 中 |

**分析**：安全问题是全生态共性挑战。OpenClaw 的 API 密钥管理、Hermes Agent 的权限模型均需系统性加固。

### 4.3 跨平台一致性（跨项目共鸣度：中）

| 项目 | 具体问题 |
|------|----------|
| **Hermes Agent** | #37505：macOS DMG 仅 arm64，Intel Mac 启动失败 |
| **Hermes Agent** | #30230：macOS fd 限制 256 导致 Too many open files |
| **Hermes Agent** | #50765：ACP session/prompt 在 Windows 上挂起 |
| **OpenClaw** | #95915：嵌入式运行中止时堆内存未释放 |

**分析**：跨平台问题集中在 macOS/Windows 兼容性、文件描述符限制、编码问题（UTF-8 vs cp1252）。

### 4.4 插件/扩展系统（跨项目共鸣度：中）

| 项目 | 具体问题 |
|------|----------|
| **Codex++** | #845：main/index.json 非法 JSON，脚本市场无法加载 |
| **Codex++** | #1151：插件市场修复后已安装插件丢失 |
| **OpenClaw** | #95894：插件安装导致 Express 4.x 路由崩溃 |

**分析**：插件系统的稳定性直接影响用户体验，Codex++ 尤为严重。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 目标场景 |
|------|----------|----------|
| **OpenClaw** | 通用 Agent 框架 + Cron 调度 + 多模型路由 | 企业级自动化、多模型协作 |
| **Hermes Agent** | 多平台消息网关 + 技能系统 | 跨平台社交集成、Bot 开发 |
| **cc-haha** | 对话式 Agent + 流式响应优化 | 开发者本地调试、长对话稳定性 |
| **Codex++** | Codex 增强 + 插件生态 + 富文本处理 | 开发者效率工具、GUI 增强 |

### 5.2 目标用户

| 项目 | 主要用户 | 用户特征 |
|------|----------|----------|
| **OpenClaw** | 企业用户、开发者 | 需要 Cron 调度、多模型路由的高级用户 |
| **Hermes Agent** | 社区开发者、Bot 运营者 | 需要多平台集成的社交场景用户 |
| **cc-haha** | 个人开发者、AI 爱好者 | 注重本地调试、流式响应体验 |
| **Codex++** | Codex 重度用户 | 需要 GUI 增强、插件定制的开发者 |

### 5.3 技术架构

| 项目 | 架构特点 | 技术栈倾向 |
|------|----------|------------|
| **OpenClaw** | 模块化、Cron 驱动 | Python/Node.js 混合 |
| **Hermes Agent** | 网关式、事件驱动 | Python 3.11+ |
| **cc-haha** | 轻量级、流式优先 | 未明确 |
| **Codex++** | 桌面应用、插件化 | 未明确（疑似 Electron） |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队（规模型）                                          │
│  OpenClaw / Hermes Agent                                     │
│  - 日 Issue 37-129 条                                        │
│  - 日 PR 500 条                                              │
│  - 社区贡献生态成熟                                          │
│  - 处于"快速迭代 + 质量巩固"并重阶段                          │
├─────────────────────────────────────────────────────────────┤
│  第二梯队（成长型）                                          │
│  cc-haha / Codex++                                           │
│  - 日 Issue 10-18 条                                         │
│  - 日 PR 2 条                                                │
│  - 核心贡献者集中（@zhbdesign 等）                            │
│  - 处于"功能验证 + 稳定性攻坚"阶段                            │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度 | 评估依据 |
|------|--------|----------|
| **OpenClaw** | ⭐⭐⭐⭐ | 版本发布节奏稳定、Issue 响应及时、但 PR 积压需改善 |
| **Hermes Agent** | ⭐⭐⭐ | 高活跃度但 P1 问题集中、安全机制待完善 |
| **cc-haha** | ⭐⭐⭐ | 响应积极（5/5 今日关闭），但版本回归问题影响信任 |
| **Codex++** | ⭐⭐ | Bug 积压严重（13 天未处理 #845）、稳定性堪忧 |

### 6.3 迭代阶段判断

| 项目 | 阶段 | 特征 |
|------|------|------|
| **OpenClaw** | 质量巩固期 | 功能相对完整，聚焦稳定性与安全 |
| **Hermes Agent** | 快速迭代期 | 功能快速扩展，但技术债积累 |
| **cc-haha** | 修复回稳期 | v0.4.3 回归问题需紧急处理 |
| **Codex++** | 危机应对期 | 稳定性集中爆发，需 hotfix |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 信号来源 | 对开发者建议 |
|------|----------|--------------|
| **多模型 Agent 框架标准化** | OpenClaw #90288、Hermes #12639 | 关注 MCP（Model Context Protocol）等行业标准的演进，提前适配 |
| **安全成为基础设施** | OpenClaw 3 个 P2 安全问题、Hermes #25839 | Agent 框架需内置安全沙箱、权限隔离、密钥管理能力 |
| **Cron/调度成为标配** | OpenClaw 深度集成、cc-haha #892 | 自动化执行能力是 Agent 从"对话工具"升级为"数字员工"的关键 |
| **跨平台一致性挑战** | Hermes macOS/Windows 问题 | 建议使用容器化或跨平台框架，减少平台特定代码 |
| **插件生态双刃剑** | Codex++ 插件系统崩溃 | 插件机制需严格测试，版本兼容性是核心风险 |

### 7.2 技术方向优先级建议

```
高优先级（影响生产部署）：
├── 安全修复（API 密钥、权限隔离）
├── 多模型工具调用兼容性
└── 跨平台稳定性（macOS/Windows）

中优先级（影响开发者体验）：
├── PR 积压清理（OpenClaw 441 条）
├── Bug 响应时效（Codex++ 13 天未处理）
└── 文档完善（1M 上下文配置等）

探索方向（长期价值）：
├── Antigravity CLI 迁移（OpenClaw #84527）
├── 多实例/多供应商支持
└── AI 摘要自动生成会话标题
```

### 7.3 关键风险预警

| 项目 | 风险 | 建议 |
|------|------|------|
| **OpenClaw** | PR 积压导致贡献者流失 | 建立 PR 分类机制，优先合并安全修复 |
| **Hermes Agent** | P1 安全问题（#25839）未修复 | 紧急处理角色冒充漏洞 |
| **cc-haha** | v0.4.3 版本回归影响用户信任 | 尽快发布 v0.4.4 补丁 |
| **Codex++** | 插件系统损坏影响核心功能 | 优先修复 #845（阻塞性），发布 hotfix |

---

## 附录：数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 日 Issue 吞吐量 | 37 | 129 | 10 | 18 |
| 日 PR 吞吐量 | 500 | 500 | 2 | 2 |
| 待合并 PR | 441 | 342 | 1 | 1 |
| P1 Bug 数 | 5 | 6 | 0 | 0 |
| P2 Bug 数 | 8 | 6 | 0 | 0 |
| 高危 Bug 数 | 0 | 0 | 3 | 4 |
| 今日 Release | ✅ | ❌ | ❌ | ❌ |
| 社区讨论深度 | 高 | 中 | 低 | 中 |
| 成熟度 | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

---

**报告生成时间**：2026-06-23
**分析师**：AI Assistant
**免责声明**：本报告基于 GitHub 公开数据生成，仅供技术决策参考。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期**：2026-06-23  
**数据来源**：GitHub NousResearch/hermes-agent

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 项目保持极高活跃度，共产生 **129 条 Issues 更新**（114 条新开/活跃，15 条关闭）和 **500 条 PR 更新**（342 条待合并，158 条已合并/关闭）。项目整体呈现快速迭代态势，但值得注意的是，今日未发布新版本。社区讨论焦点集中在桌面端构建稳定性（electronDist 缓存失效）、平台适配（macOS/Windows 兼容性问题）以及多平台消息网关的可靠性修复上。安全相关 Issue 引起关注——有报告指出系统角色冒充用户角色可能导致并行 Agent 实例在未经授权情况下修改技能库。

---

## 2. 版本发布

**今日无新版本发布**

---

## 3. 项目进展

过去 24 小时共合并/关闭 **158 条 PR**，以下是具有代表性的重要合并项：

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#50495](https://github.com/NousResearch/hermes-agent/pull/50495) | 功能 | 支持技能索引中的提示摘要（`metadata.hermes.prompt_summary`） | ✅ 已合并 |
| [#31923](https://github.com/NousResearch/hermes-agent/pull/31923) | Bug修复 | 修复 macOS 作用域锁 PID 重用检测问题 | ✅ 已合并 |
| [#51180](https://github.com/NousResearch/hermes-agent/pull/51180) | Bug修复 | Docker 镜像预加载 Firecrawl SDK | 🟡 待合并 |
| [#51177](https://github.com/NousResearch/hermes-agent/pull/51177) | Bug修复 | CLI 主文件添加显式 UTF-8 编码 | 🟡 待合并 |
| [#51178](https://github.com/NousResearch/hermes-agent/pull/51178) | Bug修复 | 修复 `/indicator` 命令在 macOS 上的问题 | 🟡 待合并 |

**推进的功能领域**：
- **编码兼容性**：多个 PR 统一添加 `encoding="utf-8"`，解决 Windows 平台 cp1252 编码导致的 UnicodeDecodeError
- **Docker 部署**：修复 Firecrawl SDK 未预装导致 Immutable 镜像运行时失败的问题
- **技能系统**：引入提示摘要元数据，提升技能路由灵活性

---

## 4. 社区热点

以下 Issues 引发最多讨论（按评论数排序）：

### 热度最高 Issue

**[#47917](https://github.com/NousResearch/hermes-agent/issues/47917)** - Desktop 构建在更新后失败（electronDist 不存在）  
**评论：22 | 👍：2 | 严重程度：P1**  
用户报告桌面端构建在拉取最新代码后再次失败，Electron 二进制缓存在更新过程中被删除。这是同一问题的第二次回归，表明构建缓存机制存在系统性缺陷。

**[#12639](https://github.com/NousResearch/hermes-agent/issues/12639)** - 请求支持原生 Google/Vertex AI Provider  
**评论：11 | 👍：10 | 类型：功能请求**  
用户因 OpenRouter 的 402 错误和速率限制频繁受阻，强烈请求直接集成 Google Cloud Vertex AI。该请求获得较高社区认同（10 👍），且存在相关 Issue [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) 讨论 Vertex 认证机制。

**[#26083](https://github.com/NousResearch/hermes-agent/issues/26083)** - Microsoft Teams 平台插件在 Python 3.11 下加载失败  
**评论：9 | 👍：0 | 严重程度：P3**  
依赖 `microsoft-teams-apps` 要求 Python ≥ 3.12，但 Hermes 默认环境为 3.11，导致 Teams 网关无法绑定端口 3978。

**[#25839](https://github.com/NousResearch/hermes-agent/issues/25839)** - ⚠️ 安全问题：系统冒充用户角色，可能导致并行 Agent 未经授权修改技能  
**评论：6 | 👍：0 | 严重程度：P1**  
后台"审查对话并更新技能库"机制将自动化提示伪装为 `role: "user"` 消息注入对话，可能诱使并行 Agent 实例在用户不知情的情况下修改技能库。此问题需优先处理。

---

## 5. Bug 与稳定性

### P1（关键/紧急）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#47917](https://github.com/NousResearch/hermes-agent/issues/47917) | Desktop 构建缓存失效回归 | 已有相关 PR #47276 修复，但再次失效 |
| [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | 安全：角色冒充导致技能库未授权修改 | 待修复 |
| [#30636](https://github.com/NousResearch/hermes-agent/issues/30636) | 高负载下 SIGTERM 导致 state.db 损坏 | 待修复 |
| [#31599](https://github.com/NousResearch/hermes-agent/issues/31599) | Telegram 适配器通过 HTTP 代理泄漏连接，2 天后 fd 耗尽 | 待修复 |
| [#24100](https://github.com/NousResearch/hermes-agent/issues/24100) | Discord 命令审批提示路由到错误线程 | 待修复 |
| [#41289](https://github.com/NousResearch/hermes-agent/issues/41289) | `/model` 命令阻塞 Discord 事件循环 120-150 秒 | 待修复 |

### P2（重要）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#30230](https://github.com/NousResearch/hermes-agent/issues/30230) | macOS fd 限制 256 导致 Too many open files | 待修复 |
| [#48648](https://github.com/NousResearch/hermes-agent/issues/48648) | Telegram 流式消息超 4096 字符时无限循环 | 待修复 |
| [#50765](https://github.com/NousResearch/hermes-agent/issues/50765) | ACP `session/prompt` 在 Windows 上挂起（0.17.0 回归） | 待修复 |
| [#30594](https://github.com/NousResearch/hermes-agent/issues/30594) | `hermes update` 在 PEP 668 环境下失败 | 待修复 |
| [#38053](https://github.com/NousResearch/hermes-agent/issues/38053) | macOS launchd 下 `hermes update` 不重启所有 profile 网关 | 待修复 |
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | MCP 服务器瞬时故障后永久放弃重连 | 待修复 |

### P3（一般）

| Issue | 描述 | 状态 |
|-------|------|------|
| [#37505](https://github.com/NousResearch/hermes-agent/issues/37505) | macOS DMG 仅支持 arm64，Intel Mac 启动失败 | 待修复 |
| [#50889](https://github.com/NousResearch/hermes-agent/issues/50889) | Dashboard 在反向代理子路径下 404 | 待修复 |
| [#50618](https://github.com/NousResearch/hermes-agent/issues/50618) | `/indicator` 在 mac 上不工作 | 已有 PR #51178 |
| [#50755](https://github.com/NousResearch/hermes-agent/issues/50755) | Photon iMessage 密钥轮换后认证失败 | 待修复 |

---

## 6. 功能请求与路线图信号

### 高需求功能（👍 ≥ 5）

| Issue | 功能描述 | 社区支持 | 相关 PR |
|-------|----------|----------|---------|
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | 原生 Google Cloud Vertex AI Provider 支持 | 👍 10 | [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) 讨论中 |
| [#37566](https://github.com/NousResearch/hermes-agent/issues/37566) | Hermes Desktop 字体选择器 | 👍 4 | 无 |
| [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) | WhatsApp Cloud API 消息模板支持（24h 窗口外重新互动） | 👍 2 | 无 |

### 平台扩展请求

- **DingTalk 集成**：[#12769](https://github.com/NousResearch/hermes-agent/pull/12769) 正在推进，包含主动消息、媒体管道、卡片限流等功能
- **Windows computer_use 工具**：[#41044](https://github.com/NousResearch/hermes-agent/issues/41044) 已关闭，标记为待实现
- **Telegram 被动历史模式**：[#27912](https://github.com/NousResearch/hermes-agent/issues/27912) 已实现并合并

### 配置与可扩展性

- **项目级 MCP 配置**：[#51069](https://github.com/NousResearch/hermes-agent/issues/51069) 请求支持读取项目本地 `.mcp.json`
- **配置验证**：[#34250](https://github.com/NousResearch/hermes-agent/pull/34250) 正在合并，添加配置键 Schema 验证

---

## 7. 用户反馈摘要

### 痛点与问题

1. **跨平台一致性不足**  
   - macOS DMG 仅 arm64，Intel 用户完全无法使用
   - Windows ACP 会话挂起问题（0.17.0 回归）
   - `/indicator` 等 CLI 功能在不同平台表现不一致

2. **部署复杂度**  
   - Docker 镜像需手动安装 Firecrawl SDK
   - PEP 668 环境导致 `hermes update` 失败
   - 多 profile 场景下 launchd 服务管理不完整

3. **安全与权限**  
   - 技能库修改机制存在未授权执行风险
   - Discord 审批提示路由错误可能导致误操作

### 正面反馈

- Telegram 被动历史模式功能已实现并合并，社区需求得到满足
- 技能提示摘要功能增强了技能路由灵活性
- 编码问题修复将改善 Windows 用户体验

---

## 8. 待处理积压

以下 Issue 长期未得到响应或修复，建议优先关注：

| Issue | 创建时间 | 优先级 | 描述 |
|-------|----------|--------|------|
| [#12639](https://github.com/NousResearch/hermes-agent/issues/12639) | 2026-04-19 | P3 | Google/Vertex AI Provider 支持（讨论活跃但无进展） |
| [#13484](https://github.com/NousResearch/hermes-agent/issues/13484) | 2026-04-21 | P3 | Vertex AI 认证机制缺失（duplicate of #12639） |
| [#25839](https://github.com/NousResearch/hermes-agent/issues/25839) | 2026-05-14 | P1 | 安全问题（6 条评论但无 fix PR） |
| [#37505](https://github.com/NousResearch/hermes-agent/issues/37505) | 2026-06-02 | P3 | Intel Mac 兼容性问题（21 天未解决） |
| [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) | 2026-06-03 | P2 | MCP 重连机制缺失（20 天未解决） |

---

## 指标总览

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 129 条/24h | 📈 高于昨日 |
| PR 活跃度 | 500 条/24h | 📈 高于昨日 |
| 待合并 PR | 342 条 | ⚠️ 积压较多 |
| P1 Bug 总数 | 6 条 | 🔴 需紧急处理 |
| 新版本发布 | 0 个 | ➖ 无变化 |

---

*报告生成时间：2026-06-23*  
*数据截止：2026-06-23 23:59 UTC*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-06-23  
**项目**: NanmiCoder/cc-haha  
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

今日 cc-haha 项目保持较高活跃度，共产生 **10 条 Issues 更新**（5 新开/活跃，5 已关闭）和 **2 条 PR 更新**（1 待合并，1 已合并）。项目整体呈现"边修边用"的态势——多个 Bug 在用户报告后迅速得到响应和关闭，但同时有 **5 个新 Bug Issue 处于 Open 状态**，主要集中在 v0.4.3 版本的稳定性问题上。值得注意的是，**0.4.3 版本似乎存在回归问题**，多个用户反馈与 dev-sidecar 代理冲突、CLI 启动失败、工具调用卡住等。建议维护者重点关注新版本稳定性，尽快发布补丁或回滚方案。

---

## 2. 版本发布

**今日无新版本发布**。

> 📌 建议关注：当前最新版本为 v0.4.3，但该版本已收到多个 Bug 报告（详见第 5 节），建议评估是否需要发布 v0.4.4 补丁版本。

---

## 3. 项目进展

### PR #883 ✅ 已合并
**标题**: 优化停止，出现 API Error: Stream ended without receiving any events  
**作者**: @zhbdesign  
**标签**: `[bug]`, `[size:XS]`, `[area:server]`, `[needs-maintainer-approval]`  
**链接**: https://github.com/NanmiCoder/cc-haha/pull/883

**摘要**: 该 PR 针对 server 端的流式响应异常终止问题进行了优化，修复了 "Stream ended without receiving any events" 错误，提升了长对话的稳定性。

---

### PR #895 🔄 待合并
**标题**: 修复 goal 中途停止  
**作者**: @zhbdesign  
**标签**: `[size:M]`  
**链接**: https://github.com/NanmiCoder/cc-haha/pull/895

**摘要**: 该 PR 修复了 Goal 执行中途意外停止的问题，与 Issue #892（模型回复停止问题）形成对应修复。建议优先审查合并。

---

## 4. 社区热点

### 🔥 Issue #893 - 刷新按钮 Bug 导致页面震动
**状态**: OPEN  
**作者**: @kevinwhite60287-hub  
**评论**: 1 | 👍: 0  
**链接**: https://github.com/NanmiCoder/cc-haha/issues/893

**问题描述**: 刷新按钮存在偶发性 Bug——刷新动作持续不停止，导致聊天页面持续震动，用户无法正常滚动界面。该问题在 v4.3 版本中尤为明显。

**诉求分析**: 用户对 UI 响应性要求较高，刷新功能作为高频操作，其稳定性直接影响使用体验。建议优先修复。

---

### 🔥 Issue #896 - v0.4.3 与 dev-sidecar 代理冲突
**状态**: OPEN  
**作者**: @simplify123  
**评论**: 0 | 👍: 0  
**链接**: https://github.com/NanmiCoder/cc-haha/issues/896

**问题描述**: v0.4.3 版本与 dev-sidecar 代理工具存在冲突，导致模型无法连接，H5 访问功能不可用。用户对比发现 v0.3.2 版本正常。

**诉求分析**: 这是一个**严重的版本回归问题**，影响了依赖代理环境的用户群体。建议维护者尽快定位 v0.3.2 到 v0.4.3 之间的变更，排查冲突原因。

---

### 🔥 Issue #889 - v0.4.3 工具调用卡住
**状态**: OPEN  
**作者**: @zhangvia  
**评论**: 0 | 👍: 0  
**链接**: https://github.com/NanmiCoder/cc-haha/issues/889

**问题描述**: v0.4.3 版本中工具调用功能出现卡住问题。

**诉求分析**: 工具调用是 cc-haha 的核心功能之一，该问题直接影响用户的工作流。

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue | 标题 | 版本 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#896](https://github.com/NanmiCoder/cc-haha/issues/896) | v0.4.3 与 dev-sidecar 代理冲突，模型无法连接 | 0.4.3 | OPEN | ❌ |
| [#889](https://github.com/NanmiCoder/cc-haha/issues/889) | 工具调用卡住 | 0.4.3 | OPEN | ❌ |
| [#894](https://github.com/NanmiCoder/cc-haha/issues/894) | 频繁出现 client_api_request_failed | - | OPEN | ❌ |

### 🟡 中严重度

| Issue | 标题 | 版本 | 状态 | Fix PR |
|-------|------|------|------|--------|
| [#893](https://github.com/NanmiCoder/cc-haha/issues/893) | 刷新按钮导致页面震动 | 4.3 | OPEN | ❌ |
| [#892](https://github.com/NanmiCoder/cc-haha/issues/892) | 模型回复中途停止（end_turn） | - | OPEN | [#895](https://github.com/NanmiCoder/cc-haha/pull/895) 待合并 |

### 🟢 已关闭（今日）

| Issue | 标题 | 状态 |
|-------|------|------|
| [#807](https://github.com/NanmiCoder/cc-haha/issues/807) | 疯狂调用 api.anthropic.com 接口 | CLOSED |
| [#877](https://github.com/NanmiCoder/cc-haha/issues/877) | 工作链路阻断 | CLOSED |
| [#859](https://github.com/NanmiCoder/cc-haha/issues/859) | CLI 启动失败 | CLOSED |
| [#890](https://github.com/NanmiCoder/cc-haha/issues/890) | 卡顿问题 | CLOSED |
| [#891](https://github.com/NanmiCoder/cc-haha/issues/891) | 图片识别不到 | CLOSED |

> ⚠️ **稳定性预警**: v0.4.3 版本今日收到 3+ 个独立 Bug 报告，建议评估是否回退或发布紧急补丁。

---

## 6. 功能请求与路线图信号

今日未发现明确的功能请求 Issue。但从现有 Issues 可以提炼以下**路线图信号**：

1. **代理环境兼容性**: Issue #896 反映用户对代理环境的强需求，建议在下一版本增加代理配置指南或兼容性测试。
2. **工具调用稳定性**: Issue #889 表明工具调用是核心场景，需加强该模块的异常处理和超时机制。
3. **流式响应健壮性**: PR #883 已优化流式响应，建议持续监控 "Stream ended without receiving any events" 错误。

---

## 7. 用户反馈摘要

### 痛点提炼

| 痛点 | 涉及 Issue | 频率 |
|------|-----------|------|
| API 请求超时/失败 | #894, #890 | 高 |
| 版本升级后功能退化 | #896 | 中 |
| UI 交互无响应 | #893 | 中 |
| 工具调用卡住 | #889 | 中 |

### 正面反馈

- Issue #807、#877、#859、#890、#891 均已 **CLOSED**，说明维护者响应积极，问题得到有效解决。
- PR #883 和 #895 均由 @zhbdesign 提交，核心贡献者活跃度高。

### 用户场景

- **开发环境依赖代理**: 部分用户使用 dev-sidecar 等代理工具，v0.4.3 的变更影响了这一群体。
- **高频刷新操作**: 用户习惯频繁刷新会话记录，对 UI 响应性要求高。
- **长对话稳定性**: 流式响应中断问题影响长任务执行体验。

---

## 8. 待处理积压

以下 Issue 需维护者关注：

| Issue | 标题 | 创建时间 | 状态 | 优先级 |
|-------|------|----------|------|--------|
| [#892](https://github.com/NanmiCoder/cc-haha/issues/892) | 模型回复中途停止 | 2026-06-22 | OPEN | 🔴 高 |
| [#896](https://github.com/NanmiCoder/cc-haha/issues/896) | 与 dev-sidecar 冲突 | 2026-06-23 | OPEN | 🔴 高 |
| [#889](https://github.com/NanmiCoder/cc-haha/issues/889) | 工具调用卡住 | 2026-06-22 | OPEN | 🔴 高 |
| [#893](https://github.com/NanmiCoder/cc-haha/issues/893) | 刷新按钮震动 | 2026-06-22 | OPEN | 🟡 中 |
| [#894](https://github.com/NanmiCoder/cc-haha/issues/894) | client_api_request_failed | 2026-06-23 | OPEN | 🟡 中 |

> ⏰ **提醒**: Issue #892 已存在 1 天，Issue #893 已存在 1 天，建议尽快响应或分配。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 今日新增 Issues | 5 |
| 今日关闭 Issues | 5 |
| 今日新增 PRs | 1 |
| 今日合并 PRs | 1 |
| 今日新版本发布 | 0 |
| Open Issues 总量 | 5 |
| 核心贡献者 (@zhbdesign) 今日提交 | 2 (PRs) |

---

**报告生成时间**: 2026-06-23  
**分析师**: AI Assistant  
**免责声明**: 本报告基于 GitHub 公开数据自动生成，仅供参考。

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**：2026-06-23  
**数据来源**：github.com/BigPizzaV3/CodexPlusPlus

---

## 1. 今日速览

2026年6月23日，Codex++ 项目保持高度活跃，24小时内新增/活跃 Issue 共计 **18 条**，PR 更新 **2 条**，但未发布新版本。项目当前面临较多稳定性问题集中爆发，主要集中在 **v1.2.18 版本** 的插件系统、启动流程和供应商配置模块。今日最突出的问题是插件市场修复后导致已安装插件丢失（#1151）、JSON 解析错误导致脚本市场无法加载（#845）、以及多个用户反馈的卡死闪退问题（#1143）。社区讨论热度较高，维护者需重点关注稳定性回归问题。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 已合并/关闭 PR

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#1148](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1148) | feat: 从Word等富文本来源粘贴到Codex时只保留纯文本 | ✅ 已合并 | 优化了富文本粘贴体验，解决格式混乱问题 |

### 待处理 PR

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#1089](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1089) | fix: enable native fast service tier for API-key auth | 🔄 Open | 恢复 API-key 认证用户的原生 Fast 服务层支持，统一登录用户与 API 用户的加速选择流程 |

**进展评估**：今日 PR 活动较为平淡，仅完成 1 个功能 PR 合并。#1089 正在等待 review，该修复对于 API-key 用户体验有重要意义，建议优先处理。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue # | 标题 | 评论数 | 热度分析 |
|---------|------|--------|----------|
| [#857](https://github.com/BigPizzaV3/CodexPlusPlus/issues/857) | [Config]: 分享一下如何搞定1M上下文问题的配置 | 7 | 用户对长上下文配置有强烈需求，反映官方文档不足 |
| [#845](https://github.com/BigPizzaV3/CodexPlusPlus/issues/845) | [Bug]: main/index.json 非法 JSON，导致 Codex++ 管理器脚本市场无法加载 | 4 | 阻塞性问题，影响所有用户使用脚本市场功能 |
| [#1151](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1151) | [Bug]: 插件市场修复后computer use和浏览器插件不可用 | 3 | v1.2.12→1.2.18 升级后的回归问题 |
| [#1010](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1010) | [Bug]: 混入API模式下无法接受不调用生图接口的base_url | 2 | API 模式兼容性问题 |
| [#1150](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1150) | [Bug]: 使用Codex++里的 重启,和启动均无法打开codex | 2 | 核心启动功能失效 |

### 热点分析

**核心诉求**：
1. **稳定性优先**：多个用户反馈 v1.2.18 版本存在严重稳定性问题（卡死、闪退、启动失败）
2. **插件系统问题集中**：脚本市场 JSON 错误、插件修复后丢失、脚本显示"未加载"等问题形成链条
3. **多供应商支持需求**：用户希望支持多开、不同上游同时工作（#1136）

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue # | 问题描述 | 影响范围 | 状态 |
|---------|----------|----------|------|
| [#845](https://github.com/BigPizzaV3/CodexPlusPlus/issues/845) | main/index.json 非法 JSON，脚本市场完全无法加载 | 所有用户 | 🔴 Open |
| [#1150](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1150) | 重启/启动按钮无法打开 Codex，codex-plus-plus.exe 启动失败 | 所有用户 | 🔴 Open |
| [#1143](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1143) | 软件打开后不到一分钟卡死闪退，点击供应商配置直接卡死 | v1.2.14-1.2.18 | 🔴 Open |
| [#1157](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1157) | 使用自带浏览器打开链接时自动闪退 | 所有用户 | 🔴 Open |

### 严重程度：中 🟡

| Issue # | 问题描述 | 影响范围 | 状态 |
|---------|----------|----------|------|
| [#1151](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1151) | 插件市场修复后 computer use 和浏览器插件丢失 | v1.2.12→1.2.18 升级用户 | 🟡 Open |
| [#1161](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1161) | 安装脚本市场脚本后全部显示 not_loaded | 所有用户 | 🟡 Open |
| [#1154](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1154) | 用户脚本/插件显示"未加载"且 Computer Use、Browser 无法启用 | Windows 管理员账号用户 | 🟡 Open |
| [#1158](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1158) | 使用 deepseek 模型发送图片后无法对话 | deepseek 用户 | 🟡 Open |

### 严重程度：低 🟢

| Issue # | 问题描述 | 影响范围 | 状态 |
|---------|----------|----------|------|
| [#1156](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1156) | 重启 Codex 时侧边对话消失 | 所有用户 | 🟢 Open |
| [#1155](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1155) | 未检测到 Codex 版本，超时无法连接 | 新安装用户 | 🟢 Open |
| [#1160](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1160) | 免安装 codex 时后端连接异常，版本检测不到 | 便携版用户 | 🟢 Open |

**稳定性评估**：今日报告 **12 个 Bug**，其中 4 个高危、5 个中危、3 个低危。v1.2.18 版本稳定性堪忧，建议维护者考虑发布 hotfix。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue # | 请求内容 | 用户场景 | 可行性评估 |
|---------|----------|----------|------------|
| [#1136](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1136) | CODEX app 多开支持 | 用户希望同一模型使用不同上游同时工作 | ⭐⭐⭐ 高 - 用户已提供技术方案（MAC 多开指南），PR 可能性大 |
| [#857](https://github.com/BigPizzaV3/CodexPlusPlus/issues/857) | 1M 上下文配置文档/支持 | 长文本处理需求 | ⭐⭐ 中 - 社区讨论活跃，需官方确认支持范围 |

### 路线图信号

1. **多实例/多供应商支持** 是明确需求，与 #1089 PR 的 Fast tier 优化方向一致
2. **插件系统重构** 呼声较高，当前插件市场问题影响用户体验
3. **富文本粘贴处理** 已通过 #1148 解决，功能完善度提升

---

## 7. 用户反馈摘要

### 痛点提炼

| 类别 | 具体问题 | 用户声音 |
|------|----------|----------|
| **稳定性** | v1.2.18 版本频繁崩溃 | "从1.2.14到1.2.18全是这样"、"电脑风扇疯狂旋转" |
| **插件系统** | 插件市场功能损坏 | "脚本市场页报错：failed to decode script market index JSON" |
| **启动问题** | Codex++ 无法控制启动 | "使用重启Codex++和启动Codex++按钮，均无法打开Codex" |
| **权限管理** | 权限批准被锁定 | "权限被 requirements.toml 锁定，无法操作" |

### 正面反馈

- 用户对 **富文本粘贴纯文本化** 功能表示期待（#1148 已合并）
- 多开需求用户已自行验证技术可行性，社区技术氛围活跃

---

## 8. 待处理积压

### 长期未响应的 Issue（超过 7 天无维护者回复）

| Issue # | 标题 | 创建时间 | 未响应天数 | 优先级 |
|---------|------|----------|------------|--------|
| [#857](https://github.com/BigPizzaV3/CodexPlusPlus/issues/857) | [Config]: 分享一下如何搞定1M上下文问题的配置 | 2026-06-10 | 13天 | 🟡 中 |
| [#845](https://github.com/BigPizzaV3/CodexPlusPlus/issues/845) | main/index.json 非法 JSON | 2026-06-10 | 13天 | 🔴 高 |
| [#1010](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1010) | 混入API模式下无法接受不调用生图接口的base_url | 2026-06-15 | 8天 | 🟡 中 |

### 建议优先处理

1. **#845** - 阻塞性 Bug，影响所有用户脚本市场功能
2. **#1150** - 核心启动功能失效
3. **#1143** - 严重稳定性问题，多用户反馈
4. **#1089** - PR 等待 review，可提升 API 用户体验

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 活跃 Issue 数 | 18 | 📈 +12 (昨日 6) |
| 待合并 PR | 1 | ➡️ 持平 |
| 新增 Bug | 12 | 📈 显著增加 |
| 社区评论 | 21+ | 📈 活跃 |

---

**报告生成时间**：2026-06-23  
**数据覆盖**：2026-06-22 00:00 至 2026-06-23 00:00 (UTC)

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*