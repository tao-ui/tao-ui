const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/badges",
        destination: "/docs/components/badge",
        permanent: true,
      },
      {
        source: "/buttons",
        destination: "/docs/components/button",
        permanent: true,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
