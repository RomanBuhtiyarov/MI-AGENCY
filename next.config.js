/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  // reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
