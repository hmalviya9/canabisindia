// =============================================================
// Citations — the verified classical references for VIJAYA's
// claims about Ayurvedic / Vedic medical tradition. Every entry
// names a specific critical edition with verse number.
// =============================================================
import { citationsByPeriod } from '../data/citations';

export default function Citations() {
  const cites = citationsByPeriod();

  return (
    <main className="cit">
      {/* HERO */}
      <section className="cit-hero">
        <div className="container">
          <span className="eyebrow fade-up">Classical citations · sourced</span>
          <h1 className="cit-title display fade-up delay-1">
            Every Sanskrit claim
            <br />
            on VIJAYA has a <em>verse number.</em>
          </h1>
          <p className="cit-lede fade-up delay-2">
            The popular cannabis-in-India story attributes pharmacology to Sushruta and Charaka in 600 BCE. Textual scholarship is more careful — the earliest uncontested medical references to bhaṅgā appear in the medieval Nighantu literature. We publish what we can anchor to a critical edition.
          </p>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="cit-note">
        <div className="container">
          <div className="note-card">
            <div className="note-h mono">A correction from VIJAYA v1</div>
            <p>
              Earlier versions of this site attributed cannabis-medicine protocols to Sushruta Saṃhitā (c. 600 BCE) and Charaka Saṃhitā. That attribution is widespread in cannabis-history writing but is not anchored to specific therapeutic verses. The honest version: <strong>Sushruta classifies bhaṅgā as upa-viṣa (semi-poison)</strong>, requiring shodhana before any therapeutic use. The earliest uncontested medical use appears in <strong>Vaṅgasena's Cikitsā-sāra-saṃgraha (11th century CE)</strong>, with the canonical pharmacology in <strong>Bhāvaprakāśa Nighaṇṭu verse 233 (16th century CE)</strong> and the most extensive treatment in <strong>Ānanda Kanda</strong> (Rasa Shastra).
            </p>
            <p>
              This is what conservative citation strictness looks like in practice. The classical tradition is rich. It just doesn't start where popular writing places it.
            </p>
          </div>
        </div>
      </section>

      {/* CITATIONS LIST */}
      <section className="cit-list">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">The references</span>
            <h2 className="display sec-title">Period by period.</h2>
          </header>

          <ol className="cits">
            {cites.map((c, i) => (
              <li key={c.id} className="cit-entry">
                <div className="cit-num mono">{String(i + 1).padStart(2, '0')}</div>
                <div className="cit-body">
                  <header className="cit-head">
                    <h3 className="cit-work">
                      <em>{c.work}</em>
                      {c.author && <span className="cit-author"> · {c.author}</span>}
                    </h3>
                    <div className="cit-period mono">{c.period}</div>
                    {c.location && <div className="cit-loc mono">{c.location}</div>}
                  </header>

                  {c.sanskrit && (
                    <div className="cit-block sanskrit-block">
                      <div className="cit-blabel mono">Sanskrit</div>
                      <div className="sanskrit">{c.sanskrit}</div>
                    </div>
                  )}

                  {c.iast && (
                    <div className="cit-block">
                      <div className="cit-blabel mono">IAST transliteration</div>
                      <div className="iast">{c.iast}</div>
                    </div>
                  )}

                  {c.sanskrit_summary && (
                    <div className="cit-block sanskrit-block">
                      <div className="cit-blabel mono">Sanskrit (summary verse)</div>
                      <div className="sanskrit">{c.sanskrit_summary}</div>
                    </div>
                  )}

                  {c.iast_summary && (
                    <div className="cit-block">
                      <div className="cit-blabel mono">IAST transliteration</div>
                      <div className="iast">{c.iast_summary}</div>
                    </div>
                  )}

                  {c.translation && (
                    <div className="cit-block">
                      <div className="cit-blabel mono">Translation</div>
                      <div className="trans">{c.translation}</div>
                    </div>
                  )}

                  {c.translation_griffith && (
                    <div className="cit-block">
                      <div className="cit-blabel mono">Translation (Griffith, 1895)</div>
                      <div className="trans">{c.translation_griffith}</div>
                      {c.translation_griffith_source && (
                        <div className="trans-src mono">— {c.translation_griffith_source}</div>
                      )}
                    </div>
                  )}

                  {c.translation_whitney && (
                    <div className="cit-block">
                      <div className="cit-blabel mono">Translation (Whitney, 1905)</div>
                      <div className="trans">{c.translation_whitney}</div>
                      {c.translation_whitney_source && (
                        <div className="trans-src mono">— {c.translation_whitney_source}</div>
                      )}
                    </div>
                  )}

                  {c.summary && (
                    <div className="cit-block">
                      <div className="cit-blabel mono">Context</div>
                      <p className="cit-summary">{c.summary}</p>
                    </div>
                  )}

                  {c.sanskrit_note && (
                    <div className="cit-block">
                      <div className="cit-blabel mono">Note</div>
                      <p className="cit-summary">{c.sanskrit_note}</p>
                    </div>
                  )}

                  {c.caveat && (
                    <div className="cit-block caveat">
                      <div className="cit-blabel mono caveat-label">⚠ Scholarly caveat</div>
                      <p>{c.caveat}</p>
                    </div>
                  )}

                  {c.edition && (
                    <div className="cit-edition mono">
                      <span className="ed-label">EDITION:</span> {c.edition}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <style>{`
        .cit { position: relative; }
        .cit-hero { padding: 60px 0 50px; }
        .cit-title {
          font-size: clamp(48px, 8vw, 116px);
          line-height: 0.95;
          margin: 16px 0 28px;
        }
        .cit-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .cit-lede {
          font-family: var(--serif);
          font-size: 19px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 800px;
        }

        .cit-note { padding: 40px 0 60px; }
        .note-card {
          padding: 36px 40px;
          background: rgba(232, 84, 28, 0.08);
          border-left: 4px solid var(--saffron);
          max-width: 920px;
        }
        .note-h {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--saffron);
          font-weight: 700;
          margin-bottom: 16px;
        }
        .note-card p {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink);
          margin-bottom: 14px;
        }
        .note-card strong {
          font-weight: 600;
          font-variation-settings: "opsz" 14, "SOFT" 0;
        }

        .cit-list { padding: 60px 0 120px; }
        .sec-h { margin-bottom: 56px; }
        .sec-title { font-size: clamp(36px, 5vw, 60px); line-height: 1; margin-top: 8px; }

        .cits { list-style: none; }
        .cit-entry {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 28px;
          padding: 40px 0;
          border-top: 1px solid var(--line);
        }
        .cit-entry:last-child { border-bottom: 1px solid var(--line); }
        .cit-num {
          font-size: 28px;
          color: var(--saffron);
          font-weight: 500;
        }

        .cit-head { margin-bottom: 24px; }
        .cit-work {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 30px;
          font-weight: 500;
          line-height: 1.1;
          margin-bottom: 6px;
          letter-spacing: -0.015em;
        }
        .cit-work em {
          font-style: italic;
          font-variation-settings: "opsz" 36, "SOFT" 100, "WONK" 1;
        }
        .cit-author {
          font-style: normal;
          font-size: 22px;
          color: var(--ink-quiet);
          font-weight: 400;
        }
        .cit-period, .cit-loc {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }

        .cit-block {
          margin: 18px 0;
        }
        .cit-blabel {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--saffron);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .sanskrit-block .cit-blabel { color: var(--saffron); }
        .sanskrit {
          font-family: 'Noto Serif Devanagari', 'Sanskrit Text', var(--serif);
          font-size: 22px;
          line-height: 1.7;
          color: var(--ink);
          padding: 14px 18px;
          background: var(--bone-soft);
          border-left: 3px solid var(--saffron);
        }
        .iast {
          font-family: var(--serif);
          font-style: italic;
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-soft);
          padding: 6px 0;
        }
        .trans {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink);
        }
        .trans-src {
          margin-top: 6px;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }
        .cit-summary {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-soft);
        }

        .caveat {
          padding: 16px 20px;
          background: rgba(14, 14, 12, 0.04);
          border-left: 3px solid var(--ink);
          margin: 24px 0;
        }
        .caveat-label {
          color: var(--ink) !important;
        }
        .caveat p {
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink);
        }

        .cit-edition {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px dashed var(--line-strong);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: var(--ink-quiet);
          line-height: 1.6;
        }
        .ed-label {
          color: var(--saffron);
          font-weight: 700;
          margin-right: 6px;
        }

        @media (max-width: 720px) {
          .cit-entry { grid-template-columns: 1fr; gap: 12px; }
          .sanskrit { font-size: 18px; }
        }
      `}</style>
    </main>
  );
}
