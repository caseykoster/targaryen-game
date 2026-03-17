export const NODE_W = 106;
export const NODE_H = 42;
export const SVG_W = 1300;
export const SVG_H = 1760;

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
    hint: "Good Queen Alysanne; wife of Jaehaerys I; helped build the Night's Watch road",
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
    x: 620, y: 530,
  },
  {
    id: 'daemon',
    name: 'Daemon',
    shortHint: 'The Rogue Prince',
    hint: 'The Rogue Prince; brother of Viserys I; wielded Dark Sister; twice married',
    accepts: ['daemon', 'prince daemon', 'daemon targaryen'],
    x: 1020, y: 530,
  },
  {
    id: 'laena',
    name: 'Laena Velaryon',
    shortHint: "Daemon's 2nd wife",
    hint: "Daughter of Corlys Velaryon; Daemon's second wife; rode Vhagar",
    accepts: ['laena', 'laena velaryon'],
    x: 1160, y: 530,
  },

  // ── Generation 6 — Viserys I's children + Daemon/Laena's children ──
  {
    id: 'rhaenyra',
    name: 'Rhaenyra',
    shortHint: "The Realm's Delight",
    hint: "The Realm's Delight; eldest child of Viserys I; queen during the Dance of Dragons; married Laenor Velaryon then Daemon",
    accepts: ['rhaenyra', 'queen rhaenyra', 'rhaenyra targaryen'],
    x: 320, y: 645,
  },
  {
    id: 'aegon2',
    name: 'Aegon II',
    shortHint: 'The Elder',
    hint: 'Sixth king; son of Viserys I & Alicent Hightower; rival to Rhaenyra in the Dance',
    accepts: ['aegon ii', 'aegon 2', 'aegon the elder', 'aegon'],
    x: 500, y: 645,
  },
  {
    id: 'helaena',
    name: 'Helaena',
    shortHint: 'Queen Helaena',
    hint: 'Daughter of Viserys I & Alicent Hightower; wed her brother Aegon II; a dreamer said to speak prophecy through riddles',
    accepts: ['helaena', 'helaena targaryen'],
    x: 660, y: 645,
  },
  {
    id: 'aemond',
    name: 'Aemond',
    shortHint: 'One-Eye',
    hint: 'Prince Aemond One-Eye; stole Vhagar after Laena died; lost his eye to Lucerys; killed at the Battle Above the Gods Eye',
    accepts: ['aemond', 'aemond targaryen', 'prince aemond'],
    x: 820, y: 645,
  },
  {
    id: 'daeron_vi',
    name: 'Daeron',
    shortHint: 'Daeron the Younger',
    hint: 'Daeron Targaryen; youngest son of Viserys I & Alicent; served under Lord Hightower in the Reach during the Dance',
    accepts: ['daeron', 'daeron targaryen', 'daeron the younger'],
    x: 960, y: 645,
  },
  {
    id: 'baela',
    name: 'Baela',
    shortHint: "Daemon's daughter",
    hint: 'Daughter of Daemon & Laena Velaryon; twin of Rhaena; rode Moondancer at the Battle of the Gullet',
    accepts: ['baela', 'baela targaryen'],
    x: 1090, y: 645,
  },
  {
    id: 'rhaena',
    name: 'Rhaena',
    shortHint: "Daemon's daughter",
    hint: "Daughter of Daemon & Laena Velaryon; twin of Baela; kept dragon eggs that never hatched",
    accepts: ['rhaena', 'rhaena targaryen'],
    x: 1220, y: 645,
  },

  // ── Generation 7 — Rhaenyra's children ──────────────────
  {
    id: 'jacaerys',
    name: 'Jacaerys',
    shortHint: 'Jace',
    hint: "Jacaerys Velaryon; Rhaenyra's eldest son by Laenor; rode Vermax; died at the Battle of the Gullet",
    accepts: ['jacaerys', 'jace', 'jacaerys velaryon'],
    x: 100, y: 775,
  },
  {
    id: 'lucerys',
    name: 'Lucerys',
    shortHint: 'Luke',
    hint: "Lucerys Velaryon; Rhaenyra's second son by Laenor; rode Arrax; killed by Aemond and Vhagar over Storm's End",
    accepts: ['lucerys', 'luke', 'lucerys velaryon'],
    x: 230, y: 775,
  },
  {
    id: 'joffrey_v',
    name: 'Joffrey',
    shortHint: "Rhaenyra's third son",
    hint: "Joffrey Velaryon; Rhaenyra's third son by Laenor; died during the Dragonpit riot trying to claim a dragon",
    accepts: ['joffrey', 'joffrey velaryon'],
    x: 360, y: 775,
  },
  {
    id: 'aegon3',
    name: 'Aegon III',
    shortHint: 'The Dragonbane',
    hint: 'Seventh king; son of Rhaenyra & Daemon; witnessed his mother devoured by a dragon; last dragon died during his reign',
    accepts: ['aegon iii', 'aegon 3', 'aegon the dragonbane', 'aegon'],
    x: 510, y: 775,
  },
  {
    id: 'viserys_y',
    name: 'Viserys II',
    shortHint: 'Viserys the Younger',
    hint: 'Viserys II; son of Rhaenyra & Daemon; captured by Lys as a child; outlived Aegon III to become the 10th king',
    accepts: ['viserys ii', 'viserys 2', 'viserys'],
    x: 640, y: 775,
  },

  // ── Skip via Aegon IV to Daeron II ────────────────────────

  // ── Daeron II & his sons ───────────────────────────────────
  {
    id: 'daeron2',
    name: 'Daeron II',
    shortHint: 'The Good',
    hint: 'Twelfth king; son of Aegon IV; united Dorne with the Seven Kingdoms through marriage; father of Maekar I',
    accepts: ['daeron ii', 'daeron 2', 'daeron the good', 'daeron'],
    x: 540, y: 965,
  },
  {
    id: 'baelor_b',
    name: 'Baelor',
    shortHint: 'Breakspear',
    hint: 'Prince Baelor Breakspear; heir to Daeron II; died accidentally during trial-by-combat at the Ashford tourney',
    accepts: ['baelor', 'baelor breakspear', 'prince baelor'],
    x: 340, y: 1085,
  },
  {
    id: 'aerys1',
    name: 'Aerys I',
    shortHint: 'The Bookish King',
    hint: 'Thirteenth king; son of Daeron II; preferred sorcery and scrolls to ruling; had no children; preceded Maekar',
    accepts: ['aerys i', 'aerys 1', 'aerys'],
    x: 480, y: 1085,
  },
  {
    id: 'rhaegel',
    name: 'Rhaegel',
    shortHint: 'Died Mad',
    hint: 'Prince Rhaegel; son of Daeron II; died in a fit of madness; father of the twins Aelor and Aelora',
    accepts: ['rhaegel', 'rhaegel targaryen'],
    x: 620, y: 1085,
  },
  {
    id: 'maekar',
    name: 'Maekar I',
    shortHint: 'The Anvil',
    hint: 'Fourteenth king; son of Daeron II; father of Maester Aemon and Aegon V (Egg); died at the Peake Uprising',
    accepts: ['maekar i', 'maekar 1', 'maekar the anvil', 'maekar'],
    x: 760, y: 1085,
  },

  // ── Maekar's children ─────────────────────────────────────
  {
    id: 'daeron_m',
    name: 'Daeron',
    shortHint: "Maekar's eldest",
    hint: "Maekar's eldest son; died young of a pox caught from a prostitute",
    accepts: ['daeron'],
    x: 580, y: 1205,
  },
  {
    id: 'aerion',
    name: 'Aerion',
    shortHint: 'Brightflame',
    hint: "Aerion Brightflame; Maekar's second son; drank wildfire believing it would transform him into a dragon",
    accepts: ['aerion', 'aerion brightflame', 'aerion targaryen'],
    x: 710, y: 1205,
  },
  {
    id: 'aemon',
    name: 'Aemon',
    shortHint: 'Maester Aemon',
    hint: "Maester Aemon of the Night's Watch; refused the crown twice; lived past 100; advised Jon Snow",
    accepts: ['aemon', 'maester aemon', 'aemon targaryen'],
    x: 840, y: 1205,
  },
  {
    id: 'aegon5',
    name: 'Aegon V',
    shortHint: 'Egg',
    hint: "Aegon the Unlikely; known as Egg; squired for Ser Duncan the Tall; died at Summerhall trying to hatch dragons",
    accepts: ['aegon v', 'aegon 5', 'aegon the unlikely', 'egg', 'aegon'],
    x: 970, y: 1205,
  },

  // ── Aegon V → Jaehaerys II ────────────────────────────────
  {
    id: 'jaehaerys2',
    name: 'Jaehaerys II',
    shortHint: 'Sixteenth King',
    hint: 'Sixteenth king; son of Aegon V; short but steady reign; ended the last Blackfyre threat; father of the Mad King',
    accepts: ['jaehaerys ii', 'jaehaerys 2', 'jaehaerys'],
    x: 880, y: 1325,
  },

  // ── Aerys II ──────────────────────────────────────────────
  {
    id: 'aerys2',
    name: 'Aerys II',
    shortHint: 'The Mad King',
    hint: 'Seventeenth king; the Mad King; burned lords with wildfire; killed by Jaime Lannister',
    accepts: ['aerys ii', 'aerys 2', 'aerys the mad', 'the mad king', 'aerys'],
    x: 780, y: 1445,
  },

  // ── Aerys II's children ───────────────────────────────────
  {
    id: 'rhaegar',
    name: 'Rhaegar',
    shortHint: 'The Last Dragon',
    hint: 'Crown prince; the Last Dragon; carried off Lyanna Stark; slain by Robert Baratheon at the Trident',
    accepts: ['rhaegar', 'prince rhaegar', 'rhaegar targaryen'],
    x: 550, y: 1560,
  },
  {
    id: 'viserys3',
    name: 'Viserys III',
    shortHint: 'The Beggar King',
    hint: "The Beggar King; sold Daenerys to Khal Drogo for an army; received a crown of molten gold",
    accepts: ['viserys iii', 'viserys 3', 'viserys targaryen', 'viserys'],
    x: 780, y: 1560,
  },
  {
    id: 'daenerys',
    name: 'Daenerys',
    shortHint: 'Mother of Dragons',
    hint: 'Mother of Dragons; Breaker of Chains; hatched three dragon eggs; claimed the Iron Throne',
    accepts: ['daenerys', 'dany', 'daenerys targaryen', 'daenerys stormborn'],
    x: 1010, y: 1560,
  },

  // ── Jon Snow ──────────────────────────────────────────────
  {
    id: 'jon',
    name: 'Jon Snow',
    shortHint: 'The White Wolf',
    hint: "The White Wolf; true name Aegon Targaryen; son of Rhaegar & Lyanna Stark; Lord Commander of the Night's Watch",
    accepts: ['jon snow', 'jon', 'aegon targaryen', 'aegon'],
    x: 550, y: 1675,
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
  // Viserys I → his five children
  { from: 'viserys1',   to: 'rhaenyra' },
  { from: 'viserys1',   to: 'aegon2' },
  { from: 'viserys1',   to: 'helaena' },
  { from: 'viserys1',   to: 'aemond' },
  { from: 'viserys1',   to: 'daeron_vi' },
  // Daemon + Laena → Baela + Rhaena
  { from: 'daemon',     to: 'baela' },
  { from: 'laena',      to: 'baela' },
  { from: 'daemon',     to: 'rhaena' },
  { from: 'laena',      to: 'rhaena' },
  // Rhaenyra → all five children (Jace/Luke/Joffrey by Laenor; Aegon III/Viserys II by Daemon)
  { from: 'rhaenyra',   to: 'jacaerys' },
  { from: 'rhaenyra',   to: 'lucerys' },
  { from: 'rhaenyra',   to: 'joffrey_v' },
  { from: 'rhaenyra',   to: 'aegon3' },
  { from: 'rhaenyra',   to: 'viserys_y' },
  // Daemon also parent of Aegon III and Viserys II (secondary lines, dashed purple)
  { from: 'daemon',     to: 'aegon3',   secondary: true },
  { from: 'daemon',     to: 'viserys_y', secondary: true },
  // Viserys II (son of Rhaenyra) ⟶ Daeron II (skip via Aegon IV)
  { from: 'viserys_y',  to: 'daeron2', skipped: true },
  // Daeron II → his four sons
  { from: 'daeron2',    to: 'baelor_b' },
  { from: 'daeron2',    to: 'aerys1' },
  { from: 'daeron2',    to: 'rhaegel' },
  { from: 'daeron2',    to: 'maekar' },
  // Maekar I → his four sons
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
