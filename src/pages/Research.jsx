// =============================================================
// Research — curated library of primary sources.
// Papers, books, government reports. Every link verifiable.
// =============================================================
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const PAPERS = [
  {
    type: 'Paper',
    title: 'Cannabidiol in Dravet Syndrome',
    authors: 'Devinsky O, Cross JH, Laux L, et al.',
    venue: 'New England Journal of Medicine',
    year: 2017,
    tags: ['epilepsy', 'pediatric', 'CBD'],
    doi: '10.1056/NEJMoa1611618',
    note: 'The trial that put cannabis back in the FDA pharmacopeia.',
  },
  {
    type: 'Paper',
    title: 'Effect of Cannabidiol on Drop Seizures in the Lennox-Gastaut Syndrome',
    authors: 'Thiele EA, Marsh ED, French JA, et al.',
    venue: 'The Lancet',
    year: 2018,
    tags: ['epilepsy', 'pediatric', 'CBD'],
    doi: '10.1016/S0140-6736(18)30136-3',
  },
  {
    type: 'Consensus',
    title: 'The Health Effects of Cannabis and Cannabinoids',
    authors: 'National Academies of Sciences, Engineering, and Medicine',
    venue: 'NASEM Consensus Study Report',
    year: 2017,
    tags: ['comprehensive', 'evidence-review', 'chronic-pain'],
    doi: '10.17226/24625',
    note: 'The single most thorough evidence review in modern cannabis medicine.',
  },
  {
    type: 'Review',
    title: 'Cannabinoids for Chronic Neuropathic Pain in Adults',
    authors: 'Mücke M, Phillips T, Radbruch L, et al.',
    venue: 'Cochrane Database of Systematic Reviews',
    year: 2018,
    tags: ['chronic-pain', 'neuropathy'],
    doi: '10.1002/14651858.CD012182.pub2',
  },
  {
    type: 'Paper',
    title: 'Cannabis Use in Patients with PTSD: A Randomized Crossover Trial',
    authors: 'Bonn-Miller MO, Sisley S, Riggs P, et al.',
    venue: 'PLOS ONE',
    year: 2021,
    tags: ['PTSD', 'mental-health', 'veterans'],
    doi: '10.1371/journal.pone.0246990',
  },
  {
    type: 'Paper',
    title: 'Sativex Long-term Use Pattern in Patients with Spasticity Due to MS',
    authors: 'Flachenecker P, Henze T, Zettl UK',
    venue: 'European Neurology',
    year: 2014,
    tags: ['MS', 'spasticity', 'Sativex'],
    doi: '10.1159/000356210',
  },
  {
    type: 'Report',
    title: 'Indian Hemp Drugs Commission Report (7 volumes)',
    authors: 'Government of British India',
    venue: 'Imperial Government Publication',
    year: 1894,
    tags: ['history', 'India', 'policy', 'colonial'],
    note: 'The most exhaustive cannabis inquiry of the 19th century. Recommended regulation; concluded moderate use is harmless. Shelved.',
    archive: 'https://digital.nls.uk/indiapapers/browse/archive/74908458',
  },
  {
    type: 'Book',
    title: 'Marijuana Medicine: A World Tour of the Healing and Visionary Powers of Cannabis',
    authors: 'Christian Rätsch',
    venue: 'Healing Arts Press',
    year: 2001,
    tags: ['ethnobotany', 'history', 'global'],
    note: 'Cross-cultural ethnobotanical reference for cannabis as medicine.',
  },
  {
    type: 'Paper',
    title: 'O\'Shaughnessy: On the Preparations of the Indian Hemp, or Gunjah',
    authors: 'W.B. O\'Shaughnessy',
    venue: 'Transactions of the Medical and Physical Society of Bengal',
    year: 1839,
    tags: ['history', 'India', 'classical'],
    note: 'The paper that introduced Indian cannabis medicine to the West.',
  },
  {
    type: 'Review',
    title: 'Cannabinoids for Chemotherapy-Induced Nausea and Vomiting',
    authors: 'Smith LA, Azariah F, Lavender VTC, et al.',
    venue: 'Cochrane Database of Systematic Reviews',
    year: 2015,
    tags: ['oncology', 'antiemetic', 'cancer-support'],
    doi: '10.1002/14651858.CD009464.pub2',
  },
  {
    type: 'Text',
    title: 'Charaka Saṃhitā — Chikitsā Sthāna (with Hindi commentary)',
    authors: 'Editor: Pandit Kashinath Shastri',
    venue: 'Chaukhambha Sanskrit Sansthan, Varanasi',
    year: 1998,
    tags: ['classical', 'Ayurveda', 'primary-source'],
    note: 'Primary classical reference for apasmāra (epilepsy) treatment.',
  },
  {
    type: 'Text',
    title: 'Sushruta Saṃhitā — Chikitsā Sthāna',
    authors: 'Editor: K.R. Srikantha Murthy',
    venue: 'Chaukhambha Orientalia',
    year: 2005,
    tags: ['classical', 'Ayurveda', 'primary-source', 'surgery'],
    note: 'The foundational text for vāta-pradhāna pain therapy with vijaya.',
  },
];

