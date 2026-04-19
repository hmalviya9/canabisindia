# VIJAYA

> Before it was taboo, it was sacred.

An awareness atlas on cannabis in India — 3,500 years of history, 10 Ayurvedic therapies, the Vedic record, the adulteration crisis, and the psychedelic research catching up. Single-page React app built with Vite.

## Stack

- **Vite** + **React 18** (single-file component in `src/App.jsx`)
- **lucide-react** for icons
- **Google Fonts**: Spectral, Tiro Devanagari Hindi, Inter (loaded via `index.html`)
- **Canvas API** for share-card PNG generation (no external libs)
- Inline styles only — no CSS framework

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy to Vercel

**Option A — CLI:**

```bash
npm install -g vercel
vercel
```

Follow prompts. Defaults work.

**Option B — GitHub + Vercel dashboard:**

1. Push this folder to a GitHub repo
2. On [vercel.com](https://vercel.com), click **New Project → Import your repo**
3. Framework preset should auto-detect as **Vite**
4. Click **Deploy**

Done. `vercel.json` handles SPA rewrites so any URL serves the app.

## Before you deploy

1. **Replace the OG image.** `public/og-image.png` is what shows up when someone shares your URL on WhatsApp, LinkedIn, Discord, Facebook. A placeholder is included — replace with a proper 1200×630 branded image before going live. The one in this repo is an auto-generated default.

2. **Update the canonical URL.** In `index.html`, `<meta property="og:url" content="https://vijaya.app/" />` — change to your actual domain.

3. **Instagram note.** X, Instagram, and most platforms re-fetch OG images on first share. If you update the image after a link has been shared, use Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) to force a re-scrape.

## Project layout

```
vijaya/
├── index.html          ← meta tags, fonts, favicon
├── package.json
├── vercel.json         ← SPA rewrites
├── vite.config.js
├── public/
│   └── og-image.png    ← 1200×630 share preview
└── src/
    ├── App.jsx         ← the whole app, single file
    ├── main.jsx        ← React mount
    └── index.css       ← reset + body font
```

## Credits & sources

- **Atharva Veda 11.6.15** — Griffith (1895) and Whitney translations
- **Sushruta Samhita** — c. 600 BCE, referenced for bhanga as medicinal
- **NDPS Act 1985** — Section 2(iii), India's narcotics legislation; bhang exempted
- **Compass Pathways COMP360** — Phase 3 trial data, 2025–26, for psilocybin status
- **AIIMS / MoSJE 2019 survey** — Indian cannabis prevalence statistics
- **Karnataka HC 2022, Kerala HC 2025** — bhang legality case law

Every claim in the app is traceable to a source. No fabricated statistics.

## License

MIT. Fork, remix, translate, localize.

## A note

The app holds a position — that cannabis deserves to be reconsidered on Indian terms, not colonial ones — but it holds it honestly. Soma is not claimed to be cannabis (the Vedic text places Soma as Lord *over* bhang, not identical to it). Therapeutic claims are labeled by evidence level. Responsible-use considerations are acknowledged. Data integrity over advocacy comfort.

Built in partnership with Claude.
