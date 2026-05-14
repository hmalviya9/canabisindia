// =============================================================
// Hemp Commission 1894 — curated reader.
// We do not mirror the full 3,281 pages. We point to the archive.
// =============================================================
import { ExternalLink } from 'lucide-react';
import { hempCommission } from '../data/hempCommission';

export default function HempCommission() {
  const h = hempCommission;

  return (
    <main className="hc">
      {/* HERO */}
      <section className="hc-hero">
        <div className="container">
          <span className="eyebrow fade-up">Indian Hemp Drugs Commission · 1893–94</span>
          <h1 className="hc-title display fade-up delay-1">
            The British studied cannabis
            <br />
            for <em>seven volumes.</em>
            <br />
            They said: <span className="hc-saffron">harmless.</span>
          </h1>
          <p className="hc-lede fade-up delay-2">
            {h.meta.witnesses_examined.toLocaleString()} witnesses. {h.meta.volumes} volumes. {h.meta.estimated_pages.toLocaleString()} pages. The most exhaustive cannabis inquiry of the 19th century, commissioned by the British Parliament, conducted across every province of British India.
          </p>
          <p className="hc-question fade-up delay-3">
            <span className="mono qlabel">Their question:</span> {h.meta.primary_question}
          </p>
        </div>
      </section>

      {/* META BAR */}
      <section className="hc-meta">
        <div className="container">
          <div className="meta-grid">
            <div className="meta-stat">
              <div className="meta-num display">{h.meta.volumes}</div>
              <div className="meta-l mono">Volumes</div>
            </div>
            <div className="meta-stat">
              <div className="meta-num display">{h.meta.estimated_pages.toLocaleString()}</div>
              <div className="meta-l mono">Pages</div>
            </div>
            <div className="meta-stat">
              <div className="meta-num display">{h.meta.witnesses_examined.toLocaleString()}</div>
              <div className="meta-l mono">Witnesses</div>
            </div>
            <div className="meta-stat">
              <div className="meta-num display">{h.meta.commission_size}</div>
              <div className="meta-l mono">Commissioners</div>
            </div>
          </div>
        </div>
      </section>

      {/* CENTRAL FINDINGS */}
      <section className="hc-findings">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Central findings</span>
            <h2 className="display sec-title">What they concluded.</h2>
            <p className="sec-sub">In the Commission's own words, lightly excerpted, with volume references. Read the full reports at the archive links below.</p>
          </header>

          <ol className="findings-list">
            {h.central_findings.map((f, i) => (
              <li key={i} className="finding">
                <div className="finding-num mono">{String(i + 1).padStart(2, '0')}</div>
                <div className="finding-body">
                  <h3 className="finding-h">{f.heading}</h3>
                  <blockquote className="finding-q">
                    {f.passage}
                  </blockquote>
                  <div className="finding-ref mono">— {f.volume_ref}</div>
                  {f.framing && <p className="finding-frame">{f.framing}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="hc-recs">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Recommendations</span>
            <h2 className="display sec-title">They didn't say "ban it."</h2>
            <p className="sec-sub">The Commission explicitly rejected prohibition and recommended regulation. That recommendation was ignored when the NDPS Act was drafted 91 years later.</p>
          </header>

          <ul className="recs-grid">
            {h.recommendations_summary.map((r, i) => (
              <li key={i} className="rec-card">
                <div className="rec-num mono">{String(i + 1).padStart(2, '0')}</div>
                <h4 className="rec-h">{r.item}</h4>
                <p className="rec-body">{r.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WITNESS EXAMPLES */}
      <section className="hc-witness">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Witness testimony</span>
            <h2 className="display sec-title">Medical and religious witnesses.</h2>
            <p className="sec-sub">Of the {h.meta.witnesses_examined.toLocaleString()} witnesses examined, we curate a small sample below to indicate the breadth and method. The full witness volumes are in the archive.</p>
          </header>

          <div className="wit-list">
            {h.witness_examples.map((w, i) => (
              <article key={i} className="wit-card">
                <div className="wit-name">{w.witness}</div>
                <div className="wit-des mono">{w.designation}</div>
                <p className="wit-test">{w.testimony_summary}</p>
                <div className="wit-vol mono">{w.volume_ref}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODERN RELEVANCE */}
      <section className="hc-now">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Why this matters in 2026</span>
            <h2 className="display sec-title">The colonial inquiry was right.</h2>
          </header>

          <div className="now-points">
            <div className="now-point">
              <div className="now-n mono">i.</div>
              <p>{h.modern_relevance.point_1}</p>
            </div>
            <div className="now-point">
              <div className="now-n mono">ii.</div>
              <p>{h.modern_relevance.point_2}</p>
            </div>
            <div className="now-point">
              <div className="now-n mono">iii.</div>
              <p>{h.modern_relevance.point_3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVES */}
      <section className="hc-archives">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Read the full report</span>
            <h2 className="display sec-title">{h.meta.estimated_pages.toLocaleString()} pages, free to anyone.</h2>
            <p className="sec-sub">We don't mirror the full report on VIJAYA. It lives in the public archives where it belongs. Here's where to find every volume:</p>
          </header>

          <ul className="arch-list">
            {h.meta.archives.map((a, i) => (
              <li key={i} className="arch-card">
                <div className="arch-host mono">{a.host}</div>
                <p className="arch-note">{a.note}</p>
                <a className="arch-link mono" href={a.url} target="_blank" rel="noopener noreferrer">
                  Open archive <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <style>{`
        .hc { position: relative; }
        .hc-hero { padding: 60px 0 60px; }
        .hc-title {
          font-size: clamp(48px, 8vw, 116px);
          line-height: 0.92;
          margin: 16px 0 28px;
        }
        .hc-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .hc-saffron { color: var(--saffron); }
        .hc-lede {
          font-family: var(--serif);
          font-size: 20px;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 820px;
          margin-bottom: 24px;
        }
        .hc-question {
          padding: 20px 24px;
          background: var(--bone-soft);
          border-left: 3px solid var(--saffron);
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.55;
          font-style: italic;
          max-width: 820px;
        }
        .qlabel {
          font-style: normal;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--saffron);
          font-weight: 700;
          margin-right: 8px;
        }

        .hc-meta {
          padding: 60px 0;
          background: var(--ink);
          color: var(--bone);
        }
        .meta-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          text-align: center;
        }
        .meta-num {
          font-size: clamp(48px, 6vw, 80px);
          color: var(--saffron);
          line-height: 1;
          letter-spacing: -0.03em;
        }
        .meta-l {
          margin-top: 8px;
          font-size: 11px;
          letter-spacing: 0.18em;
          color: rgba(245, 240, 230, 0.7);
          text-transform: uppercase;
        }

        .hc-findings,
        .hc-recs,
        .hc-witness,
        .hc-now,
        .hc-archives {
          padding: 100px 0;
        }
        .hc-recs { background: var(--bone-soft); }
        .hc-now { background: var(--ink); color: var(--bone); }
        .hc-now .eyebrow { color: var(--saffron); }

        .sec-h { margin-bottom: 56px; max-width: 880px; }
        .sec-title {
          font-size: clamp(40px, 5.5vw, 68px);
          line-height: 1;
          margin-top: 8px;
        }
        .sec-sub {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink-soft);
          margin-top: 16px;
        }
        .hc-now .sec-sub { color: rgba(245, 240, 230, 0.7); }

        /* findings */
        .findings-list { list-style: none; }
        .finding {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid var(--line);
        }
        .finding:last-child { border-bottom: 1px solid var(--line); }
        .finding-num {
          font-size: 28px;
          color: var(--saffron);
          font-weight: 500;
        }
        .finding-h {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 24px;
          font-weight: 500;
          margin-bottom: 14px;
          letter-spacing: -0.015em;
        }
        .finding-q {
          font-family: var(--serif);
          font-variation-settings: "opsz" 96, "SOFT" 30, "WONK" 1;
          font-style: italic;
          font-size: clamp(22px, 2.5vw, 30px);
          line-height: 1.4;
          color: var(--ink);
          padding-left: 20px;
          border-left: 3px solid var(--saffron);
          margin: 14px 0;
        }
        .finding-ref {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .finding-frame {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        /* recommendations */
        .recs-grid {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--line-strong);
          border: 1px solid var(--line-strong);
        }
        .rec-card {
          background: var(--bone-soft);
          padding: 32px;
        }
        .rec-num {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--saffron);
          font-weight: 700;
          margin-bottom: 12px;
        }
        .rec-h {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 12px;
          letter-spacing: -0.015em;
        }
        .rec-body {
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        /* witness */
        .wit-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .wit-card {
          padding: 28px;
          background: var(--paper);
          border: 1.5px solid var(--ink);
        }
        .wit-name {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 4px;
          letter-spacing: -0.01em;
        }
        .wit-des {
          font-size: 10px;
          letter-spacing: 0.16em;
          color: var(--saffron);
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .wit-test {
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-soft);
          margin-bottom: 12px;
        }
        .wit-vol {
          font-size: 10px;
          letter-spacing: 0.12em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }

        /* now */
        .now-points {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .now-point {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid rgba(245, 240, 230, 0.15);
        }
        .now-n {
          font-size: 18px;
          color: var(--saffron);
          font-weight: 700;
        }
        .now-point p {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 18px;
          line-height: 1.6;
          color: var(--bone);
        }

        /* archives */
        .arch-list {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .arch-card {
          padding: 28px 32px;
          background: var(--bone-soft);
          display: grid;
          grid-template-columns: 200px 1fr auto;
          gap: 24px;
          align-items: center;
        }
        .arch-host {
          font-size: 12px;
          letter-spacing: 0.14em;
          color: var(--saffron);
          font-weight: 700;
          text-transform: uppercase;
        }
        .arch-note {
          font-family: var(--serif);
          font-size: 15px;
          color: var(--ink-soft);
        }
        .arch-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          border: 1.5px solid var(--ink);
          color: var(--ink);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          white-space: nowrap;
          transition: all 0.18s var(--ease-out);
        }
        .arch-link:hover { background: var(--ink); color: var(--saffron); }

        @media (max-width: 880px) {
          .meta-grid { grid-template-columns: repeat(2, 1fr); gap: 28px; }
          .recs-grid, .wit-list { grid-template-columns: 1fr; }
          .arch-card { grid-template-columns: 1fr; gap: 12px; }
          .finding { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>
    </main>
  );
}
