export type CapabilityCategory = "ai" | "products" | "data" | "systems" | "research"

export type ProjectTier = "flagship" | "compact" | "experience"

export type ProjectStatus =
  | "Live"
  | "Working prototype"
  | "Research"
  | "Private"
  | "Demo"
  | "Archived"

export type CaseStudySectionType =
  | "problem"
  | "context"
  | "role"
  | "solution"
  | "architecture"
  | "implementation"
  | "hardParts"
  | "results"
  | "proof"
  | "technology"

export interface Metric {
  value: string
  label: string
  note?: string
  // DRAFT flags metrics that need founder confirmation before launch
  draft?: boolean
}

export interface EvidenceItem {
  type: "Live" | "Demo" | "Case study" | "Research" | "Private" | "Repository" | "Evaluation"
  label: string
  href?: string
}

export interface ArchitectureNode {
  id: string
  label: string
  detail?: string
}

export interface ArchitectureFlow {
  title: string
  nodes: ArchitectureNode[]
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  year: string
  tier: ProjectTier
  categories: CapabilityCategory[]
  tags: string[]
  status: ProjectStatus
  // Quiet one-line context shown inside the case study only — not on cards
  contextNote?: string
  role?: string
  heroImage?: string
  heroAlt?: string
  gallery?: GalleryImage[]
  liveUrl?: string
  featured?: boolean
  featuredOrder?: number
  order: number
  // Case-study body — only rendered for flagship tier
  problem?: string[]
  context?: string[]
  roleDetail?: string[]
  solution?: string[]
  architecture?: ArchitectureFlow
  architectureCaption?: string
  implementation?: string[]
  hardParts?: { title: string; body: string }[]
  results?: { text: string; metrics?: Metric[] }
  proof?: EvidenceItem[]
  technologies?: string[]
  // True while copy still needs founder factual review
  draft?: boolean
}

