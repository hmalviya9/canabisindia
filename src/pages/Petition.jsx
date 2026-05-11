// =============================================================
// Petition — action layer.
// No backend: mailto MP, social toolkit, commitment card.
// =============================================================
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const MP_EMAIL_SUBJECT = 'Reform the NDPS Act — restore India\'s 3,500-year medicine';
const MP_EMAIL_BODY = `Respected MP,

I am writing as a constituent regarding the Narcotic Drugs and Psychotropic Substances Act, 1985.

India is the country where cannabis-based medicine was first documented — Sushruta prescribed it in 600 BCE, Charaka classified it, the Atharva Veda named it sacred. The British Indian Hemp Drugs Commission (1894) — a seven-volume colonial inquiry — concluded that moderate use produces no injurious effects on mind or body.

Yet today, in the country of origin, cannabis is a Schedule I narcotic alongside heroin. Meanwhile:

— The US FDA approved cannabis-derived Epidiolex for childhood epilepsy in 2018.
— Germany prescribes Sativex on national insurance for multiple sclerosis.
— Israel uses medical cannabis routinely for combat-related PTSD.
— 50+ countries have legalized medical cannabis.

The 1985 Act was passed under foreign pressure during the Reagan-era drug war. It is a colonial-era restriction in a post-colonial republic.

I respectfully request that you support:

1. A parliamentary review of the NDPS Act schedule for cannabis.
2. A regulatory pathway for medical cannabis prescriptions through AYUSH and modern medical channels.
3. Recognition of the work being done by state-licensed Ayurvedic manufacturers in Uttarakhand and Madhya Pradesh.

The plant is the medicine. The medicine is Indian. It is time we stopped jailing people for using a 3,500-year-old pharmacy.

Sincerely,
[Your name]
[Your constituency]
[Your contact]`;

const SOCIAL_HOOKS = [
  {
    platform: 'X / Twitter',
    char: 280,
    text: 'India invented cannabis medicine. Sushruta wrote the protocol in 600 BCE. The British studied it in 1894 and said "harmless." We banned the plant anyway in 1985.\n\nA child with epilepsy in California gets it. Her cousin in India does not.\n\nReform NDPS. → vijaya.app',
  },
  {
    platform: 'Instagram caption',
    char: 2200,
    text: `3,500 years.

That's how long cannabis has been a medicine in India.

Sushruta — the surgeon, the father of Indian medicine — wrote about it in 600 BCE.
Charaka classified it as a treatment for epilepsy.
The Atharva Veda calls it one of the five sacred plants.

The British studied it for seven volumes in 1894 and concluded: "moderate use produces no injurious effects."

Then in 1985 — under American pressure, during the Reagan-era drug war — India banned the plant.

Today:
🇺🇸 FDA-approved for childhood epilepsy
🇩🇪 prescribed on insurance for MS
🇮🇱 standard care for combat PTSD
🇮🇳 felony

The medicine is Indian. The patent isn't.

Time to fix this.

🔗 vijaya.app — the evidence file
#NDPS #VijayaTheVictorious #ReformNDPS`,
  },
  {
    platform: 'Reels / TikTok script (30s)',
    char: 0,
    text: `[Hook — 0:00]
"India invented cannabis medicine. Then banned it."

[Beat — 0:03]
"In 600 BCE, Sushruta wrote the first protocol."
[Visual: hand opening Charaka Samhita]

[Beat — 0:08]
"In 1894, the British studied it for 7 volumes."
[Visual: stack of Hemp Commission Report]

[Beat — 0:12]
"In 1985, we banned the plant. Under US pressure."
[Visual: red stamp 'CRIMINALIZED 1985']

[Beat — 0:17]
"Today, a kid in California gets it for seizures."
[Visual: child smiling]

[Beat — 0:21]
"Her cousin in India? Her parents would be in prison."
[Visual: empty pill bottle]

[Beat — 0:25]
"3,500 years of medicine. One signature away from coming back."
[Visual: VIJAYA logo + URL]

[CTA — 0:28]
"Sign the petition. Link in bio."`,
  },
];

