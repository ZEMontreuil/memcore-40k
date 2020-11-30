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

class UI {
  static startMenuEle = document.querySelector('.start-menu');
  static playerNumEle = UI.startMenuEle.querySelector('#starting-players');
  static cpNumEle = UI.startMenuEle.querySelector('#starting-cp');
  static scoreLimitEle = UI.startMenuEle.querySelector('#score-limit');
  static turnLimitEle = UI.startMenuEle.querySelector('#turn-limit');

  static getStartingInfo (numPlayers, numCP, numScore, numTurn) {
    // *** TODO *** 
    // create new player for each number of players
    // add them to new game 
  }

  constructor() {
    UI.startMenuEle.addEventListener("submit", e => {
      e.preventDefault();

      UI.getStartingInfo(UI.playerNumEle.value, UI.cpNumEle.value,
        UI.scoreLimitEle.value, UI.turnLimitEle.value);
    });
  }

  static game;
}

let currentUI = new UI();