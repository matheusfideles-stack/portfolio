# Matheus Fideles — Portfolio

A minimalist, dark-mode-first personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                Root layout, global styles, and the single page route
components/         Header, Hero, Projects, TechStack, About, ContactFooter, ThemeToggle
lib/data.ts         All editable content: projects, skills, and social links
```

## Content to personalize before deploying

Everything content-related lives in [`lib/data.ts`](lib/data.ts):

- `projects` — replace with your real projects, screenshots/preview components, live demo URLs, and GitHub links.
- `skillCategories` — adjust to match your actual stack.
- `socialLinks` — set your real email, GitHub, LinkedIn, X/Twitter, and resume path.

Other things to swap:

- `public/resume.pdf` — add your actual resume PDF (referenced by `socialLinks.resume`).
- The "MF" monogram in [`components/hero.tsx`](components/hero.tsx) — replace with a real portrait via `next/image` when you have one.
- Metadata (title/description/OG) in [`app/layout.tsx`](app/layout.tsx), including the `metadataBase` domain.

## Design system

Colors are defined as CSS variables in [`app/globals.css`](app/globals.css) (dark theme by default, light theme via the `.light` class on `<html>`, toggled with `next-themes`). Update the `--accent` variable to switch the accent color (currently indigo).

## Tech

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (CSS-variable-based theming, dark mode via class strategy)
- Framer Motion for scroll-in and hover micro-interactions
- lucide-react for icons
- next-themes for the light/dark toggle
