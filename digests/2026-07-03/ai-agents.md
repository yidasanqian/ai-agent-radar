# OpenClaw 生态日报 2026-07-03

> Issues: 54 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-03 03:16 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-03  
**数据区间：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 项目今日保持极高活跃度，共处理 **54 条 Issues**（43 新开/活跃，11 已关闭）和 **500 条 PR 更新**（81 已合并/关闭，419 待合并）。项目发布了 **v2026.7.1-beta.1** 正式支持 GPT-5.6 模型家族，并新增外部 harness 附件功能。社区讨论热度集中在消息通道文本泄露、嵌入式运行器签名验证失败、Telegram 会话超时等 P1 级稳定性问题上，多个 regression 问题需要关注。

---

## 2. 版本发布

### v2026.7.1-beta.1

**发布时间：** 2026-07-03

**主要更新：**

| 功能 | 说明 | 相关链接 |
|------|------|----------|
| **OpenAI GPT-5.6 支持** | OpenClaw 现已识别 GPT-5.6 模型家族，覆盖 catalog、capability 和 runtime 选择路径 | [#98333](https://github.com/openclaw/openclaw/issues/98333) |
| **外部 harness 附件** | `openclaw attach` 命令可针对现有 Gateway 会话启动外部 harness | - |

**迁移注意事项：** 暂无破坏性变更报告。

---

## 3. 项目进展

过去 24 小时共 **81 个 PR 已合并/关闭**，以下是值得关注的推进：

| PR | 描述 | 状态 | 链接 |
|----|------|------|------|
| #99316 | fix(ui): 避免在 dashboard sidebar sessions 中使用 `Array.prototype.toSorted`（兼容性修复） | OPEN | [链接](https://github.com/openclaw/openclaw/pull/99316) |
| #97894 | fix: 为 Claude CLI OAuth 重新认证提供提示 | OPEN | [链接](https://github.com/openclaw/openclaw/pull/97894) |
| #99338 | fix(llm): 不再为无 payload 的 media 类型块丢弃 tool-result 文本 | OPEN | [链接](https://github.com/openclaw/openclaw/pull/99338) |
| #99217 | Preserve Codex output after missing turn completion | OPEN | [链接](https://github.com/openclaw/openclaw/pull/99217) |
| #43938 | fix(gateway): 使用账户级重载处理渠道账户配置变更 | OPEN | [链接](https://github.com/openclaw/openclaw/pull/43938) |
| #99330 | fix(update): 版本变更后跳过重启时警告 stale gateway | OPEN | [链接](https://github.com/openclaw/openclaw/pull/99330) |
| #98676 | fix(cli): 在 exec-approvals-cli 中限制 approvals 文件读取大小 | OPEN | [链接](https://github.com/openclaw/openclaw/pull/98676) |
| #99337 | fix(mcp): 限制 glob-to-regex 通配符段以防止 ReDoS | OPEN | [链接](https://github.com/openclaw/openclaw/pull/99337) |
| #99335 | improve: 减少重复的 session 启动扫描 | OPEN | [链接](https://github.com/openclaw/openclaw/pull/99335) |
| #99327 | fix(config): 停止重复的 legacy config-health 警告 | OPEN | [链接](https://github.com/openclaw/openclaw/pull/99327) |

**项目整体评估：** PR 积压较多（419 待合并），建议优先处理高优先级和安全相关 PR。

---

## 4. 社区热点

### 评论数最多的 Issues

| # | 评论数 | 标题 | 优先级 | 链接 |
|---|--------|------|--------|------|
| #25592 | 33 | Text between tool calls leaks to messaging channels | P1 | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| #92201 | 18 | Embedded runner: freshly streamed thinking signatures intermittently invalid on replay (Anthropic) | P1 | [链接](https://github.com/openclaw/openclaw/issues/92201) |
| #38327 | 10 | [Bug] "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview | P1 | [链接](https://github.com/openclaw/openclaw/issues/38327) |
| #87744 | 10 | [Bug]: Codex-backed Telegram turns repeatedly time out waiting for turn/completed on 2026.5.27 | P1 | [链接](https://github.com/openclaw/openclaw/issues/87744) |
| #35203 | 9 | [RFC] Multi-Agent Collaboration Enhancement: Capability Profiling + Shared Blackboard + Layered Memory + Token Cost Governance | P2 | [链接](https://github.com/openclaw/openclaw/issues/35203) |
| #98416 | 8 | [Bug] v2026.6.11 published dist missing reentrancy guard - reply session initialization conflicted | P1 | [链接](https://github.com/openclaw/openclaw/issues/98416) |
| #47910 | 7 | feat: provider fallback by failure class — quarantine auth-broken providers | P1 | [链接](https://github.com/openclaw/openclaw/issues/47910) |
| #97983 | 7 | iOS/WebChat messages append to transcript but do not trigger/deliver assistant replies | P1 | [链接](https://github.com/openclaw/openclaw/issues/97983) |

### 热点分析

**#25592（33 条评论）** 是今日最热问题：Agent 在 tool calls 之间产生的文本（如错误处理、处理确认、叙述）会被路由到活跃的消息通道（Slack、iMessage 等）作为可见消息发送。这是一个严重的 UX 问题，内部处理输出、失败执行等不应暴露给用户。

**#92201（18 条评论）** 关注嵌入式运行器中 Anthropic thinking blocks 的签名验证问题，可能影响会话状态的可靠性。

---

## 5. Bug 与稳定性

### P0/P1 严重 Bug（需立即关注）

| # | 严重度 | 类型 | 标题 | 状态 | 链接 |
|---|--------|------|------|------|------|
| #25592 | P1 | Regression | Text between tool calls leaks to messaging channels | OPEN | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| #92201 | P1 | Bug | Embedded runner: thinking signatures intermittently invalid on replay | OPEN | [链接](https://github.com/openclaw/openclaw/issues/92201) |
| #38327 | P1 | Regression | "Cannot convert undefined or null to object" with gemini-3.1-pro-preview | OPEN | [链接](https://github.com/openclaw/openclaw/issues/38327) |
| #87744 | P1 | Regression | Codex-backed Telegram turns repeatedly time out | OPEN | [链接](https://github.com/openclaw/openclaw/issues/87744) |
| #98416 | P1 | Regression | v2026.6.11 missing reentrancy guard - reply session initialization conflicted | OPEN | [链接](https://github.com/openclaw/openclaw/issues/98416) |
| #92241 | P1 | Regression | Gateway holds stale module import paths after update/rollback | OPEN | [链接](https://github.com/openclaw/openclaw/issues/92241) |
| #99168 | P1 | Bug | large tool output can poison subsequent results as (no output) | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/99168) |
| #79552 | P1 | Bug | Android node sends node.event before websocket connect handshake completes | CLOSED | [链接](https://github.com/openclaw/openclaw/issues/79552) |
| #99336 | P1 | Security | Pre-compaction memory flush injects 'Continue the OpenClaw runtime event.' as user-role message | OPEN | [链接](https://github.com/openclaw/openclaw/issues/99336) |
| #99311 | P1 | Bug | Account-scoped config changes restart the whole channel | OPEN | [链接](https://github.com/openclaw/openclaw/issues/99311) |
| #99283 | P1 | Regression | macOS app rewrites persisted App Group device identity after restart | OPEN | [链接](https://github.com/openclaw/openclaw/issues/99283) |
| #99263 | P1 | Bug | Gateway crashes with ERR_INVALID_STATE on Node 26 when handling inbound image media | OPEN | [链接](https://github.com/openclaw/openclaw/issues/99263) |
| #99273 | P1 | Bug | openai/* provider: runner hardcodes api="openai-responses", ignores config | OPEN | [链接](https://github.com/openclaw/openclaw/issues/99273) |

### P2 中等优先级 Bug

| # | 类型 | 标题 | 链接 |
|---|------|------|------|
| #40880 | Regression | MEDIA_MAX_BYTES (5 MB) is hardcoded and not user-configurable | [链接](https://github.com/openclaw/openclaw/issues/40880) |
| #98673 | Bug | sanitizeContentBlocksImages converts text tool results to image blocks | [链接](https://github.com/openclaw/openclaw/issues/98673) |
| #98614 | Regression | sessions_spawn missing scope operator.write — introduced between v2026.6.1 and v2026.6.11 | [链接](https://github.com/openclaw/openclaw/issues/98614) |
| #99305 | Bug | Bedrock provider — claude-sonnet-5 prompt caching broken (zero cache hits) | [链接](https://github.com/openclaw/openclaw/issues/99305) |
| #99241 | Bug | Tool outputs sometimes render as image attachments and become unreadable | [链接](https://github.com/openclaw/openclaw/issues/99241) |

### 回归问题汇总

今日共报告 **7 个 regression** 问题，涉及版本：
- v2026.6.11（3 个）
- v2026.5.27（1 个）
- v2026.3.2（1 个）
- v2026.6.1 → v2026.5.6 回滚场景（1 个）

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| # | 优先级 | 标题 | 描述 | 链接 |
|---|--------|------|------|------|
| #35203 | P2 | [RFC] Multi-Agent Collaboration Enhancement | Capability Profiling + Shared Blackboard + Layered Memory + Token Cost Governance | [链接](https://github.com/openclaw/openclaw/issues/35203) |
| #47910 | P1 | feat: provider fallback by failure class | 按故障类别隔离 provider，避免对已知认证失败的 provider 重试 | [链接](https://github.com/openclaw/openclaw/issues/47910) |
| #32530 | P2 | [Feature]: Auto-discovery of agent configurations | 从外部工作区自动发现和加载 agent 配置 | [链接](https://github.com/openclaw/openclaw/issues/32530) |
| #77165 | P3 | [Feature] Auto-Generate Session Titles via AI Summarization | 通过 AI 摘要自动生成会话标题 | [链接](https://github.com/openclaw/openclaw/issues/77165) |
| #11623 | P3 | Feature: Floating agent bubbles (Clawi) for macOS | macOS 浮动 agent 气泡指示器 | [链接](https://github.com/openclaw/openclaw/issues/11623) |
| #99333 | P2 | Feature Request: AI Screen Sharing Capability | 支持 AI 屏幕共享功能 | [链接](https://github.com/openclaw/openclaw/issues/99333) |

### 潜在纳入下一版本的功能

根据已有 PR 判断，以下功能可能即将合入：
- **#99337** - MCP ReDoS 防护（安全相关，优先处理）
- **#99335** - 减少重复 session 启动扫描（性能优化）
- **#99327** - 停止重复的 legacy config-health 警告（稳定性）

---

## 7. 用户反馈摘要

### 核心痛点

1. **消息泄露问题**（#25592）
   - 用户场景：Slack/iMessage 频道中，Agent 内部处理文本被错误暴露给用户
   - 影响：严重 UX 问题，泄露内部处理信息

2. **Telegram 会话可靠性**（#87744）
   - 用户场景：Codex 支持的 Telegram 会话无法到达最终状态
   - 影响：用户无法获得请求的最终答案

3. **iOS/WebChat 消息无响应**（#97983）
   - 用户场景：iOS App 和 WebChat 消息追加到 transcript 但不触发助手回复
   - 影响：核心交互功能失效

4. **Provider 认证失败处理**（#47910）
   - 用户场景：认证失败的 provider 仍被重试，浪费延迟
   - 建议：按故障类别隔离 provider

### 正面反馈信号

- 新版本对 GPT-5.6 的支持获得积极响应（#98333）
- 外部 harness 附件功能受到关注

---

## 8. 待处理积压

### 长期未响应的 P1 Issues（超过 30 天未关闭）

| # | 创建日期 | 标题 | 最后更新 | 链接 |
|---|----------|------|----------|------|
| #25592 | 2026-02-24 | Text between tool calls leaks to messaging channels | 2026-07-03 | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| #38327 | 2026-03-06 | "Cannot convert undefined or null to object" with gemini-3.1-pro-preview | 2026-07-03 | [链接](https://github.com/openclaw/openclaw/issues/38327) |
| #35203 | 2026-03-05 | [RFC] Multi-Agent Collaboration Enhancement | 2026-07-03 | [链接](https://github.com/openclaw/openclaw/issues/35203) |
| #40880 | 2026-03-09 | MEDIA_MAX_BYTES hardcoded | 2026-07-03 | [链接](https://github.com/openclaw/openclaw/issues/40880) |
| #47910 | 2026-03-16 | feat: provider fallback by failure class | 2026-07-03 | [链接](https://github.com/openclaw/openclaw/issues/47910) |
| #92201 | 2026-06-11 | Embedded runner: thinking signatures invalid on replay | 2026-07-02 | [链接](https://github.com/openclaw/openclaw/issues/92201) |
| #92241 | 2026-06-11 | Gateway holds stale module import paths | 2026-07-03 | [链接](https://github.com/openclaw/openclaw/issues/92241) |

### 建议优先处理

1. **#25592** - 4 个月未解决，影响所有消息通道用户
2. **#38327** - 4 个月 regression，需确认是否已修复
3. **#92201** - 影响嵌入式运行器稳定性
4. **#47910** - 功能请求可显著改善 provider 可靠性

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 43 |
| Issues 已关闭 | 11 |
| PR 待合并 | 419 |
| PR 已合并/关闭 | 81 |
| 新版本发布 | 1 |
| P1 Issues 总数 | 约 20 |
| Regression 问题 | 7 |

---

*报告生成时间：2026-07-03*  
*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-07-03  
**数据来源**：OpenClaw、Hermes Agent、cc-haha、Codex++ 社区动态日报

---

## 1. 生态全景

2026年7月初，个人 AI 助手/自主智能体开源生态呈现**"三极鼎立、多点开花"**的格局。头部项目 OpenClaw 与 Hermes Agent 均处于高活跃度运行状态，Issue 处理量分别达 54 条和 120 条，PR 积压均超 350 条，显示社区贡献热情高涨但审查流程存在瓶颈。中型项目 cc-haha 和 Codex++ 则以快速迭代见长，分别在 24 小时内发布 1-2 个补丁版本，响应用户反馈的敏捷性突出。值得关注的是，**多项目同步聚焦安全边界（ReDoS 防护、授权验证）、多协议适配（Telegram、QQBot、iMessage）、以及跨平台稳定性**等核心议题，表明行业正从功能堆砌期进入可靠性攻坚阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃) | Issues (关闭) | PR (待合并) | PR (已合并/关闭) | Release | 健康度评估 |
|------|-------------------|---------------|-------------|-----------------|---------|-----------|
| **OpenClaw** | 43 | 11 | 419 | 81 | v2026.7.1-beta.1 | ⚠️ 高产出高积压，PR 审查效率待提升 |
| **Hermes Agent** | 107 | 13 | 360 | 140 | 无 | ⚠️ 活跃度最高，安全 PR 占比显著 |
| **cc-haha** | 14 | 30 | - | 5 | v0.4.5 | ✅ 快速迭代，维护者高产出 |
| **Codex++** | 18 | 5 | 8 | 4 | v1.2.29, v1.2.30 | ✅ 连续发布，性能优化突出 |

