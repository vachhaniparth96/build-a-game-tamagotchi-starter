console.log('js:loaded')

/*----- constants -----*/
// data that will not change, such as initial data states, animation names, image asset paths, etc.
const INIT_DATA = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
};
/*----- state variables -----*/
// State is the data that will change while the game is running
// let boredom; //integer
// let hunger; //integer
// let sleepiness; //integer

let state;

//HFM icebox features
let age; //integer
let cycles; //integer

let timer; //object, will store setInterval() id
let interval; //integer


/*----- cached elements  -----*/
const boredomStatEl = document.getElementById('boredom-stat'); //can also use querySelector
const hungerStatEl = document.getElementById('hunger-stat');
const tiredStatEl = document.getElementById('sleepiness-stat');

const gameButtonEl = document.querySelectorAll('#button-display button');

/*----- event listeners -----*/


/*----- functions -----*/
init ();

// Initialize all states, then call render()
function init() {
    state = {...INIT_DATA}
    age=0;
    cycles=0;
    interval=5000;
    timer = setInterval(runGame, interval)
    console.log('game started!');
    render();
}

function runGame() {
    // console.log('Game is running');
}
function render() {
    // console.log('rendering game');
}
