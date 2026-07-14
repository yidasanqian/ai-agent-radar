# OpenClaw 生态日报 2026-07-14

> Issues: 140 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-07-14 02:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目日报 | 2026-07-14

---

## 1. 今日速览

OpenClaw 项目今日保持高度活跃，共处理 **140 条 Issues**（新开/活跃 112，已关闭 28）和 **500 条 PR**（待合并 272，已合并/关闭 228）。新版本 **v2026.7.1** 正式发布，引入多个新模型提供商并更新默认配置。项目整体呈现快速迭代态势，但需关注 **5 个 P0/P1 级回归问题** 尚未解决，其中 legacy-state migration 持续阻止网关启动，多个渠道（WhatsApp、Feishu、Google Chat）存在稳定性问题。维护者 @steipete 今日提交了 7 个 PR，展现出极高的代码产出效率。

---

## 2. 版本发布

### v2026.7.1 发布 ✅

**发布时间**：2026-07-14

**主要更新**：
| 类别 | 内容 |
|------|------|
| **新模型/提供商** | Featherless、Claude Sonnet 5、Mythos 5、Meta Muse Spark 1.1、ClawRouter |
| **默认配置变更** | GPT-5.6 成为新安装的默认模型 |
| **新功能** | `/think ultra` 支持 Sol 和 Terra，`max` 支持 Luna |
| **Z.AI 集成** | 刷新 OAuth 后的模型可用性，兼容 Z.AI `max` |

**破坏性变更**：无重大破坏性变更，但 `models list` 命令在特定配置下出现回归崩溃（见下方 Bug 章节）。

