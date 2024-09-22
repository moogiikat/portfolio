/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
