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

The production build output is generated in `dist/`.

## Current status

- Local development works with `npm run dev`.
- The production build works with `npm run build`.
- The repository is ready for automatic Cloudflare Pages deployments from `main`.

## Deploy to Cloudflare Pages

Use the following settings in Cloudflare Pages:

- Production branch: `main`
- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave empty
- Environment variables: none required
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
