# AI 开源趋势日报 2026-08-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-14 01:54 UTC

---

# AI 开源趋势日报 · 2026-08-14

---

## 第一步：AI 相关性筛选

**Trending 榜单筛选结果**（17 → 14 个 AI 相关项目）

| 仓库 | 是否保留 | 理由 |
|---|---|---|
| cathrynlavery/diagram-design | ✅ | Claude Code 配套的图表生成工具 |
| semantica-agi/semantica | ✅ | AI 系统的图原生基础设施 |
| anthropics/skills | ✅ | Agent Skills 官方仓库 |
| cactus-compute/needle | ✅ | 端侧基础模型 |
| altic-dev/FluidVoice | ✅ | 本地 AI 语音听写 |
| unslothai/unsloth | ✅ | LLM/扩散模型本地训练 |
| macro-inc/macro | ✅ | AI 协作工作空间 |
| megadose/holehe | ❌ | OSINT 邮箱查询，与 AI 无关 |
| smicallef/spiderfoot | ❌ | OSINT 工具，与 AI 无关 |
| NVIDIA-NeMo/Switchyard | ✅ | LLM 流量路由网关 |
| holaboss-ai/holaOS | ✅ | AI Agent 工作空间 |
| kepano/obsidian-skills | ✅ | Obsidian Agent Skills |
| 3b1b/manim | ✅ | 数学动画引擎（AI 视频生成常用工具） |
| msitarzewski/agency-agents | ✅ | AI Agent 集合 |
| Lightricks/LTX-2 | ✅ | 音视频生成模型 |
| lightningpixel/modly | ✅ | 本地 AI 3D 模型生成 |
| infiniflow/ragflow | ✅ | RAG 引擎 |

**主题搜索结果**：79 个仓库均带 AI/ML topic，全部保留。

---

## 第二步：分类结果

---

## 📊 AI 开源趋势日报 · 2026-08-14

### 一、今日速览

今日 GitHub Trending 几乎被 **AI Agent 生态** 全面占领——`anthropics/skills`、`agency-agents`、`obsidian-skills`、`holaOS` 等多个 Agent Skills/工作流项目同时登榜，反映出"Agent 工具化、技能模块化"已成为社区共识方向。**端侧 AI** 持续升温，`cactus-compute/needle`（14MB 端侧基础模型）与 `altic-dev/FluidVoice`（本地语音听写）双双进入热榜，印证"小模型 + 本地推理"的产品化拐点正在到来。基础设施层面，**LLM 路由层**（`NVIDIA-NeMo/Switchyard`）和**本地训练工具**（`unslothai/unsloth`）持续受到关注，开发者对多模型调度与私有化部署的需求显著增强。

---

### 二、各维度热门项目

#### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐164,079 | 主流模型定义框架，覆盖文本/视觉/音频/多模态，今日仍是 LLM 生态基石 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐178,487 | 本地运行 Kimi-K2.6、GLM-5.2、DeepSeek、Qwen 等模型的标杆工具 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐144,192 | Agent 工程平台的事实标准 |
| [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) | ⭐0 (+408 today) | **今日新登榜**，LLM 应用的模型路由网关，兼容 OpenAI/Anthropic API |
| [unslothai/unsloth](https://github.com/unslothai/unsloth) | ⭐0 (+328 today) | **今日新登榜**，本地 UI 运行与训练 Qwen3.8、Kimi K3、MiniMax-H3 等模型 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐166,997 | 为 AI Agent 提供网页搜索、爬取与交互的 Context API |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | ⭐8,261 | Rust 生态的模块化 LLM 应用框架 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | ⭐12,865 | JVM 生态的 LangChain 实现，企业 Java 团队首选 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | ⭐0 (+312 today) | **今日新登榜**，Anthropic 官方 Agent Skills 仓库，定义 Agent 能力扩展标准 |
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | ⭐0 (+778 today) | **今日新登榜**，一整套"AI 代理团队"，每个 Agent 有专属人格与交付物 |
| [holaboss-ai/holaOS](https://github.com/holaboss-ai/holaOS) | ⭐0 (+241 today) | **今日新登榜**，开源 AI Agent 工作空间，集成 100+ MCP 工具 |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | ⭐0 (+292 today) | **今日新登榜**，让 Agent 掌握 Obsidian CLI 与 Markdown/Bases 等开放格式 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐74,149 | 从零构建 Claude Code 式 Agent Harness 的教学项目 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | ⭐46,954 | 轻量级自托管个人 AI Agent 框架，支持 MCP 与多智能体 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | ⭐36,747 | Agent 前端栈与生成式 UI 协议（AG-UI） |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | ⭐34,487 | DeepSeek 原生终端 AI 编码 Agent，专注 prefix-cache 稳定性 |

#### 📦 AI 应用（垂直场景产品）

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐152,380 | 一站式 Agentic 工作流与 RAG 流水线平台 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐148,722 | 用户友好的 AI 对话界面，支持 Ollama 与 OpenAI API |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | ⭐0 (+4475 today) | **今日榜首**，Claude Code 的 29 种编辑级图表模板，纯 HTML+SVG |
| [macro-inc/macro](https://github.com/macro-inc/macro) | ⭐0 (+1239 today) | **今日新登榜**，集成邮件/聊天/文档/CRM 的 AI 协作工作空间 |
| [altic-dev/FluidVoice](https://github.com/altic-dev/FluidVoice) | ⭐0 (+76 today) | **今日新登榜**，macOS 本地 AI 语音听写，Wispr Flow 的开源替代 |
| [lightningpixel/modly](https://github.com/lightningpixel/modly) | ⭐0 (+118 today) | **今日新登榜**，本地 GPU 运行的图像转 3D 模型桌面应用 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | ⭐50,430 | AI 生产力工作室，集成 300+ 助手与多模型 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐46,538 | AI 一键生成原生 PowerPoint（含动画、图表、音频旁白） |

#### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [cactus-compute/needle](https://github.com/cactus-compute/needle) | ⭐0 (+769 today) | **今日新登榜**，14MB 基础模型，专为手机、可穿戴、智能家居、机器人设计 |
| [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) | ⭐0 (+205 today) | **今日新登榜**，LTX-2 音视频生成模型的官方推理与 LoRA 训练包 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐102,614 | 从零用 PyTorch 实现 ChatGPT 式 LLM 的经典教程 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | ⭐7,299 | 支持 100+ 数据集的 LLM 评测平台 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | ⭐4,483 | 在 Apple Silicon 上从零构建迷你 vLLM + Qwen 的系统教程 |
| [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) | ⭐76 | 纯 Rust + Candle 从零构建 Decoder-only LLM（25M~1.3B） |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | ⭐316 | 基于 X-Bit 量化的端侧 LLM 推理引擎 |
| [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) | ⭐97 | 大语言扩散模型（LLDM）论文精选列表 |

#### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐88,045 (+465 today) | **今日双榜**，领先的开源 RAG 引擎，融合 Agent 能力 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | ⭐45,629 | 云原生向量数据库，RAG 场景的事实标准 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | ⭐33,967 | 高性能大规模向量搜索引擎 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐63,211 | AI Agent 的通用记忆层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,623 | 领先的文档 Agent 与 OCR 平台 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | ⭐35,173 | 无向量化、基于推理的 RAG 文档索引 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | ⭐30,004 | 为 Agent 提供持久化长期记忆的知识图谱引擎 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐66,237 | 在送入 LLM 前压缩工具输出与 RAG chunk，省 20%~95% token |

---

### 三、趋势信号分析

**Agent Skills 标准化浪潮成型**。今日 Trending 中 `anthropics/skills`、`agency-agents`、`obsidian-skills`、`holaOS` 四款 Agent 相关项目同时登榜，且 `anthropics/skills` 作为 Anthropic 官方仓库首次公开，标志着 Agent 能力扩展从"Prompt 工程"走向"Skills 模块化"——类似 MCP 之于工具调用，Skills 正在成为 Agent 能力的标准封装单元。`agency-agents` 单日 +778 stars 反映出社区对"开箱即用 Agent 团队"的强烈需求。

**端侧小模型迎来产品化拐点**。`cactus-compute/needle`（14MB 基础模型，单日 +769）与 `altic-dev/FluidVoice`（本地语音听写）、`lightningpixel/modly`（本地 3D 生成）共同指向同一趋势：随着量化与蒸馏技术成熟，开发者不再满足于"调用云端 API"，而是追求**完全本地、可离线、低延迟**的 AI 体验。这与近期 Apple Intelligence、Phi 系列小模型、MLX 生态的演进形成共振。

**LLM 基础设施层持续细化**。`NVIDIA-NeMo/Switchyard`（+408）作为模型路由网关出现，说明多模型调度、成本/性能权衡已从"加分项"变为生产刚需；`unslothai/unsloth`（+328）支持 Qwen3.8、Kimi K3、MiniMax-H3 等最新模型，反映开源模型迭代速度加快，私有化微调需求旺盛。

---

### 四、社区关注热点

- 🔥 **[anthropics/skills](https://github.com/anthropics/skills)** — Anthropic 官方 Agent Skills 仓库，是理解下一代 Agent 架构（Skills + MCP + Memory）的第一手资料，所有 Agent 开发者必看。
- 🔥 **[cactus-compute/needle](https://github.com/cactus-compute/needle)** — 14MB 端侧基础模型，重新定义"小模型"边界，适合研究端侧推理与移动端 AI 部署的工程师。
- 🔥 **[NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard)** — LLM 路由网关，多模型生产化部署的关键基础设施，值得架构师关注。
- 🔥 **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** — 单日 +4475 stars 登顶 Trending，反映 Claude Code 生态对高质量原生图表输出的强烈需求。
- 🔥 **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — 同时出现在 Trending 与 RAG 主题榜，是企业级 RAG 落地的首选开源方案。

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*