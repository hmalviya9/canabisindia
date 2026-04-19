import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Flame, AlertTriangle, Download, Share2, X,
  Heart, Brain, Moon, Sun, Wind, Droplet, Activity, Eye, Shield
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// DESIGN TOKENS — Sacred / Saffron aesthetic
// ═══════════════════════════════════════════════════════════════
const C = {
  saffron: '#FF9933',
  saffronDeep: '#E67E22',
  maroon: '#6B1D1D',
  maroonDeep: '#4A0E0E',
  cream: '#FDF5E6',
  creamDeep: '#F5E9D0',
  gold: '#C9A227',
  goldLight: '#E6C15C',
  ink: '#2D1810',
  inkSoft: '#5C3A2E',
  green: '#3D5A3D',
  alert: '#B8251E',
};

const FONT_SERIF = `'Spectral', 'Tiro Devanagari Hindi', Georgia, serif`;
const FONT_DISPLAY = `'Tiro Devanagari Hindi', 'Spectral', Georgia, serif`;
const FONT_SANS = `'Inter', -apple-system, sans-serif`;

// ═══════════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════════

const TIMELINE = [
  { year: '~1500 BCE', title: 'Atharva Veda', body: 'Bhang named among five sacred plants ruled by Soma, said to "deliver us from woe." (11.6.15)' },
  { year: '~600 BCE', title: 'Sushruta Samhita', body: 'Bhanga prescribed for catarrh, phlegm, and diarrhea in the foundational Ayurvedic surgical text.' },
  { year: '~11th c. CE', title: 'Chikitsa-sara-sangraha', body: 'Vangasena\'s text — earliest extant, uncontested Indian medical reference to cannabis use.' },
  { year: '1534 CE', title: 'Garcia de Orta', body: 'Portuguese physician in Goa documents bhang\'s ubiquity: "no mystery about it... used by such a number of people."' },
  { year: '1798', title: 'British Tax', body: 'British Parliament taxes bhang, ganja, and charas — framed, officially, as protection of "the natives\' good health."' },
  { year: '1894', title: 'Indian Hemp Drugs Commission', body: '3,281-page British study concludes: "moderate use practically produces no ill effects." Report was buried.' },
  { year: '1961', title: 'UN Single Convention', body: 'Global treaty classes cannabis with heroin. India formally objects, citing religious custom.' },
  { year: '1985', title: 'NDPS Act', body: 'India bans charas and ganja. Bhang (leaves + seeds) is specifically exempted — a legal echo of cultural reality.' },
  { year: '2017', title: 'Gujarat Decriminalizes', body: 'State removes bhang from "intoxicating drugs" list. Official reason: "Bhang is consumed only as prasad of Lord Shiva."' },
  { year: '2020', title: 'UN Vote', body: 'India votes with 26 others to remove cannabis from "most dangerous substances" list at the UN CND.' },
  { year: '2020', title: 'Medical Cannabis Clinic', body: 'India\'s first licensed medical cannabis clinic opens in Bengaluru.' },
  { year: '2026', title: 'Psychedelic Renaissance', body: 'Psilocybin (COMP360) clears two Phase 3 FDA trials. First classic psychedelic approval expected late 2026.' },
];

const PLANT_PARTS = [
  {
    id: 'seed',
    name: 'Seeds',
    sanskrit: 'Bīja',
    legal: 'Legal — exempt from NDPS',
    uses: 'Complete protein, omega-3 & omega-6, hemp oil, skincare, bhang thandai base.',
    icon: '●',
  },
  {
    id: 'leaf',
    name: 'Leaves',
    sanskrit: 'Patra',
    legal: 'Legal — used for bhang',
    uses: 'Bhang paste & thandai, Ayurvedic churnas, topical oils, digestive aid (Sushruta).',
    icon: '✦',
  },
  {
    id: 'stem',
    name: 'Stems',
    sanskrit: 'Daṇḍa',
    legal: 'Industrial hemp (state-licensed)',
    uses: 'Textile fiber, paper, rope, bioplastic, hempcrete. Zero THC utility.',
    icon: '│',
  },
  {
    id: 'flower',
    name: 'Flowering Tops (Ganja)',
    sanskrit: 'Puṣpa',
    legal: 'Restricted — NDPS Schedule',
    uses: 'Highest cannabinoid concentration. Traditional medicinal & sacramental use.',
    icon: '❀',
  },
  {
    id: 'resin',
    name: 'Resin (Charas)',
    sanskrit: 'Niryāsa',
    legal: 'Restricted — NDPS Schedule',
    uses: 'Concentrated terpenes & cannabinoids. Historically medicinal; ritualistic among Sadhus.',
    icon: '◆',
  },
  {
    id: 'root',
    name: 'Roots',
    sanskrit: 'Mūla',
    legal: 'Unregulated',
    uses: 'Traditional poultice for joint pain, fevers, inflammation. Minimal THC/CBD content.',
    icon: '⁂',
  },
];

const THERAPIES = [
  {
    num: 1,
    title: 'Chronic Pain & Arthritis',
    part: 'Leaves → Vijaya Taila (oil)',
    mechanism: 'Topical cannabinoid-infused oil, Ayurvedic preparation',
    evidence: 'Traditional + emerging modern RCT support for topical CBD',
    icon: Activity,
  },
  {
    num: 2,
    title: 'Insomnia & Sleep Disorders',
    part: 'Leaves → Low-dose bhang milk',
    mechanism: 'Mild sedation, parasympathetic shift before sleep',
    evidence: 'Traditional; modern evidence for CBN, balanced THC:CBD',
    icon: Moon,
  },
  {
    num: 3,
    title: 'Chemotherapy Nausea',
    part: 'Flower extracts → THC',
    mechanism: 'CB1 receptor activation in brainstem vomiting centers',
    evidence: 'Strong modern evidence — dronabinol FDA-approved since 1985',
    icon: Shield,
  },
  {
    num: 4,
    title: 'Treatment-Resistant Epilepsy',
    part: 'Leaves/flowers → CBD extract',
    mechanism: 'Non-psychoactive CBD reduces seizure frequency',
    evidence: 'Epidiolex FDA-approved for Dravet & Lennox-Gastaut syndromes',
    icon: Brain,
  },
  {
    num: 5,
    title: 'Chronic Anxiety & PTSD',
    part: 'Leaves → CBD-dominant preparations',
    mechanism: 'Modulates 5-HT1A receptors, dampens amygdala hyperactivity',
    evidence: 'Moderate modern evidence; psilocybin trials showing strong PTSD results',
    icon: Heart,
  },
  {
    num: 6,
    title: 'Cancer Appetite Loss & Wasting',
    part: 'Flowers → THC',
    mechanism: 'CB1 stimulation of hypothalamic appetite circuits',
    evidence: 'Strong evidence; used in HIV wasting since 1990s',
    icon: Flame,
  },
  {
    num: 7,
    title: 'Multiple Sclerosis Spasticity',
    part: 'Balanced THC:CBD extract',
    mechanism: 'Nabiximols (Sativex) — oromucosal spray',
    evidence: 'Approved in 25+ countries; Phase 3 evidence',
    icon: Wind,
  },
  {
    num: 8,
    title: 'Digestive Disorders (IBS, colitis)',
    part: 'Leaves → Vijaya churna',
    mechanism: 'Endocannabinoid modulation of gut motility; traditional digestive',
    evidence: 'Sushruta Samhita; modern research on gut CB1/CB2 emerging',
    icon: Droplet,
  },
  {
    num: 9,
    title: 'Glaucoma (intraocular pressure)',
    part: 'Flower/leaf extracts',
    mechanism: 'Short-term reduction in intraocular pressure',
    evidence: 'Demonstrated modestly; not first-line due to duration',
    icon: Eye,
  },
  {
    num: 10,
    title: 'Palliative & End-of-Life Care',
    part: 'Full-spectrum preparations',
    mechanism: 'Simultaneous pain + anxiety + appetite + insomnia relief',
    evidence: 'Growing clinical adoption in palliative settings globally',
    icon: Sun,
  },
];

