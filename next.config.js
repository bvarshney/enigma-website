/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    nextScriptWorkers: true,
  },
  images: {
    domains: ['wordpress-156292-4117800.cloudwaysapps.com'],
  },
}

module.exports = nextConfig
