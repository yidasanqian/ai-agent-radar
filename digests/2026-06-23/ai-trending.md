# AI 开源趋势日报 2026-06-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-23 03:35 UTC

---

# AI 开源趋势日报

**日期**：2026-06-23  
**分析师**：MiniMax-M2.7

---

## 今日速览

2026年6月23日，AI开源生态呈现**多维度爆发**态势。视频生成与AI Agent成为今日最大亮点——**OpenMontage**作为首个开源视频制作智能体系统单日狂揽近3000 stars，标志着AI视频工作流正式进入"智能体时代"。与此同时，代码智能体基础设施快速成熟，**codebase-memory-mcp**以1185 stars冲入热榜，展现了代码理解与知识图谱结合的巨大潜力。金融AI应用分化明显：轻量级**daily_stock_analysis**凭借零成本定时运行特性获得1557 stars，而复杂的多智能体交易系统则稳居高分榜单。值得关注的是，AI开发工具链正在快速成熟——从模型推理（airllm 4GB单卡跑70B）、代码索引到智能体编排，完整工具链已初步成型。

---

## 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | 174,754 | — | 本地LLM运行框架，支持Kimi、GLM、MiniMax等主流模型，开箱即用 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 83,590 | — | 高吞吐量LLM推理引擎，PagedAttention等优化技术加持 |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | 1,185 | **+1,185** | 毫秒级代码索引MCP服务器，158语言支持，99% token节省 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 137,466 | +615 | AI数据获取基础设施，大规模网页抓取与交互API |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | 193 | +193 | 单卡4GB显存运行70B参数模型，突破推理硬件门槛 |
| [garrytan/gstack](https://github.com/garrytan/gstack) | 573 | +573 | 23个Claude Code工具集，涵盖CEO、设计、工程管理等角色 |

---

### 🤖 AI 智能体 / 工作流

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | 73,373 | +738 | 字节跳动SuperAgent框架，支持沙箱、记忆、工具、子智能体协同 |
| [langgenius/dify](https://github.com/langgenius/dify) | 146,189 | — | 生产级智能体工作流开发平台，拖拽式编排 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 139,916 | — | 智能体工程框架，工具调用与链式编排事实标准 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 142,654 | — | 开源AI界面，支持Ollama和OpenAI API |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 78,045 | — | AI驱动开发平台，端到端自动化编码任务 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,409 | — | 智能体与生成式UI的前端技术栈，AG-UI协议发起者 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 100,153 | — | 让任意网站可被AI智能体自动化操作 |

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | — | **+2,938** | 首个开源视频制作智能体系统，12条流水线、52工具、500+技能 |
| [palmier-io/palmier-pro](https://github.com/palmier-io/palmier-pro) | — | **+2,463** | 专为AI设计的macOS视频编辑器 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 46,026 | **+1,557** | 多市场股票智能分析，零成本定时运行，支持中文 |
| [jamiepine/voicebox](https://github.com/jamiepine/voicebox) | — | +529 | 开源AI语音工作室，支持克隆、听写、创作 |
| [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) | 69,557 | — | 面向分析师和AI智能体的金融数据平台 |
| [mukul975/Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | — | +956 | 817个网络安全技能，映射6大安全框架，29个领域 |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | — | +395 | 用HTML写视频，专为AI智能体设计 |

---

### 🧠 大模型 / 训练

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | 161,823 | — | 最全面模型定义框架，覆盖文本、视觉、音频、多模态 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 100,963 | — | 动态神经网络框架，GPU加速事实标准 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 195,840 | — | 面向所有人的开源机器学习框架 |
| [keras-team/keras](https://github.com/keras-team/keras) | 64,100 | — | 人类友好的深度学习API |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,112 | — | LLM评估平台，支持100+数据集、主流模型对比 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 219,988 | — | 智能体性能优化系统，技能、本能、记忆、安全五位一体 |

---

### 🔍 RAG / 知识库

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 83,380 | — | RAG与智能体融合的检索增强生成引擎 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,299 | — | 文档智能体与OCR平台，结构化数据提取 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 44,902 | — | 云原生高性能向量数据库 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 59,163 | — | AI智能体通用记忆层，跨会话持久化 |
| [safishamsi/graphify](https://github.com/safishamsi/graphify) | 70,777 | — | 将代码库转化为可查询知识图谱的编码助手技能 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 32,568 | — | 大规模向量数据库，支持混合搜索 |
| [lancedb/lancedb](https://github.com/lancedb/lancedb) | 10,686 | — | 开发者友好的嵌入式检索库，多模态AI支持 |

---

## 趋势信号分析

今日热榜呈现出三个显著趋势信号：

**1. 视频生成进入"智能体时代"**  
OpenMontage（+2938）和 palmier-pro（+2463）双双爆发，代表AI视频工作流正从单点工具向智能体化演进。OpenMontage的12条流水线、52工具、500+技能设计，暗示未来视频创作将完全由AI自主完成。

**2. 代码智能体基础设施快速成熟**  
codebase-memory-mcp实现毫秒级代码索引（158语言、99% token节省），airllm突破单卡4GB跑70B模型限制，gstack提供23个开发角色工具——代码理解与推理的成本正在大幅下降，2026年或成"代码智能体元年"。

**3. 金融AI应用两极分化**  
轻量级工具（daily_stock_analysis +1557）满足个人投资者"零门槛"需求，而复杂多智能体系统（TradingAgents 88k stars）则服务专业量化团队。中间市场尚未出现标杆产品，存在创业机会。

---

## 社区关注热点

- **[calesthio/OpenMontage](https://github.com/calesthio/OpenMontage)** — 首个开源视频制作智能体，12流水线+52工具+500+技能，代表AI视频工作流未来方向

- **[DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)** — 毫秒级代码索引技术，158语言支持、99% token节省，为代码智能体提供基础设施支撑

- **[lyogavin/airllm](https://github.com/lyogavin/airllm)** — 单卡4GB运行70B模型，突破推理硬件门槛，个人开发者也能跑大模型

- **[bytedance/deer-flow](https://github.com/bytedance/deer-flow)** — 字节跳动SuperAgent框架，沙箱+记忆+工具+子智能体协同，长时域任务处理能力领先

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — 零成本定时运行的股票分析系统，多市场数据+实时新闻+自动推送，适合个人投资者快速上手

---

*报告生成时间：2026-06-23 | 数据来源：GitHub Trending + Topic Search*

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*