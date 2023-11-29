const videoGames = [
  {
    id: 1,
    name: "Space Adventure",
    description: "Explore distant galaxies",
    consoles: ["PlayStation", "Xbox"],
    releaseYear: 2020,
    numPlayers: 1,
  },
  {
    id: 2,
    name: "Mystery Island",
    description: "Solve puzzles on an island",
    consoles: ["PC", "Xbox"],
    releaseYear: 2021,
    numPlayers: 1,
  },
  {
    id: 3,
    name: "Racers Unleashed",
    description: "High-speed racing action",
    consoles: ["PlayStation", "Xbox", "PC"],
    releaseYear: 2019,
    numPlayers: 4,
  },
  {
    id: 4,
    name: "Alien Invasion",
    description: "Defend Earth from aliens",
    consoles: ["PlayStation"],
    releaseYear: 2018,
    numPlayers: 2,
  },
  {
    id: 5,
    name: "Zombie World",
    description: "Survive in a zombie apocalypse",
    consoles: ["PC"],
    releaseYear: 2022,
    numPlayers: 5,
  },
];

/**
 * Finds a game by its name.
 * Use the .find() array method to locate the game.
 * @param {string} name - The name of the game to find.
 * @returns {Object | undefined} The game object if found, otherwise undefined.
 */
function findGameByName(name) {
  return videoGames.find(game => game.name === name);
}

/**
 * Retrieves all games available on PlayStation.
 * Use the .filter() array method to filter the games.
 * @returns {Object[]} An array of game objects available on PlayStation.
 */
function gamesOnPlayStation() {
  return videoGames.filter(game => game.consoles.includes("PlayStation"));
}

/**
 * Gets the names of all games in the dataset.
 * Use the .map() array method to create an array of names.
 * @returns {string[]} An array of names of all games.
 */
function getAllGameNames() {
  return videoGames.map(game => game.name);
}

/**
 * Calculates the total number of players across all games.
 * Use the .reduce() array method to sum up the players.
 * @returns {number} The total number of players.
 */
function totalNumberOfPlayers() {
  return videoGames.reduce((totalPlayers, game) => totalPlayers + game.numPlayers, 0);
}

/**
 * Retrieves all games released after the year 2019.
 * Use the .filter() array method to filter the games.
 * @returns {Object[]} An array of game objects released after 2019.
 */
function gamesReleasedAfter2019() {
  return videoGames.filter((game) => game.releaseYear > 2019);
}

/**
 * Updates the description of a specified game.
 * Use the .find() array method to locate the game.
 * @param {string} name - The name of the game to update.
 * @param {string} newDescription - The new description for the game.
 */
function updateGameDescription(name, newDescription) {
  const updateGames = videoGames.find((game) => game.name === name);
  if(updateGames) {
    updateGames.description = newDescription;
    return "New Description"
} else {
  return "Game Unfound"
}
}

/**
 * Creates a list of games with the count of consoles they are available on.
 * Use the .map() array method to create the new array.
 * @returns {Object[]} An array of objects with game name and console count.
 */
function gamesWithConsoleCount() {
  const result = videoGames.map((game) => {
    return {
      name: game.name,
      consoleCount: game.consoles.length,
    };
  });
  return result;
  }

/**
 * Finds the game with the maximum number of players.
 * Use the .reduce() method to determine the game with the most players.
 * @returns {Object} The game object with the maximum number of players.
 */
function gameWithMaxPlayers() {
  return videoGames.reduce((maxPlayers, currentGamers) => currentGamers.numPlayers > maxPlayers.numPlayers ? currentGamers : maxPlayers)
};

/**
 * Retrieves games available on both PC and Xbox.
 * Use the .filter() array method to filter the games.
 * @returns {Object[]} An array of game objects available on both PC and Xbox.
 */
function gamesOnPCAndXbox() {
  return videoGames.filter(game => game.consoles.includes("PC") && game.consoles.includes("Xbox"))
};

/**
 * Counts the number of games released each year.
 * Use the .reduce() method to count games per year.
 * @returns {Object} An object with years as keys and counts as values.
 */
function countGamesByYear() {
  return videoGames.reduce((countByYr, {releaseYear}) => {
    countByYr[releaseYear] = (countByYr[releaseYear] || 0) + 1
    return countByYr;
  }, {});
}

module.exports = {
  findGameByName,
  gamesOnPlayStation,
  getAllGameNames,
  totalNumberOfPlayers,
  gamesReleasedAfter2019,
  updateGameDescription,
  gamesWithConsoleCount,
  gameWithMaxPlayers,
  gamesOnPCAndXbox,
  countGamesByYear,
};
