# AI CLI 工具社区动态日报 2026-06-21

> 生成时间: 2026-06-21 04:15 UTC | 覆盖工具: 3 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告日期：** 2026-06-21  
**覆盖工具：** Claude Code、OpenAI Codex、Gemini CLI

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从单点工具向多代理协作平台演进**的关键阶段。三大主流工具均面临相似的核心挑战：如何在保持 CLI 轻量性的同时，提供足以支撑复杂 AI 工作流的编排能力。**平台兼容性**（尤其是 Windows 和移动端）成为制约落地的共性瓶颈，而 **MCP（Model Context Protocol）生态扩展** 则成为差异化竞争的主战场。值得注意的是，三家均在进行底层架构重构——Claude Code 优化超时机制、Codex 推进 SessionRuntime transport-neutral 化、Gemini CLI 强化 Auto Memory 模块——这表明 CLI 工具正从「对话界面」向「开发平台」定位迁移。

---

## 2. 各工具活跃度对比

| 指标 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **今日 Issues 数** | 37+ | 37+ | **49** |
| **今日 PR 数** | 4 | 10+ | **17** |
| **Release 状态** | ✅ v2.1.185 已发布 | ⚠️ Alpha 预发布 | ❌ 夜间构建失败 |
| **关键 Bug** | Android/Termux 不可用 | `sandboxPolicy` regression 大面积爆发 | 登录认证问题 |
| **社区响应速度** | 中（Issue 平均 25-40 评论） | 高（Issue 平均 30-60 评论） | 中（Issue 平均 4-7 评论） |
| **架构迭代信号** | 局部优化 | **全面重构**（SessionRuntime） | 模块化增强 |

**数据洞察：** Gemini CLI 在 Issue 和 PR 数量上领先，但单 Issue 评论数偏低，显示社区参与深度不足；Codex 单 Issue 评论数最高，社区活跃度最强但伴随高比例 regression bug；Claude Code 处于稳定迭代节奏，暂无重大架构变更。

---

## 3. 共同关注的功能方向

### 3.1 多代理协作与通信机制

| 工具 | 具体诉求 | Issue 编号 |
|------|----------|------------|
| **Claude Code** | 跨会话通信、父子代理通知、Agent-to-Agent 协议 | #24798, #1770 |
| **OpenAI Codex** | 跨线程编排、入站 MCP 通知路由 | #14923, #15299 |
| **Gemini CLI** | Subagent 稳定性、Agent 自主调用 Skills | #21409, #21968 |

**共性分析：** 三家均意识到「孤立的单会话」无法支撑复杂工作流，但实现路径不同——Claude Code 侧重父子代理层级关系，Codex 聚焦线程级编排，Gemini CLI 探索 Agent 自主性。

### 3.2 MCP 协议深化

| 工具 | MCP 相关 Issue | 核心诉求 |
|------|----------------|----------|
| Claude Code | #69727, #69716, #69710 | Hookify 规则修复、导入路径、文档同步 |
| Codex | #29189, #29205 等 | `sandboxPolicy` 元数据、OAuth 集成 |
| Gemini CLI | #27878, #27889, #27888 | MIME 类型检测、OAuth 刷新、Schema 规范化 |

**共性分析：** MCP 已从「工具调用协议」演变为「平台间集成标准」，各家均在完善 OAuth 认证、Schema 验证、通知路由等企业级能力。

### 3.3 跨平台一致性

| 工具 | 平台问题 | 严重度 |
|------|----------|--------|
| Claude Code | Android/Termux 完全不可用（glibc 二进制） | 🔴 高 |
| Codex | Windows sandbox 失败、WSL2 GPU 访问受阻 | 🔴 高 |
| Gemini CLI | Wayland 浏览器失败、Cloud Shell 权限问题 | 🟠 中 |

**共性分析：** 跨平台问题呈现「Windows 集中、Linux 碎片化」特征，移动端支持普遍滞后。

---

## 4. 差异化定位分析

### Claude Code — **开发者体验优先**

- **核心定位：** 深度集成 Anthropic 模型能力，聚焦代码生成与编辑场景
- **技术路线：** 轻量级 CLI + 插件生态，强调工具规则（hookify）的灵活性
- **目标用户：** 个人开发者、小型团队
- **护城河：** 模型上下文窗口优势、简洁的交互设计
- **短板：** 多代理协作能力薄弱，移动端完全不可用

### OpenAI Codex — **企业级平台**

- **核心定位：** 多工具链编排 + 沙箱安全隔离，面向复杂自动化场景
- **技术路线：** SessionRuntime 重构推进 transport-neutral 架构，强化 MCP 生态
- **目标用户：** 企业开发团队、自动化流程构建者
- **护城河：** 沙箱安全模型、Chrome/浏览器自动化深度集成
- **短板：** regression 频率高（本次 `sandboxPolicy` bug 影响全平台），稳定性待验证

### Gemini CLI — **实验性功能探索**

- **核心定位：** AST 感知工具、Auto Memory 模块，探索 AI 原生开发范式
- **技术路线：** 组件级评估体系、模型 world-state 管理，强调可观测性
- **目标用户：** 早期采用者、Google 生态开发者
- **护城河：** Google 搜索/地图等第一方 MCP 集成
- **短板：** Agent 行为不可预测（挂起、误报成功），构建稳定性不足

