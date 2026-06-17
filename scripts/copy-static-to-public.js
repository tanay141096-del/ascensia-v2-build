// Copies .next/static/ to the Hostinger public_html/_next/static/ after build.
//
// On Hostinger, LiteSpeed intercepts /_next/static/* requests as filesystem
// lookups against public_html/_next/static/ and returns 404 without ever
// forwarding to Passenger/Next.js. This script bridges that gap.
//
// The build may run in nodejs/scripts/ (runtime path) or in
// public_html/.builds/source/scripts/ (build-time temp path), so we try
// both candidates and verify by checking for .htaccess.
//
// On GitHub Actions or local dev neither candidate exists, so the script
// exits early without error.

const { existsSync, rmSync, mkdirSync, cpSync } = require("fs");
const path = require("path");

console.log("copy-static: __dirname =", __dirname);

// Case A: build runs in nodejs/scripts/ → nodejs/ → domain/ → public_html/
const candidateA = path.resolve(__dirname, "..", "..", "public_html");
// Case B: build runs in public_html/.builds/source/scripts/ → up 3 levels = public_html/
const candidateB = path.resolve(__dirname, "..", "..", "..");

console.log("copy-static: candidateA =", candidateA, "exists =", existsSync(candidateA));
console.log("copy-static: candidateB =", candidateB, "exists =", existsSync(candidateB));

function isPublicHtml(dir) {
  // Verify the candidate looks like Hostinger's public_html by checking for .htaccess
  return existsSync(dir) && existsSync(path.join(dir, ".htaccess"));
}

let publicHtmlDir = null;
if (isPublicHtml(candidateA)) {
  publicHtmlDir = candidateA;
  console.log("copy-static: using candidateA");
} else if (isPublicHtml(candidateB)) {
  publicHtmlDir = candidateB;
  console.log("copy-static: using candidateB");
} else {
  console.log("copy-static: public_html not found in either candidate, skipping (not Hostinger)");
  process.exit(0);
}

const src = path.resolve(__dirname, "..", ".next", "static");
const dest = path.join(publicHtmlDir, "_next", "static");

console.log("copy-static: src =", src, "exists =", existsSync(src));

if (!existsSync(src)) {
  console.log("copy-static: .next/static not found, skipping (static export build?)");
  process.exit(0);
}

if (existsSync(dest)) {
  rmSync(dest, { recursive: true, force: true });
}

mkdirSync(path.join(publicHtmlDir, "_next"), { recursive: true });
cpSync(src, dest, { recursive: true });
console.log("copy-static: copied .next/static →", dest);
