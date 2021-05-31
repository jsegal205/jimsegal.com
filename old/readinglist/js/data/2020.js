import { interdependency, lockIn } from "./series.js";

const twenty = [
  {
    title: "The Collapsing Empire",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/The-Collapsing-Empire-Audiobook/B01L2PE1XI",
    type: "headphones",
    duration: { hours: 9, minutes: 24 },
    narrator: "Wil Wheaton",
    series: {
      ...interdependency,
      bookNum: 1,
    },
  },
  {
    title: "The First Fifteen Lives of Harry August",
    author: "Claire North",
    link:
      "https://www.audible.com/pd/The-First-Fifteen-Lives-of-Harry-August-Audiobook/B00J27VX9Y",
    type: "headphones",
    duration: { hours: 12, minutes: 10 },
    narrator: "Peter Kenny",
  },
  {
    title: "Recursion",
    author: "Blake Crouch",
    link: "https://www.audible.com/pd/Recursion-Audiobook/1984886878",
    type: "headphones",
    duration: { hours: 10, minutes: 47 },
    narrator: "Jon Lindstrom, Abby Craden",
  },
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
      bookNum: 2,
    },
  },
];

export default twenty;
