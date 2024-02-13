/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd'],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
