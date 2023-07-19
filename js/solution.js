// script.js

/*----- constants -----*/
/*----- state variables -----*/
let boredom;  // integer
let hunger;  // integer
let sleepiness;  // integer 

let age // integer
let cycles // integer

let timer // object
let interval // integer

/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat")
const hungerStatEl = document.querySelector("#hunger-stat")
const sleepyStatEl = document.querySelector("#sleepiness-stat")

const gameBtnEls = document.querySelectorAll("button")

/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  
  boredom = 0;  // integer
  hunger = 0;  // integer
  sleepiness =0 ;  // integer
  age = 0; // integer
  cycles = 0;  // integer

  interval = 5000 // integer
  timer = setInterval(runGame, interval)// object
  
}

function render() {
  renderStats()
}