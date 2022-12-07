---
title: Introduction to Javascript Pt.3
year: 2021
draft: false
category: js
number: 5
---

## Workshop 5: Introduction to JavaScript Pt. 3

This workshop is for people with a working knowledge of JavaScript. Today's activity will be to create a personality quiz. 

To begin, open up your personal website, and create a new project. We will need three files, `<index.html>`, `<script.js>`, and `<style.css>`.

### Step 1: Basic Setup

First, to start setting up the quiz, we will need to set various buttons for the page as shown below! This code will go into the `<index.html>` file.

```html
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <br>
    <br>
    <div id="quiz"></div>
    <br>
    <br>
    <button id="next">Next</button>
    <button id="prev" hidden >Previous</button>
    <button id="submit" hidden>Get Results</button>
    <div id="results" hidden></div>
    
    <script src="script.js"></script>
  </body>
</html>
```

### Step 2: Set Questions and Variables 
  
Next, we will begin coding in the `<script.js>` file to create variables and the questions for the project. Feel free to create whatever questions you may like! 
  
```html
var questions = [
  {
    question: "What word describes you?",
    answers: {
      a: 'Brave',
      b: 'Loyal',
      c: 'Intelligent',
      d: 'Cunning'
    },
    values: {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    }
  },
  {
    question: "What's your favorite magical animal?",
    answers: {
      a: 'Hippogriff',
      b: 'Unicorn',
      c: 'Basilisk',
      d: 'Owl'
    },
    values: {
      a: 1,
      b: 2,
      c: 4,
      d: 3
    }
  }
];

var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var number = 0;
var personalityScore = 0;
```
  
### Step 3: Question Manager

Next, we will need a question manager function.
  
```html
questionManager(number);

function questionManager() {
  displayQuestion(number);
  questionHTML = quizContainer.innerHTML;
  answers = questions[number].answers;
  for (letter in answers) {
    document.getElementById('' + number + letter).addEventListener('click', nextQuestion);
  }
}
```
  
### Step 4: Next Question

Then, we will include a function to get to the next question.  If it is the last question, it will call the function `<showResults()>`.
  
```html
function nextQuestion(){
  number++;
  if(number >= questions.length){
    showResults();
    return;
  }
  questionManager();
}
```

### Step 5: Display Question

Now, we will add a function to display the question and answer options on the page.
  
```html
function displayQuestion(number) {
  var question = questions[number].question;
  var answers = []
  for (answer in questions[number].answers) {
    answers.push(
      '<label>'
      + '<input type="button" id="' + number + answer + '" value="' + questions[number].answers[answer] + '">'
      + '</label>'
    );
  }
  var answersDisplay = answers[0] + "&nbsp" + answers[1] + "<br><br>" + answers[2] + "&nbsp" + answers[3];
  var output =
    '<div class="question">' + question + '</div><br><br>'
    + '<div class="answers">' + answersDisplay + '</div>';

  quizContainer.innerHTML = output;
}
```


### Step 6: Show Results

At the end of your quiz, the program will display the results. For now, we will include the message "Generating results," and next week we will continue our work!
  
```html
function showResults(){
  setTimeout(() => { quizContainer.innerHTML = "Generating results..."; }, 2000);
}
```


### Step 6: Style

On the file, `<style.css>`, we will want to include the following code for the layout of the text on the screen!
  
```html
body{
  text-align:center;
}
input{
  width: 200px;
}
```

### Update 11/17/21

Add this to the style.css file!

```html
label{
  width:200px;
  display: inline-block;
  background-color: gray;
}
```

Add these changes to the nextQuestion function!

```html
function nextQuestion(){
  for (letter in questions[number].answers) {
    var button = document.getElementById('' + number + letter);
    if (button.checked == true) {
      personalityScore += questions[number].values[letter];
    }

  }
  number++;
  if(number >= questions.length){
    showResults();
    return;
  }
  questionManager();
}
```

These are the following changes to be made to the displayQuestion function.

```html
function displayQuestion(number) {
  var question = questions[number].question;
  var answers = []
  for (answer in questions[number].answers) {
    answers.push(
      '<label>'
     + questions[number].answers[answer] + '<input type="radio" id="' + number + answer + '" value="' + questions[number].answers[answer] + '">'
      + '</label>'
    );
  }
  var answersDisplay = answers[0] + "&nbsp" + answers[1] + "<br><br>" + answers[2] + "&nbsp" + answers[3];
  var output =
    '<div class="question">' + question + '</div><br><br>'
    + '<div class="answers">' + answersDisplay + '</div>';

  quizContainer.innerHTML = output;
}
```

On the showResults function, add the following changes!

```html
function showResults(){
  setTimeout(() => { quizContainer.innerHTML = "Generating results..."; }, 2000);
  if (personalityScore <= 2){
    console.log("You're a Gryffindor!")
  }
  else if (personalityScore > 2 && personalityScore < 5){
    console.log("You're a Hufflepuff!")
  }
  else if (personalityScore > 4 && personalityScore < 7){
    console.log("You're a Ravenclaw!")
  }
  else if (personalityScore > 6 && personalityScore < 9){
    console.log("You're a Slytherin!")
  }
}
```

### Challenge 
Add more graphics and create whatever questions you may choose!