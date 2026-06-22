# AI 开源趋势日报 2026-06-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-06-22 04:16 UTC

---

# AI 开源趋势日报

**日期**：2026-06-22
**分析师**：MiniMax-M2.7

---

## 今日速览

今日 GitHub Trending 榜单呈现三大特征：① **Agent 工作流持续爆发**，OpenMontage、deer-flow 等多智能体系统单日新增 stars 均超 400，标志开源社区正从「单点工具」向「端到端自动化」迁移；② **RAG 基础设施优化成为新热点**，headroom 以 2624 stars 登顶榜首，通过 token 压缩实现 60-95% 成本削减，契合当前 LLM 应用落地的核心痛点；③ **垂直场景 AI 应用加速分化**，从股票分析、代码智能到网络安全，AI 正在从通用能力向行业纵深渗透。

---

## 各维度热门项目

### 🔧 AI 基础工具

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [headroom](https://github.com/chopratejas/headroom) | 44,905 | +2,624 | Token 压缩工具，覆盖日志/文件/RAG chunks，60-95% 降本效果，Library + Proxy + MCP 三形态 |
| [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | — | +1,032 | 高性能代码智能 MCP 服务器，158 语言支持，毫秒级索引，99% token 削减 |
| [skills](https://github.com/mattpocock/skills) | — | +1,443 | Claude 技能集合，直接复用 .claude 目录配置，降低 Agent 使用门槛 |
| [system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | — | +282 | 主流模型系统提示提取（Claude/GPT/Gemini/Grok），持续更新，提示工程研究必备 |

**今日亮点**：headroom 以 2624 stars 登顶全榜，印证了 LLM 应用成本优化需求的爆发。MCP（Model Context Protocol）生态持续扩张，codebase-memory-mcp 和 skills 均围绕 MCP 构建基础设施。

---

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [OpenMontage](https://github.com/calesthio/OpenMontage) | — | +987 | 首个开源 Agentic 视频制作系统，12 管道 + 52 工具 + 500+ Agent 技能，代码助手→视频工作室 |
| [deer-flow](https://github.com/bytedance/deer-flow) | 72,707 | +442 | 字节开源长时域 SuperAgent，支持沙箱/记忆/工具/子 Agent，今日同时进入 Trending |
| [worldmonitor](https://github.com/koala73/worldmonitor) | — | +163 | AI 驱动的全球情报仪表盘，实时聚合新闻/地缘政治/基础设施，Agent 化监控场景 |
| [hermes-agent](https://github.com/NousResearch/hermes-agent) | 199,154 | — | 可成长的 AI Agent 框架，支持多模型/多渠道，主题搜索热度第一 |
| [CowAgent](https://github.com/zhayujie/CowAgent) | 45,525 | — | 开源超级 AI 助手，支持任务规划/工具执行/记忆进化，前身 chatgpt-on-wechat |
| [OpenHands](https://github.com/OpenHands/OpenHands) | 77,953 | — | AI 驱动开发平台，聚焦代码自动化，当前 LLM 主题下 Top 10 |

**今日亮点**：OpenMontage 将 Agent 能力从代码场景扩展到视频制作，标志多模态 Agent 工作流进入实用阶段。deer-flow 首次进入 Trending，字节在 Agent 基础设施的投入获社区认可。

---

### 📦 AI 应用

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [palmier-pro](https://github.com/palmier-io/palmier-pro) | — | +1,834 | macOS AI 视频编辑器，集成 AI 能力的一站式创作工具 |
| [daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | 44,797 | +568 | LLM 驱动的多市场股票分析，支持实时新闻/决策看板/自动推送，零成本定时运行 |
| [Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) | — | +361 | 754 个结构化网络安全技能，映射 MITRE ATT&CK/NIST CSF 2.0 等框架，兼容 Claude Code/Copilot 等 20+ 平台 |
| [TradingAgents](https://github.com/TauricResearch/TradingAgents) | 87,857 | — | 多 Agent LLM 金融交易框架，主题搜索金融 AI 领域代表项目 |
| [ppt-master](https://github.com/hugohe3/ppt-master) | 29,998 | — | AI 生成可编辑 PPT，支持原生形状/动画/语音旁白，垂直场景落地标杆 |

**今日亮点**：AI 应用正从通用助手向垂直行业纵深，股票分析、网络安全、视频编辑等场景均有项目进入 Trending。Anthropic-Cybersecurity-Skills 将 AI Agent 能力与安全合规框架结合，开辟新方向。

---

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [ollama](https://github.com/ollama/ollama) | 174,691 | — | 本地 LLM 运行平台，支持 Kimi-K2.6/GLM-5.1/MiniMax/DeepSeek 等模型，主题搜索 LLM 领域 Top 5 |
| [transformers](https://github.com/huggingface/transformers) | 161,782 | — | Hugging Face 核心框架，覆盖文本/视觉/音频/多模态，事实标准 |
| [vllm](https://github.com/vllm-project/vllm) | 83,509 | — | 高吞吐 LLM 推理引擎，vLLM 已成为生产部署首选 |
| [opencompass](https://github.com/open-compass/opencompass) | 7,109 | — | LLM 评测平台，支持 100+ 数据集 / Llama3/GPT-4/Claude 等主流模型 |
| [testtimescaling](https://github.com/testtimescaling/testtimescaling.github.io) | 104 | — | 测试时 scaling 趋势研究，跟踪 LLM 推理阶段 scaling law 前沿 |

**今日亮点**：大模型基础设施层格局稳定，ollama/vllm/transformers 三足鼎立。testtimescaling 等新兴研究方向开始获得开源关注，测试时计算扩展成为新热点。

---

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 说明 |
|------|-------|----------|------|
| [cognee](https://github.com/topoteretes/cognee) | 18,721 | +347 | AI Agent 持久记忆平台，自托管知识图谱引擎，今日同时进入 Trending |
| [ragflow](https://github.com/infiniflow/ragflow) | 83,310 | — | RAG + Agent 融合引擎，构建 LLM 上下文层，主题搜索 RAG 领域 Top 2 |
| [PageIndex](https://github.com/VectifyAI/PageIndex) | 33,276 | — | 向量无关推理 RAG，突破传统向量检索瓶颈 |
| [LEANN](https://github.com/StarTrail-org/LEANN) | 12,476 | — | 端侧 RAG 方案，97% 存储节省，100% 隐私保护 |
| [langchain4j](https://github.com/langchain4j/langchain4j) | 12,384 | — | Java/JVM LLM 应用框架，支持 MCP/Agent/RAG，企业级 Java 生态首选 |

**今日亮点**：cognee 同时进入 Trending 和主题搜索，AI 记忆/知识管理需求旺盛。LEANN 等端侧 RAG 方案涌现，隐私计算场景成为新战场。

---

## 趋势信号分析

今日 Trending 榜单释放三个关键信号：

**1. Agent 工作流从「单点突破」走向「全链路覆盖」**
OpenMontage 将 Agent 能力延伸至视频制作全流程（12 管道 + 52 工具），不再是单一任务执行，而是端到端自动化。这预示开源社区正从「AI 辅助工具」向「AI 原生工作流」迁移，预计未来会有更多垂直场景出现类似的全链路 Agent 系统。

**2. RAG 基础设施进入「成本优化」深水区**
headroom 以 token 压缩为核心卖点（60-95% 降本），单日新增 2624 stars 登顶全榜。这反映当前 LLM 应用落地的核心矛盾已从「效果」转向「成本」，社区正从向量检索优化转向全链路 token 管理。cognee 的记忆压缩、LEANN 的端侧部署，均是这一趋势的延伸。

**3. MCP 生态加速扩张**
codebase-memory-mcp、skills、headroom 均围绕 MCP 构建，MCP 已从 Anthropic 内部协议演变为跨框架互操作标准。langchain4j 对 MCP 的原生支持、OpenClaw 等多 Agent 框架的 MCP 集成，标志着 MCP 正成为 Agent 工具调用的事实协议。

---

## 社区关注热点

- **[headroom](https://github.com/chopratejas/headroom)** — Token 压缩赛道新王，RAG 成本优化必选工具，今日 +2624 stars 验证需求真实性
  
- **[OpenMontage](https://github.com/calesthio/OpenMontage)** — 视频制作 Agent 首发项目，多模态工作流标杆，+987 stars 预示内容创作 AI 化加速
  
- **[deer-flow](https://github.com/bytedance/deer-flow)** — 字节 SuperAgent 框架首次进入 Trending，长时域任务处理能力值得关注
  
- **[Anthropic-Cybersecurity-Skills](https://github.com/mukul975/Anthropic-Cybersecurity-Skills)** — AI Agent × 网络安全合规新方向，754 技能覆盖 26 安全领域，框架映射完整
  
- **[cognee](https://github.com/topoteretes/cognee)** — AI 持久记忆平台，Agent 长期记忆问题解决方案，今日双榜单验证热度

---

*数据来源：GitHub Trending（2026-06-22）+ GitHub Topic Search（ai-agent/llm/llm-model/ml/vector-db/rag）*

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*