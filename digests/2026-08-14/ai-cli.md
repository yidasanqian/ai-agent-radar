# AI CLI 工具社区动态日报 2026-08-14

> 生成时间: 2026-08-14 01:54 UTC | 覆盖工具: 3 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具横向对比分析报告
**日期：2026-08-14**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **多代理协同 + 企业级集成** 的双主线竞争阶段。三大主流工具（Claude Code、OpenAI Codex、Gemini CLI）均围绕"会话/线程管理"和"多代理编排"密集迭代，但侧重点明显分化：Anthropic 押注 **Subagent Forking 与跨会话通信**，OpenAI 强化 **多提供商生态（Bedrock）与 App Server 队列化**，Google 则深耕 **Subagent 可靠性与评估基础设施**。与此同时，**Desktop 端稳定性**（macOS/Windows）、**MCP 集成健壮性**、**Token 计费透明度** 成为横跨三家社区的共性痛点，暴露出快速功能迭代与生产可用性之间的张力。

---

## 2. 各工具活跃度对比

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **今日 Release** | 2 个（v2.1.231, v2.1.232） | 4 个 alpha（0.148.0-alpha.11 → alpha.14） | 1 个 nightly（v0.56.0-nightly.20260814） |
| **热点 Issues 数** | 10 | 10 | 10 |
| **最高评论数** | 94（#84352） | 21（#26984） | 12（#22323） |
| **最高 👍 数** | 21（#24798） | 12（#31553） | 8（#21409） |
| **重要 PR 数** | 2 | 10+ | 10 |
| **PR 合并节奏** | 低（24h 仅 2 条） | 高（20+ 合并） | 中（10 条，含安全修复） |
| **核心焦点** | 跨会话消息回归 | Bedrock/队列化/MCP OAuth | Subagent 可靠性 + 安全 |

**活跃度排序**：OpenAI Codex > Gemini CLI > Claude Code（按 PR 合并与版本迭代节奏）

---

## 3. 共同关注的功能方向

| 方向 | Claude Code | OpenAI Codex | Gemini CLI | 共识强度 |
|------|:---:|:---:|:---:|:---:|
| **多代理/会话协同** | ✅ 核心（@提及、Forking） | ✅ 核心（Multi-Agent V2、Thread Queue） | ✅ 核心（Subagent 可靠性） | 🔥🔥🔥🔥🔥 |
| **MCP 生态完善** | ✅ OAuth 修复 | ✅ stdio fd 泄漏、回调端口 | ✅ 配置损坏处理 | 🔥🔥🔥🔥 |
| **Desktop 稳定性** | ✅ Windows/MSIX 回归 | ✅ macOS OOM、Windows 断电 | ✅ Wayland/WSL2 | 🔥🔥🔥🔥 |
| **上下文/Token 计费** | ✅ advisor() 双计费 | ⚪ 未见明显反馈 | ⚪ 未见明显反馈 | 🔥🔥 |
| **可观测性/遥测** | ✅ OTLP 认证头 | ✅ codex.retry 结构化事件 | ✅ 行为评估体系 | 🔥🔥🔥 |
| **安全与合规** | ✅ Cyber Safeguard 误伤 | ✅ Guardian V2 上下文 | ✅ 供应链 RCE、CVE-2026-28292 | 🔥🔥🔥🔥 |
| **后台进程/长任务管理** | ⚪ 未见明显反馈 | ✅ #2062、Ctrl-C 退出选项 | ⚪ 未见明显反馈 | 🔥🔥 |

**关键洞察**：**多代理协同** 是三家共识最强的方向，但实现路径迥异——Claude Code 走"会话间消息"路线，Codex 走"线程队列 + App Server API"路线，Gemini CLI 走"Subagent 可靠性修复"路线。

---

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **核心定位** | 深度集成 Claude 模型的智能编码助手 | 多模型/多云的企业级编码平台 | 深度绑定 Gemini 模型的实验性 CLI |
| **目标用户** | 追求前沿能力的个人/小团队开发者 | 企业多云策略、自动化场景用户 | Google 生态开发者、模型行为研究者 |
| **技术路线亮点** | Subagent Forking + 跨会话 @提及 | App Server 线程队列 + Bedrock Runtime | 组件级行为评估 + AST 感知工具 |
| **生态策略** | 强化 MCP + Claude 生态闭环 | 开放多提供商（Bedrock、Ollama 筹备） | 跨模型定义（已引入 Claude Sonnet 4.5/Opus 4.8） |
| **当前短板** | Desktop 回归潮未修复 | macOS 性能塌方、Windows 脆弱 | Subagent 行为不可预测 |
| **安全姿态** | Cyber Safeguard 偏激进 | Guardian V2 上下文感知 | 供应链安全响应迅速（24h 内修复 CVE） |

---

## 5. 社区热度与成熟度

### 社区热度（按评论数与 👍 数综合判断）

