# OpenClaw 生态日报 2026-06-09

> Issues: 156 | PRs: 464 | 覆盖项目: 4 个 | 生成时间: 2026-06-09 03:32 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**: 2026-06-09  
**数据来源**: github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 项目今日保持极高活跃度，共处理 **156 条 Issues**（92 新开/活跃，64 关闭）和 **464 条 PRs**（321 待合并，143 已合并/关闭）。项目发布了 **v2026.6.5 正式版及两个 beta 版本**，重点修复了 QQBot 模型推理内容泄露和 MCP 工具结果处理问题。社区讨论热度集中在认证提供商兼容性和会话状态管理领域，多个 P1 级问题获得关注。整体项目健康度良好，PR 吞吐量显著，建议关注积压的 321 个待合并 PR 的审查进度。

---

## 2. 版本发布

### v2026.6.5 正式版

**发布状态**: ✅ 已发布  
**发布日期**: 2026-06-09

#### 主要更新

| 功能 | 描述 | 相关 Issue/PR |
|------|------|---------------|
| **QQBot 推理内容过滤** | 移除模型 reasoning/thinking 脚手架，防止原始 `<thinking>` 内容泄露到频道回复 | #89913, #90132 |
| **MCP 工具结果强制转换** | 对 `resource_link`、`resource`、`audio`、畸形图片及未来新增类型进行结果强制转换 | - |

#### 破坏性变更
无重大破坏性变更报告。

#### 迁移注意事项
- 建议检查 QQBot 配置，确保 `openclaw-openai-responses-transport` 适配器配置正确
- MCP 服务器若使用 OAuth 认证，需关注 #91433 中的已知问题

---

### v2026.6.5-beta.5

**发布状态**: 🔄 Beta 测试中

#### 更新内容
- 延续 v2026.6.5 正式版的核心修复
- 进一步优化 QQBot 消息处理流程

---

## 3. 项目进展

### 今日合并/关闭的重要 PRs

