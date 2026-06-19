# AI CLI 工具社区动态日报 2026-06-19

> 生成时间: 2026-06-19 04:19 UTC | 覆盖工具: 3 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告日期：** 2026-06-19
**覆盖工具：** Claude Code、OpenAI Codex、Gemini CLI

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从功能扩张向稳定性收敛**的关键阶段。三大主流工具均已度过早期功能验证期，社区反馈重心从“缺少功能”转向“既有功能的可靠性”。Claude Code 以安全防护为锚点强化企业信任，OpenAI Codex 凭借 PR 吞吐量（50个/日）展现极高的工程迭代能力，Gemini CLI 则在 Agent 智能化和内存系统上投入大量研发资源。整体趋势表明，CLI 工具正从“能做什么”向“好不好用、稳不稳定”演进，跨平台一致性和资源消耗控制成为下一阶段竞争焦点。

---

## 2. 各工具活跃度对比

| 指标 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **今日新增 Issues** | 49 | 26 | 50 |
| **今日新增 PRs** | 4 | 50 | 26 |
| **PR/Issue 比** | 0.08 | 1.92 | 0.52 |
| **今日版本发布** | ✅ v2.1.183 | ✅ rust-v0.141.0 | ❌ 构建失败 |
| **Release 状态** | 稳定版 | 稳定版 + 3 个 alpha | 最新稳定版 v0.48.0 |
| **社区最高热度 Issue** | #36151（352 👍） | #14593（616 评论 / 271 👍） | #21409（8 👍） |
| **Issue 评论数峰值** | 96 | 616 | 7 |

**数据洞察：**

- **OpenAI Codex** PR 吞吐量遥遥领先（50个/日），工程迭代速度最快，但 Issue 积压量大（616 条评论的 #14593 持续发酵），反映出“边修边写”节奏
- **Claude Code** Issue 活跃但 PR 相对保守，更新节奏稳健，以安全补丁和功能迭代为主
- **Gemini CLI** Issue 与 PR 数量接近平衡，但社区互动深度不足（最高评论仅 7 条），社区成熟度相对较低

---

## 3. 共同关注的功能方向

### 3.1 跨平台一致性

| 工具 | 具体问题 |
|------|----------|
| Claude Code | Windows UI 延迟（#26302）、Linux 缓存失效（#47098） |
| OpenAI Codex | macOS 进程资源失控（#25719）、Windows 沙箱崩溃（#28245） |
| Gemini CLI | Wayland 浏览器子代理失败（#21983）、编码处理问题（#27996） |

三款工具均面临 Windows/macOS/Linux 行为不一致问题，这是当前最普遍的跨平台技术债。

### 3.2 安全与权限管理

| 工具 | 安全举措 |
|------|----------|
| Claude Code | 自动模式阻止破坏性 Git 操作（v2.1.183） |
| OpenAI Codex | E2E 加密远程执行通道（rust-v0.141.0）、MITM CA 私钥保护（#29013） |
| Gemini CLI | MCP OAuth 令牌原子写入（#27664） |

安全加固成为三家的共识方向，OpenAI Codex 在加密通信上走得最远，Claude Code 在操作防护上更务实。

### 3.3 API 稳定性与成本控制

| 工具 | 核心痛点 |
|------|----------|
| Claude Code | API 限流异常（#38350、#53915、#69358） |
| OpenAI Codex | Token 消耗异常（#14593，616 评论） |
| Gemini CLI | 子代理挂起导致无效 API 调用（#21409） |

API 使用效率和成本透明度是所有工具用户的共同焦虑，OpenAI Codex 的 Token 燃烧问题最为突出。

### 3.4 MCP（Model Context Protocol）生态

| 工具 | MCP 相关 Issue |
|------|----------------|
| Claude Code | MCP 工具调用无超时（#69487） |
| OpenAI Codex | MCP OAuth 序列化栈（#29017-#29021） |
| Gemini CLI | 图像 MIME 类型嗅探（#27850） |

MCP 已成为三家的基础设施层，但各自实现深度不同，OpenAI 在 OAuth 集成上最为激进。

---

## 4. 差异化定位分析

### Claude Code — **企业级安全优先**

- **核心定位：** Anthropic 官方 CLI，强调代码操作的安全性和可控性
- **目标用户：** 企业开发团队、对代码安全有严格要求的个人开发者
- **技术路线：** 以 Git 操作防护为切入点，构建“可信 Agent”能力边界
- **护城河：** 自动模式安全策略、团队协作工具（TeamCreate/TeamDelete）
- **短板：** 移动端功能滞后（多账户切换呼声最高但尚未实现）

### OpenAI Codex — **开发者生产力引擎**

- **核心定位：** 深度集成 OpenAI 生态的代码助手，强调功能丰富度和迭代速度
- **目标用户：** 追求最新 AI 能力的早期采用者、OpenAI 订阅用户
- **技术路线：** 高频 PR 交付、OAuth/MCP 生态快速集成、沙箱安全加固
- **护城河：** Token 消耗量大但功能全、跨平台远程执行、OAuth 生态
- **短板：** Token 消耗问题长期未解决、社区反馈响应周期长

