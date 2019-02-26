import { hellDivers, talesFromAlagaesia, divineDungeon } from "./series.js";

const nineteen = [
  {
    title: "Dungeon Desolation",
    author: "Dakota Krout",
    link: "https://www.audible.com/pd/Dungeon-Desolation-Audiobook/1977385885",
    type: "headphones",
    duration: { hours: 11, minutes: 55 },
    narrator: "Vikas Adam",
    series: {
      ...divineDungeon,
      bookNum: 4
    }
  },
  {
    title: "The Fork, the Witch, and the Worm",
    author: "Christopher Paolini",
    link: "https://www.audible.com/pd/The-Fork-the-Witch-and-the-Worm-Audiobook/0593103629",
    type: "headphones",
    duration: { hours: 4, minutes: 54 },
    narrator: "Gerard Doyle",
    series: {
      ...talesFromAlagaesia,
      bookNum: 1
    }
  },
  {
    title: "Wolves",
    author: "Nicholas Sansbury Smith",
    link: "https://www.audible.com/pd/Hell-Divers-IV-Wolves-Audiobook/1538553414",
    type: "headphones",
    duration: { hours: 9, minutes: 25 },
    narrator: "R. C. Bray",
    series: {
      ...hellDivers,
      bookNum: 4
    }
  },
  {
    title: "Deliverance",
    author: "Nicholas Sansbury Smith",
    link: "https://www.audible.com/pd/Hell-Divers-III-Deliverance-Audiobook/B079NS2WGZ",
    type: "headphones",
    duration: { hours: 11, minutes: 18 },
    narrator: "R. C. Bray",
    series: {
      ...hellDivers,
      bookNum: 3
    }
  },
  {
    title: "Ghosts",
    author: "Nicholas Sansbury Smith",
    link: "https://www.audible.com/pd/Hell-Divers-II-Ghosts-Audiobook/B01N5US9UJ",
    type: "headphones",
    duration: { hours: 8, minutes: 13 },
    narrator: "R. C. Bray",
    series: {
      ...hellDivers,
      bookNum: 2
    }
  },
  {
    title: "Hell Divers",
    author: "Nicholas Sansbury Smith",
    link: "https://www.audible.com/pd/Hell-Divers-Audiobook/B01E97TPPA",
    type: "headphones",
    duration: { hours: 10, minutes: 11 },
    narrator: "R. C. Bray",
    series: {
      ...hellDivers,
      bookNum: 1
    }
  }
];

export default nineteen;
