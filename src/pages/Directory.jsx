// =============================================================
// Directory — honest version.
// We link to official AYUSH registries by state.
// We do NOT republish scraped doctor data (DPDP Act risk).
// Opt-in form for practitioners to be listed by VIJAYA.
// =============================================================
import { ExternalLink } from 'lucide-react';

const STATE_REGISTRIES = [
  { state: 'All-India (CCRAS)', body: 'Central Council for Research in Ayurvedic Sciences', url: 'https://ccras.nic.in/' },
  { state: 'All-India (AYUSH Ministry)', body: 'Ministry of AYUSH, Government of India', url: 'https://ayush.gov.in/' },
  { state: 'Andhra Pradesh', body: 'AP AYUSH Department', url: 'https://aphmhidc.ap.gov.in/' },
  { state: 'Delhi', body: 'Delhi AYUSH Directorate', url: 'https://ayush.delhi.gov.in/' },
  { state: 'Gujarat', body: 'Directorate of AYUSH, Gujarat', url: 'https://gujhealth.gujarat.gov.in/' },
  { state: 'Karnataka', body: 'Karnataka AYUSH Directorate', url: 'https://ayush.karnataka.gov.in/' },
  { state: 'Kerala', body: 'Kerala Department of Indian Systems of Medicine', url: 'https://ism.kerala.gov.in/' },
  { state: 'Maharashtra', body: 'Directorate of AYUSH, Maharashtra', url: 'https://ayush.maharashtra.gov.in/' },
  { state: 'Madhya Pradesh', body: 'MP AYUSH Directorate', url: 'https://ayush.mp.gov.in/' },
  { state: 'Tamil Nadu', body: 'TN Directorate of Indian Medicine and Homoeopathy', url: 'https://www.tnhealth.tn.gov.in/' },
  { state: 'Telangana', body: 'Telangana AYUSH Department', url: 'https://ayush.telangana.gov.in/' },
  { state: 'Uttarakhand', body: 'Uttarakhand AYUSH Department', url: 'https://ayush.uk.gov.in/' },
  { state: 'Uttar Pradesh', body: 'UP Directorate of AYUSH', url: 'https://upayush.in/' },
  { state: 'West Bengal', body: 'WB Directorate of AYUSH', url: 'https://www.wbhealth.gov.in/' },
];

