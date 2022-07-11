---
title: JavaScript APIs
year: 2022
draft: false
lang: js
slug: javascriptapis
number: 7
---

## Workshop 7: JavaScript APIs

GET EXCITED, because today, we'll be increasing our coding possibilites by A LOT. 

We are using... **APIs**!!

### What are APIs?
An API is an Application Programming Interface. Think of it as a bridge connecting one software program to another one.
When you go across the bridge, you have two options - either to send information to the other server, or to receive information from the other server.
For APIs, we call these "POST" and "GET" requests.

Most commonly, they are used to get large amounts of data from databases, such as weather, geographical, market information.
For things that change often, like the weather, it's important to get ACCURATE, LIVE data. But you don't want to have to get a meterology degree and learn how to interpret weather trends and create your own software for processing all of that data. So, use an API that someone else has already programmed! For example, check out [FreeWeatherAPI](https://www.weatherapi.com/), whose service is entirely dedicated to transmitting real-time data about the weather in specific locations.

There are APIs for almost everything! Take a look at [APIList](https://apilist.fun/), and see if there's any that interest you, whether it's for getting images of cats or for discovering new animes. The possibilities are truly endless, now that we have access to services/data on the internet that we did not have before.

For this workshop, we are going to making a Pokedex using [PokeAPI](https://pokeapi.co/). Follow the workshop, and then try and apply the general API concepts taught here for other APIs of your choosing.


### Step 1: Setup
Thankfully, using APIS (or sending web requests) are built in JavaScript, so we don't have to do anything to import them.
But, for this project, we will be using [p5.js](https://p5js.org/) to display stuff on the screen, so let's make sure that library is in our project.

For the HTML, copy this into the ```<body>``` tags to import the library:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
```

Then in the JavaScript, let's set up our canvas.

```javascript
function setup(){
  createCanvas(windowWidth,windowHeight)
  background(255)
  fill(25)

  textSize(48)
  textAlign(CENTER)
  textStyle(BOLDITALIC)
  textFont('"Avenir Next", system-ui, sans-serif')
  text("Pokédex", width/2, height/2 - 300) 
}
```

### Step 2: Setting Up User Prompt
We want the user to be able to get information about any Pokemon they want, so let's add some user input to this program.
Create a function called ```ask()``` to ask the user what Pokemon they want to know about using ```prompt()```.

```javascript
function ask(){
  const pokemon = prompt("Give me a pokemon: ");
  getResult(pokemon);
}
```
Make sure to add ```ask()``` to the ```setup()``` function so that it's called when the program runs.


### Step 3: Sending the Request
Now let's code ```getResult()```. This is where we want to make our web request to the PokeAPI server and request information.
First, create the request, then open it by and specify that is a GET request (we want to GET info). We are also using the API url given by the PokeAPI website. 

*For each API you use, MAKE SURE to read through its documentation. Each API works differently, has different links and queries you can use as an input to the API, so it is imperative that you read through the documentation and understand how that specific API link works. Look at PokeAPI's [docs](https://pokeapi.co/docs/v2), and make sure you understand it before moving on.*

Its responseType is what type of format the information will be returned in, most commonly JSON or XML. Check your API to see what specific type it returns. 
Finally, send the request off to the server!

```javascript
function getResult(pokemon){
  var request = new XMLHttpRequest();
  request.open(
    'GET', 
    'https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase()
  );
  request.responseType = 'json';
  request.send();
}
```

### Step 4: Receiving the Response
So the request has been sent, now what?
Well, one of two things could happen: either the request went through successfully and you can retrieve the info, or there was some error and the request failed.
Let's first use the function ```.onload``` to determine what happens when the request loads.

```javascript
request.onload = function(){
  var data = this.response;
}
```

Now let's check if the request was successful or not using a simple if-else statement.
You may have heard of status codes before, for example 404 Page Not Found. In general, status codes tell us different things about what happened when the request went through. Usually, if it is >= 200 and <400, we are in the clear. But if it's greater than 400, then there was probably some error. Refer to this [list](https://www.ibm.com/docs/en/odm/8.8.0?topic=api-rest-response-codes-error-messages) for a complete list of error codes and their meanings.

```javascript
request.onload = function(){
  var data = this.response;
  if(request.status >= 200 && request.status < 400){
    console.log(data);
  }else{
    background(255);
    text('Error, pokemon does not exist in the database.', width/2, height/2);
    console.log(request.status);
    ask();
  }
}
```
In the above code, I just displayed a simple error message if the request failed, or displayed the data if it went through.
If you try running it now with a proper Pokemon, you might see a huge block of lists and data appear in your console.
There you go! You just made your first successful API request!


### Step 5: Parsing It (Making it Pretty)
If you try pasting https://pokeapi.co/api/v2/pokemon/pikachu into your search bar, you'll notice A LOT comes up. Abilities, names, types, versions, everything there is to know. It just is not in a pretty, readable format, so our next goal is to make it look nice.

First, for any block of JSON data, use a JSON prettifier. This will immediately format the data into a nicer looking way for you to parse through. [This one](https://jsonformatter.curiousconcept.com/#) is really nice because it formats the JSON and allows you to condense it.
Now, it's much easier to go through and pick the information you want to get.

Once you have decided what things you want to pick (I chose name, id #, urls for images of the pokemon, and its common moves), we need to take out those specific pieces of data from the JSON object. You might have noticed from the prettifier that it all looks like one big dictionary. EVerything is a matching key-value pair, so we can treat it like such. 

Ex: Looking at the Pikachu link from before, let's try to get the first ability text, "static".
- First we have to get to the "abilities" list, so do ```data.abilities```
- Since we're now working with a list, we have to use indexes instead of key names. So, do ```data.abilities[0]``` to get the first ability.
- And there you go! You can ```console.log()``` it, display it on the screen using the p5 ```text()``` function, or whatever you want. 

Below, I included my code for taking in all of the data I wanted, which included images. I also created a ```display()``` function for displaying all of the different components, which might be helpful to include to keep it separate from the retrieval code.

***TIP: Start from the outermost layer, ```data```, and slowly work in one layer at a time until you get to the information you want. For example, to get the names of the common moves, I did ```data.moves[i].move.name```, going one layer deeper each time until I reached the moves. REMEMBER, the point is to make your code as general as possible, so it will work no matter what Pokemon the user puts in. The helpful thing is, APIs always return the information in the same format and order (in terms of keys), so use that to your advantage. The only thing that changes is the actual value of each key.***
```javascript
request.onload = function(){
  var data = this.response;
  if(request.status >= 200 && request.status < 400){
    var type = '';
    for(var i = 0; i < data.types.length; i++){
      type += data.types[i].type.name + ' ';
    }
    var id = data.id;
    var url = data.sprites.front_default;
    var back = data.sprites.back_default;
    var moves = '';
    for(var i = 0; i < data.moves.length && i < 3; i++){
      moves += data.moves[i].move.name + ', ';
    }

    display(pokemon, url, back, type, id, moves);
  }else{
    background(255);
    text('Error, pokemon does not exist in the database.', width/2, height/2);
    console.log(request.status);
    ask();
  }
}

var count = 0;
function display(name, imageURL, back, type, id, moves){
  count = 1;
  background(255);
  fill(0);
  loadImage(imageURL, loadImg);
  loadImage(back, loadImg);
  text(name, width/2, height/2);
  fill(120,120,120);
  text(' #' + id, width/2 + name.length * 20 + 20, height/2);
  text('Type: ' + type, width/2, height/2 + 100);
  
  moves = moves.substring(0, moves.length - 2);
  text('Common moves: ' + moves, width/2, height/2 + 200);
}
function loadImg(img){
  img.resize(300,300);
  imageMode(CENTER);
  image(img, width/2 + 200 * Math.pow(-1,count), height/2 - 200);
  count++;
}
```

### Ending Notes
Let us know if you have any questions, and once you're finished making your personal Pokedex, try your hand at using another API and incorporating it into another project.
There are still a few concepts we haven't learned, such as API keys and multiple queries, but that will be covered later. (If you are curious now, ask us!)

Have fun coding!