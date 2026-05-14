// =============================================================
// VIJAYA v2 — NDPS Act 1985 — Plain English Breakdown
//
// Every claim attributed to a specific section number. The full
// Act text is freely available at indiacode.nic.in (Act No. 61
// of 1985). This file paraphrases the operative provisions in
// plain language for citizen comprehension.
//
// This is NOT legal advice. Consult a lawyer for specific cases.
// =============================================================

export const ndpsBreakdown = {
  meta: {
    full_name: 'The Narcotic Drugs and Psychotropic Substances Act, 1985',
    act_number: 'Act No. 61 of 1985',
    royal_assent: '16 September 1985',
    commencement: '14 November 1985',
    source: 'India Code — indiacode.nic.in',
    public_text_url: 'https://www.indiacode.nic.in/handle/123456789/1791',
  },

  history: {
    why_1985:
      'India signed the UN Single Convention on Narcotic Drugs in 1961, which scheduled cannabis (Schedule I and IV) alongside heroin. India negotiated a 25-year transition period to protect traditional bhang and ganja use. The NDPS Act 1985 was passed at the end of that window, under sustained US pressure during the Reagan-era global drug war. It replaced earlier colonial-era opium and hemp legislation that had largely permitted regulated use.',
    political_context:
      'The Act was drafted without an extensive domestic medical or scientific inquiry of the kind the 1894 Indian Hemp Drugs Commission had conducted. The Commission\'s seven-volume finding — that moderate cannabis use produces no injurious effects on mind or body — was not revisited.',
  },

  // ---------- KEY DEFINITIONS — Section 2 ----------
  definitions: [
    {
      section: 'Section 2(iii)',
      term: 'Cannabis (hemp)',
      plain_english:
        'The Act defines "cannabis (hemp)" in three forms: (a) Charas — the separated resin from the cannabis plant, (b) Ganja — the flowering or fruiting tops of the cannabis plant excluding seeds and leaves when not accompanied by tops, and (c) any mixture, with or without neutral material, of these forms — and any drink prepared from them.',
      crucial_omission:
        'BHANG — the preparation made from cannabis LEAVES (not the flowering tops) — is NOT defined as "cannabis" under the NDPS Act. This is the legal basis for bhang remaining permitted under state excise regulation. The Act criminalizes the flower and resin while leaving the leaf alone.',
    },
    {
      section: 'Section 2(iv)',
      term: 'Cannabis plant',
      plain_english:
        'The cannabis plant itself — meaning any plant of the genus Cannabis. Cultivation of the plant is regulated separately under Section 8 and 10.',
    },
    {
      section: 'Section 2(xiv)',
      term: 'Narcotic drug',
      plain_english:
        'Includes coca leaf, cannabis (hemp), opium, poppy straw, and all manufactured drugs. Cannabis is therefore a narcotic for NDPS purposes.',
    },
  ],

  // ---------- THE OPERATIVE OFFENCE — Section 20 ----------
  central_offence: {
    section: 'Section 20',
    title: 'Punishment for contravention in relation to cannabis plant and cannabis',
    full_text_summary:
      'Section 20 is the operative criminal provision for cannabis offences. It punishes anyone who, in contravention of the Act, cultivates the cannabis plant; or produces, manufactures, possesses, sells, purchases, transports, imports inter-State, exports inter-State, or uses cannabis.',
    sentencing: [
      {
        quantity: 'Small quantity',
        threshold: '100 grams of charas/hashish, 1 kg of ganja',
        punishment: 'Rigorous imprisonment up to 1 year, or fine up to ₹10,000, or both.',
      },
      {
        quantity: 'Greater than small but less than commercial',
        threshold: 'Between thresholds',
        punishment: 'Rigorous imprisonment up to 10 years, with fine up to ₹1,00,000.',
      },
      {
        quantity: 'Commercial quantity',
        threshold: '1 kg of charas/hashish, 20 kg of ganja',
        punishment: 'Rigorous imprisonment from 10 to 20 years, with fine of ₹1,00,000 to ₹2,00,000.',
      },
    ],
    source: 'NDPS Act, Section 20, read with notification GSR 1055(E) (Small/Commercial Quantity).',
  },

  // ---------- WHAT IS PERMITTED — Section 10 ----------
  permitted: [
    {
      section: 'Section 10 — State power',
      summary:
        'Section 10 empowers State Governments to permit, control, and regulate cultivation of any cannabis plant; production, manufacture, possession, transport, import inter-State, export inter-State, sale, purchase, consumption, and use of cannabis (excluding charas) — under licence.',
      practical_effect:
        'State excise departments grant licences for bhang production and sale. Uttarakhand and Madhya Pradesh have used Section 10 to license industrial and medical hemp cultivation. The Section 10 framework is what makes AYUSH-licensed vijaya manufacture possible — when permitted.',
    },
    {
      section: 'Section 14',
      summary:
        'Special provision for cannabis for medical/industrial/scientific use. Government may, by notification, permit and regulate cultivation for these purposes.',
    },
  ],

  // ---------- ENFORCEMENT POWERS ----------
  enforcement: [
    {
      section: 'Section 41–42',
      title: 'Search & arrest powers',
      summary:
        'Officers from designated departments (NCB, customs, state police, excise) may search premises, vehicles, and persons without warrant where they have "reason to believe" an offence has been committed. This standard is lower than the warrant standard in ordinary criminal law.',
    },
    {
      section: 'Section 50',
      title: 'Conditions of search of persons',
      summary:
        'A person to be searched has the right to be searched in front of a Magistrate or Gazetted Officer, if they so demand. The Supreme Court has held that failure to inform the suspect of this right vitiates the search. This is one of the strongest procedural protections in the Act.',
    },
    {
      section: 'Section 27',
      title: 'Punishment for consumption',
      summary:
        'Personal consumption of cannabis (or other narcotic) is punishable with imprisonment up to 6 months or fine up to ₹10,000, or both — for the consumer themself. This is the section that targets users.',
    },
  ],

  // ---------- WHAT REFORM ADVOCATES WANT ----------
  reform_asks: [
    {
      ask: 'Reschedule cannabis',
      detail:
        'Move cannabis out of the same category as heroin to reflect modern medical evidence and the WHO Expert Committee on Drug Dependence recommendations.',
    },
    {
      ask: 'Medical access pathway',
      detail:
        'Create a clear regulatory pathway for medical cannabis prescription through AYUSH and modern medical channels — similar to the German or Israeli medical cannabis framework.',
    },
    {
      ask: 'Decriminalize consumption (Section 27)',
      detail:
        'Move personal consumption from the criminal code to a public health framework, as recommended by multiple Indian commissions on drug policy.',
    },
    {
      ask: 'Restore the 1894 Commission\'s framework',
      detail:
        'Implement the Indian Hemp Drugs Commission\'s 1894 recommendation: regulate and tax, do not prohibit.',
    },
  ],
};
