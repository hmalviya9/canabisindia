// =============================================================
// VIJAYA v3 — Classical & Parallel-Tradition Citations Database
//
// Conservative strictness: every entry cites a specific critical
// edition (publisher, editor, year) with verse number where known.
// Scholarly disputes flagged in `caveat` field.
//
// THREE TRADITIONS COVERED:
//   1. Ayurveda — Brihat-trayi (Sushruta, Charaka), Nighantu
//      period (Bhavaprakasha v. 233, Raja Nighantu, Sharngadhara),
//      Rasa Shastra (Ananda Kanda).
//   2. Unani Tibb — Qinnab (Cannabis sativa) in the Greco-Arabic
//      tradition, from Avicenna onward, practised continuously in
//      India for over a millennium.
//   3. Sowa Rigpa (Tibetan medicine) — practised across Himalayan
//      India, Nepal, Bhutan, Mongolia.
//
// IMPORTANT — correction from v1, refined in v3:
//   Popular discourse attributes cannabis pain-medicine to Sushruta
//   in 600 BCE. That specific claim is unsupported. BUT — Sushruta
//   DID use cannabis incense + wine as surgical anaesthesia, the
//   world's first such protocol, predating Western anaesthesia by
//   23+ centuries. We split these into two distinct citations:
//     - sushruta-mula-visha (toxicology classification)
//     - sushruta-cannabis-anaesthesia (the legitimate world-first)
//
//   The therapeutic / pharmacological treatment of bhanga is in the
//   Nighantu literature — Bhavaprakasha v. 233 is the canonical
//   verse — and the most extensive single-text treatment is in the
//   Rasa Shastra text Ananda Kanda.
//
//   The Atharva Veda XI.6.15 reference is contested (Sayana glossed
//   bhanga as wild grass; Griffith/Whitney render as hemp).
// =============================================================

