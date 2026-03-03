import { Article, Section } from './types';

export const articles: Article[] = [
  // ── HERO ──────────────────────────────────────────────────────────────────
  {
    id: 't1',
    title: 'NVIDIA, Deutsche Telekom and 10 Global Operators Commit to Build the World\'s 6G on AI-Native Platforms',
    source: 'NVIDIA Newsroom',
    author: 'NVIDIA Communications',
    articleUrl: 'https://nvidianews.nvidia.com/news/nvidia-and-global-telecom-leaders-commit-to-build-6g-on-open-and-secure-ai-native-platforms',
    publishedAt: new Date(Date.now() - 24 * 3_600_000).toISOString(),
    summary: 'The biggest names in global telecom just bet their 6G future on open, AI-native infrastructure — together.',
    categories: ['TELECOM_AI'],
    isHero: true,
    heatSignal: 'BREAKING',
    previewImageUrl: '/images/telecom-ai/nvidia-6g-hero.png',
    fallbackImageUrl: 'https://placehold.co/800x450/1a1a2e/ffffff?text=6G+AI+Native+MWC+2026',
    body: `At Mobile World Congress Barcelona, NVIDIA announced a coalition with Deutsche Telekom, BT Group, Cisco, Ericsson, Nokia, SK Telecom, SoftBank, and T-Mobile to build the next generation of wireless networks on AI-native, open, and secure platforms. The initiative commits to embedding artificial intelligence across the Radio Access Network (RAN), edge, and core infrastructure of 6G networks expected commercially before the end of the decade.

Deutsche Telekom CEO Tim Höttges called it "the foundation for the era of physical AI," while BT Group CEO Allison Kirkby emphasised that open and trustworthy AI-native platforms would simplify 6G while unlocking powerful new capabilities. The AI-RAN Alliance — which now counts over 130 participating companies — underpins the technical direction of the initiative.

The announcement is significant not just for its scale but its timing. Coming at the world's largest telecom event, it signals that the industry has moved beyond debating whether AI belongs in networks to deciding what kind of AI architecture will define the next decade.`,
  },

  // ── TELECOM & AI ──────────────────────────────────────────────────────────
  {
    id: 't2',
    title: 'Ericsson Unveils Agentic rApp at MWC — Operators Can Now Manage Networks in Plain English',
    source: 'EE Times',
    articleUrl: 'https://www.eetimes.com/mwc-2026-telecom-high-stakes-bet-on-the-iq-era/',
    publishedAt: new Date(Date.now() - 48 * 3_600_000).toISOString(),
    summary: "Ericsson's AWS-hosted agentic tool lets operators type natural language commands to optimize live network performance.",
    categories: ['TELECOM_AI'],
    heatSignal: 'NEW',
    previewImageUrl: '/images/telecom-ai/ericsson-agentic-rapp.png',
    fallbackImageUrl: 'https://placehold.co/600x340/0a3d62/ffffff?text=Ericsson+AI+RAN',
    body: `Ericsson launched its Agentic rApp as a Service at MWC 2026, hosted on AWS, allowing telecom network engineers to optimize radio access networks using everyday natural language rather than complex management interfaces. The product represents a significant shift in how network operations are conducted — instead of navigating dense configuration screens, an operator can write an instruction like "reduce interference on the northern cluster during peak hours" and the AI executes it.

CTO Erik Ekudden stressed that Ericsson deliberately avoided deep architectural reliance on NVIDIA GPUs, instead building on its own custom silicon and an Intel agreement to maintain software stack control and avoid vendor lock-in. This positions Ericsson's AI network management as independent, proprietary, and platform-agnostic.`,
  },
  {
    id: 't3',
    title: "Nokia's AI Network Slicing Demo at MWC Lets Networks Configure Themselves by Intent",
    source: 'IEEE ComSoc Technology Blog',
    articleUrl: 'https://techblog.comsoc.org/nokia-ai-slicing-mwc-2026',
    publishedAt: new Date(Date.now() - 23 * 3_600_000).toISOString(),
    summary: 'Nokia combines agentic AI with live 5G network slicing so operators can define the outcome they want — and the network delivers it.',
    categories: ['TELECOM_AI'],
    heatSignal: 'NEW',
    previewImageUrl: '/images/telecom-ai/nokia-ai-slicing.png',
    fallbackImageUrl: 'https://placehold.co/600x340/0a3d62/ffffff?text=Nokia+AI+Slicing',
    body: `Nokia demonstrated live AI-driven network slicing at its MWC Barcelona 2026 stand, showing how agentic AI can translate operator intent into autonomous network configuration. Rather than manually setting up slices for different service levels, operators describe the performance outcome they want — a guaranteed video streaming quality for enterprise clients, for instance — and the AI configures and monitors the slice in real time.

Nokia's Chief Technology and AI Officer Pallavi Mahajan described it as "a major milestone in the evolution of AI-native networks." The demonstration ran in partnership with Ookla, using their specialized Speedtest tooling to verify SLA compliance in real time.`,
  },
  {
    id: 't4',
    title: "Deutsche Telekom's Multi-Year OpenAI Deal Moves AI from Backend Tool to Front-Line Infrastructure",
    source: 'RCR Wireless News',
    articleUrl: 'https://rcrtech.com/rcrwirelessnews/telecom-and-ai-in-2026/',
    publishedAt: new Date(Date.now() - 5 * 24 * 3_600_000).toISOString(),
    summary: "Deutsche Telekom embeds OpenAI directly into customer services and live network operations — one of Europe's most significant operator-AI lab partnerships.",
    categories: ['TELECOM_AI'],
    heatSignal: 'HOT',
    previewImageUrl: '/images/telecom-ai/deutsche-telekom-openai.png',
    fallbackImageUrl: 'https://placehold.co/600x340/0a3d62/ffffff?text=Deutsche+Telekom+OpenAI',
    body: `Deutsche Telekom has formalised a multi-year partnership with OpenAI, moving AI from a behind-the-scenes capability to a core part of both its customer-facing products and network operations. The deal covers AI-assisted customer support automation, real-time network anomaly detection, and predictive infrastructure maintenance.

Industry analysts have described it as one of the most significant operator-AI lab partnerships in Europe, noting that it sets a precedent for how telcos can integrate frontier AI without rebuilding their entire stack. Deutsche Telekom joins a growing group of European operators that have moved from AI experimentation to full operational deployment with major AI labs.`,
  },
  {
    id: 't5',
    title: 'Vodafone and Spirent Build AI-Powered Automated Testing Platform for 5G Core Rollouts Across Europe',
    source: 'RCR Wireless News',
    articleUrl: 'https://rcrtech.com/rcrwirelessnews/telecom-and-ai-in-2026/',
    publishedAt: new Date(Date.now() - 10 * 24 * 3_600_000).toISOString(),
    summary: "Vodafone's new AI testing platform cuts manual QA cycles and accelerates 5G standalone service deployment across European markets.",
    categories: ['TELECOM_AI'],
    previewImageUrl: '/images/telecom-ai/vodafone-spirent-5g.png',
    fallbackImageUrl: 'https://placehold.co/600x340/0a3d62/ffffff?text=Vodafone+5G+AI',
    body: `Vodafone and testing specialist Spirent have jointly developed an AI-driven automated software testing platform designed to speed up deployment on Vodafone's 5G standalone voice core infrastructure across Europe. The platform uses AI to automate quality assurance processes that previously required significant manual engineering effort, reducing the cycle time between software releases and live network deployment.

The collaboration reflects a broader industry movement toward fully automated network software validation, where AI handles regression testing, performance validation, and release sign-off without human bottlenecks.`,
  },
  {
    id: 't6',
    title: "MasOrange Makes 30% of Its 5G Network O-RAN Ready with AI Automation from Ericsson",
    source: 'RCR Tech',
    articleUrl: 'https://rcrtech.com/rcrwirelessnews/telecom-and-ai-in-2026/',
    publishedAt: new Date(Date.now() - 12 * 24 * 3_600_000).toISOString(),
    summary: "Spain's largest mobile operator hits a major O-RAN milestone using AI-driven automation to boost efficiency and service quality.",
    categories: ['TELECOM_AI'],
    previewImageUrl: '/images/telecom-ai/masorange-oran.png',
    fallbackImageUrl: 'https://placehold.co/600x340/0a3d62/ffffff?text=MasOrange+O-RAN',
    body: `MasOrange, Spain's largest mobile network operator, has brought 30% of its 5G network to O-RAN readiness, integrating AI-driven automation from Ericsson to improve network efficiency and accelerate next-generation service delivery. The milestone positions MasOrange as one of Europe's most advanced O-RAN adopters and demonstrates that open radio access network architectures — long promised but slow to scale — are now moving into mainstream commercial deployment.

The AI automation layer handles traffic optimization, interference mitigation, and predictive capacity planning, reducing manual intervention in day-to-day network operations.`,
  },

  // ── GENERAL AI ────────────────────────────────────────────────────────────
  {
    id: 'g1',
    title: "Apple Is Rebuilding Siri from Scratch on Google's 1.2 Trillion Parameter Gemini Model",
    source: 'Crescendo AI',
    articleUrl: 'https://www.crescendo.ai/news/latest-ai-news-and-updates',
    publishedAt: new Date(Date.now() - 24 * 3_600_000).toISOString(),
    summary: 'Apple abandons its in-house Siri AI and partners with Google, targeting a context-aware, cross-app assistant launching with iOS 26.4 in March.',
    categories: ['GENERAL_AI'],
    heatSignal: 'HOT',
    previewImageUrl: '/images/general-ai/apple-siri-gemini.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=Apple+Siri+Gemini',
    body: `Apple has officially confirmed plans to release a completely rebuilt version of Siri in 2026, powered by Google's 1.2 trillion parameter Gemini AI model. The new Siri will feature on-screen awareness, understanding what the user is looking at across apps, and will be capable of taking actions across the full iOS ecosystem without switching between applications.

To maintain Apple's privacy standards, the model runs on Apple's own Private Cloud Compute infrastructure rather than Google's servers. The update is targeted for March 2026 alongside iOS 26.4. The move marks a historic shift for Apple, which has resisted partnering for its core intelligence layer since Siri launched in 2011.`,
  },
  {
    id: 'g2',
    title: "Google DeepMind's Gemini 3.1 Pro Achieves 77.1% on ARC-AGI-2 with a 1 Million Token Context Window",
    source: 'LLM Stats',
    articleUrl: 'https://llm-stats.com/ai-news',
    publishedAt: new Date(Date.now() - 4 * 24 * 3_600_000).toISOString(),
    summary: 'Gemini 3.1 Pro now leads on the ARC-AGI-2 benchmark with full multimodal reasoning across text, image, audio, video, and code.',
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/gemini-3-1-pro.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=Gemini+3.1+Pro',
    body: `Google DeepMind has released Gemini 3.1 Pro, establishing it as the highest-performing Pro-tier AI model as of February 2026. The model achieves 77.1% on ARC-AGI-2, the evaluation widely considered the most demanding reasoning benchmark currently in use. It features a 1 million token context window — large enough to hold entire codebases, books, or months of conversation history in a single session.

Full multimodal reasoning is supported across text, images, audio, video, and code. Access is available via the Gemini API, Vertex AI, and Google's Antigravity developer platform.`,
  },
  {
    id: 'g3',
    title: 'Anthropic Raises $30 Billion at $380 Billion Valuation as Claude Becomes 2026\'s Dominant Frontier Model',
    source: 'Marketing Profs',
    articleUrl: 'https://www.marketingprofs.com/opinions/2026/54358/ai-update-february-27-2026',
    publishedAt: new Date(Date.now() - 3 * 24 * 3_600_000).toISOString(),
    summary: "Claude's lead in complex reasoning and reliability is reshaping enterprise adoption, venture activity, and national security decisions globally.",
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/anthropic-30b-valuation.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=Anthropic+Claude',
    body: `Anthropic has completed a $30 billion funding round at a reported $380 billion valuation, cementing Claude's position as the leading frontier AI model in early 2026. The raise follows a period in which Claude releases have triggered notable stock volatility across legal, cybersecurity, and financial data sectors — industries where Claude's reasoning capabilities have demonstrated measurable advantages.

Government agencies and enterprise investors increasingly view Claude as the go-to model for high-stakes, regulated deployments where reliability matters more than raw output speed. The funding will support Anthropic's continued model development, enterprise product expansion, and safety research.`,
  },
  {
    id: 'g4',
    title: 'EU Moves to Enable AI Gigafactories as Part of Expanded EuroHPC Mandate',
    source: 'Fladgate',
    articleUrl: 'https://www.fladgate.com/insights/ai-round-up-february-2026',
    publishedAt: new Date(Date.now() - 20 * 24 * 3_600_000).toISOString(),
    summary: "Europe's AI sovereignty push accelerates as the EU Council expands its supercomputing mandate to build continent-scale AI infrastructure.",
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/eu-ai-gigafactories.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=EU+AI+Policy',
    body: `The Council of the EU adopted a significant amendment to the EuroHPC Joint Undertaking regulation, expanding its mandate to develop large-scale AI gigafactories and adding a quantum technologies pillar. The move is a key piece of Europe's broader strategy to build sovereign AI infrastructure that reduces dependence on US and Chinese hyperscalers.

Separately, the European Commission released its first draft Code of Practice on transparency for AI-generated content under the AI Act, requiring providers to mark synthetic content in machine-readable formats. A second draft is expected by March 2026, with the full Code targeting finalization by June.`,
  },
  {
    id: 'g5',
    title: "UK Regulators Demand Answers from Elon Musk's xAI Over Grok Data Practices",
    source: 'Fladgate',
    articleUrl: 'https://www.fladgate.com/insights/ai-round-up-february-2026',
    publishedAt: new Date(Date.now() - 20 * 24 * 3_600_000).toISOString(),
    summary: "The UK's ICO and Ofcom formally demand information from xAI about how Grok collects and processes user data.",
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/xai-grok-uk.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=xAI+Grok+Regulation',
    body: `The UK's Information Commissioner's Office and communications regulator Ofcom have jointly issued a formal demand to Elon Musk's AI lab xAI for detailed information about its Grok AI model's data practices. The regulators are scrutinising how Grok collects, stores, and uses data from X platform users, and whether those practices comply with UK data protection law.

The action is part of a broader European trend of regulators moving from general oversight of AI companies to specific, targeted inquiries into individual models. It follows similar actions by Irish regulators against Meta's AI products and signals that the era of light-touch AI regulation in Europe is firmly over.`,
  },
  {
    id: 'g6',
    title: 'DeepSeek Blocks Nvidia and AMD from V4 Model Access, Gives Huawei Exclusive Optimization Time',
    source: 'Marketing Profs',
    articleUrl: 'https://www.marketingprofs.com/opinions/2026/54358/ai-update-february-27-2026',
    publishedAt: new Date(Date.now() - 3 * 24 * 3_600_000).toISOString(),
    summary: "China's DeepSeek bypasses US chip partners entirely for its flagship model release, handing Huawei a strategic head start.",
    categories: ['GENERAL_AI'],
    heatSignal: 'HOT',
    previewImageUrl: '/images/general-ai/deepseek-v4.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=DeepSeek+V4',
    body: `Chinese AI lab DeepSeek has broken industry convention by withholding early access to its upcoming V4 model from Nvidia and AMD, instead granting Huawei and other domestic chip suppliers exclusive pre-release optimization time. The move is significant because standard pre-release access allows hardware partners to tune their drivers, compilers, and performance layers before a model goes live — giving their hardware a measurable advantage at launch.

By cutting out US suppliers, DeepSeek is signalling a deliberate decoupling from Western AI infrastructure. A US official also alleged the company trained recent systems on Nvidia's Blackwell chips despite active export controls, adding a geopolitical dimension to what might otherwise appear a purely commercial decision.`,
  },
  {
    id: 'g7',
    title: 'Meta Embeds Manus AI Directly into Ads Manager — Autonomous Agents Now Inside Advertiser Workflows',
    source: 'Marketing Profs',
    articleUrl: 'https://www.marketingprofs.com/opinions/2026/54358/ai-update-february-27-2026',
    publishedAt: new Date(Date.now() - 3 * 24 * 3_600_000).toISOString(),
    summary: 'Meta moves AI agents from standalone demos into core ad infrastructure, letting Manus run research, reports, and campaign analysis autonomously.',
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/meta-manus-ads.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=Meta+Manus+AI',
    body: `Meta has embedded Manus AI, its autonomous agent platform acquired in late 2025, directly into the Ads Manager navigation interface. Rather than positioning Manus as a separate product requiring context switching, Meta integrated it as a native capability within the tool advertisers already use daily.

Manus is designed to execute multi-step tasks — market research, competitor analysis, report generation, and campaign optimisation — without requiring manual instruction at each step. The integration is Meta's clearest signal yet that it plans to demonstrate measurable ROI from its substantial AI infrastructure investment by making agents part of day-to-day advertiser workflows.`,
  },
  {
    id: 'g8',
    title: "NVIDIA's Vera Rubin Platform Unveiled at CES 2026 — Designed for Trillion-Parameter Model Scale",
    source: 'Crescendo AI',
    articleUrl: 'https://www.crescendo.ai/news/latest-ai-news-and-updates',
    publishedAt: new Date(Date.now() - 60 * 24 * 3_600_000).toISOString(),
    summary: "Vera Rubin is NVIDIA's post-Blackwell architecture, engineered specifically for the memory bandwidth demands of the next generation of frontier models.",
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/nvidia-vera-rubin.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=NVIDIA+Vera+Rubin',
    body: `NVIDIA officially unveiled Vera Rubin, its next flagship AI compute platform, at CES 2026. Following the Blackwell architecture, Rubin introduces fundamental improvements in processing power and memory bandwidth, specifically engineered to handle the massive computational requirements of trillion-parameter AI models.

The platform is designed not just for training but for inference at scale — addressing the growing industry challenge of deploying large models efficiently in production. NVIDIA says Rubin will be available to cloud providers and enterprise customers in late 2026, with the full product family expanding through 2027.`,
  },
  {
    id: 'g9',
    title: 'TSMC Posts Record Profits as AI Chip Demand Surges — $165 Billion US Investment Planned',
    source: 'Fladgate',
    articleUrl: 'https://www.fladgate.com/insights/ai-round-up-february-2026',
    publishedAt: new Date(Date.now() - 20 * 24 * 3_600_000).toISOString(),
    summary: "The world's dominant chip foundry is doubling down on US manufacturing with record capex as AI-driven demand shows no signs of slowing.",
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/tsmc-record-profits.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=TSMC+AI+Chips',
    body: `Taiwan Semiconductor Manufacturing Company reported record profitability in its latest quarterly results, driven entirely by surging demand for AI chips. TSMC is committing $165 billion to US expansion, adding fabs and advanced packaging facilities in Arizona.

Management has guided for robust 2026 revenue growth and raised capital expenditure to between $52 and $56 billion for the year — a 27 to 37% year-over-year increase. The company has allocated 60 to 80% of that capex to advanced process nodes, where capacity remains extremely tight against continued AI demand from NVIDIA, Apple, AMD, and others.`,
  },
  {
    id: 'g10',
    title: "NASA's Perseverance Rover Completes First Fully AI-Planned Drive on Mars — No Human Input Required",
    source: 'ScienceDaily',
    articleUrl: 'https://www.sciencedaily.com/news/computers_math/artificial_intelligence/',
    publishedAt: new Date(Date.now() - 30 * 24 * 3_600_000).toISOString(),
    summary: 'For the first time, an AI planned and executed a complete Mars rover drive without any human operators in the loop.',
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/nasa-perseverance-ai.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=NASA+AI+Mars',
    body: `NASA's Perseverance rover has completed a landmark autonomous drive on Mars, planned entirely by a vision-capable AI without any human operator involvement. The system analysed the same terrain images and hazard data normally reviewed by human mission planners, generated a safe and efficient route, and executed the drive end-to-end.

The milestone represents a significant step toward autonomous planetary exploration — critical as future missions push deeper into the solar system where communication delays make real-time human control impractical. Engineers at NASA's Jet Propulsion Laboratory confirmed the drive completed without incident and that the AI's route selection was comparable in quality to human-planned drives.`,
  },
  {
    id: 'g11',
    title: 'Researchers Test AI Against 100,000 Humans on Creativity — AI Wins on Fluency, Humans Win on Originality',
    source: 'ScienceDaily',
    articleUrl: 'https://www.sciencedaily.com/news/computers_math/artificial_intelligence/',
    publishedAt: new Date(Date.now() - 35 * 24 * 3_600_000).toISOString(),
    summary: 'The largest ever human-AI creativity study finds generative AI outperforms average humans on speed and volume — but falls short on truly novel ideas.',
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/ai-creativity-study.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=AI+vs+Human+Creativity',
    body: `A landmark study comparing more than 100,000 people with today's most advanced generative AI systems has delivered a nuanced result for the ongoing debate about machine creativity. Models like GPT-4 demonstrated strong performance on standard creativity tests — generating more ideas, faster, with greater variety than the average human participant.

However, the study found that the most genuinely original and unexpected ideas still came from human participants, particularly those with domain expertise. Researchers noted that AI creativity tends toward recombination of existing patterns rather than conceptual breakthroughs, suggesting that the most powerful creative use of AI may be as a collaborator that accelerates human thinking rather than replaces it.`,
  },
  {
    id: 'g12',
    title: 'Anthropic Launches Enterprise Plugins That Let Claude Act Directly Inside Excel, PowerPoint, Gmail, and Drive',
    source: 'Marketing Profs',
    articleUrl: 'https://www.marketingprofs.com/opinions/2026/54358/ai-update-february-27-2026',
    publishedAt: new Date(Date.now() - 3 * 24 * 3_600_000).toISOString(),
    summary: "Claude can now complete multi-step tasks autonomously inside enterprise software — not just suggest them. Anthropic targets OpenAI's enterprise agent platform directly.",
    categories: ['GENERAL_AI'],
    heatSignal: 'NEW',
    previewImageUrl: '/images/general-ai/anthropic-enterprise-plugins.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=Anthropic+Enterprise+Plugins',
    body: `Anthropic has introduced job-specific enterprise plugins that allow Claude to act directly within tools like Excel, PowerPoint, Google Drive, Gmail, and other connected business systems. Rather than generating instructions for users to execute manually, Claude now completes multi-step actions autonomously once prompted — building a spreadsheet, drafting a presentation, or organising email threads without step-by-step human guidance.

Enterprise users can design and train custom plugins for their specific business units, making advanced functionality accessible to non-technical team members. The move positions Anthropic as a central AI operating layer for enterprise workflows, in direct competition with OpenAI's emerging corporate agent platform.`,
  },
  {
    id: 'g13',
    title: 'Google Launches Shopping Ads Inside AI Mode — Sponsored Placements Now Appear in Conversational Search Responses',
    source: 'Marketing Profs',
    articleUrl: 'https://www.marketingprofs.com/opinions/2026/54358/ai-update-february-27-2026',
    publishedAt: new Date(Date.now() - 14 * 24 * 3_600_000).toISOString(),
    summary: 'Google monetises its AI Mode conversational search — already used by 75 million daily users — by embedding sponsored placements directly into AI-generated answers.',
    categories: ['GENERAL_AI'],
    previewImageUrl: '/images/general-ai/google-ai-mode-shopping.png',
    fallbackImageUrl: 'https://placehold.co/600x340/1a1a2e/ffffff?text=Google+AI+Mode+Ads',
    body: `Google has launched a new shopping ad format within AI Mode, its conversational search experience which now reaches more than 75 million daily users. Sponsored placements appear inside AI-generated responses at natural product discovery moments — when a user asks for recommendations, comparisons, or purchase guidance.

The rollout integrates with Google's Universal Commerce Protocol and Gemini-powered advertising tools. Longer, more conversational queries in AI Mode provide richer intent signals than traditional keyword searches, which Google says allows for more precise ad delivery at the point of decision. The move marks a significant step in Google's effort to prove that conversational AI search can be at least as monetisable as its traditional search business.`,
  },
];

export const dailyBriefing =
  'Today: 6G goes AI-native at MWC. Apple rebuilds Siri on Gemini. DeepSeek blocks Nvidia.';

export const lastUpdated = new Date().toISOString();

// Articles shown in the hero carousel (most prominent stories)
export const heroArticleIds = ['t1', 'g1', 'g3', 't2'];

export const sections: Section[] = [
  {
    id: 'models-research',
    label: 'Models & Research',
    accentClass: 'bg-emerald-500',
    labelColorClass: 'text-emerald-600 dark:text-emerald-400',
    articleIds: ['g1', 'g2', 'g3', 'g7'],
  },
  {
    id: 'policy-regulation',
    label: 'AI Policy & Regulation',
    accentClass: 'bg-amber-500',
    labelColorClass: 'text-amber-600 dark:text-amber-400',
    articleIds: ['g4', 'g5', 'g8', 'g9'],
  },
  {
    id: 'telecom-ai',
    label: 'Telecom & AI',
    accentClass: 'bg-blue-500',
    labelColorClass: 'text-blue-600 dark:text-blue-400',
    articleIds: ['t2', 't3', 't4', 't5'],
  },
];
