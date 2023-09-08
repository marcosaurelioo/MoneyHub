/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        pathname: "/static/img/coins/*/*",
        hostname: "s2.coinmarketcap.com",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
