# AI CLI 工具社区动态日报 2026-06-23

> 生成时间: 2026-06-23 03:35 UTC | 覆盖工具: 3 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告日期：** 2026-06-23  
**分析对象：** Claude Code、OpenAI Codex、Gemini CLI

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**从功能扩展向稳定性收敛**的关键阶段。三大主流工具均已度过早期功能密集开发期，开始将重心转向平台兼容性修复、安全加固和资源管理。跨平台稳定性（尤其是 Windows）成为共同痛点，占各社区热点 Issue 的 35%-40%；多代理/子代理架构的可靠性问题在 Codex 和 Gemini CLI 中尤为突出；配置格式灵活化（JSONC 支持）和认证流程简化则是提升开发者体验的共同诉求。整体来看，CLI 工具正从「能用」向「好用」过渡，社区反馈密度和修复节奏是判断成熟度的核心指标。

---

## 2. 各工具活跃度对比

| 指标 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **今日 Issues 总量** | 49 条（分析样本） | 10+ 条（热点） | 50 条（更新） |
| **今日 PR 推进** | 4 条（OPEN） | 10+ 条（新提交/进行中） | 10 条（重点） |
| **Release 状态** | ✅ v2.1.186 正式发布 | ✅ rust-v0.142.0 正式<br>🔄 v0.143.0-alpha 测试中 | ❌ 夜间构建失败（v0.49.0-nightly） |
| **热点 Issue 点赞最高** | 87 👍（#17968 JSONC） | 266 👍（#28224 SQLite 已关闭） | 8 👍（#21409 通用代理挂起） |
| **安全类 PR 进展** | 未提及 | 未明确 | 3 条（OAuth、SSRF、信任对话框） |
| **平台问题占比** | 40%（Windows 相关） | 突出（沙箱、权限、兼容性） | 浏览器/Wayland 兼容性 |

**数据洞察：** Gemini CLI 今日无正式版本发布，维护团队需关注构建稳定性；Claude Code 和 Codex 保持正常迭代节奏，但均面临 Windows 平台的高频问题。

---

## 3. 共同关注的功能方向

### 3.1 跨平台稳定性（Windows 优先）

| 工具 | 具体问题 | 严重程度 |
|------|----------|----------|
| **Claude Code** | ARM64 兼容性（#50674）、Defender 竞争条件（#67595）、进程未回收（#68394） | ⭐⭐⭐⭐ |
| **OpenAI Codex** | 沙箱启动失败（#28982）、Computer Use 导出路径（#27747） | ⭐⭐⭐ |
| **Gemini CLI** | 浏览器子代理 Wayland 失败（#21983）、配置覆盖不生效 | ⭐⭐⭐ |

**诉求共性：** 三者均面临 Windows 平台的高频问题，涵盖兼容性、权限、资源回收三个层面，反映出 AI CLI 工具在 Windows 生态中的适配深度仍不足。

### 3.2 进程/资源生命周期管理

| 工具 | 具体表现 |
|------|----------|
| **Claude Code** | Windows/macOS 双平台内存泄漏，后台进程堆积（#68394、#70211） |
| **OpenAI Codex** | SQLite 日志膨胀（已修复，减少 85% 日志量） |
| **Gemini CLI** | Shell 命令卡住（#25166）、SIGINT 取消后工具仍执行（#28096） |

**诉求共性：** 后台进程回收、资源限制、长时间会话稳定性是共同痛点，开发者对 CLI 的「资源可预测性」期待提升。

### 3.3 认证/授权流程优化

| 工具 | 具体问题 |
|------|----------|
| **Claude Code** | MCP 认证 CLI 支持（已实现 `--no-browser` 参数）、macOS OAuth Redirect URI 问题 |
| **OpenAI Codex** | Full Access 权限持续请求（#28988）、MCP OAuth 刷新事务序列化（#29017） |
| **Gemini CLI** | OAuth token 交换失败（Node.js ≥24.17.0 兼容性问题） |

**诉求共性：** 无头环境认证、SSH 环境支持、OAuth 流程稳定性是共同方向，Claude Code 已率先提供 CLI 命令支持。

### 3.4 多代理/子代理能力

| 工具 | 关注点 |
|------|--------|
| **OpenAI Codex** | 子代理状态检查（#16900）、父子等待机制 |
| **Gemini CLI** | 子代理挂起恢复（#22323）、通用代理 defer 无限等待（#21409） |

**诉求共性：** 多代理架构的可见性、状态同步、错误恢复能力成为高级用户的核心需求，两工具均处于功能完善阶段。

---

## 4. 差异化定位分析

### Claude Code：企业级稳定导向