---

## 5. 社区热度与成熟度

### 热度矩阵

| 工具 | 社区规模 | 参与深度 | 问题解决效率 | 成熟度评估 |
|------|----------|----------|--------------|------------|
| **Claude Code** | 中 | 中高（单 Issue 25-40 评论） | 中（长期需求积压） | 🟡 成长型 |
| **OpenAI Codex** | 大 | 高（单 Issue 30-60 评论） | 低（regression 频发） | 🟠 扩张型 |
| **Gemini CLI** | 小 | 低（单 Issue 4-7 评论） | 中（PR 合并积极） | 🔵 探索型 |

### 成熟度解读

- **Claude Code** 处于「功能完善期」，社区反馈集中于定价和平台支持等非技术因素，显示核心能力已获认可
- **OpenAI Codex** 处于「架构重构期」，高热度伴随高 regression 风险，适合技术激进型用户
- **Gemini CLI** 处于「功能探索期」，Issue 数量领先但深度不足，适合愿意参与早期建设的开发者

---

## 6. 值得关注的趋势信号

### 🔴 高优先级趋势

**1. MCP 协议从「工具调用」向「平台集成标准」演进**

三家均在完善 OAuth、Schema 验证、通知路由等企业级能力，MCP 已超越「工具协议」范畴，成为 AI 工具间互操作的事实标准。**开发者建议：** 优先掌握 MCP 协议规范，关注 MCP Hub 生态。

**2. 多代理协作从「概念」走向「工程实现」**

Claude Code 的父子代理通信、Codex 的跨线程编排、Gemini CLI 的 Subagent 管理，均指向同一目标：让多个 AI 会话协调完成复杂任务。**开发者建议：** 关注各家 API 设计，评估多代理场景下的编排需求。

**3. 沙箱安全模型成为企业落地关键**

Codex 的 `sandboxPolicy` regression 导致全平台工具链失效，凸显沙箱机制在生产环境中的脆弱性。**开发者建议：** 生产环境部署前务必验证沙箱隔离能力，关注安全相关的 PR 合并。

### 🟠 中期趋势

**4. 跨平台一致性仍是最大短板**

Android/Termux 完全不可用、Windows 问题集中、Wayland 兼容性差——三大工具在平台覆盖上均存在明显缺口。**开发者建议：** 如需跨平台使用，优先选择 CLI 工具而非桌面应用，并关注各家的平台支持路线图。

**5. 成本透明化成为用户核心诉求**

Claude Code 的印度定价讨论、Codex 的 rate-limit 成本暴增 10-20 倍，均反映用户对 AI 使用成本的高度敏感。**开发者建议：** 建立 token 消耗监控机制，评估各工具的性价比。

### 🔵 长期趋势

**6. 底层架构向「transport-neutral」演进**

Codex 的 SessionRuntime 重构、Gemini CLI 的 model world-state 管理，均在将核心逻辑与传输层解耦。这将为未来多协议支持（WebSocket、HTTP、gRPC）奠定基础。**开发者建议：** 关注架构变更的 changelog，评估对插件和集成的影响。

---

## 行动建议

| 角色 | 优先级事项 |
|------|------------|
| **技术决策者** | 评估 MCP 生态成熟度；关注 Codex 架构变更对集成的潜在影响；建立 AI CLI 工具选型标准 |
| **开发者** | 暂缓升级 Codex 26.616；关注 Claude Code Android 支持进展；掌握 MCP 协议开发 |
| **企业用户** | 建立沙箱安全验证流程；监控 token 消耗异常；评估多代理协作的合规边界 |

---

*本报告基于 2026-06-21 GitHub 公开数据生成，数据截止时间：当日 24:00 UTC。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-06-21**

---

## 1. 热门 Skills 排行

