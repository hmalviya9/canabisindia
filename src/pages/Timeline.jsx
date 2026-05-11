// =============================================================
// Timeline — 3,500 years, scrollable.
// =============================================================
import { Link } from 'react-router-dom';

const EVENTS = [
  {
    year: '~1500 BCE',
    bce: true,
    title: 'Atharva Veda names it',
    body: 'The Atharva Veda lists vijaya among the five sacred plants. The word means "the victorious one" — the plant that overcomes pain, fear, and disease.',
    source: 'Atharva Veda XI.6.15',
  },
  {
    year: '600 BCE',
    bce: true,
    title: 'Sushruta files the surgical pharmacopeia',
    body: 'Sushruta — the surgeon of Kashi — prescribes vijaya for pain, nausea, and convulsive disorders. This is the first systematic medical use of cannabis in recorded history.',
    source: 'Sushruta Saṃhitā',
  },
  {
    year: '~200 BCE – 200 CE',
    bce: true,
    title: 'Charaka classifies it',
    body: 'Charaka places vijaya in the vāta-pacifying category, recommending it for neurological and psychiatric disorders. Apasmāra — epilepsy — is the canonical indication.',
    source: 'Charaka Saṃhitā',
  },
  {
    year: '~7th century CE',
    title: 'Tantric integration',
    body: 'Vijaya enters Tantric ritual practice as a sacrament — used for meditative states, longevity practices, and certain initiation rites. Its medical use continues in parallel.',
    source: 'Tantric texts; Sharangadhara tradition',
  },
  {
    year: '16th century',
    title: 'Bhavaprakasha — the pharmacist\'s manual',
    body: 'Bhavamishra documents formulations using vijaya in his Bhavaprakasha Nighantu, including preparations for digestive disorders, chronic fevers, and wasting conditions.',
    source: 'Bhavaprakasha Nighantu',
  },
  {
    year: '1839',
    title: 'O\'Shaughnessy carries it to Britain',
    body: 'Irish physician William O\'Shaughnessy, working in Calcutta, studies Indian cannabis preparations and brings them back to Europe. Cannabis becomes a Western pharmacy staple for the next century.',
    source: 'Transactions of the Medical and Physical Society of Bengal',
  },
  {
    year: '1894',
    title: 'The Indian Hemp Drugs Commission',
    body: 'The British Empire convenes a seven-volume inquiry into Indian cannabis use. Conclusion: "moderate use produces no injurious effects." The Commission recommends regulation, not prohibition. The report is shelved.',
    source: 'Indian Hemp Drugs Commission Report, 1893–94',
  },
  {
    year: '1961',
    title: 'UN Single Convention',
    body: 'India signs the UN Single Convention on Narcotic Drugs, which schedules cannabis alongside heroin. India negotiates a 25-year transition period to protect traditional bhang and ganja use.',
    source: 'Single Convention on Narcotic Drugs, 1961',
  },
  {
    year: '1985',
    title: 'NDPS Act criminalizes the plant',
    body: 'Under sustained US pressure during the Reagan-era drug war, India passes the Narcotic Drugs and Psychotropic Substances Act. Cannabis flower and resin are criminalized. Bhang (leaves) is left to state excise — a colonial-era compromise that survives.',
    source: 'NDPS Act, 1985',
  },
  {
    year: '2017',
    title: 'NEJM publishes the Dravet trial',
    body: 'The New England Journal of Medicine publishes the landmark CBD-Dravet trial: 39% seizure reduction in children with the worst form of epilepsy. The drug is named Epidiolex.',
    source: 'Devinsky et al., NEJM',
  },
  {
    year: '2018',
    title: 'FDA approves Epidiolex',
    body: 'The US Food and Drug Administration approves a cannabis-derived medicine for the first time. By 2026, it is approved in 50+ countries. India is not one of them.',
    source: 'FDA',
  },
  {
    year: '2020 →',
    title: 'India\'s licensed reentry',
    body: 'A handful of state-licensed Ayurvedic manufacturers in Uttarakhand and Madhya Pradesh begin producing vijaya-based formulations under tightly controlled licenses. The pharmacy returns — slowly.',
    source: 'AYUSH Ministry licensing data',
  },
];