| 工具 | 热度等级 | 特征 |
|------|---------|------|
| **Claude Code** | 🔥🔥🔥🔥🔥 | 单 issue 评论数最高（94），企业合规话题引爆讨论 |
| **OpenAI Codex** | 🔥🔥🔥🔥 | PR 合并最活跃，issue 覆盖面广但单点热度分散 |
| **Gemini CLI** | 🔥🔥🔥 | 讨论深度高但覆盖面相对集中于 Subagent/安全 |

### 成熟度评估

- **Claude Code**：功能前沿但 **生产可用性承压**——v2.1.227 跨会话消息回归已积累 10+ 重复 issue，2.1.231/232 仍未根治
- **OpenAI Codex**：**迭代速度最快**——24h 内 4 个 alpha 版本，但 macOS Desktop 26.810.41047 出现严重资源泄漏（316 线程、V8 OOM）
- **Gemini CLI**：**质量基础设施最扎实**——76 个行为评估测试 + 组件级评估体系，但 Subagent 可靠性仍是 P1 痛点

---

## 6. 值得关注的趋势信号

### 📈 趋势一：多代理协同从"功能"走向"生产刚需"
- Claude Code #24798 持续 6 个月、66 条评论，是社区最强烈呼声
- Codex 新增 `thread/queue` API、Multi-Agent V2 持续演进
- Gemini CLI Subagent 相关 issue 占今日热点 40%
- **对开发者的参考价值**：单一 Agent 已无法满足复杂工作流需求，工具选型应优先评估多代理编排能力的成熟度

### 📈 趋势二：MCP 正在成为事实标准，但稳定性滞后
- 三家均投入 MCP 修复：Claude Code 修 OAuth redirect、Codex 修 stdio fd 泄漏 + 回调端口、Gemini CLI 修配置损坏
- Codex #26984 的 `EMFILE` 问题影响所有重度 MCP 用户
- **对开发者的参考价值**：MCP 集成是必选项，但需自行处理 fd 泄漏、端口冲突等底层问题

### 📈 趋势三：Desktop 端成为体验短板
- Claude Code：Windows/MSIX 升级链路脆弱、跨会话消息静默失败
- Codex：macOS 26.810.41047 性能塌方、Windows 断电数据丢失
- Gemini CLI：Wayland/WSL2 兼容性、长尾平台支持不足
- **对开发者的参考价值**：CLI 工具的 Desktop 形态尚未成熟，生产环境建议优先使用 CLI/TUI 形态

### 📈 趋势四：可观测性与计费透明度成为信任基石
- Claude Code `advisor()` 双计费问题（#53065、#81620）触发自动压缩过早
- Codex 新增 `codex.retry` 结构化事件、模型退役时间暴露
- Gemini CLI 推进行为评估体系建设
- **对开发者的参考价值**：长上下文场景下，Token 计费透明度与可观测性直接影响成本控制

### 📈 趋势五：安全响应速度成为差异化竞争力
- Gemini CLI 24h 内修复 CVE-2026-28292（CRITICAL）+ 供应链 RCE
- Codex Guardian V2 升级到"动作+上下文"级风险评估
- Claude Code Cyber Safeguard 误伤合规用户（#84352）暴露策略过激问题
- **对开发者的参考价值**：安全策略需平衡防护强度与误报率，企业用户应关注工具的安全可配置性

---

## 总结建议

| 用户类型 | 推荐工具 | 理由 |
|---------|---------|------|
| **追求前沿多代理能力** | Claude Code | @提及 + Forking 是当前最完整的多代理通信方案（需规避 Desktop 回归） |
| **企业多云/自动化场景** | OpenAI Codex | Bedrock 支持 + App Server 队列化 + 结构化遥测 |
| **重视质量与安全** | Gemini CLI | 行为评估体系 + 快速安全响应 |
| **重度 MCP 用户** | 暂缓或自建补丁 | 三家均存在 MCP 稳定性问题，建议关注 #26984 修复进展 |

