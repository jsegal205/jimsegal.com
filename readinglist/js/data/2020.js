import {
  chaosSeeds,
  divineDungeon,
  expeditionaryForce,
  hellDivers,
  lockIn,
  steamborn,
  talesFromAlagaesia
} from "./series.js";

const twenty = [
  {
    title: "Head On",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/Head-On-Narrated-by-Wil-Wheaton-Audiobook/B07BGDSPR9",
    type: "headphones",
    duration: { hours: 7, minutes: 36 },
    narrator: "Wil Wheaton",
    series: {
      ...lockIn,
      bookNum: 2
    }
  }
];

export default twenty;
