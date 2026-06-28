# AI CLI 工具社区动态日报 2026-06-28

> 生成时间: 2026-06-28 03:52 UTC | 覆盖工具: 3 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比报告

**报告日期：** 2026-06-28  
**覆盖工具：** Claude Code、OpenAI Codex、Gemini CLI

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**三足鼎立、快速迭代**的格局。Claude Code 聚焦模型适配与开发者体验优化，OpenAI Codex 着力解决资源消耗与认证稳定性问题，Gemini CLI 则将安全加固置于首位。三者均处于活跃开发周期，但痛点分化明显：Claude Code 被模型升级拖累，Codex 面临成本异常危机，Gemini CLI 在安全与 Agent 可控性上承压。整体而言，CLI 工具正从「能用」向「好用」过渡，通知系统、权限交互、跨平台一致性成为共同短板。

---

## 2. 各工具活跃度对比

| 指标 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **今日 Issues 新增** | ~50 | ~30 | ~50+ |
| **今日 PR 更新** | 2 | 10+ | 19 |
| **今日 Release** | 无 | 3 个 alpha | 1 个 nightly |
| **最热 Issue 评论数** | 47 | 186 | 8 |
| **最热 Issue 👍 数** | 75 | 334 | 8 |
| **安全相关 PR** | 未披露 | 未披露 | **4** |
| **已合并 PR** | 0 | 未披露 | **6** |
| **开发节奏** | 平稳 | 加速 (alpha 连发) | 高速 (nightly) |

**数据洞察：** Gemini CLI 开发强度最高，19 个 PR 中含 4 个安全修复；OpenAI Codex 单 Issue 影响力最大（#28879 获 334 👍），反映用户对 rate-limit 问题的强烈关切；Claude Code 今日无版本发布，但社区讨论热度集中。

---

## 3. 共同关注的功能方向

### 3.1 通知与交互体验

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | VS Code 扩展缺少系统级通知（#57230），权限提示误触率高（#70622） |
| **OpenAI Codex** | TUI 多行状态栏支持（#21653），rate-limit 重置时间透明化（#30395） |
| **Gemini CLI** | Shell 执行完成后卡在"等待输入"（#25166），VSCode HITL 交互修复 |

**共同点：** 三者均面临 CLI 与 IDE 集成时的通知缺失或延迟问题，用户体验碎片化。

### 3.2 MCP (Model Context Protocol) 生态

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | MCP 服务器指令静默截断（#43474），插件 marketplace 路径不一致（#71948） |
| **OpenAI Codex** | MCP OAuth 认证重构（#30292 系列），stdio 服务器文件描述符泄漏（#26984） |
| **Gemini CLI** | MCP OAuth 刷新修复（#27889），schema 规范化（#27888） |

**共同点：** MCP 作为新兴协议，各家在认证、稳定性、工具发现等方面均存在适配阵痛，预计未来 1-2 个版本集中修复。

### 3.3 跨平台一致性

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | Cowork VM 在 ARM64 Windows 完全无法启动（#39636） |
| **OpenAI Codex** | Windows VS Code 编辑器面板空白（#21863），沙箱 CreateProcessAsUserW 错误（#20570） |
| **Gemini CLI** | Browser subagent 在 Wayland 下失败（#21983） |

**共同点：** Windows 平台问题占比最高，ARM64/ARM64 Windows 兼容性普遍薄弱。

---

## 4. 差异化定位分析

### Claude Code — 开发者体验优先

- **核心定位：** Anthropic 官方 CLI，深度集成 VS Code，强调安全审批流与 Cowork 协作模式
- **目标用户：** 企业开发者、安全敏感团队
- **技术路线：** 保守稳健，重大版本跟随模型更新；重视权限审计与多 Agent 协作
- **当前短板：** Opus 4.7 适配滞后导致社区信任度受损

### OpenAI Codex — 性能与成本驱动

- **核心定位：** OpenAI 官方 CLI，Rust 重写，强调速度与 API 集成
- **目标用户：** 个人开发者、API 重度用户
- **技术路线：** 激进迭代（连续三日 alpha 发布），快速响应社区反馈
- **当前短板：** rate-limit 成本异常（飙升 10-20x）严重影响用户预算

### Gemini CLI — 安全与可控性优先

- **核心定位：** Google 官方 CLI，TypeScript 实现，强调安全沙箱与 Agent 行为控制
- **目标用户：** 安全意识强的企业用户、研究者
- **技术路线：** 安全先行，nightly 构建频繁，评估基础设施完善
- **当前短板：** Agent 可靠性不足（挂起、状态误报），影响生产使用

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **架构语言** | Node.js | Rust | TypeScript |
| **发布节奏** | 稳定版为主 | 激进 alpha | nightly |
| **安全投入** | 中 | 中 | **高（4 安全 PR/日）** |
| **社区响应速度** | 中 | 快 | 快 |
| **成熟度** | 高 | 中 | 中 |

---

## 5. 社区热度与成熟度

### 热度排行

| 排名 | 工具 | 指标表现 |
|------|------|----------|
| 🥇 | **OpenAI Codex** | 单 Issue 影响力最高（#28879: 334 👍, 186 评论），用户参与度领先 |
| 🥈 | **Claude Code** | 讨论集中度高，4 个 Issue 共享同一根因，社区组织有序 |
| 🥉 | **Gemini CLI** | PR 活跃但 Issue 评论量偏低，可能处于用户基数扩展期 |

