// =============================================================
// Atlas — state-level reform and cultivation status.
// Schematic India SVG with click-to-detail interaction.
// Honestly framed as "snapshot, not live."
// =============================================================
import { useState } from 'react';
import { reformTracker } from '../data/reformTracker';

// Schematic state circles — approximate positions on a stylized India outline.
// Not geographically precise; this is editorial cartography, not GIS.
const STATE_POSITIONS = {
  'Uttarakhand': { x: 330, y: 145, r: 18 },
  'Himachal Pradesh': { x: 295, y: 125, r: 16 },
  'Madhya Pradesh': { x: 305, y: 280, r: 28 },
  'Uttar Pradesh': { x: 350, y: 195, r: 26 },
  'Rajasthan': { x: 220, y: 215, r: 26 },
  'Punjab': { x: 270, y: 135, r: 14 },
  'Delhi': { x: 290, y: 175, r: 9 },
  'Manipur': { x: 525, y: 230, r: 13 },
  'Tripura': { x: 500, y: 245, r: 11 },
  'Assam': { x: 490, y: 200, r: 18 },
  'Maharashtra': { x: 235, y: 330, r: 26 },
  'Gujarat': { x: 175, y: 270, r: 22 },
  'Karnataka': { x: 250, y: 405, r: 22 },
  'Tamil Nadu': { x: 290, y: 460, r: 22 },
  'Kerala': { x: 250, y: 470, r: 16 },
  'Andhra Pradesh': { x: 305, y: 385, r: 22 },
  'Telangana': { x: 300, y: 350, r: 18 },
  'West Bengal': { x: 425, y: 250, r: 18 },
  'Bihar': { x: 405, y: 215, r: 18 },
  'Odisha': { x: 385, y: 295, r: 20 },
};

const STATUS_COLORS = {
  hemp_licensed: '#2D5F3F',
  hemp_pilot: '#7A9A6F',
  bhang_legal: '#E8541C',
  bhang_grey: '#B89280',
  no_program: '#4A4A45',
};

function getStateColor(state) {
  if (state.cultivation === 'hemp_licensed') return STATUS_COLORS.hemp_licensed;
  if (state.cultivation === 'hemp_pilot') return STATUS_COLORS.hemp_pilot;
  if (state.bhang_status === 'bhang_legal') return STATUS_COLORS.bhang_legal;
  if (state.bhang_status === 'bhang_grey') return STATUS_COLORS.bhang_grey;
  return STATUS_COLORS.no_program;
}

function getStateLabel(state) {
  if (state.cultivation === 'hemp_licensed') return 'Industrial hemp licensed';
  if (state.cultivation === 'hemp_pilot') return 'Hemp pilot / research';
  if (state.bhang_status === 'bhang_legal') return 'Bhang legal · state excise';
  if (state.bhang_status === 'bhang_grey') return 'Bhang grey / restricted';
  return 'No state program';
}

