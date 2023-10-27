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

// const startButton = document.getElementById('start');
const gameButtonEl = document.querySelectorAll('#button-display button');

/*----- event listeners -----*/
gameButtonEl.forEach(function(btn) {
    btn.addEventListener('click', handleClick)
})
function handleClick(e){
    console.log(e.target.innerHTML)

    const convertName = {
        feed: "hunger",
        sleep: "sleepiness",
        play: "boredom"
    }

    const key = convertName[e.target.innerText];
    console.log(key)

    updateStat(key, -3);

    render();
}

/*----- functions -----*/
init ();

// Initialize all states, then call render()
function init() {
    // if(e.target.innerHTML === 'start'){
        state = {...INIT_DATA}
        age=0;
        cycles=0;
        interval=5000;
        timer = setInterval(runGame, interval)
        console.log('game started!');
        render()
    // }
}

function runGame() {
    // console.log('Game is running');
    cycles++;

    if(continueGame()) {
        updateStats();
    } else {
        gameOver();
    }
    render();
}
function render() {
    // console.log('rendering game');
    renderStats();
}

function renderStats() {
    boredomStatEl.textContent=state.boredom
    hungerStatEl.textContent=state.hunger
    tiredStatEl.textContent=state.sleepiness
}

function updateStats() {
    // let currentValue = state[key]
    for(key in state) {
        // let randomUpdate = Math.floor(Math.random()*3)
        // state[key] = currentValue + randomUpdate;
        // console.log(key, state[key], randomUpdate)
    updateStat(key, Math.floor(Math.random()*3))
    }
}

function updateStat(stat,value) {
    if(state[stat] + value >= 0){
    state[stat]+= value
    } else {
        state[stat] = 0;
    }
}

function continueGame() { //Check all properteies of each state, evaluate if any properties reach 10. If not, continue game, if so, game over.
    const testGame = Object.values(state).every((stat) => stat < 10);
    return testGame;
}

function gameOver() {
    alert('Game Over!')
    clearInterval(timer)
    init();
}