- **核心定位：** Anthropic 官方 CLI，强调 MCP 生态集成和团队协作
- **技术路线：** 紧耦合 Anthropic 模型能力，CLI 作为模型交互入口
- **目标用户：** 企业开发团队、Pro 订阅用户
- **差异化优势：** MCP 服务器认证 CLI 支持、workflows 状态过滤、配置灵活性（JSONC 呼声高）
- **当前短板：** Windows 平台问题占比最高（40%），移动端（iPadOS）存在严重崩溃

### OpenAI Codex：开发者体验与插件生态

- **核心定位：** OpenAI 官方 CLI，强调插件系统和积分/订阅管理
- **技术路线：** Rust 重构（rust-v0.142.0），插件市场成熟度较高
- **目标用户：** 个人开发者、Plus/Pro 订阅用户
- **差异化优势：** `/usage` 积分兑换、`/plugins` 分组管理、插件 SHA-256 指纹验证
- **当前短板：** 订阅计划识别错误（Pro 被误判为 Plus）、Windows 沙箱问题突出

### Gemini CLI：安全与智能代理探索

- **核心定位：** Google 官方 CLI，强调 Auto Memory 和子代理架构
- **技术路线：** 持续探索 Agent 可靠性，安全性修复节奏快
- **目标用户：** Google 生态用户、高级代理开发者
- **差异化优势：** Auto Memory 自动记忆系统、AST 感知工具探索、子代理恢复机制
- **当前短板：** 构建稳定性问题（夜间构建失败）、子代理挂起问题未解决、Wayland 兼容性

---

## 5. 社区热度与成熟度

### 热度评估

| 工具 | 社区活跃度 | 成熟度判断 | 说明 |
|------|------------|------------|------|
| **Claude Code** | 🟢 高 | 成熟期 | Issue 响应快，PR 推进稳定，版本发布规律（v2.1.186） |
| **OpenAI Codex** | 🟢 高 | 成熟期 | 热点 Issue 点赞数最高（266 👍），插件生态活跃 |
| **Gemini CLI** | 🟡 中 | 迭代期 | 构建稳定性问题暴露，PR 数量多但 Issue 解决周期较长 |

### 成熟度信号

| 信号 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **版本发布规律** | ✅ 规律 | ✅ 规律 | ❌ 构建失败 |
| **Issue 关闭效率** | 高（#28224 已关闭） | 高（SQLite 问题已修复） | 中（子代理问题悬而未决） |
| **安全修复节奏** | 未明确 | 未明确 | 快（3 条安全 PR 推进） |
| **回归问题控制** | ⚠️ 存在（#68721 回归） | 未提及 | 未提及 |
| **文档维护** | PR 修复中（#70074、#70066） | 正常 | 正常 |

**结论：** Claude Code 和 Codex 处于成熟期，社区反馈机制健康；Gemini CLI 处于快速迭代期，构建稳定性和问题解决效率需提升。

---

## 6. 值得关注的趋势信号

### 6.1 平台优先级重排：Windows 正在成为「第一公民」

三大工具的 Windows 问题占比均超过 30%，社区呼声强烈。**对开发者的参考：** Windows 不再是「兼容即可」的平台，AI CLI 工具正在加大对 Windows 兼容性测试的投入，预计未来 3-6 个月内会有系统性改善。

### 6.2 安全加固进入快车道

Gemini CLI 单日推进 3 条安全类 PR（OAuth、SSRF、信任对话框），OpenAI Codex 修复了 SQLite 日志膨胀导致的 SSD 寿命风险。**对开发者的参考：** AI CLI 工具正在从「功能优先」转向「安全优先」，使用这些工具时需关注安全更新日志，避免在生产环境中使用已知漏洞版本。

### 6.3 多代理架构可靠性成为核心竞争力

Claude Code 强调 workflows 状态过滤，OpenAI Codex 推进子代理状态检查（#16900），Gemini CLI 面临子代理挂起的 P1 Bug。**对开发者的参考：** 多代理/子代理能力正在从「能用」向「可靠」过渡，选择工具时需评估其代理架构的成熟度，避免在复杂工作流中遇到稳定性问题。

### 6.4 配置格式灵活性需求爆发

Claude Code 的 JSONC 支持获得 87 点赞，成为今日最高呼声需求。**对开发者的参考：** 开发者对配置文件的可读性和可维护性要求提升，支持注释的配置文件格式（JSONC、TOML）可能成为 CLI 工具的标配。

### 6.5 资源可预测性成为企业刚需

进程回收、内存泄漏、后台进程堆积等问题在三个工具中均有体现。**对开发者的参考：** 在 CI/CD 环境中使用 AI CLI 工具时，需关注资源限制配置，避免长时间运行导致的内存溢出。

---

## 附录：明日关注事项

