const withPreact = require("next-plugin-preact");

/** @type {import('next').NextConfig} */
const nextConfig = withPreact({
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});

module.exports = nextConfig;