const FILTERS = ['All', 'Paper', 'Review', 'Consensus', 'Report', 'Book', 'Text'];

export default function Research() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? PAPERS : PAPERS.filter((p) => p.type === filter);

  return (
    <main className="research">
      <section className="r-hero">
        <div className="container">
          <span className="eyebrow fade-up">Research library</span>
          <h1 className="r-title display fade-up delay-1">
            Every claim on this site
            <br />
            has a <em>citation.</em>
          </h1>
          <p className="r-lede fade-up delay-2">
            Primary sources only — peer-reviewed papers, classical Ayurvedic texts, government reports. No blogs. No "as some have said." Receipts.
          </p>

          <div className="r-filters fade-up delay-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`r-filter mono ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
                {f !== 'All' && (
                  <span className="r-filter-count">
                    {PAPERS.filter((p) => p.type === f).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="r-list">
        <div className="container">
          <ol className="papers">
            {filtered.map((p, idx) => {
              const externalUrl = p.doi ? `https://doi.org/${p.doi}` : p.archive;
              return (
                <li key={idx} className="paper">
                  <div className="paper-num mono">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="paper-body">
                    <div className="paper-type-row">
                      <span className="paper-type mono">{p.type}</span>
                      <span className="paper-year mono">{p.year}</span>
                    </div>
                    <h3 className="paper-title">{p.title}</h3>
                    <div className="paper-meta mono">
                      {p.authors} <span className="dot">·</span> <em>{p.venue}</em>
                    </div>
                    {p.note && <p className="paper-note">{p.note}</p>}
                    <div className="paper-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="paper-tag mono">{t}</span>
                      ))}
                    </div>
                    {externalUrl && (
                      <a className="paper-link mono" href={externalUrl} target="_blank" rel="noopener noreferrer">
                        {p.doi ? `DOI ${p.doi}` : 'View archive'}  <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <style>{`
        .research { position: relative; }
        .r-hero { padding: 60px 0 50px; }
        .r-title {
          font-size: clamp(48px, 7.5vw, 104px);
          line-height: 0.95;
          margin: 16px 0 28px;
        }
        .r-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .r-lede {
          font-family: var(--serif);
          font-size: 19px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 640px;
          margin-bottom: 40px;
        }

        .r-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .r-filter {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px 7px;
          border: 1px solid var(--line-strong);
          background: var(--paper);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink);
          transition: all 0.15s var(--ease-out);
        }
        .r-filter:hover { background: var(--bone-soft); }
        .r-filter.active {
          background: var(--ink);
          color: var(--saffron);
          border-color: var(--ink);
        }
        .r-filter-count {
          font-size: 10px;
          color: var(--ink-quiet);
          padding-left: 4px;
          border-left: 1px solid var(--line);
        }
        .r-filter.active .r-filter-count { color: var(--bone); border-left-color: rgba(245,240,230,0.3); }

        .r-list {
          padding: 40px 0 100px;
        }
        .papers { list-style: none; }
        .paper {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid var(--line);
        }
        .paper:last-child { border-bottom: 1px solid var(--line); }
        .paper-num {
          font-size: 32px;
          font-weight: 500;
          color: var(--saffron);
        }
        .paper-type-row {
          display: flex;
          gap: 12px;
          margin-bottom: 8px;
          align-items: baseline;
        }
        .paper-type {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--saffron);
          font-weight: 700;
        }
        .paper-year {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--ink-quiet);
        }
        .paper-title {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 500;
          margin-bottom: 10px;
          letter-spacing: -0.015em;
        }
        .paper-meta {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--ink-quiet);
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .paper-meta em { font-style: italic; color: var(--ink); }
        .paper-meta .dot { color: var(--saffron); margin: 0 6px; }
        .paper-note {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 16px;
          line-height: 1.55;
          color: var(--ink);
          padding-left: 14px;
          border-left: 2px solid var(--saffron);
          margin-bottom: 16px;
        }
        .paper-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }
        .paper-tag {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 3px 8px;
          background: var(--bone-soft);
          color: var(--ink-quiet);
        }
        .paper-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--saffron);
        }
        .paper-link:hover { text-decoration: underline; }

        @media (max-width: 720px) {
          .paper { grid-template-columns: 1fr; gap: 8px; }
          .paper-num { font-size: 20px; }
        }
      `}</style>
    </main>
  );
}
