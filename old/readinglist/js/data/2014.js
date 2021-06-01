import { mazeRunner } from "./series.js";

const fourteen = [
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    link: "http://www.amazon.com/Lean-Startup-Innovation-Successful-Businesses-ebook/dp/B004J4XGN6/",
    type: "book",
  },
  {
    title: "The Death Cure",
    author: "James Dashner",
    link: "https://www.amazon.com/gp/product/B004JN1CW4",
    series: {
      ...mazeRunner,
      bookNum: 3,
    },
    type: "book",
  },
  {
    title: "The Scorch Trials",
    author: "James Dashner",
    link: "https://www.amazon.com/gp/product/B003F3FJQO",
    series: {
      ...mazeRunner,
      bookNum: 2,
    },
    type: "book",
  },
  {
    title: "The Maze Runner",
    author: "James Dashner",
    link: "https://www.amazon.com/gp/product/B002QE3CTY",
    series: {
      ...mazeRunner,
      bookNum: 1,
    },
    type: "book",
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    link: "http://www.amazon.com/Martian-Andy-Weir-ebook/dp/B00EMXBDMA/",
    type: "book",
  },
  {
    title: "Ready Player One",
    author: "Ernest Cline",
    link: "http://www.amazon.com/Ready-Player-One-Ernest-Cline-ebook/dp/B004J4WKUQ/",
    type: "book",
  },
  {
    title: "Hyperion",
    author: "Dan Simmons",
    link: "http://www.amazon.com/Hyperion-Cantos-Book-1-ebook/dp/B004G60EHS/",
    type: "book",
  },
  {
    title: "Effective Programming: More Than Writing Code",
    author: "Jeff Atwood",
    link: "http://www.amazon.com/Effective-Programming-More-Than-Writing-ebook/dp/B008HUMTO0/",
    type: "book",
  },
];

export default fourteen;