### 成熟度评估

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **功能完整度** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **稳定性** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **文档完善度** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **社区响应** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **安全成熟度** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |

**结论：** Claude Code 整体成熟度最高，但正面临模型适配的信任危机；OpenAI Codex 增长势头猛但稳定性隐患大；Gemini CLI 安全意识领先但产品化程度有待提升。

---

## 6. 值得关注的趋势信号

### 🔍 趋势一：模型升级适配成为新的风险点

Claude Code 的 Opus 4.7 渲染失效问题表明，**模型行为变更与 CLI 渲染逻辑的耦合过紧**是系统性风险。建议开发者：

- 关注模型的 breaking changes 公告
- 保持 CLI 版本与模型版本的兼容性矩阵文档

### 🔍 趋势二：安全从附加项变为核心竞争力

Gemini CLI 单日 4 个安全 PR，Codex 持续推进 OAuth 重构，表明**安全能力正在成为 CLI 工具的差异化卖点**。重点关注：

- SSRF/DNS 重绑定防护（Gemini CLI #28181）
- MCP OAuth 认证稳定性（Codex #30292 系列）
- 路径遍历防御（Gemini CLI #28180）

### 🔍 趋势三：成本透明化成为用户核心诉求

OpenAI Codex 的 rate-limit 异常（#28879）引发强烈反响，用户对**配额消耗的可预测性**需求迫切。建议：

- 优先实现 `rateLimitResetCredits` 过期日期显示（Codex #30395）
- 考虑在 Claude Code 中增加用量仪表盘

### 🔍 趋势四：Agent 可控性是下一阶段焦点

三个工具均出现 Agent "擅自行动"的问题（Gemini CLI 静默范围扩展、Claude Code 权限提示误触），**用户对 Agent 行为边界的要求正在提高**。技术方向：

- 明确的范围确认机制
- 细粒度的权限配置
- 行为轨迹可视化

### 🔍 趋势五：跨平台一致性仍是普遍短板

Windows 平台问题在三个工具中均排名前列，ARM64 兼容性尤为薄弱。**如需在 Windows/ARM64 环境使用，建议：**

- 优先选择 CLI 模式而非桌面扩展
- 关注各工具的 platform-specific issues 标签

---

## 📌 行动建议

| 角色 | 短期建议 | 中期建议 |
|------|----------|----------|
| **技术决策者** | 评估 rate-limit 成本风险，暂缓生产环境升级 Opus 4.7 | 关注 MCP OAuth 重构进展，提前规划认证集成 |
| **开发者** | 监控 Codex alpha 版本稳定性，Gemini CLI 关注安全修复合并 | 建立 CLI 版本-模型版本兼容性清单 |
| **企业用户** | 优先选择 Claude Code 的安全审批流 | 评估 Gemini CLI 的安全能力，考虑沙箱方案 |

---

*本报告基于 2026-06-28 GitHub 公开数据生成，数据截止时间以各平台实际时间为准。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-06-28 | 来源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行

以下按 PR 内容完整度与社区价值排序，涵盖功能型新 Skill 与基础设施修复两大类：

### 🔧 基础设施类（修复类 PR，优先级最高）