**核心结论**：2026 年 Q3 的 AI CLI 竞争已从"模型能力"转向"工程化能力"——多代理编排、可观测性、安全可配置性、跨平台稳定性 成为新的分水岭。开发者选型时应从"模型谁更强"转向"谁的工程化更扎实"。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-08-14** | 数据源：[anthropics/skills](https://github.com/anthropics/skills)

---

## 1. 热门 Skills 排行（按社区关注度）

| # | Skill | 核心功能 | 状态 | 链接 |
|---|-------|---------|------|------|
| 1 | **skill-creator 修复（#1298）** | 修复 `run_eval.py` 始终报告 0% recall 的核心 bug，影响 description 优化闭环；同步修复 Windows 流读取、触发检测与并行 worker | OPEN | [#1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **document-typography（#514）** | 文档排版质量控制：孤行/寡行控制、章节标题防孤段、编号对齐——直击 AI 生成文档的"看起来不专业"痛点 | OPEN | [#514](https://github.com/anthropics/skills/pull/514) |
| 3 | **skill-quality-analyzer & skill-security-analyzer（#83）** | 元技能：五维度质量评估 + 安全审计，填补 Skills 自审工具空白 | OPEN | [#83](https://github.com/anthropics/skills/pull/83) |
| 4 | **frontend-design 改进（#210）** | 重构 frontend-design skill，提升指令可执行性与内部一致性 | OPEN | [#210](https://github.com/anthropics/skills/pull/210) |
| 5 | **ODT Skill（#486）** | OpenDocument 格式（.odt/.ods）创建、模板填充、HTML 解析，补齐开源文档格式支持 | OPEN | [#486](https://github.com/anthropics/skills/pull/486) |
| 6 | **self-audit（#1367）** | 交付前自审：先机械校验文件存在性，再按"损伤严重度"做四维推理审计，跨技术栈通用 | OPEN | [#1367](https://github.com/anthropics/skills/pull/1367) |
| 7 | **ServiceNow 平台 Skill（#568）** | 覆盖 ITSM/ITOM/SecOps/ITAM/FSM/SPM/CSDM/IntegrationHub 的企业级平台助手 | OPEN | [#568](https://github.com/anthropics/skills/pull/568) |
| 8 | **testing-patterns（#723）** | 全栈测试模式：Testing Trophy 哲学、单元测试、React 组件测试、契约/E2E 测试 | OPEN | [#723](https://github.com/anthropics/skills/pull/723) |

**讨论热点**：社区对"Skill 自身的可靠性"关注度最高——`skill-creator` 的评估闭环失灵（#556、#1169、#1298、#1099、#1050 五条 PR/Issue 联动）成为最集中的技术债。

---

## 2. 社区需求趋势（来自 Issues）

| 需求方向 | 代表 Issue | 核心诉求 |
|---------|-----------|---------|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，最高） | 社区 Skill 冒用 `anthropic/` 命名空间造成信任滥用，亟需官方命名/签名机制 |
| **🏢 企业级共享与治理** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论） | Claude.ai 组织级 Skill 共享，避免手动下载/上传流程 |
| **🧪 Skill 自评估与质量门控** | [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169)、[#1385](https://github.com/anthropics/skills/issues/1385) | 描述优化、触发率、推理质量门控——评估基础设施是头号痛点 |
| **📦 插件去重与打包** | [#189](https://github.com/anthropics/skills/issues/189)（👍9） | `document-skills` 与 `example-skills` 内容重复，污染上下文 |
| **🪶 上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` skill 单次注入 ~156k tokens 直接耗尽上下文 |
| **🤖 Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412) | 策略执行、威胁检测、信任评分、审计追踪 |
| **🧠 紧凑记忆与符号化状态** | [#1329](https://github.com/anthropics/skills/issues/1329) | 长时 Agent 用符号化记法压缩自身笔记，节省 context |
| **🔌 Skills → MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16) | 把 Skill 包装为 MCP，统一软件 API 协议 |
| **☁️ 多平台兼容** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 等非官方平台上的 Skills 适配 |

**趋势归纳**：社区需求已从"补齐功能型 Skill"转向"**Skills 生态的基础设施层**"——安全、评估、共享、上下文治理成为新焦点。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、解决明确痛点，落地概率较高：

| PR | Skill | 落地价值 | 链接 |
|----|-------|---------|------|
| #1298 | skill-creator 核心修复 | 修复评估闭环，影响所有依赖 description 优化的 Skill | [#1298](https://github.com/anthropics/skills/pull/1298) |
| #514 | document-typography | 通用性强，所有文档生成场景受益 | [#514](https://github.com/anthropics/skills/pull/514) |
| #83 | skill-quality/security-analyzer | 元工具，赋能整个生态 | [#83](https://github.com/anthropics/skills/pull/83) |
| #1367 | self-audit | 跨栈通用，提升交付可信度 | [#1367](https://github.com/anthropics/skills/pull/1367) |
| #538 | pdf case-sensitivity 修复 | 低风险高收益的稳定性修复 | [#538](https://github.com/anthropics/skills/pull/538) |
| #541 | docx tracked-change ID 冲突修复 | 修复文档损坏的严重 bug | [#541](https://github.com/anthropics/skills/pull/541) |
| #539 | skill-creator YAML 校验 | 防止 description 静默截断 | [#539](https://github.com/anthropics/skills/pull/539) |
| #1538 | 修复违反 Agent Skills 规范的 skill | 维护规范一致性 | [#1538](https://github.com/anthropics/skills/pull/1538) |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是"Skills 的可信赖性"——从命名空间安全（#492）、评估闭环失灵（#556/#1169）、上下文失控（#1487）到插件重复（#189），社区正在呼吁一套覆盖安全、评估、共享、治理的 Skills 基础设施层，而不再满足于单点功能型 Skill 的堆砌。**

---

*报告基于 anthropics/skills 仓库 50 条热门 PR 与 16 条热门 Issue 数据综合分析。*

---

# Claude Code 社区动态日报

**日期**：2026-08-14
**数据来源**：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.232**，正式默认开启 **Subagent Forking**（子代理分叉）功能，并支持在提示中使用 `@` 提及另一个会话。社区焦点高度集中在 **Desktop 跨会话消息传递（send_message）的大规模回归故障** 上——自 2.1.227 起，Windows 与 macOS 桌面端用户报告大量"消息已送达但目标会话无响应"的问题，已积累 10+ 重复 issue。此外，`advisor()` 工具导致上下文用量双倍计数的 bug 持续引发关注。

---

## 🚀 版本发布

### v2.1.232（最新）
- **Subagent Forking 默认开启**：`subagent_type: "fork"` 的子代理现在默认继承完整对话上下文与 prompt cache；交互会话中非 teammate 的代理生成默认在后台运行
- **@ 提及会话**：在提示框中输入 `@` 即可按名称提及另一个 Claude 会话
- 🔗 [查看 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.232)

### v2.1.231
- 修复 MCP OAuth 登录在 Slack 等使用预注册 OAuth client 的服务器上因 redirect URI 不匹配而失败的问题
- 🔗 [查看 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.231)

---

## 🔥 社区热点 Issues

### 1. [#84352](https://github.com/anthropics/claude-code/issues/84352) — CVP 已批准组织仍遭遇 Cyber Safeguard 拦截
- **评论 94 / 👍 14**（今日最高热度）
- 已通过 Cyber Verification Program 审批的 Claude.ai 组织，在 Claude Code 中仍持续触发网络安全防护拦截；验证门户显示申请状态异常回退为"审核中"
- **重要性**：直接影响合规企业的生产使用，社区反应强烈

### 2. [#24798](https://github.com/anthropics/claude-code/issues/24798) — 多 Claude 工作流的会话间通信
- **评论 66 / 👍 21**
- 长期高呼声 feature request：希望支持多个隔离 Claude 会话之间直接通信，以编排带依赖关系的复杂工作流
- **重要性**：与 v2.1.232 新增的 `@` 提及功能直接呼应，是社区期待已久的多代理协同能力

### 3. [#85603](https://github.com/anthropics/claude-code/issues/85603) — TUI 中键入内容在回合结束时被静默丢弃
- **评论 22 / 👍 1**
- macOS + tmux 环境下，agent 运行中键入的文本在回合结束时未提交即丢失；空闲面板甚至不会启动新回合
- **重要性**：影响长时间 agent 会话的交互可靠性

### 4. [#86012](https://github.com/anthropics/claude-code/issues/86012) — 跨会话消息导致接收方完全无响应（Desktop）
- **评论 15 / 👍 3**
- Windows Desktop 1.28929.0 / CC 2.1.227 中，跨会话消息使目标会话卡死，需 15-20 分钟空闲超时才能强制结束
- **重要性**：本次回归潮的代表性 issue

### 5. [#53065](https://github.com/anthropics/claude-code/issues/53065) — `advisor()` 工具导致输入 token 翻倍
- **评论 14 / 👍 6**
- `advisor()` 调用时将完整对话转发给第二模型（claude-opus-4-7），两份 usage 累加导致 token 计数虚高，触发过早的自动压缩
- **重要性**：影响长上下文模型的正常使用与成本控制

### 6. [#82092](https://github.com/anthropics/claude-code/issues/82092) — Apps 网关 OTLP 端点缺少认证头
- **评论 10 / 👍 5**
- Desktop 遥测上报因 `otlpHeaders` 缺失被网关以 `missing_token` 拒绝
- **重要性**：影响可观测性与企业部署

### 7. [#86275](https://github.com/anthropics/claude-code/issues/86275) — Windows Desktop 跨会话消息静默失败
- **评论 8 / 👍 4**
- 2.1.222 → 2.1.227 自动更新后，`send_message` 报告成功但消息从未送达
- **重要性**：明确指向 2.1.227 的回归点

### 8. [#79596](https://github.com/anthropics/claude-code/issues/79596) — Cowork/Chrome 扩展导航到无关外部站点
- **评论 6 / 👍 0**
- Chrome 扩展中的 Cowork 在无任何提示的情况下，将真实 Chrome 标签页导航到无关外部网站（aisle.wedding）
- **重要性**：严重的代理安全/越权问题

### 9. [#81620](https://github.com/anthropics/claude-code/issues/81620) — `advisor` 工具使上下文报告翻倍
- **评论 3 / 👍 3**
- 与 #53065 同源问题：advisor 的 prompt 被计入主回合 usage，导致自动压缩在真实窗口的 ~50% 即触发
- **重要性**：长会话工作流的关键稳定性问题

### 10. [#84698](https://github.com/anthropics/claude-code/issues/84698) — Desktop 在 diff/commit 刷新时静默执行 `git fetch`
- **评论 1 / 👍 2**
- Desktop 应用在用户未请求的情况下后台 `git fetch`，且设计上无法追溯、无设置可关闭
- **重要性**：涉及用户隐私与网络行为的透明度

---

## 🔧 重要 PR 进展

> 过去 24 小时仅 2 条 PR 更新，活跃度较低。

### 1. [#86537](https://github.com/anthropics/claude-code/pull/86537) — 修复 CHANGELOG.md 重复词
- 修复 `CLAUDE_BASH_NO_LOGIN`（v1.0.124）变更日志中的 "to to" 重复词
- 纯文档修正

### 2. [#60280](https://github.com/anthropics/claude-code/pull/60280) — SHA 锁定剩余 GitHub Actions（已关闭）
- 将 `actions/checkout@v4` 与 `actions/github-script` 锁定到具体 SHA，提升 CI 供应链安全
- 涉及 6 个 workflow 文件

---

## 📈 功能需求趋势

从今日 Issues 提炼的社区关注方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **多代理/会话协同** | #24798, #86012, #86275, #86138, #86014, #86069, #86386, #86059, #86237, #86385, #86212, #86370, #86088, #86398, #86029, #80863 | 🔥🔥🔥🔥🔥 |
| **上下文/Token 计费准确性** | #53065, #81620, #82863 | 🔥🔥🔥 |
| **Desktop 稳定性（Windows/MSIX）** | #73107, #77421, #85887, #74017 | 🔥🔥🔥 |
| **安全/合规拦截** | #84352, #86527, #79596 | 🔥🔥🔥 |
| **可观测性/遥测** | #82092 | 🔥🔥 |
| **TUI 交互可靠性** | #85603 | 🔥🔥 |
| **Git 行为透明度** | #84698 | 🔥 |

**核心趋势**：社区对 **多 Claude 会话协同工作流** 的需求已经从"功能请求"演变为"生产可用性"问题——v2.1.232 的 `@` 提及与默认 Forking 是积极回应，但 Desktop 端的回归严重阻碍了落地。

---

## 💡 开发者关注点

### 🔴 高频痛点

1. **Desktop 跨会话消息全面失效（2.1.227 回归）**
   - 至少 10+ 重复 issue 描述同一根因：消息"送达"但目标会话不响应
   - 影响 Windows 与 macOS 双平台，2.1.231 仍未修复
   - 涉及 `ccd_session_mgmt` MCP 工具的 `send_message` 端到端链路

2. **`advisor()` 工具的 token 双计费**
   - 主回合与 advisor 子推理的 usage 被合并到同一 `usage` 块
   - 导致自动压缩在真实窗口的 33%~50% 即触发，严重浪费长上下文窗口

3. **Cyber Safeguard 误伤合规用户**
   - 已通过 CVP 审批的组织仍被拦截，且拦截触发在 Claude 自身生成的上下文上（#86527），而非用户输入

4. **Desktop 升级/安装链路脆弱**
   - MSIX 包升级后 AppX 容器被孤立进程锁定（0x80070020）
   - quit-for-update 流程挂起导致后续启动失败

### 🟡 长期需求

- **会话间显式通信协议**：#24798 持续 6 个月、66 条评论，是社区最强烈的功能呼声
- **PreToolUse hook 拒绝的可追溯性**（#82642）：当前 `decisionReason` 在写入 transcript 时被丢弃，事后无法定位是哪个 hook 拒绝
- **Desktop 后台行为的可控性**：`git fetch`、OTLP 遥测等行为缺乏用户可见开关

---

*日报生成基于 GitHub 公开数据，如需深入分析某个方向请告知。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-14**

---

## 一、今日速览

今日 Codex 仓库进入高频迭代节奏：Rust 端在 24 小时内连发 4 个 alpha 预发布版本（0.148.0-alpha.11 → alpha.14），同时合并了 20+ 个 PR，重点扩展了 **Amazon Bedrock Runtime 提供商**、**MCP OAuth 回调端口**、**Guardian V2 工具上下文** 等能力。社区侧，**macOS Desktop 性能严重退化**（CPU 100%+、内存 10GB+）与 **VS Code 扩展 IDE Context 失效** 成为两大集中爆发的痛点，Windows 平台相关问题占比依旧居高不下。

---

## 二、版本发布

### rust-v0.148.0-alpha.11 → alpha.14（4 个连续预发布）

24 小时内连续推送 4 个 alpha 版本，节奏明显加快，预示 0.148.0 正式版临近。从 PR 内容推断，本轮迭代主要涉及：

- **模型系统**：新增 `SkillModelDelegationInstruction`（Luna/Sol/Terra 模型委托）、`model` 字段解析、模型升级 `retirementAt` 时间暴露
- **构建系统**：Windows 沙箱 manifest 嵌入 Bazel 构建
- **遥测与分析**：替换 accepted-line fingerprint 为 diff 统计、新增 `codex.retry` 结构化事件
- **路径处理**：新增 `AbsolutePathBuf` ↔ `FileSystemPath` 转换

> 📦 [Release 列表](https://github.com/openai/codex/releases)

---

## 三、社区热点 Issues

### 🔥 1. [#26984](https://github.com/openai/codex/issues/26984) — MCP stdio 服务器泄漏 pipe fd 与孤儿进程
- **评论 21 / 👍 4** | OPEN
- **重要性**：长期运行会话累积触发 `EMFILE (Too many open files)`，影响所有重度使用 MCP 的用户，是 MCP 集成的底层稳定性问题。

### 🔥 2. [#37403](https://github.com/openai/codex/issues/37403) — macOS Desktop 无法恢复 Remote Control / CLI 线程
- **评论 18 / 👍 11** | OPEN
- **重要性**：8 月 7 日更新后回归，`already has an active writer` 错误阻断跨设备工作流，👍 数高说明影响面广。

### 🔥 3. [#31553](https://github.com/openai/codex/issues/31553) — VS Code 扩展停止自动包含 IDE Context
- **评论 17 / 👍 12** | CLOSED
- **重要性**：Windows + Docker 场景下 IDE 上下文失效，已关闭但属于高频复发问题（见 #34920、#34696、#35333）。

### 🔥 4. [#26990](https://github.com/openai/codex/issues/26990) — Windows Desktop 本地状态断电不安全
- **评论 15 / 👍 0** | OPEN
- **重要性**：pins/projects 重置、配置回退、未来时间戳——属于数据完整性问题，对企业用户风险高。

### 🔥 5. [#34920](https://github.com/openai/codex/issues/34920) — IDE Context 在 26.715.x 因 RPC 序列化错误失败
- **评论 10 / 👍 5** | CLOSED
- **重要性**：GPT-5.6 已可用但 IDE Context 不可用，凸显新模型与扩展稳定性之间的张力。

### 🔥 6. [#2062](https://github.com/openai/codex/issues/2062) — 功能请求：监控后台服务
- **评论 9 / 👍 10** | OPEN
- **重要性**：长期呼声最高的 enhancement 之一，允许 agent 检查长时进程的日志而不阻塞。

### 🔥 7. [#23454](https://github.com/openai/codex/issues/23454) — `$skill` 显式调用忽略本地 explicit-only skills
- **评论 8 / 👍 7** | OPEN
- **重要性**：Skills 系统行为不一致，影响自定义工作流。

### 🔥 8. [#33551](https://github.com/openai/codex/issues/33551) — Multi-Agent V2 向外部 Responses 提供商发送 OpenAI 专有 item
- **评论 8 / 👍 6** | OPEN
- **重要性**：阻碍 Ollama 等第三方提供商接入 Multi-Agent 能力。

### 🔥 9. [#38248](https://github.com/openai/codex/issues/38248) — 创建 side thread 报错
- **评论 6 / 👍 0** | CLOSED
- **重要性**：0.147.0 上的回归，已关闭但反映 CLI 会话管理稳定性。

### 🔥 10. [#38455](https://github.com/openai/codex/issues/38455) — ChatGPT Desktop 26.810.41047 反复生成 Computer Use worker 并 V8 OOM 崩溃
- **评论 3 / 👍 0** | OPEN
- **重要性**：macOS 上 98 秒内崩溃、316 线程、187 个 computer-use worker——严重的资源泄漏。

---

## 四、重要 PR 进展

### 1. [#38470](https://github.com/openai/codex/pull/38470) — 新增 Amazon Bedrock Runtime 提供商
内置 `amazon-bedrock-runtime` 提供商，支持区域化 OpenAI 兼容端点 + SigV4 签名 + bearer token 认证 + AWS profile/region 配置。**意义**：Codex 正式支持 AWS Bedrock，企业多云策略落地。

### 2. [#38448](https://github.com/openai/codex/pull/38448) — 支持 MCP 服务器级 OAuth 回调端口
新增 `oauth.callback_port` 配置，支持 plugin MCP 声明和 skill 依赖元数据传入 `oauth.callbackPort`，优先使用服务器专属端口。**意义**：解决多 MCP 服务器 OAuth 端口冲突。

### 3. [#38441](https://github.com/openai/codex/pull/38441) — Guardian V2 获得完整工具动作上下文
向工具生命周期贡献者暴露 pre-hook `ToolPayload`，让 Guardian V2 能基于真实请求动作评估风险。**意义**：安全审查从"工具名+调用ID"升级到"动作+上下文"。

### 4. [#38456](https://github.com/openai/codex/pull/38456) — App Server 新增实验性 thread queue API
新增 `thread/queue/{add,list,update,delete,reorder,start}`，FIFO 自动派发。**意义**：支持持久化用户提交队列，自动化场景关键能力。

### 5. [#38447](https://github.com/openai/codex/pull/38447) — 本地守护进程会话的运行任务退出选项
`Ctrl-C` + 空 composer 时弹出菜单：取消任务、退出 Codex 但保留任务运行、停止任务。**意义**：长任务管理 UX 显著改善。

### 6. [#38445](https://github.com/openai/codex/pull/38445) — 跨上下文压缩保留客户端开发者消息
启用 `retain_client_developer_messages` 后，压缩上下文时保留客户端开发者指令。**意义**：解决压缩后指令丢失的长期痛点。

### 7. [#38440](https://github.com/openai/codex/pull/38440) — App Server 支持分页线程回滚
新增 `thread/revert` 请求，替换分页线程的持久化历史到 `beforeTurnId` 之前。**意义**：线程级"撤销"能力正式化。

### 8. [#38449](https://github.com/openai/codex/pull/38449) — 暴露模型升级退役时间
解析 `retirement_at` RFC 3339 时间戳，通过 `model/list` 的 `upgradeInfo.retirementAt` 暴露。**意义**：客户端可提前预警模型下线。

### 9. [#38452](https://github.com/openai/codex/pull/38452) — 新增响应重试结构化遥测
发射 `codex.retry` 事件，覆盖 HTTP、采样流、远程压缩、采样连接恢复。**意义**：可观测性大幅提升，便于排查网络抖动。

### 10. [#38467](https://github.com/openai/codex/pull/38467) — 解析 skill frontmatter 中的 model 注解
skill 元数据新增可选 `model` 字段，识别 `model: luna`，忽略不支持的值。**意义**：skill 系统开始支持模型级路由。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|---------|
| **IDE 集成稳定性** | #31553、#34920、#34696、#35333、#35419、#37517、#37508 | 🔥🔥🔥🔥🔥 |
| **多模型/多提供商支持** | #33551、#38470(Bedrock)、#38467(skill model) | 🔥🔥🔥🔥 |
| **后台进程/长任务管理** | #2062、#38447 | 🔥🔥🔥 |
| **会话与线程管理** | #38248、#38440、#38463、#24060 | 🔥🔥🔥 |
| **macOS Desktop 性能** | #38455、#38468、#37403 | 🔥🔥🔥 |
| **Windows 平台稳定性** | #26990、#33114、#30435、#36568、#38458 | 🔥🔥🔥 |
| **MCP 生态** | #26984、#38448 | 🔥🔥 |
| **安全/Guardian** | #38441、#38454 | 🔥🔥 |

---

## 六、开发者关注点

### 🎯 核心痛点

1. **VS Code 扩展 IDE Context 反复失效**：从 26.707 到 26.715 多个版本连续出现 RPC 序列化、`workspaceRoot` 缺失、WSL2 选区丢失等问题，开发者对扩展稳定性的信任度下降。

2. **macOS Desktop 26.810.41047 性能塌方**：多个独立报告指向 Computer Use worker 泄漏、V8 OOM、CPU 100%+、内存 10GB+，且 26.730.61639 之前版本正常——一次明确的回归。

3. **Windows 平台系统性脆弱**：断电后状态丢失、IME 失效、WSL agent cwd 错误、Computer Use 不可用——Windows 仍是 Codex 体验短板。

4. **MCP stdio 资源泄漏**：长期会话累积 fd 泄漏触发 `EMFILE`，影响所有重度 MCP 用户，亟需底层修复。

5. **Multi-Agent 与第三方提供商兼容性**：V2 仍发送 OpenAI 专有 `agent_message` item，阻碍 Ollama 等生态接入。

### 💡 高频需求

- **后台服务监控**（#2062）：呼声最高的 enhancement，希望 agent 能检查长时进程日志
- **会话标题自动更新**（#24060）：希望对话主题变化时自动重命名
- **更细粒度的退出控制**（#38447）：长任务下需要"退出但不杀任务"选项
- **模型退役预警**（#38449）：希望提前知道模型下线时间
- **线程队列化**（#38456）：自动化场景需要持久化提交队列

---

*日报基于 GitHub Issues / Pull Requests / Releases 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-14**

---

## 📌 今日速览

今日 Gemini CLI 发布了 `v0.56.0-nightly.20260814` 版本，重点修复了容量错误重试机制与 E2E 测试稳定性。社区讨论焦点集中在 **Subagent 行为异常**（如误报 GOAL 成功、generalist agent 挂死）与 **Auto Memory 系统缺陷**两大方向，同时安全相关 PR（供应链 RCE、simple-git CVE）获得较高优先级处理。

---

## 🚀 版本发布

### v0.56.0-nightly.20260814.gc0d192452
- **#28793** 稳定 `file-system-interactive` E2E 测试在慢速 runner 上的表现
- **#28790** 实现上下文感知的静默重试机制与容量错误可用性 TTL（关闭 #28761）

🔗 [查看 Release](https://github.com/google-gemini/gemini-cli/pull/28793)

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 关注理由 |
|---|-------|--------|------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后误报 GOAL 成功 | P1 | 12 | **核心可靠性问题**：子代理中断被掩盖，影响调试与评估准确性 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 挂死 | P1 | 8 | 👍8 高赞，用户体验严重受损，简单操作即可触发 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 利用模型 Bash 亲和性的零依赖 OS 沙箱 | P2 | 8 | 战略性功能提案，深度结合 Gemini 3 模型原生能力 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估体系 EPIC | P1 | 7 | 已有 76 个行为评估测试，覆盖 6 个模型，是质量基础设施核心 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知的文件读取/搜索/映射评估 | P2 | 7 | 探索减少 token 消耗与提升精度的关键技术路径 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 极少主动使用 skills 与 sub-agents | P2 | 6 | 揭示模型行为与设计意图的偏差，影响扩展性 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后卡在 "Waiting input" | P1 | 4 | 👍3 高频痛点，简单命令即可触发 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 下失败 | P1 | 4 | 跨平台兼容性问题，影响 Linux 用户 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | P2 | 5 | Auto Memory 系列问题之首，影响后台资源占用 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 缺乏确定性脱敏机制 | P2 | 4 | **安全隐患**：敏感信息在进入模型上下文后才脱敏 |

---

## 🛠️ 重要 PR 进展

| PR | 类型 | 说明 |
|----|------|------|
| [#28740](https://github.com/google-gemini/gemini-cli/pull/28740) | 🔒 安全 | **修复供应链 RCE**：拆分 eval 工作流，防止 fork 代码在 `pull_request_target` 上下文执行 |
| [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) | 🔒 安全 | 升级 `simple-git` 至 3.32.3，修复 **CVE-2026-28292**（CRITICAL） |
| [#28803](https://github.com/google-gemini/gemini-cli/pull/28803) | ✨ 功能 | 新增 **Claude Sonnet 4.5** 与 **Opus 4.8** 模型定义（已关闭） |
| [#28801](https://github.com/google-gemini/gemini-cli/pull/28801) | 🐛 修复 | 多轮请求取消时回滚整个会话历史，避免遗留未响应状态（已关闭） |
| [#28790](https://github.com/google-gemini/gemini-cli/pull/28790) | 🐛 修复 | 上下文感知重试 + 容量错误 TTL（已关闭） |
| [#28787](https://github.com/google-gemini/gemini-cli/pull/28787) | 🐛 修复 | MCP 配置损坏不再被当作空配置，避免误启用所有服务器 |
| [#28789](https://github.com/google-gemini/gemini-cli/pull/28789) | 🐛 修复 | 修复 VSCode IDE Companion 的 `stop()` 挂死与 keep-alive 资源泄漏 |
| [#28699](https://github.com/google-gemini/gemini-cli/pull/28699) | 🔒 安全 | A2A Server 强制鉴权并阻止 checkpoint 路径穿越 |
| [#28701](https://github.com/google-gemini/gemini-cli/pull/28701) | 🐛 修复 | 修复 `TRUST_PARENT` 规则在文件夹信任解析中的优先级问题 |
| [#28804](https://github.com/google-gemini/gemini-cli/pull/28804) | ✨ 功能 | 新增多文件批量读取、内部 CLI 文档查询、MCP 资源读取的行为评估 |

---

## 📈 功能需求趋势

从今日活跃 Issue 中提炼出社区最关注的五大方向：

1. **🧠 Subagent 可靠性**（占比最高）
   - 状态报告错误、挂死、权限绕过、上下文丢失等系统性问题密集出现
   - 代表：#22323、#21409、#22093、#21763

2. **🔒 安全与隐私**
   - Auto Memory 脱敏、OAuth 资源泄漏、供应链攻击面成为焦点
   - 代表：#26525、#28678、#28740

3. **🌐 跨平台兼容**
   - Wayland、WSL2、Windows ARM 等场景的兼容性需求强烈
   - 代表：#21983、#27588、#25378

4. **⚡ 性能与终端体验**
   - 终端 resize 闪烁、shell 卡顿、编辑器退出后渲染损坏
   - 代表：#21924、#25166、#24935

5. **🧪 评估体系建设**
   - 行为评估（behavioral evals）从 76 个测试扩展到更多工具与场景
   - 代表：#24353、#22745、#28804、#28788

---

## 💬 开发者关注点

### 🔴 高频痛点
- **Subagent 行为不可预测**：误报成功、挂死、绕过权限配置（v0.33.0 后），严重影响生产可用性
- **Shell 执行卡顿**：命令完成后仍显示 "Waiting input"，需手动干预
- **Auto Memory 资源浪费**：低信号会话被无限重试，无效 patch 静默丢弃

### 🟡 改进期望
- **更智能的工具选择**：模型应主动调用 skills/sub-agents，而非依赖显式指令
- **更细粒度的安全控制**：在内容进入模型上下文前完成脱敏，而非依赖模型自律
- **更丰富的模型支持**：Claude 系列模型定义已出现，跨模型生态正在构建
- **更透明的调试能力**：subagent 轨迹应通过 `/chat share` 可见，bug 报告应包含子代理上下文

### 🟢 积极信号
- 安全响应迅速：CVE-2026-28292、供应链 RCE 等高危问题在 24 小时内进入修复流程
- 评估基础设施持续扩张：从单一行为测试走向组件级、工具级全覆盖
- 平台兼容性投入加大：WSL2 剪贴板、Windows ARM 等长尾场景得到关注

---

*日报基于 GitHub Issues/PRs 数据自动生成，仅供参考。*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*