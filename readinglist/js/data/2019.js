import { hellDivers } from "./series.js";

const nineteen = [
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
