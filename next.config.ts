import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images-assets.nasa.gov" },
    ],
  },
};

export default nextConfig;
