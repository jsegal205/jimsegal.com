import { dresdenFiles, foundation } from "./series.js";

const thirteen = [
  {
    title: "The Design of Everyday Things",
    author: "Donald Norman",
    link: "http://www.amazon.com/Design-Everyday-Things-Donald-Norman/dp/0465067107/",
    type: "book",
  },
  {
    title: "Rework",
    author: "Jason Fried and David Heinemeier Hansson",
    link: "http://www.amazon.com/ReWork-Change-Way-Work-Forever-ebook/dp/B002MUAJ2A/",
    type: "book",
  },
  {
    title: "First World Problems: 101 reasons Why the Terrorists Hate Us",
    author: "Ben Nesvig",
    link: "http://www.amazon.com/First-World-Problems-Reasons-Terrorists-ebook/dp/B006OGG4D6/",
    type: "book",
  },
  {
    title: "Fool Moon",
    author: "Jim Butcher",
    link: "http://www.amazon.com/Fool-Moon-Dresden-Files-Book-ebook/dp/B001BPYD2O/",
    series: {
      ...dresdenFiles,
      bookNum: 2,
    },
    type: "book",
  },
  {
    title: "Storm Front",
    author: "Jim Butcher",
    link: "http://www.amazon.com/Storm-Front-Dresden-Files-Book-ebook/dp/B000WH7PLS/",
    series: {
      ...dresdenFiles,
      bookNum: 1,
    },
    type: "book",
  },
  {
    title: "Foundation and Empire",
    author: "Isaac Asimov",
    link: "http://www.amazon.com/Foundation-Empire-Isaac-Asimov-ebook/dp/B000FC1PWK/",
    series: {
      ...foundation,
      bookNum: 2,
    },
    type: "book",
  },
];

export default thirteen;