| # | PR 标题 | 作者 | 状态 | 核心内容 |
|---|---------|------|------|----------|
| 1 | **fix(skill-creator): run_eval.py always reports 0% recall** | @MartinCajiao | OPEN | 修复 `run_eval.py` 在所有平台上报告 recall=0% 的核心 bug，根源是 eval artifact 未作为真实 skill 安装、Windows 流读取失败、触发检测逻辑缺陷及并行 worker 问题。关联 Issue #556（12 条评论）。 | [PR #1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **skill-creator: fix run_eval crash on Windows** | @joshuawowk | OPEN | 修复 Windows 下 `claude -p` 无法触发任何 skill 的问题（WinError 10038），导致优化循环完全失效。 | [PR #1099](https://github.com/anthropics/skills/pull/1099) |
| 3 | **skill-creator: fix Windows subprocess + encoding bugs** | @gstreet-ops | OPEN | 修复 Windows 上 subprocess 无法找到 `claude.cmd`（PATHEXT 问题）及 cp1252 编码问题，2 行代码修复。 | [PR #1050](https://github.com/anthropics/skills/pull/1050) |
| 4 | **Detect unquoted YAML special characters in description fields** | @Mr-Neutr0n | OPEN | 在 `quick_validate.py` 中添加预解析检查，捕获 `description` 字段中未加引号的 `: # { } [ ]` 等 YAML 特殊字符导致的静默解析失败。关联 PR #539（同作者）。 | [PR #361](https://github.com/anthropics/skills/pull/361) |
| 5 | **Fix skill-creator UTF-8 panic on multi-byte characters** | @Mr-Neutr0n | OPEN | 将字符长度检查替换为 UTF-8 字节长度验证，防止 CLI 处理多字节字符时 Rust panic。 | [PR #362](https://github.com/anthropics/skills/pull/362) |

### ✨ 功能型新 Skill

| # | PR 标题 | 作者 | 状态 | 核心内容 |
|---|---------|------|------|----------|
| 6 | **Add document-typography skill** | @PGTBoos | OPEN | 解决 AI 生成文档的排版通病：孤行（1-6 词溢出）、寡段（章节标题滞留页底）、编号错位。覆盖所有 Claude 生成的文档场景。 | [PR #514](https://github.com/anthropics/skills/pull/514) |
| 7 | **Add ODT skill — OpenDocument text creation** | @GitHubNewbie0 | OPEN | 支持创建、填充、读取和转换 .odt/.ods/.odf 文件，填补 Claude Code 对开放文档格式的支持空白。 | [PR #486](https://github.com/anthropics/skills/pull/486) |
| 8 | **feat: add testing-patterns skill** | @4444J99 | OPEN | 覆盖完整测试栈：测试哲学（Testing Trophy）、单元测试（AAA 模式）、React 组件测试（Testing Library）、集成测试与 E2E。 | [PR #723](https://github.com/anthropics/skills/pull/723) |

---

## 2. 社区需求趋势

从 Issues 数据提炼出四大核心诉求方向：

### 📄 文档与格式处理（最强烈需求）
社区对 Claude 生成文档的排版质量有明确不满，ODT、PDF、DOCX、Typography 等多个 Skill 均聚焦于**文档格式规范化**。Issue #492（23 条评论）还涉及 SharePoint Online 文档处理的安全与上下文窗口问题。这反映出 Claude Code 在企业文档工作流中的渗透正在加深。

### 🔒 安全与信任边界（高优先级议题）
Issue #492 引发最多讨论（23 条评论）：社区制作的 Skill 被分发在 `anthropic/` 命名空间下，用户可能误认为官方 Skill 而授予过高权限。这是当前社区最尖锐的结构性问题。

### 🏢 企业协作与组织级共享
Issue #228（14 条评论）明确提出组织内 Skill 共享需求——当前需手动下载、上传，流程繁琐。企业级应用场景正在推动 Skills 生态向"团队共享库"方向演进。

### 🛠️ Skill 创建工具链成熟度
多个 Issue（#556、#1169、#1061）均指向 `skill-creator` 工具链在 Windows 平台和 YAML 解析上的系统性缺陷。社区正在积极修复这些基础设施问题，但核心评估循环（recall=0%）的 bug 尚未合并，影响所有 Skill 优化工作。

---

## 3. 高潜力待合并 Skills

以下 PR 具备高合并价值，理由是：**问题清晰、修复精准、关联 Issue 讨论充分**：

| 优先级 | PR | 亮点 | 关联 Issue |
|--------|-----|------|-----------|
| ⭐⭐⭐ | [PR #1298](https://github.com/anthropics/skills/pull/1298) | 一揽子修复 skill-creator 核心评估循环，关联 12 条评论的 Issue #556 | [#556](https://github.com/anthropics/skills/issues/556) |
| ⭐⭐⭐ | [PR #1099](https://github.com/anthropics/skills/pull/1099) + [PR #1050](https://github.com/anthropics/skills/pull/1050) | Windows 兼容性修复，解决 `claude -p` 在 Windows 上完全失效的问题 | [#1061](https://github.com/anthropics/skills/issues/1061) |
| ⭐⭐ | [PR #514](https://github.com/anthropics/skills/pull/514) | 文档排版 Skill 需求真实、覆盖场景广，解决 AI 生成文档的普遍痛点 | — |
| ⭐⭐ | [PR #361](https://github.com/anthropics/skills/pull/361) + [PR #539](https://github.com/anthropics/skills/pull/539) | YAML 解析静默失败问题被两个独立 PR 关注，说明是社区共识的痛点 | — |
| ⭐⭐ | [PR #723](https://github.com/anthropics/skills/pull/723) | 测试模式 Skill 覆盖完整测试生命周期，实用性强 | — |

> ⚠️ **注意**：当前所有热门 PR 均为 OPEN 状态，无一合并。反映出维护者可能正在集中处理积压，或在等待 skill-creator 工具链修复后再统一验收新 Skill。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：修复 skill-creator 工具链（尤其是 Windows 兼容性与评估循环 bug），同时扩展文档处理和企业协作类 Skill——前者是生态基础设施，后者是落地价值的直接体现。**

### 补充观察
- **安全议题升温**：Issue #492 的 23 条评论远超其他 Issue，社区对 `anthropic/` 命名空间滥用问题高度敏感，维护者需尽快给出官方立场。
- **Windows 用户被忽视**：至少 3 个独立 PR 聚焦 Windows 兼容性，说明 Claude Code 在 Windows 生态中的用户基数已相当可观。
- **Meta-Skill 兴起**：PR #83 提出的 `skill-quality-analyzer` 和 `skill-security-analyzer` 代表了一种新范式——用 Skill 来治理 Skill，预示未来可能出现 Skill 市场质量标准。

---

*报告基于 github.com/anthropics/skills 公开数据生成，PR 评论数字因数据源限制显示为 undefined，已结合 Issue 评论数与 PR 内容完整性进行综合排序。*

---

# Claude Code 社区动态日报

**日期：** 2026-06-28  
**数据来源：** github.com/anthropics/claude-code

---

## 1. 今日速览

今日 Claude Code 社区最集中的议题是 **Opus 4.7 思考摘要（Thinking Summaries）渲染失效问题**，至少 4 个相关 Issue 获得大量社区反馈（累计 117+ 评论），用户反映升级到 4.7 后 thinking summaries 完全不显示。此外，**VS Code 扩展通知系统**和**权限交互体验优化**也引发广泛讨论，多个 Feature Request 获得积极响应。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 社区热点 Issues

### 🔥 Opus 4.7 思考摘要渲染问题（集中爆发）

| Issue | 标题 | 评论 | 👍 | 状态 |
|-------|------|------|-----|------|
| [#49322](https://github.com/anthropics/claude-code/issues/49322) | Opus 4.7 thinking summaries not rendered in VS Code extension | 47 | 41 | OPEN |
| [#49268](https://github.com/anthropics/claude-code/issues/49268) | Thinking summaries missing on Opus 4.7 — harness doesn't set display: "summarized" | 46 | 75 | OPEN |
| [#49902](https://github.com/anthropics/claude-code/issues/49902) | Opus 4.7 thinking summaries not rendered (VSCode extension 2.1.112) | 14 | 41 | OPEN (duplicate) |
| [#59844](https://github.com/anthropics/claude-code/issues/59844) | `showThinkingSummaries: true` silently no-ops on Opus 4.7 | 10 | 6 | OPEN |

**为什么重要：** 这是今日社区最热话题。Opus 4.7 改变了 thinking content 的默认行为，但 Claude Code 的渲染逻辑未同步适配，导致用户完全看不到 thinking summaries。Issue #49268 提供了详细的根因分析（harness 未设置 `display: "summarized"`），社区期待官方快速修复。

---

### 其他重点 Issues

| # | 标题 | 评论 | 👍 | 关键点 |
|---|------|------|-----|--------|
| [#39636](https://github.com/anthropics/claude-code/issues/39636) | Cowork VM guest kernel never boots on Snapdragon X Plus (ARM64) | 32 | 9 | Windows ARM64 用户完全无法使用 Cowork，每次连接超时 |
| [#70622](https://github.com/anthropics/claude-code/issues/70622) | Add option to disable clickable Yes/No prompts in terminal | 8 | 24 | 用户频繁误触权限提示，请求可配置化 |
| [#57230](https://github.com/anthropics/claude-code/issues/57230) | VSCode Extension: Add native system/toast notifications | 4 | 14 | 当 Claude 需要操作权限或任务完成时，VS Code 扩展无系统级通知 |
| [#65114](https://github.com/anthropics/claude-code/issues/65114) | Cowork: give users a manual /compact | 5 | 1 | Cowork 模式仅支持自动压缩，用户无法手动触发上下文整理 |
| [#43474](https://github.com/anthropics/claude-code/issues/43474) | MCP server instructions silently truncated when multiple servers configured | 3 | 2 | 配置多个 MCP 服务器时，system prompt 中的指令被静默截断 |
| [#67220](https://github.com/anthropics/claude-code/issues/67220) | Native Windows toast notifications | 3 | 0 | Windows 用户缺少原生通知支持，体验落后于 macOS/Linux |
| [#69950](https://github.com/anthropics/claude-code/issues/69950) | Safety classifier outage blocks ALL Bash/tool calls | 2 | 0 | 安全分类器临时不可用时，所有 Bash 命令被阻塞 |
| [#71948](https://github.com/anthropics/claude-code/issues/71948) | Plugin marketplace: /plugin & /reload-plugins wipe marketplace dir | 1 | 0 | 插件加载器与 CLI 对 marketplace 路径理解不一致，导致插件全部失效 |

---

## 4. 重要 PR 进展

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#68787](https://github.com/anthropics/claude-code/pull/68787) | fix(scripts): add error message to edit-issue-labels.sh when called with no label arguments | OPEN | 修复脚本在无参数调用时静默退出的问题，增加友好的错误提示 |
| [#71798](https://github.com/anthropics/claude-code/pull/71798) | (无标题) | CLOSED | - |

**PR 分析：** 今日 PR 活动较少，仅有 2 个更新。#68787 是一个小的 DX 改进，提升 CI 脚本的可用性。

---

## 5. 功能需求趋势

基于今日 50 个 Issues 的分析，社区最关注的功能方向如下：

### 📊 需求热度排行

| 排名 | 功能方向 | 相关 Issue 数 | 典型需求 |
|------|----------|---------------|----------|
| 1 | **模型兼容性修复** | 5+ | Opus 4.7 thinking summaries 渲染、模型 ID 格式问题 |
| 2 | **VS Code 扩展增强** | 4+ | 系统通知、通知中心、UI 改进 |
| 3 | **权限/审批体验** | 3+ | 可配置权限提示、集中化多 Agent 审批通知 |
| 4 | **Cowork 功能完善** | 3+ | 手动压缩、ARM64 支持、桌面连接问题 |
| 5 | **跨平台通知** | 2+ | Windows 原生 toast 通知、移动端推送 |
| 6 | **MCP 稳定性** | 2+ | 指令截断、初始化参数传递 |
| 7 | **插件系统** | 2+ | Marketplace 路径一致性、hooks.json 兼容性 |

### 🔍 趋势洞察

1. **Opus 4.7 适配是当务之急**：多个 Issue 指向同一根因，社区期待官方响应
2. **通知系统成为高频需求**：VS Code 扩展和 Windows 平台均缺少原生通知
3. **权限交互体验需优化**：可点击的 Yes/No 提示导致误操作，用户强烈要求可配置
4. **Cowork 模式成熟度待提升**：ARM64 支持缺失、手动压缩缺失等问题影响生产使用

---

## 6. 开发者关注点

### 痛点总结

| 痛点 | 影响范围 | 严重程度 |
|------|----------|----------|
| Opus 4.7 thinking summaries 完全不显示 | 所有升级到 4.7 的用户 | 🔴 高 |
| Cowork VM 在 ARM64 Windows 上完全无法启动 | Snapdragon X Plus 用户 | 🔴 高 |
| 插件 marketplace 路径不一致导致全部插件失效 | 插件用户 | 🔴 高 |
| MCP 服务器指令被静默截断 | 多 MCP 服务器用户 | 🟡 中 |
| 权限提示误触率高 | 所有用户 | 🟡 中 |
| Windows 平台缺少原生通知 | Windows 用户 | 🟡 中 |

### 高频需求

1. **可配置的权限交互**：用户希望关闭或调整可点击权限提示的行为
2. **系统级通知**：特别是在 VS Code 扩展和 Windows 平台
3. **手动触发上下文压缩**：Cowork 模式下用户需要更精细的上下文控制
4. **更稳定的模型切换**：Bedrock 模型 ID 格式问题导致切换失败

---

**📅 报告生成时间：** 2026-06-28  
**📌 关注更多动态：** [Claude Code GitHub](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-06-28**

---

## 1. 今日速览

过去 24 小时内，Codex 社区发布了 3 个 Rust alpha 版本（0.143.0-alpha.27/28/29），但未包含正式版本更新。**社区最热门议题**集中在三个方面：① GPT-5.5 模型自 6 月 16 日起 rate-limit 成本异常飙升 10-20 倍，引发大量用户反馈；② SQLite 日志写入量过大问题虽有部分修复，但 macOS/Windows 平台仍存在持续写入情况；③ MCP OAuth 认证流程正在经历重大重构，多个序列化相关 PR 正在推进中。

---

## 2. 版本发布

### Rust SDK 更新

| 版本号 | 发布类型 | 说明 |
|--------|----------|------|
| `rust-v0.143.0-alpha.29` | Alpha | 连续第三天发布 alpha 版本 |
| `rust-v0.143.0-alpha.28` | Alpha | 连续第二天发布 alpha 版本 |
| `rust-v0.143.0-alpha.27` | Alpha | 新版本发布 |

> 📌 **注意**：连续三日发布 alpha 版本表明开发团队正在积极推进 0.143.0 分支，预计近期可能有 beta 或正式版本发布。建议关注 [releases 页面](https://github.com/openai/codex/releases) 获取正式版本通知。

---

## 3. 社区热点 Issues

### 🔥 Top 10 热门问题

| # | Issue | 标题 | 评论 | 👍 | 重要性说明 |
|---|-------|------|------|-----|------------|
| 1 | [#28879](https://github.com/openai/codex/issues/28879) | Rate-limit 成本自 6 月 16 日飙升 10-20x | 186 | 334 | **最高优先级**：影响所有 Plus 用户配额消耗速度，社区讨论热烈 |
| 2 | [#28224](https://github.com/openai/codex/issues/28224) | SQLite 反馈日志年写入 640 TB | 93 | 400 | **已部分修复**：PR #29432/#29457 已合并，可减少 85% 日志量 |
| 3 | [#30224](https://github.com/openai/codex/issues/30224) | GPT-5.5 不支持 X-OpenAI-Internal-Codex-Responses-Lite | 52 | 18 | **新回归问题**：GPT-5.5 用户近期频繁报告 |
| 4 | [#29532](https://github.com/openai/codex/issues/29532) | macOS SQLite TRACE 日志持续写入 | 22 | 7 | **部分修复未完成**：#29432 有效但 #29457 未生效 |
| 5 | [#21863](https://github.com/openai/codex/issues/21863) | Windows VS Code 编辑器面板空白 | 14 | 1 | **平台特定问题**：影响 Windows 用户 IDE 体验 |
| 6 | [#25744](https://github.com/openai/codex/issues/25744) | macOS MCP 进程泄漏导致 HID 延迟 | 8 | 3 | **资源泄漏**：长时间运行累积性问题 |
| 7 | [#21653](https://github.com/openai/codex/issues/21653) | TUI 多行状态栏支持 | 7 | 29 | **功能增强**：社区对 CLI 体验有明确需求 |
| 8 | [#26984](https://github.com/openai/codex/issues/26984) | MCP stdio 服务器文件描述符泄漏 | 7 | 1 | **系统资源问题**：可能导致 EMFILE 错误 |
| 9 | [#20570](https://github.com/openai/codex/issues/20570) | Windows 沙箱 CreateProcessAsUserW 错误 | 7 | 7 | **平台特定问题**：Windows 安全沙箱兼容性 |
| 10 | [#29408](https://github.com/openai/codex/issues/29408) | Windows 多仓库工作区 Git 进程残留 | 6 | 0 | **资源泄漏**：Windows 平台性能问题 |

### 📌 重点问题摘要

**#28879 - Rate-limit 成本异常**
> 自 6 月 16 日起，GPT-5.5 模型的 rate-limit 消耗速度增加 10-20 倍，导致原本可支持 20+ 提示的 5 小时预算在 2-3 个提示后耗尽。用户日志显示 `token_count` 和 `rate_limits` 事件中每 token 消耗的限制百分比大幅上升。

**#28224 - SQLite 日志写入问题**
> Codex CLI 的 SQLite 反馈日志在持续使用情况下年写入量可达 640 TB，严重消耗 SSD 寿命。开发团队已通过 PR #29432 和 #29457 修复，可减少约 85% 日志量。

---

## 4. 重要 PR 进展

### 🔧 功能增强与修复

| PR | 标题 | 状态 | 重要性 |
|----|------|------|--------|
| [#30395](https://github.com/openai/codex/pull/30395) | 显示使用限制重置过期详情 | OPEN | ⭐⭐⭐ 新增 `rateLimitResetCredits` 过期日期显示，提升透明度 |
| [#30334](https://github.com/openai/codex/pull/30334) | 结构化工具和推理时间日志 | OPEN | ⭐⭐⭐ 改进诊断能力，支持区分调度/队列/处理时间 |
| [#30269](https://github.com/openai/codex/pull/30269) | 禁用 Rendezvous WebSockets Nagle 算法 | OPEN | ⭐⭐ 优化 WebSocket 延迟性能 |
| [#30384](https://github.com/openai/codex/pull/30384) | 增加 currentTime/read 超时 | CLOSED | ⭐⭐ 超时从 5s 增至 10s，改善稳定性 |

### 🔐 MCP OAuth 重构系列

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#30292](https://github.com/openai/codex/pull/30292) | 序列化共享 MCP OAuth 凭证存储 | OPEN | 核心重构基础 |
| [#30293](https://github.com/openai/codex/pull/30293) | 序列化 MCP OAuth 刷新事务 | OPEN | 防止并发刷新冲突 |
| [#30294](https://github.com/openai/codex/pull/30294) | 序列化 MCP OAuth 登录/登出 | OPEN | 统一认证流程 |
| [#30295](https://github.com/openai/codex/pull/30295) | 序列化 MCP OAuth 登录登出 | OPEN | 登录状态管理 |
| [#30296](https://github.com/openai/codex/pull/30296) | 报告 MCP OAuth 自动存储漂移 | OPEN | 监控凭证同步状态 |
| [#30091](https://github.com/openai/codex/pull/30091) | 添加 Codex 自有 OAuth 恢复 | CLOSED | 被 #30292 系列替代 |

> 📌 **开发者提示**：MCP OAuth 重构系列 PR 正在审查中，预计将显著改善 MCP 服务器认证的稳定性和并发安全性。

---

## 5. 功能需求趋势

基于过去 24 小时 Issues 分析，社区关注的功能方向如下：

### 📊 需求分布

| 类别 | 占比 | 代表 Issues | 说明 |
|------|------|-------------|------|
| **性能优化** | 35% | #28224, #29532, #25744, #26984 | SQLite 日志、进程泄漏、内存管理 |
| **模型兼容** | 20% | #30224, #30406, #30403 | GPT-5.5 特定问题、新模型支持 |
| **平台适配** | 20% | #21863, #20570, #29408, #30390 | Windows/macOS 特定问题 |
| **认证授权** | 15% | #28672, #27165, #30292 系列 | OAuth 刷新、令牌管理 |
| **用户体验** | 10% | #21653, #26478, #24993 | TUI、拼写检查、忽略文件 |

### 🔍 关键趋势

1. **Rate-limit 透明度需求上升**：用户强烈要求在 UI 中显示详细的 rate-limit 重置时间和配额过期日期（#29618, #30395）
2. **MCP 生态成熟度需求**：OAuth 认证、进程管理、stdio 通信稳定性成为焦点
3. **跨平台一致性**：Windows 平台问题占比显著，包括沙箱、Git 集成、拼写检查等

---

## 6. 开发者关注点

### 🎯 核心痛点

| 痛点 | 严重程度 | 相关 Issue | 建议 |
|------|----------|------------|------|
| **配额异常消耗** | 🔴 高 | #28879, #30404 | 关注官方 rate-limit 修复进展，考虑临时降级模型版本 |
| **SQLite 磁盘占用** | 🟡 中 | #28224, #29532, #30405 | 已部分修复，可升级至 0.142.0+ 版本 |
| **MCP 进程泄漏** | 🟡 中 | #25744, #26984, #30408 | 关注 MCP OAuth 重构 PR，定期重启会话 |
| **Windows 兼容性** | 🟡 中 | #21863, #20570, #29408 | 关注平台特定修复，或使用 CLI 替代桌面版 |

### 💡 开发者建议

1. **短期**：如遇 rate-limit 异常，优先检查是否使用 GPT-5.5 模型，考虑临时切换至 GPT-5.4
2. **升级建议**：升级至 `rust-v0.142.0+` 可解决大部分 SQLite 日志问题
3. **监控建议**：关注 MCP 服务器进程数量，使用 `ps aux | grep codex` 监控资源使用
4. **反馈渠道**：新回归问题（如 #30224）建议在 Issue 中提供完整环境信息和复现步骤

---

**📅 明日关注**：建议持续跟踪 #28879 (rate-limit) 和 #30292 系列 (MCP OAuth) 的进展。

*报告生成时间：2026-06-28 | 数据来源：github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-06-28

---

## 1. 今日速览

昨夜发布了 **v0.51.0-nightly.20260628** 版本，重点修复了敏感路径块列表的大小写不敏感问题和 VSCode HITL 交互问题。社区今日聚焦于安全修复，共有 **4 个安全相关 PR** 提交，同时 Agent 行为优化（尤其是静默范围扩展问题）成为热门讨论话题。

---

## 2. 版本发布

### v0.51.0-nightly.20260628.gae0a3aa7b

| 项目 | 内容 |
|------|------|
| **类型** | Nightly Build |
| **作者** | @gemini-cli-robot |
| **变更** | 安全修复：强制敏感路径块列表大小写不敏感处理，修复 VSCode HITL 交互问题 |

> 📎 **Full Changelog**: https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260626.gb14416447...v0.51.0-ni

---

## 3. 社区热点 Issues

### 🔥 Top 10 热门讨论

| # | Issue | 标题 | 评论 | 重要性 |
|---|-------|------|------|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 达到 MAX_TURNS 后仍报告 GOAL success | 8 | ⚠️ P1 Bug |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用模型 bash 亲和性实现零依赖 OS 沙箱 | 8 | 💡 Enhancement |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估框架 | 7 | 📊 Epic |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取/搜索/映射 | 7 | 🔧 Investigation |
| 5 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 挂起问题 | 7 | ⚠️ P1 Bug |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不够主动使用 skills 和 sub-agents | 6 | 💡 UX Enhancement |
| 7 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | 确定性强删与减少 Auto Memory 日志 | 5 | 🔒 Security |
| 8 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | 停止 Auto Memory 无限重试低信号会话 | 5 | 🐛 Bug |
| 9 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行完成后卡在"等待输入" | 4 | ⚠️ P1 Bug |
| 10 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 下失败 | 4 | 🐛 Bug |

### 重点 Issue 详解

**1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent MAX_TURNS 状态误报**
- **问题**: `codebase_investigator` subagent 在达到最大轮次限制后仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`
- **影响**: 掩盖了实际的中断行为，可能导致用户误判任务完成状态
- **社区反应**: 8 条评论，2 个 👍，标记为 P1 需重新测试

**2. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - 零依赖 OS 沙箱提案**
- **核心**: 利用 Gemini 3 模型的原生 bash 能力，实现无需额外依赖的操作系统级沙箱
- **价值**: 提升安全性的同时保持用户体验
- **社区反应**: 8 条评论，1 个 👍，标记为 P2 大工作量

**3. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist Agent 挂起**
- **问题**: 当 Gemini CLI 委托给 generalist agent 时会永久挂起，简单操作如创建文件夹也会卡住
- **临时方案**: 指示模型不要使用 subagents 可规避
- **社区反应**: 7 条评论，8 个 👍，高优先级问题

**4. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) - Auto Memory 安全增强**
- **问题**: Auto Memory 在将内容发送到模型后才进行脱敏，存在日志泄露风险
- **建议**: 实现确定性脱敏，减少 Auto Memory 日志记录
- **社区反应**: 5 条评论，安全相关

**5. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) - Shell 执行卡死**
- **问题**: 简单 CLI 命令执行完成后，界面仍显示"等待用户输入"并挂起
- **影响**: 严重影响使用体验
- **社区反应**: 4 条评论，3 个 👍

---

## 4. 重要 PR 进展

### 🆕 新提交 PR（今日）

| PR | 标题 | 领域 | 状态 |
|----|------|------|------|
| [#28181](https://github.com/google-gemini/gemini-cli/pull/28181) | 修复 web_fetch 工具 DNS 重绑定绕过 SSRF 防护 | 🔒 Security | 待审 |
| [#28180](https://github.com/google-gemini/gemini-cli/pull/28180) | 恢复 @-reference 文件的防御性路径解析（重新应用 #27943） | 🔒 Security | 待审 |
| [#28179](https://github.com/google-gemini/gemini-cli/pull/28179) | 从 ALWAYS_ALLOWED 环境变量中移除 ISSUE_BODY/ISSUE_TITLE | 🔒 Security | 待审 |
| [#28175](https://github.com/google-gemini/gemini-cli/pull/28175) | Shell 参数扩展需确认 | 🔒 Security | 待审 |
| [#28172](https://github.com/google-gemini/gemini-cli/pull/28172) | 防止任务失败时静默范围扩展 | 🤖 Agent | 待审 |
| [#28171](https://github.com/google-gemini/gemini-cli/pull/28171) | 防止初始方法失败时静默范围扩展 | 🤖 Agent | 待审 |
| [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) | 新增 eval coverage 报告命令 | 📊 Evals | 待审 |
| [#28167](https://github.com/google-gemini/gemini-cli/pull/28167) | Egress Cloud Run Service | ☁️ Infrastructure | 待审 |

### ✅ 已合并 PR（今日）

| PR | 标题 | 修复问题 |
|----|------|----------|
| [#27878](https://github.com/google-gemini/gemini-cli/pull/27878) | 嗅探 MCP 图像 MIME 类型 | 修复 Figma MCP WebP 图像被错误标记为 PNG 导致 400 错误 |
| [#27889](https://github.com/google-gemini/gemini-cli/pull/27889) | 使用存储的客户端 ID 刷新 MCP OAuth | 修复自动发现服务器的 OAuth 刷新路径 |
| [#27887](https://github.com/google-gemini/gemini-cli/pull/27887) | 尊重自定义主题 border.default | 修复 OSC 11 终端上的自定义边框颜色 |
| [#27885](https://github.com/google-gemini/gemini-cli/pull/27885) | 注册所有 activate() disposables | 修复 VS Code IDE companion 资源泄漏 |
| [#27888](https://github.com/google-gemini/gemini-cli/pull/27888) | 规范化 MCP 工具 schema 为根类型对象 | 修复 Vertex AI 严格模式拒绝非 object 类型 schema |
| [#27886](https://github.com/google-gemini/gemini-cli/pull/27886) | session_context 目录树尊重 .gitignore | 修复会话上下文忽略规则不一致 |

### 重点 PR 详解

**1. [#28181](https://github.com/google-gemini/gemini-cli/pull/28181) - DNS 重绑定攻击修复**
- **漏洞**: `web_fetch` 工具的 SSRF 防护使用同步 `isPrivateIp()` 检查，仅检查主机名字符串而不进行 DNS 解析
- **风险**: 攻击者可通过 DNS 重绑定绕过私有 IP 检查
- **修复**: 需实现实际的 DNS 解析验证

**2. [#28180](https://github.com/google-gemini/gemini-cli/pull/28180) - 恢复防御性路径解析**
- **背景**: 重新应用 #27943 的安全修复，该修复在 #27992 中被回退
- **问题**: 移除 `resolveDefensiveToolPath` 后，通过符号链接的路径遍历漏洞重新引入
- **影响**: 涉及 `read_file`、`write_file`、`edit` 工具

**3. [#28171/#28172](https://github.com/google-gemini/gemini-cli/pull/28171) - Agent 静默范围扩展**
- **问题**: 当用户请求审查特定代码行时，Agent 会静默扩展范围，运行脚本和读取完整文件
- **根因**: `mandateConfirm` 函数缺少明确的边界约束指令
- **修复**: 增强确认机制，防止未授权的范围扩展

**4. [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) - Eval Coverage 报告**
- **功能**: 新增 `eval:coverage` 命令，通过交叉引用评估清单工具引用与工具注册表来报告内置工具的评估覆盖情况
- **用途**: 帮助团队了解测试覆盖盲区

---

## 5. 功能需求趋势

基于过去 24 小时 Issues 分析，社区关注的功能方向如下：

### 📈 热度排名

| 排名 | 方向 | 相关 Issue 数 | 典型需求 |
|------|------|---------------|----------|
| 1 | **🔒 安全增强** | 8+ | SSRF 防护、DNS 重绑定、路径遍历、脱敏机制 |
| 2 | **🤖 Agent 行为优化** | 12+ | 静默范围扩展、subagent 可靠性、skills 使用率 |
| 3 | **🧠 内存系统** | 5+ | Auto Memory 重试逻辑、脱敏、补丁验证 |
| 4 | **🔌 MCP 集成** | 4+ | OAuth 刷新、schema 规范化、MIME 类型检测 |
| 5 | **🧪 评估框架** | 3+ | 组件级评估、覆盖率报告、行为测试 |
| 6 | **🌐 跨平台兼容** | 2+ | Wayland 支持、终端主题、窗口调整 |

### 💡 重点趋势分析

**安全优先**: 今日有 4 个安全相关 PR 提交，表明项目对安全问题的重视程度显著提升，涵盖网络访问、路径解析、环境变量处理等多个攻击面。

**Agent 可控性**: 多个 Issue 和 PR 聚焦于防止 Agent "擅自行动"，强调用户对任务范围的控制在静默范围扩展修复后得到改善。

**评估基础设施**: #28169 新增的 coverage 报告工具和 #24353 组件级评估框架表明团队正在加强质量保障体系。

---

## 6. 开发者关注点

### 🎯 核心痛点

1. **Agent 可靠性不足**
   - Generalist agent 挂起、subagent 状态误报等问题影响生产使用
   - 社区反馈强烈（#21409 获得 8 个 👍）

2. **安全边界模糊**
   - 路径遍历、SSRF、DNS 重绑定等漏洞反复出现
   - 开发者呼吁更严格的防御性编程

3. **Auto Memory 行为异常**
   - 低信号会话无限重试、日志泄露风险
   - 需要更智能的会话质量判断机制

4. **Shell 交互卡死**
   - 简单命令执行后界面无响应
   - 严重影响 CLI 使用体验

### 🔧 高频需求

| 需求 | 出现频次 | 说明 |
|------|----------|------|
| Subagent 行为改进 | 高 | 状态报告、权限控制、轨迹可见性 |
| 安全沙箱能力 | 高 | OS 级沙箱、命令白名单 |
| AST 感知工具 | 中 | 精确代码导航，减少 token 浪费 |
| 评估覆盖增强 | 中 | 组件级测试、回归覆盖 |
| 跨平台兼容 | 中 | Wayland、终端主题适配 |

---

**📊 统计概览**

| 指标 | 数值 |
|------|------|
| 新增 Issues | 50+ |
| 新增 PRs | 19 |
| 安全相关 PR | 4 |
| P1 优先级 Issue | 6 |
| 已合并 PR | 6 |

---

*本报告基于 2026-06-28 GitHub 数据生成*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*