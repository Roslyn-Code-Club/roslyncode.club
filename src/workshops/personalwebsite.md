---
title: Personal Website
year: 2021
draft: false
lang: html
slug: personalwebsite
number: 1
---
## Workshop 1: Personal Website

This workshop is for someone with 0 knowledge about coding to get a personal website started in less than an hour. 
We will be teaching the basics of HTML and CSS, using the compiler atom.



### Step 1: Setting up Atom
Before we begin coding, you must set up a text editor. We recommend using atom, which you can download here: https://atom.io/

After the application is downloaded, go to your desktop and create a new folder.  This is done by right clicking your desktop and clicking “create new folder.”

Open atom.io and go to “open projects.”  Select the folder you just created on your desktop

Now locate this folder on atom.io and right click.  Select “new file”

Write index.html in the blank! You are now ready to begin coding


### Step 2: Setting up the HTML File 

Create the backbone of HTML file by typing the following:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
or you can also type html and then hit <kbd>enter<kbd>

Make sure to save as you go along by clicking `file` and `save` or use the shortcut <kbd>Ctrl+s</kbd>. 

You can preview the page by clicking `Preview` on the top bar and then selecting `Live Preview File`.

#### Side note: Comments
Comments can be made in HTML by using `<!--` and `-->`. Text inside these arrows are not displayed in 
the browser, but helps document your HTML code. It is a good habit to always comment on your code.

```html
<!-- This is a comment-->
```

#### Side note 2: Live Preview
You can preview the code as you work by opening up your folder. To do this, double-click on the file in your desktop folder.

### Step 3: Adding Text

Now you can add some text to your webpage. HTML uses a variety of elements to automatically format 
and identify text. There are multiple heading elements (`<h1>`, `<h2>`, `<h3>`, ..., `<h6>`) that create headers,
and there is also a paragraph element (`<p>`) to create paragraph text. 

Text is written inside the body and must be enclosed by a starting (ex: `<p>`) and ending tag (ex: `</p>`). 
Try this! An example is shown below.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <h1>JoJo Siwa’s Website</h1> <!--Heading 1-->
        <h2>by JoJo Siwa</h2> <!--Heading 2-->
        <p>I love bows!</p> <!--paragraph-->
    </body>
</html>
```


### Step 4: Adding Photos

You can add a photo by using the `<img>` tag. In this tag, you use attributes to control how the tag behaves. 

The attribute `src` specifies the source of the image. This can be a URL or a file path. 

The attribute `alt` is used as an alternative if the image can not load for whatever reason, usually named 
whatever the image is supposed to be. 

The attribute `title` is the title of the image and is displayed as a tooltip when you mouse over the image.
This attribute can be used with different elements, too, such as `<p>`.

Try adding an image yourself! Create an images folder in your project. Google an image and download it. 
Make sure to place it in the image folder. Right click on the file and click copy project path. Then paste the path in the src attribute.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> <!--Image-->
        <h1>JoJo Siwa’s Website</h1> 
        <h2>by JoJo Siwa</h2>
        <p>I love bows</p> 
    </body>
</html>
```

### Step 5: Adding Lists

Lists are just another text element. There are two types of lists: ordered and unordered.

Let's start with an unordered list. The unordered list  tag is `<ul>`. 
Then each list item must have the tag `<li>`. List items are displayed as bullet points.
Try this yourself! An example is shown below.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
        <h1>Jojo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p>I love bows</p>
        <h3>LIVING MY BEST LIFE</h3>
        <!-- Unordered List-->
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
    </body>
</html>
```

Ordered lists are another type of list, where list items are numbered. The ordered list tag is `<ol>` and 
follows the same rules as unordered lists. Try this yourself! An example is shown below.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
        <h1>JoJo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p>I love bows</p>
        <h3>LIVING MY BEST LIFE</h3>
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
        <h3>My Recent Work</h3>
        <!--Ordered List-->
        <ol>
          <li>D.R.E.A.M. the Tour</li>
          <li>Celebrity Watch Party on Fox</li>
          <li>NONSTOP Official Music Video</li>
        </ol>
    </body>
</html>
```


### Step 6: HTML Formatting Elements

You can add some style directly into the HTML code using tags, but the options are limited.

