---
title: Introduction to JavaScript
year: 2022
draft: false
lang: js
slug: introtojavascript
number: 3
---
## Workshop 3: Introduction to JavaScript

This workshop is for people with no prior knowledge of JavaScript. We will cover the basics of JavaScript and create a color changing game. 

To begin, open up your personal website, and create a new file. Click the little plus button in the top left sidebar, and name it `<NAME.html>`.

### Step 1: Basic Setup

In JavScript, we begin coding in an HTML file by creating a script. To do this we add '<script>' into our HTML document.  

```html
<!DOCTYPE html>
<html>
    <script>
        // code goes here!
    </script>
</html>
```


### Step 2: Basic JavaScript Commands 
  
To create a function in JavaScript, we use the syntax below. We can code many functions to perform different operations. 
  
```html
<!DOCTYPE html>
<html>
    <script>
        function nameOfFunction(parameter1, parameter2) {
          // function code goes here!
        }
    </script>
</html>
```
  
At the end of the function, we can return a value using 'return'.

### Step 3: Variables

In JavaScript to create a new variable we use `<var>`. Then, to assign the varibale a value, we use the operator `=`. 
We do not need to use specific data types in JavaScript. Theses statements end with a semicolon. 
Here is an example function with a variable.
  
```
html
<!DOCTYPE html>
<html>
    <script>
        function sum(parameter1, parameter2) {
          var sum = parameter1 + parameter2;
          return sum;
        }
    </script>
</html>
```
  
### Step 4: Loops

Two important loops we can learn about in JavaScript are for loops and while loops. 
  
In a for loop, the block of code is repeated a specified number of times.
  
```
html
<!DOCTYPE html>
<html>
    <script>
        function nameOfFunction() {
          for (var i = START; i < END; i++) {
            // code goes here!
          }
        }
    </script>
</html>
```
  
In a while loop, the block of code is repeated while a condition remains true.
  
  
```
html
<!DOCTYPE html>
<html>
    <script>
        function nameOfFunction() {
          var i = START;
          while (i < END) {
            // code goes here!
            i = i+1;
          }
        }
    </script>
</html>
```

### Step 5: Challenge

Today's activity is to create a color changing box game. We will learn about JavaScript in the process!

First, we want to create our box element. To do this, we add the following code for its style.

```html
<!DOCTYPE html>
<html>
    <head>
      <style>
        .box {

            height: 200px;
            width: 200px;
            padding: 10px ;
            border: 10px solid black;
            margin: 0;
          }
          .center {
            position: absolute;
            padding: 10px 24px; 
            left: 50%;
         }
      </style>
   </head>
</html>
```

Now, we are going to begin coding in JavaScript. To start, let's create a function that changes the color of the box to the user input.

```html
<!DOCTYPE html>
<html>
    <head>
      <style>
        .box {

            height: 200px;
            width: 200px;
            padding: 10px ;
            border: 10px solid black;
            margin: 0;
          }
          .center {
            position: absolute;
            padding: 10px 24px; 
            left: 50%;
         }
      </style>
      <script>
        function changeHeadingBg(color){
            document.getElementById("b").style.background = color;
        }
      </script>
   </head>
</html>
```

Then, let's add a title for our project!

```html
<!DOCTYPE html>
<html>
    <head>
      <style>
        .box {

            height: 200px;
            width: 200px;
            padding: 10px ;
            border: 10px solid black;
            margin: 0;
          }
          .center {
            position: absolute;
            padding: 10px 24px; 
            left: 50%;
         }
      </style>
      <script>
        function changeHeadingBg(color){
            document.getElementById("b").style.background = color;
        }
      </script>
      <body>
        <h1 id="h">Welcome to My Color Changing Game!</h1>
      </body>
   </head>
</html>
```

After this, to create our box and display it on the screen, we want to write the following code:

```html
<!DOCTYPE html>
<html>
    <head>
      <style>
        .box {

            height: 200px;
            width: 200px;
            padding: 10px ;
            border: 10px solid black;
            margin: 0;
          }
          .center {
            position: absolute;
            padding: 10px 24px; 
            left: 50%;
         }
      </style>
      <script>
        function changeHeadingBg(color){
            document.getElementById("b").style.background = color;
        }
      </script>
      <body>
        <h1 id="h">Welcome to My Color Changing Game!</h1>
        <div id = "b" class = "center"> 
            <div class = "box" > 
            </div>
        </div>
      </body>
   </head>
</html>
```
  
Then, let's make buttons to change our box's color! You can use any combination of three numbers 
0-255 to specify red, blue, and green values.

```html
<!DOCTYPE html>
<html>
    <head>
      <style>
        .box {

            height: 200px;
            width: 200px;
            padding: 10px ;
            border: 10px solid black;
            margin: 0;
          }
          .center {
            position: absolute;
            padding: 10px 24px; 
            left: 50%;
         }
      </style>
      <script>
        function changeHeadingBg(color){
            document.getElementById("b").style.background = color;
        }
      </script>
      <body>
        <h1 id="h">Welcome to My Color Changing Game!</h1>
        <div id = "b" class = "center"> 
            <div class = "box" > 
            </div>
        </div>
        <div>
          <label>Change Heading Background To:</label>
          <button type="button" onclick="changeHeadingBg('rgb(255,0,0)');">Red</button>
          <button type="button" onclick="changeHeadingBg('rgb(0,255,0)');">Green</button>
          <button type="button" onclick="changeHeadingBg('rgb(0,0,255)');">Blue</button>
        </div>
      </body>
   </head>
</html>
```

https://replit.com/join/kaeacxgecr-lindsayfabrican

### Challenge

Try to add more objects and colors! See if you can receive input for a color and then make the box the color of your string! Next week, we will make a login form using JavaScript to access your coding prjoects on your personal website!