---
title: Snake Game
year: 2020
draft: false
lang: js
slug: snakegame
number: 3
---

## Workshop 3: Snake Game

### Step 1: Setting up the files and coding for HTML

Today we will also be incorporating java script for the first time!

To start, create three files: `index.html` `snake_game.css` `snake_game.js`

Next, open the `index.html` file. First, we will declare a doctype. We’re using html as our coding language, so we will type

```html
<!DOCTYPE html>
```

Now, we will create the shell of the webpage. Start with the `<html>` tag. And then declare a `<head>` tag as your next line

Within the head tag, declare the title as

```html
<title>Snake v8</title>
```

Then, you are going to link the styles to the css section of your code which you will later be writing
To do so, write:

```html
<link rel = “stylesheet” type = “text/css” href=”snake_game.css” />
```

Then, end the head tag

Next you have to work on developing your body tag `<body>`

Under the name body, start a div tag and name it gameContainer to name the main game board:

```html
<div id="gameContainer"></div>
```

Then end the body tag in the next line by typing </body>

Then link this code to the javascript file by writing:

```html
<script src="snake_game.js"></script>
```

Lastly end the html tag by writing `</html>` and the html portion of your code is now complete!

### Step 2: CSS

We’ll use css to style the gameboard, snake and food.

To style the gameboard, create a grid of 40x40 game pixels

Play around to create different themes

```css
body {
  background-color: darkslategrey;
  text-align: center;
}
#gameContainer {
  /*
    width and height of .gameBoardPixel should 1/40 of the width and height of #gameContainer,
    because it is used in calculation in the jscript.js file
    */
  width: 40vw;
  height: 40vw;
  margin: 2vw auto;
  background-color: #0c1021;
  border: solid 10px slategrey;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.6);
}

.gameBoardPixel {
  /* background-color: slategrey; */
  /*
    width and height of .gameBoardPixel should 1/40 of the width and height of #gameContainer,
    because it is used in calculation in the jscript.js file
    */
  width: 1vw;
  height: 1vw;
  border-radius: 10px;
  float: left;
}
```

To style the snake, color the pixels of the snake’s body and add a drop shadow

```css
.snakeBodyPixel {
  background-color: #fd6401;
  box-shadow: 0 0 5px #fd6401;
}
```

Give the food a color (we chose green)

```css
.food {
  background-color: #68e768;
}
```

### Step 3: Game Logic with Javascript