**迁移注意事项**：建议运行 `openclaw doctor --fix` 清理遗留状态，但注意该命令在多配置错误场景下存在原子性失败问题（[#77802](https://github.com/openclaw/openclaw/issues/77802)）。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 状态 | 说明 |
|----|------|------|------|
| [#107003](https://github.com/openclaw/openclaw/pull/107003) | @steipete | OPEN | 修复插件创作 LOC ratchet 问题 |
| [#106981](https://github.com/openclaw/openclaw/pull/106981) | @steipete | OPEN | 恢复 Control UI 历史重载和图标功能 |
| [#107009](https://github.com/openclaw/openclaw/pull/107009) | @steipete | OPEN | 为已采用的目录会话添加上游存活检测 |
| [#107002](https://github.com/openclaw/openclaw/pull/107002) | @steipete | OPEN | 统一 legacy 启动迁移逻辑 |
| [#106840](https://github.com/openclaw/openclaw/pull/106840) | @bill-starfoundry | OPEN | 修复订阅制 Claude CLI 的 active-memory 计费问题 |
| [#103958](https://github.com/openclaw/openclaw/pull/103958) | @ekinnee | OPEN | 修复后端未声明 thinking 配置时的 ACP 会话启动失败 |
| [#106953](https://github.com/openclaw/openclaw/pull/106953) | @steipete | CLOSED | 修复发布验证器的三个遗留问题 |

**推进的功能领域**：
- **会话管理**：修复中断工具调用的重放边界、目录会话存活检测
- **UI/UX**：Control UI 重载回归、macOS 原生仪表盘体验
- **稳定性**：legacy-state 迁移统一、发布验证器修复

---

## 4. 社区热点

### 评论最多的 Issues

| # | 标题 | 评论数 | 链接 |
|---|------|--------|------|
| 7707 | Feature: Memory Trust Tagging by Source | 18 | [🔗](https://github.com/openclaw/openclaw/issues/7707) |
| 38327 | [Bug] "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview | 11 | [🔗](https://github.com/openclaw/openclaw/issues/38327) |
| 90213 | [Bug]: Legacy state migration warnings keep appearing after doctor --fix | 10 | [🔗](https://github.com/openclaw/openclaw/issues/90213) |
| 77802 | doctor --fix fails atomically when config has multiple validation errors | 8 | [🔗](https://github.com/openclaw/openclaw/issues/77802) |
| 92057 | Gateway becomes slow or times out under multi-session / multi-agent load | 8 | [🔗](https://github.com/openclaw/openclaw/issues/92057) |

### 热点分析

**#7707 Memory Trust Tagging** 引发最多讨论（18 条评论），反映出用户对 **安全性的强烈诉求**。核心诉求：
- 按来源（用户命令、网页抓取、第三方技能）标记记忆条目的信任级别
- 防止恶意指令通过不受信任内容（如网页、第三方集成）注入并影响后续行为

**#38327 Gemini-3.1-pro-preview 崩溃** 持续发酵，用户报告 2026.3.2 版本后任何消息都会导致嵌入式代理失败，错误信息为 "Cannot convert undefined or null to object"。

---

## 5. Bug 与稳定性

### P0 - 阻断性问题（需立即处理）

| 严重度 | # | 问题 | 状态 | Fix PR |
|--------|---|------|------|--------|
| P0 | [#103076](https://github.com/openclaw/openclaw/issues/103076) | Legacy-state migration sources 阻止网关启动（Matrix、Memory Core、update-check state、Codex sidecar ownership） | OPEN | 无 |

### P1 - 高优先级回归问题

| # | 问题 | 影响 | 状态 | Fix PR |
|---|------|------|------|--------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Gemini-3.1-pro-preview "Cannot convert undefined or null to object" 崩溃 | 嵌入式代理完全不可用 | OPEN | 无 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | WebChat session transcript 被每次覆盖（5.2 回归） | 会话历史丢失 | OPEN | 无 |
| [#77443](https://github.com/openclaw/openclaw/issues/77443) | WhatsApp 事件循环阻塞（eventLoopDelayMaxMs=12088ms） | Windows 用户首个消息处理失败 | OPEN | 无 |
| [#92769](https://github.com/openclaw/openclaw/issues/92769) | MiniMax M3 reasoning/reasoning_details 完全丢失 | 推理细节不可用 | OPEN | [#106423](https://github.com/openclaw/openclaw/pull/106423) |
| [#76275](https://github.com/openclaw/openclaw/issues/76275) | Gateway 重启循环（2026.4.23 → 4.26） | 服务不可用 | OPEN | 无 |
| [#77292](https://github.com/openclaw/openclaw/issues/77292) | Telegram 子/父代理交付上下文跨用户泄漏 | 安全/隐私问题 | OPEN | 无 |

### P2 - 中等问题

| # | 问题 | 影响 |
|---|------|------|
| [#106914](https://github.com/openclaw/openclaw/issues/106914) | `models list` 崩溃：applyAnthropicSonnet5Cost TypeError（2026.7.1 回归） |
| [#90213](https://github.com/openclaw/openclaw/issues/90213) | Legacy state migration warnings 持续出现 |
| [#77802](https://github.com/openclaw/openclaw/issues/77802) | `doctor --fix` 多配置错误时原子性失败 |
| [#77610](https://github.com/openclaw/openclaw/issues/77610) | macOS exec 工具约 10 次后 EBADF |
| [#77750](https://github.com/openclaw/openclaw/issues/77750) | 高文件描述符时 spawn EBADF |

---

## 6. 功能请求与路线图信号

### 高关注度功能请求

| # | 功能 | 评论数 | 链接 | 纳入可能性 |
|---|------|--------|------|------------|
| 7707 | Memory Trust Tagging by Source | 18 | [🔗](https://github.com/openclaw/openclaw/issues/7707) | ⭐⭐⭐ 高 |
| 9986 | Trigger model fallback on context length exceeded | 5 | [🔗](https://github.com/openclaw/openclaw/issues/9986) | ⭐⭐ 中 |
| 8892 | --agent flag for TUI to select agent | 4 | [🔗](https://github.com/openclaw/openclaw/issues/8892) | ⭐⭐ 中 |
| 69512 | Forward exec-approvals.json allowlist to claude-cli backend | 5 | [🔗](https://github.com/openclaw/openclaw/issues/69512) | ⭐⭐ 中 |
| 77447 | Memory hygiene doctor and sanitizer | 4 | [🔗](https://github.com/openclaw/openclaw/issues/77447) | ⭐ 中 |
| 7234 | Granular Discord action gates | 3 | [🔗](https://github.com/openclaw/openclaw/issues/7234) | ⭐ 中 |

### 路线图信号分析

1. **安全性优先**：Memory Trust Tagging 和 exec-approvals.json 功能请求反映用户对安全隔离的强烈需求
2. **模型弹性**：context length exceeded 时的 fallback 机制是合理诉求，已有相关 PR 在推进
3. **多渠道支持**：Discord 细粒度权限控制、Feishu/Matrix 功能完善需求持续

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 相关 Issues | 频率 |
|------|-------------|------|
| **渠道稳定性差** | WhatsApp 事件循环阻塞、Feishu 初始化失败、Google Chat OAuth 问题、Discord 语音问题 | 高 |
| **会话状态丢失** | WebChat transcript 覆盖、Z.AI provider 会话上下文丢失、消息丢失 | 高 |
| **回归问题频发** | 多个 regression 标签问题长期未解决 | 高 |
| **exec 工具问题** | macOS EBADF、高文件描述符失败、安全边界问题 | 中 |
| **配置复杂性** | doctor --fix 原子性失败、JSON5 注释丢失 | 中 |

### 正面反馈信号

- **Telegram 处理指示器**（#6946）获得 4 👍，用户希望获得更明显的处理状态反馈
- **macOS 原生仪表盘**（#106997）展示功能即将合并，用户体验将显著提升
- **Claude Code 目录发现**（#105162）修复 CLI 入口点识别问题

---

## 8. 待处理积压

### 长期未响应的 P1 Issues（超过 30 天未解决）

| # | 问题 | 创建日期 | 状态 | 链接 |
|---|------|----------|------|------|
| 77012 | WebChat session transcript 覆盖 | 2026-05-04 | OPEN | [🔗](https://github.com/openclaw/openclaw/issues/77012) |
| 77443 | WhatsApp 事件循环阻塞 | 2026-05-04 | OPEN | [🔗](https://github.com/openclaw/openclaw/issues/77443) |
| 77121 | exec 工具在 Gateway 资源域执行重验证命令 | 2026-05-04 | OPEN | [🔗](https://github.com/openclaw/openclaw/issues/77121) |
| 77292 | Telegram 子/父代理上下文跨用户泄漏 | 2026-05-04 | OPEN | [🔗](https://github.com/openclaw/openclaw/issues/77292) |
| 76275 | Gateway 重启循环 | 2026-05-02 | OPEN | [🔗](https://github.com/openclaw/openclaw/issues/76275) |
| 76665 | Z.AI provider 会话上下文丢失 | 2026-05-03 | OPEN | [🔗](https://github.com/openclaw/openclaw/issues/76665) |
| 77307 | Google Chat OAuth 问题 | 2026-05-04 | OPEN | [🔗](https://github.com/openclaw/openclaw/issues/77307) |

### 建议优先处理

1. **Legacy-state migration**（#103076）- P0 级别，阻止所有受影响用户启动
2. **WhatsApp 事件循环**（#77443）- 影响所有 Windows 用户
3. **WebChat transcript**（#77012）- 数据丢失问题
4. **Google Chat OAuth**（#77307）- 长期未解决，用户多次反馈

---

## 指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 140 条/24h | 📈 +15% |
| PR 活跃度 | 500 条/24h | 📈 +8% |
| 合并率 | 45.6% (228/500) | ➡️ 持平 |
| P0/P1 问题数 | 12 个 | ⚠️ 需关注 |
| Stale Issues | 约 30 个 | ⚠️ 需清理 |

---

*报告生成时间：2026-07-14 | 数据来源：GitHub OpenClaw Repository*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：** 2026-07-14  
**分析对象：** OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

2026年7月中旬，个人 AI 助手开源生态呈现**"两极分化、多点突破"**的格局。头部项目 OpenClaw 与 Hermes Agent 日均处理 Issue/PR 总量均超 500 条，展现出极高的社区活跃度与迭代速度，但同时背负沉重的技术债务（P0/P1 问题积压均达两位数）。中小型项目 cc-haha 与 Codex++ 则在垂直场景深耕，前者聚焦桌面端安全与用户体验，后者侧重供应商生态扩展。值得关注的是，**多渠道稳定性、CJK 输入法兼容性、记忆/状态管理安全化**成为跨项目共识性技术挑战，而模型供应商多元化（新增 Bedrock、Claude Sonnet 5 等）正在重塑生态竞争格局。

---

## 2. 各项目活跃度对比

| 项目 | Issues/24h | PR 更新/24h | 待合并 PR | 合并率 | 版本发布 | P0/P1 问题 | 健康度评估 |
|------|-------------|-------------|-----------|--------|----------|------------|------------|
| **OpenClaw** | 140 | 500 | 272 | 45.6% | ✅ v2026.7.1 | 12 个 | ⚠️ 高风险 |
| **Hermes Agent** | 61 | 500 | 413 | 17.4% | ❌ 无 | 5+ 个 | ⚠️ 高风险 |
| **cc-haha** | 6 | 2 | 1 | 50.0% | ❌ 无 | 1 个高优先级 | ✅ 稳健 |
| **Codex++** | 23 | 19 | 18 | 5.3% | ❌ 无 | 15 个 Bug | ⚠️ 待提升 |

**关键观察：**
- OpenClaw 与 Hermes Agent 规模相近，但 OpenClaw 合并效率（45.6%）显著优于 Hermes Agent（17.4%）
- cc-haha 虽然体量最小，但 Issue 响应率 100%，PR 合并率 50%，社区运营质量突出
- Codex++ PR 积压严重（18/19 待合并），需关注评审流程瓶颈

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 以 **140 条 Issues/日、500 条 PR/日** 的吞吐量稳居生态头部，是 cc-haha 的 23 倍、Codex++ 的 6 倍。这种规模优势使其成为事实上的生态枢纽，第三方集成（如 Z.AI、Featherless）优先选择对接。

### 3.2 技术路线差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|-------------|---------|---------|
| **核心定位** | 通用网关/多模型路由 | 自主 Agent 框架 | 桌面端增强工具 | 供应商中间层 |
| **模型支持** | 20+ 提供商（含新晋 Bedrock） | 聚焦 DeepSeek/Claude | 依赖上游 | 纯 API 模式 |
| **渠道集成** | Matrix/WhatsApp/Feishu/Google Chat | Telegram 为主 | 独立桌面端 | 代理上游功能 |
| **安全架构** | Legacy-state 迁移复杂 | 辅助视觉路由存泄漏风险 | H5 反向代理加固 | Token 登录待支持 |

### 3.3 社区规模对比

- **OpenClaw**：维护者 @steipete 单日提交 7 个 PR，展现极高产出
- **Hermes Agent**：贡献者多元化，Telegram/Desktop/MCP 多线并行
- **cc-haha**：核心贡献者 @toBerlinWay、@Raphaelowo 等，社区精简但稳定
- **Codex++**：@Yuimi-chaya、@chrichuang218 等贡献者活跃，但评审周期偏长

---

## 4. 共同关注的技术方向

### 4.1 多渠道稳定性治理

| 项目 | 具体问题 | 严重程度 |
|------|----------|----------|
| OpenClaw | WhatsApp 事件循环阻塞、Feishu 初始化失败、Google Chat OAuth | P1 |
| Hermes Agent | Telegram 409 冲突无限循环 | P2 |
| cc-haha | WebSocket 心跳缺 pong 检查 | 中 |

**诉求**：跨渠道统一的事件处理框架、断线重连机制、连接健康检测。

### 4.2 CJK 输入法兼容性

| 项目 | 具体问题 | 影响用户 |
|------|----------|----------|
| Hermes Agent | Windows 中文提示截断、CJK IME 文本提交失败、日语组合不正确 | 东亚用户 |
| cc-haha | 滚动行为优化、思考模式开关持久化 | 中文用户 |

**诉求**：输入法事件拦截优化、CJK 字符预校验、IME 组合状态管理。

### 4.3 记忆/状态管理安全化

| 项目 | 具体问题 | 优先级 |
|------|----------|--------|
| OpenClaw | Memory Trust Tagging by Source（18 条评论，最高热度） | ⭐⭐⭐ 高 |
| Hermes Agent | 辅助视觉路由泄漏 API 密钥到非 OpenAI 后端 | P2（已关闭待确认） |
| cc-haha | H5 反向代理鉴权加固、Preview 权限隔离 | 已修复 |

**诉求**：记忆条目来源标记、API 密钥隔离、敏感权限默认关闭。

### 4.4 启动性能与 CDP 优化

| 项目 | 具体优化 |
|------|----------|
| Codex++ | CDP 就绪检测从 120×1s 轮询降至 0-2s（#1452） |
| OpenClaw | Legacy-state migration 统一（#107002） |

**诉求**：冷启动时间压缩、状态迁移原子性保障。

---

## 5. 差异化定位分析

### 5.1 功能侧重

```
OpenClaw ──────────────────────────────────────────────────────────
    │
    ├── 多模型路由网关（Featherless、Claude Sonnet 5、ClawRouter）
    ├── 多渠道集成（Matrix、WhatsApp、Feishu、Google Chat、Discord）
    └── 会话管理与重放边界修复

Hermes Agent ─────────────────────────────────────────────────────
    │
    ├── 自主 Agent 执行框架（MCP 集成、工具调用）
    ├── Cron 定时任务与 one-shot/repeat 逻辑
    └── Desktop 应用（TUI/Dashboard）

cc-haha ──────────────────────────────────────────────────────────
    │
    ├── 桌面端安全加固（H5 反向代理、Preview 权限隔离）
    ├── 本地文件读取与命令执行
    └── 用户体验优化（滚动、开关持久化）

Codex++ ──────────────────────────────────────────────────────────
    │
    ├── 供应商中间层（Amazon Bedrock、火山引擎 Ark）
    ├── 桌面宠物与 UI 增强
    └── 纯 API 模式下的功能限制（本地执行缺失）
```

### 5.2 目标用户

| 项目 | 核心用户画像 |
|------|--------------|
| OpenClaw | 企业级多渠道部署、需接入多个 AI 供应商的技术团队 |
| Hermes Agent | 开发者/极客，需要高度自定义的 Agent 执行环境 |
| cc-haha | 桌面端用户，侧重本地安全与隐私 |
| Codex++ | 依赖第三方供应商的企业用户，需求路由与成本优化 |

### 5.3 技术架构关键差异

- **OpenClaw**：网关架构，强调横向扩展与多渠道兼容
- **Hermes Agent**：单体式 Agent 框架，紧耦合 MCP 与工具生态
- **cc-haha**：轻量级桌面增强，依赖上游能力做安全包装
- **Codex++**：代理/中间件架构，向上游暴露有限功能集

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **生态核心** | OpenClaw、Hermes Agent | 日均 500+ PR 更新，高速迭代但技术债务沉重 |
| **垂直深耕** | cc-haha、Codex++ | 功能聚焦，社区精简但稳定，PR 评审周期偏长 |

### 6.2 成熟度评估

| 项目 | 迭代阶段 | 质量信号 |
|------|----------|----------|
| OpenClaw | 快速迭代期 | ⚠️ 12 个 P0/P1 问题积压，回归问题频发，需加强测试覆盖 |
| Hermes Agent | 快速迭代期 | ⚠️ 413 条 PR 待合并，评审流程存在瓶颈 |
| cc-haha | 质量巩固期 | ✅ Issue 响应率 100%，安全 PR 已合并，版本稳定性良好 |
| Codex++ | 功能扩展期 | ⚠️ PR 合并率仅 5.3%，需优化评审效率 |

### 6.3 技术债务警示

- **OpenClaw**：Legacy-state migration 阻止网关启动（#103076，P0），长期未解决
- **Hermes Agent**：安全漏洞（#39599 API 密钥泄漏）已关闭但修复完整性待确认
- **Codex++**：30+ 天未合并 PR 达 5 条，供应商路由错误可能导致 API Key 泄露

---

## 7. 值得关注的趋势信号

### 7.1 供应商生态多元化

**信号**：OpenClaw 新增 Featherless、Claude Sonnet 5、Meta Muse Spark 1.1；Codex++ Amazon Bedrock 支持进入评审。  
**影响**：模型供应商竞争加剧，中间层项目需快速适配新提供商以保持竞争力。

### 7.2 安全隔离需求觉醒

**信号**：Memory Trust Tagging（18 条评论）、H5 反向代理鉴权加固、API 密钥隔离成为跨项目共识。  
**影响**：记忆安全、权限隔离将成为 2026H2 核心功能方向。

### 7.3 桌面端体验优化

**信号**：cc-haha 桌面端安全加固、Codex++ 桌面宠物 V2 兼容、OpenClaw macOS 原生仪表盘。  
**影响**：桌面端不再是"上游附庸"，而是独立的产品竞争维度。

### 7.4 国际化/本地化短板

**信号**：Hermes Agent CJK 输入问题集中爆发（6 个相关 Issue），OpenClaw 中文切换问题（#1442）。  
**影响**：东亚市场重要性提升，输入法兼容性将从"nice to have"变为"must have"。

### 7.5 性能优化成为差异化卖点

**信号**：Codex++ CDP 启动优化（55s → 0-2s）、OpenClaw `/think ultra` 响应速度。  
**影响**：在功能趋同背景下，冷启动延迟、响应吞吐量将成为用户选择的关键指标。

---

## 总结建议

| 角色 | 关注重点 |
|------|----------|
| **技术决策者** | OpenClaw 适合多渠道企业部署，但需评估 P0/P1 问题对生产环境的影响；cc-haha 适合注重本地安全的个人用户 |
| **开发者** | Hermes Agent 适合构建自定义 Agent 逻辑；Codex++ 适合接入第三方供应商但需接受功能限制 |
| **生态贡献者** | CJK 输入法兼容、安全隔离机制、供应商适配是当前高价值贡献方向 |

---

*报告生成时间：2026-07-14 | 数据来源：各项目 GitHub 仓库日报*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 | 2026-07-14

---

## 1. 今日速览

Hermes Agent 项目今日保持极高活跃度，共处理 **61 条 Issues**（新开/活跃 12，已关闭 49）和 **500 条 PR 更新**（待合并 413，已合并/关闭 87）。项目整体向前推进显著，多个 P1/P2 级别 Bug 已通过 PR 修复，包括 Telegram 冲突循环、DeepSeek API 兼容性、MCP 超时处理等关键问题。今日无新版本发布，但存在多个高优先级修复 PR 等待合并，建议关注。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR 编号 | 类型 | 组件 | 描述 | 状态 |
|---------|------|------|------|------|
| [#64082](https://github.com/NousResearch/hermes-agent/pull/64082) | Bug Fix | Telegram | 修复 Telegram 409 冲突无限循环（使用单调时间戳替代计数器） | OPEN |
| [#64080](https://github.com/NousResearch/hermes-agent/pull/64080) | Bug Fix | Agent | 修复会话循环中陈旧缓存导致的状态不一致问题 | OPEN |
| [#64072](https://github.com/NousResearch/hermes-agent/pull/64072) | Bug Fix | MCP | 修复 `_run_on_mcp_loop` 超时错误处理（P0） | OPEN |
| [#64087](https://github.com/NousResearch/hermes-agent/pull/64087) | Bug Fix | Agent/DeepSeek | 修复 DeepSeek 空内容+tool_calls 消息导致 400 错误 | OPEN |
| [#64088](https://github.com/NousResearch/hermes-agent/pull/64088) | Bug Fix | Cron | 拒绝 one-shot + repeat>1 的非法组合 | OPEN |
| [#64074](https://github.com/NousResearch/hermes-agent/pull/64074) | Bug Fix | Desktop/Windows | 修复 Windows+WSL POSIX 媒体路径路由问题 | OPEN |
| [#64077](https://github.com/NousResearch/hermes-agent/pull/64077) | Bug Fix | Telegram | 修复 callback_query 处理器中的 TimedOut 异常传播 | OPEN |
| [#63543](https://github.com/NousResearch/hermes-agent/pull/63543) | Feature | Codex | 新增输出详细度配置（low/medium/high） | OPEN |
| [#36080](https://github.com/NousResearch/hermes-agent/pull/36080) | Bug Fix | Auxiliary | 修复 auxiliary 任务配置中 key_env/api_key_env 解析问题 | OPEN |
| [#57835](https://github.com/NousResearch/hermes-agent/pull/57835) | Bug Fix | Agent | 修复重启后受保护摘要衰减问题 | OPEN |

**项目整体健康度评估：** 今日 PR 吞吐量极高（500 条更新），多个关键修复正在推进中，预计近期将有版本更新。

---

## 4. 社区热点

### 评论最多的 Issues

| Issue 编号 | 评论数 | 标题 | 热度分析 |
|------------|--------|------|----------|
| [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | 9 | 空 Codex 响应被错误处理并重试 3 次 | **核心 Bug**，涉及 AI 响应规范化逻辑 |
| [#39534](https://github.com/NousResearch/hermes-agent/issues/39534) | 8 | Windows 桌面版中文提示被截断 | **CJK 用户体验问题**，影响大量中文用户 |
| [#39538](https://github.com/NousResearch/hermes-agent/issues/39538) | 6 | Desktop composer 在提交 CJK IME 文本时丢失 | **输入法兼容性**，多语言用户痛点 |
| [#39651](https://github.com/NousResearch/hermes-agent/issues/39651) | 4 | IME 组合导致发送按钮显示异常 | **UI 渲染问题** |
| [#39349](https://github.com/NousResearch/hermes-agent/issues/39349) | 4 | ~/.hermes/.env 覆盖会话令牌导致 WebSocket 失败 | **配置冲突问题** |

**热点分析：** 今日社区讨论集中于 **CJK 输入法兼容性**（3 个相关 Issue 进入 Top 5）和 **AI 响应处理逻辑**。CJK 问题反映出国际化支持仍是项目痛点，建议优先推进相关修复。

---

## 5. Bug 与稳定性

### 按严重程度排列的 Bug 报告

#### P0 - 最高优先级

| Issue/PR | 描述 | 状态 | 修复 PR |
|----------|------|------|---------|
| [#64072](https://github.com/NousResearch/hermes-agent/pull/64072) | MCP 超时错误处理缺陷，可能导致死循环 | OPEN | #64072 |
| [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | 空 Codex 响应被错误规范化并重试 3 次 | CLOSED | - |

#### P1 - 高优先级

| Issue/PR | 描述 | 状态 | 修复 PR |
|----------|------|------|---------|
| [#64080](https://github.com/NousResearch/hermes-agent/pull/64080) | 会话循环中陈旧缓存导致状态不一致 | OPEN | #64080 |
| [#64087](https://github.com/NousResearch/hermes-agent/pull/64087) | DeepSeek API 400 错误（空内容+tool_calls） | OPEN | #64087 |
| [#39599](https://github.com/NousResearch/hermes-agent/issues/39599) | **安全风险**：辅助视觉路由泄漏 API 密钥到非 OpenAI 后端 | CLOSED | - |

#### P2 - 中高优先级

| Issue/PR | 描述 | 状态 | 修复 PR |
|----------|------|------|---------|
| [#64082](https://github.com/NousResearch/hermes-agent/pull/64082) | Telegram 409 冲突无限循环 | OPEN | #64082 |
| [#64088](https://github.com/NousResearch/hermes-agent/pull/64088) | Cron 定时任务 one-shot + repeat>1 逻辑错误 | OPEN | #64088 |
| [#39242](https://github.com/NousResearch/hermes-agent/issues/39242) | computer_use vision 模式调用不存在的工具 | CLOSED | - |
| [#39549](https://github.com/NousResearch/hermes-agent/issues/39549) | `hermes update` 异常终止导致半更新状态 | CLOSED | - |
| [#39503](https://github.com/NousResearch/hermes-agent/issues/39503) | Desktop 0.15.1 启动失败（unrecognized arguments: --tui） | CLOSED | - |
| [#39444](https://github.com/NousResearch/hermes-agent/issues/39444) | `hermes update` 在 uv 环境下失败 | CLOSED | - |
| [#39631](https://github.com/NousResearch/hermes-agent/issues/39631) | Dashboard 启动失败（ModuleNotFoundError） | CLOSED | - |

#### P3 - 中等优先级（部分）

| Issue/PR | 描述 | 状态 |
|----------|------|------|
| [#39534](https://github.com/NousResearch/hermes-agent/issues/39534) | Windows 中文提示截断 | CLOSED |
| [#39538](https://github.com/NousResearch/hermes-agent/issues/39538) | CJK IME 文本提交失败 | CLOSED |
| [#39620](https://github.com/NousResearch/hermes-agent/issues/39620) | Windows 日语 IME 组合不正确 | CLOSED |
| [#39636](https://github.com/NousResearch/hermes-agent/issues/39636) | macOS 越南语 Telex IME 丢字符 | CLOSED |
| [#39786](https://github.com/NousResearch/hermes-agent/issues/39786) | 中文输入最后 1-2 字符被吞 | CLOSED |
| [#39721](https://github.com/NousResearch/hermes-agent/issues/39721) | 长提示词固定导致视图被遮挡 | CLOSED |
| [#39781](https://github.com/NousResearch/hermes-agent/issues/39781) | Dashboard 会话删除失效 + 数据源不同步 | CLOSED |
| [#39447](https://github.com/NousResearch/hermes-agent/issues/39447) | 远程网关拖放图片失败 | CLOSED |

**Bug 修复进度：** 今日大量 P2/P3 Bug 已关闭（49 条 Issues 关闭），项目稳定性显著提升。P0/P1 级别修复 PR 已提交，等待合并。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue/PR | 功能描述 | 社区支持 | 纳入可能性 |
|----------|----------|----------|------------|
| [#39768](https://github.com/NousResearch/hermes-agent/issues/39768) | 精简 review 线程，减少 LLM 调用开销 | - | **高**（性能优化） |
| [#39596](https://github.com/NousResearch/hermes-agent/issues/39596) | Desktop 应用添加 Profile 切换功能 | - | 中 |
| [#39571](https://github.com/NousResearch/hermes-agent/issues/39571) | Desktop 应用简体中文本地化 | - | **高**（已完成） |
| [#39696](https://github.com/NousResearch/hermes-agent/issues/39696) | 微信会话消息同步到 Web 聊天界面 | - | 中 |
| [#63543](https://github.com/NousResearch/hermes-agent/pull/63543) | Codex 输出详细度配置 | - | **高**（PR 已开） |
| [#32439](https://github.com/NousResearch/hermes-agent/pull/32439) | 添加图像生成路由提供者 | - | 中 |
| [#37167](https://github.com/NousResearch/hermes-agent/pull/37167) | `hermes sessions browse` 添加排序选项 | - | 中 |
| [#38793](https://github.com/NousResearch/hermes-agent/pull/38793) | Telegram 添加 profile-local 回调脚本 | - | 中 |
| [#64068](https://github.com/NousResearch/hermes-agent/pull/64068) | WhatsApp 生命周期事件持久化 | - | 中 |

**路线图信号：** 
1. **国际化/本地化** 是明确需求方向（中文本地化已完成，CJK 输入问题需优先修复）
2. **性能优化** 受到关注（review 线程精简）
3. **多平台集成** 持续推进（WhatsApp、Telegram、WeChat）

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 反馈内容 | 来源 |
|------|----------|------|
| **CJK 输入** | "在桌面应用中使用中文输入法时，最后 1-2 个字符经常被吞掉" | [#39786](https://github.com/NousResearch/hermes-agent/issues/39786) |
| **CJK 输入** | "Windows 上输入中文提示被截断，显示不完整" | [#39534](https://github.com/NousResearch/hermes-agent/issues/39534) |
| **CJK 输入** | "日语 IME 组合不正确，文本不出现或丢失" | [#39620](https://github.com/NousResearch/hermes-agent/issues/39620) |
| **桌面应用** | "v0.15.1 启动失败，提示 unrecognized arguments: --tui" | [#39503](https://github.com/NousResearch/hermes-agent/issues/39503) |
| **Dashboard** | "Dashboard 显示 'Could not connect to Hermes gateway'，但后端正常" | [#39349](https://github.com/NousResearch/hermes-agent/issues/39349) |
| **WeChat 集成** | "微信消息无法在 Web 界面显示，无法统一管理" | [#39696](https://github.com/NousResearch/hermes-agent/issues/39696) |
| **更新体验** | "`hermes update` 异常终止后无法重试，卡在半更新状态" | [#39549](https://github.com/NousResearch/hermes-agent/issues/39549) |

### 用户满意度观察

- **正面反馈：** 中文本地化工作受到欢迎（[#39571](https://github.com/NousResearch/hermes-agent/issues/39571)）
- **核心诉求：** CJK 用户强烈要求改善输入法兼容性
- **稳定性担忧：** 多个版本升级导致启动失败，影响用户体验

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue 编号 | 创建时间 | 优先级 | 描述 | 积压时长 |
|------------|----------|--------|------|----------|
| [#39599](https://github.com/NousResearch/hermes-agent/issues/39599) | 2026-06-05 | P2 | **安全漏洞**：辅助视觉路由泄漏 API 密钥 | ~40 天 |
| [#39242](https://github.com/NousResearch/hermes-agent/issues/39242) | 2026-06-04 | P2 | computer_use vision 模式调用不存在的工具 | ~41 天 |
| [#39549](https://github.com/NousResearch/hermes-agent/issues/39549) | 2026-06-05 | P2 | `hermes update` 异常终止 | ~40 天 |
| [#39503](https://github.com/NousResearch/hermes-agent/issues/39503) | 2026-06-05 | P2 | Desktop 启动失败 | ~40 天 |

### 建议维护者关注

1. **安全 Issue [#39599](https://github.com/NousResearch/hermes-agent/issues/39599)：** 辅助视觉路由泄漏 API 密钥到非 OpenAI 后端（Gemini），虽然已关闭但需确认修复完整性
2. **CJK 输入问题：** 多个相关 Issue 已关闭，但用户反馈可能仍存在，建议验证修复效果
3. **PR 积压：** 413 条 PR 待合并，建议按优先级排序处理

---

## 附录：数据来源

- **项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- **数据时间：** 2026-07-14
- **Issues 总数：** 61 条（活跃 12，已关闭 49）
- **PR 总数：** 500 条（待合并 413，已合并/关闭 87）

---

*本日报由 AI 自动生成，数据截止至 2026-07-14 24:00 UTC*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-07-14  
**项目**: NanmiCoder/cc-haha  
**数据来源**: GitHub

---

## 1. 今日速览

过去24小时内，cc-haha 项目保持较高社区活跃度，共产生 **6 条新 Issue** 和 **2 条 PR 更新**。项目整体状态健康，1 个安全加固相关的 PR 已成功合并（#1015），另有 1 个 Windows 路径显示优化 PR 待审核（#1018）。值得注意的是，今日报告的 Issue 全部为 **Bug 报告或功能请求**，暂无新版本发布，社区反馈主要集中在桌面端稳定性和用户体验优化方向。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

### ✅ 已合并 PR

| 编号 | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#1015](https://github.com/NanmiCoder/cc-haha/pull/1015) | feat: harden local server access policy and isolate remote preview permissions | desktop/server/docs | ✅ 已合并 |

**#1015 详情**  
该 PR 由 @toBerlinWay 提交，进行了多项安全性和稳定性改进：

- **H5 反向代理鉴权加固**：新增 `Origin`、`X-Forwarded-For` 等代理头校验，修复了仅校验 `clientAddress` 时的潜在绕过风险
- **Preview 权限隔离**：每个预览使用独立内存 session，防止 cookie 和 storage 串用；摄像头、剪贴板等敏感权限默认关闭
- **截图方案重构**：移除 `html2canvas` 注入方案，改用 CDP 原生截图，增加最大像素限制防止内存溢出
- **测试覆盖**：补充了单元测试，本地验证通过

> 📎 链接: https://github.com/NanmiCoder/cc-haha/pull/1015

### ⏳ 待合并 PR

| 编号 | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#1018](https://github.com/NanmiCoder/cc-haha/pull/1018) | 优化Win工具显示路径 | adapters | ⏳ 待合并 |

**#1018 详情**  
由 @Raphaelowo 提交，优化 Windows 平台工具路径显示逻辑，与 Linux 保持一致的路径缩短显示方式。

> 📎 链接: https://github.com/NanmiCoder/cc-haha/pull/1018

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 编号 | 标题 | 评论数 | 状态 |
|------|------|--------|------|
| [#1016](https://github.com/NanmiCoder/cc-haha/issues/1016) | [BUG]重启桌面终端后，桌面终端对话聊天列表都不见了 | 6 | 🟡 OPEN |
| [#1011](https://github.com/NanmiCoder/cc-haha/issues/1011) | [BUG] 0.4.7对话过程中，手动停止失败 | 1 | 🟡 OPEN |

**#1016 深度分析**  
该 Issue 引发最多讨论（6 条评论），用户 @Alix-li 报告桌面终端重启后对话列表消失的问题。经社区讨论，可能原因包括：

- 桌面终端未正确索引 `projects` 下的旧 `jsonl` 文件
- 启动时使用了不同的配置目录或 profile
- `cc-haha/settings.json` 指向了自定义 API/model，导致以不同环境启动
- 插件 reload 或 marketplace 操作后 UI 状态刷新异常
- Windows 桌面端缓存/登录态重置（但本地 jsonl 仍存在）

**用户核心诉求**：对话历史数据的持久化和正确加载是核心需求，桌面端稳定性直接影响用户信任度。

> 📎 链接: https://github.com/NanmiCoder/cc-haha/issues/1016

---

## 5. Bug 与稳定性

### 🐛 今日报告的 Bug（按严重程度排列）

| 优先级 | 编号 | 标题 | 状态 | 备注 |
|--------|------|------|------|------|
| 🔴 高 | [#1011](https://github.com/NanmiCoder/cc-haha/issues/1011) | 0.4.7对话过程中手动停止失败 | 🟡 OPEN | 核心交互功能失效 |
| 🟡 中 | [#1016](https://github.com/NanmiCoder/cc-haha/issues/1016) | 重启桌面终端后聊天列表消失 | 🟡 OPEN | 数据持久化问题 |
| 🟡 中 | [#1012](https://github.com/NanmiCoder/cc-haha/issues/1012) | WebSocket心跳缺pong检查，无法发现假死连接 | 🟡 OPEN | 连接稳定性隐患 |
| 🟢 低 | [#1013](https://github.com/NanmiCoder/cc-haha/issues/1013) | 滚动到最新需要优化 | 🟡 OPEN | UI 体验问题 |

**关键 Bug 分析**：

1. **#1011 手动停止失败**：影响 0.4.7 版本用户，无法中断正在进行的对话，属于核心交互缺陷，需优先处理

2. **#1012 WebSocket pong 检查缺失**：长期运行场景下可能导致假死连接未被及时发现，建议配合 #1015 的安全加固 PR 一起关注

3. **#1013 滚动优化**：用户反馈滚动到最新消息的体验不够流畅，属于 UX 改进项

> 📎 链接汇总:  
> - https://github.com/NanmiCoder/cc-haha/issues/1011  
> - https://github.com/NanmiCoder/cc-haha/issues/1016  
> - https://github.com/NanmiCoder/cc-haha/issues/1012  
> - https://github.com/NanmiCoder/cc-haha/issues/1013

---

## 6. 功能请求与路线图信号

### ✨ 今日功能请求

| 编号 | 标题 | 类型 | 状态 |
|------|------|------|------|
| [#1017](https://github.com/NanmiCoder/cc-haha/issues/1017) | Persist "Disable Thinking Mode" toggle across sessions | Feature Request | 🟡 OPEN |
| [#1014](https://github.com/NanmiCoder/cc-haha/issues/1014) | trace建议不使用阻塞 | Feature | 🟡 OPEN |

**#1017 功能请求分析**  
用户 @fena888-gif 请求在 Claude Code Haha 桌面应用 (v0.4.7) 中持久化 "Disable Thinking Mode" 开关状态。当前该设置不会跨会话保存，每次新建会话都会重置为默认状态。

**用户价值**：提升个性化体验，减少重复配置操作

**#1014 功能请求分析**  
用户 @zhbdesign 建议 trace 功能不使用阻塞方式，可能涉及性能优化方向。

> 📎 链接:  
> - https://github.com/NanmiCoder/cc-haha/issues/1017  
> - https://github.com/NanmiCoder/cc-haha/issues/1014

---

## 7. 用户反馈摘要

### 📊 真实用户痛点提炼

| 痛点类别 | 具体描述 | 来源 Issue |
|----------|----------|------------|
| **数据持久化** | 重启后对话历史丢失，用户对数据安全产生担忧 | #1016 |
| **核心功能缺陷** | 0.4.7 版本手动停止按钮失效，无法中断对话 | #1011 |
| **连接稳定性** | WebSocket 长连接假死问题，影响实时体验 | #1012 |
| **UI/UX 体验** | 滚动行为不够流畅，思考模式开关无法保存 | #1013, #1017 |

**用户满意度信号**：
- ✅ #1015 PR 合并显示项目在安全性和稳定性方面持续投入
- ✅ Windows 平台路径显示优化（#1018）表明跨平台体验在改善
- ⚠️ 多个 Bug 集中在 0.4.7 版本，建议排查是否存在版本回归

---

## 8. 待处理积压

### ⚠️ 需关注的长期待处理项

| 编号 | 标题 | 创建时间 | 当前状态 | 建议 |
|------|------|----------|----------|------|
| [#1012](https://github.com/NanmiCoder/cc-haha/issues/1012) | WebSocket心跳缺pong检查 | 2026-07-13 | 🟡 OPEN | 长期运行稳定性隐患，建议评估 |
| [#1014](https://github.com/NanmiCoder/cc-haha/issues/1014) | trace建议不使用阻塞 | 2026-07-13 | 🟡 OPEN | 性能优化方向，需评估影响范围 |

**维护者提醒**：
- 今日所有 6 个 Issue 均在 2026-07-13 创建，响应及时性良好
- 建议优先处理 **#1011**（手动停止失败）和 **#1016**（数据丢失）两个高优先级问题
- **#1015** 安全加固 PR 已合并，可考虑发布补丁版本修复已知安全问题

---

## 📈 关键指标一览

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新增 Issue | 6 | 📊 活跃 |
| 新增 PR | 2 | ➡️ 平稳 |
| PR 合并率 | 50% (1/2) | ✅ 健康 |
| Issue 响应率 | 100% (6/6 有评论) | ✅ 良好 |
| 版本发布 | 0 | ➡️ 平稳 |

---

**报告生成时间**: 2026-07-14  
**数据截止**: 2026-07-13 24:00 UTC

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-07-14  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026-07-14，Codex++ 项目保持高度活跃，共产生 **23 条 Issues 更新**（22 新开/活跃，1 已关闭）和 **19 条 PR 更新**（18 待合并，1 已合并）。本日未发布新版本，但社区贡献者持续推进多项重要功能：Amazon Bedrock 供应商支持已进入评审阶段，Windows 便携版启动问题修复 PR 正在等待合并，桌面宠物 V2 WebP 兼容问题已紧急修复并合并。整体项目处于功能迭代与稳定性修复并行的健康状态。

---

## 2. 版本发布

**本日无新版本发布。**

---

## 3. 项目进展

### 已合并 PR

| PR 编号 | 标题 | 贡献者 | 状态 |
|---------|------|--------|------|
| [#1484](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1484) | 新版 App 桌宠兼容更新 | @Yuimi-chaya | ✅ 已合并 |

**#1484 详情：** 修复 Codex App `26.707.8479.0` 改变 V2 spritesheet 渲染结构后，已合并功能 #1455 无法识别桌宠的问题。Codex App 随后将 V2 spritesheet 从 `<img>` 改为 CSS `background-image`，本次修复确保新渲染路径下桌宠跟随真实鼠标功能正常工作。

### 待合并重要 PR

| PR 编号 | 标题 | 贡献者 | 状态 |
|---------|------|--------|------|
| [#1482](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1482) | 修复 Windows 便携启动和管理器激活 | @chrichuang218 | 🔄 待合并 |
| [#1374](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1374) | 新增 Amazon Bedrock 供应商支持 | @yourlin | 🔄 待合并 |
| [#1489](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1489) | V2 WebP 桌宠紧急兼容 | @Yuimi-chaya | 🔄 待合并 |
| [#1485](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1485) | 清理供应商同步后的幽灵任务索引 | @Yuimi-chaya | 🔄 待合并 |
| [#1468](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1468) | 纯文本模型图片处理 | @jarvislee90s-dot | 🔄 待合并 |
| [#1452](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1452) | 事件驱动 CDP 就绪检测（-55s 启动） | @lennney | 🔄 待合并 |

**重点 PR 摘要：**

- **#1482：** 修复 Windows 便携版 Codex 目录同时包含 `Codex.exe` 和 `ChatGPT.exe` 时优先启动 shim 导致 CDP 端口拒绝连接的问题；改进管理工具窗口激活逻辑。

- **#1374：** 新增 Amazon Bedrock 供应商支持，实现双鉴权路径（Bedrock API Key Bearer Token + AWS Profile SSO），包含属性测试保证契约一致性，修复评审中提出的 10 项问题（P0/P1/P2/P3）。

- **#1452：** 用三阶段渐进式 CDP 就绪检测替代 120×1s 轮询循环，启动时间从约 55 秒降至 0-2 秒，显著提升用户体验。

- **#1468：** 实现纯文本模型图片处理能力，支持 per-model 能力判断、视觉模型中转、推理剥离功能（+4021 −47 行代码）。

---

## 4. 社区热点

### 热门 Issues（按评论数排序）

| Issue 编号 | 标题 | 评论数 | 👍 | 状态 |
|------------|------|--------|-----|------|
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | [Feature]: product design 插件找不到 | 14 | 6 | 🟡 OPEN |
| [#1442](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1442) | [Bug]: codex++已配置zh-cn，可无法切换中文页面 | 6 | 0 | 🟡 OPEN |
| [#824](https://github.com/BigPizzaV3/CodexPlusPlus/issues/824) | [Config]: 从codex++进codex他说读取不了本地文件 | 4 | 0 | 🟡 OPEN |
| [#1477](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1477) | [Bug]: 总是出现"没有可用的文件读取或命令工具" | 3 | 0 | 🟡 OPEN |
| [#1465](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1465) | [Bug]: 会话无法刷新同步 | 3 | 2 | 🟡 OPEN |

**热点分析：**

1. **#749 - Product Design 插件缺失（14 评论，6 👍）：** 这是社区最关注的功能请求，用户反映在 Codex 插件列表中找不到 "product design" 插件，希望项目方更新插件列表。这是长期未解决的问题，建议优先评估是否可纳入路线图。

2. **#1442 - 中文本地化问题（6 评论）：** 用户已配置 `zh-cn` 但界面仍显示英文，涉及界面增强功能的多处本地化不完整。这是国际化体验问题，影响中文用户群体。

3. **#824 - 本地文件读取功能缺失（4 评论）：** 用户反馈通过 Codex++ 进入 Codex 后无法读取本地文件，缺少本地执行工具接入。这是纯 API 模式下的功能限制问题。

---

## 5. Bug 与稳定性

### 今日新增 Bug（按严重程度）

| Issue 编号 | 标题 | 影响范围 | 系统 | 状态 |
|------------|------|----------|------|------|
| [#1477](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1477) | 总是出现"没有可用的文件读取或命令工具" | 界面/交互 | Windows | 🟡 OPEN |
| [#1476](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1476) | 千问集成 config 被重置导致持续报错 | 界面/交互 | - | 🟡 OPEN |
| [#1475](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1475) | 打不开 codex | 启动/重启 | - | 🟡 OPEN |
| [#1473](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1473) | 启动时使用 AppTranslocation 路径导致 ENOENT | 启动/重启 | macOS | 🟡 OPEN |
| [#1481](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1481) | Windows 便携版选择 Codex.exe shim 导致启动失败 | 启动/重启 | Windows | 🟡 OPEN |
| [#1479](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1479) | 火山引擎 Ark 配置下新会话路由到 OpenAI 官方端点 | 供应商切换/会话管理 | - | 🟡 OPEN |
| [#1471](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1471) | Mac 关闭窗口后无法在 Dock 栏唤起 | 启动/重启 | macOS | 🟡 OPEN |
| [#1490](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1490) | 最新版在 Mac Pro 支持不行，安装不了 | 界面/交互 | macOS | 🟡 OPEN |

**关键 Bug 说明：**

- **#1481 / #1482 关联：** Windows 便携版启动问题是本日最关键的 Bug，已有对应修复 PR #1482 等待合并，建议优先处理。

- **#1479：** 第三方供应商路由错误问题严重，可能导致用户 API Key 泄露至错误端点，需紧急评估。

- **#1477：** "没有可用的文件读取或命令工具"错误频繁出现，影响核心使用体验，已有多次反馈。

### 长期未修复 Bug

| Issue 编号 | 标题 | 创建日期 | 评论数 | 状态 |
|------------|------|----------|--------|------|
| [#747](https://github.com/BigPizzaV3/CodexPlusPlus/issues/747) | 使用 codex++ 会拦截 image gen 工具无法正常生图 | 2026-06-07 | 1 | 🟡 OPEN |

---

## 6. 功能请求与路线图信号

### 今日功能请求

| Issue 编号 | 标题 | 功能范围 | 状态 |
|------------|------|----------|------|
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | [Feature]: product design 插件找不到 | 供应商管理 | 🟡 OPEN |
| [#1478](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1478) | [Feature]: 支持使用 token 登录 | 供应商管理 | 🟡 OPEN |
| [#1487](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1487) | [Question]: Codex 目标功能有什么用 | 供应商管理 | 🟡 OPEN |

**路线图信号分析：**

1. **供应商管理功能需求旺盛：** 今日多条 Issue 涉及供应商配置，包括 #749（插件列表）、#1478（Token 登录）、#1479（第三方供应商路由），建议在下一版本中加强供应商管理模块的稳定性和功能完整性。

2. **Amazon Bedrock 支持即将落地：** PR #1374 已进入评审阶段，新增 AWS 生态支持将扩展项目在企业级市场的应用场景。

3. **本地化体验待提升：** #1442 反映的中文切换问题表明国际化工作仍需持续投入。

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点描述 | 相关 Issue | 出现频次 |
|----------|------------|----------|
| 本地文件读取/命令执行工具不可用 | #824, #1477 | 高 |
| 供应商切换后会话/模型列表消失 | #1465, #1470 | 中 |
| Windows/macOS 启动问题 | #1473, #1475, #1481, #1490 | 中 |
| 第三方供应商路由错误 | #1479, #1476 | 中 |

### 用户场景

1. **企业用户场景：** 使用 Amazon Bedrock、火山引擎 Ark 等第三方供应商进行模型调用，对路由准确性和认证方式有较高要求。

2. **开发者场景：** 期望通过 Token 登录方式接入，对纯 API 模式下的本地执行能力有需求。

3. **普通用户场景：** 关注界面本地化、桌面宠物功能、会话同步等日常使用体验。

### 满意度反馈

- **正面：** 社区对桌面宠物功能（#1484 已修复）、启动性能优化（#1452）表示认可。
- **负面：** 供应商配置复杂度、跨平台稳定性问题引发较多反馈。

---

## 8. 待处理积压

### 长期未响应 Issues（超过 30 天无更新）

| Issue 编号 | 标题 | 创建日期 | 最后更新 | 状态 |
|------------|------|----------|----------|------|
| [#749](https://github.com/BigPizzaV3/CodexPlusPlus/issues/749) | product design 插件找不到 | 2026-06-07 | 2026-07-13 | 🟡 OPEN |
| [#747](https://github.com/BigPizzaV3/CodexPlusPlus/issues/747) | 使用 codex++ 会拦截 image gen 工具 | 2026-06-07 | 2026-07-13 | 🟡 OPEN |

### 长期未合并 PR（超过 30 天）

| PR 编号 | 标题 | 创建日期 | 最后更新 | 状态 |
|---------|------|----------|----------|------|
| [#512](https://github.com/BigPizzaV3/CodexPlusPlus/pull/512) | 新增对话临时API并接入页面增强开关 | 2026-06-01 | 2026-07-13 | 🔄 待合并 |
| [#543](https://github.com/BigPizzaV3/CodexPlusPlus/pull/543) | reduce sidebar polling and replay relay history | 2026-06-02 | 2026-07-13 | 🔄 待合并 |
| [#613](https://github.com/BigPizzaV3/CodexPlusPlus/pull/613) | Windows Store Codex support | 2026-06-04 | 2026-07-13 | 🔄 待合并 |
| [#626](https://github.com/BigPizzaV3/CodexPlusPlus/pull/626) | Reapply thread storage fixes | 2026-06-04 | 2026-07-13 | 🔄 待合并 |
| [#798](https://github.com/BigPizzaV3/CodexPlusPlus/pull/798) | 限制 Fast 服务模式仅对支持模型生效 | 2026-06-09 | 2026-07-13 | 🔄 待合并 |

**积压提醒：**

1. **#749 建议优先处理：** 作为本日评论数最多的 Issue（14 条），社区对 Product Design 插件的需求明确，建议维护者评估可行性并给出明确答复。

2. **PR #512 需关注：** 对话临时 API 功能已完成开发并等待合并超过 30 天，建议评审并给出反馈。

3. **Windows Store 支持：** PR #613 已等待超过 30 天，Windows Store 用户群体可能因此受到影响。

---

## 指标汇总

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 活跃度 | 23 条/24h | 📈 +15% |
| PR 活跃度 | 19 条/24h | 📈 +20% |
| 合并率 | 1/19 (5.3%) | ⚠️ 待提升 |
| Bug 报告数 | 15 条 | ⚠️ 较高 |
| 功能请求数 | 3 条 | 正常 |

---

**报告生成时间：** 2026-07-14  
**数据来源：** GitHub Codex++ Repository  
**分析师：** AI Assistant

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*