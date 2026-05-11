// =============================================================
// ConditionResult — THE screenshot moment of v2.
// Built like a prescription pad x protest poster.
// =============================================================
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Bookmark, BookmarkCheck, Download, Share2, ArrowLeft, ExternalLink } from 'lucide-react';
import { getConditionById, isFullyPopulated, conditions } from '../data/conditions';
import { downloadIgCard, downloadXCard, renderIgCard } from '../lib/shareCard';
import { toggleBookmark, isBookmarked } from '../lib/storage';

export default function ConditionResult() {
  const { id } = useParams();
  const navigate = useNavigate();
  const condition = getConditionById(id);
  const [bookmarked, setBookmarked] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    setBookmarked(isBookmarked(id));
    window.scrollTo(0, 0);
  }, [id]);

  // Render the IG card into a preview canvas
  useEffect(() => {
    if (!condition || !isFullyPopulated(condition)) return;
    const canvas = renderIgCard(condition);
    if (previewRef.current) {
      previewRef.current.innerHTML = '';
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      canvas.style.display = 'block';
      previewRef.current.appendChild(canvas);
    }
  }, [condition]);

  if (!condition) {
    return (
      <main className="container" style={{ padding: '120px 0', textAlign: 'center' }}>
        <p className="eyebrow">404</p>
        <h1 className="display" style={{ fontSize: '64px', margin: '16px 0 24px' }}>
          Not in the file yet.
        </h1>
        <Link to="/" className="mono" style={{ color: 'var(--saffron)' }}>
          ← Back to search
        </Link>
      </main>
    );
  }

  // Scaffolded condition — honest placeholder
  if (!isFullyPopulated(condition)) {
    return <ScaffoldView condition={condition} navigate={navigate} />;
  }

  function handleBookmark() {
    toggleBookmark(condition.id);
    setBookmarked(isBookmarked(condition.id));
  }

  async function handleNativeShare() {
    const url = window.location.href;
    const title = `VIJAYA — ${condition.name}`;
    const text = condition.share_card?.headline || condition.hook || '';
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied');
      } catch {}
    }
  }

  return (
    <main className="result">
      {/* ===== HEADER STRIP ===== */}
      <div className="result-strip mono">
        <div className="container result-strip-inner">
          <button className="back-btn" onClick={() => navigate(-1)} aria-label="Back">
            <ArrowLeft size={14} /> BACK
          </button>
          <div className="strip-meta">
            <span>EVIDENCE FILE</span>
            <span className="dot">·</span>
            <span>{condition.category.toUpperCase()}</span>
            <span className="dot">·</span>
            <span>FILED {condition.classical.century}</span>
          </div>
          <div className="strip-actions">
            <button onClick={handleBookmark} aria-label="Save" className="strip-action">
              {bookmarked ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
              {bookmarked ? 'SAVED' : 'SAVE'}
            </button>
            <button onClick={handleNativeShare} aria-label="Share" className="strip-action">
              <Share2 size={14} /> SHARE
            </button>
          </div>
        </div>
      </div>

      {/* ===== HEADLINE ===== */}
      <section className="result-head">
        <div className="container">
          <div className="head-grid">
            <div className="head-left">
              <div className="head-stamps fade-up">
                <span className="stamp">EVIDENCE</span>
                <span className="stamp criminalized">CRIMINALIZED · NDPS 1985</span>
              </div>

              <h1 className="result-title display fade-up delay-1">{condition.name}</h1>

              <p className="result-hook fade-up delay-2">
                <span className="hook-q">"</span>
                {condition.hook}
                <span className="hook-q">"</span>
              </p>

              <p className="result-summary fade-up delay-3">{condition.summary}</p>
            </div>

            <aside className="head-aside fade-up delay-2">
              <div className="century-rail">
                <div className="century-tick">
                  <span className="mono tick-year">{condition.classical.century.split(/[-–—]/)[0].trim()}</span>
                  <span className="mono tick-label">Indian protocol filed</span>
                </div>
                <div className="century-line" />
                <div className="century-tick">
                  <span className="mono tick-year">1894</span>
                  <span className="mono tick-label">Hemp Commission Report</span>
                </div>
                <div className="century-line" />
                <div className="century-tick criminalized">
                  <span className="mono tick-year">1985</span>
                  <span className="mono tick-label">India: NDPS Act</span>
                </div>
                <div className="century-line" />
                <div className="century-tick evidence">
                  <span className="mono tick-year">
                    {condition.modern.protocols[0]?.status?.match(/\d{4}/)?.[0] || '2018'}
                  </span>
                  <span className="mono tick-label">Modern approval</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== TWO COLUMNS: CLASSICAL vs MODERN ===== */}
      <section className="result-cols">
        <div className="container">
          <div className="cols-grid">
            {/* CLASSICAL */}
            <article className="col col-classical">
              <header className="col-h">
                <span className="eyebrow">Classical evidence</span>
                <h2 className="col-title display">
                  <em>{condition.classical.sanskrit_name}</em>
                </h2>
                <div className="col-source mono">
                  {condition.classical.source}  ·  {condition.classical.century}
                </div>
              </header>

              <div className="col-body">
                <h3 className="col-sub">Protocol</h3>
                <p>{condition.classical.protocol}</p>

                <h3 className="col-sub">Reading</h3>
                <p>{condition.classical.reading}</p>
              </div>
            </article>

            {/* MODERN */}
            <article className="col col-modern">
              <header className="col-h">
                <span className="eyebrow">Modern evidence</span>
                <h2 className="col-title display">The molecule</h2>
                <div className="col-source mono">PEER-REVIEWED · CLINICAL TRIALS</div>
              </header>

              <div className="col-body">
                <h3 className="col-sub">Mechanism</h3>
                <p>{condition.modern.mechanism}</p>

                <h3 className="col-sub">Approved protocols</h3>
                <ul className="protocol-list">
                  {condition.modern.protocols.map((p, idx) => (
                    <li key={idx} className="protocol-item">
                      <div className="protocol-name">{p.name}</div>
                      <div className="protocol-meta mono">
                        <span>{p.dosage}</span>
                        <span className="dot">·</span>
                        <span>{p.condition}</span>
                      </div>
                      <div className="protocol-status">{p.status}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== KEY STUDIES ===== */}
      <section className="studies">
        <div className="container">
          <header className="section-head">
            <span className="eyebrow">Key studies · Citations</span>
            <h2 className="section-h display">The receipts.</h2>
          </header>

          <ol className="studies-list">
            {condition.modern.key_studies.map((s, idx) => (
              <li key={idx} className="study">
                <div className="study-num mono">{String(idx + 1).padStart(2, '0')}</div>
                <div className="study-body">
                  <h4 className="study-title">{s.title}</h4>
                  <div className="study-meta mono">
                    <span>{s.authors}</span>
                    <span className="dot">·</span>
                    <span><em>{s.journal}</em></span>
                    <span className="dot">·</span>
                    <span>{s.year}</span>
                  </div>
                  <p className="study-finding">{s.finding}</p>
                  {s.doi && (
                    <a className="study-doi mono" href={`https://doi.org/${s.doi}`} target="_blank" rel="noopener noreferrer">
                      DOI {s.doi}  <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== INDIA STATUS ===== */}
      <section className="status">
        <div className="container">
          <div className="status-inner">
            <div className="status-left">
              <span className="eyebrow">Status in India</span>
              <h2 className="status-h display">
                The country of origin <em>banned</em> its own medicine in {condition.status_india.criminalized_year}.
              </h2>
            </div>
            <div className="status-right">
              <div className="status-row">
                <span className="mono status-k">LEGAL</span>
                <p>{condition.status_india.legal}</p>
              </div>
              {condition.status_india.access && (
                <div className="status-row">
                  <span className="mono status-k">ACCESS</span>
                  <p>{condition.status_india.access}</p>
                </div>
              )}
              {condition.status_india.colonial_origin && (
                <div className="status-row">
                  <span className="mono status-k">ORIGIN</span>
                  <p>{condition.status_india.colonial_origin}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHARE CARD ===== */}
      <section className="share">
        <div className="container">
          <div className="share-grid">
            <div className="share-copy">
              <span className="eyebrow">Make it travel</span>
              <h2 className="share-h display">
                Download the card.
                <br />
                Post it. <em>Tag it.</em>
              </h2>
              <p className="share-body">
                Every evidence file ships as a screenshot-ready share card. Drop it in your IG story, your X post, your group chat. The plant doesn't get free unless people see this.
              </p>
              <div className="share-buttons">
                <button className="share-btn share-btn-primary" onClick={() => downloadIgCard(condition)}>
                  <Download size={16} /> IG Portrait  ·  1080×1350
                </button>
                <button className="share-btn" onClick={() => downloadXCard(condition)}>
                  <Download size={16} /> X / Twitter  ·  1200×675
                </button>
              </div>
            </div>
            <div className="share-preview-wrap">
              <div className="share-preview-frame">
                <div ref={previewRef} className="share-preview" />
              </div>
              <div className="share-tape" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED ===== */}
      {condition.related?.length > 0 && (
        <section className="related">
          <div className="container">
            <span className="eyebrow">Related files</span>
            <div className="related-grid">
              {condition.related
                .map((rid) => conditions.find((c) => c.id === rid))
                .filter(Boolean)
                .map((rc) => (
                  <Link key={rc.id} to={`/condition/${rc.id}`} className="related-card">
                    <div className="related-cat mono">{rc.category}</div>
                    <div className="related-name">{rc.name}</div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .result { position: relative; }

        /* ===== STRIP ===== */
        .result-strip {
          position: sticky;
          top: 70px;
          z-index: 30;
          background: var(--ink);
          color: var(--bone);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .result-strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 44px;
          gap: 24px;
        }
        .back-btn, .strip-action {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--bone);
          padding: 4px 0;
          transition: color 0.15s var(--ease-out);
        }
        .back-btn:hover, .strip-action:hover { color: var(--saffron); }
        .strip-meta {
          display: flex;
          gap: 12px;
          color: rgba(245, 240, 230, 0.65);
        }
        .strip-meta .dot, .study-meta .dot, .protocol-meta .dot {
          color: var(--saffron);
        }
        .strip-actions { display: flex; gap: 20px; }

        @media (max-width: 720px) {
          .result-strip { top: 60px; }
          .strip-meta { display: none; }
        }

        /* ===== HEAD ===== */
        .result-head {
          padding: 60px 0 80px;
        }
        .head-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 56px;
          align-items: start;
        }
        .head-stamps {
          display: flex;
          gap: 14px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .result-title {
          font-size: clamp(56px, 10vw, 144px);
          line-height: 0.9;
          margin-bottom: 32px;
        }
        .result-hook {
          font-family: var(--serif);
          font-variation-settings: "opsz" 96, "SOFT" 30, "WONK" 1;
          font-size: clamp(24px, 3.4vw, 38px);
          line-height: 1.25;
          letter-spacing: -0.015em;
          font-weight: 400;
          margin-bottom: 28px;
          max-width: 880px;
          font-style: italic;
          color: var(--ink);
        }
        .hook-q { color: var(--saffron); }
        .result-summary {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 19px;
          line-height: 1.6;
          max-width: 720px;
          color: var(--ink-soft);
        }

        /* century rail */
        .head-aside {
          padding-left: 32px;
          border-left: 1px solid var(--line);
        }
        .century-rail {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .century-tick {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 8px 0;
        }
        .tick-year {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0;
          color: var(--ink);
        }
        .tick-label {
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-quiet);
        }
        .century-tick.criminalized .tick-year { color: var(--ink); }
        .century-tick.criminalized .tick-label { color: var(--saffron); }
        .century-tick.evidence .tick-year { color: var(--saffron); }
        .century-line {
          width: 1px;
          height: 28px;
          background: var(--line-strong);
          margin-left: 14px;
        }

        @media (max-width: 880px) {
          .head-grid { grid-template-columns: 1fr; gap: 32px; }
          .head-aside { padding-left: 0; border-left: none; padding-top: 24px; border-top: 1px solid var(--line); }
        }

        /* ===== COLUMNS ===== */
        .result-cols {
          padding: 80px 0;
          background: var(--bone-soft);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .cols-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .col-h { margin-bottom: 28px; }
        .col-title {
          font-size: clamp(36px, 4.5vw, 56px);
          line-height: 1;
          margin: 6px 0 8px;
        }
        .col-title em {
          font-style: italic;
          font-variation-settings: "opsz" 96, "SOFT" 100, "WONK" 1;
          color: var(--saffron);
        }
        .col-source {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }
        .col-sub {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--saffron);
          margin: 24px 0 10px;
          font-weight: 700;
        }
        .col-body p {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 8px;
        }

        .protocol-list { list-style: none; }
        .protocol-item {
          padding: 18px 0;
          border-bottom: 1px solid var(--line);
        }
        .protocol-item:last-child { border-bottom: none; }
        .protocol-name {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 0;
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 4px;
        }
        .protocol-meta {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-quiet);
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 6px;
        }
        .protocol-status {
          display: inline-block;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--evidence);
          padding: 3px 8px;
          border: 1px solid var(--evidence);
          background: rgba(45, 95, 63, 0.06);
          margin-top: 6px;
        }

        @media (max-width: 880px) {
          .cols-grid { grid-template-columns: 1fr; gap: 56px; }
        }

        /* ===== STUDIES ===== */
        .studies { padding: 100px 0; }
        .section-head { margin-bottom: 56px; }
        .section-h {
          font-size: clamp(40px, 5.5vw, 72px);
          line-height: 1;
          margin-top: 8px;
        }
        .studies-list {
          list-style: none;
          counter-reset: study;
        }
        .study {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          padding: 28px 0;
          border-top: 1px solid var(--line);
        }
        .study:last-child { border-bottom: 1px solid var(--line); }
        .study-num {
          font-size: 32px;
          font-weight: 500;
          color: var(--saffron);
          letter-spacing: -0.01em;
        }
        .study-title {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .study-meta {
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--ink-quiet);
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .study-meta em { font-style: italic; color: var(--ink); }
        .study-finding {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink);
          padding-left: 16px;
          border-left: 2px solid var(--saffron);
          margin-bottom: 12px;
        }
        .study-doi {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--saffron);
        }
        .study-doi:hover { color: var(--saffron-deep); text-decoration: underline; }

        /* ===== STATUS ===== */
        .status {
          padding: 100px 0;
          background: var(--ink);
          color: var(--bone);
        }
        .status-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .status-left .eyebrow { color: var(--saffron); }
        .status-h {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.02;
          margin-top: 12px;
        }
        .status-h em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 96, "SOFT" 100, "WONK" 1;
        }
        .status-row {
          padding: 20px 0;
          border-top: 1px solid rgba(245, 240, 230, 0.15);
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 20px;
          align-items: baseline;
        }
        .status-row:last-child { border-bottom: 1px solid rgba(245, 240, 230, 0.15); }
        .status-k {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--saffron);
          text-transform: uppercase;
        }
        .status-row p {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(245, 240, 230, 0.85);
        }

        @media (max-width: 880px) {
          .status-inner { grid-template-columns: 1fr; gap: 40px; }
          .status-row { grid-template-columns: 1fr; gap: 6px; }
        }

        /* ===== SHARE ===== */
        .share {
          padding: 100px 0;
          background: var(--paper);
        }
        .share-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .share-h {
          font-size: clamp(40px, 5.5vw, 72px);
          line-height: 1;
          margin: 12px 0 24px;
        }
        .share-h em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 96, "SOFT" 100, "WONK" 1;
        }
        .share-body {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 18px;
          line-height: 1.6;
          color: var(--ink-soft);
          margin-bottom: 32px;
          max-width: 480px;
        }
        .share-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .share-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 22px;
          border: 1.5px solid var(--ink);
          background: var(--paper);
          color: var(--ink);
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          transition: all 0.2s var(--ease-out);
        }
        .share-btn:hover {
          background: var(--ink);
          color: var(--bone);
        }
        .share-btn-primary {
          background: var(--saffron);
          color: var(--bone);
          border-color: var(--saffron);
        }
        .share-btn-primary:hover {
          background: var(--saffron-deep);
          border-color: var(--saffron-deep);
        }

        .share-preview-wrap {
          position: relative;
          max-width: 380px;
          justify-self: end;
        }
        .share-preview-frame {
          background: var(--paper);
          padding: 16px;
          box-shadow:
            0 1px 0 rgba(0,0,0,0.08),
            0 30px 60px -20px rgba(14, 14, 12, 0.25),
            0 14px 28px -10px rgba(14, 14, 12, 0.18);
          transform: rotate(-1.5deg);
          transition: transform 0.4s var(--ease-out);
        }
        .share-preview-frame:hover { transform: rotate(0deg) scale(1.02); }
        .share-tape {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%) rotate(-3deg);
          width: 90px;
          height: 22px;
          background: rgba(232, 84, 28, 0.45);
          z-index: 2;
        }

        @media (max-width: 880px) {
          .share-grid { grid-template-columns: 1fr; gap: 56px; }
          .share-preview-wrap { justify-self: center; }
        }

        /* ===== RELATED ===== */
        .related { padding: 80px 0 40px; }
        .related-grid {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1px;
          background: var(--line-strong);
          border: 1px solid var(--line-strong);
        }
        .related-card {
          background: var(--paper);
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: background 0.2s var(--ease-out);
        }
        .related-card:hover {
          background: var(--ink);
          color: var(--bone);
        }
        .related-card:hover .related-cat { color: var(--saffron); }
        .related-cat {
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-quiet);
        }
        .related-name {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 0;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: -0.015em;
          line-height: 1.05;
        }
      `}</style>
    </main>
  );
}

/* ============================================
   Scaffold view — honest placeholder
   ============================================ */
function ScaffoldView({ condition, navigate }) {
  return (
    <main className="container" style={{ padding: '60px 0 100px' }}>
      <button
        onClick={() => navigate(-1)}
        className="mono"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-quiet)', marginBottom: 40 }}
      >
        <ArrowLeft size={14} /> BACK
      </button>

      <div style={{ display: 'flex', gap: 14, marginBottom: 28 }}>
        <span className="stamp">EVIDENCE</span>
        <span className="stamp criminalized">DRAFT · IN PROGRESS</span>
      </div>

      <h1 className="display" style={{ fontSize: 'clamp(48px, 8vw, 96px)', lineHeight: 0.95, marginBottom: 32 }}>
        {condition.name}
      </h1>

      <p style={{
        fontFamily: 'var(--serif)',
        fontVariationSettings: '"opsz" 14, "SOFT" 30',
        fontSize: 19, lineHeight: 1.65,
        color: 'var(--ink-soft)',
        maxWidth: 720,
        marginBottom: 32
      }}>
        {condition.summary}
      </p>

      <div style={{
        padding: '28px 32px',
        background: 'var(--bone-soft)',
        border: '1px solid var(--line)',
        maxWidth: 720
      }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Note from the editors</div>
        <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.6, color: 'var(--ink)' }}>
          The full evidence file for <strong>{condition.name}</strong> is being researched. Classical references, modern trial data, and India-status are being verified. We publish only what we can cite. Check back, or save it to your dashboard to be notified when it lands.
        </p>
      </div>

      <div style={{ marginTop: 48 }}>
        <Link to="/" className="mono" style={{ color: 'var(--saffron)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
          ← Back to search
        </Link>
      </div>
    </main>
  );
}
