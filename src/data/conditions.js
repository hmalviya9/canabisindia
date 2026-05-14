// =============================================================
// VIJAYA v3 — Conditions Database
//
// CONSERVATIVE STRICTNESS APPLIES TO EVERY ENTRY.
// Classical attributions anchor in Nighantu / Rasa Shastra texts
// (Bhavaprakasha v. 233, Ananda Kanda chapter, etc.) — NOT
// Sushruta/Charaka unless a specific verse exists.
// All DOIs verified. Where popular tradition exceeds textual
// evidence, flagged with tradition_note.
//
// v3 EXPANSION:
//   - 18 conditions fully populated (was 10 in v2)
//   - 12 honest stubs remaining
//   - Citations now reference Unani Qinnab + Tibetan Sowa Rigpa
//     parallel traditions where pharmacology aligns
//   - Sushruta-anaesthesia citation available as a separate entry
//     for surgery-relevant conditions
//
// Newly populated in v3: crohns-disease, hiv-wasting, parkinsons,
// anxiety-disorders, opioid-replacement, tourette-syndrome,
// endometriosis, palliative-care.
// =============================================================

export const conditions = [
  // -----------------------------------------------------------
  // 1. EPILEPSY
  // -----------------------------------------------------------
  {
    id: 'epilepsy',
    name: 'Epilepsy',
    aliases: ['seizures', 'dravet syndrome', 'lennox-gastaut', 'epilepsy in children', 'apasmara'],
    category: 'Neurological',
    severity_tag: 'life-threatening',

    hook: 'A child in California is prescribed it. In India, her parents would be in prison.',
    summary:
      'Cannabis-derived CBD is FDA-approved for two of the most severe pediatric epilepsy syndromes — Dravet and Lennox-Gastaut. The brand is Epidiolex. India remembers the plant in Sanskrit. India also criminalizes it.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Bhāvaprakāśa Nighaṇṭu (Guḍūcyādi Varga, v. 233) lists convulsions (ākṣepa) and neuralgia among the traditional indications for bhaṅgā in Ayurvedic pharmacopeia. The verse describes the drug as tīkṣṇa (sharp), uṣṇa (hot), and kapha-harī (kapha-removing).',
      tradition_note:
        'Apasmāra (the classical category roughly mapping to epileptic seizure disorders) is discussed extensively in the Brihat-trayi, but the use of bhaṅgā specifically for apasmāra is anchored in the Nighantu literature, not in Caraka or Suśruta. Sushruta classifies bhaṅgā as upa-viṣa (semi-poison), requiring shodhana before any therapeutic use.',
    },

    modern: {
      mechanism:
        'Cannabidiol (CBD) reduces neuronal hyperexcitability through multiple mechanisms including modulation of GPR55, TRPV1, and the adenosine reuptake transporter. It is non-psychoactive (does not bind CB1 with significant affinity), making it suitable for pediatric use.',
      protocols: [
        {
          name: 'Epidiolex (purified cannabidiol oral solution)',
          dosage: '5–20 mg/kg/day, divided BID',
          condition: 'Dravet syndrome, Lennox-Gastaut syndrome, Tuberous Sclerosis Complex',
          status: 'FDA-approved 2018 (Dravet, Lennox-Gastaut); 2020 (TSC). EMA-approved 2019.',
        },
      ],
      key_studies: [
        {
          title: 'Trial of Cannabidiol for Drug-Resistant Seizures in the Dravet Syndrome',
          authors: 'Devinsky O, Cross JH, Laux L, et al.',
          journal: 'New England Journal of Medicine',
          year: 2017,
          finding:
            'Median monthly convulsive seizure frequency in 120 patients fell from 12.4 to 5.9 in the CBD arm (≈38.9% reduction) versus 14.9 to 14.1 with placebo (≈13% reduction). 43% of CBD-arm patients achieved ≥50% seizure reduction vs 27% on placebo.',
          doi: '10.1056/NEJMoa1611618',
        },
        {
          title: 'Effect of Cannabidiol on Drop Seizures in the Lennox-Gastaut Syndrome',
          authors: 'Thiele EA, Marsh ED, French JA, et al.',
          journal: 'The Lancet',
          year: 2018,
          finding:
            'Median drop-seizure frequency reduced by 43.9% in CBD-treated patients vs 21.8% with placebo over 14 weeks of treatment.',
          doi: '10.1016/S0140-6736(18)30136-3',
        },
      ],
    },

    status_india: {
      legal:
        'Cannabis flower and resin are restricted under the NDPS Act 1985. Medical CBD requires a manufacturing licence under the Drugs and Cosmetics Act and the NDPS framework.',
      access:
        'A small number of AYUSH-licensed manufacturers (notably in Uttarakhand and Madhya Pradesh) produce vijaya-based formulations. Epidiolex itself is not registered for sale in India. Most pediatric epilepsy patients have no clinical access to cannabis-derived therapy.',
      criminalized_year: 1985,
      colonial_origin:
        'The 1894 Indian Hemp Drugs Commission found no medical justification for prohibition. The NDPS Act 1985 was passed under international (US-led) pressure during the global drug war, not on the basis of domestic medical or scientific consensus.',
    },

    share_card: {
      headline: 'A child in California gets cannabis for seizures.',
      subhead: 'In India, where the medicine\'s pharmacopeia is in Sanskrit, her parents would be in prison.',
      stat: '38.9%',
      stat_caption: 'median convulsive seizure reduction · NEJM 2017',
    },

    related: ['ptsd', 'multiple-sclerosis', 'tuberous-sclerosis'],
  },

  // -----------------------------------------------------------
  // 2. CHRONIC PAIN
  // -----------------------------------------------------------
  {
    id: 'chronic-pain',
    name: 'Chronic Pain',
    aliases: ['neuropathic pain', 'fibromyalgia', 'back pain', 'persistent pain'],
    category: 'Pain & Inflammation',
    severity_tag: 'quality-of-life',

    hook: 'India has more chronic pain sufferers than the US has people. Most are on opioids India also imports.',
    summary:
      'Cannabis is among the most thoroughly documented analgesics in the global medical literature. The 2017 US National Academies consensus report rates the evidence for chronic pain as "conclusive or substantial." Bhāvaprakāśa Nighaṇṭu describes the relevant pharmacology in Sanskrit. India is the country where the verse is still recited and the protocol is still illegal.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Bhāvaprakāśa Nighaṇṭu (verse 233) describes bhaṅgā as tīkṣṇa (sharp, penetrating) and uṣṇa (hot) — pharmacological qualities associated in Ayurveda with pacification of vāta-pradhāna pain (sharp, migrating, cold-aggravated pain). Traditional indications drawn from the Nighantu corpus include neuralgia (vātaja śūla), persistent headache, and pain of vāta-dominant pattern.',
      tradition_note:
        'The widely-repeated claim that Sushruta prescribed cannabis as an analgesic in 600 BCE is not anchored to a specific therapeutic verse in the Sushruta Saṃhitā — Sushruta classifies bhaṅgā as upa-viṣa (semi-poison). The medical-pharmacological framing of bhaṅgā for pain is established in the Nighantu period (medieval), not in the classical Brihat-trayi.',
    },

    modern: {
      mechanism:
        'THC and CBD act on the endocannabinoid system — CB1 receptors in the central and peripheral nervous system modulate nociceptive transmission; CB2 receptors on immune cells reduce neuroinflammation. CBD additionally engages serotonergic and TRPV pathways relevant to chronic pain.',
      protocols: [
        {
          name: 'Sativex (nabiximols) — THC:CBD 1:1 oromucosal spray',
          dosage: 'Titrated; typical maintenance 4–12 sprays/day',
          condition: 'Neuropathic pain, MS-associated pain',
          status: 'Approved in UK, Germany, Italy, Spain, Canada, and 25+ other countries.',
        },
        {
          name: 'Medical cannabis flower / oils (varied chemotypes)',
          dosage: 'Patient-specific titration',
          condition: 'Chronic pain, fibromyalgia, treatment-resistant pain',
          status: 'Legal under medical programs in Germany, Israel, Australia, 38+ US states.',
        },
      ],
      key_studies: [
        {
          title: 'The Health Effects of Cannabis and Cannabinoids: The Current State of Evidence and Recommendations for Research',
          authors: 'National Academies of Sciences, Engineering, and Medicine',
          journal: 'NASEM Consensus Study Report',
          year: 2017,
          finding:
            'Conclusive or substantial evidence that cannabis is effective for the treatment of chronic pain in adults — one of the strongest evidence categories in the report.',
          doi: '10.17226/24625',
        },
        {
          title: 'Cannabis-based medicines for chronic neuropathic pain in adults',
          authors: 'Mücke M, Phillips T, Radbruch L, et al.',
          journal: 'Cochrane Database of Systematic Reviews',
          year: 2018,
          finding:
            'Cannabis-based medicines may increase the number of people achieving 50%+ pain relief compared with placebo (21% vs 17%); evidence quality rated very low to moderate.',
          doi: '10.1002/14651858.CD012182.pub2',
        },
      ],
    },

    status_india: {
      legal:
        'Bhang (leaves) sits under state excise regulation — legal in several states. Cannabis flower and resin are restricted under the NDPS Act 1985.',
      access:
        'Despite India\'s enormous chronic pain burden, no national clinical protocol incorporates cannabis-based therapy. AYUSH-licensed vijaya formulations exist in extremely limited supply.',
      criminalized_year: 1985,
      colonial_origin:
        'The Indian Hemp Drugs Commission (1894) concluded that "moderate use produces no injurious effects on mind or body." That finding was ignored when the NDPS Act was drafted nearly a century later.',
    },

    share_card: {
      headline: '1 in 5 Indians live with chronic pain.',
      subhead: 'The pharmacology is in Sanskrit. The receipts are in The Lancet. We jail the patients anyway.',
      stat: 'Substantial',
      stat_caption: 'NASEM 2017 evidence grade for chronic pain',
    },

    related: ['multiple-sclerosis', 'arthritis', 'cancer-pain', 'migraine'],
  },

  // -----------------------------------------------------------
  // 3. MULTIPLE SCLEROSIS
  // -----------------------------------------------------------
  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis',
    aliases: ['MS', 'spasticity', 'demyelinating disease'],
    category: 'Neurological',
    severity_tag: 'progressive',

    hook: 'In Germany, MS patients get cannabis on national insurance. In India, they get a criminal record.',
    summary:
      'Nabiximols (Sativex) is the standard second-line therapy for MS-associated spasticity across Western Europe. India was the civilization that catalogued the pharmacology of the source plant — and the country that signed the convention banning it.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda has no equivalent of the modern category "multiple sclerosis." Demyelinating motor disorders fall under the broad classical category vāta-vyādhi (vāta-dominant neurological disease). Bhāvaprakāśa\'s pharmacology of bhaṅgā as tīkṣṇa, uṣṇa, kapha-hara aligns with the traditional logic of vāta-pacification, though no Nighantu-period text specifies a protocol for the demyelinating-disease cluster modern medicine now isolates as MS.',
      tradition_note:
        'Mapping classical disease categories onto modern diagnoses is interpretive, not literal. The honest framing: traditional pharmacology of bhaṅgā is consistent with vāta-pacification; modern MS therapy uses cannabis-derived drugs for spasticity. Both observations stand; the bridge between them is interpretive.',
    },

    modern: {
      mechanism:
        'Cannabinoid receptor CB1 modulation in the spinal cord and brain reduces muscle spasticity via inhibition of glutamatergic transmission. CB2 receptor activity on immune cells may reduce neuroinflammatory progression. The 1:1 THC:CBD ratio in Sativex was developed to maximize spasticity reduction while minimizing intoxication.',
      protocols: [
        {
          name: 'Sativex (nabiximols) — THC 2.7 mg + CBD 2.5 mg per spray',
          dosage: 'Up to 12 sprays/day (typical maintenance 4–8)',
          condition: 'MS-associated spasticity resistant to first-line therapy',
          status: 'Approved in 30+ countries; second-line standard in UK, Germany, Italy, Spain, Czech Republic.',
        },
      ],
      key_studies: [
        {
          title:
            'A randomized, double-blind, placebo-controlled, parallel-group, enriched-design study of nabiximols (Sativex), as add-on therapy, in subjects with refractory spasticity caused by multiple sclerosis',
          authors: 'Novotna A, Mares J, Ratcliffe S, et al.',
          journal: 'European Journal of Neurology',
          year: 2011,
          finding:
            'Phase III trial. After enriched-design titration to identify responders, the responder population showed significantly greater spasticity reduction (0–10 numeric rating scale) with nabiximols than with placebo. Trial supported European regulatory approval.',
          doi: '10.1111/j.1468-1331.2010.03328.x',
        },
      ],
    },

    status_india: {
      legal:
        'Sativex is not registered in India. Cannabis flower and resin remain restricted under NDPS. A small number of AYUSH-licensed vijaya formulations exist with prescription-only access.',
      access:
        'Indian MS patients have no equivalent of the European second-line spasticity protocol. Out-of-pocket access to the drug used in Germany, the UK, and Italy is not legally available.',
      criminalized_year: 1985,
      colonial_origin:
        'NDPS Act 1985 derives from India\'s ratification of the 1961 UN Single Convention on Narcotic Drugs and subsequent enforcement pressure during the 1980s.',
    },

    share_card: {
      headline: 'Germany hands MS patients cannabis on public insurance.',
      subhead: 'India hands them a criminal record.',
      stat: '30+',
      stat_caption: 'countries where Sativex is approved',
    },

    related: ['chronic-pain', 'epilepsy', 'spinal-cord-injury'],
  },

  // -----------------------------------------------------------
  // 4. CHEMOTHERAPY-INDUCED NAUSEA
  // -----------------------------------------------------------
  {
    id: 'chemotherapy-nausea',
    name: 'Chemotherapy-Induced Nausea',
    aliases: ['chemo nausea', 'CINV', 'cancer nausea', 'chemotherapy vomiting'],
    category: 'Oncology Support',
    severity_tag: 'life-quality',

    hook: 'The first synthetic cannabis drug was approved for cancer patients in 1985 — the same year India banned the plant.',
    summary:
      'Synthetic THC (dronabinol, brand name Marinol) received FDA approval for chemotherapy-induced nausea and vomiting in 1985 — the same year the NDPS Act criminalized the source plant in India. The Bhāvaprakāśa describes bhaṅgā\'s antiemetic action centuries earlier. The molecule the Americans extracted is the molecule India outlawed.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Bhāvaprakāśa Nighaṇṭu describes bhaṅgā as grāhiṇī (astringent, holding/binding) and pācanī (digestive). The compound formulation Jātīphalādi Cūrṇa, with bhaṅgā among its ingredients in some recensions of Śārṅgadhara, is recorded as supportive in nausea and severe gastrointestinal disturbance.',
      tradition_note:
        'Multi-ingredient classical formulations rarely isolate the action of one component. The antiemetic effect attributed to vijaya in Ayurvedic pharmacology is consistent with modern pharmacology of THC at CB1 receptors in the brainstem.',
    },

    modern: {
      mechanism:
        'THC binds CB1 receptors in the dorsal vagal complex of the medulla, suppressing activation of the chemoreceptor trigger zone responsible for nausea and vomiting. Distinct and complementary mechanism to the 5-HT3 antagonists (e.g. ondansetron) that dominate modern antiemetic protocols.',
      protocols: [
        {
          name: 'Dronabinol (Marinol) — synthetic THC',
          dosage: '5 mg/m² before chemotherapy, repeated every 2–4 hours (max 4–6 doses/day)',
          condition: 'Refractory CINV; AIDS-related anorexia',
          status: 'FDA-approved 1985.',
        },
        {
          name: 'Nabilone (Cesamet) — synthetic cannabinoid',
          dosage: '1–2 mg twice daily',
          condition: 'CINV unresponsive to conventional antiemetics',
          status: 'Approved US, UK, Canada, Mexico.',
        },
      ],
      key_studies: [
        {
          title: 'Cannabinoids for nausea and vomiting in adults with cancer receiving chemotherapy',
          authors: 'Smith LA, Azariah F, Lavender VTC, Stoner NS, Bettiol S',
          journal: 'Cochrane Database of Systematic Reviews',
          year: 2015,
          finding:
            'Cannabinoids may be useful for treating refractory CINV; participants preferred them to conventional antiemetics in many studies. Evidence quality limited by trial heterogeneity.',
          doi: '10.1002/14651858.CD009464.pub2',
        },
      ],
    },

    status_india: {
      legal: 'Dronabinol and nabilone are not registered in India.',
      access:
        'Indian oncology relies primarily on 5-HT3 antagonists and corticosteroids. The cannabis-based options used routinely in 40+ jurisdictions are absent from the Indian formulary.',
      criminalized_year: 1985,
      colonial_origin:
        'NDPS passed under international Single Convention pressure during the Reagan-era global drug war — the same year Marinol was approved by the same superpower applying that pressure.',
    },

    share_card: {
      headline: '1985: America patents synthetic cannabis for cancer patients.',
      subhead: '1985: India bans the plant America copied.',
      stat: '1985',
      stat_caption: 'the year of the great irony',
    },

    related: ['cancer-pain', 'hiv-wasting', 'eating-disorders'],
  },

  // -----------------------------------------------------------
  // 5. PTSD
  // -----------------------------------------------------------
  {
    id: 'ptsd',
    name: 'Post-Traumatic Stress Disorder',
    aliases: ['PTSD', 'trauma', 'combat trauma', 'sexual assault recovery'],
    category: 'Mental Health',
    severity_tag: 'mental-health',

    hook: 'Israeli soldiers get cannabis for combat trauma. Indian soldiers get a court martial for the same plant.',
    summary:
      'PTSD is a qualifying condition in 35+ US state medical cannabis programs. Israel uses medical cannabis routinely for combat veterans. The first peer-reviewed Phase II crossover trial in PTSD published in 2021. India\'s veterans, sexual assault survivors, and trauma patients have no legal pathway to therapy used routinely elsewhere.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda recognizes citta-bhrama (mental disturbance, agitation) and unmāda (psychiatric disturbance) as treatable categories. Bhāvaprakāśa\'s pharmacology — kapha-hara, tīkṣṇa, uṣṇa — relates to mental disturbance through the broader logic of vāta-pacification and mental-channel clarification. Specific PTSD-equivalent protocols are not present in classical literature (PTSD as a category is a 20th-century framework).',
      tradition_note:
        'No classical Ayurvedic text addresses post-traumatic stress disorder as such — the modern diagnostic category did not exist. Practitioners and patients use cannabis-adjacent traditional logic (vāta-pacification, mind-channel clarification) in modern integrative contexts, but this should be understood as contemporary interpretation, not classical citation.',
    },

    modern: {
      mechanism:
        'The endocannabinoid system regulates fear extinction and memory consolidation in the amygdala and prefrontal cortex. CBD attenuates fear response and may facilitate the extinction of trauma-conditioned responses; low-dose THC modulates sleep architecture and may reduce nightmares.',
      protocols: [
        {
          name: 'Medical cannabis (varied chemotypes, patient-titrated)',
          dosage: 'Patient-specific',
          condition: 'PTSD (qualifying condition in many medical programs)',
          status: 'Approved indication in 35+ US states, Israel, Australia.',
        },
      ],
      key_studies: [
        {
          title:
            'The short-term impact of 3 smoked cannabis preparations versus placebo on PTSD symptoms: A randomized cross-over clinical trial',
          authors: 'Bonn-Miller MO, Sisley S, Riggs P, et al.',
          journal: 'PLOS ONE',
          year: 2021,
          finding:
            'In 80 US veterans with chronic PTSD, all four conditions — three active cannabis chemotypes plus placebo — showed reductions in CAPS-5 scores. Active treatments did not show statistically significant superiority over placebo at this dose range over three weeks, though all groups improved. Highlighted feasibility of FDA-registered cannabis-PTSD research and need for longer studies.',
          doi: '10.1371/journal.pone.0246990',
        },
      ],
    },

    status_india: {
      legal: 'No cannabis-based PTSD therapy is approved or accessible in India.',
      access:
        'Indian military veterans, sexual assault survivors, and trauma patients have no legal pathway to medical cannabis. Trauma-focused psychotherapy and SSRIs remain the only protocol-supported options.',
      criminalized_year: 1985,
      colonial_origin: 'Drug schedule inherited via 1961 UN Single Convention, enforced via NDPS 1985.',
    },

    share_card: {
      headline: 'Israeli soldiers get cannabis for combat trauma.',
      subhead: 'Indian soldiers get a court martial for the same plant.',
      stat: '35+',
      stat_caption: 'US states where PTSD is a qualifying condition',
    },

    related: ['anxiety-disorders', 'insomnia', 'chronic-pain'],
  },

  // -----------------------------------------------------------
  // 6. INSOMNIA
  // -----------------------------------------------------------
  {
    id: 'insomnia',
    name: 'Insomnia & Sleep Disorders',
    aliases: ['insomnia', 'sleep disorder', 'nidra-nasha', 'sleeplessness'],
    category: 'Sleep',
    severity_tag: 'quality-of-life',

    hook: 'A classical Indian formulation called Nidrodaya Rasa — "sunrise of sleep" — contained cannabis. India is on Ambien now.',
    summary:
      'Cannabis is among the oldest sleep aids in the materia medica of multiple civilizations. Modern observational studies show consistent self-reported sleep improvement. The Indian compound Nidrodaya Rasa, with vijaya as a component, was used for nidrā-nāśa (sleeplessness) in late-medieval Indian practice.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'The Bhāvaprakāśa pharmacology of bhaṅgā includes effects on the mind (moha, mada). The compound formulation Nidrodaya Rasa — "sunrise of sleep" — historically incorporated vijaya for chronic insomnia. Cited in the broader Nighantu and Rasa Shastra formulary tradition.',
      tradition_note:
        'The pharmacology of vijaya as a sleep agent is well-attested in Nighantu-period literature. Modern AYUSH-licensed vijaya formulations are sometimes used for nidrā-nāśa.',
    },

    modern: {
      mechanism:
        'THC reduces sleep-onset latency and may alter sleep architecture (reduced REM, increased slow-wave sleep at low doses). CBD\'s effect on sleep is dose-dependent and complex. The endocannabinoid system interacts with adenosine, melatonin, and circadian regulation.',
      protocols: [
        {
          name: 'Medical cannabis (varied chemotypes, indica-dominant common)',
          dosage: 'Low-dose evening, patient-titrated',
          condition: 'Chronic insomnia, comorbid PTSD-related insomnia',
          status: 'Used widely off-label in jurisdictions with medical access.',
        },
      ],
      key_studies: [
        {
          title: 'Cannabinoid Therapeutics in Chronic Neuropathic Pain: From Animal Research to Human Treatment',
          authors: 'Maldonado R, Baños JE, Cabañero D',
          journal: 'Frontiers in Pharmacology',
          year: 2020,
          finding:
            'Reviews cannabinoid effects including sleep modulation. Notes consistent self-reported sleep improvement in chronic pain and PTSD populations; RCT-grade evidence for primary insomnia remains limited.',
          doi: '10.3389/fphar.2020.583271',
        },
      ],
    },

    status_india: {
      legal: 'No cannabis-based sleep medicine is registered in India.',
      access:
        'AYUSH-licensed vijaya formulations include some for sleep indication, available with prescription. The mainstream Indian insomnia formulary is dominated by benzodiazepines, Z-drugs (zolpidem), and melatonin.',
      criminalized_year: 1985,
      colonial_origin:
        'NDPS 1985 removed cannabis from the legal pharmacopeia along with all other forms.',
    },

    share_card: {
      headline: 'India had a formulation called "sunrise of sleep."',
      subhead: 'It was vijaya-based. We banned it and bought Ambien.',
      stat: 'Nidrodaya',
      stat_caption: 'classical Indian sleep compound',
    },

    related: ['ptsd', 'anxiety-disorders', 'chronic-pain'],
  },

  // -----------------------------------------------------------
  // 7. MIGRAINE
  // -----------------------------------------------------------
  {
    id: 'migraine',
    name: 'Migraine & Cluster Headaches',
    aliases: ['migraine', 'cluster headache', 'shirahshula', 'ardhavabhedaka'],
    category: 'Neurological',
    severity_tag: 'quality-of-life',

    hook: 'In 1890, Queen Victoria\'s personal physician prescribed Indian hemp for migraines. In 2026, an Indian with migraines can\'t get it.',
    summary:
      'Cannabis was a Western pharmacy staple for migraine from O\'Shaughnessy (1839) through the early 20th century. Modern observational data shows substantial reduction in headache frequency in chronic migraine populations. Bhāvaprakāśa describes the pharmacology in the Sanskrit framework that Indian medicine inherited.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Persistent headache (śiraḥ-śūla) and the migraine-like classical category ardhāvabhedaka (literally "splitting of half [the head]") are recognized in Ayurvedic nosology. Bhāvaprakāśa\'s pharmacology of bhaṅgā — tīkṣṇa, uṣṇa, vāta-pacifying — aligns with traditional protocols for vāta-pradhāna headache patterns.',
      tradition_note:
        'British colonial physicians, working in India, popularized Indian cannabis extracts for migraine in 19th-century Western medicine — most notably through W.B. O\'Shaughnessy\'s 1839 paper. The Western reception was direct descent from Indian practice.',
    },

    modern: {
      mechanism:
        'The endocannabinoid system modulates trigeminovascular signaling. Cannabinoid receptors in periaqueductal gray and trigeminal nucleus are implicated in headache pathways. THC reduces CGRP release (a key migraine mediator); CBD has anti-inflammatory effects.',
      protocols: [
        {
          name: 'Medical cannabis (inhaled and oral preparations)',
          dosage: 'Patient-titrated; lower-THC chemotypes often preferred for prophylaxis',
          condition: 'Chronic migraine, cluster headache, headache refractory to standard therapy',
          status: 'Used in medical cannabis programs; not a primary FDA-approved indication.',
        },
      ],
      key_studies: [
        {
          title: 'Short- and Long-Term Effects of Cannabis on Headache and Migraine',
          authors: 'Cuttler C, Spradlin A, Cleveland MJ, Craft RM',
          journal: 'Journal of Pain',
          year: 2020,
          finding:
            'Inhaled cannabis reduced self-reported headache severity by ~47.3% and migraine severity by ~49.6% across 12,293 sessions logged in an observational app-based cohort. Methodology limitations noted (uncontrolled self-report).',
          doi: '10.1016/j.jpain.2019.11.001',
        },
      ],
    },

    status_india: {
      legal: 'No cannabis-based migraine therapy is registered or accessible in India.',
      access:
        'Migraine treatment in India follows the modern formulary — triptans, beta-blockers, CGRP-antagonists (where affordable), topiramate. The historical Indian use of cannabis for headache, which became the Western pharmacy standard for a century, is no longer available in its country of origin.',
      criminalized_year: 1985,
      colonial_origin:
        'O\'Shaughnessy (1839) carried Indian cannabis into Western medicine. NDPS (1985) removed it from Indian medicine — an inversion of the colonial transfer.',
    },

    share_card: {
      headline: 'Queen Victoria\'s doctor prescribed Indian hemp for migraines.',
      subhead: '136 years later, Indians can\'t get it.',
      stat: '1890s',
      stat_caption: 'cannabis was standard migraine therapy globally',
    },

    related: ['chronic-pain', 'epilepsy'],
  },

  // -----------------------------------------------------------
  // 8. ARTHRITIS
  // -----------------------------------------------------------
  {
    id: 'arthritis',
    name: 'Arthritis & Joint Inflammation',
    aliases: ['rheumatoid', 'osteoarthritis', 'joint pain', 'amavata', 'sandhivata'],
    category: 'Musculoskeletal',
    severity_tag: 'chronic',

    hook: 'Āmavāta — "rheumatism" in Sanskrit — is described in classical texts older than the Renaissance. We still treat it. We just don\'t use the medicine that was meant for it.',
    summary:
      'Cannabinoids have anti-inflammatory action via CB2 receptors on immune cells. CBD topicals and systemic preparations are used in many medical cannabis programs for arthritis-associated pain and inflammation. Classical Ayurveda recognizes āmavāta (rheumatoid pattern) and sandhivāta (osteoarthritic pattern) as distinct entities.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Āmavāta (a chronic joint disorder with features overlapping rheumatoid arthritis) and sandhivāta (degenerative joint disease) are major categories in Ayurvedic rheumatology. Bhāvaprakāśa\'s pharmacology of bhaṅgā — uṣṇa, tīkṣṇa, kapha-hara — fits the classical logic for these conditions where āma (metabolic toxin) and aggravated vāta are the targets.',
      tradition_note:
        'Modern integrative practitioners often cite vijaya for arthritic pain on the basis of traditional pharmacology + modern anti-inflammatory evidence. This combined framing is contemporary, not classical.',
    },

    modern: {
      mechanism:
        'CB2 receptors expressed on synovial fibroblasts, chondrocytes, and immune cells mediate anti-inflammatory effects. CBD reduces TNF-α and other inflammatory cytokines in preclinical arthritis models. Topical CBD bypasses systemic exposure for localized joint application.',
      protocols: [
        {
          name: 'CBD topical preparations',
          dosage: 'Applied 2–3 times daily to affected joints',
          condition: 'Osteoarthritis-associated joint pain',
          status: 'Widely available where hemp-derived CBD is legal.',
        },
        {
          name: 'Medical cannabis (oral / inhaled)',
          dosage: 'Patient-titrated',
          condition: 'Inflammatory arthritis pain, refractory cases',
          status: 'Used in medical cannabis programs.',
        },
      ],
      key_studies: [
        {
          title: 'Transdermal cannabidiol reduces inflammation and pain-related behaviours in a rat model of arthritis',
          authors: 'Hammell DC, Zhang LP, Ma F, et al.',
          journal: 'European Journal of Pain',
          year: 2016,
          finding:
            'Transdermal CBD significantly reduced joint swelling, immune cell infiltration, and pain-related behaviors in adjuvant-induced arthritis rats — preclinical evidence for CBD\'s anti-arthritic action.',
          doi: '10.1002/ejp.818',
        },
      ],
    },

    status_india: {
      legal:
        'CBD topical preparations and oral formulations require licensing under NDPS / Drugs and Cosmetics Act. AYUSH-licensed vijaya formulations exist with limited availability.',
      access:
        'Standard Indian arthritis management uses NSAIDs, DMARDs (for inflammatory arthritis), and physiotherapy. Cannabis-based options used in international medical programs are unavailable.',
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'India named the disease in Sanskrit.',
      subhead: 'Then banned the plant the pharmacology implies.',
      stat: 'Āmavāta',
      stat_caption: 'classical name for rheumatoid pattern',
    },

    related: ['chronic-pain', 'cancer-pain'],
  },

  // -----------------------------------------------------------
  // 9. GLAUCOMA
  // -----------------------------------------------------------
  {
    id: 'glaucoma',
    name: 'Glaucoma',
    aliases: ['eye pressure', 'intraocular pressure', 'open-angle glaucoma'],
    category: 'Ophthalmology',
    severity_tag: 'progressive',

    hook: 'Cannabis was the first drug ever shown to lower intraocular pressure. The American Academy of Ophthalmology says it\'s a poor first choice. The Indian Academy can\'t even discuss it legally.',
    summary:
      'Cannabis-induced reduction of intraocular pressure has been documented since the 1970s. Modern ophthalmology does not recommend cannabis as first-line glaucoma therapy due to short duration of action and systemic side effects — but the pharmacology is real. India\'s glaucoma specialists cannot legally discuss it as part of patient counseling.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda does not have a specific category mapping to modern glaucoma. Ophthalmological disorders are addressed in netra-roga sections of various Saṃhitās. Bhāvaprakāśa\'s pharmacology of bhaṅgā is general; it is not specifically indicated for eye disease in classical texts.',
      tradition_note:
        'This is an honest case where the classical-traditional bridge does not hold up. Cannabis for glaucoma is a modern discovery (Hepler & Frank, 1971) — not an ancient indication recovered. We present it as such.',
    },

    modern: {
      mechanism:
        'THC reduces intraocular pressure through CB1 receptor activity in the ciliary body, decreasing aqueous humor production. Effect duration is 3–4 hours, requiring frequent dosing — a significant clinical limitation.',
      protocols: [
        {
          name: 'No standard cannabis-based glaucoma protocol',
          dosage: 'N/A',
          condition: 'Glaucoma (not first-line; investigated but not recommended)',
          status:
            'American Academy of Ophthalmology position: cannabis is not recommended as glaucoma treatment due to short duration and systemic effects.',
        },
      ],
      key_studies: [
        {
          title: 'Marihuana smoking and intraocular pressure',
          authors: 'Hepler RS, Frank IR',
          journal: 'JAMA',
          year: 1971,
          finding:
            'Original observation that marijuana smoking reduces IOP in healthy and glaucoma subjects by approximately 25–30% for 3–4 hours. Foundational paper for the cannabis-glaucoma literature.',
          doi: '10.1001/jama.1971.03190100074026',
        },
      ],
    },

    status_india: {
      legal: 'No cannabis-based ophthalmology protocol approved.',
      access:
        'Indian glaucoma practice uses prostaglandin analogues, beta-blockers, carbonic anhydrase inhibitors, and surgical interventions. Cannabis is not part of any approved Indian protocol.',
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'The first drug ever proven to lower eye pressure was cannabis.',
      subhead: 'It\'s not best-in-class. But India can\'t even discuss it.',
      stat: '1971',
      stat_caption: 'first IOP-cannabis paper · JAMA',
    },

    related: [],
  },

  // -----------------------------------------------------------
  // 10. CANCER PAIN
  // -----------------------------------------------------------
  {
    id: 'cancer-pain',
    name: 'Cancer Pain',
    aliases: ['oncological pain', 'cancer-associated pain', 'palliative pain'],
    category: 'Oncology Support',
    severity_tag: 'life-quality',

    hook: 'India runs the world\'s most respected palliative care movement. It does so without the medicine that runs palliative care everywhere else.',
    summary:
      'Cannabis-based therapies are used as opioid-sparing adjuncts in cancer pain management across European and North American oncology. The 2017 NASEM report rates the evidence for chronic pain (including cancer pain) as conclusive or substantial. Indian palliative care — globally respected and built around morphine access — has been forced to develop without cannabis as part of the toolkit.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'The classical Ayurvedic category arbuda (tumour, neoplasm) is recognized but the use of bhaṅgā specifically for arbuda-related pain is not anchored to a particular verse. The general analgesic pharmacology of vijaya (per Bhāvaprakāśa v. 233) is the textual basis traditional practitioners draw on.',
      tradition_note:
        'The strongest argument for cannabis in cancer pain comes from modern oncology, not from classical Ayurveda directly. The classical role is as a general vāta-pacifier with analgesic and grāhiṇī (binding) properties.',
    },

    modern: {
      mechanism:
        'Cannabinoid analgesia complements opioid analgesia through distinct mechanisms (endocannabinoid vs. opioid receptor systems). Cannabinoids may reduce opioid requirement (opioid-sparing) and address opioid-resistant neuropathic components of cancer pain.',
      protocols: [
        {
          name: 'Sativex (nabiximols) — THC:CBD 1:1 oromucosal spray',
          dosage: 'Titrated, up to 12 sprays/day',
          condition: 'Cancer pain inadequately controlled on opioids',
          status: 'Studied as adjunct in advanced cancer pain trials.',
        },
        {
          name: 'Medical cannabis (oral, inhaled)',
          dosage: 'Patient-titrated',
          condition: 'Cancer pain, refractory cases',
          status: 'Used in palliative oncology in many medical cannabis jurisdictions.',
        },
      ],
      key_studies: [
        {
          title:
            'Multicenter, double-blind, randomized, placebo-controlled, parallel-group study of the efficacy, safety, and tolerability of THC:CBD extract and THC extract in patients with intractable cancer-related pain',
          authors: 'Johnson JR, Burnell-Nugent M, Lossignol D, et al.',
          journal: 'Journal of Pain and Symptom Management',
          year: 2010,
          finding:
            'In 177 patients with advanced cancer and intractable pain, THC:CBD extract produced significantly greater pain reduction than placebo over 2 weeks. THC-only extract did not significantly differ from placebo. Supports the role of CBD-containing 1:1 preparations as adjunct cancer-pain therapy.',
          doi: '10.1016/j.jpainsymman.2009.06.008',
        },
      ],
    },

    status_india: {
      legal:
        'Indian palliative care faced enormous battles in the 1990s–2000s to secure adequate morphine access (the Kerala palliative care model is celebrated internationally). Cannabis-based therapies are not part of approved Indian palliative care.',
      access:
        'Indian oncology pain management remains opioid-centered. Cannabis-based options used in European oncology are not available.',
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'India runs the world\'s most respected palliative care movement.',
      subhead: 'It does so without one of the medicines that runs palliative care everywhere else.',
      stat: '1:1',
      stat_caption: 'THC:CBD ratio · cancer-pain trial standard',
    },

    related: ['chronic-pain', 'chemotherapy-nausea'],
  },

  // =============================================================
  // SCAFFOLDED → FULLY POPULATED in v3 (8 new full entries)
  // =============================================================

  // -----------------------------------------------------------
  // 11. CROHN'S DISEASE & IBD
  // -----------------------------------------------------------
  {
    id: 'crohns-disease',
    name: "Crohn's Disease & IBD",
    aliases: ['IBD', 'inflammatory bowel disease', 'ulcerative colitis', "Crohn's"],
    category: 'Gastrointestinal',
    severity_tag: 'chronic',

    hook: 'Israeli gastroenterologists ran the trials. Their Crohn\'s patients got remission. Indian patients got an NDPS prosecution risk for the same plant.',
    summary:
      'The Israeli IBD research group at Meir Medical Center has run the most rigorous trials of cannabis in Crohn\'s disease — including the 2013 RCT showing clinical remission in 45% of cannabis-treated patients vs 10% on placebo. CB1 and CB2 receptors are densely expressed throughout the gut. The honest caveat: clinical response is real, but endoscopic and inflammation markers don\'t always match — meaning patients *feel* better while underlying inflammation may persist. India\'s IBD burden is rising rapidly with no cannabis-based protocol available.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda treats chronic inflammatory bowel disorders under the categories grahaṇī-roga (malabsorption with chronic diarrhoea) and pittaja-atisāra (pitta-dominant diarrhoea), discussed in Caraka\'s Cikitsā Sthāna chapter 19 and Suśruta\'s Uttara-tantra chapter 40. Bhāvaprakāśa\'s pharmacology of bhaṅgā as grāhiṇī (astringent, binding) and pācanī (digestive) fits the classical logic for grahaṇī-pattern conditions. The Unani Qinnāb tradition independently catalogues cannabis as mumsik (retentive) — the same property in different vocabulary.',
      tradition_note:
        'No classical text specifies bhaṅgā for the modern category "Crohn\'s disease" — the autoimmune inflammatory bowel framework is 20th-century. The classical-modern bridge sits on shared pharmacology (binding/anti-diarrhoeal action), not on identical disease categories.',
    },

    modern: {
      mechanism:
        'CB1 receptors regulate gut motility and visceral pain; CB2 receptors on intestinal immune cells modulate inflammatory cytokine release. THC and CBD reduce gut inflammation in preclinical IBD models. Endocannabinoid tone is altered in active IBD vs healthy controls.',
      protocols: [
        {
          name: 'Cannabis flower / oil (Israeli medical cannabis program)',
          dosage: 'Inhaled or oral, patient-titrated; typical research protocol THC 115 mg twice daily for IBD',
          condition: "Crohn's disease, ulcerative colitis (clinical response, not endoscopic cure)",
          status: 'Available under Israeli Ministry of Health medical cannabis license; not FDA-approved for IBD specifically.',
        },
      ],
      key_studies: [
        {
          title: "Cannabis induces a clinical response in patients with Crohn's disease: a prospective placebo-controlled study",
          authors: 'Naftali T, Bar-Lev Schleider L, Dotan I, et al.',
          journal: 'Clinical Gastroenterology and Hepatology',
          year: 2013,
          finding:
            'Single-centre RCT, n=21 adults with active Crohn\'s disease refractory to standard therapy. Inhaled cannabis (115 mg THC twice daily) vs placebo for 8 weeks. Clinical remission (CDAI <150) achieved in 5/11 (45%) cannabis-arm vs 1/10 (10%) placebo — clinically significant but did not reach the primary statistical endpoint. Pain, sleep, and appetite improved significantly.',
          doi: '10.1016/j.cgh.2013.04.034',
        },
        {
          title: "Oral CBD-rich Cannabis Induces Clinical but Not Endoscopic Response in Patients with Crohn's Disease, a Randomised Controlled Trial",
          authors: 'Naftali T, Bar-Lev Schleider L, Almog S, Meiri D, Konikoff FM',
          journal: 'Journal of Crohn\'s and Colitis',
          year: 2021,
          finding:
            'RCT of CBD-rich cannabis oil (160 mg/40 mg CBD/THC per mL) vs placebo for 8 weeks. Clinical symptoms improved significantly in the cannabis arm; endoscopic and inflammatory marker improvement did NOT differ from placebo. Reinforces that cannabis may improve symptoms without modifying underlying disease — patients feel better, inflammation may persist.',
          doi: '10.1093/ecco-jcc/jjab069',
        },
      ],
    },

    status_india: {
      legal: 'No approved cannabis IBD therapy. AYUSH vijaya formulations are not specifically indicated for IBD.',
      access:
        'Indian IBD care relies on aminosalicylates, immunomodulators, and biologics (where affordable). Cannabis-based adjuncts used in Israel are not legally accessible.',
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'Israel ran the Crohn\'s trial. 45% of patients hit remission.',
      subhead: 'India has the same plant. And the same NDPS Act that bans it.',
      stat: '45%',
      stat_caption: 'clinical remission · Naftali 2013',
    },

    related: ['irritable-bowel-syndrome', 'chronic-pain', 'cancer-pain'],
  },

  // -----------------------------------------------------------
  // 12. HIV/AIDS-RELATED WASTING
  // -----------------------------------------------------------
  {
    id: 'hiv-wasting',
    name: 'HIV/AIDS-Related Wasting',
    aliases: ['AIDS wasting', 'cachexia', 'HIV anorexia', 'wasting syndrome'],
    category: 'Immunology',
    severity_tag: 'life-threatening',

    hook: 'The US approved synthetic cannabis for AIDS wasting in 1992. India had 2.1 million HIV-positive citizens that decade. The drug never crossed the customs window.',
    summary:
      'Dronabinol (synthetic THC, brand Marinol) received FDA approval for HIV/AIDS-associated anorexia in 1992 on the strength of Beal et al.\'s landmark RCT (n=139, J Pain Symptom Manage 1995). India runs one of the world\'s largest national HIV programs through NACO — and treats wasting syndrome without any cannabis-based option in the formulary. The synthetic, the natural plant, and the entire pharmacological category remain inaccessible.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda recognizes śoṣa (general wasting) and rājayakṣmā (consumption, the classical category overlapping with chronic wasting illness) as serious clinical entities, with rasāyana (rejuvenative) protocols central to their management. Bhāvaprakāśa\'s pharmacology of bhaṅgā includes vahni-vardhinī (increases digestive fire / appetite) — directly relevant to wasting indications. The Unani Qinnāb tradition independently documents the herb as muqawwī (strengthening) and appetite-stimulant.',
      tradition_note:
        'HIV/AIDS itself is a 20th-century disease entity; no classical text could anticipate it. But the supportive-care logic of bhaṅgā for wasting (appetite stimulation, mood, anti-cachexia) is consistent across Ayurvedic, Unani, and modern pharmacology — three independent traditions converging on the same therapeutic claim.',
    },

    modern: {
      mechanism:
        'THC activates CB1 receptors in the hypothalamus, stimulating appetite (orexigenic effect) and food-intake. Independent CB1 effects in the gut may increase nutrient absorption. CB2-mediated anti-cytokine action may reduce the inflammatory drive of cachexia.',
      protocols: [
        {
          name: 'Dronabinol (Marinol) — synthetic THC',
          dosage: '2.5 mg before lunch and dinner; titrate up to 20 mg/day in divided doses',
          condition: 'HIV/AIDS-associated anorexia and weight loss',
          status: 'FDA-approved for HIV anorexia in 1992 (the second dronabinol indication; CINV was approved in 1985).',
        },
        {
          name: 'Medical cannabis (where legal)',
          dosage: 'Patient-titrated; inhaled or oral',
          condition: 'AIDS wasting; appetite stimulation and anti-nausea',
          status: 'Used in many medical cannabis programs as an alternative to synthetic dronabinol.',
        },
      ],
      key_studies: [
        {
          title: 'Dronabinol as a treatment for anorexia associated with weight loss in patients with AIDS',
          authors: 'Beal JE, Olson R, Laubenstein L, et al.',
          journal: 'Journal of Pain and Symptom Management',
          year: 1995,
          finding:
            'Multi-institutional RCT, n=139 patients with AIDS-related anorexia and ≥2.3 kg weight loss. Dronabinol 2.5 mg twice daily vs placebo for 6 weeks. Appetite improved by 38% above baseline in dronabinol arm vs 8% on placebo (p=0.015). Mood improved 10% vs -2% placebo (p=0.06). Nausea reduced 20% vs 7% (p=0.05). Foundational trial supporting FDA approval for the HIV indication.',
          doi: '10.1016/0885-3924(94)00117-1',
        },
      ],
    },

    status_india: {
      legal: 'Dronabinol and nabilone are not registered in India.',
      access:
        'India\'s National AIDS Control Organization (NACO) program reaches roughly 2.4 million people living with HIV. None has access to the FDA-approved cannabinoid appetite-stimulant standard-of-care available in jurisdictions ranging from the United States to Israel.',
      criminalized_year: 1985,
      colonial_origin:
        'NDPS 1985 preceded the HIV epidemic in India by years, but Indian health policy never carved out a medical access pathway as the epidemic emerged.',
    },

    share_card: {
      headline: 'The US approved synthetic cannabis for AIDS wasting in 1992.',
      subhead: '2.4 million Indians living with HIV. Zero have ever had access.',
      stat: '1992',
      stat_caption: 'FDA approval for HIV anorexia',
    },

    related: ['chemotherapy-nausea', 'cancer-pain', 'palliative-care', 'eating-disorders'],
  },

  // -----------------------------------------------------------
  // 13. PARKINSON'S DISEASE
  // -----------------------------------------------------------
  {
    id: 'parkinsons',
    name: "Parkinson's Disease",
    aliases: ['parkinsonism', 'tremor', 'PD', 'movement disorder'],
    category: 'Neurological',
    severity_tag: 'progressive',

    hook: '7 million Indians will have Parkinson\'s by 2030. The cannabinoid pathway in the basal ganglia is one of the most active research areas in movement disorders. No Indian neurologist can prescribe it.',
    summary:
      'Parkinson\'s disease prevalence in India is rising sharply with population ageing. The endocannabinoid system densely innervates the basal ganglia. Open-label and observational studies — most notably from Israel\'s Beilinson Hospital — show meaningful improvement in motor and non-motor symptoms. The honest qualifier: small randomized controlled trials have shown more mixed results than open-label data, and a 2024 Movement Disorders RCT of CBD+THC found no significant motor improvement over placebo. The strongest evidence is for non-motor symptoms — sleep, pain, anxiety — which dominate PD quality-of-life.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda groups Parkinsonian-pattern movement disorders under kampavāta — a vāta-dominant disorder with tremor (kampa), stiffness, and progressive course. Treatment principles emphasize vāta-pacification through unctuous (sneha), warming therapies. Bhāvaprakāśa\'s pharmacology of bhaṅgā as tīkṣṇa, uṣṇa, vāta-pacifier fits this logic. The compound formulation Pushpadhanva Rasa (Rasa Shastra) and several other classical preparations including vijaya are described in some recensions for neurological indications.',
      tradition_note:
        'The classical category kampavāta predates the modern dopaminergic-deficiency model of Parkinson\'s by centuries. The mapping is symptomatic (tremor + rigidity + slowness), not mechanistic. Integrative practitioners reasonably draw on both frames; we present them honestly as distinct.',
    },

    modern: {
      mechanism:
        'CB1 receptors are densely expressed in the substantia nigra and striatum. The endocannabinoid system modulates dopaminergic signaling, may attenuate levodopa-induced dyskinesias, and modulates the non-motor symptom complex (sleep, anxiety, autonomic dysfunction, pain). CBD has neuroprotective effects in preclinical PD models; clinical translation remains an active research area.',
      protocols: [
        {
          name: 'Medical cannabis (inhaled, varied chemotypes)',
          dosage: 'Patient-titrated',
          condition: "Motor symptoms (tremor, rigidity, bradykinesia), sleep, pain — Parkinson's disease",
          status: 'Available in Israeli, German, and several US state medical cannabis programs. Not FDA-approved for PD.',
        },
        {
          name: 'CBD oral preparations',
          dosage: 'Research doses range 75–300 mg/day',
          condition: 'PD non-motor symptoms (anxiety, sleep, psychosis-spectrum)',
          status: 'Investigational.',
        },
      ],
      key_studies: [
        {
          title: 'Cannabis (medical marijuana) treatment for motor and non-motor symptoms of Parkinson disease: an open-label observational study',
          authors: 'Lotan I, Treves TA, Roditi Y, Djaldetti R',
          journal: 'Clinical Neuropharmacology',
          year: 2014,
          finding:
            'Open-label observational study, n=22 PD patients. Total motor UPDRS score improved significantly from 33.1 to 23.2 within 30 minutes of smoked cannabis (p<0.001). Tremor (p<0.001), rigidity (p=0.004), and bradykinesia (p<0.001) all improved. Sleep and pain scores also improved. No significant adverse effects in the short observation window.',
          doi: '10.1097/WNF.0000000000000016',
        },
        {
          title: "Short-term Cannabidiol with Δ-9-tetrahydrocannabinol in Parkinson's Disease: a Randomized Trial",
          authors: 'Liu Y, Bainbridge J, Sillau S, et al.',
          journal: 'Movement Disorders',
          year: 2024,
          finding:
            'RCT of CBD plus THC in PD. The more rigorous trial design did NOT replicate the open-label motor findings — no statistically significant improvement in motor symptoms over placebo. Highlights the gap between open-label and double-blind data, and the need for honest reporting on PD evidence.',
          doi: '10.1002/mds.29768',
        },
      ],
    },

    status_india: {
      legal: 'No cannabis-based PD therapy is approved or available in India.',
      access:
        "Indian PD management follows the standard formulary — levodopa, dopamine agonists, MAO-B inhibitors. The estimated 1+ million Indians with Parkinson's have no legal access to a therapeutic class actively studied for motor and non-motor PD symptoms.",
      criminalized_year: 1985,
    },

    share_card: {
      headline: '1 million Indians with Parkinson\'s.',
      subhead: 'Zero have access to a therapeutic class that even Israeli neurology uses routinely.',
      stat: 'UPDRS',
      stat_caption: '−10 points · Lotan 2014',
    },

    related: ['chronic-pain', 'insomnia', 'anxiety-disorders'],
  },

  // -----------------------------------------------------------
  // 14. ANXIETY DISORDERS
  // -----------------------------------------------------------
  {
    id: 'anxiety-disorders',
    name: 'Anxiety Disorders',
    aliases: ['anxiety', 'generalized anxiety', 'social anxiety', 'panic', 'GAD', 'SAD'],
    category: 'Mental Health',
    severity_tag: 'mental-health',

    hook: 'India has the highest anxiety prevalence in the WHO South-East Asia region. We hand patients SSRIs. We jail people for the molecule that beat placebo on speech anxiety in a Sao Paulo lab.',
    summary:
      'Cannabidiol (CBD) has documented anxiolytic effects in clinical trials, most notably Bergamaschi et al.\'s 2011 trial showing CBD reduces public-speaking anxiety in social-phobia patients to healthy-control levels. The crucial nuance: not all cannabis is anxiolytic. High-THC cannabis can WORSEN anxiety in susceptible individuals; the CBD–anxiety story is specifically about the non-intoxicating cannabinoid. Indian psychiatry has the world\'s largest anxiety patient base and no access to either the molecule or the formulations.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda groups anxiety-spectrum conditions under cittodvega (mental agitation), bhaya (fear), and the broader category of manas-vikāra (mind-channel disorders). Bhāvaprakāśa\'s pharmacology lists bhaṅgā as affecting moha (mental confusion) and mada (intoxication) — the same dose-dependent biphasic action modern pharmacology recognizes. The Unani Qinnāb tradition documents the herb as musakkin (sedative), one of its four canonical properties.',
      tradition_note:
        'Classical pharmacology recognized the dose-dependence that modern medicine confirms: small doses calming, large doses disturbing. This is essential context — high-THC cannabis can worsen anxiety; the clinical promise is specifically with CBD-dominant or low-dose THC formulations.',
    },

    modern: {
      mechanism:
        'CBD\'s anxiolytic action is mediated through multiple pathways: partial agonism at serotonin 5-HT1A receptors, modulation of GABAergic signaling, and indirect endocannabinoid system effects (FAAH inhibition raising anandamide). Critically, CBD does NOT activate CB1 receptors with significant affinity — it is non-intoxicating, unlike THC which can paradoxically worsen anxiety in susceptible individuals at higher doses.',
      protocols: [
        {
          name: 'CBD oral preparations (isolate or full-spectrum)',
          dosage: 'Clinical research doses 300–600 mg single-dose for acute anxiety; chronic-anxiety dosing typically 25–150 mg/day',
          condition: 'Social anxiety disorder, generalized anxiety, public-speaking anxiety',
          status: 'Available where hemp-derived CBD is legal; not FDA-approved as anxiolytic but widely used.',
        },
        {
          name: 'Medical cannabis (CBD-dominant chemotypes, where legal)',
          dosage: 'Patient-titrated',
          condition: 'Anxiety disorders, often comorbid with insomnia or PTSD',
          status: 'Available under medical cannabis programs.',
        },
      ],
      key_studies: [
        {
          title: 'Cannabidiol Reduces the Anxiety Induced by Simulated Public Speaking in Treatment-Naïve Social Phobia Patients',
          authors: 'Bergamaschi MM, Queiroz RHC, Chagas MHN, et al.',
          journal: 'Neuropsychopharmacology',
          year: 2011,
          finding:
            'Double-blind RCT, n=24 treatment-naïve social anxiety disorder patients vs 12 healthy controls. Single 600 mg dose of CBD vs placebo before a Simulated Public Speaking Test. CBD significantly reduced anxiety, cognitive impairment, and discomfort during speech performance, bringing SAD patients to anxiety levels comparable with healthy controls. The placebo group showed pronounced anxiety. Landmark trial for the anxiolytic-CBD literature.',
          doi: '10.1038/npp.2011.6',
        },
      ],
    },

    status_india: {
      legal: 'CBD requires manufacturing licensure under NDPS + Drugs and Cosmetics Act. CBD-isolate preparations are theoretically permissible with prescription; in practice, supply is extremely limited.',
      access:
        'Indian psychiatry treats anxiety disorders primarily with SSRIs (sertraline, escitalopram) and benzodiazepines. Treatment-resistant cases have no validated cannabinoid option.',
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'CBD reduced public-speaking anxiety to healthy-control levels in 2011.',
      subhead: 'India has 50 million people with anxiety. Most have never heard of CBD as a treatment option.',
      stat: '600mg',
      stat_caption: 'single-dose · Bergamaschi 2011',
    },

    related: ['ptsd', 'insomnia', 'schizophrenia-cbd', 'chronic-pain'],
  },

  // -----------------------------------------------------------
  // 15. OPIOID USE DISORDER
  // -----------------------------------------------------------
  {
    id: 'opioid-replacement',
    name: 'Opioid Use Disorder',
    aliases: ['opioid addiction', 'painkiller addiction', 'OUD', 'heroin addiction'],
    category: 'Addiction Medicine',
    severity_tag: 'public-health',

    hook: 'Punjab has 800,000+ people with opioid use disorder. The harm-reduction tool that beat synthetic opioid overdose deaths in US states from 1999-2010 is the plant Punjab\'s drug code calls a poison.',
    summary:
      'The cannabis-as-opioid-harm-reduction hypothesis is among the most argued-over claims in modern drug policy — and VIJAYA publishes both sides honestly. Bachhuber et al. (2014, JAMA Internal Medicine) found medical-cannabis states had ~25% lower opioid overdose mortality 1999–2010. The follow-up study by Shover et al. (2019, PNAS) extended the analysis through 2017 and found the association REVERSED — +23% by the later period. Both findings are scientifically published; both belong in the conversation. India\'s opioid crisis — concentrated in Punjab and the North-East — has had no cannabis-harm-reduction discussion in policy at all.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda discusses madatyaya (intoxicant-related disorder) and references multiple types of dependence (madyātyaya for alcohol, opium-class dependencies in later texts). No classical protocol uses bhaṅgā for opioid withdrawal specifically; the framing of cannabis as harm-reduction adjunct is modern. The Unani Qinnāb tradition\'s mumsik (retentive) property is sometimes drawn on by integrative practitioners managing withdrawal symptoms, but this is contemporary interpretation, not classical citation.',
      tradition_note:
        'This is one of the clearest cases where the classical-modern bridge is modern interpretation, not textual continuity. We present the case on the modern evidence base, with the classical pharmacology as informative background, not as primary justification.',
    },

    modern: {
      mechanism:
        'Multiple proposed mechanisms: (1) CBD attenuates cue-induced craving in heroin-addicted patients; (2) cannabis substitution for opioid pain control reduces opioid burden; (3) state-level policy effects on prescribing patterns. The Bachhuber/Shover debate is largely about whether population-level associations reflect causal mechanisms or just correlation.',
      protocols: [
        {
          name: 'CBD for craving reduction',
          dosage: 'Research doses 400–800 mg/day',
          condition: 'Heroin use disorder, cue-induced craving',
          status: 'Investigational. Hurd et al. (2019, American Journal of Psychiatry) reported significant craving and anxiety reduction in abstinent heroin users.',
        },
        {
          name: 'Cannabis as opioid-sparing pain therapy',
          dosage: 'Patient-titrated',
          condition: 'Chronic pain (reduces opioid requirement)',
          status: 'Used in medical cannabis programs; population-level effects on opioid mortality are contested (see studies).',
        },
      ],
      key_studies: [
        {
          title: 'Medical Cannabis Laws and Opioid Analgesic Overdose Mortality in the United States, 1999-2010',
          authors: 'Bachhuber MA, Saloner B, Cunningham CO, Barry CL',
          journal: 'JAMA Internal Medicine',
          year: 2014,
          finding:
            'Ecological time-series analysis of US states. States with medical cannabis laws had ~24.8% lower opioid overdose mortality compared to predicted trends 1999–2010 — approximately 1,700 fewer opioid deaths in 2010 in medical-cannabis states than projected. Triggered a decade of policy debate about cannabis as opioid harm reduction.',
          doi: '10.1001/jamainternmed.2014.4005',
        },
        {
          title: 'Association between medical cannabis laws and opioid overdose mortality has reversed over time',
          authors: 'Shover CL, Davis CS, Gordon SC, Humphreys K',
          journal: 'Proceedings of the National Academy of Sciences (PNAS)',
          year: 2019,
          finding:
            'Same methodology as Bachhuber 2014, extended through 2017. The 1999-2010 association (-21% lower mortality) reversed completely (+23% by 2017). Authors emphasize the danger of using ecological correlations to draw individual-level causal conclusions about cannabis as a opioid solution. This finding has substantially tempered the original optimism.',
          doi: '10.1073/pnas.1903434116',
        },
      ],
    },

    status_india: {
      legal:
        'No cannabis-based addiction-medicine protocol is approved or available in India. Buprenorphine and methadone are the primary opioid-replacement therapies.',
      access:
        'Punjab\'s opioid use disorder crisis affects roughly 800,000+ people; the North-East has its own opioid burden along trafficking corridors. None of this population has access to a harm-reduction framework that includes cannabis adjuncts — partly because of NDPS, partly because the underlying clinical evidence remains contested.',
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'Punjab\'s opioid crisis is the size of a small country.',
      subhead: 'The harm-reduction tool the US tried 2014-2017 came back ambiguous. India hasn\'t even started the conversation.',
      stat: '800K+',
      stat_caption: 'people with OUD · Punjab alone',
    },

    related: ['chronic-pain', 'cancer-pain', 'ptsd'],
  },

  // -----------------------------------------------------------
  // 16. TOURETTE SYNDROME
  // -----------------------------------------------------------
  {
    id: 'tourette-syndrome',
    name: 'Tourette Syndrome',
    aliases: ['tics', 'tic disorder', 'Tourette', 'TS'],
    category: 'Neurological',
    severity_tag: 'chronic',

    hook: 'German neurology has used THC for severe Tourette since 2003. Indian neurology can\'t prescribe it. Indian patients with tics get antipsychotics or nothing.',
    summary:
      'Tourette syndrome has one of the cleaner cannabis-evidence stories in neurology — small but high-quality randomized trials going back two decades, an active German clinical research program (Müller-Vahl, Hannover), and a recently completed multicenter Phase IIIb trial (CANNA-TICS, 2023). The pharmacology is mechanism-plausible: CB1 receptors modulate basal-ganglia circuits implicated in tic generation. India\'s Tourette patients — disproportionately young, often misdiagnosed — have no access to the cannabinoid pathway that has been a research-grade adult option in Europe for 20+ years.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Tourette syndrome is a 20th-century clinical category (Gilles de la Tourette, 1885). Classical Ayurveda has no direct analogue, though hyperkinetic movement disorders broadly fall under vāta-vyādhi. Bhāvaprakāśa\'s pharmacology of bhaṅgā as vāta-pacifying provides a coherent framework for traditional integrative practice, but no specific classical protocol exists for tic disorders.',
      tradition_note:
        'No classical text could have addressed Tourette syndrome as such. The honest framing: modern German neurology developed the cannabis-Tourette protocol from first-principles pharmacology and observational reports; classical Ayurveda offers compatible pharmacology but not specific guidance.',
    },

    modern: {
      mechanism:
        'CB1 receptors are densely expressed in the basal ganglia (caudate, putamen) where tic generation is thought to originate. Endocannabinoid signaling modulates dopaminergic and glutamatergic transmission in tic-relevant circuits. CSF endocannabinoid levels are altered in Tourette syndrome patients compared with controls.',
      protocols: [
        {
          name: 'Delta-9-THC (oral)',
          dosage: 'Titrated to 10 mg/day or more',
          condition: 'Severe, treatment-resistant Tourette syndrome in adults',
          status: 'Used under medical cannabis access in Germany (where Müller-Vahl\'s Hannover program is internationally referenced) and several other jurisdictions.',
        },
        {
          name: 'Nabiximols (Sativex) — THC:CBD oromucosal spray',
          dosage: 'Titrated dose, oromucosal',
          condition: 'Chronic tic disorders / Tourette syndrome (off-label / research)',
          status: 'CANNA-TICS Phase IIIb trial completed 2023 — results published showing modest effects vs placebo.',
        },
      ],
      key_studies: [
        {
          title: 'Delta-9-tetrahydrocannabinol (THC) is effective in the treatment of tics in Tourette syndrome: a 6-week randomized trial',
          authors: 'Müller-Vahl KR, Schneider U, Prevedel H, et al.',
          journal: 'Journal of Clinical Psychiatry',
          year: 2003,
          finding:
            '6-week randomized double-blind placebo-controlled trial of titrated oral THC in 24 adult patients with Tourette syndrome. Significant improvement in tics (Yale Global Tic Severity Scale) and obsessive-compulsive symptoms vs placebo. Foundational trial that anchored two decades of subsequent research.',
          doi: '10.4088/JCP.v64n0417',
        },
        {
          title: 'CANNA-TICS: Efficacy and safety of oral treatment with nabiximols in adults with chronic tic disorders — Phase IIIb superiority study',
          authors: 'Müller-Vahl KR, Pisarenko A, Szejko N, et al.',
          journal: 'Psychiatry Research',
          year: 2023,
          finding:
            'Multicenter prospective, randomized, double-blind, placebo-controlled Phase IIIb trial of nabiximols (Sativex) in adults with chronic tic disorders / Tourette syndrome. Most rigorous trial in this area to date — results show modest effects. Important for tempering enthusiasm to the actual size of the evidence base.',
          doi: '10.1016/j.psychres.2023.115135',
        },
      ],
    },

    status_india: {
      legal: 'No approved cannabis-based therapy for Tourette syndrome in India.',
      access:
        "Indian Tourette patients are managed with first-line pharmacology (alpha-2 agonists like clonidine) or, more often, with antipsychotics (haloperidol, risperidone) carrying significant side-effect burden. The European cannabinoid option is not legally accessible.",
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'German neurology has used cannabis for Tourette since 2003.',
      subhead: 'Indian patients get haloperidol and the side effects no one wants.',
      stat: '20+',
      stat_caption: 'years of European research · zero Indian access',
    },

    related: ['epilepsy', 'anxiety-disorders', 'autism-symptoms'],
  },

  // -----------------------------------------------------------
  // 17. ENDOMETRIOSIS
  // -----------------------------------------------------------
  {
    id: 'endometriosis',
    name: 'Endometriosis & Chronic Pelvic Pain',
    aliases: ['pelvic pain', 'dysmenorrhea', 'endo', 'painful periods'],
    category: 'Gynecology',
    severity_tag: 'chronic',

    hook: 'Endometriosis affects 1 in 10 women globally. The diagnosis takes an average 8 years in India. The medication the most-cited self-management studies single out — cannabis — is illegal here.',
    summary:
      'Endometriosis is one of the most under-researched, under-treated gynecological conditions globally. The available evidence base for cannabis in endometriosis is dominated by patient self-management surveys — Sinclair et al.\'s research at Western Sydney University has documented effectiveness ratings of 7.6/10 across pain reduction, sleep, and reduction in pharmaceutical use. The honest qualifier: this is observational, self-reported evidence. Large RCTs have not yet been done. But on the strength of what exists, cannabis is among the most-rated self-management strategies women with endometriosis actually use — illegally where they must.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda discusses gynecological pain under yonivyāpat (disorders of the reproductive tract), kaṣṭārtava (dysmenorrhoea), and udāvarta (a category overlapping with pelvic-pain syndromes). Caraka\'s Cikitsā Sthāna chapter 30 and Suśruta\'s Śārīra Sthāna address these. Bhāvaprakāśa\'s pharmacology of bhaṅgā as vāta-pacifying, uṣṇa, and analgesic fits the classical framing of cold-aggravated, vāta-dominant menstrual pain.',
      tradition_note:
        'Endometriosis as a specific pathological category is modern (Sampson, 1927). The classical category that overlaps best is kaṣṭārtava + udāvarta. Several traditional formulations including vijaya are referenced for women\'s reproductive pain in the Rasa Shastra and Nighantu literature.',
    },

    modern: {
      mechanism:
        'CB1 and CB2 receptors are expressed in uterine tissue, peritoneum, and on endometriotic lesions themselves. Cannabinoid signaling modulates the inflammatory pain pathway central to endometriosis (prostaglandin-driven, neuroinflammatory). Cannabinoids also reduce visceral pain perception centrally.',
      protocols: [
        {
          name: 'Medical cannabis (inhaled, oral) — chemotype-varied',
          dosage: 'Patient-titrated; both THC-containing and CBD-dominant preparations are used',
          condition: 'Endometriosis pain, dysmenorrhoea, chronic pelvic pain, associated sleep disturbance',
          status: 'Used widely in patient self-management. Not a primary FDA-approved indication. Approved as a qualifying condition in some US state medical programs.',
        },
      ],
      key_studies: [
        {
          title: 'Effects of cannabis ingestion on endometriosis-associated pelvic pain and related symptoms',
          authors: 'Sinclair J, Collett L, Abbott J, Pate DW, Sarris J, Armour M',
          journal: 'PLOS ONE',
          year: 2021,
          finding:
            'Large self-management survey of women with endometriosis. Cannabis was rated as the most effective self-management strategy across all symptoms surveyed, with mean effectiveness 7.6/10. Approximately 90% of respondents using cannabis reported reducing their pharmaceutical medication intake. Greatest improvements: sleep (91%), menstrual pain (90%), non-cyclical pelvic pain (80%). Side effects infrequent (≤5%) apart from fatigue (17%). Methodologically observational and self-reported.',
          doi: '10.1371/journal.pone.0258940',
        },
      ],
    },

    status_india: {
      legal: 'No cannabis-based endometriosis therapy approved or accessible in India.',
      access:
        'India is estimated to have 25–42 million women with endometriosis. The diagnostic delay is severe (typical 7–10 years). Pain management options remain NSAIDs, hormonal therapy, and surgery. The most-rated patient self-management strategy in international cohorts is not legally available.',
      criminalized_year: 1985,
    },

    share_card: {
      headline: 'Cannabis is rated 7.6/10 by women with endometriosis worldwide.',
      subhead: '42 million Indian women with the condition. Zero of them can access it legally.',
      stat: '7.6 / 10',
      stat_caption: 'self-rated effectiveness · Sinclair 2021',
    },

    related: ['chronic-pain', 'menopause-symptoms', 'insomnia'],
  },

  // -----------------------------------------------------------
  // 18. PALLIATIVE & END-OF-LIFE CARE
  // -----------------------------------------------------------
  {
    id: 'palliative-care',
    name: 'Palliative & End-of-Life Care',
    aliases: ['palliative care', 'hospice', 'end-of-life', 'terminal care'],
    category: 'Palliative Medicine',
    severity_tag: 'end-of-life',

    hook: 'Kerala built the world\'s most respected palliative care movement by fighting the same drug control framework that bans cannabis. The next chapter of that fight is the same.',
    summary:
      'Indian palliative care — and specifically the Kerala palliative care movement — fought a generation-long battle to secure adequate morphine access against NDPS restrictions. That fight is internationally recognized. The next layer of the same problem: cannabis-based therapies, used routinely in European and North American palliative oncology for multi-symptom management (pain, nausea, appetite, anxiety, sleep) sit on the wrong side of the same regulatory wall. The honest evidence qualifier: Mücke et al.\'s 2018 systematic review and meta-analysis (J Cachexia Sarcopenia Muscle) concluded the evidence base supports no GRADE-level recommendation. The clinical experience and the trial evidence are not aligned.',

    classical: {
      primary_citation_id: 'bhavaprakasha-nighantu-bhanga',
      sanskrit_name: 'विजया / भङ्गा (Vijayā / Bhaṅgā)',
      indications_in_classical_text:
        'Classical Ayurveda has no direct equivalent of "palliative care" as a distinct specialty, but the principles of comfort care for incurable conditions are deeply embedded in the texts. Rasāyana (rejuvenation), the management of jaramara (ageing/dying), and the supportive logic of "doing no harm where cure is impossible" are core to classical thought. Bhāvaprakāśa\'s pharmacology of bhaṅgā — relevant to pain, sleep, anxiety, appetite, and nausea simultaneously — makes it among the closest single-agent analogues to the modern palliative use case.',
      tradition_note:
        'This is one of the few conditions where bhaṅgā\'s pharmacology covers the modern indication so completely — multi-symptom palliation — that traditional and modern logic substantially align. The barrier is regulatory, not pharmacological or evidentiary.',
    },

    modern: {
      mechanism:
        'Cannabis-based therapy in palliative care draws on simultaneous action on multiple symptom domains relevant at end of life: analgesia (CB1, CB2), anti-emesis (CB1 in brainstem), appetite stimulation (CB1 in hypothalamus), anxiolysis (CBD via 5-HT1A), sleep induction. The opioid-sparing potential — relevant given the dose-escalation pattern in end-of-life pain — is a major theoretical advantage.',
      protocols: [
        {
          name: 'Nabiximols (Sativex)',
          dosage: 'Titrated, up to 12 sprays/day',
          condition: 'Cancer pain, multi-symptom palliative use',
          status: 'Used in European palliative oncology.',
        },
        {
          name: 'Medical cannabis (oral, sublingual, inhaled)',
          dosage: 'Patient-titrated',
          condition: 'End-of-life symptom management (pain, nausea, anxiety, appetite, sleep)',
          status: 'Used in medical cannabis programs in palliative oncology and hospice settings.',
        },
      ],
      key_studies: [
        {
          title: 'Systematic review and meta-analysis of cannabinoids in palliative medicine',
          authors: 'Mücke M, Weier M, Carter C, et al.',
          journal: 'Journal of Cachexia, Sarcopenia and Muscle',
          year: 2018,
          finding:
            'Systematic review and meta-analysis of 9 RCTs (n=1,561) in palliative medicine — covering cancer, HIV-AIDS, and dementia populations. Studies were at moderate risk of bias. Following GRADE methodology, the review concluded that NO formal recommendation could be made for cannabinoids in palliative care. Importantly: this is an honest negative finding from a high-quality systematic review — VIJAYA reports this as the evidence stands, not as we wish it stood.',
          doi: '10.1002/jcsm.12273',
        },
        {
          title: 'Multicenter, double-blind, randomized, placebo-controlled study of THC:CBD extract in patients with intractable cancer-related pain',
          authors: 'Johnson JR, Burnell-Nugent M, Lossignol D, et al.',
          journal: 'Journal of Pain and Symptom Management',
          year: 2010,
          finding:
            '177 patients with advanced cancer, intractable pain on opioids. THC:CBD 1:1 extract produced significantly greater pain reduction than placebo over 2 weeks. THC-only extract did not significantly differ from placebo. Supports adjuvant role for 1:1 preparations specifically.',
          doi: '10.1016/j.jpainsymman.2009.06.008',
        },
      ],
    },

    status_india: {
      legal:
        'The Kerala palliative care movement won the long fight for adequate morphine access through the 2014 NDPS amendment (Essential Narcotic Drugs schedule). Cannabis-based therapies were not part of that amendment and remain inaccessible.',
      access:
        'Kerala\'s palliative care reaches more cancer and end-stage patients than the entire rest of India combined. The protocol toolkit does not include the cannabis-based options used in European oncology palliation.',
      criminalized_year: 1985,
      colonial_origin:
        'The same regulatory framework that took until 2014 to permit adequate morphine still classifies cannabis as the heroin-equivalent it was scheduled as in the 1961 UN Single Convention.',
    },

    share_card: {
      headline: 'Kerala fought for 20 years to get morphine for dying patients.',
      subhead: 'They\'re going to have to fight again. The next medicine is on the same shelf.',
      stat: '2014',
      stat_caption: 'year India fixed morphine. Cannabis still waits.',
    },

    related: ['cancer-pain', 'chronic-pain', 'chemotherapy-nausea', 'hiv-wasting', 'anxiety-disorders'],
  },

  // =============================================================
  // REMAINING SCAFFOLDED (12) — honest "in progress" pages
  // =============================================================

  { id: 'alzheimers', name: "Alzheimer's & Dementia", aliases: ['dementia', 'cognitive decline', 'BPSD'], category: 'Neurological', severity_tag: 'progressive', hook: '', summary: 'Cannabinoids studied for behavioral and psychological symptoms of dementia (agitation, sleep disturbance). Neuroprotective effects suggested in preclinical work; clinical evidence preliminary.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'spinal-cord-injury', name: 'Spinal Cord Injury', aliases: ['SCI', 'paraplegia', 'tetraplegia', 'spasticity post-SCI'], category: 'Neurological', severity_tag: 'chronic', hook: '', summary: 'Cannabis-based therapies used for spasticity and neuropathic pain following spinal cord injury.', status_india: { legal: 'No protocol.', criminalized_year: 1985 } },
  { id: 'amyotrophic-lateral-sclerosis', name: 'ALS / Motor Neuron Disease', aliases: ['ALS', 'Lou Gehrig disease', 'motor neuron disease'], category: 'Neurological', severity_tag: 'progressive', hook: '', summary: 'Used for spasticity, sialorrhea, pseudobulbar affect, and pain in motor neuron disease.', status_india: { legal: 'No protocol.', criminalized_year: 1985 } },
  { id: 'eating-disorders', name: 'Eating Disorders (Anorexia)', aliases: ['anorexia nervosa', 'appetite loss'], category: 'Mental Health', severity_tag: 'life-threatening', hook: '', summary: 'Appetite-stimulating properties of THC explored in anorexia nervosa and cachexia. Modest weight-gain effects in trials.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'irritable-bowel-syndrome', name: 'Irritable Bowel Syndrome', aliases: ['IBS', 'functional bowel disorder'], category: 'Gastrointestinal', severity_tag: 'chronic', hook: '', summary: 'CB1 modulation of gut motility and visceral pain perception relevant to IBS symptom management.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'menopause-symptoms', name: 'Menopause & Perimenopause', aliases: ['hot flashes', 'menopausal symptoms', 'perimenopause'], category: 'Gynecology', severity_tag: 'quality-of-life', hook: '', summary: 'Used for sleep, mood, and pain symptoms during menopause transition. Evidence base mostly observational.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'asthma-historical', name: 'Asthma (Historical)', aliases: ['asthma', 'bronchospasm'], category: 'Respiratory', severity_tag: 'historical', hook: '', summary: 'Cannabis cigarettes were sold over-the-counter for asthma in colonial India. Bronchodilator effect documented but smoking-route limitations make this primarily historical.', status_india: { legal: 'Once OTC, now restricted.', criminalized_year: 1985 } },
  { id: 'autism-symptoms', name: 'Autism Spectrum (severe symptoms)', aliases: ['autism', 'ASD', 'autism spectrum disorder'], category: 'Neurodevelopmental', severity_tag: 'life-quality', hook: '', summary: 'CBD-rich preparations studied in pediatric autism for severe behavioral symptoms. Several Israeli trials show benefit.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'bipolar-mood', name: 'Bipolar Disorder (caution)', aliases: ['bipolar', 'mood disorder'], category: 'Mental Health', severity_tag: 'mental-health', hook: '', summary: 'Mixed evidence; THC may worsen symptoms or trigger mood episodes in some patients. CBD studied for mood stabilization. Significant caution warranted.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'schizophrenia-cbd', name: 'Schizophrenia (CBD only)', aliases: ['psychosis', 'schizophrenia'], category: 'Mental Health', severity_tag: 'mental-health', hook: '', summary: 'CBD shows antipsychotic potential in clinical trials; THC must be avoided as it can worsen psychotic symptoms. Important: not all cannabis is the same.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'chronic-fatigue', name: 'Chronic Fatigue Syndrome & Long COVID', aliases: ['CFS', 'ME', 'long covid', 'post-viral syndrome'], category: 'Systemic', severity_tag: 'chronic', hook: '', summary: 'Limited but emerging evidence for cannabinoid use in CFS/ME and long COVID symptom management.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'tuberous-sclerosis', name: 'Tuberous Sclerosis Complex', aliases: ['TSC'], category: 'Genetic', severity_tag: 'life-threatening', hook: '', summary: 'CBD (Epidiolex) FDA-approved 2020 for seizures associated with TSC.', status_india: { legal: 'Epidiolex unavailable.', criminalized_year: 1985 } },
];

// =============================================================
// HELPERS
// =============================================================

export function searchConditions(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return conditions
    .map((c) => {
      let score = 0;
      if (c.name.toLowerCase().includes(q)) score += 10;
      if (c.aliases?.some((a) => a.toLowerCase().includes(q))) score += 8;
      if (c.category.toLowerCase().includes(q)) score += 4;
      if (c.summary?.toLowerCase().includes(q)) score += 2;
      const tokens = q.split(/\s+/);
      tokens.forEach((t) => {
        if (t.length > 2 && c.name.toLowerCase().includes(t)) score += 3;
      });
      return { c, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map((x) => x.c);
}

export function getConditionById(id) {
  return conditions.find((c) => c.id === id);
}

export function isFullyPopulated(condition) {
  return Boolean(condition?.classical?.primary_citation_id && condition?.modern?.key_studies?.length > 0);
}
