/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // appDir: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
