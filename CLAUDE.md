# Ascensia V2 Build

Website project for Ascensia (correct spelling). This file is read by Claude Code at the start of each session in this repo.

## Project status
- Next.js 16.2.9 App Router, deployed to Hostinger as a Node.js Web App
- GitHub: https://github.com/tanay141096-del/ascensia-v2-build
- Live site: https://ascensia.club/

## Deployment setup (Hostinger)
- Hostinger builds and serves via Phusion Passenger (`server.js` startup file)
- `server.js` syncs `.next/static/` → `../public_html/_next/static/` at startup so LiteSpeed can serve static assets
- Manual redeploy: hPanel → ascensia.club → Deployments → Settings and redeploy
- Auto-deploy (GitHub push → auto build) is currently disconnected; reconnect via GitHub Settings → Applications → Hostinger → Configure

## Notes for Claude Code
- `output: "export"` is only set when `NEXT_PUBLIC_DEPLOY_TARGET=ghpages` (GitHub Pages preview)
- Logo is at `public/logo.webp` — image still shows old "ACSENSIA" spelling, needs updated file from designer
