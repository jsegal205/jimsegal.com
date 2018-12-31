import eighteen from "./2018.js";
import seventeen from "./2017.js";
import sixteen from "./2016.js";
import fourteen from "./2014.js";
import thirteen from "./2013.js";
import twelve from "./2012.js";
import prior from "./prior.js";

const books = [
  { 2018: eighteen, recap: "https://gist.github.com/jsegal205/b8061446c6d887e4015362127f2db2e0" },
  { 2017: seventeen },
  { 2016: sixteen },
  { 2015: [] },
  { 2014: fourteen },
  { 2013: thirteen },
  { 2012: twelve },
  { "2011 and prior": prior }
];

export default books;
