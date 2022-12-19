/** @type {import('next').NextConfig} */

const semi = require('@douyinfe/semi-next').default({});

const nextConfig = semi({
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 3 * 60 * 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.pokemon.com',
        port: '',
        pathname: '/assets/cms2/img/pokedex/detail/**'
      }
    ]
  }
});

module.exports = nextConfig;

