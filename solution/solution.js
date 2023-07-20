// script.js

/*----- constants -----*/

const INIT_STATE = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

// game engine - icebox feature

/*----- state variables -----*/
let state;

let age; // integer
let cycles; // integer

let timer; // object
let interval; // integer

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

const gameMessageEl = document.querySelector("#tama-message");

const gameBtnEls = document.querySelectorAll("button");
const gamePlayAgainEl = document.querySelector("#restart");

/*----- event listeners -----*/
gameBtnEls.forEach((btn) => btn.addEventListener("click", handleBtnClick));
gamePlayAgainEl.addEventListener("click", init);

/*----- functions -----*/

function handleBtnClick(e) {
  const convertProp = {
    feed: "hunger",
    sleep: "sleepiness",
    play: "boredom",
  };
  const btnText = convertProp[e.target.innerText];
  const newValue = -1 * (3 + Math.floor(Math.random() * 3));

  updateStat(btnText, newValue);

  render();
}

// Initialize all state, then call render()
function init() {
  resetUI();
  state = { ...INIT_STATE };

  // Icebox - add aging cycle

  age = 0; // integer
  cycles = 0; // integer

  interval = 1000; // integer
  timer = setInterval(runGame, interval); // object

  render();
}

function render() {
  renderStats();
  // Icebox - add conditional animations function call
}

function renderStats() {
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;
}

function runGame() {
  cycles++;

  if (continueGame()) {
    updateStats();
    // Icebox - call checkAge helper function to age up Tama
  } else {
    return gameOver();
  }

  render();
}

function continueGame() {
  const testGame = Object.values(state).every((stat) => stat < 10);
  return testGame;
}

function updateStats() {
  for (key in state) {
    updateStat(key, Math.floor(Math.random() * 3));
  }
}

function updateStat(stat, value) {
  if (state[stat] + value >= 0) {
    state[stat] += value;
  } else {
    state[stat] = 0;
  }
}

function gameOver() {
  // alert player game over
  gamePlayAgainEl.classList.remove("hidden");
  gameMessageEl.classList.remove("hidden");

  // stop timer
  clearInterval(timer);
}

function resetUI() {
  gamePlayAgainEl.classList.add("hidden");
  gameMessageEl.classList.add("hidden");
}

init();
