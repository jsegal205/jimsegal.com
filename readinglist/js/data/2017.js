import {
  oldMansWar,
  divineDungeon,
  themisFiles,
  bobiverse,
  inheritanceCycle
} from "./series.js";

const seventeen = [
  {
    title: "Artemis",
    author: "Andy Weir",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Artemis-Audiobook/B072R1CY4P",
    type: "headphones"
  },
  {
    title: "Old Man's War",
    author: "John Scalzi",
    link: "https://www.audible.com/pd/Old-Mans-War-Part-1-Audiobook/B002V1O7D2",
    series: {
      ...oldMansWar,
      bookNum: 1
    },
    type: "headphones"
  },
  {
    title: "Dungeon Madness",
    author: "Dakota Krout",
    link:
      "https://www.audible.com/pd/Dungeon-Madness-Part-1-Divine-Dungeon-Series-Book-2-Audiobook/B0764H7Y83",
    series: {
      ...divineDungeon,
      bookNum: 2
    },
    type: "headphones"
  },
  {
    title: "Waking Gods",
    author: "Sylvain Neuvel",
    link:
      "https://www.audible.com/pd/Waking-Gods-The-Themis-Files-Book-2-Audiobook/B01NGUBLBW",
    series: {
      ...themisFiles,
      bookNum: 2
    },
    type: "headphones"
  },
  {
    title: "Sleeping Giants",
    author: "Sylvain Neuvel",
    link:
      "https://www.audible.com/pd/Fiction/Sleeping-Giants-Audiobook/B01A98UKAC",
    series: {
      ...themisFiles,
      bookNum: 1
    },
    type: "headphones"
  },
  {
    title: "Dungeon Born",
    author: "Dakota Krout",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Dungeon-Born-Audiobook/B06XQ78XLP",
    series: {
      ...divineDungeon,
      bookNum: 1
    },
    type: "headphones"
  },
  {
    title: "All These Worlds",
    author: "Dennis E. Taylor",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/All-These-Worlds-Audiobook/B07341FZDC",
    series: {
      ...bobiverse,
      bookNum: 3
    },
    type: "headphones"
  },
  {
    title: "For We Are Many",
    author: "Dennis E. Taylor",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/For-We-Are-Many-Audiobook/B01N17THEO",
    series: {
      ...bobiverse,
      bookNum: 2
    },
    type: "headphones"
  },
  {
    title: "We Are Legion (We Are Bob)",
    author: "Dennis E. Taylor",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/We-Are-Legion-We-Are-Bob-Audiobook/B01L082HJ2",
    series: {
      ...bobiverse,
      bookNum: 1
    },
    type: "headphones"
  },
  {
    title: "Neverwhere",
    author: "Neil Gaiman",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Neverwhere-Audiobook/B00354ZSS2",
    type: "headphones"
  },
  {
    title: "American Gods",
    author: "Neil Gaiman",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/American-Gods-The-Tenth-Anniversary-Edition-A-Full-Cast-Production-Audiobook/B0055274U2",
    type: "headphones"
  },
  {
    title: "The Story of God: A Biblical Comedy about Love (and Hate)",
    author: "Chris Matheson",
    link:
      "https://www.audible.com/pd/The-Story-of-God-A-Biblical-Comedy-about-Love-and-Hate-Audiobook/B017T4ZYR8",
    type: "headphones"
  },
  {
    title: "Inheritance",
    author: "Christopher Paolini",
    link:
      "https://www.audible.com/pd/Inheritance-Part-1-The-Inheritance-Cycle-Book-4-Audiobook/B005ZWA2P6",
    series: {
      ...inheritanceCycle,
      bookNum: 4
    },
    type: "headphones"
  },
  {
    title: "Brisingr",
    author: "Christopher Paolini",
    link:
      "https://www.audible.com/pd/Brisingr-Part-1-The-Inheritance-Cycle-Book-3-Audiobook/B002V0A444",
    series: {
      ...inheritanceCycle,
      bookNum: 3
    },
    type: "headphones"
  },
  {
    title: "Eldest",
    author: "Christopher Paolini",
    link:
      "https://www.audible.com/pd/Eldest-The-Inheritance-Cycle-Book-2-Part-1-Audiobook/B003WVNWU4",
    series: {
      ...inheritanceCycle,
      bookNum: 2
    },
    type: "headphones"
  },
  {
    title: "Eragon",
    author: "Christopher Paolini",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Eragon-Audiobook/B002UZKL7A",
    series: {
      ...inheritanceCycle,
      bookNum: 1
    },
    type: "headphones"
  }
];

export default seventeen;
