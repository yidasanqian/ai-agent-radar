# OpenClaw 生态日报 2026-06-28

> Issues: 191 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-28 03:52 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-06-28  
**数据周期：** 过去 24 小时

---

## 1. 今日速览

OpenClaw 社区今日保持高度活跃，共产生 **191 条 Issues 更新**（含 184 条新开/活跃）和 **500 条 PR 更新**（含 449 条待合并）。项目整体处于快速迭代状态，但需关注以下信号：

- **稳定性风险上升**：内存泄漏（#91588）、堆内存未释放（#95915）、崩溃循环（#63998）等高优先级问题持续活跃，表明核心网关稳定性存在压力
- **功能需求旺盛**：多代理配置、敏感数据脱敏、远程 Reranker 等功能请求获得较多关注，可能影响下季度路线图
- **PR 吞吐量健康**：今日有 51 个 PR 合并/关闭，代码审查流程运转正常

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日合并/关闭的重要 PR：

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Autofix: add PR review autofix pipeline + Windows daemon | CLOSED | 新增 PR 自动修复流水线及 Windows 后台守护进程 |
| [#96006](https://github.com/openclaw/openclaw/pull/96006) | fix: use single-char ellipsis in commitments truncate() | CLOSED | 修复表格对齐问题 |
| [#95317](https://github.com/openclaw/openclaw/pull/95317) | fix #93041: Codex usage/limit UI 修复 | CLOSED | 修复 Control UI 聊天侧边栏配额显示回归 |
| [#95654](https://github.com/openclaw/openclaw/pull/95654) | fix(groups): use 'channel' wording in intro | CLOSED | 修复 Mattermost 群组类型措辞 |
| [#93954](https://github.com/openclaw/openclaw/pull/93954) | [codex] fail configure fast without a tty | CLOSED | 修复非 TTY 环境下的交互式配置 |

**待合并高优先级 PR**：

| PR 编号 | 标题 | 优先级 | 状态 |
|---------|------|--------|------|
| [#97350](https://github.com/openclaw/openclaw/pull/97350) | Add Codex native hook relay memory guard | P1 | needs proof |
| [#97344](https://github.com/openclaw/openclaw/pull/97344) | fix(zai): reject onboarding command auth profiles | P1 | ready for maintainer look |
| [#97354](https://github.com/openclaw/openclaw/pull/97354) | fix: scanned PDF pages reach chat vision models | P2 | ready for maintainer look |
| [#96938](https://github.com/openclaw/openclaw/pull/96938) | fix(utils): keep reply directive ids unicode-safe | P2 | ready for maintainer look |

---

## 4. 社区热点

今日讨论最活跃的 Issues（按评论数排序）：

### Top 5 热门 Issues

**1. [Agent 承诺后续行动但未实际执行](https://github.com/openclaw/openclaw/issues/58450)** ⭐ 15 评论  
**问题**：Agent 轮次结束时向用户承诺"我会检查项目内存后回复"，但未启动任何后台操作、子代理或定时任务。  
**诉求**：Agent 应在无法实际执行后续行动时，避免做出虚假承诺。

**2. [严重内存泄漏：RSS 从 350MB 增长至 15.5GB](https://github.com/openclaw/openclaw/issues/91588)** 🔴 P0 14 评论  
**问题**：网关进程 RSS 在 2-3 天内从 350MB 增长至 15.5GB，最终触发 OOM 被杀，导致 `launchd-handoff` 循环重启。  
**影响**：生产环境稳定性严重受损，需优先处理。

**3. [Heartbeat 隔离模式多重回归](https://github.com/openclaw/openclaw/issues/65161)** 🟡 P2 14 评论  
**问题**：心跳计划任务在首次重载脉冲后停止；`heartbeat last` 误标记 exec-event；lightContext 保持 heavy 状态。  
**诉求**：修复心跳系统隔离模式下的多重功能退化。

**4. [Coding Agent 无法完成任何任务（回归）](https://github.com/openclaw/openclaw/issues/62505)** 🟡 P1 14 评论  
**问题**：Coding Agent 在 2026.4.10+ 版本中无法执行实际工作，仅输出模糊状态更新。  
**影响**：回归问题，影响核心使用场景。

**5. [Amazon Bedrock Mantle 缺少 discovery 配置项](https://github.com/openclaw/openclaw/issues/67288)** 🟡 P2 11 评论  
**问题**：与 `amazon-bedrock` 不同，`amazon-bedrock-mantle` 缺少 `config.discovery.enabled` 选项，导致每次请求都执行不必要的 IAM token 发现。  
**诉求**：添加配置项以支持禁用 discovery。

---

## 5. Bug 与稳定性

### 严重 Bug（需立即关注）

| Issue | 标题 | 优先级 | 状态 | Fix PR |
|-------|------|--------|------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 严重内存泄漏：RSS 15.5GB，OOM 崩溃 | P0 | OPEN | ❌ |
| [#95915](https://github.com/openclaw/openclaw/issues/95915) | 嵌入式运行中止时堆未释放，session 写锁持续 | P1 | CLOSED | ❌ |
| [#95833](https://github.com/openclaw/openclaw/issues/95833) | 子代理中止未释放 .jsonl.lock，永久破坏 session | P1 | CLOSED | ❌ |
| [#63998](https://github.com/openclaw/openclaw/issues/63998) | Session 转录 doomloop：崩溃重启循环导致 OOM | P1 | OPEN | ❌ |
| [#87263](https://github.com/openclaw/openclaw/issues/87263) | iMessage RPC watch.subscribe 超时，通道失效 | P1 | CLOSED | ❌ |

### 中等 Bug（需近期处理）

| Issue | 标题 | 优先级 | 状态 | Fix PR |
|-------|------|--------|------|--------|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 无法完成任务（回归） | P1 | OPEN | ❌ |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 相同 session key 反复硬重置 | P1 | OPEN | ❌ |
| [#64810](https://github.com/openclaw/openclaw/issues/64810) | Heartbeat/异步事件打断 Telegram 回复 | P1 | OPEN | ❌ |
| [#65624](https://github.com/openclaw/openclaw/issues/65624) | Mattermost 斜杠命令暴露可重用 token（安全） | P1 | OPEN | ❌ |
| [#69943](https://github.com/openclaw/openclaw/issues/69943) | session-memory hook 保存原始 token 导致中毒循环 | P1 | OPEN | ❌ |

### 回归问题汇总

| Issue | 标题 | 回归版本 | 状态 |
|-------|------|----------|------|
| [#62505](https://github.com/openclaw/openclaw/issues/62505) | Coding Agent 无法完成任务 | 2026.4.10 | OPEN |
| [#58737](https://github.com/openclaw/openclaw/issues/58737) | Slack 编辑消息后显示名/头像恢复默认 | ? | OPEN |
| [#67136](https://github.com/openclaw/openclaw/issues/67136) | Write 工具报告成功但未创建文件 | ? | OPEN |
| [#68264](https://github.com/openclaw/openclaw/issues/68264) | Canvas/Browser UI 可视化在聊天环境中渲染失败 | ? | OPEN |

---

## 6. 功能请求与路线图信号

### 高关注度功能请求

| Issue | 标题 | 👍 | 优先级 | 分析 |
|-------|------|-----|--------|------|
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault 配置 | 9 | P1 | 多代理场景核心需求，可能纳入下版本 |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | 敏感数据脱敏支持 | 0 | P1 | 安全相关，呼声高但实现复杂度中等 |
| [#64438](https://github.com/openclaw/openclaw/issues/64438) | 远程 Reranker 端点支持 | 0 | P2 | 企业场景需求，与现有 embedding provider 架构一致 |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | Per-Agent TTS/STT 配置覆盖 | 1 | P2 | 多语言/多音色场景需求 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Per-agent dreaming 配置 | 5 | P2 | 解决同时 dreaming 导致的 OOM 问题 |
| [#66944](https://github.com/openclaw/openclaw/issues/66944) | 插件 UI 扩展系统 | 4 | P2 | 生态扩展性需求 |

### 路线图信号

1. **多代理隔离**：多个 Issue 反映当前多代理共享资源导致的问题（dreaming、memory-wiki），预计下季度会有专项改进
2. **安全加固**：敏感数据脱敏（#64046）、Mattermost token 暴露（#65624）等安全 Issue 获得关注
3. **可访问性**：[屏幕阅读器逐 token 播报问题](https://github.com/openclaw/openclaw/issues/65538) 表明 Control UI 可访问性需改进

---

## 7. 用户反馈摘要

### 核心痛点

1. **内存管理失控**
   > "RSS grows from ~350 MB at startup to 15.5 GB over 2-3 days of normal use, eventually causing the process to be killed by the OS OOM killer."
   - 用户反映生产环境需每日重启网关

2. **Session 状态不稳定**
   > "Gateway enters an unrecoverable crash loop when a session transcript grows large enough to overflow context on reload."
   - 长会话场景下系统不可靠

3. **Heartbeat 系统问题**
   > "In Telegram forum-topic sessions, heartbeat/system-event turns can preempt an in-progress user reply and make the original answer effectively disappear."
   - 影响用户体验和消息可靠性

### 满意点

- 多渠道集成（Telegram、Slack、Feishu 等）覆盖全面
- CLI 工具链成熟（`openclaw doctor`、`openclaw backup` 等）
- 插件系统灵活

### 改进建议

- 需加强回归测试覆盖（多个回归问题表明版本间质量不稳定）
- 建议增加内存使用监控和自动告警机制
- 多代理场景需更好的隔离机制

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>30 天无维护者回复）

| Issue | 标题 | 创建日期 | 优先级 | 状态标签 |
|-------|------|----------|--------|----------|
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | Model switch fails silently when context too large | 2026-04-01 | P1 | stale |
| [#66443](https://github.com/openclaw/openclaw/issues/66443) | Overflow recovery duplicates role=user messages | 2026-04-14 | P1 | stale |
| [#67915](https://github.com/openclaw/openclaw/issues/67915) | Local assistant attachments "Unavailable" | 2026-04-17 | P2 | stale |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Per-agent dreaming configuration | 2026-04-15 | P2 | stale |
| [#65774](https://github.com/openclaw/openclaw/issues/65774) | Cron 在非工作时间发送 WhatsApp 消息 | 2026-04-13 | P1 | stale |

### 建议维护者关注

1. **P0/P1 Issue 响应延迟**：多个高优先级 Issue 超过 60 天未分配 fix PR
2. **回归问题积压**：至少 4 个回归问题持续活跃，影响用户信任
3. **安全 Issue 需优先处理**：Mattermost token 暴露（#65624）CVSS 8.6

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 总数 | 191 |
| - 新开/活跃 | 184 |
| - 已关闭 | 7 |
| PRs 总数 | 500 |
| - 待合并 | 449 |
| - 已合并/关闭 | 51 |
| 新版本发布 | 0 |
| 热门 Issue 评论数峰值 | 15 |
| P0/P1 Issue 数 | ~15 |

---

*报告生成时间：2026-06-28*  
*数据来源：GitHub OpenClaw 仓库*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-06-28  
**覆盖项目：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"两极分化、垂直分化"**的格局。以 OpenClaw 和 Hermes Agent 为代表的头部项目日均产生 150-200 条 Issues 和 500 条 PRs，处于高速迭代期，但均面临严峻的稳定性挑战——OpenClaw 的 P0 内存泄漏（RSS 从 350MB 膨胀至 15.5GB）和 Hermes Agent 的安全漏洞（Honcho Recall 泄露）表明核心架构仍在经受生产环境考验。cc-haha 和 Codex++ 则代表轻量化垂直工具方向，前者聚焦 Claude Code 桌面增强，后者深耕 Codex 生态扩展，均保持稳定迭代节奏。值得关注的是，**多 Agent 协作、跨设备同步、安全加固**正成为跨项目的共识性需求，预示着生态正从单点工具向平台化方向演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃) | PRs (待合并/已合并) | Release (今日) | 核心 Bug (P0/P1) | 健康度评估 |
|------|------------------|---------------------|----------------|-------------------|------------|
| **OpenClaw** | 184 / 191 | 449 / 51 | 0 | 5 个 P0/P1 未解决 | 🟡 风险上升 |
| **Hermes Agent** | 94 / 156 | 321 / 179 | 0 | 6 个 P1 未解决 | 🟢 稳健 |
| **cc-haha** | 4 / 5 | 1 / 0 | 0 | 2 个高优先级未解决 | 🟢 平稳 |
| **Codex++** | 18 / 21 | 1 / 4 | 3 (v1.2.19-21) | 3 个高优先级未解决 | 🟢 良好 |

**关键数据洞察：**

- **代码吞吐量**：Hermes Agent 的 PR 合并效率最高（179/500 = 35.8%），OpenClaw 积压最重（449 待合并）
- **版本发布节奏**：Codex++ 是唯一保持高频发布的项目，3 天内发布 3 个版本
- **Bug 压力**：OpenClaw 和 Hermes Agent 的 P1+ Bug 数量相当，但 OpenClaw 存在 P0 内存泄漏未解决

---

## 3. OpenClaw 在生态中的定位

### 优势

- **多渠道集成覆盖最广**：支持 Telegram、Slack、Mattermost、飞书等 10+ 渠道，生态接入能力领先
- **CLI 工具链成熟**：提供 `openclaw doctor`、`openclaw backup` 等生产级运维工具
- **社区规模最大**：日均 191 条 Issues，远超 cc-haha（5 条）和 Codex++（21 条）

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **架构定位** | 通用网关/多 Agent 编排 | 本地 Agent 运行时 | Claude Code 桌面增强 | Codex 生态扩展 |
| **核心能力** | 多渠道接入 + Agent 协作 | 技能管理（Curator）+ 本地记忆 | 协议转换 + 桌面集成 | 模型路由 + 插件市场 |
| **平台侧重** | 跨平台（Linux 为主） | 跨平台（Windows 问题较多） | 跨平台（Windows 痛点明显） | 跨平台（macOS 子进程泄漏已修复） |

### 社区规模对比

- **OpenClaw**：日均 191 Issues + 500 PRs → 头部项目，社区活跃但质量承压
- **Hermes Agent**：日均 156 Issues + 500 PRs → 头部项目，Curator 技能管理模块贡献突出
- **cc-haha**：日均 5 Issues + 1 PR → 小型工具社区，聚焦特定场景
- **Codex++**：日均 21 Issues + 5 PRs → 中型社区，迭代速度快

---

## 4. 共同关注的技术方向

### 4.1 多 Agent 资源隔离

| 项目 | 具体诉求 | 关联 Issue |
|------|----------|------------|
| **OpenClaw** | Per-agent dreaming 配置、memory-wiki vault 隔离 | #67413, #63829 |
| **Hermes Agent** | Curator 防止误删活跃技能、跨 Agent 记忆隔离 | #29912, #40170 |
| **cc-haha** | Sidecar 内存占用异常（疑似会话过大导致） | #933 |

**分析**：多 Agent 共享资源导致的 OOM、状态污染问题已成为行业共性问题，预计下季度各项目均会推出隔离机制改进。

### 4.2 安全加固

| 项目 | 具体诉求 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | Mattermost token 暴露（CVSS 8.6）、敏感数据脱敏 | 🔴 紧急 |
| **Hermes Agent** | Honcho Recall 泄露、Gateway 凭据清理 | 🔴 紧急 |
| **cc-haha** | setting.json 权限问题、MCP 创建异常 | 🟡 中等 |

**分析**：安全相关 Issue 在两个头部项目均获高优先级响应，Gateway/Agent 的消息脱敏和凭据管理是共同的技术盲点。

### 4.3 跨设备/跨平台同步

| 项目 | 具体诉求 | 优先级 |
|------|----------|--------|
| **Hermes Agent** | 跨 PC、笔记本同步配置、技能、记忆 | 👍 14 |
| **cc-haha** | 便携模式 vs 安装模式配置一致性 | 🟡 中 |

### 4.4 平台稳定性

| 项目 | 平台问题 | 状态 |
|------|----------|------|
| **Hermes Agent** | Windows 桌面编译失败、启动崩溃、子进程窗口闪烁 | 多个 PR 修复中 |
| **cc-haha** | Windows v0.4.3 Socket 连接异常、进程卡死 | 进行中 |
| **Codex++** | macOS 子进程泄漏（已修复）、Windows 安装失败 | 部分已修复 |

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心价值主张 | 目标用户 |
|------|--------------|----------|
| **OpenClaw** | 多渠道接入 + 多 Agent 编排网关 | 需要统一管理多个 IM 渠道和 Agent 的团队 |
| **Hermes Agent** | 本地 Agent 运行时 + 技能管理 | 注重隐私、希望本地运行 AI Agent 的开发者 |
| **cc-haha** | Claude Code 桌面增强 + 协议转换 | Claude Code 用户，寻求更好的桌面集成体验 |
| **Codex++** | Codex 生态扩展 + 多模型路由 | Codex 重度用户，需要插件和模型管理能力 |

### 技术架构差异

```
OpenClaw:     Gateway (多渠道) → Agent Core → Tool Plugins
              └── 强调: 横向扩展、多租户

Hermes Agent: CLI/TUI/Desktop → Agent Runtime → Curator (技能管理) → Local Memory
              └── 强调: 本地化、隐私、模块化技能

cc-haha:      Desktop App → Claude Code Sidecar → Protocol Bridge
              └── 强调: 轻量、协议兼容

Codex++:      Browser Extension / Desktop → Codex Core → Model Router → Plugin Market
              └── 强调: 垂直生态、用户体验
```

### 目标用户分层

- **企业/团队用户**：OpenClaw（多渠道管理）、Hermes Agent（本地部署需求）
- **个人开发者**：cc-haha（Claude Code 增强）、Codex++（Codex 增强）
- **生态玩家**：Codex++（插件市场）、Hermes Agent（技能市场潜力）

---

## 6. 社区热度与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|------|------|------|----------|
| **第一梯队** | OpenClaw, Hermes Agent | 日均 150-200 Issues，500 PRs | 🔥 快速迭代期，架构压力大 |
| **第二梯队** | Codex++ | 日均 20 Issues，5 PRs，频繁发版 | ⚡ 快速增长期，功能完善中 |
| **第三梯队** | cc-haha | 日均 5 Issues，1 PR | 📦 稳定维护期，功能相对成熟 |

### 成熟度评估

| 项目 | 回归问题数 | 安全 Issue 数 | 积压 Issue 响应延迟 | 阶段判断 |
|------|------------|--------------|---------------------|----------|
| **OpenClaw** | 4 个活跃回归 | 1 个 P1 安全 | 多个 P1 >60 天未响应 | ⚠️ 质量巩固期前需先解决稳定性 |
| **Hermes Agent** | 3 个已关闭 | 2 个 P1 安全 | 相对及时 | 🟡 质量与速度平衡中 |
| **cc-haha** | 无明显回归 | 无高危安全 | 7 天内响应 | 🟢 成熟度较高 |
| **Codex++** | 配置覆盖问题 | 无高危安全 | 部分 Issue >7 天未响应 | 🟢 功能迭代期 |

**关键洞察**：OpenClaw 和 Hermes Agent 均处于"快速迭代但质量承压"阶段，需要在保持代码吞吐量的同时加强回归测试和 Issue 响应机制。cc-haha 和 Codex++ 则处于相对健康的迭代节奏。

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势

| 趋势 | 证据 | 对开发者的参考价值 |
|------|------|-------------------|
| **Agent 间协议标准化** | cc-haha 正在评估 ACP (Agent Client Protocol) 支持，Anthropic 官方已推动 | 跨 Agent 互操作性将成为生态竞争焦点 |
| **本地化 Agent 运行时需求上升** | Hermes Agent 的 Curator 技能管理、cc-haha 的 Sidecar 架构 | 隐私敏感场景推动本地 Agent 基础设施需求 |
| **多 Agent 隔离成为刚需** | OpenClaw 和 Hermes Agent 均有资源隔离诉求 | 架构设计需提前考虑 Agent 沙箱化 |
| **桌面端体验竞争加剧** | Dashboard 主题可读性（44 👍）、Windows 平台问题集中爆发 | 桌面应用质量和跨平台兼容性是用户体验关键 |
| **插件生态货币化潜力** | Codex++ 插件市场、product design 插件需求（13 评论） | 插件生态是差异化竞争的重要方向 |

### 7.2 技术债务预警

| 项目 | 技术债务信号 | 风险等级 |
|------|--------------|----------|
| **OpenClaw** | P0 内存泄漏未解决、多 P1 Issue >60 天积压 | 🔴 高 |
| **Hermes Agent** | 安全漏洞（Honcho Recall）未修复、测试套件曾损坏 | 🔴 高 |
| **cc-haha** | v0.4.3 版本稳定性问题持续 7 天 | 🟡 中 |
| **Codex++** | 配置迁移逻辑缺陷导致数据丢失 | 🟡 中 |

### 7.3 路线图信号

基于社区反馈，以下功能可能在未来 1-2 个季度成为各项目迭代重点：

1. **多 Agent 资源隔离机制**（OpenClaw, Hermes Agent）
2. **敏感信息脱敏和安全加固**（OpenClaw, Hermes Agent）
3. **跨设备配置同步**（Hermes Agent）
4. **ACP/协议标准化支持**（cc-haha）
5. **插件市场完善**（Codex++）
6. **Windows 平台稳定性专项**（Hermes Agent, cc-haha）

---

## 总结

| 维度 | 核心结论 |
|------|----------|
| **生态格局** | 头部项目（OpenClaw, Hermes Agent）主导社区活跃度，但均面临稳定性挑战；垂直工具（cc-haha, Codex++）定位清晰，迭代健康 |
| **OpenClaw 定位** | 多渠道 + 多 Agent 编排网关，社区规模最大，但技术债务较重，需优先解决 P0 内存泄漏和回归问题 |
| **共同方向** | 多 Agent 隔离、安全加固、跨设备同步、平台稳定性是跨项目共识需求 |
| **差异化** | OpenClaw 面向企业多渠道场景，Hermes Agent 面向本地隐私需求，cc-haha/Codex++ 面向特定生态增强 |
| **趋势判断** | Agent 协议标准化、本地化运行时、插件生态是下一阶段竞争焦点 |

**建议技术决策者关注**：OpenClaw 和 Hermes Agent 的架构演进方向（隔离机制设计）、cc-haha 的 ACP 支持进展（协议互操作性风向标）、Codex++ 的插件生态建设（垂直生态货币化参考）。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-06-28  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

2026年6月28日，Hermes Agent 项目保持极高活跃度。过去24小时内共产生 **156 条 Issues 更新**（94条新开/活跃，62条关闭）和 **500 条 PR 更新**（321条待合并，179条已合并/关闭）。今日未发布新版本，但社区贡献依然强劲——多个 P1 级安全和稳定性 Bug 已通过 PR 修复并合并，涵盖 Curator 技能管理、Gateway 进程控制、认证凭据处理等核心模块。值得注意的是，Windows 平台相关问题（桌面崩溃、子进程窗口闪烁）成为今日热点，多个 PR 同步推进修复。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日共合并/关闭 **179 条 PR**，以下为重要进展：

### 核心修复与改进

| PR 编号 | 描述 | 合并时间 |
|---------|------|----------|
| [#30108](https://github.com/NousResearch/hermes-agent/pull/30108) | **fix(curator): skip archival of skills referenced by active cron jobs** — 修复 Curator 在 cron 作业仍在引用技能时将其归档的 Bug，避免定时任务静默失败 | 2026-06-28 |
| [#52174](https://github.com/NousResearch/hermes-agent/pull/52174) | **fix(curator): prevent permanent skill deletion in LLM consolidation pass** — 强化 Curator 的 LLM 整合流程，确保技能仅归档至 `~/.hermes/skills/.archive/`，永不永久删除 | 2026-06-28 |
| [#26688](https://github.com/NousResearch/hermes-agent/pull/26688) | **fix(curator): keep consolidation on archive moves** — 修复归档移动时的 Curator 整合逻辑，保持 consolidation 状态 | 2026-06-28 |
| [#40411](https://github.com/NousResearch/hermes-agent/pull/40411) | **fix: protect bundled skills from curator deletion** — 防止第一方捆绑技能在 Curator/Agent 流程中被移除后跨 `hermes update` 丢失 | 2026-06-28 |
| [#44816](https://github.com/NousResearch/hermes-agent/pull/44816) | **fix(curator): verify reference files exist on disk after consolidation** — 修复 Curator 在整合技能时静默丢失引用子文件的问题 | 2026-06-28 |
| [#34965](https://github.com/NousResearch/hermes-agent/pull/34965) | **Preserve retrieval entrypoints during curator consolidation** — 防止 Curator 在整合技能时破坏检索入口点 | 2026-06-28 |
| [#35769](https://github.com/NousResearch/hermes-agent/pull/35769) | **fix(gateway): scrub subprocess credential env** — 清理 Gateway 适配器和运行时集成中残留的平台凭据，防止本地终端和代码执行子进程泄露 | 2026-06-28 |
| [#37420](https://github.com/NousResearch/hermes-agent/pull/37420) | **fix(gateway): avoid Matrix pending invite boot loops** — 修复 Matrix 待处理邀请导致的网关连接/重连循环问题 | 2026-06-28 |
| [#53940](https://github.com/NousResearch/hermes-agent/pull/53940) | **test(fallback): fix flaky cooldown-window timing assertion** — 修复 CI 高负载下不稳定的测试断言 | 2026-06-28 |

### 新功能与特性

| PR 编号 | 描述 | 状态 |
|---------|------|------|
| [#53969](https://github.com/NousResearch/hermes-agent/pull/53969) | **feat(gateway): add /side ephemeral fork command** — 新增 `/side` 命令，将当前会话分叉为临时侧对话，复制父级转录并注入边界提示 | OPEN |
| [#53968](https://github.com/NousResearch/hermes-agent/pull/53968) | **fix(mcp): let OAuth discovery run before HTML preflight** — 允许 OAuth MCP 服务器在通用 HTTP content-type preflight 拒绝未认证 HTML 重定向之前完成 OAuth 发现流程 | OPEN |
| [#44073](https://github.com/NousResearch/hermes-agent/pull/44073) | **security: fail-closed gateway defaults and external-surface hardening** — 使运行时行为与 `SECURITY.md` 2.6.2 节对齐，确保外部可访问的消息、网关、API 和工具套接字默认关闭 | OPEN |

### Windows 平台专项修复

| PR 编号 | 描述 |
|---------|------|
| [#53961](https://github.com/NousResearch/hermes-agent/pull/53961) | **fix: hide gh subprocess windows on Windows** — 读取 Copilot 凭据时隐藏 gh 子进程窗口 |
| [#53962](https://github.com/NousResearch/hermes-agent/pull/53962) | **fix(cli): suppress PseudoConsoleWindow flash** — 禁止 `gh auth token/status` 调用时出现的控制台窗口闪烁 |

### 其他重要修复

| PR 编号 | 描述 |
|---------|------|
| [#53927](https://github.com/NousResearch/hermes-agent/pull/53927) | **fix(skills): sync_skills no longer shadows external_dirs** — 修复 `sync_skills` 覆盖 `skills.external_dirs` 配置导致的 worker 代理崩溃 |
| [#53939](https://github.com/NousResearch/hermes-agent/pull/53939) | **fix(tui): sanitize replay history on WebUI/TUI session resume** — 修复会话在工具循环中途死亡后永久卡在 "thinking" 状态的问题 |
| [#53929](https://github.com/NousResearch/hermes-agent/pull/53929) | **fix(cli): correct stale `hermes auth login nous` hints** — 修正6处误导性命令提示（`hermes auth login nous` → `hermes auth add nous`） |
| [#53966](https://github.com/NousResearch/hermes-agent/pull/53966) | **fix(dashboard): keep session DB reads off event loop** — 修复桌面启动时的仪表板事件循环饥饿问题 |
| [#53964](https://github.com/NousResearch/hermes-agent/pull/53964) | **fix: escape unknown desktop markdown tags** — 转义桌面端未知的 HTML 标签，防止渲染问题 |
| [#53965](https://github.com/NousResearch/hermes-agent/pull/53965) | **fix: pass video reference inputs to providers** — 为 `video_generate` schema 添加视频/音频引用字段支持 |

---

## 4. 社区热点

以下 Issues 和 PRs 今日讨论最为活跃：

### 热门 Issues（按评论数排序）

| 排名 | Issue | 评论数 | 👍 | 核心诉求 |
|------|-------|--------|-----|---------|
| 1 | [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) - Dashboard 主题改进 | 25 | 44 | 用户抱怨当前主题（Midnight、Ember、Mono、Cyberpunk、Rose）字体和颜色选择不符合标准，小字体低对比度导致可读性差，强烈要求改进 |
| 2 | [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) - Windows 桌面应用编译失败 | 14 | 1 | `hermes update` 或 `hermes desktop` 在编译 Electron 应用最终阶段失败 |
| 3 | [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) - OpenAI-Codex 凭据池丢失问题 | 9 | 1 | 凭据轮换时 `auth.json` 重写导致新添加的凭据丢失（**已关闭**） |
| 4 | [#52919](https://github.com/NousResearch/hermes-agent/issues/52919) - Nix 构建被 package-lock.json 破坏 | 9 | 0 | commit `ff81365` 移除了多个依赖导致 Nix 构建失败（**已关闭**） |
| 5 | [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) - Curator 归档活跃技能 | 8 | 1 | Curator 在未验证整合成功的情况下归档了10个正在运行的技能（**已关闭**） |
| 6 | [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) - Windows 11 桌面应用启动崩溃 | 8 | 0 | Hermes Desktop v40.9.3 在 Windows 11 上启动时崩溃（0x80000003 断点异常） |
| 7 | [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) - 跨设备配置云同步 | 7 | 14 | 用户请求跨 PC、笔记本等多设备同步 Hermes 配置、技能、会话和记忆 |
| 8 | [#28161](https://github.com/NousResearch/hermes-agent/issues/28161) - Anthropic 流式处理挂起 | 7 | 0 | Anthropic 流式清理路径错误调用 `_replace_primary_openai_client` 导致15分钟挂起（**已关闭**） |
| 9 | [#25184](https://github.com/NousResearch/hermes-agent/issues/25184) - Mattermost 移动端无法发送命令 | 7 | 1 | Mattermost 移动应用阻止发送以 `/` 开头的消息 |
| 10 | [#29092](https://github.com/NousResearch/hermes-agent/issues/29092) - Gateway 服务 SIGTERM 抖动循环 | 6 | 0 | 多配置文件启用 Gateway systemd 服务时进入不可恢复的 SIGTERM 循环（**已关闭**） |

### 热点分析

**Dashboard 主题问题**（#18080）以25条评论和44个 👍 高居榜首，反映出用户对 UI 可读性的强烈不满。这是自4月30日创建以来的长期讨论，维护者需优先关注。

**Windows 平台问题**集中爆发：桌面编译失败（#40187）、启动崩溃（#38216）、子进程窗口闪烁（#53961/#53962）——Windows 用户体验亟待改善。

**跨设备同步需求**（#20510）获得14个 👍，表明用户对多设备工作场景的强烈需求，可能成为未来版本的重要路线图信号。

---

## 5. Bug 与稳定性

### P1 级 Bug（严重/紧急）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#40170](https://github.com/NousResearch/hermes-agent/issues/40170) | **安全：客户Facing Honcho Recall 泄露** — Gateway 使用 Honcho 作为记忆提供者时，向 API 调用注入 `<memory-context>` 块，可能泄露敏感信息 | OPEN | - |
| [#23810](https://github.com/NousResearch/hermes-agent/issues/23810) | **安全：v0.13.0 出站消息绕过 redact_sensitive_text** — Gateway 平台的消息发送未正确应用敏感信息脱敏 | **已关闭** | - |
| [#27004](https://github.com/NousResearch/hermes-agent/issues/27004) | **完整测试套件在 main 分支损坏** — 级联失败 + 600秒超时 | **已关闭** | - |
| [#35166](https://github.com/NousResearch/hermes-agent/issues/35166) | **安装卡在 "Installing Playwright Chromium"** | OPEN | - |
| [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | **Windows 11 桌面应用启动崩溃** — 0x80000003 断点异常 | OPEN | - |
| [#40187](https://github.com/NousResearch/hermes-agent/issues/40187) | **Windows 桌面应用编译失败** | OPEN | - |

### P2 级 Bug（重要）

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Dashboard 主题可读性差 | OPEN | - |
| [#25184](https://github.com/NousResearch/hermes-agent/issues/25184) | Mattermost 移动端无法发送命令 | OPEN | - |
| [#50703](https://github.com/NousResearch/hermes-agent/issues/50703) | NVIDIA NIM `extra_body` 翻译问题阻止 thinking_mode | OPEN | - |
| [#52919](https://github.com/NousResearch/hermes-agent/issues/52919) | Nix 构建被 package-lock.json 破坏 | **已关闭** | - |

### 回归/稳定性风险

| Issue | 描述 | 状态 |
|-------|------|------|
| [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) | v0.13.0 更新后所有自定义模型配置消失 | **已关闭** |
| [#30594](https://github.com/NousResearch/hermes-agent/issues/30594) | `hermes update` 在 PEP 668 环境下失败 | **已关闭** |
| [#27033](https://github.com/NousResearch/hermes-agent/issues/27033) | 工具结果污染导致持久 HTTP 400 错误循环 | **已关闭** |
| [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | 桌面端压缩后仍显示过时 "Summarizing thread" 状态 | OPEN |

---

## 6. 功能请求与路线图信号

### 高需求功能（按 👍 排序）

| Issue | 功能描述 | 👍 | 评估 |
|-------|---------|-----|------|
| [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) | Dashboard 主题改进（字体、颜色、可读性） | 44 | **高优先级** — 长期未解决，用户反馈强烈 |
| [#20510](https://github.com/NousResearch/hermes-agent/issues/20510) | 跨设备配置云同步 | 14 | **路线图信号** — 多设备用户刚需 |
| [#41222](https://github.com/NousResearch/hermes-agent/issues/41222) | 桌面应用集成看板（Kanban Board） | 7 | **功能增强** — 多代理工作流需求 |
| [#37876](https://github.com/NousResearch/hermes-agent/issues/37876) | 桌面应用同时支持本地和远程后端 | 5 | **功能增强** — 灵活部署需求

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-06-28  
**项目**: NanmiCoder/cc-haha  
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

过去24小时内，cc-haha 项目保持平稳活跃状态。社区共产生 **5 条 Issues 更新**（4 条新开/活跃，1 条已关闭）和 **1 条待合并 PR**。整体项目健康度良好，无重大阻塞性问题。值得关注的是，用户对 **ACP 协议支持**的功能请求获得首个评论反馈，表明该需求正在进入需求评审阶段；同时 **v0.4.3 版本的稳定性问题**（Socket 连接异常、卡死）仍是当前痛点，需维护团队重点关注。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### 待合并 PR

| # | 标题 | 作者 | 标签 | 状态 |
|---|------|------|------|------|
| [#935](https://github.com/NanmiCoder/cc-haha/pull/935) | 优化消息时间显示月日时分 | @zhbdesign | `size:S`, `area:desktop` | 🟡 待合并（需维护者批准） |

**摘要**: 该 PR 修复了消息时间显示的 UX 问题，将更新时间展示格式优化为"月日时分"，提升用户查看消息更新时的可读性。属于小型 UI 优化，变更范围可控，建议维护者评估后尽快合并。

---

## 4. 社区热点

### 热门 Issues 讨论

| # | 标题 | 类型 | 评论数 | 状态 |
|---|------|------|--------|------|
| [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | [BUG] API Error: The socket connection was closed unexpectedly | Bug | 9 | ✅ 已关闭 |
| [#922](https://github.com/NanmiCoder/cc-haha/issues/922) | [feature] 支持ACP | Enhancement | 1 | 🟡 进行中 |

**#917 深度分析**  
该 Issue 引发社区热议（9 条评论），问题聚焦于 **Windows 环境下 v0.4.3 版本在大模型生成长篇报告时出现 Socket 连接意外关闭**。用户已关联 Anthropic 官方 Claude Code 的相似 Issue 并提供了参考解决方案。值得注意的是，该 Issue 已被标记为 **CLOSED**，但从评论数判断，社区可能期待更明确的修复说明或回归测试验证。

**#922 需求升温**  
ACP (Agent Client Protocol) 支持请求获得首个官方评论反馈，表明维护团队已开始评估该需求的可行性。该协议由 Anthropic 推动，已获 Claude Code、Codex 等工具支持，若实现将显著提升 cc-haha 的生态互操作性。

---

## 5. Bug 与稳定性

### 严重程度排序

| 优先级 | # | 标题 | 状态 | 备注 |
|--------|---|------|------|------|
| 🔴 高 | [#884](https://github.com/NanmiCoder/cc-haha/issues/884) | 4.3版本卡住问题（权限询问不触发） | 🟡 进行中 | 进程卡死，疑似 SDK 错误 `f03b76f2-fc54-4fbc-af73-5ec2d981b9ab`，已有 1 条评论 |
| 🔴 高 | [#933](https://github.com/NanmiCoder/cc-haha/issues/933) | Claude Code Sidecar 内存占用异常 | 🆕 新报告 | 内存随时间持续增长直至进程闪退，疑似会话过大导致 |
| 🟡 中 | [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | Socket 连接意外关闭 | ✅ 已关闭 | 等待官方确认修复验证 |
| 🟡 中 | [#934](https://github.com/NanmiCoder/cc-haha/issues/934) | 修改 setting.json 失败 / MCP 创建异常 | 🆕 新报告 | 疑似浏览器核心权限限制，默认路径下复现，便携路径正常 |

**稳定性预警**: 当前 v0.4.3 版本存在 **2 个高优先级未解决 Bug**（#884, #933），建议维护团队优先排查 SDK 集成层和内存管理逻辑。

---

## 6. 功能请求与路线图信号

### 新增功能请求

| # | 标题 | 类型 | 状态 |
|---|------|------|------|
| [#922](https://github.com/NanmiCoder/cc-haha/issues/922) | 支持 ACP (Agent Client Protocol) | Enhancement | 🟡 需求评审中 |

**需求详情**:
1. 支持作为 ACP 客户端连接 ACP 兼容 Agent 服务端
2. 支持将 cc-haha 作为 ACP 服务端暴露，供其他客户端连接

**路线图信号**: 该需求与 Anthropic 官方生态方向一致，若实现将增强 cc-haha 在多 Agent 协作场景的竞争力。结合 PR #935 的 UI 优化，项目当前迭代重心似乎在 **桌面端体验打磨**。

---

## 7. 用户反馈摘要

### 真实痛点提炼

| 场景 | 反馈 | 来源 |
|------|------|------|
| **长文本生成** | Windows 下大模型写长篇报告时 Socket 连接意外关闭，无法完成 | #917 |
| **权限交互** | 4.3 版本卡住时未触发权限询问提示，进程持续"思考"无法恢复 | #884 |
| **内存管理** | Sidecar 进程内存随会话时长持续增长，最终闪退 | #933 |
| **配置持久化** | 默认安装路径下修改 setting.json 和创建 MCP 服务会回档，便携模式正常 | #934 |
| **互操作性** | 希望支持 ACP 协议以融入更大 Agent 生态 | #922 |

### 满意度信号
- 用户积极提供详细复现步骤和错误日志，社区参与度高
- 便携模式与安装模式的差异反馈有助于定位路径权限问题

---

## 8. 待处理积压

### 需维护者关注的事项

| # | 标题 | 创建时间 | 状态 | 提醒 |
|---|------|----------|------|------|
| [#884](https://github.com/NanmiCoder/cc-haha/issues/884) | 4.3版本卡住问题 | 2026-06-21 | 🟡 进行中 | 已 7 天未解决，高优先级 |
| [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | Socket 连接异常 | 2026-06-25 | ✅ 已关闭 | 建议发布修复验证公告，避免用户困惑 |
| [#933](https://github.com/NanmiCoder/cc-haha/issues/933) | 内存占用异常 | 2026-06-27 | 🆕 新报告 | 需确认是否与 #884 相关联 |
| [#934](https://github.com/NanmiCoder/cc-haha/issues/934) | setting.json 修改失败 | 2026-06-27 | 🆕 新报告 | 需确认是否需要迁移工具或文档说明 |

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 更新总数 | 5 |
| PR 更新总数 | 1 |
| 新版本发布 | 0 |
| 待合并 PR | 1 |
| 高优先级未解决 Bug | 2 |

---

*报告生成时间: 2026-06-28 | 数据覆盖: 2026-06-27 00:00 至 2026-06-28 00:00 (UTC)*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-06-28  
**数据来源**: GitHub Codex++ Repository

---

## 1. 今日速览

2026年6月28日，Codex++ 项目保持高度活跃态势。过去24小时内共产生 **21条 Issues 更新**（新开/活跃18条，关闭3条）和 **5条 PR 更新**（待合并1条，已合并4条），同时发布 **3个版本**（v1.2.19~v1.2.21）。项目在会话管理、上下文窗口配置、插件体验等核心功能上持续迭代，合并了4个重要 PR 并修复了多个稳定性问题。社区讨论热度较高，尤其是关于插件可用性、配置冲突和模型请求异常的反馈值得重点关注。

---

## 2. 版本发布

### v1.2.21
**发布时间**: 2026-06-28  
**更新内容**:
- 🔌 **插件列表全量展示**: 新增「插件列表全量展示」开关，进入插件页后自动连续展开「更多」入口
- 🌐 **多语言自动展开支持**: 自动展开支持「查看 ... 以及另外 N 个」和英文「View/Show ... and N more」按钮文案，减少插件市场分批展示时的重复点击
- ⚙️ **默认开启可独立关闭**: 自动展开功能默认开启，用户可在 Codex 增强页独立关闭
- 📌 版本号更新至 1.2.21

**验证方式**: `cargo check -p codex-plus-core` | `node --check assets/inject/renderer-inject.js` | `npm run check` | `cargo test -p codex-`

---

### v1.2.20
**更新时间**: 2026-06-27  
**更新内容**:
- 📝 **模型列表交互优化**: 改为逐行控件，每行同时编辑模型名和上下文窗口，避免两列输入错位
- 🗑️ **会话批量管理**: 新增本地会话多选、全选、清空选择与批量删除，批量删除会统计成功和失败
- 🐛 **Bug 修复**:
  - 修复供应商详情切换时模型行数据可能沿用上一供应商的问题
  - 修复从上游获取模型时未使用当前编辑中供应商配置的问题
  - 修复批量删除确认框中的会话预览换行显示
  - 修复 Windows 缺少 sh 时上游 worktree 远端脚本语法测试失败的问题

**验证方式**: `npm run check` | `node --experimental-strip-types src/model-wi`

---

### v1.2.19
**更新时间**: 2026-06-26  
**更新内容**:
- 🇨🇳 **Codex 原生菜单运行时汉化**: 可在 Codex增强中开关，默认开启，不修改官方安装包
- 🔓 **插件市场解锁优化**: 保留插件市场解锁，移除旧版强制解锁入口相关能力
- ➕ **供应商能力增强**: 增加供应商 URL 导入能力和 RunAPI 供应商预设
- 📌 版本号更新至 1.2.19

**验证方式**: `cargo fmt --check` | `npm run check` | `cargo test -p codex-plus-core native_menu -- --nocapture` | `cargo test -p codex-plus-core launcher -- --nocapture`

---

## 3. 项目进展

### 已合并 PR（4个）

| PR # | 标题 | 贡献者 | 状态 | 说明 |
|------|------|--------|------|------|
| [#1220](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1220) | feature(codex-plus-manager): add bulk session selection and delete | @fly233338 | ✅ 已合并 | 新增会话批量选择和删除功能，解决会话管理效率问题 |
| [#1197](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1197) | fix(core,manager): 按模型粒度配置上下文窗口 | @jarvislee90s-dot | ✅ 已合并 | 实现模型级上下文窗口配置，支持 model_catalog_json + 后缀语法，解决多模型上下文冲突 |
| [#1185](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1185) | feat: support installation-free Codex app on Windows | @weishen | ✅ 已合并 | 支持 Windows 免安装运行 Codex 应用 |
| [#1182](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1182) | fix: prevent Computer Use subprocess leak on macOS | @guangsizhongbin | ✅ 已合并 | 修复 macOS 上 Computer Use 子进程泄漏问题，防止内存累积和 UI 冻结 |

### 待合并 PR（1个）

| PR # | 标题 | 贡献者 | 状态 | 说明 |
|------|------|--------|------|------|
| [#1232](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1232) | fix: prefer threads database for Codex session path selection | @lumokato | ⏳ 待合并 | 修复当 Codex 安装目录的 SQLite 数据库仅包含 automation_runs/inbox_items 时，线程特定操作失败的问题 |

---

## 4. 社区热点

### 热门 Issues（按评论数排序）

| Issue # | 标题 | 评论 | 点赞 | 状态 | 热度分析 |
|---------|------|------|------|------|----------|
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | [Feature]: product design 插件找不到 | 13 | 6 | 🔴 OPEN | 用户强烈需求在插件列表中添加 product design 插件，6个用户表示认同 |
| [#636](https://github.com/BigPizzaV3/CodexPlusPlus/issues/636) | 更新1.21版本后插件界面变灰色无法使用 | 7 | 0 | ✅ CLOSED | 插件界面显示异常，影响用户正常使用，已关闭但需关注是否彻底解决 |
| [#1183](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1183) | Codex++不断自动向api后端发送 gpt-5.4 模型的请求 | 5 | 2 | 🔴 OPEN | 严重问题：Codex++ 持续向自定义 API 后端发送 gpt-5.4 请求（每秒一次），导致后端报错，影响用户体验 |
| [#1233](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1233) | 聊天对话全部丢失 | 4 | 0 | 🔴 OPEN | 更新 v1.2.20 后配置被强行覆盖，聊天对话全部丢失，用户反馈强烈 |
| [#1171](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1171) | 按模型粒度配置上下文窗口与自动压缩阈值 | 3 | 0 | ✅ CLOSED | 功能需求已被 PR #1197 实现并合并 |

### 热点分析

**插件可用性问题**（#749, #636, #1216）: 多个用户反馈插件列表缺失或界面异常，插件市场的稳定性和完整性是当前社区关注的焦点。

**配置兼容性问题**（#1233, #783）: 版本更新后配置被覆盖、Base URL 与 CC Switch 冲突等问题影响用户工作流，需要重点关注配置迁移逻辑。

---

## 5. Bug 与稳定性

### 严重 Bug（高优先级）

| Issue # | 标题 | 影响范围 | 状态 | 备注 |
|---------|------|----------|------|------|
| [#1183](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1183) | 自动发送 gpt-5.4 请求导致后端报错 | 其他 | 🔴 OPEN | ⚠️ 严重：每秒一次错误请求，可能与模型配置或 relay 逻辑有关 |
| [#1233](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1233) | 更新后聊天对话全部丢失 | 供应商切换/配置写入 | 🔴 OPEN | ⚠️ 严重：配置被强行覆盖，用户数据丢失风险 |
| [#1236](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1236) | 更新到 v1.2.21 版本时一直显示更新失败 | 构建/安装 | 🔴 OPEN | ⚠️ 新版本安装失败，影响用户体验 |

### 中等 Bug（中优先级）

| Issue # | 标题 | 影响范围 | 状态 | 备注 |
|---------|------|----------|------|------|
| [#783](https://github.com/BigPizzaV3/CodexPlusPlus/issues/783) | 供应商配置Base URL 和CC Switch 有冲突 | 供应商切换/配置写入 | 🔴 OPEN | 配置被意外修改 |
| [#1190](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1190) | ~/.agent/skill 中手动添加的skill无法加载 | MCP/skills/plugins | 🔴 OPEN | 手动添加的 skill 无法被加载 |
| [#1213](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1213) | agnes支持512了早就，默认显示还是256上下文 | 界面/交互 | 🔴 OPEN | 上下文窗口识别不准确 |
| [#1216](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1216) | codex插件市场崩溃 | 界面/交互 | 🔴 OPEN | 插件市场界面无法打开 |
| [#1235](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1235) | 归档对话加载不出来 | 其他 | 🔴 OPEN | 已归档对话加载失败 |

### 已关闭 Bug

| Issue # | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#636](https://github.com/BigPizzaV3/CodexPlusPlus/issues/636) | 更新1.21版本后插件界面变灰色无法使用 | ✅ CLOSED | - |
| [#1167](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1167) | 使用内置浏览器后查看前端后，Codex++ 自动退出 | ✅ CLOSED | - |

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue # | 标题 | 功能范围 | 状态 | 评估 |
|---------|------|----------|------|------|
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | 希望更新一下插件：product design | 供应商管理 | 🔴 OPEN | ⭐⭐⭐ 高需求，13条评论，6个点赞 |
| [#1228](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1228) | 希望做账号AI切换功能 | 供应商管理 | 🔴 OPEN | ⭐⭐ 需求明确 |
| [#1230](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1230) | 统一调度入口（类似 API Proxy Plus） | 其他 | 🔴 OPEN | ⭐⭐ 高级需求，涉及架构改进 |
| [#1229](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1229) | 希望增加原生codex切换的功能 | 界面/交互 | 🔴 OPEN | ⭐ 需求明确 |

### 路线图信号分析

1. **插件生态完善**: 多个用户反馈插件缺失（product design）和插件市场问题，插件生态是用户关注重点
2. **多供应商管理**: 账号AI切换、供应商配置优化等需求表明用户对多源模型管理有强烈需求
3. **上下文窗口精细化**: 按模型粒度配置上下文窗口的功能（#1171）已被合并，预计下版本会成为亮点功能

---

## 7. 用户反馈摘要

### 正面反馈
- ✅ 会话批量删除功能（PR #1220）解决了用户效率痛点
- ✅ 模型级上下文窗口配置（PR #1197）受到期待
- ✅ 插件市场解锁功能持续受欢迎

### 痛点与不满

| 痛点 | 相关 Issue | 严重程度 |
|------|-----------|----------|
| 版本更新后配置被覆盖，聊天对话丢失 | #1233 | 🔴 高 |
| 插件列表缺失常用插件 | #749 | 🔴 高 |
| 自动发送错误模型请求导致后端报错 | #1183 | 🔴 高 |
| 插件市场界面崩溃/灰色 | #636, #1216 | 🟡 中 |
| 手动添加的 skill 无法加载 | #1190 | 🟡 中 |
| 429 错误无退避重试机制 | #1224 | 🟡 中 |

### 使用场景
- **多供应商切换**: 用户需要在 GPT、DeepSeek、MiMo 等多个模型来源间灵活切换
- **本地部署**: 部分用户在本地部署 CodexPlusPlus + 自定义 API 后端
- **会话管理**: 大型项目需要高效的会话组织和批量管理能力

---

## 8. 待处理积压

### 长期未响应的重要 Issues（超过7天无更新）

| Issue # | 标题 | 创建时间 | 最后更新 | 评论 | 优先级 |
|---------|------|----------|----------|------|--------|
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | product design 插件找不到 | 2026-06-07 | 2026-06-28 | 13 | 🔴 高 |
| [#783](https://github.com/BigPizzaV3/CodexPlusPlus/issues/783) | 供应商配置Base URL 和CC Switch 有冲突 | 2026-06-08 | 2026-06-28 | 2 | 🟡 中 |
| [#636](https://github.com/BigPizzaV3/CodexPlusPlus/issues/636) | 插件界面变灰色无法使用 | 2026-06-04 | 2026-06-28 | 7 | 🔴 高 |

### 建议关注

1. **#749** - product design 插件需求：21天了仍未解决，社区关注度高
2. **#1183** - 自动发送错误请求问题：可能导致用户 API 费用损失，需紧急处理
3. **#1233** - 配置覆盖导致数据丢失：影响用户信任度

---

## 总结

**项目健康度**: 🟢 良好  
- 活跃度高：24小时内 21 条 Issues + 5 条 PR 更新
- 迭代速度快：连续发布 3 个版本
- 社区参与积极：热门 Issue 有 13 条评论

**需关注问题**:
1. 🔴 配置兼容性和数据迁移问题（#1233, #783）
2. 🔴 模型请求逻辑异常（#1183）
3. 🔴 插件生态完整性（#749, #636, #1216）

**推荐行动**:
- 优先处理 #1183（自动发送错误请求）和 #1233（配置覆盖）
- 评估 #749 插件需求的实现可行性
- 完善版本更新时的配置迁移逻辑

---

*报告生成时间: 2026-06-28*  
*数据来源: github.com/BigPizzaV3/CodexPlusPlus*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*