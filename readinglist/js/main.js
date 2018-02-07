import books from './data/books.js';

(() => {
  const listEle = document.getElementById('book-list');
  books.forEach((year) => {
    const container = document.createElement('div');
    container.innerHTML = yearTmpl(year);
    listEle.appendChild(container);
  });

  function yearTmpl(year) {
    const books = Object.values(year)[0];
    return `
      <div>
        <h2>${Object.keys(year)[0]}</h2>
        <h3>Books read: ${books.length}</h3>
        ${bookTmpl(books)}
      </div>
    `;
  }

  function bookTmpl(books) {
    return books.map(book => {
      return `
        <div>
          <a href="${book.link}" target="_blank" rel="noopener">${book.title}</a>
          <span>
            by ${book.author}
          </span>
        </div>
      `;
    }).join('');
  };
})();
