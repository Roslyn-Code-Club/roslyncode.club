---
title: Introduction to CSS
year: 2022
draft: false
lang: css
slug: introtocss
number: 2
---

## Workshop 2: CSS

In this workshop, we will explore the capabilities of CSS.

# CSS

### Step 1: Setting up CSS

Open up a new repl project and select the “HTML, CSS, JS” template or open up the one you made in the previous workshop.
In order to link the CSS file to your HTML code, you have to add a few lines of code to the <head> of your HTML code.
Type in <link rel=“stylesheet” href=“styles.css”/>
The rel attribute defines what is being linked and the href attribute specifies where the file for the linked item can be found.

```
<html>
    <head>
      <link rel="stylesheet" href="styles.css"/> <!--Link the CSS file-->
    </head>
...
</html>
```

### Step 2: Altering an Image

After linking your CSS file to your HTML code, you can now go to your CSS file and start styling your Webpage.
To alter an image, select the img element. You can alter the width, border, opacity, and even add filters to an image.
Example:

```
img{
	width: 200px;	<!--Changes the image width-->
	border-radius: 50%;	<!--Changes the border shape-->
	opacity: 0.5;	<!--Changes the opacity-->
	filter: grayscale(100%);     <!--Changes the filter-->
}
```

There are other formatting and filter options that you can explore. You can find them on https://www.w3schools.com/css/css3_images.asp

### Step 3: Adding More Styles to Your Webpage

You can also use CSS to style the text in sections of your webpage.
For example, you could alter the text in the `<body>` of your webpage:

```
body {
	color: blue;
	font-family: arial;
	font-size: 200%;
	background-color: C7EBF2;
	margin: 25px;
	text-align: left;
}
```

### Step 4: Using <div> with CSS

The `<div>` element allows you to alter sections or blocks of code that are not part of one element.
For example, you can separate a section of code with `<div id=“content”>` `</div>`
This would allow you to select this block of code in CSS.
To call an id, use a # followed by the id name.
To call a class attribute, use a . followed by the class name.
Example (from last year; can use the example from last workshop as well)

### Challenge

Use CSS to turn an unordered list into a navigation bar for your website! (Hint: think about the different attributes of a navigation bar)
