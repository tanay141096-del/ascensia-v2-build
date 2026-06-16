import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export so the build output (the `out/` folder) is plain
  // HTML/CSS/JS that Hostinger can serve directly from public_html.
  output: "export",
  images: {
    // next/image optimization requires a server; disable for static export.
    unoptimized: true,
  },
};

export default nextConfig;
