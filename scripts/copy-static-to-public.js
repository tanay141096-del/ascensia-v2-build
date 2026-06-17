// Copies .next/static/ to ../public_html/_next/static/ after build.
//
// On Hostinger, LiteSpeed intercepts /_next/static/* requests as filesystem
// lookups against public_html/_next/static/ and returns 404 without ever
// forwarding to Passenger/Next.js. This script bridges that gap by copying
// the built static assets where LiteSpeed can find them.
//
// On GitHub Actions or local dev the sibling public_html/ directory doesn't
// exist, so the script exits early without error.

const { existsSync, rmSync, mkdirSync, cpSync } = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "..", ".next", "static");
const publicHtmlDir = path.resolve(__dirname, "..", "..", "public_html");
const dest = path.join(publicHtmlDir, "_next", "static");

if (!existsSync(publicHtmlDir)) {
  console.log("copy-static: ../public_html not found, skipping (not Hostinger)");
  process.exit(0);
}

if (!existsSync(src)) {
  console.log("copy-static: .next/static not found, skipping (static export build?)");
  process.exit(0);
}

if (existsSync(dest)) {
  rmSync(dest, { recursive: true, force: true });
}

mkdirSync(path.join(publicHtmlDir, "_next"), { recursive: true });
cpSync(src, dest, { recursive: true });
console.log("copy-static: copied .next/static → ../public_html/_next/static");
