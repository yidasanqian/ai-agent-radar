# OpenClaw 生态日报 2026-06-22

> Issues: 41 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-22 04:16 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-22  
**项目仓库：** github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **41 条 Issues**（39 新开/活跃，2 关闭）和 **500 条 PRs**（393 待合并，107 已合并/关闭）。项目发布了 **v2026.6.10-beta.1** 测试版，重点改进 agent 轮次可靠性和会话状态管理。社区聚焦于 **Gateway 内存泄漏**（RSS 从 350MB 增长至 15.5GB）、**多 Agent 会话崩溃**、以及 **DeepSeek 缓存命中率骤降**等 P0/P1 级稳定性问题。今日 PR 合并节奏稳健，多个功能 PR 进入 review 阶段，但部分高优先级 Bug 尚未有对应修复 PR，需持续关注。

---

## 2. 版本发布

### v2026.6.10-beta.1 发布

**发布类型：** Beta 测试版  
**发布时间：** 2026-06-22

**主要改进：**

| 改进项 | 说明 |
|--------|------|
| Subagent 完成公告保留 | 保留待处理 subagent 完成通知，避免丢失 |
| 聊天历史转录非空 | 确保会话历史转录始终包含内容 |
| 媒体索引对齐维护 | 修复媒体索引与内容的对齐问题 |
| 休眠 follow-up drains 重启 | 自动重启卡住的 follow-up 任务 |
| Compaction 模型别名一致性解析 | 统一处理 compaction 模型别名 |

