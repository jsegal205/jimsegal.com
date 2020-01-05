(async () => {
  const gameCardsEle = document.getElementById("game-cards");

  const response = await fetch(
    "https://data.heroku.com/dataclips/donygkplrgieljfwbfisudzjmirb.json"
  )
    .then(response => {
      if (!response.ok) {
        throw new Error("Error getting games list.");
      }
      return response;
    })
    .catch(error => {
      gameCardsEle.innerHTML = "Error getting games list.";
      console.log(error);
    });

  const gamesJson = await response.json();
  const games = gamesJson.values.map(game => {
    return { title: game[0], link: game[1], image: game[2] };
  });

  document.getElementById("game-count").innerText = games.length;

  const gameCardTemplate = game => {
    return `<a class="card" href="${game.link}" target="_blank" rel="noopener">
    <img src="${game.image}" />
    <h3>${game.title}</h3>
    </a>`;
  };

  gameCardsEle.innerHTML = null;
  games.forEach(game => {
    const container = document.createElement("article");
    container.innerHTML = gameCardTemplate(game);
    gameCardsEle.appendChild(container);
  });
})();
