# OpenClaw 生态日报 2026-07-12

> Issues: 142 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-12 02:46 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期：** 2026-07-12  
**项目仓库：** github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **142 条 Issues**（新开/活跃 67，关闭 75）和 **500 条 PRs**（待合并 248，已合并/关闭 252）。项目发布了 **v2026.7.1-beta.5** 正式版，引入了跨 CLI、Web 安装和 macOS 应用的对话式引导（Crestodian）以及 AI 引导的 Provider 配置等重磅功能。社区围绕会话状态管理、Session JSONL 锁竞争、Prompt Cache 边界问题展开了密集讨论，多个 P0/P1 级回归 Bug 正在积极推进修复中。整体来看，项目在功能迭代与稳定性修复之间保持平衡，但部分长期积压的架构性问题（如事件循环阻塞、内存泄漏）仍需持续关注。

---

## 2. 版本发布

### ✅ v2026.7.1-beta.5 已发布

**发布时间：** 2026-07-12  
**版本代号：** OpenClaw 2026.7.1

#### 核心亮点

| 功能 | 说明 |
|------|------|
| **对话式引导（Crestodian）** | 在 CLI、Web 安装和 macOS 应用中运行真实的 Agent-Loop 设置，提供 AI 引导的 Provider 配置、绑定到精确操作的模型判断审批、遮蔽凭证提示符，以及无模型时的确定性回退机制。 |

#### 破坏性变更提示

暂无重大破坏性变更报告，但建议关注以下潜在影响：

- **Crestodian 引导流程变更**：现有自动化安装脚本若依赖旧的 Provider 配置方式，可能需要适配新的 AI 引导交互模式。
- **遮蔽凭证机制**：已配置的 `.env` 文件中的明文密钥在引导流程中将被遮蔽，建议检查现有密钥注入逻辑。

#### 迁移注意事项

- 若使用自定义 Provider 配置，建议在升级后重新运行 `openclaw config` 以激活新的引导流程。
- 确认 `~/.openclaw/.env` 中的密钥格式与新版遮蔽机制兼容。

---

## 3. 项目进展

### 合并/关闭的重要 PRs（按影响力排序）

