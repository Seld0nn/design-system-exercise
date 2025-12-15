const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["design-system"],

  // Fix for monorepo: tell Next.js where the workspace root is
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

module.exports = nextConfig;
