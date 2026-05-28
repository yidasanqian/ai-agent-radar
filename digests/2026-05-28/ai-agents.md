# OpenClaw 生态日报 2026-05-28

> Issues: 192 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-05-28 02:57 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 (2026-05-28)

## 1. 今日速览
OpenClaw 项目今日维持极高活跃度，过去 24 小时内 Issues 更新达 192 条（新开 136，关闭 56），PR 更新高达 500 条（待合并 258，合并/关闭 242）。项目刚刚发布了 `v2026.5.26` 正式版与 beta 版，核心聚焦于网关启动加速与回复流优化。然而，新版本引入了多项严重回归问题（特别是 Native hook relay 失效与 Docker 容器崩溃），导致社区反馈强烈，Bug 报告激增。整体来看，项目在性能优化上迈出了坚实一步，但稳定性面临短期考验，维护团队正通过密集的 PR 修复会话状态与事件循环隔离问题。

## 2. 版本发布
今日发布 2 个新版本：**v2026.5.26** 及 **v2026.5.26-beta.2**。
- **核心更新**：
  - **更快的网关与回复**：启动时避免重复扫描插件、通道、会话、使用成本、警告、调度服务和文件系统；将用户可见的回复发送与较慢的后续工作分离；减少了网关运行时/会话缓存在高负载下的流失。
  - **Transcripts 改进**（摘要截断，推测为转录/记录机制优化）。
