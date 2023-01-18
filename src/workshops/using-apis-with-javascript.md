---
title: Using APIs with JavaScript
year: 2022
draft: false
category: js
number: 4
---

## Workshop 4: Using APIs with JavaScript

In previous workshops, we learned the basics of JavaScript and the many use cases it possesses. Static data is basic, however, and as you become a better programmer, you will almost certainly encounter an API at some point, so we'll be learning how to use APIs with JavaScript. I suggest using an editor with a console, such as [JSFiddle](https://jsfiddle.net/).

## What are APIs?

API stands for Application Programming Interface. APIs are essentially a collection of functions and methods used to fetch and update data from a given source. This can be your own database or a third-party server with information about something. It's not practical to create methods of fetching data by yourself, and thus APIs allow us to get the information we need without having to implement it ourselves.

Some notable usecases for APIs are getting the weather, searching up movies, and getting game statistics. If you're looking to gather information programmatically, there's probably an API for it.

### Step 1: Basic Setup

To start coding in JavaScript, we can add `<script>` tags into our HTML document.

```html
<!DOCTYPE html>
<html>
  <script>
    // put your JavaScript here
  </script>
</html>
```

### Step 2: Defining the function

For today's workshop, we're going to be using [Sample APIs'](https://sampleapis.com/api-list) Jokes API endpoint. Let's create a function inside the `<script>` tag to call the API. Since we're getting a joke, let's name the function `getJoke`. Note that we declared the function `async` -this means _"asynchronous"_.

Normal functions can be executed synchronously, meaning multiple functions can be executed at once. When working with APIs (or any function that involves working with dynamic data), we need to ensure the function finishes excuting before running any other code.

```html
<!DOCTYPE html>
<html>
  <script>
    async function getJoke() {
      // function code goes here!
    }
  </script>
</html>
```

### Step 3: Writing the function

First we declare a `const` response since we won't be modifying the response from the API at all. We use `await` to ensure that we complete the request and receive our data. Then we declare `const arrayOfJokes`, which is an array of our data. At the end, we'll `console.log(arrayOfJokes)` to view the data we received. Outside of the function, we'll call the `getJoke()` function so that it actually gets executed.

- We'll be using the following endpoint `https://api.sampleapis.com/jokes/goodJokes` which can be [found in the API endpoint list here.](https://sampleapis.com/api-list/jokes)

```html
<!DOCTYPE html>
<html>
  <script>
    async function getJoke() {
      const response = await fetch(
        "https://api.sampleapis.com/jokes/goodJokes"
      );
      const arrayOfJokes = await response.json();
      return console.log(arrayOfJokes);
    }
    getJoke();
  </script>
</html>
```

### Data Manipulation 1: Control the Array Size

If you open the console in your respective editor, you'll see a whole bunch of data. We can manipulate the data using different JavaScript functions. The first one we can use is `slice()`, which we can use to get a part of the data since there's a lot to look at. In this case, we'll use `(0,10)` to get the first 10 jokes.

```html
<!DOCTYPE html>
<html>
  <script>
    async function getJoke() {
      const response = await fetch(
        "https://api.sampleapis.com/jokes/goodJokes"
      );
      const arrayOfJokes = await response.json();
      let firstTen = arrayOfJokes.slice(0, 10);
      return console.log(firstTen);
    }
    getJoke();
  </script>
</html>
```

### Data Manipulation 2: Getting the nth joke

We can pass in a parameter to `getJoke()` to select the nth joke. For instance, we can call `getJoke(5)` to get the 5th joke. Note that we're using `[n-1]` because arrays are 0-based, meaning the first element is index 0. We also add an if statement at the beginning to check that n isn't out of bounds.

```html
<!DOCTYPE html>
<html>
  <script>
    async function getJoke(n) {
      if (n === 0 || n > 10) return console.log("Out of bounds");
      const response = await fetch(
        "https://api.sampleapis.com/jokes/goodJokes"
      );
      const arrayOfJokes = await response.json();
      let firstTen = arrayOfJokes.slice(0, 10);
      return console.log(firstTen[n - 1]);
    }
    getJoke(5);
  </script>
</html>
```

### Advanced Data Manipulation 1: Dynamic Joke Count

We can pass in another parameter to set the maximum number of jokes we want to examine. For example, we can call `getJoke(5,15)` to get the 5th joke out of 15 jokes. Note that we added another if statement under `const arrayOfJokes`. This checks to see if the maximum number of jokes we provided is greater than the number of jokes we receive from the API.

If there are only 10 jokes returned from the API, and we set maxJokes to be 11, we won't have an 11th joke. In that case, we'll return and log in our console that there aren't enough jokes.

```html
<!DOCTYPE html>
<html>
  <script>
    async function getJoke(n, maxJokes) {
      if (n === 0 || n > maxJokes) return console.log("Out of bounds");
      const response = await fetch(
        "https://api.sampleapis.com/jokes/goodJokes"
      );
      const arrayOfJokes = await response.json();
      if (maxJokes > arrayOfJokes.length)
        return console.log("There aren't that many jokes");
      let firstTen = arrayOfJokes.slice(0, 10);
      return console.log(firstTen[n - 1]);
    }
    getJoke(5, 15);
  </script>
</html>
```

### Advanced Data Manipulation 2: Random Joke

Having to declare what number joke we want is a bit boring. Instead, we can generate a random joke from our desired selection of jokes. Since we're generating a random joke, we won't need the `n` and `maxJokes` parameter in our function anymore. We can use `Math.floor(Math.random() * json.length)` to generate a random element from our `arrayOfJokes`.

- `Math.floor()` truncates any decimals to make it an integer.
  - Example: `Math.floor(1.2345)` = 1
- `Math.random()` generates a random number from 0 to 1, not including 1.
- `* arrayOfJokes.length` will change the values generated from `Math.random()`, making the range 0 to `arrayOfJokes.length`.
- You might wonder, wouldn't `arrayOfJokes.length` be out of bounds? This actually isn't a problem because Math.random() will never generate exactly `arrayOfJokes.length`.
  - If `arrayOfJokes.length` is 10, `Math.random()` may only generate up to 9.999999....
  - `Math.floor()` will drop the decimals, making the largest value possible: 9.

```html
<!DOCTYPE html>
<html>
  <script>
    async function getJoke() {
      const response = await fetch(
        "https://api.sampleapis.com/jokes/goodJokes"
      );
      const arrayOfJokes = await response.json();
      let randomJoke =
        arrayOfJokes[Math.floor(Math.random() * arrayOfJokes.length)];
      return console.log(randomJoke);
    }
    getJoke();
  </script>
</html>
```

### Wrapping Up

As you can see, there are a multitude of different possibilities using JavaScript functions. Combine this with some data, and you can do some really cool things. Try thinking of other ways you can manipulate data and what other APIs you can use.
