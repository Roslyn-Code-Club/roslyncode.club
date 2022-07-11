---
title: Introduction to Javascript Pt.2
year: 2022
draft: false
lang: js
slug: introtojavascriptpt2
number: 4
---

## Workshop 4: Introduction to JavaScript Pt. 2

This workshop is for people with a working knowledge of JavaScript. Today's activity will be to create a login page for a website. 

To begin, open up your personal website, and create a new file. Click the little plus button in the top left sidebar, and name it `<NAME.html>`.

### Step 1: Basic Setup

First, to start setting up your web page, create a header!

```html
<html>
  <header>
    Login to My Website! 
  </header>
</html>
```

### Step 2: Create a Form Tag 
  
Then, we need to create a form tag in html for user inputs. When we evaluate the input in JavaScript, we will also need to create a variable for the value as follows.
  
```html
<html>
  <header>
    Login to My Website! 
  </header>
    
  <form id="logform" onsubmit="return false">
  </form>
  
  <script>
    var loginForm = document.getElementById("logform");
  <script>
</html>
```
  
### Step 3: Input Username and Password

Next, the user will input their username and password. We will need to identify the input type as Identify the input type, name it, and create an id for it. The name attribute will also help to refrence elements when we are coding in JavaScript. 
  
```html
<html>
  <header>
    Login to My Website! 
  </header>
    
  <form id="logform" onsubmit="return false">
     Username: 
     <input type="text" name="username" id="usernamePlace"> <br>
     
     Password: 
     <input type="password" name="password" id="passwordPlace"> <br>
     
  </form>
  
  <script>
    var loginForm = document.getElementById("logform");
  <script>
</html>
```
  
### Step 4: Submit

Once the user inputs the username and password, they will want to hit submit to sign into the page. We will use the type `submit`, which is similiar to the button tag, but the input type is used in form tags, and it allows for an inclick event. We will then create a variable for the login button being clicked in JavaScript.  
  
```html
<html>
  <header>
    Login to My Website! 
  </header>
    
  <form id="logform" onsubmit="return false">
     Username: 
     <input type="text" name="username" id="usernamePlace"> <br>
     
     Password: 
     <input type="password" name="password" id="passwordPlace"> <br>
     
     <input type="submit" value="Login" id="signIn"> 
     
  </form>
  
  <script>
    var loginForm = document.getElementById("logform");
    var loginButton = document.getElementById("signIn");
  <script>
</html>
```

### Step 5: Execute Login

Finally, we need to create a program that is executed when the login button is clicked. Here we can create and set a name for our username and password. The program will check if it is correct and send an alert in response. If the input is correct, it can open to a new page, `<nice.html>`. 
  
```html
<html>
  <header>
    Login to My Website! 
  </header>
    
  <form id="logform" onsubmit="return false">
     Username: 
     <input type="text" name="username" id="usernamePlace"> <br>
     
     Password: 
     <input type="password" name="password" id="passwordPlace"> <br>
     
     <input type="submit" value="Login" id="signIn"> 
     
  </form>
    
  <a href="nice.html" style="display: none" id="hidden">Nice</a>
  
  <script>
    var loginForm = document.getElementById("logform");
    var loginButton = document.getElementById("signIn");
      
    loginButton.addEventListener("click", (e) => {      
    var username = loginForm.username.value;
    var password = loginForm.password.value;
    if (username === "alex" && password === "hmm"){
      alert("great");
      window.location.href = "nice.html";
      document.getElementById("hidden").style.display="block";
      return false;
    }
        else {alert("no")}
    })
      
  <script>
</html>
```


### Challenge

See if you can make the login work for multiple login combinations! You can also write code for the page `<nice.html>` when the input is correct!