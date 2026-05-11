// =============================================================
// Dashboard — saved files. localStorage only. Honest about that.
// =============================================================
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, BookmarkX } from 'lucide-react';
import { getBookmarks, getArchetype, clearAll, toggleBookmark } from '../lib/storage';
import { conditions } from '../data/conditions';

export default function Dashboard() {
  const [bookmarks, setBookmarks] = useState([]);
  const [archetype, setArchetypeState] = useState(null);

  useEffect(() => {
    refresh();
  }, []);

  function refresh() {
    setBookmarks(getBookmarks());
    setArchetypeState(getArchetype());
  }

  function handleRemove(id) {
    toggleBookmark(id);
    refresh();
  }

  function handleClearAll() {
    if (confirm('Clear all saved files? This cannot be undone.')) {
      clearAll();
      refresh();
    }
  }

  const savedConditions = bookmarks
    .map((id) => conditions.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <main className="dash">
      <section className="dash-hero">
        <div className="container">
          <span className="eyebrow fade-up">Your saved files</span>
          <h1 className="dash-title display fade-up delay-1">
            Your <em>files.</em>
            <br />
            Your <em>device.</em>
          </h1>
          <p className="dash-lede fade-up delay-2">
            VIJAYA has no accounts. No backend. No tracking. Everything you save lives in your browser's local storage — clear your cookies and it's gone. We chose this on purpose. Awareness shouldn't require an email signup.
          </p>
        </div>
      </section>

      <section className="dash-body">
        <div className="container">
          {/* Archetype */}
          {archetype && (
            <div className="dash-block">
              <span className="eyebrow">Your archetype</span>
              <div className="arch-card">
                <h3 className="arch-name display">{archetype.name}</h3>
                <p className="arch-desc">{archetype.description}</p>
              </div>
            </div>
          )}

          {/* Saved conditions */}
          <div className="dash-block">
            <div className="block-h">
              <span className="eyebrow">Saved evidence files ({savedConditions.length})</span>
              {savedConditions.length > 0 && (
                <button className="clear-all mono" onClick={handleClearAll}>
                  <Trash2 size={12} /> CLEAR ALL
                </button>
              )}
            </div>

            {savedConditions.length === 0 ? (
              <div className="empty">
                <p className="empty-text">
                  No files saved yet. Open any evidence file and tap <strong>SAVE</strong> in the top bar to keep it here.
                </p>
                <Link to="/" className="empty-cta mono">
                  ← Back to search
                </Link>
              </div>
            ) : (
              <div className="saved-grid">
                {savedConditions.map((c) => (
                  <div key={c.id} className="saved-card">
                    <Link to={`/condition/${c.id}`} className="saved-link">
                      <div className="saved-cat mono">{c.category}</div>
                      <h4 className="saved-name">{c.name}</h4>
                      <p className="saved-summary">{c.hook || c.summary?.slice(0, 140) + '…'}</p>
                    </Link>
                    <button
                      className="saved-remove mono"
                      onClick={() => handleRemove(c.id)}
                      aria-label="Remove from saved"
                    >
                      <BookmarkX size={13} /> REMOVE
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Privacy note */}
          <div className="dash-block privacy-note">
            <span className="eyebrow">Privacy</span>
            <p>
              VIJAYA stores your bookmarks, archetype, and reading progress in your browser's <span className="mono">localStorage</span>. We don't send this anywhere. We can't see it. We can't migrate it across devices for you — that's the trade-off for not having accounts. If you want to back it up, screenshot this page.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .dash-hero { padding: 60px 0 50px; }
        .dash-title {
          font-size: clamp(56px, 9vw, 120px);
          line-height: 0.95;
          margin: 16px 0 28px;
        }
        .dash-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .dash-lede {
          font-family: var(--serif);
          font-size: 18px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 720px;
        }

        .dash-body { padding: 40px 0 100px; }
        .dash-block { margin-bottom: 64px; }
        .block-h {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 28px;
          padding-bottom: 12px;
          border-bottom: 1.5px solid var(--ink);
        }
        .clear-all {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .clear-all:hover { color: var(--saffron); }

        /* archetype */
        .arch-card {
          padding: 40px 36px;
          background: var(--bone-soft);
          border: 1.5px solid var(--saffron);
          margin-top: 16px;
        }
        .arch-name {
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1;
          color: var(--saffron);
        }
        .arch-desc {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.6;
          margin-top: 16px;
          color: var(--ink-soft);
        }

        /* empty */
        .empty {
          padding: 60px 32px;
          background: var(--bone-soft);
          text-align: center;
          border: 1px dashed var(--line-strong);
        }
        .empty-text {
          font-family: var(--serif);
          font-size: 18px;
          color: var(--ink-soft);
          margin-bottom: 20px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }
        .empty-cta {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--saffron);
        }
        .empty-cta:hover { text-decoration: underline; }

        /* saved cards */
        .saved-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--line-strong);
          border: 1px solid var(--line-strong);
        }
        .saved-card {
          background: var(--paper);
          padding: 28px 28px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.15s var(--ease-out);
        }
        .saved-card:hover { background: var(--bone-soft); }
        .saved-link {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .saved-cat {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-quiet);
        }
        .saved-name {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 0;
          font-size: 28px;
          line-height: 1.05;
          letter-spacing: -0.02em;
          font-weight: 500;
        }
        .saved-summary {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 15px;
          line-height: 1.55;
          color: var(--ink-soft);
        }
        .saved-remove {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          border: 1px solid var(--line);
        }
        .saved-remove:hover {
          color: var(--saffron);
          border-color: var(--saffron);
        }

        /* privacy */
        .privacy-note p {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 760px;
          margin-top: 12px;
        }
        .privacy-note .mono {
          font-size: 13px;
          padding: 2px 6px;
          background: var(--bone-soft);
        }

        @media (max-width: 720px) {
          .saved-grid { grid-template-columns: 1fr; }
          .block-h { flex-direction: column; gap: 12px; align-items: flex-start; }
        }
      `}</style>
    </main>
  );
}