export default function Directory() {
  return (
    <main className="dir">
      <section className="dir-hero">
        <div className="container">
          <span className="eyebrow fade-up">Practitioner directory</span>
          <h1 className="dir-title display fade-up delay-1">
            We don't <em>scrape</em>
            <br />
            doctors. We <em>link</em>
            <br />
            to the source.
          </h1>
          <p className="dir-lede fade-up delay-2">
            Republishing scraped registry data carries real legal and ethical risk under India's DPDP Act. So VIJAYA does what's honest: we point you directly to the official AYUSH and Ayurvedic registries for each state. The data there is the source of truth — fresher than anything we could mirror.
          </p>
        </div>
      </section>

      <section className="dir-list">
        <div className="container">
          <header className="dir-section-h">
            <span className="eyebrow">Official registries</span>
            <h2 className="display dir-sec-title">By state.</h2>
          </header>

          <ul className="registries">
            {STATE_REGISTRIES.map((r, idx) => (
              <li key={idx} className="registry">
                <div className="reg-state mono">{r.state}</div>
                <div className="reg-body">{r.body}</div>
                <a className="reg-link mono" href={r.url} target="_blank" rel="noopener noreferrer">
                  Visit ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="dir-optin">
        <div className="container">
          <div className="optin-card">
            <div className="optin-left">
              <span className="eyebrow">Practitioners</span>
              <h2 className="display optin-h">
                List yourself on <em>VIJAYA.</em>
              </h2>
              <p className="optin-body">
                Are you a licensed Ayurvedic, integrative, or AYUSH practitioner with experience prescribing vijaya-based or cannabinoid-adjunct therapies? We're building an opt-in directory. No scraping. No surprises. You control your listing.
              </p>
              <p className="optin-fineprint">
                Verification required: AYUSH registration number, current practice address, and one professional reference. Listings are free.
              </p>
            </div>
            <div className="optin-right">
              <a
                className="optin-cta"
                href="mailto:list@vijaya.app?subject=VIJAYA%20Directory%20Listing%20Request&body=Name%3A%0AClinic%2FPractice%3A%0AState%2FCity%3A%0AAYUSH%20Registration%20Number%3A%0AYears%20of%20practice%3A%0AAreas%20of%20focus%3A%0AContact%20phone%3A%0AContact%20email%3A%0A%0A--%0AI%20confirm%20the%20information%20above%20is%20accurate%20and%20I%20consent%20to%20being%20listed%20on%20vijaya.app."
              >
                Apply via email →
              </a>
              <div className="optin-note mono">
                We reply within 7 days.
                <br />
                No reply = not approved. Try again.
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .dir-hero { padding: 60px 0 50px; }
        .dir-title {
          font-size: clamp(48px, 8vw, 116px);
          line-height: 0.95;
          margin: 16px 0 28px;
        }
        .dir-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .dir-lede {
          font-family: var(--serif);
          font-size: 19px;
          line-height: 1.6;
          color: var(--ink-soft);
          max-width: 720px;
        }

        .dir-list { padding: 60px 0; }
        .dir-section-h { margin-bottom: 40px; }
        .dir-sec-title {
          font-size: clamp(40px, 5.5vw, 72px);
          line-height: 1;
          margin-top: 8px;
        }
        .registries {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: var(--line-strong);
          border: 1px solid var(--line-strong);
        }
        .registry {
          background: var(--paper);
          padding: 24px 28px;
          display: grid;
          grid-template-columns: 200px 1fr auto;
          gap: 24px;
          align-items: center;
          transition: background 0.15s var(--ease-out);
        }
        .registry:hover { background: var(--bone-soft); }
        .reg-state {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--saffron);
          font-weight: 700;
        }
        .reg-body {
          font-family: var(--serif);
          font-size: 16px;
          color: var(--ink);
        }
        .reg-link {
          font-size: 11px;
          letter-spacing: 0.14em;
          color: var(--ink);
          padding: 6px 10px;
          border: 1px solid var(--ink);
          text-transform: uppercase;
          font-weight: 700;
          white-space: nowrap;
        }
        .reg-link:hover { background: var(--ink); color: var(--saffron); }

        .dir-optin { padding: 80px 0 60px; }
        .optin-card {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 56px;
          padding: 56px;
          background: var(--ink);
          color: var(--bone);
          align-items: center;
        }
        .optin-card .eyebrow { color: var(--saffron); }
        .optin-h {
          font-size: clamp(36px, 5vw, 60px);
          line-height: 1;
          margin: 12px 0 24px;
        }
        .optin-h em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 96, "SOFT" 100, "WONK" 1;
        }
        .optin-body {
          font-family: var(--serif);
          font-size: 17px;
          line-height: 1.6;
          color: rgba(245, 240, 230, 0.85);
          margin-bottom: 16px;
        }
        .optin-fineprint {
          font-family: var(--serif);
          font-size: 14px;
          color: rgba(245, 240, 230, 0.55);
          line-height: 1.55;
        }
        .optin-cta {
          display: inline-block;
          padding: 18px 28px;
          background: var(--saffron);
          color: var(--ink);
          font-family: var(--mono);
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          transition: background 0.2s var(--ease-out);
        }
        .optin-cta:hover { background: var(--bone); }
        .optin-note {
          margin-top: 18px;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: rgba(245, 240, 230, 0.5);
          line-height: 1.7;
          text-transform: uppercase;
        }

        @media (max-width: 880px) {
          .registries { grid-template-columns: 1fr; }
          .registry { grid-template-columns: 1fr; gap: 8px; }
          .optin-card { grid-template-columns: 1fr; padding: 36px; gap: 32px; }
        }
      `}</style>
    </main>
  );
}
