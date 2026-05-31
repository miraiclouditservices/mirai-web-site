# Mirai Cloud IT Services — Enterprise Website

World-class multi-page enterprise IT services website built with:

- **Next.js 14** (App Router, RSC, SSG)
- **Bootstrap 5** + **React-Bootstrap** (mega navbar, responsive grid)
- **GSAP + ScrollTrigger** (scroll-driven reveal & counter animations)
- **Framer Motion** (page transitions, hover & card animations)
- **Three.js / react-three-fiber** (animated cloud + network visualization)
- **TypeScript**, per-component CSS Modules, mobile-first, SEO-ready

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Performance & SEO

- App Router metadata API (per-page titles, descriptions, OpenGraph, JSON-LD)
- Sitemap.xml + robots.txt generated at build time
- `next/image` with AVIF/WebP, lazy loading by default
- `next/font` (Inter) self-hosted, `display: swap`
- Dynamic imports for Three.js (`ssr: false`) to keep LCP fast
- Targets Lighthouse 95+ / Core Web Vitals green

## Structure

```
app/                 routes (App Router)
components/<Name>/   each component + its own .module.css
public/              static assets
styles/              global theme tokens, bootstrap override
lib/                 site data (services, products, nav)
```

Update business details in `lib/site.ts` and `lib/services.ts`.

Contact: +91 9100218218 — Mirai Cloud IT Services, Hyderabad.
