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
    if (numPlayers < 1 || numCP < 0 || numScore < 1 || numTurn < 3) {
      return 'Invalid starting values';
    }
    
    let players = [];

    for(let i = 1; i <= numPlayers; i++) {
      players.push(new Player(i, numCP));
    }

    UI.game = new Game(players, numTurn, numScore, numCP);
    return 'Game start.';
  }

  static clearStartForm() {
    let children = UI.startMenuEle.children;

    for(let i = 0; i < children.length; i++) {
      let inputEle = children[i]['lastElementChild'];

      if(inputEle.type !== 'submit') {
        inputEle.value = '';
      }
    }
  }

  constructor() {
    UI.startMenuEle.addEventListener("submit", e => {
      e.preventDefault();

      alert(UI.getStartingInfo(UI.playerNumEle.value, UI.cpNumEle.value,
        UI.scoreLimitEle.value, UI.turnLimitEle.value));

      UI.clearStartForm();
    });
  }

  static game;
}

let currentUI = new UI();