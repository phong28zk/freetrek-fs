/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qr.1688.com',
      },
      {
        protocol: 'https',
        hostname: 'detail.1688.com',
      },
      {
        protocol: 'https',
        hostname: 'pos.nvncdn.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
