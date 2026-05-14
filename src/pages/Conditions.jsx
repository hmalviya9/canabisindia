// =============================================================
// Conditions — the missing index page.
// Browse every condition VIJAYA covers, grouped by medical category.
// 18 fully-populated + 12 honest stubs.
// =============================================================
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { conditions, isFullyPopulated } from '../data/conditions';

export default function Conditions() {
  const fully = conditions.filter(isFullyPopulated);
  const stubs = conditions.filter((c) => !isFullyPopulated(c));

  // Group fully-populated by category, preserving the order categories first appear
  const byCategory = {};
  fully.forEach((c) => {
    if (!byCategory[c.category]) byCategory[c.category] = [];
    byCategory[c.category].push(c);
  });
  const categoriesOrdered = Object.keys(byCategory);

  return (
    <main className="conditions">
      {/* HERO */}
      <section className="cx-hero">
        <div className="container">
          <span className="eyebrow fade-up">The evidence files</span>
          <h1 className="cx-title display fade-up delay-1">
            {fully.length} conditions.
            <br />
            <em>Every claim sourced.</em>
          </h1>
          <p className="cx-lede fade-up delay-2">
            Each entry anchors classical pharmacology to a specific Sanskrit verse — usually Bhāvaprakāśa Nighaṇṭu verse 233 — and pairs it with verified modern clinical evidence (DOIs included). Where the popular cannabis-and-India story exceeds what the textual record supports, we say so. Where it understates it (the Sushruta surgical-anesthesia case), we say that too.
          </p>
          <div className="cx-meta mono fade-up delay-3">
            {fully.length} fully populated  ·  {stubs.length} honest stubs in progress  ·  three medical traditions
          </div>
        </div>
      </section>

      {/* CATEGORY GRID */}
      {categoriesOrdered.map((cat) => (
        <section key={cat} className="cx-cat">
          <div className="container">
            <header className="cat-h">
              <span className="eyebrow">{cat}</span>
              <div className="cat-count mono">
                {byCategory[cat].length} {byCategory[cat].length === 1 ? 'condition' : 'conditions'}
              </div>
            </header>

            <ul className="cat-list">
              {byCategory[cat].map((c) => (
                <li key={c.id} className="cat-row">
                  <Link to={`/condition/${c.id}`} className="cat-link">
                    <div className="cat-row-main">
                      <h3 className="cat-name">{c.name}</h3>
                      {c.hook && <p className="cat-hook">{c.hook}</p>}
                    </div>
                    <div className="cat-row-meta">
                      <span className="mono cat-tag">{c.severity_tag}</span>
                      <ArrowUpRight size={18} strokeWidth={2} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* STUBS — honestly listed */}
      <section className="cx-stubs">
        <div className="container">
          <header className="stubs-h">
            <span className="eyebrow">Honest stubs · in progress</span>
            <h2 className="stubs-title display">
              {stubs.length} more conditions.
              <br />
              Not <em>full files</em> yet.
            </h2>
            <p className="stubs-lede">
              These pages exist as one-line summaries while we source the underlying citations the way VIJAYA's other entries are sourced. They are listed here honestly rather than padded with material we cannot anchor to a verifiable source.
            </p>
          </header>

          <ul className="stubs-list">
            {stubs.map((c) => (
              <li key={c.id} className="stub-row">
                <Link to={`/condition/${c.id}`} className="stub-link">
                  <span className="stub-name">{c.name}</span>
                  <span className="mono stub-cat">{c.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style>{`
        .conditions { position: relative; }

        .cx-hero { padding: 60px 0 60px; }
        .cx-title {
          font-size: clamp(56px, 9vw, 132px);
          line-height: 0.92;
          margin: 16px 0 28px;
        }
        .cx-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .cx-lede {
          font-family: var(--serif);
          font-size: 20px;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 820px;
          margin-bottom: 20px;
        }
        .cx-meta {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }

        /* CATEGORY SECTIONS */
        .cx-cat {
          padding: 60px 0;
          border-top: 1px solid var(--line);
        }
        .cx-cat:nth-of-type(odd) {
          background: var(--bone-soft);
        }
        .cat-h {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1.5px solid var(--ink);
        }
        .cat-count {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }

        .cat-list {
          list-style: none;
        }
        .cat-row {
          border-bottom: 1px solid var(--line);
        }
        .cat-row:last-child {
          border-bottom: none;
        }
        .cat-link {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 32px;
          align-items: center;
          padding: 24px 4px;
          color: var(--ink);
          transition: color 0.18s var(--ease-out), background 0.18s var(--ease-out);
        }
        .cat-link:hover {
          background: var(--paper);
          color: var(--saffron-deep);
        }
        .cat-row-main {
          min-width: 0;
        }
        .cat-name {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: clamp(22px, 2.4vw, 30px);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin-bottom: 6px;
        }
        .cat-hook {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.5;
          color: var(--ink-soft);
          max-width: 720px;
        }
        .cat-link:hover .cat-hook {
          color: var(--ink);
        }
        .cat-row-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--ink-quiet);
        }
        .cat-tag {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }
        .cat-link:hover .cat-row-meta {
          color: var(--saffron-deep);
        }

        /* STUBS */
        .cx-stubs {
          padding: 100px 0;
          background: var(--ink);
          color: var(--bone);
        }
        .cx-stubs .eyebrow { color: var(--saffron); }
        .stubs-h {
          max-width: 820px;
          margin-bottom: 56px;
        }
        .stubs-title {
          font-size: clamp(40px, 5.5vw, 72px);
          line-height: 1;
          margin: 12px 0 20px;
        }
        .stubs-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .stubs-lede {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.6;
          color: rgba(245, 240, 230, 0.75);
        }

        .stubs-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(245, 240, 230, 0.15);
          border: 1px solid rgba(245, 240, 230, 0.15);
        }
        .stub-row {
          background: var(--ink);
        }
        .stub-link {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding: 20px 24px;
          color: rgba(245, 240, 230, 0.9);
          transition: background 0.15s var(--ease-out), color 0.15s var(--ease-out);
        }
        .stub-link:hover {
          background: rgba(232, 84, 28, 0.12);
          color: var(--saffron);
        }
        .stub-name {
          font-family: var(--serif);
          font-size: 17px;
          font-weight: 500;
          font-variation-settings: "opsz" 36, "SOFT" 30;
        }
        .stub-cat {
          font-size: 10px;
          letter-spacing: 0.14em;
          color: rgba(245, 240, 230, 0.5);
          text-transform: uppercase;
        }

        @media (max-width: 720px) {
          .cat-link {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .stubs-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