const ARCHETYPES = {
  seeker: {
    name: 'The Seeker',
    sanskrit: 'Jijñāsu',
    blurb: 'You came for understanding, not validation. The Vedas were written for you.',
    plantMatch: 'Leaves (Patra)',
    traditionMatch: 'Meditation aid — low-dose bhang used ritualistically by Nath yogis',
  },
  devotee: {
    name: "Shiva's Devotee",
    sanskrit: 'Shaiva',
    blurb: 'Bhang is prasad. For you this is less about science and more about continuity — a thread from Himalayan sadhus to your kitchen.',
    plantMatch: 'Bhang preparation',
    traditionMatch: 'Mahashivaratri & Holi observance; aligned with the Shaivite tradition',
  },
  healer: {
    name: 'The Modern Vaidya',
    sanskrit: 'Vaidya',
    blurb: 'You want medicine, not mystique. The plant has plenty to offer without the metaphysics.',
    plantMatch: 'CBD / Vijaya Taila',
    traditionMatch: 'Sushruta\'s Ayurvedic application — topical & internal medicinal use',
  },
  skeptic: {
    name: 'The Honest Skeptic',
    sanskrit: 'Vicāraka',
    blurb: 'You held the cultural script loosely. Good. Now you have better data than 99% of people who have an opinion.',
    plantMatch: 'Hemp seeds (Bīja)',
    traditionMatch: 'Industrial hemp — nutrition, fiber, the non-controversial case',
  },
  restorer: {
    name: 'The Grounded One',
    sanskrit: 'Sthira',
    blurb: 'You came here tired. The plant has ancient protocols for exactly this — sleep, pain, the nervous system turning back down.',
    plantMatch: 'CBD-dominant preparations',
    traditionMatch: 'Ayurvedic nidra (sleep) and vāta-pacifying applications',
  },
  advocate: {
    name: 'The Reformer',
    sanskrit: 'Sudhāraka',
    blurb: 'You see the policy. The gap between Vedic legitimacy and colonial hangover. India will sort this out — partly because of people like you.',
    plantMatch: 'The whole plant',
    traditionMatch: 'The legal reform movement; industrial hemp pioneers',
  },
};

// ═══════════════════════════════════════════════════════════════
// ROOT APP
// ═══════════════════════════════════════════════════════════════

