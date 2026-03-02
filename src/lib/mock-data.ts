import { Article } from './types';

export const articles: Article[] = [
  // ── TELECOM & AI ──────────────────────────────────────────────────────────
  {
    id: 't1',
    title: 'NVIDIA and Global Telecom Giants Commit to Build 6G on AI-Native Platforms at MWC Barcelona',
    source: 'NVIDIA Newsroom',
    articleUrl: 'https://nvidianews.nvidia.com/news/nvidia-and-global-telecom-leaders-commit-to-build-6g-on-open-and-secure-ai-native-platforms',
    publishedAt: new Date(Date.now() - 24 * 3_600_000).toISOString(),
    summary: 'Deutsche Telekom, Ericsson, Nokia, and 8 other operators join NVIDIA to build open AI-native 6G networks.',
    categories: ['TELECOM_AI'],
    isHero: true,
    heatSignal: 'BREAKING',
    previewImageUrl: 'https://placehold.co/1200x500/0f2a4a/ffffff?text=MWC+2026+%7C+6G+AI-Native',
    body: `NVIDIA announced at Mobile World Congress a coalition with Deutsche Telekom, BT Group, Cisco, Ericsson, Nokia, SK Telecom, SoftBank, and T-Mobile to build the world's next generation of wireless networks on AI-native, open, and secure platforms.

The initiative commits to embedding artificial intelligence across the Radio Access Network (RAN), edge, and core infrastructure of 6G. Deutsche Telekom CEO Tim Höttges said: "With an open, intelligent and trusted 6G infrastructure, we are laying the foundation for the era of physical AI and unlocking new value for our customers, for industry and for society."

The initiative is designed to ensure 6G — expected commercially before the end of the decade — is software-defined, interoperable, and built for autonomous machines, vehicles, and sensors.

NVIDIA's involvement signals the company's ambition to extend its AI computing dominance into the telecommunications sector, where it sees GPU-accelerated AI as central to future network architectures. The partnership also explicitly targets open standards, positioning itself against proprietary vendor lock-in that has historically slowed 5G innovation.`,
  },
  {
    id: 't2',
    title: 'Ericsson Unveils "Agentic rApp as a Service" for AI-Driven Network Optimization via Natural Language',
    source: 'EE Times',
    articleUrl: 'https://www.eetimes.com/mwc-2026-telecom-high-stakes-bet-on-the-iq-era/',
    publishedAt: new Date(Date.now() - 48 * 3_600_000).toISOString(),
    summary: 'Ericsson launches an AWS-hosted agentic tool letting operators optimize networks using plain English commands.',
    categories: ['TELECOM_AI'],
    heatSignal: 'NEW',
    body: `At MWC 2026, Ericsson unveiled its Agentic rApp as a Service — a solution hosted on AWS that allows telecom operators to optimize networks using natural language commands. Rather than requiring engineers to navigate complex network management interfaces, operators can instruct the system in plain English and the AI agent executes the changes.

Ericsson's CTO Erik Ekudden emphasized that the company is doubling down on software independence, using its own custom silicon rather than NVIDIA GPUs, to avoid vendor lock-in. The move positions Ericsson as a provider of AI-native network management that is platform-agnostic and proprietary-silicon-first.

The system was demonstrated live at MWC, where a network engineer asked it to "reduce interference in the northern sector and prioritize latency-sensitive traffic" — and the agent executed a multi-step RAN configuration change autonomously within seconds.`,
  },
  {
    id: 't3',
    title: 'Nokia Demos AI Network Slicing with Agentic AI at MWC Barcelona 2026',
    source: 'IEEE ComSoc',
    articleUrl: 'https://techblog.comsoc.org/nokia-ai-slicing-mwc-2026',
    publishedAt: new Date(Date.now() - 23 * 3_600_000).toISOString(),
    summary: "Nokia's live demo combines AI network slicing with agentic AI to deliver intent-based, self-adapting services.",
    categories: ['TELECOM_AI'],
    body: `Nokia demonstrated live AI network slicing capabilities at MWC Barcelona 2026, combining its advanced network slicing technology with agentic AI to enable operators to deliver intent-based, dynamically adapting services.

Nokia's Chief Technology and AI Officer Pallavi Mahajan called it "a major milestone in the evolution of AI-native networks," noting that the system enables operators to describe the service outcome they want and the network configures itself accordingly. The demo ran on Nokia's own silicon and showed real-time SLA verification in partnership with Ookla.

The demonstration involved a simulated enterprise customer requesting a guaranteed 10ms latency slice for a factory automation application. The agentic system allocated resources, verified SLA compliance in real time, and automatically re-routed traffic when a simulated node failure occurred — all without human intervention.`,
  },
  {
    id: 't4',
    title: 'Deutsche Telekom and OpenAI Partnership Brings AI Directly into Network Operations and Customer Services',
    source: 'RCR Wireless News',
    articleUrl: 'https://rcrtech.com/rcrwirelessnews/telecom-and-ai-in-2026/',
    publishedAt: new Date(Date.now() - 5 * 24 * 3_600_000).toISOString(),
    summary: "Deutsche Telekom's multi-year OpenAI deal embeds AI into customer-facing services and live network operations.",
    categories: ['TELECOM_AI'],
    partialContent: true,
    body: `Deutsche Telekom has entered a multi-year partnership with OpenAI to bring AI capabilities directly into both customer-facing services and network operations. The deal, described as one of the most significant operator-AI lab partnerships in Europe, covers AI-assisted customer support, network anomaly detection, and predictive maintenance.`,
  },
  {
    id: 't5',
    title: 'Vodafone and Spirent Develop Automated AI Testing Platform for 5G Voice Core Rollouts in Europe',
    source: 'RCR Wireless News',
    articleUrl: 'https://rcrtech.com/rcrwirelessnews/telecom-and-ai-in-2026/',
    publishedAt: new Date(Date.now() - 10 * 24 * 3_600_000).toISOString(),
    summary: 'Vodafone co-develops an AI-driven software testing platform with Spirent to accelerate 5G SA rollouts across Europe.',
    categories: ['TELECOM_AI'],
    partialContent: true,
    body: `Vodafone and Spirent have co-developed an automated software testing platform designed to accelerate the rollout of software and services on Vodafone's 5G standalone (SA) voice core infrastructure across Europe.`,
  },

  // ── GENERAL AI ────────────────────────────────────────────────────────────
  {
    id: 'g1',
    title: 'Apple Partnering with Google to Bring 1.2 Trillion Parameter Gemini AI to a Reimagined Siri in 2026',
    source: 'Crescendo AI',
    articleUrl: 'https://www.crescendo.ai/news/latest-ai-news-and-updates',
    publishedAt: new Date(Date.now() - 24 * 3_600_000).toISOString(),
    summary: "Apple is rebuilding Siri on Google's Gemini model with on-screen awareness and cross-app integration.",
    categories: ['GENERAL_AI'],
    heatSignal: 'HOT',
    body: `Apple has officially announced that a completely reimagined, AI-powered version of Siri is set to debut in 2026. The new Siri will be context-aware, capable of on-screen awareness, and will integrate seamlessly across apps.

To power this transformation, Apple is partnering with Google to use its 1.2 trillion parameter Gemini AI model. The model will run on Apple's Private Cloud Compute infrastructure to maintain privacy standards. The update is targeted for a March 2026 release alongside iOS 26.4.

The move marks a significant shift for Apple, which has historically developed its AI capabilities in-house. Industry analysts interpret the deal as an acknowledgment that Apple's internal AI models have fallen behind frontier capabilities, and that speed-to-market on Siri's AI transformation outweighs the risks of depending on a competitor's model.`,
  },
  {
    id: 'g2',
    title: 'Anthropic Raises $30 Billion at $380 Billion Valuation as Claude Becomes Dominant Frontier Model of 2026',
    source: 'Marketing Profs',
    articleUrl: 'https://www.marketingprofs.com/opinions/2026/54358/ai-update-february-27-2026',
    publishedAt: new Date(Date.now() - 3 * 24 * 3_600_000).toISOString(),
    summary: "Claude emerges as the leading frontier model in early 2026, prompting Anthropic's $30B raise at a $380B valuation.",
    categories: ['GENERAL_AI'],
    body: `Anthropic's Claude has emerged as a dominant frontier model in early 2026, influencing financial markets, enterprise adoption, venture activity, and national security discussions. The company recently raised $30 billion at a reported $380 billion valuation.

Claude releases have triggered significant stock volatility across legal, cybersecurity, and financial data sectors. Government agencies and enterprise investors view the model as technically superior in complex reasoning and reliability, making it the go-to model for high-stakes deployments in regulated industries.

The funding round was led by a consortium of sovereign wealth funds and strategic technology investors. Anthropic stated that the capital will be used to scale training infrastructure, expand safety research, and accelerate Claude's deployment across enterprise platforms.`,
  },
  {
    id: 'g3',
    title: "Google DeepMind's Gemini 3.1 Pro Hits 77.1% on ARC-AGI-2 with 1 Million Token Context Window",
    source: 'LLM Stats',
    articleUrl: 'https://llm-stats.com/ai-news',
    publishedAt: new Date(Date.now() - 4 * 24 * 3_600_000).toISOString(),
    summary: 'Gemini 3.1 Pro scores 77.1% on ARC-AGI-2 with a 1M-token context window and full multimodal reasoning.',
    categories: ['GENERAL_AI'],
    body: `Google DeepMind's Gemini 3.1 Pro is now the most advanced Pro-tier model available, featuring a 1 million token context window and 77.1% performance on ARC-AGI-2.

The model supports multimodal reasoning across text, images, audio, video, and code, and is available via the Gemini API, Vertex AI, and Google's Antigravity platform. The result positions Gemini 3.1 Pro as the leading general-purpose frontier model by benchmark performance, ahead of competitors on this specific evaluation.

The 1 million token context window enables the model to process entire codebases, lengthy legal documents, or multi-hour transcripts in a single prompt. Google is positioning this capability as a key differentiator for enterprise customers handling large document workflows.`,
  },
  {
    id: 'g4',
    title: 'DeepSeek Blocks Nvidia and AMD from Early Access to V4 Model, Gives Huawei Exclusive Optimization Time',
    source: 'Marketing Profs',
    articleUrl: 'https://www.marketingprofs.com/opinions/2026/54358/ai-update-february-27-2026',
    publishedAt: new Date(Date.now() - 3 * 24 * 3_600_000).toISOString(),
    summary: 'DeepSeek denied Nvidia and AMD early V4 access, handing Huawei exclusive pre-release optimization — raising geopolitical alarms.',
    categories: ['GENERAL_AI'],
    heatSignal: 'HOT',
    body: `Chinese AI lab DeepSeek reportedly withheld early access to its upcoming V4 model from Nvidia and AMD, instead granting domestic suppliers such as Huawei advance optimization time.

Industry norms typically involve sharing pre-release models with major hardware partners to ensure performance tuning before launch. A US official also alleged the company trained a recent system on Nvidia's advanced Blackwell chips despite active export controls.

The move highlights deepening geopolitical competition in AI infrastructure and signals that Chinese open-source models are now directly entangled in chip access disputes. US lawmakers have called for a review of export control enforcement following the allegations.`,
  },
  {
    id: 'g5',
    title: 'EU Council Moves to Enable AI Gigafactories as Part of New EuroHPC Mandate Expansion',
    source: 'Fladgate',
    articleUrl: 'https://www.fladgate.com/insights/ai-round-up-february-2026',
    publishedAt: new Date(Date.now() - 20 * 24 * 3_600_000).toISOString(),
    summary: "The EU Council expanded its EuroHPC mandate to build large-scale AI gigafactories and add a quantum technologies pillar.",
    categories: ['GENERAL_AI'],
    body: `The Council of the EU adopted an amendment to the EuroHPC Joint Undertaking regulation, expanding its mandate to develop large-scale AI gigafactories and adding a quantum technologies pillar.

The move is part of Europe's broader strategy to build sovereign AI infrastructure that is independent of US and Chinese hyperscalers. The EU's AI Act transparency rules for AI-generated content are also advancing, with a draft Code of Practice published and a second draft expected by March, targeting finalization by June 2026.

The AI gigafactories initiative would see purpose-built compute clusters deployed across member states, prioritizing open-access research use and European enterprise deployment.`,
  },
  {
    id: 'g6',
    title: "NASA's Perseverance Rover Completes First AI-Planned Drive on Mars Using Vision-Capable AI",
    source: 'ScienceDaily',
    articleUrl: 'https://www.sciencedaily.com/news/computers_math/artificial_intelligence/',
    publishedAt: new Date(Date.now() - 30 * 24 * 3_600_000).toISOString(),
    summary: "Perseverance made history driving across Mars on routes planned entirely by AI, not human operators, for the first time.",
    categories: ['GENERAL_AI'],
    body: `NASA's Perseverance rover has made history by completing the first AI-planned drive on Mars. Rather than relying on human operators to chart its route, a vision-capable AI analyzed terrain data and planned the drive autonomously.

The system used the same images and terrain information normally reviewed by human planners, but executed the route selection end-to-end without human intervention. The milestone represents a significant step toward autonomous planetary exploration and demonstrates AI's readiness for mission-critical decision-making in remote, communication-delayed environments.

The capability is especially significant given the communication delay between Earth and Mars — which can range from 3 to 22 minutes depending on orbital positions. Fully autonomous navigation allows the rover to act on opportunities and navigate hazards in real time rather than waiting for ground control instructions.`,
  },
];

export const dailyBriefing =
  "Today at MWC Barcelona: NVIDIA leads Deutsche Telekom, Ericsson, and Nokia in a global 6G AI-native network commitment — while Apple prepares to rebuild Siri on Google's Gemini model.";

export const lastUpdated = new Date().toISOString();