| PR 链接 | 标题 | 状态 | 重要性 | 说明 |
|---------|------|------|--------|------|
| [#104908](https://github.com/openclaw/openclaw/pull/104908) | Recover cron tool warnings with final text | ✅ 已合并 | P2 | 修复隔离 cron 运行产生的警告负载在部分渠道中导致误判为致命错误的问题 |
| [#104887](https://github.com/openclaw/openclaw/pull/104887) | refactor(android): remove unreachable chat code | ✅ 已合并 | P3 | 移除 Android 应用中永不执行的旧聊天渲染代码，简化维护面 |
| [#104892](https://github.com/openclaw/openclaw/pull/104892) | fix(release): preserve original PRs for named backports | ✅ 已合并 | P2 | 修复发布说明中重复列出回退 PR 及其原始 PR 的问题 |
| [#104880](https://github.com/openclaw/openclaw/pull/104880) | refactor(sessions): route get-reply-run session refresh through the accessor | ✅ 已合并 | P3 | 统一会话访问层，消除回复管道中的直接存储读取 |
| [#104866](https://github.com/openclaw/openclaw/pull/104866) | fix(auto-reply): adopt the target run slot when command turns continue into agent turns | ✅ 已合并 | P1 | 修复命令轮次转换为完整 Agent 轮次时的死锁问题（#104844） |
| [#104838](https://github.com/openclaw/openclaw/pull/104838) | ci: accept trusted unsigned release merge heads | ✅ 已合并 | P1 | 修复 CI 验证流程错误拒绝有效冻结候选版本的问题 |
| [#104835](https://github.com/openclaw/openclaw/pull/104835) | fix(openrouter): apply request policy to music generation requests | ✅ 已合并 | P2 | OpenRouter 音乐生成请求现在正确应用自定义请求策略（代理、Header 等） |
| [#104836](https://github.com/openclaw/openclaw/pull/104836) | fix(xai): apply request policy to video generation requests | ✅ 已合并 | P2 | xAI 视频生成请求现在正确应用请求策略 |
| [#104841](https://github.com/openclaw/openclaw/pull/104841) | fix(amazon-bedrock): add timeouts to model discovery requests | ✅ 已合并 | P2 | 为 Bedrock 模型发现添加超时限制，避免无限等待 |
| [#104899](https://github.com/openclaw/openclaw/pull/104899) | fix(duckduckgo): forward abort signal when web search runs are canceled | ✅ 已合并 | P2 | 修复 DuckDuckGo 搜索在 Agent 取消后仍继续消耗资源的问题 |
| [#104906](https://github.com/openclaw/openclaw/pull/104906) | fix(nextcloud-talk): align supported message actions | ✅ 已合并 | XS | 修复 Nextcloud Talk 不支持的消息操作被错误分派的问题 |
| [#104893](https://github.com/openclaw/openclaw/pull/104893) | fix(discord): retry stale preview cleanup after final delivery | ✅ 已合并 | S | Discord 流式预览清理在瞬态删除失败后现在会重试 |
| [#104895](https://github.com/openclaw/openclaw/pull/104895) | fix: retry Discord draft preview cleanup after transient delete failure | ✅ 已合并 | P2 | 同上，针对不同代码路径的修复 |
| [#104904](https://github.com/openclaw/openclaw/pull/104904) | fix(groq): keep default Llama agent turns within TPM limit | ✅ 已合并 | S | 修复 Groq Llama-3.3-70b 在 12K TPM 限制下立即返回 413 的问题 |
| [#104842](https://github.com/openclaw/openclaw/pull/104842) | fix(ios): block omitted share attachments | ✅ 已合并 | P1 | iOS Share Extension 现在正确拒绝缺失附件而非静默继续发送流程 |
| [#104888](https://github.com/openclaw/openclaw/pull/104888) | fix(llm): honor Retry-After header for Anthropic transport rate limits | ✅ 已合并 | P2 | Anthropic 传输层现在正确处理 429 响应中的 Retry-After Header |
| [#104907](https://github.com/openclaw/openclaw/pull/104907) | fix: ClawHub search passes unbounded limit to the API | ✅ 已合并 | S | 修复 ClawHub 搜索无限 limit 导致 API 过载的问题 |
| [#104516](https://github.com/openclaw/openclaw/pull/104516) | fix(config): reject zero-value resetArchiveRetention to prevent silent data loss | 🔄 待合并 | P0 | 拒绝 `resetArchiveRetention: "0h"` 配置以防止静默数据丢失 |
| [#103578](https://github.com/openclaw/openclaw/pull/103578) | fix(openai): redact token refresh error response body | 🔄 待合并 | P1 | OpenAI Codex OAuth 令牌刷新错误响应中的密钥现已被脱敏 |
| [#102082](https://github.com/openclaw/openclaw/pull/102082) | fix(slack): suppress progress chrome sends | 🔄 待合并 | P1 | Slack 进度条 UI 负载现在正确转换为反应而非发送消息 |
| [#101276](https://github.com/openclaw/openclaw/pull/101276) | feat(exec): deny-over-allow exec approval denylist | 🔄 待合并 | P1 | 实现执行审批的黑名单优先机制（#6615） |

### 今日项目整体推进评估

- **功能完善**：Provider 请求策略覆盖扩展至 OpenRouter 音乐、xAI 视频、FAL 媒体生成等多个渠道。
- **稳定性提升**：修复了多个渠道（Discord、Slack、Nextcloud Talk）的消息处理边界问题。
- **安全性加固**：OpenAI 令牌刷新错误脱敏、iOS 附件验证、exec 审批黑名单等安全相关修复持续推进。
- **CI/发布流程优化**：修复了发布验证流程对未签名合并提交的误判问题。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| Issue 链接 | 标题 | 评论数 | 👍 | 状态 | 核心诉求 |
|------------|------|--------|-----|------|----------|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent delivery lanes | 19 | 1 | 🔴 已关闭 | 会话 JSONL 写锁超时阻塞主/定时/子 Agent 通道，需改进锁粒度和诊断信息 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | embedded prompt cache breaks across room-event, policy, and Responses boundaries | 16 | 1 | 🟡 开放中 | 长生命周期嵌入式会话在跨边界时丢失 Prompt Cache 复用，工具清单在模型可见性间变化 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys | 14 | 4 | 🟡 开放中 | **高需求功能**：实现"遮蔽密钥"系统，允许 Agent 使用 API 密钥但无法查看，防止提示注入攻击 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write tool lacks append mode — isolated cron sessions destroy shared files | 12 | 1 | 🟡 开放中 | `write` 工具缺少追加模式，隔离 cron 会话覆盖共享文件导致静默数据丢失 |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | All tool results return "(see attached image)" literal string instead of actual output | 11 | 1 | 🟡 开放中 | **回归 Bug**：所有工具结果被替换为占位符字符串，文件读取返回字面量而非内容 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Models: fully dynamic model discovery (OpenRouter + beyond) | 10 | 3 | 🟡 开放中 | 需为快速变动的模型目录（从 OpenRouter 开始）实现完全动态模型发现 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook sessions should reuse existing session when sessionKey is consistent | 10 | 0 | 🟡 开放中 | Webhook hook 会话在提供一致 sessionKey 时应复用现有会话以支持多轮对话 |
| [#84903](https://github.com/openclaw/openclaw/issues/84903) | A single stalled agent session blocks the entire Gateway event loop | 10 | 2 | 🔴 已关闭 | 单个停滞的 Agent 会话阻塞整个 Gateway 事件循环——会话隔离失败 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes | 9 | 1 | 🟡 开放中 | Codex 工具调用生成多个 CPU 100%+ 的 openclaw-hooks 进程导致 Gateway RPC 停滞 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway memory leak: 389MB → 14.7GB over 4 days | 9 | 0 | 🔴 已关闭 | Gateway 内存泄漏：4 天内从 389MB 增长到 14.7GB |

### 热点分析

1. **会话状态与隔离问题**（#86538、#84903、#91009）：多个 Issue 指向同一个根本问题——会话隔离不足导致单点故障影响全局。这是 OpenClaw 架构层面的核心挑战，涉及 AsyncLocalStorage 作用域、事件循环饱和和锁竞争。
2. **遮蔽密钥功能**（#10659）：获得 4 个 👍，是当前最受期待的功能请求之一。社区对防止提示注入攻击和保护凭证安全有强烈需求。
3. **Prompt Cache 边界问题**（#102175）：嵌入式会话在跨边界时丢失缓存复用，影响长生命周期会话的成本和性能。
4. **工具结果占位符回归**（#104721）：这是一个影响所有工具输出的回归 Bug，需要优先处理。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### 🔴 P0 — 阻断级

| Issue 链接 | 标题 | 状态 | 是否有 Fix PR | 说明 |
|------------|------|------|---------------|------|
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | All tool results return "(see attached image)" literal string | 🟡 开放中 | ❌ 无 | **回归 Bug**：所有工具输出被替换为占位符字符串，完全阻断功能 |
| [#104516](https://github.com/openclaw/openclaw/pull/104516) | fix(config): reject zero-value resetArchiveRetention | 🔄 待合并 | ✅ #104516 | 拒绝 `resetArchiveRetention: "0h"` 防止静默数据丢失 |

#### 🟠 P1 — 高优先级

| Issue 链接 | 标题 | 状态 | 是否有 Fix PR | 说明 |
|------------|------|------|---------------|------|
| [#86538](https://github.com/openclaw/openclaw/issues/86538) | Session write-lock timeouts block subagent delivery lanes | 🔴 已关闭 | ❌ 无 | JSONL 写锁超时阻塞多通道交付，需改进锁机制 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | embedded prompt cache breaks across boundaries | 🟡 开放中 | ❌ 无 | Prompt Cache 在跨边界时失效，影响长会话成本 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write tool lacks append mode | 🟡 开放中 | ❌ 无 | 缺少追加模式导致 cron 会话覆盖共享文件 |
| [#84903](https://github.com/openclaw/openclaw/issues/84903) | Single stalled session blocks Gateway event loop | 🔴 已关闭 | ❌ 无 | 会话隔离失败，单点故障影响全局可用性 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay spawns CPU-bound processes | 🟡 开放中 | ❌ 无 | Codex 工具调用生成高 CPU 进程导致 RPC 停滞 |
| [#103917](https://github.com/openclaw/openclaw/issues/103917) | Gateway crashes on FsSafeError when subagent workspace dir deleted | 🟡 开放中 | ❌ 无 | 子 Agent 工作区目录被删除后 Gateway 崩溃 |
| [#103956](https://github.com/openclaw/openclaw/issues/103956) | Session `pruneAfter` setting ignored — sessions grow unbounded | 🔴 已关闭 | ❌ 无 | 会话修剪配置被忽略，导致无限制增长 |
| [#54155](https://github.com/openclaw/openclaw/issues/54155) | Gateway memory leak: 389MB → 14.7GB | 🔴 已关闭 | ❌ 无 | 4 天内存泄漏至 14.7GB，需定位泄漏源 |
| [#63998](https://github.com/openclaw/openclaw/issues/63998) | Session transcript doomloop: crash-restart cycle inflates transcript | 🔴 已关闭 | ❌ 无 | 会话转录本在崩溃循环中无限膨胀至 OOM |

#### 🟡 P2 — 中优先级

| Issue 链接 | 标题 | 状态 | 是否有 Fix PR | 说明 |
|------------|------|------|---------------|------|
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Fully dynamic model discovery | 🟡 开放中 | ❌ 无 | 模型选择静态化，需支持 OpenRouter 等动态目录 |
| [#81178](https://github.com/openclaw/openclaw/issues/81178) | Repeated early preflight compactions after compaction | 🔴 已关闭 | ❌ 无 | 压缩成功后仍重复触发预压缩检查 |
| [#92062](https://github.com/openclaw/openclaw/issues/92062) | WebChat sessions_history misses prior history in reset files | 🔴 已关闭 | ❌ 无 | 重置会话的历史记录丢失 |
| [#89791](https://github.com/openclaw/openclaw/issues/89791) | 5.26 supervisor mode + dual-plist: 30s EADDRINUSE loop | 🔴 已关闭 | ❌ 无 | 双 plist 安装时触发端口冲突循环 |
| [#67417](https://github.com/openclaw/openclaw/issues/67417) | openclaw backup create fails with ENOENT | 🔴 已关闭 | ❌ 无 | 备份期间会话文件被清理导致失败 |
| [#46252](https://github.com/openclaw/openclaw/issues/46252) | Cost dashboard omits .jsonl.reset archive files | 🔴 已关闭 | ❌ 无 | 成本仪表盘遗漏重置归档文件，严重低估日消费 |

### 稳定性趋势分析

- **好消息**：多个长期 P1 Bug（#84903、#54155、#63998、#103956）已标记为已关闭，表明维护团队在稳定性和内存管理方面取得了进展。
- **持续挑战**：会话隔离、事件循环饱和和内存泄漏问题呈现多维度关联性，单一修复可能不足以根治。
- **回归风险**：#104721 是一个影响所有工具输出的回归 Bug，需要优先定位引入版本。

---

## 6. 功能请求与路线图信号

### 高价值功能请求（按社区反馈排序）

| Issue 链接 | 标题 | 👍 | 状态 | 纳入可能性 | 说明 |
|------------|------|-----|------|------------|------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets - Prevent Agent from Accessing Raw API Keys | 4 | 🟡 开放中 | ⭐⭐⭐ 高 | 安全核心功能，与 v2026.7.1 的遮蔽凭证机制方向一致 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Fully dynamic model discovery (OpenRouter + beyond) | 3 | 🟡 开放中 | ⭐⭐⭐ 高 | 已有相关 PR #104835 等扩展 Provider 支持 |
| [#8892](https://github.com/openclaw/openclaw/issues/8892) | --agent flag for TUI to select which agent handles the session | 3 | 🟡 开放中 | ⭐⭐

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-12  
**分析范围：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

2026年7月中旬，个人 AI 助手/自主智能体开源生态呈现**三极分化格局**：头部项目（OpenClaw）已形成成熟的功能迭代与社区运营闭环，日均处理 Issue/PR 规模达百位数级别；中间梯队（Hermes Agent、Codex++）保持高提交频率但面临代码审查瓶颈或平台适配挑战；尾部项目（cc-haha）进入维护优化阶段，聚焦用户体验细节打磨。**跨项目共性痛点明确指向会话隔离、安全边界、第三方模型兼容三大方向**，反映出当前生态正从功能扩张期向稳定性深耕期过渡。

---

## 2. 各项目活跃度对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **Issues（24h）** | 142 | 7 | 25 | 26 |
| **PRs（24h）** | 500 | 500 | 0 | 15 |
| **合并率** | ~50% | ~5.4% | N/A | ~27% |
| **今日 Release** | ✅ v2026.7.1-beta.5 | ❌ 无 | ❌ 无 | ❌ 无 |
| **P0/P1 Bug** | 2 | 1 | 2 | 5 |
| **健康度评估** | 🟢 稳健迭代 | 🟡 积压待疏 | 🟡 维护优化 | 🟡 功能迭代 |
| **社区规模信号** | 极高活跃 | 高提交/低合并 | 稳定 | 中等活跃 |

**关键发现：** Hermes Agent 存在显著的 PR 积压问题（473 条待合并），代码审查流程可能成为瓶颈；OpenClaw 在保持高吞吐的同时维持了合理的合并率，展现出更成熟的社区治理能力。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw | 生态对比 |
|------|----------|----------|
| **发布节奏** | 持续输出 beta/正式版本 | 唯一保持高频发布的项目 |
| **功能覆盖** | CLI/Web/macOS 全端覆盖 | 生态最全面的解决方案 |
| **社区治理** | PR 合并率 ~50%，无明显积压 | 优于 Hermes Agent 的 5.4% |
| **安全特性** | 遮蔽密钥、凭证脱敏等已落地 | 领先于多数竞品 |

### 3.2 技术路线差异

- **OpenClaw**：采用 Agent-Loop 引导式架构，强调 Provider 配置的 AI 自动化，押注"对话式引导"降低使用门槛
- **Hermes Agent**：聚焦 MCP 生态扩展和上下文压缩，路线偏底层能力优化
- **cc-haha**：面向终端用户的桌面客户端，路线偏 UI/UX 和跨平台兼容性
- **Codex++**：深度绑定官方客户端（Codex/ChatGPT Desktop），路线偏集成增强

### 3.3 社区规模对比

OpenClaw 的日均 Issue/PR 处理量（600+）约为 Codex++（40+）的 15 倍、cc-haha（25）的 24 倍，反映出其在生态中的核心地位。但需注意 Hermes Agent 的 500 条 PR 更新（含大量待合并）若计入，实际代码贡献量不可忽视。

---

## 4. 共同关注的技术方向

### 4.1 会话状态隔离与事件循环稳定性

| 项目 | 具体问题 | 诉求 |
|------|----------|------|
| **OpenClaw** | #86538 JSONL 写锁超时阻塞多通道；#84903 单会话阻塞 Gateway 事件循环 | 改进锁粒度、会话隔离 |
| **Hermes Agent** | #62764 重复完成通知；#62766 Cron 任务并发冲突 | 任务调度去重与锁定 |
| **cc-haha** | #882 流式响应超时导致状态不同步 | 状态机健壮性 |

**跨项目共性：** 多项目均出现"单点故障影响全局可用性"的问题，指向异步编程模型和资源隔离层面的共同挑战。

### 4.2 安全边界与凭证保护

| 项目 | 具体诉求 |
|------|----------|
| **OpenClaw** | #10659 遮蔽密钥系统（已获 4 👍，高需求） |
| **Hermes Agent** | #62949 CaMeL 风格 prompt 注入防御插件 |
| **cc-haha** | #982 API 签名验证、权限审批 UI 优化 |

**跨项目共性：** 社区对"防止 Agent 误用/泄露凭证"和"prompt 注入防御"有强烈需求，OpenClaw 的遮蔽凭证机制已率先落地。

### 4.3 第三方模型兼容性与动态发现

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | #10687 动态模型发现（OpenRouter 等） |
| **Codex++** | #1158 DeepSeek 图片处理失败；#564 第三方模型自动审批失效 |
| **Hermes Agent** | MCP Server 选择性加载（#690，长期活跃） |

**跨项目共性：** 随着模型提供商生态多元化，静态模型列表已无法满足需求，动态发现和统一适配层成为共同诉求。

### 4.4 内存管理与资源泄漏

| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | #54155 Gateway 内存泄漏（4 天 389MB→14.7GB） |
| **Hermes Agent** | #62950 无界内存缓存累积 |
| **cc-haha** | 后台任务状态更新内存占用 |

**跨项目共性：** 长时间运行场景下的内存管理是普遍挑战，缓存淘汰机制和泄漏定位工具需求明确。

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 核心功能 | 差异化亮点 |
|------|----------|------------|
| **OpenClaw** | 全平台 AI 助手框架 | 对话式引导（Crestodian）、跨端一致性 |
| **Hermes Agent** | MCP 生态与上下文管理 | 上下文压缩保真度、插件系统 |
| **cc-haha** | 桌面端 AI 客户端 | Computer Use、跨平台桌面集成 |
| **Codex++** | 官方客户端增强 | 启动性能优化（-55s）、模型目录预计算 |

### 5.2 目标用户

| 项目 | 核心用户群 | 使用场景 |
|------|------------|----------|
| **OpenClaw** | 开发者/系统集成商 | 自托管 AI 助手、Provider 配置 |
| **Hermes Agent** | 高级用户/插件开发者 | MCP 生态扩展、自动化工作流 |
| **cc-haha** | 终端用户（Windows/Mac） | 桌面端 AI 交互 |
| **Codex++** | Codex/ChatGPT 用户 | 官方客户端功能增强 |

### 5.3 技术架构

| 项目 | 架构特点 | 技术选型倾向 |
|------|----------|--------------|
| **OpenClaw** | 模块化 Provider、事件驱动 | TypeScript/Node.js（全端统一） |
| **Hermes Agent** | MCP 桥接、压缩优先 | Rust（性能敏感组件） |
| **cc-haha** | 桌面客户端、跨平台 | Electron/Tauri（跨端） |
| **Codex++** | 代理层、协议转换 | Rust（CDP 交互、性能优化） |

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  🟢 快速迭代期                                                │
│  OpenClaw：日均 600+ 操作，功能密集发布，生态最成熟              │
│  Hermes Agent：高提交量但审查瓶颈，需优化 PR 流程               │
├─────────────────────────────────────────────────────────────┤
│  🟡 质量巩固期                                                │
│  Codex++：功能迭代与稳定性修复并重，第三方兼容性问题突出          │
│  cc-haha：维护优化阶段，聚焦平台兼容和 UI 细节                   │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 成熟度 | 依据 |
|------|--------|------|
| **OpenClaw** | ⭐⭐⭐⭐⭐ | 高频发布、稳定合并率、功能覆盖完整 |
| **Hermes Agent** | ⭐⭐⭐ | 高贡献量但审查积压，插件生态活跃 |
| **Codex++** | ⭐⭐⭐ | 功能迭代快，但第三方兼容性问题多 |
| **cc-haha** | ⭐⭐ | 处于维护阶段，平台问题未完全解决 |

### 6.3 社区健康度预警

- **⚠️ Hermes Agent**：473 条 PR 积压，合并率仅 5.4%，建议增加审查资源或优化贡献流程
- **⚠️ Codex++**：5 个高优先级 Bug 无 Fix PR，第三方模型兼容性是系统性短板
- **⚠️ cc-haha**：Windows 平台问题（#1000、#961）长期未解决，影响核心用户群

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势提炼

| 趋势 | 信号来源 | 对开发者的参考价值 |
|------|----------|-------------------|
| **安全成为核心诉求** | 遮蔽密钥（#10659）、CaMeL 防御、凭证脱敏等多点涌现 | AI Agent 安全边界设计将从"可选"变为"必选"，建议提前布局 |
| **第三方模型适配是瓶颈** | DeepSeek 在 Codex++ 的系统性失败 | 统一抽象层和动态发现机制将成为标配，静态 Provider 模式将被淘汰 |
| **会话隔离与事件循环是架构挑战** | 多项目出现"单点阻塞全局"问题 | 异步编程模型和资源隔离需要系统性设计，不可头痛医头 |
| **上下文管理进入深水区** | 压缩保真度、Prompt Cache 边界问题 | 长对话场景下的上下文效率优化将成为差异化竞争点 |
| **跨平台一致性仍是痛点** | Windows/Mac/Linux 问题分散 | 桌面端 AI 助手的平台适配需要专项投入 |

### 7.2 技术决策者行动建议

1. **若构建企业级 AI 助手平台**：优先参考 OpenClaw 的架构设计，其 Provider 抽象层和对话式引导机制具备可扩展性
2. **若关注 MCP 生态集成**：Hermes Agent 的插件系统和上下文压缩方案值得深入研究
3. **若聚焦第三方模型支持**：Codex++ 的问题清单揭示了适配层设计的常见陷阱，建议建立统一的模型兼容性测试套件
4. **若关注终端用户体验**：cc-haha 的 UI 改进需求（深色主题、截图功能）反映了用户对消费级体验的期待

### 7.3 开发者机会点

| 方向 | 机会描述 | 关联项目 |
|------|----------|----------|
| **安全中间件** | 遮蔽密钥、prompt 注入防御等安全组件存在通用化机会 | OpenClaw、Hermes Agent |
| **模型适配层** | 统一的第三方模型集成框架，解决兼容性碎片化问题 | Codex++、OpenClaw |
| **诊断工具** | 会话隔离诊断、内存泄漏定位工具是当前空白 | OpenClaw、Hermes Agent |
| **跨平台组件库** | 统一的权限管理、配置存储 UI 组件 | cc-haha、OpenClaw |

---

## 附录：数据来源

| 项目 | 仓库 | 报告期 |
|------|------|--------|
| OpenClaw | github.com/openclaw/openclaw | 2026-07-12 |
| Hermes Agent | github.com/NousResearch/hermes-agent | 2026-07-12（过去24h） |
| cc-haha | github.com/NanmiCoder/cc-haha | 2026-07-12（过去24h） |
| Codex++ | github.com/BigPizzaV3/CodexPlusPlus | 2026-07-12（过去24h） |

---

*本报告基于公开 GitHub 数据生成，仅代表报告日期当日的静态快照，实际情况可能已发生变化。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期**：2026-07-12  
**项目**：NousResearch/hermes-agent  
**数据来源**：GitHub Issues & Pull Requests（过去24小时）

---

## 1. 今日速览

过去24小时，Hermes Agent 项目保持极高活跃度，共产生 **500 条 PR 更新**（其中 473 条待合并，27 条已合并/关闭）和 **7 条 Issues 更新**（全部为新开/活跃状态）。项目整体呈现"高提交、低合并"特征——大量 PR 堆积待审，合并率仅约 5.4%，反映出代码审查流程可能存在瓶颈。今日无新版本发布，但有多个高优先级 Bug 被报告，包括文件写入大小限制、内存泄漏和 Windows 平台兼容性问题。社区对 MCP Server 管理、上下文压缩和插件系统表现出持续关注。

---

## 2. 版本发布

**今日无新版本发布。**

最近版本信息请参阅项目 Releases 页面：https://github.com/NousResearch/hermes-agent/releases

---

## 3. 项目进展

过去24小时共 **合并/关闭 27 条 PR**，以下为重要进展：

### 已合并 PR

| PR 编号 | 类型 | 描述 | 合并时间 |
|---------|------|------|----------|
| [#62767](https://github.com/NousResearch/hermes-agent/pull/62767) | Bug Fix | **gateway**: 可靠地在外部 supervisor 重启后发送通知——修复了 SIGTERM 场景下的持久化恢复通知问题 | 2026-07-12 |
| [#62760](https://github.com/NousResearch/hermes-agent/pull/62760) | Bug Fix | **skill_utils**: 将 `extract_skill_description` 截断上限从 60 提升至 1024 字符，解决了技能描述被截断的问题 | 2026-07-12 |
| [#62754](https://github.com/NousResearch/hermes-agent/pull/62754) | Bug Fix | **telegram**: 规范化 bot 命令描述中的 em/en dashes，解决了 Telegram BotFather 拒绝命令列表的问题 | 2026-07-12 |

### 关键推进的功能

1. **上下文压缩保真度增强**（[#62777](https://github.com/NousResearch/hermes-agent/pull/62777)、[#62769](https://github.com/NousResearch/hermes-agent/pull/62769)）：新增用户决策持久化和高信号内容优先级功能，在重复压缩场景下保持上下文完整性，预计将显著改善长对话场景下的用户体验。

2. **Cron 任务可靠性**（[#62766](https://github.com/NousResearch/hermes-agent/pull/62766)、[#62763](https://github.com/NousResearch/hermes-agent/pull/62763)）：修复了重复 cron 任务执行和 Windows 平台锁超时问题，提升了调度器的稳定性。

3. **API Server 安全加固**（[#62759](https://github.com/NousResearch/hermes-agent/pull/62759)、[#62758](https://github.com/NousResearch/hermes-agent/pull/62758)）：新增 CORS headers 暴露和 `previous_response_id` 验证，提升了 API 安全性。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 热度分析 |
|------------|------|--------|----------|
| [#690](https://github.com/NousResearch/hermes-agent/issues/690) | **MCP Server Management — Discovery, Selective Tool Loading, and hermes mcp CLI** | 3 | 长期活跃的功能请求（自2026-03-08），社区对 MCP 服务器发现和选择性工具加载有强烈需求 |
| [#62948](https://github.com/NousResearch/hermes-agent/issues/62948) | **write_file silently fails when content exceeds ~8 KB** | 1 | 新报告的 P1 Bug，影响文件写入功能 |

### 热点 PR（待合并）

| PR 编号 | 标题 | 热度分析 |
|---------|------|----------|
| [#62777](https://github.com/NousResearch/hermes-agent/pull/62777) | feat(compression): preserve fidelity across repeated compactions | 上下文压缩核心功能，预计影响广泛 |
| [#62764](https://github.com/NousResearch/hermes-agent/pull/62764) | fix(gateway): deduplicate completion delivery | 修复真实会话中的重复完成通知问题 |
| [#62762](https://github.com/NousResearch/hermes-agent/pull/62762) | fix(mcp): enforce authoritative Hermes tool schemas | MCP 桥接工具 schema 规范化 |

### 社区诉求分析

1. **MCP 生态完善**：Issue #690 持续活跃表明社区强烈希望改进 MCP Server 的管理体验，包括发现机制、选择性加载和 CLI 工具支持。

2. **安全性增强**：Issue #62949 提出的 CaMeL 风格 prompt 注入防御插件，以及多个 API Server 安全修复 PR，反映了用户对安全边界的关注。

3. **平台兼容性**：多个 Windows/WSL2 相关 Bug（#54296、#62763、#62761）表明跨平台稳定性仍是痛点。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### P1（Critical）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#62948](https://github.com/NousResearch/hermes-agent/issues/62948) | **write_file silently fails when content exceeds ~8 KB** — 工具调用被替换为空对象 | OPEN | ❌ 无 |

> **风险**：当写入内容超过约 8KB 时，消息清理器的修复通道无法解析参数（可能在流式传输中被截断），导致静默失败，用户可能丢失数据。

#### P2（High）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#54296](https://github.com/NousResearch/hermes-agent/issues/54296) | **Rust panic (trap int3) in ThreadPoolSingl during gateway SIGTERM shutdown on WSL2** | OPEN | ❌ 无 |
| [#62950](https://github.com/NousResearch/hermes-agent/issues/62950) | **Unbounded in-memory caches accumulate in long-running gateway/TUI processes** | OPEN | ❌ 无 |
| [#62766](https://github.com/NousResearch/hermes-agent/pull/62766) | **fix(cron): lock recurring jobs for full run** | OPEN（待合并） | ✅ PR #62766 |
| [#62764](https://github.com/NousResearch/hermes-agent/pull/62764) | **fix(gateway): deduplicate completion delivery** | OPEN（待合并） | ✅ PR #62764 |
| [#62752](https://github.com/NousResearch/hermes-agent/pull/62752) | **fix(gateway): declare splits_long_messages on SmsAdapter** | OPEN（待合并） | ✅ PR #62752 |

> **风险**：Issue #54296 在 WSL2 环境下会导致整个 Linux 会话崩溃；Issue #62950 的内存泄漏会影响长时间运行的服务稳定性。

#### P3（Medium）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#62951](https://github.com/NousResearch/hermes-agent/issues/62951) | **Bundled chronos plugin fails to load on v0.18.2** — API 不兼容 | OPEN | ❌ 无 |
| [#47954](https://github.com/NousResearch/hermes-agent/issues/47954) | **WARNING: Memory provider 'honcho' loaded but no provider instance found** — 启动时竞态条件 | OPEN | ❌ 无 |

### 稳定性指标

- **Bug 报告总数**：7 条（过去24小时）
- **P1/P2 Bug**：5 条
- **已有 Fix PR 的 Bug**：3 条（#62766、#62764、#62752）
- **待修复 Bug**：4 条

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue 编号 | 标题 | 优先级 | 社区支持 | 纳入可能性 |
|------------|------|--------|----------|------------|
| [#690](https://github.com/NousResearch/hermes-agent/issues/690) | **MCP Server Management — Discovery, Selective Tool Loading, and hermes mcp CLI** | Feature | 高（长期活跃） | ⭐⭐⭐ 高 |
| [#62949](https://github.com/NousResearch/hermes-agent/issues/62949) | **Community plugin: CaMeL-style prompt-injection defense** | P3 | 中 | ⭐⭐ 中 |

### 路线图信号分析

1. **MCP 生态扩展**：Issue #690 提出了完整的 MCP Server 管理方案（发现、选择性加载、CLI），这是对当前 YAML 配置方式的重大改进，预计将成为下一版本的重点功能。

2. **上下文管理优化**：PR #62777 和 #62769 正在推进的压缩保真度和用户决策优先级功能，表明项目正在加强对长对话场景的优化。

3. **安全插件生态**：CaMeL 风格防御插件的提出，反映了社区对 prompt 注入攻击防护的需求，可能通过插件系统实现而不影响核心代码。

---

## 7. 用户反馈摘要

### 真实痛点

1. **文件写入大小限制**（#62948）：
   > "当 `write_file` 被调用且内容超过约 8KB 序列化 JSON 时，消息清理器的修复通道无法解析参数（可能在流式传输中被截断）"
   - **影响**：用户无法写入较大的代码文件或配置文件
   - **期望**：支持大文件写入或提供明确的错误提示

2. **WSL2 崩溃问题**（#54296）：
   > "Hermes gateway 在 `systemd --user` 发送 SIGTERM 时崩溃，导致整个 WSL 会话被杀死"
   - **影响**：Windows + WSL2 用户在关闭会话时丢失所有工作
   - **期望**：优雅关闭，不影响底层系统

3. **内存持续增长**（#62950）：
   > "长期运行的 gateway/TUI 进程中，多个内存结构无界增长——每个任务、每轮对话、每个文件的缓存从未被清除"
   - **影响**：长时间运行的服务内存占用持续上升
   - **期望**：实现缓存淘汰机制

### 用户满意点

- **Cron 任务锁定修复**（#62766）解决了重复执行问题，用户无需担心并发冲突
- **Telegram 命令规范化**（#62754）修复了 BotFather 集成问题

---

## 8. 待处理积压

### 长期未响应的 Issue（超过30天无更新）

| Issue 编号 | 标题 | 创建时间 | 最后更新 | 状态 | 建议 |
|------------|------|----------|----------|------|------|
| [#690](https://github.com/NousResearch/hermes-agent/issues/690) | MCP Server Management | 2026-03-08 | 2026-07-12 | OPEN | 建议维护者评估并给出路线图回应 |
| [#47954](https://github.com/NousResearch/hermes-agent/issues/47954) | honcho 内存提供者警告 | 2026-06-17 | 2026-07-12 | OPEN | 建议确认是否为已知问题或提供修复计划 |

### PR 积压情况

- **待合并 PR 总数**：473 条
- **积压超过 7 天的高优先级 PR**：
  - [#62777](https://github.com/NousResearch/hermes-agent/pull/62777) — 上下文压缩保真度（Feature，P3）
  - [#62766](https://github.com/NousResearch/hermes-agent/pull/62766) — Cron 任务锁定（P2）
  - [#62764](https://github.com/NousResearch/hermes-agent/pull/62764) — 完成通知去重（P2）

### 建议维护者关注

1. **Issue #690**：长期活跃的功能请求，建议给出明确的开发计划或拒绝理由
2. **Issue #62948**：P1 Bug 尚未有 Fix PR，建议优先处理
3. **PR 积压**：473 条待合并 PR 可能需要增加审查资源或优化流程

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 过去24小时 Issues 更新 | 7 条（新开/活跃: 7，已关闭: 0） |
| 过去24小时 PR 更新 | 500 条（待合并: 473，已合并/关闭: 27） |
| 新版本发布 | 0 个 |
| P1 Bug | 1 条 |
| P2 Bug | 4 条 |
| P3 Bug/Feature | 2 条 |

---

*报告生成时间：2026-07-12*  
*数据来源：GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-07-12  
**项目**: NanmiCoder/cc-haha  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

2026-07-12 项目活跃度保持稳定，共处理 **25 条 Issues**（新开/活跃 12 条，已关闭 13 条），但 **PR 活动为零**，无新版本发布。社区反馈集中在 **Windows 平台兼容性**（启动失败、配置重置）和 **权限管理** 问题。值得注意的是，多个长期未解决的 bug（如会话管理、状态更新）在本日集中关闭，表明维护者正在积极清理积压问题。整体来看，项目处于 **维护优化阶段**，建议关注跨平台一致性和用户体验细节的改进。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

**无 PR 合并/关闭**

> 过去 24 小时内无任何 Pull Request 活动，建议关注是否有待审查的代码贡献。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 状态 | 核心诉求 |
|------|-------|--------|------|----------|
| 1 | [#1000](https://github.com/NanmiCoder/cc-haha/issues/1000) 升级后服务商信息和记忆/技能消失 | 5 | OPEN | **高优先级** - Win11 用户数据持久化问题 |
| 2 | [#882](https://github.com/NanmiCoder/cc-haha/issues/882) 会话结束后自己又回答消息 | 5 | CLOSED | 流式响应超时处理 |
| 3 | [#900](https://github.com/NanmiCoder/cc-haha/issues/900) goal功能JSON解析异常导致状态未清理 | 4 | CLOSED | 错误处理健壮性 |
| 4 | [#961](https://github.com/NanmiCoder/cc-haha/issues/961) Win11启动失败 | 4 | OPEN | **高优先级** - 平台兼容性 |
| 5 | [#892](https://github.com/NanmiCoder/cc-haha/issues/892) 模型回复后停止原因是end_turn | 3 | OPEN | 会话生命周期管理 |

**热点分析**：
- **平台问题突出**：Win11 相关问题占活跃 Issue 的 25%（#1000, #961, #965），建议优先排查 Windows 平台的配置存储和启动流程。
- **状态管理缺陷**：多个已关闭的 bug 涉及 agent 状态不更新、会话卡住等问题，表明状态机设计存在改进空间。
- **权限系统问题**：MacOS 辅助功能权限（#996）和 Windows 文件权限审批 UI（#980）均未解决，影响核心使用体验。

---

## 5. Bug 与稳定性

### 严重程度：高 🔴

| Issue | 描述 | 平台 | 状态 | 是否有 Fix |
|-------|------|------|------|------------|
| [#1000](https://github.com/NanmiCoder/cc-haha/issues/1000) | 升级后服务商信息、记忆、技能全部消失 | Win11 | OPEN | ❌ |
| [#961](https://github.com/NanmiCoder/cc-haha/issues/961) | 启动失败 | Win11 | OPEN | ❌ |
| [#982](https://github.com/NanmiCoder/cc-haha/issues/982) | API Error 400: Invalid signature in thinking block | 通用 | OPEN | ❌ |

### 严重程度：中 🟡

| Issue | 描述 | 平台 | 状态 | 是否有 Fix |
|-------|------|------|------|------------|
| [#996](https://github.com/NanmiCoder/cc-haha/issues/996) | MacOS x86 无法获取辅助功能权限和屏幕录像选项 | macOS x86 | OPEN | ❌ |
| [#965](https://github.com/NanmiCoder/cc-haha/issues/965) | 更新版本后 Computer Use 配置参数重置 | 通用 | OPEN | ❌ |
| [#984](https://github.com/NanmiCoder/cc-haha/issues/984) | PR workflow pr-quality.yml 有问题 | CI/CD | OPEN | ❌ |

### 严重程度：低 🟢（已关闭）

| Issue | 描述 | 修复情况 |
|-------|------|----------|
| [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | Stream idle timeout 导致会话不停止 | ✅ 已关闭 |
| [#900](https://github.com/NanmiCoder/cc-haha/issues/900) | goal 功能 JSON 解析异常 | ✅ 已关闭 |
| [#980](https://github.com/NanmiCoder/cc-haha/issues/980) | Read 工具调用后卡住（多文件权限审批 UI） | ✅ 已关闭 |
| [#971](https://github.com/NanmiCoder/cc-haha/issues/971) | 后台任务状态更新太慢 | ✅ 已关闭 |

**Bug 修复率**：本日关闭 13 个 Issues，其中 8 个为 bug 相关，修复率较高。但仍有 **6 个高/中优先级 bug 处于 OPEN 状态**，需持续跟进。

---

## 6. 功能请求与路线图信号

### 新增功能请求

| Issue | 请求内容 | 类型 | 状态 |
|-------|----------|------|------|
| [#1005](https://github.com/NanmiCoder/cc-haha/issues/1005) | 新增 autoVerify 闭环（自动验证反馈环） | Feature | OPEN |
| [#1004](https://github.com/NanmiCoder/cc-haha/issues/1004) | 新增内联 Diff 评论功能（Inline Diff Comments） | Feature | OPEN |
| [#1007](https://github.com/NanmiCoder/cc-haha/issues/1007) | 思考程度设置改为可滑动有色条 | UI Enhancement | OPEN |
| [#1003](https://github.com/NanmiCoder/cc-haha/issues/1003) | 深色主题适配 + Nerd 字体支持 | UI Enhancement | OPEN |
| [#937](https://github.com/NanmiCoder/cc-haha/issues/937) | 增加从 haha 界面直接截图的功能 | Feature | CLOSED |

### 路线图信号分析

1. **UI/UX 改进需求明显**：深色主题、思考程度可视化、截图功能等均反映用户对界面体验的期待。
2. **开发者工具功能**：autoVerify 闭环和内联 Diff 评论功能表明专业用户对自动化验证和代码审查工具有需求。
3. **第三方集成**：[#1006](https://github.com/NanmiCoder/cc-haha/issues/1006) 询问是否支持切换/复用 Claude Code CLI API 接口，暗示用户希望更多 provider 支持。

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 相关 Issue | 用户场景 |
|------|------------|----------|
| **数据丢失** | #1000, #965 | 升级后配置重置，用户需重新设置服务商、记忆、技能 |
| **平台不稳定** | #961, #996 | Windows/Mac 启动失败或权限获取异常 |
| **状态不同步** | #969, #971 | agent 实际完成但界面显示进行中 |
| **权限管理混乱** | #975, #977 | 并发 tool 调用时授权框被覆盖，无法切换权限模式 |

### 用户满意度

- **正面反馈**：[#1003](https://github.com/NanmiCoder/cc-haha/issues/1003) 用户感谢作者在业余时间创作了这么好的 cc 客户端。
- **改进建议**：深色主题适配、终端字体支持、更好的错误提示等。

### 典型使用场景

1. **Windows 桌面端用户**：遇到启动失败、配置丢失问题，影响日常使用。
2. **Mac x86 用户**：辅助功能权限获取失败，无法使用 Computer Use 功能。
3. **开发者用户**：期望更丰富的代码审查和自动化验证工具。

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 创建时间 | 状态 | 关注理由 |
|-------|----------|------|----------|
| [#892](https://github.com/NanmiCoder/cc-haha/issues/892) | 2026-06-22 | OPEN | 模型回复后停止原因不明确，涉及会话生命周期核心逻辑 |
| [#996](https://github.com/NanmiCoder/cc-haha/issues/996) | 2026-07-09 | OPEN | MacOS x86 平台兼容性问题，影响特定用户群体 |
| [#1000](https://github.com/NanmiCoder/cc-haha/issues/1000) | 2026-07-10 | OPEN | 数据持久化问题，严重影响用户体验 |

### 建议行动

1. **优先处理**：#1000（数据丢失）、#961（启动失败）- 影响核心功能可用性。
2. **平台适配**：MacOS x86 权限问题（#996）需明确是否支持该平台。
3. **状态管理重构**：多个 bug 涉及状态不更新，建议从架构层面优化状态机设计。

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 12 |
| Issues 已关闭 | 13 |
| PR 合并 | 0 |
| PR 新开 | 0 |
| 新版本发布 | 0 |
| 活跃 Issue 占比 | 48% |
| Bug 类 Issue 占比 | ~70% |
| Feature 类 Issue 占比 | ~20% |
| Question 类 Issue 占比 | ~10% |

---

*报告生成时间: 2026-07-12*  
*数据来源: GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目日报 | 2026-07-12

---

## 1. 今日速览

Codex++ 项目在过去 24 小时内保持高度活跃，共产生 **26 条 Issues 更新**（含 24 条新开/活跃）和 **15 条 PR 更新**（4 条已合并/关闭）。项目整体呈现**功能迭代与稳定性修复并重**的态势：社区积极提交功能需求（如 V2 桌宠跟随鼠标、模型目录预计算），同时多个关键 Bug 浮出水面——主要集中在 DeepSeek 模型兼容性、GPT-5.6 支持、以及新版 Codex/ChatGPT Desktop 合并后的路径/资产变更问题上。**今日未发布新版本**，但多个性能优化 PR 已进入待合并状态，预计将显著改善启动体验。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR 编号 | 标题 | 状态 | 影响 |
|---------|------|------|------|
| [#1302](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1302) | perf: event-driven CDP readiness detection (−55s startup) | **CLOSED** | 将启动轮询机制替换为事件驱动检测，典型启动时间从 ~55s 降至 0-2s |
| [#1305](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1305) | refactor: decouple SSE parsing from protocol conversion | **CLOSED** | 提取 SSE 解析为独立模块，简化流式处理架构 |
| [#1304](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1304) | perf: short-circuit model list via bridge (−34s startup) | **CLOSED** | 拦截 `list-models-for-host` 调用，从 Codex++ bridge 直接返回模型列表（<1ms），避免等待 app-server RPC（~34s） |
| [#1303](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1303) | perf: cache reqwest::Client globally | **CLOSED** | 全局缓存 HTTP 客户端，复用 TCP 连接池，减少 TLS 握手延迟 |

### 待合并的重要 PR

| PR 编号 | 标题 | 状态 | 预计影响 |
|---------|------|------|----------|
| [#1452](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1452) | perf: event-driven CDP readiness detection (−55s startup) | OPEN | 与 #1302 同期提交，预计合并后启动性能提升显著 |
| [#1453](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1453) | fix: restore app-server model patch on Codex 26.707+ | OPEN | 修复 Codex Desktop 26.707+ 版本因缺少 `app-server-manager-signals-*` 资源导致的模型白名单解锁和插件市场请求失败问题 |
| [#1447](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1447) | 完善 GPT-5.6 三模型元数据与 Fast 兼容 | OPEN | 完善 GPT-5.6 Sol/Terra/Luna 的模型元数据、推理档位、372K 上下文与 Fast 能力支持 |
| [#1455](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1455) | feat: V2 桌宠跟随真实鼠标 | OPEN | 新功能：复用 V2 桌宠的 Computer Use 光标事件通道，实现真实鼠标跟随效果 |
| [#1451](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1451) | feat: pre-compute model catalog for all configured models | OPEN | 为所有配置的模型预计算 `model_catalog.json`，而非仅处理带上下文后缀的模型 |
| [#1450](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1450) | fix(watcher): add ChatGPT-Desktop to APP_PACKAGE_SPECS | OPEN | 修复 v1.2.33 以来 Windows 上两个 watcher 测试失败问题 |
| [#1345](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1345) | 修复供应商切换状态丢失与 Fast/插件稳定性 | OPEN | 修复 API Key + 自定义 Base URL 场景下切换供应商时的状态问题，适配新版 Codex App/ChatGPT Desktop 入口 |
| [#1448](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1448) | fix: marketplace paths on non-Windows platforms | OPEN | 修复 macOS/Linux 上的插件市场路径写入问题 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 👍 | 热度分析 |
|------------|------|--------|-----|----------|
| [#1158](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1158) | [Bug]: 使用 deepseek 模型发送图片后无法对话 | 6 | 1 | **高优先级** - JSON 反序列化失败，`image_url` 变体未被识别，影响 DeepSeek 多模态使用 |
| [#1415](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1415) | [Bug]: GPT-5.6 Sol 模型重复动作问题 | 6 | 0 | 模型行为异常，10 秒内结束问答，换回 5.5 正常 |
| [#525](https://github.com/BigPizzaV3/CodexPlusPlus/issues/525) | [Bug]: 偶发输入框无法输入 | 5 | 0 | 界面交互问题，偶发但影响使用体验 |
| [#1428](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1428) | [Bug]: 更新后设置菜单中文显示不完整 | 4 | 0 | 本地化问题，Codex 与 ChatGPT 合并后界面语言切换失效 |
| [#1442](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1442) | [Bug]: 已配置 zh-cn 但 Codex 无法切换中文 | 4 | 0 | 同上，本地化问题持续发酵 |
| [#564](https://github.com/BigPizzaV3/CodexPlusPlus/issues/564) | 第三方模型下 guardian_approval 的 codex-auto-review 不可用 | 4 | 0 | **关键问题** - DeepSeek 等第三方模型使用自动审批时全部拒绝操作 |

### 热点分析

**核心诉求集中于三个方向：**

1. **第三方模型兼容性**（DeepSeek 为代表）：社区反馈强烈，问题涉及图片处理、自动审批、模型识别等多个层面，反映出 Codex++ 在扩展模型支持时存在系统性适配缺口。

2. **本地化与界面体验**：Codex 与 ChatGPT Desktop 合并后，中文界面切换功能大面积失效，多个 Issue 指向同一问题，预计将成为下一版本的修复重点。

3. **启动性能与稳定性**：多个 Issue 反映启动变慢、app-server 资产缺失、配置解析失败等问题，与正在合并的性能优化 PR 形成呼应。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### 🔴 高优先级（影响核心功能）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#1158](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1158) | DeepSeek 模型发送图片后 JSON 反序列化失败 | OPEN | ❌ |
| [#564](https://github.com/BigPizzaV3/CodexPlusPlus/issues/564) | 第三方模型自动审批全部拒绝 | OPEN | ❌ |
| [#1446](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1446) | DeepSeek v4 模型自动审批报错 | OPEN | ❌ |
| [#1454](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1454) | 带图片请求返回 Upstream request failed | OPEN | ❌ |
| [#1434](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1434) | IMG 返回 503 model_not_found | OPEN | ❌ |

#### 🟠 中优先级（影响使用体验）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#1415](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1415) | GPT-5.6 Sol 模型重复动作 | OPEN | ❌ |
| [#1421](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1421) | 绿色免安装版 ChatGPT.exe 无法通过 Codex++ 启动 | OPEN | ❌ |
| [#1443](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1443) | 打开内置浏览器导致 Codex App 崩溃 | OPEN | ❌ |
| [#1432](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1432) | config.toml TOML 解析失败（重复键） | OPEN | ❌ |
| [#1444](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1444) | TOML 结构冲突（finnhub MCP） | OPEN | ❌ |

#### 🟡 低优先级（功能性问题）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#525](https://github.com/BigPizzaV3/CodexPlusPlus/issues/525) | 偶发输入框无法输入 | OPEN | ❌ |
| [#1428](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1428) | 设置菜单中文显示不完整 | OPEN | ❌ |
| [#1442](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1442) | 已配置 zh-cn 但无法切换中文 | OPEN | ❌ |
| [#1439](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1439) | GPT-5.6 不支持开启 Fast/priority | OPEN | ❌ |
| [#1437](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1437) | 找不到 chrome 和 computer use 插件 | OPEN | ❌ |

### 已关闭的 Issues

| Issue 编号 | 标题 | 状态 | 备注 |
|------------|------|------|------|
| [#1388](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1388) | 希望推出 Linux 版本 | CLOSED | 功能请求关闭 |
| [#1311](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1311) | 点击 X 没有选项 | CLOSED | 界面问题关闭 |

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue 编号 | 标题 | 需求分析 | 纳入可能性 |
|------------|------|----------|------------|
| [#1403](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1403) | 希望在工作空间中能使用 chat 功能 | API 模式下缺少工作区 chat 功能，与官方新版合并方向一致 | ⭐⭐⭐ 高 |
| [#507](https://github.com/BigPizzaV3/CodexPlusPlus/issues/507) | 希望能设置自定义上下文长度 | 用户有 1M 上下文模型但设置只显示 256K，需 auto-detect 或手动配置 | ⭐⭐⭐ 高 |
| [#1388](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1388) | 希望推出 Linux 版本 | 社区长期诉求，但项目目前主要面向 Windows | ⭐ 中 |
| [#1440](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1440) | 如何从 DeepSeek 切换回 GPT | 用户引导问题，非功能请求 | - |

### 与已有 PR 的关联

- **#1455**（V2 桌宠跟随真实鼠标）与用户对桌宠功能的期待一致
- **#1451**（预计算所有模型的 catalog）直接回应 #507 的上下文长度配置需求
- **#1447**（GPT-5.6 元数据完善）与 #1415（5.6 Sol 重复动作问题）形成修复+增强的组合

---

## 7. 用户反馈摘要

### 真实痛点与使用场景

| 场景 | 用户反馈 | 情绪 |
|------|----------|------|
| **第三方模型集成** | "使用 Codex++ 绑定 DeepSeek 模型时，所有高风险操作在自动审批模式下全部被拒绝" | 😤 沮丧 |
| **本地化体验** | "更新 codex 26.707 版本后，设置菜单改为中文，大部分仍为英文" | 😕 不满 |
| **启动性能** | "用 codex++ 启动 codex，要较长时间才能进入" | 😓 抱怨 |
| **模型兼容性** | "换回 5.5 就正常"（指 GPT-5.6 Sol 重复动作问题） | 😌 满意（回退方案） |
| **Linux 需求** | "很多工程项目都是在 linux 编译运行" | 🙏 期待 |

### 满意度观察

- **正面**：用户对回退到旧版本（GPT-5.5）后的稳定性表示认可
- **负面**：DeepSeek 模型的深度集成问题、本地化不完整、启动变慢是主要痛点
- **期待**：Linux 版本、API 模式下的工作区 chat 功能、自定义上下文长度

---

## 8. 待处理积压

### 长期未响应的 Issues（>7 天无维护者回复）

| Issue 编号 | 标题 | 创建时间 | 最后更新 | 未响应天数 | 优先级 |
|------------|------|----------|----------|------------|--------|
| [#525](https://github.com/BigPizzaV3/CodexPlusPlus/issues/525) | 偶发输入框无法输入 | 2026-06-02 | 2026-07-12 | ~40 天 | 🟠 中 |
| [#564](https://github.com/BigPizzaV3/CodexPlusPlus/issues/564) | 第三方模型自动审批不可用 | 2026-06-03 | 2026-07-11 | ~39 天 | 🔴 高 |
| [#507](https://github.com/BigPizzaV3/CodexPlusPlus/issues/507) | 无法设置想要的上下文长度 | 2026-06-01 | 2026-07-11 | ~41 天 | 🟠 中 |

### 建议优先处理

1. **#564** - 第三方模型自动审批问题：影响 DeepSeek 等主流第三方模型的使用，是扩展生态的关键阻塞
2. **#525** - 输入框偶发失效：虽偶发但影响核心交互体验
3. **#507** - 上下文长度配置：用户明确提出需求，且有 PR #1451 可关联解决

---

## 📊 关键指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 26 条/24h | 📈 较高 |
| PR 活跃度 | 15 条/24h | 📈 活跃 |
| 已合并 PR | 4 条 | - |
| 待合并 PR | 11 条 | - |
| 新版本发布 | 0 | - |
| 高优先级 Bug | 5 条 | ⚠️ 需关注 |
| 功能请求 | 3 条 | 💡 路线图信号 |

---

**报告生成时间**：2026-07-12  
**数据来源**：[Codex++ GitHub](https://github.com/BigPizzaV3/CodexPlusPlus)

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*