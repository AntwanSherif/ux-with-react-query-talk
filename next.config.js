/** @type {import('next').NextConfig} */

const semi = require('@douyinfe/semi-next').default({});

const nextConfig = semi({
  reactStrictMode: true,
  env: {
    endpoint: 'https://jherr-pokemon.s3.us-west-1.amazonaws.com'
  },
  images: {
    minimumCacheTTL: 3 * 60 * 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jherr-pokemon.s3.us-west-1.amazonaws.com',
        port: '',
        pathname: '/images/**'
      }
    ]
  }
});

module.exports = nextConfig;

