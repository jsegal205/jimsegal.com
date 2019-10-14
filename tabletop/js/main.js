import games from "./games.js";

(() => {
  document.getElementById("game-count").innerText = games.length;

  const gameCardsEle = document.getElementById("game-cards");

  const gameCardTemplate = game => {
    return `<a class="card" href="${game.link}" target="_blank" rel="noopener">
    <img src="${game.image}" />
    <h3>${game.title}</h3>
    </a>`;
  };

  games
    .sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    })
    .forEach(game => {
      const container = document.createElement("article");
      container.innerHTML = gameCardTemplate(game);
      gameCardsEle.appendChild(container);
    });
})();
