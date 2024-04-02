
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'html'],
  swcMinify: true,
  async rewrites () {
    return [
      {
        source: '/problems/xss-problem',
        destination: '/html/xss-problem/xss-problem.html'
      }
    ]
  }
}

module.exports = nextConfig
