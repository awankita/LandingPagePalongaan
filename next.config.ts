import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //if you looking for annoying fuckers on left bottom corner, uncomment this
  // devIndicators: {
  //   buildActivity: false,
  //   buildActivityPosition: 'bottom-right',
  // },

  images: {
    domains: ["picsum.photos"],
    remotePatterns: [new URL('https://placehold.co/**')],
  },
};

export default nextConfig;
