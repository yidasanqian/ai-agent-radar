# AI CLI 工具社区动态日报 2026-07-25

> 生成时间: 2026-07-25 02:37 UTC | 覆盖工具: 3 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告

**报告日期**: 2026-07-25  
**覆盖工具**: Claude Code、OpenAI Codex、Gemini CLI

---

## 1. 生态全景

当前 AI CLI 工具生态呈现**三足鼎立但路径分化**的格局。Claude Code 依托 Anthropic 的模型优势，在上下文管理和企业级功能（Cowork、Claude Max）上持续深耕，但付费用户的计费异常问题正侵蚀信任基础；OpenAI Codex 以高频迭代（本周 5 个 alpha 版本）驱动，聚焦 Windows 平台稳定性和多代理工作流，但资源泄漏和跨平台一致性问题突出；Gemini CLI 则将安全加固作为核心优先级（本期 4 项安全修复），同时暴露出文档滞后和订阅权益模糊的运营短板。整体而言，三者均处于**功能快速扩展期**，但稳定性与体验一致性问题尚未系统性解决，CLI 工具作为 AI 原生开发入口的成熟度仍有较大提升空间。

---

## 2. 各工具活跃度对比

| 指标 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **过去 24h Issues 活动** | 高（社区聚焦 10 个热点，805 条评论集中在 #38335） | 高（Top 10 Issue，评论数 33/19/16） | 最高（43 个 Issues 处理） |
| **过去 24h PR 活动** | 低（1 个重点 PR #80883） | 高（10 个合并 + 2 个进行中） | 高（21 个 PR 处理） |
| **版本发布** | 2 个正式版（v2.1.219/220） | 5 个 alpha 连发 | 无新版本 |
| **发布节奏** | 稳定维护型 | 快速迭代型 | 静默期 |
| **社区响应速度** | Issue #38335 持续 4 个月未关闭 | 多 Issue 已关联 PR 修复 | 安全修复响应积极 |

**数据洞察**: Gemini CLI 的 Issue 处理量最大（43 个），但多为文档/流程类问题；Claude Code 单 Issue 评论密度最高（#38335 达 805 条），反映付费用户痛点集中；OpenAI Codex 的 PR 合并效率最高，插件系统改进密集。

---

## 3. 共同关注的功能方向

### 3.1 Windows 平台稳定性

| 工具 | 具体问题 | 严重程度 |
|------|----------|----------|
| Claude Code | MSIX 更新失败（#76357），每次更新需重启 | 🟡 中 |
| OpenAI Codex | Git 进程堆积（#17229）、多文件夹项目启动失败（#35057）、WSL Git 检测失败（#35119） | 🔴 高 |
| Gemini CLI | 模型 100% 超时（#21937）、Chrome 代理错误（#22159）、CRLF 兼容（#28531） | 🔴 高 |

**诉求**: 三者均面临 Windows 生态的系统级兼容挑战，OpenAI Codex 和 Gemini CLI 尤为突出。开发者需在 Windows 环境下加强测试覆盖。

### 3.2 MCP（Model Context Protocol）插件生态

| 工具 | 关注点 |
|------|--------|
| Claude Code | Telegram 插件入站通知失效（#36431）、插件发布后未同步（#80263） |
| OpenAI Codex | MCP 认证流程（#35239）、远程插件 ID 追踪（#35262/35261）、无白名单时简化过滤（#35280） |
| Gemini CLI | OAuth token 刷新失败（#28481）、路径遍历漏洞（#28353） |

**诉求**: MCP 作为跨工具协议标准，各家均在完善其实现细节，但安全性和可靠性仍是短板。

### 3.3 认证与授权

| 工具 | 问题 |
|------|------|
| Claude Code | Remote Control 间歇性 401（#78469），50-70% 失败率 |
| OpenAI Codex | credential broker 集成进行中（#29752） |
| Gemini CLI | HTTPS 强制（#28517）、凭证存储安全（#28523）、无限认证循环（#28348） |

**诉求**: 远程协作场景下的认证可靠性是共同挑战，Gemini CLI 在安全加固上最为激进。

### 3.4 文档与开发者体验

| 工具 | 问题 |
|------|------|
| Claude Code | Opus 5 模型限制未明确提示（#81025） |
| OpenAI Codex | Prompts 随机消失（#25928） |
| Gemini CLI | tier 编号未同步（#21681）、模型限制未说明（#22062）、缺少 Docker 开发指南（#21302） |

**诉求**: 文档准确性和开发环境标准化是提升贡献效率的关键，Gemini CLI 尤为迫切。

---

## 4. 差异化定位分析

### 4.1 功能侧重

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **核心能力** | 上下文管理（Safety Net）、Cowork 协作 | 多代理工作流、IDE 深度集成 | 安全加固、SSR 代码生成 |
| **模型策略** | Opus 5（1M 上下文）为核心，默认启用 | GPT-5.6 系列，模型路由优化 | Gemini 3 系列，但付费访问受限 |
| **插件生态** | MCP 插件目录、DirectoryAdded Hook | MCP 协议层密集改进 | caretaker 自动化工具链 |
| **企业特性** | Claude Max 订阅、Cowork 远程控制 | Multi-Agent V2、ent26 企业计划 | Firestore 追踪、评估框架 |

