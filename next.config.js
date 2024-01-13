/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    domains: ["lh3.googleusercontent.com", "psymi.com.ua"],
  },
};

module.exports = nextConfig;
