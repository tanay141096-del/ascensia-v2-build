// Mirrors the basePath logic in next.config.ts. Needed separately because
// Next's basePath config only auto-rewrites its own <Link>/<Image>
// components - raw <a href> / <img src> strings (used in Navbar/Footer)
// have to be prefixed manually. NEXT_PUBLIC_ prefix is required so this
// value is inlined into the client bundle, not just available at build time.
export const basePath =
  process.env.NEXT_PUBLIC_DEPLOY_TARGET === "ghpages" ? "/acsensia-v2-build" : "";
