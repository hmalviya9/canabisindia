// =============================================================
// Footer — minimal, the slow burn.
// =============================================================
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-manifesto">
            <p className="footer-lede">
              Vijaya — <em>the victorious one</em> — is the Sanskrit name for cannabis. It has been a medicine in India for at least <span className="hi">3,500 years</span>. It has been a crime here since <span className="hi">1985</span>.
            </p>
            <p className="footer-sub">
              This site is the evidence file. Share what you find.
            </p>
          </div>

          <div className="footer-col">
            <div className="footer-h">Read</div>
            <ul>
              <li><Link to="/timeline">Timeline</Link></li>
              <li><Link to="/research">Research library</Link></li>
              <li><Link to="/archetype">Archetype quiz</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-h">Act</div>
            <ul>
              <li><Link to="/petition">Reform NDPS</Link></li>
              <li><Link to="/directory">Find a practitioner</Link></li>
              <li><Link to="/dashboard">Your saved</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-h">Note</div>
            <p className="footer-fine">
              VIJAYA is educational. Nothing here is medical advice. Cannabis remains restricted under the NDPS Act 1985 in India. Always consult a licensed clinician.
            </p>
          </div>
        </div>

        <div className="footer-bottom mono">
          <div>© VIJAYA — open evidence, no rights reserved.</div>
          <div>v2.0 · built in India</div>
        </div>
      </div>

      <style>{`
        .footer {
          margin-top: 120px;
          padding: 80px 0 40px;
          background: var(--ink);
          color: var(--bone);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 56px;
          padding-bottom: 60px;
          border-bottom: 1px solid rgba(245, 240, 230, 0.18);
        }
        .footer-lede {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 24px;
          line-height: 1.45;
          letter-spacing: -0.01em;
          max-width: 420px;
        }
        .footer-lede em {
          color: var(--saffron);
          font-style: italic;
        }
        .footer-lede .hi {
          color: var(--saffron);
          font-weight: 600;
        }
        .footer-sub {
          margin-top: 16px;
          color: rgba(245, 240, 230, 0.5);
          font-size: 14px;
          font-style: italic;
        }
        .footer-h {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--saffron);
          margin-bottom: 18px;
        }
        .footer-col ul {
          list-style: none;
        }
        .footer-col li {
          margin-bottom: 8px;
        }
        .footer-col a {
          color: var(--bone);
          font-family: var(--serif);
          font-size: 16px;
          opacity: 0.85;
          transition: opacity 0.15s var(--ease-out);
        }
        .footer-col a:hover {
          opacity: 1;
          color: var(--saffron);
        }
        .footer-fine {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 13px;
          line-height: 1.6;
          color: rgba(245, 240, 230, 0.55);
        }
        .footer-bottom {
          margin-top: 28px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245, 240, 230, 0.4);
        }

        @media (max-width: 880px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-manifesto { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer { padding: 60px 0 30px; }
          .footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 8px; }
        }
      `}</style>
    </footer>
  );
}
