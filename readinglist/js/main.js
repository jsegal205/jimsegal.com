import books from './data/books.js';

(() => {
  const listEle = document.getElementById('book-list');
  books.forEach((year) => {
    const container = document.createElement('div');
    container.innerHTML = yearTmpl(year);
    listEle.appendChild(container);
  });

  function anchorTmpl(link, desc) {
    return `<a href="${link}" target="_blank" rel="noopener">${desc}</a>`;
  }

  function yearTmpl(year) {
    const books = Object.values(year)[0];
    return `
      <section>
        <h2>${Object.keys(year)[0]}</h2>
        <h3>Books read: ${books.length}</h3>
        <ul>
          ${bookTmpl(books)}
        </ul>
      </section>
    `;
  }

  function bookTmpl(books) {
    return books.map(book => {
      return `
        <li class="book">
          ${anchorTmpl(book.link, book.title)}
          <span> by ${book.author}</span>
          ${book.series ? seriesTmpl(book.series) : ''}
        </li>
      `;
    }).join('');
  };

  function seriesTmpl(series) {
    return `
      <div class="series">
        <span>Book ${series.bookNum} of </span>
        ${anchorTmpl(series.link, series.title)}
      </div>
    `;
  };
})();