export default function App() {
  const [screen, setScreen] = useState('intro');
  const [answers, setAnswers] = useState({});
  const [showShareCard, setShowShareCard] = useState(false);

  const archetype = useMemo(() => computeArchetype(answers), [answers]);

  return (
    <div style={{
      minHeight: '100vh',
      background: C.cream,
      color: C.ink,
      fontFamily: FONT_SANS,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <MandalaBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {screen === 'intro' && <IntroScreen onStart={() => setScreen('quiz')} />}
        {screen === 'quiz' && (
          <QuizScreen
            answers={answers}
            setAnswers={setAnswers}
            onComplete={() => setScreen('journey')}
            onBack={() => setScreen('intro')}
          />
        )}
        {screen === 'journey' && (
          <JourneyScreen onComplete={() => setScreen('result')} />
        )}
        {screen === 'result' && (
          <ResultScreen
            archetype={archetype}
            answers={answers}
            onShare={() => setShowShareCard(true)}
            onRestart={() => { setAnswers({}); setScreen('intro'); }}
          />
        )}
      </div>
      {showShareCard && (
        <ShareCardModal
          archetype={archetype}
          onClose={() => setShowShareCard(false)}
        />
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// BACKGROUND — subtle mandala texture
// ═══════════════════════════════════════════════════════════════
function MandalaBackground() {
  return (
    <svg
      style={{
        position: 'fixed', inset: 0, width: '100%', height: '100%',
        opacity: 0.04, pointerEvents: 'none', zIndex: 0,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="mandala" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <circle cx="60" cy="60" r="40" fill="none" stroke={C.maroon} strokeWidth="0.5"/>
          <circle cx="60" cy="60" r="20" fill="none" stroke={C.maroon} strokeWidth="0.5"/>
          <path d="M60 20 L60 100 M20 60 L100 60 M30 30 L90 90 M90 30 L30 90"
                stroke={C.maroon} strokeWidth="0.3" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mandala)"/>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 1 — INTRO / HOOK
// ═══════════════════════════════════════════════════════════════
function IntroScreen({ onStart }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: 12, letterSpacing: '0.4em',
        color: C.maroon, marginBottom: 32, fontWeight: 600,
      }}>
        विजया • VIJAYA
      </div>

      <LeafEmblem />

      <h1 style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 'clamp(44px, 9vw, 96px)',
        lineHeight: 1.0,
        color: C.maroonDeep,
        margin: '32px 0 16px',
        fontWeight: 400,
        maxWidth: 800,
      }}>
        Before it was taboo,<br/>
        <em style={{ color: C.saffronDeep, fontStyle: 'italic' }}>it was sacred.</em>
      </h1>

      <p style={{
        fontFamily: FONT_SERIF, fontSize: 'clamp(17px, 2.2vw, 22px)',
        color: C.inkSoft, maxWidth: 560, margin: '16px auto 48px',
        lineHeight: 1.55,
      }}>
        Cannabis has been in India for <strong style={{ color: C.maroon }}>3,500 years</strong>.
        It appears in the Atharva Veda. Sushruta prescribed it. Shiva is offered it.
        Then the British taxed it, the UN scheduled it, and India forgot most of its own story.
      </p>

      <button
        onClick={onStart}
        style={{
          background: C.maroonDeep, color: C.cream,
          padding: '18px 44px', border: 'none',
          fontFamily: FONT_SERIF, fontSize: 18, fontWeight: 500,
          letterSpacing: '0.05em', cursor: 'pointer',
          borderRadius: 2, transition: 'all 0.2s',
          boxShadow: `4px 4px 0 ${C.gold}`,
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translate(-2px, -2px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translate(0, 0)'}
      >
        Begin the Atlas →
      </button>

      <p style={{
        fontSize: 13, color: C.inkSoft, marginTop: 32,
        maxWidth: 400, fontStyle: 'italic', opacity: 0.7,
      }}>
        Takes 2 minutes. No sign-in. No data stored.
      </p>
    </div>
  );
}

function LeafEmblem() {
  return (
    <svg width="72" height="96" viewBox="0 0 72 96" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke={C.saffronDeep} strokeWidth="1.5" strokeLinecap="round">
        <path d="M36 88 L36 40"/>
        {[-60, -40, -20, 0, 20, 40, 60].map((ang, i) => {
          const rad = (ang * Math.PI) / 180;
          const len = 28 - Math.abs(ang) * 0.2;
          const x2 = 36 + Math.sin(rad) * len;
          const y2 = 40 - Math.cos(rad) * len;
          return <path key={i} d={`M36 40 Q ${(36+x2)/2 + Math.sin(rad)*4} ${(40+y2)/2} ${x2} ${y2}`} />;
        })}
        <circle cx="36" cy="40" r="3" fill={C.saffronDeep}/>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 2 — QUIZ
// ═══════════════════════════════════════════════════════════════
function QuizScreen({ answers, setAnswers, onComplete, onBack }) {
  const [step, setStep] = useState(0);

  const questions = [
    {
      key: 'perception',
      q: 'When you hear "cannabis in India," what comes up first?',
      opts: [
        { value: 'drug', label: 'A drug. Illegal.' },
        { value: 'sacred', label: 'Shiva. Bhang. Sacred.' },
        { value: 'medicine', label: 'Medicine. Ayurvedic.' },
        { value: 'confused', label: 'Honestly, I don\'t know.' },
      ],
    },
    {
      key: 'reason',
      q: 'What brought you to this app?',
      opts: [
        { value: 'curiosity', label: 'Curiosity. I want to know.' },
        { value: 'health', label: 'A health reason. Pain, sleep, stress.' },
        { value: 'spiritual', label: 'The spiritual / Vedic angle.' },
        { value: 'policy', label: 'The legal / policy angle.' },
      ],
    },
    {
      key: 'dosha',
      q: 'Which Ayurvedic constitution (dosha) feels closest to you?',
      opts: [
        { value: 'vata', label: 'Vata — quick, restless, cold hands, light sleep' },
        { value: 'pitta', label: 'Pitta — sharp, intense, warm, hungry often' },
        { value: 'kapha', label: 'Kapha — steady, grounded, slower, calm' },
        { value: 'unknown', label: 'Not sure — haven\'t thought about it' },
      ],
    },
  ];

  const current = questions[step];

  const choose = (value) => {
    const newAnswers = { ...answers, [current.key]: value };
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 280);
    } else {
      setTimeout(() => onComplete(), 320);
    }
  };

  return (
    <div style={{
      minHeight: '100vh', padding: '48px 24px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Progress */}
      <div style={{
        display: 'flex', gap: 8, marginBottom: 40,
      }}>
        {questions.map((_, i) => (
          <div key={i} style={{
            width: i === step ? 40 : 16, height: 4,
            background: i <= step ? C.saffronDeep : C.creamDeep,
            transition: 'all 0.3s',
          }}/>
        ))}
      </div>

      <div style={{ maxWidth: 640, width: '100%' }}>
        <div style={{
          fontSize: 11, letterSpacing: '0.3em', color: C.maroon,
          marginBottom: 16, fontWeight: 600,
        }}>
          QUESTION {step + 1} / {questions.length}
        </div>
        <h2 style={{
          fontFamily: FONT_DISPLAY, fontSize: 'clamp(28px, 4vw, 40px)',
          color: C.maroonDeep, marginBottom: 40, fontWeight: 400,
          lineHeight: 1.2,
        }}>
          {current.q}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {current.opts.map((opt) => (
            <button
              key={opt.value}
              onClick={() => choose(opt.value)}
              style={{
                background: C.cream, border: `1.5px solid ${C.creamDeep}`,
                padding: '18px 24px', textAlign: 'left',
                fontFamily: FONT_SERIF, fontSize: 17,
                color: C.ink, cursor: 'pointer',
                borderRadius: 2, transition: 'all 0.18s',
                fontWeight: 400,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = C.saffronDeep;
                e.currentTarget.style.background = '#FFFEF8';
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = C.creamDeep;
                e.currentTarget.style.background = C.cream;
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {step > 0 && (
        <button
          onClick={() => setStep(step - 1)}
          style={{
            marginTop: 32, background: 'none', border: 'none',
            color: C.inkSoft, fontSize: 14, cursor: 'pointer',
            fontFamily: FONT_SANS,
          }}
        >
          ← Back
        </button>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 3 — JOURNEY (scroll-driven)
// ═══════════════════════════════════════════════════════════════
function JourneyScreen({ onComplete }) {
  const [selectedPart, setSelectedPart] = useState('leaf');
  const [therapyIdx, setTherapyIdx] = useState(0);

  return (
    <div style={{ paddingBottom: 64 }}>
      <ProgressBar />

      {/* SECTION: VEDIC MENTION */}
      <Section title="The Vedic Root" subtitle="Atharva Veda, Book 11, Hymn 6, Verse 15" anchorId="vedic">
        <div style={{
          background: C.maroonDeep, color: C.cream,
          padding: 'clamp(32px, 6vw, 56px)', margin: '24px 0',
          borderRadius: 2, boxShadow: `8px 8px 0 ${C.saffronDeep}`,
        }}>
          <p style={{
            fontFamily: FONT_DISPLAY, fontSize: 'clamp(22px, 3.5vw, 32px)',
            lineHeight: 1.5, marginBottom: 24, fontStyle: 'italic',
            color: C.goldLight,
          }}>
            पञ्च राज्यानि वीरुधां सोमश्रेष्ठानि ब्रूमः।<br/>
            दर्भो भङ्गो यवः सह ते नो मुञ्चन्त्व् अंहसः॥
          </p>
          <p style={{
            fontFamily: FONT_SERIF, fontSize: 'clamp(17px, 2.4vw, 21px)',
            lineHeight: 1.6, color: C.cream,
          }}>
            "To the five kingdoms of the plants which Soma rules as Lord we speak.
            <strong style={{ color: C.goldLight }}> Darbha, Bhang, Barley, Sahá</strong>:
            may these deliver us from woe."
          </p>
          <p style={{ fontSize: 13, marginTop: 24, color: C.goldLight, opacity: 0.7 }}>
            — Translation: Ralph T. H. Griffith (1895), corroborated by William Dwight Whitney
          </p>
        </div>

        <CalloutBox>
          <strong>A note on Soma.</strong> The Vedic Soma and cannabis are related
          but not identical. The Atharva Veda describes Soma as <em>Lord over</em> five plants
          including bhang — placing cannabis inside Soma's kingdom, not claiming
          the two are the same. Scholarly candidates for Soma proper include ephedra,
          syrian rue, and amanita muscaria; the debate is unresolved.
          What <em>is</em> settled: bhang sits in sacred company.
        </CalloutBox>

        <p style={{
          fontFamily: FONT_SERIF, fontSize: 18, lineHeight: 1.7,
          color: C.ink, marginTop: 32,
        }}>
          In Ayurvedic tradition — a subscript of the Atharva Veda — cannabis is
          called <strong style={{ color: C.maroonDeep }}>Vijaya</strong> ("the victorious one"),
          and <strong style={{ color: C.maroonDeep }}>Samvid</strong> in tantric texts.
          The <em>Sushruta Samhita</em> (c. 600 BCE), India's foundational surgical
          treatise, prescribes bhanga for catarrh, phlegm, and diarrhea — three
          bands of disease that still cover much of digestive-respiratory
          medicine today.
        </p>
      </Section>

      {/* SECTION: TIMELINE */}
      <Section title="3,500 Years, Compressed" subtitle="How we got from sacred plant to taboo substance" anchorId="timeline">
        <div style={{ position: 'relative', paddingLeft: 32, marginTop: 32 }}>
          <div style={{
            position: 'absolute', left: 8, top: 0, bottom: 0,
            width: 2, background: C.saffronDeep, opacity: 0.3,
          }}/>
          {TIMELINE.map((t, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 36 }}>
              <div style={{
                position: 'absolute', left: -29, top: 6,
                width: 14, height: 14, borderRadius: '50%',
                background: C.saffron, border: `2px solid ${C.maroonDeep}`,
              }}/>
              <div style={{
                fontFamily: FONT_SANS, fontSize: 12, fontWeight: 700,
                color: C.maroon, letterSpacing: '0.1em', marginBottom: 4,
              }}>
                {t.year}
              </div>
              <div style={{
                fontFamily: FONT_DISPLAY, fontSize: 22, color: C.maroonDeep,
                marginBottom: 6, fontWeight: 500,
              }}>
                {t.title}
              </div>
              <div style={{
                fontFamily: FONT_SERIF, fontSize: 16, color: C.inkSoft,
                lineHeight: 1.55, maxWidth: 600,
              }}>
                {t.body}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION: PLANT ANATOMY */}
      <Section title="The Plant, Part by Part" subtitle="What the law sees vs. what the plant offers" anchorId="anatomy">
        <div style={{
          display: 'grid', gap: 32, marginTop: 32,
          gridTemplateColumns: 'minmax(260px, 380px) 1fr',
          alignItems: 'start',
        }} className="anatomy-grid">
          <PlantSVG selected={selectedPart} onSelect={setSelectedPart} />

          <div>
            {PLANT_PARTS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPart(p.id)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '16px 20px', marginBottom: 8,
                  background: selectedPart === p.id ? C.maroonDeep : C.cream,
                  color: selectedPart === p.id ? C.cream : C.ink,
                  border: `1.5px solid ${selectedPart === p.id ? C.maroonDeep : C.creamDeep}`,
                  fontFamily: FONT_SERIF, cursor: 'pointer',
                  transition: 'all 0.2s', borderRadius: 2,
                }}
              >
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  marginBottom: selectedPart === p.id ? 8 : 0,
                }}>
                  <div>
                    <span style={{
                      fontSize: 20, marginRight: 12,
                      color: selectedPart === p.id ? C.goldLight : C.saffronDeep,
                    }}>{p.icon}</span>
                    <strong style={{ fontSize: 17 }}>{p.name}</strong>
                    <span style={{
                      fontSize: 13, fontStyle: 'italic', marginLeft: 10, opacity: 0.75,
                    }}>{p.sanskrit}</span>
                  </div>
                  <span style={{
                    fontSize: 11, padding: '2px 8px',
                    background: selectedPart === p.id ? C.gold : C.creamDeep,
                    color: selectedPart === p.id ? C.maroonDeep : C.inkSoft,
                    borderRadius: 2, fontWeight: 600,
                  }}>
                    {p.legal.includes('Legal') ? 'LEGAL' : p.legal.includes('Industrial') ? 'LICENSED' : p.legal.includes('Unregulated') ? '—' : 'RESTRICTED'}
                  </span>
                </div>
                {selectedPart === p.id && (
                  <div style={{
                    fontSize: 14, lineHeight: 1.55, marginTop: 8,
                    color: C.goldLight, opacity: 0.95,
                  }}>
                    <div style={{ marginBottom: 6, fontStyle: 'italic' }}>{p.legal}</div>
                    <div>{p.uses}</div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <CalloutBox>
          The NDPS Act (1985) defines cannabis narrowly: only <strong>charas (resin)</strong>
          and <strong>ganja (flowering tops)</strong>. Leaves and seeds are explicitly
          excluded — which is why bhang is legal at the central level. State laws
          override: Gujarat decriminalized bhang in 2017; Assam has banned it since 1958.
          Karnataka High Court (2022) and multiple subsequent rulings have reaffirmed
          bhang's exempt status.
        </CalloutBox>
      </Section>

      {/* SECTION: 10 THERAPIES */}
      <Section title="10 Therapies, 10 Patients" subtitle="How different parts serve different conditions" anchorId="therapies">
        <div style={{
          display: 'flex', overflowX: 'auto', gap: 16,
          scrollSnapType: 'x mandatory', padding: '8px 4px 24px',
          marginTop: 16, scrollbarWidth: 'thin',
        }}>
          {THERAPIES.map((t, i) => {
            const Ico = t.icon;
            return (
              <div
                key={i}
                onClick={() => setTherapyIdx(i)}
                style={{
                  flex: '0 0 clamp(260px, 80vw, 320px)',
                  background: C.maroonDeep, color: C.cream,
                  padding: 24, scrollSnapAlign: 'start',
                  borderRadius: 2, cursor: 'pointer',
                  border: therapyIdx === i ? `2px solid ${C.gold}` : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: C.saffronDeep, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Ico size={20} color={C.cream}/>
                  </div>
                  <div style={{
                    fontSize: 11, letterSpacing: '0.2em', color: C.goldLight, fontWeight: 700,
                  }}>
                    THERAPY {String(t.num).padStart(2, '0')}
                  </div>
                </div>
                <h4 style={{
                  fontFamily: FONT_DISPLAY, fontSize: 22, marginBottom: 16,
                  color: C.cream, fontWeight: 500,
                }}>
                  {t.title}
                </h4>
                <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 10 }}>
                  <strong style={{ color: C.goldLight }}>Part used:</strong> {t.part}
                </div>
                <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 10 }}>
                  <strong style={{ color: C.goldLight }}>Mechanism:</strong> {t.mechanism}
                </div>
                <div style={{
                  fontSize: 12, opacity: 0.85, paddingTop: 12,
                  borderTop: `1px solid ${C.saffronDeep}`,
                }}>
                  <strong style={{ color: C.goldLight }}>Evidence:</strong> {t.evidence}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', color: C.inkSoft, fontSize: 14, marginTop: 8 }}>
          ← swipe →
        </div>

        <CalloutBox tone="warn">
          <strong>Not self-medication advice.</strong> These therapies require a qualified
          Ayurvedic vaidya or medical practitioner, proper sourcing, and legal access pathways.
          Dosage, preparation, and context determine whether a plant is medicine or harm.
        </CalloutBox>
      </Section>

      {/* SECTION: ADULTERATION */}
      <Section title="The Real Danger Isn't the Plant" subtitle="It's what gets mixed in" anchorId="adulteration">
        <div style={{
          display: 'grid', gap: 20, marginTop: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        }}>
          <AdulterantCard
            name="Datura (Dhatura)"
            danger="HIGH"
            risk="The #1 killer. Deliriant anticholinergic. Hospitalizations every festival season. Indistinguishable by sight in paste."
          />
          <AdulterantCard
            name="Chalk / Talc"
            danger="MEDIUM"
            risk="Adds weight. Respiratory damage if smoked. Digestive irritation in bhang."
          />
          <AdulterantCard
            name="Synthetic Cannabinoids"
            danger="HIGH"
            risk="Sprayed to boost potency. Unpredictable toxicity. Causes psychosis, seizures, death."
          />
          <AdulterantCard
            name="Opioids / Pharmaceuticals"
            danger="HIGH"
            risk="Unregulated mixing to increase perceived effect. Dependency and overdose risk."
          />
        </div>

        <div style={{
          background: C.cream, border: `1.5px dashed ${C.maroon}`,
          padding: 28, marginTop: 32, borderRadius: 2,
        }}>
          <h4 style={{ fontFamily: FONT_DISPLAY, fontSize: 22, color: C.maroonDeep, marginBottom: 16 }}>
            The solution is regulation, not prohibition.
          </h4>
          <p style={{ fontFamily: FONT_SERIF, fontSize: 17, lineHeight: 1.65, color: C.ink }}>
            Every state that has licensed bhang has produced a cleaner product than black-market
            sellers. The same is true globally for cannabis: legalization-with-testing
            reduces adulterant-related ER visits by 60–80% in jurisdictions where it's measured.
            Prohibition produced datura deaths. A licensed, tested supply chain solves them.
          </p>
        </div>
      </Section>

      {/* SECTION: PSYCHEDELIC RENAISSANCE */}
      <Section title="The Science Caught Up" subtitle="Psychedelic research status, April 2026" anchorId="research">
        <div style={{
          display: 'grid', gap: 20, marginTop: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}>
          <StatCard number="3 / 3" label="COMP360 Phase 3 trial successes for psilocybin" source="Compass Pathways, 2025–26"/>
          <StatCard number="Q4 2026" label="Expected NDA submission for first classic psychedelic FDA approval" source="SEC filings"/>
          <StatCard number="60+" label="Active psychedelic drug candidates in FDA pipeline" source="ClinicalTrials.gov, 2024"/>
          <StatCard number="2019" label="FDA approval of Epidiolex (CBD) for treatment-resistant epilepsy" source="FDA"/>
        </div>

        <p style={{
          fontFamily: FONT_SERIF, fontSize: 18, lineHeight: 1.7,
          color: C.ink, marginTop: 32, maxWidth: 720,
        }}>
          The Lykos MDMA application was rejected by the FDA in August 2024 — a setback,
          not a verdict. Compass Pathways' synthetic psilocybin (COMP360) has since cleared
          two Phase 3 trials for treatment-resistant depression, and NDA submission is
          scheduled for late 2026. If approved, psilocybin becomes the first classic
          psychedelic to re-enter the Western pharmacopeia since 1970.
        </p>
        <p style={{
          fontFamily: FONT_SERIF, fontSize: 18, lineHeight: 1.7,
          color: C.ink, marginTop: 16, maxWidth: 720,
        }}>
          The framework is shifting: these compounds are not <em>bad</em>. They are
          powerful — context-dependent, set-and-setting sensitive, therapeutically
          precise when administered correctly. Exactly what Vedic culture was claiming
          about its own sacred plants three millennia ago.
        </p>

        <CalloutBox>
          Cannabis is not a classical psychedelic, but the policy arc is the same:
          plants that were dismissed as dangerous during the War on Drugs are returning
          as medicines — with proper testing, dosing, and supervision. India has an
          asymmetric advantage here: a continuous tradition of ritual, medical, and
          moderate recreational use that predates criminalization by three thousand years.
        </CalloutBox>
      </Section>

      {/* SECTION: WHY INDIA SHOULD LEAD */}
      <Section title="Why India Should Lead" subtitle="Not follow. Lead." anchorId="india">
        <div style={{ marginTop: 24 }}>
          {[
            {
              n: '01',
              t: 'Continuity of tradition',
              b: 'India never fully severed cannabis from culture. Bhang at Mahashivaratri, charas among Sadhus, thandai during Holi — these are unbroken rituals. No other major economy has that.',
            },
            {
              n: '02',
              t: 'Ayurvedic IP',
              b: 'Thousands of years of documented preparations, dosing, and contra-indications sit in Sanskrit texts. This is pharmacology that the West is reinventing from scratch.',
            },
            {
              n: '03',
              t: 'Native cultivars',
              b: 'Indian landraces — Malana, Parvati, Idukki — are genetic archives. Preserving them is as strategic as seed banking for wheat or rice.',
            },
            {
              n: '04',
              t: 'Economic asymmetry',
              b: 'India can grow cannabis at a fraction of North American cost, with climate, geography, and labor all aligned. The global medical cannabis market is projected to exceed $100B by 2030.',
            },
            {
              n: '05',
              t: 'Soft power',
              b: 'Yoga. Ayurveda. Meditation. Vijaya sits inside that lineage — the next cultural export, if India claims it before someone else does.',
            },
          ].map((x, i) => (
            <div key={i} style={{
              display: 'flex', gap: 24, padding: '24px 0',
              borderBottom: `1px solid ${C.creamDeep}`,
            }}>
              <div style={{
                fontFamily: FONT_DISPLAY, fontSize: 36,
                color: C.saffronDeep, minWidth: 60,
              }}>{x.n}</div>
              <div>
                <h4 style={{
                  fontFamily: FONT_DISPLAY, fontSize: 22,
                  color: C.maroonDeep, marginBottom: 8, fontWeight: 500,
                }}>{x.t}</h4>
                <p style={{
                  fontFamily: FONT_SERIF, fontSize: 17, color: C.ink,
                  lineHeight: 1.6, maxWidth: 640,
                }}>{x.b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SECTION: RESPONSIBLE USE */}
      <Section title="One Honest Note" subtitle="Because the Vedas preached moderation, not excess" anchorId="honest">
        <p style={{
          fontFamily: FONT_SERIF, fontSize: 18, lineHeight: 1.75,
          color: C.ink, maxWidth: 720, marginTop: 16,
        }}>
          Cannabis is a powerful plant, not a harmless one. It affects developing brains
          differently than adult ones — evidence for altered neurodevelopment under 25
          is consistent. Heavy daily use can precipitate psychosis in genetically
          susceptible individuals. Dependency, while less severe than for alcohol or
          opioids, is real.
        </p>
        <p style={{
          fontFamily: FONT_SERIF, fontSize: 18, lineHeight: 1.75,
          color: C.ink, maxWidth: 720, marginTop: 16,
        }}>
          The Vedic and Ayurvedic framing was always about <em>ritualistic, moderate, contextual</em> use
          — bhang during specific festivals, Vijaya for specific ailments, full-plant
          preparations administered by a vaidya. The colonial framing — blanket
          criminalization — has been a failure. But neither is normalization of
          daily heavy use a Vedic value. The honest path is the middle one:
          legal, regulated, respected, and not abused.
        </p>
      </Section>

      {/* REVEAL BUTTON */}
      <div style={{
        textAlign: 'center', padding: '48px 24px',
      }}>
        <button
          onClick={onComplete}
          style={{
            background: C.maroonDeep, color: C.cream,
            padding: '22px 56px', border: 'none',
            fontFamily: FONT_SERIF, fontSize: 20, fontWeight: 500,
            letterSpacing: '0.05em', cursor: 'pointer',
            borderRadius: 2, boxShadow: `6px 6px 0 ${C.saffronDeep}`,
          }}
        >
          Reveal My Vijaya Archetype →
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// REUSABLE PIECES FOR JOURNEY
// ═══════════════════════════════════════════════════════════════
function Section({ title, subtitle, anchorId, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={anchorId}
      style={{
        padding: 'clamp(48px, 8vw, 96px) clamp(20px, 5vw, 72px)',
        maxWidth: 1000, margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s, transform 0.8s',
      }}
    >
      <div style={{
        fontSize: 12, letterSpacing: '0.3em', color: C.saffronDeep,
        marginBottom: 16, fontWeight: 700,
      }}>
        {subtitle}
      </div>
      <h2 style={{
        fontFamily: FONT_DISPLAY, fontSize: 'clamp(32px, 5.5vw, 54px)',
        color: C.maroonDeep, marginBottom: 24, fontWeight: 400,
        lineHeight: 1.1,
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function CalloutBox({ children, tone }) {
  const bg = tone === 'warn' ? '#FFF4E6' : '#FBF7EA';
  const border = tone === 'warn' ? C.saffronDeep : C.gold;
  return (
    <div style={{
      background: bg, borderLeft: `4px solid ${border}`,
      padding: '20px 24px', margin: '28px 0',
      fontFamily: FONT_SERIF, fontSize: 16, lineHeight: 1.6,
      color: C.ink, borderRadius: 2,
    }}>
      {children}
    </div>
  );
}

function AdulterantCard({ name, danger, risk }) {
  return (
    <div style={{
      background: danger === 'HIGH' ? '#2D0F0F' : C.maroonDeep,
      color: C.cream, padding: 20, borderRadius: 2,
      borderTop: `3px solid ${danger === 'HIGH' ? C.alert : C.saffronDeep}`,
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10,
      }}>
        <AlertTriangle size={18} color={danger === 'HIGH' ? '#FF6B6B' : C.goldLight}/>
        <span style={{
          fontSize: 11, letterSpacing: '0.2em', fontWeight: 700,
          color: danger === 'HIGH' ? '#FF6B6B' : C.goldLight,
        }}>
          {danger}
        </span>
      </div>
      <h5 style={{
        fontFamily: FONT_DISPLAY, fontSize: 20, marginBottom: 10, color: C.cream,
      }}>{name}</h5>
      <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.88 }}>{risk}</p>
    </div>
  );
}

function StatCard({ number, label, source }) {
  return (
    <div style={{
      background: C.cream, border: `1.5px solid ${C.creamDeep}`,
      padding: 24, borderRadius: 2,
    }}>
      <div style={{
        fontFamily: FONT_DISPLAY, fontSize: 42, color: C.maroonDeep,
        lineHeight: 1, marginBottom: 8, fontWeight: 500,
      }}>
        {number}
      </div>
      <div style={{
        fontFamily: FONT_SERIF, fontSize: 15, color: C.ink, lineHeight: 1.45,
      }}>
        {label}
      </div>
      <div style={{ fontSize: 11, color: C.inkSoft, marginTop: 10, fontStyle: 'italic' }}>
        {source}
      </div>
    </div>
  );
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const h = () => {
      const d = document.documentElement;
      const s = (d.scrollTop) / (d.scrollHeight - d.clientHeight);
      setProgress(Math.min(1, Math.max(0, s)));
    };
    window.addEventListener('scroll', h);
    h();
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 3,
      background: C.creamDeep, zIndex: 100,
    }}>
      <div style={{
        width: `${progress * 100}%`, height: '100%',
        background: C.saffronDeep, transition: 'width 0.12s',
      }}/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PLANT SVG — simple stylized cannabis illustration
// ═══════════════════════════════════════════════════════════════
function PlantSVG({ selected, onSelect }) {
  const stroke = (part) => selected === part ? C.saffronDeep : C.maroonDeep;
  const sw = (part) => selected === part ? 2.5 : 1.3;
  const op = (part) => selected === part ? 1 : 0.55;

  return (
    <svg viewBox="0 0 320 440" width="100%" xmlns="http://www.w3.org/2000/svg"
         style={{ background: C.cream, border: `1.5px solid ${C.creamDeep}`, borderRadius: 2 }}>
      {/* Root */}
      <g style={{ cursor: 'pointer', opacity: op('root') }} onClick={() => onSelect('root')}>
        <path d="M160 420 Q 130 415 110 420 M160 420 Q 190 415 210 420 M160 420 L 160 395"
              stroke={stroke('root')} strokeWidth={sw('root')} fill="none" strokeLinecap="round"/>
        <path d="M160 420 Q 140 428 125 435 M160 420 Q 180 428 195 435"
              stroke={stroke('root')} strokeWidth={sw('root')} fill="none" strokeLinecap="round"/>
        <text x="70" y="425" fontSize="10" fill={C.inkSoft} fontFamily={FONT_SANS}>Root / Mūla</text>
      </g>

      {/* Stem */}
      <g style={{ cursor: 'pointer', opacity: op('stem') }} onClick={() => onSelect('stem')}>
        <line x1="160" y1="395" x2="160" y2="120" stroke={stroke('stem')} strokeWidth={sw('stem')}/>
        <text x="170" y="270" fontSize="10" fill={C.inkSoft} fontFamily={FONT_SANS}>Stem / Daṇḍa</text>
      </g>

      {/* Leaves */}
      <g style={{ cursor: 'pointer', opacity: op('leaf') }} onClick={() => onSelect('leaf')}>
        {[{ y: 340, s: 1 }, { y: 280, s: 1.1 }, { y: 220, s: 1.15 }, { y: 170, s: 1.0 }].map((L, i) => (
          <g key={i} transform={`translate(160 ${L.y}) scale(${L.s})`}>
            {[-70, -48, -25, 0, 25, 48, 70].map((a, j) => {
              const rad = (a * Math.PI) / 180;
              const len = 38 - Math.abs(a) * 0.25;
              const x2 = Math.sin(rad) * len;
              const y2 = -Math.cos(rad) * len;
              return (
                <path key={j}
                      d={`M 0 0 Q ${x2 * 0.5 + Math.sin(rad) * 3} ${y2 * 0.5} ${x2} ${y2}`}
                      stroke={stroke('leaf')} strokeWidth={sw('leaf')} fill="none" strokeLinecap="round"/>
              );
            })}
          </g>
        ))}
        <text x="230" y="215" fontSize="10" fill={C.inkSoft} fontFamily={FONT_SANS}>Leaf / Patra</text>
      </g>

      {/* Flowering top */}
      <g style={{ cursor: 'pointer', opacity: op('flower') }} onClick={() => onSelect('flower')}>
        <ellipse cx="160" cy="110" rx="28" ry="40" fill="none"
                 stroke={stroke('flower')} strokeWidth={sw('flower')}/>
        <ellipse cx="160" cy="95" rx="14" ry="22" fill="none"
                 stroke={stroke('flower')} strokeWidth={sw('flower')}/>
        {/* cluster dots */}
        {[[160, 90], [152, 110], [168, 110], [155, 130], [165, 130], [160, 75]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill={stroke('flower')}/>
        ))}
        <text x="200" y="85" fontSize="10" fill={C.inkSoft} fontFamily={FONT_SANS}>Flowering top / Puṣpa</text>
      </g>

      {/* Seeds */}
      <g style={{ cursor: 'pointer', opacity: op('seed') }} onClick={() => onSelect('seed')}>
        {[[146, 120], [174, 120], [156, 100], [164, 100]].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="2.5" ry="3.5" fill={stroke('seed')}/>
        ))}
        <text x="40" y="105" fontSize="10" fill={C.inkSoft} fontFamily={FONT_SANS}>Seed / Bīja</text>
      </g>

      {/* Resin (subtle dots on leaves) */}
      <g style={{ cursor: 'pointer', opacity: op('resin') }} onClick={() => onSelect('resin')}>
        {[[160, 60], [145, 70], [175, 70], [140, 90], [180, 90]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.5" fill={C.gold}/>
        ))}
        <text x="200" y="55" fontSize="10" fill={C.inkSoft} fontFamily={FONT_SANS}>Resin / Niryāsa</text>
      </g>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════
// ARCHETYPE COMPUTATION
// ═══════════════════════════════════════════════════════════════
function computeArchetype({ perception, reason, dosha }) {
  if (perception === 'sacred' || reason === 'spiritual') return ARCHETYPES.devotee;
  if (reason === 'health' && dosha === 'vata') return ARCHETYPES.restorer;
  if (reason === 'health') return ARCHETYPES.healer;
  if (reason === 'policy') return ARCHETYPES.advocate;
  if (perception === 'drug') return ARCHETYPES.skeptic;
  return ARCHETYPES.seeker;
}

// ═══════════════════════════════════════════════════════════════
// SCREEN 4 — RESULT
// ═══════════════════════════════════════════════════════════════
function ResultScreen({ archetype, answers, onShare, onRestart }) {
  const [countersOn, setCountersOn] = useState(false);
  useEffect(() => { setTimeout(() => setCountersOn(true), 400); }, []);

  return (
    <div style={{
      minHeight: '100vh', padding: '64px 24px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      <div style={{
        fontSize: 12, letterSpacing: '0.4em',
        color: C.saffronDeep, marginBottom: 16, fontWeight: 700,
      }}>
        YOUR VIJAYA ARCHETYPE
      </div>

      <h1 style={{
        fontFamily: FONT_DISPLAY,
        fontSize: 'clamp(48px, 9vw, 108px)',
        color: C.maroonDeep, margin: 0, fontWeight: 400,
        textAlign: 'center', lineHeight: 1,
        opacity: countersOn ? 1 : 0, transform: countersOn ? 'scale(1)' : 'scale(0.92)',
        transition: 'all 0.8s',
      }}>
        {archetype.name}
      </h1>

      <div style={{
        fontFamily: FONT_DISPLAY, fontSize: 26,
        color: C.saffronDeep, marginTop: 12, marginBottom: 32,
        fontStyle: 'italic',
      }}>
        {archetype.sanskrit}
      </div>

      <p style={{
        fontFamily: FONT_SERIF, fontSize: 'clamp(18px, 2.4vw, 22px)',
        color: C.ink, maxWidth: 620, textAlign: 'center',
        lineHeight: 1.55, marginBottom: 40,
      }}>
        {archetype.blurb}
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
        maxWidth: 560, width: '100%', marginBottom: 40,
      }}>
        <div style={{
          background: C.maroonDeep, color: C.cream,
          padding: 20, borderRadius: 2,
        }}>
          <div style={{ fontSize: 11, color: C.goldLight, letterSpacing: '0.15em', marginBottom: 6, fontWeight: 700 }}>
            PLANT MATCH
          </div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 18 }}>{archetype.plantMatch}</div>
        </div>
        <div style={{
          background: C.maroonDeep, color: C.cream,
          padding: 20, borderRadius: 2,
        }}>
          <div style={{ fontSize: 11, color: C.goldLight, letterSpacing: '0.15em', marginBottom: 6, fontWeight: 700 }}>
            TRADITION
          </div>
          <div style={{ fontFamily: FONT_SERIF, fontSize: 15, lineHeight: 1.45 }}>
            {archetype.traditionMatch}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={onShare}
          style={{
            background: C.saffronDeep, color: C.cream,
            padding: '16px 32px', border: 'none',
            fontFamily: FONT_SERIF, fontSize: 17, fontWeight: 500,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
            borderRadius: 2, boxShadow: `4px 4px 0 ${C.maroonDeep}`,
          }}
        >
          <Share2 size={18}/> Share Your Result
        </button>
        <button
          onClick={onRestart}
          style={{
            background: 'transparent', color: C.maroonDeep,
            padding: '16px 32px', border: `1.5px solid ${C.maroonDeep}`,
            fontFamily: FONT_SERIF, fontSize: 17,
            cursor: 'pointer', borderRadius: 2,
          }}
        >
          Restart
        </button>
      </div>

      <p style={{
        marginTop: 64, fontSize: 13, color: C.inkSoft, maxWidth: 480,
        textAlign: 'center', fontStyle: 'italic', opacity: 0.75, lineHeight: 1.5,
      }}>
        Built with sources cited throughout. Not medical advice. Not legal advice.
        For therapeutic application, consult a qualified vaidya or physician.
        For legal standing in your state, consult local NDPS notifications.
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SHARE CARD MODAL — 4:5 aspect, designed for IG feed / X
// ═══════════════════════════════════════════════════════════════
function ShareCardModal({ archetype, onClose }) {
  const cardRef = useRef(null);

  const downloadCard = () => {
    // Canvas-based render of the share card for PNG download
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');

    // Background
    const gradient = ctx.createLinearGradient(0, 0, 0, 1350);
    gradient.addColorStop(0, C.maroonDeep);
    gradient.addColorStop(1, '#2D0E0E');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1350);

    // Saffron accent bar
    ctx.fillStyle = C.saffronDeep;
    ctx.fillRect(0, 0, 1080, 16);

    // Gold inner frame
    ctx.strokeStyle = C.gold;
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, 960, 1230);

    // Brand mark
    ctx.fillStyle = C.goldLight;
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('विजया • VIJAYA', 540, 150);

    // "Your archetype" label
    ctx.fillStyle = C.saffron;
    ctx.font = 'bold 22px Inter, sans-serif';
    ctx.fillText('YOUR VIJAYA ARCHETYPE', 540, 260);

    // Archetype name (huge)
    ctx.fillStyle = C.cream;
    ctx.font = '400 130px Spectral, serif';
    ctx.fillText(archetype.name.toUpperCase(), 540, 450);

    // Sanskrit
    ctx.fillStyle = C.goldLight;
    ctx.font = 'italic 42px Spectral, serif';
    ctx.fillText(archetype.sanskrit, 540, 520);

    // Divider
    ctx.strokeStyle = C.saffronDeep;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(440, 580);
    ctx.lineTo(640, 580);
    ctx.stroke();

    // Blurb (wrapped)
    ctx.fillStyle = C.cream;
    ctx.font = '28px Spectral, serif';
    wrapText(ctx, archetype.blurb, 540, 660, 880, 42);

    // Three bullets
    ctx.textAlign = 'left';
    ctx.fillStyle = C.goldLight;
    ctx.font = 'bold 20px Inter, sans-serif';
    ctx.fillText('I DISCOVERED:', 140, 900);

    const bullets = [
      'Bhang is mentioned in the Atharva Veda (11.6.15) as one of five sacred plants.',
      'Bhang is legal under India\'s NDPS Act — leaves & seeds are exempted.',
      'FDA psilocybin approval is expected late 2026. The science caught up.',
    ];

    ctx.fillStyle = C.cream;
    ctx.font = '22px Spectral, serif';
    bullets.forEach((b, i) => {
      ctx.fillStyle = C.saffron;
      ctx.fillText('●', 140, 960 + i * 70);
      ctx.fillStyle = C.cream;
      wrapText(ctx, b, 180, 960 + i * 70, 760, 30);
    });

    // Footer
    ctx.textAlign = 'center';
    ctx.fillStyle = C.goldLight;
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText('Reclaim the sacred plant.', 540, 1210);
    ctx.fillStyle = C.cream;
    ctx.font = '16px Inter, sans-serif';
    ctx.fillText('vijaya.app  •  Find your archetype', 540, 1240);

    // Download
    const link = document.createElement('a');
    link.download = `vijaya-${archetype.name.toLowerCase().replace(/[^a-z]/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const shareText = `I'm ${archetype.name} (${archetype.sanskrit}) according to Vijaya — an awareness atlas about cannabis's sacred role in India. Find yours ✨`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(45, 14, 14, 0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20, zIndex: 1000, overflow: 'auto',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: 440, width: '100%', position: 'relative' }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: -40, right: 0,
            background: 'transparent', border: 'none',
            color: C.cream, cursor: 'pointer',
          }}
        >
          <X size={24}/>
        </button>

        {/* Share card preview (4:5) */}
        <div
          ref={cardRef}
          style={{
            aspectRatio: '4 / 5', background: `linear-gradient(180deg, ${C.maroonDeep}, #2D0E0E)`,
            padding: 32, color: C.cream, position: 'relative',
            borderTop: `4px solid ${C.saffronDeep}`,
            display: 'flex', flexDirection: 'column',
          }}
        >
          <div style={{
            position: 'absolute', inset: 16,
            border: `1.5px solid ${C.gold}`,
            opacity: 0.6, pointerEvents: 'none',
          }}/>

          <div style={{
            textAlign: 'center', fontSize: 13, letterSpacing: '0.3em',
            color: C.goldLight, fontWeight: 700, marginTop: 20,
          }}>
            विजया • VIJAYA
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{
              fontSize: 11, letterSpacing: '0.2em', color: C.saffron,
              fontWeight: 700, marginBottom: 16,
            }}>
              YOUR ARCHETYPE
            </div>
            <h1 style={{
              fontFamily: FONT_DISPLAY, fontSize: 'clamp(34px, 9vw, 54px)',
              margin: 0, lineHeight: 1, color: C.cream, fontWeight: 400,
            }}>
              {archetype.name.toUpperCase()}
            </h1>
            <div style={{
              fontFamily: FONT_DISPLAY, fontSize: 20, marginTop: 10,
              color: C.goldLight, fontStyle: 'italic',
            }}>
              {archetype.sanskrit}
            </div>
            <div style={{
              width: 60, height: 2, background: C.saffronDeep,
              margin: '20px auto',
            }}/>
            <p style={{
              fontFamily: FONT_SERIF, fontSize: 15, lineHeight: 1.5,
              color: C.cream, maxWidth: 300, margin: '0 auto',
            }}>
              {archetype.blurb}
            </p>
          </div>

          <div style={{
            fontSize: 11, textAlign: 'center', color: C.goldLight,
            letterSpacing: '0.15em', fontWeight: 600,
          }}>
            Reclaim the sacred plant. · vijaya.app
          </div>
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <button
            onClick={downloadCard}
            style={{
              flex: 1, background: C.saffronDeep, color: C.cream,
              padding: '14px', border: 'none', borderRadius: 2,
              fontFamily: FONT_SERIF, fontSize: 15, fontWeight: 600,
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', gap: 8,
            }}
          >
            <Download size={16}/> Download for Instagram
          </button>
          <button
            onClick={() => window.open(xUrl, '_blank')}
            style={{
              flex: 1, background: C.cream, color: C.maroonDeep,
              padding: '14px', border: 'none', borderRadius: 2,
              fontFamily: FONT_SERIF, fontSize: 15, fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Share on X
          </button>
        </div>
        <p style={{
          fontSize: 12, color: C.goldLight, textAlign: 'center',
          marginTop: 10, opacity: 0.75,
        }}>
          Downloaded image is 1080×1350 — sized for IG feed & Stories
        </p>
      </div>
    </div>
  );
}

// Helper for canvas wrapped text
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let lines = [];
  for (let n = 0; n < words.length; n++) {
    const test = line + words[n] + ' ';
    if (ctx.measureText(test).width > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    } else {
      line = test;
    }
  }
  lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l.trim(), x, y + i * lineHeight));
}
