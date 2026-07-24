# AI CLI 工具社区动态日报 2026-07-24

> 生成时间: 2026-07-24 02:39 UTC | 覆盖工具: 3 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告日期：2026-07-24**

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**三足鼎立、快速迭代**的格局。Claude Code 聚焦模型授权与跨平台网络稳定性，OpenAI Codex 全力推进 MCP 协议与沙箱安全基础设施建设，Gemini CLI 则在安全修复与 IDE 集成层面密集发力。三者共同面临的核心挑战是**企业级功能缺失**——远程控制、多会话管理、可观测性支持均处于早期需求阶段，尚未形成统一的行业标准。

---

## 2. 各工具活跃度对比

| 指标 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **今日 Issues 更新** | 50 | 46 | 41 |
| **今日 PR 更新** | 4 | 10+ | 34 |
| **版本发布** | 无 | 2 个 Alpha 版本 | 无 |
| **安全类 PR** | 1 个（命令注入修复） | 2 个（沙箱/代理） | 2 个（TOCTOU/信任对话框） |
| **功能类 PR** | 3 个 | 8 个 | 32 个 |
| **社区热度最高 Issue** | #5674 (50 评论) | #20214 (75 评论) | #22415 (31 评论) |
| **最高票功能请求** | #29006 远程控制 (114 票) | #4003 行尾符 (71 票) | #1698 EDITOR 支持 (55 票) |

**数据洞察：**
- **Gemini CLI** PR 活跃度最高（34 个），但 Issues 评论量最低，反映社区以开发者贡献为主、用户反馈为辅的结构
- **OpenAI Codex** 版本迭代最快（双 Alpha 版本），处于密集开发期
- **Claude Code** Issues 量领先但 PR 量最低，社区以问题反馈为主

---

## 3. 共同关注的功能方向

### 3.1 MCP 协议支持（三者均涉及）

| 工具 | 具体诉求 | 相关 Issue |
|------|----------|------------|
| **Claude Code** | 会话标识符缺失，无法区分并发会话 | #41836 |
| **OpenAI Codex** | 项目级进程池，减少重复启动开销 | #20883 |
| **Gemini CLI** | ACP 模式下流式响应缺失 | #20977 |

**趋势研判：** MCP 已从 Claude 专属协议演变为行业事实标准，三者均在推进各自实现，但兼容性与互操作性尚未提上日程。

### 3.2 可观测性与监控

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | OpenTelemetry 集成请求（#80745） |
| **OpenAI Codex** | `codex.apps.read.duration_ms` 指标追踪（已合并 #35048） |
| **Gemini CLI** | 停滞检测机制（已合并 #28331） |

**趋势研判：** 企业级可观测性需求初现，预计未来 1-2 个季度将成为标配功能。

### 3.3 跨平台稳定性

| 工具 | 平台问题 |
|------|----------|
| **Claude Code** | macOS ECONNRESET（#5674） |
| **OpenAI Codex** | Windows 11 CPU 饱和、进程清理风暴（#34879、#34260） |
| **Gemini CLI** | 模型连接不稳定（#19441） |

**趋势研判：** 跨平台网络层问题呈集群爆发态势，可能存在共同的底层依赖（如 HTTP 客户端库）问题。

---

## 4. 差异化定位分析

### 4.1 功能侧重

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **核心优势** | 模型选择灵活性（Fable/Opus） | MCP 工具系统深度集成 | 安全修复响应速度 |
| **技术路线** | 模型无关层抽象 | Rust 重构 + 沙箱优先 | TypeScript/云原生集成 |
| **企业功能** | 远程控制（规划中） | Guardian V2 沙箱审查 | GCP Cloud Run 部署 |
| **开发者体验** | TUI 渲染、终端交互 | CLI 性能、延迟追踪 | IDE 伴侣、Cursor 兼容 |

### 4.2 目标用户画像

| 工具 | 核心用户 |
|------|----------|
| **Claude Code** | 个人开发者、Max 计划订阅用户，偏好模型选择自由度 |
| **OpenAI Codex** | 企业开发者，注重安全沙箱与代码修改安全 |
| **Gemini CLI** | Google 生态用户，GCP 集成场景，偏好云原生部署 |

### 4.3 技术路线差异

```
Claude Code ──→ 模型抽象层 ──→ 跨模型兼容
OpenAI Codex ──→ Rust 重构 ──→ 性能与安全优先
Gemini CLI  ──→ 云原生集成 ──→ GCP 生态融合
```

---

## 5. 社区热度与成熟度

### 5.1 成熟度评估

| 指标 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **Issue 响应速度** | 中（热门 Issue 积压） | 中（Windows 问题优先） | 快（安全修复 24h 内合并） |
| **PR 合并率** | 低（4 个 PR 全部 Open） | 高（10 个 PR 全部 Closed） | 高（2 个安全 PR 已合并） |
| **版本发布节奏** | 慢（今日无发布） | 快（双 Alpha 版本） | 慢（今日无发布） |
| **社区治理** | Issue 驱动 | PR 驱动 | PR + Issue 双驱动 |

