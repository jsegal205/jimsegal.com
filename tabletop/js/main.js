(async () => {
  const gameCardsEle = document.getElementById("game-cards");
  const gameCardTemplate = game => {
    return `<a class="card" href="${game.link}" target="_blank" rel="noopener">
    <img src="${game.image}" />
    <h3>${game.title}</h3>
    </a>`;
  };

  const drawGames = games => {
    gameCardsEle.innerHTML = null;
    games.forEach(game => {
      const container = document.createElement("article");
      container.innerHTML = gameCardTemplate(game);
      gameCardsEle.appendChild(container);
    });

    if (!games.length) {
      gameCardsEle.innerHTML = "No games found";
    }

    document.getElementById("game-count").innerText = games.length;
  };

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
  const allGames = gamesJson.values.map(game => {
    return { title: game[0], link: game[1], image: game[2] };
  });

  const searchEle = document.getElementById("games-filter");
  const filterGames = e => {
    const filteredGames = allGames.filter(game =>
      game.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    drawGames(filteredGames);
  };
  searchEle.addEventListener("input", filterGames, false);

  const randomGameEle = document.getElementById("random-game");
  const randomGame = () => {
    searchEle.value = "";
    const randomGameIndex = Math.floor(
      Math.random() * Math.floor(allGames.length - 1)
    );
    drawGames([allGames[randomGameIndex]]);
  };
  randomGameEle.addEventListener("click", randomGame, false);

  const resetGameEle = document.getElementById("reset-game");
  const resetGame = () => {
    searchEle.value = "";
    drawGames(allGames);
  };
  resetGameEle.addEventListener("click", resetGame, false);

  drawGames(allGames);
})();
