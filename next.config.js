
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.stats = {
      warningsFilter: [/Page Without Valid React Component/],
    };

    return config;
  },
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