### 5.2 发展阶段判断

| 工具 | 阶段 | 依据 |
|------|------|------|
| **Claude Code** | 规模化运营期 | Issue 量领先但 PR 转化率低，社区以反馈为主 |
| **OpenAI Codex** | 密集重构期 | Rust CLI 重构 + 多项基础设施 PR，版本迭代快 |
| **Gemini CLI** | 安全加固期 | 安全类 PR 占比高，核心功能趋于稳定 |

---

## 6. 值得关注的趋势信号

### 6.1 行业趋势提炼

| 趋势 | 证据 | 对开发者的参考价值 |
|------|------|-------------------|
| **MCP 协议标准化** | 三者均推进 MCP 实现 | 建议优先学习 MCP 协议，开发跨工具兼容的扩展 |
| **企业级功能缺口** | 远程控制（114 票）、多会话（高频需求） | 2026 年下半年将出现统一解决方案窗口期 |
| **安全优先原则** | 三者均在修复沙箱/注入/TOCTOU 问题 | 生产环境使用需关注安全配置，建议启用沙箱模式 |
| **跨平台网络层问题** | macOS/Windows/Linux 均出现连接问题 | 避免依赖单一网络库，关注代理配置兼容性 |

### 6.2 技术决策者行动项

| 角色 | 优先级 | 建议 |
|------|--------|------|
| **企业技术负责人** | 高 | 评估 OpenAI Codex Guardian V2 沙箱能力；关注 Claude Code 远程控制功能进展 |
| **AI 工具链开发者** | 高 | 投入 MCP 协议开发；关注 OpenTelemetry 集成标准 |
| **安全工程师** | 中 | 跟进 Gemini CLI TOCTOU 修复；评估 OpenAI Codex 沙箱注入风险 |
| **个人开发者** | 中 | 关注 Claude Code Fable 5 授权问题修复；暂缓 Windows 用户升级至 26.715+ 版本 |

### 6.3 风险预警

| 工具 | 风险等级 | 风险描述 |
|------|----------|----------|
| **OpenAI Codex** | 🔴 高 | Windows 11 版本导致机器不可用，建议生产环境锁定旧版本 |
| **Claude Code** | 🟡 中 | macOS 网络问题影响任务连续性，建议配置本地代理 |
| **Gemini CLI** | 🟢 低 | CLI 挂起问题影响交互体验，但不影响后台任务 |

---

**报告结语：**

当前 AI CLI 工具生态正处于**协议标准化与安全加固**双重转型的关键节点。MCP 协议从 Claude 专属走向行业共识，安全机制从可选配置变为默认要求，跨平台稳定性从边缘问题升级为核心需求。开发者应重点关注 MCP 协议演进与企业级功能落地节奏，以在工具链整合中获得先发优势。

*本报告基于 2026-07-24 公开数据生成，建议结合内部使用场景做针对性验证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-24 | 数据来源：github.com/anthropics/anthropics/skills**

---

## 1. 热门 Skills 排行

以下按社区关注度（评论活跃度、功能影响力）筛选最具代表性的 PR：

### ① `skill-creator` 核心缺陷修复（多 PR 联动）
**PR #1298 · #1323 · #1099 · #1050 · #1169（Issue）**

| 维度 | 详情 |
|---|---|
| **功能** | 修复 `run_eval.py` 在 Windows 环境下报告 0% recall 的根本性 bug；修复 subprocess PATHEXT 查找、cp1252 编码、pipe select 等跨平台兼容性问题 |
| **社区热点** | 这是当前社区最集中的技术痛点——**10+ 独立用户复现**了 `run_loop.py` 优化循环完全失效的问题，导致所有 skill 描述优化工作流瘫痪 |
| **状态** | OPEN（多个 PR 互有关联，尚未合并） |

> 链接：https://github.com/anthropics/skills/pull/1298

---

### ② `self-audit` — 四维推理质量门禁
**PR #1367 · Issue #1385（配套提案）**

| 维度 | 详情 |
|---|---|
| **功能** | 在 AI 输出交付前执行机械文件验证 + 四维推理审计（按危害优先级排序），通用适配任意项目和技术栈 |
| **社区热点** | 提出"机械验证优先 → 推理审计其次"的分层质量门禁理念，配套有完整的 Issue 讨论线程 |
| **状态** | OPEN（v1.3.0，活跃开发中） |

> 链接：https://github.com/anthropics/skills/pull/1367

---

### ③ `document-typography` — 排版质量控制
**PR #514**

| 维度 | 详情 |
|---|---|
| **功能** | 消除 AI 生成文档中的常见排版问题：孤行（1-6 词溢出）、寡妇段落（章节标题滞留页底）、编号错位 |
| **社区热点** | 定位"影响所有 Claude 生成文档"的通用性问题，解决方案覆盖 PDF/DOCX/ODT 等多种输出格式 |
| **状态** | OPEN |