The HTML `<b>` element defines <b>bold</b> text, without any extra importance.
<br>The HTML `<strong>` element defines <strong>strong</strong> text, with added semantic "strong" importance.

The HTML `<i>` element defines <i>italic</i> text, without any extra importance.
<br>The HTML `<em>` element defines <em>emphasized</em> text, with added semantic importance.

The HTML `<small>` element defines <small>smaller</small> text.

The HTML `<mark>` element defines <mark>marked</mark> or <mark>highlighted</mark> text.

The HTML `<del>` element defines <del>deleted</del> (removed) text.

These are just a few of the many HTML formatting elements. You can find more online witha simple Google search.
Now you try! An example is below:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
        <h1>JoJo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p>I love<u>Justice!</u></p>  <!-- Underlined "JoJo Siwa’s Website" -->
        <h3>LIVING MY BEST LIFE</h3>
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
        <h3>My Recent Work</h3>
        <ol>
          <li>D.R.E.A.M. the Tour</li>
          <li>Celebrity Watch Party on Fox</li>
          <li>NONSTOP Official Music Video</li>
        </ol>
    </body>
</html>
```

### Step 7: Setting up CSS

CSS, also known as Cascading Style Sheets, is used to add more style to a webpage.

Start by creating a new file inside your `PersonalWebsite` folder and name it `styles.css`.
You must now link this file to your HTML code. This is done by addings some code to the `<head>` of the HTML code.

The `<link />` element is used. The `rel` attribute is used to define what is being linked and the 
`href` attribute is used to specify where the file can be found. Add this:

```html
<link rel="stylesheet" href="styles.css"/>
```

to the `<head>` of your HTML code.

An example is shown below:

```html
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="styles.css"/> <!--Link the CSS file-->
    </head>
    <body>
      <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
        <h1>JoJo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p>I love<u>Justice!</u></p>
        <h3>LIVING MY BEST LIFE</h3>
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
        <h3>My Recent Work</h3>
        <ol>
          <li>D.R.E.A.M. the Tour</li>
          <li>Celebrity Watch Party on Fox</li>
          <li>NONSTOP Official Music Video</li>
        </ol>
    </body>
</html>
```


### Step 8 Adding Styles to CSS

Now open up the CSS file and let's get styling. CSS works by having a selector, often an element, 
and defining rules for it in `{` `}` brackets.

To resize all images on a webpage, select the element `img` and set the `width` to the desired `px`.
You can also add a `margin` of blank space around it. An example of this is shown:

```css
img {
    width: 500px;
    margin: 8px;
}
```

You can then change the style of the entire webpage by selecting 'body'. You can change the
text alignment, font, text color, and background color. An example of this is shown:

```css
body {
    text-align: center;
    font-family: Helvetica;
    background-color:#809fff;
    color: pink;
    margin: 20px;
}
```

If you want to change certain elements within the body, you can then add add more CSS selecting the specific 
element later on. An example of this would be to add this your code:

```css
ul{
  text-align: left;
}

ol{
  text-align: left;
}
```

### Step 9: Using `<div>` with CSS

Now if you want to change blocks of code within the body, but they are not all contained within one element,
you can select them by putting them inside a `<div>` element with a `class` or `id` attribute. 
The `<div>` element allows you to define a section of code without affecting the HTML.

For example, you can put all text inside a `<div>` element with the `id="content"`. An example of this 
code would be:

```html
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="styles.css"/> 
    </head>
    <body>
      <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
      <div id="content"> <!-- Opening <div> tag-->
        <h1>JoJo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p>I love<u>Justice!</u></p>
        <h3>LIVING MY BEST LIFE</h3>
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
        <h3>My Recent Work</h3>
        <ol>
          <li>D.R.E.A.M. the Tour</li>
          <li>Celebrity Watch Party on Fox</li>
          <li>NONSTOP Official Music Video</li>
        </ol>
      </div> <!-- Closing <div> tag-->
    </body>
</html>
```

The `<div id="content">` can now be selected in the CSS file using a `#` followed by the `id` name. A `class`
attribute would be selected using a `.` followed by the `class` name. `id` tends to be used when only specifying
only one section of code, while `class` may be used over and over again, and then called all at the same time
in the CSS file. An example of the CSS code would be:

```css
#content{
  margin: 30px 0;
  background: white;
  padding: 10px
}
```