### Gemini CLI — **Agent 智能化探索者**

- **核心定位：** Google AI 生态的实验性 CLI，聚焦 Agent 自主性和记忆系统
- **目标用户：** 愿意尝试前沿功能、对 Agent 行为有定制需求的高级用户
- **技术路线：** 子代理架构、AST 感知工具、内存系统自动化
- **护城河：** AST 感知代码理解、Cloud Run 集成、组件级评估基础设施
- **短板：** Agent 稳定性不足（挂起、误报问题频发）、社区活跃度最低

---

## 5. 社区热度与成熟度

### 热度矩阵

```
                    高互动深度    低互动深度
            ┌─────────────────────────────┐
高 Issue 量  │   Claude Code              │
            │   (352👍/96💬 顶级 Issue)   │
            └─────────────────────────────┘
            ┌─────────────────────────────┐
低 Issue 量  │   OpenAI Codex             │
            │   (616💬 超级热门 Issue)    │
            └─────────────────────────────┘
            ┌─────────────────────────────┐
低 Issue 量  │   Gemini CLI               │
低 PR 量     │   (7💬 最高互动)           │
            └─────────────────────────────┘
```

### 成熟度评估

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **社区规模** | 中高 | 高 | 中低 |
| **Issue 响应速度** | 快（v2.1.183 当日修复） | 慢（#14593 持续数月） | 中 |
| **PR 吞吐量** | 低（4/日） | 极高（50/日） | 中（26/日） |
| **版本稳定性** | 稳健 | 快速迭代中偶有回归 | 构建系统不稳定 |
| **功能完整性** | 高（安全、协作、IDE 集成均衡） | 高（功能全但问题多） | 中（Agent 能力突出但稳定性不足） |
| **商业化成熟度** | 高（企业级定位清晰） | 中（功能驱动但成本问题突出） | 低（实验性定位） |

**结论：**

- **OpenAI Codex** 是“活跃但拥挤的大社区”，高流量带来高曝光但也稀释了官方响应质量
- **Claude Code** 是“小而精的专注社区”，用户反馈能快速转化为产品迭代
- **Gemini CLI** 是“开发者主导的早期社区”，依赖核心贡献者，生态自增长能力弱

---

## 6. 值得关注的趋势信号

### 趋势一：安全从“可选加固”变为“默认刚需”

Claude Code v2.1.183 的自动模式安全策略、OpenAI Codex 的 E2E 加密通道、Gemini CLI 的令牌原子写入，三家同步强化安全基座。这反映出随着 CLI 工具深入生产环境，用户对“AI 误操作导致数据丢失”的容忍度趋近于零。**对开发者的启示：** 在集成 AI CLI 时，安全策略配置应成为默认检查项，而非事后补救。

### 趋势二：跨平台问题进入集中爆发期

三家工具的跨平台 Issue 占比均超过 30%，Windows/macOS/Linux 的行为差异从“边缘问题”演变为“核心痛点”。**对开发者的启示：** 如有多平台部署需求，应优先验证 AI CLI 在目标平台的行为一致性，避免在生产环境遭遇意外。

### 趋势三：Token/API 成本控制成为用户留存关键

OpenAI Codex 的 #14593（616 评论）和 Claude Code 的 API 限流问题表明，用户对 AI 工具的成本感知正在从“好奇”转向“敏感”。**对开发者的启示：** 在企业场景中，建议建立 API 使用监控机制，合理规划请求频率，避免因限流影响 CI/CD 流程。

### 趋势四：MCP 生态成为下一个集成战场

三家均在 MCP 协议上投入资源（OAuth 集成、工具超时、图像处理），MCP 有望成为 AI CLI 工具的“USB 接口”——即插即用的工具扩展标准。**对开发者的启示：** 关注 MCP 工具生态的成熟度，优先选择 MCP 支持完善的工具链，以获得更长的技术生命周期。

### 趋势五：Agent 稳定性决定工具天花板

Gemini CLI 的子代理挂起、Claude Code 的 TeamCreate 回归、OpenAI Codex 的沙箱崩溃——这些问题本质上都是“Agent 执行可靠性”问题。**对开发者的启示：** 在复杂任务编排场景中，应设计降级策略（如超时回退、人工确认），避免 Agent 失控导致系统级风险。

---

**报告结语：**

2026 年中，AI CLI 工具已从“能用”进入“好用”的竞争阶段。Claude Code 以安全为锚稳固企业市场，OpenAI Codex 以功能密度维持开发者吸引力，Gemini CLI 以 Agent 智能化为差异化方向。三家的竞争将逐步从“功能数量”转向“可靠性与成本可控性”，这对技术决策者的选型提出了更高要求——不仅要看功能清单，更要看 Issue 积压量和版本稳定性。

*本报告基于 2026-06-19 公开数据生成，供技术决策参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-06-19**

---

## 1. 热门 Skills 排行

以下为社区关注度最高的 Skills（按 PR 活跃度及功能影响力综合排序）：

