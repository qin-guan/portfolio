# portfolio — `migrate/astro` comparison branch

> **Comparison branch:** VitePress → **Astro** migration spike for [qinguan.me](https://qinguan.me).
> Default site remains VitePress on `master`. Do not merge without review.

This branch replaces VitePress with [Astro](https://astro.build/) so the site can grow a real **blog** via content collections (`src/content/blog/`).

## What’s included

- Home (`/`), Seats (`/seats`), Projects (`/projects`) — content preserved from VitePress markdown
- **Blog** (`/blog`) with a sample post dated **2026-10-04**: “Hello from Astro”
- Site title / description, sitemap hostname `https://qinguan.me`, Microsoft Clarity (`jx1ybrea62`), AdSense meta, nav (Home / Seats / Projects / Blog / CV), GitHub + LinkedIn links
- `public/` assets kept from `master` (CV PDF, project images, favicon, etc.)

## Run locally

```bash
# from this branch
npm install   # or pnpm / yarn
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the production build
```

Static `dist/` is suitable for **GitHub Pages** or **Cloudflare Pages**.

## VitePress → Astro adaptations

| VitePress | Astro branch |
|-----------|--------------|
| `<Badge text="…" />` | `<span class="badge">…</span>` (`.info` / `.tip` variants) |
| `:::details` containers | HTML `<details>` / `<summary>` |
| Emoji shortcodes (`:wave:`) | Unicode emoji (👋 etc.) |
| `vitepress` dependency | `astro` + `@astrojs/mdx` + `@astrojs/sitemap` |

## Gaps / notes

- `components/Days.vue` ported to `src/components/Days.astro` (not wired into a page yet; original home didn’t use it either)
- Orphan `.vitepress/` / old lockfiles may still exist from the branch base — ignore them; `package.json` is Astro-only
- Binary assets under `public/` are inherited from `master` (not re-uploaded in the migration commit)
- No CI / Pages workflow changes on this branch yet

## Compare with Quartz

See branch `migrate/quartz` (if present) for the Quartz 4 alternative.
