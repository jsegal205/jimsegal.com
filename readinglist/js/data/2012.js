import { foundation, percyJackson, hungerGames } from "./series.js";

const twelve = [
  {
    title: "Foundation",
    author: "Isaac Asimov",
    link: "http://www.amazon.com/Foundation-Isaac-Asimov-ebook/dp/B000FC1PWA/",
    series: {
      ...foundation,
      bookNum: 1
    },
    type: "book"
  },
  {
    title: "Lost at Sea",
    author: "Jon Ronsom",
    link: "http://www.amazon.com/Lost-Sea-Jon-Ronson-Mysteries-ebook/dp/B008MG1GAW/",
    type: "book"
  },
  {
    title: "Abraham Lincoln Vampire Hunter",
    author: "Seth Grahame-Smith",
    link: "http://www.amazon.com/Abraham-Lincoln-Vampire-Hunter-first/dp/B0088UM9OO/",
    type: "book"
  },
  {
    title: "The Last Olympian",
    author: "Rick Riordan",
    link: "http://www.amazon.com/Percy-Jackson-Last-Olympian-Riordan-ebook/dp/B00280LYHS/",
    series: {
      ...percyJackson,
      bookNum: 5
    },
    type: "book"
  },
  {
    title: "The Battle of the Labyrinth",
    author: "Rick Riordan",
    link: "http://www.amazon.com/Percy-Jackson-Battle-Labyrinth-Olympians-ebook/dp/B00280LYIM/",
    series: {
      ...percyJackson,
      bookNum: 4
    },
    type: "book"
  },
  {
    title: "The Titan's Curse",
    author: "Rick Riordan",
    link: "http://www.amazon.com/Percy-Jackson-Titans-Curse-Riordan-ebook/dp/B00280LYI2/",
    series: {
      ...percyJackson,
      bookNum: 3
    },
    type: "book"
  },
  {
    title: "The Sea of Monsters",
    author: "Rick Riordan",
    link: "http://www.amazon.com/Percy-Jackson-Monsters-Rick-Riordan-ebook/dp/B00280LYHI/",
    series: {
      ...percyJackson,
      bookNum: 2
    },
    type: "book"
  },
  {
    title: "The Lightning Thief",
    author: "Rick Riordan",
    link: "http://www.amazon.com/Percy-Jackson-Lightning-Thief-Olympians-ebook/dp/B00280LYIC/",
    series: {
      ...percyJackson,
      bookNum: 1
    },
    type: "book"
  },
  {
    title: "Screwjack",
    author: "Hunter S. Thompson",
    link: "http://www.amazon.com/Screwjack-Short-Hunter-S-Thompson-ebook/dp/B000FC0TVI/",
    type: "book"
  },
  {
    title: "The Art of Unit Testing",
    author: "Roy Osherove",
    link: "http://www.amazon.com/Art-Unit-Testing-Examples-Net/dp/1933988274/",
    type: "book"
  },
  {
    title: "Mockingjay",
    author: "Suzanne Collins",
    link: "http://www.amazon.com/Mockingjay-Hunger-Games-Book-Trilogy-ebook/dp/B003XF1XOQ/",
    series: {
      ...hungerGames,
      bookNum: 3
    },
    type: "book"
  },
  {
    title: "Catching Fire",
    author: "Suzanne Collins",
    link: "http://www.amazon.com/Catching-Fire-Hunger-Games-Trilogy-ebook/dp/B003O86FMW/",
    series: {
      ...hungerGames,
      bookNum: 2
    },
    type: "book"
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    link: "http://www.amazon.com/Hunger-Games-Book-Trilogy-ebook/dp/B002MQYOFW/",
    series: {
      ...hungerGames,
      bookNum: 1
    },
    type: "book"
  },
  {
    title: "World War Z",
    author: "Max Brooks",
    link: "http://www.amazon.com/World-War-Z-Max-Brooks-ebook/dp/B000JMKQX0/",
    type: "book"
  }
];

export default twelve;
