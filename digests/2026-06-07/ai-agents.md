# OpenClaw 生态日报 2026-06-07

> Issues: 157 | PRs: 500 | 覆盖项目: 4 个 | 生成时间: 2026-06-07 03:58 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/NousResearch/hermes-agent)
- [cc-haha](https://github.com/NanmiCoder/cc-haha)
- [Codex++](https://github.com/BigPizzaV3/CodexPlusPlus)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报

**报告日期**: 2026-06-07  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

OpenClaw 社区今日保持高度活跃，共处理 **157 条 Issues 更新**（98 新开/活跃，59 关闭）和 **500 条 PR 更新**（389 待合并，111 已合并/关闭）。项目发布了 **v2026.6.5-beta.2** 测试版，重点修复了 QQBot 的 `<thinking>` 内容泄露问题和 MCP 工具结果处理。今日社区焦点集中在 **OpenAI ChatGPT Responses 传输失败**（#90083，14 条评论）和 **Codex 回归问题**（#88312，13 条评论）两个 P1 级 Bug 上。微软 Foundry 与 DeepSeek V4 的兼容性问题已通过多个 PR 集中修复（#90884、#90830、#91046、#87933），Config Schema 验证问题也在今日得到解决（#89667、#89692、#91037）。整体项目健康度良好，PR 合并效率较高，但存在若干高优先级回归问题需要关注。

---

## 2. 版本发布

### v2026.6.5-beta.2 发布

**发布时间**: 2026-06-07  
**发布类型**: Beta 测试版

**主要修复**:

| 功能模块 | PR | 修复内容 |
|---------|-----|---------|
| QQBot | #89913, #90132 | 移除模型推理/思考脚手架（`<thinking>` 标签），防止原始内容泄露到频道回复 |
| MCP 工具 | - | 修复 `resource_link`、`resource`、`audio`、畸形图片及未来新增类型的处理逻辑 |

**迁移注意事项**: 无破坏性变更，建议在使用 QQBot 频道或 MCP 工具的项目中测试验证。

---

## 3. 项目进展

### 今日合并/关闭的重要 PRs

#### 🔴 P1 级修复（已合并）

| PR | 标题 | 修复内容 | 关联 Issue |
|----|------|---------|-----------|
| [#91046](https://github.com/openclaw/openclaw/pull/91046) | fix(microsoft-foundry): exclude alias providers from DeepSeek V4 thinking wrapper | 修复 Foundry 别名提供商（如 `microsoft-foundry-9433`）未正确排除 DeepSeek V4 thinking 包装器的问题 | #90520 |
| [#90884](https://github.com/openclaw/openclaw/pull/90884) | fix(agent): exclude Microsoft Foundry alias providers from DeepSeek V4 thinking wrapper | 同上，补充对别名 provider 的精确匹配 | #90520 |
| [#90830](https://github.com/openclaw/openclaw/pull/90830) | fix(microsoft-foundry): suppress DeepSeek V4 thinking on alias provider ids | 修复 `0c74f18a1c0` 提交中遗漏的别名 provider 检查 | #90520 |
| [#91037](https://github.com/openclaw/openclaw/pull/91037) | fix(config): allow thinkingLevelMap in persisted model schema | 修复 Microsoft Foundry Entra ID onboarding 因 `thinkingLevelMap` 字段被 schema 拒绝而失败的问题 | #91011 |
| [#89667](https://github.com/openclaw/openclaw/pull/89667) | fix(config): allow requiresReasoningContentOnAssistantMessages in ModelCompatSchema | 允许在 ModelCompatSchema 中配置 `requiresReasoningContentOnAssistantMessages` | #89660 |
| [#89692](https://github.com/openclaw/openclaw/pull/89692) | fix(config): allow compat.requiresReasoningContentOnAssistantMessages in model config | 同上，确保 DeepSeek API 兼容 | #89660 |

#### 🟡 P2 级修复（已合并/待合并）

| PR | 标题 | 状态 | 关键内容 |
|----|------|------|---------|
| [#87909](https://github.com/openclaw/openclaw/pull/87909) | fix(inbound-meta): head+tail truncation for reply context body | 👀 ready for maintainer look | 修复长消息回复时 body 被过度截断的问题 |
| [#89659](https://github.com/openclaw/openclaw/pull/89659) | fix(feishu): retry on send rate-limit errors (230020/230006) | 👀 ready for maintainer look | 飞书发送增加限流重试逻辑（2 次，500ms/1000ms 退避） |
| [#85155](https://github.com/openclaw/openclaw/pull/85155) | fix(agents): avoid inviting provider swaps in model alias guidance | 👀 ready for maintainer look | 优化模型别名引导逻辑，避免不必要的 provider 切换 |
| [#90328](https://github.com/openclaw/openclaw/pull/90328) | Expose model picker agent runtimes | 👀 ready for maintainer look | WebUI 模型选择器显示非默认运行时标签 |
| [#91078](https://github.com/openclaw/openclaw/pull/91078) | [codex] Avoid nested filesystem sandbox for OpenClaw sandbox tools | 📣 needs proof | 避免 Codex 嵌套文件系统沙箱 |
| [#91076](https://github.com/openclaw/openclaw/pull/91076) | fix(codex): deliver assistant reply when orphan tool.call lacks result | 📣 needs proof | 修复 2026.6.1 回归：孤立 tool.call 导致回复被抑制 |
| [#91074](https://github.com/openclaw/openclaw/pull/91074) | fix(diagnostics): add human-readable MiB units and threshold percentage to memory pressure logs | 📣 needs proof | 内存压力日志增加可读单位 |

#### 📖 文档更新

| PR | 标题 | 内容 |
|----|------|------|
| [#91032](https://github.com/openclaw/openclaw/pull/91032) | docs(imessage): require DisableLibraryValidation on modern macOS | 更新 macOS 10.13+ 仍需 DisableLibraryValidation 的说明 |

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 👍 | 标题与摘要 |
|-------|--------|-----|-----------|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | 14 | 3 | **[Bug] OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for gpt-5.4/gpt-5.5** — 升级到 2026.6.1 后，使用 `openai/gpt-5.4` 和 `openai/gpt-5.5` 时出现连接错误 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | 13 | 3 | **[Regression] 2026.5.27: Codex app-server turn-completion stall** — 多工具代理回合在 2026.5.27 开始可靠失败，提示 "Codex stopped before confirming the turn was complete" |
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | 11 | 2 | **Feishu streaming card: abnormal typewriter effect and final content truncated** — 飞书频道流式模式下，打字机效果异常，最终内容仅显示最后一个字符 |
| [#73424](https://github.com/openclaw/openclaw/issues/73424) | 10 | 1 | **image tool: 'Failed to optimize image' error in preprocessing pipeline** — 内置 image 工具分析 JPEG 图片时报优化失败 |
| [#90093](https://github.com/openclaw/openclaw/issues/90093) | 9 | 2 | **openai-chatgpt-responses native replay sends encrypted reasoning** — 首次对话成功，第二次对话因 `invalid_encrypted_content` 错误失败 |
| [#71491](https://github.com/openclaw/openclaw/issues/71491) | 8 | 1 | **Kimi K2.6 reasoning_content 400 regression in long conversations** — 长对话上下文压缩后仍出现 `reasoning_content is missing` 错误 |
| [#43015](https://github.com/openclaw/openclaw/issues/43015) | 8 | 3 | **message.send schema overexposes poll/components/modal** — GPT 模型倾向于自动填充高级字段，导致验证失败 |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | 7 | 1 | **Cron scheduled trigger contaminates global runtime state** — 定时任务触发器污染全局运行时状态，导致瞬时系统级过载失败 |

### 热点分析

**核心诉求**:

1. **模型兼容性**: 多个 Issue 反映 GPT-5.4/5.5、DeepSeek V4、Kimi K2.6 等新型号的兼容性问题，涉及 reasoning content 处理、thinking 包装器、API 字段验证等
2. **飞书频道质量**: 流式卡片渲染异常（打字机效果、截断）、多行消息仅显示最后一行等问题影响用户体验
3. **Codex 回归**: 2026.5.27 引入的回归问题导致多工具代理回合无法完成

---

## 5. Bug 与稳定性

### 🔴 P1 级 Bug（需紧急处理）

| Issue | 标题 | 状态 | 是否有 Fix PR | 备注 |
|-------|------|------|--------------|------|
| [#90083](https://github.com/openclaw/openclaw/issues/90083) | OpenAI ChatGPT Responses transport fails for gpt-5.4/5.5 | OPEN | ❌ | 影响生产环境，14 条评论 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex app-server turn-completion stall regression | OPEN | ❌ | 回归 #84076，13 条评论 |
| [#90991](https://github.com/openclaw/openclaw/issues/90991) | Cron trigger contaminates global runtime state | OPEN | ❌ | 系统级过载风险，7 条评论 |
| [#90093](https://github.com/openclaw/openclaw/issues/90093) | Native replay sends encrypted reasoning | OPEN | ❌ | 多轮对话失败 |
| [#71491](https://github.com/openclaw/openclaw/issues/71491) | Kimi K2.6 reasoning_content 400 regression | OPEN | ❌ | 长对话回归 |
| [#90925](https://github.com/openclaw/openclaw/issues/90925) | Subagent announce compaction for Codex/OAuth fails | OPEN | ❌ | 子代理完成公告路径失败 |
| [#91018](https://github.com/openclaw/openclaw/issues/91018) | Upgrade 2026.6.1 broke DeepSeek prompt cache | OPEN | ❌ | 严重：$6/小时费用损失 |
| [#86050](https://github.com/openclaw/openclaw/issues/86050) | Gateway buffers claude-cli stream events | OPEN | ❌ | 流式事件丢失 |

### 🟡 P2 级 Bug

| Issue | 标题 | 状态 | Fix PR |
|-------|------|------|--------|
| [#88929](https://github.com/openclaw/openclaw/issues/88929) | Feishu streaming card typewriter effect abnormal | OPEN | ❌ |
| [#90886](https://github.com/openclaw/openclaw/issues/90886) | Gateway hangs when provider lacks credentials | OPEN | ❌ |
| [#90892](https://github.com/openclaw/openclaw/issues/90892) | Feishu multi-line messages only display last line | OPEN | ❌ |
| [#87610](https://github.com/openclaw/openclaw/issues/87610) | Telegram shows internal error for normal grep exit(1) | OPEN | ❌ |
| [#90428](https://github.com/openclaw/openclaw/issues/90428) | exec tool triggers gateway SIGTERM restart on WSL2 | OPEN | ❌ |

### 🟢 今日已关闭的 Bug

| Issue | 标题 | 关闭原因 |
|-------|------|---------|
| [#91011](https://github.com/openclaw/openclaw/issues/91011) | Foundry Entra ID onboarding fails with "Unrecognized key: thinkingLevelMap" | ✅ 已合并 #91037 |
| [#89660](https://github.com/openclaw/openclaw/issues/89660) | requiresReasoningContentOnAssistantMessages missing from ModelCompatSchema | ✅ 已合并 #89667, #89692 |
| [#90509](https://github.com/openclaw/openclaw/issues/90509) | @openclaw/bluebubbles `core.channel.turn` undefined | 已关闭 |
| [#90964](https://github.com/openclaw/openclaw/issues/90964) | `read` tool fails to read WebChat uploaded images | 已关闭 |
| [#90947](https://github.com/openclaw/openclaw/issues/90947) | cron server_error retry classifier matches any bare 5xx | 已关闭 |

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 标题 | 优先级 | 潜在价值 |
|-------|------|--------|---------|
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | **Topic-session families for one assistant across multiple named context lanes** | P2 | 允许多命名上下文车道的会话家族模型，共享持久记忆 |
| [#89265](https://github.com/openclaw/openclaw/issues/89265) | **More local providers** | P3 | 本地模型作为一等公民，降低 AI 成本 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | **Self-hosted STT/TTS provider support in webchat** | P2 | WebChat 语音功能支持自托管 TTS/STT |
| [#62615](https://github.com/openclaw/openclaw/issues/62615) | **Add gateway-side circuit breaker for unhealthy sessions** | P2 | 防止持续失败会话的无限重试 |
| [#90354](https://github.com/openclaw/openclaw/issues/90354) | **Add bounded/validated append semantics for pre-compaction memory flush** | P2 | 内存压缩前的写入保护 |
| [#11955](https://github.com/openclaw/openclaw/issues/11955) | **Memory/Context Improvements (metrics + global semantic search + conversation chaining)** | P2 | 长期记忆和上下文增强 |

### 正在推进的 PR（功能相关）

| PR | 标题 | 状态 | 预期效果 |
|----|------|------|---------|
| [#90101](https://github.com/openclaw/openclaw/pull/90101) | feat: add runtime self context config and tool | ⏳ waiting on author | 运行时自上下文配置 |
| [#78441](https://github.com/openclaw/openclaw/pull/78441) | feat(subagents): forward toolsAllow from sessions_spawn | ⏳ waiting on author | 子代理工具权限控制 |
| [#91031](https://github.com/openclaw/openclaw/pull/91031) | [codex] Add OpenRouter OAuth login | 👀 ready for maintainer look | OpenRouter PKCE OAuth 登录 |
| [#86627](https://github.com/openclaw/openclaw/pull/86627) | Keep core doctor health in contribution order | ⏳ waiting on author | 结构化健康检查 |

---

## 7. 用户反馈摘要

### 真实痛点场景

| 场景 | 用户反馈 | 影响 |
|------|---------|------|
| **升级后 API 成本激增** | #91018 用户报告升级到 2026.6.1 后，DeepSeek Prompt Cache 完全失效，一小时烧掉约 $6 | 严重财务影响 |
| **飞书频道消息丢失** | #90892 多行消息仅显示最后一行，#88929 流式卡片内容截断 | 用户体验严重下降 |
| **Codex 多工具代理不可用** | #88312 回归导致 2026.5.27 后多工具场景完全失败 | 核心功能受损 |
| **配置空格路径问题** | #44599 Docker 安装时 `OPENCLAW_CONFIG_DIR` 包含空格导致

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**: 2026-06-07  
**分析范围**: OpenClaw、Hermes Agent、cc-haha、Codex++

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态当前呈现**"三极分化、协同演进"**的格局。头部项目（OpenClaw、Hermes Agent）日均处理 Issue/PR 规模达数百量级，已进入企业级开发节奏，代码审查与安全审计成为日常；中部项目（cc-haha、Codex++）聚焦特定场景深耕，通过 UI/UX 优化和平台适配积累用户。值得关注的是，**多项目不约而同地将 2026 年 Q2 的工作重心从功能迭代转向稳定性加固**，模型兼容性、平台一致性、安全防护成为共同的技术主线，表明生态正从"功能竞赛"进入"质量攻坚"阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃） | PR（待合并/已合并） | 版本发布 | 健康度 | 核心矛盾 |
|------|---------------------|---------------------|----------|--------|----------|
| **OpenClaw** | 157（98/59） | 500（389/111） | v2026.6.5-beta.2 | 🟢 良好 | P1 Bug 积压（8个），Codex 回归 |
| **Hermes Agent** | 117（102/15） | 500（360/140） | 无 | 🟡 需关注 | 安全修复为主，平台兼容性突出 |
| **cc-haha** | 8（8/0） | 1（0/1） | 无（v0.4.0 推进中） | 🟢 良好 | Electron 迁移进度 |
| **Codex++** | 39（35/4） | 6（5/1） | 无 | 🟡 需关注 | macOS 打包缺陷，中转模式稳定性 |

**数据洞察**：
- OpenClaw 与 Hermes Agent 的 Issue/PR 吞吐量相近（约 500 条/日），但 OpenClaw 的 PR 合并效率（111 vs 140）略低，积压压力更大
- cc-haha 规模最小但国际化进展显著（5 种语言），处于功能迭代向稳定过渡期
- Codex++ 社区反馈热烈（39 Issues），但维护者响应速度与问题增长存在缺口

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势分析

| 维度 | OpenClaw | 生态均值 |
|------|----------|----------|
| **Issue 吞吐量** | 157/日 | ~80/日 |
| **PR 合并效率** | 22.2%（111/500） | ~25% |
| **版本迭代速度** | 每 2-3 天一个 beta | 较慢 |
| **功能覆盖度** | 覆盖 10+ 消息平台、多种模型 | 中等 |

### 3.2 技术路线差异

OpenClaw 采用**"全协议兼容"**路线，支持 OpenAI、DeepSeek、Microsoft Foundry、Kimi 等 20+ 模型 provider，并通过 MCP 协议扩展工具生态。相比之下：
- **Hermes Agent** 侧重**安全网关**能力，命令行交互深度更强
- **cc-haha** 聚焦**本地代码助手**场景，UI 驱动的交互设计
- **Codex++** 专注**中转代理**模式，解决 API 转发与多账号管理

### 3.3 社区规模对比

| 项目 | Star 数（估算） | 贡献者活跃度 | Issue 响应速度 |
|------|----------------|--------------|----------------|
| OpenClaw | 高 | 极高 | 中（平均 2-3 天） |
| Hermes Agent | 高 | 高 | 中（平均 2 天） |
| cc-haha | 中 | 中 | 快（1 天内） |
| Codex++ | 中低 | 中 | 慢（5+ 天） |

---

## 4. 共同关注的技术方向

### 4.1 模型兼容性处理（涉及：OpenClaw、Hermes Agent）

多项目面临新型号（GPT-5.4/5.5、DeepSeek V4、Kimi K2.6）的 API 字段差异问题：

| 问题类型 | OpenClaw | Hermes Agent |
|----------|----------|--------------|
| reasoning_content 处理 | ✅ 已修复（#89667、#89692） | ⚠️ 待处理 |
| thinking wrapper 冲突 | ✅ 已修复（#91046） | ⚠️ 待处理 |
| prompt cache 失效 | ❌ 未解决（#91018） | ⚠️ 待处理 |

**共同诉求**：建立统一的 ModelCompatSchema 标准，减少 provider-specific hack

### 4.2 平台兼容性（涉及：Hermes Agent、cc-haha、Codex++）

| 平台 | Hermes Agent | cc-haha | Codex++ |
|------|--------------|---------|---------|
| macOS ARM | ✅ 支持 | ✅ 支持 | ❌ DMG 打包缺陷 |
| macOS Intel | ❌ 无 universal binary | ⚠️ 待验证 | ❌ 无支持 |
| Windows 路径空格 | ❌ 安装失败 | ⚠️ 待验证 | ⚠️ 待验证 |

### 4.3 安全加固（涉及：OpenClaw、Hermes Agent）

Hermes Agent 今日安全类 PR 占比创近期新高（7 条），OpenClaw 也在推进配置 schema 验证：

| 攻击面 | Hermes Agent | OpenClaw |
|--------|--------------|----------|
| 命令注入 | ✅ 已修复（#40972、#40978） | ⚠️ 待评估 |
| 权限绕过 | ✅ 已修复（#40969、#40970） | ⚠️ 待评估 |
| 配置注入 | ✅ 已修复（#40978） | ✅ 已修复（#89667） |

### 4.4 国际化（涉及：cc-haha、Codex++）

| 项目 | 语言支持 | 进展 |
|------|----------|------|
| cc-haha | 5 种（EN/ZH/TW/JP/KR） | ✅ 已合并 |
| Codex++ | 英文本地化 | ⚠️ PR #734 待合并 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| **核心定位** | 通用 AI 网关/平台集成 | 安全 CLI/网关 | 本地代码助手 | API 中转/多账号管理 |
| **目标用户** | 开发者/企业 | 高级用户/自托管 | 个人开发者 | 多账号用户 |
| **交互形态** | 多渠道消息聚合 | TUI/CLI | 桌面应用 | 桌面应用 |
| **技术架构** | 微服务 + Plugin | 单体 + 安全沙箱 | 桌面 Electron | Tauri/Electron |
| **差异化能力** | 20+ provider 兼容 | 安全审计/权限控制 | VSCode 集成潜力 | 多实例/中转代理 |
| **主要痛点** | P1 Bug 积压 | 平台兼容性 | Electron 迁移 | macOS 稳定性 |

**关键差异**：
- OpenClaw 是**平台层**解决方案，cc-haha/Codex++ 是**应用层**解决方案
- Hermes Agent 与 OpenClaw 在网关功能上有重叠，但前者更侧重安全，后者更侧重多协议兼容
- cc-haha 与 Codex++ 均面向桌面用户，但前者是 AI 助手，后者是 API 管理工具

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

```
┌─────────────────────────────────────────────────────────────┐
│  第一梯队（企业级开发节奏）                                   │
│  OpenClaw / Hermes Agent                                     │
│  - 日均 500+ PR 操作                                         │
│  - 完善的代码审查流程                                         │
│  - 安全审计常态化                                             │
├─────────────────────────────────────────────────────────────┤
│  第二梯队（功能迭代期）                                       │
│  cc-haha / Codex++                                           │
│  - Issue 增长快但 PR 吞吐量有限                               │
│  - 社区反馈热烈但维护者响应存在延迟                            │
│  - 处于功能完善向稳定过渡阶段                                 │
└─────────────────────────────────────────────────────────────┘
```

### 6.2 成熟度评估

| 项目 | 代码质量 | 文档完善度 | 发布流程 | 安全响应 |
|------|----------|------------|----------|----------|
| OpenClaw | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐（beta 频繁） | ⭐⭐⭐⭐ |
| Hermes Agent | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐（版本节奏慢） | ⭐⭐⭐⭐⭐ |
| cc-haha | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐（迁移期） | ⭐⭐⭐ |
| Codex++ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ |

---

## 7. 值得关注的趋势信号

### 7.1 技术趋势

| 趋势 | 信号来源 | 潜在影响 |
|------|----------|----------|
| **ModelCompatSchema 标准化** | OpenClaw #89667、#89692 | 可能成为生态事实标准 |
| **安全网关能力下沉** | Hermes Agent 安全 PR 激增 | 自主智能体安全将成为基础能力 |
| **Electron 迁移潮** | cc-haha v0.4.0 | Tauri 生态向 Electron 回流 |
| **多实例/多会话管理** | Codex++ #719 | 用户对并发使用场景需求增长 |

### 7.2 市场信号

| 信号 | 解读 |
|------|------|
| **平台兼容性成为核心竞争力** | macOS/Windows 一致性需求爆发，影响用户留存 |
| **中转模式稳定性决定可用性** | Codex++ 502/503 问题反映第三方 API 兼容痛点 |
| **VSCode 集成期待强烈** | cc-haha #750 获高关注，IDE 深度集成是下一个增长点 |
| **成本敏感度提升** | OpenClaw #91018（$6/小时费用损失）警示 prompt cache 失效的财务影响 |

### 7.3 对 AI 智能体开发者的建议

1. **架构设计**：优先考虑 provider-agnostic 的模型抽象层，参考 OpenClaw 的 ModelCompatSchema 思路
2. **安全先行**：将命令注入防护、权限校验纳入设计初期，参考 Hermes Agent 的安全 PR 模式
3. **平台优先**：macOS ARM + Intel 双架构支持、路径空格处理应作为 MVP 标配
4. **监控完善**：内存压力日志（OpenClaw #91074）、成本追踪（prompt cache 命中率）应纳入可观测性体系
5. **社区运营**：Codex++ #406（9 天无响应）的教训表明，高热度 Issue 的响应速度直接影响社区信心

---

## 附录：关键数据汇总

| 指标 | OpenClaw | Hermes Agent | cc-haha | Codex++ |
|------|----------|--------------|---------|---------|
| 今日 Issues | 157 | 117 | 8 | 39 |
| 今日 PR 操作 | 500 | 500 | 1 | 6 |
| P1 Bug 数 | 8 | 2 | 0 | 1 |
| 安全类 PR | 2 | 7 | 0 | 0 |
| 国际化进展 | 中 | 低 | 高 | 中 |
| 下一版本重点 | Bug 修复 | 安全 + 平台兼容 | Electron 迁移 | macOS 修复 |

---

*本报告基于 2026-06-07 GitHub 公开数据生成，供技术决策者与开发者参考。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/NousResearch/hermes-agent">NousResearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期**: 2026-06-07  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Hermes Agent 项目今日保持极高活跃度，共处理 **117 条 Issues**（新开/活跃 102 条，关闭 15 条）和 **500 条 PR 更新**（待合并 360 条，已合并/关闭 140 条），整体开发节奏稳健。今日未发布新版本，但社区贡献持续旺盛——安全修复类 PR 占比显著提升，涉及配置持久化、命令注入防护、权限校验等多个维度。项目当前处于功能迭代与安全加固并行的阶段，建议关注即将到来的版本发布。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时共合并/关闭 **140 条 PR**，以下为值得关注的重点合并项：

| PR 编号 | 类型 | 描述 | 状态 |
|---------|------|------|------|
| [#40981](https://github.com/NousResearch/hermes-agent/pull/40981) | Bug Fix | 修复 0.15.x 升级至 0.16.0 时 `custom_providers` 配置静默丢失问题 | OPEN |
| [#40978](https://github.com/NousResearch/hermes-agent/pull/40978) | Security | 修复 `.env`/`config.yaml` 写入安全绕过漏洞（尾部参数或注释） | OPEN |
| [#40976](https://github.com/NousResearch/hermes-agent/pull/40976) | Bug Fix | 修复小上下文窗口下的无限上下文压缩循环 | OPEN |
| [#40975](https://github.com/NousResearch/hermes-agent/pull/40975) | Feature | 为内置 MemoryStore 添加用户级持久化内存隔离 | OPEN |
| [#40974](https://github.com/NousResearch/hermes-agent/pull/40974) | Bug Fix | 将 Discord handoff watcher 的阻塞 SQLite 操作移至线程池 | OPEN |
| [#40973](https://github.com/NousResearch/hermes-agent/pull/40973) | Feature | Desktop 端实现基于 Hermes 原生 session forks 的分支功能 | OPEN |
| [#40967](https://github.com/NousResearch/hermes-agent/pull/40967) | Security | 修复面向客户的网关中 Honcho 内存注入漏洞 | OPEN |
| [#40972](https://github.com/NousResearch/hermes-agent/pull/40972) | Security | 检测 shell 编码的危险命令绕过尝试 | OPEN |
| [#40970](https://github.com/NousResearch/hermes-agent/pull/40970) | Security | 修复 `tui_gateway shell.exec` 审批导入错误时的安全绕过 | OPEN |
| [#40969](https://github.com/NousResearch/hermes-agent/pull/40969) | Security | 在适配器层拒绝未授权 Telegram 用户 | OPEN |
| [#40971](https://github.com/NousResearch/hermes-agent/pull/40971) | Bug Fix | 收窄 DNS exfil 技能扫描模式以减少误报 | CLOSED |

**项目整体向前迈进的方面**：
- **安全加固**：今日安全类 PR 数量创近期新高，涵盖命令注入、权限校验、内存隔离等多个攻击面
- **稳定性提升**：修复了配置持久化、上下文压缩、数据库操作等核心路径的潜在问题
- **功能完善**：新增用户级内存隔离、外部插件路径支持、会话分支等实用功能

---

## 4. 社区热点

以下 Issues/PRs 今日讨论最为活跃（按评论数排序）：

### 热门 Issues

| 编号 | 标题 | 评论数 | 👍 | 关键诉求 |
|------|------|--------|-----|----------|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | **[Feature]: Deterministic Workflow Engine (Lobster-style Implementation)** | 8 | 8 | 引入确定性工作流引擎，降低关键任务 token 成本 |
| [#37505](https://github.com/NousResearch/hermes-agent/issues/37505) | **Hermes Desktop macOS DMG 仅支持 arm64，Intel Mac 无法运行** | 6 | 0 | 需提供 universal binary 或 x86_64 版本 |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | **Desktop 安装失败，提示"no git???"** | 5 | 0 | Windows 11 环境下的安装路径问题 |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | **web_tools.py 缺少插件发现初始化导致 Web 工具静默失败** | 4 | 0 | 修复 Web 搜索/提取/爬取的插件初始化时序问题 |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | **Feature: User Workspace & Knowledge Base** | 4 | 2 | 持久化文档存储、搜索和 RAG 集成 |
| [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) | **feat(delegation): agent profiles for delegate_task** | 4 | 14 | 支持自定义编排框架的代理配置文件 |
| [#26489](https://github.com/NousResearch/hermes-agent/issues/26489) | **Hermes 使用 LiteLLM proxy + Ollama 时挂起** | 4 | 1 | 修复自定义 provider + 404 探测后的聊天完成调用问题 |

**热点分析**：
- **平台兼容性**成为今日焦点，macOS（arm64/Intel）、Windows（路径空格）问题集中爆发
- **安全性讨论升温**：社区对命令注入、权限绕过的关注度显著提升
- **工作流自动化**需求强烈，Deterministic Workflow Engine 获得最多讨论和认可

---

## 5. Bug 与稳定性

今日共报告 **P1-P3 级 Bug 约 20+ 个**，按严重程度排列如下：

### P1 - 紧急（影响核心功能）

| 编号 | 描述 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#40831](https://github.com/NousResearch/hermes-agent/issues/40831) | macOS 26 上 launchd domain 硬编码为 `user/<uid>`，导致 Aqua 会话中网关加载失败 | OPEN | 无 |
| [#24433](https://github.com/NousResearch/hermes-agent/issues/24433) | 交互式聊天模式报错"No inference provider configured"，但 `-z` 模式正常 | OPEN | 无 |

### P2 - 高优先级

| 编号 | 描述 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#37505](https://github.com/NousResearch/hermes-agent/issues/37505) | macOS DMG 仅 arm64，Intel Mac 启动失败 | OPEN | 无 |
| [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) | Desktop 安装失败，提示"no git" | OPEN | 无 |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | Web 工具因插件初始化时序问题静默失败 | OPEN | 无 |
| [#26489](https://github.com/NousResearch/hermes-agent/issues/26489) | LiteLLM proxy + Ollama 配置下 Hermes 挂起 | OPEN | 无 |
| [#40820](https://github.com/NousResearch/hermes-agent/issues/40820) | macOS 安装脚本未正确引用含空格的路径 | OPEN | 无 |
| [#38412](https://github.com/NousResearch/hermes-agent/issues/38412) | Desktop 远程网关 WebSocket 连接被拒绝（4403） | OPEN | 无 |
| [#39281](https://github.com/NousResearch/hermes-agent/issues/39281) | Gemma4 + Ollama 后端输出截断问题 | OPEN | 无 |
| [#8125](https://github.com/NousResearch/hermes-agent/issues/8125) | launchd plist 包含会话特定 PATH，可能触发虚假过期刷新 | OPEN | 无 |
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) | Cron 脚本路径守卫错误拒绝默认 profile 脚本目录引用 | OPEN | 无 |

### P3 - 中优先级

| 编号 | 描述 | 状态 | 是否有 Fix PR |
|------|------|------|---------------|
| [#6718](https://github.com/NousResearch/hermes-agent/issues/6718) | 后台进程自动通知未送达 Agent | OPEN | 无 |
| [#38989](https://github.com/NousResearch/hermes-agent/issues/38989) | Desktop 侧边栏会话列表间歇性遗漏/隐藏会话 | OPEN | 无 |
| [#40101](https://github.com/NousResearch/hermes-agent/issues/40101) | mnemosyne-hermes 插件未被发现 | OPEN | 无 |
| [#38006](https://github.com/NousResearch/hermes-agent/issues/38006) | TUI 状态栏显示 `model_aliases` 而非实际 `context_length` | OPEN | 无 |
| [#40215](https://github.com/NousResearch/hermes-agent/issues/40215) | Desktop 远程网关配置时频繁报错 `ERR_INVALID_ARGUMENT` | OPEN | 无 |

**稳定性评估**：
- **平台兼容性**问题突出（macOS Intel/ARM、Windows 路径处理）
- **网关连接**问题（WebSocket、远程配置）影响用户体验
- 今日安全类 PR 修复了多个潜在攻击面，建议优先合并

---

## 6. 功能请求与路线图信号

以下功能请求获得较多关注，可能被纳入下一版本：

| 编号 | 功能描述 | 评论数 | 👍 | 可行性评估 |
|------|----------|--------|-----|------------|
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | **Deterministic Workflow Engine** - 确定性工作流引擎，降低关键任务 token 成本 | 8 | 8 | 高（社区需求明确，已有类似实现参考） |
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | **User Workspace & Knowledge Base** - 持久化文档存储、搜索和 RAG 集成 | 4 | 2 | 中（需权衡存储架构设计） |
| [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) | **Agent Profiles for delegate_task** - 自定义编排框架支持 | 4 | 14 | 高（已有 PR #9459） |
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | **Dreaming - 自动后台记忆整合** - 模拟生物睡眠周期的记忆巩固 | 3 | 0 | 中（创新性强，需验证实用性） |
| [#37661](https://github.com/NousResearch/hermes-agent/issues/37661) | **mem0-temporal-hygiene 插件** - Mem0 时间上下文和去重 | 3 | 0 | 中（插件形式，可独立演进） |
| [#30577](https://github.com/NousResearch/hermes-agent/issues/30577) | **Gateway /goal 状态的结构化元数据** | 2 | 0 | 高（API 扩展，破坏性小） |
| [#27777](https://github.com/NousResearch/hermes-agent/issues/27777) | **Goal 生命周期插件钩子** | 1 | 0 | 中（需扩展插件系统） |
| [#40917](https://github.com/NousResearch/hermes-agent/issues/40917) | **Board 级自动订阅看板事件通知** | 1 | 0 | 低（需求场景较窄） |

**路线图信号**：
- **安全性**和**稳定性**仍是核心关注点
- **多平台兼容**（macOS Intel/ARM、Windows）需求迫切
- **工作流自动化**和**记忆系统**是社区期待的重点方向

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点和使用场景：

### 痛点

1. **平台兼容性问题**
   - macOS Intel Mac 用户无法使用官方 DMG（#37505）
   - Windows 用户路径含空格导致安装失败（#40820）
   - Discord/Telegram 等平台适配器偶发性连接问题

2. **配置管理困惑**
   - 升级后 `custom_providers` 配置静默丢失（#40981 已修复）
   - 交互式模式与 `-z` 模式行为不一致（#24433）

3. **Web 工具不可靠**
   - 搜索、提取、爬取功能在全新安装后静默失败（#27683）
   - 插件发现机制时序问题影响核心功能

### 使用场景

- **多代理编排**：用户希望通过 `delegate_task` 构建复杂工作流（#9459）
- **长期目标追踪**：使用 `/goal` 功能进行持续性任务管理
- **跨平台桌面应用**：Windows/macOS 用户期待一致的桌面体验
- **Discord/Telegram 集成**：社区用户依赖消息平台与 Hermes 交互

### 满意/不满意的地方

- **满意**：自主推理能力、skill 自创建功能
- **不满意**：安装体验、跨平台一致性、配置迁移的健壮性

---

## 8. 待处理积压

以下 Issues 长期未响应或处于停滞状态，建议维护者关注：

| 编号 | 描述 | 创建时间 | 状态 | 优先级 | 备注 |
|------|------|----------|------|--------|------|
| [#531](https://github.com/NousResearch/hermes-agent/issues/531) | User Workspace & Knowledge Base | 2026-03-06 | OPEN | Feature | 3 个月未响应，社区期待度高 |
| [#5354](https://github.com/NousResearch/hermes-agent/issues/5354) | Deterministic Workflow Engine | 2026-04-05 | OPEN | Feature | 2 个月，讨论活跃但无进展 |
| [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) | Agent Profiles for delegate_task | 2026-04-14 | OPEN | Feature | 2 个月，14 👍，已有 PR 草案 |
| [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) | Dreaming - 自动后台记忆整合 | 2026-05-14 | OPEN | Feature | 创新功能，需评审 |
| [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) | Web 工具插件初始化问题 | 2026-05-18 | OPEN | P2 | 影响核心功能 |

**建议**：
- 对长期未响应的 Feature Issue 给出官方态度（考虑/拒绝/规划中）
- P2 级 Bug 建议在下一补丁版本中修复
- 平台兼容性问题（macOS/Windows）影响用户留存，建议优先处理

---

## 附录：关键链接

- **项目主页**: https://github.com/NousResearch/hermes-agent
- **今日热门 Issue**: https://github.com/NousResearch/hermes-agent/issues/5354
- **安全修复 PR**: https://github.com/NousResearch/hermes-agent/pull/40978

---

*本报告由 AI 自动生成，数据来源为 GitHub API。如有疑问，请联系项目维护者。*

</details>

<details>
<summary><strong>cc-haha</strong> — <a href="https://github.com/NanmiCoder/cc-haha">NanmiCoder/cc-haha</a></summary>

# cc-haha 项目动态日报

**报告日期**: 2026-06-07  
**项目**: NanmiCoder/cc-haha  
**数据来源**: GitHub Issues & Pull Requests

---

## 1. 今日速览

过去24小时内，cc-haha 项目保持较高活跃度，共产生 **8 条新 Issue** 和 **1 条已合并 PR**。项目暂无新版本发布，但社区讨论热度不减。Issue 涵盖功能增强、跨平台兼容性、UI/UX 优化等多个维度，其中桌面端 Electron 迁移讨论（#723）持续引发关注。整体来看，项目处于功能迭代与稳定性修复并行的健康状态。

---

## 2. 版本发布

**无新版本发布**

> 上一个大版本 v0.4.0 正在推进中，核心变更为桌面端从 Tauri 迁移至 Electron，以统一跨平台渲染层。

---

## 3. 项目进展

### 已合并 PR

| PR # | 标题 | 领域 | 状态 |
|------|------|------|------|
| [#717](https://github.com/NanmiCoder/cc-haha/pull/717) | feat(desktop): add Japanese, Korean, and Traditional Chinese UI locales | desktop | ✅ 已合并 |

**详情**: 贡献者 @TW199501 为桌面端新增日语（jp）、韩语（kr）和繁体中文（zh-TW）三种语言支持，用户现可在 Settings → General → Language 中切换 **English / 简体中文 / 繁體中文 / 日本語 / 한국어** 五种语言。此举显著提升了项目的国际化覆盖度，降低了非中文用户的使用门槛。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue # | 标题 | 评论数 | 类型 |
|---------|------|--------|------|
| [#723](https://github.com/NanmiCoder/cc-haha/issues/723) | v0.4.0：桌面端迁移到 Electron | 4 | 公告/讨论 |
| [#755](https://github.com/NanmiCoder/cc-haha/issues/755) | [BUG] 回答过程中干预操作情况 | 2 | Bug |
| [#754](https://github.com/NanmiCoder/cc-haha/issues/754) | [BUG] ssh 隧道访问h5无法删除会话 | 2 | Bug |
| [#750](https://github.com/NanmiCoder/cc-haha/issues/750) | 集成到VSCode的请求 | 2 | Enhancement |

**热点分析**:

- **#723 (Electron 迁移)**: 这是项目近期最重要的架构变更。用户反馈旧版 Tauri 方案在 macOS 上存在性能问题，Windows 行为与开发环境不一致。迁移至 Electron 后将统一使用内置 Chromium 渲染，但代价是安装包体积增大。社区对此反应积极，多位用户表示期待。
  
- **#750 (VSCode 集成)**: 用户 @706412584 提出将 cc-haha 集成到 VSCode 的诉求，对标 Cursor 的交互体验，并建议增加模型选择下拉框、拉取模型按钮等功能。这反映了用户对 IDE 深度集成的强烈需求。

---

## 5. Bug 与稳定性

### 今日报告的 Bug（按严重程度排列）

| Issue # | 标题 | 评论数 | 状态 |
|---------|------|--------|------|
| [#755](https://github.com/NanmiCoder/cc-haha/issues/755) | 回答过程中干预操作情况 | 2 | 🆕 新报告 |
| [#754](https://github.com/NanmiCoder/cc-haha/issues/754) | ssh 隧道访问h5无法删除会话 | 2 | 🆕 新报告 |
| [#756](https://github.com/NanmiCoder/cc-haha/issues/756) | 小米mimo-v2.5-pro大模型无法使用1m上下文 | 1 | 🆕 新报告 |
| [#752](https://github.com/NanmiCoder/cc-haha/issues/752) | 按阶段折叠成一行摘要 | 1 | 🆕 新报告 |

**Bug 详情**:

1. **#755 - 回答过程中干预操作异常**: 用户 @fjqingyou 报告在 AI 回答过程中进行干预时出现异常行为，具体表现待进一步确认。

2. **#754 - SSH 隧道场景下会话删除失败**: 同一用户报告通过 SSH 隧道访问 H5 版本时，无法正常删除会话，可能涉及网络层兼容性问题。

3. **#756 - 特定模型上下文长度限制**: 用户 @XianSamx 反馈小米 mimo-v2.5-pro 模型无法使用 1m 上下文，但在 Claude Code CLI 中可正常使用，疑似 API 兼容性问题。

4. **#752 - 摘要折叠功能异常**: 用户 @zhbdesign 报告按阶段折叠功能未按预期工作。

> ⚠️ **注意**: 以上 Bug 均无关联 Fix PR，建议维护者优先处理影响核心功能的 #755 和 #754。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

| Issue # | 标题 | 类型 | 可实现性 |
|---------|------|------|----------|
| [#750](https://github.com/NanmiCoder/cc-haha/issues/750) | VSCode 集成与模型管理增强 | Enhancement | ⭐⭐⭐ 高需求 |
| [#751](https://github.com/NanmiCoder/cc-haha/issues/751) | Writer/Editor 工具字符进度显示 | Enhancement | ⭐⭐ 中需求 |
| [#753](https://github.com/NanmiCoder/cc-haha/issues/753) | 服务商列表排序功能 | Enhancement | ⭐⭐ 中需求 |

**功能分析**:

- **#750 (VSCode 集成)**: 用户建议将 cc-haha 深度集成至 VSCode，并增加模型选择下拉框、拉取模型按钮等功能。此需求与当前 AI Coding Assistant 趋势高度契合，若实现将大幅提升开发者工作流效率。

- **#751 (字符进度)**: 用户 @zhbdesign 建议为 Writer、Editor 等工具添加字符计数进度显示，提升长文本处理时的可操作性。

- **#753 (服务商排序)**: 用户 @fjqingyou 建议服务商列表支持自动排序和手动自定义排序，便于管理多提供商和模型。

---

## 7. 用户反馈摘要

### 真实用户痛点

| 场景 | 反馈来源 | 核心诉求 |
|------|----------|----------|
| 跨平台一致性 | #723 | macOS/Windows 行为不一致，希望统一渲染层 |
| IDE 集成 | #750 | 希望在 VSCode 中直接使用，而非切换应用 |
| 网络兼容性 | #754 | SSH 隧道场景下功能受限 |
| 模型兼容性 | #756 | 特定模型上下文长度受限 |
| 多服务商管理 | #753 | 需要更灵活的服务商/模型排序能力 |

### 用户满意度信号

- ✅ **国际化进展**: PR #717 合并后，项目支持 5 种语言，国际化程度显著提升
- ✅ **Electron 迁移**: 社区对统一渲染层的方案表示认可
- ⚠️ **稳定性关注**: 多起 Bug 报告集中在交互和网络场景，需加强测试覆盖

---

## 8. 待处理积压

### 长期未响应的 Issue（>3 天无互动）

| Issue # | 标题 | 创建时间 | 当前状态 |
|---------|------|----------|----------|
| [#723](https://github.com/NanmiCoder/cc-haha/issues/723) | v0.4.0：桌面端迁移到 Electron | 2026-06-03 | 🟡 讨论中（4条评论） |

**建议**: Issue #723 作为重大版本公告，建议维护者定期更新进度，保持社区透明度。

---

## 总结

**2026-06-07 项目健康度评估**: 🟢 良好

- **活跃度**: 高（8 新 Issue + 1 PR 合并）
- **版本状态**: 无新版本，v0.4.0 迁移进行中
- **Bug 压力**: 中等（4 个新 Bug，无 Fix PR）
- **社区参与**: 积极（多语言支持 PR 已合并，功能讨论热烈）

**建议关注**:
1. 优先处理 #755、#754 等影响核心功能的 Bug
2. 跟进 #723 Electron 迁移进度并发布正式公告
3. 评估 #750 VSCode 集成需求的优先级

---

*报告生成时间: 2026-06-07*  
*数据来源: GitHub NanmiCoder/cc-haha*

</details>

<details>
<summary><strong>Codex++</strong> — <a href="https://github.com/BigPizzaV3/CodexPlusPlus">BigPizzaV3/CodexPlusPlus</a></summary>

# Codex++ 项目动态日报

**报告日期**: 2026-06-07  
**项目**: BigPizzaV3/CodexPlusPlus  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，Codex++ 项目保持高度活跃，共产生 **39 条 Issue 更新**（新开/活跃 35 条，关闭 4 条）和 **6 条 PR 更新**（待合并 5 条，已合并 1 条）。项目整体呈现**高 Issue 量、高交互**的态势，社区反馈热烈但也暴露出多个平台兼容性问题——macOS DMG 打包缺陷、启动/重启失败、供应商配置冲突等问题集中爆发。维护者已快速响应，提交了针对 macOS DMG 修复的 PR #741，整体项目健康度评级为 **⚠️ 需关注**。

---

## 2. 版本发布

**无新版本发布。** 距离上次发布已有一段时间，当前社区反馈的问题主要集中在 v1.2.3 版本，建议维护者评估是否需要发布补丁版本。

---

## 3. 项目进展

### 已合并 PR

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#723](https://github.com/BigPizzaV3/CodexPlusPlus/pull/723) | 修复 Windows 单实例端口异常占用导致无法启动 | 新增基于锁文件的兜底守护机制，解决端口被异常占用但实际不可连接时程序误判为已有实例运行的问题。补充了相关测试用例。 |

### 待合并 PR（5 条）

| PR 编号 | 标题 | 说明 |
|---------|------|------|
| [#741](https://github.com/BigPizzaV3/CodexPlusPlus/pull/741) | fix(macos): 修正 DMG 打包 bundle 结构 | 修复 v1.2.3 macOS DMG 拖入 Applications 后启动立即退出的问题，补全 Info.plist 缺失字段、添加 PkgInfo 文件、修复 codesign 配置。 |
| [#734](https://github.com/BigPizzaV3/CodexPlusPlus/pull/734) | Improved code modularity by splitting the large & Added English localization | 重构 App.tsx 为模块化结构，提取 screen/shared/utility 模块，并添加英文本地化支持。 |
| [#733](https://github.com/BigPizzaV3/CodexPlusPlus/pull/733) | Fix provider sync for multiple session_meta records | 修复 Provider Sync 在同步历史会话 provider 时只修改 rollout 文件中第一条 session_meta 的问题。 |
| [#724](https://github.com/BigPizzaV3/CodexPlusPlus/pull/724) | 限制 Fast 服务模式仅用于支持模型 | 将 Fast 服务模式限制为 gpt-5.4/gpt-5.5 白名单模型，不支持的模型自动降级为 Standard。 |
| [#719](https://github.com/BigPizzaV3/CodexPlusPlus/pull/719) | feat: support launching multiple Codex++ instances | 支持从已注入的 Codex++ 会话中打开多个 Codex++ 管理窗口。 |

**项目推进评估**: 维护者正在积极推进多个功能改进和 bug 修复，代码模块化和国际化是长期技术债务的清理，Fast 服务模式限制和多人实例支持是功能层面的优化。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue 编号 | 标题 | 评论数 | 热度分析 |
|------------|------|--------|----------|
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | [Bug]: MAC M1 今天更新到 Codex++ 1.1.8 后正常显示 deepseek 模型但对话 502 Bad Gateway | **20** | 最热门问题，涉及中转模式下 API 调用失败，用户反馈强烈。 |
| [#228](https://github.com/BigPizzaV3/CodexPlusPlus/issues/228) | 中转注入模式下建议支持本地模型列表/禁用模型探测 | **9** | 功能建议，涉及中转代理兼容性和性能优化。 |
| [#668](https://github.com/BigPizzaV3/CodexPlusPlus/issues/668) | [Bug]: mac M芯片，系统26，程序一开始可以打开，过一会儿就无法打开 | **7** | macOS 稳定性问题，影响用户日常使用。 |
| [#695](https://github.com/BigPizzaV3/CodexPlusPlus/issues/695) | [Bug]: 工作空间依赖项显示未安装，并且无法重新安装 | **5** | 配置管理问题，影响 MCP/skills/plugins 功能。 |

### 热点分析

**核心诉求**：
1. **中转模式稳定性**: 多个 Issue 反映中转模式下出现 502/503 错误，根源在于本地代理与第三方中转的协议兼容问题（#406、#709、#738）。
2. **macOS 平台兼容**: DMG 打包缺陷（#740）和 M 芯片稳定性问题（#668、#712）集中爆发，需优先处理。
3. **供应商配置冲突**: 用户反馈多个工具（Codex++、CC Switch、Codex App）抢占配置文件，导致 API Key 和配置丢失（#727、#742）。

---

## 5. Bug 与稳定性

### 高严重度 Bug（影响核心功能）

| Issue 编号 | 标题 | 状态 | 是否有 Fix PR |
|------------|------|------|---------------|
| [#740](https://github.com/BigPizzaV3/CodexPlusPlus/issues/740) | v1.2.3 macOS DMG ship broken bundle — Tauri app missing Frameworks/ | **OPEN** | ✅ [#741](https://github.com/BigPizzaV3/CodexPlusPlus/pull/741) 已提交 |
| [#668](https://github.com/BigPizzaV3/CodexPlusPlus/issues/668) | mac M芯片程序无法打开 | **OPEN** | ❌ 无 |
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | MAC M1 502 Bad Gateway | **OPEN** | ❌ 无 |
| [#742](https://github.com/BigPizzaV3/CodexPlusPlus/issues/742) | 切换 gpt 账号后 API Key 消失 | **OPEN** | ❌ 无 |

### 中等严重度 Bug

| Issue 编号 | 标题 | 状态 | 备注 |
|------------|------|------|------|
| [#715](https://github.com/BigPizzaV3/CodexPlusPlus/issues/715) | V1.2.2 及 V1.2.3 报错 400 及 404 | **CLOSED** | 已关闭但未说明解决方案 |
| [#664](https://github.com/BigPizzaV3/CodexPlusPlus/issues/664) | 503 Service Unavailable | **CLOSED** | 已关闭 |
| [#676](https://github.com/BigPizzaV3/CodexPlusPlus/issues/676) | 接入硅基流动 api 无法调用工具 | **OPEN** | 第三方 API 兼容性问题 |
| [#726](https://github.com/BigPizzaV3/CodexPlusPlus/issues/726) | 会话管理修复始终显示修复 0 | **OPEN** | 功能缺陷 |

### 稳定性风险提示

⚠️ **macOS 用户受影响严重**: 至少 5 个 Issue 涉及 macOS 无法启动/重启问题（#351、#668、#712、#721、#740），建议优先合并 #741 并发布补丁。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能需求

| Issue 编号 | 标题 | 需求分析 | 纳入可能性 |
|------------|------|----------|------------|
| [#727](https://github.com/BigPizzaV3/CodexPlusPlus/issues/727) | 添加一个完全停用 Codex++ 提供商管理接管配置文件的选项开关 | 解决多工具配置冲突问题 | ⭐⭐⭐ 高 |
| [#711](https://github.com/BigPizzaV3/CodexPlusPlus/issues/711) | 插件太少了，只有几个插件 | 插件生态扩展需求 | ⭐⭐ 中 |
| [#719](https://github.com/BigPizzaV3/CodexPlusPlus/pull/719) | 支持启动多个 Codex++ 实例 | 功能增强 | ⭐⭐⭐ 高（PR 已提交） |
| [#734](https://github.com/BigPizzaV3/CodexPlusPlus/pull/734) | 英文本地化 | 国际化支持 | ⭐⭐⭐ 高（PR 已提交） |

### 路线图信号

从 PR #724（限制 Fast 服务模式）和 #719（多实例支持）来看，下一版本可能聚焦于：
- **模型服务层级精细化控制**
- **多会话/多实例管理**
- **代码库现代化（模块化 + 国际化）**

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **平台兼容焦虑**: macOS 用户反馈"根本没法用"、"重启后无法启动"，严重影响用户信心。
   > *"MacOS根本没法用：出错，启动不了，重启不了，关闭后没法再启动"* — [#712](https://github.com/BigPizzaV3/CodexPlusPlus/issues/712)

2. **中转模式不稳定**: 多个用户反映中转模式下出现 502/503 错误，根源在于协议兼容。
   > *"Codex 必须通过 codex-plus-plus（127.0.0.1:57321）中转 WebView2 用系统代理时，即便设了绕过列表，也可能把 localhost 请求发给代理"* — [#709](https://github.com/BigPizzaV3/CodexPlusPlus/issues/709)

3. **配置冲突困扰**: 多工具抢占配置文件导致 API Key 丢失，用户被迫反复重新配置。
   > *"在其他平台切换过 gpt 账号后，codex++ 供应商配置里配置的 API Key 就消失了"* — [#742](https://github.com/BigPizzaV3/CodexPlusPlus/issues/742)

4. **第三方 API 兼容性问题**: 硅基流动等第三方 API 无法正常调用工具。
   > *"配置硅基流动 api 后，硅基流动的模型无法使用工具"* — [#676](https://github.com/BigPizzaV3/CodexPlusPlus/issues/676)

### 用户满意的地方

- 部分用户成功使用中转模式配置了自定义模型（#607）
- 会话管理功能可以正常读取本地数据库（#726）

---

## 8. 待处理积压

### 长期未响应的重要 Issue（超过 5 天无维护者回复）

| Issue 编号 | 标题 | 创建时间 | 评论数 | 建议 |
|------------|------|----------|--------|------|
| [#406](https://github.com/BigPizzaV3/CodexPlusPlus/issues/406) | MAC M1 502 Bad Gateway | 2026-05-29 | 20 | 高优先级，评论最多但未解决 |
| [#228](https://github.com/BigPizzaV3/CodexPlusPlus/issues/228) | 中转注入模式建议 | 2026-05-21 | 9 | 功能建议，需评估可行性 |
| [#489](https://github.com/BigPizzaV3/CodexPlusPlus/issues/489) | MCP 工具未注入 | 2026-06-01 | 4 | 核心功能缺陷 |

### 建议维护者关注

1. **#406** 已开放 9 天，评论数最多，需给出明确的排查进展或临时解决方案。
2. **#727** 提出的配置隔离需求涉及架构设计，建议评估是否纳入路线图。
3. **#676** 第三方 API 兼容性问题可能影响更多用户，建议提供兼容性文档或排查指南。

---

## 总结

| 维度 | 状态 | 备注 |
|------|------|------|
| 活跃度 | 🟢 高 | 39 条 Issue + 6 条 PR，社区参与积极 |
| 稳定性 | 🟡 中 | macOS 问题集中爆发，需紧急修复 |
| 响应速度 | 🟢 快 | 已提交 #741 修复 macOS DMG 问题 |
| 功能推进 | 🟢 良好 | 多项功能 PR 在审，代码质量提升中 |

**建议行动项**:
1. 优先合并 #741 并发布 macOS 补丁版本
2. 回应 #406 用户，提供中转模式 502 问题的排查步骤
3. 评估 #727 配置隔离需求的实现方案

---

*报告生成时间: 2026-06-07 | 数据来源: GitHub BigPizzaV3/CodexPlusPlus*

</details>

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*