export default function Timeline() {
  return (
    <main className="timeline">
      <section className="tl-hero">
        <div className="container">
          <span className="eyebrow fade-up">Timeline</span>
          <h1 className="tl-title display fade-up delay-1">
            <span className="tl-num">3,500</span> years.
            <br />
            One <em>plant.</em>
            <br />
            Twelve <em>turns.</em>
          </h1>
          <p className="tl-lede fade-up delay-2">
            The story India was never told in school. Scroll.
          </p>
        </div>
      </section>

      <section className="tl-list">
        <div className="container">
          <ol className="events">
            {EVENTS.map((ev, idx) => (
              <li key={idx} className={`event ${ev.bce ? 'event-bce' : ''}`}>
                <div className="event-year">
                  <span className="mono year-text">{ev.year}</span>
                </div>
                <div className="event-rail">
                  <div className="event-dot" />
                  <div className="event-line" />
                </div>
                <div className="event-body">
                  <h3 className="event-title">{ev.title}</h3>
                  <p className="event-text">{ev.body}</p>
                  <div className="event-source mono">— {ev.source}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tl-foot">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="tl-foot-text">
            This is not the end of the story.
            <br />
            <Link to="/petition" className="tl-foot-link">Help write the next chapter →</Link>
          </p>
        </div>
      </section>

      <style>{`
        .timeline { position: relative; }
        .tl-hero { padding: 60px 0 80px; }
        .tl-title {
          font-size: clamp(56px, 9vw, 132px);
          line-height: 0.95;
          margin: 16px 0 28px;
        }
        .tl-title em {
          font-style: italic;
          color: var(--saffron);
          font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
        }
        .tl-num {
          font-variation-settings: "opsz" 144, "SOFT" 0, "WONK" 1;
          color: var(--saffron);
        }
        .tl-lede {
          font-family: var(--serif);
          font-style: italic;
          font-size: 22px;
          color: var(--ink-soft);
        }

        .tl-list {
          padding: 60px 0 100px;
          background: var(--bone-soft);
          border-top: 1px solid var(--line);
        }
        .events {
          list-style: none;
          max-width: 920px;
          margin: 0 auto;
        }
        .event {
          display: grid;
          grid-template-columns: 180px 32px 1fr;
          gap: 28px;
          padding-bottom: 12px;
        }
        .event-year {
          padding-top: 6px;
          text-align: right;
        }
        .year-text {
          font-size: 18px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: 0;
        }
        .event-bce .year-text { color: var(--saffron); }

        .event-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .event-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--paper);
          border: 2.5px solid var(--ink);
          margin-top: 10px;
        }
        .event-bce .event-dot { border-color: var(--saffron); }
        .event-line {
          width: 1.5px;
          flex: 1;
          min-height: 60px;
          background: var(--line-strong);
          margin-top: 4px;
        }
        .event:last-child .event-line { display: none; }

        .event-body {
          padding-bottom: 56px;
        }
        .event-title {
          font-family: var(--serif);
          font-variation-settings: "opsz" 36, "SOFT" 30;
          font-size: 30px;
          line-height: 1.1;
          font-weight: 500;
          margin-bottom: 12px;
          letter-spacing: -0.015em;
        }
        .event-text {
          font-family: var(--serif);
          font-variation-settings: "opsz" 14, "SOFT" 30;
          font-size: 17px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin-bottom: 12px;
        }
        .event-source {
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--ink-quiet);
          text-transform: uppercase;
        }

        .tl-foot {
          padding: 80px 0;
        }
        .tl-foot-text {
          font-family: var(--serif);
          font-variation-settings: "opsz" 96, "SOFT" 30;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .tl-foot-link {
          color: var(--saffron);
          font-style: italic;
        }
        .tl-foot-link:hover { text-decoration: underline; }

        @media (max-width: 720px) {
          .event {
            grid-template-columns: 90px 24px 1fr;
            gap: 16px;
          }
          .year-text { font-size: 13px; }
          .event-title { font-size: 24px; }
          .event-text { font-size: 15px; }
        }
      `}</style>
    </main>
  );
}