export const projects: Project[] = [
  {
    slug: "fire-show",
    title: "FireShow",
    tagline: "AI-powered fire risk prediction and computer vision detection.",
    description:
      "An end-to-end connected safety system combining IoT sensors, edge devices, computer vision and a mobile application for real-time fire risk monitoring and flame detection.",
    year: "2026",
    tier: "flagship",
    categories: ["ai", "systems", "products"],
    tags: ["AI", "Computer Vision", "Connected Systems", "IoT", "Flutter", "ESP32"],
    status: "Working prototype",
    contextNote:
      "Developed internally as an experimental connected-safety system.",
    role: "Designed and built the full system — hardware, firmware, ML, backend and mobile app.",
    heroImage: "/project_screenshots/fireshow/Device Mockup (1).png",
    heroAlt:
      "FireShow mobile app overview screen showing ML fusion risk score, zones, live temperature, humidity, CO and smoke readings",
    gallery: [
      {
        src: "/project_screenshots/fireshow/vision_fallback.png",
        alt: "FireShow computer vision flame detection on a live camera frame with bounding boxes and confidence scores on an ESP32-CAM feed",
        caption: "Vision fallback detection on an ESP32-CAM frame (score 0.99).",
      },
      {
        src: "/project_screenshots/fireshow/circuit_plan.png",
        alt: "FireShow hardware schematic showing ESP32 DevKit wired to MQ-7 carbon monoxide sensors, temperature and humidity sensor, buzzer, voltage regulator and battery pack",
        caption: "Sensor node: ESP32, dual MQ-7 CO sensors, RHT sensor, buzzer and power regulation.",
      },
      {
        src: "/project_screenshots/fireshow/fireshow_home_mockup.png",
        alt: "FireShow login screen on a mobile phone mockup",
        caption: "Mobile application sign-in.",
      },
      {
        src: "/project_screenshots/fireshow/readings_mockup.png",
        alt: "FireShow app displaying sensor trend charts for temperature, humidity, CO level and hydrocarbon readings",
        caption: "Live sensor trends with coloured sparklines.",
      },
      {
        src: "/project_screenshots/fireshow/logo_snap.png",
        alt: "FireShow brand splash screen with flame logo on a dark green background",
        caption: "Product identity.",
      },
    ],
    featured: true,
    featuredOrder: 1,
    order: 1,
    problem: [
      "Fire still causes significant loss of life and property, and early warning often depends on standalone smoke alarms that give no context, no remote visibility and no way to understand risk before an event.",
      "Existing low-cost solutions tend to be either single-sensor alarms with no intelligence, or cloud-heavy surveillance systems that are expensive, hard to deploy and useless when connectivity drops.",
      "The useful problem sits between those extremes: give a space continuous multi-sensor awareness, local intelligence that works offline, and a clear interface that tells a person what to do — monitor, investigate or evacuate.",
    ],
    context: [
      "Built as an internal Polymath experiment to explore how far a single engineer can push a connected-safety system when hardware constraints, unreliable connectivity and on-device ML are treated as first-class design inputs rather than afterthoughts.",
    ],
    roleDetail: [
      "Architected the end-to-end system: sensor hardware selection and wiring, ESP32 firmware, feature pipeline, risk-scoring model, computer vision fallback detection, backend services and the Flutter mobile application.",
      "Implemented the ML fusion layer that combines temperature, humidity, CO and hydrocarbon readings into a single risk score with an action recommendation (monitor / investigate / escalate).",
      "Built the vision fallback path so flame detection still works when the primary sensor model is uncertain — demonstrated at score 0.99 on a live ESP32-CAM frame.",
      "Designed zone-based monitoring, alerting and history so a deployment can scale from one room to a multi-zone facility.",
    ],
    solution: [
      "A deployed ESP32 sensor node reads temperature, humidity, carbon monoxide (dual MQ-7) and hydrocarbon/gas signals, fuses them into a risk score on-device and raises a local buzzer alarm independent of the network.",
      "An ESP32-CAM provides a visual channel. When sensor fusion is inconclusive, a colour/heuristic vision fallback scores frames for flame appearance and surfaces detections in the app with bounding boxes and confidence.",
      "A Flutter application gives operators a live overview: ML fusion score, zone list, live readings, risk trend over time, alert history with frames, and per-device status — designed to keep working through intermittent connectivity.",
      "Everything is zone-aware and org-scoped so multiple devices and locations can be monitored from one interface without mixing contexts.",
    ],
    architecture: {
      title: "FireShow system flow",
      nodes: [
        { id: "sensors", label: "Sensors", detail: "ESP32 · MQ-7 ×2 · RHT · CAM" },
        { id: "edge", label: "Edge fusion", detail: "Feature pipeline · risk score" },
        { id: "vision", label: "Vision fallback", detail: "Flame detection on CAM frames" },
        { id: "backend", label: "Backend", detail: "Devices · zones · alerts · history" },
        { id: "app", label: "Application", detail: "Flutter · live overview · alerts" },
      ],
    },
    architectureCaption:
      "Sensor and vision channels fuse at the edge; the backend stores zone state and history; the app is the operator surface.",
    implementation: [
      "Hardware was chosen for cost and availability: ESP32 DevKit as the main controller, dual MQ-7 sensors for CO, a combined temperature/humidity sensor, a piezo buzzer for local alarm, and a buck converter for stable power from a 9V supply.",
      "Firmware samples sensors on a fixed cadence, computes rolling features and a fused risk signal locally so the alarm path never depends on the cloud. Network upload is a secondary channel for remote monitoring.",
      "The vision path runs on ESP32-CAM frames. A primary model is used when available; a colour-based fallback detector guarantees a detection signal even with limited compute, which is what produced the 0.99 score on the test frame.",
      "The mobile app is Flutter for a single codebase across Android and iOS. State is designed around zones and devices so the UI stays coherent as deployments grow, and live readings degrade gracefully when the link drops.",
      "Backend services handle device identity, zone configuration, alert lifecycle and frame history, keeping the contract between embedded, ML and app layers explicit.",
    ],
    hardParts: [
      {
        title: "Signal quality on cheap sensors",
        body: "MQ-7 and low-cost gas sensors drift and cross-sensitise. The hard part was not reading values — it was deciding when to trust them. Fusion with temperature and humidity, plus rate-of-change features, mattered more than any single threshold.",
      },
      {
        title: "Working without reliable connectivity",
        body: "A safety system that only works online is not a safety system. The local buzzer and on-device scoring path were built first; remote monitoring and history were layered on top so a link outage degrades visibility, not protection.",
      },
      {
        title: "Two detection modalities, one confidence story",
        body: "Sensor fusion and vision produce different kinds of confidence. Surfacing both in the app — fusion score, action recommendation, and vision fallback score with frames — needed a UI that stays legible under stress without crying wolf.",
      },
      {
        title: "Hardware constraints meet ML ambition",
        body: "ESP32-class devices leave little room for heavy models. The design keeps the critical path small and moves heavier analysis to the vision fallback and server side, instead of forcing one model to do everything at the edge.",
      },
    ],
    results: {
      text:
        "The system runs as a working prototype: sensor nodes report live readings, fusion produces a risk score with an action recommendation, and vision fallback detects flame in test frames (score 0.99 on the demonstrated ESP32-CAM capture). Evaluation against broader real-world fire datasets and longer-duration field trials is ongoing — this is a prototype capability, not a certified safety product.",
      metrics: [
        { value: "0.99", label: "Vision fallback score", note: "On demonstrated ESP32-CAM flame frame", draft: false },
        { value: "4", label: "Sensor channels fused", note: "Temp · humidity · CO ×2 · hydrocarbon" },
        { value: "2", label: "Detection modalities", note: "Sensor fusion + computer vision" },
      ],
    },
    proof: [
      { type: "Demo", label: "Product mockups and live detection frames" },
      { type: "Case study", label: "Hardware schematic and system architecture" },
      { type: "Private", label: "Firmware and model code held internally" },
    ],
    technologies: [
      "Flutter",
      "Python",
      "ESP32",
      "ESP32-CAM",
      "Computer vision",
      "MQ-7",
      "Firebase",
      "Edge ML",
    ],
    draft: false,
  },

  {
    slug: "mathquest",
    title: "MathQuest",
    tagline: "Interactive mathematics learning with AI-assisted practice.",
    description:
      "A live PWA that turns mathematics practice into an adaptive, offline-first learning product with AI-assisted question handling and OCR.",
    year: "2026",
    tier: "flagship",
    categories: ["products", "ai"],
    tags: ["Product", "Mobile / PWA", "AI", "OCR", "Offline-first"],
    status: "Live",
    contextNote: "Independent product. Publicly available as a live PWA.",
    role: "Designed and built the product end to end — architecture, frontend, AI features and infrastructure.",
    heroImage: "/project_screenshots/mathquest/mathquest_iphone.jpg",
    heroAlt: "MathQuest application shown on a phone against a blue background",
    liveUrl: "https://mathquest.tech/",
    gallery: [
      {
        src: "/project_screenshots/mathquest/mathquest_iphone2.jpg",
        alt: "MathQuest personal dashboard on a phone showing progress cards and practice shortcuts",
        caption: "Learner dashboard with practice shortcuts and progress.",
      },
      {
        src: "/project_screenshots/mathquest/leaderboard_mockup.jpg",
        alt: "MathQuest leaderboard screen displayed on a phone held toward the camera",
        caption: "Leaderboard and competitive practice.",
      },
      {
        src: "/project_screenshots/mathquest/mathquest_iphone3.jpg",
        alt: "Additional MathQuest interface screen on a phone",
        caption: "In-product flows.",
      },
    ],
    featured: true,
    featuredOrder: 2,
    order: 2,
    problem: [
      "Mathematics practice tools often assume constant connectivity, rigid curricula and passive content consumption. Learners on unreliable networks lose progress, and teachers cannot see where understanding actually breaks down.",
      "The product problem was to make practice feel immediate and adaptive while tolerating the connectivity reality of the environments it is used in.",
    ],
    context: [
      "An independent Polymath product, designed, built and shipped as a public PWA rather than a client engagement or academic exercise.",
      "The goal was a real product with real users — not a demo — so offline behaviour, performance and simple onboarding were treated as core requirements.",
    ],
    roleDetail: [
      "Architected the full product: application shell, data model, practice engine, AI-assisted flows, OCR pipeline and deployment.",
      "Implemented offline-first behaviour so practice sessions survive connectivity drops and sync when the link returns.",
      "Built AI-assisted question handling and OCR support so photographed or imported problems can enter the practice loop.",
    ],
    solution: [
      "A Progressive Web App that installs like a native app, loads fast and keeps core practice available offline.",
      "An adaptive practice loop with dashboards and leaderboards that give learners feedback without requiring a teacher in the loop for every session.",
      "AI and OCR features that reduce friction when getting problems into the system — while keeping the critical practice path independent of heavy model calls.",
    ],
    architecture: {
      title: "MathQuest product flow",
      nodes: [
        { id: "client", label: "PWA client", detail: "Offline-first practice UI" },
        { id: "sync", label: "Sync layer", detail: "Background reconciliation" },
        { id: "services", label: "Services", detail: "Practice · progress · accounts" },
        { id: "ai", label: "AI / OCR", detail: "Question intake · assistance" },
        { id: "data", label: "Data", detail: "Progress · content · rankings" },
      ],
    },
    implementation: [
      "Shipped as a PWA at mathquest.tech so distribution does not depend on app stores, and so the same URL works across phone and desktop.",
      "Offline-first architecture: local persistence for in-progress practice, with reconciliation against the server when connectivity returns.",
      "AI and OCR are used at the edges of the loop (intake and assistance) rather than on the critical practice path, keeping the product responsive on weak devices and networks.",
      "Progress, streaks and leaderboards are designed as first-class product surfaces — motivation is part of the system, not a bolt-on.",
    ],
    hardParts: [
      {
        title: "Offline-first without split-brain state",
        body: "Allowing practice to continue offline means every write can conflict on reconnect. Defining a clear sync contract — what is authoritative, what merges, what discards — was the central design problem.",
      },
      {
        title: "AI features that do not own the critical path",
        body: "Model latency and cost make it dangerous to gate core practice on AI calls. The architecture keeps the practice loop local and treats AI/OCR as enrichment, so the product still works when those services are slow or unavailable.",
      },
      {
        title: "Making a learning product feel fast",
        body: "Education users abandon slow tools. Perceived performance — instant feedback, no full-page reloads, optimistic UI — was engineered deliberately rather than left to framework defaults.",
      },
    ],
    results: {
      text:
        "MathQuest is live as a public PWA at mathquest.tech. It demonstrates a complete product loop: account creation, adaptive practice, progress dashboards and leaderboards, with offline-capable architecture. Ongoing work focuses on content depth and measured learning outcomes over time.",
      metrics: [
        { value: "Live", label: "Public PWA", note: "mathquest.tech" },
        { value: "Offline-first", label: "Practice survives connectivity drops" },
      ],
    },
    proof: [
      { type: "Live", label: "mathquest.tech", href: "https://mathquest.tech/" },
      { type: "Demo", label: "Product screenshots and mockups" },
      { type: "Case study", label: "Architecture and product decisions" },
    ],
    technologies: [
      "PWA",
      "TypeScript",
      "React",
      "OCR",
      "LLM integration",
      "Offline-first sync",
      "Node.js",
    ],
    draft: false,
  },

  {
    slug: "tarapint",
    title: "Tarapint Marketplace",
    tagline: "Commerce platform for product discovery through checkout.",
    description:
      "A mobile-first marketplace covering search, product pages, cart and payment flows, built as a production commerce system.",
    year: "2025",
    tier: "flagship",
    categories: ["products", "systems"],
    tags: ["Product", "Commerce", "Mobile", "Payments", "Full-stack"],
    status: "Private",
    contextNote:
      "Commercial product engineering work. Interface shown with sample catalogue data.",
    role: "Built core commerce surfaces — storefront, cart, checkout and payment integration.",
    heroImage: "/project_screenshots/marketplace_tarapint/snap1.jpg",
    heroAlt:
      "Tarapint marketplace product page on a phone showing a kids outfit listing with price in naira",
    gallery: [
      {
        src: "/project_screenshots/marketplace_tarapint/snap2.jpg",
        alt: "Tarapint cart screen on a phone showing line items, totals and checkout actions",
        caption: "Cart and order summary.",
      },
      {
        src: "/project_screenshots/marketplace_tarapint/snap3.jpg",
        alt: "Tarapint checkout payment form on a phone with card and transfer payment options in naira",
        caption: "Checkout with multiple payment methods.",
      },
    ],
    featured: true,
    featuredOrder: 3,
    order: 3,
    problem: [
      "Commerce products fail in the details: search that does not convert, carts that lose state, checkout flows that break on mobile networks, and payment integrations that are hard to trust in markets with mixed payment methods.",
      "The work was to build the unglamorous, high-consequence path — discovery to paid order — correctly on mobile first.",
    ],
    context: [
      "Commercial product engineering on the Tarapint marketplace. Screens shown here use sample catalogue data; production catalogue and operational details remain private.",
    ],
    roleDetail: [
      "Implemented marketplace surfaces: product listing and detail, search, cart, and multi-step checkout.",
      "Integrated payment flows appropriate to the market (card and transfer), including order state transitions and confirmation.",
      "Built responsive, mobile-first interfaces tuned for real network conditions rather than demo wifi.",
    ],
    solution: [
      "A mobile-first storefront with clear product cards, readable pricing and low-friction path from listing to cart.",
      "A cart and checkout flow that keeps totals, fees and payment method choice transparent at every step.",
      "Payment integration with explicit states — pending, success, failure — so users and operators both know where an order stands.",
    ],
    architecture: {
      title: "Commerce flow",
      nodes: [
        { id: "storefront", label: "Storefront", detail: "Search · listing · product" },
        { id: "cart", label: "Cart", detail: "Line items · totals" },
        { id: "checkout", label: "Checkout", detail: "Address · delivery · payment method" },
        { id: "payments", label: "Payments", detail: "Card · transfer · confirmation" },
        { id: "orders", label: "Orders", detail: "State machine · fulfilment" },
      ],
    },
    implementation: [
      "Mobile-first UI with large tap targets and readable type, because most marketplace traffic arrives on phones.",
      "Cart and checkout implemented as explicit state machines so payment callbacks, retries and failures cannot corrupt order truth.",
      "Payment methods cover both card and bank transfer — the reality of the market — with clear pending states instead of assuming instant card success.",
      "Interface screenshots in this case study use sample data; live catalogue and vendor operations are not disclosed.",
    ],
    hardParts: [
      {
        title: "Payment state under real-world conditions",
        body: "Transfers are asynchronous; cards fail for many reasons. Modelling order state so a payment can arrive late, partially fail, or need manual reconciliation — without confusing the buyer — is the hard engineering.",
      },
      {
        title: "Checkout that survives mobile networks",
        body: "Every additional round-trip costs conversion on weak connections. The flow was designed to validate locally where possible and treat the payment step as the only mandatory server round-trip.",
      },
      {
        title: "Honest private work",
        body: "Much of the system is commercially sensitive. The case study deliberately shows patterns and sample screens rather than production data, vendors or revenue — private work presented professionally, not apologised for.",
      },
    ],
    results: {
      text:
        "A functioning marketplace covering the full purchase path — discovery, cart, checkout and payment — delivered as commercial product engineering. Detailed performance and business metrics are private to the engagement.",
      metrics: [
        { value: "E2E", label: "Discovery → paid order", note: "Complete commerce path" },
        { value: "Mobile-first", label: "Primary target experience" },
      ],
    },
    proof: [
      { type: "Private", label: "Production system (details withheld)" },
      { type: "Demo", label: "Interface screenshots with sample data" },
      { type: "Case study", label: "Architecture and checkout patterns" },
    ],
    technologies: [
      "React",
      "Node.js",
      "Payments integration",
      "REST APIs",
      "Mobile-first UI",
      "Order state machines",
    ],
    draft: false,
  },

  {
    slug: "forensys",
    title: "Forensys",
    tagline: "Anomaly detection and decision support for tax compliance and revenue assurance.",
    description:
      "Research and product work on forensic financial signals: anomaly detection, risk scoring and decision-support tooling for tax compliance and revenue assurance on listed-company data.",
    year: "2025–2026",
    tier: "flagship",
    categories: ["ai", "data", "research"],
    tags: ["Research", "Anomaly Detection", "Financial Systems", "Machine Learning", "Decision Support"],
    status: "Research",
    contextNote:
      "Research and academic work, evolving into a product surface. Not a deployed commercial tax product.",
    role: "Designed the signal framework, risk-scoring models, evaluation methodology and analysis interface.",
    heroImage: "/project_screenshots/forensys/Screenshot 2026-07-21 111345.png",
    heroAlt:
      "Forensys company analysis interface showing NGX-listed companies with risk scores and forensic signal tabs",
    gallery: [
      {
        src: "/project_screenshots/forensys/Screenshot 2026-07-21 111123.png",
        alt: "Forensys forensic signals panel showing REVENUE_CF_GAP, RECEIVABLES_AGING, INVENTORY_QUALITY and PROFIT_TAX_DISCONNECT scores against thresholds",
        caption: "Forensic signal cards with thresholds and plain-language notes.",
      },
      {
        src: "/project_screenshots/forensys/Screenshot 2026-07-21 111431.png",
        alt: "Risk score distribution chart comparing clean and fraud samples with means of 22.3 and 26.9 and a separation of 4.6 points",
        caption: "Score distribution: clean vs. fraud — separation analysis.",
      },
      {
        src: "/project_screenshots/forensys/Screenshot 2026-07-21 111418.png",
        alt: "Per-class classification performance bar chart for clean vs fraud showing precision, recall and F1 scores",
        caption: "Per-class precision, recall and F1.",
      },
      {
        src: "/project_screenshots/forensys/Screenshot 2026-07-21 111020.png",
        alt: "Forensys dashboard interface with navigation for document analysis, company lookup, tax rules and reports",
        caption: "Analyst workspace.",
      },
    ],
    featured: false,
    order: 4,
    problem: [
      "Tax compliance and revenue assurance depend on spotting patterns that do not add up: revenue that does not reconcile with cash flow, receivables that age oddly, inventory that never turns, profit and tax that disconnect.",
      "Analysts cannot read every filing at depth. The problem is not lack of data — listed companies publish plenty — but lack of a systematic first pass that ranks where human attention should go, with enough explanation to trust the ranking.",
      "Labels are scarce. Confirmed fraud cases are rare, delayed and biased, so conventional supervised classification alone is a weak fit for the domain.",
    ],
    context: [
      "Research and academic work exploring anomaly detection on financial disclosures from Nigerian Exchange (NGX)-listed companies, with an interface prototype for analyst workflows.",
      "Presented as research. It is not a commercial tax product, not certified for regulatory use, and not deployed with production clients.",
    ],
    roleDetail: [
      "Designed the forensic signal framework: named, interpretable checks (revenue/cash-flow gap, receivables ageing, inventory quality, profit–tax disconnect) each with a threshold and plain-language interpretation.",
      "Built risk-scoring models and evaluated them honestly — including distributional overlap analysis and per-class precision/recall/F1 — rather than reporting a single headline number.",
      "Implemented the analyst interface: company lookup, signal panels, tax compliance view, network graph and ML performance tabs.",
      "Defined evaluation methodology suited to rare-event detection: score distributions, separation distance, and class-wise metrics against a stated threshold.",
    ],
    solution: [
      "A Forensys workspace where an analyst selects a listed company and reviews a risk score with drill-downs: overview, forensic signals, tax compliance, network graph and ML performance.",
      "Interpretable signals — not black-box scores alone. Each card shows the metric, the threshold, a plain-language note (e.g. DSO in normal range) and recommended investigative steps.",
      "Model evaluation made visible inside the product: score distributions for clean vs. fraud cohorts and per-class metrics, so users understand discrimination limits instead of trusting a single number.",
      "Exportable reports so findings can move from the tool into human review workflows.",
    ],
    architecture: {
      title: "Forensys analysis pipeline",
      nodes: [
        { id: "filings", label: "Source data", detail: "Public filings · NGX companies" },
        { id: "features", label: "Feature pipeline", detail: "Ratios · gaps · ageing · tax" },
        { id: "signals", label: "Signal engine", detail: "Named checks + thresholds" },
        { id: "model", label: "Risk model", detail: "Scoring · calibration" },
        { id: "ui", label: "Analyst UI", detail: "Lookup · panels · reports" },
      ],
    },
    implementation: [
      "Feature engineering focuses on interpretable financial ratios and relationships rather than opaque embeddings — every signal must be explainable to an auditor.",
      "A rules-plus-model hybrid: deterministic threshold checks produce explainable flags; a learned score ranks severity and surfaces non-obvious combinations.",
      "Evaluation embraces the hard truth of rare-event detection. On the current eval set (clean n=300, fraud n=120), score distributions overlap substantially — mean separation of 4.6 points — which is reported openly rather than hidden behind accuracy claims.",
      "Per-class metrics (e.g. fraud-class recall 0.62 and F1 0.75 at a 0.80 threshold on the current split) drive iteration priorities: recall on the minority class matters more than overall accuracy here.",
      "The interface is an analyst tool, not a dashboard demo: company context, signal detail, investigative steps and export are the core loop.",
    ],
    hardParts: [
      {
        title: "Almost no trusted labels",
        body: "Confirmed fraud is rare, delayed and selected. Building evaluation you can defend with limited positive labels — and being honest about what the metrics mean — was harder than training the model.",
      },
      {
        title: "Interpretability is a requirement, not a nice-to-have",
        body: "A risk score nobody can explain is unusable in compliance work. Every signal was designed to carry its own evidence: metric, threshold, plain-language note and suggested checks.",
      },
      {
        title: "Distribution overlap is real",
        body: "Clean and fraud score distributions overlap heavily on current data. Rather than overclaim, the system surfaces separation analysis so users calibrate trust — a 4.6-point mean separation informs how the score should be used as a triage tool, not a verdict.",
      },
      {
        title: "Research versus product",
        body: "The work needed to stay honest as research while still producing a usable interface. That meant separating evaluation views from decision views and labelling the system's limits inside the product itself.",
      },
    ],
    results: {
      text:
        "A working research prototype: interpretable forensic signals over public financial data, risk scoring with visible evaluation, and an analyst interface covering company lookup, signal drill-down and reporting. Evaluation on the current holdout (clean n=300 / fraud n=120) shows meaningful but limited discrimination — mean score separation 4.6 points, fraud-class F1 0.75 at threshold 0.80 — reported as a triage aid under active research, not a production compliance guarantee.",
      metrics: [
        { value: "4.6 pts", label: "Mean score separation", note: "Clean (n=300) vs fraud (n=120)" },
        { value: "0.75", label: "Fraud-class F1", note: "At 0.80 threshold, current split" },
        { value: "0.62", label: "Fraud-class recall", note: "Priority metric for rare events" },
        { value: "4+", label: "Named forensic signals", note: "Each with threshold + interpretation" },
      ],
    },
    proof: [
      { type: "Research", label: "Evaluation charts and methodology" },
      { type: "Demo", label: "Interface screenshots" },
      { type: "Case study", label: "Signal definitions and architecture" },
      { type: "Private", label: "Full codebase and data pipelines held internally" },
    ],
    technologies: [
      "Python",
      "scikit-learn",
      "Anomaly detection",
      "Financial features",
      "React",
      "Time series",
      "Evaluation methodology",
    ],
    draft: false,
  },

  {
    slug: "drought-prediction",
    title: "Drought Prediction",
    tagline: "Spatiotemporal drought forecasting from climate, satellite and soil-moisture data.",
    description:
      "Research project predicting moderate and severe drought in Northern Nigeria under sparse, noisy observational conditions.",
    year: "2024",
    tier: "flagship",
    categories: ["research", "ai", "data"],
    tags: ["Research", "Time Series", "Deep Learning", "Geospatial ML"],
    status: "Research",
    contextNote: "Academic research project.",
    role: "Designed the data pipeline, model experiments and evaluation for spatiotemporal drought prediction.",
    heroImage: undefined,
    gallery: [],
    featured: false,
    order: 5,
    problem: [
      "Drought develops slowly and unevenly across space. Early warning matters for agriculture and water planning, but ground observations in Northern Nigeria are sparse, irregularly updated and noisy.",
      "The modelling problem is to predict moderate and severe drought conditions ahead of time from heterogeneous inputs — climate variables, satellite-derived indices and soil moisture — when the observation network itself is unreliable.",
    ],
    context: [
      "Academic research focused on spatiotemporal drought prediction for Northern Nigeria, using climate, satellite and soil-moisture features under sparse-data conditions.",
    ],
    roleDetail: [
      "Built the feature and label pipeline from climate, satellite and soil-moisture sources into model-ready spatiotemporal tensors.",
      "Designed and ran model experiments for drought class prediction, with emphasis on robustness to missing and noisy observations.",
      "Defined evaluation focused on operational usefulness: discrimination of moderate and severe drought, not just aggregate accuracy.",
    ],
    solution: [
      "A spatiotemporal modelling approach that learns spatial structure and temporal evolution of drought indicators rather than treating grid cells independently.",
      "Feature design that tolerates sparse inputs: masked observations, satellite proxies and lagged climate variables combined so the model degrades gracefully where ground data is thin.",
      "Evaluation reporting class-wise discrimination — the operational question is whether moderate/severe drought is separable enough to warn on.",
    ],
    architecture: {
      title: "Drought modelling pipeline",
      nodes: [
        { id: "sources", label: "Data sources", detail: "Climate · satellite · soil moisture" },
        { id: "features", label: "Feature pipeline", detail: "Alignment · masking · lags" },
        { id: "labels", label: "Labels", detail: "Drought classes (moderate / severe)" },
        { id: "model", label: "Models", detail: "Spatiotemporal experiments" },
        { id: "eval", label: "Evaluation", detail: "AUC · class metrics · maps" },
      ],
    },
    implementation: [
      "Data alignment across sources with different resolutions and cadences was the first substantial engineering task — spatial joins, temporal interpolation and explicit missing-data masks.",
      "Models were experimentally compared rather than assumed; the selection criterion was performance on moderate and severe drought classes under sparse conditions.",
      "Results are reported with dataset and split context. Headline discrimination for moderate and severe cases reached approximately 0.85 AUC under sparse, noisy conditions — a research result, not an operational forecast service.",
    ],
    hardParts: [
      {
        title: "Sparse, noisy labels and inputs",
        body: "Drought labels depend on indices that are themselves estimates. The pipeline had to treat missingness as information rather than silently interpolating everything away.",
      },
      {
        title: "Spatiotemporal structure vs. independent cells",
        body: "Predicting each location independently ignores how drought propagates. Incorporating spatial context without overfitting a noisy observation network was the central modelling trade-off.",
      },
      {
        title: "Honest evaluation under class imbalance",
        body: "Severe drought is rarer than normal conditions. Aggregate accuracy is misleading; class-wise metrics and AUC on the specified split were used so the reported number means something.",
      },
    ],
    results: {
      text:
        "Research demonstrated discrimination of moderate and severe drought conditions at approximately 0.85 AUC on the specified evaluation split under sparse, noisy observational conditions. Work remains research-stage: no operational forecasting service, no client deployment.",
      metrics: [
        {
          value: "≈0.85",
          label: "AUC (moderate & severe)",
          note: "Specified holdout, sparse/noisy conditions",
          draft: true,
        },
        { value: "3", label: "Source families", note: "Climate · satellite · soil moisture" },
      ],
    },
    proof: [
      { type: "Research", label: "Evaluation metrics and methodology" },
      { type: "Case study", label: "Pipeline and modelling write-up" },
    ],
    technologies: [
      "Python",
      "Deep learning",
      "Time series",
      "Geospatial ML",
      "Remote sensing features",
      "PyTorch",
    ],
    draft: true,
  },

  {
    slug: "edms-rag",
    title: "EDMS / RAG Decision Support",
    tagline: "Enterprise document intelligence with retrieval-augmented generation.",
    description:
      "An enterprise document and reporting system using retrieval-augmented generation with timeframe- and authorization-aware access for decision support.",
    year: "2025",
    tier: "flagship",
    categories: ["ai", "systems", "products"],
    tags: ["AI", "RAG", "Enterprise Systems", "Document Intelligence", "Decision Support"],
    status: "Private",
    contextNote:
      "Professional work on a confidential enterprise system. Details abstracted; no client UI, data or implementation specifics are shown.",
    role: "Worked on document intelligence, retrieval and decision-support capabilities within the broader system.",
    heroImage: undefined,
    gallery: [],
    featured: false,
    order: 6,
    problem: [
      "Enterprises accumulate documents faster than people can find the relevant fragment. Reports, policies and historical decisions sit across systems, and answering a concrete question often means manually reading for hours.",
      "A naive chatbot over documents is not enough: access control, document timeframes and organisational authorisation all determine who should see what — and wrong disclosure is worse than no answer.",
    ],
    context: [
      "Professional engagement on a confidential enterprise document management and reporting system. Specific client, UI, data and architectural details are not disclosed.",
      "This page intentionally stays at system-concept level: it explains the shape of the problem and the approach without exposing confidential implementation.",
    ],
    roleDetail: [
      "Contributed to retrieval-augmented generation flows over enterprise document corpora with authorization-aware access.",
      "Worked on timeframe-aware retrieval so answers respect document validity periods and historical context.",
      "Collaborated on decision-support reporting surfaces that turn retrieved evidence into structured output for humans.",
    ],
    solution: [
      "A retrieval layer that selects documents the requesting user is authorised to see, filtered by timeframe and access policy before generation ever runs.",
      "RAG over curated corpora so answers cite source material instead of improvising, with structured report outputs for decision-support workflows.",
      "Human-in-the-loop review paths: the system proposes, people decide — appropriate for enterprise document contexts where errors have consequences.",
    ],
    architecture: {
      title: "Abstracted decision-support flow",
      nodes: [
        { id: "docs", label: "Documents", detail: "Corpus + metadata + timeframes" },
        { id: "authz", label: "Authorization", detail: "User · role · document policy" },
        { id: "retrieval", label: "Retrieval", detail: "Filtered · timeframe-aware" },
        { id: "generation", label: "Generation", detail: "RAG · grounded answers" },
        { id: "report", label: "Decision support", detail: "Structured output · review" },
      ],
    },
    architectureCaption:
      "Abstract model of the system. Authorization and timeframe filters run before retrieval; generation stays grounded in permitted sources.",
    implementation: [
      "Authorisation is enforced in the retrieval path, not as a prompt instruction — the model only ever sees documents the user is allowed to access.",
      "Document metadata (effective dates, supersession, classification) is first-class, so timeframe questions return historically correct material rather than only latest revisions.",
      "Generation is constrained to retrieved context with citations, and outputs are structured for decision-support review rather than free-form chat.",
      "Concrete technologies, vendors, volumes and interfaces remain confidential and are deliberately omitted from this case study.",
    ],
    hardParts: [
      {
        title: "Security before generation",
        body: "RAG systems leak if authorisation is checked after retrieval. The design enforces policy inside the retrieval boundary so forbidden content never enters the model context.",
      },
      {
        title: "Timeframe-correct answers",
        body: "Enterprise questions are often 'what was true then?' — not 'what is true now?'. Making document time validity a retrieval dimension, not a post-filter, was essential.",
      },
      {
        title: "Useful under confidentiality",
        body: "Explaining a system you cannot fully show forces precision: abstract diagrams, honest context labels and clear role statements instead of screenshots that cannot exist publicly.",
      },
    ],
    results: {
      text:
        "A confidential enterprise system in active professional use, covering document intelligence, authorised retrieval and decision-support reporting. Specific outcomes, volumes and client identifiers are not disclosed. This case study documents the problem shape and engineering approach only.",
      metrics: [
        { value: "AuthZ-first", label: "Retrieval secured before generation" },
        { value: "Time-aware", label: "Timeframe-correct document context" },
        { value: "Private", label: "Client and data confidential" },
      ],
    },
    proof: [
      { type: "Private", label: "Implementation and client details withheld" },
      { type: "Case study", label: "Abstract architecture and approach" },
    ],
    technologies: [
      "RAG",
      "LLM applications",
      "Document intelligence",
      "Authorization-aware retrieval",
      "Decision support",
    ],
    draft: false,
  },
]