| PR # | 标题 | 状态 | 优先级 | 说明 |
|------|------|------|--------|------|
| [#91583](https://github.com/openclaw/openclaw/pull/91583) | perf(control-ui): warn on slow first replies | ✅ CLOSED | - | Control UI 慢速首次回复警告机制 |
| [#90578](https://github.com/openclaw/openclaw/pull/90578) | Gateway holds one persistent read-only FD per workspace SKILL.md | ✅ CLOSED | P2 | 修复 chokidar 未关闭文件描述符问题 |
| [#90007](https://github.com/openclaw/openclaw/pull/90007) | plugin install index + task registry migrations fail | ✅ CLOSED | P1 | 修复升级后 "statement.columns is not a function" 错误 |
| [#91051](https://github.com/openclaw/openclaw/pull/91051) | Deep Sleep phase does not write summary to DREAMS.md | ✅ CLOSED | P2 | 修复梦境摘要写入逻辑 |
| [#90157](https://github.com/openclaw/openclaw/pull/90157) | Dashboard "Open config" fails on Windows | ✅ CLOSED | P2 | 修复 PowerShell `-LiteralPath` 兼容性问题 |
| [#90891](https://github.com/openclaw/openclaw/pull/90891) | Doctor does not report official managed plugin version drift | ✅ CLOSED | P2 | 增强版本漂移检测 |
| [#91362](https://github.com/openclaw/openclaw/pull/91362) | fix(agent): agents.defaults.model.fallbacks not inherited by isolated cron sessions | ✅ CLOSED | P2 | 修复隔离 cron 会话的模型回退继承 |
| [#91394](https://github.com/openclaw/openclaw/pull/91394) | openai-completions adapter silently passes empty content[] | ✅ CLOSED | P2 | 修复空内容静默传递问题 |
| [#89034](https://github.com/openclaw/openclaw/pull/89034) | fix(usage): return all agent sessions when no agentId specified | ✅ CLOSED | P2 | 恢复多代理场景下的会话过滤行为 |

### 正在审查的高优先级 PRs

| PR # | 标题 | 状态 | 优先级 | 风险评估 |
|------|------|------|--------|----------|
| [#91566](https://github.com/openclaw/openclaw/pull/91566) | Fix stale main session startup recovery | 👀 Ready for Maintainer | P1 | 🚨 session-state, 🚨 message-delivery |
| [#91580](https://github.com/openclaw/openclaw/pull/91580) | fix(agents): trim dense text delta snapshots | ⏳ Waiting on Author | P1 | 🚨 compatibility, 🚨 session-state |
| [#91579](https://github.com/openclaw/openclaw/pull/91579) | fix(agents): bootstrap OpenClaw auth for codex harness | 📣 Needs Proof | P1 | 🚨 auth-provider |
| [#90500](https://github.com/openclaw/openclaw/pull/90500) | Fix stale session routes for removed providers | ⏳ Waiting on Author | P1 | 🚨 compatibility, 🚨 auth-provider, 🚨 session-state |
| [#90450](https://github.com/openclaw/openclaw/pull/90450) | fix(agents): preserve streamed assistant text when Claude CLI result event is empty | ⏳ Waiting on Author | P1 | 🚨 auth-provider, 🚨 message-delivery, 🚨 availability |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue # | 标题 | 评论数 | 👍 | 优先级 | 链接 |
|---------|------|--------|-----|--------|------|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI ChatGPT Responses transport fails with invalid_provider_content_type for gpt-5.4/gpt-5.5 | 15 | 3 | P1 | [查看](https://github.com/openclaw/openclaw/issues/90083) |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent replies to previous message instead of current message (session context confusion) | 14 | 1 | P1 | [查看](https://github.com/openclaw/openclaw/issues/32296) |
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | Feishu streaming card: abnormal typewriter effect and final content truncated | 12 | 2 | - | [查看](https://github.com/openclaw/openclaw/issues/88929) |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode does not inject messages mid-turn for main sessions | 11 | 2 | P1 | [查看](https://github.com/openclaw/openclaw/issues/48003) |
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | Cron jobs consistently fail with MiniMax 503 overload during early morning | 10 | 1 | P2 | [查看](https://github.com/openclaw/openclaw/issues/85888) |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord leaks internal tool-call traces (NO_REPLY, commentary, to=functions) | 10 | 1 | P1 | [查看](https://github.com/openclaw/openclaw/issues/44905) |

### 热点分析

**认证与提供商兼容性** 是当前最热话题：
- `#90083` 涉及 OpenAI gpt-5.4/5.5 的 `invalid_provider_content_type` 错误，影响生产环境
- `#58289` 报告非主 agent 在 provider plan 为空时可能丢失 `models.json`
- `#91434` 发现 LM Studio 会话启动时可能无工具可用

**会话状态管理** 持续是痛点：
- `#32296` Agent 回复错乱问题已有 14 条讨论
- `#48003` Steer 模式消息注入问题影响核心交互逻辑
- `#91330` 当前会话消息工具回复可能被私有记账 final 替换

---

## 5. Bug 与稳定性

### P1 严重 Bug（需立即关注）

| Issue # | 标题 | 状态 | 是否有 Fix PR | 影响范围 |
|---------|------|------|---------------|----------|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI ChatGPT Responses transport fails (gpt-5.4/5.5) | OPEN | ❌ 无 | 认证提供商 |
| [#32296](https://github.com/openclaw/openclaw/issues/32296) | Agent replies to previous message (session context confusion) | OPEN | ❌ 无 | 会话状态、消息丢失 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap grows to 1073MB+ at idle, cron jobs fail silently | OPEN | ❌ 无 | 崩溃循环、内存泄漏 |
| [#91191](https://github.com/openclaw/openclaw/issues/91191) | WhatsApp monitor drops inbound silently for one number | OPEN | ❌ 无 | 消息丢失 |
| [#91434](https://github.com/openclaw/openclaw/issues/91434) | LM Studio sessions start without tools | OPEN | ❌ 无 | 认证提供商 |
| [#58289](https://github.com/openclaw/openclaw/issues/58289) | Non-main agent may miss models.json and fail with "Unknown model" | OPEN | ❌ 无 | 认证提供商 |

### P2 重要 Bug

| Issue # | 标题 | 状态 | 是否有 Fix PR | 链接 |
|---------|------|------|---------------|------|
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | Feishu streaming card: typewriter effect abnormal, content truncated | CLOSED | ✅ 可能是 | [查看](https://github.com/openclaw/openclaw/issues/88929) |
| [#85888](https://github.com/openclaw/openclaw/issues/85888) | Cron jobs fail with MiniMax 503 overload (05:00-07:30 CST) | OPEN | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/85888) |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord leaks internal tool-call traces | OPEN | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/44905) |
| [#91330](https://github.com/openclaw/openclaw/issues/91330) | Current-session message-tool replies can be replaced by private bookkeeping finals | OPEN | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/91330) |
| [#87291](https://github.com/openclaw/openclaw/issues/87291) | Reply context body truncated at 500 chars hides actionable content | OPEN | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/87291) |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash incomplete turn (payloads=0, tools=2) | OPEN | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/88657) |

### 回归问题

| Issue # | 标题 | 版本 | 状态 | 链接 |
|---------|------|------|------|------|
| [#89525](https://github.com/openclaw/openclaw/issues/89525) | Telegram channel drops /compact slash command | 2026.6.1 | CLOSED | [查看](https://github.com/openclaw/openclaw/issues/89525) |
| [#88128](https://github.com/openclaw/openclaw/issues/88128) | Internal messages surface in Telegram chat | - | CLOSED | [查看](https://github.com/openclaw/openclaw/issues/88128) |
| [#91302](https://github.com/openclaw/openclaw/issues/91302) | claude-cli tool-call-then-empty-text triggers duplicate reply in Telegram | v2026.6.1 | CLOSED | [查看](https://github.com/openclaw/openclaw/issues/91302) |
| [#90578](https://github.com/openclaw/openclaw/issues/90578) | Gateway holds persistent FD per workspace SKILL.md | 2026.5.28 | CLOSED | [查看](https://github.com/openclaw/openclaw/issues/90578) |

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue # | 标题 | 评论数 | 👍 | 预期影响 | 链接 |
|---------|------|--------|-----|----------|------|
| [#74601](https://github.com/openclaw/openclaw/issues/74601) | Skill Workshop targeting shared skills + cross-workspace pattern promotion | 3 | 1 | 增强多工作区支持 | [查看](https://github.com/openclaw/openclaw/issues/74601) |
| [#79223](https://github.com/openclaw/openclaw/issues/79223) | Feature: configurable Dream Diary language / prompt | 3 | 1 | 国际化支持 | [查看](https://github.com/openclaw/openclaw/issues/79223) |
| [#51393](https://github.com/openclaw/openclaw/issues/51393) | browser tool evaluate should support statements (var/let/const) | 5 | 1 | 开发者体验 | [查看](https://github.com/openclaw/openclaw/issues/51393) |

### 与已有 PR 对应的功能请求

| 功能方向 | 相关 Issue | 相关 Open PR | 状态 |
|----------|-----------|--------------|------|
| **会话镜像/回显** | - | [#88815](https://github.com/openclaw/openclaw/pull/88815) | 👀 Ready for Maintainer |
| **ACP Hub 委托会话** | - | [#91093](https://github.com/openclaw/openclaw/pull/91093) | 👀 Ready for Maintainer |
| **子代理工具转发** | - | [#78441](https://github.com/openclaw/openclaw/pull/78441) | 👀 Ready for Maintainer |
| **Feishu 会议邀请** | - | [#89751](https://github.com/openclaw/openclaw/pull/89751) | 👀 Ready for Maintainer |
| **Discord 反应通知** | - | [#83169](https://github.com/openclaw/openclaw/pull/83169) | ⏳ Waiting on Author |

### 路线图信号分析

1. **跨平台会话统一** 是明确方向：#88815（会话回显）和 #91093（ACP Hub 委托会话）都指向更灵活的会话路由
2. **国际化深化**：#79223 反映非英语用户对本地化的需求
3. **开发者工具增强**：#51393 表明需要更完整的浏览器工具支持

---

## 7. 用户反馈摘要

### 核心痛点

**1. 升级兼容性**
- 多个用户报告从 2026.5.x 升级到 2026.6.1 后出现功能退化
- `#90007` 反映插件索引迁移失败
- `#90418` 报告升级后重复出现 SQLite 插件安装元数据冲突警告

**2. 内存与性能**
- `#87109` 详细描述了 macOS 上 Gateway 堆内存从 558MB 增长到 1073MB+ 的问题
- 用户观察到 cron 任务在内存压力下静默失败，无错误上报

**3. 消息可靠性**
- `#32296` 用户反映 Agent 回复到上一条消息而非当前消息
- `#91330` 报告消息工具回复可能被覆盖
- `#87291` 指出 500 字符截断导致上下文丢失

### 正面反馈

- `#88933` 用户（@kiagentkronos-cell）表达了对项目的感谢："I think OpenClaw is genuinely brilliant, and I

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-06-09  
**分析范围**: OpenClaw, Hermes Agent, cc-haha, Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**两超多强**的格局：OpenClaw 与 Hermes Agent 以日均 150+ Issues、400+ PRs 的吞吐量占据第一梯队，代码审查与版本迭代节奏接近商业级开源项目；cc-haha 与 Codex++ 则聚焦细分场景，分别在会话管理优化和跨平台协议兼容方向深耕。整体生态正处于从**功能完备期**向**体验精细化**过渡的阶段——核心框架趋于稳定，但跨平台兼容性（尤其是 macOS/Windows）、认证提供商适配、消息可靠性等工程化问题成为制约采用率的关键瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues (日增量) | PRs (日增量) | 待合并 PR | Release 情况 | 健康度评估 |
|------|-----------------|--------------|-----------|--------------|------------|
| **OpenClaw** | 156 (92 活跃/新开) | 464 (321 待合并) | 321 | v2026.6.5 正式版 + 2 beta | ⭐⭐⭐⭐ 良好 |
| **Hermes Agent** | 91 (79 活跃/新开) | 500 (383 待合并) | 383 | 无新版本 | ⭐⭐⭐⭐ 快速迭代 |
| **cc-haha** | 14 (13 活跃/新开) | 1 (1 待合并) | 1 | 无新版本 | ⭐⭐⭐ 功能迭代期 |
| **Codex++** | 54 (49 活跃/新开) | 5 (2 待合并) | 2 | 无新版本 | ⭐⭐⭐ 高修复需求 |

**关键数据解读**：

- **PR 积压比**（待合并/总 PR）：OpenClaw 69%，Hermes Agent 77%，cc-haha 100%，Codex++ 40%
- **Issue 闭环率**（关闭/新增）：OpenClaw 70%，Hermes Agent 13%，cc-haha 8%，Codex++ 9%
- OpenClaw 的高闭环率（70%）表明其维护团队具备高效的代码审查吞吐能力；Hermes Agent 虽 PR 积压较多，但高活跃度反映社区参与热情；cc-haha 存在 PR 审查积压风险

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw 表现 | 生态对比 |
|------|---------------|----------|
| **版本发布节奏** | 今日发布 v2026.6.5 + 2 beta | 唯一有正式版发布的项目，版本管理成熟度领先 |
| **Bug 修复效率** | P1 Bug 已有 4 个对应 Fix PR | 相比 Hermes Agent（2 个 P1 Fix PR）和 Codex++（1 个 Fix PR），响应速度最快 |
| **功能覆盖广度** | 覆盖 QQBot、MCP、Gateway、ACP Hub 等 10+ 集成点 | 生态最完整，但复杂度也最高 |
| **文档与迁移指导** | 明确标注迁移注意事项（如 #91433 OAuth 问题） | 优于 cc-haha 和 Codex++ 的 changelog 缺失 |

### 3.2 技术路线差异

| 特性 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心架构** | 多传输层适配器（OpenAI Responses、Completions 等） | 统一 CLI + Desktop 双入口 | 前后端分离（CLI + H5） | 协议代理层（支持硅基流动等中转） |
| **平台侧重** | 跨平台（QQ、Discord、Feishu、WhatsApp） | 跨平台 + Desktop 优先 | 移动端 H5 优化 | MAC/Windows 桌面端 |
| **模型兼容性** | 强调认证提供商抽象层 | 强调本地 STT/LLM 集成 | 聚焦大模型调用 | 强调协议转换兼容性 |
| **状态管理** | 会话状态、cron 隔离、模型回退 | 委托任务上下文、ChatCompressor | 会话中断恢复 | 插件市场同步状态 |

### 3.3 社区规模对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **日均 Issue 增量** | 92 | 79 | 13 | 49 |
| **日均 PR 增量** | 143 合并/关闭 | 117 合并/关闭 | 0 合并 | 3 合并 |
| **热门 Issue 评论数** | 15 (最高) | 24 (最高) | 7 (最高) | 20 (最高) |
| **功能请求 👍 数** | 3 (最高) | 38 (最高) | 2 (最高) | 2 (最高) |

**结论**：OpenClaw 在**代码吞吐量**和**版本管理**上领先；Hermes Agent 在**社区参与广度**（Dashboard 主题获 38 👍）上领先；Codex++ 在**垂直场景深度**（MAC 平台问题讨论 31 条评论）上领先。

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映行业共性挑战：

### 4.1 跨平台认证与提供商适配

| 项目 | 具体问题 | 涉及 Issue |
|------|----------|------------|
| **OpenClaw** | OpenAI gpt-5.4/5.5 `invalid_provider_content_type` 错误 | #90083 |
| **OpenClaw** | LM Studio 会话启动无工具可用 | #91434 |
| **OpenClaw** | 非主 agent 丢失 `models.json` | #58289 |
| **Hermes Agent** | OpenRouter 认证头丢失 | #42130 |
| **Hermes Agent** | Z.AI/GLM 计费顺序错误 | #42536 |
| **Codex++** | 硅基流动 API 工具调用失败 | #676 |

**共性诉求**：统一的认证抽象层、Provider 元数据同步机制、计费透明化。

### 4.2 会话状态与消息可靠性

| 项目 | 具体问题 | 涉及 Issue |
|------|----------|------------|
| **OpenClaw** | Agent 回复到上一条消息（14 条评论） | #32296 |
| **OpenClaw** | 消息工具回复被覆盖 | #91330 |
| **OpenClaw** | 500 字符截断导致上下文丢失 | #87291 |
| **Hermes Agent** | 委托任务上下文长度损坏 | #42449 |
| **cc-haha** | 会话结束后 AI 反复思考循环 | #742 |
| **cc-haha** | 会话经常中断（已关闭） | #548 |

**共性诉求**：会话状态机规范化、消息幂等性保证、上下文截断策略可配置。

### 4.3 平台特定兼容性

| 平台 | 涉及项目 | 具体问题 |
|------|----------|----------|
| **macOS** | OpenClaw | Gateway 堆内存泄漏（558MB→1073MB+） |
| **macOS** | Hermes Agent | launchd 双启动导致无限重启 |
| **macOS** | Codex++ | MAC M1 DeepSeek 502 错误（20 条评论） |
| **Windows** | Hermes Agent | Desktop 启动失败（找不到 git） |
| **Windows** | cc-haha | 窗口拖动异常（25h2） |
| **Docker** | Hermes Agent | Matrix 网关缺少依赖、s6-log 锁冲突 |

**共性诉求**：平台特定测试矩阵、容器化部署最佳实践、内存泄漏检测工具。

### 4.4 远程访问与移动端优化

| 项目 | 具体需求 | 涉及 Issue |
|------|----------|------------|
| **cc-haha** | H5 访问令牌固定 | #767 |
| **cc-haha** | 多 H5 访问地址配置 | #765 |
| **cc-haha** | 后端 CLI 断连时间可配置 | #764 |
| **Hermes Agent** | 多 Feishu 应用支持 | PR #35911 |
| **OpenClaw** | ACP Hub 委托会话 | PR #91093 |

**共性诉求**：移动端长连接管理、多端点路由、令牌生命周期管理。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能定位 | 差异化功能 |
|------|--------------|------------|
| **OpenClaw** | 企业级多渠道 AI 助手框架 | QQBot/Feishu/WhatsApp 多通道集成、MCP 工具生态、ACP Hub |
| **Hermes Agent** | 开发者友好的本地 AI 终端 | Dashboard 可视化、Desktop 应用、launchd 集成、local STT |
| **cc-haha** | 轻量化会话管理工具 | H5 远程访问、会话 Fork、历史消息分支 |
| **Codex++** | 协议兼容与中转层 | 硅基流动中转、多供应商切换、Fast 服务模式 |

### 5.2 目标用户

| 项目 | 核心用户画像 | 用户规模信号 |
|------|--------------|--------------|
| **OpenClaw** | 企业用户、多渠道运营团队 | 321 个待合并 PR，认证提供商问题讨论热烈 |
| **Hermes Agent** | 开发者、技术爱好者 | Dashboard 主题获 38 👍，Desktop 功能需求多 |
| **cc-haha** | 个人开发者、移动端用户 | H5 功能请求集中，Issue 量较低但需求明确 |
| **Codex++** | MAC/Windows 桌面用户、多模型切换需求者 | MAC M1 问题 20 条评论，插件市场反馈活跃 |

### 5.3 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **架构模式** | 传输层适配器 + 消息网关 | CLI/Desktop 双入口 + 网关 | 前端 H5 + 后端 CLI 分离 | 协议代理 + 渲染层 |
| **扩展机制** | MCP 工具、插件市场 | 插件发现、Skill 系统 | 插件系统（市场异常） | 插件市场（同步问题） |
| **状态持久化** | SQLite、chokidar 文件监听 | 会话压缩、profile 隔离 | 会话中断恢复 | 插件配置持久化 |
| **安全特性** | OAuth 认证、红队守卫 | Shell 命令名检测 | - | 红队代理强制执行 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
第一梯队（商业级开源）
├── OpenClaw: 日均 156 Issues / 464 PRs，版本发布节奏稳定
└── Hermes Agent: 日均 91 Issues / 500 PRs，功能迭代迅速

第二梯队（垂直场景深耕）
├── Codex++: 日均 54 Issues / 5 PRs，聚焦 MAC 平台修复
└── cc-haha: 日均 14 Issues / 1 PR，聚焦 H5 远程访问
```

### 6.2 成熟度评估

| 项目 | 阶段判断 | 依据 |
|------|----------|------|
| **OpenClaw** | **质量巩固期** | 版本发布规范、Issue 闭环率高（70%）、有明确的迁移指导 |
| **Hermes Agent** | **快速迭代期** | PR 吞吐量最高（500 条/日），但闭环率低（13%），积压较重 |
| **cc-haha** | **功能迭代期** | Issue 量低但功能请求明确，PR 审查需加强 |
| **Codex++** | **问题修复期** | 高 Issue 量 + 低 PR 合并量，MAC 平台问题积压严重 |

### 6.3 社区健康度预警

| 风险信号 | 涉及项目 | 严重程度 |
|----------|----------|----------|
| PR 积压 >300 | OpenClaw (321)、Hermes Agent (383) | ⚠️ 需扩充审查人力 |
| P1 Bug 无 Fix PR | OpenClaw (4个)、cc-haha (2个)、Codex++ (5个) | 🔴 需优先响应 |
| 平台问题 >30 天未解决 | Codex++ (#406 MAC M1, 11天)、cc-haha (#742 AI循环, 4天) | 🟠 需建立平台测试矩阵 |
| 功能请求长期未评估 | Codex++ (#278 多账号切换, 17天) | 🟡 需建立需求评审机制 |

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 证据 | 对开发者的参考价值 |
|------|------|---------------------|
| **协议兼容性成为核心竞争力** | 4 个项目均在认证提供商适配上投入大量精力 | 建议采用统一抽象层（如 OpenClaw 的 transport adapter 模式），避免硬编码特定 Provider |
| **平台特定问题集中爆发** | MAC/Windows 平台问题占 Bug 报告 40%+ | 建议建立 CI/CD 平台矩阵测试，macOS Sonoma/25h2 Windows 需纳入测试覆盖 |
| **会话状态管理是共性难题** | 6 个项目均出现会话错乱/中断问题 | 建议引入状态机模式或事件溯源架构，提升消息可靠性 |
| **移动端/远程访问需求崛起** | cc-haha H5 功能请求 + Hermes Agent 多端点支持 | 预示下一波增长点在移动端集成，需提前规划长连接和令牌管理 |
| **Dashboard/可视化成为标配** | Hermes Agent Dashboard 主题获 38 👍，OpenClaw Control UI 慢速警告 | 用户期望更透明的系统状态可见性，可观测性功能优先级提升 |
| **红队/安全工具需求浮现** | OpenClaw 红队守卫、cc-haha 红队代理、Codex++ 红队强制执行 | AI Agent 安全审计需求增长，安全功能从"可选"变为"必选" |

### 7.2 技术路线信号

| 信号 | 解读 |
|------|------|
| **MCP 工具生态扩张** | OpenClaw、Codex++ 均强调 MCP 集成，Computer Use、Browser 等工具成为标配 |
| **多模型路由成为标配** | 各项目均在解决模型切换、fallback、计费顺序问题，多模型编排是刚需 |
| **插件市场成熟度不足** | Codex++、cc-haha 均出现插件市场同步/显示问题，插件生态基础设施需加强 |
| **本地部署需求增长** | Hermes Agent local STT、cc-haha 本地大模型连接，暗示隐私敏感场景需求上升 |

### 7.3 开发者行动建议

| 优先级 | 建议 |
|--------|------|
| **P0** | 关注 OpenClaw v2026.6.5 的 QQBot/MCP 修复，如已在生产环境使用相关功能建议升级 |
| **P1** | 若使用 MAC 平台，Codex++ 的 MAC M1 DeepSeek 问题（#406）可能影响使用，建议等待 #798/#771 合并 |
| **P2** | Hermes Agent 的 Dashboard 主题改进（#18080）即将成为下一个版本重点，可关注相关 PR |
| **P3** | cc-haha 的 H5 远程访问功能（#767/#765）处于早期讨论阶段，有参与贡献机会 |

---

**报告结语**：当前生态处于**功能完备→体验精细化**的转型期，OpenClaw 与 Hermes Agent 以企业级吞吐量领跑，cc-haha 与 Codex++ 在细分场景深耕。跨平台兼容性、会话可靠性、移动端支持是下一阶段的核心战场，开发者应重点关注协议抽象层设计和平台测试矩阵建设。

---

*本报告基于 2026-06-09 GitHub 公开数据生成，数据截止时间 23:59 UTC*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-06-09  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

过去24小时内，Hermes Agent 项目保持极高的社区活跃度：共处理 **91 条 Issues**（79 条新开/活跃，12 条关闭）和 **500 条 PR 更新**（383 条待合并，117 条已合并/关闭）。项目整体呈现快速迭代态势，未发布新版本。今日社区焦点集中在 **Dashboard 主题改进**（Issue #18080，24 条评论）、**iMessage 双向媒体交互功能**（PR #42507）以及多个 P1/P2 级 Bug 修复上。值得注意的是，**launchd 双启动问题**（Issue #21549）和**委托任务上下文长度损坏**（Issue #42449）两个 P1 级问题已出现对应修复 PR，需优先关注。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日已合并/关闭的重要 Pull Requests：

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#42564](https://github.com/NousResearch/hermes-agent/pull/42564) | feat(stt): add local_http provider for HTTP-based local STT service | ✅ CLOSED | 新增 `local_http` STT provider，支持调用外部 HTTP STT 服务 |
| [#42455](https://github.com/NousResearch/hermes-agent/pull/42455) | feat(dashboard): make `hermes dashboard register` idempotent | ✅ CLOSED | 使 `hermes dashboard register` 幂等，避免重复创建记录 |
| [#32541](https://github.com/NousResearch/hermes-agent/pull/32541) | fix(cli): dispatch /agents inline while agent is running | ✅ CLOSED | 修复 agent 运行期间 `/agents` 命令无法响应的问题 |
| [#30612](https://github.com/NousResearch/hermes-agent/pull/30612) | fix(acp): honour --profile from CLI and hermes-acp direct entry | ✅ CLOSED | 修复 `--profile` 参数在 ACP 入口的传递问题 |
| [#30384](https://github.com/NousResearch/hermes-agent/pull/30384) | fix(cli): enqueue leftover /steer before interrupt follow-up | ✅ CLOSED | 修复中断后续处理时 `pending_steer` 丢失问题 |
| [#28795](https://github.com/NousResearch/hermes-agent/pull/28795) | fix(cli): preserve -t/-m/--provider/--tui/--dev before chat subcommand | ✅ CLOSED | 修复多个 CLI 参数在 `chat` 子命令前的静默丢弃问题 |
| [#31817](https://github.com/NousResearch/hermes-agent/pull/31817) | hermes update downgrades aiohttp (duplicate) | ✅ CLOSED | 重复问题，已关闭 |

**待合并的热门 PR：**

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#42507](https://github.com/NousResearch/hermes-agent/pull/42507) | feat(photon): full bidirectional iMessage media + interactions | 完成 iMessage 媒体双向交互功能 |
| [#42576](https://github.com/NousResearch/hermes-agent/pull/42576) | feat(gateway): render terminal commands as bare fenced code blocks | 修复终端命令在消息网关中的渲染格式 |
| [#40663](https://github.com/NousResearch/hermes-agent/pull/40663) | fix(approval): detect shell-expanded command names | **P1 安全修复**：检测 shell 展开的命令名混淆 |
| [#42563](https://github.com/NousResearch/hermes-agent/pull/42563) | feat(desktop): add agent run inspector panel | 为 Desktop 添加 Agent 运行状态检查面板 |
| [#42574](https://github.com/NousResearch/hermes-agent/pull/42574) | feat(cron): add --delete-after retention for completed jobs | Cron 任务增加完成后的保留策略 |
| [#42450](https://github.com/NousResearch/hermes-agent/pull/42450) | fix(gateway): remove -k flag from kickstart in launchd_restart | 修复 macOS launchd 双启动问题 |
| [#42571](https://github.com/NousResearch/hermes-agent/pull/42571) | fix(sessions): fall back to gateway.max_concurrent_sessions when top-level is null | 修复会话并发限制回退逻辑 |
| [#42572](https://github.com/NousResearch/hermes-agent/pull/42572) | fix(photon): clear orphaned sidecars on restart | 修复 Photon 重启时的端口占用问题 |
| [#35911](https://github.com/NousResearch/hermes-agent/pull/35911) | feat(feishu): allow multiple Feishu/Lark apps via FEISHU_MULTI_APP | 支持飞书多应用连接 |
| [#26051](https://github.com/NousResearch/hermes-agent/pull/26051) | fix: preserve context on compression failures | 上下文压缩失败时保留完整对话历史 |
| [#42570](https://github.com/NousResearch/hermes-agent/pull/42570) | fix(desktop): restore streaming auto-scroll and keep composer visible | 修复 Desktop 流式输出的自动滚动 |
| [#42569](https://github.com/NousResearch/hermes-agent/pull/42569) | fix(model_metadata): reject stale OpenRouter context for DeepSeek V4 aliases | 修复 DeepSeek V4 上下文长度错误 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 优先级 | 说明 |
|------------|------|--------|-----|--------|------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | [Feature]: Improved Themes for Dashboard - currently hard to read | 24 | 38 | P3 | **最热门**：Dashboard 主题可读性差，字体和颜色选择不符合标准 |
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | Feature: Declarative Skill Protection Policy | 7 | 0 | P3 | 技能保护规则分散在 6+ 文件中，需要集中式声明策略 |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | [Setup]: hermes desktop strat fail, it say no git??? | 7 | 0 | P2 | Windows 11 上 Hermes Desktop 启动失败，提示找不到 git |
| [#24860](https://github.com/NousResearch/hermes-agent/issues/24860) | Dashboard Chat: Ctrl+V paste broken, image paste not supported | 6 | 1 | P2 | Dashboard Chat 的剪贴板粘贴功能失效 |
| [#34457](https://github.com/NousResearch/hermes-agent/issues/34457) | s6-log lock collision loops endlessly in multi-container gateway | 6 | 3 | P2 | 共享卷环境下 s6-log 锁冲突导致无限循环 |
| [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) | Cannot use Matrix gateway from Docker image | 6 | 3 | P2 | Docker 镜像缺少 mautrix[encryption] 依赖 |
| [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) | Feature: Microsoft Teams gateway support | 6 | 0 | P3 | 请求添加 Microsoft Teams 网关支持 |
| [#21549](https://github.com/NousResearch/hermes-agent/issues/21549) | launchd double-spawn triggers infinite restart death spiral | 4 | 0 | P1 | macOS launchd 双启动导致无限重启 |
| [#42130](https://github.com/NousResearch/hermes-agent/issues/42130) | OpenRouter credential configured but Hermes sends requests without Auth header | 4 | 0 | P2 | OpenRouter 认证头丢失问题（已关闭） |

### 热点分析

**Dashboard 主题问题（#18080）** 是今日社区讨论的核心，获得 38 个 👍 和 24 条评论。用户反馈当前主题（Midnight、Ember、Mono、Cyberpunk、Rose）仅改变配色方案，但字体选择（衬线字体、小字重、低对比度）严重影响可读性。这是一个影响大量用户的体验问题，预计将成为下一个版本的重点改进方向。

**Microsoft Teams 网关支持（#9512）** 持续受到关注，这是对现有 Slack、Discord、Telegram 等消息平台适配器的自然扩展需求。

---

## 5. Bug 与稳定性

### P1 级问题（需立即处理）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#21549](https://github.com/NousResearch/hermes-agent/issues/21549) | launchd double-spawn triggers infinite restart death spiral | OPEN | ✅ [#42450](https://github.com/NousResearch/hermes-agent/pull/42450) |
| [#42449](https://github.com/NousResearch/hermes-agent/issues/42449) | delegate_task corrupts parent context_length via shared plugin context engine singleton | OPEN | ❌ 无 |

**#21549 说明：** macOS 上 launchd 在屏幕唤醒、KeepAlive 重启或更新时可能同时启动两个 gateway 实例，第二个实例检测到 PID 文件后以 exit code 1 退出，触发无限重启循环。已有 PR #42450 修复中。

**#42449 说明：** `delegate_task` 生成子 agent 时，子 agent 的 `agent_init` 通过共享全局单例覆盖了父 agent 的 `ChatCompressor` context_length，严重影响上下文管理。**尚无 Fix PR，需优先处理。**

### P2 级问题

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | hermes desktop strat fail, it say no git??? | OPEN | ❌ 无 |
| [#24860](https://github.com/NousResearch/hermes-agent/issues/24860) | Dashboard Chat: Ctrl+V paste broken | OPEN | ❌ 无 |
| [#34457](https://github.com/NousResearch/hermes-agent/issues/34457) | s6-log lock collision loops endlessly | OPEN | ❌ 无 |
| [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) | Cannot use Matrix gateway from Docker image | OPEN | ❌ 无 |
| [#42130](https://github.com/NousResearch/hermes-agent/issues/42130) | OpenRouter credential configured but no Auth header | CLOSED | ❌ 无 |
| [#36845](https://github.com/NousResearch/hermes-agent/issues/36845) | Cron script timeout masked as ok by LLM fallback | OPEN | ❌ 无 |
| [#42139](https://github.com/NousResearch/hermes-agent/issues/42139) | Gated dashboard mode: _require_token() returns 401 to authenticated clients | OPEN | ❌ 无 |
| [#42556](https://github.com/NousResearch/hermes-agent/issues/42556) | write_file creates directory with literal backslash in path | OPEN | ❌ 无 |
| [#42536](https://github.com/NousResearch/hermes-agent/issues/42536) | Z.AI/GLM provider endpoint probe order causes wrong billing | OPEN | ❌ 无 |

### P3 级问题（部分）

| Issue 编号 | 标题 | 说明 |
|------------|------|------|
| [#42267](https://github.com/NousResearch/hermes-agent/issues/42267) | Gateway stop/restart notifications bypass i18n system | 通知消息硬编码英文 |
| [#41898](https://github.com/NousResearch/hermes-agent/issues/41898) | Desktop app — assistant response flashes and disappears (NVIDIA NIM) | NVIDIA NIM 提供商响应闪烁消失 |
| [#42306](https://github.com/NousResearch/hermes-agent/issues/42306) | Langfuse GENERATION spans missing usage/token counts | Langfuse 可观测性数据不完整（已关闭） |
| [#40101](https://github.com/NousResearch/hermes-agent/issues/40101) | mnemosyne-hermes Plugin not discovered | 插件发现机制问题 |
| [#42468](https://github.com/NousResearch/hermes-agent/issues/42468) | Desktop sidebar session 'Copy ID' doesn't work | Radix 菜单嵌套冲突 |
| [#42431](https://github.com/NousResearch/hermes-agent/issues/42431) | Desktop Files panel reads local filesystem but defaults to remote cwd | 文件面板路径问题 |
| [#42256](https://github.com/NousResearch/hermes-agent/issues/42256) | Desktop composer inserts tab characters from Excel paste | Excel 粘贴格式问题（已有 PR #42573 修复） |
| [#42270](https://github.com/NousResearch/hermes-agent/issues/42270) | hermes --tui /model picker hard-caps model list at 50 entries | 模型选择器条目上限问题 |
| [#42102](https://github.com/NousResearch/hermes-agent/issues/42102) | Openai-codex auth add only adds openai-codex-oauth-1 | 认证配置问题 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue/PR 编号 | 标题 | 状态 | 评估 |
|---------------|------|------|------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Improved Themes for Dashboard | OPEN | ⭐⭐⭐ 高呼声，社区强烈需求 |
| [#27997](https://github.com/NousResearch/hermes-agent/issues/27997) | Declarative Skill Protection Policy | OPEN | ⭐⭐ 架构改进，提升安全性 |
| [#9512](https://github.com/NousResearch/hermes-agent/issues/9512) | Microsoft Teams gateway support | OPEN | ⭐⭐ 企业用户需求 |
| [#25979](https://github.com/NousResearch/hermes-agent/issues/25979) | Skill proposal: productivity/outlook — Microsoft 365 Calendar + To Do | OPEN | ⭐⭐ 已有实现意愿 |
| [#4581](https://github.com/NousResearch/hermes-agent/issues/4581) | read_file should have option to return raw content without line numbers | OPEN | ⭐ 小而实用的工具改进 |
| [#38357](https://github.com/NousResearch/hermes-agent/issues/38357) | Feature: Show sessions from all profiles in Desktop App sidebar | OPEN | ⭐ 多 profile 用户需求 |
| [#12020](https://github.com/NousResearch/hermes-agent/issues/12020) | How to prevent the output of hermes.tool_progress events | OPEN | ⭐ API 兼容性需求 |
| [#41933](https://github.com/NousResearch/hermes-agent/issues/41933) | [Hermes CN Desktop] Windows 核心工具无法正常安全安装 | OPEN | ⭐ 中国区 Windows 用户痛点 |

### 已有关联 PR 的功能请求

| 功能 | 相关 Issue | 相关 PR | 状态 |
|------|-----------|---------|------|
| iMessage 双向媒体交互 | #42454 | [#42507](https://github.com/NousResearch/hermes-agent/pull/42507) | 待合并 |
| 飞书多应用支持 | - | [#35911](https://github.com/NousResearch/hermes-agent/pull/35911) | 待合并 |
| Desktop Agent 运行检查面板 | - | [#42563](https://github.com/NousResearch/hermes-agent/pull/42563) | 待合并 |
| Cron 任务保留策略 | - | [#42574](https://github.com/NousResearch/hermes-agent/pull/42574) | 待合并 |
| 本地 HTTP STT 服务 | - | [#42564](https://github.com/NousResearch/hermes-agent/pull/42564) | 已关闭 |
| Desktop 可调整大小的终端面板 | - | [#42521](https://github.com/NousResearch/hermes-agent/pull/42521) | 待合并 |

---

## 7. 用户反馈摘要

### 核心痛点

1. **Windows 体验问题严重**
   - Hermes Desktop 在 Windows 11 上启动失败率高（Issue #38963）
   - 核心工具（Node.js、ripgrep、ffmpeg、agent-browser）安装后仍无法识别（Issue #41933）
   - `write_file` 工具在含空格的路径上创建错误的目录结构（Issue #42556）

2. **Docker 部署问题**
   - Matrix 网关缺少必要依赖（Issue #30399）
   - 共享卷环境下 s6-log 锁冲突导致服务不可用（Issue #34457）

3. **认证与计费问题**
   - OpenRouter 认证头丢失（Issue #42130）
   - Z.AI/GLM 计费顺序错误导致 Coding Plan 用户被错误扣费（Issue #42536）

4. **Desktop 应用稳定性**
   - NVIDIA NIM 提供商响应闪烁消失（Issue #41898）
   - Excel 粘贴产生制表符（Issue #42256）
   - 模型选择器上限 50 条，隐藏大量模型（Issue #42270）

### 用户满意度信号

- **Dashboard 主题可读性差** 获得 38 个 👍，说明大量用户受影响但仍在使用
- **Microsoft Teams 支持** 持续有用户请求，表明企业采用率在增长
- **iMessage 媒体交互** 功能 PR 获得多个 stacked PR，表明核心开发者积极参与

---

## 8. 待处理积压

以下 Issues 超过 30 天未响应或无明确处理路径，需维护者关注：

| Issue 编号 | 标题 | 创建日期 | 天数 | 优先级 | 备注 |
|------------|------|----------|------|--------|------|
| [#4581](https://github.com/NousResearch/hermes-agent/issues/4581) | read_file should have option to return raw content without line numbers | 2026-

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-06-09  
**项目仓库**：[NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha)

---

## 1. 今日速览

2026年6月9日，cc-haha 项目保持高度活跃。过去24小时内共产生 **14 条 Issues 更新**（13 条新开/活跃，1 条已关闭）和 **1 条待合并 PR**。项目社区反馈热烈，主要集中在桌面端稳定性问题（窗口拖动异常、连接中断）、会话管理功能优化（会话列表控制、历史消息 Fork）以及 H5 远程访问体验增强（令牌固定、多地址配置）等方面。值得注意的是，#548 会话中断 Bug 已成功关闭，但 #742 出现的"AI 反复思考循环"问题引发关注，需优先排查。整体来看，项目处于功能迭代与稳定性修复并行的健康状态。

---

## 2. 版本发布

**无新版本发布**

过去24小时内未检测到新版本标签或 Release 创建。项目最新版本仍为用户反馈中提及的 **v0.4.0**。

---

## 3. 项目进展

### PR 合并/关闭情况

| PR 编号 | 标题 | 状态 | 领域 | 说明 |
|---------|------|------|------|------|
| [#771](https://github.com/NanmiCoder/cc-haha/pull/771) | codex: add redteam guard proxy enforcement | **待合并** | server, cli-core | 新增红队工作流守卫与代理强制执行机制，添加覆盖范围预言机指导 |

**PR #771 详情**：
- **作者**：[GaoZzr](https://github.com/GaoZzr)
- **标签**：enhancement, size:XL
- **核心内容**：在代理层添加入站红队工作流守卫与确认门禁，在上游/model 执行前强制执行；引入后期 XRAY 被动/OAST 使用指导；保留进程内 tea...
- **状态**：待维护者批准（needs-maintainer-approval）
- **链接**：[https://github.com/NanmiCoder/cc-haha/pull/771](https://github.com/NanmiCoder/cc-haha/pull/771)

> ⚠️ **提醒**：该 PR 标记为 size:XL 且需要维护者批准，建议优先评审。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue 编号 | 标题 | 评论数 | 类型 | 热度分析 |
|------|------------|------|--------|------|----------|
| 1 | [#548](https://github.com/NanmiCoder/cc-haha/issues/548) | [BUG] 会话经常中断 | 7 | bug | **已关闭** - 核心稳定性问题，引发广泛共鸣 |
| 2 | [#742](https://github.com/NanmiCoder/cc-haha/issues/742) | [BUG] 会话结束后自动反复思考，陷入循环 | 4 | bug | 新兴热点 - AI 行为异常，影响使用体验 |
| 3 | [#766](https://github.com/NanmiCoder/cc-haha/issues/766) | 桌面端卡住，cli端正常 | 3 | bug | 平台差异性问题 |
| 4 | [#749](https://github.com/NanmiCoder/cc-haha/issues/749) | 新建会话，初始化工作台默认可以不使用项目路径 | 2 | feature | 轻量化工作流需求 |
| 5 | [#747](https://github.com/NanmiCoder/cc-haha/issues/747) | 新建会话不要展示在会话列表 | 2 | feature | 会话管理优化 |

### 热点分析

**#548 会话中断问题（已关闭）**
- **作者**：[@zhangvia](https://github.com/zhangvia)
- **评论数**：7 条（最高）
- **诉求**：会话使用过程中频繁中断，严重影响连续工作流
- **状态**：已关闭，表明问题已得到解决或确认

**#742 AI 反复思考循环（高风险）**
- **作者**：[@moyu12-ae](https://github.com/moyu12-ae)
- **评论数**：4 条
- **场景**：会话结束后 AI 自动继续思考且陷入死循环，无法自行停止
- **影响**：用户体验严重受损，可能导致资源浪费
- **链接**：[https://github.com/NanmiCoder/cc-haha/issues/742](https://github.com/NanmiCoder/cc-haha/issues/742)

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue 编号 | 标题 | 平台/环境 | 状态 | Fix PR |
|----------|------------|------|-----------|------|---------|
| 🔴 高 | [#742](https://github.com/NanmiCoder/cc-haha/issues/742) | 会话结束后自动反复思考，陷入循环 | macOS v0.4.0 | OPEN | 无 |
| 🔴 高 | [#773](https://github.com/NanmiCoder/cc-haha/issues/773) | 更新后连接本地大模型连不上 | 本地大模型 | OPEN | 无 |
| 🟠 中 | [#766](https://github.com/NanmiCoder/cc-haha/issues/766) | 桌面端卡住，cli端正常 | 桌面端 | OPEN | 无 |
| 🟠 中 | [#774](https://github.com/NanmiCoder/cc-haha/issues/774) | 按照web启动命令，访问web端出现异常 | Web 端 | OPEN | 无 |
| 🟠 中 | [#770](https://github.com/NanmiCoder/cc-haha/issues/770) | windows11 25h2下拖动窗口会逐渐变大 | Windows 11 25h2 | OPEN | 无 |
| 🟡 低 | [#548](https://github.com/NanmiCoder/cc-haha/issues/548) | 会话经常中断 | - | **CLOSED** | 已修复 |

### 稳定性评估

**关键风险点**：
1. **#742 AI 循环思考**：会话状态机可能存在缺陷，建议优先排查会话结束后的状态转换逻辑
2. **#773 本地大模型连接**：版本更新后回归问题，需确认是否与 API 调用方式变更有关
3. **#766 桌面端卡住**：平台特定问题，可能涉及 UI 线程阻塞

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue 编号 | 功能描述 | 请求者 | 优先级信号 |
|------------|----------|--------|------------|
| [#764](https://github.com/NanmiCoder/cc-haha/issues/764) | 后端 CLI 30秒断连时间可配置 | [@yiYangGit](https://github.com/yiYangGit) | 移动端/远程访问场景需求 |
| [#767](https://github.com/NanmiCoder/cc-haha/issues/767) | H5 访问令牌固定功能 | [@mrpurplecloud](https://github.com/mrpurplecloud) | 远程使用场景核心痛点 |
| [#765](https://github.com/NanmiCoder/cc-haha/issues/765) | 支持配置多个 H5 访问地址 | [@yiYangGit](https://github.com/yiYangGit) | 多端访问场景需求 |
| [#768](https://github.com/NanmiCoder/cc-haha/issues/768) | 支持选中历史消息 Fork 新会话 | [@yiYangGit](https://github.com/yiYangGit) | 对话分支管理需求 |
| [#749](https://github.com/NanmiCoder/cc-haha/issues/749) | 新建会话默认不使用项目路径 | [@zhbdesign](https://github.com/zhbdesign) | 轻量化工作流优化 |
| [#747](https://github.com/NanmiCoder/cc-haha/issues/747) | 新建会话不展示在会话列表 | [@zhbdesign](https://github.com/zhbdesign) | 会话管理优化 |

### 路线图信号分析

**H5 远程访问功能**成为今日功能请求焦点（#767, #765），反映出用户对移动端和跨设备使用的强烈需求。建议维护者考虑：
- 令牌生命周期管理优化
- 多域名/多端点支持架构设计

**会话管理优化**（#747, #749, #768）表明用户对工作区组织和对话分支有更精细的需求，可能影响未来版本 UI/UX 设计方向。

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 痛点描述 | 相关 Issue |
|------|----------|------------|
| **移动端使用** | 30秒断连限制，无法在手机上操作 | [#764](https://github.com/NanmiCoder/cc-haha/issues/764) |
| **远程访问** | H5 令牌频繁变化，需反复刷新 | [#767](https://github.com/NanmiCoder/cc-haha/issues/767) |
| **本地模型** | 更新后连接不稳定 | [#773](https://github.com/NanmiCoder/cc-haha/issues/773) |
| **Windows 体验** | 窗口拖动异常 | [#770](https://github.com/NanmiCoder/cc-haha/issues/770) |
| **对话修正** | 发错消息无法从历史节点重新开始 | [#768](https://github.com/NanmiCoder/cc-haha/issues/768) |

### 用户满意度信号

- **正面**：#548 会话中断问题已关闭，表明维护者响应积极
- **负面**：本地大模型用户在版本更新后遇到连接问题，可能存在回归
- **期待**：H5 远程访问功能呼声高，用户希望提升移动端可用性

---

## 8. 待处理积压

### 需关注的重要 Issue/PR

| 类型 | 编号 | 标题 | 创建时间 | 当前状态 | 积压天数 | 优先级 |
|------|------|------|----------|----------|----------|--------|
| Bug | [#742](https://github.com/NanmiCoder/cc-haha/issues/742) | 会话结束后自动反复思考，陷入循环 | 2026-06-05 | OPEN | 4 天 | 🔴 高 |
| Bug | [#773](https://github.com/NanmiCoder/cc-haha/issues/773) | 更新后连接本地大模型连不上 | 2026-06-08 | OPEN | 1 天 | 🔴 高 |
| Bug | [#766](https://github.com/NanmiCoder/cc-haha/issues/766) | 桌面端卡住，cli端正常 | 2026-06-08 | OPEN | 1 天 | 🟠 中 |
| Feature | [#764](https://github.com/NanmiCoder/cc-haha/issues/764) | 后端 CLI 断连时间可配置 | 2026-06-08 | OPEN | 1 天 | 🟠 中 |
| Feature | [#767](https://github.com/NanmiCoder/cc-haha/issues/767) | H5 访问令牌固定 | 2026-06-08 | OPEN | 1 天 | 🟠 中 |
| PR | [#771](https://github.com/NanmiCoder/cc-haha/pull/771) | codex: add redteam guard proxy enforcement | 2026-06-08 | 待合并 | 1 天 | ⚠️ 需审批 |

### 维护建议

1. **#742** 建议优先排查会话状态机逻辑，可能涉及 `onConversationEnd` 回调处理
2. **#773** 建议对比 v0.4.0 与前一版本在本地模型调用上的变更
3. **#771** PR 标记为 size:XL，建议拆分为多个小 PR 便于评审

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去24小时 Issues 更新 | 14 条 |
| 新开/活跃 Issues | 13 条 |
| 已关闭 Issues | 1 条 |
| 过去24小时 PR 更新 | 1 条 |
| 待合并 PR | 1 条 |
| 新版本发布 | 0 个 |
| 讨论最活跃 Issue 评论数 | 7 条（#548） |

---

*报告生成时间：2026-06-09*  
*数据来源：GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**：2026-06-09  
**项目仓库**：[BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年6月9日，Codex++ 项目保持高度活跃，24小时内共产生 **54 条 Issue 更新**（新开/活跃 49 条，关闭 5 条）和 **5 条 PR 更新**（待合并 2 条，已合并/关闭 3 条）。项目整体呈现**高 Issue 量、高修复需求**的态势。今日社区焦点集中在 **MAC M1 平台兼容性**（DeepSeek 模型 502 错误）、**插件市场同步异常**以及**MCP 工具注入失败**三大问题。PR 层面有两个重要修复正在等待合并，分别针对 Fast 服务模式限制和硅基流动 API 工具调用问题。

---

## 2. 版本发布

**今日无新版本发布。**

最近一个版本为 1.2.4（根据 Issue #772、#779 等用户反馈确认），但 GitHub Releases 页面暂无记录。

---

## 3. 项目进展

### 待合并 PR

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#798](https://github.com/BigPizzaV3/CodexPlusPlus/pull/798) | 限制 Fast 服务模式仅对支持模型生效 | **待合并** | 收紧 Fast 服务模式支持范围至 `gpt-5.4` / `gpt-5.5`，修复 UI 展示与实际行为不一致问题 |
| [#771](https://github.com/BigPizzaV3/CodexPlusPlus/pull/771) | fix: 修复中转硅基流动时工具调用"unsupported call"问题 | **待合并** | 修复 `protocol_proxy.rs` 中 `push_tool_call_delta_into` 函数对 `state.name` 的错误覆盖逻辑 |

### 已合并/关闭 PR

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#724](https://github.com/BigPizzaV3/CodexPlusPlus/pull/724) | 限制 Fast 服务模式仅用于支持模型 | **已合并** | Fast 服务模式白名单机制正式落地 |
| [#44](https://github.com/BigPizzaV3/CodexPlusPlus/pull/44) | Add history export for Codex sessions | **已合并** | 新增会话导出功能，支持 Markdown 格式本地导出 |
| [#734](https://github.com/BigPizzaV3/CodexPlusPlus/pull/734) | Improved code modularity + English localization | **已合并** | 代码模块化重构 + 英文本地化支持 |

**进展评估**：今日项目在 **协议兼容性修复**（硅基流动 API）和 **服务模式规范化** 方面取得实质进展。Fast 服务模式限制功能经过 #724 → #798 两次迭代趋于完善。

---

## 4. 社区热点

以下 Issues 今日讨论最活跃（按评论数排序）：

| Issue # | 标题 | 评论数 | 核心诉求 |
|---------|------|--------|----------|
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | [Bug] MAC M1 DeepSeek 模型 502 Bad Gateway | **20** | MAC M1 用户升级后 DeepSeek 模型无法正常使用，请求修复 |
| [#389](https://github.com/BigPizzaV3/CodexPlusPlus/issues/389) | [Bug] MAC M1 笔记本下载并配置供应商配置好后重启无 DeepSeek 模型选择 | **11** | MAC M1 平台模型配置丢失问题 |
| [#540](https://github.com/BigPizzaV3/CodexPlusPlus/issues/540) | [Config] DeepSeek API 接入无法开启 1M 上下文 | **6** | 用户期望支持 DeepSeek 1M 超长上下文 |
| [#676](https://github.com/BigPizzaV3/CodexPlusPlus/issues/676) | [Bug] 接入硅基流动 API 无法调用工具 | **5** | 硅基流动中转时工具调用返回 "unsupported call" |
| [#761](https://github.com/BigPizzaV3/CodexPlusPlus/issues/761) | [Bug] 插件市场没有任何东西 | **5** | 插件市场空白，用户无法浏览/安装插件 |
| [#489](https://github.com/BigPizzaV3/CodexPlusPlus/issues/489) | [Bug] MCP server 已 enabled，但工具没有注入到当前模型会话 | **5** | MCP 工具（@Chrome、@Browser、@Computer Use）不可用 |

**热点分析**：
- **MAC M1 平台问题突出**：#406 和 #389 合计 31 条评论，表明 MAC M1 兼容性是当前最大痛点
- **插件系统异常**：#761、#784 等多个 Issue 反映插件市场同步不完整，与 #771 的修复形成呼应
- **MCP 工具注入失败**：#489 涉及 Computer Use、Browser 等核心工具，影响用户工作流

---

## 5. Bug 与稳定性

### 高优先级 Bug（影响核心功能）

| Issue # | 标题 | 严重程度 | 状态 | 备注 |
|---------|------|----------|------|------|
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | MAC M1 DeepSeek 模型 502 错误 | 🔴 高 | Open | 20 条评论，社区高度关注 |
| [#389](https://github.com/BigPizzaV3/CodexPlusPlus/issues/389) | MAC M1 无 DeepSeek 模型选择 | 🔴 高 | Open | 与 #406 相关联 |
| [#577](https://github.com/BigPizzaV3/CodexPlusPlus/issues/577) | 更新后强制沙盒，所有对话无法进行 | 🔴 高 | Open | 旧会话也无法打开 |
| [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | Codex++ 启动 Codex 闪退 | 🔴 高 | Open | MAC Intel 平台 |
| [#796](https://github.com/BigPizzaV3/CodexPlusPlus/issues/796) | renderer 注入代码版本不一致 | 🔴 高 | Open | v1.2.4 主程序但内嵌 v1.1.7 渲染代码 |

### 中优先级 Bug

| Issue # | 标题 | 严重程度 | 状态 | 备注 |
|---------|------|----------|------|------|
| [#676](https://github.com/BigPizzaV3/CodexPlusPlus/issues/676) | 硅基流动 API 工具调用失败 | 🟡 中 | Open | **已有 Fix PR #771** |
| [#761](https://github.com/BigPizzaV3/CodexPlusPlus/issues/761) | 插件市场空白 | 🟡 中 | Open | 多用户确认 |
| [#489](https://github.com/BigPizzaV3/CodexPlusPlus/issues/489) | MCP 工具未注入会话 | 🟡 中 | Open | Computer Use 等不可用 |
| [#790](https://github.com/BigPizzaV3/CodexPlusPlus/issues/790) | 发送图片后报错"unknown variant 'image_url'" | 🟡 中 | Open | 对话永久损坏 |
| [#766](https://github.com/BigPizzaV3/CodexPlusPlus/issues/766) | 后端连接总是断开 | 🟡 中 | Open | 长时间后台运行后断开 |

### 已关闭 Bug

| Issue # | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#636](https://github.com/BigPizzaV3/CodexPlusPlus/issues/636) | 更新后插件界面变灰色无法使用 | **CLOSED** | 2026-06-08 关闭 |
| [#770](https://github.com/BigPizzaV3/CodexPlusPlus/issues/770) | 点击"启动Codex++"报错 | **CLOSED** | 2026-06-08 关闭 |

**稳定性评估**：当前存在 **5 个高优先级未解决 Bug**，主要集中在 **MAC 平台兼容性** 和 **版本更新后回归**。建议优先处理 #406/#389 系列问题。

---

## 6. 功能请求与路线图信号

| Issue # | 标题 | 类型 | 需求分析 |
|---------|------|------|----------|
| [#540](https://github.com/BigPizzaV3/CodexPlusPlus/issues/540) | DeepSeek API 1M 上下文支持 | Config | 用户明确需求，已有配置尝试但未成功 |
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | product design 插件找不到 | Feature | 期望新增插件，2 👍 |
| [#278](https://github.com/BigPizzaV3/CodexPlusPlus/issues/278) | 请求增加多个官方账号切换功能 | Feature | 2 👍，长期需求 |
| [#794](https://github.com/BigPizzaV3/CodexPlusPlus/issues/794) | 当前版本不支持 mimo-v2.5-pro 模型 | Config | 新模型适配需求 |
| [#782](https://github.com/BigPizzaV3/CodexPlusPlus/issues/782) | kimicode 无法接入 | Config | 新供应商适配 |

**路线图信号**：
- **协议兼容性扩展**：用户持续尝试接入新供应商（kimicode、mimo、agnes），需关注 model catalog 更新机制
- **插件生态完善**：product design 等插件缺失反馈较多
- **多账号支持**：#278 长期悬而未决（创建于 2026-05-23），表明用户对账号管理有强需求

---

## 7. 用户反馈摘要

### 核心痛点

1. **MAC 平台兼容性堪忧**
   - 多名 MAC M1/MAC Intel 用户反馈升级后无法正常使用 DeepSeek 模型
   - 症状：502 Bad Gateway、模型选择消失、启动闪退
   - 用户已提供截图、日志等详细复现信息

2. **插件系统异常频发**
   - 插件市场空白（#761）
   - 新增插件不显示（#773）
   - openai-bundled marketplace 同步不完整（#784）
   - MCP 配置意外重置（#353）

3. **协议转换兼容性问题**
   - 硅基流动 API 中转时工具调用失败（#676），**已有 PR #771 修复**
   - Chat Completions 协议配置后仍请求 /v1/responses（#738）
   - 图片消息反序列化失败（#790）

### 用户满意点

- 会话导出功能（#44 已合并）获得正面反馈
- 代码模块化和英文本地化（#734）改善了开发者体验

### 典型使用场景

- **开发者日常使用**：通过 Codex++ 管理多个供应商配置，切换 DeepSeek/硅基流动等模型
- **Computer Use 自动化**：用户期望使用 @Chrome、@Browser 等 MCP 工具进行浏览器自动化
- **长上下文需求**：部分用户尝试开启 1M 上下文用于大型代码分析

---

## 8. 待处理积压

以下 Issue 创建时间较早或评论数较高，但尚未得到实质性响应：

| Issue # | 标题 | 创建时间 | 评论数 | 积压原因 |
|---------|------|----------|--------|----------|
| [#167](https://github.com/BigPizzaV3/CodexPlusPlus/issues/167) | 导出会话时显示未找到当前对话 | 2026-05-19 | 1 | 长期未解决 |
| [#278](https://github.com/BigPizzaV3/CodexPlusPlus/issues/278) | 请求增加多个官方账号切换功能 | 2026-05-23 | 1 | 功能需求，长期未实现 |
| [#353](https://github.com/BigPizzaV3/CodexPlusPlus/issues/353) | [Bug] mcp配置消失 | 2026-05-26 | 1 | MAC 平台问题，未修复 |
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | MAC M1 DeepSeek 502 错误 | 2026-05-29 | **20** | 高优先级，需尽快响应 |
| [#455](https://github.com/BigPizzaV3/CodexPlusPlus/issues/455) | Codex++ 启动 Codex 闪退 | 2026-05-31 | 3 | MAC Intel 平台问题 |

**积压评估**：
- **#406** 积压 11 天，20 条评论，是当前最急需处理的 Issue
- **#278** 积压 17 天，功能需求长期未评估
- MAC 平台相关 Issue 整体积压较多，建议建立 MAC 测试矩阵

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去 24 小时 Issue 更新 | 54 条 |
| 过去 24 小时 PR 更新 | 5 条 |
| 新版本发布 | 0 |
| 待合并 PR | 2 |
| 已合并/关闭 PR | 3 |
| Open Issues（今日新增/活跃） | 49 |
| Closed Issues（今日） | 5 |

---

*本报告由自动化脚本生成，数据来源：GitHub API，生成时间：2026-06-09*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*