export const citations = {
  // -------------------------------------------------------------
  // VEDIC PERIOD
  // -------------------------------------------------------------
  'atharva-veda-11-6-15': {
    id: 'atharva-veda-11-6-15',
    work: 'Atharva Veda',
    location: 'Kanda 11, Sukta 6, Verse 15 (XI.6.15)',
    period: 'c. 1500–1000 BCE',
    sanskrit: 'पञ्च राज्यानि वीरुधां सोमश्रेष्ठानि ब्रूमः। दर्भो भङ्गो यवः सह ते नो मुञ्चन्त्व् अंहसः॥',
    iast: 'pañca rājyāni vīrudhāṃ somaśreṣṭhāni brūmaḥ | darbho bhaṅgo yavaḥ saha te no muñcantv aṃhasaḥ ||',
    translation_griffith:
      'To the five kingdoms of the plants which Soma rules as Lord we speak. Darbha, hemp, barley, mighty power: may these deliver us from woe.',
    translation_griffith_source: 'Griffith, R.T.H. (1895). Hymns of the Atharva-Veda. Benares.',
    translation_whitney:
      'The five kingdoms of plants, having Soma as their chief, we address; the darbha, hemp, barley, saha — let them free us from distress.',
    translation_whitney_source: 'Whitney, W.D. (1905). Atharva-Veda Saṃhitā. Harvard Oriental Series, vols. 7–8.',
    keywords: ['bhanga', 'five sacred plants', 'soma', 'darbha', 'yava'],
    caveat:
      'The identification of bhaṅga in this verse with Cannabis sativa is contested. Sāyaṇa (14th c. CE commentator) glossed bhaṅga as a type of wild grass; later philologists including Griffith and Whitney render it as hemp. The identification is widely accepted in cannabis scholarship but not philologically settled.',
    edition: 'Standard critical reference: Roth & Whitney edition of the Atharva-Veda Saṃhitā, Berlin 1856; with Sāyaṇa\'s bhāṣya.',
  },

  // -------------------------------------------------------------
  // BRIHAT-TRAYI (CLASSICAL SAMHITAS)
  // -------------------------------------------------------------
  'sushruta-mula-visha': {
    id: 'sushruta-mula-visha',
    work: 'Sushruta Saṃhitā',
    location: 'Kalpa Sthāna — section on Mūla Viṣa (root poisons)',
    period: 'compiled c. 600 BCE – 500 CE',
    sanskrit_note: 'Sushruta lists bhaṅgā among the mūla viṣas (root poisons), not among primary therapeutic agents.',
    summary:
      'In the Sushruta Saṃhitā, bhaṅgā appears classified under mūla viṣa (root poisons) — substances with toxic potential requiring shodhana (purification) before any therapeutic use. This is significant: the Sushruta tradition recognized the plant but treated it as upa-viṣa (semi-poison), not as a frontline analgesic. The popular narrative that Sushruta "prescribed cannabis for pain in 600 BCE" is not supported by the textual evidence.',
    keywords: ['mula visha', 'upa-visha', 'shodhana', 'classification'],
    caveat:
      'The popular attribution of cannabis-based pain protocols to Sushruta is widespread in cannabis-history writing but is not anchored to a specific therapeutic verse in the Sushruta Saṃhitā. The textual classification is poison-with-purification, not analgesic.',
    edition:
      'Murthy, K.R. Srikantha (tr.). Suśruta-Saṃhitā (3 vols.). Varanasi: Chaukhambha Orientalia, 2005. Original critical edition: Jadavji Trikamji (1938), Nirnaya Sagar Press.',
  },

  // -------------------------------------------------------------
  // MEDIEVAL NIGHANTU PERIOD — first uncontested medical references
  // -------------------------------------------------------------
  'vangasena-chikitsa-sara': {
    id: 'vangasena-chikitsa-sara',
    work: 'Cikitsā-sāra-saṃgraha',
    author: 'Vaṅgasena',
    period: 'late 11th century CE',
    location: 'Section on appetisers and digestive formulations',
    summary:
      'According to G.J. Meulenbeld\'s authoritative History of Indian Medical Literature, Vangasena\'s Cikitsā-sāra-saṃgraha is the earliest extant Indian medical text containing an uncontested reference to bhaṅga as medicine. Bhaṅga is mentioned as an appetiser and digestive aid; two recipes incorporating it are recommended for longevity and well-being.',
    keywords: ['appetiser', 'digestive', 'rasayana', 'first medical mention'],
    edition:
      'Meulenbeld, G.J. (1999–2002). A History of Indian Medical Literature, 5 vols. Groningen: Egbert Forsten. — primary reference for dating and attribution.',
  },

  'bhavaprakasha-nighantu-bhanga': {
    id: 'bhavaprakasha-nighantu-bhanga',
    work: 'Bhāvaprakāśa Nighaṇṭu',
    author: 'Bhāvamiśra',
    period: '16th century CE',
    location: 'Guḍūcyādi Varga, verse 233 (in Chunekar/Pandey edition, p. 141–145)',
    sanskrit_summary:
      'भङ्गा कफहरी तिक्ता ग्राहिणी पाचनी लघुः। तीक्ष्णोष्णा पित्तला मोहमदवाग्वह्निवर्धिनी॥',
    iast_summary:
      'bhaṅgā kapha-harī tiktā grāhiṇī pācanī laghuḥ | tīkṣṇoṣṇā pittalā moha-mada-vāg-vahni-vardhinī ||',
    translation:
      'Bhaṅgā is kapha-removing, bitter in taste, astringent, digestive, light [in quality], sharp, hot [in potency], pitta-increasing, [and] increases delusion, intoxication, speech, and digestive fire (appetite).',
    summary:
      'The single most-cited classical pharmacology verse on cannabis in Ayurveda. Bhāvamiśra catalogues bhaṅgā\'s sensory and pharmacological profile (rasa-virya-vipaka properties) and indications. Names given in this section include vijaya, jaya, mātulānī, gañjā, bhaṅgā. The traditional indications drawn from this and surrounding verses span nervous exhaustion, periodic headache, migraine, nervous vomiting, delirium, neuralgia, convulsions, bowel disorders, dyspepsia, and insomnia.',
    keywords: ['vijaya', 'jaya', 'matulani', 'kapha-hara', 'pachani', 'rasa', 'virya', 'vipaka'],
    edition:
      'Chunekar, K.C. (commentary) & Pandey, G.S. (ed.). Bhāvaprakāśa Nighaṇṭu, with elaborated Hindi commentary. Varanasi: Chaukhambha Bharati Academy, 1998 edition. — verse 233, pp. 141–145.',
  },

  'ananda-kanda-bhanga-chapter': {
    id: 'ananda-kanda-bhanga-chapter',
    work: 'Ānanda Kanda',
    period: 'date uncertain; cited as Rasa Shastra text, likely 12th–14th c. CE',
    location: 'Dedicated chapter on Bhaṅgā within the alchemical (rasa) corpus',
    summary:
      'The Ānanda Kanda contains the most extensive single-text classical treatment of bhaṅgā in the Indian medical-alchemical corpus. Topics covered: cultivation, harvest timing, shodhana (purification procedures, mandatory before therapeutic use given its upa-viṣa classification), preparation, dosing, and a description of nine successive stages of cannabis toxicity (viṣa-vega) along with antidote (agada) formulations.',
    keywords: ['rasa shastra', 'shodhana', 'cultivation', 'visha-vega', 'agada', 'upa-visha'],
    edition:
      'Reddy, K. Rama Chandra (2010). Text Book of Rasa Sastra. Varanasi: Chaukhambha Sanskrit Bhawan. ISBN 9788189986414. Discusses Ānanda Kanda on p. 12 of the introduction.',
  },

  'raja-nighantu': {
    id: 'raja-nighantu',
    work: 'Rāja Nighaṇṭu',
    author: 'Narahari Paṇḍita',
    period: '14th–15th century CE',
    location: 'Pippalyādi Varga and Karavīrādi Varga — therapeutic indications for bhaṅgā',
    summary:
      'The Rāja Nighaṇṭu reinforces and expands on the pharmacology of bhaṅgā established in Bhāvaprakāśa, with explicit mention of synonyms (vijaya, indrāśana, mātulānī) and therapeutic uses, particularly in nasal/respiratory applications (nāsādhikāra).',
    keywords: ['vijaya', 'indrasana', 'matulani', 'nasadhikara'],
    edition:
      'Tripathi, I. (ed.). Rāja Nighaṇṭu of Paṇḍita Narahari, with Dravyaguṇa-prakāśikā Hindi commentary. Varanasi: Chaukhambha Krishnadas Academy, 2010.',
  },

  'sharngadhara-samhita': {
    id: 'sharngadhara-samhita',
    work: 'Śārṅgadhara Saṃhitā',
    author: 'Śārṅgadhara',
    period: '13th–14th century CE',
    location: 'Madhyama Khaṇḍa — formulary section',
    summary:
      'Śārṅgadhara, working in the late medieval period, codifies several compound formulations that incorporate bhaṅgā as one ingredient among many. The text systematized dosing standards still referenced in modern Ayurvedic practice. Formulations historically including vijaya as a component include Jātīphalādi Cūrṇa (digestive/respiratory), Nidrodaya Rasa (for insomnia, in some recensions), and others.',
    keywords: ['jatiphaladi churna', 'compound formulation', 'dosing standards'],
    edition:
      'Murthy, K.R. Srikantha (tr.). Śārṅgadhara Saṃhitā. Varanasi: Chaukhambha Orientalia, 2003.',
  },

  'chakradatta': {
    id: 'chakradatta',
    work: 'Cakradatta (Cikitsā-saṃgraha)',
    author: 'Cakrapāṇidatta',
    period: 'c. 1060 CE',
    location: 'Kuṣṭha Cikitsā chapter — among compound formulations',
    summary:
      'Cakradatta, the influential Bengali physician, references bhaṅgā in his Cikitsā-saṃgraha among compound formulations including those for skin disorders (kuṣṭha). His commentary on Caraka — the Āyurveda-dīpikā — is one of the standard authoritative readings.',
    keywords: ['kushtha', 'compound formulation', 'commentary tradition'],
    edition:
      'Tripathi, I. (ed.). Cakradatta of Cakrapāṇidatta with Vaidyaprabha Hindi commentary. Varanasi: Chaukhambha Sanskrit Sansthan, 2014.',
  },

  // -------------------------------------------------------------
  // SECONDARY/SUPPORTIVE
  // -------------------------------------------------------------
  'acharya-vijaya-review-2015': {
    id: 'acharya-vijaya-review-2015',
    work: 'Vijaya (Cannabis sativa Linn.) and its therapeutic importance in Ayurveda: a review',
    authors: 'Acharya R, Dhiman KS, Ranade AV, et al.',
    venue: 'Journal of Drug Research in Ayurvedic Sciences',
    year: 2015,
    summary:
      'Peer-reviewed review of the classical Ayurvedic references to vijaya/bhaṅgā, drawing together the Nighantu-period and Rasa Shastra sources. Useful secondary reference for cross-checking classical attributions.',
    keywords: ['review', 'secondary', 'cross-reference'],
  },

  'cannabis-bhanga-springer-chapter': {
    id: 'cannabis-bhanga-springer-chapter',
    work: 'Cannabis (Bhanga) in Classical Text of Ayurveda: An Evidence-Based Rationale',
    venue: 'Springer (book chapter)',
    year: 2022,
    doi: '10.1007/978-981-16-8822-5_12',
    summary:
      'Peer-reviewed chapter synthesizing classical Ayurvedic references to bhaṅgā with a critical lens. Recommended as a starting point for verifying claims about classical medical usage.',
    keywords: ['secondary', 'critical review'],
  },

  // -------------------------------------------------------------
  // SUSHRUTA — THE LEGITIMATE CANNABIS CITATION
  // The popular "Sushruta prescribed cannabis for pain" narrative
  // is unsupported. But Sushruta DID use cannabis incense + wine
  // as the world's first documented surgical anaesthesia. This
  // is the honest, citable, world-first claim.
  // -------------------------------------------------------------
  'sushruta-cannabis-anaesthesia': {
    id: 'sushruta-cannabis-anaesthesia',
    work: 'Sushruta Saṃhitā',
    location: 'Surgical procedure chapters (Cikitsā Sthāna and Sūtra Sthāna)',
    period: 'compiled c. 600 BCE – 400 CE',
    summary:
      'The Sushruta Saṃhitā records the world\'s first documented surgical anaesthetic protocol: wine administered orally combined with the inhalation of cannabis incense to render the patient insensate during operations including rhinoplasty (nāsā-sandhāna), otoplasty, and lithotomy. Sushruta\'s aphorism — paraphrased in surgical history literature — was that "the patient who has been fed does not faint, and he who is rendered intoxicated does not feel the pain of the operation." This precedes any Western anaesthetic protocol by more than 23 centuries, and predates the modern ether/chloroform era by roughly 2,400 years. On this basis the Association of Surgeons of India and multiple peer-reviewed surgical-history reviews credit Sushruta as the "Father of Anaesthesiology" alongside his more widely-known status as the Father of Plastic Surgery.',
    keywords: ['anaesthesia', 'surgery', 'wine', 'cannabis incense', 'rhinoplasty', 'world-first'],
    caveat:
      'Sushruta did NOT classify bhaṅgā as a primary internal medicine (it appears under the mūla-viṣa toxicology framework — see separate citation). The surgical-anaesthesia use is distinct: cannabis incense administered topically/by inhalation as a sedative adjunct, not as systemic therapy.',
    edition:
      'Murthy, K.R. Srikantha (tr.). Suśruta-Saṃhitā (3 vols.). Varanasi: Chaukhambha Orientalia, 2005. Reviewed in: PMC2845369 (Association of Surgeons of India — "Sushrutha: our proud heritage"); PMC5512402 (Sushruta: the father of surgery); PMC11000756 (Sushruta — the father of Indian surgical history, 2024).',
  },

  // -------------------------------------------------------------
  // UNANI — PARALLEL TRADITION
  // -------------------------------------------------------------
  'unani-qinnab': {
    id: 'unani-qinnab',
    work: 'Unani Tibb materia medica (multi-text tradition)',
    period: 'c. 980 CE — Avicenna onward',
    location:
      'Ibn Sīnā (Avicenna) — Al-Qānūn fī al-Ṭibb (The Canon of Medicine, c. 1025 CE); earlier references in Galen (2nd c. CE) and Al-Rāzī (Razes, 9th–10th c. CE); Ibn al-Bayṭār\'s Kitāb al-Jāmiʿ (13th c. CE) which first formally documented its narcotic property in Unani Tibb.',
    summary:
      'The Greco-Arabic medical tradition that became Unani Tibb in India catalogued cannabis under the name Qinnāb (Arabic: قنّب). The Unani materia medica documents four principal therapeutic properties of Qinnāb: muqawwī-i-bāh (aphrodisiac), mumsik (retentive), musakkin (sedative/analgesic), and munawwim (hypnotic). Plant parts in clinical use: bhaṅg (dried leaves), tukhm bhang (seeds), charas (resin), gañjā (flowering heads). Multi-ingredient Unani compound formulations historically including Qinnāb — for spermatorrhoea, leucorrhoea, premature ejaculation, and as appetiser/carminative — are documented in the standard Unani pharmacopoeia. Critically, this is a *parallel* therapeutic tradition to Ayurveda, developed independently through the Greco-Arabic transmission via the Islamic world, and practised continuously in India for over a millennium.',
    keywords: ['qinnab', 'unani', 'avicenna', 'razes', 'ibn al-baytar', 'parallel tradition'],
    edition:
      'Kalam et al. (2020). "Bhang (Cannabis sativus L.): Review of the drug with special emphasis on single use and compound formulations and its pharmacological studies relevant to Unani System of Medicine." World Journal of Pharmaceutical Research. Standard Unani reference: Hakim Mohammad Kabiruddin, Bayāz-i-Kabīr.',
  },

  // -------------------------------------------------------------
  // SOWA RIGPA / TIBETAN — PARALLEL TRADITION
  // -------------------------------------------------------------
  'tibetan-sowa-rigpa-cannabis': {
    id: 'tibetan-sowa-rigpa-cannabis',
    work: 'Sowa Rigpa (Tibetan medicine) — Four Tantras (rGyud-bzhi)',
    period: '12th century CE — Yuthok Yonten Gonpo the Younger (1126–1202)',
    location:
      'Chapters 19–21 of the second tantra of the rGyud-bzhi (Four Medical Treatises) catalogue ~374 materia medica items, with cannabis identifications under different Tibetan names.',
    summary:
      'Sowa Rigpa, the principal Himalayan medical system practiced across Tibetan-cultural regions of India (Ladakh, Sikkim, Arunachal Pradesh), Nepal, Bhutan, Mongolia, and the wider trans-Himalaya, identifies medicinal cannabis under the Tibetan name So-ma Nag-po (Cannabis sativa, per Sman-pa Tshul-khrims-skal-bzang\'s materia-medica dictionary). The system uses cannabis-containing formulations principally for lymphatic disorders and as components of compound pills. This is an Indian-subcontinent medical tradition operating in parallel to mainland Ayurveda and Unani, and equally affected by the post-NDPS criminalization of the source plant.',
    keywords: ['sowa rigpa', 'tibetan medicine', 'so-ma nag-po', 'rgyud-bzhi', 'himalayan', 'parallel tradition'],
    caveat:
      'Tibetan medical nomenclature is notoriously polysemous. The name So-ma-râ-dza ("King of Sleep"), sometimes glossed as cannabis in cannabis-history writing, is identified in some materia-medica dictionaries with Hibiscus abelmoschus or Psoralea corylifolia rather than Cannabis sativa. The cannabis identification in Sowa Rigpa is best anchored to So-ma Nag-po. Dr. Barry Clark and other contemporary Sowa Rigpa scholars urge caution on the older identifications.',
    edition:
      'Wangyal R, Tidwell T, Dhondrup W, et al. (2020). "Dataset of materia medica in Sowa Rigpa: Tibetan medicine botanicals and Gawé Dorjé\'s classification system." Data in Brief, DOI 10.1016/j.dib.2020.106498. Definitive contemporary reference: Gawé Dorjé\'s Stainless Crystal Mirror of Materia Medica.',
  },
};

// -------------------------------------------------------------
// HELPERS
// -------------------------------------------------------------

export function getCitation(id) {
  return citations[id] || null;
}

export function getAllCitations() {
  return Object.values(citations);
}

export function citationsByPeriod() {
  const ordered = [
    'atharva-veda-11-6-15',
    'sushruta-mula-visha',
    'sushruta-cannabis-anaesthesia',
    'vangasena-chikitsa-sara',
    'chakradatta',
    'sharngadhara-samhita',
    'raja-nighantu',
    'bhavaprakasha-nighantu-bhanga',
    'ananda-kanda-bhanga-chapter',
    'unani-qinnab',
    'tibetan-sowa-rigpa-cannabis',
    'acharya-vijaya-review-2015',
    'cannabis-bhanga-springer-chapter',
  ];
  return ordered.map((id) => citations[id]).filter(Boolean);
}
