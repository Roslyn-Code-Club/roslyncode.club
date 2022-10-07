---
title: Voice Recognition with JavaScript
year: 2021
draft: false
lang: js
slug: voicerecognition
number: 6
---

## Workshop 6: Voice Recognition with JavaScript

Today, we will learn how to implement voice recognition in JavaScript using the library p5.js! This has a wide variety of applications and can be included in many projects.

_Note: Make sure whatever device you are coding on has a mic - this must be coded on a computer!_

### Step 1: Setting Up The Coder

First, log onto your repl.it account and create a new HTML/JS/CSS repl. This should give you a base project with a basic `index.html`.
In the `<head>`, copy the following lines of code in.

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>
<script src="https://cdn.jsdelivr.net/gh/IDMNYU/p5.js-speech@0.0.3/lib/p5.speech.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/addons/p5.sound.js"></script>
```

This will import the necessary libraries we need for this project: p5 and p5.speech.
p5.sound (the last one) is optional. Only include it if you are going to play sound/audio files in your project.

Make sure your `index.html` file is linked to your `script.js` file, and then we're ready to begin!

### Step 2: Setting Up Voice Recognition

Go to your `script.js` file, where you will be doing all of the coding in.
At the top of the file, start the voice channel that will listen to and detect what you say.

```javascript
const speech = new p5.SpeechRec("en-US", parseResult);
speech.continuous = true;
speech.interimResults = false;
```

The channel (line 1) will now listen continuously (line 2) as you speak, waiting until you pause (line 3) to upload its results to the program.

_This will only work on a computer! Mobile browsers are not supported by this library._

### Step 3: Set Up the `setup()`

p5 not only has a console, but a stage where shapes, objects, and images can be displayed.

To create that stage, let's code the `setup()` function.
In p5, and in other languages such as Processing, `setup()` is automatically called ONCE at the start when a program is ran.
_There is also a `draw()` function that runs 60 times a second continually, which you can use for animation and live updates to your stage._

```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white"); // you can choose any color you want! RGB, HSB, hexcode, and color name all work
  fill(25); // text + object color

  speech.start();
}
```

The last line is the most important, as it offically starts your voice channel.

### Step 4: Code the `parseResult`

In the 1st line of Step 2, there is a `parseResult` in the `SpeechRec()` function.
This is the function that is ran when the voice channel detects words being spoken, so it is where we will be coding what we want to happen after our oral message is received.

First, check that something has been received with

```javascript
function parseResult() {
  if (speech.resultValue) {
  }
}
```

If the value received is nothing, then the if statement will be false and nothing will happen.

Then inside the if statement, write what you want to happen. For this example, the background of the screen will change to whatever color the user speaks.

First, it takes the resulting message and splits it by spaces into an array of words (`split(' ')`).
Then, it takes the last word (`pop()`), turns it into uppercase, and changes the background to that color.
It also displays the color as text on the screen using the `text()` function.
_In general, the function is `text("message here", x, y)` - here, x and y are width/2 and height/2 respectively, meaning the center of the screen._

```javascript
function parseResult() {
  if (speech.resultValue) {
    const color = speech.resultString.split(" ").pop().toUpperCase();
    background(color);
    text(color, width / 2, height / 2);
    console.log(color);
  }
}
```

Try it out now, and see if it works!

If for some reason it doesn't, click on the "Open Up in a New Tab" button on the top right. It should then open a new tab, ask you for permission to use the microphone, and then it will work.

## Example Projects

The possibilites of incorporating voice recognition into a project are endless! Check out these projects that @dliu22 made!

- [Birthday Card](https://replit.com/@dliu22/BirthdayCard#script.js) - this project is made for a certain teacher whose birthday may be the 24th of January... To unlock it, you have to say a special message.
    <details>
        <summary>The Secret Message</summary>
        Happy Birthday Mr. C!
    </details>
- [Voice Recognition Pokédex](https://replit.com/@dliu22/VoicePokedex#script.js) - a JS implementation of a Pokedex from Pokemon. It combines using voice recognition and a web API to give information about Pokemon. It might not work immediately, as it needs to connect with the API, but after waiting a few seconds it should work.

## Challenges/Ideas

I reccomend exploring the p5 library, including p5.speech, and see what else is possible (a lot!)

- Implement your own secret voice message to unlock your website
- Make a game that uses voice recognition as player commands
- Voice-recognition calculator
- Anything else you can think of!
