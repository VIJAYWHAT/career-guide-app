# Career Guide

A career guidance web app for exploring paths, jobs, and resources. Built with React, TypeScript, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`. The app uses relative paths so it works when served from any subpath (e.g. `/career-guide-app/`).

## Deploy to https://vijayraja.me/career-guide-app/

**Important:** The URL must serve the **built app** (contents of the `dist/` folder), not the source code. If you deploy the repo root or source files, the browser will request `/src/main.tsx` and get 404.

### Option A: GitHub Actions (recommended)

1. **Enable GitHub Pages with Actions**

   - In your repo: **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Deploy**

   - Push to the `main` branch; the workflow builds and deploys the **dist** output.
   - Or run manually: **Actions → Deploy to GitHub Pages → Run workflow**

3. **Custom domain**
   - If the site lives at `https://vijayraja.me/career-guide-app/`, point that path to the GitHub Pages deployment (or copy the **contents of `dist/`** into that directory on your server).

### Option B: Manual or other host

1. Run `npm run build`.
2. Upload **only the contents of the `dist/` folder** to your server so they are served at `https://vijayraja.me/career-guide-app/` (e.g. the file `dist/index.html` should be at `.../career-guide-app/index.html`, and `dist/assets/` at `.../career-guide-app/assets/`).
3. Do **not** deploy the repo root or `index.html` from the project root; that is the unbuilt source and will break.

## Project structure

- `src/pages/` – Home, Departments, Jobs, Resources, Career Quiz
- `src/components/` – Header, Footer
- `src/data/` – Department/career data
