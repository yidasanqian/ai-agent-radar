# OpenClaw 生态日报 2026-07-05

> Issues: 295 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-05 03:25 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-05  
**数据区间：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **295 条 Issues 更新**（268 新开/活跃，27 已关闭）和 **500 条 PR 更新**（336 待合并，164 已合并/关闭）。项目整体处于快速迭代状态，代码贡献量显著，未发布新版本。今日社区讨论聚焦于**会话状态管理**、**消息传递可靠性**和**跨平台终端功能**，多个高优先级 Bug 已出现修复 PR，文档重构工作也在积极推进中。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 3.1 今日合并/关闭的 PRs

| PR 编号 | 标题 | 状态 | 贡献者 | 领域 |
|---------|------|------|--------|------|
| [#100163](https://github.com/openclaw/openclaw/pull/100163) | fix(ui): align activity error badges | ✅ CLOSED | @steipete-oai | Web UI |
| [#100152](https://github.com/openclaw/openclaw/pull/100152) | feat: mobile operator terminal (Android) | ✅ CLOSED | @steipete | Android |
| [#100150](https://github.com/openclaw/openclaw/pull/100150) | feat: mobile operator terminal (iOS) | ✅ CLOSED | @steipete | iOS |
| [#100160](https://github.com/openclaw/openclaw/pull/100160) | fix: preserve Codex transcript ownership | ✅ CLOSED | @steipete-oai | Codex |

### 3.2 重要待合并 PRs

| PR 编号 | 标题 | 优先级 | 风险 | 状态 |
|---------|------|--------|------|------|
| [#100149](https://github.com/openclaw/openclaw/pull/100149) | fix: prevent Anthropic thinking-signature replay causing permanent session bricks | P1 | compatibility/auth-provider/message-delivery | 📣 needs proof |
| [#97932](https://github.com/openclaw/openclaw/pull/97932) | Fix subagent announce restart recovery cascade | P1 | session-state/security | 👀 ready for maintainer look |
| [#100156](https://github.com/openclaw/openclaw/pull/100156) | fix(codex): keep message-tool replies final-only | P1 | - | 📣 needs proof |
| [#89569](https://github.com/openclaw/openclaw/pull/89569) | feat(channels): add pre-auth access requests and grouped DM allowlists | P2 | compatibility/message-delivery/security-boundary | ⏳ waiting on author |
| [#99059](https://github.com/openclaw/openclaw/pull/99059) | refactor: extract reusable AI runtime package | P2 | automation/compatibility | ⏳ waiting on author |
| [#100142](https://github.com/openclaw/openclaw/pull/100142) | docs: rewrite published docs grounded in current source | P2 | security-boundary | ⏳ waiting on author |

**进展摘要：** 今日重点推进了移动端终端功能（iOS/Android），解决了 Codex 集成中的消息处理和转录所有权问题。多个 P1 级 Bug 修复 PR 已提交待验证，包括影响会话稳定性的 thinking-signature 回放问题和子代理通知恢复级联问题。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 优先级 | 标签 |
|------------|------|--------|--------|------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | feat: Tiered bootstrap file loading for progressive context control | 17 | P2 | session-state |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | [Bug]: Signal daemon stop() race condition on SIGUSR1 restart | 17 | P1 | crash-loop/message-loss |
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard compaction ignores compaction.model config | 14 | P2 | session-state/auth-provider |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI-backed helper paths still bypass CLI dispatch | 13 | P1 | security/auth-provider |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | [Bug]: ${XDG_CONFIG_HOME} is not process when installing a skill | 13 | P2 | data-loss |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | [Feature Request] Post-subagent completion extension hook | 12 | P2 | session-state |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | [Bug]: 看起来有人把工作路径hardcode进代码里 | 12 | P2 | session-state |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | [Feature] Pre-response enforcement hooks (hard gates) | 12 | P2 | security |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic path: replaying thinking blocks bricks sessions | 11 | P1 | message-loss |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | feat: Force reply to originating channel | 11 | P1 | message-loss |

### 4.2 热点分析

**核心诉求方向：**

1. **上下文管理优化**（#22438）：用户强烈要求分层加载引导文件，以节省 LLM token 消耗，特别是大型工作区场景。
2. **信号处理稳定性**（#22676）：Signal 守护进程在 SIGUSR1 重启时存在竞态条件，导致进程孤立和 HTTP 端口冲突。
3. **安全与权限边界**（#57326, #13583）：CLI 后端路径绕过和强制执行钩子的需求，反映了高安全标准用户（如金融/量化领域）的硬性要求。
4. **消息可靠性**（#94228, #54531）：Anthropic thinking 块回放导致会话永久损坏，以及消息渠道回复失败问题。

---

## 5. Bug 与稳定性

### 5.1 严重 Bug（按优先级排列）

| Issue 编号 | 标题 | 严重程度 | 已有 Fix PR | 状态 |
|------------|------|----------|-------------|------|
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Anthropic thinking-signature replay bricks sessions | P1 | [#100149](https://github.com/openclaw/openclaw/pull/100149) | 📣 needs proof |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon race condition — orphaned processes | P1 | ❌ | 需关注 |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI-backed helper paths bypass dispatch | P1 | ❌ | 需关注 |
| [#99594](https://github.com/openclaw/openclaw/issues/99594) | Cloud instance shows "out of credits" with $109 balance | P0 | ❌ | 需关注 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway memory leak: 389MB → 14.7GB over 4 days | P1 | ❌ | 需关注 |
| [#55694](https://github.com/openclaw/openclaw/issues/55694) | Agent 陷入工具调用失败死循环 | P1 | ❌ | 需关注 |

### 5.2 回归问题

| Issue 编号 | 标题 | 版本 | 影响 |
|------------|------|------|------|
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes strips operator scopes unconditionally | 2026.3.13 | auth-provider |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs are ahead of release | 2026.3.13 | 文档不一致 |
| [#53599](https://github.com/openclaw/openclaw/issues/53599) | Chrome extension browser relay removed (regression) | 2026.3.22 | 跨机器支持 |
| [#54634](https://github.com/openclaw/openclaw/issues/54634) | Update 2026.3.24 silently drops config when HOME changes | 2026.3.24 | 配置丢失 |

**稳定性警示：** 内存泄漏问题（#54155）经过 4 天运行可导致 14.7GB 内存占用，建议紧急处理。多个回归问题影响生产环境稳定性。

---

## 6. 功能请求与路线图信号

### 6.1 高价值功能请求

| Issue 编号 | 标题 | 优先级 | 相关 PR | 纳入可能性 |
|------------|------|--------|---------|------------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | P2 | - | 中高 |
| [#22358](https://github.com/openclaw/openclaw/issues/22358) | Post-subagent completion extension hook | P2 | - | 中 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks (hard gates) | P2 | - | 中 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem Sandboxing Config | P2 | - | 中 |
| [#89569](https://github.com/openclaw/openclaw/pull/89569) | Pre-auth access requests and grouped DM allowlists | P2 | 已提交 | 高 |
| [#58398](https://github.com/openclaw/openclaw/issues/58398) | Adopt Claude Code's multi-layer compaction architecture | P2 | - | 中 |

### 6.2 路线图信号

社区对以下方向表现出强烈兴趣：
- **安全强化**：强制执行钩子、文件系统沙箱、策略边界
- **扩展性**：子代理生命周期钩子、多层压缩架构
- **多渠道可靠性**：预认证访问请求、强制回复到原渠道

---

## 7. 用户反馈摘要

### 7.1 核心痛点

| 场景 | 反馈 | 相关 Issue |
|------|------|------------|
| **大型工作区** | Bootstrap 文件消耗大量 token，希望分层加载 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| **Signal 集成** | 重启时进程孤立，消息丢失 | [#22676](https://github.com/openclaw/openclaw/issues/22676) |
| **长对话** | 工具参数在 15+ 轮后静默丢失 | [#53408](https://github.com/openclaw/openclaw/issues/53408) |
| **Cron 任务** | 工具失败时产生幻觉输出而非干净失败 | [#49876](https://github.com/openclaw/openclaw/issues/49876) |
| **内存管理** | 网关 4 天内存增长 38 倍 | [#54155](https://github.com/openclaw/openclaw/issues/54155) |
| **文档质量** | 文档与实际代码不一致 | [#48920](https://github.com/openclaw/openclaw/issues/48920) |

### 7.2 积极反馈

- 移动端终端功能（iOS/Android）获得好评，解决了移动运维场景
- Slack per-channel replyToMode 功能满足差异化需求（[#82253](https://github.com/openclaw/openclaw/pull/82253)）
- Discord 消息工具 schema 修复提升了可靠性（[#82972](https://github.com/openclaw/openclaw/pull/82972)）

---

## 8. 待处理积压

### 8.1 长期未响应的 P1 Issues（超过 30 天无更新）

| Issue 编号 | 标题 | 创建日期 | 最后更新 | 状态 |
|------------|------|----------|----------|------|
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon race condition | 2026-02-21 | 2026-07-05 | 需维护者关注 |
| [#57326](https://github.com/openclaw/openclaw/issues/57326) | CLI-backed helper paths bypass | 2026-03-29 | 2026-07-05 | 需维护者关注 |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | Force reply to channel | 2026-03-25 | 2026-07-05 | 需维护者关注 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway memory leak | 2026-03-25 | 2026-07-04 | 需维护者关注 |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec tool parameters dropped | 2026-03-24 | 2026-07-05 | 需维护者关注 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | Cron sessions hallucinate output | 2026-03-18 | 2026-07-04 | 需维护者关注 |

### 8.2 建议优先处理

1. **#94228** — Anthropic thinking-signature 回放问题已有 PR [#100149](https://github.com/openclaw/openclaw/pull/100149)，需尽快验证合并
2. **#54155** — 内存泄漏为稳定性重大隐患，建议分配专门资源
3. **#99594** — 云实例余额显示错误影响用户体验（P0 级）
4. **#22676** — Signal 集成核心问题，长期未解决

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 活跃/新开 | 268 |
| Issues 已关闭 | 27 |
| PRs 待合并 | 336 |
| PRs 已合并/关闭 | 164 |
| 新版本发布 | 0 |
| 评论最多的 Issue | #22438, #22676 (各 17 条) |
| P0/P1 Issues 总数 | 约 15+ |

---

*报告生成时间：2026-07-05 | 数据来源：GitHub OpenClaw Repository*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-07-05  
**数据来源**：GitHub 各项目仓库动态

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"一超多强、梯度分化"**的格局。头部项目（OpenClaw、Hermes Agent）保持极高活跃度，单日 PR 吞吐量达 500 条量级，社区贡献动能充沛；腰部项目（Codex++）处于功能迭代与稳定性拉锯期；尾部项目（cc-haha）则聚焦缺陷修复，活跃度相对有限。值得关注的是，**跨平台消息集成**（Rocket Chat、XMPP/Jabber）、**会话状态可靠性**和**安全边界加固**成为多个项目共同的技术焦点，表明行业正从功能堆砌期进入可靠性深耕期。

---

## 2. 各项目活跃度对比

| 项目 | 新增 Issues | 活跃 Issues | 待合并 PRs | 已合并 PRs | 版本发布 | 健康度 | 核心状态 |
|------|-------------|-------------|------------|------------|----------|--------|----------|
| **OpenClaw** | 268 | 295 (含27关闭) | 336 | 164 | 0 | ⭐⭐⭐⭐⭐ | 快速迭代期 |
| **Hermes Agent** | 120 | 137 (含17关闭) | 387 | 113 | 0 | ⭐⭐⭐⭐ (4/5) | 快速迭代期 |
| **cc-haha** | 4 | 4 | 1 | 0 | 0 | ⭐⭐ (2/5) | Bug 修复期 |
| **Codex++** | 14 | 14 | 1 | 1 | v1.2.32 | ⭐⭐⭐ (3/5) | 功能迭代期 |

**关键观察**：
- OpenClaw 与 Hermes Agent 贡献量相近，但 OpenClaw 的 PR 合并效率（164 vs 113）略优
- cc-haha 的 Issue 响应率和 PR 合并率均为 0%，存在社区运营风险
- Codex++ 是唯一发布新版本的项目，但 14 条 Issue 中 64% 涉及启动/重启问题，暗示 v1.2.x 存在回归风险

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw 表现 | 生态对比 |
|------|---------------|----------|
| **社区规模** | 单日 295 条 Issues 更新，500 条 PR 更新 | 远超 cc-haha（4条），与 Hermes Agent（137条）并驾齐驱 |
| **技术深度** | 覆盖会话状态管理、消息可靠性、跨平台终端、安全边界 | 议题覆盖面最广，涵盖 P0-P2 全优先级 |
| **PR 吞吐量** | 164 条已合并/关闭 | 高于 Hermes Agent（113条），效率领先 |
| **Bug 响应** | 多个 P1 Bug 已有 Fix PR（#100149, #97932, #100156） | 主动防御姿态，而非被动救火 |

### 3.2 技术路线差异

| 方向 | OpenClaw | Hermes Agent | Codex++ |
|------|----------|-------------|---------|
| **核心定位** | 全功能自主智能体框架 | 多平台消息中枢 + AI 运行时 | Codex 前端增强工具 |
| **平台策略** | 移动端（iOS/Android）终端自研 | 插件化平台集成（XMPP/Jabber/Discord） | 依赖 Codex 底层能力 |
| **安全架构** | 强调 auth-provider、security-boundary | 强调 symlink 校验、terminal 绕过保护 | 聚焦 UI 层安全 |
| **会话管理** | 深度自研（thinking-signature、subagent 恢复） | 依赖 session 计数同步 | 不涉及会话层 |

### 3.3 社区规模量化对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| 单日活跃 Issue 量 | 295 | 137 | 4 | 14 |
| 单日 PR 吞吐量 | 500 | 500 | 1 | 2 |
| P0/P1 Issues 总数 | ~15+ | ~10 | 2 | 3 |
| 长期积压 Issue (>30天) | 6 | 4 | 0 | 2 |

**结论**：OpenClaw 是生态中**综合技术深度最强、社区规模最大**的项目，与 Hermes Agent 形成"双核"格局，但 OpenClaw 在 Bug 修复响应速度和 PR 合并效率上更具优势。

---

## 4. 共同关注的技术方向

以下需求在多个项目中同步涌现，反映行业共识性技术方向：

### 4.1 会话状态可靠性

| 项目 | 具体诉求 | 相关 Issue/PR |
|------|----------|---------------|
| **OpenClaw** | Anthropic thinking-signature 回放导致会话永久损坏 | #94228, #100149 |
| **OpenClaw** | 子代理通知恢复级联问题 | #97932 |
| **Hermes Agent** | `/undo` 操作后 session 计数不同步 | #52641 |
| **Hermes Agent** | Qwen3.6/vLLM 推理链在回放时被剥离 | #56004 |
| **cc-haha** | 更新后配置及对话全部清空 | #959 |

**技术本质**：多轮对话上下文完整性保障，包括 thinking 块、工具调用状态、session 计数的一致性维护。

### 4.2 消息传递可靠性

| 项目 | 具体诉求 | 相关 Issue/PR |
|------|----------|---------------|
| **OpenClaw** | 强制回复到原渠道 | #54531 |
| **OpenClaw** | 预认证访问请求和分组 DM 白名单 | #89569 |
| **Hermes Agent** | Telegram 文件附件被静默丢弃 | #57928 |
| **Hermes Agent** | QQBot infinite retry loop | #52914 |

**技术本质**：跨平台消息路由的可靠性保障，包括文件传输、回复溯源、错误处理。

### 4.3 安全边界加固

| 项目 | 具体诉求 | 相关 Issue/PR |
|------|----------|---------------|
| **OpenClaw** | CLI 后端路径绕过 dispatch | #57326 |
| **OpenClaw** | Pre-response enforcement hooks (hard gates) | #13583 |
| **Hermes Agent** | symlink 路径绕过敏感文件保护 | #58628 |
| **Hermes Agent** | terminal 工具绕过受保护文件 | #58631 |
| **Hermes Agent** | SendGrid token 掩码不完整 | #58627 |

**技术本质**：文件系统访问控制、命令执行权限边界、敏感信息脱敏的纵深防御。

### 4.4 平台集成扩展

| 项目 | 具体诉求 | 相关 Issue/PR |
|------|----------|---------------|
| **Hermes Agent** | Rocket Chat 支持 | #3725 (12 👍) |
| **Hermes Agent** | XMPP/Jabber 平台插件 | #17469 |
| **OpenClaw** | 移动端终端（iOS/Android） | #100150, #100152 |
| **Codex++** | MCP Server tools 支持 | #275 (42天未解决) |

**技术本质**：从单一平台向全渠道消息中枢演进，满足企业级多平台部署需求。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| **核心能力** | 自主智能体运行时 | 多平台消息路由 | 本地 AI 对话 UI | Codex 前端增强 |
| **会话管理** | 深度自研，支持 thinking 块 | 基础 session 管理 | 不涉及 | 不涉及 |
| **平台集成** | 移动端（iOS/Android）自研 | 插件化（XMPP/Discord/WhatsApp） | 不涉及 | 依赖 Codex |
| **安全特性** | auth-provider、security-boundary | symlink 校验、terminal 保护 | 不涉及 | 不涉及 |
| **扩展机制** | 子代理生命周期钩子 | MCP 工具注入 | 不涉及 | 插件市场 |

### 5.2 目标用户

| 项目 | 核心用户画像 |
|------|-------------|
| **OpenClaw** | 企业级 AI 助手部署者、高安全要求用户（金融/量化）、移动运维场景 |
| **Hermes Agent** | 多平台消息管理员、自托管 AI 助手爱好者、RAG 知识库需求者 |
| **cc-haha** | 本地 AI 对话轻量用户、注重隐私的个体开发者 |
| **Codex++** | Codex 重度用户、多屏/大屏用户、汉化需求用户 |

### 5.3 技术架构

| 项目 | 架构特点 | 技术债务风险 |
|------|----------|--------------|
| **OpenClaw** | 高度自研，涵盖 auth-provider、message-delivery、session-state 全链路 | 维护面广，但代码质量控制良好 |
| **Hermes Agent** | 插件化架构，平台适配器解耦 | 平台适配器兼容性问题频发（QQBot/Telegram/Matrix） |
| **cc-haha** | 轻量级 Electron 应用 | 配置迁移逻辑薄弱（#959 数据丢失） |
| **Codex++** | 依赖 Codex 底层的前端增强 | 启动链路回归风险高（v1.2.x） |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：快速迭代期                                        │
│  ├─ OpenClaw    (295 Issues/日, 500 PRs/日, 5/5 ⭐)          │
│  └─ Hermes Agent (137 Issues/日, 500 PRs/日, 4/5 ⭐)         │
│                                                              │
│  第二梯队：功能迭代期                                        │
│  └─ Codex++     (14 Issues/日, 2 PRs/日, 3/5 ⭐)             │
│                                                              │
│  第三梯队：质量巩固期                                        │
│  └─ cc-haha     (4 Issues/日, 1 PR/日, 2/5 ⭐)              │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度阶段 | 特征 |
|------|-----------|------|
| **OpenClaw** | 成熟期 | PR 合并效率高，Bug 修复主动，P1 Issues 有对应 PR，文档重构同步推进 |
| **Hermes Agent** | 成熟期 | 安全修复集中提交，平台插件生态成型，但部分功能请求长期未响应 |
| **Codex++** | 成长期 | 功能迭代快但稳定性承压，启动回归问题需紧急处理 |
| **cc-haha** | 早期 | 社区运营薄弱，Issue 响应率为 0，需建立维护机制 |

### 6.3 积压风险对比

| 项目 | 长期未响应 Issue (>30天) | 风险等级 |
|------|-------------------------|----------|
| **OpenClaw** | 6 个（含 P1 级别 Signal 竞态、内存泄漏） | ⚠️ 中 |
| **Hermes Agent** | 4 个（含 Rocket Chat 支持、RAG 系统） | ⚠️ 中 |
| **Codex++** | 2 个（含 MCP tools 42天未解决） | 🔴 高 |
| **cc-haha** | 0 个 | ✅ 低（但整体活跃度不足） |

---

## 7. 值得关注的趋势信号

### 7.1 技术趋势

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **Thinking 块可靠性** | OpenClaw #94228、#100149；Hermes Agent #56004 | Anthropic extended thinking 的回放兼容性将成为框架标配能力 |
| **安全边界纵深** | OpenClaw #57326、#13583；Hermes Agent #58628、#58631 | 强制执行钩子、symlink 校验、terminal 保护是企业级部署的硬需求 |
| **多平台消息中枢** | Hermes Agent #3725、#17469；OpenClaw #100150/#100152 | 从单一 AI 助手向全渠道消息路由演进是确定性方向 |
| **Token 效率优化** | Hermes Agent #58633 (Dejavu 70x 节省)；#13663 (reasoning_effort 路由) | 成本控制将成为差异化竞争点 |
| **RAG/知识管理** | Hermes Agent #844、#42864 | 企业级知识库需求明确，可能成为下一版本重点 |

### 7.2 社区运营趋势

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **积压 Issue 侵蚀信任** | OpenClaw 6个长期未响应；Codex++ #275 42天 | 长期未响应的功能请求会显著影响社区信心，需建立定期清理机制 |
| **文档与代码脱节** | OpenClaw #48920；Hermes Agent #36971 | 文档滞后于代码是开源项目常见问题，建议将文档更新纳入 PR 合并条件 |
| **回归测试缺失** | Codex++ v1.2.x 启动回归；cc-haha #959 数据丢失 | 缺乏自动化回归测试的项目在快速迭代期极易引入稳定性问题 |

### 7.3 行业信号

1. **移动端布局加速**：OpenClaw 今日合并 iOS/Android 终端 PR，Hermes Agent 推进 WhatsApp 配置向导（#58041），移动端不再是可选项
2. **安全从可选变必选**：多个项目同步推进 symlink 校验、terminal 绕过保护、token 掩码等安全修复，反映企业级部署需求倒逼安全加固
3. **平台碎片化挑战**：Rocket Chat、XMPP/Jabber、QQBot 等平台适配需求涌现，但维护成本高，预计将出现平台适配器标准化方案
4. **上下文管理成为瓶颈**：Bootstrap 文件 token 消耗（#22438）、64K 最小上下文窗口（#22930）、Ollama 静默限制（#43900）表明上下文管理是当前技术瓶颈

---

## 8. 总结与建议

### 8.1 生态格局总结

| 定位 | 项目 | 建议 |
|------|------|------|
| **技术标杆** | OpenClaw | 持续领跑，重点关注 P1 Bug 修复合并效率，保持文档同步 |
| **平台生态** | Hermes Agent | 加强功能请求响应率，推进 Rocket Chat 等高需求平台支持 |
| **功能迭代** | Codex++ | 紧急处理 v1.2.x 启动回归问题，建立自动化回归测试 |
| **社区重建** | cc-haha | 优先响应 #959、#970 等高优先级 Bug，恢复社区信心 |

### 8.2 对 AI 智能体开发者的建议

1. **技术选型**：若需企业级高安全要求，优先考虑 OpenClaw；若需多平台消息集成，优先考虑 Hermes Agent
2. **避坑指南**：Codex++ v1.2.x 存在启动回归风险，建议等待 v1.2.33 热修复；cc-haha 配置迁移逻辑薄弱，生产环境慎用
3. **贡献方向**：安全修复（symlink/terminal 绕过）、平台适配器（Rocket Chat/XMPP）、RAG 知识库是社区高需求领域，贡献易被采纳
4. **监控重点**：关注 OpenClaw #94228（thinking-signature）和 #54155（内存泄漏）的修复进展，这两个问题的解决方案可能成为行业标准实践

---

*报告生成时间：2026-07-05*  
*数据来源：GitHub OpenClaw、NousResearch/hermes-agent、NanmiCoder/cc-haha、BigPizzaV3/CodexPlusPlus 仓库动态*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期**：2026-07-05  
**项目仓库**：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

2026年7月5日，Hermes Agent 项目保持极高活跃度。过去24小时内共产生 **137 条 Issues 更新**（120条新开/活跃，17条关闭）和 **500 条 PR 更新**（387条待合并，113条已合并/关闭），整体代码流动节奏紧凑。今日未发布新版本，但社区贡献持续强劲——安全修复类 PR 集中提交（涵盖 SendGrid token 掩码、symlink 路径校验、terminal 绕过保护等），同时多个平台插件（XMPP/Jabber、Discord）功能迭代推进。Bug 报告主要集中在 P2 级别，涉及 session 状态管理、OAuth 认证链、上下文限制等核心功能，需优先关注。

---

## 2. 版本发布

**无新版本发布**

过去24小时内项目未发布任何 Release。建议关注 [Releases 页面](https://github.com/NousResearch/hermes-agent/releases) 以获取版本更新通知。

---

## 3. 项目进展

过去24小时内，项目合并/关闭了 **113 条 PR**，以下为值得关注的重点合并项：

### 安全修复类（已合并）

| PR 编号 | 描述 | 链接 |
|---------|------|------|
| #58627 | **fix(redact): SendGrid 3-part token — mask key-secret segment** — 修复 SendGrid token 掩码不完整问题，隐藏 key-secret 段 | [#58627](https://github.com/NousResearch/hermes-agent/pull/58627) |
| #58628 | **fix(acp): resolve symlinks in sensitive-path auto-approve guard** — 修复 symlink 路径绕过敏感文件保护的问题（#55367） | [#58628](https://github.com/NousResearch/hermes-agent/pull/58628) |
| #58631 | **fix(approval): gate terminal bypass of SOUL.md / AGENTS.md / CLAUDE.md** — 修复 terminal 工具绕过受保护文件的漏洞（#57955） | [#58631](https://github.com/NousResearch/hermes-agent/pull/58631) |

### 平台功能类（已合并/推进中）

| PR 编号 | 描述 | 链接 |
|---------|------|------|
| #4844 | **feat: Discord per-channel tool restrictions, name-based bot triggering** — Discord 网关增强，支持按频道工具限制和名称触发 | [#4844](https://github.com/NousResearch/hermes-agent/pull/4844) |
| #17469 | **feat(gateway): add XMPP/Jabber platform plugin** — 新增 XMPP/Jabber 平台插件，作为 bundled platform plugin 集成 | [#17469](https://github.com/NousResearch/hermes-agent/pull/17469) |

### 核心功能修复类（Open 状态，待合并）

| PR 编号 | 描述 | 链接 |
|---------|------|------|
| #52641 | **fix(state): reconcile session counts on rewind** — 修复 `/undo` 操作后 session 计数不同步导致的状态漂移问题 | [#52641](https://github.com/NousResearch/hermes-agent/pull/52641) |
| #58629 | **fix(compression): split in-place attempt and run signals** — 修复压缩状态信号混淆导致的 stale baseline 问题 | [#58629](https://github.com/NousResearch/hermes-agent/pull/58629) |
| #58587 | **fix(multiplex): wire profile secret scope + complete adapter routing** — 修复 `multiplex_profiles: true` 下平台 token 读取问题 | [#58587](https://github.com/NousResearch/hermes-agent/pull/58587) |

### 工具与体验优化类

| PR 编号 | 描述 | 链接 |
|---------|------|------|
| #51391 | **feat(cli): add Ctrl+R fzf input history search** — CLI 新增 fzf 模糊搜索输入历史功能 | [#51391](https://github.com/NousResearch/hermes-agent/pull/51391) |
| #52603 | **fix(pets): stop leaking intermediate images in cache/images** — 修复宠物生成中间图片泄漏问题 | [#52603](https://github.com/NousResearch/hermes-agent/pull/52603) |
| #58633 | **feat: Dejavu MCP catalog entry** — 将 Dejavu token 效率引擎加入 MCP 目录，声称可实现 70x 推理 token 节省 | [#58633](https://github.com/NousResearch/hermes-agent/pull/58633) |

---

## 4. 社区热点

以下 Issues 和 PRs 在今日获得最多评论和关注，反映社区核心诉求：

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 链接 |
|-----------|------|--------|------|
| #52914 | **[Bug]: QQBot adapter.connect() missing is_reconnect parameter causes infinite retry loop** | 15 | [#52914](https://github.com/NousResearch/hermes-agent/issues/52914) |
| #3725 | **[Feature]: Rocket Chat support** | 13 | [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) |
| #22930 | **[Setup]: For some small 2b、4b、8B、14B parameter models, how can the Hermes agent be run offline?** | 8 | [#22930](https://github.com/NousResearch/hermes-agent/issues/22930) |
| #844 | **Feature: Knowledgebase RAG System** | 7 | [#844](https://github.com/NousResearch/hermes-agent/issues/844) |
| #43900 | **[Bug] Ollama local models silently capped at 4096-token context** | 7 | [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) |

### 热点分析

1. **平台集成需求突出**：Rocket Chat 支持（#3725）获得12个 👍，反映出用户希望 Hermes 支持更多消息平台，而非仅限于 Telegram/Discord/WhatsApp 等主流平台。

2. **离线/轻量模型运行诉求**：#22930 和 #32048 均反映 Hermes 对 64K 最小上下文窗口的要求过高，导致小模型（2B-14B）和离线用户无法使用。这是长期未解决的痛点。

3. **本地模型兼容性问题**：#43900 揭示 Ollama 本地模型上下文被静默限制在 4096 tokens，影响用户体验和模型能力发挥。

4. **RAG 知识库功能**：#844 请求的 Knowledgebase RAG 系统允许用户配置文档目录并自动索引检索，是企业级应用的关键功能，已有 PR #42864（scope-recall memory provider）作为替代方案在推进。

---

## 5. Bug 与稳定性

按严重程度（P1 > P2 > P3）排列今日报告的 Bug：

### P1 - 关键/阻断

| Issue 编号 | 描述 | 状态 | 链接 |
|-----------|------|------|------|
| #48534 | **Anthropic Max OAuth fails: token exchange 404s because Anthropic blocks claude-cli/ User-Agent** | CLOSED | [#48534](https://github.com/NousResearch/hermes-agent/issues/48534) |

> ⚠️ 已关闭，但问题根因（User-Agent 被 Anthropic 屏蔽）可能影响其他 OAuth 流程。

### P2 - 高优先级

| Issue 编号 | 描述 | 是否有 Fix PR | 链接 |
|-----------|------|--------------|------|
| #52914 | **QQBot infinite retry loop** — `is_reconnect` 参数缺失 | 无 | [#52914](https://github.com/NousResearch/hermes-agent/issues/52914) |
| #44560 | **model.options handler blocks on sync HTTP calls, causing WebSocket timeout** | 无 | [#44560](https://github.com/NousResearch/hermes-agent/issues/44560) |
| #56004 | **Qwen3.6 / vLLM: prior-turn reasoning stripped on replay** | 无 | [#56004](https://github.com/NousResearch/hermes-agent/issues/56004) |
| #57275 | **Context limits always exceeded, crashes models** | 无 | [#57275](https://github.com/NousResearch/hermes-agent/issues/57275) |
| #44799 | **Codex OAuth refresh token expires during idle cooldown** | 无 | [#44799](https://github.com/NousResearch/hermes-agent/issues/44799) |
| #57928 | **Telegram file attachment broken** — 文件附件被静默丢弃 | 无 | [#57928](https://github.com/NousResearch/hermes-agent/issues/57928) |
| #58437 | **MoA _collect_stream drops tool_calls in quiet mode** | 无 | [#58437](https://github.com/NousResearch/hermes-agent/issues/58437) |
| #40960 | **credential pool exhaustion causes misleading 401 instead of real 429/402** | 无 | [#40960](https://github.com/NousResearch/hermes-agent/issues/40960) |

### P3 - 中等优先级

| Issue 编号 | 描述 | 是否有 Fix PR | 链接 |
|-----------|------|--------------|------|
| #58596 | **DaemonThreadPoolExecutor crashes on Python 3.14** — `_initializer` 属性被移除 | 无 | [#58596](https://github.com/NousResearch/hermes-agent/issues/58596) |
| #58458 | **lazy_deps on Windows: matrix refresh fails (python-olm needs make)** | 无 | [#58458](https://github.com/NousResearch/hermes-agent/issues/58458) |
| #44490 | **Same-provider model switch on opencode-go produces empty api_key → 401** | 无 | [#44490](https://github.com/NousResearch/hermes-agent/issues/44490) |
| #35530 | **TUI not resizing properly** — SIGWINCH fallback needed | 无 | [#35530](https://github.com/NousResearch/hermes-agent/issues/35530) |

### 稳定性风险评估

- **Session 状态管理**：多个 P2 Bug 涉及 session 计数、rewind、上下文限制等问题，表明 session 生命周期管理是当前技术债务集中区。
- **认证/OAuth 流程**：Codex、Anthropic、GitHub Copilot 的认证问题频发，credential pool 逻辑复杂易出错。
- **平台适配器**：QQBot、Telegram、Matrix 等平台适配器存在兼容性问题，需要跨平台回归测试覆盖。

---

## 6. 功能请求与路线图信号

以下功能请求获得较多社区支持，或已有对应 PR 推进，可能进入下一版本：

### 高优先级功能请求

| Issue/PR | 描述 | 👍 数 | 状态 | 链接 |
|---------|------|-------|------|------|
| #3725 | **Rocket Chat 支持** | 12 | Open | [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) |
| #40297 | **Desktop: make workspace selectable per session** | 9 | Open | [#40297](https://github.com/NousResearch/hermes-agent/issues/40297) |
| #13663 | **Smart reasoning_effort routing based on task complexity** | 4 | Open | [#13663](https://github.com/NousResearch/hermes-agent/issues/13663) |
| #49383 | **Voice wake word for Hermes Desktop (Hey Hermes)** | 2 | Open | [#49383](https://github.com/NousResearch/hermes-agent/issues/49383) |
| #58041 | **`hermes whatsapp setup` — Interactive one-command WhatsApp configuration wizard** | 0 | Open | [#58041](https://github.com/NousResearch/hermes-agent/issues/58041) |

### 已有对应 PR 的功能请求

| PR | 功能 | 链接 |
|----|------|------|
| #17469 | XMPP/Jabber 平台插件 | [#17469](https://github.com/NousResearch/hermes-agent/pull/17469) |
| #4844 | Discord per-channel tool restrictions | [#4844](https://github.com/NousResearch/hermes-agent/pull/4844) |
| #42864 | scope-recall standalone memory provider (RAG 替代方案) | [#42864](https://github.com/NousResearch/hermes-agent/issues/42864) |
| #51391 | Ctrl+R fzf 输入历史搜索 | [#51391](https://github.com/NousResearch/hermes-agent/pull/51391) |
| #58633 | Dejavu MCP catalog entry (token 效率引擎) | [#58633](https://github.com/NousResearch/hermes-agent/pull/58633) |

### 路线图信号分析

1. **多平台消息集成**：Rocket Chat、XMPP、Jabber 等平台支持请求持续存在，表明 Hermes 正从单一 AI 助手向全平台消息中枢演进。
2. **Desktop 应用增强**：workspace 可选、voice wake word 等功能表明 Desktop 端正在强化，Electron 应用定位逐渐清晰。
3. **RAG/知识管理**：#844 和 #42864 共同指向 RAG 功能需求，可能成为下一版本重点。
4. **Token 效率优化**：Dejavu MCP 集成和 reasoning_effort 智能路由反映用户对成本控制的强烈诉求。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点和使用场景：

### 痛点汇总

| 痛点 | 相关 Issue | 链接 |
|------|-----------|------|
| **Hermes 对小模型/离线用户不友好** — 64K 最小上下文窗口要求过高，2B-14B 模型无法使用 | #22930, #32048 | [#22930](https://github.com/NousResearch/hermes-agent/issues/22930) |
| **Ollama 本地模型上下文被静默限制** — 明明模型支持 131K tokens，却只用了 4096 | #43900 | [#43900](https://github.com/NousResearch/hermes-agent/issues/43900) |
| **Telegram 文件附件丢失** — 用户发送图片/文档配合命令使用，文件被静默丢弃 | #57928 | [#57928](https://github.com/NousResearch/hermes-agent/issues/57928) |
| **技能加载但不遵守** — Agent 加载技能但不遵循指令，技能被视为"建议"而非"强制" | #58569 | [#58569](https://github.com/NousResearch/hermes-agent/issues/58569) |
| **WhatsApp 配置复杂** — 相比 Telegram 的简单 token 配置，WhatsApp 需要4步手动配置 | #58041 | [#58041](https://github.com/NousResearch/hermes-agent/issues/58041) |

### 正面反馈信号

- Discord 平台功能增强（per-channel 工具限制、名称触发）获得积极评价
- XMPP/Jabber 插件作为 bundled 插件集成的方式受到认可（无需修改核心代码）
- Ctrl+R fzf 历史搜索功能广受期待

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或停滞，提醒维护者关注：

### 长期未响应的 Issues（>30 天无维护者回复）

| Issue 编号 | 标题 | 创建时间 | 最后更新 | 链接 |
|-----------|------|----------|----------|------|
| #3725 | Rocket Chat support | 2026-03-29 | 2026-07-05 | [#3725](https://github.com/NousResearch/hermes-agent/issues/3725) |
| #844 | Knowledgebase RAG System | 2026-03-10 | 2026-07-04 | [#844](https://github.com/NousResearch/hermes-agent/issues/844) |
| #22930 | Offline/small model setup | 2026-05-10 | 2026-07-04 | [#22930](https://github.com/NousResearch/hermes-agent/issues/22930) |
| #32048 | Token context window too high | 2026-05-25 | 2026-07-04 | [#32048](https://github.com/NousResearch/hermes-agent/issues/32048) |

### 长期 Open 的重要 PRs

| PR 编号 | 标题 | 创建时间 | 状态 | 链接 |
|--------|------|----------|------|------|
| #17469 | XMPP/Jabber platform plugin | 2026-04-29 | OPEN | [#17469](https://github.com/NousResearch/hermes-agent/pull/17469) |
| #33930 | fix(tools/delegate_tool): correctly classify error blobs | 2026-05-28 | OPEN | [#33930](https://github.com/NousResearch/hermes-agent/pull/33930) |
| #37100 | fix(agent): strip shared mcp_<server>_ prefix | 2026-06-02 | OPEN | [#37100](https://github.com/NousResearch/hermes-agent/pull/37100) |
| #36971 | docs(user-guide): add prompt caching to user guide | 2026-06-01 | OPEN | [#36971](https://github.com/NousResearch/hermes-agent/pull/36971) |
| #36984 | feat(caching): add deepseek/deepseek-v4-flash to cache_control allowlist | 2026-06-01 | OPEN | [#36984](https://github.com/NousResearch/hermes-agent/pull/36984) |

### 积压风险评估

- **功能请求响应率**：社区高度关注的功能（#3725 Rocket Chat、#844 RAG）缺乏维护者回应，可能影响用户信心。
- **PR 合并周期**：部分 PR（如 #17469 XMPP 插件）已 open 超过2个月，需评估是否需要额外审查资源或明确拒绝原因。
- **文档缺失**：#36971（prompt caching 用户指南）长期未合并，影响新用户体验。

---

## 总结

**项目健康度评分**：⭐⭐⭐⭐ (4/5)

| 维度

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报 | 2026-07-05

---

## 1. 今日速览

截至 2026-07-05，cc-haha 项目在过去 24 小时内保持中等活跃状态。共产生 **4 条新 Issue** 和 **1 条待合并 PR**，无版本发布。Issue 全部为 Bug 报告，主要集中在更新后配置丢失、UI 异常及性能问题；PR #946 带来了侧边栏会话文件管理功能的增强提议。整体来看，项目当前处于 Bug 修复消化阶段，社区反馈较为集中，维护者需关注 Issue 响应效率。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

### 待合并 PR

| # | 标题 | 作者 | 标签 | 状态 |
|---|------|------|------|------|
| [#946](https://github.com/NanmiCoder/cc-haha/pull/946) | feat(sidebar): copy session file path & open in file manager | @706412584 | enhancement, size:XL | 待合并 |

**PR #946 详情：**

该 PR 为侧边栏会话右键菜单新增两项功能：

- **Copy session file path** — 将会话对应的 `.jsonl` 文件绝对路径复制到剪贴板，便于将会话文件传递给其他 AI 工具
- **Open in file manager** — 直接在文件管理器中定位并打开会话文件所在目录

**影响评估：** 该功能覆盖了用户对会话文件进行二次利用的强需求（涉及 desktop、server、adapters、docs、release、cli-core 等多个领域），属于用户体验层面的重要改进。PR 标注为 `needs-maintainer-approval`，建议维护者尽快评审。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| # | 标题 | 评论数 | 点赞 | 状态 |
|---|------|--------|------|------|
| [#959](https://github.com/NanmiCoder/cc-haha/issues/959) | [BUG] 推送更新0.4.5，所有配置及对话全部清空 | 4 | 0 | OPEN |
| [#970](https://github.com/NanmiCoder/cc-haha/issues/970) | [BUG] 提问过程中莫名白屏 | 1 | 0 | OPEN |

**热点分析：**

- **Issue #959** 引发最多讨论（4 条评论），用户 @easerlee 反映更新至 0.4.5 后所有配置和对话记忆全部丢失，影响正在进行的工程项目。这是典型的**数据迁移/持久化 Bug**，可能涉及配置文件格式变更或存储路径重置问题，需优先处理。

- **Issue #970** 报告 UI 白屏问题，用户在提问过程中遭遇界面异常，只能重启应用。此类问题严重影响可用性，可能与前端状态管理或 API 响应异常有关。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | # | 标题 | 状态 | 是否有 Fix PR |
|----------|---|------|------|---------------|
| 🔴 高 | [#959](https://github.com/NanmiCoder/cc-haha/issues/959) | 更新0.4.5后配置及对话全部清空 | OPEN | 无 |
| 🔴 高 | [#970](https://github.com/NanmiCoder/cc-haha/issues/970) | 提问过程中莫名白屏 | OPEN | 无 |
| 🟡 中 | [#971](https://github.com/NanmiCoder/cc-haha/issues/971) | 后台任务状态更新太慢 | OPEN | 无 |
| 🟢 低 | [#972](https://github.com/NanmiCoder/cc-haha/issues/972) | 接入官方GPT账号显示5.4模型不可用 | **已解决** | 无（用户自行解决） |

**Bug 趋势观察：**

1. **数据丢失问题（#959）** 是最高优先级，需确认是配置迁移逻辑缺陷还是存储机制变更导致
2. **UI 白屏（#970）** 可能存在偶发性，需收集更多复现步骤和日志
3. **后台任务性能（#971）** 反映用户对实时状态反馈的期待
4. **模型不可用（#972）** 已由用户自行解决，但可能存在文档或错误提示优化空间

---

## 6. 功能请求与路线图信号

### 用户功能需求

| # | 标题 | 类型 | 关联 PR | 纳入可能性 |
|---|------|------|---------|------------|
| [#946](https://github.com/NanmiCoder/cc-haha/pull/946) | 侧边栏会话文件路径复制与文件管理器打开 | enhancement | 待合并 | ⭐⭐⭐⭐ 高 |

**路线图信号分析：**

- PR #946 提出的**会话文件直接访问**功能契合用户对数据可控性的需求，预计将被纳入下一版本
- 当前 Issue 中暂无明确的功能请求，但 Bug 修复本身可能催生配置管理、状态持久化等周边功能的改进需求

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 涉及 Issue | 用户场景 |
|------|------------|----------|
| **更新后数据丢失** | #959 | 用户正在运行工程项目，更新后配置和对话记忆全部清空，影响工作连续性 |
| **界面无响应** | #970 | 用户在提问过程中遭遇白屏，只能退出重启，体验中断 |
| **任务状态滞后** | #971 | 后台任务长时间显示"运行中"，用户无法判断实际进度 |

### 用户情绪倾向

- **负面反馈占主导**：4 条 Issue 均为 Bug 报告，无功能满意度反馈
- **紧急求助明显**：Issue #959 用户明确表达"跑了一半的工程，记忆都没了"的焦虑
- **自助解决意愿**：Issue #972 用户已自行解决 GPT 5.4 模型问题，说明社区具备一定排查能力

---

## 8. 待处理积压

### 需维护者关注的事项

| 类型 | # | 标题 | 创建时间 | 积压天数 | 优先级 |
|------|---|------|----------|----------|--------|
| Issue | [#959](https://github.com/NanmiCoder/cc-haha/issues/959) | 更新0.4.5后配置及对话全部清空 | 2026-07-02 | 3 天 | 🔴 紧急 |
| Issue | [#970](https://github.com/NanmiCoder/cc-haha/issues/970) | 提问过程中莫名白屏 | 2026-07-03 | 2 天 | 🔴 紧急 |
| Issue | [#971](https://github.com/NanmiCoder/cc-haha/issues/971) | 后台任务状态更新太慢 | 2026-07-04 | 1 天 | 🟡 中 |
| PR | [#946](https://github.com/NanmiCoder/cc-haha/pull/946) | 侧边栏会话文件管理功能 | 2026-07-01 | 4 天 | 🟡 中 |

**积压分析：**

- Issue #959 和 #970 已积压 2-3 天且无维护者响应，需尽快确认复现条件并定位根因
- PR #946 积压 4 天，作为功能增强提案，建议在 Bug 修复之余安排评审

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issue | 4 | ↑ 较前日持平 |
| 新增 PR | 1 | ↓ 较前日减少 |
| Issue 响应率 | 0% | ⚠️ 需提升 |
| PR 合并率 | 0% | ⚠️ 待评审 |
| Bug 解决数 | 0 | — |
| 功能增强进度 | 1 待合并 | 正常 |

---

> **报告生成时间**：2026-07-05  
> **数据来源**：GitHub cc-haha 仓库 (github.com/NanmiCoder/cc-haha)  
> **分析师建议**：优先处理 #959 和 #970 两个高优先级 Bug，同时推进 PR #946 的评审流程，以提振社区信心。

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-07-05  
**项目**: BigPizzaV3/CodexPlusPlus  
**数据来源**: GitHub Repository

---

## 1. 今日速览

2026-07-04 是 Codex++ 高活跃度更新日。项目发布 **v1.2.32** 版本（9项更新），社区提交 **14 条新 Issue**，另有 **1 个性能优化 PR** 待合并。整体呈现「功能迭代快、Bug 反馈多」的健康开源生态特征。14 条 Issue 中约 60% 涉及启动/重启稳定性问题，暗示 v1.2.x 系列可能存在回归风险，需维护者重点关注。

---

## 2. 版本发布

### 🎉 v1.2.32 已发布

| 项目 | 详情 |
|------|------|
| **发布地址** | [GitHub Releases](https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.32) |
| **发布时间** | 2026-07-04 |
| **破坏性变更** | 移除 Codex 命令包装器相关功能（减少后端维护面） |
| **迁移注意** | 如有依赖旧命令包装器的脚本，需检查兼容性 |

**更新内容摘要**：

| 类别 | 数量 | 亮点 |
|------|------|------|
| 🆕 新功能 | 3 | 图片覆盖层适配模式（填充/适应/拉伸/平铺/居中）、Stepwise 手动重新生成按钮、推荐内容图片展示 |
| ⚡ 优化 | 1 | Stepwise 消息识别逻辑，减少选错消息或刷新不到建议 |
| 🐛 修复 | 4 | 远端插件缓存配置覆盖问题、marketplace 元数据缺失、UTF-8 BOM 解析失败、命令包装器移除 |
| 🔧 清理 | 1 | 移除 Codex 命令包装器功能 |

> ⚠️ **注意**: 更新日志最后一项「新增/」疑似截断，建议查看完整 Release Notes。

---

## 3. 项目进展

### ✅ 已合并 PR

**#1330** - feat: add image overlay fit modes / 新增图片覆盖层适配模式  
👤 @Yuimi-chaya | 📅 2026-07-04  
🔗 [PR #1330](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1330)

**改动要点**：
- 为 Codex 图片覆盖层新增 5 种适配模式（填充、适应、拉伸、平铺、居中）
- 默认保持「适应」模式，兼容现有行为
- 渲染层从 `<img object-fit>` 改为固定背景层，支持平铺和居中
- 管理器设置页新增「背景适配方式」下拉框，补齐中英文 i18n

**评价**: 用户体验细节优化，降低大屏/多屏用户的使用摩擦。

---

### 🔄 待合并 PR

**#1304** - perf: short-circuit model list via bridge (−34s startup)  
👤 @lennney | 📅 2026-07-02 | 🟡 待合并  
🔗 [PR #1304](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1304)

**核心优化**：
- 拦截渲染层 `list-models-for-host` 调用
- 直接从 Codex++ bridge 返回模型列表（<1ms），跳过 app-server RPC（约 34s）
- 灵感来源: PR #620 @congxb

**预期影响**: 启动速度提升显著，尤其对自定义供应商用户。预计将获得快速合并。

---

## 4. 社区热点

### 🔥 高互动 Issue TOP 5

| 排名 | Issue | 评论数 | 主题 | 链接 |
|------|-------|--------|------|------|
| 1 | #1324 Model whitelist injection fails | 3 | 模型白名单注入失败，Codex 26.623+ 找不到模块 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1324) |
| 2 | #1334 Codex++汉化脚本无法加载 | 3 | 用户脚本按钮灰色无法点击 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1334) |
| 3 | #1158 deepseek 发送图片后无法对话 | 3 | JSON 反序列化失败，`image_url` 变体未知 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1158) |
| 4 | #1323 插件市场显示糟糕 | 2 | 打开后 3-5s 出错 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1323) |
| 5 | #275 MCP Server tools Unsupported | 2 | node_repl 等 MCP 工具未注入请求 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/275) |

**热点分析**:
- **汉化/国际化问题** 持续高热（#1334, #1333），反映中文用户群体庞大
- **图片处理** 成为高频踩坑点（#1158, #1330），v1.2.32 的图片覆盖层更新可能缓解部分问题
- **MCP 集成** 仍是长期痛点（#275 自 5 月持续活跃）

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue | 描述 | 影响范围 | 状态 | Fix PR |
|-------|------|----------|------|--------|
| **#1158** | deepseek 发送图片后无法对话，JSON 反序列化失败 | 启动/重启 | 🟡 3 条评论 | 无 |
| **#1324** | Model whitelist injection fails，Codex 26.623+ 找不到 `app-server-manager-signals-` 模块 | 模型选择 | 🟡 3 条评论 | 无 |
| **#1331** | 打开设置即卡死、闪退 | 启动/重启 | 🆕 新增 | 无 |

### 🟡 中严重度

| Issue | 描述 | 影响范围 | 状态 |
|-------|------|----------|------|
| **#1309** | Windows 端口排除范围导致无法重新拉起 Codex | 启动/重启 | 🟡 1 条评论 |
| **#1328** | 切换供应商后历史会话未同步 | 启动/重启 | 🆕 新增 |
| **#1323** | 插件市场打开 3-5s 后显示糟糕 | MCP/插件 | 🟡 2 条评论 |

### 🟢 低严重度

| Issue | 描述 | 影响范围 |
|-------|------|----------|
| **#1335** | watcher 进程反复弹出 terminal | 界面/交互 |
| **#1329** | 无法通过系统代理连接 GitHub | 启动/重启 |
| **#1332** | API 报错 | 启动/重启 |

> 📊 **Bug 统计**: 今日 14 条 Issue 中，约 **64% (9条)** 涉及「启动/重启」问题，建议优先排查 v1.2.x 版本的启动链路回归。

---

## 6. 功能请求与路线图信号

### 📋 功能需求列表

| Issue | 需求描述 | 优先级信号 | 链接 |
|-------|----------|------------|------|
| **#1260** | `config.toml` 中 `model_context_window` 对自定义供应商不生效 | 🔥 2 人关注 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1260) |
| **#275** | MCP Server tools 应标记为支持而非 Unsupported | 长期未解决 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/275) |

**路线图信号分析**:

1. **自定义供应商配置完善** - #1260 涉及 `model_context_window` 配置不生效，影响高级用户使用自定义模型。#1304 PR 若合并将优化模型列表加载，两者结合可能成为下版本重点。

2. **MCP 集成深化** - #275 长期未解决，社区对 MCP 工具注入有强需求，预计将成为 v1.3.x 的重点方向。

3. **国际化/汉化** - #1334、#1333 集中爆发，建议维护者考虑建立官方汉化方案或文档。

---

## 7. 用户反馈摘要

### 😤 主要痛点

| 痛点 | 典型反馈 | 影响用户数 |
|------|----------|------------|
| **启动即崩/卡死** | 「打开就卡的要死，未响应，之后就闪退」 | 多用户 |
| **图片处理失败** | 「Failed to deserialize the JSON body... unknown variant `image_url`」 | deepseek 用户 |
| **脚本加载失败** | 「重新加载用户脚本的按钮是灰色的，无法点击」 | 汉化用户 |
| **插件市场不稳定** | 「打开后显示糟糕，出错了，要求更新 codex 或重试」 | 插件用户 |

### 💡 正面反馈

- v1.2.32 新增的图片覆盖层适配模式（#1330）获得合并，填补了多屏/大屏用户的使用需求
- Stepwise 手动重新生成按钮获好评，提升交互灵活性

### 🎯 核心诉求

1. **稳定性优先**: 多个「启动即崩」Issue 表明 v1.2.x 可能存在回归，建议维护者发布热修复
2. **文档完善**: 汉化脚本、插件市场使用等场景缺乏指引
3. **自定义模型支持**: context_window 配置、自定义供应商集成需加强

---

## 8. 待处理积压

### ⚠️ 长期未响应 Issue

| Issue | 创建时间 | 状态 | 等待天数 | 链接 |
|-------|----------|------|----------|------|
| **#275** | 2026-05-23 | OPEN | 42 天 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/275) |
| **#1158** | 2026-06-22 | OPEN | 12 天 | [🔗](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1158) |

### 📌 积压分析

1. **#275 MCP Server tools Unsupported** - 42 天未解决，社区持续反馈，是项目长期技术债务
2. **#1158 图片对话失败** - 12 天未解决，影响 deepseek 用户核心使用场景

### 💡 建议

- 维护者应优先处理 #1158（影响核心功能）
- #275 建议在下一 major 版本前给出技术方案或关闭并说明原因

---

## 📊 今日数据总览

| 指标 | 数值 | 趋势 |
|------|------|------|
| 🆕 新增 Issue | 14 | ↑ 较昨日 |
| ✅ 已关闭 Issue | 0 | ↓ 无 |
| 📥 新增 PR | 2 | → 持平 |
| 🔀 已合并 PR | 1 | ↑ |
| 🎉 版本发布 | 1 (v1.2.32) | ↑ |
| ⏳ 待合并 PR | 1 | → |

---

**报告生成时间**: 2026-07-05  
**数据截止**: 2026-07-04 24:00 UTC

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*