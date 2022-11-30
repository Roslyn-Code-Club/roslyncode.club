---
title: Brushing Up JavaScript
year: 2022
draft: false
lang: js
slug: brushingupjavascript
number: 3
---
## Workshop 3: Brushing Up On JavaScript

This workshop is for people with little to no prior knowledge of JavaScript. You can also read the [workshops from last year that go into JavaScript as well](https://roslyncode.club/workshops).

To start, open up your Replit or code editor of choice, and create a new HTML file. Click the little plus button in the top left sidebar, and name it whatever you'd like, with a `.html` extension at the end.

### Step 1: Basic Setup

To start coding in JavaScript, we can add '<script>' into our HTML document.  

```html
<!DOCTYPE html>
<html>
    <script>
        // put your JavaScript here
    </script>
</html>
```


### Step 2: JavaScript Syntax
  
The syntax is quite simple. There's no need for a main function or any classes to get something done. We can create a function using two different types of syntax. Traditional syntax and the newer syntax, ES6 Arrow functions. Both accomplish the same thing!
  
```html
<!DOCTYPE html>
<html>
    <script>
        function foo(parameter1, parameter2) {
          // function code goes here!
        }
    </script>
</html>
```

```html
<!DOCTYPE html>
<html>
    <script>
        const foo = (parameter1, parameter2) => {
          // function code goes here!
        }
    </script>
</html>
```

### Step 3: Variables and Returning Values

Variables help designate certain values and are essential to creating a working function. There are two ways to declare a variable: `let` and `const` (`var` is deprecated). Using `let` allows the defined variable to be changed. Using `const` means the value is "constant", and you cannot change the value past initialization.

Your function can also return a value if you choose. To do this, it's as simple as placing a return statement at the end of the function. The first example is a function that will count to 5, but won't return anything. The second example is a function that will return the product of two numbers.
  
```html
<!DOCTYPE html>
<html>
    <script>
        function countToFive() {
          const max = 5;
          for (let i = 1; i <= max; i++){
            console.log(i);
          }
        }
    </script>
</html>
```

```html
<!DOCTYPE html>
<html>
    <script>
        function getProduct(num1, num2) {
          let product = num1 * num2;
          return product;
        }
    </script>
</html>
```
  
### Step 4: Loops

A staple of all programming languages is the ability to repeat a certain action. Loops are the usually the best way to do that. For and while loops behave just like they do in other programming languages with similar syntax to languages like Java and C++. 

A for loop executes the inner code until it reaches the upper/lower bound. 
  
```html
<!DOCTYPE html>
<html>
    <script>
        function spamHi() {
          for (let i = 0; i < 10; i++) {
            console.log("Hi");
          }
        }
    </script>
</html>
```
  
A while loop executes the inner code while a condition remains true.

  
```html
<!DOCTYPE html>
<html>
    <script>
        function spamBye() {
          const max = 10;
          let i = 0;
          while (i < max) {
            console.log("Bye");
            i++;
          }
        }
    </script>
</html>
```

### What can I do now?

JavaScript allows you to do practically anything. You can create your own API or fetch data from one, you can manipulate the website or you can manipulate data. Think of an application for JavaScript that you can use for your own personal website! Whether it's making a quiz or a game, it's up to you!