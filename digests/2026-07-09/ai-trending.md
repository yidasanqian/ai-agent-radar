# AI 开源趋势日报 2026-07-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-09 03:17 UTC

---

# 🤖 AI 开源趋势日报

**日期：2026-07-09**

---

## 第一步：AI 相关性过滤

从 Trending 榜单 15 个仓库中，排除非 AI 项目 **4 个**（prisma、argo-cd、PhotoGIMP、autoremesher），保留 **11 个** AI 相关项目。主题搜索 80 个仓库已按 topic 标签预筛选，全部保留。

---

## 第二步：分类整理

| 维度 | Trending 入选数 | Topic Search 代表项目数 |
|---|---|---|
| 🔧 AI 基础工具 | 4 | 12 |
| 🤖 AI 智能体/工作流 | 4 | 14 |
| 📦 AI 应用 | 3 | 8 |
| 🧠 大模型/训练 | 0 | 10 |
| 🔍 RAG/知识库 | 2 | 14 |

---

## 第三步：报告正文

### 1. 今日速览

今日 GitHub AI 生态呈现三大核心动向：**AI Agent 开发框架持续爆发**，addyosmani/agent-skills 单日斩获 1297⭐，obra/superpowers 获 1116⭐，社区对"可投产的 Agent 工程技能"需求强烈；**垂直场景 AI 工具快速崛起**，iOfficeAI/OfficeCLI 以 1717⭐登顶今日榜首，将 Office 文档操作带入 Agent 时代，ruvnet/RuView 用 WiFi 信号实现无摄像头感知；**系统提示词泄露与逆向工程成为新热点**，asgeirtj/system_prompts_leaks 收录 1200+⭐，反映出开发者对主流模型行为调优的强烈关注。整体来看，AI 开发生态正从"模型能力"向"工程落地"深度迁移。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---|---|
| **[ollama/ollama](https://github.com/ollama/ollama)** | ⭐175,762 | 本地大模型运行引擎，支持 Kimi-K2.6、GLM-5.1、MiniMax 等数十种模型，门槛最低的本地 LLM 部署方案 |
| **[vllm-project/vllm](https://github.com/vllm-project/vllm)** | ⭐85,746 | 高吞吐、低显存占用的 LLM 推理与服务引擎，大规模部署首选 |
| **[huggingface/transformers](https://github.com/huggingface/transformers)** | ⭐162,394 | 覆盖文本/视觉/音频/多模态的 SOTA 模型定义框架，AI 开发的通用底座 |
| **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** | ⭐141,331 | Agent 工程平台，工具调用、记忆链、提示词管理的工业标准 |
| **[alibaba/zvec](https://github.com/alibaba/alibaba/zvec)** | ⭐14,458 | 轻量级进程内向量数据库，C++ 实现，延迟极低，适合嵌入式 AI 场景 |
| **[0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig)** | ⭐7,865 | Rust 语言构建模块化可扩展 LLM 应用的框架，工程语言进入 AI 工具链 |

#### 🤖 AI 智能体/工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** | ⭐1,717 today | 首个面向 AI Agent 的 Office 套件 CLI，支持 Word/Excel/PowerPoint 读写自动化，无需安装 Office |
| **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** | ⭐1,297 today | 为 AI 编码 Agent 提供生产级工程技能（代码审查、安全检测、部署流程），Google 工程师出品 |
| **[obra/superpowers](https://github.com/obra/superpowers)** | ⭐1,116 today | Agentic 技能框架与软件开发方法论，降低 Agent 工程化门槛 |
| **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** | ⭐1,218 today | 收录 Claude 5、GPT 5.5、Gemini 3.5 等主流模型的系统提示词，持续更新，是调优 Agent 行为的宝贵资源 |
| **[langgenius/dify](https://github.com/langgenius/dify)** | ⭐148,238 | 生产级 Agentic 工作流开发平台，可视化编排，零基础搭建 AI 应用 |
| **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** | ⭐80,072 | AI 驱动的软件开发 Agent，支持自主代码修改与任务执行 |
| **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** | ⭐35,855 | 前端 Agent 与生成式 UI 的 React 技术栈，AG-UI 协议发起方 |
| **[nanobot](https://github.com/HKUDS/nanobot)** | ⭐45,152 | 轻量级开源 AI Agent，支持工具调用、对话和工作流，单行安装 |

#### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---|---|
| **[ruvnet/RuView](https://github.com/ruvnet/RuView)** | ⭐799 today | 将 commodity WiFi 信号转化为实时空间感知与生命体征监测，无需摄像头，隐私友好 |
| **[bradautomates/claude-video](https://github.com/bradautomates/claude-video)** | ⭐951 today | 让 Claude 观看任意视频——下载、抽帧、转录后交由 Claude 分析，多模态落地实践 |
| **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** | ⭐352 today | AI Agent 技能：聚合 Reddit/X/YouTube/HN/Polymarket 等平台数据，生成主题研究摘要 |
| **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** | ⭐147,918 | 规模化网页搜索与抓取 API，为 AI Agent 提供实时网络数据输入 |
| **[browser-use/browser-use](https://github.com/browser-use/browser-use)** | ⭐103,740 | 让 AI Agent 操控任意网站，在线任务自动化的事实标准 |
| **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** | ⭐37,803 | AI 生成可编辑 PowerPoint，支持原生形状、动画、图表和语音旁白 |
| **[TradingAgents](https://github.com/TauricResearch/TradingAgents)** | ⭐91,899 | 多 Agent LLM 金融交易框架，AI 量化交易的代表性开源方案 |

#### 🧠 大模型/训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** | ⭐196,121 | 面向所有人的开源机器学习框架，生态最成熟 |
| **[pytorch/pytorch](https://github.com/pytorch/pytorch)** | ⭐101,604 | 动态图神经网络与 GPU 加速，学术与工业界深度学习首选 |
| **[ScrapeGraphAI/Scrapegraph-ai](https://github.com/ScrapeGraphAI/Scrapegraph-ai)** | ⭐28,186 | 基于 AI 的 Python 爬虫框架，大模型驱动的内容提取 |
| **[open-compass/opencompass](https://github.com/open-compass/opencompass)** | ⭐7,174 | LLM 评测平台，覆盖 100+ 数据集和 Llama3/GPT-4/Claude 等主流模型 |
| **[Picovoice/picollm](https://github.com/Picovoice/picollm)** | ⭐315 | 设备端 LLM 推理 SDK，X-Bit 量化技术，适合嵌入式 AI 场景 |

#### 🔍 RAG/知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| **[milvus-io/milvus](https://github.com/milvus-io/milvus)** | ⭐45,142 | 云原生高性能向量数据库，支持大规模 ANN 检索，企业级 RAG 首选 |
| **[meilisearch/meilisearch](https://github.com/meilisearch/meilisearch)** | ⭐58,464 | 闪电般快速的搜索引擎，支持 AI 混合搜索，Rust 实现 |
| **[qdrant/qdrant](https://github.com/qdrant/qdrant)** | ⭐33,062 | 高性能大规模向量数据库与搜索引擎，Cloud 版同步提供 |
| **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** | ⭐116,881 | 100+ 可运行的 AI Agent 与 RAG 应用合集，覆盖多种场景 |
| **[mem0ai/mem0](https://github.com/mem0ai/mem0)** | ⭐60,429 | AI Agent 的通用记忆层，跨会话持久化上下文 |
| **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** | ⭐84,631 | RAG 与 Agent 能力融合的检索引擎，为 LLM 提供优质上下文 |
| **[run-llama/llama_index](https://github.com/run-llama/llama_index)** | ⭐50,741 | 文档 Agent 与 OCR 平台，RAG 场景的经典工具链 |
| **[lancedb/lancedb](https://github.com/lancedb/lancedb)** | ⭐10,831 | 面向多模态 AI 的嵌入式检索库，开发友好，支持本地部署 |

---

### 3. 趋势信号分析

今日 Trending 榜单释放了三个强烈信号：

**第一，AI Agent 工程化工具进入爆发期。** 排名前五的项目中四个与 Agent 直接相关——iOfficeAI/OfficeCLI（1717⭐）、agent-skills（1297⭐）、system_prompts_leaks（1218⭐）、superpowers（1116⭐）。这表明社区已从"探索 Agent 能做什么"转向"解决 Agent 如何工程化落地"，对可复用技能、安全边界、工具调用的标准化需求急剧增长。

**第二，垂直场景 AI 工具正在填补空白。** RuView（WiFi 感知）、OfficeCLI（办公自动化）、DesktopCommanderMCP（终端控制）、CubeSandbox（沙箱隔离）代表了一个新兴方向：不是通用大模型，而是针对特定场景的 AI 原生工具。这类工具往往体量小、依赖少、集成快，今日集中出现说明开发者正在将 AI 能力嵌入现有工作流的每一个缝隙。

**第三，系统提示词工程成为新细分赛道。** system_prompts_leaks 的 1218⭐ 增速远超其 54k 总量排名，反映出社区对"如何让模型按预期行为工作"的强烈关注。随着模型能力趋同，提示词调优和系统 Prompt 工程正在成为差异化竞争的新战场。

---

### 4. 社区关注热点

- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** — 首个面向 Agent 的 Office 自动化工具，1717⭐ 登顶，今日最值得跟踪的垂直场景 AI 应用
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** — Google 工程师出品的生产级 Agent 技能库，代表 AI 编码 Agent 工程化的最新实践
- **[asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks)** — 收录主流模型系统提示词，是调优 Agent 行为和理解模型边界的重要参考资源
- **Rust 语言 AI 工具链** — rig、meilisearch、qdrant、CubeSandbox 等 Rust 实现项目集中出现，Rust 在 AI 基础设施领域的存在感显著提升，值得关注其在高性能推理场景的潜力
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — 跨 Agent 通用记忆层，解决 Agent 长期记忆痛点，随着多 Agent 系统复杂化，此类基础设施需求将持续增长

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*