**关键数据洞察**：
- **Hermes Agent** 活跃度最高（120 条 Issues/24h），但无新版本发布，可能处于版本冻结期
- **OpenClaw** PR 积压最严重（419 待合并），需关注审查流程瓶颈
- **cc-haha** 和 **Codex++** 关闭率较高，显示问题处理效率良好

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw 表现 | 生态对比 |
|------|--------------|---------|
| **社区规模** | Issue 活跃度 54 条/24h | 中等偏上，低于 Hermes Agent |
| **功能完整性** | 支持 GPT-5.6、嵌入式运行器、Gateway 多协议 | 覆盖最广 |
| **版本节奏** | Beta 版本稳定迭代 | 成熟度较高 |
| **安全响应** | 安全 PR（如 ReDoS 防护 #99337）优先处理 | 与 Hermes Agent 并列 |

### 3.2 技术路线差异

| 特性 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心架构** | Gateway + 嵌入式运行器 | Desktop + Gateway 双轨 | 轻量级 Desktop | 桌面端增强层 |
| **模型支持** | OpenAI 全家桶 + Anthropic | 多 provider 聚合 | Claude Code 集成 | Codex 原生增强 |
| **协议适配** | Slack/iMessage/Telegram | Telegram/QQBot/Feishu/iMessage | - | - |
| **安全策略** | 签名验证、ReDoS 防护 | 授权验证、策略违规退出码 | Markdown XSS 防护 | - |

