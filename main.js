class Game {
  constructor(players, turns, scoreLimit, cpStart) {
    this.players = players;
    this.turns = turns;
    this.scoreLimit = scoreLimit;
    this.cpMax = cpStart;
  }
}

class Player {
  constructor(number, commandPoints) {
    this.number = number;
    this.commandPoints = commandPoints;
    this.score = 0;
  }
}