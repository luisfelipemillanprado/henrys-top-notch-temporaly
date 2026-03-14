import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  ...(process.env.NODE_ENV === 'production'
    ? {}
    : {
        turbopack: {
          resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
        },
      }),
  // output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'henrystopnotch.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  compress: true,
}
export default nextConfig
