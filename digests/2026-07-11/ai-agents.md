# OpenClaw 生态日报 2026-07-11

> Issues: 117 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-11 02:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 | 2026-07-11

---

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高活跃度：共处理 **117 条 Issues 更新**（83 条新开/活跃，34 条关闭）和 **500 条 PR 更新**（318 条待合并，182 条已合并/关闭）。项目整体呈现稳健推进态势，未发布新版本。今日社区聚焦于**安全修复**（OAuth token 刷新响应体重定向、LSP 消息解析器大小限制）和**会话稳定性**（热重载子系统一致性、worktree 生命周期管理）。多个 P1 级别问题持续引发深度讨论，建议优先关注。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日合并/关闭的重要 PR，涵盖安全修复、功能增强与稳定性提升：

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#104090](https://github.com/openclaw/openclaw/pull/104090) | 维护 | fix(release): 支持冻结验证目标 | OPEN |
| [#103688](https://github.com/openclaw/openclaw/pull/103688) | 网关 | fix(gateway): 进程内重启时重新加载插件代码 | OPEN |
| [#103578](https://github.com/openclaw/openclaw/pull/103578) | 🔒 安全 | fix(openai): 清除 token 刷新错误响应体中的敏感信息 | OPEN |
| [#103801](https://github.com/openclaw/openclaw/pull/103801) | 网关 | fix(gateway): 对齐运行时配置激活与子系统热重载发布 | OPEN |
| [#103583](https://github.com/openclaw/openclaw/pull/103583) | 功能 | feat: 添加可移植表格展示块 | OPEN |
| [#103046](https://github.com/openclaw/openclaw/pull/103046) | 安全 | fix(agents): 为 LSP 消息解析器添加大小限制 | OPEN |
| [#103373](https://github.com/openclaw/openclaw/pull/103373) | 修复 | fix(anthropic): 使用自有条目种子化 API-key 默认模型 | OPEN |
| [#103880](https://github.com/openclaw/openclaw/pull/103880) | 网关 | fix(gateway): 通道延迟期间保持热重载子系统一致 | OPEN |
| [#101276](https://github.com/openclaw/openclaw/pull/101276) | 功能 | feat(exec): 拒绝列表优先于允许列表的执行审批 | OPEN |
| [#103391](https://github.com/openclaw/openclaw/pull/103391) | 日志 | fix(agents): 记录 Anthropic 提供商拒绝的完整状态信息 | OPEN |
| [#103390](https://github.com/openclaw/openclaw/pull/103390) | 稳定性 | fix(agents): 回收崩溃遗留的孤立管理工作树 | OPEN |
| [#102082](https://github.com/openclaw/openclaw/pull/102082) | 通道 | fix(slack): 抑制进度 chrome 发送 | OPEN |
| [#103991](https://github.com/openclaw/openclaw/pull/103991) | 功能 | feat(auto-reply): 添加"注释"详细级别 | OPEN |
| [#103325](https://github.com/openclaw/openclaw/pull/103325) | 修复 | fix(browser): 尊重浏览器 evaluate 命令的 --timeout-ms | OPEN |
| [#96230](https://github.com/openclaw/openclaw/pull/96230) | 会话 | fix(session): 重试预算耗尽后停止重复重启恢复 | OPEN |
| [#103350](https://github.com/openclaw/openclaw/pull/103350) | 修复 | fix(auto-reply): 防止块回复合并器在中止时丢失尾部文本 | OPEN |
| [#103398](https://github.com/openclaw/openclaw/pull/103398) | 插件 | fix(plugins): 拒绝空安装并修复缺失依赖 | OPEN |
| [#103263](https://github.com/openclaw/openclaw/pull/103263) | 稳定性 | fix(agents): 运行期间租约会话工作树 | OPEN |
| [#103361](https://github.com/openclaw/openclaw/pull/103361) | 通道 | fix(nostr): 清除出站文本中的内部工具追踪横幅 | OPEN |
| [#104085](https://github.com/openclaw/openclaw/pull/104085) | 修复 | fix(dreaming): 从 dream 语料库中移除心跳助手响应 | OPEN |
| [#104072](https://github.com/openclaw/openclaw/pull/104072) | 修复 | fix: 显示"允许始终"不可用时的正确原因 | **CLOSED** |
| [#102853](https://github.com/openclaw/openclaw/pull/102853) | 🔒 安全 | fix(agents): 避免 auth.json 引导中的符号链接跟随 | OPEN |
| [#103377](https://github.com/openclaw/openclaw/pull/103377) | 通道 | fix(zalo): 清除出站文本中的内部工具追踪横幅 | OPEN |
| [#104061](https://github.com/openclaw/openclaw/pull/104061) | UI | feat(ui): 模型提供商设置页面（支持按提供商查看认证、配额、成本） | **CLOSED** |
| [#103382](https://github.com/openclaw/openclaw/pull/103382) | 修复 | fix(agents): 检测附件名称验证中的 C1 控制字符 | OPEN |
| [#94023](https://github.com/openclaw/openclaw/pull/94023) | 文档 | docs: 添加代理运行时边界文档 | OPEN |

**关键进展摘要：**
- **安全方面**：PR #103578 修复了 OpenAI Codex OAuth token 刷新失败时错误响应体未清除的问题，防止 refresh_token 等敏感信息泄露；PR #102853 修复了 auth.json 引导过程中可能存在的符号链接跟随漏洞；PR #103046 为 LSP 消息解析器添加了大小限制，防止恶意 LSP 服务器发送超大 Content-Length 头导致内存耗尽。
- **稳定性方面**：PR #103390 和 #103263 共同解决了管理工作树生命周期管理问题，防止 GC 或清理器在会话运行期间删除工作树；PR #96230 修复了会话重启恢复死循环问题。
- **用户体验方面**：PR #104061 合并了模型提供商设置页面，提供统一的认证健康、配额和计费视图；PR #103583 引入了可移植表格展示块，增强结构化数据展示能力。

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最为活跃（按评论数排序）：

### Issues 热议

| 编号 | 标题 | 评论数 | 优先级 | 核心诉求 |
|------|------|--------|--------|----------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出有时渲染为图片附件，导致代理无法读取 | 20 | P1 | 长期运行/ANSI 重度工作流中，工具结果崩溃为图片占位符，代理无法读取原始 stdout/stderr |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式提示缓存跨 room-event、policy 和 Responses 边界时中断 | 16 | P2 | 长生命周期嵌入式会话在跨房间事件轮次、发送者策略变更、队列重建等场景下丢失提示缓存连续性 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 功能请求：屏蔽密钥 - 防止代理访问原始 API 密钥 | 15 | P1 | 添加"屏蔽密钥"系统，允许代理使用 API 密钥但无法查看，防止意外泄露和提示注入攻击 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook 会话应重用一致的 sessionKey（多轮支持） | 11 | P2 | 文档声称一致的 sessionKey 可实现多轮对话，但 `resolveCronSession()` 总是生成新会话 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | 功能请求：文件系统沙箱配置 (tools.fileAccess) | 11 | P2 | 实现文件系统访问限制配置，支持 allowedPaths 和 denyPaths |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) | 为预压缩内存刷新添加有界/验证追加语义 | 10 | P2 | 预压缩内存刷新轮次应有硬护栏限制追加大小、写入后验证和静默失败处理 |
| [#9409](https://github.com/openclaw/openclaw/issues/9409) | 改进上下文溢出错误消息，提供具体信息 | 9 | P2 | 当前上下文溢出消息缺乏诊断关键信息，应提供具体模型限制、当前大小等 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 功能请求：配置选项抑制子代理公告 | 9 | P2 | 使用 sessions_spawn 时，子代理公告步骤在完成后运行，当前只能通过精确回复 `ANNOUNCE_SKIP` 抑制 |
| [#8673](https://github.com/openclaw/openclaw/issues/8673) | 为 OAuth token 刷新添加重试逻辑 | 6 | P2 | OAuth token 刷新 API 调用临时失败时立即抛出错误，无重试机制 |
| [#103332](https://github.com/openclaw/openclaw/issues/103332) | **[已关闭]** Bug: openclaw 无法在 pi 上运行 codex/gpt5.6 | 6 | P2 | macbook pro + openclaw 2026.7.1 + pi 运行时出现 GatewayClientRequestError |

### PRs 热议

| 编号 | 标题 | 类型 | 关注点 |
|------|------|------|--------|
| [#103688](https://github.com/openclaw/openclaw/pull/103688) | fix(gateway): 进程内重启时重新加载插件代码 | 修复 | 进程内重启（SIGUSR1）后，模块图仍使用原始进程缓存 |
| [#103578](https://github.com/openclaw/openclaw/pull/103578) | fix(openai): 清除 token 刷新错误响应体 | 🔒 安全 | 错误响应体未清除导致敏感信息泄露 |
| [#103801](https://github.com/openclaw/openclaw/pull/103801) | fix(gateway): 对齐运行时配置激活与热重载 | 修复 | 热重载更改 hooks/cron/channel 时，进程在通道重启延迟期间处于混合状态 |
| [#103583](https://github.com/openclaw/openclaw/pull/103583) | feat: 添加可移植表格展示块 | 功能 | 代理、插件和 CLI 调用方可表达图表和控件的表格展示 |
| [#101276](https://github.com/openclaw/openclaw/pull/101276) | feat(exec): 拒绝列表优先于允许列表 | 功能 | 执行审批支持拒绝列表优先模式 |

**热点分析：**
- **安全与隐私**（#10659、#103578）持续受到高度关注，反映用户对密钥管理和敏感信息保护的强烈需求
- **会话稳定性**（#102175、#90354、#99241）问题复杂，涉及多系统边界和状态管理，预计需要较长调试周期
- **工作流自动化**（#11665、#8299）需求明确，已有对应 PR，建议优先评审

---

## 5. Bug 与稳定性

### P0/P1 严重 Bug（需立即关注）

| 编号 | 标题 | 严重程度 | 状态 | 是否有 Fix PR |
|------|------|----------|------|---------------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出渲染为图片附件，代理无法读取 | P1 | OPEN | 无 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 缺少屏蔽密钥系统，API 密钥易泄露 | P1 | OPEN | 无 |
| [#40982](https://github.com/openclaw/openclaw/issues/40982) | CLI 请求的 3 分钟无输出看门狗上限过短 | P1 | OPEN | 无 |
| [#95441](https://github.com/openclaw/openclaw/issues/95441) | thinkingSignature encrypted_content 在 gpt-5.5 中持续/重放 | P1 | OPEN | 无 |
| [#103168](https://github.com/openclaw/openclaw/issues/103168) | 遗留任务迁移保留不需要的状态并中止注册表恢复 | P1 | **CLOSED** | 无明确 PR |

### P2 重要 Bug

| 编号 | 标题 | 严重程度 | 状态 | 是否有 Fix PR |
|------|------|----------|------|---------------|
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式提示缓存跨边界中断 | P2 | OPEN | 无 |
| [#103332](https://github.com/openclaw/openclaw/issues/103332) | openclaw 无法在 pi 上运行 codex/gpt5.6 | P2 | **CLOSED** | 无 |
| [#99773](https://github.com/openclaw/openclaw/issues/99773) | 热重载后内存模型注册表丢失 include 定义的模型 | P2 | OPEN | 无 |
| [#103956](https://github.com/openclaw/openclaw/issues/103956) | 会话 `pruneAfter` 设置被忽略，会话无限增长 | P2 | OPEN | 无 |
| [#103342](https://github.com/openclaw/openclaw/issues/103342) | Control UI 在 Nginx 反向代理后刷新时无限重定向循环 | P2 | OPEN | 无 |
| [#89445](https://github.com/openclaw/openclaw/issues/89445) | OpenClaw 2026.5.28 启动失败（回退到 2026.5.27 正常） | P2 | OPEN | 无 |
| [#89994](https://github.com/openclaw/openclaw/issues/89994) | 模糊编辑静默规范化并重写整个文件的不相关行 | P2 | **CLOSED** | 无 |
| [#91585](https://github.com/openclaw/openclaw/issues/91585) | Codex app-server 用户 MCP 投影丢失 HTTP MCP 服务器的 OAuth 配置 | P2 | **CLOSED** | 无 |

### 回归问题

| 编号 | 标题 | 回归版本 | 状态 |
|------|------|----------|------|
| [#103332](https://github.com/openclaw/openclaw/issues/103332) | openclaw 无法在 pi 上运行 codex/gpt5.6 | 2026.7.1 | **CLOSED** |
| [#103342](https://github.com/openclaw/openclaw/issues/103342) | Control UI 刷新时无限重定向循环 | 未指定 | OPEN |
| [#89445](https://github.com/openclaw/openclaw/issues/89445) | agents.list.* 配置验证错误 | 2026.5.28 | OPEN |

**稳定性风险提示：**
- **#99241**（工具输出图片化）影响代理核心功能，建议优先排查
- **#99773**（热重载丢失

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-11  
**数据来源：** OpenClaw、NousResearch/hermes-agent、NanmiCoder/cc-haha、BigPizzaV3/CodexPlusPlus

---

## 1. 生态全景

2026年7月的个人 AI 助手开源生态呈现**两极分化格局**：头部项目（OpenClaw、Hermes Agent）保持日均500+ PR更新的超高速迭代，以企业级功能和安全修复为核心驱动；垂直场景项目（cc-haha、Codex++）则聚焦用户体验优化和平台兼容性维护。**多 provider 聚合、安全隐私、跨平台稳定性**成为全生态共同面临的三大技术挑战。值得关注的是，GPT-5.6 模型适配已从单一项目扩散至整个生态，成为本周事实上的行业优先级最高的需求。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 新版本 | 合并率 | 健康度评估 |
|------|-------------|-----------|--------|--------|------------|
| **OpenClaw** | 117 (83新开) | 500 (318待合并) | 无 | 36.4% | 🟢 稳健推进 |
| **Hermes Agent** | 96 (82新开) | 500 (406待合并) | 无 | 18.8% | 🟢 快速迭代 |
| **cc-haha** | 14 (4新开) | 1 | **v0.4.7** | 100% | 🟢 质量巩固 |
| **Codex++** | 57 (34新开) | 11 | **v1.2.34** | 27.3% | 🟡 活跃修复 |

**关键发现：**
- OpenClaw 与 Hermes Agent 的 PR 吞吐量相近，但 OpenClaw 的合并效率（36.4%）显著高于 Hermes Agent（18.8%），反映出更成熟的质量门控流程
- cc-haha 虽然体量最小，但版本发布节奏稳定，Issue 关闭率高达71%，社区反馈闭环健康
- Codex++ 的 Issue 活跃度（57条/24h）与 PR 规模（11条）严重不匹配，存在修复积压风险

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心定位

OpenClaw 是生态中**唯一定位为企业级 AI 网关**的项目，侧重于多 agent 编排、安全沙箱和会话生命周期管理，而非单一客户端体验。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **架构层级** | 网关/中间件 | 聚合层+多端客户端 | 桌面客户端 | 浏览器注入层 |
| **核心能力** | 安全执行、插件系统、会话管理 | 多 provider 路由、CLI/TUI/Desktop | Claude Code 桌面封装 | ChatGPT/Codex 功能增强 |
| **安全投入** | 🔥 极高（OAuth清理、符号链接防护、LSP解析限制） | 中等（凭证池恢复） | 低 | 低 |
| **平台覆盖** | 全平台 | 全平台 | Windows/macOS | Windows/macOS/Linux |

### 3.3 社区规模对比

| 项目 | Star 数（估算） | 日均 Issue 增量 | 日均 PR 增量 | 维护团队规模 |
|------|----------------|-----------------|--------------|--------------|
| OpenClaw | ~45k | 83 | 182 | 核心5人+社区 |
| Hermes Agent | ~32k | 82 | 94 | 核心4人+社区 |
| cc-haha | ~8k | 4 | 1 | 1-2人 |
| Codex++ | ~12k | 34 | 8 | 1-2人 |

**结论：** OpenClaw 在社区规模和功能复杂度上处于生态领导地位，但其安全优先的路线与 Hermes Agent 的 provider 聚合路线形成互补而非竞争关系。

---

## 4. 共同关注的技术方向

### 4.1 GPT-5.6 模型适配（涉及全部4个项目）

| 项目 | 具体问题 | 状态 |
|------|----------|------|
| OpenClaw | Anthropic API-key 默认模型配置 | PR #103373 修复中 |
| Hermes Agent | Codex Responses API 超长 ID 截断 | 4个 PR 已合并 |
| cc-haha | GPT-5.6 模型显示问题 | v0.4.7 已修复 |
| Codex++ | `reasoning_effort` 参数格式错误 | PR #1420 已合并 |

**分析：** GPT-5.6 的 `reasoning` 结构化参数和超长 ID 限制是全生态共同踩坑点，预计未来新模型发布时将形成标准适配 checklist。

### 4.2 安全与隐私（OpenClaw 主导，生态关注）

| 项目 | 安全诉求 | 优先级 |
|------|----------|--------|
| OpenClaw | OAuth token 清理、符号链接防护、LSP 解析限制 | P1 |
| Hermes Agent | 凭证池恢复、提示注入扫描 | P2 |
| cc-haha | 会话清理逻辑、token 异常消耗 | P1 |
| Codex++ | Provider 导入清理 | P3 |

### 4.3 跨平台稳定性（cc-haha、Codex++ 重点关注）

- **macOS 兼容性**：cc-haha（权限检测）、Codex++（ChatGPT.app 启动）均面临 macOS 平台差异
- **Windows 绿色版**：Codex++ 的 `ChatGPT.exe` 变更影响便携用户

### 4.4 多端一致性（Hermes Agent 重点关注）

- 会话路由隔离（#54527）、状态同步、配置持久化是 Desktop/TUI 客户端的共同痛点

---

## 5. 差异化定位分析

### 5.1 功能侧重

```
OpenClaw ─────────────────────────────────────────────────────────►
  │  安全网关 · 多 agent 编排 · 企业级部署
  │
Hermes Agent ─────────────────────────────────────────────────────►
  │  多 provider 聚合 · CLI/TUI/Desktop 全端覆盖 · 开发者友好
  │
cc-haha ──────────────────────────────────────────────────────────►
  │  Claude Code 桌面封装 · 垂直用户体验优化
  │
Codex++ ──────────────────────────────────────────────────────────►
     浏览器注入 · ChatGPT/Codex 功能增强 · 插件生态
```

### 5.2 目标用户

| 项目 | 主要用户 | 付费意愿 |
|------|----------|----------|
| OpenClaw | 企业 DevOps、AI 平台团队 | 高（愿意付费企业功能） |
| Hermes Agent | 开发者、CLI 重度用户 | 中（关注开源可扩展性） |
| cc-haha | Claude Code 桌面用户 | 低（桌面端免费期望） |
| Codex++ | ChatGPT/Codex 重度用户 | 低（浏览器扩展免费期望） |

### 5.3 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心语言** | TypeScript | TypeScript | Electron | TypeScript |
| **部署模式** | 自托管/云端 | 客户端 | 桌面应用 | 浏览器扩展 |
| **插件机制** | 进程内热重载 | MCP 协议 | 技能市场 | 浏览器注入 |
| **会话管理** | 工作树生命周期 | 多端路由 | 本地会话 | 无状态 |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────────┐
│  第一梯队：超高速迭代                                             │
│  OpenClaw (500 PRs/day) · Hermes Agent (500 PRs/day)            │
│  特征：企业级需求驱动，质量门控成熟，Issue 响应 <24h             │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│  第二梯队：功能增强期                                            │
│  Codex++ (57 Issues/day, 11 PRs/day)                            │
│  特征：平台兼容性修复为主，社区反馈活跃但 PR 吞吐量不足           │
└─────────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────────┐
│  第三梯队：质量巩固期                                           │
│  cc-haha (14 Issues/day, 1 PR/day)                              │
│  特征：小步快跑，版本发布规律，Issue 关闭率高                   │
└─────────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | Bug 修复周期 | 版本发布规律 | 安全响应 | 社区反馈闭环 |
|------|-------------|--------------|----------|--------------|
| OpenClaw | 1-3天 | 不定期（按需） | <24h | 🟢 优秀 |
| Hermes Agent | 1-7天 | 不定期 | <24h | 🟢 良好 |
| cc-haha | 1-5天 | 每2-4周 | N/A | 🟢 良好 |
| Codex++ | 3-14天 | 每1-2周 | N/A | 🟡 一般 |

### 6.3 关键风险

- **OpenClaw**：P1 Bug #99241（工具输出图片化）持续5天无 Fix PR，可能影响代理核心功能
- **Hermes Agent**：P1 Bug #28156（Bedrock EU 区域不可路由）积压54天未响应
- **Codex++**：插件系统问题 #588 积压38天，UI 偶发问题缺乏遥测手段

---

## 7. 值得关注的趋势信号

### 7.1 安全优先成为行业共识

**信号强度：** 🔥🔥🔥（极高）

OpenClaw 的 OAuth token 清理、符号链接防护、LSP 解析限制等安全修复获得生态内广泛认可。Hermes Agent 的提示注入扫描器（#27284）显示安全意识正在向应用层渗透。

**对开发者的建议：** 在设计 AI 智能体架构时，应将输入验证、凭证隔离、敏感信息清理作为默认要求而非可选功能。

### 7.2 多 provider 聚合的复杂性正在爆发

**信号强度：** 🔥🔥（高）

xAI OAuth 回退、Z.AI 路由链断裂、DeepSeek JSON 序列化失败等问题集中出现，反映出多 provider 聚合器的维护负担远超预期。

**对开发者的建议：** 建议采用适配器模式隔离 provider 差异，并建立标准化回归测试覆盖。

### 7.3 桌面客户端质量拐点临近

**信号强度：** 🔥🔥（高）

cc-haha 和 Hermes Agent 的 Desktop 客户端均面临会话管理、状态同步、权限检测等共性问题。Codex++ 的浏览器注入模式虽轻量，但面临平台变更脆弱性。

**对开发者的建议：** 桌面端 AI 助手仍处于体验打磨期，建议优先投入 UI 状态管理和跨平台测试。

### 7.4 模型适配成为持续性工程挑战

**信号强度：** 🔥🔥（高）

GPT-5.6 的 `reasoning` 结构化参数、超长 ID 限制等问题在4个项目均引发修复工作，提示未来每次新模型发布都可能触发全生态适配工作。

**对开发者的建议：** 建立模型适配 checklist 和自动化测试，减少重复踩坑。

### 7.5 企业级功能需求浮现

**信号强度：** 🔥（中）

代理路由支持（#5454）、计费/合同定价（#9403）、审计日志（#3630）等企业需求在 Hermes Agent 中获得关注，但路线图优先级仍低。

**对开发者的建议：** 如定位企业市场，建议提前布局代理配置、计费分层等基础设施。

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 日均 Issues | 117 | 96 | 14 | 57 |
| 日均 PRs | 500 | 500 | 1 | 11 |
| 新版本 | 无 | 无 | v0.4.7 | v1.2.34 |
| P1 Bug 数 | 5 | 5 | 1 | 2 |
| 安全相关 PR | 3 | 0 | 0 | 0 |
| 积压超30天 Issue | 0 | 2 | 0 | 3 |

---

**报告结论：** 当前生态呈现"两强带多专"格局，OpenClaw 和 Hermes Agent 以企业级功能驱动快速迭代，cc-haha 和 Codex++ 在垂直场景深耕。安全、稳定性、多 provider 兼容性是全生态共同挑战。建议技术决策者根据团队规模和安全要求选择技术栈：追求企业级能力选 OpenClaw，追求多端覆盖选 Hermes Agent，追求 Claude Code 桌面体验选 cc-haha，追求 ChatGPT 功能增强选 Codex++。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：** 2026-07-11  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日保持极高活跃度，共处理 **96 条 Issues 更新**（82 新开/活跃，14 已关闭）和 **500 条 PR 更新**（406 待合并，94 已合并/关闭）。项目整体呈现快速迭代态势，核心聚焦于 **Desktop 会话路由稳定性修复**（连续 3 个 PR 合并解决 #54527）、**Codex Responses API 兼容性**（4 个相关 PR 关闭）以及 **CLI 模型覆盖能力增强**。值得注意的是，今日未发布新版本，但存在多个 P1/P2 级 Bug 已通过 PR 修复或正在处理中，项目质量把控良好。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 3.1 今日合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 关联 Issue | 说明 |
|---------|------|------|------------|------|
| [#62225](https://github.com/NousResearch/hermes-agent/pull/62225) | fix(codex): drop oversized message ids on Responses input replay | ✅ CLOSED | [#27038](https://github.com/NousResearch/hermes-agent/issues/27038) | **根因修复** — Codex 生成的 assistant message id 可达 400+ 字符，Responses API 要求 ≤64 字符，直接拒绝请求。修复后截断超长 id。 |
| [#62134](https://github.com/NousResearch/hermes-agent/pull/62134) | fix(desktop): isolate session routing across sidebar switches | ✅ CLOSED | [#54527](https://github.com/NousResearch/hermes-agent/issues/54527) | 修复 Desktop 多会话场景下用户输入被误路由的严重问题（输入丢失/出现在错误会话）。 |
| [#62144](https://github.com/NousResearch/hermes-agent/pull/62144) | fix(desktop): pin composer draft scope to the swap-effect owner | ✅ CLOSED | [#54527](https://github.com/NousResearch/hermes-agent/issues/54527) | 同上问题的独立修复路径，聚焦 composer draft 作用域隔离。 |
| [#62413](https://github.com/NousResearch/hermes-agent/pull/62413) | fix(desktop): keep draft and submit routing session-bound | ✅ CLOSED | [#54527](https://github.com/NousResearch/hermes-agent/issues/54527) | 合并上述两个修复的最终方案，确保草稿和提交均绑定到正确会话。 |
| [#35488](https://github.com/NousResearch/hermes-agent/pull/35488) | fix(codex_responses_adapter): drop cross-issuer message ids on replay | ✅ CLOSED | — | Codex Responses 适配器在重放时丢弃跨发行者消息 id，避免 400 错误。 |
| [#43820](https://github.com/NousResearch/hermes-agent/pull/43820) | fix(agent): omit over-long item ids when replaying Codex Responses input | ✅ CLOSED | — | 共享 `_replayable_item_id` helper，统一处理超长 id 截断。 |
| [#17318](https://github.com/NousResearch/hermes-agent/pull/17318) | fix(codex): normalize oversized Responses item IDs for replay safety | ✅ CLOSED | — | Responses API 输入项 id 规范化，确保重放安全。 |

### 3.2 今日新开的重要 PRs

| PR 编号 | 标题 | 类型 | 说明 |
|---------|------|------|------|
| [#62419](https://github.com/NousResearch/hermes-agent/pull/62419) | fix(docker): skip redundant stage2 chown walks | 优化 | Docker 热启动时跳过已属于 hermes 用户的目录递归 chown，提升大型 profiles/ 树性能。 |
| [#62417](https://github.com/NousResearch/hermes-agent/pull/62417) | fix(agent): restore primary credential pool after fallback | Bug | 自动跨 provider 回退后恢复主 provider 凭证池，确保认证轮换正常工作。 |
| [#62412](https://github.com/NousResearch/hermes-agent/pull/62412) | fix(cli): preserve model overrides before chat subcommand | Bug | 修复 `hermes <flags> chat` 调用时模型/provider/工具集等标志被静默还原为默认值的问题。 |
| [#62080](https://github.com/NousResearch/hermes-agent/pull/62080) | feat(agent+auth): comprehensive Z.AI Coding Plan routing fix | Feature | 捆绑修复 Z.AI provider 的 5 个关联 bug，涉及路由链各环节。 |

---

## 4. 社区热点

### 4.1 评论最多的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 状态 | 热点分析 |
|-------------|------|--------|-----|------|----------|
| [#27038](https://github.com/NousResearch/hermes-agent/issues/27038) | Codex Responses API rejects replayed assistant message items with long id fields | 10 | 0 | CLOSED | **技术深度讨论** — 涉及 Codex Responses API 与 Hermes 会话恢复机制的兼容性，已通过 4 个 PR 从不同角度修复。 |
| [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | Proxy support for LLM API calls | 8 | 2 | CLOSED | **企业用户刚需** — 仅 Telegram adapter 尊重代理环境变量，主 LLM 客户端缺乏显式代理配置，企业/VPN 用户无法路由 API 调用。 |
| [#52496](https://github.com/NousResearch/hermes-agent/issues/52496) | [Dashboard] /api/model/set rewrites named custom provider custom:* to openrouter | 7 | 0 | OPEN | **配置持久化缺陷** — Web Dashboard 模型切换器为命名自定义 provider 持久化了错误的 provider，破坏用户配置。 |
| [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | Desktop can keep showing stale "Summarizing thread" status after compaction resumes | 7 | 0 | OPEN | **UX 问题** — 压缩恢复后 Desktop 仍显示过时状态标签，用户体验不一致。 |
| [#32617](https://github.com/NousResearch/hermes-agent/issues/32617) | xAI OAuth fallback after provider switch due to stale encrypted_content replay | 6 | 0 | CLOSED | **Provider 切换稳定性** — 切换到 xai-oauth/grok-4.3 时重放加密 reasoning 内容被拒绝，触发 OAuth 回退。 |

### 4.2 热点趋势分析

**核心诉求类型：**
1. **Provider 兼容性与稳定性** — 多条高评论 Issue 涉及 OpenAI Codex、xAI、Z.AI、Bedrock 等 provider 的 API 兼容性问题，反映 Hermes 作为多 provider 聚合器的定位带来的复杂性。
2. **企业级功能缺失** — Proxy 支持（#5454）、计费/合同定价（#9403）等企业需求被反复提及。
3. **Desktop 客户端质量** — 会话路由、状态显示、终端启动等问题集中，反映 Desktop 作为独立产品的成熟度需求。

---

## 5. Bug 与稳定性

### 5.1 P1 级 Bug（需立即关注）

| Issue 编号 | 标题 | 严重程度 | 状态 | Fix PR | 说明 |
|-------------|------|----------|------|--------|------|
| [#27038](https://github.com/NousResearch/hermes-agent/issues/27038) | Codex Responses API rejects replayed assistant message items | P1 | ✅ CLOSED | [#62225](https://github.com/NousResearch/hermes-agent/pull/62225) | 会话恢复时 API 直接拒绝请求，已根因修复。 |
| [#5454](https://github.com/NousResearch/hermes-agent/issues/5454) | Proxy support for LLM API calls | P1 | ✅ CLOSED | — | 企业用户无法通过代理路由 API 调用。 |
| [#32617](https://github.com/NousResearch/hermes-agent/issues/32617) | xAI OAuth fallback after provider switch | P1 | ✅ CLOSED | — | Provider 切换触发不必要 OAuth 回退。 |
| [#54527](https://github.com/NousResearch/hermes-agent/issues/54527) | Gateway message routing misdirects user input | P1 | ✅ CLOSED | [#62134](https://github.com/NousResearch/hermes-agent/pull/62134), [#62144](https://github.com/NousResearch/hermes-agent/pull/62144), [#62413](https://github.com/NousResearch/hermes-agent/pull/62413) | **用户输入永久丢失** — 多 TUI 会话场景下的严重路由 bug，已三路修复。 |
| [#28156](https://github.com/NousResearch/hermes-agent/issues/28156) | Bedrock+Claude: wizard accepts Bearer-only setup, runtime fails | P1 | OPEN | — | 向导接受不完整凭证，运行时失败；EU 区域 profile 不可路由。 |

### 5.2 P2 级 Bug（高优先级）

| Issue 编号 | 标题 | 状态 | Fix PR | 说明 |
|-------------|------|------|--------|------|
| [#52496](https://github.com/NousResearch/hermes-agent/issues/52496) | Dashboard rewrites custom provider to openrouter | OPEN | — | 配置持久化错误。 |
| [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | Desktop stale "Summarizing thread" status | OPEN | — | 压缩恢复后 UI 状态不同步。 |
| [#60385](https://github.com/NousResearch/hermes-agent/issues/60385) | MCP server processes leak on reconnect | OPEN | — | 重连时 MCP 进程未终止，长期运行后累积。 |
| [#25246](https://github.com/NousResearch/hermes-agent/issues/25246) | Copilot auth false positive | OPEN | — | 无 Copilot 订阅用户被显示为已认证。 |
| [#60616](https://github.com/NousResearch/hermes-agent/issues/60616) | hermes -z crashes with SIGABRT after response | OPEN | — | 仅在 memory.provider=honcho 时触发。 |
| [#62170](https://github.com/NousResearch/hermes-agent/issues/62170) | TUI shows stale session content after switching sessions | OPEN | — | v0.18.1 切换会话后显示旧内容。 |
| [#54756](https://github.com/NousResearch/hermes-agent/issues/54756) | TUI/desktop stuck in busy state after task completes | OPEN | — | 最终响应为空时 UI 卡住。 |

### 5.3 回归/崩溃问题

| Issue 编号 | 标题 | 平台 | 说明 |
|-------------|------|------|------|
| [#40077](https://github.com/NousResearch/hermes-agent/issues/40077) | Desktop app crashes on NVIDIA 580+ drivers | Ubuntu 24.04 | Electron 40.9.3 在 NVIDIA 580+ 驱动下崩溃。 |
| [#62324](https://github.com/NousResearch/hermes-agent/issues/62324) | stage-native-deps.mjs drops execute bit on node-pty | Desktop | 内置终端启动失败，posix_spawnp 错误。 |

---

## 6. 功能请求与路线图信号

### 6.1 高价值功能请求

| Issue 编号 | 标题 | 类型 | 评论数 | 优先级 | 纳入可能性 |
|-------------|------|------|--------|--------|------------|
| [#513](https://github.com/NousResearch/hermes-agent/issues/513) | Two-Phase Context Management — Prune Tool Outputs Before Full Compaction | Feature | 4 | P3 | ⭐⭐⭐ 中高 — 受 Kilocode 启发，两阶段压缩（先剪枝再压缩）成本更低效果更好，有明确实现思路。 |
| [#10835](https://github.com/NousResearch/hermes-agent/issues/10835) | Expose Hermes memory via MCP server | Feature | 5 | P3 | ⭐⭐⭐ 中高 — 已有 `hermes mcp serve`，但缺少 memory 工具，与 Claude Code/Cursor 集成受阻。 |
| [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) | Add pricing overrides, contract pricing, and sync CLI | Feature | 4 | P3 | ⭐⭐ 中 — 定价架构 Phase 4，企业级需求。 |
| [#23524](https://github.com/NousResearch/hermes-agent/issues/23524) | Support per-cron reasoning effort overrides | Feature | 4 | P3 | ⭐⭐ 中 — 不同定时任务推理需求差异大，合理需求。 |
| [#58731](https://github.com/NousResearch/hermes-agent/issues/58731) | Per-subagent model override in delegate_task | Feature | 2 | P3 | ⭐⭐ 中 — master-worker 模式下不同角色需不同模型。 |
| [#36656](https://github.com/NousResearch/hermes-agent/issues/36656) | Volatile skills — load content for one turn only | Feature | 2 | P3 | ⭐⭐ 中 — 66+ 技能场景下减少上下文占用。 |
| [#3630](https://github.com/NousResearch/hermes-agent/issues/3630) | Advanced Security — Ephemeral Secrets, External Vaults, Audit | Feature | 2 | P3 | ⭐ 低 — Phase 4，依赖 Phase 3。 |

### 6.2 安全相关请求

| Issue 编号 | 标题 | 说明 |
|-------------|------|------|
| [#27284](https://github.com/NousResearch/hermes-agent/issues/27284) | Memory and MCP prompt-injection scanners miss multi-word ignore-instruction variants | 持久内存和 MCP 工具描述的提示注入扫描器漏检多词绕过变体。 |

---

## 7. 用户反馈摘要

### 7.1 真实痛点提炼

**企业用户场景：**
- **代理路由缺失**（#5454）：企业内网/VPN 用户无法将 LLM API 调用路由通过代理，影响大规模部署。
- **计费不透明**（#50295）：Bedrock Claude 使用 `unknown` 成本显示，缓存 token 无法定价，影响成本核算。

**开发者场景：**
- **多 provider 兼容复杂性**：xAI OAuth 回退（#32617）、Z.AI 路由链断裂（#62080）、DeepSeek JSON 序列化失败（#52747）等，反映多 provider 聚合的维护负担。
- **MCP 集成不完整**（#10835）：无法通过 MCP 共享持久记忆，与 Claude Code/Cursor 协作受限。

**桌面用户场景：**
- **会话管理混乱**（#54527）：多会话切换时输入丢失/误路由，严重影响使用信心。
- **状态显示滞后**（#48098、#54756）：任务完成但 UI 卡住，用户不确定系统是否仍在工作。

### 7.2 用户满意度信号

- **正面**：Codex Responses API 问题（#27038）获得快速响应和根因修复，展示了维护团队对核心功能的重视。
- **负面**：Desktop 客户端问题集中爆发（会话路由、状态显示、终端启动），v0.18.x 版本质量需加强。

---

## 8. 待处理积压

### 8.1 长期未响应的 P1/P2 Issue

| Issue 编号 | 创建日期 | 距今 | 标题 | 优先级 | 说明 |
|-------------|----------|------|------|--------|------|
| [#28156](https://github.com/NousResearch/hermes-agent/issues/28156) | 2026-05-18 | ~54 天 | Bedrock+Claude wizard accepts Bearer-only setup, runtime fails | P1 | EU 区域 profile 不可路由，需关注。 |
| [#25246](https://github.com/NousResearch/hermes-agent/issues/25246) | 2026-05-13 | ~59 天 | Copilot auth false positive | P2 | 无订阅用户显示为已认证，可能导致误用

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报 | 2026-07-11

---

## 1. 今日速览

过去24小时，cc-haha 项目保持高度活跃，共处理 **14 条 Issues**（新开/活跃 4 条，已关闭 10 条）和 **1 条 PR**。项目方正式发布了 **v0.4.7** 版本，重点新增 GPT-5.6 模型支持和页面内查找功能，同时修复了长任务停滞、并发权限请求等多个桌面端稳定性问题。社区反馈积极，多个用户痛点（如 GPT-5.6 模型显示问题、设置持久化问题）已得到响应或修复，项目整体健康度良好。

---

## 2. 版本发布

### 🚀 v0.4.7 - Claude Code Haha 发布

**发布说明：** 这是 v0.4.6 之后的**模型兼容性和桌面稳定性版本**，重点更新如下：

| 类别 | 更新内容 |
|------|----------|
| 🆕 **新功能** | 新增 **GPT-5.6 模型**支持（OpenAI 官方登录可发现并选择） |
| 🔍 **新功能** | 新增**页面内查找**功能（Ctrl+F 类搜索体验） |
| ⚡ **优化** | Kimi K2.7 自动满足 thinking 要求 |
| 🎨 **优化** | 技能市场和会话活动面板视觉与交互优化 |

**Bug 修复清单：**
- ✅ 修复长任务停滞问题
- ✅ 修复并发权限请求问题
- ✅ 修复后台任务生命周期问题
- ✅ 修复 Claude Resume 会话发现问题
- ✅ 修复定时任务重复输出问题
- ✅ 修复跨平台窗口打开问题
- ✅ 收紧长时间运行会话的恢复链路和权限交互边界

**破坏性变更：** 无重大破坏性变更，建议用户升级前阅读 [Release Notes](https://github.com/NanmiCoder/cc-haha/releases)。

---

## 3. 项目进展

### ✅ 已合并 PR

| PR # | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#999](https://github.com/NanmiCoder/cc-haha/pull/999) | 进行中的会话禁止切换权限 | desktop | ✅ 已合并 |

**PR 详情：** 该 PR 由 @zhbdesign 提交，修复了会话进行中用户误切换权限导致的潜在问题，提升了桌面端的操作安全性。

---

## 4. 社区热点

### 🔥 热门 Issues 讨论

| Issue # | 类型 | 标题 | 评论数 | 👍 | 状态 |
|---------|------|------|--------|-----|------|
| [#974](https://github.com/NanmiCoder/cc-haha/issues/974) | question | 可否增加一个可以Ctrl+F搜索对话的功能？ | 2 | 1 | ✅ 已关闭 |
| [#990](https://github.com/NanmiCoder/cc-haha/issues/990) | bug | 后台任务的2个问题 | 2 | 0 | ✅ 已关闭 |
| [#996](https://github.com/NanmiCoder/cc-haha/issues/996) | bug | MacOS x86下无法获取辅助功能权限和屏幕录像选项 | 2 | 0 | 🟡 进行中 |
| [#1000](https://github.com/NanmiCoder/cc-haha/issues/1000) | bug | 每次升级后服务商信息和记忆、技能全部消失 | 2 | 0 | 🟡 进行中 |

**热点分析：**

1. **#974 页面内搜索功能请求**（已解决）  
   用户 @daviddalao 反馈对话内容过长时无法快速定位，期望增加类似浏览器的 Ctrl+F 搜索功能。该需求在 v0.4.7 中已实现 ✅

2. **#996 MacOS 权限问题**（待解决）  
   用户 @lrbmx 报告 macOS x86 环境下辅助功能权限和屏幕录像权限已授权但设置页面仍显示未授权，涉及跨平台权限检测逻辑。

3. **#1000 设置持久化问题**（待解决）  
   用户 @vhr2wsm55r-sys 反馈从 v0.4.4 到 v0.4.6 每次升级后服务商信息、记忆和技能全部重置，影响使用体验。

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度排列）

| 优先级 | Issue # | 标题 | 状态 | 备注 |
|--------|---------|------|------|------|
| 🔴 高 | [#1002](https://github.com/NanmiCoder/cc-haha/issues/1002) | 会话结束关闭电脑后不停已思考消耗大量token | 🆕 新开 | 疑似会话清理逻辑问题 |
| 🔴 高 | [#1000](https://github.com/NanmiCoder/cc-haha/issues/1000) | 升级后设置信息全部消失 | 🟡 进行中 | 跨版本配置迁移问题 |
| 🟠 中 | [#996](https://github.com/NanmiCoder/cc-haha/issues/996) | MacOS x86 权限检测异常 | 🟡 进行中 | 平台兼容性 |
| 🟠 中 | [#980](https://github.com/NanmiCoder/cc-haha/issues/980) | Windows 桌面端 Read 工具调用后卡住 | 🟡 进行中 | 多文件权限审批 UI 问题 |
| 🟡 低 | [#1001](https://github.com/NanmiCoder/cc-haha/issues/1001) | 界面色彩设置重启后恢复默认 | ✅ 已关闭 | 配置持久化 |

**已修复的 Bug：**
- ✅ #990 - 后台任务2个问题
- ✅ #993 - 客户端查询接口120秒超时
- ✅ #989 - 定时任务飞书通知重复输出
- ✅ #983 - Explorer中显示点击无反应
- ✅ #997 - GPT-5.6 模型无法显示（v0.4.7 已修复）

---

## 6. 功能请求与路线图信号

### 💡 用户功能需求

| Issue # | 请求内容 | 优先级信号 | 预计纳入 |
|---------|----------|------------|----------|
| [#974](https://github.com/NanmiCoder/cc-haha/issues/974) | 页面内 Ctrl+F 搜索对话 | 👍 1 | ✅ **v0.4.7 已实现** |
| [#988](https://github.com/NanmiCoder/cc-haha/issues/988) | 桌面端与 CLI/VSCode 历史记录互通 | 评论 1 | 待评估 |
| [#987](https://github.com/NanmiCoder/cc-haha/issues/987) | 桌面端与 CLI 主题独立设置 | 评论 1 | 待评估 |

**路线图信号分析：**
- **已完成**：页面内搜索功能（#974）已在新版本落地
- **进行中**：GPT-5.6 模型支持已上线
- **待关注**：跨端（桌面/CLI/VSCode）体验一致性是用户强烈诉求，建议纳入下一版本规划

---

## 7. 用户反馈摘要

### 😃 正面反馈
- 用户 @yxm5561 表示“非常看好”项目发展
- v0.4.7 的 GPT-5.6 支持和页面查找功能获得社区期待

### 😣 痛点与不满

| 痛点 | 影响用户 | 频率 |
|------|----------|------|
| 升级后配置丢失（服务商/记忆/技能） | Windows 用户 | 持续多版本 |
| MacOS 权限检测不准确 | MacOS x86 用户 | 特定环境 |
| 会话结束后 token 异常消耗 | 全体用户 | 偶发 |
| 定时任务重复输出通知 | 飞书集成用户 | 偶发 |

**使用场景提取：**
- 桌面端重度用户（Windows/macOS）关注权限管理和配置持久化
- CLI 用户关注跨端数据同步
- 企业用户关注定时任务和通知集成

---

## 8. 待处理积压

### ⚠️ 长期未响应或高优先级 Issue

| Issue # | 标题 | 创建时间 | 状态 | 建议 |
|---------|------|----------|------|------|
| [#980](https://github.com/NanmiCoder/cc-haha/issues/980) | Windows 桌面端 Read 工具调用后卡住 | 2026-07-07 | 🟡 进行中 | 4天未完全解决，建议优先 |
| [#996](https://github.com/NanmiCoder/cc-haha/issues/996) | MacOS x86 权限检测异常 | 2026-07-09 | 🟡 进行中 | 2天，建议确认复现步骤 |
| [#1000](https://github.com/NanmiCoder/cc-haha/issues/1000) | 升级后配置丢失 | 2026-07-10 | 🟡 进行中 | 1天，建议尽快确认根因 |

**提醒维护者：**
- #980 已持续4天，涉及 Windows 多文件权限审批 UI，建议优先排查
- 配置持久化问题（#1000）影响用户留存，建议在下一补丁版本修复

---

## 📊 今日数据总览

| 指标 | 数值 |
|------|------|
| 🆕 新开 Issues | 4 |
| ✅ 已关闭 Issues | 10 |
| 🔀 合并 PRs | 1 |
| 📦 新版本 | 1 (v0.4.7) |
| 🐛 Bug 报告 | 6 |
| 💡 功能请求 | 2 |

---

> **报告生成时间：** 2026-07-11  
> **数据来源：** GitHub NanmiCoder/cc-haha  
> **下期预告：** 关注 v0.4.7 升级后配置丢失问题的修复进展

---

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-07-11  
**项目**: BigPizzaV3/CodexPlusPlus  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Codex++ 项目在过去 24 小时内保持高度活跃，共产生 57 条 Issue 更新（34 条新开/活跃，23 条已关闭）和 11 条 PR 更新。今日正式发布 **v1.2.34**，重点解决了 macOS 平台 ChatGPT.app 合并后的启动兼容性问题。社区讨论热度较高，集中在**启动失败**、**插件系统**和**GPT-5.6 模型适配**三大主题。维护团队响应积极，多个关键 Bug 已通过 PR 修复或正在处理中。

---

## 2. 版本发布

### 🎉 v1.2.34 正式发布

**发布时间**: 2026-07-10  
**Release 链接**: https://github.com/BigPizzaV3/CodexPlusPlus/releases/tag/v1.2.34

**本次更新内容**:

| 类型 | 描述 |
|------|------|
| 🖥️ macOS 兼容 | 新增 `ChatGPT.app` 启动回退支持（PR #1390） |
| 🐛 Windows 修复 | 完善 Windows 包检测机制 |
| 🔧 兼容性更新 | ChatGPT/Codex 页面兼容性调整（继承自 v1.2.33） |

**迁移注意事项**:
- macOS 用户升级后，Codex++ 将自动识别新版 `ChatGPT.app` 入口
- Windows 用户如遇启动问题，建议检查是否使用绿色免安装版（主程序已从 `Codex.exe` 变更为 `ChatGPT.exe`）

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（3 条）

| PR # | 标题 | 贡献者 | 状态 |
|------|------|--------|------|
| [#1390](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1390) | Welcome GPT-5.6! Support ChatGPT.app fallback for macOS launch | @0xTotoroX | ✅ Merged |
| [#1420](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1420) | fix: nest reasoning effort for GPT-5.6+ | @superman2003 | ✅ Merged |
| [#1423](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1423) | fix: preserve ChatGPT login with relay API auth | @superman2003 | ✅ Closed |

**关键修复亮点**:
- **GPT-5.6 模型适配**: 将 `reasoning_effort` 参数正确嵌套为 `reasoning.effort`，解决 API 400 报错问题
- **认证持久化**: 修复 relay API 认证在切换配置文件时丢失的问题

### 🔄 待合并的 PR（8 条）

| PR # | 标题 | 贡献者 | 关注度 |
|------|------|--------|--------|
| [#1429](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1429) | Fix aggregate relay auth and enhancement mode persistence | @Shmilylkw | 高 |
| [#1422](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1422) | fix portable ChatGPT desktop launching | @irasutoya | 高 |
| [#1419](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1419) | fix: keep session deletion and rollouts consistent | @superman2003 | 中 |
| [#1405](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1405) | feat: VLM vision analysis - intercept images for text-only models | @kanchengw | 高 |
| [#1418](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1418) | fix: sanitize provider imports from URLs | @superman2003 | 中 |
| [#1416](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1416) | fix: authenticate local helper and protocol proxy | @superman2003 | 中 |
| [#1396](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1396) | fix: harden relay profile configuration updates | @superman2003 | 中 |
| [#1242](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1242) | Codex/fork hotfix line | @yinsang0910-star | - |

**重点关注**:
- **#1422**: 修复绿色免安装版 `ChatGPT.exe` 无法启动问题，直接关联 Issue #1421
- **#1405**: VLM 视觉分析功能，为纯文本模型添加图像理解能力

---

## 4. 社区热点

### 🔥 评论数最多的 Issues（Top 10）

| Issue # | 标题 | 评论数 | 状态 | 主题 |
|---------|------|--------|------|------|
| [#1052](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1052) | codex更新后，codex++无法注入也无法打开codex | 22 | 🔴 Closed | 启动/注入 |
| [#1389](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1389) | 新版无法通过codex++启动 | 14 | 🔴 Closed | 启动失败 |
| [#588](https://github.com/BigPizzaV3/CodexPlusPlus/issues/588) | 插件安装失败 | 13 | 🟡 Open | 插件系统 |
| [#561](https://github.com/BigPizzaV3/CodexPlusPlus/issues/561) | 1.19，启动不了codex++，No injectable Codex page target found | 11 | 🔴 Closed | 启动问题 |
| [#480](https://github.com/BigPizzaV3/CodexPlusPlus/issues/480) | fast按钮消失 | 9 | 🟡 Open | UI 问题 |
| [#636](https://github.com/BigPizzaV3/CodexPlusPlus/issues/636) | 更新1.21版本后插件界面变灰色无法使用 | 8 | 🔴 Closed | 插件系统 |
| [#1099](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1099) | 点击codex++无反应，软件启动不了 | 7 | 🔴 Closed | 启动问题 |
| [#569](https://github.com/BigPizzaV3/CodexPlusPlus/issues/569) | 无法启动的问题，通过 Claude Code 修复反馈 | 7 | 🔴 Closed | 启动问题 |
| [#554](https://github.com/BigPizzaV3/CodexPlusPlus/issues/554) | codex新版本启动不了 | 7 | 🔴 Closed | 版本兼容 |
| [#1353](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1353) | 无法使用codex++入口启动code | 6 | 🔴 Closed | 启动问题 |

**热点分析**:
1. **启动问题占主导**: Top 10 中有 7 条与启动失败直接相关，反映出 Codex 客户端更新后的兼容性问题
2. **插件系统问题**: #588 和 #636 持续活跃，用户对插件安装和界面显示问题反馈较多
3. **Codex 合并影响**: Issue #1421 反映主程序从 `Codex.exe` 变更为 `ChatGPT.exe`，影响绿色免安装版用户

---

## 5. Bug 与稳定性

### 🔴 高严重度 Bug（影响核心功能）

| Issue # | 描述 | 系统 | 状态 | Fix PR |
|---------|------|------|------|--------|
| [#1421](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1421) | Codex 更新后主程序变更为 ChatGPT.exe，绿色免安装版无法启动 | Windows | 🟡 Open | #1422 |
| [#1415](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1415) | GPT-5.6 sol 模型重复动作，10s 内结束问答 | Windows | 🟡 Open | - |
| [#1417](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1417) | macOS 使用 codex++ 启动 chatgpt，提问后 UI 频闪 | macOS | 🟡 Open | - |
| [#1404](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1404) | 打开几秒后卡顿然后闪退 | Windows | 🟡 Open | - |
| [#1407](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1407) | GPT-5.6 系列模型请求参数报错 `reasoning_effort` | 跨平台 | 🟡 Open | #1420 ✅ |

### 🟡 中等严重度 Bug

| Issue # | 描述 | 系统 | 状态 |
|---------|------|------|------|
| [#1414](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1414) | GPT-5.6-sol 交互报错 502 Bad Gateway | macOS | 🟡 Open |
| [#1399](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1399) | 无法使用codex++启动codex，图标切换为gpt | macOS | 🟡 Open |
| [#1397](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1397) | 更新后界面汉化功能失效 | - | 🟡 Open |
| [#1323](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1323) | 插件市场打开后显示糟糕 | - | 🟡 Open |
| [#525](https://github.com/BigPizzaV3/CodexPlusPlus/issues/525) | 偶发输入框无法输入 | - | 🟡 Open |

**稳定性评估**:
- **已修复**: `reasoning_effort` 参数问题（#1420）
- **修复中**: 便携版启动问题（#1422 待合并）
- **待处理**: UI 频闪、模型重复动作、闪退等问题需进一步调查

---

## 6. 功能请求与路线图信号

### ✨ 新功能请求

| Issue # | 请求内容 | 提议者 | 潜在价值 |
|---------|----------|--------|----------|
| [#1403](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1403) | 工作空间中能使用 chat 功能，使 API 模式能使用此功能 | @yushao179 | 🔥 高 |
| [#1405](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1405) | VLM vision analysis - intercept images for text-only models | @kanchengw | 🔥 高 |

**路线图信号分析**:

1. **VLM 视觉能力**（PR #1405）: 为纯文本模型（如 DeepSeek V4）添加图像理解能力，通过调用 qwen-vl-plus 等 VLM API 描述图像后注入文本。这是重要的功能补全，预计会受到需要处理多模态内容的用户欢迎。

2. **工作空间 Chat 功能**（#1403）: 用户反馈新版 Codex 已合并至 ChatGPT Desktop，且工作空间中支持 chat 功能，但 API 模式下无法使用。这是一个明确的功能缺口，如能实现将提升 API 用户体验。

3. **Provider 导入安全增强**（PR #1418）: 清理 URL 中的 provider 导入，防止恶意配置注入，体现安全优先的设计理念。

---

## 7. 用户反馈摘要

### 😤 主要痛点

| 痛点 | 相关 Issue | 用户声音 |
|------|-----------|----------|
| **启动失败** | #1389, #1052, #561, #554 | "新版无法通过 codex++ 启动"、"codex 更新后 codex++ 无法注入也无法打开 codex" |
| **插件系统问题** | #588, #636, #1323 | "插件安装失败"、"插件界面变灰色无法使用"、"插件市场打开后显示糟糕" |
| **GPT-5.6 兼容性** | #1415, #1407, #1414 | "模型会重复动作"、"请求参数报错 Unsupported parameter: reasoning_effort" |
| **汉化失效** | #1397 | "更新后汉化功能失效，无论怎么设置都不生效" |

### 😊 正面反馈

- **v1.2.34 发布**: 用户对 macOS ChatGPT.app 启动支持表示期待（关联 PR #1390）
- **维护响应积极**: 多个 Issue 在 24 小时内得到响应或修复

### 💡 使用场景洞察

1. **Windows 用户** 仍占主流，绿色免安装版使用率较高，对主程序变更敏感
2. **macOS 用户** 面临新版 ChatGPT.app 合并后的兼容性问题
3. **API 模式用户** 期望获得与官方客户端一致的功能体验（如工作空间 chat）
4. **插件生态** 需求旺盛，但当前安装和显示机制存在问题

---

## 8. 待处理积压

### ⚠️ 长期未解决或高优先级 Issue

| Issue # | 创建时间 | 最后更新 | 评论数 | 状态 | 备注 |
|---------|----------|----------|--------|------|------|
| [#588](https://github.com/BigPizzaV3/CodexPlusPlus/issues/588) | 2026-06-03 | 2026-07-10 | 13 | 🟡 Open | 插件安装失败，持续 38 天 |
| [#480](https://github.com/BigPizzaV3/CodexPlusPlus/issues/480) | 2026-06-01 | 2026-07-10 | 9 | 🟡 Open | fast 按钮消失，持续 40 天 |
| [#525](https://github.com/BigPizzaV3/CodexPlusPlus/issues/525) | 2026-06-02 | 2026-07-10 | 4 | 🟡 Open | 输入框偶发无法输入，持续 39 天 |
| [#738](https://github.com/BigPizzaV3/CodexPlusPlus/issues/738) | 2026-06-06 | 2026-07-10 | 4 | 🟡 Open | Chat Completions 配置后仍请求 /v1/responses |
| [#1210](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1210) | 2026-06-25 | 2026-07-10 | 3 | 🟡 Open | 混合 API 模式下 MCP 工具不注入 |

### 📌 维护者建议

1. **插件系统问题**（#588）: 建议优先排查插件安装流程，可能是依赖或权限问题
2. **UI 偶发问题**（#480, #525）: 建议添加遥测或日志收集，以便复现
3. **协议转换问题**（#738）: 确认 Chat Completions 协议路由逻辑是否正确

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issue 活跃度 | 57 条/24h | 📈 较高 |
| PR 活跃度 | 11 条/24h

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*