| 排名 | Skill | 功能概述 | 社区热点 | 状态 |
|:---:|-------|---------|---------|:----:|
| 1 | **document-typography** | AI 生成文档的排版质量控制（孤行控制、寡妇段落、数字对齐） | 解决所有 AI 文档生成的通用排版问题 | [OPEN](https://github.com/anthropics/skills/pull/514) |
| 2 | **ODT (OpenDocument)** | 创建、填充、读取 OpenDocument 文件（.odt/.ods） | 填补开源/ISO 标准文档格式支持空白 | [OPEN](https://github.com/anthropics/skills/pull/486) |
| 3 | **testing-patterns** | 完整测试栈指南（测试哲学、单元测试、React 组件测试） | Testing Trophy 模型 + Testing Library 最佳实践 | [OPEN](https://github.com/anthropics/skills/pull/723) |
| 4 | **ServiceNow** | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD/SPM 等企业模块 | 企业级平台全面覆盖 | [OPEN](https://github.com/anthropics/skills/pull/568) |
| 5 | **AURELION Suite** | 认知+记忆框架（kernel/advisor/agent/memory） | 结构化思维模板，5 层认知框架 | [OPEN](https://github.com/anthropics/skills/pull/444) |
| 6 | **SAP-RPT-1-OSS** | SAP 开源表格预测模型集成 | 企业预测分析场景 | [OPEN](https://github.com/anthropics/skills/pull/181) |
| 7 | **frontend-design 改进** | 提升 skill 清晰度与可执行性 | 解决 skill 内部一致性问题 | [OPEN](https://github.com/anthropics/skills/pull/210) |
| 8 | **masonry-generate** | AI 图像/视频生成（Imagen 3.0、Veo 3.1） | 多模态内容创作 | [OPEN](https://github.com/anthropics/skills/pull/335) |

---

## 2. 社区需求趋势

### 🔥 企业协作与治理
- **组织内技能共享**（14 评论，7 👍）— 核心痛点：当前需手动下载/上传 .skill 文件，期待内置共享机制
- **agent-governance**（6 评论）— 安全模式、策略执行、威胁检测、审计追踪

### 🐛 评估与调试工具
- **run_eval.py 触发率 0%**（12 评论，7 👍）— 严重阻塞 skill 描述优化循环
- **recall=0% 持续问题**（3 评论）— 多个独立复现

### 🪟 Windows 兼容性
- **subprocess PATHEXT 问题**（3 评论）
- **cp1252 编码问题**
- **select on pipes 阻塞**

### 📄 文档处理增强
- PDF 大小写敏感修复
- DOCX tracked change ID 冲突
- ODT/OpenDocument 格式支持

### 🔐 安全与信任
- **命名空间滥用**（7 评论）— 社区 skill 伪装成官方 anthropic/ 命名空间
- SharePoint Online 权限与上下文窗口安全

---

## 3. 高潜力待合并 Skills

以下 PR 活跃度高，有望近期合并：

| PR | 标题 | 活跃度 | 亮点 |
|:--:|------|:------:|------|
| **#1298** | run_eval.py 修复（0% recall） | 🔴 2026-06-20 更新 | 修复 Windows 流读取、并行 worker、eval artifact 安装 |
| **#514** | document-typography | 🟡 2026-03-13 更新 | 通用排版问题解决方案 |
| **#723** | testing-patterns | 🟡 2026-04-21 更新 | 完整测试栈覆盖 |
| **#568** | ServiceNow | 🟡 2026-04-23 更新 | 企业平台全面覆盖 |
| **#509** | CONTRIBUTING.md | 🟢 2026-03-19 更新 | 社区健康指标提升（25%→显著改善） |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：修复 skill-creator 评估工具链（run_eval.py 持续报告 0% 触发率）+ 完善企业级协作与文档处理能力（跨组织共享、多格式支持、Windows 兼容）。**

---

### 快速索引

| 类型 | 链接 |
|-----|------|
| 热门 PR | https://github.com/anthropics/skills/pulls |
| 热门 Issue | https://github.com/anthropics/skills/issues |
| run_eval.py Bug | https://github.com/anthropics/skills/issues/556 |
| 企业共享需求 | https://github.com/anthropics/skills/issues/228 |
| 安全漏洞报告 | https://github.com/anthropics/skills/issues/492 |

---

# Claude Code 社区动态日报

**日期：** 2026-06-21  
**数据来源：** github.com/anthropics/claude-code

---

## 1. 今日速览

今日 Claude Code 社区呈现三大热点：**多代理协作**需求持续升温，跨会话通信、父子代理通知等议题引发广泛讨论；**平台兼容性**问题突出，Android/Termux 和 OneDrive 场景下的 bug 获得大量关注；**定价策略**讨论热度不减，印度用户对本地化定价的呼声已获近 450 个赞同。

---

## 2. 版本发布

### v2.1.185 已发布

**更新内容：**
- 优化流超时提示文案：`"Waiting for API response · will retry in …"` 替代原 `"No response from API · Retrying in …"`
- 超时触发阈值从 **10 秒**延长至 **20 秒**，减少误触发

> 📎 [查看 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.185)

---

## 3. 社区热点 Issues

### 🔥 Top 10 最值得关注

| # | Issue | 标题 | 重要性分析 |
|---|-------|------|-----------|
| 1 | [#17432](https://github.com/anthropics/claude-code/issues/17432) | **印度特定定价计划 (INR)** | 社区最高热度（199评论/447👍），反映全球化定价痛点，竞品 OpenAI/Google 已提供印度定价 |
| 2 | [#50270](https://github.com/anthropics/claude-code/issues/50270) | **Termux/Android 兼容性问题** | v2.1.113+ 切换为 glibc 二进制导致 Android 完全不可用，41评论/50👍，has repro |
| 3 | [#24798](https://github.com/anthropics/claude-code/issues/24798) | **多会话工作流通信** | 37评论，核心需求：让孤立的 Claude 会话能协调高层流程 |
| 4 | [#14088](https://github.com/anthropics/claude-code/issues/14088) | **OneDrive/映射驱动器聊天历史丢失** | Windows 用户高频场景，36评论，has repro |
| 5 | [#13024](https://github.com/anthropics/claude-code/issues/13024) | **用户输入等待钩子** | 71👍，功能需求明确：Claude 等待用户输入时触发回调 |
| 6 | [#36431](https://github.com/anthropics/claude-code/issues/36431) | **Telegram 插件通知不送达** | 31👍，官方插件 bug，影响实际使用 |
| 7 | [#1770](https://github.com/anthropics/claude-code/issues/1770) | **父子代理通信与监控** | 25👍，长期需求（2025年6月创建），多代理编排核心能力 |
| 8 | [#28765](https://github.com/anthropics/claude-code/issues/28765) | **远程控制完成通知** | 41👍，远程模式高频需求，提升移动端体验 |
| 9 | [#40175](https://github.com/anthropics/claude-code/issues/40175) | **Cowork 全局指令静默回退** | 25评论，跨平台 bug，影响团队协作 |
| 10 | [#63930](https://github.com/anthropics/claude-code/issues/63930) | **Prompt Cache 重复失效问题** | 74% 缓存写入浪费，Opus 4.8 相关，严重性能问题 |

---

## 4. 重要 PR 进展

| # | PR | 标题 | 状态 | 修复内容 |
|---|-----|------|------|---------|
| 1 | [#69727](https://github.com/anthropics/claude-code/pull/69727) | hookify 文件规则匹配修复 | OPEN | 修复 Write 工具创建新文件时，pattern 规则不触发的 bug |
| 2 | [#69716](https://github.com/anthropics/claude-code/pull/69716) | Statsig 事件时间格式修复 | OPEN | 修复时间戳从秒改为毫秒，匹配 API 规范 |
| 3 | [#69710](https://github.com/anthropics/claude-code/pull/69710) | 插件 README 文档更新 | **CLOSED** | 更新废弃的 npm 安装方式为推荐方法 |
| 4 | [#69698](https://github.com/anthropics/claude-code/pull/69698) | hookify 导入路径修复 | OPEN | 修复 marketplace 安装时的根相对导入问题 |

---

## 5. 功能需求趋势

基于今日 Issues 分析，社区最关注的功能方向如下：

### 📈 高频需求方向

| 方向 | 相关 Issue 数 | 代表需求 |
|------|--------------|---------|
| **多代理协作** | 12+ | 跨会话通信、父子代理通知、Agent-to-Agent 协议 |
| **跨平台/设备** | 8+ | iOS/Android 推送通知、远程控制增强 |
| **IDE/编辑器集成** | 5+ | VS Code 深度集成、桌面端体验优化 |
| **成本控制** | 4+ | Prompt Cache 优化、印度定价、本地化 |
| **工作流编排** | 6+ | 多会话协调、任务队列、状态管理 |

### 🔑 核心功能缺口

1. **会话间通信机制** — 目前无可靠方式向运行中的 Claude Code 会话推送消息
2. **后台代理生命周期管理** — 睡眠/恢复后后台代理丢失，无通知无恢复
3. **实时协作** — 多人实时共享单一会话（类 Google Docs 模式）尚未支持

---

## 6. 开发者关注点

### ⚠️ 关键痛点

| 痛点 | 影响范围 | 严重度 |
|------|---------|--------|
| **Android/Termux 完全不可用** | 移动开发者 | 🔴 高 |
| **OneDrive 场景聊天历史丢失** | Windows 企业用户 | 🔴 高 |
| **Prompt Cache 大量失效** | 高频使用 Opus 的用户 | 🟠 中高 |
| **Telegram 插件通知失效** | 插件用户 | 🟠 中 |
| **Cowork 指令回退** | 团队协作场景 | 🟠 中 |

### 💡 高频反馈

1. **需要官方多代理 SDK/协议** — 多个 Issue 独立提出类似需求，表明市场强烈需求
2. **移动端体验待优化** — iOS/Android 的推送通知、远程控制问题反复出现
3. **文档/安装方式需同步更新** — #69710 反映了文档与实际安装方式的脱节

---

> **报告说明：** 本日报基于 GitHub 公开数据自动生成，选取评论数≥2 或 👍≥4 的活跃 Issue。如需更深入分析特定议题，请回复告知。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：** 2026-06-21
**版本：** rust-v0.142.0-alpha.8 / Codex Desktop 26.616

---

## 1. 今日速览

今日 Codex 社区最为突出的动态集中在两个方向：**一是 26.616 版本引入的 `sandboxPolicy` 缺失 bug 大面积爆发**，影响 Windows/macOS 多平台用户的 node_repl、Chrome、Computer Use 等核心工具链，社区反馈极为活跃；二是代码库内部正在推进 **code-mode 会话运行时的全面重构**，一周内已提交 10+ 个 PR，涵盖 cell 生命周期管理、session 所有权迁移等底层架构变更，显示出重大内部迭代意图。

---

## 2. 版本发布

### rust-v0.142.0-alpha.8

**发布类型：** Alpha 预发布
**发布时间：** 2026-06-21

本次 alpha 版本为 0.142 分支的最新迭代，与 Codex Desktop 26.616 对应。社区尚未披露详细 changelog，结合近期 PR 活动推测主要围绕 code-mode 重构和 sandbox 元数据修复展开。建议关注后续 beta/stable 通道以获取正式修复。

🔗 https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.8

---

## 3. 社区热点 Issues（Top 10）

### 🔴 Issue #29189 — Codex Desktop node_repl 报 `sandboxPolicy` 缺失（58 评论 / 63 👍）

**严重程度：** 高
**平台：** macOS 26.5.1 arm64，Codex Desktop 26.616.41845

这是今日评论数最高的 issue。用户在最新版 Codex Desktop 中调用 node_repl MCP 工具时，收到 `codex/sandbox-state-meta missing sandboxPolicy` 错误，导致 Chrome 插件和浏览器自动化功能完全不可用。社区已确认影响范围覆盖多个平台，是一次典型的 regression。

🔗 https://github.com/openai/codex/issues/29189

---

### 🔴 Issue #28879 — Rate-limit 成本暴增 10-20 倍（40 评论 / 85 👍）

**严重程度：** 高
**影响：** ChatGPT Plus 用户预算在 2-3 个 prompt 内耗尽

自 6 月 16 日起，使用 `gpt-5.5` 的 Plus 用户发现 token 消耗速度异常——相同模型和计划下，原本可支持 20+ 次对话的 5 小时预算现在仅能支撑 2-3 次。用户日志显示 `limit-% consumed per token` 指标上升了约 10-20 倍。这是目前 👍 数量最高的 issue，反映出大量用户的实际经济损失。

🔗 https://github.com/openai/codex/issues/28879

---

### 🟠 Issue #18960 — WebSocket 频繁重连循环（50 评论 / 35 👍）

**严重程度：** 中高
**平台：** macOS，Codex App 26.417.41555

WebSocket 连接在服务器返回 `response.completed` 前被关闭，导致流式响应中断。这是一个持续较久的连接稳定性问题，今日仍有更新，表明尚未彻底解决。

🔗 https://github.com/openai/codex/issues/18960

---

### 🟠 Issue #20741 — 更新后项目对话历史消失（46 评论 / 14 👍）

**严重程度：** 中
**平台：** macOS Tahoe 26.4.1，Codex Desktop 26.429.30905

用户反映在应用更新后，所有项目级别的 chat histories 全部丢失。这是一个数据持久化相关的问题，对有长期项目积累的用户影响显著。

🔗 https://github.com/openai/codex/issues/20741

---

### 🟡 Issue #28978 — 新会话报 `missing field inputSchema`（19 评论 / 19 👍）

**严重程度：** 中
**版本：** Codex Desktop 26.616

桌面应用自动更新后，任何新会话创建均失败，报错 `Invalid request: missing field inputSchema`。CLI 使用相同配置则正常，指向桌面应用特有的 MCP 初始化路径问题。

🔗 https://github.com/openai/codex/issues/28978

---

### 🟡 Issue #10233 — 非交互式 `/status` JSON 输出请求（14 评论 / 18 👍）

**严重程度：** 低（功能增强）
**标签：** enhancement, exec

用户请求 Codex CLI 提供非交互式的 JSON 格式 `/status` 输出，用于脚本化和监控场景。当前 `/status` 为 TUI 交互式命令，无法在 headless 环境中使用。这是一个长期悬而未决的需求，社区呼声稳定。

🔗 https://github.com/openai/codex/issues/10233

---

### 🟡 Issue #14923 — 跨线程编排增强（12 评论 / 2 👍）

**严重程度：** 低（功能增强）
**标签：** enhancement, app-server

用户希望 Codex Desktop 在现有 `thread/*` 和 `turn/*` 原始操作之上，提供显式的跨线程编排能力。这与 Issue #20312（事件驱动唤醒）、#15299（入站 MCP 通知）等形成需求链，共同指向更强大的多线程/多代理协作场景。

🔗 https://github.com/openai/codex/issues/14923

---

### 🟡 Issue #15299 — 入站 MCP 通知路由（11 评论 / 6 👍）

**严重程度：** 低（功能增强）
**标签：** enhancement, mcp

用户希望外部渠道（如 channel 事件）能够通过 MCP 通知机制主动推送消息到运行中的 Codex CLI 会话。目前 Codex 仅支持出站调用 MCP tools，缺少入站通知的标准路径。这是构建事件驱动 AI Agent 的关键能力缺口。

🔗 https://github.com/openai/codex/issues/15299

---

### 🟠 Issue #29205 / #29219 / #29251 / #29215 / #29242 — 多平台 `sandboxPolicy` 缺失（各 12/12/9/8/6 评论）

**严重程度：** 高
**平台：** Windows、macOS、浏览器

这是今日最集中的 bug 集群。多个独立 issue 报告了相同的 `codex/sandbox-state-meta: missing field sandboxPolicy` 错误，影响范围涵盖：

- **Windows**（Issue #29251, #29215, #29242）：Computer Use、Chrome、node_repl 全部失败
- **macOS**（Issue #29205, #29219）：浏览器自动化和 annotation 工具不可用
- **WSL2**（Issue #22469）：GPU 访问被 bubblewrap 阻止

值得注意的是，PR #29268 已回滚了 #28914 的 MCP sandbox 元数据作用域变更，暗示团队正在紧急修复这一 regression。

🔗 https://github.com/openai/codex/issues/29205 | https://github.com/openai/codex/issues/29219 | https://github.com/openai/codex/issues/29251

---

### 🟡 Issue #29281 — Windows 11 空闲时风扇持续运转（1 评论 / 0 👍）

**严重程度：** 低
**平台：** Windows 11，Codex 26.616.4196.0

用户报告更新后即使 Codex 处于空闲状态，GPU/CPU 仍持续高负载，风扇噪音明显。这可能与后台进程或渲染循环有关，虽评论数少但影响日常使用体验。

🔗 https://github.com/openai/codex/issues/29281

---

## 4. 重要 PR 进展（Top 10）

### 🔵 PR #29292 — 暴露传输无关的 SessionRuntime

**作者：** @cconger
**状态：** OPEN（2026-06-21）

这是 code-mode 重构系列中最重要的 PR 之一。核心变更包括：

- 公开传输无关的 `SessionRuntime`、运行时事件、请求和委托契约
- 为运行时实例生成不透明的 16 字符 cell ID
- 保持协议适配器层叠于公共运行时 API 之上

这是为后续多传输层支持奠定基础的关键架构变更。

🔗 https://github.com/openai/codex/pull/29292

---

### 🔵 PR #29291 — 暴露 create 和 observe 操作

**作者：** @cconger
**状态：** OPEN（2026-06-21）

将 session 级别的 execute/wait 特殊形式替换为显式的 create 和 observe 操作，并添加初始观察守卫——若首次观察被取消则终止 cell。这将改变 cell 的生命周期管理语义。

🔗 https://github.com/openai/codex/pull/29291

---

### 🔵 PR #29290 — 解耦 cell 创建与观察

**作者：** @cconger
**状态：** OPEN（2026-06-21）

允许 `SessionRuntime` 在不附加观察者的情况下创建 cell，缓冲完成事件、pending frontiers 和初始 yield，直到观察者到达。这是实现异步 cell 生命周期的基础。

🔗 https://github.com/openai/codex/pull/29290

---

### 🔵 PR #29287 — 使 session 关闭具有权威性

**作者：** @cconger
**状态：** OPEN（2026-06-21）

为每个 session 和 cell 提供层级化取消令牌（cancellation token），跟踪 cell 任务使关闭操作等待已接收的 actor 而非轮询注册表。这解决了并发场景下最佳努力注册表扫描可能遗漏 cell 的问题。

🔗 https://github.com/openai/codex/pull/29287

---

### 🔵 PR #29285 — 将 session 所有权移入 runtime

**作者：** @cconger
**状态：** OPEN（2026-06-21）

将 code-mode cell 所有权和共享存储值从 `CodeModeService` 移入 `SessionRuntime`，在运行时层面建立所有权和隔离覆盖。这是 transport-neutral 架构的核心一步。

🔗 https://github.com/openai/codex/pull/29285

---

### 🟢 PR #29268 — 回滚 MCP sandbox 元数据作用域变更

**作者：** @celia-oai
**状态：** CLOSED（2026-06-20）

**关键 PR。** 回滚了 commit 790213ded0588d824e99f830f41f04f3d98196df（#28914 的 "Scope MCP sandbox metadata to server environment"）。这一回滚直接关联今日大量 `sandboxPolicy` 缺失的 bug report，团队正在通过回滚+重新修复的方式解决 regression。

🔗 https://github.com/openai/codex/pull/29268

---

### 🟢 PR #29282 — 将 live context diffing 移入 world state

**作者：** @pakrym-oai
**状态：** OPEN（2026-06-21）

将模型可见设置的 diffing 逻辑从临时环境 world state 和 `context_manager/updates.rs` 中的临时 builder 统一整合，解决了多轮迭代中内存 world baseline 不完整和初始上下文渲染重复的问题。

🔗 https://github.com/openai/codex/pull/29282

---

### 🟢 PR #29249 — 将环境上下文迁移至 model world state

**作者：** @pakrym-oai
**状态：** OPEN（已 code-reviewed）

为 Codex 添加了最小化的端到端 model world-state 切片（仅 environments），与现有 initial-context 和 settings-diff 路径集成。提供了可重放的 typed 环境状态表示，替代原有的临时 turn 值渲染。

🔗 https://github.com/openai/codex/pull/29249

---

### 🟢 PR #28806 — 优化 resume 和 fork history

**作者：** @anaiskillian
**状态：** OPEN（2026-06-17 更新）

应用 checkpoint-backed resume 和 copy-on-write fork 优化，显著降低冷启动 `thread/resume` 和 `thread/fork` 的历史处理开销，同时保留对 legacy、malformed、rollback-sensitive 和 metadata-sensitive 回滚场景的兼容。

🔗 https://github.com/openai/codex/pull/28806

---

### 🟢 PR #26229 — 为 core 和 app server 添加 protected data mode

**作者：** @bbrunner-oai
**状态：** CLOSED（2026-06-20）

为 Codex 添加了 core 持有的 Protected Data Mode 状态。MCP tool 结果可通过 `openai/protected_data_mode` 标记激活该模式，core 在 resume、fork、thread-store 和 rollout 路径中合并并持久化该状态。激活期间 connector 调用需要显式授权。

🔗 https://github.com/openai/codex/pull/26229

---

## 5. 功能需求趋势

从今日 37 条 Issues 中提炼出以下社区关注方向：

| 排名 | 功能方向 | 代表 Issue | 热度 |
|------|----------|-----------|------|
| 1 | **沙箱/sandbox 稳定性** | #29189, #29205, #29219 等 | 🔴 极高 |
| 2 | **MCP 生态扩展** | #15299, #28978, #29279 | 🟠 高 |
| 3 | **会话生命周期管理** | #14923, #20312, #10233 | 🟡 中 |
| 4 | **跨平台一致性**（Windows 问题集中） | #29251, #29215, #29281 | 🟠 高 |
| 5 | **成本/配额透明** | #28879 | 🔴 极高 |
| 6 | **外部集成**（Telegram, Slack） | #21166, #20475 | 🟡 中 |
| 7 | **性能优化** | #29281, #28241 | 🟡 中 |

**核心趋势：** 社区当前最迫切的需求是**稳定性修复**（sandbox regression、rate-limit 异常），其次是 **MCP 协议能力的深化**（入站通知、OAuth 集成）和**跨平台一致性保障**。

---

## 6. 开发者关注点

### 🔧 最高优先级痛点：sandboxPolicy regression

26.616 版本引入的 `sandboxPolicy` 缺失 bug 是今日开发者社区最集中的投诉。该 bug 导致：

- **node_repl** 完全不可用，进而影响 Chrome、Computer Use 等依赖工具
- 影响 Windows、macOS、Web 多平台
- PR #29268 已回滚相关变更，修复路径明确但尚未合入

**建议开发者：** 暂缓升级至 26.616，或关注 alpha/beta 通道的 hotfix 发布。

### 💰 Rate-limit 成本异常

`gpt-5.5` 的 token 消耗在 6 月 16 日后出现 10-20 倍异常增长，导致 Plus 用户预算快速耗尽。这是直接影响用户成本的核心问题，需优先确认是否为服务端计费逻辑变更或模型层面的 regression。

### 🏗️ 架构变更信号

code-mode 的 SessionRuntime 重构（PR #29285-#29292）表明 Codex 正在推进底层架构的 transport-neutral 化，预计将影响未来 MCP 工具调用、cell 生命周期和 session 管理的实现方式。外部开发者应关注这些 PR 的合并进度和 changelog。

### 🪟 Windows 平台问题突出

今日 Windows 相关 Issues 数量显著高于 macOS，涵盖 sandbox、浏览器自动化、性能等多个维度。如主要在 Windows 环境使用 Codex，建议密切关注后续修复进展。

---

*本日报由技术分析师基于 github.com/openai/codex 公开数据整理生成。数据截止时间：2026-06-21。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-06-21

---

## 1. 今日速览

今日社区活跃度较高，共更新 49 个 Issues 和 17 个 Pull Requests。**核心动态**：夜间构建失败（v0.49.0-nightly），登录认证问题再次出现；社区正推进 AST 感知工具、组件级评估体系等长期技术改进；MCP 集成、Auto Memory 模块和 Agent 稳定性成为修复重点。

---

## 2. 版本发布

**无新版本发布**

> ⚠️ 今日夜间构建失败：v0.49.0-nightly.20260621.gc22137ea0 构建异常，详情见 [Issue #28067](https://github.com/google-gemini/gemini-cli/issues/28067)

---

## 3. 社区热点 Issues

### 🔥 Top 10 热门 Issues

| # | Issue | 评论 | 点赞 | 关键点 |
|---|-------|------|------|--------|
| 1 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** - 组件级评估体系 | 7 | 0 | 跟进行为评估测试，已生成 76 个评估用例，计划扩展至 6 个支持的 Gemini 模型 |
| 2 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** - AST 感知文件读写与搜索 | 7 | 1 | 探索 AST 感知工具以提升代码导航精度、减少 token 消耗 |
| 3 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** - Generalist Agent 挂起问题 | 7 | 8 | P1 Bug：通用 Agent 执行时永久挂起，简单操作如创建文件夹也会阻塞 |
| 4 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** - Subagent MAX_TURNS 后误报成功 | 6 | 2 | P1 Bug：子代理达到最大轮次后仍报告 `GOAL` 成功，掩盖实际中断 |
| 5 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** - Gemini 不主动使用 Skills/Sub-agents | 6 | 0 | 模型极少自发调用自定义 Skills，需显式指令才能触发 |
| 6 | **[#23195](https://github.com/google-gemini/gemini-cli/issues/23195)** - isFunctionCall 空数组误判 Bug | 5 | 0 | P2 Bug：`Array.every([])` 导致空 parts 数组被错误分类 |
| 7 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** - Auto Memory 日志脱敏与安全 | 5 | 0 | 安全增强：自动内存模块需确定性脱敏，减少日志泄露风险 |
| 8 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** - Auto Memory 低信号会话重试 | 5 | 0 | 修复无限重试低价值会话的逻辑缺陷 |
| 9 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** - Shell 命令执行后挂起 | 4 | 3 | P1 Bug：CLI 命令完成后仍显示"等待输入"，进程卡死 |
| 10 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** - Browser Subagent 在 Wayland 下失败 | 4 | 1 | Browser Agent 在 Wayland 环境异常终止 |

### 📌 新增重要 Issue

| Issue | 类型 | 说明 |
|-------|------|------|
| **[#28066](https://github.com/google-gemini/gemini-cli/issues/28066)** | P1 Bug | Code Assist Standard 授权用户无法登录，OAuth 令牌交换失败 |

---

## 4. 重要 PR 进展

### ✅ 已合并 / 关键修复

| PR | 领域 | 说明 |
|----|------|------|
| **[#28068](https://github.com/google-gemini/gemini-cli/pull/28068)** | Core | **修复空数组误判 Bug**：guard `isFunctionCall()`/`isFunctionResponse()` 防止空 parts 数组返回 true |
| **[#27878](https://github.com/google-gemini/gemini-cli/pull/27878)** | Core | **MCP 图片 MIME 类型嗅探**：修复 WebP 等格式被误标为 `image/png` 导致 400 错误 |
| **[#27889](https://github.com/google-gemini/gemini-cli/pull/27889)** | Core | **MCP OAuth 刷新修复**：自动发现服务器无静态 clientId 时的令牌刷新路径 |
| **[#27856](https://github.com/google-gemini/gemini-cli/pull/27856)** | Security | **CVE-2026-9277 修复**：升级 shell-quote 1.8.3 → 1.8.4（严重安全漏洞）|
| **[#27887](https://github.com/google-gemini/gemini-cli/pull/27887)** | CLI | **自定义主题边框修复**：使 `border.default` 配置在 OSC 11 终端下生效 |
| **[#27886](https://github.com/google-gemini/gemini-cli/pull/27886)** | Core | **.gitignore 兼容性**：session_context 目录树现在正确遵守忽略规则 |
| **[#27888](https://github.com/google-gemini/gemini-cli/pull/27888)** | Core | **MCP 工具 Schema 规范化**：确保工具输入 schema 符合 Vertex AI 严格模式要求 |
| **[#28059](https://github.com/google-gemini/gemini-cli/pull/28059)** | CLI | **Cloud Shell 崩溃修复**：处理 .env 文件无读取权限（EACCES）时的优雅降级 |
| **[#28065](https://github.com/google-gemini/gemini-cli/pull/28065)** | Core | **依赖升级**：google-auth-library 升级至 10.7.0 |

### 📝 文档与工具改进

| PR | 说明 |
|----|------|
| **[#28064](https://github.com/google-gemini/gemini-cli/pull/28064)** | 补充 `BeforeTool` hook `decision: "ask"` 行为文档 |
| **[#28057](https://github.com/google-gemini/gemini-cli/pull/28057)** | 完善 `LLMResponse.usageMetadata` 字段文档 |
| **[#28058](https://github.com/google-gemini/gemini-cli/pull/28058)** | Eval inventory 命令新增 `--json` 输出支持，便于 CI 集成 |

---

## 5. 功能需求趋势

基于 49 个 Issues 的分析，社区关注的功能方向如下：

### 📊 需求热度排行

| 排名 | 功能方向 | 相关 Issues | 趋势解读 |
|------|----------|-------------|----------|
| 1 | **Agent 稳定性与可靠性** | #21409, #22323, #21968, #25166 | 🔴 高热：挂起、误报、调用不足问题集中 |
| 2 | **Auto Memory 增强** | #26525, #26522, #26523, #26516 | 🔴 高热：日志安全、重试逻辑、异常处理 |
| 3 | **MCP 集成完善** | #27878, #27889, #27888 | 🟡 中热：OAuth、Schema、类型检测 |
| 4 | **AST 感知工具** | #22745, #22746, #22747 | 🟡 中热：代码导航精度提升 |
| 5 | **评估测试体系** | #24353, #23166, #23313 | 🟡 中热：组件级评估、测试稳定性 |
| 6 | **Browser Agent** | #21983, #22267, #22232 | 🟢 稳定：Wayland 兼容、配置覆盖 |
| 7 | **IDE 集成** | #27885 | 🟢 稳定：资源泄漏修复 |

---

## 6. 开发者关注点

### 🔧 核心痛点

1. **Agent 行为不可预测**
   - Subagent 挂起、误报成功、无法自发调用 Skills
   - 建议：增加更多行为评估测试（#24353）

2. **Auto Memory 模块成熟度**
   - 日志脱敏不彻底、重试逻辑缺陷、异常处理不完善
   - 建议：重构会话处理与错误恢复机制

3. **Shell 执行稳定性**
   - 命令完成后仍"等待输入"、交互式提示卡死
   - 建议：改进进程管理与输出解析

4. **MCP 集成兼容性**
   - OAuth 刷新路径、Schema 验证、图片类型检测
   - 建议：统一 MCP 服务器适配层

### 💡 高频需求

| 需求 | 出现频次 | 代表 Issue |
|------|----------|-----------|
| 提升 Agent 自主性 | 高 | #21968, #21432 |
| 增强评估测试覆盖 | 高 | #24353, #23166 |
| 改善终端兼容性 | 中 | #21924, #21983 |
| 安全与隐私增强 | 中 | #26525, #27856 |

---

## 📅 明日关注

1. 夜间构建失败原因调查（#28067）
2. 登录认证问题修复进展（#28066）
3. 空数组 Bug 修复 PR 合并情况（#28068）

---

*报告生成时间: 2026-06-21 | 数据来源: github.com/google-gemini/gemini-cli*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*