> 链接：https://github.com/anthropics/skills/pull/514

---

### ④ `testing-patterns` — 全栈测试模式库
**PR #723**

| 维度 | 详情 |
|---|---|
| **功能** | 覆盖测试金字塔哲学 → 单元测试（AAA 模式）→ React 组件测试（Testing Library）→ E2E 测试的完整技能栈 |
| **社区热点** | 填补 Claude Code 在测试生成场景下缺乏结构化指导的空白 |
| **状态** | OPEN |

> 链接：https://github.com/anthropics/skills/pull/723

---

### ⑤ `color-expert` — 色彩专业知识技能
**PR #1302**

| 维度 | 详情 |
|---|---|
| **功能** | 覆盖色彩命名系统（ISCC-NBS、Munsell、XKCD、RAL 等）、色彩空间选用指南（OKLCH 标度、OKLAB 渐变、CAM16 等） |
| **社区热点** | 面向设计/前端场景的专业知识型 Skill，近期更新活跃（2026-07-21） |
| **状态** | OPEN |

> 链接：https://github.com/anthropics/skills/pull/1302

---

### ⑥ `pyxel` — 像素游戏开发技能
**PR #525**

| 维度 | 详情 |
|---|---|
| **功能** | 对接 `pyxel-mcp` MCP 服务器，支持 Python 像素/复古游戏全流程开发（write → run_and_capture → inspect → 迭代） |
| **社区热点** | 面向游戏开发垂直场景，连接 MCP 协议与 Claude Code 工具链 |
| **状态** | OPEN（2026-07-15 仍有更新） |

> 链接：https://github.com/anthropics/skills/pull/525

---

### ⑦ `skill-quality-analyzer` + `skill-security-analyzer` — 元技能对
**PR #83**

| 维度 | 详情 |
|---|---|
| **功能** | 对 Skill 进行五维度质量评估（结构/文档 20%、触发精度、输出质量、安全性、兼容性）；安全分析器扫描权限滥用和敏感数据泄露 |
| **社区热点** | 面向 Skill 开发者的工作流工具，与 Issue #492（安全信任边界问题）形成呼应 |
| **状态** | OPEN |

> 链接：https://github.com/anthropics/skills/pull/83

---

## 2. 社区需求趋势

从 Issues 提炼出的核心诉求方向：

| 趋势方向 | 代表 Issue | 核心诉求 |
|---|---|---|
| **🔒 安全与信任** | #492（43 评论，最热门 Issue） | 社区 Skill 滥用 `anthropic/` 命名空间冒充官方技能，存在权限滥用风险；需建立分发签名或命名隔离机制 |
| **🏢 企业协作** | #228（14 评论） | 企业场景下急需 org 级 Skill 共享机制（当前只能手动导出/导入 .skill 文件） |
| **🐛 工具链稳定性** | #556（12 评论） | `run_eval.py` 的 0% 触发率是阻塞性 bug，影响所有依赖 skill-creator 的开发者 |
| **📦 插件去重** | #189（6 评论，👍 9） | `document-skills` 和 `example-skills` 插件内容完全重复，污染上下文窗口 |
| **🔌 协议扩展** | #16 | 社区期待将 Skills 暴露为 MCP（Model Context Protocol）接口，实现更标准化的工具封装 |
| **☁️ 部署灵活性** | #29 | AWS Bedrock 用户的 Skills 兼容性问题尚无官方解答 |

---

## 3. 高潜力待合并 Skills

以下 PR 具备**高评论活跃度 + 明确功能价值**，近期合并可能性较高：

| 排名 | PR | 亮点 | 合并预期 |
|---|---|---|---|
| ⭐⭐⭐ | **#1367** `self-audit` | 质量门禁理念完整，配套 Issue #1385 有深度讨论 | **高** |
| ⭐⭐⭐ | **#1298** `skill-creator` 修复 | 解决 10+ 用户报告的阻塞性 bug，多 PR 联动 | **高**（但需协调多个关联 PR） |
| ⭐⭐ | **#83** `skill-quality/security-analyzer` | 元技能工具体系完整，与安全 Issue #492 需求呼应 | **中高** |
| ⭐⭐ | **#723** `testing-patterns` | 测试领域垂直深度强，社区呼声高 | **中** |
| ⭐⭐ | **#1302** `color-expert` | 近期活跃更新，专业知识覆盖全面 | **中** |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是：修复 `skill-creator` 工具链的阻塞性 bug（尤其是 Windows 兼容性和 0% recall 问题），同时在安全信任边界得到保障的前提下，扩展 Skills 在企业协作、专业领域（测试、排版、色彩）和 MCP 协议层面的能力边界。**

---

*报告生成时间：2026-07-24 | 数据覆盖：50 条 PR + 14 条 Issues*

---

# Claude Code 社区动态日报

**日期：2026-07-24**

---

## 1. 今日速览