### 4.2 目标用户

- **Claude Code**: 企业级付费用户、深度代码理解场景
- **OpenAI Codex**: 跨平台开发者、多仓库项目管理、IDE 重度用户
- **Gemini CLI**: Google 生态开发者、安全敏感场景、自动化工作流构建者

### 4.3 技术路线

| 维度 | Claude Code | OpenAI Codex | Gemini CLI |
|------|-------------|--------------|------------|
| **迭代策略** | 稳定优先，大版本功能更新 | 快速 alpha 测试，高频发布 | 安全修复驱动，低调迭代 |
| **平台重心** | 跨平台一致 | Windows 优先（问题也最多） | Windows/Linux 并重 |
| **协议创新** | 网络沙箱白名单 | MCP 协议深耕 | A2A 协议探索 |

---

## 5. 社区热度与成熟度

### 5.1 活跃度评估

| 工具 | 社区活跃度 | 成熟度阶段 | 说明 |
|------|------------|------------|------|
| **Claude Code** | ⭐⭐⭐⭐⭐ | 成熟期（遇险） | 单 Issue 评论数最高（805），但付费用户信任危机（#38335） |
| **OpenAI Codex** | ⭐⭐⭐⭐ | 快速成长期 | PR 合并效率高，alpha 版本密集发布，功能快速扩展 |
| **Gemini CLI** | ⭐⭐⭐ | 建设期 | Issue 处理量大但深度讨论少，安全修复为主，缺乏功能亮点 |

### 5.2 问题响应效率

| 工具 | 高热度 Issue 响应 | 安全 Issue 响应 |
|------|-------------------|------------------|
| Claude Code | 4 个月未关闭 #38335 | 通过 v2.1.220 修复稳定性 |
| OpenAI Codex | 多 Issue 已关联 PR | 持续改进 MCP 认证 |
| Gemini CLI | 积极合并安全修复 | 路径遍历 5 天内修复（#28353） |

**结论**: Claude Code 社区最活跃但核心问题悬而未决；OpenAI Codex 工程响应快但 Windows 问题积压；Gemini CLI 安全意识强但功能迭代滞后。

---

## 6. 值得关注的趋势信号

### 6.1 行业趋势

| 趋势 | 信号 | 开发者参考价值 |
|------|------|----------------|
| **CLI 工具安全元年** | 三者均在强化安全：路径遍历修复、OAuth token 管理、HTTPS 强制 | 安全将成为 CLI 工具的基础门槛，而非增值功能 |
| **Windows 平台成为短板** | 12+ Issue 聚焦 Windows，OpenAI Codex 和 Gemini CLI 重度受影响 | Windows 开发者应关注最新 alpha/beta 版本，或等待稳定版修复 |
| **MCP 协议标准化加速** | 各家均在改进 MCP 实现，OpenAI Codex 尤为密集 | 第三方 MCP 插件开发需关注协议版本兼容性 |
| **订阅权益透明度诉求** | Claude Max 计费异常、Gemini 3 访问受限 | 付费用户需关注官方公告，建议开启用量监控 |
| **多代理工作流成熟** | OpenAI Codex Multi-Agent V2、Claude Context Safety Net | 复杂任务自动化场景将逐步落地，但稳定性仍需验证 |

### 6.2 开发者行动建议

| 场景 | 推荐工具 | 理由 |
|------|----------|------|
| **企业级代码理解** | Claude Code | Opus 5 上下文优势，Cowork 协作功能 |
| **跨平台 IDE 集成** | OpenAI Codex | VS Code/Cursor 深度集成，多代理支持 |
| **安全敏感环境** | Gemini CLI | 安全修复响应积极，HTTPS 强制 |
| **快速原型开发** | OpenAI Codex | alpha 版本迭代快，新功能尝鲜 |
| **避免踩坑** | 暂避 Windows 场景 | 三者 Windows 支持均有待优化 |

### 6.3 风险预警

1. **Claude Max 订阅用户**: 持续关注 #38335 官方回应，建议开启用量告警
2. **OpenAI Codex Windows 用户**: 避免在生产环境使用，等待 alpha 修复
3. **Gemini CLI 付费用户**: 确认订阅层级的模型访问权限，避免配置失败

---

**报告结语**: 当前 AI CLI 工具生态处于**功能扩展与稳定性博弈**的关键阶段。Claude Code 需重建付费用户信任，OpenAI Codex 需攻克 Windows 稳定性，Gemini CLI 需在安全基础上加速功能迭代。开发者选择工具时需权衡功能需求与稳定性风险，并持续关注社区动态以获取最新修复。

---

*本报告基于 2026-07-25 社区数据生成 | 建议结合各工具官方文档和最新 Release Notes 交叉验证*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-07-25**

---

## 1. 热门 Skills 排行

按社区价值、技术影响力和功能完整性综合评估：

