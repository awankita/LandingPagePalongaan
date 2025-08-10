import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'certain-strength-ad46524dd2.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'certain-strength-ad46524dd2.media.strapiapp.com',
        pathname: '/**',
      }
    ],
  },
};


export default nextConfig;
