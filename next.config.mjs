/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/profiles/emmanuel",
        permanent: true,
      },
      {
        source: "/work/llm-finetuning",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/data-pipeline",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/analytics-dashboard",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/rlhf-pipeline",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/fraud-detection",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/infra-deployment",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/ml-prediction-model",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/cloud-infrastructure",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/nlp-sentiment-analysis",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/work/tax-compliance-anomaly-detection",
        destination: "/work/forensys",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
