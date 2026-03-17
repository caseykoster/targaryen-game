export const NODE_W = 130;
export const NODE_H = 58;
export const SVG_W = 960;
export const SVG_H = 1520;

export const nodes = [
  {
    id: 'visenya',
    name: 'Visenya',
    shortHint: 'Sister-Queen',
    hint: 'Sister-wife of Aegon the Conqueror; rode Vhagar',
    accepts: ['visenya'],
    x: 90, y: 80,
  },
  {
    id: 'aegon1',
    name: 'Aegon I',
    shortHint: 'The Conqueror',
    hint: 'First King of the Seven Kingdoms; rode Balerion the Black Dread',
    accepts: ['aegon i', 'aegon 1', 'aegon the conqueror'],
    x: 400, y: 80,
  },
  {
    id: 'rhaenys_q',
    name: 'Rhaenys',
    shortHint: 'Sister-Queen',
    hint: 'Sister-wife of Aegon the Conqueror; rode Meraxes',
    accepts: ['rhaenys'],
    x: 720, y: 80,
  },
  {
    id: 'maegor',
    name: 'Maegor I',
    shortHint: 'The Cruel',
    hint: 'Third king; son of Aegon I & Visenya; died on the Iron Throne',
    accepts: ['maegor i', 'maegor 1', 'maegor the cruel', 'maegor'],
    x: 90, y: 240,
  },
  {
    id: 'aenys',
    name: 'Aenys I',
    shortHint: 'Second King',
    hint: 'Second king; son of Aegon I & Rhaenys; weak-willed ruler',
    accepts: ['aenys i', 'aenys 1', 'aenys'],
    x: 720, y: 240,
  },
  {
    id: 'jaehaerys1',
    name: 'Jaehaerys I',
    shortHint: 'The Conciliator',
    hint: 'Fourth king; the Old King; longest reign in Westerosi history',
    accepts: ['jaehaerys i', 'jaehaerys 1', 'jaehaerys the conciliator', 'jaehaerys', 'jaehaerys the old'],
    x: 600, y: 400,
  },
  {
    id: 'alysanne',
    name: 'Alysanne',
    shortHint: 'Good Queen',
    hint: 'Good Queen Alysanne; wife of Jaehaerys I; beloved queen',
    accepts: ['alysanne', 'queen alysanne'],
    x: 840, y: 400,
  },
  {
    id: 'baelon',
    name: 'Baelon',
    shortHint: 'The Brave',
    hint: 'Prince of Dragonstone; son of Jaehaerys I; died before inheriting',
    accepts: ['baelon', 'baelon the brave'],
    x: 720, y: 540,
  },
  {
    id: 'viserys1',
    name: 'Viserys I',
    shortHint: 'Fifth King',
    hint: 'Fifth king; central to House of the Dragon; his succession dispute caused the Dance of Dragons',
    accepts: ['viserys i', 'viserys 1'],
    x: 480, y: 680,
  },
  {
    id: 'daemon',
    name: 'Daemon',
    shortHint: 'The Rogue Prince',
    hint: 'The Rogue Prince; brother of Viserys I; wielded Dark Sister',
    accepts: ['daemon', 'prince daemon', 'daemon targaryen'],
    x: 840, y: 680,
  },
  {
    id: 'rhaenyra',
    name: 'Rhaenyra',
    shortHint: "The Realm's Delight",
    hint: "The Realm's Delight; daughter of Viserys I; claimant during the Dance of Dragons",
    accepts: ['rhaenyra', 'queen rhaenyra', 'rhaenyra targaryen'],
    x: 220, y: 820,
  },
  {
    id: 'aegon2',
    name: 'Aegon II',
    shortHint: 'The Elder',
    hint: 'Sixth king; son of Viserys I & Alicent Hightower; rival to Rhaenyra',
    accepts: ['aegon ii', 'aegon 2', 'aegon the elder'],
    x: 580, y: 820,
  },
  {
    id: 'aegon3',
    name: 'Aegon III',
    shortHint: 'The Dragonbane',
    hint: 'Seventh king; the Dragonbane; son of Rhaenyra & Daemon; witnessed his mother eaten by a dragon',
    accepts: ['aegon iii', 'aegon 3', 'aegon the dragonbane'],
    x: 400, y: 960,
  },
  {
    id: 'aerys2',
    name: 'Aerys II',
    shortHint: 'The Mad King',
    hint: 'Seventeenth king; the Mad King; burned lords with wildfire; killed by Jaime Lannister',
    accepts: ['aerys ii', 'aerys 2', 'aerys the mad', 'the mad king', 'aerys'],
    x: 400, y: 1160,
  },
  {
    id: 'rhaegar',
    name: 'Rhaegar',
    shortHint: 'The Last Dragon',
    hint: 'Crown prince; the Last Dragon; carried off Lyanna Stark; killed by Robert Baratheon',
    accepts: ['rhaegar', 'prince rhaegar', 'rhaegar targaryen'],
    x: 160, y: 1300,
  },
  {
    id: 'viserys3',
    name: 'Viserys III',
    shortHint: 'The Beggar King',
    hint: "The Beggar King; Daenerys's older brother; sold her to Khal Drogo",
    accepts: ['viserys iii', 'viserys 3', 'viserys targaryen'],
    x: 400, y: 1300,
  },
  {
    id: 'daenerys',
    name: 'Daenerys',
    shortHint: 'Mother of Dragons',
    hint: 'Mother of Dragons; Breaker of Chains; hatched three dragon eggs; claimed the Iron Throne',
    accepts: ['daenerys', 'dany', 'daenerys targaryen', 'daenerys stormborn'],
    x: 660, y: 1300,
  },
  {
    id: 'jon',
    name: 'Jon Snow',
    shortHint: 'The White Wolf',
    hint: "The White Wolf; Lord Commander of the Night's Watch; true name Aegon Targaryen",
    accepts: ['jon snow', 'jon', 'aegon targaryen', 'aegon'],
    x: 160, y: 1440,
  },
];

export const edges = [
  // Aegon I + Visenya → Maegor I
  { from: 'visenya', to: 'maegor' },
  { from: 'aegon1', to: 'maegor' },
  // Aegon I + Rhaenys → Aenys I
  { from: 'aegon1', to: 'aenys' },
  { from: 'rhaenys_q', to: 'aenys' },
  // Aenys I → Jaehaerys I
  { from: 'aenys', to: 'jaehaerys1' },
  // Jaehaerys I + Alysanne → Baelon
  { from: 'jaehaerys1', to: 'baelon' },
  { from: 'alysanne', to: 'baelon' },
  // Baelon → Viserys I + Daemon
  { from: 'baelon', to: 'viserys1' },
  { from: 'baelon', to: 'daemon' },
  // Viserys I → Rhaenyra + Aegon II
  { from: 'viserys1', to: 'rhaenyra' },
  { from: 'viserys1', to: 'aegon2' },
  // Rhaenyra + Daemon → Aegon III
  { from: 'rhaenyra', to: 'aegon3' },
  { from: 'daemon', to: 'aegon3' },
  // Aegon III → ... → Aerys II (many generations skipped)
  { from: 'aegon3', to: 'aerys2', skipped: true },
  // Aerys II → Rhaegar + Viserys III + Daenerys
  { from: 'aerys2', to: 'rhaegar' },
  { from: 'aerys2', to: 'viserys3' },
  { from: 'aerys2', to: 'daenerys' },
  // Rhaegar → Jon Snow
  { from: 'rhaegar', to: 'jon' },
];