| 排名 | Skill | 功能概述 | 社区热点 | 状态 |
|:---:|-------|---------|---------|:----:|
| 1 | **skill-quality-analyzer & skill-security-analyzer** | 元技能：五维度质量评估 + 安全分析 | 首个系统性 Skill 质量保障方案，覆盖结构、文档、示例、资源、兼容性 | [OPEN #83](https://github.com/anthropics/skills/pull/83) |
| 2 | **testing-patterns** | 全栈测试技能：单元/组件/集成/E2E | Testing Trophy 理念落地，覆盖 React Testing Library、Playwright 等主流框架 | [OPEN #723](https://github.com/anthropics/skills/pull/723) |
| 3 | **self-audit** | AI 输出自审：机械验证 + 四维度推理审计 | 通用质量门禁，机械检查优先 + 损害优先级推理，v1.3.0 版本 | [OPEN #1367](https://github.com/anthropics/skills/pull/1367) |
| 4 | **document-typography** | AI 生成文档排版质量控制 | 解决孤儿行、寡妇段落、编号错位等高频问题 | [OPEN #514](https://github.com/anthropics/skills/pull/514) |
| 5 | **color-expert** | 颜色专业知识：命名系统、色彩空间选择 | 覆盖 ISCC-NBS、Munsell、OKLCH/OKLAB 等专业体系 | [OPEN #1302](https://github.com/anthropics/skills/pull/1302) |
| 6 | **ODT skill** | OpenDocument 格式创建/填充/解析 | ISO 标准开源文档格式支持，填补 LibreOffice 场景空白 | [OPEN #486](https://github.com/anthropics/skills/pull/486) |
| 7 | **pyxel** | 复古游戏开发：Python + 像素引擎 | MCP 服务集成，覆盖 write→run→inspect 迭代工作流 | [OPEN #525](https://github.com/anthropics/skills/pull/525) |
| 8 | **compact-memory** | 紧凑符号记忆：Agent 长时状态压缩 | 解决 Agent 上下文膨胀问题，符号化持久记忆 | [OPEN #1329](https://github.com/anthropics/skills/issues/1329) |

---

## 2. 社区需求趋势

从 Issues 提炼的五大方向：

### 🔴 高优先级（高评论量）

| 趋势 | 证据 | 链接 |
|------|------|------|
| **信任边界安全** | 社区技能滥用 `anthropic/` 命名空间冒充官方技能，43 条评论 | [#492](https://github.com/anthropics/skills/issues/492) |
| **组织级共享** | 企业场景急需 org 内技能共享机制，当前需手动上传下载 | [#228](https://github.com/anthropics/skills/issues/228) |
| **评估脚本可靠性** | `run_eval.py` 零触发率 bug 影响所有 skill-creator 用户，12 条评论 | [#556](https://github.com/anthropics/skills/issues/556) |

### 🟡 功能扩展方向

| 方向 | 说明 |
|------|------|
| **质量保障** | self-audit、skill-quality-analyzer 密集提交，质量门禁成标配 |
| **测试工程化** | testing-patterns 覆盖全栈，run_eval 修复并行 |
| **文档格式支持** | ODT、DOCX、PDF 修复密集，typography 新增 |
| **企业集成** | SAP-RPT-1-OSS、SharePoint Online 提案 |
| **平台兼容** | Windows 兼容性修复占 PR 重要比例 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或技术价值突出，预计近期落地：

| Skill | 亮点 | 合并概率 |
|-------|------|:--------:|
| **skill-quality-analyzer + skill-security-analyzer** | 首个官方质量/安全元技能框架，五维度评估 | ⭐⭐⭐⭐⭐ |
| **testing-patterns** | 测试是 AI 生成代码的刚需补全，全栈覆盖 | ⭐⭐⭐⭐⭐ |
| **self-audit** | v1.3.0 已发布，质量门禁理念成熟 | ⭐⭐⭐⭐ |
| **document-typography** | 解决所有 AI 文档的排版通病 | ⭐⭐⭐⭐ |
| **color-expert** | 专业领域深度覆盖，ISCC-NBS/RAL 等体系完整 | ⭐⭐⭐ |

**关键阻塞项**：多个 PR 依赖 `run_eval.py` 修复（#1298、#1099、#1050、#1323），该 bug 导致描述优化循环失效，需优先合并。

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求：从「Skill 数量增长」转向「Skill 质量可控」——通过元技能（质量分析、安全审计、自我审计）建立系统性保障机制，同时修复跨平台兼容性和评估脚本可靠性。**

---

**附：关键 Bug 追踪**

| Issue | 影响 | 状态 |
|-------|------|:----:|
| run_eval.py 零触发率 | skill-creator 描述优化完全失效 | [多 PR 并行修复中](https://github.com/anthropics/skills/issues/556) |
| Windows 兼容性 | subprocess PATHEXT、cp1252、select on pipes | [PR #1050/#1099](https://github.com/anthropics/skills/issues/1061) |
| 插件重复安装 | document-skills 与 example-skills 内容重叠 | [Issue #189](https://github.com/anthropics/skills/issues/189) |

---

# Claude Code 社区动态日报

**日期**: 2026-07-25  
**数据来源**: github.com/anthropics/claude-code

---

## 1. 今日速览

今日 Claude Code 社区呈现高度活跃态势。版本 v2.1.220 紧急发布，主要修复可靠性问题；社区热点聚焦于 **Claude Max 会话限制异常耗尽**（Issue #38335）问题持续发酵，评论数已达 805 条。同时，**Claude Opus 5 (1M 上下文)** 的默认启用引发部分组织兼容性问题，多个 Issue 反映模型降级行为异常。

---

## 2. 版本发布

### v2.1.220
**发布时间**: 2026-07-25  
**更新类型**: Bug 修复 & 可靠性改进

> 专注于提升系统稳定性的维护版本，未包含新功能。

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.220

---

### v2.1.219
**发布时间**: 2026-07-24  
**更新类型**: 功能更新

| 功能 | 说明 |
|------|------|
| **Claude Opus 5** | 新增 `claude-opus-5` 模型，1M 上下文，fast 模式 $10/$50/Mtok，现为默认 Opus 模型 |
| **网络沙箱强化** | 新增 `sandbox.network.strictAllowlist` 设置，对非白名单主机直接拒绝，无需确认 |
| **DirectoryAdded Hook** | 新增钩子函数，在目录添加后触发 |

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.219

---

## 3. 社区热点 Issues

### 🔥 Issue #38335 - Claude Max 计划会话限制异常耗尽
**标签**: `[BUG]` `[invalid]`  
**评论**: 805 | **点赞**: 470  
**状态**: OPEN

> **重要性**: 这是社区最热门的 Bug，自 2026-03-24 创建以来持续发酵。用户反映 Claude Max 计划的会话限制自 3 月 23 日起异常快速耗尽，严重影响付费用户体验。

🔗 https://github.com/anthropics/claude-code/issues/38335

---

### 💡 Issue #40043 - 允许从 Cowork 项目上下文中移除本地文件夹
**标签**: `[enhancement]` `[area:cowork]`  
**评论**: 21 | **点赞**: 63  
**状态**: OPEN

> **重要性**: Cowork 功能的核心体验优化。用户希望能够精细控制哪些本地文件夹纳入 AI 上下文，避免无关文件干扰推理效率。

🔗 https://github.com/anthropics/claude-code/issues/40043

---

### 🐛 Issue #36431 - Telegram 插件入站通知未送达
**标签**: `[bug]` `[has repro]` `[area:mcp]` `[area:plugins]`  
**评论**: 21 | **点赞**: 32  
**平台**: macOS  
**状态**: OPEN

> **重要性**: MCP 插件生态的关键集成问题。出站消息正常但入站通知失效，表明 MCP 通道存在单向通信缺陷。

🔗 https://github.com/anthropics/claude-code/issues/36431

---

### 💳 Issue #62644 - "购买积分"按钮永久禁用
**标签**: `[BUG]` `[invalid]`  
**评论**: 13 | **点赞**: 0  
**状态**: OPEN

> **重要性**: 涉及计费系统的关键问题。免费层账户错误显示 $500 限额，账单页面返回 HTTP 429 错误，直接影响用户付费转化。

🔗 https://github.com/anthropics/claude-code/issues/62644

---

### 🌐 Issue #69336 - API 连接在响应中途关闭
**标签**: `[bug]` `[area:api]` `[area:agent-sdk]`  
**评论**: 10 | **点赞**: 11  
**平台**: Linux  
**状态**: OPEN

> **重要性**: 高频 API 可用性问题。新上下文窗口中立即出现连接中断，影响开发工作流连续性。

🔗 https://github.com/anthropics/claude-code/issues/69336

---

### 📦 Issue #80263 - 插件发布后未同步至目录
**标签**: `Plugin submissions`  
**评论**: 7 | **点赞**: 0  
**状态**: OPEN

> **重要性**: MCP 插件生态的发布流程问题。插件状态显示 "Published" 但未出现在公共目录，影响插件可发现性。

🔗 https://github.com/anthropics/claude-code/issues/80263

---

### 🪟 Issue #76357 - Windows MSIX 更新失败
**标签**: `[bug]` `[has repro]` `[area:cowork]` `[area:desktop]`  
**评论**: 7 | **点赞**: 4  
**平台**: Windows  
**状态**: OPEN

> **重要性**: Windows 桌面用户的更新阻塞问题。每次更新都因文件占用导致应用无法启动，需重启才能解决。

🔗 https://github.com/anthropics/claude-code/issues/76357

---

### 🔐 Issue #78469 - Remote Control 认证间歇性 401
**标签**: `[bug]` `[has repro]` `[area:auth]`  
**评论**: 6 | **点赞**: 1  
**平台**: Windows  
**状态**: OPEN

> **重要性**: 远程控制功能的核心稳定性问题。50-70% 的请求返回 401 认证失败，后端 fleet 分流导致间歇性故障。

🔗 https://github.com/anthropics/claude-code/issues/78469

---

### 📊 Issue #81025 - Opus 5 默认模型不可用时静默降级
**标签**: `[enhancement]`  
**评论**: 3 | **点赞**: 0  
**状态**: OPEN

> **重要性**: v2.1.219 引入的模型选择问题。组织不支持 Opus 5 时，系统静默回退并覆盖用户保存的模型偏好，缺乏明确提示。

🔗 https://github.com/anthropics/claude-code/issues/81025

---

### 📈 Issue #81043 - /insights 叙事部分缺失
**标签**: `[Bug]`  
**评论**: 0 | **点赞**: 0  
**状态**: OPEN

> **重要性**: v2.1.220 引入的回归问题。统计数据显示正常但所有叙事部分缺失，"No insights generated" 静默失败。

🔗 https://github.com/anthropics/claude-code/issues/81043

---

## 4. 重要 PR 进展

### PR #80883 - Context Safety Net 插件
**作者**: @jeshiomurmu  
**状态**: OPEN  
**评论**: undefined | **点赞**: 0

**功能描述**:
自动压缩在长会话中频繁导致静默上下文降级（如 Issue #42542, #13112, #28721）。用户丢失关键"锚点"文件的追踪，AI 在无感知状态下继续工作。该 PR 旨在提供确定性的第一方恢复机制。

**解决的问题**:
- 上下文自动压缩后的锚点文件丢失
- AI 在"盲目"状态下继续工作
- 缺乏确定性恢复手段

🔗 https://github.com/anthropics/claude-code/pull/80883

---

## 5. 功能需求趋势

基于过去 24 小时 Issues 分析，社区关注的功能方向如下：

| 排名 | 功能方向 | 代表 Issue | 热度 |
|------|----------|------------|------|
| 1 | **模型选择与兼容性** | #81025, #77798 | ⭐⭐⭐⭐⭐ |
| 2 | **Cowork/远程协作** | #40043, #76248, #71616 | ⭐⭐⭐⭐ |
| 3 | **MCP 插件生态** | #36431, #80263 | ⭐⭐⭐⭐ |
| 4 | **网络与 API 稳定性** | #69336, #67766 | ⭐⭐⭐⭐ |
| 5 | **上下文管理** | #80883, #81039 | ⭐⭐⭐ |
| 6 | **认证与授权** | #78469, #67360 | ⭐⭐⭐ |
| 7 | **桌面应用稳定性** | #76357, #77208 | ⭐⭐⭐ |
| 8 | **IDE 集成** | #74894 | ⭐⭐ |

---

## 6. 开发者关注点

### 🔴 高优先级痛点

1. **会话限制异常耗尽** (#38335)
   - 805 条评论表明这是影响大量付费用户的核心问题
   - 建议：关注官方响应和补偿方案

2. **Opus 5 模型降级行为** (#81025)
   - 组织级限制与默认模型冲突
   - 静默覆盖用户偏好，缺乏错误提示

3. **API 连接稳定性** (#69336, #67766)
   - Linux 平台尤为严重
   - 中大型上下文会话频繁中断

### 🟡 中等优先级痛点

4. **Windows MSIX 更新阻塞** (#76357)
   - 每次更新都需重启，开发者体验差

5. **Remote Control 认证间歇失败** (#78469)
   - 50-70% 失败率严重影响远程协作

6. **MCP 插件发布流程** (#80263)
   - 状态显示 Published 但目录不可见

### 🟢 新兴需求

7. **Cowork 上下文精细控制** (#40043)
   - 用户希望排除特定本地文件夹

8. **Context Safety Net** (#80883)
   - 自动压缩后的锚点恢复机制

9. **权限规则未执行** (#81041)
   - `permissions.ask` 规则显示但不生效

---

**📌 行动建议**:
- 若使用 Claude Max 计划，密切关注 #38335 的官方回应
- v2.1.220 为稳定版本，建议升级
- 使用 Opus 5 的组织需确认配额，避免静默降级

---

*本报告由 AI 技术分析师生成 | 数据截至 2026-07-25*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**: 2026-07-25

---

## 1. 今日速览

过去 24 小时内，Codex 仓库共发布 5 个 Rust alpha 版本（0.146.0-alpha.6 至 0.146.0-alpha.10），Windows 平台问题持续高发，多个关于 Git 集成、多文件夹项目和 GPU 进程的 Issue 引发社区热议。同时，10 个 PR 成功合并，重点改进 MCP 协议处理、网络并发和插件系统。

---

## 2. 版本发布

### Rust SDK Alpha 版本连发

| 版本号 | 发布数量 |
|--------|----------|
| 0.146.0-alpha.10 | 1 |
| 0.146.0-alpha.9 | 1 |
| 0.146.0-alpha.8 | 1 |
| 0.146.0-alpha.7 | 1 |
| 0.146.0-alpha.6 | 1 |

**说明**: 5 个连续 alpha 版本密集发布，表明 Rust SDK 正在快速迭代，建议开发者关注 [Releases 页面](https://github.com/openai/codex/releases) 获取最新变更日志。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 高热度 Issue

**1. Windows App 持续生成 orphan git.exe 进程**  
📌 [#17229](https://github.com/openai/codex/issues/17229) | 评论: 33 | 👍 6  
**重要性**: 影响所有 Windows 用户，资源泄漏问题。Codex App 反复调用 `git.exe status --porcelain=v1 -z`，导致后台进程堆积。社区反馈强烈，需优先处理。

---

**2. 添加第二个文件夹后 Codex Desktop 无法启动**  
📌 [#35057](https://github.com/openai/codex/issues/35057) | 评论: 19 | 👍 5  
**重要性**: 多仓库项目管理者的阻塞性问题。昨日新报告，已影响最新版本 26.721.3404.0 用户。

---

**3. VS Code/Cursor 扩展中 Prompts 随机消失**  
📌 [#25928](https://github.com/openai/codex/issues/25928) | 评论: 16 | 👍 8  
**重要性**: IDE 集成核心问题，导致用户请求丢失。Cursor 用户受影响较大，社区关注度高。

---

**4. 远程连接时通知功能失效**  
📌 [#20930](https://github.com/openai/codex/issues/20930) | 评论: 8 | 👍 15  
**重要性**: 唯一获得 15 个 👍 的 Issue，说明大量远程/跨平台用户有此需求。

---

**5. GPT-5.6 Luna 模型未找到（已修复）**  
📌 [#31967](https://github.com/openai/codex/issues/31967) | 评论: 8 | 👍 8 | **状态: CLOSED**  
**重要性**: 模型路由问题已解决，但揭示了非 Codex 发起者使用 ChatGPT OAuth 的兼容性问题。

---

**6. GPT-5.6 独立 Code Mode 调用被序列化**  
📌 [#35050](https://github.com/openai/codex/issues/35050) | 评论: 7 | 👍 0  
**重要性**: 性能问题。显式批处理可降低 27-45% 使用量，说明模型调用效率有优化空间。

---

**7. Multi-Agent V2 需要可验证的完整配置文件**  
📌 [#33314](https://github.com/openai/codex/issues/33314) | 评论: 7 | 👍 8  
**重要性**: 多代理功能成熟度需求，跟进 #32782 的后续增强请求。

---

**8. CLI 提前标记 turn 完成**  
📌 [#27352](https://github.com/openai/codex/issues/27352) | 评论: 6 | 👍 0  
**重要性**: 子代理工作流的核心 bug，导致后续操作丢失。

---

**9. 数据库锁定问题**  
📌 [#31184](https://github.com/openai/codex/issues/31184) | 评论: 6 | 👍 0  
**重要性**: Linux Ubuntu 用户报告，影响 CLI 稳定性。

---

**10. Windows WSL 仓库被标记为非 Git 仓库**  
📌 [#35119](https://github.com/openai/codex/issues/35119) | 评论: 3 | 👍 3  
**重要性**: WSL2 用户群体增长，此问题影响在 Windows 上使用 Linux 文件系统的开发者。

---

## 4. 重要 PR 进展（Top 10）

### ✅ 已合并 PR

| PR | 标题 | 重要性 |
|----|------|--------|
| [#35280](https://github.com/openai/codex/pull/35280) | Skip plugin MCP filtering when no allowlists are configured | ⭐⭐⭐ 简化插件配置 |
| [#35275](https://github.com/openai/codex/pull/35275) | Trace remote exec-server connection setup | ⭐⭐ 改进调试能力 |
| [#35271](https://github.com/openai/codex/pull/35271) | Include code-mode tool names in Responses Lite metadata | ⭐⭐ 元数据增强 |
| [#35267](https://github.com/openai/codex/pull/35267) | Harden network approval cancellation and concurrency | ⭐⭐⭐ 提升网络稳定性 |
| [#35266](https://github.com/openai/codex/pull/35266) | Allow disabling the in-process code-mode host fallback | ⭐⭐ 灵活配置 |
| [#35264](https://github.com/openai/codex/pull/35264) | Sign bundled macOS helper binaries | ⭐⭐ macOS 合规性 |
| [#35262](https://github.com/openai/codex/pull/35262) | Track remote plugin IDs in skill invocation analytics | ⭐⭐ 分析能力 |
| [#35261](https://github.com/openai/codex/pull/35261) | Propagate remote plugin IDs to skill metadata | ⭐⭐ 插件系统 |
| [#35239](https://github.com/openai/codex/pull/35239) | Route MCP auth discovery through runtime HTTP clients | ⭐⭐ MCP 认证 |
| [#35238](https://github.com/openai/codex/pull/35238) | Support the ent26 enterprise plan | ⭐⭐ 企业功能 |

### 🚧 进行中 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#29752](https://github.com/openai/codex/pull/29752) | feat(core): integrate experimental credential broker | OPEN |
| [#31817](https://github.com/openai/codex/pull/31817) | Update models.json | OPEN |

**亮点**: MCP 相关改进密集（#35280, #35239, #35262, #35261），表明插件和协议层是当前开发重点。

---

## 5. 功能需求趋势

基于 40 个 Issues 的标签和内容分析，社区关注的功能方向如下：

| 排名 | 功能方向 | 相关 Issue 数量 | 代表性 Issue |
|------|----------|-----------------|--------------|
| 1 | **Windows 平台稳定性** | 12+ | #17229, #35057, #35179 |
| 2 | **多代理/子代理工作流** | 5+ | #33314, #27352, #35050 |
| 3 | **IDE 集成增强** | 4+ | #25928, #35285, #35272 |
| 4 | **MCP 协议支持** | 3+ | #35280, #31307, #31310 |
| 5 | **模型行为/路由** | 3+ | #34677, #31967, #35050 |
| 6 | **会话/线程管理** | 3+ | #33579, #35279, #35270 |

**趋势解读**: Windows 平台问题占据主导地位，建议开发者在 Windows 环境下进行更多测试；多代理功能正在走向成熟，但细节体验仍需打磨。

---

## 6. 开发者关注点

### 🔥 高频痛点

1. **Windows 崩溃与资源泄漏**
   - Git 进程堆积、GPU 进程崩溃、多文件夹项目启动失败
   - 建议：关注最新 alpha 版本修复情况

2. **跨平台一致性**
   - 远程连接通知失效、WSL Git 检测失败
   - 建议：检查网络配置和 WSL 集成文档

3. **数据库与会话管理**
   - Linux 下数据库锁定、大会话切换卡顿
   - 建议：定期清理本地存储，注意会话大小

4. **模型调用效率**
   - GPT-5.6 调用序列化问题导致 Token 浪费
   - 建议：使用显式批处理优化成本

5. **插件系统稳定性**
   - 遗留快照暴露旧版本、远程插件 ID 追踪缺失
   - 建议：关注 #29752  credential broker 集成进展

---

**📮 反馈渠道**: 如有问题，请在对应 Issue 下评论，或前往 [Codex Discussions](https://github.com/openai/codex/discussions) 发起讨论。

*本报告由 AI 技术分析师生成，数据截止至 2026-07-25 12:00 UTC。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-07-25  
**数据来源**: github.com/google-gemini/gemini-cli

---

## 1. 今日速览

过去 24 小时内，Gemini CLI 社区保持高度活跃，共处理 **43 个 Issues** 和 **21 个 Pull Requests** 的更新。社区焦点集中在**安全修复**（路径遍历、OAuth token 刷新、HTTPS 强制）和**稳定性改进**（认证循环、监听器泄漏）上。同时，多项关于模型访问权限和文档准确性的用户反馈引发热议，反映出付费用户对最新模型可用性的强烈诉求。

---

## 2. 版本发布

**本周期无新版本发布。**

---

## 3. 社区热点 Issues

以下精选 10 个最值得关注的 Issues，按评论数排序：

| # | Issue | 评论数 | 重要性说明 |
|---|-------|--------|------------|
| 1 | **[#20498](https://github.com/google-gemini/gemini-cli/issues/20498)** - Paid subscription but no Gemini 3 access | 12 | **用户核心诉求**：付费订阅却无法使用 Gemini 3/3.1，引发社区对订阅权益差异化的广泛讨论 |
| 2 | **[#21681](https://github.com/google-gemini/gemini-cli/issues/21681)** - docs: policy engine tier numbers and duplicate word | 9 | 文档陈旧问题：tier 编号迁移后未同步更新，影响企业用户配置 |
| 3 | **[#21302](https://github.com/google-gemini/gemini-cli/issues/21302)** - Improve CONTRIBUTING.md with Docker-based development setup | 8 | **开发者体验**：当前 CONTRIBUTING.md 缺少 Docker 开发环境指南，影响贡献者入门效率 |
| 4 | **[#21545](https://github.com/google-gemini/gemini-cli/issues/21545)** - ci(contrib): enforce 'issue' assignment as gate for PR creation | 7 | CI 流程问题：PR 关联 Issue 的软警告已失效，需升级为硬性约束 |
| 5 | **[#22062](https://github.com/google-gemini/gemini-cli/issues/22062)** - Website: Documentation does not mention that `gemini-3.1-pro-preview-customtools` is restricted | 7 | 文档缺失：未说明该模型仅支持 Gemini API Key 认证，导致用户配置失败 |
| 6 | **[#22159](https://github.com/google-gemini/gemini-cli/issues/22159)** - [BUG] Input blocker not restored when Chrome fatal error occurs | 7 | **浏览器代理 Bug**：Chrome 致命错误后未恢复输入拦截器，导致交互挂起 |
| 7 | **[#26736](https://github.com/google-gemini/gemini-cli/issues/26736)** - Coding agent loses workflow state | 6 | **P2 严重问题**：编码代理在多步骤仓库任务中丢失工作流状态，超出授权范围 |
| 8 | **[#21937](https://github.com/google-gemini/gemini-cli/issues/21937)** - gemini-3.1-pro-preview 100% Error Rate (Windows/v0.32.1) | 6 | **P1 级别 Bug**：Windows 用户使用 3.1 Pro 模型时 100% 超时，50秒无响应 |
| 9 | **[#21818](https://github.com/google-gemini/gemini-cli/issues/21818)** - Bug Report: Critical Failure of Human-in-the-Loop Confirmation Logic | 5 | **安全风险**：代理在显示确认提示后立即执行工具调用，绕过人工确认机制 |
| 10 | **[#22441](https://github.com/google-gemini/gemini-cli/issues/22441)** - Raw XML tags from function calls are leaking into standard output | 5 | **输出污染**：内部 XML 标签（`<function_calls>` 等）直接暴露在终端，影响用户体验 |

---

## 4. 重要 PR 进展

以下精选 10 个最重要的 Pull Requests：

| # | PR | 类型 | 说明 |
|---|-----|------|------|
| 1 | **[#28353](https://github.com/google-gemini/gemini-cli/pull/28353)** - fix(a2a-server): prevent path traversal in restore command | 🔒 安全 | **防御性安全修复**：修复 `restore` 命令中路径遍历漏洞，防止通过 `../../../etc/passwd` 读取任意文件 |
| 2 | **[#28348](https://github.com/google-gemini/gemini-cli/pull/28348)** - fix: resolve MaxListenersExceededWarning and infinite auth loop | 🐛 修复 | 解决 API 重试时的监听器超限警告及 Windows 上的无限认证循环问题 |
| 3 | **[#28435-28434](https://github.com/google-gemini/gemini-cli/pull/28435)** - feat(pr-generator-*): SSR Pipeline | ✨ 功能 | **重大新功能**：实现 SSR（Server-Side Rendering）代码生成管道，包含配置解析器、GitHub API 客户端、Antigravity agent runner |
| 4 | **[#28467](https://github.com/google-gemini/gemini-cli/pull/28467)** - feat(caretaker): update Firestore schema | 📊 数据 | 更新 Firestore schema，添加 `error` 和 `pr_number` 字段，支持 PR 追踪 |
| 5 | **[#28532](https://github.com/google-gemini/gemini-cli/pull/28532)** - feat(caretaker-evals): add local golden issue collection | 🧪 工具 | 新增本地 golden issue 收集和 Firestore 同步工具，用于评估测试 |
| 6 | **[#28531](https://github.com/google-gemini/gemini-cli/pull/28531)** - fix(a2a-server): normalize CRLF line endings to LF | 🪟 兼容 | **Windows 兼容修复**：解决 Windows 上 GCA 侧边栏 diff 高亮失效问题（CRLF vs LF 不匹配） |
| 7 | **[#28509](https://github.com/google-gemini/gemini-cli/pull/28509)** - fix(core): filter out thought parts from getHistoryTurns | 🧠 上下文 | 禁用上下文管理时过滤掉内部思维（`thought: true`）部分，防止思维泄露导致重复推理 |
| 8 | **[#28523](https://github.com/google-gemini/gemini-cli/pull/28523)** - fix(core): enforce explicit tag length and validation in file keychain | 🔐 安全 | 强制文件密钥链使用标准 128-bit 认证标签长度，提升凭证存储安全 |
| 9 | **[#28517](https://github.com/google-gemini/gemini-cli/pull/28517)** - fix(core): enforce HTTPS for GoogleCredentialsAuthProvider | 🔐 安全 | 防止 ADC 令牌通过明文 HTTP 传输，强制使用 HTTPS |
| 10 | **[#28481](https://github.com/google-gemini/gemini-cli/pull/28481)** - fix(core): refresh MCP OAuth tokens with the stored client ID | 🔐 安全 | 修复 MCP OAuth token 刷新失败问题（之前会删除存储凭证导致每次重新认证） |

---

## 5. 功能需求趋势

从本期 Issues 数据中提炼出社区最关注的功能方向：

| 趋势 | 相关 Issue | 说明 |
|------|------------|------|
| **🔐 安全加固** | #28353, #28523, #28517, #28481 | 路径遍历、凭证存储、协议安全、OAuth token 管理成为重点修复方向 |
| **📝 文档完善** | #21681, #22062, #21302 | 政策引擎编号、模型限制说明、Docker 开发环境等文档需求突出 |
| **🪟 Windows 兼容性** | #21937, #22159, #28531, #22149 | Windows 上的模型超时、浏览器代理、换行符、Shell 脚本兼容性问题频发 |
| **🤖 Agent 稳定性** | #26736, #21818, #22159 | 编码代理状态管理、人工确认逻辑、浏览器交互可靠性需改进 |
| **💳 订阅权益** | #20498 | 付费用户对模型访问权限的诉求强烈，期待 Gemini 3 系列开放 |
| **🔧 开发体验** | #21302, #21545 | Docker 开发环境、PR-Issue 关联强制执行等 CI/CD 优化需求 |

---

## 6. 开发者关注点

基于本期社区反馈，开发者主要关注以下痛点和高频需求：

### 🔴 高优先级痛点

1. **安全漏洞修复压力**
   - 路径遍历、OAuth token 泄露、HTTP 明文传输等问题引发开发者对安全性的高度关注
   - 社区呼吁加快依赖库更新（#22025），避免长期存在安全警告

2. **Windows 平台支持不足**
   - Shell 脚本兼容性（Unix 特定命令）、换行符处理、PowerShell 命令生成等问题影响 Windows 开发者体验
   - 建议：增加跨平台测试覆盖

3. **模型可用性与订阅权益**
   - 付费用户无法访问最新模型引发强烈不满，影响用户留存
   - 需明确不同订阅层级的模型访问策略

### 🟡 功能增强建议

1. **开发环境标准化**
   - 引入 Docker-based 开发环境，降低贡献者入门门槛

2. **CI/CD 流程强化**
   - PR 关联 Issue 的软警告需升级为硬性约束，提升社区贡献质量

3. **Agent 可靠性**
   - 工作流状态持久化、人工确认机制、错误恢复能力是编码代理的核心改进方向

4. **评估与测试框架**
   - caretaker-evals 相关 PR 显示社区正在构建更完善的评估体系

---

**📅 报告生成时间**: 2026-07-25  
**📊 数据覆盖**: 过去 24 小时  
**🔗 订阅本项目**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*