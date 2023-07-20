<img src="https://i.imgur.com/B3jbImk.jpg">

# Let's Code Tamagotchi!

## Intro

So far, we've covered the fundamentals of:

- HTML
- CSS
- JavaScript
- The DOM

Now let's bring these technologies together and learn more about programming as we code the fun game of [Tamagotchi]()!

As I code, I will be following the concepts we covered in the [Guide on How to Build a Browser Game](https://gist.github.com/jim-clark/6f1919291f6007b2c0b2c93d925d6bac).

In addition, I will be describing my thought process as we make programming decisions in regards to using data structures, coding functions, etc.

I hope you're as excited as I am - let's get started!

## Planning & Project Setup

### 1. Analyze the app's functionality

Hopefully, you're aware of how Tamagotchi is played.

If not, you can read about it [here]), but in summary:

- It's a one player game.
- The player is tasked with keeping a creature alive as long as possible.
- Each creature a player 'raises' has three main statistics; the stats are:
    - Boredom
    - Hunger
    - Sleepiness
- To keep the creature alive, a player must keep 3 stats within a given range, either greater than 0 or below a certain threshold.

### 2. Determine the overall design (look & feel) of the app
	
Our game of Tamagotchi is going to have a clean/minimalist UI.

### 3. Wireframe the UI
 
Wireframes provide a blueprint for the HTML & CSS.

They also help reveal what state variables need to be defined.

Here's the wireframe that will guide us today:


<table>
<tr>
<th style="text-align: center"> 
  
  **Game Start** 
</th>

<th style="text-align: center"> 
  
  **Game Over** 
</th>
</tr>
<tr>
<td>

![](./assets/game-start.png)

</td>
<td>

![](./assets/game-over.png)
</td>
</tr>
</table>

### 4. Pseudocode

Pseudocode outlines the app's logic using plain language. It provides a road map to writing the code itself.
   
I'll regularly be typing pseudocode as comments within the functions as I code.

### 5. Identify the application's state (application-wide data)
	
What information does the application need to "remember" throughout its execution?

Use the wireframe and pseudocode to help identify what state needs to be tracked.

### 6. Set up the project

To make it easier for you to share your code and for instructional team to check it, we'll start with an existing repository, which includes HTML/CSS/JS boilerplate. Alternatively, you can create an HTML/CSS/JS-based Repl on [replit.com](https://replit.com/~) and name it **Tamagotchi Game**.

### 7. **Organize the app's JS into sections**

Copy/paste the following comment headings to help you organize your app's code:

```js
/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/

```

The above headings are gold!

> 🚀 With the setup complete, please navigate to the next page where we will begin the code-along!

## Code away!

Again, programming is as much art as science.

I'm going to be developing from scratch while following the process described in Guide on How to Build a Browser Game!

### Start with some HTML & CSS

Our goal is to code the HTML & CSS that results in a UI that looks like our wireframe.

![](./assets/game-start.png)

We will need to add elements in **index.html** for the following from top to bottom:

- The heading
- Three buttons
- The stat label 
- The stat values 

We will also include: 

- The Tama graphic
- A gameover message
- A restart button

If an element's content is going to come from the `render()` function, you may want to temporarily include mocked content in the HTML to help with layout and styling. However, once the content is being provided by the `render()` function, you should remove the mocked content from **index.html**.

Along the way, we'll code CSS in **style.css** to layout and style the UI.
	
<details>
<summary>
 Example HTML / CSS / JS starter code 
</summary>

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="./js/main.js" defer></script>
</head>
<body>

    <header>
        <h1 class="game-title">Tamagotchi Code Along</h1>
    </header>

    <main class="container">
         <!-- game interface / UI section -->
        <section id="controller" class="button-wrapper">
            <button>play</button>
            <button>feed</button>
            <button>sleep</button>
        </section>

        <!-- game data section -->
        <section id="stat-display" class="stats-wrapper">
            <p >Happiness: <span id="boredom-stat">...</span></p>
            <p >Hunger: <span id="hunger-stat">...</span></p>
            <p >Tiredness: <span id="sleepiness-stat">...</span></p>
        </section>

        <!-- game display / messaging section -->
        <section id="game-state" class="game-state-wrapper">
            <h2 id="tama-message" class="hidden">Oh no! You starved!</h2>
            <img id="tama-graphic" src="../imgs/wolf-1.png" class="game-graphic" />
            <button id="restart" class="hidden">Play Again</button>
        </section>
    </main>

