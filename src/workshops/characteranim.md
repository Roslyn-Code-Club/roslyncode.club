---
title: Character Animation
year: 2021
draft: false
lang: css
slug: characteranim
number: 2
---

## Workshop 2: Character Animation

### Step 1: Setting up the files

To start, create two files: `CharacterWalking.html` `CharacterWalkingAnimation.css`

Next, open the `CharacterWalking.html` file. First, we will declare a doctype. We’re using html as our coding language, so we will type `<!DOCTYPE HTML>`.

Now, we will create the shell of the webpage. Start with the `<html>` tag. Inside the html tag, put a `<head>` tag and a `<body>` tag. Your file should look like this:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

Inside the `<head>` tag, put a `<title>` tag and type `CharacterWalking` to title the webpage. Then link the html file to the css file by typing `<link href="CharacterWalkingAnimation.css" rel="stylesheet">` in the head.

Then, create the classes for the runner and the road inside the body. Type `<div class="runner"></div>` for the runner and `<div class="road"></div>` for the road inside the body.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>CharacterWalking</title>
    <link
      rel="stylesheet"
      type="text/css"
      href="CharacterWalkingAnimation.css"
    />
  </head>
  <body>
    <div class="runner"></div>
    <div class="road"></div>
  </body>
</html>
```

### Step 2: Find a sprite sheet

Go on google and search for a sprite sheet (must be horizontal with a transparent background). Then save the png into your project folder under the name sprite_sheet

Click [here](https://www.spriteland.com/sprites/downloads/hobbit-style-sprite-sheet-walk-left.png) for an example

### Step 3: Writing the Runner

Now you can begin coding css! In order to modify the classes you created previously, you will want to start off by writing .runner{

You then must address the photo you selected, so write background:url(“sprite_sheet.png”);
To declare the width for each character, take the width of the image and divide by the number of characters you have. Our sprite image was 1536 px so divided by the 6 characters, the width would equal 256 px:
`width: 256px;`

Use the same height as the height of your selected image:
`height: 256px;`

Then to incorporate the actual animation, write
`-webkit-animation: walking .5s steps(6) infinite, forward 3s linear infinite;`

The speed is currently set to .5s. If you want to make it go faster, lower the seconds and if you want to make it go slower, increase the seconds. Because we used 6 characters, we put 6 in the parentheses but if you have 4 for example, you would put 4.

All together it should look like:

```css
.runner {
  background: url("sprite_sheet.png");
  width: 256px; /*depends on your image*/
  height: 256px; /*depends on your image*/
  -webkit-animation: walking 0.5s steps(6) infinite, /*cycle through images*/
      forward 3s linear infinite; /*move to the right*/
}
```

### Step 4: Creating the road

To create the road, we will use a dashed border. Use `.road{}` to modify the road class created earlier. Inside this element, type `border-bottom:7px dashed black;` to create the road.

You can modify the thickness of the road by changing the 7px to whatever thickness you’d like, and you can change the color by changing black to a color you’d like (you can use the color name, hexcode, RGB, HSL, or CMYK - we recommend using [this](https://htmlcolorcodes.com/) website to find a color you like).

The current state of the `CharacterWalkingAnimation.css` should be:

```css
.runner {
  background: url("sprite_sheet.png");
  width: 256px; /*depends on your image*/
  height: 256px; /*depends on your image*/
  -webkit-animation: walking 0.5s steps(6) infinite, /*cycle through images, number of steps depends on your image*/
      forward 3s linear infinite; /*move to the right*/
}
.road {
  border-bottom: 7px dashed black;
}
```

### Step 5: Using keyframes to cycle through images

You want to initiate the keyframes by first writing
`@-webkit-keyframes walking{`

Then to initiate your starting position you write
`0%{`

If you want to go from the left to the write, you will begin your position at 0px
`background-position: 0px }`

Then when your character is at its final position it as at 100% so simply write
`100%{`

Then you want to put the final position of your character, which is the total length of the image (ours was 1536px). If you are going from left to right instead, here you will want to write 0px
`Background-position: 1536px;`

All together it should look like:

```css
@-webkit-keyframes walking {
  0% {
    background-position: 0px;
  }
  100% {
    background-position: 1536px; /*depending on your image*/
  }
}
```

### Step 6: Using keyframes to move image to the right

To move the character forward, you will use the transform property in css. Create the keyframes for the forward at-role defined in the runner class. Remember to add -webkit to allow it to work in webkit browsers. `@-webkit-keyframes forward{}`

Next, define the keyframes as 0% and 100%.

```css
0% {
}
100% {
}
```

Use the transform property and translateX to translate the X position of the image. You want the image to start off screen so inside the 0%, type `transform:translateX(-100px);` to start it at -100px in the x position.

Now, use translateX to specify the ending position, when the 100% keyframe is reached. We used 1920px since that’s the size of our monitor:

```css
@-webkit-keyframes forward {
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(1920px);
  }
}
```

### Step 7

Now you are done with the code! Make sure you save it and go back into your program folder to run it. You can change the colors and change the speed of the animation. Also, you can try to change the background using the workshop from last week.
