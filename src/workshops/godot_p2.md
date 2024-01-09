---
title: Godot Pt. 2
year: 2023
draft: false
category: godot
number: 8
---

Hey everyone! Last time we introduced the fundamentals of Godot as we began creating our own games. You should have been able to create a character sprite, but now it's time to get creative. Today we will be going over aesthetics and how to get animations. 

#   Aesthetics

Replace your **Sprite2D** with an **AnimatedSprite2D**

With an Animated Sprite you can add multiple different animations, from walking to jumping and idle all in one sprite instead of making multiple Sprite2D’s and switching them out

![sprite frame](https://raw.githubusercontent.com/Roslyn-Code-Club/roslyncode.club/main/public/img/Godot/spriteframe.png)


Under the properties of the animated sprite, make new SpriteFrames

Then double click sprite frames again and you should get this window on the bottom

![frame window](https://raw.githubusercontent.com/Roslyn-Code-Club/roslyncode.club/main/public/img/Godot/framewindow.png)

Now click the grid/wafer icon &rarr; **&#9638;**, select your sprite sheet and then look at the top right of the popup

Change the horizontal and vertical to how many sprites are in your sprite sheet

Then you can change the frame rate by changing the fps, usually I like 4 fps, it looks a bit choppy but it works, if you want something that looks super smooth do (maximum) 14 fps

Also you may see that is your animations that they aren’t lined up properly, that’s because godot auto center’s each sprite, so you can just untick that on the side (in the offset properties)

#   Coding Time

To switch to the coding tab, click the **“Script”** button on the top center

To be able to use our sprite in our code, we have to connect it
**@onready var animated_sprite : AnimatedSprite2D = $AnimatedSprite2DName**

> 1. **@onready** &rarr; Makes sure that the animated sprite is loaded before the code executes, otherwise you may get an error
<br>
> 2. **“: AnimatedSprite”** &rarr; Sets the data type. Not necessary, but helps if you are working with other people  &since it’s not always apparent what the variable actually is given the name
<br>
> 3. **“$AnimatedSprite2DName”** &rarr; What you named your sprite in the scene


Now to set the sprite animations, all you need to do is say 
**animated_sprite.play(“Animation Name”)**

Now the character only faces one way, but we can change that using the direction

If the direction is **less than 0**, set the **animated_sprite.flip_h = true** and if it is **greater than 0** set it to **true**

> - **Flip_h** &rarr; just means to flip the horizontal axis of the sprite

It’s also good practice to make separate functions so you can read your code easier and know at a glance what everything is doing

For example:

![code](https://raw.githubusercontent.com/Roslyn-Code-Club/roslyncode.club/main/public/img/Godot/timecode.png)




