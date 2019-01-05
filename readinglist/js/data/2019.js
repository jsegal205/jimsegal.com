import { hellDivers } from "./series.js";

const nineteen = [
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
