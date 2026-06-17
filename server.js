const { createServer } = require("http");
const { parse } = require("url");
const { existsSync, rmSync, mkdirSync, cpSync } = require("fs");
const path = require("path");
const next = require("next");

// On Hostinger, LiteSpeed intercepts /_next/static/* as filesystem lookups
// against public_html/_next/static/ and returns 404 without forwarding to
// Passenger. We copy the built static assets there at startup so LiteSpeed
// can find and serve them. This runs from nodejs/ (the Passenger app root),
// so the path ../public_html/ is reliable.
function syncStaticAssets() {
  const src = path.resolve(__dirname, ".next", "static");
  const publicHtml = path.resolve(__dirname, "..", "public_html");
  const dest = path.join(publicHtml, "_next", "static");

  if (!existsSync(publicHtml)) {
    console.log("server: ../public_html not found, skipping static sync");
    return;
  }
  if (!existsSync(src)) {
    console.log("server: .next/static not found, skipping static sync");
    return;
  }

  try {
    if (existsSync(dest)) {
      rmSync(dest, { recursive: true, force: true });
    }
    mkdirSync(path.join(publicHtml, "_next"), { recursive: true });
    cpSync(src, dest, { recursive: true });
    console.log("server: synced .next/static →", dest);
  } catch (err) {
    console.error("server: failed to sync static assets:", err.message);
  }
}

syncStaticAssets();

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, "0.0.0.0", () => {
    console.log(`> Ready on http://0.0.0.0:${port}`);
  });
});