</body>

</html>
```

```css
/* style.css */

/* background color: #e6e6e6 */
/* button color:  #4597f8*/

/* global styles  */
*{
    box-sizing: border-box;
}

body{
    min-height: 100vh;
    background-color: #e6e6e6;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
}

/* element styles */
h1{
    font-size: 3.5rem;
}
h2 {
    font-size: 1.7rem;
}

/* layout */
.container {
    max-width: 90vw;
    margin: 0 auto;
}

.button-wrapper{
    display: flex;
    justify-content: space-around;
}

.stats-wrapper{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    text-align: center;
}

.game-state-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
}

/* headings */
.game-title{
    text-align: center;
}

/* button styling*/
button{
    font-size: 1.5rem;
    line-height: 1em;
    padding: 1.5rem;
    background-color: #4597f8;
    color: white;
    border: 0;
    border-radius: .5rem;
    transition: background-color 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
button:active{
    background-color: #2e6bb6;
}

/* images */
#tama-graphic{
 max-height: 33vmin;
}
.hidden{
    visibility: hidden;
}

#tama-graphic:hover {

    /* source: https://www.w3schools.com/howto/howto_css_shake_image.asp */
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 0.5s;
  
    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
  }
  
  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); 
    }
  }

```

```js

/*----- constants -----*/


/*----- state variables -----*/


/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/


```

</details>


### Initialize the State Variables

Declare, but don't initialize, the application-wide state variables.

The initialization of the variables to their "initial" state should be done within an `initialize()`, or similarly named function, e.g., `init()`.
	
Write that `init()` function.
	
Invoke `init()` to "kick off" the app.

Now that the `init()` function has initialized the state variables. 

We will also initialize our async game logic using a `setInterval` with calls a `runGame` function 

The last line in `init()` should call `render();` to render that state to the DOM for the first time.


```js
// script.js


/*----- state variables -----*/
let boredom;  // integer
let hunger;  // integer
let sleepiness;  // integer 

let age // integer
let cycles // integer

let timer // object
let interval // integer

/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  
}


```

Next, let's capture the dom elements that will be used in our game 

```js
/*----- cached elements  -----*/

const boredomStatEl = document.querySelector("#boredom-stat");
const hungerStatEl = document.querySelector("#hunger-stat");
const sleepyStatEl = document.querySelector("#sleepiness-stat");

const gameMessageEl = document.querySelector("#tama-message");

const gameBtnEls = document.querySelectorAll("button");
const gamePlayAgainEl = document.querySelector("#restart");


```
After that, let's add an `INIT_STATE` object that will provide our starting values for our state variable. 


```js
// script.js
/*----- constants -----*/

const INIT_STATE = {
  boredom: 0,
  hunger: 0,
  sleepiness: 0,
};

// ... other code ... 

/*----- functions -----*/
init();

// Initialize all state, then call render()
function init() {
  
  state = {...INIT_STATE} // create a copy of the default data

  age = 0; // integer
  cycles = 0;  // integer

  interval = 5000 // integer
  timer = setInterval(runGame, interval)// object
  
  render()
}



```


### Stub  the `runGame()` function

```js

function runGame(){

}

```

### Stub up the main `render()` function.
  




### Call and code a `renderStat()` function.

```js
function render() {
  renderStats()
}

function renderStats(){
  boredomStatEl.textContent = state.boredom;
  hungerStatEl.textContent = state.hunger;
  sleepyStatEl.textContent = state.sleepiness;
}

```

### Code the `gameOver()` function


### Code the `handleBtnClick` event listener function

> _"In response to user interaction, update all impacted state, then call render()"_

Time to handle when the user clicks a game button!

Let's add an event listener for when the `[Play]` `[Eat]` `[Sleep]` buttons is clicked are clicked .

```js 

// example of event listener



```
### Code the `gameOver()` UI updates

```js

```


Congrats on coding a cool game of Tamagotchi! 🎉

Hopefully, you're inspired to apply the process we followed today to code another game!

<br>
<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

```js

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

```

</details>


### Icebox Features 


- Code the `ageUp()` function

- Add a `Game Engine` for added dynamic UI