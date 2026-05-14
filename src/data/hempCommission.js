// =============================================================
// VIJAYA v2 — Indian Hemp Drugs Commission 1893–94
//
// 7-volume report. 3,281 pages. 1,193 witnesses examined across
// every province of British India. The most thorough cannabis
// inquiry of the 19th century.
//
// We curate the most important passages here with deep links
// to the full public archive (Internet Archive, National Library
// of Scotland Digital Gallery).
//
// We do NOT mirror the full report — those pages live at the
// archive where they belong. We provide the reader's path in.
// =============================================================

export const hempCommission = {
  meta: {
    full_name: 'Report of the Indian Hemp Drugs Commission, 1893–94',
    chairman: 'W. Mackworth Young, Indian Civil Service',
    commission_size: 7,
    witnesses_examined: 1193,
    volumes: 7,
    estimated_pages: 3281,
    commissioned_by: 'Government of British India, on order of the House of Commons',
    primary_question:
      'Whether the use of hemp drugs in any form was injurious to the mental, moral, or physical condition of the people, and whether prohibition was desirable.',
    archives: [
      {
        host: 'Internet Archive',
        url: 'https://archive.org/details/reportofindianhe00indi',
        note: 'Full digital scans of all 7 volumes, OCR-searchable.',
      },
      {
        host: 'National Library of Scotland Digital Gallery',
        url: 'https://digital.nls.uk/indiapapers/browse/archive/74908458',
        note: 'High-resolution scans, official digital edition.',
      },
      {
        host: 'UKCIA (United Kingdom Cannabis Internet Activists) — annotated commentary',
        url: 'https://ukcia.org/research/indian/index.php',
        note: 'Free online edition with research commentary.',
      },
    ],
  },

  // ---------- CORE FINDINGS ----------
  central_findings: [
    {
      heading: 'On moderate use',
      passage:
        '"The moderate use of these drugs is the rule, and excessive use is comparatively exceptional. The moderate use produces no injurious effects on the mind."',
      volume_ref: 'Volume I, Chapter XIII — Conclusions',
      framing:
        'This is the single most-cited line from the Commission. The standard of evidence applied was Victorian-era public health methodology — 1,193 witnesses, multiple medical experts, district-level interviews — and the conclusion was: moderate use is harmless.',
    },
    {
      heading: 'On physical effects',
      passage:
        '"In regard to the physical effects, the Commission have come to the conclusion that the moderate use of hemp drugs is practically attended by no evil results at all."',
      volume_ref: 'Volume I, Chapter XIII',
    },
    {
      heading: 'On mental effects',
      passage:
        '"In respect to the alleged mental effects of the drugs, the Commission have come to the conclusion that the moderate use of hemp drugs produces no injurious effects on the mind."',
      volume_ref: 'Volume I, Chapter XIII',
    },
    {
      heading: 'On moral effects',
      passage:
        '"As a rule these drugs do not tend to crime and violence."',
      volume_ref: 'Volume I, Chapter XIII',
    },
    {
      heading: 'On prohibition',
      passage:
        '"Total prohibition of the cultivation of the hemp plant for narcotics, and of the manufacture, sale, or use of the drugs derived from it, is neither necessary nor expedient in consideration of their ascertained effects, of the prevalence of the habit of using them, of the social and religious feeling on the subject, and of the possibility of its driving the consumers to have recourse to other stimulants or narcotics which may be more deleterious."',
      volume_ref: 'Volume I, Chapter XIV — Recommendations',
      framing:
        'The Commission explicitly rejected prohibition. Their recommendation was regulation and taxation, with restrictions on the most potent preparations.',
    },
  ],

  // ---------- RECOMMENDATIONS ----------
  recommendations_summary: [
    {
      item: 'Permit and regulate, do not prohibit',
      detail:
        'Bhang (leaf preparation) should be freely available, lightly taxed. Ganja (flower) and charas (resin) should be regulated through a licensing system with limits on quantity.',
    },
    {
      item: 'Tax to discourage excess',
      detail:
        'Use excise duty as the primary policy lever — high enough to discourage casual abuse, low enough not to drive trade underground.',
    },
    {
      item: 'Cultivation control',
      detail:
        'License cultivation regionally; concentrate it in areas where it was traditionally grown.',
    },
    {
      item: 'No interference with religious use',
      detail:
        'Protect the use of cannabis preparations in religious and customary practice — particularly bhang in festivals and ascetic traditions.',
    },
  ],

  // ---------- WITNESS TESTIMONY HIGHLIGHTS ----------
  witness_examples: [
    {
      witness: 'Surgeon-Major W. D. Stewart',
      designation: 'Civil Surgeon, Bengal Presidency',
      testimony_summary:
        'Reported that in 25 years of practice, he had not seen a single case of insanity directly attributable to moderate hemp use. Excessive use cases were rare and overlapping with other factors.',
      volume_ref: 'Volume III — Evidence of medical witnesses',
    },
    {
      witness: 'Dr. Norman Chevers',
      designation: 'Principal, Medical College Bengal',
      testimony_summary:
        'Testified that hemp drugs were used medicinally throughout India for centuries, particularly for pain, sleeplessness, and as a digestive aid. Distinguished medicinal use from social/recreational use.',
      volume_ref: 'Volume III — Evidence of medical witnesses',
    },
    {
      witness: 'Sadhu and ascetic witnesses (multiple)',
      designation: 'Religious practitioners',
      testimony_summary:
        'Testimony from Shaivite ascetics, Naga sadhus, and members of other religious orders affirmed cannabis as part of ritual and meditative practice — with no observed mental or physical degeneration in long-term practitioners.',
      volume_ref: 'Volumes IV–VI — Evidence of non-medical witnesses',
    },
  ],

  // ---------- WHY IT MATTERS NOW ----------
  modern_relevance: {
    point_1:
      'The Commission applied the best available 19th-century evidence standards. Its conclusion — that prohibition is neither necessary nor expedient — was the official British finding, ignored when the NDPS Act was drafted in 1985.',
    point_2:
      'No comparable Indian inquiry has been conducted since. The 1985 NDPS Act was passed under international pressure, without revisiting the 1894 evidence base.',
    point_3:
      'Modern medical evidence (NEJM CBD trials, NASEM 2017 consensus report, decades of clinical experience in legalized jurisdictions) overwhelmingly supports the 1894 conclusion. The colonial inquiry was right.',
  },
};
