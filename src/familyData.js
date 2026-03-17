export const NODE_W = 106;
export const NODE_H = 42;
export const SVG_W = 1040;
export const SVG_H = 1570;

export const nodes = [
  // ── Generation 1 ──────────────────────────────────────────
  {
    id: 'visenya',
    name: 'Visenya',
    shortHint: 'Sister-Queen',
    hint: 'Sister-wife of Aegon the Conqueror; rode Vhagar',
    accepts: ['visenya'],
    x: 100, y: 80,
  },
  {
    id: 'aegon1',
    name: 'Aegon I',
    shortHint: 'The Conqueror',
    hint: 'First King of the Seven Kingdoms; rode Balerion the Black Dread',
    accepts: ['aegon i', 'aegon 1', 'aegon the conqueror', 'aegon'],
    x: 380, y: 80,
  },
  {
    id: 'rhaenys_q',
    name: 'Rhaenys',
    shortHint: 'Sister-Queen',
    hint: 'Sister-wife of Aegon the Conqueror; rode Meraxes',
    accepts: ['rhaenys'],
    x: 660, y: 80,
  },

  // ── Generation 2 ──────────────────────────────────────────
  {
    id: 'maegor',
    name: 'Maegor I',
    shortHint: 'The Cruel',
    hint: 'Third king; son of Aegon I & Visenya; died on the Iron Throne',
    accepts: ['maegor i', 'maegor 1', 'maegor the cruel', 'maegor'],
    x: 100, y: 195,
  },
  {
    id: 'aenys',
    name: 'Aenys I',
    shortHint: 'Second King',
    hint: 'Second king; son of Aegon I & Rhaenys; weak-willed ruler',
    accepts: ['aenys i', 'aenys 1', 'aenys'],
    x: 660, y: 195,
  },

  // ── Generation 3 ──────────────────────────────────────────
  {
    id: 'jaehaerys1',
    name: 'Jaehaerys I',
    shortHint: 'The Conciliator',
    hint: 'Fourth king; the Old King; longest reign in Westerosi history',
    accepts: ['jaehaerys i', 'jaehaerys 1', 'jaehaerys the conciliator', 'jaehaerys', 'jaehaerys the old'],
    x: 520, y: 310,
  },
  {
    id: 'alysanne',
    name: 'Alysanne',
    shortHint: 'Good Queen',
    hint: 'Good Queen Alysanne; wife of Jaehaerys I; helped build the Night\'s Watch road',
    accepts: ['alysanne', 'queen alysanne'],
    x: 710, y: 310,
  },

  // ── Generation 4 ──────────────────────────────────────────
  {
    id: 'baelon',
    name: 'Baelon',
    shortHint: 'The Brave',
    hint: 'Prince of Dragonstone; son of Jaehaerys I & Alysanne; died before inheriting',
    accepts: ['baelon', 'baelon the brave'],
    x: 615, y: 420,
  },

  // ── Generation 5 ──────────────────────────────────────────
  {
    id: 'viserys1',
    name: 'Viserys I',
    shortHint: 'Fifth King',
    hint: 'Fifth king; his choice of succession sparked the Dance of Dragons',
    accepts: ['viserys i', 'viserys 1', 'viserys'],
    x: 370, y: 530,
  },
  {
    id: 'daemon',
    name: 'Daemon',
    shortHint: 'The Rogue Prince',
    hint: 'The Rogue Prince; brother of Viserys I; wielded Dark Sister; twice married',
    accepts: ['daemon', 'prince daemon', 'daemon targaryen'],
    x: 640, y: 530,
  },
  {
    id: 'laena',
    name: 'Laena Velaryon',
    shortHint: "Daemon's 2nd wife",
    hint: "Daughter of Corlys Velaryon (the Sea Snake); Daemon's second wife; rode Vhagar",
    accepts: ['laena', 'laena velaryon'],
    x: 870, y: 530,
  },

  // ── Generation 6 ──────────────────────────────────────────
  {
    id: 'rhaenyra',
    name: 'Rhaenyra',
    shortHint: "The Realm's Delight",
    hint: "The Realm's Delight; daughter of Viserys I; queen during the Dance of Dragons",
    accepts: ['rhaenyra', 'queen rhaenyra', 'rhaenyra targaryen'],
    x: 150, y: 640,
  },
  {
    id: 'aegon2',
    name: 'Aegon II',
    shortHint: 'The Elder',
    hint: 'Sixth king; son of Viserys I & Alicent Hightower; rival to Rhaenyra in the Dance',
    accepts: ['aegon ii', 'aegon 2', 'aegon the elder', 'aegon'],
    x: 530, y: 640,
  },
  {
    id: 'baela',
    name: 'Baela',
    shortHint: "Daemon's daughter",
    hint: 'Daughter of Daemon & Laena Velaryon; twin of Rhaena; rode Moondancer at the Battle of the Gullet',
    accepts: ['baela', 'baela targaryen'],
    x: 730, y: 640,
  },
  {
    id: 'rhaena',
    name: 'Rhaena',
    shortHint: "Daemon's daughter",
    hint: "Daughter of Daemon & Laena Velaryon; twin of Baela; kept dragon eggs that never hatched",
    accepts: ['rhaena', 'rhaena targaryen'],
    x: 900, y: 640,
  },

  // ── Generation 7 ──────────────────────────────────────────
  {
    id: 'aegon3',
    name: 'Aegon III',
    shortHint: 'The Dragonbane',
    hint: 'Seventh king; son of Rhaenyra & Daemon; last dragon died during his reign',
    accepts: ['aegon iii', 'aegon 3', 'aegon the dragonbane', 'aegon'],
    x: 150, y: 750,
  },

  // ── Skip ~7 kings ──────────────────────────────────────────

  // ── Maekar I ──────────────────────────────────────────────
  {
    id: 'maekar',
    name: 'Maekar I',
    shortHint: 'The Anvil',
    hint: 'Fourteenth king; the Anvil; son of Daeron II; died at the Peake Uprising',
    accepts: ['maekar i', 'maekar 1', 'maekar the anvil', 'maekar'],
    x: 370, y: 940,
  },

  // ── Maekar's children ─────────────────────────────────────
  {
    id: 'daeron_m',
    name: 'Daeron',
    shortHint: "Maekar's eldest",
    hint: "Maekar's eldest son; died young of a pox caught from a prostitute",
    accepts: ['daeron'],
    x: 100, y: 1055,
  },
  {
    id: 'aerion',
    name: 'Aerion',
    shortHint: 'Brightflame',
    hint: "Aerion Brightflame; Maekar's second son; drank wildfire believing it would transform him into a dragon",
    accepts: ['aerion', 'aerion brightflame', 'aerion targaryen'],
    x: 265, y: 1055,
  },
  {
    id: 'aemon',
    name: 'Aemon',
    shortHint: 'Maester Aemon',
    hint: "Maester Aemon of the Night's Watch; refused the crown twice; lived past 100; advised Jon Snow",
    accepts: ['aemon', 'maester aemon', 'aemon targaryen'],
    x: 450, y: 1055,
  },
  {
    id: 'aegon5',
    name: 'Aegon V',
    shortHint: 'Egg',
    hint: "Aegon the Unlikely; known as Egg; squired for Ser Duncan the Tall; died at Summerhall trying to hatch dragons",
    accepts: ['aegon v', 'aegon 5', 'aegon the unlikely', 'egg', 'aegon'],
    x: 650, y: 1055,
  },

  // ── Aegon V → Jaehaerys II ────────────────────────────────
  {
    id: 'jaehaerys2',
    name: 'Jaehaerys II',
    shortHint: 'Sixteenth King',
    hint: 'Sixteenth king; son of Aegon V; short but steady reign; father of the Mad King',
    accepts: ['jaehaerys ii', 'jaehaerys 2', 'jaehaerys'],
    x: 550, y: 1165,
  },

  // ── Aerys II ──────────────────────────────────────────────
  {
    id: 'aerys2',
    name: 'Aerys II',
    shortHint: 'The Mad King',
    hint: 'Seventeenth king; the Mad King; burned lords with wildfire; killed by Jaime Lannister',
    accepts: ['aerys ii', 'aerys 2', 'aerys the mad', 'the mad king', 'aerys'],
    x: 440, y: 1275,
  },

  // ── Aerys's children ──────────────────────────────────────
  {
    id: 'rhaegar',
    name: 'Rhaegar',
    shortHint: 'The Last Dragon',
    hint: 'Crown prince; the Last Dragon; carried off Lyanna Stark; slain by Robert Baratheon at the Trident',
    accepts: ['rhaegar', 'prince rhaegar', 'rhaegar targaryen'],
    x: 210, y: 1385,
  },
  {
    id: 'viserys3',
    name: 'Viserys III',
    shortHint: 'The Beggar King',
    hint: "The Beggar King; sold Daenerys to Khal Drogo for an army; received a crown of molten gold",
    accepts: ['viserys iii', 'viserys 3', 'viserys targaryen', 'viserys'],
    x: 440, y: 1385,
  },
  {
    id: 'daenerys',
    name: 'Daenerys',
    shortHint: 'Mother of Dragons',
    hint: 'Mother of Dragons; Breaker of Chains; hatched three dragon eggs; claimed the Iron Throne',
    accepts: ['daenerys', 'dany', 'daenerys targaryen', 'daenerys stormborn'],
    x: 690, y: 1385,
  },

  // ── Jon Snow ──────────────────────────────────────────────
  {
    id: 'jon',
    name: 'Jon Snow',
    shortHint: 'The White Wolf',
    hint: "The White Wolf; true name Aegon Targaryen; son of Rhaegar & Lyanna Stark; Lord Commander of the Night's Watch",
    accepts: ['jon snow', 'jon', 'aegon targaryen', 'aegon'],
    x: 210, y: 1495,
  },
];