You’ll need to know a new function notation, called an arrow function. It is essentially just a shorter way to write function syntax. You can read a simple explanation [here](https://www.w3schools.com/js/js_arrow_function.asp)

In your `snake_game.js` file, code the Game Board pixels

```js
const gameContainer = document.getElementById("gameContainer");
const createGameBoardPixels = () => {
  // Populate the [#gameContainer] div with small div's representing game pixels
  for (let i = 1; i <= 1600; ++i) {
    gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;
  }
};
```

// This variable always holds the updated array of game pixels created by createGameBoardPixels() :
const gameBoardPixels = document.getElementsByClassName("gameBoardPixel");

For the food, we must remove the previous food, spawn a new food in a random position, and then update (add) the food to the game board

```js
let currentFoodPosition = 0; // Initially set to 0
const createFood = () => {
  // Remove previous food;
  gameBoardPixels[currentFoodPosition].classList.remove("food");

  // Create new food
  currentFoodPosition = Math.random();
  currentFoodPosition = Math.floor(currentFoodPosition * 1600);
  gameBoardPixels[currentFoodPosition].classList.add("food");
};
```

To implement using arrow keys to change direction, use the key codes for the arrow keys to assign them to a direction.

```js
// Direction codes (Keyboard key codes for arrow keys):
const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;
```

Then, make a changeDirection function that accepts newDirectionCode as a parameter and use if statements to set the snake’s current direction to the new direction.

```js
// Set snake direction initially to right
let snakeCurrentDirection = RIGHT_DIR;

const changeDirection = (newDirectionCode) => {
  // Change the direction of the snake
  if (newDirectionCode == snakeCurrentDirection) return;
  if (newDirectionCode == LEFT_DIR && snakeCurrentDirection != RIGHT_DIR) {
    snakeCurrentDirection = newDirectionCode;
  } else if (newDirectionCode == UP_DIR && snakeCurrentDirection != DOWN_DIR) {
    snakeCurrentDirection = newDirectionCode;
  } else if (
    newDirectionCode == RIGHT_DIR &&
    snakeCurrentDirection != LEFT_DIR
  ) {
    snakeCurrentDirection = newDirectionCode;
  } else if (newDirectionCode == DOWN_DIR && snakeCurrentDirection != UP_DIR) {
    snakeCurrentDirection = newDirectionCode;
  }
};
```

To program the snake’s movement, initialize the starting positions, then use a switch statement to implement the 4 directions of possible movement.

```js
// Let the starting position of the snake be at the middle of game board
let  currentSnakeHeadPosition  =  799;
let  snakeLength  =  1000; // Initial length of the snake = 1000

// Move snake continuously by calling this function repeatedly :
const  moveSnake  = () => {
    switch (snakeCurrentDirection) {
        case  LEFT_DIR:
            --currentSnakeHeadPosition;
            const  isSnakeHeadAtLastGameBoardPixelTowardsLeft  = currentSnakeHeadPosition  %  40  ==  39  ||  currentSnakeHeadPosition  <  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsLeft) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  40;
            }
            break;

        case  UP_DIR:
            currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  40;
            const  isSnakeHeadAtLastGameBoardPixelTowardsUp  = currentSnakeHeadPosition  <  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsUp) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  1600;
            }
            break;

        case  RIGHT_DIR:
            ++currentSnakeHeadPosition;
            const  isSnakeHeadAtLastGameBoardPixelTowardsRight  = currentSnakeHeadPosition  %  40  ==  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsRight) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  40;
            }
            break;

        case  DOWN_DIR:
            currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  40;
            const  isSnakeHeadAtLastGameBoardPixelTowardsDown  = currentSnakeHeadPosition  >  1599;
            if (isSnakeHeadAtLastGameBoardPixelTowardsDown) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  1600;
            }
            break;

        default:
            break;
    }
    let  nextSnakeHeadPixel  = gameBoardPixels[currentSnakeHeadPosition];

```

You need to check the case where the snake touches its tail (where the game ends) and then add the snake body if the game should continue.

```js
// Kill snake if it bites itself:
if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
  // Stop moving the snake
  clearInterval(moveSnakeInterval);
  if (!alert(`The snake bit its tail!`)) window.location.reload();
}

// If not killed add the snake body:
nextSnakeHeadPixel.classList.add("snakeBodyPixel");

// This function removes the snake body from the end of the snake as it moves.
// Also note that snakeLength is used as the timeout interval
setTimeout(() => {
  nextSnakeHeadPixel.classList.remove("snakeBodyPixel");
}, snakeLength);
```

Finally, if the snake eats the food, increase the snake length and create new food

```js
    if (currentSnakeHeadPosition  ==  currentFoodPosition) {
        // Increase Snake length:
        snakeLength  =  snakeLength  +  100;
        // Create new food:
        createFood();
    }
};
```

Call the functions to start the game using the logic you programmed

```js
// Create game board pixels:
createGameBoardPixels();

// Create initial food:
createFood();

// Move snake:
// The variable, "moveSnakeInterval" is used to stop the snake on snake killed.
var moveSnakeInterval = setInterval(moveSnake, 80);

// Call change direction function on keyboard key-down event:
addEventListener("keydown", (e) => changeDirection(e.keyCode));
```

### Step 4: Counting Score and Blocks travelled

If you finished coding and want to advance your code, add a score board and count the blocks travelled!

Begin in your html under the scoreContainer div tag

Declare the div id by naming it scoreContainer:

```html
<div id="“scoreContainer”"></div>
```

Within this div tag, you need to define one class to count the score (food collected) and one to count the blocks:

```html
<div class="scoreBoard">Food: <span id="pointsEarned">0</span></div>
<div class="scoreBoard">Blocks: <span id="blocksTravelled">0</span></div>
```

The end the div tag for scoreContainer `</div>`

Next code for the css!

In order to style both counts, declare `#scoreContainer` in the space below where you styled for food

Declare the width to be 40vw, the display as flex, the margin to be automatic, and to justify content by the space around

This portion of code should look like:

```css
#scoreContainer {
  width: 40vw;
  display: flex;
  margin: auto;
  justify-content: space-around;
}
```

Under this portion of code, declare .scoreBoard

Declare the board radius as 10px, the porter to be solid 5px and slategrey, the color to be dimgray, the background-color to be #0c1021, the display as inline-block, padding as 1vw and width as 40%

If you want different colors or different measurements, feel free to add your own modifications these are just suggestions

This section of code should read as:

```css
.scoreBoard {
  border-radius: 10px;
  border: solid 5px slategrey;
  color: dimgray;
  background-color: #0c1021;
  display: inline-block;
  padding: 1vw;
  width: 40%;
}
```

In the javascript portion, first declare variables at the top of your screen and initialize them both by setting them both equal to 0:

```js
let totalFoodAte = 0;
let totalDistanceTravelled = 0;
```

Next, scroll down to the if statement checking if currentSnakeHeadPosition is equal to the currentFoodPosition. Before you increase the snake length, update the total food eaten

After setTimeout((), make these modifications to your code in order to track the distance travelled and score of your snake:

```js
totalDistanceTravelled++;
// Update in UI:
document.getElementById("blocksTravelled").innerHTML = totalDistanceTravelled;

if (currentSnakeHeadPosition == currentFoodPosition) {
  // Update total food ate
  totalFoodAte++;
  // Update in UI:
  document.getElementById("pointsEarned").innerHTML = totalFoodAte;

  // Increase Snake length:
  snakeLength = snakeLength + 100;
  createFood();
}
```
