# AI 官方内容追踪报告 2026-06-27

> 今日更新 | 新增内容: 30 篇 | 生成时间: 2026-06-27 03:29 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 18 篇（sitemap 共 402 条）
- OpenAI: [openai.com](https://openai.com) — 新增 12 篇（sitemap 共 854 条）

---

# AI 官方内容追踪报告

**报告日期：2026年6月27日**

---

## 1. 今日速览

2026年6月27日，Anthropic与OpenAI均呈现密集发布态势。Anthropic以18篇增量内容领跑，重点聚焦**企业级AI落地**（DXC、TCS合作）、**安全研究**（Mythos Preview网络攻防能力评估）以及**社会价值投资**（Claude Corps、盖茨基金会合作）。OpenAI则释放出**GPT-5.6预览**信号，并宣布与Broadcom合作开发推理芯片，同时启动ChatGPT广告测试，商业模式探索进入新阶段。整体来看，两家公司正从“模型能力竞争”转向“生态控制权争夺”，企业市场与开发者工具成为核心战场。

---

## 2. Anthropic / Claude 内容精选

### 2.1 News（企业动态与政策）

#### Introducing Claude Corps
- **发布日期：** 2026年6月11日
- **核心观点：** Anthropic宣布推出Claude Corps国家级 fellowship 项目，计划投入1.5亿美元，招募1000名早期职业人才，通过一年全职驻场方式帮助美国各地非营利组织部署AI能力。该项目由Anthropic、CodePath及多家合作机构共同运营，目标是构建“AI红利广泛共享”的可复制模式。
- **业务意义：** 这是Anthropic迄今为止最大规模的“负责任AI”社会投资，表明公司正试图在技术商业化与社会效益之间建立更紧密的关联，为未来监管博弈积累社会资本。
- **原文链接：** https://www.anthropic.com/news/claude-corps

#### DXC integrates Claude into systems regulated industries rely on
- **发布日期：** 2026年6月11日
- **核心观点：** 全球IT服务巨头DXC Technology与Anthropic达成多年期全球联盟，将训练数万名Claude认证的前置工程师（Forward-Deployed Engineers），将Claude嵌入DXC服务的银行、航空公司、保险公司、制造商及政府机构的核心系统。DXC已使用Claude编写了超过95%的AI原生编排平台DXC OASIS代码。
- **业务意义：** 这是Anthropic企业渗透战略的关键里程碑——通过DXC覆盖全球70个国家、11.5万员工的运营网络，Claude将进入受严格安全与合规要求约束的关键行业系统，标志着Anthropic在“受监管行业AI”赛道建立先发优势。
- **原文链接：** https://www.anthropic.com/news/dxc-anthropic-alliance

#### TCS and Anthropic bring Claude to regulated industries
- **发布日期：** 2026年6月12日
- **核心观点：** 印度IT服务巨头TCS与Anthropic达成合作伙伴关系，将向5万名自有员工提供Claude访问权限，并构建专门的Claude实践团队，为金融服务、医疗、公共部门等受监管行业客户设计并运营Claude驱动的行业解决方案（如保险理赔处理、银行贷款咨询）。
- **业务意义：** TCS的加入使Anthropic在IT服务合作伙伴生态（Partner Network）中形成“双保险”——与DXC、TCS的同时合作意味着Anthropic的企业覆盖网络已横跨北美、欧洲与亚太，形成对Infosys、Wipro等竞争对手的生态压制。
- **原文链接：** https://www.anthropic.com/news/tcs-anthropic-partnership

#### Anthropic partners with the Gates Foundation
- **发布日期：** 2026年5月14日
- **核心观点：** Anthropic与比尔及梅琳达·盖茨基金会达成2亿美元承诺，涵盖赠款资金、Claude使用积分及技术支持，用于全球健康、生命科学、教育及经济流动性领域，项目周期为四年，由Anthropic的Beneficial Deployments团队主导执行。
- **业务意义：** 这是Anthropic在“AI for Good”领域最实质性的资源承诺。与Gates Foundation的合作不仅带来资金杠杆，更重要的是为Claude在医疗资源匮乏地区（覆盖约46亿缺乏基本医疗服务的人口）的部署提供了合法性与可信度背书。
- **原文链接：** https://www.anthropic.com/news/gates-foundation-partnership

#### Anthropic opens Seoul office
- **发布日期：** 2026年6月17日
- **核心观点：** Anthropic正式开设首尔办公室，并宣布与韩国科学与信息通信技术部（Ministry of Science and ICT）签署谅解备忘录（MOU），将在AI安全与网络安全领域开展合作，包括韩语环境下的模型安全评估及AI赋能网络威胁情报共享。同时与WRTN、Law&Company等韩国企业及初创公司建立合作关系。
- **业务意义：** 首尔办公室的开设标志着Anthropic亚太战略进入实体运营阶段。MOU的签署意味着Anthropic正在将自身定位为“韩国AI安全可信赖合作伙伴”，这与韩国政府近期推进的AI产业政策形成战略协同。
- **原文链接：** https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem

#### Introducing Claude Tag
- **发布日期：** 2026年6月23日
- **核心观点：** Claude Tag是Claude在Slack中的团队协作功能，支持在频道中@Claude分配任务、连接工具与代码库、跨会话记忆上下文。Anthropic内部数据显示，产品团队65%的代码已由Claude Tag内部版本生成，使用范围正从工程扩展至产品分析、客服工单处理及故障根因分析。
- **业务意义：** Claude Tag代表了Anthropic对“AI助手”形态的最新定义——从单点对话工具升级为团队协作成员。其在Slack中的深度集成策略，暗示Anthropic正试图将Claude嵌入企业工作流的核心节点（而非仅作为独立工具），这与Microsoft 365 Copilot的定位形成直接竞争。
- **原文链接：** https://www.anthropic.com/news/introducing-claude-tag

---

### 2.2 Research（技术研究与安全评估）

#### Economic Index report: Cadences
- **发布日期：** 2026年6月26日
- **核心观点：** Anthropic发布经济指数报告，重点揭示Claude使用模式的结构性转变：随着Claude Code与Cowork的普及，Claude会话正从“用户-助手对话”转向“长时运行智能体任务”，传统聊天记录已无法完整刻画用户行为。为此，Anthropic升级了数据管道，引入小时级采样、新输出分类器，并首次将Chat/Cowork对话与1P API数据分层披露。报告还预告了2026年4月启动的Anthropic经济指数调查初步发现。
- **技术细节：** 报告指出，Claude会话现包含更长的任务链、更复杂的工具调用序列，以及更显著的“人机协作分工”——用户主导规划决策，Claude主导执行决策。
- **原文链接：** https://www.anthropic.com/research/economic-index-june-2026-report

#### Paving the way for AI agents in biology
- **发布日期：** 2026年6月8日
- **核心观点：** Anthropic研究团队（Laura Luebbert等）发布论文，指出当前科学智能体在生物数据基础设施中面临的核心挑战：生物数据库（如NCBI Virus）的设计未考虑AI agents的访问模式，导致即使最强模型也难以可靠完成数据集构建任务。研究发现，通过添加确定性检索层（如gget virus工具），准确率可提升至近100%。论文提出“生物数据库需要为agents重新设计”的核心命题。
- **技术细节：** 研究对比了Claude、Biomni OSS、Edison Analysis及GPT在病毒序列数据检索任务中的表现，发现非确定性输出是制约可靠性的关键因素。
- **原文链接：** https://www.anthropic.com/research/agents-in-biology

#### Making Claude a chemist
- **发布日期：** 2026年6月5日
- **核心观点：** Anthropic化学家David Kamber团队发布首篇研究成果，聚焦Claude在化学分析最常见输入——核磁共振（NMR）谱图——上的表现。论文指出，化学家需在不同表示形式（手绘结构、仪器读数、数据库查询字符串、专利符号）之间流畅切换，每种形式编码相同的底层化学但要求不同的“流利度”。研究揭示了当前模型在分子身份识别、立体化学判断等方面的能力边界。
- **技术细节：** 论文以咖啡因与腺苷的结构对比为例，说明化学直觉与精确表示之间的张力，并引用沙利度胺（thalidomide）镜像异构体悲剧说明立体化学错误的风险。
- **原文链接：** https://www.anthropic.com/research/making-claude-a-chemist

#### AI to defend critical infrastructure
- **发布日期：** 2026年1月8日
- **核心观点：** Anthropic与太平洋西北国家实验室（PNNL）合作，探索使用Claude加速关键基础设施（供水系统、电网等）的网络防御红队演练。研究证明，Claude可在远短于人类专家的时间内完成高保真水处理厂模拟系统的攻击仿真，验证了“AI加速防御”概念的可行性。
- **技术细节：** 研究聚焦“对手仿真”（adversary emulation）任务，即建模特定威胁行为者或攻击路径以识别系统脆弱性。Claude的介入显著缩短了“仿真-分析-修复”周期。
- **原文链接：** https://www.anthropic.com/research/critical-infrastructure-defense

#### Reverse engineering Claude's CVE-2026-2796 exploit
- **发布日期：** 2026年3月6日
- **核心观点：** Anthropic Frontier Red Team发布深度技术分析，记录Claude Opus 4.6如何将Firefox漏洞（CVE-2026-2796）转化为可工作的漏洞利用代码。研究强调，Claude并非编写“完整链式漏洞利用”，且仅在移除部分浏览器安全沙箱的测试环境中成功，但这一数据点预示LLM在漏洞利用编写能力上的快速演进轨迹。
- **技术细节：** 报告指出，Claude Opus 4.6在数百次尝试中将2个漏洞转化为可利用代码，成功率远高于此前模型。团队明确表示，发布此案例研究是为行业提供“LLM网络能力演进”的早期预警。
- **原文链接：** https://www.anthropic.com/research/exploit

#### Measuring LLMs' ability to develop exploits
- **发布日期：** 2026年5月22日
- **核心观点：** Anthropic发布Mythos Preview在ExploitBench与ExploitGym两个新学术基准上的评估结果。团队透露，Mythos Preview能够将漏洞转化为利用原语（exploit primitives），并进一步组合为完整端到端攻击链，这是其超越此前前沿模型的核心能力，也是启动Project Glasswing（谨慎发布机制）的关键动因。
- **技术细节：** 研究团队与ExploitBench/ExploitGym作者合作，在更新版基准上重新测试Mythos Preview，结果显示其在复杂漏洞利用开发任务上的显著领先。
- **原文链接：** https://www.anthropic.com/research/exploit-evals

#### Mapping AI-enabled cyber threats
- **发布日期：** 2026年6月3日
- **核心观点：** Anthropic与Verizon合作，将832个恶意使用Claude的账户的AI网络攻击活动映射至MITRE ATT&CK框架。分析揭示，AI模型已被用于全部14种ATT&CK战术和482种独特子技术，打破了传统“AI网络攻击=低复杂度”的假设。研究结果已纳入2026年Verizon数据泄露调查报告（DBIR）。
- **技术细节：** 研究覆盖2025年3月至2026年3月期间的恶意活动，账户样本从Anthropic调查并封禁的总数中筛选而出，筛选标准为“足以映射至ATT&CK框架的详细信息”。
- **原文链接：** https://www.anthropic.com/research/attack-navigator

#### What 81,000 people told us about the economics of AI
- **发布日期：** 2026年4月22日
- **核心观点：** Anthropic发布对8.1万名Claude用户的大规模调查，揭示AI经济影响的用户主观感知：AI暴露度更高的工作角色对AI驱动的工作替代担忧更强烈；最高薪与最低薪职业报告的生产力增益最大（通常来自“任务范围扩展”而非“速度提升”）；生产力提速最显著的用户同时表达更高的就业焦虑。
- **技术细节：** 调查首次将Claude流量数据与用户主观反馈关联，发现AI使用与职业安全感之间存在非线性关系——适度的AI使用带来正向体验，但高强度使用可能触发“被取代”焦虑。
- **原文链接：** https://www.anthropic.com/research/81k-economics

#### Project Fetch: Phase two
- **发布日期：** 2026年6月18日
- **核心观点：** Anthropic发布Project Fetch第二阶段成果，对比Claude Opus 4.7与人类团队在机器人操控任务上的表现。结果显示，Opus 4.7在无人类辅助条件下完成任务的速度约为最快人类团队的20倍，但团队明确指出“这不代表LLM已解决机器人问题”——模型在精确物理操控任务上仍存在显著局限。
- **技术细节：** 第二阶段实验使用与第一阶段相同的开源四足机器人平台，任务集涵盖导航、物体识别、路径规划等，Opus 4.7在任务完成率与耗时上均大幅超越Opus 4.1。
- **原文链接：** https://www.anthropic.com/research/project-fetch-phase-two

#### Assessing Claude Mythos Preview's cybersecurity capabilities
- **发布日期：** 2026年4月7日
- **核心观点：** Anthropic正式发布Claude Mythos Preview，并同步启动Project Glasswing——一项利用Mythos Preview帮助保护全球最关键软件基础设施的协调行动。论文详细披露了Mythos Preview在网络安全任务上的评估方法与发现，涵盖漏洞发现、漏洞利用开发、攻击链构建等维度。
- **技术细节：** 评估团队由Nicholas Carlini、Newton Cheng、Keane Lucas等安全研究专家领衔，测试覆盖Novel Zero-Day搜索、Exploit开发、攻击链组合等高难度任务。团队在论文中明确表达了对此类能力被滥用的担忧，并解释了谨慎发布的决策逻辑。
- **原文链接：** https://www.anthropic.com/research/mythos-preview

#### How Claude Code is used in practice
- **发布日期：** 2026年6月16日
- **核心观点：** Anthropic发布基于约40万Claude Code会话的隐私保护分析报告（2025年10月至2026年4月），揭示智能体编程的使用模式：用户主导规划决策，Claude主导执行决策；领域专业知识越丰富，Claude每条指令完成的工作量越大；七个月内调试会话占比下降近一半，使用重心转向端到端智能体任务；任务价值（以自由职业工作发布价格为参照）平均增长约25%。
- **技术细节：** 研究发现，在编码任务上，各主要职业的成功率（以测试通过或代码提交为验证）与软件工程师平均水平相当；专家用户与中级用户的成功率差距“适中”。
- **原文链接：** https://www.anthropic.com/research/claude-code-expertise

---

## 3. OpenAI 内容精选

### 3.1 Index（产品与功能发布）

#### How Agents Are Transforming Work
- **发布日期：** 2026年6月27日
- **核心观点：** OpenAI发布专题页面，系统阐述AI Agents如何重塑工作方式，涵盖自动化工作流、代码生成、业务流程优化等场景。这是OpenAI首次以独立专题形式集中展示Agents能力，暗示Agents将成为GPT-5.6及后续产品的核心产品定位。
- **原文链接：** https://openai.com/index/how-agents-are-transforming-work/

#### Previewing Gpt 5 6 Sol
- **发布日期：** 2026年6月27日
- **核心观点：** OpenAI释放GPT-5.6预览信号，页面标题暗示该版本可能引入重大架构或能力升级。“Sol”（可能指代特定版本代号或功能特性）的命名方式与此前GPT-4系列的命名惯例存在差异，值得关注。
- **原文链接：** https://openai.com/index/previewing-gpt-5-6-sol/

#### Devday
- **发布日期：** 2026年6月26日
- **核心观点：** OpenAI开发者日活动页面更新，暗示近期将举办面向开发者的专项活动或发布开发者工具更新。考虑到GPT-5.6预览同步发布，Devday可能成为GPT-5.6正式发布的配套活动。
- **原文链接：** https://openai.com/devday/

#### Openai Broadcom Jalapeno Inference Chip
- **发布日期：** 2026年6月26日
- **核心观点：** OpenAI宣布与Broadcom合作开发代号为"Jalapeno"的推理芯片。这是OpenAI在自研芯片领域的最新动作，旨在降低对NVIDIA GPU的依赖，优化推理成本与供应链可控性。
- **战略意义：** Jalapeno芯片的推出标志着OpenAI从“模型公司”向“全栈AI公司”的战略延伸，与Google（TPU）、Amazon（Trainium/Inferentia）的垂直整合路径趋同。
- **原文链接：** https://openai.com/index/openai-broadcom-jalapeno-inference-chip/

#### Personal Finance Chatgpt
- **发布日期：** 2026年6月26日
- **核心观点：** OpenAI在ChatGPT中推出个人财务管理功能，允许用户连接银行账户、追踪支出、生成预算建议。这是ChatGPT向“日常助手”平台演进的最新动作，也是OpenAI在消费者产品货币化方面的积极探索。
- **原文链接：** https://openai.com/index/personal-finance-chatgpt/

#### Testing Ads In Chatgpt
- **发布日期：** 2026年6月26日
- **核心观点：** OpenAI正式在ChatGPT中启动广告测试，标志着其商业模式从API/订阅向广告赞助的多元化探索。广告形态与投放策略尚未公开，但此举意味着OpenAI正借鉴社交媒体平台的变现逻辑。
- **原文链接：** https://openai.com/index/testing-ads-in-chatgpt/

#### Samsung Electronics Chatgpt Codex Deployment
- **发布日期：** 2026年6月26日
- **核心观点：** 三星电子宣布在其业务运营中大规模部署ChatGPT Codex，涵盖软件开发、文档生成、代码审查等场景。这是继此前企业合作公告后，OpenAI在大型企业客户渗透方面的又一里程碑。
- **原文链接：** https://openai.com/index/samsung-electronics-chatgpt-codex-deployment/

#### Codex Flexible Pricing For Teams
- **发布日期：** 2026年6月26日
- **核心观点：** OpenAI为Codex推出团队灵活定价方案，降低企业团队使用AI编程工具的门槛。此举与Anthropic的Claude Code企业推广形成直接竞争，定价策略的灵活性将成为争夺企业客户的关键变量。
- **原文链接：** https://openai.com/index/codex-flexible-pricing-for-teams/

### 3.2 News（公司公告）

#### Company Announcements
- **发布日期：** 2026年6月26日
- **核心观点：** OpenAI公司公告页面更新，汇总近期重要企业动态，包括组织调整、战略合作及产品发布等。
- **原文链接：** https://openai.com/news/company-announcements/

### 3.3 Campus Network（开发者生态）

#### Openai Campus Network Student Club Interest Form
- **发布日期：** 2026年6月26日
- **核心观点：** OpenAI推出校园网络学生俱乐部兴趣表单，旨在构建以学生为核心的开发者和研究者社区。这是OpenAI在学术/教育市场深化品牌影响力的举措，与Anthropic的Claude Corps项目在“人才培养”维度形成对标。
- **原文链接：** https://openai.com/index/openai-campus-network-student-club-interest-form/

---

## 4. 战略信号解读

### 4.1 技术优先级对比

| 维度 | Anthropic | OpenAI |
|------|-----------|--------|
| **模型能力** | 聚焦网络安全（Mythos Preview）、科学智能体（生物学、化学）、机器人控制（Project Fetch） | 聚焦通用智能体（GPT-5.6预览）、推理效率（Jalapeno芯片） |
| **安全策略** | “show, don't tell”——通过Project Glasswing谨慎发布高风险能力；发布大量安全研究建立可信度 | 安全研究相对低调，侧重通过API限制与内容政策管控风险 |
| **产品化路径** | 企业深度嵌入（DXC/TCS合作）、团队协作（Claude Tag）、垂直领域（科学Agent） | 消费者产品扩展（个人财务、广告）、开发者工具（Codex）、硬件垂直整合 |
| **生态建设** | Partner Network（IT服务合作伙伴）、Beneficial Deployments（社会价值）、Claude Corps（人才培养） | Campus Network（学生社区）、企业直销（Samsung）、广告生态 |

### 4.2 竞争态势分析

**Anthropic正在“重新定义AI公司的社会责任叙事”。** 通过Claude Corps（1.5亿美元人才培养）、Gates Foundation合作（2亿美元社会投资）、首尔办公室（亚太政策布局），Anthropic正在构建一套“技术向善”的叙事体系，其核心逻辑是：在监管压力日益增大的环境下，提前占据“负责任AI领导者”的道德高地，为未来的政策博弈积累筹码。

**OpenAI正在“全面商业化扩张”。** Jalapeno推理芯片、个人财务功能、ChatGPT广告测试、Codex团队定价——这些动作表明OpenAI正从“技术先驱”向“平台巨头”转型。广告测试的启动尤其值得注意：这意味着OpenAI正在探索“免费+广告”的商业模式，与Google、Meta在注意力经济领域形成直接竞争。

**企业市场成为核心战场。** Anthropic通过DXC/TCS覆盖全球关键行业系统，OpenAI通过Samsung Codex部署争夺头部企业客户。两家公司的IT服务合作伙伴策略高度趋同——Anthropic的Partner Network与OpenAI的企业直销团队将在受监管行业展开正面竞争。

### 4.3 对开发者和企业用户的潜在影响

**开发者层面：**
- **工具链竞争加剧：** Anthropic的Claude Code与OpenAI的Codex在智能编程赛道直接对标，双方的定价策略与功能迭代速度将决定开发者生态的归属。
- **Agents成为标配：** 两家公司均将Agents作为产品核心定位，开发者应预期API层面将出现更多面向工作流编排的工具与框架。
- **安全能力分化：** Anthropic在网络安全研究上的高调投入，可能使其成为“安全敏感型”开发者的首选平台。

**企业用户层面：**
- **受监管行业选择增多：** DXC/TCS合作意味着Claude在金融、医疗、政府等领域的合规支持将显著增强；OpenAI的Samsung合作则提供另一种企业AI路径。
- **成本结构变化：** Jalapeno芯片可能改变OpenAI API的定价结构；Claude Tag的团队协作功能可能催生新的企业协作范式。
- **供应链风险分散：** 两家公司均在推进硬件/合作伙伴多元化，企业客户应关注其供应链稳定性与地缘政治风险。

---

## 5. 值得关注的细节

### 5.1 新兴词汇与话题的首次出现

| 词汇/话题 | 出现位置 | 潜在信号 |
|-----------|----------|----------|
| **Claude Corps** | Anthropic News | “国家级fellowship”概念首次出现，暗示Anthropic正将“AI人才培养”提升至国家战略层面，可能为未来移民政策对话埋下伏笔 |
| **Project Glasswing** | Mythos Preview研究 | 首个专门针对“谨慎发布高风险模型”的系统性项目命名，标志着Anthropic安全策略的制度化 |
| **Claude Tag** | Anthropic News | “团队成员”而非“工具”的定位，暗示Anthropic正在重新定义AI助手的交互范式 |
| **Jalapeno** | OpenAI/Broadcom | OpenAI首个公开命名的自研推理芯片，芯片自研战略从幕后走向前台 |
| **GPT-5.6 Sol** | OpenAI Index | “Sol”命名惯例的引入，可能暗示GPT-5系列将采用与GPT-4不同的版本管理策略 |

### 5.2 密集发布主题分析

**Anthropic的“企业渗透”密集发布（6月11-12日）：** DXC与TCS两大IT服务巨头在48小时内相继宣布合作，这种发布节奏显然是精心策划的。Anthropic正在向市场传递“企业级AI落地已规模化”的信号，同时对OpenAI的企业业务形成战略压制。

**OpenAI的“商业化扩张”密集发布（6月26日）：** Jalapeno芯片、个人财务功能、广告测试、Codex定价——四项发布集中在同一天，涵盖硬件、产品、变现三个维度，表明OpenAI正在加速从“技术公司”向“平台公司”的转型节奏。

### 5.3 政策与合规动向

**Anthropic的“政策先行”策略：**
- 首尔办公室MOU的签署，将Anthropic与韩国政府AI安全机构绑定，为未来亚太市场准入奠定政策基础。
- Claude Corps的$150m投入，部分具有“主动合规”意味——在监管机构对AI就业影响担忧加剧的背景下，提前展示“AI红利共享”行动。

**OpenAI的广告测试：**
- 在欧盟AI法案（EU AI Act）正式实施的背景下，ChatGPT广告测试的时机选择值得玩味。OpenAI可能正在测试“广告变现”在欧洲监管框架下的可行性边界。

### 5.4 隐含的技术路线信号

**Anthropic对“确定性工具”的强调：** 在生物学Agent研究中，Anthropic明确指出“确定性检索工具是当前构建可靠Agent工作流的关键”。这一判断暗示Anthropic认为当前LLM的“不确定性”是制约企业级应用的核心瓶颈，其技术路线可能更侧重“LLM+确定性工具”的混合架构，而非单纯追求模型能力的提升。

**OpenAI的“硬件垂直整合”：** Jalapeno芯片的推出表明OpenAI正在复制Google/AWS的硬件路径。对于企业客户而言，这意味着OpenAI可能在未来提供更可控的成本结构与供应保障，但也意味着与NVIDIA等芯片厂商的关系可能发生变化。

---

**报告生成时间：** 2026年6月27日  
**数据来源：** Anthropic（claude.com / anthropic.com）、OpenAI（openai.com）官网抓取数据

---
*本日报由 [AI Agent Radar](https://github.com/yidasanqian/ai-agent-radar) 自动生成。*