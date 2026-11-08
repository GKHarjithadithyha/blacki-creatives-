# BLACKi Creative

Responsive creative studio website built with React, TypeScript, Vite, Tailwind CSS, Motion, and Lenis.

## Requirements

- Node.js 22.12 or newer
- npm

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Deploy to Vercel

Import this repository in Vercel and keep the project root at the repository root. The included `vercel.json` sets the Vite build command and `dist` output directory, then rewrites client-side routes to the app entry point. Vercel installs dependencies with `npm ci`.

No environment variables are required for the current frontend.
