const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["randomuser.me", "avatars.githubusercontent.com", "i.pinimg.com"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
