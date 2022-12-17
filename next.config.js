/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
};

module.exports = nextConfig;