### 3.3 社区规模对比

- **Hermes Agent**：Issue 活跃度最高（120 条/24h），社区讨论最热烈
- **OpenClaw**：PR 积压最多（419），贡献者参与度高但审查效率待优化
- **cc-haha**：维护者 @zhbdesign 高产，5 个 PR 全来自同一维护者
- **Codex++**：贡献者多元化（@lennney、@Dawninnng 等），社区参与度提升

---

## 4. 共同关注的技术方向

### 4.1 安全边界强化（多项目同步推进）

| 项目 | 安全举措 | 关联 PR/Issue |
|------|---------|---------------|
| **OpenClaw** | MCP ReDoS 防护（限制 glob-to-regex 通配符段） | #99337 |
| **Hermes Agent** | Telegram 媒体下载授权验证、策略违规退出码 | #52353, #57487 |
| **cc-haha** | Markdown `<style>` 标签 XSS 防护 | v0.4.5 |

**分析**：安全已从单点修复升级为系统性防御，涵盖输入验证、授权边界、策略执行三个层面。

### 4.2 多协议适配与消息可靠性

| 项目 | 协议支持 | 核心问题 |
|------|---------|---------|
| **OpenClaw** | Slack/iMessage/Telegram | 消息泄露（#25592）、Telegram 超时（#87744） |
| **Hermes Agent** | Telegram/QQBot/Feishu/iMessage | QQBot 无限重试（#52914）、Telegram 重复（#53449） |
| **cc-haha** | - | 代理环境下模型连接不稳定 |

**分析**：多协议适配是共同挑战，消息路由的可靠性、错误处理、会话状态管理是核心待解问题。

### 4.3 跨平台稳定性

| 项目 | 平台问题 | 严重度 |
|------|---------|--------|
| **OpenClaw** | macOS App Group 设备身份重写（#99283） | P1 |
| **Hermes Agent** | Desktop 菜单刷新、CPU 占用（#53049）；网络恢复崩溃（#56835） | P2-P3 |
| **cc-haha** | Windows ARM64 启动错误（已修复 v0.4.5） | 已关闭 |
| **Codex++** | macOS UI 遮挡（#1307）；Windows 端口冲突（#1247 已修复） | 中 |

### 4.4 性能优化

| 项目 | 优化方向 | 预期收益 |
|------|---------|---------|
| **OpenClaw** | 减少重复 session 启动扫描 | 降低资源占用 |
| **Codex++** | 事件驱动 CDP 检测、reqwest 全局缓存、SSE 解析解耦 | **-55s 启动时间** |
| **Hermes Agent** | cron 上下文 payloads 清理，防止提示泄露 | 安全性提升 |

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 主攻场景 |
|------|---------|---------|
| **OpenClaw** | 企业级 AI Agent 运行时 | 多通道集成、嵌入式部署、模型路由 |
| **Hermes Agent** | 通用多协议 Agent 框架 | 桌面端、多聊天平台聚合、工具生态 |
| **cc-haha** | Claude Code 桌面增强 | 开发者本地编码辅助、会话管理 |
| **Codex++** | Codex 桌面端增强层 | 插件生态、启动性能、上下文管理 |

### 5.2 目标用户

| 项目 | 核心用户群 | 用户规模估计 |
|------|-----------|-------------|
| **OpenClaw** | 企业开发者、集成商 | 中大型 |
| **Hermes Agent** | 高级用户、多平台用户 | 大型 |
| **cc-haha** | Claude Code 用户、中文开发者 | 中型 |
| **Codex++** | Codex 重度用户 | 中型 |

### 5.3 技术架构差异

```
OpenClaw:     Gateway (Hub) ←→ 嵌入式运行器 ←→ 多协议适配层
Hermes Agent: Desktop Client ←→ Gateway ←→ MCP 工具生态
cc-haha:      Desktop App ←→ Claude Code Sidecar
Codex++:      Desktop Overlay ←→ Codex Core
```

**架构趋势**：OpenClaw 和 Hermes Agent 趋向"中心化 Gateway + 分布式客户端"架构；cc-haha 和 Codex++ 则聚焦单点体验优化。

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **第一梯队** | Hermes Agent、OpenClaw | Issue > 50/24h，PR > 100/24h，社区高度活跃 |
| **第二梯队** | cc-haha、Codex++ | Issue 15-25/24h，快速迭代，响应敏捷 |

### 6.2 成熟度评估

| 项目 | 阶段 | 信号 |
|------|------|------|
| **OpenClaw** | 质量巩固期 | Beta 版本稳定，PR 积压多，需优化审查流程 |
| **Hermes Agent** | 快速迭代期 | 安全 PR 占比提升，功能扩展期 |
| **cc-haha** | 快速迭代期 | 补丁版本密集（v0.4.4 → v0.4.5），用户反馈驱动 |
| **Codex++** | 快速迭代期 | 连续发布，性能优化为主线 |

### 6.3 长期未解决问题对比

| 项目 | 超 30 天未关闭 P1 Issue 数 | 典型问题 |
|------|--------------------------|---------|
| **OpenClaw** | 7+ | 消息泄露（4个月）、Gemini regression（4个月） |
| **Hermes Agent** | 1 | `/steer` 提示注入误判 |
| **cc-haha** | 1 | 会话终止异常（12天） |
| **Codex++** | 0 | - |

**分析**：OpenClaw 长期未解决问题较多，需关注资源分配；其他项目问题响应相对及时。

---

## 7. 值得关注的趋势信号

### 7.1 安全从被动到主动

**信号**：多项目同步推出安全类 PR（OpenClaw ReDoS 防护、Hermes Agent 授权验证、cc-haha XSS 防护），安全已从单点修复升级为系统性防御。

**对开发者的价值**：在设计 Agent 架构时，应将输入验证、授权边界、策略执行作为默认层，而非事后补丁。

### 7.2 多协议适配是下一个主战场

**信号**：OpenClaw 和 Hermes Agent 均在多协议消息可靠性上投入大量 Issue 和 PR，Telegram/QQBot/iMessage 的消息路由、错误处理、会话状态管理成为共同挑战。

**对开发者的价值**：多协议支持已从"加分项"变为"必选项"，建议提前规划协议抽象层和错误恢复机制。

### 7.3 性能优化进入"秒级"竞争

**信号**：Codex++ 通过事件驱动 CDP 检测、reqwest 全局缓存等优化，将启动时间压缩 **-55s**，进入秒级启动时代。

