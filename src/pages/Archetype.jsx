// =============================================================
// Archetype — preserved from v1, simplified.
// Saves result to localStorage so Dashboard can show it.
// =============================================================
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setArchetype } from '../lib/storage';

const QUESTIONS = [
  {
    q: 'When you encounter pain — physical, emotional, existential — your first move is to:',
    options: [
      { text: 'Trace it to the root. Read the literature. Understand it.', archetypes: ['scholar', 'physician'] },
      { text: 'Sit with it. Breathe through it. Let it move.', archetypes: ['sadhu', 'tantric'] },
      { text: 'Talk to someone older who has lived it.', archetypes: ['villager', 'physician'] },
      { text: 'Look for the law that named it a crime.', archetypes: ['reformer'] },
    ],
  },
  {
    q: 'Cannabis is, to you, primarily:',
    options: [
      { text: 'A pharmacy India invented and forgot.', archetypes: ['physician', 'scholar'] },
      { text: 'A sacrament. The plant of Shiva.', archetypes: ['sadhu', 'tantric'] },
      { text: 'A bottle of bhang at Holi with the family.', archetypes: ['villager'] },
      { text: 'A political prisoner. A legal injustice.', archetypes: ['reformer'] },
      { text: 'Something I want to understand without a verdict yet.', archetypes: ['scholar'] },
    ],
  },
  {
    q: 'The fact that India invented this medicine and banned it makes you feel:',
    options: [
      { text: 'Furious. Get me a petition.', archetypes: ['reformer'] },
      { text: 'Sad, in a long-vibration way. A civilizational ache.', archetypes: ['sadhu', 'tantric'] },
      { text: 'Curious. There must be a deeper story.', archetypes: ['scholar', 'physician'] },
      { text: 'Resigned but unsurprised. The village always knew.', archetypes: ['villager'] },
    ],
  },
  {
    q: 'If you had to recommend VIJAYA to one person, you would send it to:',
    options: [
      { text: 'My doctor.', archetypes: ['physician'] },
      { text: 'My friend who reads.', archetypes: ['scholar'] },
      { text: 'My MP.', archetypes: ['reformer'] },
      { text: 'My grandmother.', archetypes: ['villager'] },
      { text: 'My teacher.', archetypes: ['sadhu', 'tantric'] },
    ],
  },
];

const ARCHETYPES = {
  scholar: {
    name: 'The Scholar',
    description: 'You came to the file for evidence. You want citations, primary sources, peer review. You\'re the reason VIJAYA has a DOI under every claim. Start in the Research Library and follow the trail back to Charaka.',
    next: '/research',
  },
  physician: {
    name: 'The Physician',
    description: 'You see this as medicine first, politics second. You want protocols, dosages, contraindications. You\'re who Sushruta wrote for. Start with the symptom-to-therapy matcher and read the modern-evidence column.',
    next: '/',
  },
  sadhu: {
    name: 'The Sadhu',
    description: 'For you, vijaya is sacrament before it is pharmacy. You hold the Shaivite lineage of the plant. VIJAYA respects this — but it speaks in evidence so the State understands. Walk through the Timeline; you\'ll feel the older layers.',
    next: '/timeline',
  },
  tantric: {
    name: 'The Tantric',
    description: 'You hold the esoteric thread — the plant as initiation, as opener, as teacher. You know what most of the literature won\'t name. The Timeline\'s 7th-century entry is where your lineage joins this story.',
    next: '/timeline',
  },
  villager: {
    name: 'The Villager',
    description: 'You\'ve seen people grow up around this plant. Your grandmother knew the bhang at Holi. You don\'t need a study to know what works. VIJAYA exists to write down what your village already remembered.',
    next: '/timeline',
  },
  reformer: {
    name: 'The Reformer',
    description: 'You want the NDPS Act on a parliamentary floor by next session. You came here for ammunition. Good — VIJAYA is the evidence file, and the Petition page is the toolkit. Forward two share cards to two MPs today.',
    next: '/petition',
  },
};

