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

    if (games.length != allGames.length) {
      if (resetGameEle.classList.contains("hidden")) {
        resetGameEle.classList.remove("hidden");
      }
    } else {
      resetGameEle.classList.add("hidden");
    }
  };

  const response = await fetch("https://api.jimsegal.com/games")
    .then(response => {
      if (!response.ok) {
        throw new Error(
          `Error getting games list. Returned ${response.statusText}`
        );
      }
      return response;
    })
    .catch(error => {
      gameCardsEle.innerHTML = "Error getting games list.";
      throw new Error(error);
    });

  const allGames = await response.json();
  const searchEle = document.getElementById("games-filter");
  const filterGames = e => {
    const inputVal = e.target.value.toLowerCase();
    const filteredGames = allGames.filter(game =>
      game.title.toLowerCase().includes(inputVal)
    );

    gtag("event", "filtered", {
      event_category: "games",
      event_label: inputVal
    });

    drawGames(filteredGames);
  };
  searchEle.addEventListener("input", filterGames, false);

  const randomGameEle = document.getElementById("random-game");
  const randomGame = () => {
    searchEle.value = "";
    const randomGameIndex = Math.floor(
      Math.random() * Math.floor(allGames.length - 1)
    );

    const chosenGame = allGames[randomGameIndex];
    gtag("event", "random picked", {
      event_category: "games",
      event_label: chosenGame.title
    });

    drawGames([chosenGame]);
  };
  randomGameEle.addEventListener("click", randomGame, false);

  const resetGameEle = document.getElementById("reset-game");
  const resetGame = () => {
    searchEle.value = "";

    gtag("event", "reset", {
      event_category: "games"
    });

    drawGames(allGames);
  };
  resetGameEle.addEventListener("click", resetGame, false);

  drawGames(allGames);
})();