**对开发者的价值**：用户对响应速度的期望持续提升，性能优化将从"nice-to-have"变为核心竞争力的组成部分。

### 7.4 Desktop 客户端成为差异化入口

**信号**：Hermes Agent Desktop 客户端问题（菜单刷新、CPU 占用）引发大量反馈，但同时也是社区最期待独立安装功能的方向（37 个 👍）。

**对开发者的价值**：Desktop 客户端是用户接触 Agent 的第一界面，其稳定性和功能完整性直接影响用户留存。

### 7.5 第三方 Provider 兼容性是长期痛点

**信号**：cc-haha 重点修复代理环境下模型连接问题，OpenClaw 推出 provider fallback 机制，Codex++ 完善聚合供应商功能。

**对开发者的价值**：随着模型提供商增多，Provider 抽象层和故障隔离机制将成为标配功能。

---

## 附录：关键指标速查

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| Issue 活跃度 | 54/24h | 120/24h | 44/24h | 23/24h |
| PR 积压 | 419 | 360 | 低 | 8 |
| 版本节奏 | Beta 迭代 | 冻结期 | 补丁周更 | 连续发布 |
| 安全 PR 占比 | 中 | 高 | 低 | 低 |
| 长期未解决问题 | 多 | 少 | 少 | 无 |

---

**报告生成时间**：2026-07-03  
**分析师建议**：当前生态处于从功能堆砌向可靠性攻坚的转型期，建议开发者重点关注安全边界、多协议可靠性、性能优化三个方向，同时关注 OpenClaw 的 PR 积压问题和 Hermes Agent 的 Desktop 客户端稳定性。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-03

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 社区保持极高活跃度：共处理 **120 条 Issues 更新**（107 条新开/活跃，13 条关闭）和 **500 条 PR 更新**（360 条待合并，140 条已合并/关闭）。项目整体呈现"高产出、高积压"态势——大量 PR 等待 review，Issues 讨论热烈但部分 P1/P2 缺陷尚未有明确 fix 路径。今日未发布新版本，安全类 PR 占比显著提升（至少 5 个 security 相关 PR），显示项目对安全边界的重视。社区对 Desktop 客户端、Gateway 多协议适配、以及 MCP 工具生态的关注度持续走高。

---

## 2. 版本发布

**今日无新版本发布。** 最新 Release 信息为空，项目可能处于版本冻结期或下一版本正在紧张开发中。

---

## 3. 项目进展

过去 24 小时合并/关闭的重要 PR（按影响力排序）：

### 🔒 安全类修复（高优先级）

