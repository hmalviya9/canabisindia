// =============================================================
// VIJAYA v2 — State-Level Reform & Cultivation Status
//
// NOT a live database. A curated snapshot with "as of" date.
// Sources: state AYUSH notifications, NCB seizure data, news
// coverage of state-level developments. Verify with the source
// before relying on it for any specific decision.
// =============================================================

export const reformTracker = {
  meta: {
    last_updated: '2026-05-11',
    methodology:
      'State entries are compiled from publicly available state government notifications, AYUSH ministry data, news coverage, and excise department records. This is a snapshot, not a live feed. Always verify with primary sources.',
    legend: {
      bhang_legal: 'Bhang (leaf preparation) is permitted under state excise regulation.',
      bhang_grey: 'Bhang availability is restricted or tolerated rather than formally regulated.',
      hemp_licensed: 'Industrial / medical hemp cultivation is licensed at scale under Section 10.',
      hemp_pilot: 'Small-scale hemp pilots, research permissions, or limited AYUSH manufacture.',
      no_program: 'No state-level cannabis program; full NDPS default applies.',
    },
  },

  states: [
    // Northern band — strongest cultivation/licensing tradition
    {
      state: 'Uttarakhand',
      region: 'North',
      bhang_status: 'bhang_legal',
      cultivation: 'hemp_licensed',
      detail:
        'In 2018, Uttarakhand became the first Indian state to license commercial industrial hemp cultivation under Section 10 of the NDPS Act. Several AYUSH-licensed vijaya formulations are manufactured in the state. The Indian Industrial Hemp Association (IIHA) is headquartered here.',
      sources: ['Uttarakhand State Industrial Development Corporation', 'AYUSH Ministry licensing records'],
    },
    {
      state: 'Himachal Pradesh',
      region: 'North',
      bhang_status: 'bhang_legal',
      cultivation: 'hemp_pilot',
      detail:
        'Long history of wild cannabis growth (the Malana and Parvati valleys are world-famous landrace zones). Repeated state-government commissions have recommended legalizing controlled medical/industrial cultivation. As of mid-decade, formal legislation pending; pilot programs being explored.',
      sources: ['HP State Cabinet recommendations 2018, 2023', 'NCB seizure data'],
    },
    {
      state: 'Madhya Pradesh',
      region: 'Central',
      bhang_status: 'bhang_legal',
      cultivation: 'hemp_licensed',
      detail:
        'MP has actively licensed industrial hemp cultivation. Several Ayurvedic manufacturing units operate vijaya-based formulations. Bhang sale through state-licensed outlets is well-established, particularly in temple towns.',
      sources: ['MP AYUSH Directorate', 'MP State Excise Department'],
    },
    {
      state: 'Uttar Pradesh',
      region: 'North',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail:
        'Bhang is widely available through licensed government bhang shops, particularly in Varanasi, Mathura, and other religious centers — a colonial-era system that survived into the present. No formal industrial/medical hemp program.',
      sources: ['UP State Excise rules', 'NCB regional data'],
    },
    {
      state: 'Rajasthan',
      region: 'North-West',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail:
        'Bhang ghotas (legal preparation shops) operate in Jodhpur, Pushkar, and other towns under state excise. Religious and cultural use protected; no formal industrial program.',
      sources: ['Rajasthan State Excise'],
    },
    {
      state: 'Punjab',
      region: 'North',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail:
        'Bhang has some traditional use; state focus has been on opioid and synthetic drug crises rather than cannabis policy.',
      sources: ['Punjab State Drug Policy reports'],
    },
    {
      state: 'Delhi',
      region: 'North',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail:
        'Bhang available through licensed government outlets, particularly during Holi season. No production base.',
      sources: ['Delhi Excise rules'],
    },

    // North-East — wild growth zones
    {
      state: 'Manipur',
      region: 'North-East',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail:
        'Wild cannabis grows in hill districts. Significant illicit cultivation reported. Cabinet discussed legalization framework around 2018 but no implementation.',
      sources: ['Manipur State Cabinet records', 'NCB North-East regional data'],
    },
    {
      state: 'Tripura',
      region: 'North-East',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail:
        'High NCB seizure activity; topography favours wild cannabis. No state-level reform program.',
      sources: ['NCB Tripura'],
    },
    {
      state: 'Assam',
      region: 'North-East',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail: 'Limited program; NCB enforcement-focused.',
      sources: ['Assam State Excise'],
    },

    // West
    {
      state: 'Maharashtra',
      region: 'West',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail:
        'Bhang regulated through state excise. Mumbai has a small Ayurvedic vijaya formulation supply chain through AYUSH-licensed outlets. No industrial program.',
      sources: ['Maharashtra State Excise'],
    },
    {
      state: 'Gujarat',
      region: 'West',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail: 'Bhang available under state excise.',
      sources: ['Gujarat State Excise'],
    },

    // South
    {
      state: 'Karnataka',
      region: 'South',
      bhang_status: 'bhang_grey',
      cultivation: 'hemp_pilot',
      detail:
        'Bengaluru hosts several Ayurvedic and integrative practitioners working with AYUSH-licensed vijaya formulations. Some industrial hemp research interest.',
      sources: ['Karnataka AYUSH Directorate'],
    },
    {
      state: 'Tamil Nadu',
      region: 'South',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail:
        'Active NCB enforcement; high-profile cannabis prosecutions. No reform program.',
      sources: ['Tamil Nadu State data'],
    },
    {
      state: 'Kerala',
      region: 'South',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail:
        'Kerala leads in palliative care but has resisted cannabis reform. High NCB activity.',
      sources: ['Kerala State Health'],
    },
    {
      state: 'Andhra Pradesh',
      region: 'South',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail: 'High-profile cannabis prosecutions; no state reform program.',
      sources: ['AP State Excise'],
    },
    {
      state: 'Telangana',
      region: 'South',
      bhang_status: 'bhang_grey',
      cultivation: 'no_program',
      detail:
        'Telangana has been at the centre of several high-visibility cannabis cases. Public discourse active; legislative reform absent.',
      sources: ['Telangana State data'],
    },

    // East
    {
      state: 'West Bengal',
      region: 'East',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail:
        'Bhang available under state excise; historical use in Kali Puja and other festivals. No industrial program.',
      sources: ['WB State Excise'],
    },
    {
      state: 'Bihar',
      region: 'East',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail: 'Total prohibition state since 2016 for alcohol; cannabis bhang remains accessible.',
      sources: ['Bihar State Excise'],
    },
    {
      state: 'Odisha',
      region: 'East',
      bhang_status: 'bhang_legal',
      cultivation: 'no_program',
      detail: 'Bhang availability through state excise; significant ganja cultivation reported in tribal hill areas.',
      sources: ['Odisha State Excise', 'NCB Eastern region'],
    },
  ],
};

export function getStatesByCategory(category) {
  return reformTracker.states.filter(
    (s) => s.bhang_status === category || s.cultivation === category
  );
}

export function getStateCount(category) {
  return reformTracker.states.filter(
    (s) => s.bhang_status === category || s.cultivation === category
  ).length;
}
