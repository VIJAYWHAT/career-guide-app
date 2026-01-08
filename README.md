# Career Guide

A career guidance web app for exploring paths, jobs, and resources. Built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173/career-guide-app/** (or the URL Vite prints).

## Build

```bash
npm run build
```

Output is in `dist/`, configured for base path **/career-guide-app/**.

## Deploy to GitHub Pages (https://vijayraja.me/career-guide-app/)

1. **Enable GitHub Pages with Actions**
   - Repo **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Deploy**
   - Push to `main`; the **Deploy to GitHub Pages** workflow builds and deploys the `dist/` output.
   - Or run manually: **Actions → Deploy to GitHub Pages → Run workflow**

3. **Custom domain**
   - Point **https://vijayraja.me/career-guide-app/** to this GitHub Pages deployment, or copy the **contents of `dist/`** to that path on your server.

**Important:** The live URL must serve the **built app** (contents of `dist/`), not the source code.

## Project structure

- `src/pages/` – Home, Departments, Jobs, Resources, Career Quiz
- `src/components/` – Header, Footer
- `src/data/` – Department/career data
