# Acsensia V2 Build

Website project for Acsensia, built with [Next.js](https://nextjs.org) using static export.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

Static files are generated into `out/` (plain HTML/CSS/JS — no Node server needed to host it).

## Deployment to Hostinger (Git auto-deploy)

This repo is wired to auto-build via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)):

1. On every push to `master`, the workflow runs `npm run build` and publishes the contents of `out/` to the **`deploy`** branch (force-pushed, orphan history — that branch only ever contains the latest built site, nothing else).
2. In Hostinger's hPanel, go to **Websites → your site → Advanced → Git** and set up Git Auto Deploy pointing at:
   - Repository: `https://github.com/tanay141096-del/acsensia-v2-build`
   - Branch: `deploy`
   - Deploy path: `public_html` (or leave default — Hostinger deploys repo root into the chosen path)
3. Once connected, every push to `master` here automatically rebuilds and redeploys the live site within a minute or two (GitHub Action build + Hostinger's webhook/poll pulling the `deploy` branch).

No Node.js needs to run on the Hostinger server — it's just serving static files.
