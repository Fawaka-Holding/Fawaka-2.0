/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "", // Change this if deploying to a subdirectory
  images: {
    domains: ["fawaka.xyz", "cdn.fawaka.xyz"], // Replace with actual image domains
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  experimental: {
    appDir: true, // Enable app directory (for Next.js App Router)
  },
};

module.exports = nextConfig;
