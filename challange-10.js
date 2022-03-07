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

// 1. Create players array
const [players1, players2] = game.players;
// 2. Create gk and other players arr
const [gk, ...fieldPlayers] = players1;
// 3. allPlayers array containing all players of both team
const allPlayers = [...players1, ...players2];
// 4. substitute pllayers for team 1
const players1Final = [...players1, "Thiago", "Couinho", "Perisic"];
// 5. game.odds obj create three variables
const {
  odds: { team1, x: draw, team2 },
} = game;
// 6. printGoals function
const printGoals = (...playerNames) => {
  playerNames.map((player) => {
    console.log(player);
  });
  let goals = playerNames.length;
  console.log(goals);
};
printGoals("Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Vishesh");

// 7. lower odd team wins
team1 < team2 && console.log("Team 1 more likely to win");
team1 > team2 && console.log("Team 2 more likely to win");
