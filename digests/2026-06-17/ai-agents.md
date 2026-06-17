# OpenClaw 生态日报 2026-06-17

> Issues: 201 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-17 04:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-17  
**数据来源：** github.com/openclaw/openclaw

---

## 1. 今日速览

过去 24 小时，OpenClaw 项目保持极高活跃度：共处理 **201 条 Issues 更新**（190 条新开/活跃，11 条关闭）和 **500 条 PR 更新**（407 条待合并，93 条已合并/关闭），并发布了 **v2026.6.8** 版本。今日社区讨论热度集中在 Telegram/WhatsApp 渠道增强、子代理完成丢失、Signal 守护进程竞态条件等 P1 级稳定性问题上。整体来看，项目处于快速迭代期，功能推进与 Bug 修复并行，但积压的 407 个待合并 PR 显示维护团队面临较大的 Code Review 压力。

---

## 2. 版本发布

### v2026.6.8 已发布 ✅

**发布时间：** 2026-06-17  
**版本代号：** openclaw 2026.6.8

#### 主要更新内容

| 改进项 | 详情 |
|--------|------|
| **Telegram 富文本渲染** | 支持结构化文本、表格、列表、可展开引用块、保留换行符、CLI 驱动回复 |
| **WhatsApp ACP 绑定** | 现在正确遵循配置的 ACP 绑定设置 |
| **关联 PR** | #92679, #931（完整 PR 链接待确认） |

> 📌 **迁移注意事项：** 此次为增强性更新，无破坏性变更。建议用户升级后测试 Telegram 消息渲染效果是否符合预期。

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，推进了关键功能或修复：

