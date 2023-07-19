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
- The stat numbers
- The Tama graphic

If an element's content is going to come from the `render()` function, you may want to temporarily include mocked content in the HTML to help with layout and styling. However, once the content is being provided by the `render()` function, you should remove the mocked content from **index.html**.

Along the way, we'll code CSS in **style.css** to layout and style the UI.
	
<details>
<summary>
 🆘 Click for help if you've tried but unable to get your project to look like mine.
</summary>

```html
<!-- index.html -->
<html>
</html>
```

```css
/* style.css */

* {
  box-sizing: border-box;
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

> 🚀 Please navigate to the next page where we will declare and initialize the state variables in **script.js**...

### Initialize the State Variables

Declare, but don't initialize, the application-wide state variables.

The initialization of the variables to their "initial" state should be done within an `initialize()`, or similarly named function, e.g., `init()`.
	
Write that `init()` function.
	
Invoke `init()` to "kick off" the app.

Now that the `init()` function has initialized the state variables. 

We will also initialize our async game logic using a `setInterval` with calls a `runGame` function 

The last line in `init()` should call `render();` to render that state to the DOM for the first time.

<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

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

function render() {
  
}


function runGame(){
    
}
```

</details>

> 🚀 Please navigate to the next page where we will code the `render()` function...

### Code the `render()` function

Stub up the main `render()` function.
  
Call and code a `renderStat()` function.



<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

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

```
</details>

### Code the `runGame` function

Stub up the main `render()` function.
  
Call and code a `renderStat()` function.


<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>
</details>

### Code the `gameOver()` function


<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>
</details>

	
### Code the `handleBtnClick` event listener function

> _"In response to user interaction, update all impacted state, then call render()"_

Time to handle when the user clicks a game button!

We'll be sure to use event delegation.
	
Let's add an event listener for when the `[Play]` `[Eat]` `[Sleep]` buttons is clicked are clicked .

```js 

// example of event delegation

```

<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

```js

// add solution code

```

</details>

### Code the `ageUp()` function

<details>
<summary>
 🆘 Click for help if you've tried but unable to get your code to run successfully.
</summary>

```js

// add solution code 
```

</details>

Congrats on coding a cool game of Tamagotchi!

Hopefully, you're inspired to apply the process we followed today to code another game!

> 🚀 Please navigate to the next page where you will submit the link to your Repl...