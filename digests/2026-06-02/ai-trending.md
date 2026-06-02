# AI 开源趋势日报 2026-06-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-02 04:00 UTC

---

# 🤖 AI 开源趋势日报

**报告日期**：2026-06-02
**数据来源**：GitHub Trending + AI 主题搜索

---

## 第一步：AI 相关性过滤

从 Trending 榜单（17 个）中筛除非 AI 项目：

| 排除项目 | 排除原因 |
|---|---|
| `microsoft/markitdown` | 通用文档格式转换工具，无 AI 成分 |
| `D4Vinci/Scrapling` | 通用 Web 爬虫框架 |
| `godotengine/godot` | 游戏引擎，非 AI 用途 |
| `codecrafters-io/build-your-own-x` | 编程学习合集，非 AI 专项 |

**Trending 有效 AI 项目**：13 个

---

## 第二步：分类整理

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 172,877 | — | 本地 LLM 运行时，支持 Kimi-K2.5、GLM-5、MiniMax、DeepSeek 等数十种模型，一键部署 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,641 | — | 高吞吐量 LLM 推理引擎，PagedAttention 显存管理仍是生产环境首选 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,181 | — | 事实标准模型框架，覆盖文本/视觉/音频/多模态推理与训练全流程 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 71,780 | — | 统一微调平台，一套代码支持 100+ LLM & VLM 高效微调（ACL 2024） |
| [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) | 135 | +135 | Rust 编写的高精度文件搜索工具，专为 AI Agent、Neovim 设计，性能最优 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 335 | +335 | 终端 AI 编程 Agent，支持 hash 锚定编辑、工具调用优化、LSP、Python、浏览器和子 Agent |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | 26,738 | — | Google Workspace CLI，含 AI Agent Skills，原生集成 Drive/Gmail/Calendar 等 |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | 12,176 | — | Java/JVM 生态 LLM 开发库，统一 API 覆盖主流 LLM 和向量存储，支持 MCP |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 202,408 | — | Agent Harness 性能优化系统，为 Claude Code/Codex/Cursor 等提供技能、记忆、安全机制 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,707 | — | 通用 AI Agent 先驱项目，使 AI 触手可及，生态持续扩张 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 176,196 | — | 可成长的 Agent 系统，模块化设计支持持续扩展 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,463 | — | 生产级 Agentic 工作流开发平台，低代码可视化编排 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,617 | — | AI 驱动开发平台，Agent 自主完成代码修改、测试、PR 等全流程 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 96,598 | — | 让 AI Agent 操控任意网站自动化执行任务的事实标准 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 31,888 | — | 前端 Agent 开发框架 + AG-UI 协议，React/Angular 生态核心入口 |
| [activepieces/activepieces](https://github.com/activepieces/activepieces) | 22,508 | — | AI 工作流自动化平台，集成 ~400 个 MCP 服务器 |
| [nesquena/hermes-webui](https://github.com/nesquena/hermes-webui) | 0 | +945 | Hermes Agent 的 Web/移动端界面，降低 Agent 使用门槛 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | 0 | +417 | Claude Code/Cursor 等主流 IDE 的复合工程插件，统一 Agent 工具链 |
| [revfactory/harness](https://github.com/revfactory/harness) | 0 | +524 | 元技能框架，设计领域特定 Agent 团队并自动生成技能定义 |

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 0 | +3,375 | 一键生成高清短视频的 AI 应用，整合 LLM 脚本 + TTS + 素材，Trending 今日新增第一 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,588 | — | 用户友好的 AI 界面，支持 Ollama/OpenAI API 等多后端，开源 ChatGPT 替代品 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,054 | — | LLM 评测平台，覆盖 100+ 数据集和 Llama3/Mistral/GPT-4 等主流模型 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 112,532 | — | 100+ 可直接运行的 AI Agent & RAG 应用合集，覆盖 30+ 场景 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 39,799 | — | A/H/美股智能分析系统，多数据源 + 实时新闻 + LLM 决策 + 多渠道推送 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 68,396 | — | 面向分析师和 AI Agent 的金融数据平台，结构化输出可直接供 LLM 使用 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 23,403 | — | 文档转可编辑 PPT 的 AI 工具，支持原生形状、动画和语音旁白 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | 888 | +888 | 无 Tokenizer 的多语言 TTS 系统，支持创意语音设计和零样本克隆 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 50,977 | — | 2 小时从零训练 64M 参数 LLM 的教学项目，MLSys 2026 录用 |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | 861 | +861 | 从数据下载到文本生成的完整 LLM 训练教程，Trending 今日新增第三 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 244 | — | 基础模型和世界模型预训练的最小化可靠库 |
| [starTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 11,848 | — | MLSys 2026：RAG 场景下 97% 存储节省，设备端私有化运行 |
| [Picovoice/picollm](https://github.com/Picovoice/picollm) | 311 | — | 端侧 LLM 推理库，X-Bit 量化技术驱动低功耗设备部署 |

---

### 🔍 RAG / 知识库

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,685 | — | 深度 RAG + Agent 融合引擎，提供高质量上下文层，是当前最活跃的 RAG 平台之一 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 57,348 | — | AI Agent 的通用记忆层，跨会话持久化上下文压缩与注入 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,583 | — | 云原生高性能向量数据库，ANN 检索规模化和稳定性标杆 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 36,050 | — | EMNLP 2025 论文实现，简单快速的 RAG 框架，近期热度快速攀升 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 57,906 | — | 闪电般快速的搜索引擎，支持 AI 混合搜索，Rust 实现高性能 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 31,736 | — | 为下一代 AI 设计的高性能向量数据库，云端托管版同步发展 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 10,474 | — | 开发者友好的嵌入式检索库，支持多模态 AI，简化向量管理 |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | 17,629 | — | 6 行代码构建 Agent 记忆平台，简化复杂 RAG 管道 |
| [memvid/memvid](https://github.com/memvid/memvid) | 15,602 | — | 无服务器单文件记忆层，替代复杂 RAG 管道，即时检索长期记忆 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,428 | — | 向量无关的推理型 RAG 文档索引，降低存储成本 |

---

## 第三步：报告正文

### 1. 今日速览

今日 GitHub AI 领域呈现三大特征：**视频生成应用爆发**，`MoneyPrinterTurbo` 以单日 3,375 stars 空降 Trending 榜首，印证了"AI 原生短视频"赛道的热度；**Agent 工具链持续细化**，从 `revfactory/harness` 的元技能框架到 `EveryInc/compound-engineering-plugin` 的 IDE 插件，社区正从"造 Agent"转向"优化 Agent 使用体验"；**Rust 正在成为 AI 基础设施新语言**，`fff`（文件搜索）、`meilisearch`（搜索引擎）、`qdrant`（向量数据库）三条赛道同时出现 Rust 身影，性能优先的 AI 工具链正在向 Rust 迁移。

---

### 2. 各维度热门项目

#### 🔧 AI 基础工具

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [ollama/ollama](https://github.com/ollama/ollama) | 172,877 | 本地 LLM 运行时，支持数十种模型一键部署，是本地 AI 开发的事实标准 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 81,641 | 高吞吐量 LLM 推理引擎，PagedAttention 显存管理仍是生产环境首选 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,181 | 覆盖文本/视觉/音频/多模态的事实标准模型框架 |
| [hiyouga/LlamaFactory](https://github.com/hiyouga/LlamaFactory) | 71,780 | 统一微调平台，一套代码支持 100+ LLM & VLM 高效微调 |
| [dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff) | 135 (+135 today) | Rust 编写的高精度文件搜索工具，专为 AI Agent 设计，性能最优 |
| [can1357/oh-my-pi](https://github.com/can1357/oh-my-pi) | 335 (+335 today) | 终端 AI 编程 Agent，支持 hash 锚定编辑和子 Agent 编排 |

#### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 202,408 | Agent Harness 性能优化系统，为 Claude Code/Codex/Cursor 提供技能/记忆/安全机制 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 184,707 | 通用 AI Agent 先驱，使 AI 触手可及，生态持续扩张 |
| [langgenius/dify](https://github.com/langgenius/dify) | 143,463 | 生产级 Agentic 工作流开发平台，低代码可视化编排 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 96,598 | 让 AI Agent 操控任意网站自动化执行任务的事实标准 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 75,617 | AI 驱动开发平台，Agent 自主完成代码修改、测试、PR 全流程 |
| [revfactory/harness](https://github.com/revfactory/harness) | 0 (+524 today) | 元技能框架，设计领域特定 Agent 团队并自动生成技能定义 |
| [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) | 0 (+417 today) | 统一 Claude Code/Cursor 等主流 IDE 的复合工程插件 |

#### 📦 AI 应用

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 0 (+3,375 today) | 一键生成高清短视频，LLM 脚本 + TTS + 素材全链路，今日热度第一 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 139,588 | 用户友好的开源 AI 界面，支持 Ollama/OpenAI API 等多后端 |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 112,532 | 100+ 可直接运行的 AI Agent & RAG 应用合集，覆盖 30+ 场景 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 68,396 | 面向分析师和 AI Agent 的金融数据平台，结构化输出供 LLM 使用 |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | 888 (+888 today) | 无 Tokenizer 多语言 TTS，支持创意语音设计和零样本克隆 |

#### 🧠 大模型 / 训练

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 50,977 | 2 小时从零训练 64M LLM，MLSys 2026 录用，教育价值极高 |
| [FareedKhan-dev/train-llm-from-scratch](https://github.com/FareedKhan-dev/train-llm-from-scratch) | 861 (+861 today) | 从数据下载到文本生成的完整 LLM 训练教程，Trending 今日第三 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 11,848 | MLSys 2026：RAG 场景 97% 存储节省，设备端私有化运行 |

#### 🔍 RAG / 知识库

| 项目 | Stars | 一句话说明 |
|---|---|---|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 81,685 | 深度 RAG + Agent 融合引擎，提供高质量上下文层 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 57,348 | AI Agent 通用记忆层，跨会话持久化上下文压缩与注入 |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | 57,906 | 闪电般快速的 AI 混合搜索引擎，Rust 实现高性能 |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | 36,050 | EMNLP 2025 论文实现，简单快速的 RAG 框架，热度快速攀升 |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | 32,428 | 向量无关推理型 RAG 文档索引，降低存储成本的新思路 |

---

### 3. 趋势信号分析

**Agent 工具链从"构建"转向"优化"**。今日 Trending 中 `revfactory/harness`、`EveryInc/compound-engineering-plugin`、`can1357/oh-my-pi` 三个项目均指向同一趋势：社区不再满足于"能跑起来的 Agent"，而是追求 Agent 的**可靠性、可组合性和使用体验**。这标志着 Agent 开发进入工程化深水区。

**Rust 正在重塑 AI 基础设施层**。三条不同赛道——文件搜索（`fff`）、搜索引擎（`meilisearch`）、向量数据库（`qdrant`）——同时出现 Rust 实现并获得高关注。Rust 的内存安全和高性能特性契合 AI Agent 对低延迟、强可靠性的需求，预计这一趋势将在 2026 年加速。

**垂直场景 AI 应用正在爆发**。视频生成（`MoneyPrinterTurbo`）、金融交易（`TradingAgents`、`daily_stock_analysis`）、TTS（`VoxCPM`）三个垂直方向同时出现在 Trending 榜单，说明 AI 正在从"通用能力展示"走向"具体场景落地"。其中视频生成单日 3,375 stars 的增速远超其他项目，内容创作或成为 AI 开源下一个爆点。

**RAG 架构持续演进**。从 `memvid` 的"无管道记忆层"到 `PageIndex` 的"向量无关推理型 RAG"，社区正在反思传统 RAG 的复杂性，寻求更轻量、更高效的替代方案。`LightRAG` 的 EMNLP 2025 论文实现也说明学术前沿正在快速转化为开源项目。

---

### 4. 社区关注热点

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — 视频生成赛道今日最热，一键 LLM+TTS+素材全链路，适合内容创作者和 AI 应用开发者快速集成短视频能力

- **[revfactory/harness](https://github.com/revfactory/harness)** — 元技能 Agent 框架新范式，可自动设计领域 Agent 团队并生成技能定义，是 Agent 工程化的重要方向

- **[HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)** — EMNLP 2025 论文实现，RAG 轻量化趋势代表，适合需要快速搭建高效检索系统的团队

- **[dmtrKovalenko/fff](https://github.com/dmtrKovalenko/fff)** — Rust 性能 + AI Agent 工具链交叉点，代表 AI 基础设施向高性能语言迁移的方向，值得持续关注

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — MLSys 2026 录用，2 小时训练 LLM 的完整教学项目，是理解大模型训练全流程的最佳实践代码

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*