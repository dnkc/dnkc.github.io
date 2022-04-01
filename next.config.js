/** @type {import('next').NextConfig} */

const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
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