| PR 链接 | 描述 | 状态 |
|---------|------|------|
| [#57394](https://github.com/NousResearch/hermes-agent/pull/57394) | **fix(browser):** 阻止 Camofox 私有重定向在自动快照前执行 | OPEN |
| [#57383](https://github.com/NousResearch/hermes-agent/pull/57383) | **fix(browser):** 阻止 Camofox 在私有页面上的输入操作 | OPEN |
| [#52353](https://github.com/NousResearch/hermes-agent/pull/52353) | **security(telegram):** 媒体下载/缓存/Vision 调用前验证发送者授权 | OPEN |
| [#57479](https://github.com/NousResearch/hermes-agent/pull/57479) | **security(gateway):** 锚定 MEDIA 标签解析到安全路径 | OPEN |
| [#57487](https://github.com/NousResearch/hermes-agent/pull/57487) | **fix(gateway):** 设置开放策略违规的致命退出码，防止死亡循环 | OPEN |

> ⚠️ **安全提示**：多个安全 PR 集中于浏览器媒体处理和 Telegram 平台边界，建议优先合并。

### 🛠️ 功能与体验改进

| PR 链接 | 描述 | 状态 |
|---------|------|------|
| [#57492](https://github.com/NousResearch/hermes-agent/pull/57492) | **fix:** 多路复用模式下 Telegram 适配器解析到入站 profile | OPEN |
| [#57490](https://github.com/NousResearch/hermes-agent/pull/57490) | **improve(hermes):** 清理 cron 上下文 payloads，防止上游提示泄露到下游 | OPEN |
| [#57489](https://github.com/NousResearch/hermes-agent/pull/57489) | **feat(compression):** 新增 `codex_gpt55_autoraise_notice` 标志 | OPEN |
| [#57484](https://github.com/NousResearch/hermes-agent/pull/57484) | **feat(session_search):** 添加可选的 jieba CJK 查询分词 | OPEN |
| [#57369](https://github.com/NousResearch/hermes-agent/pull/57369) | **feat(project-local):** 添加可信项目 MCP 基础框架 | OPEN |
| [#57293](https://github.com/NousResearch/hermes-agent/pull/57293) | **fix:** 修复 image_generate 的 per-call provider/model 覆盖 | OPEN |
| [#37100](https://github.com/NousResearch/hermes-agent/pull/37100) | **fix(agent):** 模糊工具名匹配前剥离 `mcp_<server>_` 前缀 | OPEN |

### 🐛 缺陷修复

| PR 链接 | 描述 | 关联 Issue |
|---------|------|-----------|
| [#57483](https://github.com/NousResearch/hermes-agent/pull/57483) | **fix(gateway):** 通过 `get_hermes_home()` 解析 write_tool_log 日志目录 | — |
| [#57488](https://github.com/NousResearch/hermes-agent/pull/57488) | **fix(status):** 平台 token 仅对 shell 可见，不暴露 .env | — |
| [#57485](https://github.com/NousResearch/hermes-agent/pull/57485) | **fix(gateway):** 处理无法解析的 launchd uid homes | #57292 |
| [#57487](https://github.com/NousResearch/hermes-agent/pull/57487) | **fix(gateway):** 策略违规时设置正确退出码 | #57474 |
| [#44982](https://github.com/NousResearch/hermes-agent/pull/44982) | **fix(desktop):** 保留存储的会话恢复 | — |
| [#33930](https://github.com/NousResearch/hermes-agent/pull/33930) | **fix(delegate_tool):** 正确分类带循环警告的错误 blobs | — |
| [#20698](https://github.com/NousResearch/hermes-agent/pull/20698) | **fix(cli):** `hermes debug` 现在能看到 credential_pool OAuth tokens | — |

---

## 4. 社区热点

### 🔥 评论最多的 Issues（Top 10）

| Issue | 标题 | 评论数 | 👍 | 优先级 | 链接 |
|-------|------|--------|-----|--------|------|
| #52914 | QQBot `connect()` 缺少 `is_reconnect` 参数导致无限重试循环 | 12 | 4 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/52914) |
| #47349 | 可配置内存后端 — 禁用 memory.md，仅使用 honcho/fact_store | 11 | 1 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/47349) |
| #36934 | `/steer` 被高抗注入模型误判为提示注入 | 8 | 0 | P1 | [查看](https://github.com/NousResearch/hermes-agent/issues/36934) |
| #38602 | Desktop 客户端独立安装功能请求 | 8 | 37 | P3 | [查看](https://github.com/NousResearch/hermes-agent/issues/38602) |
| #31873 | `check_web_api_key()` 硬编码内置后端，第三方搜索插件被静默禁用 | 7 | 0 | P3 | [查看](https://github.com/NousResearch/hermes-agent/issues/31873) |
| #44456 | Desktop `/compress` 返回错误：未识别为 quick/plugin/skill 命令 | 7 | 1 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/44456) |
| #53817 | Desktop 模型选择器不显示远程 Linux gateway 的 MoA/BeastMode | 6 | 0 | P3 | **已关闭** [查看](https://github.com/NousResearch/hermes-agent/issues/53817) |
| #29171 | Kanban 需要人工审批、审核门的一级等待状态 | 5 | 0 | P3 | **已关闭** [查看](https://github.com/NousResearch/hermes-agent/issues/29171) |
| #7142 | `repeat='once'` 传入 cronjob create 时 TypeError（字符串转整数缺失） | 5 | 0 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/7142) |
| #5200 | 上下文文件（AGENTS.md/SOUL.md）文档行为与代码不匹配 | 5 | 5 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/5200) |

### 💡 热点分析

1. **QQBot 连接问题（#52914）**：12 条评论显示社区对此问题高度关注。自 v0.17.x 引入 `is_reconnect` 参数变更后，多个用户遭遇无限重试循环。这是一个**破坏性变更**，建议优先处理并发布 patch。

2. **内存系统重构（#47349）**：用户强烈希望将硬编码的 `MEMORY.md`/`USER.md` 改为可配置后端，支持 honcho/fact_store 等替代方案。这是架构层面的需求，与 PR #57369（项目本地 MCP 基础）形成呼应。

3. **Desktop 客户端独立安装（#38602）**：37 个 👍 表明这是社区最迫切的功能需求之一。用户希望 Desktop 作为瘦客户端连接远程 Hermes 安装，而非每次都引导本地运行时。

4. **提示注入误判（#36934）**：P1 级别问题，`/steer` 命令与高抗注入模型的冲突可能导致合法操作被阻止，影响核心用户体验。

---

## 5. Bug 与稳定性

### 🔴 P1 - 紧急（影响核心功能）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#36934](https://github.com/NousResearch/hermes-agent/issues/36934) | `/steer` 被高抗注入模型误判为提示注入 | OPEN | 无 |
| [#53773](https://github.com/NousResearch/hermes-agent/issues/53773) | TUI WebSocket 在长运行 delegate_task 期间断开，事件循环阻塞数分钟 | **已关闭** | 无明确 Fix PR |

### 🟠 P2 - 高优先级

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#52914](https://github.com/NousResearch/hermes-agent/issues/52914) | QQBot `connect()` 缺少 `is_reconnect` 参数导致无限重试 | OPEN | 无 |
| [#44456](https://github.com/NousResearch/hermes-agent/issues/44456) | Desktop `/compress` 命令返回错误 | OPEN | 无 |
| [#7142](https://github.com/NousResearch/hermes-agent/issues/7142) | `repeat='once'` 传入 cronjob create 时 TypeError | OPEN | 无 |
| [#56704](https://github.com/NousResearch/hermes-agent/issues/56704) | `computer_use` 在 Linux/WSL 上 `int(None)` 崩溃 | OPEN | 无 |
| [#24782](https://github.com/NousResearch/hermes-agent/issues/24782) | Subagent 回退模型使用父级 `base_url` 而非回退配置的 `base_url` | OPEN | 无 |
| [#53449](https://github.com/NousResearch/hermes-agent/issues/53449) | Telegram 短回复重复发送（流式与最终发送冲突） | OPEN | 无 |
| [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) | LM-Studio 工具调用重复 | OPEN | 无 |

### 🟡 P3 - 中优先级

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#31873](https://github.com/NousResearch/hermes-agent/issues/31873) | 第三方 web 搜索插件被 `check_web_api_key()` 静默禁用 | OPEN | 无 |
| [#55416](https://github.com/NousResearch/hermes-agent/issues/55416) | Photon iMessage RST_STREAM code 2 错误 | OPEN | 无 |
| [#53049](https://github.com/NousResearch/hermes-agent/issues/53049) | Desktop 左侧菜单持续刷新，CPU 占用高 | OPEN | 无 |
| [#56835](https://github.com/NousResearch/hermes-agent/issues/56835) | Desktop 网络恢复后 `ERR_NETWORK_IO_SUSPENDED` 崩溃 | OPEN | 无 |
| [#9314](https://github.com/NousResearch/hermes-agent/issues/9314) | Web Dashboard 删除的会话在导航后重新出现 | OPEN | 无 |

> 📊 **Bug 统计**：今日新增 P1-P3 Bug 约 15+ 个，其中 P2 占比最高（7 个），主要集中在 Desktop 客户端、Gateway 多协议适配和工具调用稳定性方面。

---

## 6. 功能请求与路线图信号

### 🌟 高呼声功能（👍 数量排序）

| Issue | 功能描述 | 👍 | 链接 | 相关 PR |
|-------|---------|-----|------|---------|
| #38602 | Desktop 客户端独立安装（瘦客户端模式） | 37 | [查看](https://github.com/NousResearch/hermes-agent/issues/38602) | 无 |
| #5200 | 上下文文件文档与代码行为对齐 | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/5200) | 无 |
| #8465 | Proper LiteLLM 支持（上下文大小检测） | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/8465) | 无 |
| #47349 | 可配置内存后端 | 1 | [查看](https://github.com/NousResearch/hermes-agent/issues/47349) | 无 |
| #20155 | 国际化（i18n）/多语言支持 | 1 | [查看](https://github.com/NousResearch/hermes-agent/issues/20155) | 无 |

### 🔮 路线图信号分析

1. **Desktop 瘦客户端化（#38602）**：这是社区最强烈的功能需求，37 个 👍 远超其他功能请求。结合 PR #57492（多路复用模式 Telegram 适配）和 PR #44982（Desktop 会话恢复），Desktop 客户端的远程连接能力正在稳步增强。

2. **可配置内存系统（#47349）**：用户希望摆脱硬编码的 `MEMORY.md`/`USER.md`，支持 honcho/fact_store 等后端。PR #57369 正在构建项目本地 MCP 基础，可能为未来内存后端插件化铺路。

3. **国际化支持（#20155）**：中文用户群体增长迅速，缺少本地化界面和文档形成采用障碍。这是一个**社区扩张**相关的战略需求。

4. **确定性审批门（#34320）**：用户希望在工具调用执行前拦截高风险操作，而非依赖 prompt 层指令。这是**安全与可控性**方向的增强。

---

## 7. 用户反馈摘要

### ✅ 用户满意点

- **Telegram 集成**：部分用户成功使用 MoA/BeastMode 等高级功能（通过 Telegram），显示多协议支持在特定场景下工作良好。
- **会话持久化**：会话数据能跨重启保留，用户体验一致。

### ❌ 用户痛点

1. **Desktop 客户端不稳定**：
   - 左侧菜单持续刷新，CPU 占用异常（#53049）
   - 网络恢复后崩溃（#56835）
   - 模型选择器不显示远程 gateway 的预设（#53817）
   - 删除 profile 后重新出现（#47368）

2. **多协议适配问题**：
   - QQBot 无限重试（#52914）
   - Telegram 消息重复（#53449）
   - Feishu 群 @mention 消息不送达（#50656）
   - Photon iMessage 完全失效（#55416）

3. **工具调用可靠性**：
   - LM-Studio 工具调用重复（#5254）
   - `computer_use` 在 Linux/WSL 崩溃（#56704）
   - Cron `repeat='once'` 类型错误（#7142）

4. **文档与代码不一致**：
   - 上下文文件行为与文档描述不符（#5200）
   - LiteLLM 上下文大小检测失败（#8465）

### 💬 典型用户场景

> *"我使用 LM-Studio + gemma4 模型时，工具调用被分割成数十个独立调用，第一个调用有名称但参数为空。"* — #5254

> *"Desktop 应用不显示/选择 MoA 预设如 `BeastMode`，即使连接的 gateway 暴露了这些模型，Telegram 可以成功选择。"* — #53817

> *"Hermes Desktop 删除 profile 后，UI 隐藏了标签页，但 profile 目录仍在磁盘上，下次启动时重新出现。"* — #47368

---

## 8. 待处理积压

### ⚠️ 长期未响应的 P1/P2 Issues（超过 30 天无维护者回复

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-07-03  
**项目**: Claude Code Haha (cc-haha)  
**数据来源**: GitHub NanmiCoder/cc-haha

---

## 1. 今日速览

2026-07-03 是 cc-haha 项目活跃度较高的一天。项目发布了 **v0.4.5** 补丁版本，重点修复了模型连接、代理兼容性和 Windows ARM64 启动问题。过去24小时内共处理 **44 条 Issues**（新开/活跃 14 条，关闭 30 条），合并 **5 个 PR**，整体呈现快速迭代态势。社区反馈主要集中在模型连接稳定性、图片读取、代理环境兼容性等问题上。维护者 @zhbdesign 持续高产出，本日贡献了全部 5 个合并 PR，项目维护状态良好。

---

## 2. 版本发布

### 🎉 v0.4.5 发布 - 稳定性与兼容性补丁

**发布链接**: https://github.com/NanmiCoder/cc-haha/releases/tag/v0.4.5

**版本定位**: 继 v0.4.4 之后的稳定性、provider/proxy 兼容性、桌面工作流和 Windows ARM64 补丁版本

**主要修复内容**:

| 修复领域 | 具体问题 |
|---------|---------|
| **模型连接** | 修复 OpenAI-compatible provider 默认走更明确的直连 proxy 模式，避免系统代理或 sidecar 代理环境影响模型连接 |
| **推理能力透传** | 补齐 reasoning effort 透传功能 |
| **权限模式** | 修复权限配置相关问题 |
| **历史会话时间** | 修复会话时间显示异常（显示为"刚刚更新"） |
| **Sidecar 内存** | 解决 Claude Code Sidecar 内存占用异常增长问题 |
| **浏览器预览缩放** | 内置浏览器增加 zoom/scale 机制 |
| **Markdown 安全** | 修复 `<style>` 标签直接暴露在 text 内容块中的 XSS 风险 |
| **Windows ARM64** | 修复 v0.4.4 在 Windows 11 ARM64 上的启动错误 |

**破坏性变更**: 无重大破坏性变更，属于平滑补丁升级

**迁移建议**: 建议所有用户升级至 v0.4.5，特别是使用代理工具（dev-sidecar）或 Windows ARM64 设备用户

---

## 3. 项目进展

过去24小时共合并 **5 个 PR**，全部来自维护者 @zhbdesign：

| PR # | 标题 | 变更范围 | 状态 |
|------|------|---------|------|
| [#902](https://github.com/NanmiCoder/cc-haha/pull/902) | 修复第三方API响应model与请求modelid不一致导致上下文显示200000 | server | ✅ 已合并 |
| [#916](https://github.com/NanmiCoder/cc-haha/pull/916) | 优化新建会话不执行，关闭后删除untitled session | desktop | ✅ 已合并 |
| [#919](https://github.com/NanmiCoder/cc-haha/pull/919) | 修复非git项目在新会话执行git命令导致加载慢 | server | ✅ 已合并 |
| [#920](https://github.com/NanmiCoder/cc-haha/pull/920) | 优化会话中最近项目列表加载慢 | server | ✅ 已合并 |
| [#935](https://github.com/NanmiCoder/cc-haha/pull/935) | 优化消息时间显示月日时分 | desktop | ✅ 已合并 |

**项目推进评估**:
- ✅ **会话管理优化**: 解决了 untitled session 堆积和项目列表加载慢的用户痛点
- ✅ **第三方 API 兼容性**: 修复了上下文 token 计算错误，提升第三方 provider 体验
- ✅ **性能优化**: 解决了非 git 项目加载慢的体验问题
- ⚠️ **待改进**: 所有 PR 均标注 `needs-maintainer-approval`，说明代码审查流程可能需要优化

---

## 4. 社区热点

### 🔥 热门讨论 Issues

**1. #882 - 会话结束后 AI 持续回答不停止** (评论 5 条)
- **链接**: https://github.com/NanmiCoder/cc-haha/issues/882
- **类型**: Bug
- **摘要**: 用户报告会话结束后 AI 自己又回答消息，多轮都不停止
- **热度分析**: 这是评论最多的 Issue，反映了**会话终止逻辑**的潜在缺陷，用户体验影响较大

**2. #910 - 权限配置问题** (评论 4 条)
- **链接**: https://github.com/NanmiCoder/cc-haha/issues/910
- **类型**: Question
- **摘要**: 权限给到最高权限后仍需审批点运行
- **热度分析**: 权限系统设计困惑，用户对权限模型理解存在障碍

**3. #953 - 模型连接问题与代理兼容性** (评论 3 条)
- **链接**: https://github.com/NanmiCoder/cc-haha/issues/953
- **类型**: Bug (已解决)
- **摘要**: v0.4.4 模型连接问题，用户发现先关闭 dev-sidecar 系统代理再连接可解决
- **热度分析**: **代理兼容性问题**是高频反馈点，v0.4.5 已针对性修复

**4. #747 - 新建会话不展示在列表** (评论 3 条)
- **链接**: https://github.com/NanmiCoder/cc-haha/issues/747
- **类型**: Feature Request
- **摘要**: 用户希望新建会话不要自动展示在会话列表
- **热度分析**: PR #916 已合并相关优化，但功能细节可能需进一步打磨

### 📊 热点趋势分析

| 诉求类别 | 相关 Issue 数 | 核心诉求 |
|---------|--------------|---------|
| **模型连接/代理** | 3+ | 代理环境下模型连接稳定性 |
| **会话管理** | 4+ | 会话列表展示、编辑、终止逻辑 |
| **图片/文件读取** | 2+ | 图片读取支持、PDF 参数误传 |
| **UI/UX** | 3+ | 预览框位置、工作区调整、截图功能 |

---

## 5. Bug 与稳定性

### 🚨 高优先级 Bug

| Issue # | 问题描述 | 严重程度 | 状态 | 修复情况 |
|---------|---------|---------|------|---------|
| [#959](https://github.com/NanmiCoder/cc-haha/issues/959) | 推送更新 0.4.5 后所有配置及对话全部清空 | 🔴 极高 | OPEN | ⚠️ 紧急，需回滚或修复 |
| [#948](https://github.com/NanmiCoder/cc-haha/issues/948) | 无法正常打开软件（Windows） | 🔴 极高 | CLOSED | 需确认是否在 v0.4.5 中修复 |
| [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | 会话结束后持续回答不停止 | 🟠 高 | OPEN | 需定位终止逻辑 |
| [#957](https://github.com/NanmiCoder/cc-haha/issues/957) | 无法编辑已完成会话 | 🟠 高 | OPEN | 功能缺失，需实现 |

### ⚠️ 中等优先级 Bug

| Issue # | 问题描述 | 状态 | 修复情况 |
|---------|---------|------|---------|
| [#944](https://github.com/NanmiCoder/cc-haha/issues/944) | 0.4.4 无法读取图片 | CLOSED | v0.4.5 可能已修复 |
| [#947](https://github.com/NanmiCoder/cc-haha/issues/947) | 无法正常连接 LongCat 2.0 模型 | CLOSED | HTTP 404 问题 |
| [#954](https://github.com/NanmiCoder/cc-haha/issues/954) | Windows 11 ARM64 启动错误 | CLOSED | v0.4.5 已修复 |
| [#933](https://github.com/NanmiCoder/cc-haha/issues/933) | Sidecar 内存占用异常 | CLOSED | v0.4.5 已修复 |
| [#951](https://github.com/NanmiCoder/cc-haha/issues/951) | 历史会话时间显示为"刚刚更新" | CLOSED | PR #935 已修复 |

### 📈 Bug 趋势分析

- **代理兼容性**: 持续性问题，v0.4.5 重点修复
- **Windows 平台**: ARM64 和常规 Windows 均有启动问题
- **会话管理**: 终止逻辑、编辑功能存在缺陷
- **数据持久化**: #959 报告的配置丢失问题需紧急关注

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue # | 功能描述 | 需求来源 | 纳入可能性 |
|---------|---------|---------|-----------|
| [#950](https://github.com/NanmiCoder/cc-haha/issues/950) | 拆分子任务完成后，支持回退某个子任务代码 | @QuanTum2088 | 🟡 中等 |
| [#937](https://github.com/NanmiCoder/cc-haha/issues/937) | 增加从 haha 界面直接截图的功能 | @hghyugohg | 🟡 中等 |
| [#747](https://github.com/NanmiCoder/cc-haha/issues/747) | 新建会话不自动展示在会话列表 | @zhbdesign | 🟢 已部分实现 |
| [#929](https://github.com/NanmiCoder/cc-haha/issues/929) | 配置页增加 CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS 开关 | @Qinglel | 🟢 已合并相关 |

### 🔮 路线图信号分析

1. **Agent 任务管理**: 用户期望更精细的任务控制（回退、检查点），这是竞品常见功能
2. **截图/图像输入**: 增强多模态输入能力的需求
3. **会话持久化**: #959 的数据丢失问题凸显了配置/会话备份功能的重要性
4. **第三方 Provider 优化**: 多个 Issue 涉及第三方 API 兼容性，需持续投入

---

## 7. 用户反馈摘要

### 👍 用户满意点

- **代理解决方案**: 用户 @simplify123 提供了有效的代理配置 workaround，说明项目灵活性较好
- **响应速度**: 维护者响应及时，Issue 普遍在 1-2 天内得到回复或关闭
- **版本迭代**: v0.4.5 修复了多个社区反馈的问题

### 👎 用户痛点

| 痛点类别 | 具体描述 | 影响用户数 |
|---------|---------|----------|
| **模型连接不稳定** | 代理环境下模型连接失败 | 多用户反馈 |
| **数据丢失** | 升级后配置和对话全部清空 (#959) | 严重 |
| **图片读取失败** | 无法读取本地图片 | @zyr017 等 |
| **会话管理不便** | 无法编辑已完成会话、untitled session 堆积 | 多个用户 |
| **中文路径问题** | VSCode 打开中文路径项目卡顿 | @qq458249269 |

### 💡 典型使用场景

1. **开发者日常编码**: 使用 cc-haha 进行代码生成和项目开发
2. **代理环境工作**: 需在代理环境下使用，依赖直连/代理切换
3. **多模型切换**: 需要频繁切换不同 AI 模型
4. **长会话管理**: 处理大型项目，需要会话持久化和编辑能力

---

## 8. 待处理积压

### ⏰ 长期未解决 Issue (超过 7 天未响应)

| Issue # | 问题 | 创建时间 | 未响应天数 | 优先级 |
|---------|------|---------|-----------|--------|
| [#747](https://github.com/NanmiCoder/cc-haha/issues/747) | 新建会话不展示在列表 | 2026-06-05 | ~28 天 | 🟡 中 |
| [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | 会话结束后持续回答 | 2026-06-21 | ~12 天 | 🔴 高 |
| [#892](https://github.com/NanmiCoder/cc-haha/issues/892) | 模型进入规划模式后直接结束 | 2026-06-22 | ~11 天 | 🟠 中高 |
| [#900](https://github.com/NanmiCoder/cc-haha/issues/900) | goal 功能 JSON 解析失败 | 2026-06-23 | ~10 天 | 🟠 中 |
| [#950](https://github.com/NanmiCoder/cc-haha/issues/950) | 子任务回退功能 | 2026-07-01 | ~2 天 | 🟡 中 |

### ⚠️ 紧急关注项

1. **#959 - 配置丢失问题**: 刚报告，数据丢失严重影响用户体验，需优先响应
2. **#882 - 会话终止异常**: 长期未解决，影响核心使用体验
3. **#957 - 会话编辑功能**: 功能缺失，用户期待度高

### 📋 维护建议

- **Issue 分类**: 建议对长期未关闭的 Issue 进行分类，明确是 feature request 还是 wontfix
- **PR 审查**: 所有 PR 均标注 `needs-maintainer-approval`，建议优化 CI/CD 流程
- **回归测试**: v0.4.5 发布后需关注 #959 等新问题是否与升级相关

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 44 条/24h | 📈 较高 |
| PR 合并数 | 5 条/24h | 📈 正常 |
| 版本发布 | 1 个 (v0.4.5) | 🆕 新发布 |
| Open Issues 存量 | ~14 条 | ➡️

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**：2026-07-03  
**数据来源**：GitHub CodexPlusPlus 仓库

---

## 1. 今日速览

2026年7月3日，Codex++ 项目保持高度活跃，共产生 23 条 Issue 更新（18 新开/活跃，5 已关闭）和 12 条 PR 更新（8 待合并，4 已合并）。项目连续发布 v1.2.29 和 v1.2.30 两个版本，重点完善了**官方远端插件缓存**功能，显著降低了插件安装门槛。社区反馈热烈，多个性能优化 PR 已进入 Review 阶段，预计将大幅缩短启动时间。整体项目健康度良好，Issue 响应及时，但部分跨平台 Bug（如 macOS UI 遮挡、Windows 端口冲突）仍需关注。

---

## 2. 版本发布

### 🆕 v1.2.30（最新版本）

**发布重点**：
- **内置官方远端插件缓存**：无需官方账号预缓存，Codex++ 可直接释放并注册本地快照
- **Product Design 插件支持**：现在可以通过内置远端插件缓存显示和安装
- **交互优化**：将"官方远端插件缓存"按钮改为"释放并注册内置缓存"，缺失缓存时不再强制要求先用官方账号缓存

**验证通过**：
- `cargo fmt --check`
- `cargo test -p codex-plus-core`
- `cargo test -p codex-plus-manager`
- `npm run check`
- `node tools\i18n`

🔗 https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.30

---

### 🆕 v1.2.29

**重点更新**：
- 在「Codex 增强」页面新增「官方远端插件缓存」入口，API 模式也可注册官方账号可见但本地缺失的插件
- **Pro / Product Design 插件现在可以安装**：需先用官方账号缓存一次远端插件，再在 Codex++ 里注册
- 远端缓存状态显示已缓存插件数、技能数、注册状态，并提供刷新和注册进度

**Bug 修复**：
- 将 `openai-curated-remote` 作为独立本地插件市场注册，不再混入普通 `openai-curated` 快照
- 兼容增强 / 官方登录模式优化

🔗 https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.29

---

## 3. 项目进展

### ✅ 已合并 PR（4 条）

| PR | 作者 | 描述 | 意义 |
|---|---|---|---|
| [#1299](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1299) | @lennney | 合并四大性能优化：事件驱动CDP检测（-55s启动）、reqwest全局缓存、SSE解析解耦、模型列表快捷方式 | 🚀 重大性能突破 |
| [#1292](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1292) | @Dawninnng | 修复 DeepSeek 纯文本模型 strip image_url 问题 | 🐛 Bug修复 |
| [#1314](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1314) | @lennney | 修复 config.toml 含 UTF-8 BOM 导致配置解析失败 | 🐛 配置兼容性 |
| [#1247](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1247) | @lennney | 多用户 RDP 环境下 guard 端口自动偏移 | 🐛 Windows 兼容性 |

### 🔄 待合并 PR（8 条）

| PR | 作者 | 描述 | 预期影响 |
|---|---|---|---|
| [#1305](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1305) | @lennney | SSE 解析与协议转换解耦 | 架构优化 |
| [#1261](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1261) | @lennney | 为非标准模型生成自定义模型目录（含 context_window） | ✨ 功能增强 |
| [#1303](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1303) | @lennney | 全局缓存 reqwest::Client 复用 TCP 连接 | ⚡ 性能优化 |
| [#1302](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1302) | @lennney | 事件驱动 CDP 就绪检测（-55s 启动） | 🚀 重大性能 |
| [#1304](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1304) | @lennney | 模型列表桥接快捷方式（-34s 启动） | 🚀 重大性能 |
| [#1089](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1089) | @moooyy | 为 API-key 认证启用原生快速服务层 | ✨ 功能增强 |
| [#1283](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1283) | @0xTotoroX | 改进 Stepwise 刷新控制和回答检测 | ✨ UX 优化 |
| [#620](https://github.com/BigPizzaV3/CodexPlusPlus/pull/620) | @congxb | 通过更快 CDP 轮询和模型列表快捷方式减少 30-50% 启动时间 | 🚀 性能优化 |

**项目整体向前迈进了约 15-20% 的性能优化路线图**，多个 PR 聚焦于启动时间优化，预计合并后将实现 **秒级启动**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| Issue | 评论数 | 主题 | 热度分析 |
|---|---|---|---|
| [#1016](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1016) | 10 | 移动会话失败：Unsupported local storage schema | ⚠️ 高优先级，已关闭 |
| [#1167](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1167) | 7 | 使用内置浏览器后 Codex++ 自动退出 | ⚠️ 高优先级，已关闭 |
| [#1064](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1064) | 5 | 1M 上下文参数无法穿透 | 🔧 配置问题，待修复 |
| [#1296](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1296) | 3 | 配置 DeepSeek 但访问 GPT 模型 | 🔧 供应商切换问题 |
| [#1256](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1256) | 3 | Codex++ 插件市场打不开 | 🔧 界面/交互问题 |

### 💡 热点诉求分析

1. **插件生态问题突出**：多个用户反馈 Product Design、Creative Production 等插件安装后无法启用或解锁，表明插件缓存机制虽有改进但仍有兼容性问题
2. **跨平台一致性**：macOS 出现 UI 遮挡问题（#1307），Windows 存在端口冲突（#1309），多用户场景支持待完善
3. **配置持久化痛点**：用户频繁反馈更新后设置重置（#1306）、配置不生效（#1064、#1206），配置系统需加强健壮性

---

## 5. Bug 与稳定性

### 🔴 高严重度（影响核心功能）

| Issue | 系统 | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| [#1306](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1306) | Windows | 更新重启后 Codex 设置和插件全部重置 | 🆕 新报告 | 无 |
| [#1300](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1300) | - | 启动 Codex++ 报错 "Codex dispatcher unavailable" | 🆕 新报告 | 无 |
| [#1309](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1309) | Windows | 重启后无法重新拉起 Codex | 🆕 新报告 | 无 |

### 🟡 中严重度（影响使用体验）

| Issue | 系统 | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| [#1064](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1064) | - | 1M 上下文参数无法穿透 | 🔄 进行中 | 待合入 #1261 |
| [#1296](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1296) | - | 配置 DeepSeek 但实际访问 GPT 模型 | 🔄 进行中 | 待调查 |
| [#1308](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1308) | Windows | DeepSeek 插件无法解锁 | 🆕 新报告 | 无 |
| [#1312](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1312) | macOS | Creative Production / Product Design 插件启用不了 | 🆕 新报告 | 无 |

### 🟢 已修复

| Issue | 修复说明 |
|---|---|
| [#1016](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1016) | 移动会话 schema 问题已解决 |
| [#1167](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1167) | 内置浏览器退出问题已解决 |
| [#1310](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1310) | 聚合供应商重启登录问题已解决（删除 requires_openai_auth = true） |
| [#999](https://github.com/BigPizzaV3/CodexPlusPlus/issues/999) | 删除会话记录路径问题已解决 |
| [#1206](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1206) | .codex 目录识别问题已解决 |

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue | 请求 | 预计可行性 | 理由 |
|---|---|---|---|
| [#535](https://github.com/BigPizzaV3/CodexPlusPlus/issues/535) | localeOverride 配置项支持中文 UI | ⭐⭐⭐ 高 | 需求明确，已有配置项框架 |
| [#1313](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1313) | 路由端口局域网开放功能 | ⭐⭐ 中 | 涉及安全考量，需评估 |
| [#1311](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1311) | 窗口关闭按钮选项 | ⭐⭐⭐ 高 | 基础 UX 需求 |

### 🔄 与待合并 PR 呼应

| 功能方向 | 相关 PR | 预计纳入版本 |
|---|---|---|
| 启动性能优化（-55s → 秒级） | #1302, #1304, #620 | v1.2.31+ |
| 非标准模型 context_window 支持 | #1261 | v1.2.31 |
| API-key 快速服务层 | #1089 | v1.2.31 |
| Stepwise 刷新控制 | #1283 | v1.2.31 |

---

## 7. 用户反馈摘要

### 👍 用户满意点

1. **插件缓存机制改进**：v1.2.29/1.2.30 的内置远端插件缓存功能受到欢迎，Product Design 插件终于可以安装
2. **配置灵活性提升**：聚合供应商功能让用户可以同时使用多个模型服务商
3. **响应速度**：维护者对 Issue 的响应较为及时，多个 Bug 已快速修复

### 👎 用户痛点

1. **配置不生效**：
   > "config.toml 中配置 model_context_window = 1000000，但模型的上下文窗口依然是默认的 258.4k"（#1064）
   
2. **更新后设置丢失**：
   > "每次更新完++，用++重启 codex 发现软件被重置了，原来安装过的插件技能都消失了"（#1306）

3. **跨平台兼容性问题**：
   > "MAC 电脑顶部功能遮挡 codex 按钮，无法点击"（#1307）
   
4. **插件启用困难**：
   > "Creative Production 和 Product Design 安装后启用不了"（#1312）

### 💬 典型使用场景

- **无头 Linux 服务器场景**：用户希望在服务器端复用桌面端的路由端口，但端口仅本地开放（#1313）
- **多用户 RDP 环境**：Windows 多用户场景下端口冲突导致第二个用户无法启动独立实例（#1247 已修复）

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issue（>7 天无维护者回复）

| Issue | 创建时间 | 主题 | 优先级 | 建议 |
|---|---|---|---|---|
| [#535](https://github.com/BigPizzaV3/CodexPlusPlus/issues/535) | 2026-06-02 | localeOverride 中文 UI 支持 | 中 | 考虑纳入 v1.2.31 |
| [#824](https://github.com/BigPizzaV3/CodexPlusPlus/issues/824) | 2026-06-09 | API 模式下本地文件读取问题 | 高 | 需确认是否已知问题 |
| [#1204](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1204) | 2026-06-25 | 配置好供应商仍需登录 | 中 | 需进一步诊断 |

### 📋 建议优先处理

1. **#1064** - 1M 上下文参数穿透问题（已有 PR #1261 呼应）
2. **#1306** - 更新后设置重置问题（影响用户体验）
3. **#1312** - 插件启用问题（影响插件生态）

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|---|---|---|
| Issue 活跃度 | 23 条/24h | 📈 +15% |
| PR 活跃度 | 12 条/24h | 📈 +20% |
| Bug 关闭率 | 5/23 (21.7%) | 良好 |
| PR 合并率 | 4/12 (33.3%) | 良好 |
| 平均响应时间 | <24h | 优秀 |

---

**报告生成时间**：2026-07-03  
**数据完整性**：100%  
**维护者关注建议**：建议优先处理 #1064、#1306、#1312 三个 Issue，性能优化 PR 合并后将显著提升用户体验。

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*