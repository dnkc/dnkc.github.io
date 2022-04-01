/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: isProd ? "https://dnkc.github.io/" : "",
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
    };
  },
});

module.exports = nextConfig;