export default function Atlas() {
  const [selectedState, setSelectedState] = useState(null);
  const t = reformTracker;

  const counts = {
    licensed: t.states.filter((s) => s.cultivation === 'hemp_licensed').length,
    pilot: t.states.filter((s) => s.cultivation === 'hemp_pilot').length,
    bhang: t.states.filter((s) => s.bhang_status === 'bhang_legal').length,
    grey: t.states.filter((s) => s.bhang_status === 'bhang_grey').length,
  };

  return (
    <main className="atlas">
      {/* HERO */}
      <section className="at-hero">
        <div className="container">
          <span className="eyebrow fade-up">Reform & cultivation atlas</span>
          <h1 className="at-title display fade-up delay-1">
            India is <em>not</em> one country
            <br />
            on this question.
          </h1>
          <p className="at-lede fade-up delay-2">
            The NDPS Act is federal. But Section 10 gives every state the power to license, regulate, and permit cannabis cultivation and use. Uttarakhand and Madhya Pradesh said yes. Most states didn't. Tap a circle to see where each one stands.
          </p>
          <p className="at-asof mono fade-up delay-3">
            Snapshot as of {t.meta.last_updated} · not a live feed
          </p>
        </div>
      </section>

      {/* MAP */}
      <section className="at-map">
        <div className="container">
          <div className="map-grid">
            <div className="map-wrap">
              <svg viewBox="0 0 640 560" className="india-map" xmlns="http://www.w3.org/2000/svg" aria-label="India map: state-level cannabis status">
                {/* Schematic India outline — editorial, not precise */}
                <path
                  d="M 220 90 L 295 100 L 340 110 L 370 130 L 395 140 L 420 145 L 460 160 L 500 175 L 530 200 L 545 230 L 530 260 L 505 275 L 490 290 L 480 270 L 460 260 L 440 270 L 425 290 L 430 315 L 415 340 L 395 360 L 380 385 L 360 405 L 340 430 L 310 460 L 285 485 L 265 495 L 250 485 L 245 460 L 235 440 L 220 415 L 215 390 L 220 365 L 215 340 L 210 315 L 195 295 L 175 285 L 160 270 L 155 245 L 165 220 L 175 195 L 190 175 L 195 150 L 205 125 L 215 105 Z"
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  opacity="0.4"
                />

                {/* State dots */}
                {t.states.map((state) => {
                  const pos = STATE_POSITIONS[state.state];
                  if (!pos) return null;
                  const color = getStateColor(state);
                  const isSelected = selectedState?.state === state.state;
                  return (
                    <g key={state.state}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={pos.r}
                        fill={color}
                        opacity={isSelected ? 1 : 0.85}
                        stroke={isSelected ? 'var(--ink)' : 'transparent'}
                        strokeWidth="2.5"
                        className="state-dot"
                        onClick={() => setSelectedState(state)}
                        style={{ cursor: 'pointer', transition: 'opacity 0.2s, r 0.2s' }}
                      />
                      <title>{state.state}</title>
                    </g>
                  );
                })}
              </svg>

              <div className="map-legend">
                <div className="legend-h mono">Legend</div>
                <ul>
                  <li><span className="dot" style={{ background: STATUS_COLORS.hemp_licensed }} /> Industrial hemp licensed</li>
                  <li><span className="dot" style={{ background: STATUS_COLORS.hemp_pilot }} /> Hemp pilot / research</li>
                  <li><span className="dot" style={{ background: STATUS_COLORS.bhang_legal }} /> Bhang legal · state excise</li>
                  <li><span className="dot" style={{ background: STATUS_COLORS.bhang_grey }} /> Bhang restricted / grey</li>
                  <li><span className="dot" style={{ background: STATUS_COLORS.no_program }} /> No state program</li>
                </ul>
              </div>
            </div>

            <aside className="map-detail">
              {selectedState ? (
                <div className="detail-card">
                  <div className="detail-meta mono">{selectedState.region}</div>
                  <h3 className="detail-name display">{selectedState.state}</h3>
                  <div
                    className="detail-status mono"
                    style={{ color: getStateColor(selectedState), borderColor: getStateColor(selectedState) }}
                  >
                    {getStateLabel(selectedState)}
                  </div>
                  <p className="detail-body">{selectedState.detail}</p>
                  <div className="detail-sources">
                    <div className="mono detail-src-h">Sources</div>
                    <ul>
                      {selectedState.sources.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="detail-close mono" onClick={() => setSelectedState(null)}>
                    Close
                  </button>
                </div>
              ) : (
                <div className="detail-empty">
                  <p className="detail-empty-text">
                    Tap any state circle on the map to read its current cannabis status, the basis in law, and the sources VIJAYA used to verify.
                  </p>
                  <div className="counts-grid">
                    <div className="count">
                      <div className="count-num display" style={{ color: STATUS_COLORS.hemp_licensed }}>
                        {counts.licensed}
                      </div>
                      <div className="mono count-l">Industrial hemp licensed</div>
                    </div>
                    <div className="count">
                      <div className="count-num display" style={{ color: STATUS_COLORS.hemp_pilot }}>
                        {counts.pilot}
                      </div>
                      <div className="mono count-l">Hemp pilots / research</div>
                    </div>
                    <div className="count">
                      <div className="count-num display" style={{ color: STATUS_COLORS.bhang_legal }}>
                        {counts.bhang}
                      </div>
                      <div className="mono count-l">Bhang state-excise legal</div>
                    </div>
                    <div className="count">
                      <div className="count-num display" style={{ color: STATUS_COLORS.bhang_grey }}>
                        {counts.grey}
                      </div>
                      <div className="mono count-l">Bhang grey / restricted</div>
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* STATE LIST */}
      <section className="at-list">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Full list</span>
            <h2 className="display sec-title">All tracked states.</h2>
          </header>

          <ul className="states-list">
            {t.states.map((s) => (
              <li
                key={s.state}
                className="state-row"
                onClick={() => {
                  setSelectedState(s);
                  window.scrollTo({ top: 600, behavior: 'smooth' });
                }}
              >
                <span className="state-r-name">{s.state}</span>
                <span className="state-r-region mono">{s.region}</span>
                <span
                  className="state-r-status mono"
                  style={{ color: getStateColor(s) }}
                >
                  {getStateLabel(s)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="at-method">
        <div className="container">
          <div className="meth-card">
            <span className="eyebrow">Methodology</span>
            <h3 className="meth-h display">How we built this.</h3>
            <p>{t.meta.methodology}</p>
            <p>
              <strong>What this is not:</strong> A live feed. A legal-status checker for individual cases. An exhaustive list — only the 20 most relevant states/UTs are tracked here. New entries and corrections are welcome.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .atlas { position: relative; }
        .at-hero { padding: 60px 0 50px; }
        .at-title {
          font-size: clamp(48px, 8vw, 116px);
          line-height: 0.95;
          margin: 16px 0 28px;
        }
        .at-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .at-lede {
          font-family: var(--serif);
          font-size: 19px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 760px;
          margin-bottom: 16px;
        }
        .at-asof {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }

        .at-map { padding: 40px 0 100px; }
        .map-grid {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 56px;
          align-items: start;
        }

        .map-wrap {
          position: relative;
          padding: 24px;
          background: var(--bone-soft);
          border: 1.5px solid var(--ink);
        }
        .india-map {
          width: 100%;
          height: auto;
          display: block;
        }
        .state-dot:hover { opacity: 1 !important; }

        .map-legend {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid var(--line);
        }
        .legend-h {
          font-size: 11px;
          letter-spacing: 0.18em;
          color: var(--ink-quiet);
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .map-legend ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 14px 22px;
        }
        .map-legend li {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--serif);
          font-size: 13px;
          color: var(--ink);
        }
        .map-legend .dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
          display: inline-block;
        }

        /* detail panel */
        .map-detail {
          position: sticky;
          top: 90px;
        }
        .detail-empty {
          padding: 28px;
          background: var(--bone-soft);
          border: 1px dashed var(--line-strong);
        }
        .detail-empty-text {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.55;
          color: var(--ink-soft);
          margin-bottom: 24px;
        }
        .counts-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .count-num {
          font-size: 44px;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .count-l {
          font-size: 10px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          text-transform: uppercase;
          margin-top: 6px;
          line-height: 1.3;
        }

        .detail-card {
          padding: 32px;
          background: var(--paper);
          border: 1.5px solid var(--ink);
          position: relative;
        }
        .detail-meta {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--saffron);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .detail-name {
          font-size: 38px;
          line-height: 1;
          margin-bottom: 18px;
        }
        .detail-status {
          display: inline-block;
          padding: 6px 12px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          border: 1.5px solid;
          margin-bottom: 20px;
        }
        .detail-body {
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 20px;
        }
        .detail-sources {
          padding-top: 16px;
          border-top: 1px dashed var(--line-strong);
        }
        .detail-src-h {
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--ink-quiet);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .detail-sources ul {
          list-style: none;
        }
        .detail-sources li {
          font-family: var(--serif);
          font-size: 13px;
          color: var(--ink-soft);
          margin-bottom: 4px;
          padding-left: 14px;
          position: relative;
        }
        .detail-sources li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--saffron);
        }
        .detail-close {
          margin-top: 20px;
          padding: 8px 14px;
          font-size: 11px;
          letter-spacing: 0.14em;
          border: 1px solid var(--ink-quiet);
          color: var(--ink-quiet);
          text-transform: uppercase;
        }
        .detail-close:hover {
          border-color: var(--saffron);
          color: var(--saffron);
        }

        /* list */
        .at-list { padding: 80px 0; background: var(--bone-soft); border-top: 1px solid var(--line); }
        .sec-h { margin-bottom: 40px; }
        .sec-title { font-size: clamp(36px, 5vw, 60px); line-height: 1; margin-top: 8px; }
        .states-list { list-style: none; }
        .state-row {
          display: grid;
          grid-template-columns: 1fr 140px 280px;
          gap: 24px;
          padding: 16px 4px;
          border-top: 1px solid var(--line);
          align-items: baseline;
          cursor: pointer;
          transition: background 0.12s var(--ease-out);
        }
        .state-row:last-child { border-bottom: 1px solid var(--line); }
        .state-row:hover { background: var(--paper); }
        .state-r-name {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 20px;
          font-weight: 500;
          letter-spacing: -0.01em;
        }
        .state-r-region {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }
        .state-r-status {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          text-align: right;
        }

        .at-method { padding: 80px 0 60px; }
        .meth-card {
          padding: 40px 48px;
          background: var(--ink);
          color: var(--bone);
          max-width: 900px;
          margin: 0 auto;
        }
        .meth-card .eyebrow { color: var(--saffron); }
        .meth-h {
          font-size: clamp(28px, 4vw, 44px);
          margin: 12px 0 20px;
        }
        .meth-card p {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.6;
          color: rgba(245, 240, 230, 0.85);
          margin-bottom: 14px;
        }
        .meth-card strong {
          color: var(--saffron);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .map-grid { grid-template-columns: 1fr; gap: 32px; }
          .map-detail { position: static; }
        }
        @media (max-width: 720px) {
          .state-row { grid-template-columns: 1fr; gap: 6px; }
          .state-r-status { text-align: left; }
          .counts-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
