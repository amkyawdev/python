/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow loading external scripts and styles
  transpilePackages: [],
  // Ensure proper handling of external CDN
  output: 'standalone',
  // Ignore SSL certificate issues for development
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig