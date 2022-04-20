/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === "production";
const withOptimizedImages = require("next-optimized-images");

const nextConfig = withOptimizedImages({
  basePath: "https://dnkc.github.io/",
  assetPrefix: "https://dnkc.github.io/",
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
nextConfig;
