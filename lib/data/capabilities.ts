import type { Project } from "./projects"
import { getProject } from "./projects"

export type CapabilityId =
  | "products"
  | "ai"
  | "data"
  | "automation"
  | "connected"
  | "blockchain"

export interface Capability {
  id: CapabilityId
  index: string
  title: string
  summary: string
  problems: string[]
  builds: string[]
  examples: string[]
  projectSlugs: string[]
}

export const capabilities: Capability[] = [
  {
    id: "products",
    index: "01",
    title: "Product Engineering",
    summary:
      "Web, mobile, backend, APIs, internal tools and operational platforms — built to be used, not just demoed.",
    problems: [
      "Critical workflows trapped in spreadsheets and manual handoffs",
      "MVPs that cannot survive real users or real data volume",
      "Internal tools that cost more to maintain than the process they replace",
    ],
    builds: [
      "Web and mobile applications",
      "Backend services and APIs",
      "Internal tools and admin systems",
      "Operational platforms end to end",
    ],
    examples: [
      "Marketplace discovery-to-checkout flows",
      "Offline-first learning products shipped as PWAs",
      "Operations interfaces for domain experts",
    ],
    projectSlugs: ["mathquest", "tarapint", "fire-show"],
  },
  {
    id: "ai",
    index: "02",
    title: "AI Engineering",
    summary:
      "Machine learning, computer vision, LLM applications, evaluation and AI integration — with honesty about what the model can and cannot do.",
    problems: [
      "Models that work in notebooks and fail in production conditions",
      "LLM features without evaluation, grounding or cost control",
      "Computer vision prototypes that never leave the demo",
    ],
    builds: [
      "Machine learning systems for prediction and detection",
      "Computer vision pipelines",
      "LLM and RAG applications with evaluation",
      "Model integration into existing products",
    ],
    examples: [
      "Multi-sensor risk fusion with vision fallback detection",
      "Anomaly detection with interpretable signals",
      "Authorization-aware retrieval-augmented decision support",
    ],
    projectSlugs: ["fire-show", "forensys", "edms-rag"],
  },
  {
    id: "data",
    index: "03",
    title: "Data & Decision Systems",
    summary:
      "Analytics, anomaly detection, forecasting, recommendation and decision support — evidence over decoration.",
    problems: [
      "Dashboards nobody trusts or opens",
      "Forecasts without evaluation discipline",
      "Decisions still made on gut feel because the data pipeline is broken",
    ],
    builds: [
      "Analytics and reporting systems",
      "Anomaly and fraud detection",
      "Forecasting and time-series pipelines",
      "Decision-support interfaces for humans",
    ],
    examples: [
      "Forensic financial signals with thresholds and explanations",
      "Spatiotemporal drought prediction under sparse data",
      "Risk scoring with visible evaluation methodology",
    ],
    projectSlugs: ["forensys", "drought-prediction", "pesoka"],
  },
  {
    id: "automation",
    index: "04",
    title: "Automation & Integration",
    summary:
      "Workflow automation, document processing, API integrations and operational tooling that remove repetitive human work.",
    problems: [
      "Teams re-keying the same data across four systems",
      "Document-heavy processes with no structured intake",
      "Integrations held together with cron jobs and hope",
    ],
    builds: [
      "Workflow automation",
      "Document processing pipelines",
      "API integrations and middleware",
      "Operational tooling for real teams",
    ],
    examples: [
      "Document intelligence with policy-aware retrieval",
      "Payment and order state automation",
      "Cross-system data movement with monitoring",
    ],
    projectSlugs: ["edms-rag", "tarapint"],
  },
  {
    id: "connected",
    index: "05",
    title: "Connected Systems",
    summary:
      "Embedded software, IoT, telemetry and device-to-cloud systems — designed for unreliable networks and constrained hardware.",
    problems: [
      "Devices that only work on perfect wifi",
      "No visibility into what deployed hardware is actually doing",
      "Sensor data collected but never turned into action",
    ],
    builds: [
      "Embedded firmware on microcontroller-class hardware",
      "Sensor fusion at the edge",
      "Telemetry and device-to-cloud pipelines",
      "Mobile surfaces for field operators",
    ],
    examples: [
      "ESP32 sensor nodes with local risk scoring and offline alarm",
      "Camera-based detection on constrained devices",
      "Zone-aware multi-device monitoring",
    ],
    projectSlugs: ["fire-show", "cattle-transport"],
  },
  {
    id: "blockchain",
    index: "06",
    title: "Blockchain & Web3",
    summary:
      "Cross-chain protocols, on-chain lending logic and crypto-native internal tooling — built and explained with the same evidence discipline as the rest of the work.",
    problems: [
      "Reputation and identity that stop at the chain they were built on",
      "Cross-chain flows routed through custodial bridges that hold user funds",
      "Market data scattered across exchanges with no single comparison surface",
    ],
    builds: [
      "Cross-chain protocols and messaging integrations",
      "On-chain lending and reputation models",
      "Wallet, payment and payroll flows",
      "CEX / DEX market-data tooling",
    ],
    examples: [
      "Reputation-based lending from Ethereum to Solana via LayerZero",
      "Crypto-payroll system design advisory",
      "Exchange price monitoring across CEXes and DEXes",
    ],
    projectSlugs: ["meridian-protocol", "dialectica-crypto-payroll", "price-monitoring"],
  },
]

export function getCapabilityProjects(cap: Capability): Project[] {
  return cap.projectSlugs
    .map((s) => getProject(s))
    .filter((p): p is Project => Boolean(p))
}

export function getCapabilitiesForProject(slug: string): Capability[] {
  return capabilities.filter((c) => c.projectSlugs.includes(slug))
}
