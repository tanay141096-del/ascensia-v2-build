import type { NextConfig } from "next";

// GitHub Pages serves project sites from a /<repo-name>/ subpath, so that
// build needs a basePath. The real Hostinger deploy is served from the
// domain root and must NOT have one. Toggled by an env var set only in the
// gh-pages workflow job - the default (Hostinger) build is unaffected.
const isGhPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "ghpages";
const repoName = "acsensia-v2-build";

const nextConfig: NextConfig = {
  // Static export so the build output (the `out/` folder) is plain
  // HTML/CSS/JS that Hostinger can serve directly from public_html.
  output: "export",
  images: {
    // next/image optimization requires a server; disable for static export.
    unoptimized: true,
  },
  basePath: isGhPages ? `/${repoName}` : "",
  assetPrefix: isGhPages ? `/${repoName}/` : "",
};

export default nextConfig;