export default function Archetype() {
  const [answers, setAnswers] = useState([]);
  const [done, setDone] = useState(false);
  const [result, setResult] = useState(null);

  function handleAnswer(option) {
    const newAnswers = [...answers, option.archetypes];
    if (newAnswers.length === QUESTIONS.length) {
      // tally
      const counts = {};
      newAnswers.flat().forEach((a) => { counts[a] = (counts[a] || 0) + 1; });
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
      const winner = sorted[0][0];
      const r = { id: winner, ...ARCHETYPES[winner] };
      setResult(r);
      setArchetype(r);
      setDone(true);
    } else {
      setAnswers(newAnswers);
    }
  }

  function restart() {
    setAnswers([]);
    setDone(false);
    setResult(null);
  }

  if (done && result) {
    return (
      <main className="arch">
        <div className="container">
          <div className="arch-result fade-up">
            <span className="eyebrow">Your archetype</span>
            <h1 className="arch-r-name display">{result.name}</h1>
            <p className="arch-r-desc">{result.description}</p>
            <div className="arch-r-actions">
              <Link to={result.next} className="arch-cta primary">
                Begin where you fit →
              </Link>
              <button className="arch-cta secondary" onClick={restart}>
                Retake
              </button>
            </div>
            <p className="arch-r-saved mono">
              Saved to your dashboard.
            </p>
          </div>

          <style>{`
            .arch { padding: 80px 0 120px; }
            .arch-result { max-width: 760px; }
            .arch-r-name {
              font-size: clamp(56px, 9vw, 120px);
              line-height: 0.95;
              color: var(--saffron);
              margin: 16px 0 32px;
            }
            .arch-r-desc {
              font-family: var(--serif);
              font-size: 22px;
              line-height: 1.5;
              color: var(--ink);
              margin-bottom: 40px;
            }
            .arch-r-actions {
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
              margin-bottom: 24px;
            }
            .arch-cta {
              display: inline-flex;
              align-items: center;
              padding: 16px 24px;
              font-family: var(--mono);
              font-size: 12px;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              font-weight: 700;
              border: 1.5px solid var(--ink);
              transition: all 0.2s var(--ease-out);
            }
            .arch-cta.primary {
              background: var(--saffron);
              color: var(--bone);
              border-color: var(--saffron);
            }
            .arch-cta.primary:hover { background: var(--saffron-deep); border-color: var(--saffron-deep); }
            .arch-cta.secondary { background: var(--paper); color: var(--ink); }
            .arch-cta.secondary:hover { background: var(--ink); color: var(--bone); }
            .arch-r-saved {
              font-size: 11px;
              letter-spacing: 0.14em;
              color: var(--ink-quiet);
              text-transform: uppercase;
            }
          `}</style>
        </div>
      </main>
    );
  }

  const current = QUESTIONS[answers.length];
  const progress = (answers.length / QUESTIONS.length) * 100;

  return (
    <main className="arch">
      <div className="container">
        <section className="arch-hero">
          <span className="eyebrow fade-up">Archetype</span>
          <h1 className="arch-title display fade-up delay-1">
            Which kind
            <br />
            of <em>reader</em>
            <br />
            are you?
          </h1>
          <p className="arch-lede fade-up delay-2">
            Four short questions. We point you to where in VIJAYA you'll find your thread fastest.
          </p>
        </section>

        <section className="arch-q-wrap fade-up delay-3">
          <div className="arch-progress">
            <div className="arch-progress-bar" style={{ width: `${progress}%` }} />
            <span className="mono arch-progress-text">
              {answers.length + 1} / {QUESTIONS.length}
            </span>
          </div>

          <h2 className="arch-q display">{current.q}</h2>

          <ul className="arch-options">
            {current.options.map((o, idx) => (
              <li key={idx}>
                <button className="arch-option" onClick={() => handleAnswer(o)}>
                  <span className="arch-opt-letter mono">{String.fromCharCode(65 + idx)}.</span>
                  <span className="arch-opt-text">{o.text}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <style>{`
          .arch { padding: 60px 0 120px; }
          .arch-hero { margin-bottom: 56px; }
          .arch-title {
            font-size: clamp(56px, 9vw, 120px);
            line-height: 0.9;
            margin: 16px 0 24px;
          }
          .arch-title em {
            font-style: italic;
            color: var(--saffron);
            font-variation-settings: "opsz" 144, "SOFT" 100, "WONK" 1;
          }
          .arch-lede {
            font-family: var(--serif);
            font-size: 19px;
            line-height: 1.55;
            color: var(--ink-soft);
            max-width: 560px;
          }

          .arch-q-wrap { max-width: 820px; }
          .arch-progress {
            position: relative;
            height: 2px;
            background: var(--line);
            margin-bottom: 56px;
          }
          .arch-progress-bar {
            position: absolute;
            left: 0; top: 0; bottom: 0;
            background: var(--saffron);
            transition: width 0.4s var(--ease-out);
          }
          .arch-progress-text {
            position: absolute;
            right: 0; top: -22px;
            font-size: 11px;
            letter-spacing: 0.14em;
            color: var(--ink-quiet);
            text-transform: uppercase;
          }

          .arch-q {
            font-size: clamp(28px, 4.2vw, 48px);
            line-height: 1.15;
            margin-bottom: 40px;
          }
          .arch-options {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1px;
            background: var(--line-strong);
            border: 1px solid var(--line-strong);
          }
          .arch-option {
            display: flex;
            align-items: baseline;
            gap: 20px;
            width: 100%;
            text-align: left;
            padding: 22px 28px;
            background: var(--paper);
            transition: all 0.15s var(--ease-out);
          }
          .arch-option:hover {
            background: var(--ink);
            color: var(--bone);
          }
          .arch-option:hover .arch-opt-letter { color: var(--saffron); }
          .arch-opt-letter {
            font-size: 14px;
            color: var(--saffron);
            font-weight: 700;
            min-width: 24px;
          }
          .arch-opt-text {
            font-family: var(--serif);
            font-variation-settings: "opsz" 36, "SOFT" 30;
            font-size: 20px;
            line-height: 1.4;
            letter-spacing: -0.01em;
          }
        `}</style>
      </div>
    </main>
  );
}