export const compactProjects: Project[] = [
  {
    slug: "bellotrade",
    title: "Bellotrade",
    tagline: "Commercial software systems for trade operations.",
    description:
      "Product and platform engineering for commercial trade workflows — demonstrating conventional full-stack software delivery alongside the AI and research work.",
    year: "2024–2025",
    tier: "compact",
    categories: ["products", "systems"],
    tags: ["Software", "Product Engineering", "Commercial"],
    status: "Private",
    contextNote: "Commercial product engineering.",
    role: "Software and product engineering contributions.",
    order: 7,
    draft: true,
  },
  {
    slug: "unishuttle",
    title: "Uni-Shuttle",
    tagline: "Campus mobility and shuttle operations software.",
    description: "Transport operations software covering scheduling and rider-facing flows.",
    year: "2023",
    tier: "compact",
    categories: ["products", "systems"],
    tags: ["Software", "Operations", "Mobile"],
    status: "Private",
    contextNote: "Professional work.",
    role: "Engineering contributions within the delivery team.",
    order: 8,
    draft: true,
  },
  {
    slug: "pesoka",
    title: "Pesoka microfinance platform",
    tagline: "Credit scoring and fraud detection for micro-loans.",
    description:
      "Client onboarding with fraud detection and credit scoring for a microfinance loan product.",
    year: "2019–2021",
    tier: "compact",
    categories: ["ai", "products", "data"],
    tags: ["Credit Scoring", "Fraud Detection", "Fintech"],
    status: "Archived",
    contextNote: "Professional work at Pesoka Computers Nigeria.",
    role: "Built fraud detection and credit scoring components for loan applications.",
    order: 9,
    draft: true,
  },
  {
    slug: "cattle-transport",
    title: "Cattle Transport Monitoring",
    tagline: "Connected monitoring for livestock transport.",
    description: "Telemetry and monitoring concepts for livestock transport conditions.",
    year: "2024",
    tier: "compact",
    categories: ["systems", "data"],
    tags: ["IoT", "Telemetry", "Connected Systems"],
    status: "Archived",
    contextNote: "Experiment / independent work.",
    role: "Exploration of telemetry and condition monitoring.",
    order: 10,
    draft: true,
  },
  {
    slug: "agriwise",
    title: "AgriWise",
    tagline: "Agricultural data and decision support concepts.",
    description: "Data products and decision-support patterns for agricultural use cases.",
    year: "2023",
    tier: "compact",
    categories: ["data", "products"],
    tags: ["Agriculture", "Data Products"],
    status: "Archived",
    contextNote: "Independent / exploratory work.",
    role: "Product and data engineering exploration.",
    order: 11,
    draft: true,
  },
]

export const allProjects = [...projects, ...compactProjects]

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug)
}

export function getFlagshipProjects(): Project[] {
  return projects.slice().sort((a, b) => a.order - b.order)
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return slugs
    .map((s) => getProject(s))
    .filter((p): p is Project => Boolean(p))
}

export const workCategories: { id: CapabilityCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "products", label: "Products" },
  { id: "data", label: "Data" },
  { id: "systems", label: "Systems" },
  { id: "research", label: "Research" },
]