| PR 编号 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| [#93922](https://github.com/openclaw/openclaw/pull/93922) | 修复网关重启后会话永久卡在忙碌状态 | OPEN | P1 | 新增 `clearStaleAbortedRunFlags()` 函数，重试耗尽后清除卡死会话标志 |
| [#88968](https://github.com/openclaw/openclaw/pull/88968) | 防止内存刷新失败导致用户回复中止 | OPEN | P1 | 修复 provider 超时时错误 payload 被当作最终回复的问题 |
| [#93880](https://github.com/openclaw/openclaw/pull/93880) | macOS: 保留 approvals 迁移数据 | CLOSED ✅ | 高 | 从 #93188 提取的修复，确保迁移时文件数据不被静默丢弃 |
| [#93879](https://github.com/openclaw/openclaw/pull/93879) | 使用配置的 npm registry 获取更新元数据 | CLOSED ✅ | 高 | 修复 #79140，使用安装包管理器查询 npm 元数据 |
| [#93883](https://github.com/openclaw/openclaw/pull/93883) | 飞书: 移除卡片 note 页脚 | OPEN | 中 | 优化飞书消息卡片，去除自动添加的 note footer |
| [#93850](https://github.com/openclaw/openclaw/pull/93850) | 飞书: 接受无签名的加密 URL 验证挑战 | OPEN | 中 | 解决设置 webhook 模式时的死锁问题 |
| [#93855](https://github.com/openclaw/openclaw/pull/93855) | 修复 BWS_SERVER_URL 传递问题 | CLOSED ✅ | 中 | 自托管 Bitwarden Secrets Manager 需要此环境变量 |
| [#93904](https://github.com/openclaw/openclaw/pull/93904) | exec secret resolver 继承父进程环境 | CLOSED ✅ | 中 | 修复子进程环境变量丢失问题 |
| [#93542](https://github.com/openclaw/openclaw/pull/93542) | MCP: 在保存时拒绝被阻止的 stdio env keys | CLOSED ✅ | 中 | 避免日志被重复错误刷屏 |
| [#54593](https://github.com/openclaw/openclaw/pull/54593) | 修复 legacy 子代理会话键的 getSubagentDepth | OPEN | 中 | 修复 `subagent:worker` 等旧格式键返回 0 的静默 bug |

---

## 4. 社区热点

以下 Issues 和 PRs 今日讨论最活跃（按评论数排序）：

### 热门 Issues

| 排名 | 编号 | 标题 | 评论数 | 👍 | 优先级 | 标签 |
|------|------|------|--------|-----|--------|------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps 缺失 | **109** | 79 | P2 | enhancement, help wanted |
| 2 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失 — 无重试、无通知、无自动重启 | **19** | 1 | P1 | impact:message-loss |
| 3 | [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal 守护进程 SIGUSR1 重启竞态条件 | **17** | 0 | P1 | impact:crash-loop |
| 4 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 功能请求：可配置流式看门狗超时阈值 | **14** | 8 | P2 | streaming watchdog |
| 5 | [#57901](https://github.com/openclaw/openclaw/issues/57901) | 守护压缩忽略 compaction.model 配置 | **14** | 1 | P2 | impact:session-state |
| 6 | [#62505](https://github.com/openclaw/openclaw/issues/62505) | 编码代理从不完成任何任务（回归） | **14** | 1 | P1 | regression |
| 7 | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 功能请求：允许私有网络访问 | **13** | 9 | P2 | security |
| 8 | [#73148](https://github.com/openclaw/openclaw/issues/73148) | 图片工具 sharp 未安装时错误信息不明确 | **13** | 3 | P1 | impact:message-loss |
| 9 | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式不在回合中途注入消息 | **12** | 2 | P1 | impact:session-state |
| 10 | [#69208](https://github.com/openclaw/openclaw/issues/69208) | 跨渠道重复转录、重放、上下文组装问题汇总 | **12** | 0 | P1 | umbrella issue |

#### 热点分析

1. **#75 Linux/Windows 客户端需求强烈**：109 条评论、79 个点赞，表明跨平台支持是用户最迫切的需求之一。macOS/iOS/Android 已有应用，Linux 和 Windows 缺失形成明显功能缺口。

2. **子代理和会话状态问题集中爆发**：#44925、#48003、#69208 均涉及会话状态管理和消息传递，反映出复杂多代理场景下的稳定性挑战。

3. **安全相关功能请求**：#39604 请求 `tools.web.fetch.allowPrivateNetwork` 配置项，平衡安全与灵活性需求。

---

## 5. Bug 与稳定性

按严重程度排列的今日报告 Bug：

### P0/P1 严重 Bug（需立即关注）

| 编号 | 标题 | 严重程度 | 状态 | 已有 Fix PR? | 影响范围 |
|------|------|----------|------|--------------|----------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失 | P1 | OPEN | ❌ | 消息丢失 |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal 守护进程竞态条件 | P1 | OPEN | ❌ | 孤儿进程、崩溃循环 |
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 编码代理从不完成任务（回归） | P1 | OPEN | ❌ | regression |
| [#73148](https://github.com/openclaw/openclaw/issues/73148) | 图片工具 sharp 缺失时错误不明确 | P1 | OPEN | ❌ | 消息丢失 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式不在回合中途注入消息 | P1 | OPEN | ❌ | 会话状态 |
| [#93375](https://github.com/openclaw/openclaw/issues/93375) | Telegram 轮询瞬时网络超时后进入静默崩溃循环 | P1 | OPEN | ❌ | 崩溃循环 |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | 子代理完成传递在请求者会话不活跃时失败 | P1 | OPEN | ❌ | 消息丢失 |
| [#92460](https://github.com/openclaw/openclaw/issues/92460) | 隔离 cron 完成 announcer 丢弃显式 delivery.channel | P1 | OPEN | ❌ | 消息丢失 |

### P2 中等 Bug

| 编号 | 标题 | 状态 | 已有 Fix PR? | 影响范围 |
|------|------|------|--------------|----------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 流式看门狗超时阈值不可配置 | OPEN | ❌ | 长思考模型误触发 |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | 守护压缩忽略 compaction.model 配置 | OPEN | ❌ | 使用错误模型 |
| [#67288](https://github.com/openclaw/openclaw/issues/67288) | amazon-bedrock-mantle 每次请求都做 IAM 发现 | OPEN | ❌ | 性能 |
| [#67366](https://github.com/openclaw/openclaw/issues/67366) | onboard 替换 Telegram token 时 TypeError | OPEN | ❌ | 崩溃 |
| [#73814](https://github.com/openclaw/openclaw/issues/73814) | 安装脚本因 stdin 消耗挂起 | CLOSED ✅ | ❌ | 安装失败 |

### 回归问题（Regression）

| 编号 | 标题 | 引入版本 | 影响 |
|------|------|----------|------|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | 编码代理从不完成任务 | 2026.4.2 之后 | 核心功能失效 |
| [#91016](https://github.com/openclaw/openclaw/issues/91016) | DeepSeek Prompt Cache 升级 2026.6.1 后完全失效 | 2026.6.1 | $6/小时额外费用 |
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | OPENCLAW_HOME 设置导致嵌套目录 | 回归 | 配置混乱 |

---

## 6. 功能请求与路线图信号

以下功能请求可能进入下一版本，结合已有 PR 判断：

| 编号 | 功能请求 | 评论数 | 👍 | 相关 PR | 纳入可能性 |
|------|----------|--------|-----|---------|------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 桌面应用 | 109 | 79 | — | ⭐⭐⭐ 高需求 |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` 配置项 | 13 | 9 | — | ⭐⭐ 中等 |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | 每个 Agent 独立 TTS/STT 配置 | 7 | 1 | — | ⭐ 规划中 |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | 支持 Anthropic advisor tool | 6 | 1 | — | ⭐ 规划中 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 每个 Agent 独立 dreaming 配置 | 5 | 4 | — | ⭐⭐ 用户痛点明确 |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) | 上下文溯源元数据 (RFC) | 6 | 1 | — | ⭐ 长期规划 |
| [#86655](https://github.com/openclaw/openclaw/pull/86655) | Claude Bridge App-Server Harness | — | — | OPEN | ✅ 正在开发 |
| [#92243](https://github.com/openclaw/openclaw/pull/92243) | CoreWeave Serverless Inference 模型提供商 | — | — | OPEN | ✅ 正在开发 |
| [#93404](https://github.com/openclaw/openclaw/pull/93404) | Agent SDK 打包规范 | — | — | OPEN | ✅ 正在开发 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

### 核心痛点

1. **多代理场景不稳定**
   > 用户 `waliddafif` 报告：并发运行多个 Agent 时出现配置覆盖、会话锁失败、子工作 detached 等问题，多 Agent 编排在实践中不可靠。

2. **长思考模型兼容性**
   > 用户 `Yaemikoreal` 反馈：使用 kimi-k2.5、DeepSeek-R1 等长思考模型时，流式看门狗频繁误触发警告（30 秒无更新即重置），严重影响用户体验。

3. **飞书集成问题频发**
   > 多个用户报告飞书渠道问题：tenant_access_token 错误（#48949）、消息卡片渲染退化（#53486）、wiki 分页不生效（#37626）、typing 指示器实现错误（#69572）。

4. **升级导致成本激增**
   > 用户 `RavenSS213` 警告：从 2026.5.7 升级到 2026.6.1 后，DeepSeek Prompt Cache 完全失效，一小时烧掉约 $6。

5. **安装体验差**
   > 用户 `ItsMeForLua` 报告：`curl -fsSL https://openclaw.ai/install.sh | bash` 安装脚本挂起超过 20 分钟。

### 用户满意度

- ✅ Telegram 富文本渲染改进（v2026.6.8）获得正面反馈
- ✅ macOS approvals 迁移数据保留修复（#93880）解决用户数据丢失担忧
- ✅ npm registry 配置修复（#93879）改善自托管更新体验

---

## 8. 待处理积压

以下 Issues 长期未响应或存在关键功能缺口，需维护者关注：

### 长期未解决 P1 问题（超过 30 天）

| 编号 | 标题 | 创建日期 | 未响应天数 | 状态 |
|------|------|----------|------------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 客户端 | 2026-01-01 | ~167 天 | OPEN |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具缺少追加模式 | 2026-03-08 | ~101 天 | OPEN |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) | 402 计费错误导致无限重试 | 2026-03-08 | ~101 天 | OPEN |
| [#39847](https://github.com/openclaw/openclaw/issues/39847) | Echo 污染：出站管道未调用 stripInboundMetadata | 2026-03-08 | ~101 天 | OPEN |
| [#44749](https://github.com/openclaw/openclaw/issues/44749) | 并发 allow-always 批准静默丢失条目 | 2026-03-13 | ~96 天 | OPEN |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失 | 2026-03-13 | ~96 天 | OPEN |
| [#22676](https://github.com/openclaw/openclaw/issues

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-17  
**覆盖项目：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**两极分化格局**：头部项目（OpenClaw、Hermes Agent）处于高强度迭代期，日均处理 150-200+ Issues 和 500 条 PR 更新，展现出极强的社区活力；中间梯队（Codex++）聚焦特定场景深度优化，以 3 天 3 个补丁的速度快速收敛关键 Bug；尾部项目（cc-haha）则处于功能探索阶段，活跃度较低但反馈聚焦。整体来看，生态正从**功能快速堆叠期**向**稳定性与体验精细化**过渡，多渠道集成、多租户支持、跨平台稳定性成为共同挑战。

---

## 2. 各项目活跃度对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **Issues 今日更新** | 201 | 157 | 6 | 69 |
| **PR 今日更新** | 500 | 500 | 0 | 11 |
| **待合并 PR** | 407 | 391 | 0 | 7 |
| **版本发布** | ✅ v2026.6.8 | ❌ 无 | ❌ 无 | ✅ 3 个补丁 |
| **合并/关闭 PR** | 93 | 109 | 0 | 4 |
| **活跃 Issue 总量** | 高 | 高 | 中低 | 中 |
| **健康度评估** | ⚠️ 高活跃但积压严重 | ⚠️ 高活跃但积压严重 | 🟡 低活跃，问题聚焦 | ✅ 快速收敛中 |

**关键观察：** OpenClaw 与 Hermes Agent 的 PR 积压量（400+ 量级）远超 Codex++（7 个），反映出项目规模与维护压力的正相关关系。cc-haha 的零 PR 活动值得警惕，可能预示维护资源不足。

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心定位

OpenClaw 是当前生态中**功能最全面、渠道覆盖最广**的项目，定位为多渠道 AI 助手核心框架，支持 Telegram、WhatsApp、Signal、飞书等即时通讯渠道，并积极探索子代理、多会话管理等复杂场景。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | Codex++ |
|------|----------|--------------|---------|
| **架构重心** | 核心引擎 + 渠道适配层 | 网关 + Curator 生命周期管理 | Codex 桌面端增强层 |
| **多代理支持** | 子代理完成传递、会话隔离 | Curator 技能归档、伞形传递 | 不涉及 |
| **平台定位** | 跨平台后端服务 | 跨平台后端服务 | 桌面端应用增强 |
| **自托管友好度** | 高（支持 Bitwarden Secrets Manager） | 高（config.yaml 配置驱动） | 中（依赖 Codex 桌面端） |

### 3.3 社区规模对比

OpenClaw 的 Issue 讨论量（单日 201 条）和 PR 吞吐量（500 条更新）均处于生态领先位置，但 407 个待合并 PR 的积压也反映出维护团队面临的巨大 Code Review 压力。相比之下，Hermes Agent 的活跃度接近但功能侧重不同，Codex++ 则聚焦于垂直场景。

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映出生态层面的共性挑战：

### 4.1 多渠道稳定性与消息可靠性

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | 子代理完成静默丢失（#44925）、Telegram 轮询崩溃循环（#93375）、Signal 守护进程竞态条件（#22676） |
| **Hermes Agent** | Telegram MarkdownV2 转义破坏列表（#6388）、邮件主题硬编码（#46947） |
| **cc-haha** | 会话目录刷新报错导致消息重复发送（#852） |

**诉求：** 跨渠道的消息传递可靠性、错误处理标准化、重试机制完善。

### 4.2 跨平台一致性

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | Linux/Windows 客户端缺失（#75，109 条评论） |
| **Hermes Agent** | Windows 网关任务产生空白控制台窗口（#38387）、macOS 桌面端段错误（#46789） |
| **Codex++** | Windows 启动链路回归（v1.2.9 引入）、macOS Intel 闪退（#455） |

**诉求：** 统一的跨平台行为规范、平台特定问题的快速响应机制。

### 4.3 多租户与资源隔离

| 项目 | 具体问题 |
|------|----------|
| **Hermes Agent** | 内存操作绕过钩子系统，多租户隔离无法实现（#34352） |
| **OpenClaw** | 并发 allow-always 批准静默丢失条目（#44749） |

**诉求：** 企业级多租户场景下的资源隔离与安全控制。

### 4.4 第三方集成兼容性

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | DeepSeek Prompt Cache 升级后失效（#91016）、长思考模型看门狗误触发（#68596） |
| **Hermes Agent** | OpenRouter HTTP 400（#16804）、Qwen CLI 认证不兼容（#46771） |
| **cc-haha** | GPT 模型中转站偶发异常（#851） |
| **Codex++** | API 中转 GPT-5.5 识别不到（#772） |

**诉求：** 灵活适配各类模型提供商、中转服务商的配置扩展性。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 目标用户 |
|------|----------|----------|
| **OpenClaw** | 多渠道 AI 助手核心、子代理编排、飞书/WhatsApp 集成 | 自托管 AI 助手开发者、多渠道运营者 |
| **Hermes Agent** | 网关生命周期管理、Curator 技能编排、多语言本地化 | 企业级多租户部署、多语言用户群体 |
| **cc-haha** | Copilot 中转、Token 统计、侧边聊天 | Copilot 用户、轻量级 AI 助手需求 |
| **Codex++** | Codex 桌面端增强、启动链路优化、会话导出 | Codex 重度用户、Windows/macOS 桌面端用户 |

### 5.2 技术架构差异

- **OpenClaw**：采用核心引擎 + 渠道适配层架构，强调模块化与可扩展性，支持子代理的复杂编排。
- **Hermes Agent**：以网关为核心，Curator 负责技能生命周期管理，配置驱动（config.yaml），强调可观测性（静默失败提升至 WARNING）。
- **cc-haha**：轻量级中转层架构，聚焦 Copilot API 兼容与 Token 统计。
- **Codex++**：作为 Codex 桌面端的增强层存在，不独立运行，依赖宿主应用的进程管理。

### 5.3 社区治理风格

- **OpenClaw**：高吞吐量但积压严重，维护团队面临较大压力。
- **Hermes Agent**：功能迭代快，配置项布尔值转换等基础问题仍需修复。
- **Codex++**：快速响应用户反馈，3 天 3 个补丁展现强运营能力。
- **cc-haha**：社区反馈聚焦但维护响应较慢，部分 Issue 长期无官方回应。

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队（快速迭代期）                                       │
│  OpenClaw / Hermes Agent                                     │
│  - 日均 150-200+ Issues 更新                                  │
│  - 400+ PR 积压                                               │
│  - 功能推进与 Bug 修复并行                                     │
│  - 处于 "功能丰富但稳定性待验证" 阶段                           │
├─────────────────────────────────────────────────────────────┤
│  第二梯队（质量巩固期）                                       │
│  Codex++                                                      │
│  - 快速收敛关键 Bug（3 天 3 个补丁）                           │
│  - 功能迭代放缓，聚焦稳定性                                    │
│  - 处于 "核心功能稳定后拓展生态" 阶段                           │
├─────────────────────────────────────────────────────────────┤
│  第三梯队（探索期）                                           │
│  cc-haha                                                      │
│  - 活跃度低，Issue 数量有限                                    │
│  - 无 PR 活动，维护资源可能不足                                │
│  - 处于 "寻找产品-market fit" 阶段                            │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 代码成熟度 | 文档完善度 | 社区响应速度 | 商业化潜力 |
|------|------------|------------|--------------|------------|
| OpenClaw | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⚠️ 积压严重 | ⭐⭐⭐⭐ |
| Hermes Agent | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Codex++ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| cc-haha | ⭐⭐ | ⭐⭐ | ⭐ | ⭐⭐ |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势

1. **多渠道集成成为标配**
   - OpenClaw 的 Telegram/WhatsApp 增强、Hermes Agent 的 Outlook OAuth 支持，反映出用户对统一 AI 助手入口的强烈需求。
   - **对开发者的价值：** 渠道适配层的设计将成为框架选型的关键考量。

2. **长思考模型兼容性挑战**
   - OpenClaw 用户反馈 DeepSeek-R1、kimi-k2.5 等长思考模型频繁触发看门狗警告。
   - **对开发者的价值：** 流式响应超时配置需支持模型类型感知，避免一刀切的 30 秒阈值。

3. **跨平台稳定性是最大痛点**
   - Windows 启动链路、macOS 段错误、Linux 客户端缺失等问题在多个项目中同步出现。
   - **对开发者的价值：** 跨平台测试覆盖（尤其是 Windows）应作为发布门槛。

4. **多租户与企业级需求浮现**
   - Hermes Agent 的多租户隔离请求、OpenClaw 的并发批准静默丢失问题，预示着 AI 助手正从个人工具向团队/企业协作平台演进。
   - **对开发者的价值：** 资源隔离、权限控制、审计日志等企业级功能应纳入路线图。

5. **中转服务兼容性是长尾需求**
   - cc-haha、Codex++ 均涉及第三方 API 中转的兼容性问题，反映出国内用户对低成本模型访问的强烈需求。
   - **对开发者的价值：** 灵活的 provider 配置机制比预置支持更重要。

### 7.2 技术决策建议

| 场景 | 推荐项目 | 理由 |
|------|----------|------|
| **自托管多渠道 AI 助手** | OpenClaw | 功能最全面，渠道覆盖广，但需接受高迭代带来的不稳定 |
| **企业级多租户部署** | Hermes Agent | Curator 生命周期管理成熟，配置驱动便于运维 |
| **Copilot 增强** | cc-haha | 轻量级，但需评估维护资源 |
| **Codex 桌面端增强** | Codex++ | 垂直场景深耕，Windows 稳定性已快速收敛 |

### 7.3 风险预警

- **OpenClaw/Hermes Agent：** PR 积压可能导致贡献者流失，建议建立 Code Review 分级机制。
- **cc-haha：** 零 PR 活动可能预示项目维护中断风险，潜在用户需评估长期可用性。
- **全生态：** 多项目同步出现"静默失败"问题，建议社区推动统一的错误处理规范。

---

**报告生成时间：** 2026-06-17  
**分析周期：** 2026-06-16 00:00 至 2026-06-17 00:00 (UTC)

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-06-17  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

过去 24 小时，Hermes Agent 项目保持极高活跃度，共产生 **157 条 Issues 更新**（143 新开/活跃，14 已关闭）和 **500 条 PR 更新**（391 待合并，109 已合并/关闭）。项目整体呈现快速迭代态势，未发布新版本。社区重点聚焦于多租户支持、平台适配（Slack、Telegram、QQ Bot）、OAuth 认证问题以及 Windows/macOS 桌面端稳定性修复。值得注意的是，今日有多个 P1 级别 Bug 被报告但尚未解决，建议优先处理。

---

## 2. 版本发布

**无新版本发布。** 项目当前处于持续迭代阶段，维护者尚未发布新版本标签。

---

## 3. 项目进展

今日共有 **109 个 PR 被合并/关闭**，以下为重要进展：

### 核心修复与改进

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#47619](https://github.com/NousResearch/hermes-agent/pull/47619) | fix(curator): skip prune during rollback safety snapshot | 修复 `hermes curator rollback` 回滚到最早快照时失败并永久删除该快照的 Bug |
| [#47617](https://github.com/NousResearch/hermes-agent/pull/47617) | fix(curator): stop the rollback safety snapshot from pruning its target | 同上，从另一角度修复快照剪裁问题 |
| [#47616](https://github.com/NousResearch/hermes-agent/pull/47616) | fix(logging): elevate silent operational failures from DEBUG to WARNING | 将网关和定时任务子系统中的静默失败从 DEBUG 提升至 WARNING 级别，提升可观测性 |
| [#47618](https://github.com/NousResearch/hermes-agent/pull/47618) | fix(cli): skip bool coercion for string-typed config keys | 修复 `hermes config set` 将字符串 "off"/"on" 错误转换为布尔值的问题 |
| [#47607](https://github.com/NousResearch/hermes-agent/pull/47607) | fix(config): skip bool coercion for string-enum config keys | 同上，修复 approvals.mode 等字符串枚举配置项被错误转换 |

### 平台适配

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#47622](https://github.com/NousResearch/hermes-agent/pull/47622) | fix(wecom): improve reconnection logging with attempt counts | 改善企业微信 WebSocket 重连日志，包含重试次数和退避延迟 |
| [#47613](https://github.com/NousResearch/hermes-agent/pull/47613) | fix(telegram): intercept typed replies to button clarify prompts | 修复 Telegram 按钮提示场景下用户输入文本无法被正确捕获的问题 |
| [#47620](https://github.com/NousResearch/hermes-agent/pull/47620) | fix: support Outlook OAuth for Hermes email transport | 新增 Outlook OAuth/Graph 支持，用于邮箱轮询和 MIME 发送 |

### 安全与配置

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#47347](https://github.com/NousResearch/hermes-agent/pull/47347) | fix(webhook): move INSECURE_NO_AUTH opt-in to config.yaml | 将 Webhook 不安全认证选项从环境变量迁移至 config.yaml 的 `allow_insecure` 键 |

### 新功能

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#47614](https://github.com/NousResearch/hermes-agent/pull/47614) | feat(terminal): add CubeSandbox backend and split-mode routing plugin | 新增第七个终端后端 `cube_sandbox`，使用 E2B 兼容的 microVM API |
| [#44987](https://github.com/NousResearch/hermes-agent/pull/44987) | feat: Arabic localization with full RTL support | 新增阿拉伯语本地化支持，包含完整 RTL 布局适配 |
| [#47576](https://github.com/NousResearch/hermes-agent/pull/47576) | feat: add graphify, ui-ux-pro-max, impl-validator, and suede-promo optional skills | 新增 4 个可选技能：知识图谱构建、UI/UX 设计验证等 |

---

## 4. 社区热点

以下 Issues 和 PR 获得最多评论，反映社区当前最关注的问题：

### 热门 Issues（按评论数排序）

**1. #34352 - 多租户 Hermes 问题**（8 条评论）  
🔗 https://github.com/NousResearch/hermes-agent/issues/34352  
📌 **诉求：** 内存操作绕过了钩子系统，导致多租户隔离无法实现。报告者已在生产环境运行修复方案数月，涉及多个不同场景的多租户代理。  
💡 **分析：** 这是一个架构层面的重大功能请求，涉及 Agent、网关、内存等多个组件的协同改造。

**2. #8552 - Slack 平台应使用 Block Kit 而非 legacy mrkdwn**（7 条评论）  
🔗 https://github.com/NousResearch/hermes-agent/issues/8552  
📌 **诉求：** 当前 Slack 适配器使用旧版 `mrkdwn` 格式，不支持 Markdown 表格等特性。  
👍 **反应：** 9 个点赞，社区需求明确。

**3. #12655 - 模型选择器配置化**（7 条评论）  
🔗 https://github.com/NousResearch/hermes-agent/issues/12655  
📌 **诉求：** 新增 `picker_providers` 配置项，允许用户过滤 `/model` 选择器中显示的提供商。

**4. #29912 - Curator 在伞形传递期间错误归档活跃技能**（7 条评论）  
🔗 https://github.com/NousResearch/hermes-agent/issues/29912  
📌 **Bug：** Curator 在缺少成功合并验证的情况下归档了 10 个运营关键技能，存在"失败开放"行为。

**5. #6388 - Telegram MarkdownV2 转义破坏列表显示**（6 条评论）  
🔗 https://github.com/NousResearch/hermes-agent/issues/6388  
📌 **Bug：** 短横线 `-` 被错误转义为 `\-`，导致列表无法正确渲染。

---

## 5. Bug 与稳定性

按严重程度（P1 > P2 > P3）排列今日报告的 Bug：

### P1 - 严重（需立即处理）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|-----------|------|------|--------------|
| [#16804](https://github.com/NousResearch/hermes-agent/issues/16804) | OpenRouter 所有请求返回 HTTP 400（Hermes 0.9.0），curl 正常 | OPEN | ❌ |
| [#47134](https://github.com/NousResearch/hermes-agent/issues/47134) | `/reload-mcp` 通过 killpg 发送 SIGTERM 导致网关崩溃 | OPEN | ❌ |
| [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) | 工具调用管道可能损坏工具名称和 JSON 参数 | OPEN | ❌ |

### P2 - 高优先级

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|-----------|------|------|--------------|
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | Curator 错误归档活跃技能 | OPEN | ❌ |
| [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) | Telegram MarkdownV2 转义问题 | OPEN | ❌ |
| [#40014](https://github.com/NousResearch/hermes-agent/issues/40014) | Claude Code OAuth 使用按量付费端点而非订阅配额 | OPEN | ❌ |
| [#38387](https://github.com/NousResearch/hermes-agent/issues/38387) | Windows 网关任务导致空白控制台窗口 | OPEN | ❌ |
| [#46771](https://github.com/NousResearch/hermes-agent/issues/46771) | Hermes 与新版 Qwen CLI 认证不兼容 | OPEN | ❌ |
| [#46856](https://github.com/NousResearch/hermes-agent/issues/46856) | OpenRouter 错误分类为 unknown 导致速率限制冷却失效 | OPEN | ❌ |
| [#46947](https://github.com/NousResearch/hermes-agent/issues/46947) | 邮件主题硬编码，无法自定义 | OPEN | ❌ |

### P3 - 中等优先级

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|-----------|------|------|--------------|
| [#47327](https://github.com/NousResearch/hermes-agent/issues/47327) | 桌面端无法读取第三方模型 | OPEN | ❌ |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 多租户内存隔离问题 | OPEN | ❌ |
| [#12655](https://github.com/NousResearch/hermes-agent/issues/12655) | 模型选择器提供商过滤 | OPEN | ❌ |

### 已关闭的 Bug

| Issue 编号 | 标题 | 说明 |
|-----------|------|------|
| [#46789](https://github.com/NousResearch/hermes-agent/issues/46789) | macOS 桌面端进程执行段错误（exit code -11） | 已关闭 |
| [#26599](https://github.com/NousResearch/hermes-agent/issues/26599) | Codex 后端拒绝 extra_headers 字段 | 已关闭 |

---

## 6. 功能请求与路线图信号

以下功能请求获得较高关注，可能被纳入未来版本：

### 高价值功能请求

**1. 多租户支持**（#34352）  
📌 内存操作需支持钩子系统，实现租户隔离。  
🔗 https://github.com/NousResearch/hermes-agent/issues/34352

**2. 缺失的消息渠道**（#8950）  
📌 社区请求新增 IRC、Google Chat、LINE、Nostr、Twitch、QQBot 等渠道支持。  
🔗 https://github.com/NousResearch/hermes-agent/issues/8950

**3. 模型选择器增强**（#12655、#10011）  
📌 支持按提供商过滤、自动发现自定义端点模型。  
🔗 https://github.com/NousResearch/hermes-agent/issues/12655 | [#10011](https://github.com/NousResearch/hermes-agent/issues/10011)

**4. 可配置内存后端**（#47349）  
📌 支持禁用 memory.md，仅使用 honcho/fact_store。  
🔗 https://github.com/NousResearch/hermes-agent/issues/47349

**5. Discord 目标完成通知**（#47191）  
📌 在 TUI 中完成目标时发送 Discord 通知。  
🔗 https://github.com/NousResearch/hermes-agent/issues/47191

### 已实现的功能（PR 证据）

- ✅ CubeSandbox 终端后端（#47614）
- ✅ 阿拉伯语 RTL 支持（#44987）
- ✅ Outlook OAuth 邮件传输（#47620）
- ✅ 4 个新可选技能（#47576）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

### 平台兼容性问题突出
- **Windows 用户** 抱怨网关任务产生空白控制台窗口，且 venv 重建时因 .pyd 锁定导致安装失败
- **macOS 用户** 遭遇桌面端段错误，所有进程执行工具（terminal、execute_code、read_file）均返回 exit code -11
- **Linux/macOS + Ollama 本地模型用户** 持续收到 HTTP 503 错误

### OAuth 认证问题频发
- Claude Code OAuth（Max/Pro 订阅）错误使用按量付费端点
- Qwen CLI v0.18.1 认证不兼容
- Gmail OAuth token 未在网关和 send_message 间复用

### 开发者体验待改进
- MCP 服务器配置错误静默失败，仅在 DEBUG 日志记录
- 配置项布尔值强制转换破坏字符串枚举字段
- 工具调用管道偶发损坏工具名和 JSON 参数

### 功能缺失反馈
- 邮件主题无法自定义
- Slack 不支持 Markdown 表格
- Telegram 列表渲染被 MarkdownV2 转义破坏
- Discord 缺少目标完成通知

---

## 8. 待处理积压

以下 Issue 长期未响应或存在严重 Bug，建议维护者关注：

### 长期未解决的高优先级 Issue

| Issue 编号 | 创建日期 | 标题 | 关注理由 |
|-----------|----------|------|----------|
| [#16804](https://github.com/NousResearch/hermes-agent/issues/16804) | 2026-04-28 | OpenRouter HTTP 400 | P1 Bug，影响所有 OpenRouter 用户 |
| [#6841](https://github.com/NousResearch/hermes-agent/issues/6841) | 2026-04-09 | 工具调用管道损坏 | P1 Bug，间歇性导致所有工具调用失败 |
| [#47134](https://github.com/NousResearch/hermes-agent/issues/47134) | 2026-06-16 | /reload-mcp 崩溃网关 | P1 Bug，核心功能损坏 |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 2026-05-29 | 多租户隔离问题 | 架构级功能请求，社区呼声高 |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | 2026-04-12 | Slack Block Kit 支持 | 9 点赞，功能请求明确 |

### 建议优先处理

1. **OpenRouter 集成问题**（#16804）- 影响大量使用第三方模型的用户
2. **/reload-mcp 崩溃**（#47134）- 核心功能回归
3. **Windows 安装问题**（#47621/#47610）- 已有 Fix PR，建议合并
4. **配置布尔值转换**（#47618/#47607）- 已有 Fix PR，建议合并

---

**报告生成时间：** 2026-06-17  
**数据覆盖范围：** 2026-06-16 00:00 至 2026-06-17 00:00 (UTC)

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-06-17  
**项目仓库**：https://github.com/NanmiCoder/cc-haha

---

## 1. 今日速览

过去24小时，cc-haha 项目保持较高社区活跃度，共产生 **6 条 Issues 更新**（5 新开/活跃，1 已关闭），但 **无 PR 合并或版本发布**。从 issue 类型分布来看，今日以 **Bug 报告为主**（3 条），同时有 2 条功能增强请求和 1 条使用问题咨询。整体而言，项目处于功能迭代与问题修复并行的状态，用户反馈积极但积压问题需关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**无 PR 合并或关闭**

过去24小时内项目无任何 Pull Request 活动，建议关注近期是否有待 review 的代码贡献。

---

## 4. 社区热点

### 🔥 Issue #850 - 侧边聊天功能请求
| 属性 | 内容 |
|------|------|
| **作者** | @ghostboyzone |
| **类型** | enhancement, question |
| **创建时间** | 2026-06-16 |
| **评论数** | 2 |
| **链接** | https://github.com/NanmiCoder/cc-haha/issues/850 |

**摘要**：用户请求增加与 Claude Desktop / Codex 类似的**侧边聊天功能**，便于在主界面侧边快速发起新对话或查看会话列表。

**分析**：该需求反映了用户对**多任务并行聊天**场景的诉求，与主流 AI 助手产品体验趋势一致，预计会获得较高关注度。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue | 描述 | 状态 | 链接 |
|-------|------|------|------|
| **#852** | 刷新会话目录报错，导致聊天内容**重复发送**，系统陷入循环 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/852) |
| **#851** | GPT 模型使用异常，中转站偶发性报错 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/851) |

**#852 影响评估**：该问题会导致**消息风暴**，严重影响用户体验和 API 配额，建议优先排查会话目录刷新逻辑。

**#851 影响评估**：中转站场景下的偶发错误，可能与连接管理或超时设置有关。

### 🟡 中优先级

| Issue | 描述 | 状态 | 链接 |
|-------|------|------|------|
| **#849** | Token 用量统计不正确，一直显示为 0 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/849) |

**分析**：统计功能失效会影响用户对成本的控制，建议检查 token 计量逻辑。

### 🟢 已关闭

| Issue | 描述 | 状态 | 链接 |
|-------|------|------|------|
| **#577** | Copilot 中转 toolcall 无法正常使用 | **CLOSED** | [查看](https://github.com/NanmiCoder/cc-haha/issues/577) |

---

## 6. 功能请求与路线图信号

### ✨ Issue #853 - 提示词轮次时长展示
| 属性 | 内容 |
|------|------|
| **作者** | @zhbdesign |
| **类型** | bug, enhancement |
| **评论数** | 0 |
| **链接** | https://github.com/NanmiCoder/cc-haha/issues/853 |

**需求**：增加**提示词当前轮次完成总时长展示**，帮助用户了解单次交互耗时。

**评估**：属于**轻量级 UI 增强**，实现成本低，可提升用户对响应速度的感知，建议纳入近期迭代。

### ✨ Issue #850 - 侧边聊天功能
（同上，见社区热点章节）

---

## 7. 用户反馈摘要

| 场景 | 反馈内容 | 来源 |
|------|----------|------|
| **Copilot 集成** | 使用 ericc-ch/copilot-api 中转时 toolcall 功能异常 | #577 |
| **会话管理** | 会话目录刷新报错引发消息重复发送 | #852 |
| **模型调用** | 中转站 GPT 模型偶发异常，重启窗口后恢复 | #851 |
| **成本统计** | Token 用量统计为 0，无法追踪消耗 | #849 |
| **产品形态** | 期待类似 Claude Desktop 的侧边栏聊天体验 | #850 |

**核心痛点**：主要集中在**中转站场景下的稳定性问题**和**会话管理异常**，建议加强第三方 provider 的兼容性测试。

---

## 8. 待处理积压

以下 Issues 创建时间较早或评论较多，需维护者关注：

| Issue | 创建时间 | 评论数 | 状态 | 链接 |
|-------|----------|--------|------|------|
| #577 | 2026-05-22 | 4 | **CLOSED** | [查看](https://github.com/NanmiCoder/cc-haha/issues/577) |
| #850 | 2026-06-16 | 2 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/850) |

**#577 备注**：虽然已关闭，但评论数达 4 条，说明该问题曾引发较多讨论，建议确认修复方案是否完整。

---

## 📊 关键指标

| 指标 | 数值 |
|------|------|
| Issues 新增/活跃 | 5 |
| Issues 关闭 | 1 |
| PR 合并 | 0 |
| 版本发布 | 0 |
| 活跃 Issue 总量 | 6 |

---

*报告生成时间：2026-06-17*  
*数据来源：GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-17
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026-06-17 是 Codex++ 高强度迭代的一天。项目在过去 24 小时内共处理 **69 条 Issues**（39 新开/活跃，30 已关闭）和 **11 条 PRs**（7 待合并，4 已合并/关闭），并连续发布了 **3 个补丁版本（v1.2.10 → v1.2.11 → v1.2.12）**，集中修复 Windows 平台 Codex 启动链路的核心回归问题。社区活跃度极高，Issues 讨论区涌现大量关于启动失败、调试端口占用、CDP 注入超时的反馈，表明 v1.2.9 引入的启动流程变更对大量 Windows 用户造成了显著影响。维护团队响应迅速，在 3 天内连推 3 个补丁，显示出对关键路径问题的重视程度。

---

## 2. 版本发布

### 🆕 v1.2.12 — 2026-06-17
**链接：** https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.12

**更新内容：**
- **恢复 Windows 启动链路稳定性**：回滚到更接近 v1.2.7 的稳定流程，移除启动前额外的 CDP 探测和直接回退启动逻辑。
- **修复 MS Store 版调试端口占用**：解决因调试端口被占用导致 Codex 无法正常启动的问题。
- **修复"重启 Codex++"不生效**：重启流程现在会等待旧 Codex/launcher 进程完全退出后再启动新实例。
- **保留降级运行状态**：避免增强注入暂未就绪时直接中断 Codex 启动，提升启动容错性。

**验证方式：** `cargo test -p codex-plus-core --test launcher`

---

### v1.2.11 — 2026-06-16
**链接：** https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.11

**更新内容：**
- 修复 Windows packaged Codex 启动时固定占用 9229 调试端口的问题。
- 当默认调试端口已被占用时，自动切换到可用端口。
- 添加回归测试，防止后续再次出现端口占用导致无法启动的问题。

**验证方式：** `cargo test -p codex-plus-core --test launcher` / `npm run check` / `npm run build`

---

### v1.2.10 — 2026-06-16
**链接：** https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.10

**更新内容：**
- 修复新版 Codex 本地存储结构下会话 Markdown 导出失败的问题，支持 `automation_runs` 并能从 `sessions` / `archived_sessions` 发现 rollout 文件。
- 导出 Markdown 时支持用户选择保存路径；不支持文件选择器的环境回退到浏览器下载。
- 导出逻辑遍历多个本地 Codex 数据库，避免默认数据库没有目标会话时提示未找到。
- 兼容检测 Microsoft Store Codex Beta 安装路径，修复无法自动找到启动应用的问题（修复 #947）。
- 增加 `CODEX_HOME` 环境变量支持。

---

## 3. 项目进展

### ✅ 已合并/关闭的 PRs（4 条）

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#362](https://github.com/BigPizzaV3/CodexPlusPlus/pull/362) | feat(manager): minimize to tray and add close-action dialog | **CLOSED** | 为 Manager 应用添加系统托盘图标支持，最小化按钮隐藏窗口到托盘，关闭按钮弹出退出/最小化选择对话框，添加托盘菜单恢复窗口和退出应用功能 |
| [#1005](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1005) | fix: reduce sidebar hover ghosting in the conversation list | **CLOSED** | 修复会话列表悬停时出现的残影/闪烁问题，根因是扫描和悬停转换期间重复重新测量和重新布局注入的侧边栏操作控件导致不必要的重绘/回流抖动 |
| [#914](https://github.com/BigPizzaV3/CodexPlusPlus/pull/914) | fix: 修复第一次打开右边栏并选择 Files/Browser/Terminal 会触发错误 | **CLOSED** | 修复开启「页面增强」和「模型白名单解锁」后，第一次点击右侧工作区侧栏的 Files/Browser/Terminal 触发 `TypeError: this.events[e].clear is not a function` 错误的问题 |
| [#402](https://github.com/BigPizzaV3/CodexPlusPlus/pull/402) | feat(macos): dynamically detect install root and fix flaky model catalog test | **CLOSED** | 优化 macOS 平台安装根路径的动态检测，解决用户将 .app 安装在 `~/Applications` 等自定义路径时无法识别自身入口的问题 |

### 🔄 待合并的 PRs（7 条）

| PR # | 标题 | 说明 |
|------|------|------|
| [#428](https://github.com/BigPizzaV3/CodexPlusPlus/pull/428) | 新增聚合供应商按策略轮转功能 | 添加聚合中继供应商设置、持久化和活跃供应商处理；添加前端创建/编辑流程，支持成员选择、策略配置和验证消息；通过聚合轮转和故障转移路由协议代理请求 |
| [#907](https://github.com/BigPizzaV3/CodexPlusPlus/pull/907) | ui: align Codex++ injected UI with Codex appearance | 修复新版 Codex 桌面端中注入 UI 的视觉和交互回归问题，使顶部入口、设置弹框、侧边栏会话操作、Upstream worktree 弹框和后端状态展示跟随 Codex 原生外观 |
| [#1049](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1049) | fix: keep launcher alive until packaged codex exits | 修复 v1.2.11 升级后在 Windows 上 Codex++ 启动后 Codex 窗口不出现或立即闪退的问题，根因是 `DefaultLaunchHooks::wait_for_codex_exit` 在启动 Codex 后立即返回 |
| [#1043](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1043) | feat(i18n): implement dynamic locale loading, local JSON imports | 为 Codex++ Manager 实现全面的动态国际化管理系统，支持运行时加载、热切换和用户导入翻译资源文件（.json） |
| [#972](https://github.com/BigPizzaV3/CodexPlusPlus/pull/972) | Add optional sidebar thread ID badge | 在侧边栏会话行标题前显示紧凑徽章，包含短会话 ID、UUIDv7 创建时间戳（格式 `MM-DD HH:mm`）和完整会话 ID |
| [#384](https://github.com/BigPizzaV3/CodexPlusPlus/pull/384) | Fix Windows launcher recovery when Codex is already running | 使 Windows 单实例守护进程对陈旧的 loopback 端口具有弹性；在 CDP 参数被现有实例吞噬时通过重启 packaged Codex 应用重试启动器注入 |
| [#1004](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1004) | feat: add completion sound notification on turn end | 添加可选的回合结束完成声音功能，在 Manager 端提供启用开关和自定义音频文件选择，Codex 在回合实际结束时播放声音 |

---

## 4. 社区热点

以下 Issues 在过去 24 小时内获得最多评论，反映了社区最集中的关注点：

| Issue # | 标题 | 评论数 | 状态 | 链接 |
|---------|------|--------|------|------|
| #1002 | [Bug]: 更新 1.2.9 之后无法从 codex++ 打开 codex | 13 | CLOSED | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1002) |
| #1023 | [Bug]: 点击重启 codex++ 之后无法启动 codex | 10 | CLOSED | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1023) |
| #749 | [Feature]: product design 插件找不到 | 9 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) |
| #1041 | [Bug]: codex++ 管理能打开，但是 codex++ 启动不了 | 8 | CLOSED | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1041) |
| #455 | [Bug]: codex++ 启动 codex 闪退 | 7 | OPEN | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) |
| #974 | [Bug]: win10 升级 1.2.9 版本启动不了 codex | 7 | CLOSED | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/974) |

**热点分析：**
- **启动失败问题占据绝对主导**：前 6 条热点中有 5 条直接与 Codex 启动失败相关，集中在 Windows 平台，涉及 v1.2.9 引入的 CDP 探测超时、调试端口占用、进程退出等待等问题。这直接推动了 v1.2.10 → v1.2.11 → v1.2.12 的连续三版补丁发布。
- **插件生态需求初现**：#749 用户请求添加 "product design" 插件，表明随着基础功能稳定，社区开始关注插件生态丰富度。
- **API 中转兼容性问题**：#772 反映使用 API 中转接入 GPT-5.5 模型时 FAST 模式无法识别，提示模型未读取，可能涉及模型名称解析或供应商配置校验逻辑。

---

## 5. Bug 与稳定性

### 🔴 高严重度（影响核心功能，无 fix PR）

| Issue # | 描述 | 系统 | 版本 | 链接 |
|---------|------|------|------|------|
| #455 | codex++ 启动 codex 闪退（macOS Intel） | macOS | — | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) |
| #1052 | codex 更新后，codex++ 无法注入也无法打开 codex | — | — | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1052) |
| #1055 | 新版本还是打不开，未检测到 codex 版本 | Windows | — | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1055) |

### 🟡 中严重度（影响部分用户，已有 fix PR 或版本修复）

| Issue # | 描述 | 状态 | Fix PR/版本 | 链接 |
|---------|------|------|-------------|------|
| #1002 | 更新 1.2.9 后无法从 codex++ 打开 codex | CLOSED | v1.2.12 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1002) |
| #1023 | 点击重启 codex++ 之后无法启动 codex | CLOSED | v1.2.12 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1023) |
| #1048 | 1.2.11 仍然无法启动 codex | CLOSED | v1.2.12 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1048) |
| #993 | 无法直接唤醒宿主程序，后端服务启动崩溃 | CLOSED | v1.2.12 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/993) |
| #1044 | 根因分析：5 秒超时太短（CDP ready attempts） | CLOSED | v1.2.12 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1044) |
| #1049 | launcher 在 packaged codex 退出前未保持存活 | OPEN | PR #1049 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1049) |

### 🟢 低严重度（UI/交互问题）

| Issue # | 描述 | 状态 | Fix PR | 链接 |
|---------|------|------|--------|------|
| #1016 | 移动对话时报 "Unsupported local storage schema" | OPEN | — | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1016) |
| #911 | 每次关闭 codex 后重启就无法通过 codex++ 启动 | OPEN | — | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/911) |
| #961 | 会话导出显示"不支持当前本地存储结构" | OPEN | — | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/961) |

**稳定性评估：** 过去 24 小时内报告的 Bug 中，约 **60% 已通过 v1.2.12 或待合并的 PR 解决**，但仍有 3 个高严重度问题（#455, #1052, #1055）待定位根因。Windows 平台的启动链路问题已系统性收敛，但 macOS Intel 用户的闪退问题需要单独排查。

---

## 6. 功能请求与路线图信号

以下功能请求与当前待合并 PR 形成呼应，可能被纳入下一版本：

| 请求来源 | 功能描述 | 对应 PR | 纳入可能性 |
|----------|----------|---------|-----------|
| #749 | 添加 product design 插件 | — | 🟡 中（需插件生态规划） |
| #857 | 分享 1M 上下文配置方案 | — | 🟢 高（社区驱动文档） |
| #428 | 聚合供应商按策略轮转 | PR #428 | 🟢 高（PR 已提交） |
| #907 | 注入 UI 与 Codex 原生外观对齐 | PR #907 | 🟢 高（PR 已提交） |
| #1043 | 动态国际化（i18n）系统 | PR #1043 | 🟢 高（PR 已提交） |
| #972 | 侧边栏会话 ID 徽章 | PR #972 | 🟡 中（PR 已提交，功能较小众） |
| #1004 | 回合结束完成声音通知 | PR #1004 | 🟡 中（PR 已提交，属可选增强） |
| #772 | API 中转接入 GPT-5.5 的 FAST 模式支持 | — | 🟡 中（需供应商配置扩展） |

**路线图信号：** 从 PR 队列判断，下一版本的开发重点可能集中在：
1. **供应商系统增强**（聚合轮转、模型兼容性扩展）
2. **UI/UX 现代化**（与新版 Codex 视觉对齐、国际化）
3. **稳定性加固**（Windows/macOS 双平台启动链路回归测试覆盖）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的关键用户声音：

**✅ 满意度较高的方面：**
- v1.2.10 修复了会话 Markdown 导出路径选择功能，用户终于可以指定保存位置，不再依赖浏览器下载。
- Microsoft Store Codex Beta 安装路径的自动检测功能受到好评（#947 修复）。
- macOS 动态安装路径检测优化（#402）解决了开发集群用户无法使用的问题。

**⚠️ 核心痛点：**
- **Windows 启动失败是头号问题**：大量用户在升级到 v1.2.9 后完全无法使用 Codex++，被迫回退到 v1.2.4。问题表现为"点击启动无反应"、"后端显示命令包装器未启用"、"CDP 注入超时"等多种表象，但根因均指向启动链路变更。
- **重启功能不work**：用户反映点击"重启 Codex++"按钮后 Codex 无法启动，必须手动重启电脑才能恢复。
- **调试端口占用**：多个用户反馈 9229 端口被占用导致启动失败，v1.2.11 已通过自动端口切换解决。
- **非 MS Store 版 Codex 检测失败**：使用独立安装包（非应用商店）的用户无法被自动检测，v1.2.10 已部分修复但仍有反馈（#837, #1055）。

**💡 新需求：**
- 用户希望支持更多插件（product design）和更大的上下文窗口配置（1M context）。
- API 中转用户期待更好的模型名称兼容性和 FAST 模式支持。
- 网络搜索功能在未使用代理的环境下无法使用（#879）。

---

## 8. 待处理积压

以下 Issue 或 PR 长期未响应或需要维护者关注：

| 类型 | # | 标题 | 创建时间 | 状态 | 优先级 | 说明 |
|------|---|------|----------|------|--------|------|
| Issue | #455 | codex++ 启动 codex 闪退（macOS Intel） | 2026-05-31 | OPEN | 🔴 高 | 超过 17 天未解决，涉及 macOS 平台核心功能 |
| Issue | #403 | Windows 下 Chrome Native Host 注册项未创建 | 2026-05-28 | OPEN | 🟡 中 | 超过 20 天未响应，@chrome 无法连接 Chrome 扩展 |
| Issue | #749 | product design 插件找不到 | 2026-06-07 | OPEN | 🟡 中 | 10 天无官方回应，插件生态需求 |
| Issue | #772 | API 中转 GPT-5.5 模型识别不到 | 2026-06-08 | OPEN | 🟡 中 | 9 天无官方回应，供应商配置兼容性问题 |
| Issue | #837 | 未检测到非 MS Store 版 Codex 应用 | 2026-06-10 | OPEN | 🟡 中 | v1.2.10 部分修复但仍有反馈，需确认是否完全解决 |
| PR | #384 | Fix Windows launcher recovery when Codex is already running | 2026-05-27 | OPEN | 🟡 中 | 超过 20 天未合并，与 v1.2.12 启动修复方向一致，建议合并或关闭 |
| PR | #428 | 新增聚合供应商按策略轮转功能 | 2026-05-30 | OPEN | 🟢 中 | 18 天未合并，功能完整度高，建议优先 review |

**积压提醒：

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*