今日 Claude Code 社区呈现三大焦点：**Fable 5 模型在 Max 计划上的额度验证出现大规模故障**，多个用户报告被错误要求使用付费额度；**macOS 平台网络连接问题持续发酵**，ECONNRESET 错误已积累 50 条评论；此外，**MCP 连接器和 OpenTelemetry 监控**成为新的功能需求热点。社区活跃度较高，共更新 50 个 Issues 和 4 个 Pull Requests。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 社区热点 Issues

以下为今日评论数最多的 10 个 Issues，按热度排序：

| # | Issue | 评论 | 点赞 | 摘要 |
|---|-------|------|------|------|
| 1 | [#5674](https://github.com/anthropics/claude-code/issues/5674) | 50 | 47 | **[BUG] macOS 网络连接持续出现 ECONNRESET 错误** — 仅在 Mac 上复现，Windows/Linux 同网络环境正常，严重影响任务执行 |
| 2 | [#79337](https://github.com/anthropics/claude-code/issues/79337) | 40 | 12 | **[BUG] Fable 5 在 Max 计划上错误提示需要使用额度** — 2026-07-20 起静默降级至 Opus 4.8，影响大量 Max 用户 |
| 3 | [#29006](https://github.com/anthropics/claude-code/issues/29006) | 35 | 114 | **[FEATURE] 启用 Claude 桌面应用的远程控制功能** — 高票功能请求，允许远程操控 Claude Code 会话 |
| 4 | [#69415](https://github.com/anthropics/claude-code/issues/69415) | 33 | 65 | **[BUG] API 连接在响应中途关闭** — VS Code/Win 环境高频触发，已影响日常使用 |
| 5 | [#41836](https://github.com/anthropics/claude-code/issues/41836) | 14 | 24 | **MCP 服务器缺少会话标识符** — 无法区分并发会话，阻碍服务端状态管理 |
| 6 | [#64961](https://github.com/anthropics/claude-code/issues/64961) | 10 | 5 | **[BUG] Opus 4.7/4.8 Token 使用量回退 2-3 倍** — 更新后 token 消耗异常增加 |
| 7 | [#69336](https://github.com/anthropics/claude-code/issues/69336) | 9 | 11 | **[BUG] Linux 新建会话窗口立即出现连接中断** — API 错误影响 Linux 用户 |
| 8 | [#80016](https://github.com/anthropics/claude-code/issues/80016) | 9 | 0 | **[BUG] Windows 文件系统扩展握手成功但工具从未调用** — 需重新安装也无法修复 |
| 9 | [#49985](https://github.com/anthropics/claude-code/issues/49985) | 8 | 22 | **[BUG] 终端对话重复渲染/显示多次** — TUI 渲染异常，影响交互体验 |
| 10 | [#79341](https://github.com/anthropics/claude-code/issues/79341) | 7 | 10 | **[BUG] Max 20x 计划仍被强制使用额度运行 Fable 5** — 与 #79337 类似，额度逻辑错误 |

**重点关注：**

- **#5674** 和 **#69415/#69336** 形成网络连接问题集群，涉及 macOS/Windows/Linux 全平台，可能是底层网络库或 API 代理层问题
- **#79337/#79341/#80749** 形成 Fable 5 额度验证问题链，自 7 月 20 日 Fable 5 成为 Max 标准功能后集中爆发
- **#29006** 远程控制功能获得 114 票支持，反映企业级使用场景需求强烈

---

## 4. 重要 PR 进展

过去 24 小时内共更新 4 个 Pull Requests：

| # | PR | 状态 | 内容摘要 |
|---|-----|------|----------|
| 1 | [#80508](https://github.com/anthropics/claude-code/pull/80508) | OPEN | **修复自动关闭重复项脚本的分页问题** — 修复了 `auto-close-duplicates.ts` 中评论和反应读取未正确分页的 bug |
| 2 | [#80495](https://github.com/anthropics/claude-code/pull/80495) | OPEN | **修复 /ralph-loop 将提示文本解析为 shell 代码** — 修复 `$ARGUMENTS` 直接拼入 shell 导致的命令注入问题 |
| 3 | [#41611](https://github.com/anthropics/claude-code/pull/41611) | OPEN | **添加缺失的源代码** — 贡献者提交了遗漏的源码文件 |
| 4 | [#42604](https://github.com/anthropics/claude-code/pull/42604) | CLOSED | **移除前端设计技能中的"复古未来主义"建议** — 已被合并关闭 |

**PR 分析：**
- **#80508** 和 **#80495** 来自同一贡献者 @Serhii-Leniv，修复了脚本层面的 bug，建议优先审查
- **#80495** 修复了潜在的安全问题（命令注入），属于高优先级修复
- **#42604** 已关闭，说明维护团队已处理该清理请求

---

## 5. 功能需求趋势

从今日 Issues 中提炼出以下功能方向热度排名：

| 排名 | 功能方向 | 相关 Issue | 热度指数 |
|------|----------|------------|----------|
| 🥇 | **模型额度/授权逻辑** | #79337, #79341, #80749, #80750 | ⭐⭐⭐⭐⭐ |
| 🥈 | **网络连接稳定性** | #5674, #69415, #69336 | ⭐⭐⭐⭐ |
| 🥉 | **IDE 集成增强** | #29006, #64968, #49985 | ⭐⭐⭐ |
| 4 | **MCP 协议支持** | #41836, #77704, #76040 | ⭐⭐⭐ |
| 5 | **OpenTelemetry 监控** | #80745 | ⭐⭐ |
| 6 | **PDF/文档处理优化** | #80449 | ⭐⭐ |
| 7 | **权限/沙箱管理** | #80736 | ⭐⭐ |

**趋势洞察：**
1. **Fable 5 授权问题**成为今日最热话题，多个相关 Issue 集中爆发，需关注官方后续修复
2. **跨平台网络稳定性**持续是痛点，macOS 尤甚
3. **MCP 协议**相关需求增长，涵盖会话标识、工具列表、JSON Schema 解析等
4. **可观测性**需求初现，OpenTelemetry 集成请求表明企业用户对监控的重视

---

## 6. 开发者关注点

综合今日社区反馈，开发者主要关注以下痛点：

### 🔴 高优先级问题

1. **网络连接可靠性**
   - macOS 频繁出现 ECONNRESET，影响任务连续性
   - API 响应中途断开，导致工作丢失
   - 建议：检查网络代理配置，关注官方网络层更新

2. **模型额度计算错误**
   - Fable 5 在 Max 计划上被错误拦截
   - 使用额度与计划额度混淆
   - 建议：临时使用 `/model` 命令手动指定模型

### 🟡 中等优先级问题

3. **TUI 渲染异常**
   - 对话重复显示、问题文本缺失
   - 全屏模式下 Bash 输出为空

4. **Windows 平台兼容**
   - 文件系统扩展失效
   - GitHub 同步功能异常

### 🟢 新功能期待

5. **远程控制能力**（114 票支持）
6. **VS Code 语法高亮**（21 票支持）
7. **OpenTelemetry 增强属性**

---

**报告生成时间：2026-07-24**

*数据来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**: 2026-07-24

---

## 1. 今日速览

今日 Codex 社区呈现**"Windows 平台集中爆发"**的态势——多个高优先级 Issue 集中反馈 Windows 11 上的性能问题（CPU 饱和、进程清理风暴、冻结卡顿），同时开发团队持续推进 MCP 工具系统和沙箱安全功能的完善。版本方面，Rust CLI 发布了 v0.146.0-alpha.5 和 v0.146.0-alpha.3.1 两个预览版本，重点改进了延迟工具命名空间追踪和 exec-server 网络代理路由。

---

## 2. 版本发布

| 版本号 | 类型 | 关键变更 |
|--------|------|----------|
| **rust-v0.146.0-alpha.5** | Alpha | 最新预览版，详情见 Release 说明 |
| **rust-v0.146.0-alpha.3.1** | Alpha | 补丁版本，修复 alpha.3 的兼容性问题 |

> 📎 Release 页面: https://github.com/openai/codex/releases

---

## 3. 社区热点 Issues

### 🔴 P0 级别：Windows 性能危机

| # | Issue | 评论 | 点赞 | 摘要 |
|---|-------|------|------|------|
| **#20214** | [Windows 11 Pro 频繁冻结/卡顿](https://github.com/openai/codex/issues/20214) | 75 | 72 | AMD Ryzen 5 + 32GB 内存仍频繁冻结，Latest 版本均受影响，社区强烈要求修复 |
| **#34260** | [taskkill.exe/conhost.exe 清理风暴耗尽 WMI](https://github.com/openai/codex/issues/34260) | 28 | 9 | Windows 桌面进入无界进程清理循环，数百 taskkill 实例耗尽 WMI 配额 |
| **#34879** | [P0 回归：启动时所有 CPU 核心饱和](https://github.com/openai/codex/issues/34879) | 5 | 0 | 26.715.10079.0 版本启动即导致 32 逻辑处理器全部 100%，机器完全不可用 |

### 🟡 功能增强与体验优化

| # | Issue | 评论 | 点赞 | 摘要 |
|---|-------|------|------|------|
| **#20883** | [项目级 MCP 进程池](https://github.com/openai/codex/issues/20883) | 15 | 4 | 建议每个项目共享 MCP 服务器而非每次会话启动新进程，减少资源占用 |
| **#13036** | [支持多聊天显示](https://github.com/openai/codex/issues/13036) | 12 | 8 | macOS 单次仅支持一个聊天会话，多任务/多代理工作流受限 |
| **#35077** | [本地项目无法使用 Chat/Pro 模型](https://github.com/openai/codex/issues/35077) | 1 | 0 | 本地项目只能使用 Work chats，无法切换到 ChatGPT/Pro 模型界面 |

### 🟢 跨平台与工具调用问题

| # | Issue | 评论 | 点赞 | 摘要 |
|---|-------|------|------|------|
| **#4003** | [Windows 补丁文件行尾符混合](https://github.com/openai/codex/issues/4003) | 28 | 71 | Codex 修改文件时不遵守原有行尾符设置，导致混合 CRLF/LF |
| **#30712** | [Windows 沙箱注入可写根目录](https://github.com/openai/codex/issues/30712) | 11 | 12 | apply_patch 在沙箱模式下失败，强制降级到 PowerShell 绕过沙箱 |
| **#3355** | [MacBook 睡眠后请求错误](https://github.com/openai/codex/issues/3355) | 41 | 23 | 长时间任务（>30秒）后合盖睡眠，重新唤醒请求失败 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 关键变更 |
|---|-----|------|----------|
| **#35063** | [追踪延迟工具命名空间](https://github.com/openai/codex/pull/35063) | ✅ Closed | 新增 `deferred_tool_world_state` 功能，向模型暴露延迟工具命名空间及描述 |
| **#35065** | [避免工具搜索重复源](https://github.com/openai/codex/pull/35065) | ✅ Closed | 延迟工具已声明可用源，避免 tool_search 描述中重复列出 |
| **#35056** | [WebSocket 代理路由](https://github.com/openai/codex/pull/35056) | ✅ Closed | 远程环境连接遵循 Codex 出站代理策略，重连时同样生效 |
| **#35059** | [解耦 exec-server HTTP 类型](https://github.com/openai/codex/pull/35059) | ✅ Closed | 重命名 `ReqwestHttpClient` → `RouteAwareHttpClient`，移除 reqwest 依赖 |
| **#35054** | [禁用 update_plan 工具](https://github.com/openai/codex/pull/35054) | ✅ Closed | 新增 `tools.update_plan.enabled` 配置选项，默认开启 |
| **#35049** | [注册 Guardian V2 标志](https://github.com/openai/codex/pull/35049) | ✅ Closed | 添加 Guardian V2 特性注册，用于自动审批审查，默认关闭 |
| **#35036** | [保留 Windows 沙箱代理设置](https://github.com/openai/codex/pull/35036) | ✅ Closed | Guardian 审查命令运行时保留父会话代理配置 |
| **#35048** | [追踪 app/read 请求时长](https://github.com/openai/codex/pull/35048) | ✅ Closed | 记录 `codex.apps.read.duration_ms`，按 `include_tools` 标签分类 |
| **#35067** | [修复 Bazel 测试配置](https://github.com/openai/codex/pull/35067) | ✅ Closed | CLI 快照文件纳入 Bazel 测试运行文件，Windows 沙箱二进制测试限定 Windows 平台 |
| **#35024** | [自定义 provider 网络搜索](https://github.com/openai/codex/pull/35024) | 🔄 Open | 允许自定义 provider 接入独立 web_search，`supports_standalone_web_search` 配置 |

---

## 5. 功能需求趋势

基于 46 条 Issues 的标签分析，社区最关注的功能方向如下：

| 排名 | 功能方向 | 相关 Issue 数量 | 代表性需求 |
|------|----------|-----------------|------------|
| 🥇 | **Windows 平台稳定性** | 15+ | 冻结、CPU 饱和、进程管理、WMI 耗尽 |
| 🥈 | **MCP 服务器管理** | 6+ | 项目级进程池、命名空间追踪、沙箱隔离 |
| 🥉 | **多会话/多聊天** | 4+ | 多聊天并行、远程 SSH 会话同步 |
| 4 | **沙箱安全与工具调用** | 5+ | apply_patch 失败、行尾符、可写根目录注入 |
| 5 | **性能与资源管理** | 8+ | 内存泄漏、CPU 饱和、自动压缩不彻底 |
| 6 | **跨平台一致性** | 3+ | macOS/Windows/Linux 行为差异 |

---

## 6. 开发者关注点

### 🔥 核心痛点

1. **Windows 平台成为"重灾区"**
   - 多个 Issue 反馈 Windows 11 上启动即 CPU 100%
   - taskkill/conhost 进程清理风暴导致 WMI 不可用
   - 建议：Windows 用户暂缓升级至 26.715+ 版本

2. **沙箱安全与工具调用的矛盾**
   - `apply_patch` 在沙箱模式下频繁失败
   - 开发者被迫绕过沙箱使用 PowerShell，引入安全风险
   - 社区呼吁优先修复沙箱兼容性

3. **远程开发体验断裂**
   - SSH 远程项目显示"无聊天"但本地 DB 有数据
   - 移动端继续桌面会话后权限降级

### 💡 高频需求

| 需求 | 出现频次 | 用户声音 |
|------|----------|----------|
| 项目级 MCP 进程池 | 高 | "每次打开新聊天都启动新 MCP 进程，资源浪费严重" |
| 多聊天并行支持 | 中高 | "单次只能一个聊天，多代理工作流完全无法实现" |
| 本地项目使用 Pro 模型 | 中 | "本地文件访问和 Pro 模型只能二选一，体验割裂" |
| 禁用自动功能 | 中 | "侧边栏悬停自动展开、update_plan 工具等希望可配置" |

---

## 📌 行动建议

| 角色 | 建议 |
|------|------|
| **Windows 用户** | 关注 #34879、#34260 修复进展；暂用旧版本或 CLI |
| ** MCP 开发者** | 跟进 #35063、#20883，了解命名空间追踪和进程池设计 |
| **安全研究者** | 关注 #30712 沙箱注入问题，评估风险 |
| **贡献者** | PR #35024 开放中，可参与自定义 provider 网络搜索功能 |

---

*本报告基于 2026-07-24 GitHub 公开数据生成，数据截止时间 23:59 UTC*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-07-24  
**数据来源**: github.com/google-gemini/gemini-cli

---

## 1. 今日速览

今日（2026-07-24）Gemini CLI 社区保持高度活跃，共更新 **41 个 Issues** 和 **34 个 Pull Requests**。安全修复成为今日焦点，包括 IDE 伴侣的 TOCTOU 安全漏洞和信任对话框披露问题已修复合并。同时，社区对模型路由不稳定、CLI 挂起问题以及上下文管理的反馈持续增加，多个相关 Issues 已标记为待复测状态。

---

## 2. 版本发布

**今日无新版本发布**

---

## 3. 社区热点 Issues

以下为过去 24 小时内更新、评论数最多的 10 个 Issues：

| # | Issue | 评论 | 点赞 | 摘要 |
|---|-------|------|------|------|
| 1 | [#22415](https://github.com/google-gemini/gemini-cli/issues/22415) | 31 | 27 | **CLI hangs indefinitely** - 使用 `gemini-3.1-pro-preview` 模型时 CLI 长时间挂起，显示 "This is taking a bit longer"，交互摘要异常高 |
| 2 | [#16980](https://github.com/google-gemini/gemini-cli/issues/16980) | 16 | 12 | **文件访问控制** - 建议 Gemini CLI 不再使用 `.gitignore` 控制可访问文件，应允许访问被 Git 忽略的文件 |
| 3 | [#1698](https://github.com/google-gemini/gemini-cli/issues/1698) | 14 | 55 | **EDITOR 环境变量支持** - 当前仅支持 5 个预定义编辑器，建议支持 Unix/Linux `EDITOR`/`VISUAL` 环境变量 |
| 4 | [#20889](https://github.com/google-gemini/gemini-cli/issues/20889) | 12 | 0 | **屏幕阅读器无障碍** - 在屏幕阅读器模式下，`ask_user` 工具无法提供回答问题的方式 |
| 5 | [#19441](https://github.com/google-gemini/gemini-cli/issues/19441) | 11 | 1 | **模型连接问题** - 最近 1-2 天出现 "Trying to reach Gemini-X-X (Attempt 2/3)" 连接问题 |
| 6 | [#22473](https://github.com/google-gemini/gemini-cli/issues/22473) | 9 | 0 | **Cursor IDE 测试失败** - 在 Cursor IDE 内运行测试时因未 stub `CURSOR_TRACE_ID` 导致两个测试失败 |
| 7 | [#22817](https://github.com/google-gemini/gemini-cli/issues/22817) | 7 | 0 | **read_file 行范围反转** - 当 `start_line` 超过文件行数时返回反转的元组和空内容 |
| 8 | [#22457](https://github.com/google-gemini/gemini-cli/issues/22457) | 6 | 0 | **模型自动切换** - 尽管明确设置了模型，任务中途模型会自动切换到 `gemini-2.5-flash` |
| 9 | [#20977](https://github.com/google-gemini/gemini-cli/issues/20977) | 6 | 0 | **ACP 流式响应缺失** - ACP 模式下 `AgentThoughtChunk` 从未被发送，只有 `AgentMessageChunk` |
| 10 | [#22420](https://github.com/google-gemini/gemini-cli/issues/22420) | 5 | 0 | **Skill 冲突检测** - 项目级 Skill 与全局 Skill 同名时缺乏渐进式披露机制 |

**热点分析**：
- **P1 优先级问题**：`#22415`（CLI 挂起）和 `#22430`（更新后质量下降）获得较多关注
- **无障碍需求**：`#20889` 反映屏幕阅读器用户的实际痛点
- **模型稳定性**：多个 Issues 反映模型路由和连接问题

---

## 4. 重要 PR 进展

以下为今日最值得关注的 10 个 Pull Requests：

### 已合并 PR（安全与核心修复）

| # | PR | 面积 | 摘要 |
|---|-------|------|------|
| 1 | [#28346](https://github.com/google-gemini/gemini-cli/pull/28346) | security | **信任对话框披露修复** - 修复可运行钩子的信任对话框披露问题，停止报告无效的钩子条目 |
| 2 | [#28330](https://github.com/google-gemini/gemini-cli/pull/28330) | security | **IDE 伴侣 TOCTOU 修复** - 以原子方式设置 token 文件模式，关闭 TOCTOU 安全窗口 |
| 3 | [#28331](https://github.com/google-gemini/gemini-cli/pull/28331) | agent | **停滞检测机制** - 实现有意识的停滞检测和弹性代理循环的引导恢复机制 |
| 4 | [#28328](https://github.com/google-gemini/gemini-cli/pull/28328) | core | **401 错误识别修复** - 不再将非认证的 401 字符串误判为认证错误 |
| 5 | [#28327](https://github.com/google-gemini/gemini-cli/pull/28327) | core | **文件 URL 解码修复** - 仅对 `file://` URL 进行 percent 解码，避免路径中的 `%` 被错误处理 |

### 待合并 PR（新增功能）

| # | PR | 状态 | 摘要 |
|---|-------|------|------|
| 6 | [#28525](https://github.com/google-gemini/gemini-cli/pull/28525) | OPEN | **GCP 部署脚本** - 为 Caretaker Agent Cloud Run 服务添加 GCP 部署脚本 |
| 7 | [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | OPEN | **无限认证循环修复** - 修复 `#28430`，正确等待凭证保存并强制同意 |
| 8 | [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) | OPEN | **文件密钥链验证** - 强制执行显式标签长度和验证，确保 128 位标准 |
| 9 | [#28524](https://github.com/google-gemini/gemini-cli/pull/28524) | OPEN | **Caretaker 提示优化** - 3 周提示优化和评估调优，引入 `code_explorer` skill |
| 10 | [#28509](https://github.com/google-gemini/gemini-cli/pull/28509) | OPEN | **思维泄露过滤** - 禁用上下文管理时从历史记录中过滤思维部分 |

**PR 趋势**：
- 安全修复优先级提升（2 个 security 相关 PR 合并）
- Caretaker Agent 基础设施持续完善
- 核心稳定性修复（认证、URL 解码、错误识别）

---

## 5. 功能需求趋势

从今日更新的 Issues 中提炼出社区最关注的功能方向：

| 方向 | 相关 Issues | 热度 |
|------|-------------|------|
| **IDE 集成增强** | #1698, #22473, #28183 | ⭐⭐⭐⭐⭐ |
| **模型路由稳定性** | #22457, #22770, #22906 | ⭐⭐⭐⭐ |
| **文件访问控制** | #16980, #22446 | ⭐⭐⭐ |
| **无障碍访问** | #20889 | ⭐⭐⭐ |
| **上下文管理** | #22942, #21343 | ⭐⭐⭐ |
| **ACP 模式功能** | #20977, #22450 | ⭐⭐ |
| **Skill 系统** | #22420 | ⭐⭐ |
| **Shell 工具改进** | #22806 | ⭐⭐ |

**趋势洞察**：
1. **IDE 集成** 是最高需求，EDITOR 环境变量支持呼声高
2. **模型稳定性** 问题突出，路由逻辑需改进
3. **安全与隐私** 关注度上升（文件访问、凭证存储）

---

## 6. 开发者关注点

### 主要痛点

| 痛点 | 描述 | 相关 Issues |
|------|------|------------|
| **CLI 挂起** | 长时间无响应，显示 "This is taking a bit longer" | #22415, #22780, #22947 |
| **模型路由不稳定** | 模型自动切换或循环询问 | #22457, #22770, #22420 |
| **上下文窗口限制** | 超出上下文后无法压缩或生成内容 | #22942, #21343 |
| **IDE 兼容性问题** | Cursor 等 IDE 内运行异常 | #22473 |
| **后台任务处理** | Shell 工具 `is_background` 标志的 200ms 延迟问题 | #22806 |

### 高频需求

1. **更灵活的编辑器支持**
   - 需求：支持 `EDITOR`/`VISUAL` 环境变量
   - 当前：仅支持 5 个预定义编辑器
   - 链接：[#1698](https://github.com/google-gemini/gemini-cli/issues/1698)

2. **改进的文件访问控制**
   - 需求：不依赖 `.gitignore` 控制可访问文件
   - 建议：使用独立的 `gemini-ignore` 机制
   - 链接：[#16980](https://github.com/google-gemini/gemini-cli/issues/16980)

3. **更好的错误提示**
   - 需求：CLI 挂起或循环时提供更清晰的反馈
   - 建议：增加超时提示和用户中断选项
   - 链接：[#22415](https://github.com/google-gemini/gemini-cli/issues/22415)

4. **无障碍支持**
   - 需求：屏幕阅读器模式下完整功能
   - 当前：`ask_user` 工具无法使用
   - 链接：[#20889](https://github.com/google-gemini/gemini-cli/issues/20889)

---

**报告生成时间**: 2026-07-24  
**分析师备注**: 今日社区活跃度正常，安全修复成为重点。建议关注 `#22415` CLI 挂起问题的后续进展，该问题评论数最高且影响用户体验。

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*