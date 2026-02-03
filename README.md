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

Output is in `dist/`, configured for base path `/career-guide-app/`.

## Deploy to GitHub Pages (https://vijayraja.me/career-guide-app/)

1. **Enable GitHub Pages with Actions**

   - In your repo: **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Deploy**

   - Push to the `main` branch; the **Deploy to GitHub Pages** workflow will build and deploy.
   - Or run the workflow manually: **Actions → Deploy to GitHub Pages → Run workflow**

3. **Custom domain**
   - If the site is served at `https://vijayraja.me/career-guide-app/`, ensure your server or GitHub Pages custom domain is set so that path serves this app. The app is built with base `/career-guide-app/` so all routes and assets work under that path.

## Project structure

- `src/pages/` – Home, Departments, Jobs, Resources, Career Quiz
- `src/components/` – Header, Footer
- `src/data/` – Department/career data
