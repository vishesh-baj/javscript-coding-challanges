"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over game.scored and priny name to concole with goal
// for (const score of game.scored.entries()) {
//   console.log(`Goal ${score[0] + 1}: ${score[1]}`);
// }

// 2. Calculate average odd and print to console

const calcAverage = (obj) => {
  const objArr = Object.entries(obj);
  const totalOdds = objArr.length;
  let totalOddsScore = 0;

  for (const odd of objArr) {
    totalOddsScore += odd[1];
  }
  const average = totalOddsScore / totalOdds;
  console.log(average);
};
// calcAverage(game.odds);

// 3. Printg all odds in nicely formatted string

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of${teamString} ${odd}`);
}