| 工具 | 建议跟踪 Issue/PR | 原因 |
|------|-------------------|------|
| **Claude Code** | #68721（TeamCreate/TeamDelete 回归）<br>#17968（JSONC 功能官方回应） | 回归问题影响核心功能，JSONC 呼声最高 |
| **OpenAI Codex** | #29532（SQLite 日志问题后续反馈）<br>#29243（Pro 计划误判限流） | 需验证修复彻底性，订阅识别错误影响核心用户体验 |
| **Gemini CLI** | #28102（夜间构建失败排查）<br>#21409（通用代理挂起） | 构建稳定性是发布前提，代理挂起是 P1 Bug |

---

*本报告基于 2026-06-23 GitHub 公开数据生成，仅供技术决策和开发参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-06-23**

---

## 1. 热门 Skills 排行

以下为社区关注度最高的 Skills，按功能价值和讨论热度综合评估：

| 排名 | Skill 名称 | PR 链接 | 状态 | 核心功能 |
|:---:|-----------|---------|:----:|---------|
| 1 | skill-quality-analyzer & skill-security-analyzer | [#83](https://github.com/anthropics/skills/pull/83) | OPEN | 元技能质量与安全分析工具，评估结构、文档、安全等五维度 |
| 2 | document-typography | [#514](https://github.com/anthropics/skills/pull/514) | OPEN | AI 生成文档的排版质量控制（孤行、寡段、编号对齐） |
| 3 | testing-patterns | [#723](https://github.com/anthropics/skills/pull/723) | OPEN | 完整测试栈指南：测试哲学、单元测试、React 组件测试 |
| 4 | ServiceNow platform | [#568](https://github.com/anthropics/skills/pull/568) | OPEN | 覆盖 ITSM/ITOM/ITAM/FSM/HRSD 等企业模块的全面集成 |
| 5 | ODT skill | [#486](https://github.com/anthropics/skills/pull/486) | OPEN | OpenDocument 格式创建、模板填充及 ODT→HTML 转换 |
| 6 | frontend-design 改进 | [#210](https://github.com/anthropics/skills/pull/210) | OPEN | 提升前端设计技能的可操作性和内部一致性 |
| 7 | AURELION skill suite | [#444](https://github.com/anthropics/skills/pull/444) | OPEN | 包含 kernel/advisor/agent/memory 的认知+记忆框架 |
| 8 | SAP-RPT-1-OSS predictor | [#181](https://github.com/anthropics/skills/pull/181) | OPEN | SAP 开源表格基础模型的预测分析技能 |

**热点分析：**
- **企业级集成**需求旺盛（ServiceNow、SAP）
- **文档质量**工具受关注（typography、ODT 格式）
- **测试与质量保障**是持续热点

---

## 2. 社区需求趋势

从 Issues 中提炼的核心诉求：

### 🔥 企业协作与安全
| 需求 | Issue 链接 | 热度 |
|------|-----------|:----:|
| 组织内技能共享机制 | [#228](https://github.com/anthropics/skills/issues/228) | 14 评论 / 7 👍 |
| 社区技能命名空间安全风险（信任边界） | [#492](https://github.com/anthropics/skills/issues/492) | 9 评论 |

### 🔧 工具链稳定性
| 需求 | Issue 链接 | 热度 |
|------|-----------|:----:|
| run_eval.py 触发率为 0 的严重 Bug | [#556](https://github.com/anthropics/skills/issues/556) | 12 评论 / 7 👍 |
| Windows 兼容性问题（subprocess/编码/管道） | [#1061](https://github.com/anthropics/skills/issues/1061) | 3 评论 |

### 📋 新 Skill 提案
| 提案方向 | Issue 链接 | 热度 |
|---------|-----------|:----:|
| agent-governance — AI 代理安全治理模式 | [#412](https://github.com/anthropics/skills/issues/412) | 6 评论 |
| compact-memory — 符号化紧凑代理状态 | [#1329](https://github.com/anthropics/skills/issues/1329) | 3 评论 |
| Skills 暴露为 MCP 协议 | [#16](https://github.com/anthropics/skills/issues/16) | 4 评论 |

### ⚠️ 已知问题
| 问题 | Issue 链接 | 热度 |
|------|-----------|:----:|
| 技能文件消失/损坏 | [#62](https://github.com/anthropics/skills/issues/62) | 10 评论 |
| document-skills 与 example-skills 内容重复 | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论 / 9 👍 |

---

## 3. 高潜力待合并 Skills

以下 PR 具备较高落地可能性（功能完整、需求明确、近期活跃）：

| Skill | PR 链接 | 活跃度 | 合并潜力 |
|-------|---------|:------:|:--------:|
| **skill-quality-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 高 | ⭐⭐⭐⭐⭐ |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 中 | ⭐⭐⭐⭐ |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 中 | ⭐⭐⭐⭐ |
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | 中 | ⭐⭐⭐⭐ |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | 中 | ⭐⭐⭐⭐ |
| **frontend-design 改进** | [#210](https://github.com/anthropics/skills/pull/210) | 中 | ⭐⭐⭐⭐ |

**关键修复类 PR（阻塞性问题）：**
- [#1298](https://github.com/anthropics/skills/pull/1298) — run_eval.py 修复（Windows + 触发检测）
- [#1050](https://github.com/anthropics/skills/pull/1050) — Windows subprocess PATHEXT 修复
- [#362](https://github.com/anthropics/skills/pull/362) — UTF-8 多字节字符处理

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求：修复 `run_eval.py` 等核心工具链的 Windows 兼容性和触发检测 Bug，同时扩展企业级集成（ServiceNow、SAP）与文档质量工具（排版、格式转换），并建立技能质量与安全评估体系。**

---

### 附：关键数据摘要

| 指标 | 数值 |
|------|------|
| 分析 PR 总数 | 50 条（展示 20 条） |
| 分析 Issues 总数 | 14 条 |
| 最高评论 Issue | #228（组织内共享，14 条） |
| 最高点赞 Issue | #189（重复问题，9 👍） |
| 热门修复方向 | Windows 兼容性、YAML 验证、UTF-8 处理 |
| 热门新增方向 | 企业平台集成、文档质量、测试模式 |

---

# Claude Code 社区动态日报

**日期：** 2026-06-23  
**版本：** v2.1.186

---

## 1. 今日速览

今日 Claude Code 发布了 **v2.1.186** 版本，重点增强了 MCP 服务器认证的 CLI 支持，允许开发者无需打开交互式菜单即可完成认证，并新增了 `/workflows` agent 的状态过滤功能。社区方面，Windows 平台问题持续高发（占热点 Issue 的 40%），同时 JSONC 格式支持的功能请求获得 87 个点赞，成为今日最受关注的特性需求。

---

## 2. 版本发布

### v2.1.186

**发布时间：** 2026-06-23

**主要更新：**

| 功能 | 说明 |
|------|------|
| MCP 认证 CLI 命令 | 新增 `claude mcp login <name>` 和 `claude mcp logout <name>`，支持 `--no-browser` 参数完成 SSH 无头认证 |
| Workflows 状态过滤 | `/workflows` agent 新增 `f` 键触发状态过滤，提升多任务管理效率 |

**相关链接：** https://github.com/anthropics/claude-code/releases/tag/v2.1.186

---

## 3. 社区热点 Issues

### 🔥 Top 10 最值得关注

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|----------|
| 1 | **[#17968](https://github.com/anthropics/claude-code/issues/17968) 支持 JSONC 格式设置文件** | ⭐⭐⭐⭐⭐ | 87 👍，16 💬 — 用户强烈要求在配置文件中支持注释，替代非官方的 `_comment` 方案 |
| 2 | **[#50674](https://github.com/anthropics/claude-code/issues/50674) Windows ARM64 Cowork 失败** | ⭐⭐⭐⭐ | 24 💬 — Snapdragon X 设备通过就绪检查后仍报错，影响企业级用户 |
| 3 | **[#68721](https://github.com/anthropics/claude-code/issues/68721) TeamCreate/TeamDelete 工具回归** | ⭐⭐⭐⭐ | 17 💬，5 👍 — 2.1.178 版本引入的回归问题，native 团队管理工具不再显示 |
| 4 | **[#36215](https://github.com/anthropics/claude-code/issues/36215) macOS 授权失败 Redirect URI** | ⭐⭐⭐ | 15 💬 — OAuth 重定向 URI 配置问题，影响 Pro 订阅用户 |
| 5 | **[#68394](https://github.com/anthropics/claude-code/issues/68394) Windows 进程/MCP 未回收** | ⭐⭐⭐ | 3 💬 — 每次会话启动后进程累积，导致内存泄漏 |
| 6 | **[#70211](https://github.com/anthropics/claude-code/issues/70211) macOS 后台进程未回收** | ⭐⭐⭐ | 1 💬 — 定时任务进程堆积直至内存耗尽，与 Windows 问题类似 |
| 7 | **[#70181](https://github.com/anthropics/claude-code/issues/70181) Linux 安全设置被清空** | ⭐⭐⭐ | 2 💬 — 304 缓存响应导致 managed-settings.json 权限规则失效，存在安全风险 |
| 8 | **[#57203](https://github.com/anthropics/claude-code/issues/57203) --resume 列表缺失会话** | ⭐⭐ | 6 💬，3 👍 — CLI 体验问题，已结束会话无法恢复 |
| 9 | **[#70144](https://github.com/anthropics/claude-code/issues/70144) iPadOS 应用崩溃** | ⭐⭐ | 4 💬，4 👍 — SwiftUI 栈溢出，v1.260618.0 版本严重问题 |
| 10 | **[#67595](https://github.com/anthropics/claude-code/issues/67595) Windows 插件安装 EBUSY** | ⭐⭐ | 3 💬 — Windows Defender 实时扫描竞争条件导致安装失败 |

---

## 4. 重要 PR 进展

| PR | 状态 | 内容摘要 |
|----|------|----------|
| **[#70173](https://github.com/anthropics/claude-code/pull/70173)** | OPEN | **修复 `/clean_gone` 分支检测** — 修复 `git branch -v` 与 `git branch -vv` 差异导致的 `[gone]` 检测失效问题 |
| **[#63686](https://github.com/anthropics/claude-code/pull/63686)** | OPEN | **延长 Issue 生命周期** — 将 stale/autoclose 超时从 14 天调整为 90 天，改善维护者工作流 |
| **[#70074](https://github.com/anthropics/claude-code/pull/70074)** | OPEN | **文档修复** — 修正插件开发 README 中的 marketplace 名称 `claude-code-marketplace` → `claude-code-plugins` |
| **[#70066](https://github.com/anthropics/claude-code/pull/70066)** | OPEN | **更新插件安装文档** — 统一使用官方 marketplace 名称，修正 `--plugin-dir` 命令示例 |

---

## 5. 功能需求趋势

基于今日 49 条 Issues 分析，社区最关注的功能方向如下：

### 📊 需求分布

```
跨平台兼容性    ████████████████  35%  (Windows/macOS/iOS/Linux 问题)
CLI 体验        ████████          18%  (认证、会话管理、命令增强)
MCP 生态        ██████            14%  (认证、服务器管理)
IDE 集成        ████              9%   (VS Code 扩展通知)
安全/权限       ████              9%   (managed-settings、认证)
性能/内存       ████              9%   (进程回收、资源限制)
配置格式        ███               6%   (JSONC 支持)
```

### 🔝 高优先级需求

1. **JSONC 配置文件支持** — 87 👍，社区呼声最高
2. **进程生命周期管理** — Windows/macOS 双平台内存泄漏问题
3. **MCP 认证流程优化** — SSH 无头环境支持
4. **VS Code 扩展通知系统** — 会话事件、限额重置提醒
5. **Agent 行为优化** — 减少过度推理，直接执行低成本测量

---

## 6. 开发者关注点

### ⚠️ 痛点汇总

| 痛点 | 影响范围 | 典型 Issue |
|------|----------|------------|
| **Windows 平台稳定性** | 企业用户 | ARM64 兼容性、Defender 冲突、进程回收 |
| **移动端崩溃** | iOS/iPadOS 用户 | SwiftUI 栈溢出、远程控制链接 |
| **认证/授权流程** | Pro 订阅用户 | Redirect URI、账户限制 |
| **CLI 会话管理** | 所有用户 | `--resume` 列表缺失 |
| **资源限制缺失** | 高级用户 | Bash 工具 OOM、后台进程堆积 |

### 💡 高频关键词

- `platform:windows` — 出现频率最高
- `area:mcp` — MCP 相关问题持续增长
- `perf:memory` — 内存相关问题跨平台
- `regression` — 多个功能在近期版本中退化

---

**📅 明日关注：** 建议跟踪 #68721 回归修复进展及 #17968 JSONC 功能的官方回应。

*报告生成时间：2026-06-23 | 数据来源：GitHub.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：** 2026-06-23  
**数据来源：** github.com/openai/codex

---

## 1. 今日速览

今日 Codex 社区迎来 **rust-v0.142.0 正式版**发布，新增 `/usage` 积分兑换和 `/plugins` 分组管理功能。社区热点集中在 **SQLite 日志膨胀问题**的修复（#28224 已关闭，节省约 85% 日志量）以及 **Windows 平台的沙箱、权限和性能问题**。同时有多个关于 MCP 连接、token budget 和国际化功能的 PR 正在推进中。

---

## 2. 版本发布

### rust-v0.142.0 ✅ 正式版

**主要更新：**

| 功能 | 说明 |
|------|------|
| `/usage` 增强 | 新增积分兑换功能，支持确认、重试和刷新可用状态 |
| `/plugins` 重构 | 按 OpenAI Curated、Workspace、Shared with me 分组展示远程插件 |

**相关 PR：** [#28154](https://github.com/openai/codex/pull/28154)、[#28793](https://github.com/openai/codex/pull/28793)

### rust-v0.143.0-alpha.1/2/3 🔄 测试中

持续迭代中，暂无详细变更说明。

---

## 3. 社区热点 Issues

### 🔥 #28224 【已关闭】SQLite 日志写入问题 [266 👍 | 39 💬]
**严重程度：** 🔴 高  
**链接：** https://github.com/openai/codex/issues/28224

> Codex SQLite feedback logs 可导致每年约 640 TB 的写入量，快速消耗 SSD 寿命。

**进展：** 6月22日合并两个 PR（#29432、#29457）后，**预计减少 85% 日志量**，Issue 已关闭。

---

### 🔥 #28982 Windows 沙箱启动失败 [9 👍 | 30 💬]
**严重程度：** 🟡 中  
**链接：** https://github.com/openai/codex/issues/28982

> Windows App 26.616.3309.0 中 native sandbox setup helper 报错 "The specified module could not be found"。

**影响：** Windows 用户无法正常使用沙箱功能。

---

### 🔥 #28988 Full Access 权限持续请求 [24 👍 | 26 💬]
**严重程度：** 🟡 中  
**链接：** https://github.com/openai/codex/issues/28988

> macOS 上 Full Access 模式持续弹出权限请求对话框，即使已授权。

**版本：** 26.614.11602 ~ 26.616.32156

---

### 📌 #16900 子代理状态检查功能请求 [4 👍 | 11 💬]
**类型：** ✨ 功能请求  
**链接：** https://github.com/openai/codex/issues/16900

> 社区请求增加子代理状态查询和父子等待机制，避免父线程在子代理仍在处理时重复执行任务。

---

### 📌 #29243 Pro 计划被误判为 Plus 导致限流 [0 👍 | 6 💬]
**严重程度：** 🔴 高  
**链接：** https://github.com/openai/codex/issues/29243

> Pro $100 (5x) 计划用户的 `access_token` 显示 `plan_type=prolite`，但 API 返回 `X-Codex-Plan-Type=plus`，导致被错误限流。

---

### 📌 #15330 【已关闭】Diff 视图高 CPU 占用 [9 👍 | 19 💬]
**链接：** https://github.com/openai/codex/issues/15330

> 打开 Diff 视图时 CPU 占用极高，已修复并关闭。

---

### 📌 #27747 Windows Computer Use 导出不匹配 [1 👍 | 6 💬]
**链接：** https://github.com/openai/codex/issues/27747

> Windows 上 `@oai/sky` 导出路径不匹配，导致 Computer Use 功能启动失败。

---

### 📌 #29533 登录手机验证问题 [0 👍 | 4 💬]
**链接：** https://github.com/openai/codex/issues/29533

> 验证码仍发送到旧手机号，用户无法登录。

---

### 📌 #28739 AGENTS.local 覆盖功能请求 [0 👍 | 2 💬]
**类型：** ✨ 功能请求  
**链接：** https://github.com/openai/codex/issues/28739

> 建议增加 `AGENTS.local.md` 作为叠加指令层，并扩展 `@` 引用和源码归属功能，对标 Claude Code。

---

### 📌 #29537 中文界面未生效 [0 👍 | 2 💬]
**链接：** https://github.com/openai/codex/issues/29537

> 设置 `localeOverride = "zh-CN"` 后 UI 仍显示英文，疑似被实验开关阻止。

---

## 4. 重要 PR 进展

| PR # | 标题 | 状态 | 说明 |
|------|------|------|------|
| [#29541](https://github.com/openai/codex/pull/29541) | 防止重复同名插件安装 | 🆕 新提交 | 验证插件 SHA-256 指纹，防止同名插件覆盖 |
| [#29527](https://github.com/openai/codex/pull/29527) | 保持压缩世界状态与上下文对齐 | 🆕 新提交 | 修复 mid-turn 压缩时环境快照不一致问题 |
| [#29513](https://github.com/openai/codex/pull/29513) | 允许图像生成与提供商认证 | 🆕 新提交 | 支持自定义 provider 的图像生成功能 |
| [#29528](https://github.com/openai/codex/pull/29528) | 集中化 Codex Apps 客户端处理 | 🆕 新提交 | 统一 MCP 服务器元数据边界管理 |
| [#29514](https://github.com/openai/codex/pull/29514) | 跳过初始 rollout budget 预填充 | 🆕 新提交 | 优化 token budget 计费逻辑 |
| [#29521](https://github.com/openai/codex/pull/29521) | 重置 token budget 压缩上下文 | 🆕 新提交 | 压缩时开启新上下文窗口 |
| [#29520](https://github.com/openai/codex/pull/29520) | Token budget 计入范围调整 | 🆕 新提交 | 聚焦 body-after-prefix 窗口 |
| [#29526](https://github.com/openai/codex/pull/29526) | 解析 selected environment 中的 view_image 路径 | 🆕 新提交 | 修复跨环境图像查看路径问题 |
| [#29017](https://github.com/openai/codex/pull/29017) | 序列化 MCP OAuth 刷新事务 | 进行中 | 解决并发刷新 token 冲突 |
| [#27951](https://github.com/openai/codex/pull/27951) | 诊断 bubblewrap 启动失败 | 进行中 | 改进沙箱启动诊断信息 |

---

## 5. 功能需求趋势

基于今日 Issues 分析，社区关注的功能方向如下：

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **🔧 平台稳定性** | #28982, #28988, #27747 | Windows/macOS 沙箱、权限、兼容性 |
| **⚡ 性能优化** | #28224, #15330, #24275 | SQLite 日志、CPU 占用、UI 响应 |
| **🤖 多代理能力** | #16900 | 子代理状态监控、父子协调 |
| **🔌 插件生态** | #28739, #29541 | 本地覆盖、插件安装安全 |
| **💳 订阅计费** | #29243, #28251 | 计划识别、积分重置 |
| **🌐 国际化** | #29537, #13672 | 中文/日文本地化 UI |
| **📡 MCP 连接** | #29376, #29439 | 远程 MCP 超时、取消后继续执行 |

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **Windows 平台问题突出**
   - 沙箱启动失败、Computer Use 不工作、UI 卡顿
   - 建议：关注最新 Windows 兼容性测试

2. **SQLite 日志膨胀**
   - 已修复但需关注是否彻底解决（#29532 仍有反馈）
   - 建议：监控 `~/.codex/logs_2.sqlite` 文件大小

3. **订阅计划识别错误**
   - Pro 用户被限流为 Plus，影响核心用户体验
   - 建议：检查 API 返回的 `X-Codex-Plan-Type` 头

### 🟡 高频需求

1. **子代理/多代理能力** - 状态检查、等待机制
2. **插件系统完善** - 本地覆盖、来源验证
3. **国际化支持** - 中文、日文等语言 UI
4. **Token Budget 精细化** - 上下文窗口管理

---

**📅 明日关注：** 持续跟踪 #29532 SQLite 日志问题、#29243 订阅限流问题的修复进展。

*本报告由 AI 技术分析师生成 | 数据截至 2026-06-23*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-06-23

---

## 1. 今日速览

今日社区活跃度较高，共更新 50 个 Issues 和 21 个 PRs。**夜间构建失败**（v0.49.0-nightly）成为焦点，同时多个安全修复（OAuth token 交换、SSRF 防护）正在推进。**子代理稳定性**和**Auto Memory 系统**仍是社区讨论的核心议题，分别有多个相关 Issue 获得高评论量。

---

## 2. 版本发布

**今日无新版本发布。** 夜间构建失败（#28102），维护团队正在排查中。

---

## 3. 社区热点 Issues

以下 10 个 Issues 获得最多关注（按评论数排序）：

| # | Issue | 评论 | 点赞 | 重要性说明 |
|---|-------|------|------|------------|
| 1 | **[Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** | 7 | 0 | P1 Epic，跟进行为评估测试，已生成 76 个测试用例，评估体系持续完善 |
| 2 | **[AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** | 7 | 1 | P2 Epic，探索 AST 感知工具以提升文件读取精度和 token 效率 |
| 3 | **[Subagent recovery after MAX_TURNS hides interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** | 7 | 2 | P1 Bug，子代理达到最大轮次后仍报告成功，掩盖中断事实 |
| 4 | **[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** | 7 | 8 | P1 Bug，通用代理在 defer 到子代理时无限挂起，**点赞数最高** |
| 5 | **[Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** | 6 | 0 | P2 Bug，模型不主动使用自定义技能和子代理，需显式指令 |
| 6 | **[Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** | 5 | 0 | P2 Security/Auto Memory，敏感信息重编辑在上下文传递后才执行，存在泄露风险 |
| 7 | **[Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** | 5 | 0 | P2 Auto Memory，低信号会话无限重试，导致资源浪费 |
| 8 | **[Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** | 4 | 3 | P1 Core Bug，Shell 命令完成后仍显示等待输入，用户高频反馈 |
| 9 | **[Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** | 4 | 1 | P1 Browser Bug，Wayland 环境下浏览器子代理异常 |
| 10 | **[Nightly Release Failed for v0.49.0-nightly](https://github.com/google-gemini/gemini-cli/issues/28102)** | 1 | 1 | 构建失败，维护团队需关注 |

**社区反应**：子代理稳定性（挂起、恢复、权限）是最大痛点，Auto Memory 系统存在多个关联 Bug，安全问题（OAuth、日志重编辑）引发关注。

---

## 4. 重要 PR 进展

以下 10 个 PR 值得关注：

| # | PR | 面积 | 优先级 | 内容摘要 |
|---|-----|------|--------|----------|
| 1 | **[fix(core): avoid keep-alive socket reuse during OAuth token exchange](https://github.com/google-gemini/gemini-cli/pull/28103)** | security | P2 | 修复 Node.js ≥24.17.0 下 OAuth token 交换失败问题（`ERR_STREAM_PREMATURE_CLOSE`） |
| 2 | **[fix(vscode-ide-companion): add missing activate() Disposables](https://github.com/google-gemini/gemini-cli/pull/27936)** | core | P2 | 修复 VS Code 扩展中 Disposables 被逗号表达式吞掉的 bug |
| 3 | **[fix(core): drop late tool calls after SIGINT cancellation](https://github.com/google-gemini/gemini-cli/pull/28096)** | agent | - | SIGINT 取消后仍执行延迟的工具调用，修复并发安全问题 |
| 4 | **[fix(core): remove leading space in camelToSpace for capitalized keys](https://github.com/google-gemini/gemini-cli/pull/27942)** | core | P1 | 修复 `camelToSpace` 函数对大写字母开头的 key 产生多余前导空格 |
| 5 | **[fix(core-tools): resolve Jupyter Notebook and JSON corruption in write_file](https://github.com/google-gemini/gemini-cli/pull/28000)** | core-tools | M | **已合并**，修复 `write_file` 静默损坏 `.ipynb` 和 JSON 文件的严重 bug |
| 6 | **[fix(core): validate GCP project ID format and prevent alias extraction in memory](https://github.com/google-gemini/gemini-cli/pull/27916)** | agent | P2 | 修复 GCP 项目 ID 验证，防止无效别名导致 403 错误 |
| 7 | **[fix(core): strip thoughts from scrubbed history turns and resolve thought leakage](https://github.com/google-gemini/gemini-cli/pull/27971)** | core | M | 修复思维泄露问题，防止模型内部推理泄漏到历史记录 |
| 8 | **[fix(core): trust dialog discloses the hook shape that never runs](https://github.com/google-gemini/gemini-cli/pull/27915)** | security | P1 | 信任对话框显示的 hook 与实际执行相反，存在安全风险 |
| 9 | **[fix(web-fetch): resolve DNS before SSRF guard](https://github.com/google-gemini/gemini-cli/pull/27744)** | core | M/L | **已合并**，修复 DNS 解析顺序导致的 SSRF 绕过（`127.0.0.1.nip.io` 等） |
| 10 | **[fix(a2a-server): deep-merge user and workspace settings](https://github.com/google-gemini/gemini-cli/pull/28094)** | enterprise | P2 | 修复设置合并仅支持浅拷贝，导致嵌套配置丢失 |

**进展亮点**：安全类 PR（OAuth、SSRF、信任对话框）集中修复，Auto Memory 和工具调用稳定性持续改进。

---

## 5. 功能需求趋势

从 50 个 Issues 中提炼出以下社区关注方向：

| 趋势 | 相关 Issue 数 | 典型需求 |
|------|--------------|----------|
| **子代理稳定性** | ~15 | 挂起恢复、超时处理、权限控制 |
| **Auto Memory 系统** | ~6 | 重试逻辑、无效补丁处理、日志重编辑 |
| **IDE 集成** | ~4 | VS Code 扩展、设置覆盖、Disposables 管理 |
| **浏览器子代理** | ~4 | Wayland 兼容、会话锁定恢复、配置忽略 |
| **安全加固** | ~5 | OAuth、SSRF、敏感信息处理、信任机制 |
| **Shell/工具执行** | ~4 | 卡住问题、交互式提示处理、工具数量限制 |
| **AST 感知工具** | ~3 | 文件读取精度、代码库映射、token 优化 |

**核心趋势**：社区对 **Agent 可靠性**（尤其是子代理）的关注度最高，其次是 **Auto Memory 质量**和**安全合规**。

---

## 6. 开发者关注点

### 高频痛点

1. **子代理挂起/卡死**
   - 通用代理 defer 到子代理时无限等待（#21409）
   - Shell 命令完成后仍显示"等待输入"（#25166）
   - SIGINT 取消后工具调用仍执行（#28096）

2. **Auto Memory 系统缺陷**
   - 低信号会话无限重试（#26522）
   - 无效补丁静默跳过（#26523）
   - 敏感信息在上下文传递后才重编辑（#26525）

3. **浏览器子代理兼容性**
   - Wayland 环境失败（#21983）
   - 配置覆盖不生效（#22267）
   - 会话锁定处理过于严格（#22232）

### 高频需求

| 需求 | 出现次数 | 说明 |
|------|----------|------|
| 子代理行为可见性 | 3+ | 通过 `/chat share` 查看子代理轨迹（#22598） |
| 工具数量智能限制 | 2+ | 超过 400 工具触发 400 错误（#24246） |
| AST 感知文件工具 | 2+ | 提升读取精度、减少 token 消耗（#22745） |
| 破坏性操作警告 | 2+ | `git reset --force` 等危险命令需确认（#22672） |

### 建议关注

- **P1 Bug 集中区**：子代理恢复、Shell 执行、浏览器兼容性，建议优先验证相关 PR 覆盖
- **安全修复节奏**：今日多个安全 PR 推进，建议关注合并后的发布节奏
- **评估体系完善**：76 个行为评估测试已上线，CLI 稳定性预期提升

---

*本报告基于 2026-06-23 GitHub 数据自动生成*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*