import {
  divineDungeon,
  expeditionaryForce,
  magic20,
  oldMansWar,
  southernReach,
  themisFiles,
  thresholdSeries
} from "./series.js";

const eighteen = [
  {
    title: "The Fold",
    author: "Peter Clines",
    link: "https://www.audible.com/pd/The-Fold-Audiobook/B00W47P4D0",
    type: "headphones",
    duration: { hours: 10, minutes: 52 },
    narrator: "Ray Porter",
    series: {
      ...thresholdSeries,
      bookNum: 2
    }
  },
  {
    title: "Remote",
    subtitle: "Office Not Required",
    author: "Jason Fried and David Heinemeier Hansson",
    link:
      "https://smile.amazon.com/Remote-Office-Required-Jason-Fried/dp/0804137501",
    type: "book",
    pages: 256
  },
  {
    title: "Managing Humans",
    subtitle: "Biting and Humorous Tales of a Software Engineering Manager",
    author: "Michael Lopp",
    link:
      "https://smile.amazon.com/Managing-Humans-Humorous-Software-Engineering/dp/1484221575",
    type: "book",
    pages: 348
  },
  {
    title: "14",
    author: "Peter Clines",
    link: "https://www.audible.com/pd/14-Audiobook/B0089Y7K0M",
    type: "headphones",
    duration: { hours: 12, minutes: 34 },
    narrator: "Ray Porter",
    series: {
      ...thresholdSeries,
      bookNum: 1
    }
  },
  {
    title: "Good Omens",
    author: "Neil Gaiman",
    link: "https://www.audible.com/pd/Good-Omens-Audiobook/B0036KV7Y4",
    type: "headphones",
    duration: { hours: 12, minutes: 32 },
    narrator: "Martin Jarvis"
  },
  {
    title: "Mavericks",
    author: "Craig Alanson",
    link: "https://www.audible.com/pd/Mavericks-Audiobook/1772306932",
    series: {
      ...expeditionaryForce,
      bookNum: 6
    },
    type: "headphones",
    duration: { hours: 17, minutes: 21 },
    narrator: "R.C. Bray"
  },
  {
    title: "The Singularity Trap",
    author: "Dennis E. Taylor",
    link:
      "https://www.audible.com/pd/The-Singularity-Trap-Audiobook/B07BHVWFSM",
    type: "headphones",
    duration: { hours: 11, minutes: 23 },
    narrator: "Ray Porter"
  },
  {
    title: "One Second After",
    author: "William R. Forstchen",
    link: "https://www.audible.com/pd/One-Second-After-Audiobook/B002V1O7UU",
    type: "headphones",
    duration: { hours: 13, minutes: 17 },
    narrator: "Joe Barrett"
  },
  {
    title: "Armada",
    author: "Ernest Cline",
    link: "https://www.audible.com/pd/Armada-Audiobook/B00VN0Q8XY",
    type: "headphones",
    duration: { hours: 10, minutes: 50 },
    narrator: "Wil Wheaton"
  },
  {
    title: "The Android's Dream",
    author: "John Scalzi",
    link: "https://www.audible.com/pd/The-Androids-Dream-Audiobook/B004FGDVUG",
    type: "headphones",
    duration: { hours: 8, minutes: 34 },
    narrator: "Wil Wheaton"
  },
  {
    title: "The Graveyard Book",
    author: "Neil Gaiman",
    link:
      "https://www.audible.com/pd/The-Graveyard-Book-Full-Cast-Production-Audiobook/B00LXHQO22",
    type: "headphones",
    duration: { hours: 8, minutes: 24 },
    narrator:
      "Neil Gaiman, Derek Jacobi, Robert Madge, Clare Corbett, Miriam Margolyes, Andrew Scott, Julian Rhind-Tutt"
  },
  {
    title: "Fuzzy Nation",
    author: "John Scalzi",
    link: "https://www.audible.com/pd/Fuzzy-Nation-Audiobook/B004YXLK7G",
    type: "headphones",
    duration: { hours: 7, minutes: 19 },
    narrator: "Wil Wheaton"
  },
  {
    title: "Mogworld",
    author: "Yahtzee Croshaw",
    link: "https://www.audible.com/pd/Mogworld-Audiobook/B009EVGGEK",
    type: "headphones",
    duration: { hours: 13, minutes: 8 },
    narrator: "Yahtzee Croshaw"
  },
  {
    title: "Spell or High Water",
    author: "Scott Meyer",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Spell-or-High-Water-Audiobook/B00KHEK842",
    series: {
      ...magic20,
      bookNum: 2
    },
    type: "headphones",
    duration: { hours: 12, minutes: 9 },
    narrator: "Luke Daniels"
  },
  {
    title: "Off to Be the Wizard",
    author: "Scott Meyer",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Off-to-Be-the-Wizard-Audiobook/B00IIS32NI",
    series: {
      ...magic20,
      bookNum: 1
    },
    type: "headphones",
    duration: { hours: 10, minutes: 45 },
    narrator: "Luke Daniels"
  },
  {
    title: "Dark Matter",
    author: "Blake Crouch",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Dark-Matter-Audiobook/B01CUKULGA",
    type: "headphones",
    duration: { hours: 10, minutes: 8 },
    narrator: "Jon Lindstrom"
  },
  {
    title: "The End of All Things",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/The-End-of-All-Things-Audiobook/B0118MY6JE",
    series: {
      ...oldMansWar,
      bookNum: 6
    },
    type: "headphones",
    duration: { hours: 11, minutes: 25 },
    narrator: "Tavia Gilbert, William Dufris, John Scalzi"
  },
  {
    title: "The Human Division",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/The-Human-Division-Audiobook/B00CPPQZJI",
    series: {
      ...oldMansWar,
      bookNum: 5
    },
    type: "headphones",
    duration: { hours: 14, minutes: 53 },
    narrator: "William Dufris"
  },
  {
    title: "Zoe's Tale",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Zoes-Tale-Audiobook/B002V5D4PA",
    series: {
      ...oldMansWar,
      bookNum: 4
    },
    type: "headphones",
    duration: { hours: 10, minutes: 0 },
    narrator: "Tavia Gilbert"
  },
  {
    title: "The Last Colony",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/The-Last-Colony-Audiobook/B002VA9CAQ",
    series: {
      ...oldMansWar,
      bookNum: 3
    },
    type: "headphones",
    duration: { hours: 9, minutes: 51 },
    narrator: "William Dufris"
  },
  {
    title: "Will Save the Galaxy for Food",
    author: "Yahtzee Croshaw",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Will-Save-the-Galaxy-for-Food-Audiobook/B06X3QQTFH",
    type: "headphones",
    duration: { hours: 10, minutes: 20 },
    narrator: "Yahtzee Croshaw"
  },
  {
    title: "Redshirts",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Redshirts-Audiobook/B007SP2LPM",
    type: "headphones",
    duration: { hours: 7, minutes: 41 },
    narrator: "Wil Wheaton"
  },
  {
    title: "The Ghost Brigades",
    author: "John Scalzi",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/The-Ghost-Brigades-Audiobook/B002V9ZFSK",
    series: {
      ...oldMansWar,
      bookNum: 2
    },
    type: "headphones",
    duration: { hours: 10, minutes: 25 },
    narrator: "William Dufris"
  },
  {
    title: "What If?",
    subtitle: "Serious Scientific Answers to Absurd Hypothetical Questions",
    author: "Randall Munroe",
    link:
      "https://smile.amazon.com/What-If-Scientific-Hypothetical-Questions/dp/0544272994",
    type: "book",
    pages: 320
  },
  {
    title: "Only Human",
    author: "Sylvain Neuvel",
    link:
      "https://www.audible.com/pd/Mysteries-Thrillers/Only-Human-Audiobook/B07B41P3D6",
    series: {
      ...themisFiles,
      bookNum: 3
    },
    type: "headphones",
    duration: { hours: 8, minutes: 43 },
    narrator: "William Hope, Charlie Anson, Laurence Bouvard, Adna Sablylich"
  },
  {
    title: "Children of Time",
    author: "Adrian Tchaikovsky",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Children-of-Time-Audiobook/B071Y9TTHC",
    type: "headphones",
    duration: { hours: 16, minutes: 31 },
    narrator: "Mel Hudson"
  },
  {
    title: "Zero Hour",
    author: "Craig Alanson",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Zero-Hour-Audiobook/B078RV7BWR",
    series: {
      ...expeditionaryForce,
      bookNum: 5
    },
    type: "headphones",
    duration: { hours: 17, minutes: 20 },
    narrator: "R.C. Bray"
  },
  {
    title: "Black Ops",
    author: "Craig Alanson",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Black-Ops-Audiobook/B075NMRZTR",
    series: {
      ...expeditionaryForce,
      bookNum: 4
    },
    type: "headphones",
    duration: { hours: 16, minutes: 44 },
    narrator: "R.C. Bray"
  },
  {
    title: "Trouble on Paradise",
    author: "Craig Alanson",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Trouble-on-Paradise-Audiobook/B072YT17GJ",
    series: {
      ...expeditionaryForce,
      bookNum: 3.5
    },
    type: "headphones",
    duration: { hours: 5, minutes: 48 },
    narrator: "R.C. Bray"
  },
  {
    title: "Paradise",
    author: "Craig Alanson",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Paradise-Audiobook/B071438NCM",
    series: {
      ...expeditionaryForce,
      bookNum: 3
    },
    type: "headphones",
    duration: { hours: 15, minutes: 53 },
    narrator: "R.C. Bray"
  },
  {
    title: "SpecOps",
    author: "Craig Alanson",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/SpecOps-Audiobook/B06W5861HP",
    series: {
      ...expeditionaryForce,
      bookNum: 2
    },
    type: "headphones",
    duration: { hours: 15, minutes: 50 },
    narrator: "R.C. Bray"
  },
  {
    title: "Columbus Day",
    author: "Craig Alanson",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Columbus-Day-Audiobook/B01N48VJFJ",
    series: {
      ...expeditionaryForce,
      bookNum: 1
    },
    type: "headphones",
    duration: { hours: 16, minutes: 23 },
    narrator: "R.C. Bray"
  },
  {
    title: "Dungeon Calamity",
    author: "Dakota Krout",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Dungeon-Calamity-Audiobook/B0799RFCCK",
    series: {
      ...divineDungeon,
      bookNum: 3
    },
    type: "headphones",
    duration: { hours: 13, minutes: 12 },
    narrator: "Vikas Adam"
  },
  {
    title: "Acceptance",
    author: "Jeff VanderMeer",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Acceptance-Audiobook/B00MX3Q2BS",
    series: {
      ...southernReach,
      bookNum: 3
    },
    type: "headphones",
    duration: { hours: 9, minutes: 38 },
    narrator: "Carolyn McCormick, Bronson Pinchot, Xe Sands"
  },
  {
    title: "Authority",
    author: "Jeff VanderMeer",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Authority-Audiobook/B00J8KWFOM",
    series: {
      ...southernReach,
      bookNum: 2
    },
    type: "headphones",
    duration: { hours: 10, minutes: 35 },
    narrator: "Bronson Pinchot"
  },
  {
    title: "Annihilation",
    author: "Jeff VanderMeer",
    link:
      "https://www.audible.com/pd/Sci-Fi-Fantasy/Annihilation-Audiobook/B00HYG9KMC",
    series: {
      ...southernReach,
      bookNum: 1
    },
    type: "headphones",
    duration: { hours: 6, minutes: 0 },
    narrator: "Carolyn McCormick"
  }
];

export default eighteen;
