# TLT website

TLT – Technology, Logic & Transformation. Next.js (App Router) + TypeScript, exported as a plain static site.

## Run

```bash
npm install
npm run dev        # http://localhost:3000 with hot reload
npm run build      # type-checks and writes the static site to ./out
npm run lint
npx serve out -l 3000   # preview the exported ./out folder
```

`next.config.ts` uses `output: 'export'` and `trailingSlash: true`, so `out/` can be uploaded to any static host
(`/services` becomes `out/services/index.html`). If you later add API routes, login or server actions, remove
`output: 'export'` and deploy as a Node/Vercel app.

## Where to edit

| What | Where |
| --- | --- |
| Texts (EN / SV) | `src/i18n/en.ts`, `src/i18n/sv.ts`. `sv` is typed against the `en` keys, so a missing or extra key is a compile error. `<br>` and `&amp;` in a string are rendered safely by `<TextLines />`. |
| Projects ("Selected work") | `src/content/projects.ts` (one object per project: translation keys + tech tags) |
| Products | `src/content/products.ts` |
| Services page cards | `src/content/services.ts` (sections and cards reference `svc.*` keys) |
| Home highlight cards, team, nav, contact details | `src/content/highlights.ts`, `team.ts`, `site.ts` |
| Page sections | `src/components/` (one component per section) |
| Language handling | `src/i18n/LanguageProvider.tsx` (`useT()`, `useLanguage()`); choice is stored in localStorage `tlt-lang`, static HTML is English |
| Page metadata (title, description, OG) | `metadata` export in `src/app/page.tsx` and `src/app/services/page.tsx` |
| Images, video | `public/img`, `public/videos/hero.mp4` (web-optimised copy; keep the original 52 MB master outside the repo) |

To add a project: add three keys (`projects.p7Type`, `p7Title`, `p7Desc`) to `en.ts` and `sv.ts`, then one object to `projects.ts`.

## Styles

Plain global CSS (no Tailwind), ported from the old `scss/main.css` with the same class names, split into
`src/styles/*.css`. The files are imported in `src/app/layout.tsx` and **the order is the cascade order**:

`base, header, hero, services-highlights, sections, team, products, projects, consulting, contact, footer, floating-button, service-cards, request-modal, responsive, overrides`

`responsive.css` (breakpoints and touch-target fixes) and `overrides.css` (the late "logo lockup + hero v2" and
mobile-menu rules) intentionally come last and override earlier rules. Do not reorder them, and put new
section CSS before `responsive.css`.

Fonts are set up in `src/app/layout.tsx` (Audiowide via `next/font/google`, Sansation from `src/fonts/sansation` via
`next/font/local`) and mapped onto `--font-heading`, `--font-body` and `--font-body-light` in `base.css`.
Audiowide is downloaded from Google at build time, so the first build needs internet access.
