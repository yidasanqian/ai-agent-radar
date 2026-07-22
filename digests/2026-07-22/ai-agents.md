# OpenClaw 生态日报 2026-07-22

> Issues: 205 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-22 02:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**：2026-07-22  
**数据来源**：GitHub OpenClaw 仓库

---

## 1. 今日速览

OpenClaw 项目今日保持极高活跃度，共处理 **205 条 Issues 更新**（新开/活跃 187 条，关闭 18 条）和 **500 条 PR 更新**（待合并 336 条，已合并/关闭 164 条）。项目整体呈现健康态势，PR 合并率较高（164/500），但积压待合并 PR 数量较大（336 条），可能需要关注审查资源分配。今日无新版本发布。社区焦点集中在**安全增强**（Secret 掩码、MCP 工具注入）和**性能优化**（Active Memory 延迟、Token 开销）两大方向，多个 P1 级别安全和稳定性问题引发广泛讨论。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 关键内容 |
|---------|------|------|----------|
| [#103895](https://github.com/openclaw/openclaw/pull/103895) | feat(slack): support Agent View | CLOSED | 新版 Slack AI 应用使用 Agent View，修复了工作区清单生成和 DM 路由问题，解决了会话丢失问题 |
| [#112433](https://github.com/openclaw/openclaw/pull/112433) | fix(ui): allow direct sessions in non-Git folders | CLOSED | 修复了非 Git 文件夹中启动会话时强制启用 managed-worktree 模式导致的错误 |
| [#112453](https://github.com/openclaw/openclaw/pull/112453) | chore(deps): refresh repository dependencies | OPEN | 同步 npm、SwiftPM、Cargo、Go modules、Docker 等多平台依赖图，降低安全风险 |
| [#112441](https://github.com/openclaw/openclaw/pull/112441) | chore(i18n): refresh native locales | CLOSED | 发布 Android/Wear OS/iOS/macOS 本地化源变更到所有生成的语言环境 |

### 值得关注的修复 PRs

| PR 编号 | 标题 | 优先级 | 影响范围 |
|---------|------|--------|----------|
| [#105806](https://github.com/openclaw/openclaw/pull/105806) | fix(recovery): reclaim terminal-phase reply operations | P1 | 修复会话恢复时通道车道永久卡死问题 |
| [#111122](https://github.com/openclaw/openclaw/pull/111122) | fix(sessions): manual compaction deletes transcript history | P1 | 修复 `sessions compact` 命令误删历史记录问题 |
| [#110216](https://github.com/openclaw/openclaw/pull/110216) | fix(memory): recover from same-file legacy index divergence | P1 | 修复内存索引差异导致的网关崩溃 |
| [#112032](https://github.com/openclaw/openclaw/pull/112032) | fix(mcp): bind stored OAuth refresh token to its issuer | - | 修复 OAuth 刷新令牌被错误授权服务器使用的问题 |
| [#112305](https://github.com/openclaw/openclaw/pull/112305) | fix(openshell): mirror sandboxes can modify workspace skill files | - | 修复 OpenShell 沙盒违反只读策略的问题 |
| [#111912](https://github.com/openclaw/openclaw/pull/111912) | fix(media): apply SSRF guard to byteplus and runway | - | 修复视频下载缺少 SSRF 防护的安全漏洞 |

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

**1. #10659 - Masked Secrets 功能请求** 🔥🔥🔥
- **评论数**：15 | **👍**：4
- **链接**：https://github.com/openclaw/openclaw/issues/10659
- **核心诉求**：实现"掩码密钥"系统，允许 Agent **使用** API 密钥但**无法查看**原始值，防止意外泄露和提示注入攻击
- **影响标签**：`impact:security`, `impact:auth-provider`

**2. #86996 - Active Memory + Codex 路径导致延迟问题** 🔥🔥
- **评论数**：11 | **👍**：2
- **链接**：https://github.com/openclaw/openclaw/issues/86996
- **核心诉求**：使用 `active-memory` + `openclaw-honcho` + `lossless-claw` + Codex 模型时，Telegram 消息响应极慢甚至超时
- **影响标签**：`impact:message-loss`, `impact:crash-loop`

**3. #85030 - MCP tools 未注入子代理会话** 🔥🔥
- **评论数**：11 | **👍**：5
- **链接**：https://github.com/openclaw/openclaw/issues/85030
- **核心诉求**：`bundle-mcp` 配置的 MCP 工具无法通过 `sessions_spawn` 注入子代理，子代理只收到内置工具
- **影响标签**：`impact:session-state`, `impact:security`

**4. #7722 - Filesystem Sandboxing Config** 🔥
- **评论数**：10 | **👍**：4
- **链接**：https://github.com/openclaw/openclaw/issues/7722
- **核心诉求**：通过配置实现文件系统访问限制，支持 `allowedPaths` 和 `denyPaths`
- **影响标签**：`impact:security`

**5. #14785 - Reduce tool schema token overhead** 🔥
- **评论数**：9 | **👍**：0
- **链接**：https://github.com/openclaw/openclaw/issues/14785
- **核心诉求**：每个会话加载完整工具 JSON Schema 消耗约 3,500 tokens（13,972 字符），请求优化
- **影响标签**：`impact:session-state`

### 热点 PRs

**#112401 - feat(ui): manage DM pairing requests in Channels** 🔥
- **链接**：https://github.com/openclaw/openclaw/pull/112401
- **摘要**：在 Control UI 中管理 DM 配对请求，解决 Web-only 运维人员无法处理配对保护通道的问题

---

## 5. Bug 与稳定性

### P1 严重 Bug（需立即关注）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|-----------|------|------|---------------|
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | 主代理被持久化工作区状态迁移阻止（回归） | OPEN | 无 |
| [#95612](https://github.com/openclaw/openclaw/issues/95612) | cli-backend agent 认证失败 (401) | OPEN | 无 |
| [#85637](https://github.com/openclaw/openclaw/issues/85637) | bundle-mcp 远程服务器工具无法加载 | OPEN | 无 |

### P2 Bug

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|-----------|------|------|---------------|
| [#104389](https://github.com/openclaw/openclaw/issues/104389) | 自动后台 exec 失败暴露内部 Agent ID 和命令行 | OPEN | 无 |
| [#64103](https://github.com/openclaw/openclaw/issues/64103) | Session status 字段值误导代理导致重复会话 | OPEN | 无 |
| [#88562](https://github.com/openclaw/openclaw/issues/88562) | models.json 生成器将 apiKey 写入明文而非 secret-ref | OPEN | 无 |

### 已有关键 Fix PRs

| PR 编号 | 修复内容 | 优先级 |
|--------|---------|--------|
| [#105806](https://github.com/openclaw/openclaw/pull/105806) | 修复会话恢复时通道车道永久卡死 | P1 |
| [#111122](https://github.com/openclaw/openclaw/pull/111122) | 修复会话压缩误删历史记录 | P1 |
| [#110216](https://github.com/openclaw/openclaw/pull/110216) | 修复内存索引差异导致崩溃 | P1 |
| [#111912](https://github.com/openclaw/openclaw/pull/111912) | 修复视频下载 SSRF 漏洞 | - |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求（社区强烈需求）

| Issue 编号 | 功能名称 | 评论 | 标签 | 关联 PR |
|-----------|---------|------|------|---------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets（密钥掩码） | 15 | P1, security | 无 |
| [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot 支持 | 9 | P2 | 无 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard 增加 Memory/Embedding 配置 | 9 | P2 | 无 |
| [#84527](https://github.com/openclaw/openclaw/issues/84527) | 添加 Antigravity CLI (agy) 替代 Gemini CLI | 5 | P2 | 无 |
| [#13616](https://github.com/openclaw/openclaw/issues/13616) | 配置/定时任务/会话历史备份恢复工具 | 9 | P2 | 无 |

### 可能有进展的功能（已有 Open PR）

| Issue 编号 | 功能名称 | 关联 PR | 状态 |
|-----------|---------|---------|------|
| #10142 (session:end hook) | 会话结束内部钩子事件 | #10142 | linked-pr-open |
| #13219 (per-model logging) | 按模型使用量日志记录 | #13219 | linked-pr-open |
| #14344 (WhatsApp delete) | WhatsApp 消息删除功能 | #14344 | linked-pr-open |
| #93265 (onboard) | Agent 辅助配置引导 | #93265 | ready for maintainer look |

### 开发者体验改进

| Issue 编号 | 功能名称 | 评论 |
|-----------|---------|------|
| [#14438](https://github.com/openclaw/openclaw/issues/14438) | Plugin 热重载（无需容器重启） | 5 |
| [#8969](https://github.com/openclaw/openclaw/issues/8969) | 开发者体验快速改进（skills.validate CLI 等） | 4 |

---

## 7. 用户反馈摘要

### 安全相关痛点

1. **密钥暴露风险**：用户强烈要求实现密钥掩码系统，防止 Agent 在提示注入攻击下泄露 API 凭证（#10659）
2. **文件系统访问控制**：用户需要细粒度的文件系统沙箱配置，防止敏感文件被访问（#7722）
3. **OAuth 令牌安全**：MCP OAuth 刷新令牌可能被错误服务器使用，存在安全隐患（#112032 已修复）

### 性能与可靠性痛点

1. **Active Memory 性能问题**：使用 Codex 后端时，Telegram 响应延迟严重，影响实时对话体验（#86996）
2. **Token 开销过大**：每个会话固定消耗约 3,500 tokens 用于工具 Schema，影响成本和上下文利用（#14785）
3. **会话恢复卡死**：会话恢复机制存在边缘情况导致通道永久卡死（#105806 已修复）

### 功能缺失反馈

1. **Onboarding 不完整**：新用户配置 Memory/Embedding 时缺少引导，导致功能无法正常使用（#16670）
2. **Telegram Business 支持**：企业用户需要支持 Business 账号的消息接收（#20786）
3. **备份恢复机制**：缺乏标准化备份方案，灾难恢复困难（#13616）

### 集成兼容性

1. **Gemini CLI 停用**：Google 将 Gemini CLI 过渡到 Antigravity CLI，用户需迁移方案（#84527）
2. **Slack Agent View**：新版 Slack AI 应用使用不同生命周期，需适配（#103895 已合并）

---

## 8. 待处理积压

### 长期未响应的 P1 Issues（超过 30 天未更新状态）

| Issue 编号 | 标题 | 创建日期 | 最后更新 | 评论 | 状态 |
|-----------|------|---------|---------|------|------|
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP tools 未注入子代理 | 2026-05-21 | 2026-07-21 | 11 | needs-maintainer-review |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex 延迟 | 2026-05-26 | 2026-07-21 | 11 | needs-maintainer-review |
| [#88562](https://github.com/openclaw/openclaw/issues/88562) | models.json apiKey 明文 | 2026-05-31 | 2026-07-21 | 6 | needs-maintainer-review |
| [#85637](https://github.com/openclaw/openclaw/issues/85637) | bundle-mcp 工具不加载 | 2026-05-23 | 2026-07-21 | 4 | needs-maintainer-review |

### 高优先级 PR 等待审查

| PR 编号 | 标题 | 状态 | 等待时间 |
|--------|------|------|---------|
| [#93265](https://github.com/openclaw/openclaw/pull/93265) | feat(onboard): streamline setup | 👀 ready for maintainer look | ~37 天 |
| [#89985](https://github.com/openclaw/openclaw/pull/89985) | fix(update): preserve local overrides | 👀 ready for maintainer look | ~49 天 |
| [#110216](https://github.com/openclaw/openclaw/pull/110216) | fix(memory): recover from index divergence | 👀 ready for maintainer look | ~5 天 |
| [#111122](https://github.com/openclaw/openclaw/pull/111122) | fix(sessions): compaction deletes history | 👀 ready for maintainer look | ~3 天 |

### 建议优先处理

1. **安全问题**：#10659（密钥掩码）、#7722（文件系统沙箱）、#88562（apiKey 明文）均涉及安全，建议优先评估
2. **回归问题**：#111498（主代理阻止）标记为 regression，应尽快定位
3. **积压 PR 清理**：336 条待合并 PR 中包含多个 P1 修复，建议增加审查资源

---

## 总结

OpenClaw 项目今日活跃度极高，社区参与度高。安全相关功能请求（密钥掩码、文件系统沙箱）引发广泛讨论，多个 P1 Bug 和安全漏洞已有修复方案待合并。建议维护团队优先处理安全相关 Issue 和长期积压的 P1 PR，同时关注 Active Memory 性能和 MCP 工具注入等影响核心体验的问题。

---

*报告生成时间：2026-07-22*  
*数据覆盖：2026-07-21 00:00 至 2026-07-22 00:00 (UTC)*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-07-22  
**数据覆盖**：2026-07-21 00:00 至 2026-07-22 00:00 (UTC)

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**高速迭代与架构分化并行**的关键阶段。以 OpenClaw 和 Hermes Agent 为代表的头部项目日均处理 Issue/PR 总量超过 1000 条，呈现极高的社区活跃度，但同时也暴露出审查资源不足导致的 PR 积压问题（两者待合并 PR 均超过 330 条）。生态整体呈现三大特征：**安全能力建设成为共识**（密钥掩码、OAuth 安全、沙箱隔离）、**多模型支持成为标配**（DeepSeek、Ollama、Codex 等第三方模型集成）、**桌面端与跨平台成为竞争焦点**（Windows/macOS 兼容性、TUI/Desktop 多形态）。值得注意的是，cc-haha 等小型项目仍处于功能验证阶段，与头部项目的成熟度差距显著。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新增/活跃) | PRs (待合并/已合并) | Release | 核心维护者 | 健康度评估 |
|------|-------------------|---------------------|---------|------------|------------|
| **OpenClaw** | 205 (187/18) | 500 (336/164) | 无 | 社区驱动 | ⚠️ 高活跃但积压严重 |
| **Hermes Agent** | 106 (87/19) | 500 (389/111) | 无 | @teknium1 主导 | ⚠️ 快速迭代但积压严重 |
| **cc-haha** | 5 (5/0) | 0 (0/0) | 无 | 小团队维护 | 🔴 低活跃，问题收集期 |
| **Codex++** | 19 (17/2) | 11 (8/3) | 无 | 社区驱动 | 🟡 中等活跃，功能迭代中 |

**关键发现**：
- 头部两项目 PR 合并率约 33%，积压问题突出
- cc-haha 今日无任何代码贡献记录，维护压力较大
- Codex++ 虽规模较小，但 PR 合并率（27%）与头部项目持平

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw 表现 | 生态对比 |
|------|---------------|----------|
| **社区规模** | Issue/PR 处理量最大（705 条/日） | 领先 Hermes Agent 约 50% |
| **安全能力** | 密钥掩码（#10659）、文件系统沙箱（#7722）需求强烈 | 与 Hermes Agent 并列第一梯队 |
| **平台覆盖** | iOS/macOS/Android/Wear OS 多端支持 | 覆盖最广 |
| **国际化** | 41+ 语言环境自动同步 | 生态领先 |

### 3.2 技术路线差异

| 特性 | OpenClaw | Hermes Agent | Codex++ |
|------|----------|--------------|----------|
| **核心架构** | Agent View + MCP 工具生态 | Secrets 编排器 + 插件 RPC | 桌宠 + 进程监控 |
| **记忆系统** | Active Memory + 外部索引 | 可配置后端（honcho/fact_store） | 本地 SQLite |
| **安全模型** | Secret 掩码 + SSRF 防护 | 1Password/Bitwarden 集成 | guardian_approval |
| **部署形态** | CLI + 容器化 | Desktop/TUI + systemd | 桌面应用 |

### 3.3 社区规模量化

- **OpenClaw**：205 Issues + 500 PRs = 705 条/日交互
- **Hermes Agent**：106 Issues + 500 PRs = 606 条/日交互
- **Codex++**：19 Issues + 11 PRs = 30 条/日交互
- **cc-haha**：5 Issues + 0 PRs = 5 条/日交互

OpenClaw 以 705 条/日的交互量位居生态第一，是 Hermes Agent 的 1.16 倍，是 Codex++ 的 23.5 倍。

---

## 4. 共同关注的技术方向

### 4.1 安全能力建设（多项目共识）

| 项目 | 具体诉求 | 优先级 |
|------|----------|--------|
| **OpenClaw** | 密钥掩码系统（#10659）、文件系统沙箱（#7722）、OAuth 令牌绑定（#112032 已修复） | P1 |
| **Hermes Agent** | 1Password/Bitwarden 深度集成（#69052/51/53/58）、技能保护机制（#25083） | P1-P2 |
| **Codex++** | guardian_approval 模型映射（#564/#274/#293） | P1 |

**行业信号**：安全已从"可选增强"升级为"核心需求"，预计 2026 Q4 前各项目将完成基础安全能力对齐。

### 4.2 多模型支持与兼容性

| 项目 | 痛点 | 涉及 Issue |
|------|------|------------|
| **OpenClaw** | Codex 模型延迟问题（#86996） | Active Memory + Codex 路径 |
| **Hermes Agent** | Ollama 云模型 web 搜索缺失（#23207） | 功能对标 |
| **Codex++** | DeepSeek 自动审批失效（#564/#274/#293/#548） | 第三方模型映射 |

**行业信号**：第三方模型集成已从"功能点"演变为"架构挑战"，需要统一的模型抽象层。

### 4.3 跨平台稳定性

| 项目 | Windows 问题 | macOS 问题 |
|------|--------------|------------|
| **Hermes Agent** | 数据库损坏（#68474）、Telegram 卡死（#68465）、Signal SSE 关闭（#68167） | Full Disk Access 权限撤销（#52010） |
| **cc-haha** | 企业版启动失败（#1085）、Electron 主进程错误（#1083） | - |
| **Codex++** | 启动闪退（#1589）、CPU 高占用（#1576） | 重连问题（#1601） |

**行业信号**：跨平台兼容性是当前最大的用户体验障碍，预计将成为 2026 下半年重点优化方向。

### 4.4 会话与记忆管理

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | 会话压缩误删历史（#111122 已修复）、内存索引差异（#110216 已修复）、通道卡死（#105806 已修复） |
| **Hermes Agent** | 会话泄漏（#68920）、长线程消息错乱（#68979）、Worker 死锁（#68915 P1） |
| **Codex++** | 多数据库会话撤销（#1560 已修复）、会话丢失（#1384） |

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心定位 | 差异化功能 |
|------|----------|------------|
| **OpenClaw** | 企业级多平台 AI 助手 | Agent View、Slack/WhatsApp 集成、41+ 国际化 |
| **Hermes Agent** | 开发者友好的本地 AI Agent | Secrets 编排器、插件 RPC 注册、Desktop 计费系统 |
| **cc-haha** | 轻量级 AI 聚合工具 | 多服务商聚合、移动端绑定（cc-switch） |
| **Codex++** | 桌面端 AI 增强工具 | 桌宠交互、进程监控、视觉/VLM 能力 |

### 5.2 目标用户

| 项目 | 主要用户 | 用户特征 |
|------|----------|----------|
| **OpenClaw** | 企业用户、跨平台团队 | 需要多渠道集成、安全合规、大规模部署 |
| **Hermes Agent** | 开发者、技术爱好者 | 需要本地部署、插件扩展、灵活配置 |
| **cc-haha** | 轻度用户、移动端用户 | 需要简单聚合、跨平台切换 |
| **Codex++** | 桌面端用户、效率用户 | 需要视觉增强、进程控制、桌宠交互 |

### 5.3 技术架构关键差异

```
OpenClaw:     Agent View → MCP Tools → Multi-Platform Gateway
Hermes Agent: Secrets Orchestrator → Plugin RPC → Desktop/TUI
cc-haha:      Multi-Provider Proxy → cc-switch Mobile Binding
Codex++:      Desktop App → Process Monitor → VLM Integration
```

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 日均交互量 | 发展阶段 |
|------|------|------------|----------|
| **第一梯队** | OpenClaw, Hermes Agent | 600-700 条 | 快速迭代期，PR 积压严重 |
| **第二梯队** | Codex++ | 30 条 | 功能迭代期，稳定性待提升 |
| **第三梯队** | cc-haha | 5 条 | 问题收集期，活跃度低迷 |

### 6.2 成熟度评估

| 项目 | 代码贡献频率 | Bug 修复速度 | 功能稳定性 | 整体成熟度 |
|------|--------------|--------------|------------|------------|
| **OpenClaw** | 高（500 PRs/日） | 中（多个 P1 待合并） | 中（安全/性能问题仍存） | 🟡 成长型 |
| **Hermes Agent** | 高（500 PRs/日） | 中（2 P1 未修复） | 中（Windows 兼容性问题突出） | 🟡 成长型 |
| **Codex++** | 中（11 PRs/日） | 低（大量 Issue 无 Fix PR） | 低（闪退、崩溃问题频发） | 🟠 早期验证 |
| **cc-haha** | 低（0 PRs/日） | 低（无响应） | 低（企业版兼容性问题） | 🔴 停滞风险 |

### 6.3 PR 积压分析

| 项目 | 待合并 PR | 合并率 | 积压风险 |
|------|-----------|--------|----------|
| **OpenClaw** | 336 | 32.8% | ⚠️ 高 - 需增加审查资源 |
| **Hermes Agent** | 389 | 22.2% | ⚠️ 高 - 积压最严重 |
| **Codex++** | 8 | 27.3% | 🟡 中 - 规模可控 |
| **cc-haha** | 0 | N/A | 🔴 风险 - 无贡献 |

---

## 7. 值得关注的趋势信号

### 7.1 安全能力从"可选"到"必选"

**信号**：OpenClaw #10659（密钥掩码）、Hermes Agent #25083（技能保护）、Codex++ guardian_approval 均指向同一趋势——AI Agent 的安全边界正在重新定义。

**开发者建议**：
- 优先实现密钥掩码/隔离机制
- 建立技能保护/审批工作流
- 完善 OAuth/第三方集成的安全验证

### 7.2 多模型抽象层成为架构刚需

**信号**：Codex++ 的自动审批模型映射问题（5+ Issue）、Hermes Agent 的 Ollama 云模型支持缺失、OpenClaw 的 Codex 延迟问题，均表明当前架构对第三方模型的适配能力不足。

**开发者建议**：
- 设计统一的模型抽象接口
- 支持模型名的动态映射配置
- 建立模型兼容性测试套件

### 7.3 跨平台兼容性进入"深水区"

**信号**：Hermes Agent 独占 4 个 Windows/macOS 平台问题，cc-haha 企业版兼容性问题，Codex++ 闪退问题——跨平台已从"能跑"升级到"稳定"的需求。

**开发者建议**：
- 建立多平台 CI/CD 测试矩阵
- 重点关注 Windows 企业版、macOS 权限模型
- 制定平台特定错误处理规范

### 7.4 桌面端成为差异化竞争点

**信号**：Hermes Agent Desktop 计费系统重构（#68722/#68761）、Codex++ 桌宠功能持续迭代、cc-haha 移动端绑定需求——桌面/移动多形态成为用户体验竞争焦点。

**开发者建议**：
- 探索 Desktop/TUI 多形态架构
- 关注 Electron/Tauri 等跨平台桌面框架
- 设计移动端与桌面端的数据同步机制

### 7.5 PR 积压治理成为效率瓶颈

**信号**：OpenClaw 和 Hermes Agent 均存在 300+ 条待合并 PR，多个 P1 Bug 长期无 Fix PR，积压 PR 中包含关键安全修复。

**开发者建议**：
- 建立 PR 分类优先级机制
- 增加 maintainer 审查资源
- 考虑自动化测试加速 Code Review

---

## 总结

2026 年 7 月的个人 AI 助手开源生态呈现**头部集中、快速迭代、架构分化**三大特征。OpenClaw 以 705 条/日交互量领跑生态，但在 PR 积压和安全能力建设上仍面临挑战；Hermes Agent 在 Secrets 管理和插件架构上展现差异化优势；Codex++ 和 cc-haha 则分别在桌面端和轻量聚合领域寻找细分定位。

**对 AI 智能体开发者的核心建议**：
1. **安全先行**：密钥掩码、技能保护、OAuth 安全应纳入 2026 下半年核心路线图
2. **模型抽象**：建立统一的多模型适配层，降低第三方模型集成成本
3. **跨平台深耕**：Windows 企业版、macOS 权限模型是当前最大的用户体验障碍
4. **PR 治理**：积压问题若持续，将影响社区信任和贡献者留存

---

*报告生成时间：2026-07-22*  
*分析师：AI Assistant*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-07-22  
**数据来源：** GitHub NousResearch/hermes-agent

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 项目保持极高活跃度，共处理 **106 条 Issues**（新开/活跃 87 条，关闭 19 条）和 **500 条 PRs**（待合并 389 条，已合并/关闭 111 条）。项目整体呈现快速迭代态势，核心维护者 @teknium1 主导了多个 secrets 相关修复的集中提交（6 个 PR），Desktop 端的计费系统和会话管理改进也在稳步推进。**未发布新版本**，但存在 2 个 P1 级严重 Bug 需要优先关注：Worker 进程在后台进程场景下的死锁问题，以及 Windows 桌面更新导致 state.db 数据损坏的问题。

---

## 2. 版本发布

**本日无新版本发布。**

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 说明 |
|---------|------|------|------|
| [#68722](https://github.com/NousResearch/hermes-agent/pull/68722) | feat(desktop): Billing page revamp — current-plan card, in-app plans view, tier art | **CLOSED** | 桌面端计费页面重构，改为卡片式布局，plan 管理移入应用内 |
| [#69045](https://github.com/NousResearch/hermes-agent/pull/69045) | fix: distinguish vLLM 'at least' lower-bound from exact input token counts | **CLOSED** | 修复 vLLM 上下文窗口错误消息解析问题，区分下限估算与精确计数 |
| [#69044](https://github.com/NousResearch/hermes-agent/pull/69044) | Restart dashboard systemd unit after `hermes update` | **CLOSED** | 修复 `hermes update` 后 dashboard systemd 服务未自动重启的问题 |
| [#69048](https://github.com/NousResearch/hermes-agent/pull/69048) | fmt(js): `npm run fix` auto-fix | **CLOSED** | CI 自动格式化修复 |
| [#69050](https://github.com/NousResearch/hermes-agent/pull/69050) | fmt(js): `npm run fix` auto-fix | **CLOSED** | CI 自动格式化修复 |

### 待合并的重要 PRs

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#69052](https://github.com/NousResearch/hermes-agent/pull/69052) | fix(secrets): 1Password auth env fixes — Connect cache-key + desktop-probe bypass | 修复 1Password Connect 缓存键不完整及桌面探测绕过问题 |
| [#69051](https://github.com/NousResearch/hermes-agent/pull/69051) | fix(secrets): fall back to stale disk cache when bws live fetch fails | Bitwarden 网络故障时回退到磁盘缓存，避免启动失败 |
| [#69053](https://github.com/NousResearch/hermes-agent/pull/69053) | fix(mcp): pass secret-source-injected env vars to stdio servers | MCP stdio 服务器现在能接收外部 secret 源注入的环境变量 |
| [#69058](https://github.com/NousResearch/hermes-agent/pull/69058) | feat(secrets): orchestrator-level preserve_existing + profile aliasing | secrets 编排器新增 `preserve_existing` 和 profile 别名功能 |
| [#68761](https://github.com/NousResearch/hermes-agent/pull/68761) | feat(desktop): native in-app downgrade — chargeless preview → schedule → undo | 桌面端原生应用内订阅降级流程 |
| [#66874](https://github.com/NousResearch/hermes-agent/pull/66874) | feat: plugin RPC registration for gateway WebSocket API | 插件可通过 `PluginContext.register_rpc()` 暴露 JSON-RPC 方法 |
| [#64673](https://github.com/NousResearch/hermes-agent/pull/64673) | fix(desktop): keep recovered actions bound to the selected session | 修复网关重启后会话恢复时操作绑定错误的问题 |
| [#69059](https://github.com/NousResearch/hermes-agent/pull/69059) | fix(desktop): retry remote readiness through backend restarts | 桌面端在远程后端重启期间保持连接重试 |

**项目整体向前推进：** Secrets 管理模块得到显著增强（6 个相关 PR），Desktop 端计费系统完成重构，MCP stdio 服务器的 env 注入问题得到修复。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 核心诉求 |
|------------|------|--------|----------|
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | Feature: Configurable Memory Backends — disable memory.md, use honcho/fact_store only | **13** | 用户请求将硬编码的 `MEMORY.md`/`USER.md` 改为可配置的后端，支持 honcho/fact_store |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | web_tools.py: missing _ensure_plugins_discovered() causes web tools to silently fail | **8** | Web 搜索/提取/爬取功能在新安装中无法工作，插件系统未初始化 |
| [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | Feature: Immutable/protected skills — prevent agent from modifying critical skills | **7** | 请求保护关键 skill 不被 AI 随意修改，需要用户审批机制 |
| [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) | MCP: parked server revival reconnects but does not re-register tools | **7** | MCP 服务器重连后工具未重新注册 |

### 热点分析

**Memory 后端可配置性**（#47349）引发最多讨论，反映出用户对灵活记忆系统架构的强烈需求。当前系统将记忆文件路径写死，限制了与外部知识库（如 honcho/fact_store）的集成能力。

**Web 工具静默失败**（#27683）是一个影响新用户体验的阻塞性问题——插件发现机制缺失导致搜索功能完全不可用，但错误被静默吞掉，用户难以定位根因。

**技能保护机制**（#25083）体现了用户对 AI Agent 安全边界的关注，特别是在治理规则、安全约束等关键技能上防止被意外修改。

---

## 5. Bug 与稳定性

### P1 - 紧急（需立即处理）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|-----------|------|------|---------------|
| [#68915](https://github.com/NousResearch/hermes-agent/issues/68915) | Worker deadlocks when agent backgrounds a server via shell `&` | **OPEN** | ❌ 无 |
| [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | state.db zeroed (95MB of null bytes) during desktop update to v0.19.0 on Windows | **OPEN** | ❌ 无 |

### P2 - 高优先级

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|-----------|------|------|---------------|
| [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | Desktop/TUI sessions leak — max_concurrent_sessions blocks new sessions | **OPEN** | ❌ 无 |
| [#68979](https://github.com/NousResearch/hermes-agent/issues/68979) | Desktop: long-thread reconciliation re-stacks recent user messages at thread bottom | **OPEN** | ❌ 无 |
| [#68858](https://github.com/NousResearch/hermes-agent/issues/68858) | v0.19 in-place compaction + dual FTS maintenance can saturate disk I/O | **OPEN** | ❌ 无 |
| [#68963](https://github.com/NousResearch/hermes-agent/issues/68963) | Discord slash-command sync logs a retry but exits until reconnect | **OPEN** | ❌ 无 |
| [#68465](https://github.com/NousResearch/hermes-agent/issues/68465) | Telegram gateway stuck at "Connecting to Telegram (attempt 1/8)" on Windows | **OPEN** | ❌ 无 |
| [#68167](https://github.com/NousResearch/hermes-agent/issues/68167) | Signal platform: SSE stream closes immediately on Windows | **OPEN** | ❌ 无 |
| [#68693](https://github.com/NousResearch/hermes-agent/issues/68693) | Gateway doesn't exit on fatal Photon adapter error | **OPEN** | ❌ 无 |
| [#68771](https://github.com/NousResearch/hermes-agent/issues/68771) | Treat provider 5xx (503 capacity/overload) as fallback-chain trigger | **OPEN** | ❌ 无 |

### 已关闭的 Bug（近期修复）

| Issue 编号 | 标题 | 修复说明 |
|------------|------|----------|
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | web_tools.py missing plugin discovery | 已关闭（sweeper:implemented-on-main） |
| [#38786](https://github.com/NousResearch/hermes-agent/issues/38786) | Hermes Desktop shows generated local images as [Image blocked] | 已关闭（sweeper:implemented-on-main） |
| [#54675](https://github.com/NousResearch/hermes-agent/issues/54675) | Multiplexed gateway: platform bot tokens resolved via os.getenv bypass per-profile secret scope | 已关闭（sweeper:implemented-on-main） |
| [#65677](https://github.com/NousResearch/hermes-agent/issues/65677) | MCP servers 'jules' and 'thunderbird' fail to connect | 已关闭 |
| [#62212](https://github.com/NousResearch/hermes-agent/issues/62212) | MCP stdio keepalive probe triggers infinite reconnect loop | 已关闭 |

**稳定性评估：** 当前存在 2 个 P1 级未修复 Bug，其中 Windows 桌面更新导致数据库损坏问题可能造成用户数据丢失风险。P2 级 Bug 集中在 Desktop 会话管理、平台适配（Discord/Telegram/Signal）和网关稳定性方面。

---

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue 编号 | 标题 | 需求分析 | 纳入可能性 |
|-----------|------|----------|-----------|
| [#47349](https://github.com/NousResearch/hermes-agent/issues/47349) | Configurable Memory Backends | 将硬编码记忆文件改为可插拔后端架构，支持 honcho/fact_store | **高** — 涉及核心架构，PR 讨论活跃 |
| [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | Immutable/protected skills | 防止 AI 修改关键 skill，需用户审批机制 | **中** — 安全相关，需求明确 |
| [#64900](https://github.com/NousResearch/hermes-agent/issues/64900) | Allow plugins to extend send_message with platform-specific schema | 允许插件扩展 send_message 工具的 schema | **中** — 已有相关 PR #66874 提供 RPC 注册能力 |
| [#23207](https://github.com/NousResearch/hermes-agent/issues/23207) | how to use web search/fetch using ollama cloud model | 补齐 Ollama 云模型的 web 搜索能力 | **中** — 功能缺失，对标竞品 openclaw |
| [#61042](https://github.com/NousResearch/hermes-agent/issues/61042) | TUI: /compress should allow type-ahead and queue the next message | 压缩期间允许输入下一条消息 | **低** — 体验优化，非核心功能 |

### 路线图信号

从 PR #66874（插件 RPC 注册）和 #64900（send_message 扩展）可以看出，项目正在向**插件化架构**方向演进，允许第三方扩展核心功能。Desktop 端的计费系统已完成应用内重构（#68761, #68722），表明商业化功能正在完善。

---

## 7. 用户反馈摘要

### 核心痛点

1. **新用户体验断裂**（#27683）
   > "Web search, extract, and crawl from working out of the box on a fresh Hermes install"
   - 插件系统未初始化导致 web 工具静默失败，用户难以定位问题

2. **Windows 平台兼容性问题突出**
   - Telegram 连接卡在 attempt 1/8（#68465）
   - Signal SSE 流立即关闭（#68167）
   - 桌面更新导致数据库损坏（#68474）
   - macOS Full Disk Access 权限每次更新后被撤销（#52010）

3. **会话管理缺陷**（#68920, #68979）
   - 活跃会话租约泄漏导致 `max_concurrent_sessions` 逐渐阻塞
   - 长线程中消息顺序错乱，用户需滚动查找回复

### 满意点

- 图像生成功能正常工作（#38786 已修复）
- 多路复用网关的 token 隔离问题已解决（#54675）
- MCP stdio 服务器的 env 注入问题即将修复（#69053）

---

## 8. 待处理积压

### 长期未响应的 P1/P2 Issues（超过 7 天无维护者回复）

| Issue 编号 | 标题 | 创建时间 | 最后更新 | 优先级 | 风险 |
|-----------|------|----------|----------|--------|------|
| [#25083](https://github.com/NousResearch/hermes-agent/issues/25083) | Immutable/protected skills | 2026-05-13 | 2026-07-21 | P2 | 安全性需求，长期未实现 |
| [#23207](https://github.com/NousResearch/hermes-agent/issues/23207) | Ollama cloud web search | 2026-05-10 | 2026-07-21 | P3 | 功能缺失，对标竞品 |
| [#34385](https://github.com/NousResearch/hermes-agent/issues/34385) | Kanban DB index corruption | 2026-05-29 | 2026-07-21 | P3 | 数据损坏风险 |
| [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) | Kanban DB corruption under high concurrent-worker load | 2026-06-27 | 2026-07-21 | P3 | 并发写入问题 |
| [#43139](https://github.com/NousResearch/hermes-agent/pull/43139) | fix(bedrock): respect config.yaml bedrock.profile | 2026-06-09 | 2026-07-22 | P2 | AWS 认证配置问题，PR 待合并 |

### 建议优先处理

1. **P1 Bug #68915** — Worker 死锁问题阻塞用户工作流
2. **P1 Bug #68474** — Windows 数据库损坏可能导致用户数据永久丢失
3. **PR #43139** — Bedrock 配置问题长期未合并，影响 AWS 用户

---

## 附录：关键链接

- **项目主页：** https://github.com/NousResearch/hermes-agent
- **Issue 列表：** https://github.com/NousResearch/hermes-agent/issues
- **PR 列表：** https://github.com/NousResearch/hermes-agent/pulls

---

*报告生成时间：2026-07-22 | 数据覆盖：2026-07-21 00:00 至 2026-07-22 00:00 (UTC)*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-07-22  
**项目**: NanmiCoder/cc-haha  
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

2026年7月22日，cc-haha 项目保持活跃状态，共产生 5 条新 Issues，主要集中在 **Bug 反馈** 和 **功能咨询** 两大类别。今日未有任何 PR 合并或版本发布，项目处于问题收集与用户反馈积累阶段。值得注意的是，今日所有 Issues 均处于 OPEN 状态，暂无社区成员参与讨论或提供解决方案，维护者响应压力较大。从 Issue 类型分布来看，Windows 平台兼容性问题（2条）和第三方模型集成（2条）是当前用户最关注的领域。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**无 PR 合并或关闭**

过去 24 小时内项目无任何代码贡献记录，建议关注是否有待处理的 PR 积压。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issue

| Issue | 类型 | 评论数 | 链接 |
|-------|------|--------|------|
| #1083 - 运行过程中频繁出现 JavaScript error | Bug | 2 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1083) |

**分析**: Issue #1083 是今日评论最多的 Issue，用户 @Alix-li 报告在新电脑安装后频繁遇到 "JavaScript error occurred in the main process" 错误。该问题已获得 2 条评论互动，表明社区对此类稳定性问题高度关注。错误截图显示可能涉及 Electron 主进程异常，建议维护者优先排查版本 0.4.10 的兼容性问题。

---

## 5. Bug 与稳定性

### 🔴 高优先级 - 需紧急处理

| Issue | 描述 | 严重程度 | 状态 | 链接 |
|-------|------|----------|------|------|
| #1083 | 运行过程中频繁出现 JavaScript error in main process，版本 0.4.10 | **高** | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1083) |
| #1085 | Win10 企业版安装后无法启动，提示本地服务启动失败 | **高** | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1085) |

**分析**: 两条高优先级 Bug 均涉及 Windows 平台，其中 #1083 已引发社区讨论（2条评论），#1085 则暂无反馈。两条 Issue 均附带了错误截图，但缺少环境详细信息（Node 版本、系统路径等），建议维护者在响应时请求补充日志信息。

### 🟡 中优先级 - 需关注

| Issue | 描述 | 严重程度 | 状态 | 链接 |
|-------|------|----------|------|------|
| #1084 | 询问是否有计划支持移动端 | 低 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1084) |
| #1082 | 添加服务商不支持 kimi k3 模型 | 低 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1082) |
| #1081 | 建议增加客户端内嵌浏览器 | 低 | OPEN | [查看](https://github.com/NanmiCoder/cc-haha/issues/1081) |

---

## 6. 功能请求与路线图信号

### 📋 功能需求汇总

| Issue | 需求描述 | 预计工作量 | 链接 |
|-------|----------|------------|------|
| #1084 | **移动端支持** - 用户询问是否有计划支持移动端，或使用 cc-switch 绑定 | 待评估 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1084) |
| #1082 | **Kimi K3 模型支持** - 用户反映添加服务商时不支持 kimi k3 模型，复制 cc-switch 配置后无法联网 | 中等 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1082) |
| #1081 | **内嵌浏览器** - 用户建议增加客户端内嵌浏览器功能 | 待评估 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1081) |

**路线图信号分析**: 
- **第三方模型集成** 需求明显（#1082），建议评估 kimi k3 的 API 兼容性
- **跨平台扩展**（#1084）和**内嵌浏览器**（#1081）属于较大功能改动，需纳入长期规划

---

## 7. 用户反馈摘要

### 痛点与问题

1. **Windows 企业版兼容性问题**: 用户 @gzyct 在 Win10 企业版环境下遇到安装后无法启动的问题，提示"本地服务启动失败"，这是首次报告企业版环境的兼容性问题。

2. **新环境安装失败**: 用户 @Alix-li 在新电脑安装后频繁遇到 Electron 主进程 JavaScript 错误，可能与新环境的依赖或权限配置有关。

3. **第三方模型配置复杂**: 用户反映添加 kimi k3 模型时无法通过 UI 操作，手动复制 cc-switch 配置后仍无法联网使用，说明第三方模型的配置流程对用户不够友好。

### 用户诉求

- 希望获得更完善的 Windows 平台支持（包括企业版）
- 希望简化第三方模型的添加流程
- 对移动端使用场景有探索需求

---

## 8. 待处理积压

### ⚠️ 需维护者关注

| Issue | 类型 | 创建时间 | 等待天数 | 优先级 | 链接 |
|-------|------|----------|----------|--------|------|
| #1085 | Bug | 2026-07-21 | 1天 | 高 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1085) |
| #1084 | Question | 2026-07-21 | 1天 | 中 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1084) |
| #1082 | Question | 2026-07-21 | 1天 | 中 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1082) |
| #1081 | Enhancement | 2026-07-21 | 1天 | 低 | [查看](https://github.com/NanmiCoder/cc-haha/issues/1081) |

**建议**:
1. 优先响应 #1083 和 #1085 两个高优先级 Bug，体现对用户反馈的重视
2. #1082 关于 kimi k3 模型的问题可能涉及文档完善或功能支持，建议明确回复用户当前支持状态
3. 考虑建立 Issue 模板，引导用户提交 Bug 时提供更多环境信息（操作系统版本、Node 版本、错误日志等）

---

## 📊 关键指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issues | 5 | ↑ 较前日上升 |
| 关闭 Issues | 0 | ↓ 无 |
| 新增 PRs | 0 | → 持平 |
| 合并 PRs | 0 | → 持平 |
| 版本发布 | 0 | → 持平 |

---

*报告生成时间: 2026-07-22*  
*数据来源: GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-07-22  
**项目**: BigPizzaV3/CodexPlusPlus  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Codex++ 今日保持高度活跃，共产生 **19 条 Issue 更新**（含 17 条新开/活跃）和 **11 条 PR 更新**（含 8 条待合并）。项目整体呈现**功能迭代与稳定性修复并行**的状态：

- **功能推进**: 视觉/VLM 增强、模型 catalog 预计算、Stepwise 运行时优化等 PR 正在等待合并
- **稳定性承压**: DeepSeek 等第三方模型接入的自动审批问题持续发酵（累计 5+ 相关 Issue），启动崩溃、CPU 占用异常等问题影响用户体验
- **社区热度**: 自动审批模型映射缺陷成为最集中的反馈点，建议优先处理

---

## 2. 版本发布

**无新版本发布**。最近一个版本信息请参考项目 Releases 页面。

---

## 3. 项目进展

### ✅ 已合并/关闭的 PRs（3 条）

| # | PR 标题 | 状态 | 说明 |
|---|---------|------|------|
| [#1560](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1560) | 修复多数据库会话撤销恢复 | CLOSED | 解决新旧 schema 差异导致的 `no column named recency_at` 错误，支持多库备份 token 编码 |
| [#1598](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1598) | 提升管理工具窗口生命周期可靠性 | CLOSED | 修复窗口居中、托盘恢复、错误日志缺失等问题 |
| [#1450](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1450) | fix(watcher): add ChatGPT-Desktop to APP_PACKAGE_SPECS | CLOSED | 修复 v1.2.33 后 Windows 上 ChatGPT-Desktop 进程识别失败的测试回归 |

### 🔄 待合并的 PRs（8 条）

| # | PR 标题 | 状态 | 优先级/价值 |
|---|---------|------|-------------|
| [#1556](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1556) | 修复 Custom Responses 新任务缺失 Web Search | OPEN | 🔴 高 - 恢复第三方 API 的 Web Search 功能 |
| [#1555](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1555) | 桌宠真实鼠标交互紧急兼容修复 | OPEN | 🔴 高 - 修复 Codex App 26.715.2305.0 后的竞态问题 |
| [#1550](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1550) | 视觉与推理能力增强 + VLM 双格式 | OPEN | 🟡 中 - 包含设计文档和测试入口 |
| [#1451](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1451) | 预计算所有配置模型的 catalog | OPEN | 🟡 中 - 改进模型列表生成逻辑 |
| [#1261](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1261) | 自定义模型 context_window 修复 | OPEN | 🟡 中 - 解决非标准模型的上下文窗口配置失效 |
| [#1559](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1559) | 修复现有会话的 Local Project 分配 | OPEN | 🟢 低 - 维护性修复 |
| [#1551](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1551) | 禁用时跳过 Stepwise runtime | OPEN | 🟢 低 - 配置优化 |
| [#1568](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1568) | honor CODEX_SQLITE_HOME | OPEN | 🟢 低 - 环境变量支持 |

---

## 4. 社区热点

### 🔥 最活跃 Issues（按评论数排序）

| # | 标题 | 评论数 | 核心诉求 |
|---|------|--------|----------|
| [#1594](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1594) | [Bug] 上下文窗口被硬编码为258K，忽略配置的1M | 9 | **高优先级** - 用户配置 1M 上下文窗口被强制覆盖为 258K，影响大模型使用 |
| [#564](https://github.com/BigPizzaV3/CodexPlusPlus/issues/564) | 第三方模型下 guardian_approval 的 codex-auto-review 不可用 | 6 | **持续热点** - DeepSeek 等第三方模型接入后自动审批全部拒绝 |
| [#1574](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1574) | [Bug]: 点击项目的+ 无法进行下一步 | 4 | UI 交互阻塞，用户无法创建新项目 |
| [#1589](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1589) | [Question]: 启动之后就闪退 | 4 | **高影响** - 大量用户反馈更新后频繁闪退 |
| [#1578](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1578) | [Feature]: 关于供应商切换问题 | 3 | 功能增强 - 希望在 Codex 内直接切换供应商/模型 |

### 📌 热点分析

**自动审批问题集群**（#564, #274, #548, #1446, #293）形成最大痛点：
- 根因：Codex 内部使用 `codex-auto-review` 模型名，但 DeepSeek 等第三方 API 不识别
- 影响：所有高风险操作（Web Search、浏览器控制、MCP 安装）在自动审批模式下全部被拒绝
- 建议：优先合并相关 fix PR，或在文档中提供临时 workaround

---

## 5. Bug 与稳定性

### 🔴 严重 Bug（影响核心功能）

| # | 标题 | 状态 | 是否有 Fix PR |
|---|------|------|---------------|
| [#1589](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1589) | 启动后频繁闪退 | OPEN | ❌ 无 |
| [#1594](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1594) | 上下文窗口硬编码为 258K | OPEN | ❌ 无（#1261 部分相关） |
| [#1576](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1576) | codex 运行任务时 CPU 持续高占用 | OPEN | ❌ 无 |

### 🟡 中等 Bug（影响用户体验）

| # | 标题 | 状态 | 是否有 Fix PR |
|---|------|------|---------------|
| [#1574](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1574) | 点击项目+ 无法下一步 | OPEN | ❌ 无 |
| [#1384](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1384) | 切换账号后会话丢失 | OPEN | ❌ 无 |
| [#1596](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1596) | Dream-Skin 导致页面异常显示 | OPEN | ❌ 无 |
| [#1601](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1601) | 频繁出现重连（macOS M1） | OPEN | ❌ 无 |
| [#1600](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1600) | 使用 VPN 后卡住 | OPEN | ❌ 无 |

### 🟢 已解决 Bug

| # | 标题 | 解决方案 |
|---|------|----------|
| [#1567](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1567) | deepseek api 502 Bad Gateway | 关闭系统代理 |
| [#1588](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1588) | 混合模式无法保持模型列表为空 | 已关闭（可能已修复或用户放弃） |

---

## 6. 功能请求与路线图信号

### 📋 新功能请求

| # | 标题 | 需求分析 | 潜在价值 |
|---|------|----------|----------|
| [#1578](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1578) | 供应商切换优化 | 用户希望在 Codex 内直接切换模型，无需重启 | 🔴 高需求 |
| [#293](https://github.com/BigPizzaV3/CodexPlusPlus/issues/293) | 自动审核模型映射功能 | 默认 codex-auto-review 无法转发到自定义模型 | 🔴 高需求 |
| [#1550](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1550) | 视觉与推理能力增强 + VLM 双格式 | 已在 PR 中实现，包含设计文档 | 🟡 已纳入开发 |

### 🔮 路线图信号

基于当前 PR 和 Issue 趋势，预计下一版本可能聚焦：
1. **第三方模型兼容性增强** - 特别是 DeepSeek 系列
2. **模型 catalog 动态生成** - 支持任意 context_window 配置
3. **UI/UX 稳定性修复** - 闪退、交互阻塞问题

---

## 7. 用户反馈摘要

### 👍 用户满意点
- 项目持续快速迭代，维护者响应积极
- 第三方模型接入功能受到肯定
- 桌宠功能有一定用户基础

### 👎 用户痛点
1. **自动审批功能几乎不可用** - DeepSeek 等第三方模型用户完全无法使用自动审批
2. **更新后稳定性下降** - 大量用户反馈闪退、无响应问题
3. **供应商切换繁琐** - 需要重启 Codex++，UI 配置丢失
4. **上下文窗口配置失效** - 1M 配置被强制覆盖为 258K

### 💬 典型用户反馈

> *"我经常需要在多个供应商、多个模型之间切换，但若要切换供应商，我需要在codex++里切换模型重启codex，这样一方面费时间，另一方面原本配置的桌宠等UI需要重新配"* — [#1578](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1578)

> *"心血来潮更新了一下桌面版，codex++也更新了，然后启动之后疯狂闪退"* — [#1589](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1589)

---

## 8. 待处理积压

### ⚠️ 长期未解决 Issue（超过 30 天无明显进展）

| # | 标题 | 创建时间 | 状态 | 建议 |
|---|------|----------|------|------|
| [#274](https://github.com/BigPizzaV3/CodexPlusPlus/issues/274) | DeepSeek 自动审批模型名失败 | 2026-05-23 | OPEN | 根因明确，建议优先处理 |
| [#293](https://github.com/BigPizzaV3/CodexPlusPlus/issues/293) | 自动审核没有模型映射功能 | 2026-05-24 | OPEN | 与 #274 相关，可合并处理 |
| [#548](https://github.com/BigPizzaV3/CodexPlusPlus/issues/548) | 自动审批功能模型名配置错误 | 2026-06-02 | OPEN | 同上 |
| [#564](https://github.com/BigPizzaV3/CodexPlusPlus/issues/564) | 第三方模型自动审批不可用 | 2026-06-03 | OPEN | 同上 |

### 📌 维护者关注提醒

1. **自动审批问题集群**（#274, #293, #548, #564, #1446）已形成 5+ Issue 的积压，建议统一分析根因后批量处理
2. **稳定性问题**（#1589, #1601）影响用户留存，需尽快定位
3. **上下文窗口配置**（#1594）影响大模型使用场景，与 #1261 PR 存在关联

---

**报告生成时间**: 2026-07-22  
**数据来源**: GitHub Codex++ Repository  
**分析师**: AI Assistant

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*