| 排名 | Skill 名称 | 功能概述 | 讨论热点 | 状态 |
|:---:|-----------|---------|---------|:----:|
| 1 | **document-typography** | AI 生成文档的排版质量控制，防止孤行、寡段、数字编号错位等问题 | 通用性需求强，覆盖所有文档生成场景 | [OPEN](https://github.com/anthropics/skills/pull/514) |
| 2 | **ODT (OpenDocument)** | 创建、填充、读取 OpenDocument 格式文件（.odt/.ods） | 开放标准文档支持，ISO 标准兼容性 | [OPEN](https://github.com/anthropics/skills/pull/486) |
| 3 | **testing-patterns** | 完整测试栈指南：测试哲学、单元测试、React 组件测试、集成测试 | 覆盖 Testing Trophy 模型，实用性强 | [OPEN](https://github.com/anthropics/skills/pull/723) |
| 4 | **ServiceNow Platform** | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD/CSM/SPM 等企业模块 | 企业级平台集成，需求广泛 | [OPEN](https://github.com/anthropics/skills/pull/568) |
| 5 | **AURELION Suite** | 包含 kernel/advisor/agent/memory 四个子技能的结构化认知框架 | 知识管理与 AI 协作的认知架构 | [OPEN](https://github.com/anthropics/skills/pull/444) |
| 6 | **SAP-RPT-1-OSS** | SAP 开源表格基础模型的预测分析技能 | 企业数据分析场景 | [OPEN](https://github.com/anthropics/skills/pull/181) |
| 7 | **skill-quality-analyzer** | 元技能：评估 Skills 的结构、文档、质量、安全五个维度 | 社区质量标准化需求 | [OPEN](https://github.com/anthropics/skills/pull/83) |
| 8 | **shodh-memory** | AI 代理的持久化记忆系统，跨对话维持上下文 | 长期代理场景核心能力 | [OPEN](https://github.com/anthropics/skills/pull/154) |

---

## 2. 社区需求趋势

从 Issues 中提炼的核心诉求：

### 🔥 企业协作与安全
- **组织内技能共享**（14 条评论，7 👍）— 当前需手动下载/上传，亟需内置共享机制
  - [Issue #228](https://github.com/anthropics/skills/issues/228)
- **命名空间信任滥用**（7 条评论）— 社区技能冒充 `anthropic/` 官方命名空间的安全隐患
  - [Issue #492](https://github.com/anthropics/skills/issues/492)

### 🛠️ 开发者体验痛点
- **skill-creator 质量优化循环失效**（12 条评论，7 👍）— `run_eval.py` 报告 0% 触发率，优化无效
  - [Issue #556](https://github.com/anthropics/skills/issues/556)
- **Windows 兼容性**（多条相关 Issue）— subprocess PATHEXT、编码、管道读取三大问题
  - [Issue #1061](https://github.com/anthropics/skills/issues/1061)
  - [Issue #1099](https://github.com/anthropics/skills/pull/1099)

### 📄 文档与格式处理
- **多格式文档支持** — ODT、PDF、DOCX 修复频繁，需求持续
- **SharePoint Online 集成安全**（4 条评论）— 权限控制与上下文窗口管理
  - [Issue #1175](https://github.com/anthropics/skills/issues/1175)

### 🏗️ 新 Skill 提案方向
- **agent-governance** — AI 代理治理模式：策略执行、威胁检测、审计追踪
  - [Issue #412](https://github.com/anthropics/skills/issues/412)（已 CLOSED）
- **compact-memory** — 符号化记忆表示，压缩代理状态占用
  - [Issue #1329](https://github.com/anthropics/skills/issues/1329)

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或修复关键问题，预计近期合并：

| PR | 内容 | 活跃度 | 合并优先级 |
|:--:|------|--------|:----------:|
| **#1298** | 修复 `run_eval.py` 报告 0% recall 的根本问题，安装评估产物为真实技能，修复 Windows 流读取 | 2026-06-10 更新，1 条评论 | ⭐⭐⭐⭐⭐ |
| **#361** | 检测 YAML 描述字段中未转义的特殊字符（`: # { } [ ]`） | 2026-06-10 更新 | ⭐⭐⭐⭐ |
| **#362** | 修复多字节字符导致的 UTF-8 panic，改用字节长度验证 | 2026-06-10 更新 | ⭐⭐⭐⭐ |
| **#539** | `skill-creator` 预解析验证：检测未加引号的 YAML 冒号 | 2026-04-16 更新 | ⭐⭐⭐ |
| **#541** | 修复 DOCX tracked change 与现有书签的 `w:id` 冲突 | 2026-04-16 更新 | ⭐⭐⭐ |
| **#538** | 修复 PDF SKILL.md 中大小写敏感的文件引用 | 2026-04-29 更新 | ⭐⭐ |
| **#509** | 添加 CONTRIBUTING.md，提升社区健康指标 | 2026-03-19 更新 | ⭐⭐ |

> **注**：PR #1298 由 @MartinCajiao 于 2026-06-10 提交，修复了困扰社区数月的 `run_eval.py` 核心 bug，是当前最关键的待合并项。

---

## 4. Skills 生态洞察

### 一句话总结

> **社区当前最集中的诉求是「企业级协作能力」与「开发者工具质量」的双重补强——既需要组织内技能共享、跨平台兼容等基础设施完善，也需要 skill-creator 评估循环、YAML 验证等开发体验问题的系统性修复。**

### 关键发现

1. **格式处理是硬需求** — ODT、PDF、DOCX、Typography 等文档处理 Skill 持续涌现，反映 Claude Code 在文档生成场景的深度应用
2. **Windows 用户被忽视** — 至少 3 个 PR 独立修复 Windows 兼容性问题，说明跨平台支持存在系统性短板
3. **元技能（Meta-Skills）兴起** — skill-quality-analyzer、skill-security-analyzer 的出现表明社区开始关注 Skill 本身的工程质量
4. **企业集成需求旺盛** — ServiceNow、SAP、SharePoint 等企业平台 Skill 反映 Claude Code 正在向企业场景渗透

---

*报告生成时间：2026-06-19 | 数据来源：github.com/anthropics/skills*

---

# Claude Code 社区动态日报

**日期：** 2026-06-19  
**数据来源：** github.com/anthropics/claude-code

---

## 1. 今日速览

今日 Claude Code 社区共更新 **49 个 Issues** 和 **4 个 Pull Requests**。**v2.1.183** 版本发布，重点增强了自动模式安全性，阻止未经授权的破坏性 Git 操作。社区讨论焦点集中在 **API 限流问题**、**多平台 UI 渲染异常**以及**移动端多账户切换**功能需求上。

---

## 2. 版本发布

### v2.1.183

**发布时间：** 2026-06-19

**更新内容：**
- **增强自动模式安全性**：当用户未主动要求丢弃本地工作时，自动阻止以下破坏性 Git 命令：
  - `git reset --hard`
  - `git checkout -- .`
  - `git clean -fd`
  - `git stash drop`
- **Git commit 管理**：阻止对非本会话由 Agent 创建的 commit 执行 `git commit --amend`

> 📎 [查看 Release 详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.183)

---

## 3. 社区热点 Issues

### 🔥 Top 10 最值得关注

| # | Issue | 标题 | 重要性 | 链接 |
|---|-------|------|--------|------|
| 1 | **#36151** | Multi-account switching in Claude Mobile app | 社区呼声最高的功能请求，352 👍 96 💬 | [🔗](https://github.com/anthropics/claude-code/issues/36151) |
| 2 | **#38350** | Abnormal / inflated rate limit / session usage | API 使用异常导致大量讨论，63 💬 | [🔗](https://github.com/anthropics/claude-code/issues/38350) |
| 3 | **#26302** | Claude Desktop UI lag and mouse stutter (Windows) | 严重性能回归问题，43 💬 | [🔗](https://github.com/anthropics/claude-code/issues/26302) |
| 4 | **#20944** | Add Setting to Disable Automatic IDE Selection | 58 👍，用户强烈需求 | [🔗](https://github.com/anthropics/claude-code/issues/20944) |
| 5 | **#68721** | TeamCreate / TeamDelete tools regression (v2.1.178) | 原生团队管理工具失效，15 💬 | [🔗](https://github.com/anthropics/claude-code/issues/68721) |
| 6 | **#53915** | API Rate limited error (Windows/VSCode) | 跨平台 API 限流问题，57 💬 | [🔗](https://github.com/anthropics/claude-code/issues/53915) |
| 7 | **#69358** | No Response From API 2.1.181 (Linux) | API 响应问题持续，12 👍 | [🔗](https://github.com/anthropics/claude-code/issues/69358) |
| 8 | **#69238** | No response from API when Advisor triggered (macOS) | Advisor 触发时 API 无响应，6 💬 | [🔗](https://github.com/anthropics/claude-code/issues/69238) |
| 9 | **#47098** | New sessions never hit cache (Linux) | 缓存机制失效，12 💬 | [🔗](https://github.com/anthropics/claude-code/issues/47098) |
| 10 | **#69487** | MCP tool call wedges indefinitely without timeout | MCP 工具调用无超时机制，1 💬 | [🔗](https://github.com/anthropics/claude-code/issues/69487) |

**重点 Issue 摘要：**

**#36151 - 多账户切换（功能请求）**
用户强烈要求在 Claude Mobile 应用中实现多账户切换功能，无需共享邮箱。目前用户需要在多个账户间切换时面临诸多不便，这是目前社区最热门的功能需求。

**#38350 / #53915 / #69358 - API 限流问题**
多个平台（Windows、Linux、macOS）用户报告 API 限流异常，即使在正常使用情况下也遭遇 "Server is temporarily limiting requests" 错误。这是影响用户体验的核心问题。

**#26302 - Windows UI 性能回归**
Claude Desktop 1.1.3189 版本出现严重的 UI 延迟和鼠标抖动问题，用户反馈这是更新后的性能回归。

**#68721 - 团队工具回归**
v2.1.178 版本中 `TeamCreate` 和 `TeamDelete` 原生团队管理工具不再可用，影响多 Agent 协作场景。

---

## 4. 重要 PR 进展

| # | PR | 标题 | 状态 | 链接 |
|---|-----|------|------|------|
| 1 | **#69470** | Fix lock-closed-issues workflow | ✅ CLOSED | [🔗](https://github.com/anthropics/claude-code/pull/69470) |
| 2 | **#45553** | resolve duplicate IPs | 🔄 OPEN | [🔗](https://github.com/anthropics/claude-code/pull/45553) |
| 3 | **#68673** | fix pagination when page is not full | 🔄 OPEN | [🔗](https://github.com/anthropics/claude-code/pull/68673) |
| 4 | **#23972** | hookify Python 3.8 compat and cwd-independent rule loading | 🔄 OPEN | [🔗](https://github.com/anthropics/claude-code/pull/23972) |

**PR 详情：**

**#69470 - 修复 Lock Stale Issues 工作流** ✅
- **问题**：Lock Stale Issues 定时工作流自 2026-04-27 起连续失败 53 次
- **修复**：改用 Search API 替代 offset pagination
- **状态**：已合并

**#23972 - hookify Python 3.8 兼容性修复**
- 修复 `TypeError: 'type' object is not subscriptable` 问题
- 支持 Ubuntu 20.04 默认的 Python 3.8 环境
- 实现 cwd 无关的规则加载

**#68673 - 分页逻辑修复**
- 修复分页在页面未满（非空）时中断的问题

---

## 5. 功能需求趋势

基于今日 Issues 分析，社区最关注的功能方向如下：

| 趋势 | 说明 | 相关 Issue |
|------|------|-----------|
| **🔐 安全性增强** | 用户对自动模式安全性有更高期待，希望防止误操作导致的代码丢失 | #36151 (v2.1.183 已实现) |
| **📱 移动端功能** | 多账户切换、深链接启动、跨设备同步等移动端增强需求旺盛 | #36151, #54614, #69485 |
| **⚡ 性能优化** | UI 渲染、API 响应速度、模型推理性能是持续痛点 | #26302, #68820, #69238 |
| **🔌 IDE 集成** | JetBrains 插件、VSCode 终端体验、IDE 上下文自动选择控制 | #47166, #20944 |
| **🛠️ MCP 生态** | MCP 工具超时机制、连接稳定性、工具可见性等问题 | #69487, #69324, #63348 |
| **💰 成本控制** | API 使用量、缓存效率、rate limit 透明度 | #38350, #47098, #20944 |
| **🐛 跨平台一致性** | Windows/macOS/Linux 行为差异和回归问题 | #26073, #68721, #48435 |

---

## 6. 开发者关注点

### 核心痛点

1. **API 限流频繁**
   - 多平台用户报告 API 请求被意外限流
   - 建议：关注官方状态页面，合理规划请求频率

2. **跨平台稳定性**
   - Windows 端 UI 卡顿、macOS 端文本渲染异常、Linux 端缓存失效
   - 建议：关注版本更新日志，必要时回退稳定版本

3. **MCP 工具可靠性**
   - 工具调用无超时机制、连接握手失败
   - 建议：检查 MCP 服务器状态和认证配置

### 高频需求

| 需求 | 优先级 | 建议 |
|------|--------|------|
| 多账户切换 | ⭐⭐⭐⭐⭐ | 关注官方 Roadmap |
| IDE 选择控制 | ⭐⭐⭐⭐ | 可通过配置临时 workaround |
| 团队协作工具 | ⭐⭐⭐⭐ | 关注 v2.1.178+ 回归修复 |
| 缓存机制优化 | ⭐⭐⭐ | 关注后续版本更新 |

---

**📅 明日预告：** 持续关注 v2.1.183 自动模式安全性的用户反馈，以及 API 限流问题的官方响应。

*本报告由 AI 自动生成，数据截止至 2026-06-19 24:00 UTC*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**: 2026-06-19  
**数据来源**: github.com/openai/codex

---

## 1. 今日速览

今日 Codex 社区继续保持高度活跃，共新增 26 个 Issues 和 50 个 Pull Requests。**版本方面**，rust-v0.141.0 正式发布，引入端到端加密的远程执行通道，显著提升安全性。**社区热点**集中在 Token 消耗过快（#14593 累计 616 条评论）、macOS 系统进程资源占用异常、以及 Windows 平台沙箱兼容性问题。**代码推进**方面，OAuth/MCP 相关功能成为 PR 重点，多个 PR 形成功能栈集中提交。

---

## 2. 版本发布

### rust-v0.141.0 ✅ 已发布

**主要更新**：

| 功能 | 说明 |
|------|------|
| 🔐 加密通信 | 远程执行器现使用认证的端到端加密 Noise 中继通道 |
| 🖥️ 跨平台兼容 | 跨平台远程执行保留执行器原生工作目录和 shell，包括文件系统权限路径跨 app-server 和 exec-server 边界 |

> 📎 Release: https://github.com/openai/codex/releases/tag/rust-v0.141.0

**预览版本**：rust-v0.142.0-alpha.1/2/3 已发布，建议非生产环境测试。

---

## 3. 社区热点 Issues

### 🔥 Top 10 最值得关注

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|----------|
| 1 | **[#14593](https://github.com/openai/codex/issues/14593) Token燃烧速度极快** | ⭐⭐⭐⭐⭐ | 616评论 / 271👍，最热门问题，涉及所有平台 |
| 2 | **[#25719](https://github.com/openai/codex/issues/25719) macOS触发syspolicyd/trustd CPU/内存失控** | ⭐⭐⭐⭐ | 33评论 / 40👍，严重影响Mac用户 |
| 3 | **[#28988](https://github.com/openai/codex/issues/28988) Full Access模式持续请求权限** | ⭐⭐⭐⭐ | 9评论 / 6👍，最新版本回归问题 |
| 4 | **[#28997](https://github.com/openai/codex/issues/28997) logs_2.sqlite-wal无限增长至数十GB** | ⭐⭐⭐⭐ | 存储泄漏问题，影响磁盘空间 |
| 5 | **[#14601](https://github.com/openai/codex/issues/14601) 防止配置污染：分离projects.xxxx.trusted_level** | ⭐⭐⭐ | 15评论 / 43👍，配置管理增强需求 |
| 6 | **[#28978](https://github.com/openai/codex/issues/28978) 新对话失败：missing field `inputSchema`** | ⭐⭐⭐ | MCP相关，桌面应用回归 |
| 7 | **[#28245](https://github.com/openai/codex/issues/28245) Windows因cua_node运行时设置不完整崩溃** | ⭐⭐⭐ | Windows用户受阻 |
| 8 | **[#28971](https://github.com/openai/codex/issues/28971) PowerShell命令被BitDefender阻止** | ⭐⭐⭐ | 安全软件冲突 |
| 9 | **[#28982](https://github.com/openai/codex/issues/28982) Windows原生沙箱设置助手失败** | ⭐⭐ | 沙箱初始化问题 |
| 10 | **[#15777](https://github.com/openai/codex/issues/15777) Windows沙箱安装破坏AppData ACL** | ⭐⭐ | 系统权限问题 |

### 重点问题摘要

**#14593 - Token燃烧速度极快**
- 影响版本：26.311.21342
- 平台：Windows 10/11
- 订阅：Business
- 核心问题：用户报告 Token 消耗异常迅速，疑似存在泄漏或重复调用问题
- 社区状态：持续讨论中，官方尚未确认根因

**#25719 - macOS 系统进程资源失控**
- 影响版本：26.527.60818 (build 3437)
- 平台：Darwin 25.5.0 arm64
- 核心问题：Codex Desktop 触发 `syspolicyd` 和 `trustd` 进程 CPU/内存飙升
- 影响：MacBook 电池续航显著下降

---

## 4. 重要 PR 进展

### 🔧 Top 10 关键 Pull Requests

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | **[#29035](https://github.com/openai/codex/pull/29035) 优化文件系统线程列表** | 性能 | 避免在缓存命中时仍进行文件系统扫描 |
| 2 | **[#29022](https://github.com/openai/codex/pull/29022) 支持受保护资源OAuth发现** | 认证 | 统一OAuth发现实现，修复服务器发现差异 |
| 3 | **[#29017-#29021](https://github.com/openai/codex/pulls?q=is%3Apr+is%3Aopen+oauth) MCP OAuth序列化栈** | 认证 | 序列化MCP OAuth刷新、登录、注销和存储 |
| 4 | **[#29006](https://github.com/openai/codex/pull/29006) 模型上下文外保留技能描述** | 功能 | 1024字符限制仅应用于模型可见上下文 |
| 5 | **[#29038](https://github.com/openai/codex/pull/29038) 更新策略措辞** | 文档 | 明确敏感数据移动和用户授权边界 |
| 6 | **[#28787](https://github.com/openai/codex/pull/28787) 引入传输中立会话运行时** | 架构 | 为代码模式会话所有权提取独立传输层 |
| 7 | **[#28683](https://github.com/openai/codex/pull/28683) 在快照中跟踪启动环境** | 稳定性 | 远程环境连接优化，减少启动等待 |
| 8 | **[#28489](https://github.com/openai/codex/pull/28489) 添加索引网页搜索模式** | 功能 | 新增 `web_search = "indexed"` 选项 |
| 9 | **[#29014](https://github.com/openai/codex/pull/29014) 启动时尊重自定义CA证书** | 安全 | 支持企业自定义CA配置 |
| 10 | **[#29013](https://github.com/openai/codex/pull/29013) 保护托管MITM CA私钥** | 安全 | 防止沙箱命令访问私钥 |

### 重点 PR 摘要

**#29035 - 优化文件系统线程列表**
- 作者：`@friel-openai`
- 问题：线程列表在缓存命中时仍解析数千个摘要文件
- 解决：优化 `thread/list` 逻辑，减少不必要的文件系统读取

**#29017-#29021 - MCP OAuth 序列化栈**
- 作者：`@stevenlee-oai`
- 内容：完整的 OAuth 生命周期管理（刷新、登录、注销、存储）
- 状态：多个 PR 形成栈式依赖，协同提交

**#28787 - 传输中立会话运行时**
- 作者：`@cconger`
- 目标：为代码模式会话准备独立进程传输
- 意义：架构层面的解耦，为未来扩展奠基

---

## 5. 功能需求趋势

基于 26 个 Issues 的分析，社区关注的功能方向如下：

### 📊 功能方向分布

| 方向 | 占比 | 代表 Issue |
|------|------|------------|
| **平台兼容性** | 35% | macOS/Windows 特定问题 |
| **沙箱/安全** | 25% | 权限、ACL、OAuth |
| **性能/资源** | 20% | Token消耗、内存泄漏、进程管理 |
| **CLI/TUI 体验** | 10% | 键盘导航、上下文窗口 |
| **配置管理** | 10% | 配置分离、base_url 配置 |

### 🔑 核心趋势

1. **跨平台一致性需求强烈**：Windows 和 macOS 平台问题占比最高，用户期望一致的体验
2. **沙箱安全成为焦点**：多个 Issue 涉及沙箱权限、ACL 破坏、OAuth 安全
3. **资源消耗敏感**：Token 燃烧速度、SQLite WAL 增长、进程资源占用等问题引发广泛讨论
4. **CLI 功能完善**：统一提及菜单导航、上下文合并等 CLI 增强需求

---

## 6. 开发者关注点

### 🎯 高频痛点

| 痛点 | 出现频次 | 影响范围 |
|------|----------|----------|
| 权限请求循环 | 高 | macOS/Windows |
| Token 异常消耗 | 极高 | 全平台 |
| 沙箱初始化失败 | 中 | Windows 为主 |
| 存储泄漏 | 中 | CLI 用户 |
| 平台特定崩溃 | 中 | Windows/macOS |

### 💡 开发者建议

1. **优先修复 Token 消耗问题**：#14593 持续发酵，影响用户信任
2. **加强沙箱稳定性**：Windows 沙箱问题影响新用户 onboarding
3. **统一跨平台行为**：减少 Windows/macOS 功能差异
4. **完善错误信息**：多个 Issue 反馈错误提示不够明确
5. **优化资源监控**：建议增加内置资源使用统计

### 📈 社区活跃度

- **Issues 总量**：26 个（过去24小时）
- **PR 总量**：50 个（过去24小时）
- **最活跃 Issue**：#14593（616 评论）
- **最高点赞 Issue**：#14593（271 👍）

---

> 📅 本报告基于 2026-06-19 GitHub 数据自动生成  
> 🔗 所有链接指向 github.com/openai/codex

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-06-19

---

## 1. 今日速览

昨夜构建系统出现故障，**v0.49.0-nightly 版本发布失败**（#28028），需关注后续修复进展。社区活跃度保持高位，单日新增 50 条 Issues 和 26 条 Pull Requests。核心焦点集中在 **Agent 稳定性**（子代理挂起、内存系统缺陷）和 **安全性修复**（MCP OAuth 令牌原子写入）两大方向。

---

## 2. 版本发布

**无新版本发布**

昨夜构建失败，当前最新稳定版本仍为 v0.48.0-preview.0（相关变更日志见 PR #27999）。

---

## 3. 社区热点 Issues

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|----------|
| 1 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** - 通用代理挂起问题 | ⭐⭐⭐ P1 | 7 评论，8 👍。用户反馈代理在执行简单操作（如创建文件夹）时无限挂起，最长等待超过 1 小时。临时解决方案是禁用子代理调用。 |
| 2 | **[#27325](https://github.com/google-gemini/gemini-cli/issues/27325)** - 自定义命令迁移咨询 | ⭐⭐⭐ | 7 评论，4 👍。用户拥有大量基于 `commands` 文件夹的自定义命令，询问迁移至 Antigravity CLI 时是否必须转换为 Skills。社区对此高度关注。 |
| 3 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** - 组件级评估 EPIC | ⭐⭐⭐ P1 | 7 评论。Epic 追踪 76 个行为评估测试的执行情况，旨在提升评估基础设施的鲁棒性。 |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** - AST 感知文件读取调研 | ⭐⭐⭐ P2 | 7 评论，1 👍。探索 AST 感知工具是否能提升代码导航精度、减少 token 消耗。 |
| 5 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** - 子代理 MAX_TURNS 后误报成功 | ⭐⭐⭐ P1 | 6 评论，2 👍。子代理在达到最大轮次后仍报告 `GOAL` 成功状态，掩盖了实际中断。 |
| 6 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** - Gemini 不主动使用 Skills | ⭐⭐⭐ P2 | 6 评论。用户反馈模型几乎不会自发调用自定义 Skills 和子代理，需显式指令才能触发。 |
| 7 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** - 自动内存重编辑风险 | ⭐⭐⭐ P2 | 5 评论。自动内存读取本地记录后才进行脱敏，存在信息泄露风险。 |
| 8 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** - 自动内存无限重试低信号会话 | ⭐⭐⭐ P2 | 5 评论。自动内存对低质量会话反复处理，可能导致资源浪费。 |
| 9 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** - Shell 命令完成后卡住 | ⭐⭐⭐ P1 | 4 评论，3 👍。Shell 命令执行完毕后界面仍显示"等待输入"，命令实际已结束。 |
| 10 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** - 浏览器子代理在 Wayland 失败 | ⭐⭐⭐ P1 | 4 评论，1 👍。Wayland 环境下的浏览器子代理异常终止。 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | **[#27664](https://github.com/google-gemini/gemini-cli/pull/27664)** | 🔒 安全修复 | **MCP OAuth 令牌原子写入** - 通过临时文件 + 原子重命名确保令牌写入原子性，防止并发写入损坏。已合并。 |
| 2 | **[#27848](https://github.com/google-gemini/gemini-cli/pull/27848)** | ✨ 新功能 | **新增 `gemini models` 命令** - 列出所有可用 Gemini 模型、上下文窗口限制及所属层级（Pro/Flash 等），支持人类可读和 JSON 输出。 |
| 3 | **[#27850](https://github.com/google-gemini/gemini-cli/pull/27850)** | 🐛 修复 | **MCP 图像 MIME 类型嗅探** - 修复 WebP 数据被错误声明为 `image/png` 的问题，自动识别真实格式。 |
| 4 | **[#27845](https://github.com/google-gemini/gemini-cli/pull/27845)** | 🐛 修复 | **文件夹信任提示提前** - 在认证流程前增加文件夹信任确认，确保工作区设置正确加载。 |
| 5 | **[#28000](https://github.com/google-gemini/gemini-cli/pull/28000)** | 🐛 修复 | **Jupyter Notebook 和 JSON 写入损坏问题** - 修复 `write_file` 工具静默损坏 `.ipynb` 和 JSON 文件的严重 bug。 |
| 6 | **[#28015](https://github.com/google-gemini/gemini-cli/pull/28015)** | ✨ 新功能 | **Cloud Run Webhook 摄入服务** - 为 Caretaker Agent 实现 GitHub Webhook 入口，支持签名验证、Firestore 存储和 Pub/Sub 发布。 |
| 7 | **[#27996](https://github.com/google-gemini/gemini-cli/pull/27996)** | 🐛 修复 | **响应体编码修复** - `web-fetch` 之前忽略 Content-Type 中的 charset 参数，导致 GBK/ISO-8859-1 等编码页面乱码。 |
| 8 | **[#28013](https://github.com/google-gemini/gemini-cli/pull/28013)** | 🐛 修复 | **提示符替换中的 `$` 模式损坏** - 修复 `applySubstitutions` 中 `$` 前缀模式被错误解释的问题。 |
| 9 | **[#27678](https://github.com/google-gemini/gemini-cli/pull/27678)** | 🐛 修复 | **隐藏忽略的文件夹** - 将 `.gitignore` / `.geminiignore` 中的目录从会话上下文目录树中移除。已合并。 |
| 10 | **[#27494](https://github.com/google-gemini/gemini-cli/pull/27494)** | 🔧 测试改进 | **Vitest 跨平台兼容性** - 更新集成测试配置以提升跨平台 CI 兼容性。已合并。 |

---

## 5. 功能需求趋势

基于 50 条 Issues 分析，社区关注的功能方向如下：

| 方向 | 热度 | 代表 Issue |
|------|------|------------|
| **Agent 稳定性与智能** | 🔥🔥🔥 | 子代理挂起(#21409)、不主动使用 Skills(#21968)、MAX_TURNS 误报(#22323) |
| **内存系统优化** | 🔥🔥🔥 | 自动内存重编辑(#26525)、无限重试(#26522)、无效补丁处理(#26523) |
| **浏览器子代理** | 🔥🔥 | Wayland 失败(#21983)、设置覆盖失效(#22267)、会话接管(#22232) |
| **AST 感知工具** | 🔥🔥 | 文件读取/搜索/映射(#22745/#22746/#22747) |
| **评估基础设施** | 🔥 | 组件级评估(#24353)、内部评估稳定化(#23166) |
| **安全与隐私** | 🔥 | 令牌原子写入(#27664)、重编辑风险(#26525) |
| **IDE 集成** | 🔧 | VSCode 伴侣依赖更新(#28023) |

---

## 6. 开发者关注点

### 核心痛点

1. **Agent 行为不可预测**
   - 子代理经常挂起或误报成功状态
   - 模型不主动调用自定义 Skills，需手动干预
   - 浏览器子代理在非标准环境（Wayland）下失败

2. **内存系统缺陷**
   - 自动内存存在重编辑风险（先读取后脱敏）
   - 低质量会话触发无限重试循环
   - 无效补丁被静默忽略，缺乏可见性

3. **Shell 执行问题**
   - 命令完成后界面仍显示"等待输入"
   - 交互式命令（如 Vite 创建）导致卡死

### 高频需求

| 需求 | 出现次数 | 说明 |
|------|----------|------|
| 提升 Agent 自主性 | 4+ | 让模型更智能地调用 Skills/子代理 |
| 增强评估覆盖 | 3+ | 组件级评估、行为测试稳定性 |
| 跨平台兼容性 | 2+ | Wayland 支持、编码处理、测试框架 |
| 安全性加固 | 2+ | 令牌管理、敏感信息处理 |

---

**📌 行动建议**：
- 关注 #21409（通用代理挂起）和 #25166（Shell 卡住）的修复进展
- 如使用自定义 Skills，注意 #21968 描述的调用限制问题
- 昨夜构建失败，预计近期将有补丁版本发布

---

*报告生成时间: 2026-06-19 | 数据来源: github.com/google-gemini/gemini-cli*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*