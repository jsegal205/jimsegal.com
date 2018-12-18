import books from "./data/books.js";
import * as allSeries from "./data/series.js";

(() => {
  const bookListEle = document.getElementById("book-list");
  const seriesListEle = document.getElementById("series-list");

  const anchorTmpl = (link, desc) => {
    return `<a href="${link}" target="_blank" rel="noopener">${desc}</a>`;
  };

  const mapBookType = type => {
    switch (type) {
      case "headphones":
        return "audiobook";
      default:
        return type;
    }
  };

  const listenedToCount = books => books.filter(book => book.type === "headphones").length;
  const readCount = books => books.filter(book => book.type === "book").length;

  const yearTmpl = year => {
    const books = Object.values(year)[0];
    return `
    <h2>${Object.keys(year)[0]}</h2>
    <h3>Books read: ${books.length}</h3>
    <p>Listened To: ${listenedToCount(books)} Read: ${readCount(books)}</p>
    <ul>
    ${bookTmpl(books)}
    </ul>
    `;
  };

  const bookTmpl = books => {
    return books
      .map(book => {
        return `
      <li class="book">
      ${anchorTmpl(book.link, book.title)}
      ${book.type ? `<i class="fa fa-${book.type}" title="${mapBookType(book.type)}"></i>` : ""}
      <span> by ${book.author}</span>
      ${book.series ? seriesTmpl(book.series) : ""}
      </li>
      `;
      })
      .join("");
  };

  const seriesTmpl = series => {
    return `
    <div class="series">
    <span>Book ${series.bookNum} of </span>
    ${anchorTmpl(series.link, series.title)}
    </div>
    `;
  };

  Object.keys(allSeries).forEach(key => {
    const series = allSeries[key];
    const seriesItem = document.createElement("li");
    seriesItem.className = "book";
    seriesItem.innerHTML = anchorTmpl(series.link, series.title);
    seriesListEle.appendChild(seriesItem);
  });

  books.forEach(year => {
    const container = document.createElement("article");
    container.innerHTML = yearTmpl(year);
    bookListEle.appendChild(container);
  });
})();
