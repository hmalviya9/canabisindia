// =============================================================
// Practitioners — Indian doctors quietly fighting for medical access.
//
// We will not invent profiles. This page is a structure waiting
// for verified submissions. Listed practitioners require explicit
// consent, AYUSH registration or equivalent, and at least one
// independent reference.
// =============================================================
import { ArrowRight } from 'lucide-react';

// Empty for now — populated only after verified consent.
const VERIFIED_PROFILES = [];

export default function Practitioners() {
  return (
    <main className="prac">
      {/* HERO */}
      <section className="prac-hero">
        <div className="container">
          <span className="eyebrow fade-up">The practitioners</span>
          <h1 className="prac-title display fade-up delay-1">
            Indian doctors are
            <br />
            <em>quietly</em> fighting for
            <br />
            this. We won't <em>out</em>
            <br />
            them without consent.
          </h1>
          <p className="prac-lede fade-up delay-2">
            There are AYUSH practitioners, allopaths, palliative care leaders, integrative-medicine doctors, and researchers across India working — often without public attention — to make a clinical case for medical cannabis. Naming them without verified consent would risk their licenses, their patients, and their movements. So we won't.
          </p>
        </div>
      </section>

      {/* THE PRINCIPLE */}
      <section className="prac-principle">
        <div className="container">
          <div className="princ-grid">
            <div>
              <span className="eyebrow">Our principle</span>
              <h2 className="princ-h display">
                If we made up profiles,
                <br />
                we'd <em>lose</em> the trust
                <br />
                that makes VIJAYA work.
              </h2>
            </div>
            <div className="princ-body">
              <p>VIJAYA is the evidence file. Every claim cites a verifiable source. We can't sustain that standard and also publish unverified bios of real people.</p>
              <p>The risks if we got this wrong are real: clinicians can lose their MCI/AYUSH registration, face professional defamation, or be put under regulatory scrutiny. Doctors do not control the narrative around medical cannabis in India — Narcotics Control Bureau enforcement does. We don't endanger people for engagement.</p>
              <p>Instead: <strong>verified directory only</strong>. Three requirements. Two paths to get listed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="prac-req">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Listing requirements</span>
            <h2 className="display sec-title">Three things, no exceptions.</h2>
          </header>

          <ol className="req-list">
            <li className="req-item">
              <div className="req-num display">01</div>
              <div className="req-body">
                <h4 className="req-h">Verified credentials</h4>
                <p>AYUSH registration number, MCI registration, or equivalent professional licensure with a recognized body. We verify directly with the registry before listing.</p>
              </div>
            </li>
            <li className="req-item">
              <div className="req-num display">02</div>
              <div className="req-body">
                <h4 className="req-h">Explicit written consent</h4>
                <p>The practitioner must personally request listing. We do not list people because a third party submitted their name, even with good intentions. The consent must specify what fields they consent to publish — name, location, clinic, areas of work.</p>
              </div>
            </li>
            <li className="req-item">
              <div className="req-num display">03</div>
              <div className="req-body">
                <h4 className="req-h">One independent reference</h4>
                <p>A colleague, patient advocate, or institutional contact who can confirm the practitioner is who they say they are and is engaged in the work they describe.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* CURRENT STATE */}
      <section className="prac-state">
        <div className="container">
          {VERIFIED_PROFILES.length === 0 ? (
            <div className="empty-state">
              <div className="empty-content">
                <span className="eyebrow">Current verified profiles</span>
                <h3 className="empty-h display">Zero. Honestly.</h3>
                <p className="empty-body">
                  At launch, VIJAYA has no verified practitioner profiles published. We are not going to fill this page with hallucinated bios to make it look populated. When the first practitioner consents and is verified, they go here. Until then, this empty page is the most honest thing we can publish.
                </p>
                <p className="empty-body">
                  If you are a practitioner — or you know one whose work deserves to be visible — see the submission paths below.
                </p>
              </div>
            </div>
          ) : (
            <div className="profile-grid">
              {VERIFIED_PROFILES.map((p, i) => (
                <article key={i} className="profile-card">
                  <h4 className="prof-name">{p.name}</h4>
                  <div className="prof-cred mono">{p.credential}</div>
                  <div className="prof-loc mono">{p.location}</div>
                  <p className="prof-bio">{p.bio}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SUBMISSION PATHS */}
      <section className="prac-submit">
        <div className="container">
          <header className="sec-h">
            <span className="eyebrow">Two ways to be listed</span>
            <h2 className="display sec-title">Practitioner or advocate?</h2>
          </header>

          <div className="paths-grid">
            <article className="path-card">
              <div className="path-tag mono">If you are the practitioner</div>
              <h3 className="path-h display">Apply directly.</h3>
              <p className="path-body">
                Send an email from a professional email address linked to your practice. Include:
              </p>
              <ul className="path-list">
                <li>Full name and credentials</li>
                <li>AYUSH registration number or equivalent (we verify)</li>
                <li>Current practice address / clinic name</li>
                <li>State and city</li>
                <li>Areas of focus relevant to vijaya / cannabis-based medicine</li>
                <li>One professional reference (name + contact)</li>
                <li>Explicit consent statement: "I consent to being listed publicly on vijaya.app."</li>
              </ul>
              <a
                className="path-cta primary"
                href={`mailto:list@vijaya.app?subject=${encodeURIComponent('Practitioner Listing — VIJAYA')}&body=${encodeURIComponent(
                  'Full name:\nCredentials:\nAYUSH / MCI registration number:\nCurrent practice / clinic name:\nState & city:\nYears of practice:\nAreas of focus:\nProfessional reference (name + contact):\n\nConsent statement:\nI confirm the above information is accurate, and I explicitly consent to being listed publicly on vijaya.app.\n\nDate:'
                )}`}
              >
                Apply by email <ArrowRight size={14} />
              </a>
            </article>

            <article className="path-card">
              <div className="path-tag mono">If you know a practitioner</div>
              <h3 className="path-h display">Nominate someone.</h3>
              <p className="path-body">
                You can <em>nominate</em> a practitioner — but VIJAYA will only contact them with their permission, and listing requires their direct application above. Send us:
              </p>
              <ul className="path-list">
                <li>Their name and credentials (if known)</li>
                <li>Why their work matters in this space</li>
                <li>Confirmation that they are aware of your nomination</li>
                <li>Your relationship and contact info (so we can verify with you first)</li>
              </ul>
              <a
                className="path-cta secondary"
                href={`mailto:nominate@vijaya.app?subject=${encodeURIComponent('Practitioner Nomination — VIJAYA')}&body=${encodeURIComponent(
                  'Practitioner name:\nTheir credentials (if known):\nTheir location:\nWhy their work matters:\nAre they aware of this nomination? (Y/N):\n\nYour name:\nYour relationship to them:\nYour contact email:'
                )}`}
              >
                Nominate someone <ArrowRight size={14} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="prac-privacy">
        <div className="container">
          <div className="privacy-card">
            <span className="eyebrow">Privacy commitment</span>
            <h3 className="privacy-h display">What we will never do.</h3>
            <ul className="privacy-list">
              <li><strong>Scrape AYUSH or MCI registries</strong> to auto-publish doctor names. (DPDP Act risk; ethical risk; accuracy risk.)</li>
              <li><strong>Publish without explicit, written consent</strong>, even if the person is publicly known to work in this space.</li>
              <li><strong>Sell or share</strong> this contact data with any third party.</li>
              <li><strong>Keep someone listed</strong> if they later ask to be removed. One email, no questions, done within 7 days.</li>
            </ul>
          </div>
        </div>
      </section>

      <style>{`
        .prac { position: relative; }
        .prac-hero { padding: 60px 0 60px; }
        .prac-title {
          font-size: clamp(48px, 8vw, 116px);
          line-height: 0.92;
          margin: 16px 0 32px;
        }
        .prac-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .prac-lede {
          font-family: var(--serif);
          font-size: 20px;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 820px;
        }

        .prac-principle {
          padding: 80px 0;
          background: var(--bone-soft);
          border-top: 1px solid var(--line);
        }
        .princ-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
        }
        .princ-h {
          font-size: clamp(36px, 5vw, 64px);
          line-height: 0.98;
          margin-top: 8px;
        }
        .princ-h em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 96, "SOFT" 100, "WONK" 1;
        }
        .princ-body p {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 16px;
        }
        .princ-body strong {
          font-weight: 600;
          color: var(--ink);
          font-variation-settings: "opsz" 14, "SOFT" 0;
        }

        .prac-req { padding: 100px 0; }
        .sec-h { margin-bottom: 56px; }
        .sec-title { font-size: clamp(40px, 5.5vw, 72px); line-height: 1; margin-top: 8px; }

        .req-list { list-style: none; }
        .req-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 32px;
          padding: 32px 0;
          border-top: 1px solid var(--line);
        }
        .req-item:last-child { border-bottom: 1px solid var(--line); }
        .req-num {
          font-size: 48px;
          color: var(--saffron);
          line-height: 1;
        }
        .req-h {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 10px;
          letter-spacing: -0.015em;
        }
        .req-body p {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
        }

        .prac-state { padding: 60px 0; background: var(--bone-soft); }
        .empty-state {
          padding: 60px 48px;
          background: var(--paper);
          border: 1.5px dashed var(--line-strong);
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }
        .empty-h {
          font-size: clamp(48px, 7vw, 96px);
          margin: 12px 0 24px;
          color: var(--saffron);
        }
        .empty-body {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
          max-width: 620px;
          margin: 0 auto 16px;
        }

        .prac-submit { padding: 100px 0; }
        .paths-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .path-card {
          padding: 36px;
          background: var(--ink);
          color: var(--bone);
        }
        .path-tag {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--saffron);
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .path-h {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1;
          margin-bottom: 18px;
        }
        .path-body {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.6;
          color: rgba(245, 240, 230, 0.85);
          margin-bottom: 16px;
        }
        .path-body em { color: var(--saffron); font-style: italic; }
        .path-list {
          list-style: none;
          margin-bottom: 28px;
        }
        .path-list li {
          font-family: var(--serif);
          font-size: 15px;
          line-height: 1.5;
          color: rgba(245, 240, 230, 0.75);
          padding: 6px 0 6px 16px;
          position: relative;
        }
        .path-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--saffron);
        }
        .path-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          transition: all 0.2s var(--ease-out);
          border: 1.5px solid;
        }
        .path-cta.primary {
          background: var(--saffron);
          color: var(--ink);
          border-color: var(--saffron);
        }
        .path-cta.primary:hover {
          background: var(--bone);
          border-color: var(--bone);
        }
        .path-cta.secondary {
          background: transparent;
          color: var(--saffron);
          border-color: var(--saffron);
        }
        .path-cta.secondary:hover {
          background: var(--saffron);
          color: var(--ink);
        }

        .prac-privacy { padding: 80px 0 100px; }
        .privacy-card {
          padding: 40px 48px;
          background: var(--bone-soft);
          border-left: 4px solid var(--evidence);
          max-width: 900px;
          margin: 0 auto;
        }
        .privacy-card .eyebrow { color: var(--evidence); }
        .privacy-h {
          font-size: clamp(28px, 4vw, 44px);
          margin: 12px 0 24px;
        }
        .privacy-list {
          list-style: none;
        }
        .privacy-list li {
          font-family: var(--serif);
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-soft);
          padding: 10px 0 10px 20px;
          position: relative;
        }
        .privacy-list li::before {
          content: '✗';
          position: absolute;
          left: 0;
          color: var(--evidence);
          font-weight: 700;
        }
        .privacy-list strong {
          color: var(--ink);
          font-weight: 600;
          font-variation-settings: "opsz" 14, "SOFT" 0;
        }

        @media (max-width: 880px) {
          .princ-grid { grid-template-columns: 1fr; gap: 32px; }
          .req-item { grid-template-columns: 1fr; gap: 12px; }
          .paths-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
