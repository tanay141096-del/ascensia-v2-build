import type { NextConfig } from "next";

// GitHub Pages serves project sites from a /<repo-name>/ subpath, so that
// build needs a basePath. The real Hostinger deploy is served from the
// domain root and must NOT have one. Toggled by an env var set only in the
// gh-pages workflow job - the default (Hostinger) build is unaffected.
const isGhPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "ghpages";
const repoName = "acsensia-v2-build";

const nextConfig: NextConfig = {
  // Static export only for the GitHub Pages preview build.
  // Hostinger runs next start (SSR mode) so output: "export" must be absent there.
  ...(isGhPages ? { output: "export" } : {}),
  images: {
    unoptimized: true,
  },
  basePath: isGhPages ? `/${repoName}` : "",
  assetPrefix: isGhPages ? `/${repoName}/` : "",
};

export default nextConfig;
