# Diego Carreras Portfolio

A portfolio website for Diego Carreras built with Vite, React, TypeScript and Tailwind CSS. The site is intended to be deployed later on Cloudflare Pages and positions Diego as a senior creative director across brand strategy, creative direction, spatial experiences, product and editorial design, and AI-powered visual storytelling.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- React Router

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

The production build output is generated in `dist/` when the build passes.

## Current status

- Local development works with `npm run dev`.
- The production build is currently failing because of TypeScript and content-model mismatches.
- Cloudflare deployment is intentionally deferred until the build is fixed.

## Deploy to Cloudflare Pages

This section is the intended deployment target once the build issues are resolved.

Use the following settings in Cloudflare Pages:

- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: any current LTS compatible with Vite 5

## SPA routing on Cloudflare Pages

This project uses React Router with client-side routes such as `/projects/:slug` and `/about`. To make direct navigation work on Cloudflare Pages, the project includes `public/_redirects` with:

```text
/* /index.html 200
```

During the Vite build, everything inside `public/` is copied into `dist/`, so the redirect rule is deployed automatically and all application routes fall back to `index.html`.

## Project structure

```text
/
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   ├── og-image.svg
│   └── images/
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