export const edges = [
  // Aegon I + Visenya → Maegor I
  { from: 'visenya',    to: 'maegor' },
  { from: 'aegon1',     to: 'maegor' },
  // Aegon I + Rhaenys → Aenys I
  { from: 'aegon1',     to: 'aenys' },
  { from: 'rhaenys_q',  to: 'aenys' },
  // Aenys I → Jaehaerys I
  { from: 'aenys',      to: 'jaehaerys1' },
  // Jaehaerys I + Alysanne → Baelon
  { from: 'jaehaerys1', to: 'baelon' },
  { from: 'alysanne',   to: 'baelon' },
  // Baelon → Viserys I + Daemon
  { from: 'baelon',     to: 'viserys1' },
  { from: 'baelon',     to: 'daemon' },
  // Viserys I → Rhaenyra + Aegon II
  { from: 'viserys1',   to: 'rhaenyra' },
  { from: 'viserys1',   to: 'aegon2' },
  // Daemon + Laena → Baela + Rhaena
  { from: 'daemon',     to: 'baela' },
  { from: 'laena',      to: 'baela' },
  { from: 'daemon',     to: 'rhaena' },
  { from: 'laena',      to: 'rhaena' },
  // Rhaenyra + Daemon → Aegon III
  { from: 'rhaenyra',   to: 'aegon3' },
  { from: 'daemon',     to: 'aegon3' },
  // Aegon III ⟶ Maekar I (skip ~7 kings)
  { from: 'aegon3',     to: 'maekar', skipped: true },
  // Maekar I → children
  { from: 'maekar',     to: 'daeron_m' },
  { from: 'maekar',     to: 'aerion' },
  { from: 'maekar',     to: 'aemon' },
  { from: 'maekar',     to: 'aegon5' },
  // Aegon V → Jaehaerys II
  { from: 'aegon5',     to: 'jaehaerys2' },
  // Jaehaerys II → Aerys II
  { from: 'jaehaerys2', to: 'aerys2' },
  // Aerys II → children
  { from: 'aerys2',     to: 'rhaegar' },
  { from: 'aerys2',     to: 'viserys3' },
  { from: 'aerys2',     to: 'daenerys' },
  // Rhaegar → Jon Snow
  { from: 'rhaegar',    to: 'jon' },
];
