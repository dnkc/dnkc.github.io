/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://github.com/dnkc/dnkc.github.io" : "",
  reactStrictMode: true,
};

module.exports = nextConfig;
