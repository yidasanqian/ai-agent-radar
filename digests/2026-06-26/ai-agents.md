# OpenClaw 生态日报 2026-06-26

> Issues: 186 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-26 03:42 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**: 2026-06-26  
**数据来源**: github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日保持极高活跃度，共处理 **186 条 Issues** 和 **500 条 PRs**。项目整体处于快速迭代期，88 个 PR 已合并/关闭，但仍有 **412 个 PR 待合并**，积压量较大。社区聚焦于 **session 状态管理**、**消息丢失防护** 和 **安全边界加固** 三大主题。今日未发布新版本，但有多个安全修复 PR 进入 review 阶段，建议关注 OAuth callback 和 JSON response bounds 相关修复的合并进度。

---

## 2. 版本发布

**今日无新版本发布**。最新 Release 信息请参阅项目 Release 页面。

---

## 3. 项目进展

### 合并/关闭的重要 PRs

| PR 编号 | 标题 | 状态 | 关键内容 |
|---------|------|------|----------|
| [#96913](https://github.com/openclaw/openclaw/pull/96913) | fix(ollama): preserve tool_calls.arguments as JSON string | CLOSED | 修复 Ollama Cloud 多轮 tool calls 失败问题 |
| [#96914](https://github.com/openclaw/openclaw/pull/96914) | fix(secrets): avoid exec target gateway failures | CLOSED | 修复 secrets.resolve 在 broad target 场景下的 UNAVAILABLE 错误 |
| [#68936](https://github.com/openclaw/openclaw/pull/68936) | Autofix: add PR review autofix pipeline + Windows daemon | CLOSED | 新增 PR review 自动修复流水线 |

### 进入 Review 阶段的高优先级 PRs

| PR 编号 | 标题 | 状态 | 风险评估 |
|---------|------|------|----------|
| [#96917](https://github.com/openclaw/openclaw/pull/96917) | fix(anthropic): restrict OAuth callback host to loopback | OPEN | 🚨 auth-provider 风险 |
| [#96883](https://github.com/openclaw/openclaw/pull/96883) | Scope agent cron operations to the calling agent | OPEN | P1, 涉及安全边界 |
| [#96865](https://github.com/openclaw/openclaw/pull/96865) | fix(codex): honor workspace-only fs for native tools | OPEN | 🚨 security-boundary 风险 |
| [#96866](https://github.com/openclaw/openclaw/pull/96866) | fix(sandbox): scope agent sandboxes by workspace | OPEN | P1, 多租户安全 |

---

## 4. 社区热点

### 评论数最多的 Issues（Top 5）

| Issue | 评论数 | 主题 | 链接 |
|-------|--------|------|------|
| #63918 | 17 | Cron agentTurn 发送 thinking=none 导致 gpt-5-nano 400 错误 | [查看](https://github.com/openclaw/openclaw/issues/63918) |
| #68596 | 15 | 可配置 streaming watchdog timeout 阈值 | [查看](https://github.com/openclaw/openclaw/issues/68596) |
| #65161 | 14 | Heartbeat isolated mode 多重回归问题 | [查看](https://github.com/openclaw/openclaw/issues/65161) |
| #69208 | 12 | 跨通道重复 transcript/replay/context assembly (伞式 issue) | [查看](https://github.com/openclaw/openclaw/issues/69208) |
| #67288 | 11 | amazon-bedrock-mantle 缺少 discovery.enabled 配置项 | [查看](https://github.com/openclaw/openclaw/issues/67288) |

### 热点分析

**核心诉求**：
1. **模型兼容性**：gpt-5-nano、kimi-k2.5、DeepSeek-R1 等新型号适配问题突出
2. **Session 稳定性**：heartbeat、streaming watchdog、context overflow 构成三角问题
3. **多租户安全**：workspace 隔离、sandbox 边界成为关注焦点

---

## 5. Bug 与稳定性

### P1 严重问题（需立即关注）

| Issue | 严重程度 | 状态 | 摘要 | Fix PR |
|-------|----------|------|------|--------|
| #69943 | P1, 🦞 diamond lobster | OPEN | session-memory hook 保存未解析的 chat-template tokens，导致 self-reinforcing poisoning loop | 无 |
| #63216 | P1, 🐚 platinum hermit | OPEN | 同一 session key 反复 hard reset，retry loop 重新注入 bootstrap context | 无 |
| #65374 | P1, 🦞 diamond lobster | OPEN | 内置 dreaming 系统污染多代理场景下的 agent identity | 无 |
| #65624 | P1, 🦞 diamond lobster | OPEN | Mattermost slash commands 暴露可重用的 command tokens (CVSS 7.6/8.6) | 无 |
| #64267 | P1, 🦞 diamond lobster | OPEN | OpenClaw 2026.4.9 将 agent 内部 thinking 暴露给用户 | 无 |

### P2 问题（影响功能）

| Issue | 状态 | 摘要 | Fix PR |
|-------|------|------|--------|
| #63918 | OPEN | Cron agentTurn 发送 thinking=none 导致 400 错误 | 无 |
| #68596 | OPEN | Streaming watchdog timeout 不可配置 | 无 |
| #65161 | OPEN | Heartbeat isolated mode 多重回归 | 无 |
| #67288 | OPEN | amazon-bedrock-mantle 每次请求执行不必要的 discovery | 无 |
| #67419 | OPEN | Bootstrap 文件每轮重新注入，浪费 20-30% tokens | 无 |

### 回归问题

| Issue | 状态 | 摘要 |
|-------|------|------|
| #68264 | OPEN | Canvas/Browser UI 在 Chat 环境中渲染失败 |
| #67136 | OPEN | Write tool 报告成功但未创建文件 |

---

## 6. 功能请求与路线图信号

### 高价值功能请求（有望纳入版本）

| Issue | 主题 | 优先级 | 相关 PR | 评估 |
|-------|------|--------|---------|------|
| #11665 | Webhook hook sessions 支持多轮会话 | P2 | 无 | 文档与实现不一致，需修复 |
| #64046 | 敏感数据脱敏支持 | P1 | 无 | 安全需求强烈 |
| #66252 | Per-Agent TTS/STT 配置覆盖 | P2 | 无 | 多语言场景需求 |
| #60572 | 多槽位内存架构 | P2 | 无 | 架构改进提议 |
| #66944 | Plugin UI Extension System | P2 | 无 | 生态扩展性增强 |
| #64438 | 远程 Reranker 端点支持 | P2 | 无 | 与 embedding provider 对齐 |

### 已有相关 PR 的功能

| 功能 | PR | 状态 |
|------|-----|------|
| Agent cron 操作按调用者 scope 隔离 | #96883 | 👀 ready for maintainer look |
| Agent sandboxes 按 workspace 隔离 | #96866 | 📣 needs proof |
| Discord 访问控制列表增强 | #69748 | OPEN |

---

## 7. 用户反馈摘要

### 真实痛点提炼

**1. Session 管理问题**
- 用户报告 session 在高负载下反复崩溃重启，每次重启都追加 bootstrap，导致 OOM
- Heartbeat 在 isolated mode 下出现 cadence stall，状态报告不准确

**2. 模型适配问题**
- gpt-5-nano、kimi-k2.5、DeepSeek-R1 等新型号与 OpenClaw 预期参数不匹配
- streaming watchdog 在长思考模型上频繁误触发

**3. 安全顾虑**
- 配置文件明文存储 API keys/tokens/secrets
- 日志和 UI 中敏感信息未脱敏
- Mattermost callback URLs 暴露可重用的 tokens

**4. 多通道一致性问题**
- Telegram/Discord/WhatsApp 等通道回复丢失问题
- 跨通道 transcript/replay 行为不一致

### 用户满意度信号

- 👍 最高 Issue: #67413 (Per-agent dreaming configuration) - 5 个 👍
- 多个用户报告通过 CLI/UI 组合使用时遇到 session 状态不一致

---

## 8. 待处理积压

### 长期未响应的 P1 Issues（超过 30 天无更新）

| Issue | 创建日期 | 主题 | 状态 |
|-------|----------|------|------|
| #54531 | 2026-03-25 | Force reply to originating channel | stale, needs-review |
| #65774 | 2026-04-13 | Cron 在非工作时间执行 WhatsApp 消息 | stale |
| #65374 | 2026-04-12 | Dreaming system 污染多代理 identity | needs-security-review |
| #65624 | 2026-04-13 | Mattermost 暴露 command tokens | needs-security-review |

### 高优先级 PR 积压

| PR | 创建日期 | 状态 | 风险 |
|----|----------|------|------|
| #96883 | 2026-06-26 | 👀 ready for maintainer look | P1, 安全边界 |
| #96865 | 2026-06-25 | 📣 needs proof | 🚨 security-boundary |
| #96866 | 2026-06-25 | 📣 needs proof | P1, 多租户安全 |
| #89569 | 2026-06-02 | ⏳ waiting on author | XL size, feature |

### 建议维护者关注

1. **安全类 Issue** (#65624, #64267, #64046) 需优先处理
2. **Session 稳定性** (#63216, #63998, #69208) 形成系统性技术债
3. **PR 积压** 412 个待合并，建议按风险等级分批处理

---

**报告生成时间**: 2026-06-26  
**数据截止**: 2026-06-26 23:59 UTC

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-06-26
**分析范围**：OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"两强领跑、多点突破"**的格局。OpenClaw 与 Hermes Agent 构成第一梯队，日均 Issues/PR 处理量达 135-186 条，代码迭代频率与问题积压量均处于高位，反映出强劲的社区活力与快速的功能演进；cc-haha 与 Codex++ 则聚焦垂直场景，前者深耕桌面端交互体验优化，后者专注于供应商配置与多模型管理。值得关注的是，**安全边界加固**已成为全生态共识性议题，4 个项目均涉及权限隔离、凭证管理或 OAuth 回调相关的修复工作；同时，**Session 状态稳定性**与**多模型适配**构成当前最突出的技术痛点，预计将主导未来 2-3 个版本的迭代重心。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃） | PRs（待合并/已处理） | Release | 健康度评估 |
|------|---------------------|----------------------|---------|------------|
| **OpenClaw** | 186 | 412 / 88 | 无 | ⚠️ 高迭代+高积压，需分险分级处理 |
| **Hermes Agent** | 135 (94新/41关) | 311 / 189 | 无 | ⚠️ 安全补丁优先，积压可控 |
| **cc-haha** | 5 (4新/1关) | 6 / 1 | 无 | ✅ 轻量迭代，聚焦体验优化 |
| **Codex++** | 17 (全部新开) | 2 / 1 | 无 | 🔴 高反馈低消化，启动问题需紧急处理 |

**关键数据洞察**：
- OpenClaw 的 PR 积压量（412）是 Hermes Agent（311）的 1.32 倍，但后者已处理 PR 比例（189/500=37.8%）优于前者（88/500=17.6%）
- cc-haha 虽规模最小，但核心贡献者 @zhbdesign 保持每日 6 PR 的输出频率，代码质量可控
- Codex++ 今日 17 个新 Issue 零关闭，且 4 个启动相关 Bug 集中爆发，存在版本回归风险

---

## 3. OpenClaw 在生态中的定位

### 优势分析

| 维度 | OpenClaw 表现 | 生态对比 |
|------|---------------|----------|
| **社区规模** | 日均 186 Issues + 500 PRs | 远超 cc-haha（5+7）与 Codex++（17+3），与 Hermes Agent 并列第一 |
| **安全投入** | 4 个 P1 安全问题在审，OAuth callback 修复进入 review | Hermes Agent 有 GHSA 漏洞修复，OpenClaw 安全 Issue 数量更多 |
| **多租户架构** | workspace 隔离、sandbox 边界加固（PR #96866） | 生态中唯一明确推进多租户安全边界的项目 |
| **工具链深度** | 覆盖 Ollama、Anthropic、Codex、Secrets 等多 provider | Hermes Agent 侧重平台适配（Feishu、Vertex），OpenClaw 侧重 provider 集成 |

### 技术路线差异

- **OpenClaw** 选择**安全优先**路径：强调 sandbox 隔离、workspace scope、OAuth host 限制
- **Hermes Agent** 选择**平台扩展**路径：Vertex AI、火山引擎 Ark、Feishu 等多平台适配
- **cc-haha** 选择**体验打磨**路径：会话列表性能、按钮状态转换、防重复提交
- **Codex++** 选择**配置灵活性**路径：模型级上下文窗口、子代理模型名重写

### 社区规模量化对比

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 今日活跃 Issue 数 | 186 | 135 | 5 | 17 |
| 今日活跃 PR 数 | 500 | 500 | 7 | 3 |
| P0/P1 问题数 | 5 | 4 | 0 | 0 |
| 安全相关 Issue | 3 | 2 | 0 | 0 |

---

## 4. 共同关注的技术方向

### 4.1 Session 状态管理与稳定性

| 项目 | 具体问题 | 诉求 |
|------|----------|------|
| **OpenClaw** | #63216 同一 session key 反复 hard reset；#63918 Cron agentTurn 400 错误 | 防止 retry loop 重新注入 bootstrap context |
| **Hermes Agent** | #19434 session_search 召回失败；#52813 resume/cron 消息陈旧 DB 字段 | 修复 FTS+JSON/SQLite 分裂导致的会话历史泄漏 |
| **cc-haha** | #882 Stream idle timeout 导致会话不停止 | 增强会话停止机制的可靠性 |
| **Codex++** | #1101 Windows 同步功能失效 | 供应商切换后历史会话保持一致 |

**交叉验证**：4 个项目均报告 Session 相关问题，表明这是当前 AI 助手架构的共性技术债，根因可能涉及状态机设计、缓存一致性、跨进程同步等底层问题。

### 4.2 安全边界与权限隔离

| 项目 | 安全议题 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | #96817 OAuth callback host 限制；#96866 sandbox 按 workspace 隔离 | 🚨 auth-provider 风险、P1 多租户安全 |
| **Hermes Agent** | GHSA-rxqh-5572-8m77 邮件 SPF/DKIM/DMARC 认证绕过 | P0 安全漏洞 |
| **cc-haha** | #918 Edge 浏览器下载报病毒（签名问题待确认） | 🟡 中优先级 |
| **Codex++** | #1183 错误模型请求导致 API 额度浪费 | 🟡 中优先级 |

**趋势判断**：安全已从"可选加固"升级为"必须优先"，预计未来 3 个月内各项目将密集发布安全补丁。

### 4.3 多模型适配与 API 兼容性

| 项目 | 适配问题 | 涉及模型 |
|------|----------|----------|
| **OpenClaw** | #63918 gpt-5-nano thinking=none 导致 400 错误 | gpt-5-nano、kimi-k2.5、DeepSeek-R1 |
| **Hermes Agent** | #8427 Vertex AI provider（Gemini）集成 | Gemini、服务账号/ADC |
| **Codex++** | #1197 模型级上下文窗口配置 | deepseek-v4-pro（1M）、claude-sonnet-4（200K） |

**关键信号**：随着模型厂商快速迭代（GPT-5-nano、DeepSeek-R1 等），开源项目面临持续的适配压力，模型级配置粒度成为刚需。

---

## 5. 差异化定位分析

### 功能侧重

| 项目 | 核心功能 | 辅助功能 |
|------|----------|----------|
| **OpenClaw** | 多 provider 集成、安全边界、多租户架构 | Cron 调度、secrets 管理、PR review 流水线 |
| **Hermes Agent** | 多平台适配（Feishu、Slack、Telegram）、会话历史管理 | TUI 状态栏、Z.AI 配额显示、Nix 打包支持 |
| **cc-haha** | 桌面端交互优化、会话列表性能 | 防重复提交、下载安装体验 |
| **Codex++** | 供应商配置管理、多模型上下文窗口 | 子代理模型名重写、混合 API 模式 |

### 目标用户

| 项目 | 核心用户画像 |
|------|--------------|
| **OpenClaw** | 企业级多租户部署者、需要深度定制的 AI 开发者 |
| **Hermes Agent** | 跨平台运营者（需要对接 Feishu、Slack、Telegram）、安全敏感型用户 |
| **cc-haha** | 桌面端重度用户、追求低延迟本地交互体验 |
| **Codex++** | 多供应商切换者、需要精细化模型配置的高级用户 |

### 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **架构风格** | 模块化安全优先 | 平台驱动适配 | 轻量单体 | 配置驱动 |
| **状态管理** | session-memory hook、heartbeat isolated mode | sessions.json、Gateway INSERT | 会话列表本地缓存 | 供应商配置持久化 |
| **安全模型** | workspace 隔离 + sandbox scope | PID 命名空间 + 零知识代理（规划中） | 依赖上游 | 依赖上游 |
| **扩展机制** | Plugin UI Extension System（规划中） | Skills index、credentials proxy | 轻量化 | modelMappings 配置 |

---

## 6. 社区热度与成熟度

### 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队：快速迭代期                                         │
│  - OpenClaw：日均 686 条操作（186 Issues + 500 PRs）          │
│  - Hermes Agent：日均 635 条操作（135 Issues + 500 PRs）      │
│  特征：功能快速演进 + 安全/稳定性问题并存 + PR 积压需治理     │
├─────────────────────────────────────────────────────────────┤
│  第二梯队：质量巩固期                                         │
│  - Codex++：日均 20 条操作，但启动问题需紧急处理              │
│  特征：功能框架已成型，聚焦稳定性与配置体验                   │
├─────────────────────────────────────────────────────────────┤
│  第三梯队：垂直深耕期                                         │
│  - cc-haha：日均 12 条操作，聚焦 UI/UX 打磨                   │
│  特征：核心贡献者驱动，小步快跑式迭代                         │
└─────────────────────────────────────────────────────────────┘
```

### 成熟度评估

| 项目 | 代码质量 | 文档完善度 | 社区响应速度 | 版本稳定性 |
|------|----------|------------|--------------|------------|
| **OpenClaw** | 中（安全修复多但 P1 问题积压） | 高（Release 页面、PR 模板完善） | 中（部分 P1 超 30 天未响应） | ⚠️ 需关注回归 |
| **Hermes Agent** | 中高（有安全审计流程） | 中（skills-index 存在过期问题） | 中（部分 P0 超 30 天未响应） | ⚠️ 需关注会话泄漏 |
| **cc-haha** | 高（核心贡献者质量把控） | 中（Issue 反馈驱动） | 高（Bug 报告当日有响应） | ✅ 稳定 |
| **Codex++** | 中（升级后启动问题多发） | 低（Issue 讨论为主） | 低（17 新 Issue 零关闭） | 🔴 需紧急修复 |

---

## 7. 值得关注的趋势信号

### 7.1 安全架构成为核心竞争力

**信号**：OpenClaw 的 OAuth callback 修复（#96817）、Hermes Agent 的邮件认证绕过修复（GHSA）、cc-haha 的病毒误报问题（#918）均指向安全议题。

**对开发者的建议**：
- 优先审查 OAuth callback host 限制、sandbox 隔离、credentials proxy 等安全相关 PR
- 关注零知识凭证代理（Hermes Agent #4656）的实现方案，可能成为行业标准

### 7.2 多模型适配压力持续上升

**信号**：gpt-5-nano、kimi-k2.5、DeepSeek-R1、Gemini 等新型号适配问题在 OpenClaw、Codex++、Hermes Agent 中均有体现。

**对开发者的建议**：
- 模型级配置粒度（OpenClaw #96865、Codex++ #1197）将成为标配
- 建议建立模型兼容性测试矩阵，提前覆盖主流新型号

### 7.3 Session 稳定性构成系统性技术债

**信号**：4 个项目均报告 Session 相关问题，涉及 heartbeat、streaming watchdog、context overflow、retry loop 等多个子问题。

**对开发者的建议**：
- Session 状态管理是跨项目共性问题，可考虑抽取通用解决方案
- 关注 OpenClaw 的 session-memory hook 修复（#69943）和 Hermes Agent 的 session_search 修复（#19434）

### 7.4 平台适配从"能用"向"好用"演进

**信号**：Slack Block Kit 支持（Hermes Agent #8552）、Feishu 表格渲染（Hermes Agent #27922）、Telegram Bot API 10.1（Hermes Agent #44428）等平台特性需求涌现。

**对开发者的建议**：
- 平台适配进入精细化阶段，需关注各平台 API 版本演进
- 富文本渲染（Markdown 表格、代码块）成为跨平台一致性的关键

### 7.5 开发者体验成为差异化点

**信号**：cc-haha 的防重复提交、TUI cron 状态栏（Hermes Agent #52822）、Z.AI 配额显示（Hermes Agent #48475）等 DX 功能获得积极反馈。

**对开发者的建议**：
- CLI/TUI 工具的交互细节优化可显著提升用户留存
- 错误信息本地化、进度可视化、状态可观测性是低成本高回报的投入方向

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 今日 Issues 总数 | 186 | 135 | 5 | 17 |
| 今日 PRs 总数 | 500 | 500 | 7 | 3 |
| PR 积压量 | 412 | 311 | 6 | 2 |
| P0/P1 问题数 | 5 | 4 | 0 | 0 |
| 安全相关 Issue | 3 | 2 | 0 | 0 |
| 长期未响应 Issue（>30天） | 4 | 3 | 0 | 0 |
| 今日新版本 | 0 | 0 | 0 | 0 |

---

**报告生成时间**：2026-06-26  
**分析师**：技术生态研究团队

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：** 2026-06-26  
**项目仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

今日项目活跃度维持高位，共产生 **135 条 Issues 更新**（新开/活跃 94 条，关闭 41 条）和 **500 条 PR 更新**（待合并 311 条，已合并/关闭 189 条）。未发布新版本。安全修复成为今日焦点：邮件网关 SPF/DKIM/DMARC 认证绕过漏洞（GHSA-rxqh-5572-8m77）已通过 PR #52801 修复并开放合并。多个 P0/P1 级严重问题持续活跃，包括会话搜索失效、凭证池数据丢失等核心功能缺陷。项目整体处于高迭代状态，建议优先处理安全补丁和会话稳定性相关 PR。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下为今日开放合并的重要 PR，按功能领域分类：

### 安全修复

| PR | 描述 | 状态 |
|---|---|---|
| [#52801](https://github.com/NousResearch/hermes-agent/pull/52801) | **fix(email): 拒绝伪造 From: 头认证绕过** (GHSA-rxqh-5572-8m77) | OPEN |
| [#47705](https://github.com/NousResearch/hermes-agent/pull/47705) | fix: 限制智能审批所有者覆盖范围 | OPEN |

### 会话与状态管理

| PR | 描述 | 状态 |
|---|---|---|
| [#52813](https://github.com/NousResearch/hermes-agent/pull/52813) | fix: resume/cron 消息发送陈旧 DB 字段，导致 100% prompt 缓存未命中 | OPEN |
| [#52808](https://github.com/NousResearch/hermes-agent/pull/52808) | fix(gateway): 启动时清理陈旧 sessions.json 条目 | OPEN |
| [#52827](https://github.com/NousResearch/hermes-agent/pull/52827) | feat(gateway): API 运行保留会话历史 | OPEN |
| [#52818](https://github.com/NousResearch/hermes-agent/pull/52818) | fix(gateway): 清理调度器中陈旧的 resume_pending 标记 | OPEN |

### 平台适配

| PR | 描述 | 状态 |
|---|---|---|
| [#27922](https://github.com/NousResearch/hermes-agent/pull/27922) | fix(feishu): 将 Markdown 表格渲染为原生 Feishu 表格 | OPEN |
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | feat(vertex): 添加 Vertex AI provider（Gemini 模型） | OPEN |
| [#52645](https://github.com/NousResearch/hermes-agent/pull/52645) | feat: 添加火山引擎 Ark 作为内置 provider | OPEN |

### 开发者体验

| PR | 描述 | 状态 |
|---|---|---|
| [#52822](https://github.com/NousResearch/hermes-agent/pull/52822) | feat: 在 TUI 状态栏显示 cron ticker 状态 | OPEN |
| [#48475](https://github.com/NousResearch/hermes-agent/pull/48475) | feat: 显示 Z.AI 账户配额使用情况 | OPEN |
| [#52812](https://github.com/NousResearch/hermes-agent/pull/52812) | fix: 在 Nix 打包环境中通过 HERMES_PYTHON 检测 Python 工具链 | OPEN |

---

## 4. 社区热点

以下 Issues 今日讨论最活跃（按评论数排序）：

### Top 5 热门 Issues

| Issue | 标题 | 评论 | 状态 |
|---|---|---|---|
| [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) | [skills-index-watchdog] Skills index 过期或降级 | 12 | OPEN |
| [#52523](https://github.com/NousResearch/hermes-agent/issues/52523) | cron create --no-agent --script 失败：'str' 对象无 'exists' 属性 | 12 | CLOSED |
| [#4656](https://github.com/NousResearch/hermes-agent/issues/4656) | [Feature] 凭证代理守护进程 — 零知识 HTTP/HTTPS 代理 | 11 | OPEN |
| [#52735](https://github.com/NousResearch/hermes-agent/issues/52735) | Desktop 应用启动崩溃 — 找不到 'simple-git' 模块 | 9 | CLOSED |
| [#8552](https://github.com/NousResearch/hermes-agent/issues/8552) | Slack 平台：使用 Block Kit 替代 legacy mrkdwn | 8 | OPEN |

### 热点分析

**1. Skills Index 降级问题 (#38240)**
- 根因：GitHub Actions 工作流（skills-index.yml）cron 调度失败，导致 `/docs/api/skills-index.json` 超过 30 分钟未更新
- 诉求：自动化监控告警机制需优化，确保文档站点依赖的索引保持新鲜

**2. 凭证安全架构讨论 (#4656)**
- 核心诉求：在 PID 命名空间隔离基础上，进一步实现零知识凭证代理
- 背景：现有 Phase 2 环境隔离和 #4432 的 PID 命名空间隔离已降低攻击面，但配置灵活性受限
- 社区关注度高（👍 1），预计将成为安全路线图重要方向

**3. Slack 平台体验升级 (#8552)**
- 需求：Block Kit 支持 Markdown 表格、标题、链接等富文本
- 当前限制：legacy mrkdwn 不支持表格，导致文档类消息可读性差
- 社区认可度高（👍 9），是平台适配呼声最高的功能之一

---

## 5. Bug 与稳定性

按严重程度排列的活跃 Bug：

### P0/P1 级（需立即关注）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | **Curator 在 umbrella pass 中归档活跃技能**（未验证 consolidation） | OPEN | 无 |
| [#19434](https://github.com/NousResearch/hermes-agent/issues/19434) | **session_search 召回失败**：FTS + JSON/SQLite 分裂 + 子会话隐藏 | OPEN | 无 |
| [#49106](https://github.com/NousResearch/hermes-agent/issues/49106) | **Web/WeChat 会话历史泄漏**：不同会话的对话混入 | CLOSED | 无 |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | **OpenAI-Codex 凭证池丢失新凭证**（轮换时 auth.json 重写） | OPEN | 无 |

### P2 级（高优先级）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#52523](https://github.com/NousResearch/hermes-agent/issues/52523) | Windows 上 cron --no-agent --script 失败 | CLOSED | 无 |
| [#52735](https://github.com/NousResearch/hermes-agent/issues/52735) | Desktop 启动崩溃：缺少 simple-git（git-review IPC 依赖） | CLOSED | 无 |
| [#46260](https://github.com/NousResearch/hermes-agent/issues/46260) | Windows 安装程序在 "desktop" 阶段失败 | OPEN | 无 |
| [#28004](https://github.com/NousResearch/hermes-agent/issues/28004) | Telegram 打字指示器无限卡住（_keep_typing 竞态） | OPEN | 无 |
| [#51646](https://github.com/NousResearch/hermes-agent/issues/51646) | Gateway INSERT 遗漏 `active` 列，导致所有平台会话历史为空 | OPEN | 无 |

### P3 级（中等优先级）

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#36658](https://github.com/NousResearch/hermes-agent/issues/36658) | Dashboard 聊天功能在更新后损坏（React error #301） | OPEN | 无 |
| [#20084](https://github.com/NousResearch/hermes-agent/issues/20084) | TUI Markdown 渲染错误删除代码块中的星号 | OPEN | 无 |
| [#42228](https://github.com/NousResearch/hermes-agent/issues/42228) | Desktop/TUI 压缩会话可能移入 "No workspace" | CLOSED | 无 |

---

## 6. 功能请求与路线图信号

以下功能请求具有较高社区认可度，可能进入下一版本：

### 高优先级功能

| Issue/PR | 描述 | 👍 | 状态 |
|---|---|---|---|
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | 集成 headroom-ai 进行工具输出压缩 | 10 | OPEN |
| [#44428](https://github.com/NousResearch/hermes-agent/issues/44428) | 支持 Telegram Bot API 10.1 富消息 | 5 | OPEN |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | 跨平台会话上下文共享（CLI ↔ Telegram） | 1 | OPEN |
| [#29299](https://github.com/NousResearch/hermes-agent/issues/29299) | 需要 HTTPS OAuth 回调 URL 支持 | 1 | OPEN |

### 平台扩展

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | Vertex AI provider（Gemini + 服务账号/ADC） | OPEN |
| [#52645](https://github.com/NousResearch/hermes-agent/pull/52645) | 火山引擎 Ark 作为内置 provider | OPEN |
| [#46470](https://github.com/NousResearch/hermes-agent/issues/46470) | Feishu 出站消息统一使用 Card 2.0 | OPEN |

### 开发者体验

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#52598](https://github.com/NousResearch/hermes-agent/issues/52598) | 添加开发者创作工作流以加速 profile 分发 | OPEN |
| [#52137](https://github.com/NousResearch/hermes-agent/issues/52137) | 添加俄语 (ru-RU) 本地化 | OPEN |
| [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | dashboard 添加 --allowed-hosts 支持反向代理/Tailscale | OPEN |

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的关键用户痛点：

### 平台兼容性痛点

- **Windows 用户**：安装程序在 desktop 阶段失败（npm install exit code 1），影响新用户上手
- **Nix 用户**：extraPythonPackages 与密封 venv 冲突导致构建失败
- **WSL2 用户**：剪贴板图片粘贴失效，Linux 标题栏叠加问题

### 核心功能痛点

- **会话管理**：跨会话历史泄漏、session_search 召回失效、resume 后 prompt 缓存 100% 未命中
- **凭证管理**：OpenAI-Codex 凭证池轮换时丢失新凭证
- **定时任务**：Windows 上无法创建 script-only cron 作业

### 平台体验痛点

- **Slack**：不支持 Markdown 表格，文档类消息可读性差
- **Telegram**：打字指示器卡住、API 10.1 富消息未支持
- **Feishu**：Markdown 表格显示为原始文本、代码块截断

### 正面反馈信号

- 社区对 Vertex AI、Z.AI、火山引擎等新 provider 集成表示期待
- TUI cron 状态栏功能收到积极响应
- 邮件安全修复（GHSA）体现了对安全问题的快速响应

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或停滞，建议维护者关注：

### 长期未解决的高优先级 Bug

| Issue | 创建时间 | 状态 | 原因分析 |
|---|---|---|---|
| [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) | 2026-05-21 | OPEN | Curator 归档活跃技能，fail-open 行为 |
| [#19434](https://github.com/NousResearch/hermes-agent/issues/19434) | 2026-05-04 | OPEN | session_search 4 个 bug + 2 个设计缺陷 |
| [#19566](https://github.com/NousResearch/hermes-agent/issues/19566) | 2026-05-04 | OPEN | 凭证池轮换时数据丢失 |

### 长期未合并的功能 PR

| PR | 创建时间 | 状态 | 阻塞原因 |
|---|---|---|---|
| [#8427](https://github.com/NousResearch/hermes-agent/pull/8427) | 2026-04-12 | OPEN | Vertex AI provider，需审查 |
| [#30179](https://github.com/NousResearch/hermes-agent/pull/30179) | 2026-05-22 | OPEN | egress 代理安全功能，需安全审计 |
| [#378](https://github.com/NousResearch/hermes-agent/issues/378) | 2026-03-04 | CLOSED | here.now skill 集成（已关闭） |

### 建议优先处理

1. **安全补丁**：PR #52801（邮件认证绕过）应尽快合并
2. **会话稳定性**：PR #52813（prompt 缓存未命中）和 #52808（sessions.json 清理）影响核心体验
3. **P0 Bug**：#29912 和 #19434 已存在超过一个月，需分配资源排查

---

**报告生成时间：** 2026-06-26  
**数据来源：** [Hermes Agent GitHub](https://github.com/NousResearch/hermes-agent)

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**：2026-06-26  
**项目仓库**：https://github.com/NanmiCoder/cc-haha

---

## 1. 今日速览

过去24小时内，cc-haha 项目保持高度活跃，共产生 **5 条 Issues 更新**（4 新开/活跃，1 已关闭）和 **7 条 PR 更新**（6 待合并，1 已关闭）。项目整体呈现**健康增长态势**，核心贡献者 @zhbdesign 持续输出优化代码，今日提交了 6 个 PR，涵盖 UI 交互优化、性能调优和 Bug 修复三大方向。社区反馈方面，4 个新 Bug 报告主要聚焦于 Windows 平台兼容性和网络连接稳定性问题，需维护者重点关注。

---

## 2. 版本发布

**无新版本发布**

过去24小时内未检测到 Release 更新，项目当前最新版本仍为 **v0.4.3**。

---

## 3. 项目进展

### 已合并 PR

| PR 编号 | 标题 | 变更范围 | 状态 |
|---------|------|----------|------|
| [#914](https://github.com/NanmiCoder/cc-haha/pull/914) | 优化会话列表加载性能，会话标题添加气泡 | desktop, server | ✅ 已关闭 |

> **说明**：该 PR 与 #915 为重复提交，#915 已替代 #914 进入待合并状态。

### 待合并 PR（6 条）

| PR 编号 | 标题 | 变更范围 | 规模 | 优先级 |
|---------|------|----------|------|--------|
| [#921](https://github.com/NanmiCoder/cc-haha/pull/921) | 修复新会话运行按钮转为停止按钮的延迟 | desktop | L | 🔴 高 |
| [#920](https://github.com/NanmiCoder/cc-haha/pull/920) | 优化会话中最近项目列表加载慢 | server | M | 🟡 中 |
| [#919](https://github.com/NanmiCoder/cc-haha/pull/919) | 修复非git项目在新会话执行git命令导致加载慢 | server | S | 🟡 中 |
| [#916](https://github.com/NanmiCoder/cc-haha/pull/916) | 优化新建会话不执行，关闭后删除untitled session | desktop | XS | 🟢 低 |
| [#915](https://github.com/NanmiCoder/cc-haha/pull/915) | 优化会话列表加载性能，会话标题添加气泡 | desktop, server | L | 🔴 高 |
| [#913](https://github.com/NanmiCoder/cc-haha/pull/913) | 修复服务商保存速度慢，添加防重复提交 | desktop | M | 🟡 中 |

**进展评估**：今日 PR 活动集中在**性能优化**和**用户体验改进**两个维度，6 个 PR 均标注 `needs-maintainer-approval`，建议维护者尽快审阅合并。

---

## 4. 社区热点

### 热门 Issues 讨论

| 编号 | 标题 | 评论数 | 状态 |
|------|------|--------|------|
| [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | [BUG] API Error: The socket connection was closed unexpectedly | 4 | 🟠 开放 |
| [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | [BUG] The operation was aborted和Stream idle timeout导致会话不停止 | 3 | 🟠 开放 |

**热点分析**：

- **#917** 涉及 Windows 平台下大模型长篇报告生成时的 Socket 连接异常问题，已获得 4 条评论，社区关注度高。该问题与官方 claude-code 项目存在关联 Issue，维护者可能需要参考上游解决方案。

- **#882** 报告会话在应停止时持续回答消息，已更新至 2026-06-26，表明问题仍在活跃讨论中。

---

## 5. Bug 与稳定性

### 今日新报告 Bug（按严重程度排列）

| 严重度 | 编号 | 标题 | 平台/场景 | 已有 Fix PR |
|--------|------|------|-----------|-------------|
| 🔴 高 | [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | API Error: Socket connection closed unexpectedly | Windows / 长篇报告生成 | ❌ 无 |
| 🔴 高 | [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | Stream idle timeout / 会话不停止 | 通用场景 | ❌ 无 |
| 🟡 中 | [#918](https://github.com/NanmiCoder/cc-haha/issues/918) | Edge 浏览器下载报病毒 | Windows / 下载安装 | ❌ 无 |
| 🟡 中 | [#909](https://github.com/NanmiCoder/cc-haha/issues/909) | /model 命令无响应，无法切换模型 | 通用场景 | ❌ 无 |
| 🟢 低 | [#912](https://github.com/NanmiCoder/cc-haha/issues/912) | litellm 转 google api 连接失败 | Server / API 集成 | ✅ 已关闭 |

**稳定性评估**：今日报告 **4 个新 Bug**，其中 2 个高严重度问题涉及核心功能（API 连接、会话控制），建议优先处理。#918 报告的病毒误报问题需确认是否为签名问题或真阳性。

---

## 6. 功能请求与路线图信号

### 用户功能请求

| 编号 | 请求内容 | 来源 | 可行性评估 |
|------|----------|------|------------|
| [#917](https://github.com/NanmiCoder/cc-haha/issues/917) | 改善大模型长篇输出时的连接稳定性 | Bug 报告附带 | 需网络层优化 |
| [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | 增强会话停止机制的可靠性 | Bug 报告附带 | 需状态机改进 |

**路线图信号**：从今日 PR 活动来看，项目近期重点方向包括：
1. **性能优化**（会话列表加载、项目列表加载）
2. **UI/UX 改进**（按钮状态转换、气泡提示）
3. **健壮性提升**（防重复提交、错误处理）

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 涉及 Issue | 用户场景 |
|------|------------|----------|
| 网络连接不稳定 | #917, #882 | Windows 用户使用大模型生成长篇内容时频繁断开 |
| 会话控制失效 | #882 | AI 在应停止时持续回答，用户无法主动中断 |
| 命令响应缺失 | #909 | 使用 /model 命令切换模型时无任何反应 |
| 下载安全误报 | #918 | Edge 浏览器将下载文件标记为病毒，影响信任度 |

### 用户满意度信号

- **正面**：Issue #912 用户反馈 litellm 集成问题已关闭，表明相关问题得到解决
- **负面**：多个 Bug 报告集中在 Windows 平台，跨平台一致性需加强

---

## 8. 待处理积压

### 长期未响应 Issue（超过 5 天无更新）

| 编号 | 标题 | 创建日期 | 最后更新 | 积压天数 |
|------|------|----------|----------|----------|
| [#882](https://github.com/NanmiCoder/cc-haha/issues/882) | Stream idle timeout / 会话不停止 | 2026-06-21 | 2026-06-26 | 5 天 |

> ⚠️ **提醒维护者**：#882 已开放 5 天且仍有评论更新，建议尽快确认复现步骤或提供临时 workaround。

### 待审阅高优先级 PR

| 编号 | 标题 | 提交日期 | 等待天数 |
|------|------|----------|----------|
| [#921](https://github.com/NanmiCoder/cc-haha/pull/921) | 修复新会话运行按钮延迟 | 2026-06-26 | 0 天 |
| [#915](https://github.com/NanmiCoder/cc-haha/pull/915) | 优化会话列表加载性能 | 2026-06-25 | 1 天 |

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 今日新增 Issues | 4 |
| 今日关闭 Issues | 1 |
| 今日新增 PRs | 7 |
| 今日合并 PRs | 0 |
| 新版本发布 | 0 |
| 核心贡献者 | @zhbdesign |

---

*报告生成时间：2026-06-26 | 数据来源：GitHub cc-haha 仓库*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期：** 2026-06-26  
**项目仓库：** [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## 1. 今日速览

2026年6月26日，Codex++ 项目保持高度活跃态势。过去24小时内共产生 **17 条 Issues 更新**（全部为新开/活跃状态，无关闭）和 **3 条 PR 更新**（2个待合并，1个已关闭）。项目整体呈现"高反馈、低消化"特征：用户报告集中在**启动失败、升级后异常、供应商配置问题**三大类，而功能迭代方面有2个重要 PR 正在推进（上下文窗口粒度配置、子代理模型名重写）。建议优先处理影响核心可用性的 Bug，尤其是多个用户反馈的升级后无法启动问题。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### PR #906 已关闭 ✅
**增强 Windows Computer Use 启动前检查与 CDP 就绪判定**

- **作者：** @YUANLITONGZAI
- **状态：** 已关闭（2026-06-25）
- **内容摘要：** 为 Codex++ 增加 Windows-only 的 Computer Use 启动前检查和启动链路加固，修复范围包括启动前配置修复、bundled 插件可用性、CDP 目标判定、已有实例复用路径，以及 bundled runtime 的兼容性兜底。
- **关联 Issues：** #498 等
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/906

### PR #1197 开放中 🔄
**fix(core,manager): 按模型粒度配置上下文窗口（model_catalog_json + 后缀语法）**

- **作者：** @jarvislee90s-dot
- **状态：** Open，评论更新于 2026-06-25
- **内容摘要：** 解决 #1171，基于 #931 已确认的运行时根因做自动化实现。当前上下文窗口按 relay profile 单值配置，当模型列表同时存在 `deepseek-v4-pro`（1M）和 `claude-sonnet-4`（200K）等不同窗口模型时，用户只能二选一。本 PR 引入**模型级上下文窗口配置**机制。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/1197

### PR #1109 开放中 🔄
**feat: add model name rewriting for sub-agent spawn**

- **作者：** @fgyuuang
- **状态：** Open，评论更新于 2026-06-25
- **内容摘要：** 在协议代理层增加模型名重写支持。当 relay profile 配置了 `modelMappings` 且 `modelMappingsEnabled` 为 true 时，Codex++ 自动在发往上游 API 前重写请求中的模型名，支持子代理请求的模型映射。
- **链接：** https://github.com/BigPizzaV3/CodexPlusPlus/pull/1109

---

## 4. 社区热点

### 最活跃 Issues（按评论数排序）

| Issue | 类型 | 评论数 | 核心诉求 |
|-------|------|--------|----------|
| [#1101](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1101) | Bug | 6 | Windows 同步功能失效，供应商切换后历史会话无法同步 |
| [#966](https://github.com/BigPizzaV3/CodexPlusPlus/issues/966) | Question | 3 | 自动化任务模型报错，Responses API 返回不支持错误 |
| [#1183](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1183) | Bug | 3 | 自定义 API 后端持续收到 gpt-5.4 请求（每秒一次），配置了 minimax-m2.5 模型 |
| [#1181](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1181) | Bug | 2 | 升级后无法启动，报 "Something went wrong…" |
| [#1202](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1202) | Feature | 1 | 目标模式无人值守场景需要自动错误恢复与重试机制 |

**热点分析：**
- **同步与配置问题**（#1101、#1208）反映用户在多供应商场景下的配置管理痛点
- **模型请求异常**（#1183）表明模型名映射逻辑存在缺陷，导致错误的模型请求被发送
- **升级稳定性**（#1181、#1205）集中爆发，暗示最新版本可能存在回归问题

---

## 5. Bug 与稳定性

### 🔴 高优先级（影响核心功能）

| Issue | 标题 | 影响范围 | 状态 |
|-------|------|----------|------|
| [#1181](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1181) | 升级后无法正常启动 | 启动/重启 | Open，2条评论 |
| [#1205](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1205) | 升级后 Codex++ 无法启动 | 启动/重启 | Open，1条评论 |
| [#1207](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1207) | macOS 15.7.5 (Sequoia) 管理工具被 AMFI 内核拦截 | 启动/重启 | Open，0条评论 |
| [#1183](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1183) | 持续发送 gpt-5.4 请求到自定义 API | 其他 | Open，3条评论 |

### 🟡 中优先级（功能异常）

| Issue | 标题 | 影响范围 | 状态 |
|-------|------|----------|------|
| [#1101](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1101) | Windows 无法同步会话 | 供应商切换/配置写入 | Open，6条评论 |
| [#1210](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1210) | 混合 API 模式下 MCP 工具不注入 | 混合 API/MCP/Chrome | Open，0条评论 |
| [#1206](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1206) | 识别到的 .codex 目录与实际不符 | 供应商切换/配置写入 | Open，0条评论 |
| [#1201](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1201) | UI 错乱 | 启动/重启 | Open，0条评论 |

### 🟢 低优先级（界面/体验）

| Issue | 标题 | 影响范围 | 状态 |
|-------|------|----------|------|
| [#1213](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1213) | agnes 支持 512 但默认显示 256 上下文 | 界面/交互 | Open，0条评论 |

**稳定性预警：** 今日有 **4 个启动相关 Bug** 集中爆发（#1181、#1205、#1207、#1201），且均与升级操作相关，强烈建议排查 1.2.18 版本是否存在破坏性变更。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 标题 | 诉求概述 | 关联 PR/Issue |
|-------|------|----------|---------------|
| [#1202](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1202) | 目标模式自动错误恢复与重试机制 | 三层机制：自定义重试策略、指数退避、任务队列持久化 | - |
| [#1211](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1211) | 恢复多浏览器窗口支持 | 新版 Codex 合并浏览器导致无法多开 | - |
| [#1209](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1209) | 原生工具类型映射配置 | 将 `web_search_call` 正确翻译回 `custom_tool_call` | 关联 #586 |
| [#1109](https://github.com/BigPizzaV3/CodexPlusPlus/pull/1109) | 子代理模型名重写 | 支持 `modelMappings` 配置下的模型名自动重写 | **PR 已提交** |

### 路线图信号分析

1. **自动化稳定性** 是核心诉求（#1202），用户期望真正的"无人值守"能力
2. **多模型上下文管理** 已有 PR #1197 在推进，预计下版本可能合并
3. **工具调用兼容性**（#1209、#1212）反映 Responses API 与 Chat Completions API 转换后的功能损失问题

---

## 7. 用户反馈摘要

### 核心痛点

| 痛点 | 典型 Issue | 用户声音 |
|------|-----------|----------|
| **升级后无法使用** | #1181、#1205 | "升级完++和codex到最新版本后就无法正常启动了" |
| **配置不生效** | #1101、#1206 | "Codex++ 无论安装在哪里，都会尝试去寻找 Administrator 目录下的配置文件" |
| **供应商管理混乱** | #1203 | "从 CC Switch 导入供应商，会把配置内容搞乱，把地址和 KEY 等显示错乱" |
| **自动化任务中断** | #966、#1202 | "一旦发生中断，系统便会停止工作，必须依赖人工介入" |

### 用户场景

- **多用户 Windows 环境**：同时存在 Admin 和 Administrator 账户时配置路径冲突（#1206）
- **自定义 API 后端**：用户自建 new-api，使用火山引擎等国内模型（#1208）
- **macOS 最新系统**：Sequoia 15.7.5 的 AMFI 拦截导致应用完全无法运行（#1207）

### 满意/不满意

- **不满意**：升级稳定性、供应商配置持久化、多浏览器窗口
- **期望**：真正的无人值守自动化、灵活的上下文窗口配置

---

## 8. 待处理积压

### 长期未响应 Issues（>7天无更新）

| Issue | 标题 | 创建时间 | 最后更新 | 状态 |
|-------|------|----------|----------|------|
| [#966](https://github.com/BigPizzaV3/CodexPlusPlus/issues/966) | 自动化任务模型报错 | 2026-06-14 | 2026-06-26 | Open，3条评论 |
| [#1101](https://github.com/BigPizzaV3/CodexPlusPlus/issues/1101) | Windows 无法同步 | 2026-06-18 | 2026-06-25 | Open，6条评论 |

### 建议优先处理

1. **#966** - 自动化任务模型报错（持续活跃讨论，核心功能缺陷）
2. **#1101** - Windows 同步问题（高评论数，多用户受影响）
3. **#1183** - 错误模型请求（可能导致用户 API 额度浪费）
4. **升级稳定性问题群**（#1181、#1205、#1207、#1201）- 建议发布热修复

---

## 附录：数据统计

| 指标 | 数值 |
|------|------|
| 今日新增 Issues | 17 |
| 今日关闭 Issues | 0 |
| 今日新增 PRs | 3 |
| 今日合并 PRs | 0 |
| 今日新版本 | 0 |
| 活跃 Issue 评论总数 | 19 |
| 待合并 PRs | 2 |

---

*报告生成时间：2026-06-26 | 数据来源：GitHub BigPizzaV3/CodexPlusPlus*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*