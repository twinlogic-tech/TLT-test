import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out
  output: "export",
  // /services -> out/services/index.html, works on any static host
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