export default function Petition() {
  const [copiedIdx, setCopiedIdx] = useState(null);

  function copy(text, idx) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    });
  }

  const mailto = `mailto:?subject=${encodeURIComponent(MP_EMAIL_SUBJECT)}&body=${encodeURIComponent(MP_EMAIL_BODY)}`;

  return (
    <main className="pet">
      {/* ===== HERO ===== */}
      <section className="pet-hero">
        <div className="container">
          <span className="eyebrow fade-up">Act</span>
          <h1 className="pet-title display fade-up delay-1">
            <em>Reform</em> the
            <br />
            NDPS Act.
          </h1>
          <p className="pet-lede fade-up delay-2">
            The medicine is older than the country. The ban is younger than your parents. There are three things that change this — and they don't need a backend, an app, or a wallet. They need <em>your sixty seconds.</em>
          </p>
        </div>
      </section>

      {/* ===== ACTION 1 — MP EMAIL ===== */}
      <section className="action">
        <div className="container">
          <div className="action-head">
            <div className="action-num display">01.</div>
            <div className="action-h-wrap">
              <span className="eyebrow">Action one</span>
              <h2 className="action-h display">Email your MP.</h2>
              <p className="action-sub">
                The letter is written. You add your name. India has 543 Lok Sabha MPs. If even 10 receive 100 of these, NDPS reform is on the table.
              </p>
            </div>
          </div>

          <div className="action-body">
            <div className="email-preview">
              <div className="email-h mono">
                <span>SUBJECT:</span>
                <span className="email-h-v">{MP_EMAIL_SUBJECT}</span>
              </div>
              <pre className="email-body">{MP_EMAIL_BODY}</pre>
            </div>

            <div className="action-cta-wrap">
              <a className="action-cta primary" href={mailto}>
                Open in mail →
              </a>
              <button className="action-cta secondary" onClick={() => copy(MP_EMAIL_BODY, 'mp')}>
                {copiedIdx === 'mp' ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy text</>}
              </button>
              <div className="action-find mono">
                Don't know your MP? → <a href="https://sansad.in/ls" target="_blank" rel="noopener noreferrer">sansad.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACTION 2 — SOCIAL ===== */}
      <section className="action action-alt">
        <div className="container">
          <div className="action-head">
            <div className="action-num display">02.</div>
            <div className="action-h-wrap">
              <span className="eyebrow">Action two</span>
              <h2 className="action-h display">Post it.</h2>
              <p className="action-sub">
                Three ready-to-go scripts. Copy, paste, post. No edits required. The plant gets free when people see this.
              </p>
            </div>
          </div>

          <div className="social-grid">
            {SOCIAL_HOOKS.map((h, idx) => (
              <article key={idx} className="social-card">
                <div className="social-head">
                  <span className="social-plat mono">{h.platform}</span>
                  {h.char > 0 && <span className="social-len mono">{h.text.length}/{h.char}</span>}
                </div>
                <pre className="social-body">{h.text}</pre>
                <button className="social-copy mono" onClick={() => copy(h.text, idx)}>
                  {copiedIdx === idx ? <><Check size={12} /> COPIED</> : <><Copy size={12} /> COPY</>}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACTION 3 — COMMITMENT ===== */}
      <section className="action commitment">
        <div className="container">
          <div className="action-head">
            <div className="action-num display">03.</div>
            <div className="action-h-wrap">
              <span className="eyebrow">Action three</span>
              <h2 className="action-h display">Tell someone older than you.</h2>
              <p className="action-sub">
                The petition that wins is the conversation at dinner. Pick one person — a parent, a teacher, an uncle — who thinks cannabis is a hippie thing. Send them <em>one</em> evidence file. Just one. Let the page do the rest.
              </p>
            </div>
          </div>

          <div className="commit-band">
            <p className="commit-q">
              <span className="commit-mark">"</span>
              I will send <em>one</em> evidence file to one person who needs to read it before the end of this week.
              <span className="commit-mark">"</span>
            </p>
            <div className="commit-sig mono">— sign in your own head. nobody's counting but you.</div>
          </div>
        </div>
      </section>

      <style>{`
        .pet { position: relative; }
        .pet-hero { padding: 60px 0 50px; }
        .pet-title {
          font-size: clamp(64px, 11vw, 168px);
          line-height: 0.9;
          margin: 16px 0 28px;
        }
        .pet-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .pet-lede {
          font-family: var(--serif);
          font-size: 22px;
          line-height: 1.55;
          color: var(--ink-soft);
          max-width: 760px;
        }
        .pet-lede em { font-style: italic; color: var(--ink); }

        .action {
          padding: 80px 0;
          border-top: 1px solid var(--line);
        }
        .action-alt { background: var(--bone-soft); }
        .action-head {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 40px;
          margin-bottom: 48px;
          align-items: start;
        }
        .action-num {
          font-size: clamp(72px, 10vw, 144px);
          line-height: 0.85;
          color: var(--saffron);
          letter-spacing: -0.04em;
        }
        .action-h {
          font-size: clamp(40px, 5.5vw, 72px);
          line-height: 0.98;
          margin: 8px 0 16px;
        }
        .action-sub {
          font-family: var(--serif);
          font-size: 18px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 580px;
        }
        .action-sub em { font-style: italic; color: var(--saffron); }

        /* email preview */
        .action-body {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 40px;
          align-items: start;
        }
        .email-preview {
          background: var(--paper);
          border: 1.5px solid var(--ink);
          padding: 24px 28px;
          max-height: 460px;
          overflow-y: auto;
        }
        .email-h {
          display: flex;
          gap: 14px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--line);
          margin-bottom: 14px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--ink-quiet);
        }
        .email-h-v { color: var(--ink); font-weight: 700; }
        .email-body {
          font-family: var(--mono);
          font-size: 13px;
          line-height: 1.65;
          white-space: pre-wrap;
          color: var(--ink);
        }

        .action-cta-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .action-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 18px 22px;
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          border: 1.5px solid var(--ink);
          transition: all 0.18s var(--ease-out);
        }
        .action-cta.primary {
          background: var(--saffron);
          color: var(--bone);
          border-color: var(--saffron);
        }
        .action-cta.primary:hover {
          background: var(--saffron-deep);
          border-color: var(--saffron-deep);
        }
        .action-cta.secondary {
          background: var(--paper);
          color: var(--ink);
        }
        .action-cta.secondary:hover {
          background: var(--ink);
          color: var(--bone);
        }
        .action-find {
          margin-top: 8px;
          font-size: 11px;
          color: var(--ink-quiet);
          letter-spacing: 0.1em;
          line-height: 1.6;
        }
        .action-find a { color: var(--saffron); text-decoration: underline; }

        /* social */
        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .social-card {
          background: var(--paper);
          border: 1.5px solid var(--ink);
          padding: 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .social-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--line);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .social-plat { color: var(--saffron); font-weight: 700; }
        .social-len { color: var(--ink-quiet); }
        .social-body {
          font-family: var(--serif);
          font-size: 14px;
          line-height: 1.55;
          white-space: pre-wrap;
          color: var(--ink);
          flex: 1;
          max-height: 320px;
          overflow-y: auto;
        }
        .social-copy {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 14px;
          background: var(--ink);
          color: var(--bone);
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          font-weight: 700;
          align-self: flex-start;
          transition: background 0.15s var(--ease-out);
        }
        .social-copy:hover { background: var(--saffron); color: var(--ink); }

        /* commitment */
        .commitment { background: var(--ink); color: var(--bone); }
        .commitment .action-num { color: var(--saffron); }
        .commit-band {
          padding: 64px 56px;
          background: rgba(232, 84, 28, 0.07);
          border: 1.5px solid var(--saffron);
          text-align: center;
        }
        .commit-q {
          font-family: var(--serif);
          font-variation-settings: "opsz" 96, "SOFT" 30, "WONK" 1;
          font-size: clamp(24px, 3.8vw, 44px);
          line-height: 1.3;
          font-style: italic;
          font-weight: 400;
          color: var(--bone);
          max-width: 880px;
          margin: 0 auto;
        }
        .commit-q em {
          color: var(--saffron);
          font-style: italic;
        }
        .commit-mark {
          color: var(--saffron);
          font-style: italic;
        }
        .commit-sig {
          margin-top: 24px;
          font-size: 11px;
          letter-spacing: 0.16em;
          color: rgba(245, 240, 230, 0.5);
          text-transform: uppercase;
        }

        @media (max-width: 880px) {
          .action-head { grid-template-columns: 1fr; gap: 16px; }
          .action-body { grid-template-columns: 1fr; gap: 24px; }
          .social-grid { grid-template-columns: 1fr; }
          .commit-band { padding: 40px 28px; }
        }
      `}</style>
    </main>
  );
}
