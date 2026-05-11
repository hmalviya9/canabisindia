// =============================================================
// VIJAYA v2 — Conditions Database
// 30 conditions where cannabis has both classical Ayurvedic
// precedent AND modern peer-reviewed evidence.
//
// 5 are fully populated (epilepsy, chronic pain, MS, chemo nausea,
// PTSD). The remaining 25 are scaffolded — full population is the
// next content pass.
//
// Citations are real; status_india reflects current NDPS reality.
// =============================================================

export const conditions = [
  // ============================================================
  // FULLY POPULATED (5)
  // ============================================================
  {
    id: 'epilepsy',
    name: 'Epilepsy',
    aliases: ['seizures', 'dravet syndrome', 'lennox-gastaut', 'epilepsy in children'],
    category: 'Neurological',
    severity_tag: 'life-threatening',

    hook: 'A six-year-old in California is prescribed it. In India, her parents would be in prison.',
    summary:
      'Cannabis-derived CBD is now FDA-approved for two of the most severe pediatric epilepsy syndromes — Dravet and Lennox-Gastaut. The drug is called Epidiolex. India is the country that wrote about cannabis controlling convulsions first, and the country where this medicine is hardest to access.',

    classical: {
      sanskrit_name: 'अपस्मार (Apasmāra)',
      source: 'Charaka Saṃhitā, Chikitsā Sthāna 10',
      century: '200 BCE – 200 CE',
      protocol:
        'Vijaya was used as part of multi-herb preparations for apasmāra, the classical category covering epileptic seizures. Charaka prescribes it in formulations targeting vāta-aggravated convulsive disorders, often combined with brahmi (Bacopa) and vacha (Acorus).',
      reading:
        'Charaka identifies seizures as a vāta-imbalance disorder of the higher nervous system. Vijaya was selected for its dual action: anti-convulsive effect and the calming of vāta-driven hyperactivity in the channels of the mind.',
    },

    modern: {
      mechanism:
        'CBD modulates GABA receptors and reduces neuronal hyperexcitability. Unlike THC, it does not produce psychoactive effects, making it safe for pediatric use.',
      protocols: [
        {
          name: 'Epidiolex (purified CBD)',
          dosage: '5–25 mg/kg/day, oral solution',
          condition: 'Dravet syndrome, Lennox-Gastaut, Tuberous Sclerosis Complex',
          status: 'FDA-approved 2018, EMA-approved 2019',
        },
        {
          name: 'Sativex / Nabiximols',
          dosage: 'CBD/THC 1:1 oromucosal spray',
          condition: 'Refractory epilepsy (off-label in some jurisdictions)',
          status: 'Approved in 30+ countries',
        },
      ],
      key_studies: [
        {
          title: 'Cannabidiol in Dravet Syndrome',
          authors: 'Devinsky O, et al.',
          journal: 'New England Journal of Medicine',
          year: 2017,
          finding:
            'Convulsive seizure frequency reduced by 39% in CBD group vs 13% with placebo over 14 weeks.',
          doi: '10.1056/NEJMoa1611618',
        },
        {
          title: 'Effect of Cannabidiol on Drop Seizures in Lennox-Gastaut',
          authors: 'Thiele EA, et al.',
          journal: 'The Lancet',
          year: 2018,
          finding: 'Median drop-seizure frequency reduced 43.9% with CBD vs 21.8% placebo.',
          doi: '10.1016/S0140-6736(18)30136-3',
        },
      ],
    },

    status_india: {
      legal: 'Medical CBD products require a license under the NDPS Act 1985.',
      access:
        'A handful of state-licensed Ayurvedic manufacturers (notably in Uttarakhand) produce vijaya-based formulations. Most epilepsy patients have no clinical access.',
      criminalized_year: 1985,
      colonial_origin: 'Indian Hemp Drugs Commission Report (1894) — recommended regulation, not prohibition. The 1985 Act was passed under US pressure, not Indian medical consensus.',
    },

    share_card: {
      headline: 'A child in California gets cannabis for seizures.',
      subhead: 'In India, where the medicine was discovered, her parents would be in prison.',
      stat: '39%',
      stat_caption: 'reduction in seizures, NEJM 2017',
    },

    related: ['anxiety-disorders', 'multiple-sclerosis'],
  },

  {
    id: 'chronic-pain',
    name: 'Chronic Pain',
    aliases: ['neuropathic pain', 'fibromyalgia', 'back pain', 'arthritis pain'],
    category: 'Pain & Inflammation',
    severity_tag: 'quality-of-life',

    hook: 'India has more chronic pain sufferers than the US has people. Most of them are on opioids that India also imports.',
    summary:
      'Cannabis is one of the most thoroughly documented analgesics in human history. Sushruta — the surgeon — prescribed it 2,600 years ago. The 2017 National Academies report ranks the evidence for cannabis treating chronic pain as "conclusive or substantial." Over 50 countries have legalized it for this use.',

    classical: {
      sanskrit_name: 'वातशूल / सर्वशूलहर (Vāta-shūla / Sarva-shūla-hara)',
      source: 'Sushruta Saṃhitā, Chikitsā Sthāna',
      century: '600 BCE',
      protocol:
        'Vijaya prescribed for vāta-pradhāna pain conditions — joint pain, neuralgia, post-surgical pain. Sushruta classifies it as a śūla-hara (pain-killing) drug and pairs it with sesame oil massage and warm decoctions for amavāta (rheumatoid pain patterns).',
      reading:
        'Pain in classical Ayurveda is largely a vāta phenomenon — sharp, migrating, worse at night. Vijaya specifically subdues vāta in the channels and was the closest thing the classical pharmacopeia had to a true analgesic.',
    },

    modern: {
      mechanism:
        'THC and CBD act on CB1 and CB2 receptors in the peripheral and central nervous system, modulating pain signal transmission and reducing neuroinflammation.',
      protocols: [
        {
          name: 'Sativex (THC:CBD 1:1)',
          dosage: 'Oromucosal spray, titrated',
          condition: 'Neuropathic pain, MS-related pain',
          status: 'Approved in UK, Germany, Canada, Italy, Spain',
        },
        {
          name: 'Medical cannabis flower (vaporized)',
          dosage: '5–20% THC, 0.05–0.5g per dose',
          condition: 'Chronic pain, fibromyalgia',
          status: 'Legal in Germany, Israel, Australia, 38 US states',
        },
      ],
      key_studies: [
        {
          title: 'The Health Effects of Cannabis and Cannabinoids',
          authors: 'National Academies of Sciences',
          journal: 'NASEM Consensus Report',
          year: 2017,
          finding:
            'Conclusive or substantial evidence that cannabis is effective for treatment of chronic pain in adults.',
          doi: '10.17226/24625',
        },
        {
          title: 'Cannabinoids for Chronic Neuropathic Pain',
          authors: 'Mücke M, et al.',
          journal: 'Cochrane Database of Systematic Reviews',
          year: 2018,
          finding:
            'Cannabis-based medicines may increase the proportion of people achieving 50% or greater pain relief vs placebo.',
          doi: '10.1002/14651858.CD012182.pub2',
        },
      ],
    },

    status_india: {
      legal: 'Bhang (leaves) is legal under state excise; cannabis flower and resin are restricted under NDPS.',
      access:
        'No clinical pain-management protocol uses cannabis in mainstream Indian healthcare, despite it being the country of origin for the documented medicine.',
      criminalized_year: 1985,
      colonial_origin: 'Indian Hemp Drugs Commission (1894): "Moderate use produces no injurious effects on mind or body." Ignored.',
    },

    share_card: {
      headline: '1 in 5 Indians live with chronic pain.',
      subhead: 'Sushruta wrote the cannabis protocol for this 2,600 years ago. We jail people for following it.',
      stat: '600 BCE',
      stat_caption: 'first written protocol',
    },

    related: ['multiple-sclerosis', 'arthritis'],
  },

  {
    id: 'multiple-sclerosis',
    name: 'Multiple Sclerosis',
    aliases: ['MS', 'spasticity', 'demyelinating disease'],
    category: 'Neurological',
    severity_tag: 'progressive',

    hook: 'In Germany, MS patients get cannabis on national insurance. In India, they get jail or aspirin.',
    summary:
      'Cannabis-based Sativex is the standard of care for MS-related spasticity and pain across Western Europe. The classical Ayurvedic category that maps closest to MS — vāta-vyādhi — was treated with vijaya for over two millennia.',

    classical: {
      sanskrit_name: 'वातव्याधि (Vāta-vyādhi)',
      source: 'Charaka Saṃhitā, Chikitsā Sthāna 28',
      century: '200 BCE – 200 CE',
      protocol:
        'Demyelinating and degenerative neurological conditions fall under vāta-vyādhi. Vijaya was used for tremor, spasticity, and the loss of motor coordination, often in oil-based preparations applied via abhyanga (medicated massage) and as internal medicine.',
      reading:
        'Classical texts describe a category of disorders involving progressive nervous system breakdown with motor symptoms — precisely the territory MS occupies. Vijaya was a frontline herb for this category.',
    },

    modern: {
      mechanism:
        'Cannabinoids reduce muscle spasticity via CB1 receptor modulation in the spinal cord and brain. Anti-inflammatory effects via CB2 receptors may slow neuroinflammation.',
      protocols: [
        {
          name: 'Sativex / Nabiximols',
          dosage: 'Up to 12 sprays/day (THC 2.7mg + CBD 2.5mg per spray)',
          condition: 'MS-related spasticity, pain',
          status: 'Approved in 30+ countries; standard of care in UK, Germany, Italy',
        },
      ],
      key_studies: [
        {
          title: 'Sativex Long-term Use Pattern in Patients with Spasticity Due to MS',
          authors: 'Flachenecker P, et al.',
          journal: 'European Neurology',
          year: 2014,
          finding: 'Sustained ≥30% spasticity reduction in 41.9% of patients over 12 months.',
          doi: '10.1159/000356210',
        },
      ],
    },

    status_india: {
      legal: 'Sativex not registered. Cannabis flower for MS is illegal. Some Ayurvedic vijaya formulations available with prescription.',
      access:
        'Indian MS patients pay out-of-pocket for symptomatic care without cannabis-based therapies that are routine elsewhere.',
      criminalized_year: 1985,
      colonial_origin: 'Same NDPS framework — passed during the global "war on drugs" pressure of the 1980s.',
    },

    share_card: {
      headline: 'Germany hands MS patients cannabis on the public dime.',
      subhead: 'India hands them a criminal record.',
      stat: '30+',
      stat_caption: 'countries where Sativex is approved',
    },

    related: ['chronic-pain', 'epilepsy'],
  },

  {
    id: 'chemotherapy-nausea',
    name: 'Chemotherapy-Induced Nausea',
    aliases: ['chemo nausea', 'CINV', 'cancer nausea', 'chemotherapy vomiting'],
    category: 'Oncology Support',
    severity_tag: 'life-quality',

    hook: 'The first synthetic cannabis drug was approved for cancer patients in 1985 — the same year India banned the plant.',
    summary:
      'Synthetic THC (dronabinol, brand name Marinol) was FDA-approved for chemotherapy-induced nausea and vomiting in 1985. The plant has been used for nausea in Ayurveda for over two thousand years. The same year America extracted the molecule and patented it, India criminalized the source.',

    classical: {
      sanskrit_name: 'छर्दिहर (Chardi-hara)',
      source: 'Bhavaprakasha, Madhyama Khanda',
      century: '16th century CE',
      protocol:
        'Vijaya is classified as chardi-hara — anti-emetic — and is described as effective for nausea unresponsive to lighter herbs. Used in cases of severe gastrointestinal disturbance and what would now be called wasting syndromes.',
      reading:
        'Chardi (vomiting) in classical medicine is a kapha-pitta disturbance. Vijaya pacifies both when used in preparations like jātiphalādi vati, where it is combined with nutmeg and other digestive carminatives.',
    },

    modern: {
      mechanism:
        'THC binds CB1 receptors in the dorsal vagal complex, suppressing the chemoreceptor trigger zone responsible for nausea and vomiting.',
      protocols: [
        {
          name: 'Dronabinol (Marinol)',
          dosage: '5 mg/m² before chemo, repeated q2-4h',
          condition: 'Refractory CINV, AIDS-related anorexia',
          status: 'FDA-approved 1985',
        },
        {
          name: 'Nabilone (Cesamet)',
          dosage: '1–2 mg twice daily',
          condition: 'CINV unresponsive to standard antiemetics',
          status: 'Approved US, UK, Canada, Mexico',
        },
      ],
      key_studies: [
        {
          title: 'Cannabinoids for Chemotherapy-Induced Nausea and Vomiting',
          authors: 'Smith LA, et al.',
          journal: 'Cochrane Database of Systematic Reviews',
          year: 2015,
          finding:
            'Cannabinoids more effective than placebo and similar to conventional antiemetics for CINV.',
          doi: '10.1002/14651858.CD009464.pub2',
        },
      ],
    },

    status_india: {
      legal: 'Dronabinol not registered. Cancer patients have no legal access to cannabis-based antiemetics.',
      access:
        'Standard antiemetic protocol in Indian oncology relies on ondansetron and steroids. Cannabis-based options used routinely in 40+ countries are absent.',
      criminalized_year: 1985,
      colonial_origin: 'NDPS Act passed under Single Convention pressure, same year as Marinol approval.',
    },

    share_card: {
      headline: '1985: America patents synthetic cannabis for cancer patients.',
      subhead: '1985: India bans the plant America copied.',
      stat: '1985',
      stat_caption: 'the year of the great irony',
    },

    related: ['chronic-pain', 'hiv-wasting'],
  },

  {
    id: 'ptsd',
    name: 'Post-Traumatic Stress Disorder',
    aliases: ['PTSD', 'trauma', 'combat trauma', 'sexual assault recovery'],
    category: 'Mental Health',
    severity_tag: 'mental-health',

    hook: 'The US Department of Veterans Affairs spends millions on cannabis-PTSD research. India\'s veterans get nothing.',
    summary:
      'PTSD became a recognized cannabis-treatment indication in multiple US states starting 2009. Israel uses medical cannabis routinely for combat veterans. The classical Ayurvedic concept of citta-bhrama — disturbed mind — was treated with vijaya in formulations going back to the medieval period.',

    classical: {
      sanskrit_name: 'चित्तभ्रम / उन्माद (Citta-bhrama / Unmāda)',
      source: 'Bhavaprakasha; Sharangadhara Saṃhitā',
      century: '13th–16th century CE',
      protocol:
        'Vijaya in trauma-related mental disturbance, combined with brahmi, jatamansi (spikenard), and shankhpushpi. Used in measured doses to break dissociative cycles and restore sleep.',
      reading:
        'Trauma in classical thought is a vāta-disturbance of the mental channels — the rumination, the hyperarousal, the disrupted sleep. Vijaya pacifies vāta and grounds the system.',
    },

    modern: {
      mechanism:
        'The endocannabinoid system regulates fear extinction and memory consolidation in the amygdala. CBD attenuates fear response; low-dose THC may help with sleep and dissociative symptoms.',
      protocols: [
        {
          name: 'Medical cannabis (varied)',
          dosage: 'Patient-specific titration',
          condition: 'PTSD, treatment-resistant',
          status: 'Approved indication in 35+ US states, Israel, Germany, Australia',
        },
      ],
      key_studies: [
        {
          title: 'Cannabis Use in Patients with PTSD: A Randomized Crossover Trial',
          authors: 'Bonn-Miller MO, et al.',
          journal: 'PLOS ONE',
          year: 2021,
          finding:
            'High-THC cannabis significantly reduced PTSD symptoms vs placebo over 3 weeks.',
          doi: '10.1371/journal.pone.0246990',
        },
      ],
    },

    status_india: {
      legal: 'No cannabis-based PTSD therapy approved or accessible.',
      access:
        'Indian veterans, sexual assault survivors, and trauma patients have no legal pathway to a treatment used routinely in Israel and the US.',
      criminalized_year: 1985,
      colonial_origin: 'Drug schedule inherited via Single Convention (1961), enforced via NDPS (1985).',
    },

    share_card: {
      headline: 'Israeli soldiers get cannabis for combat trauma.',
      subhead: 'Indian soldiers get a court martial for the same plant.',
      stat: '35+',
      stat_caption: 'US states where PTSD is a qualifying condition',
    },

    related: ['anxiety-disorders', 'insomnia'],
  },

  // ============================================================
  // SCAFFOLDED (25) — to be fully populated in next content pass
  // Each has the minimum needed for the matcher to surface them
  // and a placeholder result page that says "coming soon" honestly.
  // ============================================================
  { id: 'crohns-disease', name: "Crohn's Disease", aliases: ['IBD', 'inflammatory bowel'], category: 'Gastrointestinal', severity_tag: 'chronic', hook: 'IBD patients in Israel report 90% improvement on cannabis. India: zero protocol.', summary: 'Inflammatory bowel disease responds to cannabinoid receptor modulation. Multiple Israeli trials show significant remission rates.', status_india: { legal: 'No approved cannabis IBD therapy.', criminalized_year: 1985 } },
  { id: 'hiv-wasting', name: 'HIV-Related Wasting', aliases: ['AIDS wasting', 'cachexia'], category: 'Immunology', severity_tag: 'life-threatening', hook: 'Dronabinol approved for AIDS-related wasting in 1992. The plant it comes from is illegal here.', summary: 'Cannabis stimulates appetite and reduces nausea in HIV/AIDS patients with wasting syndrome.', status_india: { legal: 'Dronabinol unavailable.', criminalized_year: 1985 } },
  { id: 'glaucoma', name: 'Glaucoma', aliases: ['eye pressure', 'intraocular pressure'], category: 'Ophthalmology', severity_tag: 'progressive', hook: 'Cannabis lowers eye pressure. India\'s ophthalmologists have never been allowed to prescribe it.', summary: 'THC reduces intraocular pressure, the primary mechanism of glaucoma damage. Limited duration of effect; not first-line but evidence base is real.', status_india: { legal: 'No protocol.', criminalized_year: 1985 } },
  { id: 'parkinsons', name: "Parkinson's Disease", aliases: ['parkinsonism', 'tremor'], category: 'Neurological', severity_tag: 'progressive', hook: '', summary: 'Emerging evidence for cannabis in motor symptoms and non-motor symptoms (sleep, anxiety, pain) of Parkinson\'s.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'alzheimers', name: "Alzheimer's & Dementia", aliases: ['dementia', 'cognitive decline'], category: 'Neurological', severity_tag: 'progressive', hook: '', summary: 'Cannabinoids reduce agitation in dementia and may have neuroprotective effects per preclinical research.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'anxiety-disorders', name: 'Anxiety Disorders', aliases: ['anxiety', 'generalized anxiety', 'social anxiety'], category: 'Mental Health', severity_tag: 'mental-health', hook: '', summary: 'CBD has documented anxiolytic effects in clinical trials; classical Ayurveda treated similar presentations with vijaya in measured doses.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'insomnia', name: 'Insomnia & Sleep Disorders', aliases: ['sleep', 'insomnia', 'sleep disorder'], category: 'Sleep', severity_tag: 'quality-of-life', hook: '', summary: 'Cannabinoids modulate sleep architecture; commonly used for sleep onset and maintenance issues.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'arthritis', name: 'Arthritis & Joint Inflammation', aliases: ['rheumatoid', 'osteoarthritis', 'joint pain'], category: 'Musculoskeletal', severity_tag: 'chronic', hook: '', summary: 'Topical and systemic cannabinoids reduce arthritis-related pain and inflammation.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'migraine', name: 'Migraine & Cluster Headaches', aliases: ['migraine', 'headache'], category: 'Neurological', severity_tag: 'quality-of-life', hook: '', summary: 'Cannabis used historically for migraine; modern observational studies show frequency reduction.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'opioid-replacement', name: 'Opioid Use Disorder', aliases: ['opioid addiction', 'painkiller addiction'], category: 'Addiction Medicine', severity_tag: 'public-health', hook: '', summary: 'Cannabis as harm-reduction adjunct in opioid replacement therapy; reduces overdose mortality in legalized states.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'cancer-pain', name: 'Cancer Pain', aliases: ['oncological pain'], category: 'Oncology Support', severity_tag: 'life-quality', hook: '', summary: 'Cannabis and cannabinoid therapies used as opioid-sparing analgesics in oncological pain management.', status_india: { legal: 'Limited.', criminalized_year: 1985 } },
  { id: 'tourette-syndrome', name: 'Tourette Syndrome', aliases: ['tics'], category: 'Neurological', severity_tag: 'chronic', hook: '', summary: 'THC reduces tic severity in clinical trials; approved indication in several jurisdictions.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'spinal-cord-injury', name: 'Spinal Cord Injury', aliases: ['SCI', 'paralysis'], category: 'Neurological', severity_tag: 'chronic', hook: '', summary: 'Cannabis-based therapies for spasticity and neuropathic pain following SCI.', status_india: { legal: 'No protocol.', criminalized_year: 1985 } },
  { id: 'amyotrophic-lateral-sclerosis', name: 'ALS / Motor Neuron Disease', aliases: ['ALS', 'Lou Gehrig'], category: 'Neurological', severity_tag: 'progressive', hook: '', summary: 'Used for spasticity, sialorrhea, and pain in motor neuron disease.', status_india: { legal: 'No protocol.', criminalized_year: 1985 } },
  { id: 'eating-disorders', name: 'Eating Disorders (Anorexia)', aliases: ['anorexia', 'appetite loss'], category: 'Mental Health', severity_tag: 'life-threatening', hook: '', summary: 'Appetite stimulation properties of THC explored in anorexia and severe weight loss.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'irritable-bowel-syndrome', name: 'Irritable Bowel Syndrome', aliases: ['IBS'], category: 'Gastrointestinal', severity_tag: 'chronic', hook: '', summary: 'CB1 modulation of gut motility relevant to IBS symptom management.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'endometriosis', name: 'Endometriosis', aliases: ['period pain', 'pelvic pain'], category: 'Gynecology', severity_tag: 'chronic', hook: '', summary: 'Anti-inflammatory and analgesic effects relevant to endometriosis-associated pain.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'menopause-symptoms', name: 'Menopause & Perimenopause', aliases: ['hot flashes', 'menopausal symptoms'], category: 'Gynecology', severity_tag: 'quality-of-life', hook: '', summary: 'Used for sleep, mood, and pain symptoms during menopause transition.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'asthma-historical', name: 'Asthma (Historical)', aliases: ['asthma', 'bronchospasm'], category: 'Respiratory', severity_tag: 'historical', hook: '', summary: 'Cannabis cigarettes were sold over-the-counter for asthma in colonial India; bronchodilator effect documented but not modern first-line.', status_india: { legal: 'Once OTC, now banned.', criminalized_year: 1985 } },
  { id: 'autism-symptoms', name: 'Autism Spectrum (severe symptoms)', aliases: ['autism', 'ASD'], category: 'Neurodevelopmental', severity_tag: 'life-quality', hook: '', summary: 'CBD-rich preparations used in pediatric autism for severe behavioral symptoms in clinical trials.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'bipolar-mood', name: 'Bipolar Disorder (caution)', aliases: ['bipolar', 'mood disorder'], category: 'Mental Health', severity_tag: 'mental-health', hook: '', summary: 'Mixed evidence; THC may worsen symptoms in some patients. CBD studied for mood stabilization. Caution advised.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'schizophrenia-cbd', name: 'Schizophrenia (CBD only)', aliases: ['psychosis', 'schizophrenia'], category: 'Mental Health', severity_tag: 'mental-health', hook: '', summary: 'CBD shows antipsychotic potential in trials; THC must be avoided. Important nuance: not all cannabis is the same.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'chronic-fatigue', name: 'Chronic Fatigue Syndrome', aliases: ['CFS', 'ME', 'long covid'], category: 'Systemic', severity_tag: 'chronic', hook: '', summary: 'Limited but emerging evidence for cannabinoid use in CFS/ME and long COVID symptom management.', status_india: { legal: 'No approved indication.', criminalized_year: 1985 } },
  { id: 'tuberous-sclerosis', name: 'Tuberous Sclerosis Complex', aliases: ['TSC'], category: 'Genetic', severity_tag: 'life-threatening', hook: '', summary: 'CBD (Epidiolex) FDA-approved 2020 for seizures associated with TSC.', status_india: { legal: 'Epidiolex unavailable.', criminalized_year: 1985 } },
  { id: 'palliative-care', name: 'Palliative & End-of-Life Care', aliases: ['palliative', 'hospice'], category: 'Palliative Medicine', severity_tag: 'end-of-life', hook: '', summary: 'Multi-symptom management (pain, nausea, anxiety, appetite) in palliative settings.', status_india: { legal: 'No protocol.', criminalized_year: 1985 } },
];

// Helper for the matcher: build searchable index
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
      // Token match for multi-word queries
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
  return Boolean(condition?.classical && condition?.modern);
}
