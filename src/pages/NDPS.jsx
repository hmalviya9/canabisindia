// =============================================================
// NDPS Act page — the law that criminalized vijaya, in plain English.
// =============================================================
import { ExternalLink } from 'lucide-react';
import { ndpsBreakdown } from '../data/ndpsBreakdown';

export default function NDPS() {
  const d = ndpsBreakdown;

  return (
    <main className="ndps">
      {/* HERO */}
      <section className="ndps-hero">
        <div className="container">
          <span className="eyebrow fade-up">The Act that did it</span>
          <h1 className="ndps-title display fade-up delay-1">
            NDPS, 1985.
            <br />
            <em>In plain English.</em>
          </h1>
          <p className="ndps-lede fade-up delay-2">
            The Narcotic Drugs and Psychotropic Substances Act, 1985 — the single law that converted India's three-thousand-year-old pharmacy into a criminal schedule. We break it down section by section, in language anyone can read.
          </p>
          <p className="ndps-disclaimer mono fade-up delay-3">
            This is education, not legal advice. Consult a lawyer for specific cases.
          </p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="ndps-history">
        <div className="container">
          <div className="hist-grid">
            <div>
              <span className="eyebrow">Why this Act exists</span>
              <h2 className="hist-h display">It wasn't an Indian decision.</h2>
            </div>
            <div className="hist-body">
              <p>{d.history.why_1985}</p>
              <p>{d.history.political_context}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEFINITIONS */}
      <section className="ndps-section">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Definitions · Section 2</span>
            <h2 className="display sec-title">What the Act actually says cannabis is.</h2>
          </header>

          <div className="def-list">
            {d.definitions.map((def, i) => (
              <div key={i} className="def-card">
                <div className="def-meta">
                  <span className="mono def-section">{def.section}</span>
                  <span className="def-term">{def.term}</span>
                </div>
                <p className="def-body">{def.plain_english}</p>
                {def.crucial_omission && (
                  <div className="def-omission">
                    <span className="mono omission-label">⚠ THE BHANG LOOPHOLE</span>
                    <p>{def.crucial_omission}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE CENTRAL OFFENCE */}
      <section className="ndps-section ndps-offence">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">The operative provision · {d.central_offence.section}</span>
            <h2 className="display sec-title">{d.central_offence.title}</h2>
          </header>

          <p className="off-summary">{d.central_offence.full_text_summary}</p>

          <div className="sentencing">
            <div className="sent-h mono">Sentencing tiers</div>
            <table className="sent-table">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Threshold</th>
                  <th>Punishment</th>
                </tr>
              </thead>
              <tbody>
                {d.central_offence.sentencing.map((s, i) => (
                  <tr key={i}>
                    <td className="sent-q">{s.quantity}</td>
                    <td className="mono">{s.threshold}</td>
                    <td>{s.punishment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="sent-source mono">Source: {d.central_offence.source}</div>
          </div>
        </div>
      </section>

      {/* WHAT'S PERMITTED */}
      <section className="ndps-section">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">What is actually permitted</span>
            <h2 className="display sec-title">The Act is not absolute prohibition.</h2>
          </header>

          <div className="perm-grid">
            {d.permitted.map((p, i) => (
              <article key={i} className="perm-card">
                <div className="mono perm-sec">{p.section}</div>
                <p className="perm-summary">{p.summary}</p>
                {p.practical_effect && (
                  <div className="perm-effect">
                    <span className="mono perm-eff-label">IN PRACTICE</span>
                    <p>{p.practical_effect}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ENFORCEMENT */}
      <section className="ndps-section ndps-enforce">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Enforcement powers</span>
            <h2 className="display sec-title">How the Act is used.</h2>
          </header>

          <div className="enf-list">
            {d.enforcement.map((e, i) => (
              <div key={i} className="enf-item">
                <div className="enf-meta">
                  <span className="mono enf-sec">{e.section}</span>
                  <h4 className="enf-title">{e.title}</h4>
                </div>
                <p className="enf-body">{e.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFORM ASKS */}
      <section className="ndps-section ndps-reform">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">What reform looks like</span>
            <h2 className="display sec-title">Four specific changes.</h2>
            <p className="sec-sub">These aren't radical. They're what most peer-democracies already do.</p>
          </header>

          <ol className="reform-list">
            {d.reform_asks.map((r, i) => (
              <li key={i} className="reform-item">
                <div className="reform-num display">{String(i + 1).padStart(2, '0')}</div>
                <div className="reform-body">
                  <h4 className="reform-h">{r.ask}</h4>
                  <p>{r.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SOURCE */}
      <section className="ndps-source">
        <div className="container">
          <div className="src-card">
            <span className="eyebrow">Read it yourself</span>
            <h3 className="src-h display">The Act is public domain.</h3>
            <p>The complete NDPS Act 1985 and all subsequent amendments are freely available at the Government of India's official code repository.</p>
            <a className="src-link mono" href={d.meta.public_text_url} target="_blank" rel="noopener noreferrer">
              indiacode.nic.in / NDPS Act 1985 <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .ndps { position: relative; }
        .ndps-hero { padding: 60px 0 60px; }
        .ndps-title {
          font-size: clamp(56px, 9vw, 132px);
          line-height: 0.92;
          margin: 16px 0 24px;
        }
        .ndps-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .ndps-lede {
          font-family: var(--serif);
          font-size: 20px;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 760px;
          margin-bottom: 16px;
        }
        .ndps-disclaimer {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-quiet);
        }

        .ndps-history {
          padding: 80px 0;
          background: var(--bone-soft);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .hist-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
        }
        .hist-h {
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1;
          margin-top: 8px;
        }
        .hist-body p {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 16px;
        }

        .ndps-section { padding: 100px 0; }
        .sec-h { margin-bottom: 48px; max-width: 880px; }
        .sec-title {
          font-size: clamp(40px, 5.5vw, 72px);
          line-height: 1;
          margin-top: 8px;
        }
        .sec-sub {
          font-family: var(--serif);
          font-size: 18px;
          color: var(--ink-soft);
          margin-top: 16px;
        }

        /* definitions */
        .def-list { display: flex; flex-direction: column; gap: 32px; }
        .def-card {
          padding: 32px 36px;
          background: var(--paper);
          border: 1.5px solid var(--ink);
        }
        .def-meta {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .def-section {
          font-size: 12px;
          letter-spacing: 0.16em;
          color: var(--saffron);
          font-weight: 700;
          text-transform: uppercase;
        }
        .def-term {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 28px;
          font-weight: 500;
          letter-spacing: -0.015em;
        }
        .def-body {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
        }
        .def-omission {
          margin-top: 24px;
          padding: 20px 24px;
          background: rgba(232, 84, 28, 0.08);
          border-left: 3px solid var(--saffron);
        }
        .omission-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--saffron);
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }
        .def-omission p {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink);
        }

        /* offence */
        .ndps-offence { background: var(--ink); color: var(--bone); }
        .ndps-offence .eyebrow { color: var(--saffron); }
        .off-summary {
          font-family: var(--serif);
          font-variation-settings: "opsz" 96, "SOFT" 30;
          font-size: clamp(22px, 3vw, 30px);
          line-height: 1.45;
          color: var(--bone);
          margin-bottom: 56px;
          max-width: 1000px;
          font-style: italic;
        }
        .sentencing {
          background: rgba(245, 240, 230, 0.05);
          padding: 32px;
          border: 1px solid rgba(245, 240, 230, 0.2);
        }
        .sent-h {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--saffron);
          margin-bottom: 24px;
          font-weight: 700;
        }
        .sent-table {
          width: 100%;
          border-collapse: collapse;
          font-family: var(--serif);
        }
        .sent-table th {
          text-align: left;
          padding: 12px 16px 12px 0;
          border-bottom: 1.5px solid var(--saffron);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--saffron);
          font-family: var(--mono);
          font-weight: 700;
        }
        .sent-table td {
          padding: 18px 16px 18px 0;
          border-bottom: 1px solid rgba(245, 240, 230, 0.12);
          font-size: 15px;
          color: rgba(245, 240, 230, 0.9);
          vertical-align: top;
        }
        .sent-q {
          font-weight: 600;
          font-size: 17px;
          color: var(--bone);
        }
        .sent-source {
          margin-top: 18px;
          font-size: 11px;
          color: rgba(245, 240, 230, 0.5);
          letter-spacing: 0.1em;
        }

        /* permitted */
        .perm-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .perm-card {
          padding: 32px;
          background: var(--bone-soft);
          border-top: 3px solid var(--evidence);
        }
        .perm-sec {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--evidence);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .perm-summary {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink);
          margin-bottom: 18px;
        }
        .perm-effect {
          padding-top: 18px;
          border-top: 1px dashed var(--line-strong);
        }
        .perm-eff-label {
          display: block;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--ink-quiet);
          margin-bottom: 8px;
        }
        .perm-effect p {
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        /* enforcement */
        .ndps-enforce { background: var(--bone-soft); }
        .enf-list { display: flex; flex-direction: column; gap: 1px; background: var(--line-strong); }
        .enf-item {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 32px;
          padding: 28px 0;
          background: var(--bone-soft);
        }
        .enf-meta { padding-right: 12px; }
        .enf-sec {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--saffron);
          display: block;
          margin-bottom: 4px;
          font-weight: 700;
        }
        .enf-title {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 22px;
          font-weight: 500;
          line-height: 1.1;
        }
        .enf-body {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        /* reform */
        .reform-list { list-style: none; }
        .reform-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 28px;
          padding: 36px 0;
          border-top: 1px solid var(--line);
        }
        .reform-item:last-child { border-bottom: 1px solid var(--line); }
        .reform-num {
          font-size: 48px;
          color: var(--saffron);
          letter-spacing: -0.02em;
        }
        .reform-h {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 26px;
          font-weight: 500;
          line-height: 1.1;
          margin-bottom: 10px;
          letter-spacing: -0.015em;
        }
        .reform-body p {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.6;
          color: var(--ink-soft);
        }

        /* source */
        .ndps-source { padding: 60px 0 100px; }
        .src-card {
          padding: 48px;
          background: var(--ink);
          color: var(--bone);
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }
        .src-card .eyebrow { color: var(--saffron); }
        .src-h {
          font-size: clamp(28px, 4vw, 44px);
          margin: 12px 0 16px;
        }
        .src-card p {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.6;
          color: rgba(245, 240, 230, 0.8);
          margin-bottom: 24px;
        }
        .src-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border: 1.5px solid var(--saffron);
          color: var(--saffron);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          transition: all 0.2s var(--ease-out);
        }
        .src-link:hover { background: var(--saffron); color: var(--ink); }

        @media (max-width: 880px) {
          .hist-grid, .perm-grid { grid-template-columns: 1fr; gap: 32px; }
          .enf-item, .reform-item { grid-template-columns: 1fr; gap: 12px; }
          .sent-table { font-size: 13px; }
          .sent-table th, .sent-table td { padding-right: 8px; }
        }
      `}</style>
    </main>
  );
}