> **参考：** [#94](https://github.com/openclaw/openclaw/pull/94)（注：链接为示例格式）

---

## 3. 项目进展

### 今日合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#94687](https://github.com/openclaw/openclaw/pull/94687) | fix(gateway): accept port for health and probe | 👀 ready for maintainer look | Gateway health/probe 命令支持 `--port` 参数 |
| [#94697](https://github.com/openclaw/openclaw/pull/94697) | fix(kill-tree): verify process group leader | 👀 ready for maintainer look | 修复 Unix 系统进程树终止逻辑，防止误杀 gateway 自身 |
| [#85249](https://github.com/openclaw/openclaw/pull/85249) | fix(cron): guard against undefined sourceDelivery | 👀 ready for maintainer look | 防止 cron isolated executor 中 undefined 访问错误 |
| [#95301](https://github.com/openclaw/openclaw/pull/95301) | fix: make post-turn compaction non-fatal | 📣 needs proof | 压缩失败不再丢弃已生成的回复 |
| [#94636](https://github.com/openclaw/openclaw/pull/94636) | fix(memory): skip raw snippets during promotion | 👀 ready for maintainer look | 内存 promotion 跳过原始片段，避免污染 MEMORY.md |
| [#94642](https://github.com/openclaw/openclaw/pull/94642) | fix(status): wrap buildStatusText with try-catch | 📣 needs proof | 修复 LINE 平台 `/status` 命令间歇性无响应问题 |
| [#95649](https://github.com/openclaw/openclaw/pull/95649) | fix(ci): bundle test shards and right-size runners | 👀 ready for maintainer look | CI 测试分片优化，从 95 个减少至 63 个 |

**整体评估：** 项目推进稳健，核心功能修复持续落地，但部分高风险 PR（如 cron、memory-core）仍需 maintainer 重点关注。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 优先级 | 核心诉求 |
|------------|------|--------|--------|----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Critical: Gateway Memory Leak — RSS 350MB → 15.5GB | 13 | P0 | Gateway 进程内存持续增长导致 OOM，建议排查资源泄漏 |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner: thinking signatures invalid on replay | 11 | P1 | Anthropic thinking block 签名在回放时无效，recovery wrapper 未触发 |
| [#87318](https://github.com/openclaw/openclaw/issues/87318) | amazon-bedrock: Haiku 4.5 inference profile ARN not supported | 7 | P2 | Bedrock Haiku 4.5 模型 ARN 未正确路由 |
| [#93858](https://github.com/openclaw/openclaw/issues/93858) | fix(auto-reply): defer foreground fence to delivery | 6 | P1 | 修复同会话新消息到达时旧回复被错误取消的问题 |
| [#93807](https://github.com/openclaw/openclaw/issues/93807) | web_fetch useTrustedEnvProxy ignores NO_PROXY | 6 | P2 | 安全问题：代理配置忽略 NO_PROXY 环境变量 |

**热点分析：**
- **内存与稳定性** 是当前社区最关注的话题，P0 级内存泄漏问题已持续两周未解决
- **DeepSeek 缓存问题**（#94518, #95647）引发用户对成本飙升的强烈不满，缓存命中率从 97-100% 骤降至 <10%
- **多渠道集成**（Mattermost、Discord、Feishu）功能需求活跃，多个 PR 正在推进

---

## 5. Bug 与稳定性

### P0 级（Critical）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB → 15.5GB | OPEN | ❌ 无 |
| [#94686](https://github.com/openclaw/openclaw/issues/94686) | Critical Fleet Stability — Multi-Agent Crashes | OPEN | ❌ 无 |
| [#94229](https://github.com/openclaw/openclaw/issues/94229) | SQLite database corruption in plugin_state_entries | OPEN | ❌ 无 |

### P1 级（High）

| Issue | 标题 | 状态 | 是否有 Fix PR |
|-------|------|------|---------------|
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | Embedded runner thinking signatures invalid | OPEN | ❌ 无 |
| [#93831](https://github.com/openclaw/openclaw/issues/93831) | Foreground reply fence cancels older in-flight reply | OPEN | ⚠️ 关联 #93858 |
| [#93886](https://github.com/openclaw/openclaw/issues/93886) | @openclaw/codex fails plugin-load boundary check | OPEN | ❌ 无 |
| [#92519](https://github.com/openclaw/openclaw/issues/92519) | Session stuck in permanent busy state after restart | OPEN | ❌ 无 |
| [#91839](https://github.com/openclaw/openclaw/issues/91839) | Terminal provider model_not_available causes event-loop starvation | OPEN | ❌ 无 |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | Preflight compaction hard-capped at ~60s | OPEN | ❌ 无 |
| [#94518](https://github.com/openclaw/openclaw/issues/94518) | DeepSeek cache hit rate <10% after 6.x upgrade | OPEN | ❌ 无 |
| [#95647](https://github.com/openclaw/openclaw/issues/95647) | DeepSeek prompt cache broken since 6.1 | CLOSED | ✅ 已关闭（可能与 #94518 合并） |
| [#95658](https://github.com/openclaw/openclaw/issues/95658) | 2026.6.9 breaks Groq voice transcription | OPEN | ❌ 无 |

### 回归/严重 Bug

| Issue | 标题 | 影响范围 |
|-------|------|----------|
| [#95658](https://github.com/openclaw/openclaw/issues/95658) | Groq voice transcription broken in 2026.6.9 | Telegram 语音转录完全失效 |
| [#94229](https://github.com/openclaw/openclaw/issues/94229) | SQLite corruption in v2026.6.8 | Plugin state 持久化损坏 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 标题 | 优先级 | 潜在价值 |
|-------|------|--------|----------|
| [#43564](https://github.com/openclaw/openclaw/issues/43564) | ACP Session Skill Context Injection | P2 | 允许 skills 注入 ACP agent 会话上下文 |
| [#90370](https://github.com/openclaw/openclaw/issues/90370) | 支持 PostgreSQL 替代 SQLite 作为内部存储 | P3 | 企业级部署需求，支持向量搜索 |
| [#94279](https://github.com/openclaw/openclaw/issues/94279) | Detect Containerized Environments and Disable Update Suggestions | P3 | 容器环境优化 |
| [#93817](https://github.com/openclaw/openclaw/issues/93817) | Expose memory pressure thresholds via config | P2 | 生产环境可观测性增强 |

### 正在推进的功能 PRs

| PR | 标题 | 状态 | 预计影响 |
|----|------|------|----------|
| [#95613](https://github.com/openclaw/openclaw/pull/95613) | Add monthly daily and stable release policy | 📣 needs proof | 规范化发布流程 |
| [#68967](https://github.com/openclaw/openclaw/pull/68967) | Google Chat sessionThread option | ⏳ waiting on author | 线程化会话支持 |
| [#59414](https://github.com/openclaw/openclaw/pull/59414) | Doctor: add Node.js runtime info | 👀 ready for maintainer look | 诊断能力增强 |
| [#94585](https://github.com/openclaw/openclaw/pull/94585) | Xiaomi MiMo V2.5 models support | ⏳ waiting on author | 新模型支持 |

---

## 7. 用户反馈摘要

### 真实痛点

1. **成本失控：** DeepSeek 用户反馈缓存命中率骤降导致 Token 成本增加约 10 倍（#94518, #95647）
2. **稳定性堪忧：** 多 Agent 部署用户遭遇 thinking block 签名损坏、会话膨胀、cron 竞争等问题（#94686）
3. **集成缺陷：** Groq 语音转录在 2026.6.9 版本完全失效（#95658），影响 Telegram 语音消息处理
4. **内存泄漏：** Gateway 进程在 2-3 天内从 350MB 膨胀至 15.5GB，触发 OOM 重启循环（#91588）

### 用户满意度

- **正面：** v2026.6.10-beta.1 对 agent 轮次和会话状态的改进获得积极反馈
- **负面：** 6.x 版本升级带来的回归问题（DeepSeek 缓存、内存泄漏）严重影响生产环境用户体验

---

## 8. 待处理积压

### 长期未响应的 P0/P1 Issues

| Issue | 创建时间 | 等待天数 | 说明 |
|-------|----------|----------|------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 2026-06-09 | 13 天 | Gateway 内存泄漏，P0 级 |
| [#92201](https://github.com/openclaw/openclaw/issues/92201) | 2026-06-11 | 11 天 | Embedded runner 签名问题，P1 级 |
| [#87318](https://github.com/openclaw/openclaw/issues/87318) | 2026-05-27 | 26 天 | Bedrock Haiku 4.5 支持，P2 级 |
| [#43564](https://github.com/openclaw/openclaw/issues/43564) | 2026-03-12 | 102 天 | ACP Skill 注入功能请求 |

### 建议优先处理

1. **立即：** #91588 内存泄漏问题（已有 13 天）
2. **本周：** #94518 DeepSeek 缓存问题（成本影响大）
3. **本周：** #95658 Groq 语音转录回归（2026.6.9 新引入）
4. **规划：** #94686 多 Agent 稳定性问题（影响 Fleet 用户）

---

**报告生成时间：** 2026-06-22  
**数据来源：** GitHub OpenClaw 仓库实时数据

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-22  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"两强多小"**的格局：OpenClaw 与 Hermes Agent 以日均 500 条 PR 更新的超高速迭代领跑，Codex++ 保持稳健的版本发布节奏，而 cc-haha 则面临积压压力。**稳定性与集成能力**成为全生态共同挑战——内存泄漏、多 Provider 兼容性问题、异步任务调度缺陷在多个项目中同步涌现，反映出该领域仍处于功能快速扩张与架构夯实并行的阶段。值得关注的是，Provider 身份伪装（绕过平台限制）、多渠道集成（Discord/Telegram/飞书）、以及会话状态可靠性正在成为行业事实标准。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃→关闭） | PRs（待合并→已合并） | Release | 核心健康指标 |
|------|--------------------------|----------------------|---------|--------------|
| **OpenClaw** | 41（39→2） | 500（393→107） | ✅ v2026.6.10-beta.1 | 🟡 高活跃但有 3 个 P0 未解决 |
| **Hermes Agent** | 44（32→12） | 500（415→85） | ❌ 无 | 🟡 快速迭代，P2 问题较多 |
| **cc-haha** | 7（7→0） | 2（2→0） | ❌ 无 | 🔴 积压增加，响应不及时 |
| **Codex++** | 30（24→6） | 5（3→2） | ✅ v1.2.18 | 🟢 稳健迭代，Windows 问题集中 |

**关键数据：**
- OpenClaw 与 Hermes Agent 的 PR 处理量是 cc-haha 的 **250 倍**，Codex++ 的 **100 倍**
- cc-haha 今日 **0 条 Issue 关闭**，积压压力显著
- OpenClaw 与 Hermes Agent 均保持 **日均 500 条 PR 动态** 的超高吞吐量

---

## 3. OpenClaw 在生态中的定位

### 3.1 定位特征

| 维度 | OpenClaw | 生态均值 |
|------|----------|----------|
| **架构定位** | 企业级 Fleet 管理 + 多 Agent 编排 | 单用户/单 Bot 为主 |
| **社区规模** | 超大型（500 PR/日） | 中小型（2-500 PR/日） |
| **版本节奏** | Beta 快速迭代（周级） | 稳定版/功能版混合 |
| **Bug 处理** | 积极但 P0 积压 13 天 | 响应速度参差不齐 |

### 3.2 技术路线差异

| 特性 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心场景** | Fleet/多 Agent 管理 | 通用 CLI/TUI | 桌面客户端 | Codex 前端增强 |
| **存储方案** | SQLite（规划 PG） | 插件化 | 本地 | 本地 |
| **Provider 策略** | 多模型聚合 | 身份伪装绕过 | 单一后端 | API-key 直连 |
| **发布节奏** | Beta 先行 | 静默合并 | 静默 | 稳定版发布 |

**OpenClaw 优势：** 唯一具备 Fleet 级管理能力的项目，Gateway 架构支持多租户场景，Compaction 模型别名统一解析体现架构前瞻性。

**OpenClaw 短板：** 内存泄漏问题持续 13 天未解决，Gateway RSS 从 350MB 膨胀至 15.5GB 的 P0 级问题尚未有 Fix PR，与 Hermes Agent 的快速迭代形成对比。

---

## 4. 共同关注的技术方向

### 4.1 多渠道集成（Discord/Telegram/飞书）

| 项目 | 具体诉求 | 进展 |
|------|----------|------|
| **OpenClaw** | Mattermost、Discord、Feishu 功能需求活跃 | 多 PR 推进中 |
| **Hermes Agent** | 多 Telegram Bot 路由（#10452，7 评论） | 长期未解决 |
| **cc-haha** | 飞书 ASR 集成（PR #888） | 待合并 |
| **Codex++** | 插件市场多渠道支持 | 功能规划中 |

**行业信号：** 跨平台消息统一接入正在成为标配能力。

### 4.2 稳定性与边界条件处理

| 问题类型 | 涉及项目 | 具体表现 |
|----------|----------|----------|
| **内存泄漏** | OpenClaw（Gateway 15.5GB） | P0 级，13 天未解决 |
| **会话状态管理** | OpenClaw、cc-haha | 多 Agent 崩溃、异步任务重复执行 |
| **流式响应边界** | cc-haha（Stream ended 错误） | PR #883 修复中 |
| **JSON 解析** | Codex++（多轮对话 400 错误） | ✅ v1.2.18 已修复 |

**行业信号：** 会话状态机、异步任务调度、流式响应边界处理是当前技术债务重灾区。

### 4.3 Provider 兼容性与身份伪装

| 项目 | 策略 | 目标 |
|------|------|------|
| **Hermes Agent** | google-antigravity 身份伪装（#50033） | 绕过 Google 后端限制 |
| **Hermes Agent** | GitHub Copilot 身份伪装（#50064） | 获取完整模型目录 |
| **OpenClaw** | DeepSeek 缓存优化（#94518） | 降低 Token 成本 |
| **Codex++** | API-key 认证优化（#1089） | 恢复 Fast service tier |

**行业信号：** Provider 锁定与限制正在驱动开源社区发展身份伪装/兼容层技术。

### 4.4 可观测性与运维体验

| 项目 | 功能需求 |
|------|----------|
| **OpenClaw** | 内存压力阈值可配置（#93817） |
| **Hermes Agent** | Gateway 配置热重载（#48693） |
| **Codex++** | 速率限制功能（#1130） |

**行业信号：** 从"能用"到"可运维"的升级需求正在浮现。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心价值** | Fleet 管理、多 Agent 编排 | 通用 CLI、Provider 聚合 | 桌面交互体验 | Codex 前端增强 |
| **差异化能力** | Gateway、Compaction、Subagent | MCP 桥接、身份伪装 | 语音输入、ASR | 富文本粘贴、模型映射 |
| **平台覆盖** | 全平台 | 全平台 | 桌面端 | 桌面端为主 |

### 5.2 目标用户

| 项目 | 核心用户画像 |
|------|--------------|
| **OpenClaw** | 企业/团队部署、多 Bot 运营者 |
| **Hermes Agent** | 开发者、CLI 爱好者、多 Provider 用户 |
| **cc-haha** | 终端用户、桌面交互偏好者 |
| **Codex++** | Codex 重度用户、API-key 用户 |

### 5.3 技术架构关键差异

| 架构维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|----------|----------|--------------|---------|---------|
| **通信模式** | Gateway 中心化 | 去中心化 CLI | 桌面应用 | 桌面应用 |
| **扩展机制** | Plugin + ACP | MCP + Provider | 插件 | 插件市场 |
| **存储架构** | SQLite → PostgreSQL（规划） | 插件化 | 本地 | 本地 |
| **发布策略** | Beta 先行 | 静默合并 | 静默 | 稳定版发布 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：超高速迭代                                         │
│  ├── OpenClaw（500 PR/日，41 Issues/日）                     │
│  └── Hermes Agent（500 PR/日，44 Issues/日）                  │
│       → 处于功能扩张期，Bug 处理能力面临挑战                   │
├─────────────────────────────────────────────────────────────┤
│  第二梯队：稳健迭代                                           │
│  ├── Codex++（5 PR/日，30 Issues/日，版本发布规范）            │
│       → 质量巩固阶段，Windows 平台问题需专项处理               │
├─────────────────────────────────────────────────────────────┤
│  第三梯队：积压压力                                           │
│  └── cc-haha（2 PR/日，7 Issues/日，0 关闭）                  │
│       → 维护者响应不足，需关注社区健康度                       │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度 | 判断依据 |
|------|--------|----------|
| **OpenClaw** | 🟡 发展中 | P0 问题积压、版本仍为 Beta，但社区规模大 |
| **Hermes Agent** | 🟡 发展中 | 功能快速迭代，Provider 兼容性问题多 |
| **cc-haha** | 🟢 早期 | Issue 响应不及时，功能边界清晰但维护不足 |
| **Codex++** | 🟢 早期稳定 | 版本发布规范，但 Windows 平台问题集中 |

---

## 7. 值得关注的趋势信号

### 7.1 技术趋势

| 趋势 | 证据 | 对开发者的建议 |
|------|------|----------------|
| **Provider 身份伪装成为标配** | Hermes Agent 的 google-antigravity、Copilot 伪装 PR | 关注 Provider 兼容层设计，预留绕过机制 |
| **多 Bot/多 Agent 路由需求爆发** | OpenClaw Fleet、Hermes 多 Telegram Bot | 架构设计时考虑多实例隔离与消息路由 |
| **异步任务可靠性成为瓶颈** | cc-haha 异步重复执行、OpenClaw 会话崩溃 | 加强状态机设计与幂等性保障 |
| **桌面端成为重要入口** | cc-haha、Codex++ 专注桌面体验 | 跨平台兼容性（尤其 Windows）需重点测试 |
| **可运维性需求上升** | 配置热重载、内存阈值暴露、速率限制 | 从"能用"向"可观测"升级 |

### 7.2 社区健康度警示

| 信号 | 项目 | 风险等级 |
|------|------|----------|
| P0 问题 13 天无 Fix PR | OpenClaw | ⚠️ 高 |
| Issue 0 关闭，积压增加 | cc-haha | ⚠️ 高 |
| Windows 平台问题集中爆发 | Codex++ | 🟡 中 |
| Provider 兼容性问题多发 | Hermes Agent | 🟡 中 |

### 7.3 行业参考价值

**对于 AI 智能体开发者：**
1. **会话状态管理**是当前技术债务核心，建议采用显式状态机而非隐式回调
2. **Provider 抽象层**设计需预留身份伪装与版本兼容空间
3. **内存管理**在长会话场景下需主动监控，避免 OOM
4. **跨平台测试**（尤其 Windows）应纳入 CI 流程

**对于技术决策者：**
1. OpenClaw 适合企业级 Fleet 部署，但需关注其 P0 问题解决进度
2. Hermes Agent 适合开发者/CLI 场景，Provider 灵活性强但稳定性待验证
3. cc-haha 与 Codex++ 适合个人用户，成熟度相对较低，评估引入风险

---

**报告生成时间：** 2026-06-22  
**数据来源：** 各项目 GitHub 仓库实时动态

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-06-22  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 项目保持极高的社区活跃度，共产生 **44 条 Issues 更新**（32 新开/活跃，12 已关闭）和 **500 条 PR 更新**（415 待合并，85 已合并/关闭）。项目整体呈现快速迭代态势，未发布新版本。今日焦点集中在 **google-antigravity 集成问题**、**macOS Intel 兼容性问题** 以及 **多 Telegram 机器人路由功能** 等议题上。代码层面，维护者正在系统性推进 `time.monotonic()` 替换以提升计时稳定性，同时多项 P2 级别 Bug 修复正在审查中。

---

## 2. 版本发布

**无新版本发布。** 今日未检测到 Release 动态，最近的版本发布信息请参阅项目 [Releases 页面](https://github.com/NousResearch/hermes-agent/releases)。

---

## 3. 项目进展

今日共有 **85 条 PR 已合并/关闭**，以下为值得关注的已合并项：

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#50599](https://github.com/NousResearch/hermes-agent/pull/50599) | fix(agent): use monotonic clock in display spinner | OPEN | 修复计时器因系统时钟调整导致的负值/膨胀问题 |
| [#50595](https://github.com/NousResearch/hermes-agent/pull/50595) | fix(agent): use monotonic clock in tool_executor | OPEN | 替换 17 处 `time.time()` 为 `time.monotonic()` |
| [#50593](https://github.com/NousResearch/hermes-agent/pull/50593) | fix(agent): use monotonic clock in chat_completion_helpers | OPEN | 替换 14 处 `time.time()` 为 `time.monotonic()` |
| [#50592](https://github.com/NousResearch/hermes-agent/pull/50592) | fix(cli): respect active sidecar venv paths | OPEN | 修复 `hermes doctor` 虚拟环境检测逻辑 |
| [#50591](https://github.com/NousResearch/hermes-agent/pull/50591) | fix(docker): add --extra feishu to Dockerfile uv sync | OPEN | 修复飞书频道在 Docker 环境中静默失败问题 |
| [#50590](https://github.com/NousResearch/hermes-agent/pull/50590) | fix(copilot): resolve empty base URL from the token-exchange endpoint | OPEN | 修复 GitHub Copilot 认证后 API 调用失败问题 |
| [#50589](https://github.com/NousResearch/hermes-agent/pull/50589) | fix(mcp): isolate a single failing stdio server from the bridge | OPEN | 修复 MCP 服务器故障隔离问题 |
| [#50572](https://github.com/NousResearch/hermes-agent/pull/50572) | fix(model_tools): honor model.context_length to skip OpenRouter probe | OPEN | 优化 CLI 启动速度，避免不必要的 OpenRouter 探测 |
| [#50033](https://github.com/NousResearch/hermes-agent/pull/50033) | feat(gemini): present authentic @google/gemini-cli identity | OPEN | 伪装 Gemini CLI 身份以兼容 Google 后端 |
| [#50064](https://github.com/NousResearch/hermes-agent/pull/50064) | feat(copilot): authentic @github/copilot CLI identity + Claude context + vision | OPEN | 伪装 Copilot CLI 身份以获取完整模型目录 |
| [#49644](https://github.com/NousResearch/hermes-agent/pull/49644) | feat(reasoning): accept "max" reasoning effort end-to-end | OPEN | 支持 `reasoning_effort: max` 参数 |

**项目整体向前迈进的要点：**
- **计时稳定性提升**：系统性替换 `time.time()` 为 `time.monotonic()`，避免 NTP 同步或手动时钟调整导致的计时错误
- **Provider 身份伪装**：针对 Google 和 GitHub 的身份验证绕过，使 Hermes 能访问更多模型和功能
- **Docker 兼容性修复**：确保飞书等可选集成在容器环境中正常工作

---

## 4. 社区热点

以下 Issues 和 PRs 今日讨论最为活跃（按评论数排序）：

### 4.1 Issues 热点

| 编号 | 标题 | 评论数 | 👍 | 状态 | 链接 |
|------|------|--------|-----|------|------|
| #10452 | [type/feature] Support multi Telegram bots for gateway routing | 7 | 4 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/10452) |
| #37505 | [type/bug] Hermes Desktop macOS DMG is arm64-only and fails on Intel Macs | 6 | 1 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/37505) |
| #41222 | [type/feature] Integrate Kanban Board into Desktop App | 4 | 6 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/41222) |
| #42033 | [type/bug] langfuse not receiving trace from hermes | 4 | 0 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/42033) |
| #50530 | [type/bug] google-antigravity 遗留 P2 集成问题汇总 | 3 | 0 | OPEN | [查看](https://github.com/NousResearch/hermes-agent/issues/50530) |
| #29294 | [type/feature] google-gemini-cli provider: Gemini CLI sunset for consumer tiers | 3 | 8 | CLOSED | [查看](https://github.com/NousResearch/hermes-agent/issues/29294) |
| #49701 | [type/bug] google-gemini-cli provider completely broken after Code Assist sunset | 3 | 0 | CLOSED | [查看](https://github.com/NousResearch/hermes-agent/issues/49701) |

**热点分析：**

1. **多 Telegram 机器人支持**（#10452，7 评论）：用户强烈要求 Hermes Gateway 支持同时运行多个 Telegram Bot，以便在主助手 Bot 和开发/团队 Bot 之间路由消息。这是生产环境中的常见需求。

2. **macOS Intel 兼容性问题**（#37505，6 评论）：官方 DMG 仅提供 arm64 版本，导致 Intel Mac 用户无法运行。这是一个阻塞性问题，影响大量现有用户。

3. **Kanban 看板集成**（#41222，4 评论，6 👍）：用户希望将独立的 Kanban 看板功能整合到桌面应用中，减少多工具切换的摩擦。

4. **google-antigravity 集成问题**（#50530，3 评论）：随着 Gemini CLI 于 6 月 18 日停用，google-antigravity provider 暴露了三个 P2 级别遗留问题，包括子代理崩溃、频繁重新认证和会话断点丢失。

### 4.2 PRs 热点

| 编号 | 标题 | 链接 |
|------|------|------|
| #50598 | feat(optional-skills): add genie VPS disk cleanup skill | [查看](https://github.com/NousResearch/hermes-agent/pull/50598) |
| #50596 | fix(tools): convert Windows native CWD to MSYS format for bash cd | [查看](https://github.com/NousResearch/hermes-agent/pull/50596) |
| #50073 | feat(compression): offload oversized single message to file-ref instead of 413 | [查看](https://github.com/NousResearch/hermes-agent/pull/50073) |
| #50586 | fix(agent): record cwd for TUI-created sessions | [查看](https://github.com/NousResearch/hermes-agent/pull/50586) |

---

## 5. Bug 与稳定性

今日共报告 **16 个新 Bug**（按严重程度 P2 > P3 排列）：

### P2 级别（高优先级）

| 编号 | 标题 | 组件 | 状态 | Fix PR | 链接 |
|------|------|------|------|--------|------|
| #50530 | google-antigravity 遗留集成问题汇总（子代理崩溃/并发掉线/400错误） | agent, tool/delegate | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/50530) |
| #35980 | oneshot fails closed without final response while chat -q -Q succeeds | cli, provider/copilot | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/35980) |
| #49983 | OpenRouter free models fail with HTTP 404: tool calling not supported on :free tier | agent, provider/openrouter | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/49983) |
| #50404 | Discord config is not profile-isolated | cli, tui, platform/discord | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/50404) |
| #50292 | fix(bedrock): non-Claude models routed through Anthropic SDK when config default is Claude | cli, provider/anthropic, provider/bedrock | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/50292) |
| #49008 | openai-codex image gen plugin: Codex backend rejects image_generation tool_choice (HTTP 400) | plugins, tool/vision, provider/openai | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/49008) |
| #50485 | MCP OAuth flow times out at 40s — connect_timeout too short for interactive OAuth | cli, tool/mcp, area/auth | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/50485) |
| #50449 | Desktop "Thinking" toggle snaps back on; config.set reasoning writes stranded top-level key | gateway, tui | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/50449) |

### P3 级别（中优先级）

| 编号 | 标题 | 组件 | 状态 | Fix PR | 链接 |
|------|------|------|------|--------|------|
| #37505 | Hermes Desktop macOS DMG is arm64-only and fails on Intel Macs | desktop, platform/macos | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/37505) |
| #42033 | langfuse not receiving trace from hermes | plugins | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/42033) |
| #37917 | Desktop (Windows): Ctrl +/- zoom does nothing | tui | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/37917) |
| #50553 | Switching configurations does not take effect | cli, tool/memory | CLOSED | - | [查看](https://github.com/NousResearch/hermes-agent/issues/50553) |
| #50537 | fix(title): duplicate auto-generated session titles cause unhandled ValueError | agent | OPEN | - | [查看](https://github.com/NousResearch/hermes-agent/issues/50537) |

**Bug 趋势分析：**
- **Provider 相关问题突出**：google-antigravity、OpenRouter、GitHub Copilot、Anthropic Bedrock 等多个 Provider 存在集成问题
- **桌面应用问题较多**：macOS 兼容性、Windows 快捷键、Thinking 切换等 UI/UX 问题
- **已有 Fix PR 的 Bug**：#50590（Copilot base URL）、#50589（MCP 故障隔离）、#50591（Docker 飞书支持）、#50586（TUI cwd 记录）

---

## 6. 功能请求与路线图信号

今日共提出 **14 个新功能请求**，以下为最值得关注的需求：

### 高优先级功能请求

| 编号 | 标题 | 评论数 | 👍 | 组件 | 链接 |
|------|------|--------|-----|------|------|
| #10452 | Support multi Telegram bots for gateway routing and send_message | 7 | 4 | gateway, platform/telegram | [查看](https://github.com/NousResearch/hermes-agent/issues/10452) |
| #41222 | Integrate Kanban Board into Desktop App | 4 | 6 | tui | [查看](https://github.com/NousResearch/hermes-agent/issues/41222) |
| #48693 | Gateway config hot-reload — detect config.yaml changes without /restart | 1 | 0 | gateway | [查看](https://github.com/NousResearch/hermes-agent/issues/48693) |
| #44672 | Background self-review: make the tool whitelist configurable | 2 | 0 | agent, tool/memory | [查看](https://github.com/NousResearch/hermes-agent/issues/44672) |
| #39882 | feat(hooks): add transcript_path to pre_tool_call / post_tool_call hook payload | 1 | 0 | plugins | [查看](https://github.com/NousResearch/hermes-agent/issues/39882) |
| #50460 | Feature: Convert API errors to human readable | 1 | 0 | cli | [查看](https://github.com/NousResearch/hermes-agent/issues/50460) |
| #41180 | [Strategy] Desktop app risks shifting Hermes from power-user harness to watered-down GUI | 1 | 0 | desktop | [查看](https://github.com/NousResearch/hermes-agent/issues/41180) |

**路线图信号分析：**

1. **多 Telegram 机器人支持**（#10452）：这是长期未解决的功能请求（自 2026-04-15 起），用户社区有明确需求，预计将成为 Gateway 组件的重点方向。

2. **Kanban 看板集成**（#41222）：获得 6 个 👍，表明用户对多代理工作流可视化有强烈需求。

3. **Gateway 配置热重载**（#48693）：用户希望无需重启即可应用配置变更，这是一个提升运维体验的实用功能。

4. **API 错误可读性**（#50460）：用户反馈当前错误信息过于技术化，希望转换为人类可读的描述。

5. **桌面应用战略讨论**（#41180）：有用户担忧桌面应用可能使 Hermes 从专业用户工具变为简化版 GUI，这是关于项目定位的战略性讨论。

**已有相关 PR 的功能请求：**

| 功能 | 相关 PR | 状态 |
|------|---------|------|
| google-antigravity 身份伪装 | [#50033](https://github.com/NousResearch/hermes-agent/pull/50033) | OPEN |
| GitHub Copilot 身份伪装 + Claude 支持 | [#50064](https://github.com/NousResearch/hermes-agent/pull/50064) | OPEN |
| reasoning_effort: max 支持 | [#49644](https://github.com/NousResearch/hermes-agent/pull/49644) | OPEN |
| 超大消息卸载到文件 |

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期：** 2026-06-22
**项目仓库：** [NanmiCoder/cc-haha](https://github.com/NanmiCoder/cc-haha)

---

## 1. 今日速览

2026年6月22日，cc-haha 项目保持较高社区活跃度。过去24小时内共产生7条 Issues 更新（全部为新开/活跃状态）和2条 Pull Requests（均处于待合并状态），无版本发布。值得注意的是，今日所有 Issues 均由用户新开，维护者尚未关闭任何 Issue，积压压力有所增加。从 Issue 类型分布来看，Bug 报告占比高达 **71%**（5/7），主要集中在会话管理、UI 渲染和异步任务处理等核心功能，说明项目在稳定性和边界场景处理方面仍需加强。PR 方面，两个待合并请求分别涉及功能增强（语音输入）和 Bug 修复（停止优化），整体推进态势良好。

---

## 2. 版本发布

**无新版本发布。**

根据项目动态，当前版本发布通道处于静默状态，建议关注者留意后续 Release 公告。

---

## 3. 项目进展

### 待合并 Pull Requests

| PR 编号 | 类型 | 标题 | 作者 | 规模 | 状态 |
|---------|------|------|------|------|------|
| [#888](https://github.com/NanmiCoder/cc-haha/pull/888) | enhancement | 桌面端语音输入（右 Alt 录音 → 智谱 ASR 转写） | @wishfay | XL | 待合并 |
| [#883](https://github.com/NanmiCoder/cc-haha/pull/883) | bug | 优化停止，出现 API Error: Stream ended without receiving any events | @zhbdesign | XS | 待合并 |

**PR #888 - 桌面端语音输入功能**

该 PR 引入了一项重要的交互增强功能：用户可通过按压右 Alt 键启动录音，再次按压结束，语音内容经智谱 ASR 模型（`glm-asr-2512`）转写后插入输入框。技术实现上采用前端录音 → 本地 server（端口 3456）→ ASR provider 的调用链，符合项目现有的安全架构（CSP 限制直连外部域名）。该功能为可选特性，语音识别模型可在设置中配置。**预计合并后将显著提升移动不便场景下的用户体验。**

**PR #883 - 停止优化修复**

该 PR 针对会话停止时偶发的 "Stream ended without receiving any events" 错误进行修复，属于流式响应边界条件处理优化。修改规模较小（XS），但对用户感知的稳定性有直接改善。

---

## 4. 社区热点

### 热门 Issues 讨论

| Issue 编号 | 类型 | 标题 | 评论数 | 热度评估 |
|------------|------|------|--------|----------|
| [#874](https://github.com/NanmiCoder/cc-haha/issues/874) | bug | 窗口无法拖动问题 | 1 | ⭐⭐⭐ |
| [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | bug | 会话结束后自己又回答消息 | 1 | ⭐⭐⭐ |
| [#860](https://github.com/NanmiCoder/cc-haha/issues/860) | question | Prompt is too long | 1 | ⭐⭐ |

**#874 窗口拖动问题** 是今日讨论深度最高的 Issue。作者 @VodooWaWa 提供了详细的根因分析，指出问题出在窗口创建时使用 `frame: false`（无边框模式），导致 Windows 平台上 `-webkit-app-region: drag` 拖拽区域的 hit-test 映射未正确生效。该 Issue 已产出较为完整的代码证据链，预计可快速转化为修复 PR。

**#882 会话结束后自动回复问题** 涉及会话状态管理逻辑。当用户主动结束会话后，系统仍持续回答消息，多轮不停止。该问题与 PR #883 的修复方向存在关联性，建议合并评估。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| 严重程度 | Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|----------|------------|------|------|---------------|
| 🔴 高 | [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | 会话结束后自己又回答消息，好几轮都不停止 | OPEN | 待关联 |
| 🔴 高 | [#884](https://github.com/NanmiCoder/cc-haha/issues/884) | 4.3版本依旧会出现卡住问题（权限询问未触发） | OPEN | 无 |
| 🟡 中 | [#886](https://github.com/NanmiCoder/cc-haha/issues/886) | 模型主动选择 agent 进行 run_in_background: true 时异步任务重复执行 | OPEN | 无 |
| 🟡 中 | [#885](https://github.com/NanmiCoder/cc-haha/issues/885) | 会话列表不显示气泡 | OPEN | 无 |
| 🟡 中 | [#874](https://github.com/NanmiCoder/cc-haha/issues/874) | 窗口无法拖动问题 | OPEN | 无（但有详细分析） |
| 🟢 低 | [#883](https://github.com/NanmiCoder/cc-haha/pull/883) | 停止时 Stream ended 错误 | 待合并 | ✅ PR 已提交 |

**关键观察：** 今日 Bug 报告呈现集中爆发态势，尤其是会话管理相关的 #882、#886、#884 三个 Issue 可能存在共同的技术根因（异步任务调度与状态机转换）。建议维护者优先进行关联分析，避免重复排查。

---

## 6. 功能请求与路线图信号

### 用户功能需求

| Issue 编号 | 类型 | 标题 | 需求分析 |
|------------|------|------|----------|
| [#888](https://github.com/NanmiCoder/cc-haha/pull/888) | enhancement | 桌面端语音输入 | 已提交 PR，接近可合并状态 |
| [#887](https://github.com/NanmiCoder/cc-haha/issues/887) | question | dreaming 应该出现在会话中吗 | 交互设计咨询，可能涉及产品决策 |

**#887 关于 "dreaming" 模式是否应出现在会话中的讨论** 值得关注。该 Issue 反映了用户对 AI 内部思考过程可见性的困惑，可能指向产品层面的 UX 优化需求（如增加开关选项或明确的状态指示）。

**路线图信号：** 从今日数据判断，下一版本可能聚焦于：
1. **稳定性修复**：会话状态管理、异步任务调度
2. **交互增强**：语音输入功能（PR #888）
3. **UI 优化**：窗口拖拽、会话列表渲染

---

## 7. 用户反馈摘要

### 核心痛点提炼

**会话可靠性问题（高频）**

多个用户反馈会话管理存在异常：
- 会话结束后系统仍持续回答（#882）
- 异步 agent 任务重复执行入口逻辑（#886）
- 版本 4.3 仍出现卡住问题（#884）

**UI/UX 问题（中频）**

- 窗口拖拽功能失效（#874）
- 会话列表气泡不显示（#885）

**使用体验问题（低频）**

- Prompt 过长导致问题（#860）
- 对 "dreaming" 模式行为不理解（#887）

### 正面信号

- 用户 @wishfay 主动提交了高质量的功能增强 PR（#888），说明项目生态活跃
- Issue #874 的作者提供了详细的根因分析，体现了较高的用户参与度

---

## 8. 待处理积压

### 需维护者关注的事项

| 优先级 | 编号 | 标题 | 创建时间 | 状态 | 备注 |
|--------|------|------|----------|------|------|
| ⚠️ 高 | [#860](https://github.com/NanmiCoder/cc-haha/issues/860) | Prompt is too long | 2026-06-18 | OPEN | 已4天未响应 |
| ⚠️ 高 | [#874](https://github.com/NanmiCoder/cc-haha/issues/874) | 窗口无法拖动问题 | 2026-06-19 | OPEN | 已3天未响应，有完整分析 |
| ⚠️ 高 | [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | 会话结束后自己又回答消息 | 2026-06-21 | OPEN | 严重 Bug，需优先处理 |
| ⚠️ 高 | [#884](https://github.com/NanmiCoder/cc-haha/issues/884) | 4.3版本卡住问题 | 2026-06-21 | OPEN | 严重 Bug，需优先处理 |
| ⚠️ 高 | [#886](https://github.com/NanmiCoder/cc-haha/issues/886) | 异步 agent 重复执行 | 2026-06-21 | OPEN | 严重 Bug，需优先处理 |
| ⚠️ 高 | [#885](https://github.com/NanmiCoder/cc-haha/issues/885) | 会话列表不显示气泡 | 2026-06-21 | OPEN | 需确认是否为回归问题 |

**积压分析：** 当前有 **6 个高优先级 Issue** 处于未响应状态，其中 5 个为今日新报告的 Bug。建议维护者尽快进行分类处理：
- **会话状态类 Bug**（#882、#884、#886）可能存在共同根因，建议关联分析
- **UI 类 Bug**（#874、#885）可考虑合并处理
- **Issue #860** 涉及 Prompt 工程实践，可考虑在文档中补充指导

---

## 总结

**项目健康度评估：** 🟡 良好但需关注稳定性

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | ⭐⭐⭐⭐ | 7 Issues + 2 PRs，活跃度高 |
| Bug 处理效率 | ⭐⭐ | 今日无 Issue 关闭，积压增加 |
| 功能推进 | ⭐⭐⭐⭐ | PR #888 接近合并，功能增强显著 |
| 响应及时性 | ⭐⭐ | 多个 Issue 超3天未响应 |

**建议行动项：**
1. 优先处理 #882、#884、#886 三个会话管理类 Bug
2. 评审并合并 PR #888（语音输入功能）
3. 关联分析 #883 与 #882 的修复方向
4. 回应 #874 的根因分析，确认修复计划

---

*报告生成时间：2026-06-22 | 数据来源：GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-22  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年6月22日，Codex++ 项目保持高度活跃。今日共处理 **30 条 Issues**（新开/活跃 24 条，关闭 6 条）和 **5 条 PRs**（待合并 3 条，已合并 2 条），并发布了 **v1.2.18** 版本。社区反馈显示，**JSON 解析 400 错误**问题已通过新版本修复，多个相关 Issues 已关闭。同时，**Windows 同步问题**、**启动/重启功能异常**和**插件市场显示问题**仍需关注。今日 PR 聚焦于 API-key 认证优化、富文本粘贴修复和跨架构更新检查等改进，项目整体处于稳健迭代状态。

---

## 2. 版本发布

### 🆕 v1.2.18 已发布

**发布时间：** 2026-06-22  
**发布页面：** https://github.com/BigPizzaV3/CodexPlusPlus/releases

#### 更新内容

| 修复项 | 描述 | 影响范围 |
|--------|------|----------|
| **插件市场配置容错** | 修复 `config.toml` 解析异常或插件市场写入失败时阻断应用启动的问题，现在仅记录诊断日志 | 启动/重启 |
| **多轮对话 JSON 解析** | 修复 Chat Completions 上游在多轮对话后出现 `BadRequestError` / JSON 解析 400 的问题，历史工具调用参数现已规范为合法 JSON 对象字符串 | 界面/交互 |
| **版本号更新** | 升至 v1.2.18 | — |

#### 验证方式
```bash
npm run vite:build
cargo build -p codex-plus-launcher -p codex-pl
```

#### 破坏性变更
**无**。本次为纯修复版本，配置解析异常不再阻断启动，用户可平滑升级。

---

## 3. 项目进展

### ✅ 已合并 PRs

| PR # | 标题 | 贡献者 | 状态 | 摘要 |
|------|------|--------|------|------|
| **#1132** | feat: 从Word等富文本来源粘贴到Codex时只保留纯文本 | @crazyi | ✅ 已合并 | 在「页面功能增强」面板新增「粘贴修复」开关，默认关闭。从 Word 等富文本粘贴到 Codex composer 时自动过滤富格式，仅保留纯文本，避免被误识别为图片/文件附件 |
| **#1133** | fix(update): Intel版本更新检查下载arm问题 | @crazyi | ✅ 已合并 | 修复 macOS 上「关于 → 检查更新」时 x86_64 机器可能返回 arm64 dmg 的跨架构下载问题 |

### 🔄 待合并 PRs

| PR # | 标题 | 贡献者 | 状态 | 摘要 |
|------|------|--------|------|------|
| **#1089** | fix: enable native fast service tier for API-key auth | @moooyy | 🔄 待合并 | 恢复 API-key 认证用户的 Codex 原生 Fast service tier 支持，使 API-key 用户与登录用户走相同的速度选择流程 |
| **#1148** | feat: 从Word等富文本来源粘贴到Codex时只保留纯文本 | @crazyi | 🔄 待合并 | 重新整理 commit 的 #1132，功能一致，预计即将合并 |
| **#1109** | feat: add model name rewriting for sub-agent spawn | @fgyuuang | 🔄 待合并 | 在协议代理层添加模型名称重写支持，当 relay profile 配置 `modelMappings` 且 `modelMappingsEnabled` 为 true 时，自动重写出站请求中的模型名称 |

**项目推进评估：** 今日合并 2 个 PR，主要聚焦于用户体验优化（粘贴修复）和跨平台兼容性（macOS 更新检查）。3 个待合并 PR 覆盖 API 认证优化、模型映射和功能增强，预计将在近期版本中落地。

---

## 4. 社区热点

### 🔥 今日最活跃 Issues

| Issue # | 类型 | 标题 | 评论数 | 👍 | 状态 | 链接 |
|---------|------|------|--------|-----|------|------|
| **#1118** | Bug | BadRequestError: OpenAIException - JSON 解析 400 错误 | **12** | 0 | ✅ 已关闭 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1118) |
| **#1101** | Bug | Windows 无法同步 | **5** | 0 | 🔴 进行中 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1101) |
| **#1100** | Bug | 400 报错 | **4** | 0 | ✅ 已关闭 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1100) |
| **#1098** | Bug | 400 报错 | **4** | 0 | ✅ 已关闭 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1098) |
| **#1007** | Bug | 使用自定义 API 代理时流式响应截断 | **3** | 0 | ✅ 已关闭 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1007) |
| **#596** | Bug | 转换格式错误 | **3** | 0 | 🔴 进行中 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/596) |

#### 热点分析

1. **#1118 - JSON 解析 400 错误（已修复）**
   - **核心诉求：** 多轮对话后出现 `Expecting ',' delimiter` 等 JSON 解析错误，导致任务中断
   - **根因：** 历史工具调用参数未规范化为合法 JSON
   - **状态：** v1.2.18 已修复，Issue 已关闭
   - **关联问题：** #1100、#1098、#1106 均属同类问题，已一并解决

2. **#1101 - Windows 无法同步（待解决）**
   - **核心诉求：** Windows 用户点击「立刻修复历史会话」后无法同步任何数据
   - **用户场景：** 会话管理界面能看到数据，但同步功能失效
   - **影响范围：** 供应商切换/配置写入模块

3. **#596 - 转换格式错误（长期未解决）**
   - **核心诉求：** Responses → Chat 转换器处理流式输出有问题，导致 502 Bad Gateway
   - **用户场景：** 使用本地代理（127.0.0.1:57321）时 DeepSeek 接口正常但 Codex++ 转换器异常
   - **状态：** 长期开放，需优先处理

---

## 5. Bug 与稳定性

### 🔴 高优先级（影响核心功能）

| Issue # | 标题 | 严重程度 | 状态 | 是否有 Fix PR | 链接 |
|---------|------|----------|------|---------------|------|
| **#1150** | 使用重启/启动按钮无法打开 codex | 🔴 高 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1150) |
| **#1143** | 打开软件后不到一分钟自动卡死闪退 | 🔴 高 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1143) |
| **#1139** | 内置浏览器闪退 | 🔴 高 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1139) |

**#1150 详情：** v1.2.18 中使用「重启 Codex++」和「启动 Codex++」按钮均无法打开 codex，手动启动 `codex-plus-plus.exe` 也失败，但启动原 codex 程序正常。

**#1143 详情：** 从 1.2.14 到 1.2.18 所有版本均存在此问题，打开软件后不到一分钟卡死闪退，点击供应商配置直接卡死，风扇狂转。

### 🟡 中优先级（影响用户体验）

| Issue # | 标题 | 严重程度 | 状态 | 是否有 Fix PR | 链接 |
|---------|------|----------|------|---------------|------|
| **#1101** | Windows 无法同步 | 🟡 中 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1101) |
| **#1145** | 删除的消息会自动恢复 | 🟡 中 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1145) |
| **#1144** | Windows 系统托盘图标不显示 | 🟡 中 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1144) |
| **#1141** | 窗口焦点变化时主窗口未预期闪烁 | 🟡 中 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1141) |
| **#1125** | 无法有效切换模型 | 🟡 中 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1125) |

### 🟢 低优先级（功能性问题）

| Issue # | 标题 | 严重程度 | 状态 | 是否有 Fix PR | 链接 |
|---------|------|----------|------|---------------|------|
| **#1131** | 插件市场无法显示已下载插件 | 🟢 低 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1131) |
| **#1146** | LM studio 本地模型错误后无法切回 GPT | 🟢 低 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1146) |
| **#1112** | Windows 上 /thread-sort-keys 重复失败 | 🟢 低 | 🔴 进行中 | 无 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1112) |

---

## 6. 功能请求与路线图信号

### 📋 今日新增功能请求

| Issue # | 标题 | 需求类型 | 预计影响 | 链接 |
|---------|------|----------|----------|------|
| **#1130** | 请求的速率限制 | Feature | 高 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1130) |
| **#1147** | 会话管理界面添加批量删除功能 | Feature | 中 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1147) |
| **#1136** | CODEX app 多开 | Feature | 中 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1136) |
| **#1134** | 无法导出远程项目（Linux 硬伤） | Feature | 中 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1134) |

#### 重点功能分析

1. **#1130 - 速率限制功能（高需求）**
   - **用户痛点：** Codex 请求频繁遭遇 429 Too Many Requests 错误，任务经常中断
   - **期望功能：** rpm/tpm 负载均衡，自定义最大请求数
   - **参考实现：** litellm 已有此功能
   - **纳入可能性：** ⭐⭐⭐⭐ 高。已有明确需求和参考实现，符合企业用户场景

2. **#1147 - 批量删除会话（明确需求）**
   - **用户痛点：** 删除大量会话需逐个操作，效率低下
   - **纳入可能性：** ⭐⭐⭐⭐ 高。功能明确，实现简单

3. **#1136 - CODEX app 多开（技术可行）**
   - **用户痛点：** 希望同一模型不同上游可同时工作
   - **技术方案：** 通过设置不同 `CODEX_HOME` 环境变量实现多实例
   - **纳入可能性：** ⭐⭐⭐ 中。需评估对现有架构的影响

4. **#1134 - 远程项目导出支持（长期需求）**
   - **用户痛点：** Linux 用户通过 SSH 远程连接时无法导出会话
   - **纳入可能性：** ⭐⭐ 中。涉及远程会话同步机制改造

### 🔄 与已有 PR 的关联

| 功能请求 | 对应 PR | 状态 | 匹配度 |
|----------|---------|------|--------|
| 模型名称映射 | #1109 | 待合并 | ✅ 高度匹配 |
| 富文本粘贴修复 | #1132 | 已合并 | ✅ 已实现 |
| API-key 认证优化 | #1089 | 待合并 | ✅ 相关 |

---

## 7. 用户反馈摘要

### ✅ 用户满意的改进

1. **v1.2.18 修复有效**
   - 多位用户反馈 JSON 解析 400 错误问题已解决（#1118、#1100、#1098、#1106 均已关闭）
   - 插件市场配置容错提升启动稳定性

2. **粘贴修复功能受欢迎**
   - PR #1132 合并后，用户反馈从 Word 粘贴不再出现格式错乱

### ❌ 用户反馈的痛点

1. **Windows 平台问题集中**
   - 同步功能失效（#1101）
   - 系统托盘图标不显示（#1144）
   - 窗口闪烁问题（#1141）
   - 卡死闪退问题（#1143）

2. **启动/重启功能异常**
   - #1150：v1.2.18 重启按钮失效
   - #499：长期存在的卡在启动界面问题

3. **插件市场体验差**
   - #1131：已下载插件显示异常
   - #1125：脚本市场加载失败

4. **远程/Linux 支持不足**
   - #1134：远程会话无法导出
   - #915：更新后对话清空

### 💡 用户建议

1. **速率限制功能**（#1130）：参考 litellm 实现 rpm/tpm 控制
2. **批量操作**（#1147）：会话管理需支持批量删除
3. **多开支持**（#1136）：支持 CODEX app 多实例运行

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 Issues

| Issue # | 创建日期 | 标题 | 状态 | 等待时间 | 优先级 | 链接 |
|---------|----------|------|------|----------|--------|------|
| **#596** | 2026-06-03 | 转换格式错误 | 🔴 进行中 | **19 天** | 🔴 高 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/596) |
| **#499** | 2026-06-01 | 点击重启 Codex++ 后卡在启动界面 | 🔴 进行中 | **21 天** | 🟡 中 | [查看](https://github.com/BigPizzaV3/CodexPlusPlus/issues/499) |

### 📌 建议优先处理

1. **#596 - 转换格式错误**
   - **原因：** Responses → Chat 转换器处理流式输出有问题
   - **影响：** 本地代理用户无法正常使用
   - **建议：** 安排专项修复

2. **#499 - 重启后卡在启动界面**
   - **原因：** 需代理才能进入 Codex
   - **影响：** 大量用户反馈
   - **建议：** 排查网络请求逻辑

3. **#1150 - v1.2.18 重启按钮失效**
   - **原因：** 新版本引入的回归问题
   - **影响：** 核心功能异常
   - **建议：** 紧急修复

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 今日活跃 Issues | 30 | 📈 +12

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*