- **破坏性变更/迁移警告**：
  - ⚠️ **严重回归**：大量用户报告升级至 `2026.5.26` 后出现 "Native hook relay unavailable" 错误，导致原生工具阻塞（[#87331](https://github.com/openclaw/openclaw/issues/87331), [#87395](https://github.com/openclaw/openclaw/issues/87395)）。
  - ⚠️ **Docker 崩溃**：Docker 容器升级后无法响应消息（[#87302](https://github.com/openclaw/openclaw/issues/87302)）。
  - ⚠️ **Telegram 状态缓存上限**：新版本插件状态 1000 行硬上限导致 Telegram 缓存写入失败（[#87332](https://github.com/openclaw/openclaw/issues/87332), [#87357](https://github.com/openclaw/openclaw/issues/87357)）。
  - **建议**：升级前请备份数据，Docker 用户暂缓升级或关注修复补丁；遇 hook relay 问题可尝试重启网关临时缓解。

## 3. 项目进展
过去 24 小时合并/关闭了 242 个 PR，项目在架构重构与稳定性修复上取得显著进展：
- **架构重构与性能优化**：
  - 重构嵌入式尝试运行器辅助函数，测试耗时从 12.7s 降至 3.84s，RSS 降幅 30%（[PR #87410](https://github.com/openclaw/openclaw/pull/87410)）。
  - 集中化 Codex OAuth 流程，消除核心 OAuth 重复实现（[PR #87411](https://github.com/openclaw/openclaw/pull/87411)）。
  - 重构插件 SDK 声明为扁平化包类型，优化构建产物结构（[PR #87165](https://github.com/openclaw/openclaw/pull/87165)）。
- **关键稳定性修复**：
  - 修复会话重启后过时延续消息的重用问题，防止消息错乱（[PR #87378](https://github.com/openclaw/openclaw/pull/87378)）。
  - 排空 prompt-emitted 会话事件，修复 fence 重新获取时的竞争条件（[PR #86585](https://github.com/openclaw/openclaw/pull/86585)）。
  - 修复 WhatsApp `messageReceived` hook 配置模式与运行时不匹配问题（[PR #86426](https://github.com/openclaw/openclaw/pull/86426)）。
  - 自动缩放 Claude CLI reseed 历史，移除手动配置表面（[PR #83986](https://github.com/openclaw/openclaw/pull/83986)）。

## 4. 社区热点
今日讨论最激烈的问题集中在 **v2026.5.26 回归** 与 **网关事件循环隔离**：
1. **[Issue #48183](https://github.com/openclaw/openclaw/issues/48183)** (17 评论)：飞书监控状态清理不完整导致 `httpServers` Map 内存泄漏。长期遗留问题，社区持续追问修复进度。
2. **[Issue #87331](https://github.com/openclaw/openclaw/issues/87331)** (13 评论, 8 👍)：5.26 版本回归，Codex 工具调用间歇性失败提示 "Native hook relay unavailable"。重启仅能短暂恢复，严重影响生产环境。
3. **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599)** (13 评论)：Windows 平台上本地模型调用阻塞网关事件循环，简单推理耗时 4 分钟。Windows 用户核心痛点。
4. **[Issue #80380](https://github.com/openclaw/openclaw/issues/80380)** (13 评论, 4 👍)：请求更新默认模型为 `gemini-3.1-flash-lite` GA 版本，替代即将废弃的 preview 版本。模型更新诉求强烈。
5. **[Issue #84903](https://github.com/openclaw/openclaw/issues/84903)** (8 评论, 2 👍)：单个停滞的智能体会话阻塞整个网关事件循环（隔离失败）。架构级缺陷，多智能体场景下的致命问题。

## 5. Bug 与稳定性
按严重程度排列今日报告的关键 Bug 与回归问题：

**P0 / 安全漏洞**：
- **[Issue #50630](https://github.com/openclaw/openclaw/issues/50630)** [CLOSED]：Tailscale serve + `auth.mode=none` 无认证暴露网关至整个 Tailnet (CVSS 9.3)。**已关闭，需确认修复版本是否覆盖**。

**P1 / 严重回归 (v2026.5.26)**：
- **[Issue #87331](https://github.com/openclaw/openclaw/issues/87331)** [CLOSED] & **[Issue #87395](https://github.com/openclaw/openclaw/issues/87395)** [OPEN]：Native hook relay 不可用，阻塞所有原生工具。**已有相关修复 PR 推进中**。
- **[Issue #87302](https://github.com/openclaw/openclaw/issues/87302)** [CLOSED]：Docker 容器升级至 5.26 后崩溃，无法响应消息。
- **[Issue #87332](https://github.com/openclaw/openclaw/issues/87332)** [CLOSED] & **[Issue #87357](https://github.com/openclaw/openclaw/issues/87357)** [CLOSED]：Telegram 插件状态缓存写入 `expires_at = NULL`，触及 1000 行硬上限导致迁移失败。

**P1 / 架构级稳定性**：
- **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599)** [OPEN]：本地模型调用阻塞 Windows 事件循环。**暂无 Fix PR**。
- **[Issue #84903](https://github.com/openclaw/openclaw/issues/84903)** [OPEN]：单会话停滞导致全局事件循环阻塞（隔离失败）。**暂无 Fix PR**。
- **[Issue #87016](https://github.com/openclaw/openclaw/issues/87016)** [OPEN]：Preflight 压缩死锁，空会话边缘情况导致机器人拒绝所有消息。
- **[Issue #86508](https://github.com/openclaw/openclaw/issues/86508)** [OPEN]：Discord 运行出现 `EmbeddedAttemptSessionTakeoverError`，会话文件在锁释放后变更。

**P1 / 认证与状态**：
- **[Issue #86820](https://github.com/openclaw/openclaw/issues/86820)** [OPEN]：Codex OAuth 压缩回退至直接 OpenAI API 并因缺少 `OPENAI_API_KEY` 失败。**有相关 PR #87411 集中化 OAuth 修复中**。
- **[Issue #87436](https://github.com/openclaw/openclaw/issues/87436)** [OPEN]：Codex harness 运行后重建遗留 `openai-codex` 会话路由状态。**已有 Fix PR #87463**。

## 6. 功能请求与路线图信号
结合用户需求与已有 PR，以下功能可能纳入近期版本：
- **模型更新**：**[Issue #80380](https://github.com/openclaw/openclaw/issues/80380)** 请求支持 `gemini-3.1-flash-lite` GA 版本。属于常规模型迭代，大概率在下个小版本纳入。
- **Gateway-lite 模式**：**[Issue #86881](https://github.com/openclaw/openclaw/issues/86881)** 提出无 AI harness 的轻量网关部署模式，用于确定性插件/Webhook。符合边缘计算与轻量部署趋势，已引发讨论。
- **语音/实时集成**：**[Issue #86434](https://github.com/openclaw/openclaw/issues/86434)** 请求集成 ElevenLabs 实时语音提供者。结合 [#68920](https://github.com/openclaw/openclaw/issues/68920) 对 HTTP completions 低延迟 TTFB 的需求，**实时语音/低延迟交互**是明确路线图信号。
- **生命周期 Hook 事件**：**[Issue #87362](https://github.com/openclaw/openclaw/issues/87362)** 与 **[Issue #10142](https://github.com/openclaw/openclaw/issues/10142)** 均请求暴露任务流/会话结束的内部 Hook 事件，用于 Temporal 等工作流编排。**插件可观测性与工作流集成**是生态扩展重点。
- **Channel Broker Phase 3**：**[Issue #86113](https://github.com/openclaw/openclaw/issues/86113)** 推进官方 App/API 渠道（如 Telegram/Discord 后的长期渠道）的 Broker 架构落地。

## 7. 用户反馈摘要
- **核心痛点**：
  - **升级即崩溃**：多位用户反映 `2026.5.26` 升级体验差，Docker 断联、Hook relay 失效、Telegram 缓存锁死，导致生产环境中断。
  - **事件循环阻塞**：Windows 用户与多智能体重度用户饱受事件循环阻塞困扰，本地模型调用慢至 4 分钟，并发子智能体直接触发网关重启。
  - **认证配置繁琐且易碎**：Codex OAuth、xAO redirect_uri 不匹配、更新后遗留密钥错误等，表明多 Provider OAuth 集成仍是易错区。
  - **消息丢失与重复**：A2A 交互产生重复消息，Discord/Telegram 会话接管错误导致消息中断，压缩死锁导致机器人完全无响应。
- **满意点**：对网关启动速度优化与回复流分离表示认可，认为方向正确。
- **场景洞察**：用户正将 OpenClaw 深度集成至 Nextcloud Talk、Matrix、Mattermost 等多元渠道，并尝试并发子智能体编排与本地模型私有化部署，这些高级场景正暴露出隔离与并发缺陷。

## 8. 待处理积压
以下重要长期 Issue/PR 长期未获维护者明确响应，需重点关注：
- **[Issue #48183](https://github.com/openclaw/openclaw/issues/48183)** (3 月开开)：飞书内存泄漏，17 评论但无 Fix PR。
- **[Issue #39476](https://github.com/openclaw/openclaw/issues/39476)** (3 月开开)：A2A `sessions_send` 导致重复消息，10 评论，标记为 `clawsweeper:fix-shape-clear` 但无 PR 关联。
- **[Issue #38327](https://github.com/openclaw/openclaw/issues/38327)** (3 月开开)：google-vertex 回归导致 "Cannot convert undefined or null"，7 评论，P1 级别但无 Fix PR。
- **[Issue #53858](https://github.com/openclaw/openclaw/issues/53858)** (3 月开开)：Nostr 渠道重启循环，5 评论，无修复进展。
- **[Issue #73182](https://github.com/openclaw/openclaw/issues/73182)** (4 月开开)：Claude 模型默认开启 Reasoning 导致成本翻倍，5 评论，需产品决策。
- **[Issue #68920](https://github.com/openclaw/openclaw/issues/68920)** (4 月开开)：HTTP completions TTFB 过长（10-15s），阻碍语音场景，4 评论，需架构级 `lightContext` 方案。
- **[PR #62682](https://github.com/openclaw/openclaw/pull/62682)** (4 月开开)：区分终端中止与可重试失败，XL 级别 PR，标记为 `👀 ready for maintainer look` 但长期停滞。
- **[PR #75270](https://github.com/openclaw/openclaw/pull/75270)** (4 月开开)：防止粘性模型回退，XL 级别 PR，标记为 `📣 needs proof`，长期无推进。

**提醒维护者**：3-4 月标记为 P1/P2 的 `diamond lobster` / `platinum hermit` 级别 Issue 积压严重，特别是多智能体并发与 Provider 认证回归，建议优先清理并推进关联 PR 的 Review。

---

## 横向生态对比

# 开源 AI 智能体与个人助手生态横向对比分析报告 (2026-05-28)

## 1. 生态全景
当前个人 AI 助手与自主智能体开源生态正处于**高速迭代与稳定性阵痛的交汇期**。项目正从单一的对话交互向多智能体编排、多模态处理与全平台网关演进，底层架构重构频繁。然而，激进的性能优化与功能叠加引发了普遍的严重回归问题（如事件循环阻塞、数据丢失、桌面端崩溃），暴露出多 Provider 兼容与本地化部署的脆弱性。整体而言，生态在**降本增效（缓存/廉价 API）**与**无人值守（自动化/后台常驻）**两大刚需驱动下狂奔，但底层质量护城河仍待夯实。

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃 / 关闭) | PRs (待合并 / 合并&关闭) | Release 情况 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 136 / 56 | 258 / 242 | 2个 (v2026.5.26 及 beta) | **高活跃但短期稳定性堪忧**：流转率高，但新版本引入 P0/P1 级回归，积压的架构级 Issue 未清 |
| **cc-haha** | 21 / 8 | 3 / 1 | 无 | **快速迭代期，闭环率偏低**：社区共创活跃（核心贡献者驱动），但官方响应与合并节奏滞后 |
| **Codex++** | 32 / 8 | 6 / 1 | 无 | **稳定性危机期，修复蓄力**：Issue 激增但关闭极少，关键修复 PR 悬置未发版，用户恐慌情绪蔓延 |
| **Hermes Agent** | - / - | - / - | 数据缺失 | **无法评估**：摘要生成失败，状态未知 |

## 3. OpenClaw 在生态中的定位
- **优势**：生态内唯一的**重度多通道/多智能体网关基础设施**。具备最庞大的社区基数与最高频的代码流转，在飞书/Matrix/Telegram等企业级渠道集成上具备不可替代性。
- **技术路线差异**：相较于 cc-haha 和 Codex++ 聚焦于“单用户桌面端/CLI交互+API中转”，OpenClaw 坚持服务端架构，核心攻坚**会话隔离、事件循环并发与插件生命周期管理**，是面向 Team 与多 Agent 编排的底层 OS。
- **社区规模对比**：OpenClaw 的单日 PR/Issue 活动量是其他项目的 10-20 倍以上，属于绝对的生态核心，但也背负了最沉重的长尾架构债务（如 3-4 月遗留的 P1 级积压）。

## 4. 共同关注的技术方向
1. **第三方模型协议兼容性**（涉及 OpenClaw, cc-haha, Codex++）：非 OpenAI 标准模型（DeepSeek, GLM, MiMo, Vertex）的 Tool Calls 解析、后缀名透传与 Content 格式适配是全生态痛点，**协议代理层的 Normalize/Strip 逻辑成为刚需**。
2. **Token 缓存与成本优化**（涉及 OpenClaw, cc-haha）：用户对 API 成本极度敏感。OpenClaw 关注网关缓存流失，cc-haha 则直接推进多级缓存压缩与归因头剔除，**降本已成为决定用户留存的核心战场**。
3. **桌面端/本地环境运行时稳定性**（涉及 OpenClaw, Codex++）：Windows 事件循环阻塞、Mac 启动卡死/权限丢失、Docker 升级崩溃频发，**跨平台桌面封装与本地模型推理隔离**是当前工程质量的短板。
4. **无人值守与自动化执行**（涉及 OpenClaw, cc-haha, Codex++）：跳过人工批准、系统托盘最小化、生命周期 Hook 暴露等需求集中爆发，标志着用户期望智能体从“陪聊”走向“后台 Workflow 引擎”。

## 5. 差异化定位分析

| 维度 | OpenClaw (服务端网关) | cc-haha (侧车代理/编码助手) | Codex++ (桌面客户端) |
| :--- | :--- | :--- | :--- |
| **功能侧重** | 多通道消息路由、多智能体并发调度、企业级网关 | 缓存经济学、多模态模型切换、逆向 Workflow | Computer Use 控制、第三方 API 接入本地化 |
| **目标用户** | 企业/团队部署者、多平台重度集成者 | 极客开发者、成本敏感型 API 中转用户 | 终端普通用户、寻求替代官方昂贵订阅的桌面党 |
| **技术架构** | Node.js 事件循环架构，插件 SDK 扁平化，关注高并发隔离 | Sidecar 代理拦截架构，关注请求构造与 Token 压缩 | 桌面 App 包装 + 协议转换层，关注系统级集成与常驻 |

## 6. 社区热度与成熟度
- **成熟度分层**：**OpenClaw** 处于**架构重构期**，规模最大但正为早期的隔离设计缺陷买单；**cc-haha** 处于**技术破局期**，依赖高能社区贡献者输入底层架构思路（如缓存重构）；**Codex++** 处于**基建补课期**，连基本的安装启动与数据持久化仍未闭环。
- **活跃度质量**：OpenClaw 属于“高吞吐但有积压淤泥”，需优先清理长尾 P1 债务；cc-haha 属于“点状高能但闭环脱节”，官方 Maintainer 需加速接管社区 PR；Codex++ 属于“危机驱动型活跃”，急需发版修复以平息社区信任危机。

## 7. 值得关注的趋势信号
1. **协议代理层成为独立价值层**：随着国产模型与垂直模型爆发，简单的 API Key 中转已不够，**请求结构的双向 Normalize（入站剥离特有后缀，出站映射 Tool_calls）**正成为开源助手项目的核心护城河（如 Codex++ PR#374, cc-haha PR#630）。
2. **缓存经济学重塑交互架构**：从通用上下文窗口向“多级压缩+归因控制”演进（cc-haha PR#628），开源社区正在用工程手段对抗大厂 API 的计费模型，**Token 消耗率将成为同类项目 PK 的硬指标**。
3. **智能体从“对话流”向“工作流引擎”跃迁**：对 Temporal 编排、生命周期 Hook、后台托盘与 Skip 审批的强烈诉求，预示着下一波迭代重点将是**确定性执行与无人值守自动化**，单纯的 ChatUI 将被淘汰。
4. **本地化封装是当前最大工程陷阱**：三项目均在 Mac 权限/启动、Windows 阻塞/单实例守护上踩坑。AI 网关/助手在向桌面端下沉时，**绝不能低估 OS 级进程管理与权限隔离的复杂性**，盲目发版必遭反噬。

**对开发者的核心建议**：在规划下一版本时，应将**第三方 API 兼容层**与**本地数据持久化/进程守护**作为 P0 级基建，切勿在底层隔离未验证前强行推进性能优化，否则极易引发类似 OpenClaw v5.26 与 Codex++ v1.1.8 的信任崩塌。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报 (2026-05-28)

## 1. 今日速览
项目今日保持高活跃度，社区反馈量显著，共产生 29 条 Issue 更新（21 条新开/活跃，8 条关闭）与 4 条 PR 更新（3 条待合并，1 条关闭），无新版本发布。当前项目正处于快速迭代与问题集中暴露期，Bug 报告主要集中在**多模态图片处理失效**与**第三方模型兼容性（如 MiMo）**两大痛点。值得注意的是，社区贡献者 @moyu12-ae 深度参与，不仅提出了系统性的缓存优化路线，还直接提交了修复 PR，展现了良好的社区共创氛围。整体来看，Issue 闭环率（8/29）有待提升，部分阻碍核心体验的 Bug 亟需官方介入修复。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无合并的 PR，但有 3 个高价值 PR 处于待合并状态，标志着项目在核心架构与体验上的潜在突破：
- **PR [#630](https://github.com/NanmiCoder/cc-haha/pull/630) (fix: strip [1m]/[2m] suffix)**：针对 Issue [#620](https://github.com/NanmiCoder/cc-haha/issues/620)，修复了 MiMo 模型等带上下文后缀名透传导致的 400 错误，完善了第三方 API 兼容性。
- **PR [#628](https://github.com/NanmiCoder/cc-haha/pull/628) (feat: multi-level compaction thresholds, cache economics)**：基于 Issue [#614](https://github.com/NanmiCoder/cc-haha/issues/614) 的深度分析，实现了 7 项缓存优化改进（包括关闭导致全量 miss 的归因头），有望大幅降低 Token 消耗与使用成本。
- **PR [#627](https://github.com/NanmiCoder/cc-haha/pull/627) (feat: add image recognition model auto-switching)**：实现了多模态场景下的模型自动切换逻辑，直击当前图片读取与处理失效的痛点。
- **PR [#593](https://github.com/NanmiCoder/cc-haha/pull/593) (feat: i18n slash command)**：已于昨日关闭，完成了斜杠命令的国际化支持。

## 4. 社区热点
今日讨论最活跃的 Issue 集中在模型兼容性与核心交互体验上：
- **多模态体验崩塌**：Issue [#615](https://github.com/NanmiCoder/cc-haha/issues/615)（6 条评论）反映图片上传无法读取与压缩，导致多模态模型体验被严重拉低，是今日用户最强烈的痛点。
- **第三方模型适配断层**：Issue [#620](https://github.com/NanmiCoder/cc-haha/issues/620)（5 条评论）与 [#621](https://github.com/NanmiCoder/cc-haha/issues/621)（4 条评论）集中暴露了项目对 MiMo 等第三方模型的后缀解析与图片处理缺陷，反映出 sidecar 在请求构造上的硬编码问题。
- **缓存与成本焦虑**：Issue [#614](https://github.com/NanmiCoder/cc-haha/issues/614)（3 条评论，已关闭）引发了关于缓存命中率与 Token 成本的深度探讨，用户对降低 API 调用成本的诉求极其强烈。
- **自动化执行受阻**：Issue [#632](https://github.com/NanmiCoder/cc-haha/issues/632) 与 [#623](https://github.com/NanmiCoder/cc-haha/issues/623) 均反映“跳过批准”权限失效，导致定时/自动化任务卡死，影响了无人值守场景的可用性。

## 5. Bug 与稳定性
按严重程度排列今日报告的核心 Bug：

**🔴 高严重度（核心功能受阻/死锁）**：
- **图片读取与多模态失效**：[#615](https://github.com/NanmiCoder/cc-haha/issues/615), [#621](https://github.com/NanmiCoder/cc-haha/issues/621) —— 图片无法压缩/读取，甚至导致后续对话彻底中断。（已有潜在 Fix PR [#627](https://github.com/NanmiCoder/cc-haha/pull/627)）
- **Mac 桌面端模型列表为空**：[#643](https://github.com/NanmiCoder/cc-haha/issues/643) —— v0.3.1 版本无法切换模型，基本功能丧失。
- **会话频繁中断**：[#548](https://github.com/NanmiCoder/cc-haha/issues/548) —— 长期未解决的基础稳定性问题。
- **本地代理切换模型卡死**：[#626](https://github.com/NanmiCoder/cc-haha/issues/626) —— 切换模型时 UI 卡死在思考模式。

**🟡 中严重度（兼容性/逻辑异常）**：
- **MiMo 模型后缀 400 错误**：[#620](https://github.com/NanmiCoder/cc-haha/issues/620) —— Sidecar 直接透传 `[1m]` 导致 API 报错。（已有 Fix PR [#630](https://github.com/NanmiCoder/cc-haha/pull/630)）
- **自定义服务商连通性测试失败**：[#638](https://github.com/NanmiCoder/cc-haha/issues/638) —— 缺少 `stream: false` 导致解析空响应，阻断了自定义 Provider 的添加。
- **执行权限“跳过”逻辑失效**：[#632](https://github.com/NanmiCoder/cc-haha/issues/632), [#623](https://github.com/NanmiCoder/cc-haha/issues/623) —— 自动化任务仍需人工批准。
- **流式响应状态不同步**：[#634](https://github.com/NanmiCoder/cc-haha/issues/634), [#629](https://github.com/NanmiCoder/cc-haha/issues/629) —— TCP 关闭或缺失 `stream:true` 时，前端仍显示执行中。
- **macOS Computer Use 权限授权失败**：[#616](https://github.com/NanmiCoder/cc-haha/issues/616) —— 辅助功能权限无法正常授予。

**🟢 低严重度（UI/显示）**：
- **Mermaid 渲染异常**：[#622](https://github.com/NanmiCoder/cc-haha/issues/622)
- **暗黑模式 Markdown 显示问题**：[#636](https://github.com/NanmiCoder/cc-haha/issues/636)

## 6. 功能请求与路线图信号
结合用户诉求与已有 PR，以下方向可能被纳入下一阶段路线图：
- **缓存与成本优化体系**：结合 PR [#628](https://github.com/NanmiCoder/cc-haha/pull/628) 与 Issue [#614](https://github.com/NanmiCoder/cc-haha/issues/614)，**多级缓存压缩与归因头优化**大概率是下个版本的重头戏，直击用户成本痛点。
- **Workflow 自动化引擎**：Issue [#637](https://github.com/NanmiCoder/cc-haha/issues/637) 提出了基于逆向工程的 Claude Code Workflow 完整复刻方案，若被采纳，将使 cc-haha 从“对话工具”跃升为“无人值守 Workflow 引擎”。
- **记忆与配置管理增强**：Issue [#639](https://github.com/NanmiCoder/cc-haha/issues/639) 建议增加全局与项目级 `Claude.md` 的快捷编辑入口，符合 AI Coding 工具深度定制化的发展趋势。
- **交互细节打磨**：Issue [#631](https://github.com/NanmiCoder/cc-haha/issues/631)（支持 `Ctrl+Enter` 发送防误触）与 Issue [#642](https://github.com/NanmiCoder/cc-haha/issues/642)（消息增加时间戳追踪耗时）反映了重度用户对精细化交互的迫切需求。

## 7. 用户反馈摘要
- **核心痛点**：多模态（图片）体验极差，上传失败或导致对话死锁；第三方模型（如 MiMo）适配存在明显断层；定时任务/执行权限的“跳过”逻辑名存实亡，自动化流程受阻；Token 消耗过快（缓存命中率低）。
- **典型场景**：用户大量使用本地代理/本地大模型（Qwen等）和第三方 API，对兼容性要求极高；夜间挂机执行任务，需要时间戳和稳定的自动化执行能力。
- **积极信号**：社区对项目开放度和迭代速度认可，尤其是 @moyu12-ae 等贡献者能深入逆向分析并提出系统性优化方案，体现了项目的高技术活力与社区潜力。

## 8. 待处理积压
以下高影响 Issue/PR 长期悬置或亟待官方响应，提醒维护者关注：
- **Issue [#548](https://github.com/NanmiCoder/cc-haha/issues/548)**（会话经常中断）：自 5-21 创建至今未修复，属于基础稳定性问题，严重影响信任度。
- **Issue [#616](https://github.com/NanmiCoder/cc-haha/issues/616)**（macOS Computer Use 权限无法授权）：影响核心桌面端功能，需官方确认系统兼容性。
- **Issue [#643](https://github.com/NanmiCoder/cc-haha/issues/643)**（Mac 最新版模型列表为空）：今日新增但影响极严重（无法切换模型），需紧急排查回归原因。
- **PR [#628](https://github.com/NanmiCoder/cc-haha/pull/628) & [#630](https://github.com/NanmiCoder/cc-haha/pull/630)**：均标记为 `needs-maintainer-approval`，涉及底层缓存架构重构与第三方 API 兼容性修复，是推进下个版本的关键卡点，需维护者尽快 Review。

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报 (2026-05-28)

## 1. 今日速览
过去 24 小时，Codex++ 项目社区活跃度激增，新增及活跃 Issue 达 32 条，但仅关闭 8 条，PR 端有 6 个待合并而仅合并/关闭 1 个，且无新版本发布。项目当前正处于**稳定性危机与修复蓄力期**：v1.1.8 版本引发的严重回归问题（历史对话丢失）在社区引发大量恐慌与讨论，同时第三方模型（如 DeepSeek、GLM）的协议兼容性及 macOS 端的安装/启动障碍成为今日三大痛点。尽管核心维护者及贡献者已针对关键 Bug 提交了多个修复 PR（如 macOS 启动修复、tool_calls 映射修复），但尚未合并发版，项目整体向前推进节奏因稳定性受阻而放缓。

## 2. 版本发布
今日**无新版本发布**。考虑到当前社区存在大量阻断性 Bug（尤其是数据丢失和启动失败），下一版本急需包含待合并的修复 PR 以平息社区情绪。

## 3. 项目进展
今日仅有 1 个 PR 被关闭，6 个关键 PR 处于待合并状态，项目进展主要集中在底层协议兼容与系统级 Bug 修复的准备阶段：
- **已关闭 PR**：
  - [#82 launcher: 将本地代理注入改为显式开启](https://github.com/BigPizzaV3/CodexPlusPlus/pull/82)：优化了代理注入逻辑，不再默认劫持环境变量，改为需用户显式传入 `--proxy`，提升了启动流程的透明度与安全性。
- **待合并关键修复 PR**：
  - [#369 修复 macOS app 入口和启动失败状态提示](https://github.com/BigPizzaV3/CodexPlusPlus/pull/369)：解决了 macOS 安装入口覆盖真实 Mach-O 可执行文件导致无法启动的问题，直接回应了今日爆发的 Mac 端安装/启动危机。
  - [#374 fix: map codex-auto-review model to user-configured model](https://github.com/BigPizzaV3/CodexPlusPlus/pull/374)：在协议代理层增加 `normalize_model_name()`，将内部硬编码的 `codex-auto-review` 映射为用户配置的模型（如 deepseek-v4），有望根治第三方 API 的 `tool_calls` 报错问题。
  - [#384 Fix Windows launcher recovery when Codex is already running](https://github.com/BigPizzaV3/CodexPlusPlus/pull/384)：增强了 Windows 单实例守护机制，修复了已有实例运行时 CDP 参数吞没导致的注入失败。
- **待合并功能 PR**：
  - [#361](https://github.com/BigPizzaV3/CodexPlusPlus/pull/361) 与 [#362](https://github.com/BigPizzaV3/CodexPlusPlus/pull/362)：均实现了 Windows 系统托盘最小化功能，回应了用户强烈要求的后台常驻诉求。

## 4. 社区热点
今日社区讨论最密集的问题集中在**数据安全**与**第三方模型可用性**上：
1. **[#352 [Bug]: v1.1.8更新后历史对话全部消失，computer use无法使用](https://github.com/BigPizzaV3/CodexPlusPlus/issues/352)**（23 条评论）：今日最热 Issue。大量用户升级后发现历史记录被清空，且计算机控制功能失效。虽然 Issue 状态已标记为 CLOSED，但评论区仍充满对数据丢失的担忧，反映出用户对本地会话数据持久化的高敏感度。
2. **[#288 v1.1.7 无法切换配置好的模型](https://github.com/BigPizzaV3/CodexPlusPlus/issues/288)**（10 条评论）与 **[#327 对话经常报错：An assistant message with 'tool_calls'](https://github.com/BigPizzaV3/CodexPlusPlus/issues/327)**（10 条评论）：两者紧密关联。用户在使用 DeepSeek 等第三方模型时，遭遇模型切换失效及协议级报错。背后的核心诉求是：**Codex++ 必须在协议层彻底兼容非 OpenAI 标准的 tool calling 格式**，而不是简单地将请求原样转发。

## 5. Bug 与稳定性
今日报告的 Bug 按严重程度排列如下：

- **P0 级（数据丢失/核心功能失效）**：
  - [#352 v1.1.8更新后历史对话全部消失](https://github.com/BigPizzaV3/CodexPlusPlus/issues/352)：状态 CLOSED，但需确认修复逻辑是否彻底且是否有数据恢复方案。
- **P1 级（平台级启动/安装阻断）**：
  - [#377 mac升级系统后无法安装，提示已损坏且无"仍要打开"选项](https://github.com/BigPizzaV3/CodexPlusPlus/issues/377)：macOS Gatekeeper 限制导致应用无法打开。**已有 Fix PR: [#369](https://github.com/BigPizzaV3/CodexPlusPlus/pull/369)**。
  - [#382 MacOS 15.7.7系统打开一直卡在启动界面](https://github.com/BigPizzaV3/CodexPlusPlus/issues/382)：Mac 端启动卡死。**已有 Fix PR: [#369](https://github.com/BigPizzaV3/CodexPlusPlus/pull/369)**。
  - [#383 反复测试 api 重启造成接入失败](https://github.com/BigPizzaV3/CodexPlusPlus/issues/383)：频繁重启导致状态死锁，需重装插件。暂无针对性 PR。
- **P2 级（协议兼容性与运行时异常）**：
  - [#327 tool_calls 后续消息缺失报错](https://github.com/BigPizzaV3/CodexPlusPlus/issues/327)：第三方模型交互阻断。**已有 Fix PR: [#374](https://github.com/BigPizzaV3/CodexPlusPlus/pull/374)**。
  - [#329 GLM5.1 解析出错 invalid field(s): text](https://github.com/BigPizzaV3/CodexPlusPlus/issues/329)：国产模型内容格式解析异常。暂无 PR。
  - [#376 启动codex++插件功能仍无法解锁](https://github.com/BigPizzaV3/CodexPlusPlus/issues/376)：UI 显示解锁但功能依然受限。暂无 PR。
  - [#360 Codex启动不了](https://github.com/BigPizzaV3/CodexPlusPlus/issues/360)：Windows 端点击无反应。暂无明确 PR（#384 可能部分覆盖）。

## 6. 功能请求与路线图信号
从今日的 Feature Issue 及对应 PR 中，可以识别出以下可能纳入下一版本的路线图信号：
1. **系统托盘常驻化**：[#356 请求关闭后最小化到托盘](https://github.com/BigPizzaV3/CodexPlusPlus/issues/356) 催生了 [#361](https://github.com/BigPizzaV3/CodexPlusPlus/pull/361) 与 [#362](https://github.com/BigPizzaV3/CodexPlusPlus/pull/362) 两个竞合 PR。这表明项目将很快具备后台静默运行能力，极大改善桌面端体验。
2. **模型列表手动配置**：[#387 请求手动添加模型](https://github.com/BigPizzaV3/CodexPlusPlus/issues/387) 与昨日 [#348](https://github.com/BigPizzaV3/CodexPlusPlus/issues/348) 呼应。由于大量第三方中转站不支持 `/v1/models` 接口，**在 UI 中增加手动填写模型 ID 的功能**已成为刚需，预计近期会有 PR 提出。
3. **跨生态支持（ClaudeCode & Figma）**：[#363 请求支持 ClaudeCode](https://github.com/BigPizzaV3/CodexPlusPlus/issues/363) 与 [#371 Figma 插件登录问题](https://github.com/BigPizzaV3/CodexPlusPlus/issues/371)，反映了用户希望 Codex++ 成为“大一统”本地 AI 助理网关的强烈意愿，但此类需求涉及底层架构扩展，短期内纳入路线图的可能性较低。

## 7. 用户反馈摘要
提炼今日 Issues 中的真实用户声音：
- **核心痛点**：
  1. **数据安全感缺失**：历史对话无故消失让用户感到恐惧（“高风险问题”、“全部消失”），用户期望本地工具绝对尊重本地数据。
  2. **国产模型接入门槛高**：DeepSeek V4、GLM5.1 等模型在 tool_calls 和 content 解析上频发 400 错误，用户虽通过中转站降低了成本，但体验极差。
  3. **Mac 端体验断崖式下跌**：从“已损坏无法打开”到“卡在启动界面”，macOS 用户今日几乎无法正常使用应用。
  4. **网络环境依赖**：[#385](https://github.com/BigPizzaV3/CodexPlusPlus/issues/385) 反映不“科学上网”就卡死，暴露出应用可能在启动阶段存在强联网校验，对国内用户不友好。
- **满意点/期待**：用户对 Codex++ 接入第三方廉价 API 的核心价值极其认可，愿意忍受复杂配置以替代官方昂贵订阅；同时期待其能进一步整合 ClaudeCode 等生态，成为全能本地客户端。

## 8. 待处理积压
以下重要 Issue 长期悬而未决或响应不足，建议维护者优先关注：
1. **[#240 历史会话修复后只剩 1 个会话](https://github.com/BigPizzaV3/CodexPlusPlus/issues/240)**：与今日爆发的 #352 同属“历史会话”域的破坏性 Bug，且该 Issue 在 05-22 就已提出，至今未彻底解决，导致今日危机重现。
2. **[#208 chrome插件安装失败](https://github.com/BigPizzaV3/CodexPlusPlus/issues/208)**：自 05-21 开启至今仅 1 条评论，缺乏官方排查响应，而 Chrome 插件（Computer Use）是项目核心卖点之一。
3. **[#284 技能创建了但不加载](https://github.com/BigPizzaV3/CodexPlusPlus/issues/284)**：技能/插件加载机制存在可靠性问题，重启后状态丢失，影响高级用户的工作流连续性。
4. **[#178 第三方API不支持chrome插件操作](https://github.com/BigPizzaV3/CodexPlusPlus/issues/178)**：这是架构级限制，阻断了第三方 API 用户使用 Computer Use 功能，需官方明确路线图表态。

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*