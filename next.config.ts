import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://simple-crud-ldzp.onrender.com/:path*'
      }
    ];
  }
};

export default nextConfig;
