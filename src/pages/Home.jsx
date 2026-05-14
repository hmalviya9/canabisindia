// =============================================================
// Home — the hero spine of v2.
// Search front and center. Editorial-meets-protest.
// =============================================================
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ConditionSearch from '../components/ConditionSearch';
import { conditions, isFullyPopulated } from '../data/conditions';

const HERO_CONDITIONS = ['epilepsy', 'chronic-pain', 'ptsd', 'chemotherapy-nausea', 'multiple-sclerosis'];

export default function Home() {
  const featured = HERO_CONDITIONS
    .map((id) => conditions.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <main className="home">
      {/* ============================================
          HERO
          ============================================ */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-meta fade-up">
              <span className="eyebrow">VIJAYA v3  ·  EVIDENCE FILE</span>
              <div className="hero-coords mono">23.0225°N  ·  72.5714°E</div>
            </div>

            <h1 className="hero-headline display fade-up delay-1">
              Type your condition.
              <br />
              See what <em>India</em> knew
              <br />
              <span className="hero-strike">3,500 years</span>{' '}
              <span className="hero-saffron">first.</span>
            </h1>

            <div className="hero-search fade-up delay-2">
              <ConditionSearch autoFocus size="hero" />
            </div>

            <div className="hero-helpers fade-up delay-3">
              <span className="mono helpers-label">Try:</span>
              {HERO_CONDITIONS.map((id) => {
                const c = conditions.find((x) => x.id === id);
                if (!c) return null;
                return (
                  <Link key={id} to={`/condition/${id}`} className="hero-pill">
                    {c.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* big background numeral */}
        <div className="hero-bg-numeral" aria-hidden="true">
          <span>3500</span>
        </div>
      </section>

      {/* ============================================
          THESIS — three blocks
          ============================================ */}
      <section className="thesis">
        <div className="container">
          <div className="thesis-grid">
            <div className="thesis-block">
              <div className="thesis-num mono">01</div>
              <h3 className="thesis-h">
                Sushruta did the first surgery under cannabis anesthesia in <em>600 BCE</em>.
              </h3>
              <p className="thesis-body">
                Wine plus cannabis incense — the world's first documented surgical sedative, preceding Western anesthesia by 23 centuries. The therapeutic pharmacology of vijaya for pain, sleep, nausea, and convulsions was catalogued in Bhāvaprakāśa Nighaṇṭu (verse 233), refined in the Ananda Kanda Rasa Shastra, and paralleled in Unani Tibb as Qinnāb. India had a working pharmacopeia of cannabis medicine before Europe had a word for anesthesia.
              </p>
            </div>
            <div className="thesis-block">
              <div className="thesis-num mono">02</div>
              <h3 className="thesis-h">
                The British studied it in <em>1894</em> and concluded: harmless.
              </h3>
              <p className="thesis-body">
                The seven-volume Indian Hemp Drugs Commission Report — colonial India's most exhaustive drug inquiry — found "moderate use produces no injurious effects." It was shelved. We criminalized the plant anyway, ninety-one years later.
              </p>
            </div>
            <div className="thesis-block">
              <div className="thesis-num mono">03</div>
              <h3 className="thesis-h">
                The world caught up. We didn't.
              </h3>
              <p className="thesis-body">
                CBD is FDA-approved for childhood epilepsy. Sativex is standard care for MS in Germany. Israeli soldiers get cannabis for PTSD. In India — the country of origin — the medicine remains a felony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED EVIDENCE FILES
          ============================================ */}
      <section className="featured">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Featured evidence files</span>
            <h2 className="section-h display">Conditions India treated first.</h2>
          </div>

          <div className="featured-grid">
            {featured.map((c, idx) => (
              <Link
                key={c.id}
                to={`/condition/${c.id}`}
                className="featured-card"
                style={{ '--i': idx }}
              >
                <div className="card-num mono">{String(idx + 1).padStart(2, '0')}</div>
                <div className="card-cat mono">{c.category}</div>
                <h3 className="card-title">{c.name}</h3>
                <p className="card-hook">{c.hook}</p>
                <div className="card-cta mono">
                  Read the evidence
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </div>
              </Link>
            ))}
          </div>

          <div className="featured-foot">
            <p className="mono">
              {conditions.filter(isFullyPopulated).length} of {conditions.length} conditions fully sourced.
            </p>
            <Link to="/conditions" className="featured-see-all mono">
              See all {conditions.filter(isFullyPopulated).length} →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          MANIFESTO BAND
          ============================================ */}
      <section className="manifesto">
        <div className="container">
          <p className="manifesto-text">
            <span className="manifesto-q">"</span>
            We are not asking for a new drug. We are asking for a <em className="manifesto-em">2,600-year-old</em> one to be taken off the criminal schedule.
            <span className="manifesto-q">"</span>
          </p>
          <div className="manifesto-cta">
            <Link to="/petition" className="manifesto-btn mono">
              Read the petition  →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .home { position: relative; }

        /* ===== HERO ===== */
        .hero {
          position: relative;
          padding: 56px 0 100px;
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          gap: 36px;
          position: relative;
          z-index: 2;
        }
        .hero-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 24px;
        }
        .hero-coords {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
        }
        .hero-headline {
          font-size: clamp(48px, 8.5vw, 124px);
          line-height: 0.92;
          letter-spacing: -0.035em;
          font-weight: 500;
          max-width: 1100px;
        }
        .hero-headline em {
          font-style: italic;
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
          color: var(--saffron);
        }
        .hero-strike {
          position: relative;
          display: inline-block;
        }
        .hero-strike::after {
          content: '';
          position: absolute;
          left: -4px; right: -4px;
          top: 52%;
          height: 5px;
          background: var(--saffron);
          transform: rotate(-2deg);
          opacity: 0.85;
        }
        .hero-saffron { color: var(--saffron); }

        .hero-search {
          margin-top: 12px;
          max-width: 920px;
        }

        .hero-helpers {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
        }
        .helpers-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-quiet);
          margin-right: 8px;
        }
        .hero-pill {
          display: inline-block;
          font-family: var(--serif);
          font-size: 14px;
          padding: 7px 14px 6px;
          border: 1px solid var(--line-strong);
          border-radius: 100px;
          color: var(--ink);
          transition: all 0.15s var(--ease-out);
        }
        .hero-pill:hover {
          background: var(--ink);
          color: var(--bone);
          border-color: var(--ink);
        }

        /* big '3500' watermark behind hero */
        .hero-bg-numeral {
          position: absolute;
          right: -80px;
          bottom: -120px;
          font-family: var(--serif);
          font-variation-settings: "opsz" 144, "SOFT" 0, "WONK" 1;
          font-size: clamp(280px, 38vw, 620px);
          font-weight: 500;
          color: var(--saffron-pale);
          opacity: 0.45;
          line-height: 0.8;
          letter-spacing: -0.05em;
          pointer-events: none;
          z-index: 1;
          user-select: none;
        }

        /* ===== THESIS ===== */
        .thesis {
          padding: 100px 0 80px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: var(--bone-soft);
          position: relative;
          z-index: 3;
        }
        .thesis-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 56px;
        }
        .thesis-num {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--saffron);
          margin-bottom: 18px;
        }
        .thesis-h {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -0.015em;
          font-weight: 500;
          margin-bottom: 16px;
        }
        .thesis-h em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 36, "SOFT" 100, "WONK" 1;
        }
        .thesis-body {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-soft);
        }

        /* ===== FEATURED ===== */
        .featured { padding: 100px 0 60px; }
        .section-head { margin-bottom: 48px; }
        .section-h {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1;
          letter-spacing: -0.03em;
          margin-top: 8px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--line-strong);
          border: 1px solid var(--line-strong);
        }
        .featured-card {
          background: var(--paper);
          padding: 40px 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
          transition: background 0.2s var(--ease-out);
          min-height: 260px;
        }
        .featured-card:hover {
          background: var(--ink);
          color: var(--bone);
        }
        .featured-card:hover .card-cat,
        .featured-card:hover .card-num,
        .featured-card:hover .card-cta { color: var(--saffron); }
        .featured-card:hover .card-hook { color: rgba(245, 240, 230, 0.78); }

        .card-num {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--ink-quiet);
        }
        .card-cat {
          position: absolute;
          top: 40px;
          right: 36px;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink-quiet);
        }
        .card-title {
          font-family: var(--serif);
          font-variation-settings: "opsz" 96, "SOFT" 0;
          font-size: 42px;
          line-height: 0.98;
          letter-spacing: -0.025em;
          font-weight: 500;
        }
        .card-hook {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 16px;
          line-height: 1.55;
          color: var(--ink-soft);
          flex: 1;
        }
        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink);
          margin-top: 4px;
        }

        .featured-foot {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px 32px;
          color: var(--ink-quiet);
          font-size: 12px;
          letter-spacing: 0.14em;
        }
        .featured-see-all {
          color: var(--saffron);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          padding: 10px 20px;
          border: 1.5px solid var(--saffron);
          transition: all 0.18s var(--ease-out);
        }
        .featured-see-all:hover {
          background: var(--saffron);
          color: var(--ink);
        }

        /* ===== MANIFESTO BAND ===== */
        .manifesto {
          padding: 100px 0;
          background: var(--ink);
          color: var(--bone);
          text-align: center;
        }
        .manifesto-text {
          font-family: var(--serif);
          font-variation-settings: "opsz" 96, "SOFT" 30;
          font-size: clamp(28px, 4.2vw, 56px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          font-weight: 400;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }
        .manifesto-q {
          color: var(--saffron);
          font-style: italic;
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .manifesto-em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 96, "SOFT" 100, "WONK" 1;
        }
        .manifesto-cta {
          margin-top: 40px;
        }
        .manifesto-btn {
          display: inline-block;
          padding: 16px 28px;
          border: 1.5px solid var(--saffron);
          color: var(--saffron);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 700;
          transition: all 0.2s var(--ease-out);
        }
        .manifesto-btn:hover {
          background: var(--saffron);
          color: var(--ink);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 920px) {
          .thesis-grid { grid-template-columns: 1fr; gap: 40px; }
          .featured-grid { grid-template-columns: 1fr; }
          .card-cat { position: static; }
        }
        @media (max-width: 560px) {
          .hero { padding: 36px 0 80px; }
          .featured-card { padding: 30px 24px; min-height: 0; }
          .card-title { font-size: 34px; }
        }
      `}</style>
    </main>
  );
}
