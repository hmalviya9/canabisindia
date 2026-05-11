# VIJAYA v2

> The symptom-to-therapy matcher for India's 3,500-year-old medicine.
> Type your condition. See what India knew first.

---

## What v2 is

v1 was an awareness atlas — beautiful, scholarly, saffron, share-card-first.

v2 is **the evidence file**. A searchable database of 30 conditions where cannabis has both classical Ayurvedic precedent and modern peer-reviewed evidence. The homepage is a search box. The result page is a screenshot. The pitch is: *India invented this medicine and banned it — here's the receipt.*

## Tone shift from v1

- v1: scholarly-saffron. Reads like a museum.
- v2: editorial-meets-protest. Reads like the *NYT Mag* crossed with a zine. High-contrast typography (deep ink + bone + saffron accent), big oversized numerals, pull-quotes, century-rail timelines, downloadable share cards on every result.

## Architecture

Vercel-static. No backend. No accounts. All "saved" state is in `localStorage` (honest about that).

```
src/
├── data/
│   └── conditions.js          # 30 conditions, 5 fully populated
├── pages/
│   ├── Home.jsx               # Hero: search + featured
│   ├── ConditionResult.jsx    # THE screenshot moment
│   ├── Timeline.jsx           # 3,500-year scroll (12 events)
│   ├── Research.jsx           # 12 cited primary sources
│   ├── Directory.jsx          # Honest: links to official AYUSH registries
│   ├── Petition.jsx           # MP email + social toolkit + commitment
│   ├── Dashboard.jsx          # localStorage-backed saves
│   └── Archetype.jsx          # v1 quiz, preserved + saved
├── components/
│   ├── ConditionSearch.jsx    # Fuzzy-search input with keyboard nav
│   ├── Nav.jsx
│   └── Footer.jsx
├── lib/
│   ├── shareCard.js           # Canvas → PNG (IG 1080×1350 + X 1200×675)
│   └── storage.js             # localStorage wrapper
└── styles/
    └── global.css             # Design tokens, base, utility classes
```

## Mechanics shipped (all six, backend-free)

1. **Symptom-to-therapy matcher** — fuzzy search across name, aliases, category, summary. 8 results max. Keyboard nav.
2. **Doctor directory** — opt-in only. We link to the 14 official AYUSH registries by state. We do not scrape. (DPDP Act risk is real; this is the honest version.)
3. **Petition + share toolkit** — Pre-written MP email (mailto), 3 social scripts (X / IG / Reels), commitment card. No backend signatures.
4. **Interactive timeline** — 12 curated events, 1500 BCE → 2026. Citation under each.
5. **Personal dashboard** — bookmarks, archetype, reading progress. localStorage only. Honest privacy note.
6. **Research library** — 12 primary sources with DOI links + filter by type (Paper, Review, Consensus, Report, Book, Text).

## Share-card system

Every fully-populated condition has a `share_card` field with a headline, subhead, stat, and stat caption. The `shareCard.js` library renders these to canvas at:

- **IG portrait** 1080 × 1350
- **X / Twitter** 1200 × 675

Canvas-based — no `html2canvas`, no external dependencies. Saffron stamp, century markers, grain noise, masthead bar. Downloads as PNG.

## What's fully populated vs scaffolded

**Fully populated (5)** — full classical + modern + India-status + share card + key studies with DOIs:
- Epilepsy
- Chronic Pain
- Multiple Sclerosis
- Chemotherapy-Induced Nausea
- PTSD

**Scaffolded (25)** — name, aliases, category, hook, summary, basic India-status. Result page shows an honest "draft, in progress" stamp and the editor's note. Surfaced in search; saves to dashboard; share buttons hidden until fully populated.

This is the right shape — we publish only what we can cite. The next pass is content work: condition-by-condition, fully populated.

## Local dev

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # → dist/
npm run preview
```

## Deploy

`vercel.json` is set for SPA rewrites (so `/condition/epilepsy` resolves on direct hit). Push to Vercel, point a domain at it, done.

## License

CC0. Open evidence. No rights reserved.