### Step 10: Using `class` and `id` without `<div>`
In addition, the `id` and `class` attributes do not have to be used with a `<div>` element.
They could be used with most elements. An example of this would be:

```html
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="styles.css"/>
      <meta name="viewpoint" content="width=device-width, inital-scale=1">
    </head>
    
    <body>
      <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
      <div id="content">
        <h1>JoJo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p class="quote">Imma come back like a boomerang!</p> <!-- Adding an id named quote -->
        <p>I love<u> Justice!</u></p>
        <h3>LIVING MY BEST LIFE</h3>
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
        <h3>My Recent Work</h3>
        <ol>
          <li>D.R.E.A.M. the Tour</li>
          <li>Celebrity Watch Party on Fox</li>
          <li>NONSTOP Official Music Video</li>
        </ol>
      </div>
    </body>
</html>
```
And then can be used in the CSS file the same way as a `<div>` element. An example is shown:

```css
.quote{
  font-style: italic;
}
```

### Step 11: Making a footer
The last touch you can add to your website is adding a professional looking footer. You
can do this by simply adding a `<p>` element enclosed by `<div>` tags, with `id="footer"`.
The code may look something like this:

``` html
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="styles.css"/>
      <meta name="viewpoint" content="width=device-width, inital-scale=1">
    </head>
    
    <body>
      <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
      <div id="content">
        <h1>JoJo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p class="quote">Imma come back like a boomerang!</p>
        <p>I love <u>Justice!</u></p>
        <h3>LIVING MY BEST LIFE</h3>
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
        <h3>My Recent Work</h3>
        <ol>
          <li>D.R.E.A.M. the Tour</li>
          <li>Celebrity Watch Party on Fox</li>
          <li>NONSTOP Official Music Video</li>
        </ol>
      </div>
      <div id="footer"> <!-- Footer -->
        <p>Created by <i>Grace and Ashley</i></p>
      </div>
      
    </body>
</html>
```

In the CSS file you can add a border. In addition, when selecting a `id` or `class`, you 
can specify an element within them by adding a space and the element name. Your CSS made end up 
looking something like this:

```css
#footer{
  border-bottom: 1px #ccc solid;
}

#footer p{
  text-align: right;
  text-transform: uppercase;
  font-size: 80%;
  color: white;
}
```

## Congratulations!!!
You have now finished making your own personal website! Now go back and add things, change things, and just play
around. If you want to do something you don't know how to, don't be afraid of Google!  Next week we’ll be working on animations through the use of CSS!

Your finished code may look something like this:

### HTML File
```html
<!DOCTYPE html>
<html>
    <head>
      <link rel="stylesheet" href="styles.css"/>
      <meta name="viewpoint" content="width=device-width, inital-scale=1">
    </head>
    
    <body>
      <img src="images\Jojo.png" alt="Jojo" title="Jojo Siwa"> 
      
      <div id="content">
        <h1>JoJo Siwa’s Website</h1>
        <h2>by JoJo Siwa</h2>
        <p class="quote">Imma come back like a boomerang!</p>
        <p>I love<u> Justice!</u></p>
        <h3>LIVING MY BEST LIFE</h3>
        <ul>
          <li>Unicorns</li>
          <li>Sparkles</li>
          <li>Rainbows</li>
        </ul>
        <h3>My Recent Work</h3>
        <ol>
          <li>D.R.E.A.M. the Tour</li>
          <li>Celebrity Watch Party on Fox</li>
          <li>NONSTOP Official Music Video</li>
        </ol>
      </div>
      
      <div id="footer">
        <p>Created by <i>Grace and Ashley</i></p>
      </div>
      
    </body>
</html>
```

### CSS File
```css
img {
    width: 350px;
    margin: 8px;
}

body {
    text-align: center;
    font-family: Helvetica;
    background-color:#b19cd9;
    color: white;
    margin: 20px;
}

#content{
  margin: 30px 0;
  background: pink;
  padding: 10px
}

.quote{
  font-style: italic;
}

ul{
  text-align: left;
}

ol{
  text-align: left;
}

#footer{
  border-bottom: 1px #ccc solid;
}

#footer p{
  text-align: right;
  text-transform: uppercase;
  font-size: 80%;
  color: white;
}
```
