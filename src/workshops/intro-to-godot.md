---
title: Intro to Godot
year: 2023
draft: false
category: godot
number: 7
---

# Intro to Godot

## What is Godot

We are working with Godot 4.0.1, so if you’re working with something newer or older the scripting may be slightly different

Godot is written in its own language called GDScript and that's what we’ll be using. It does have support for other languages but I won’t be using those because learning one new language is enough for a workshop.

If you need a reference for syntax, it can be found here: **[Reference](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html)**

## Starting Your 1st Project

After you make your first project, you’ll see this panel on the top left: 
![top panel](../public/img/Godot/toppanel.png)

Godot is mainly a 2D Engine, and I’m not going to try to fiddle with an inferior 3D graphics system, so we’re going to make a 2D Scene (blue icon near the top)

To rename it, either select it and press “F2”, or right click and select the rename option, I’ll rename mine “Main” for now

Now we are going to add a tile map system, we do this by clicking the “+” button on the top right and then searching tilemap

![tile map](/public/img/Godot/tilemap.png)

Then click the “create” button at bottom of the pop-up

Now, on the left there should be an inspector window, change the “Tile Set” from “None” to “Tileset”

![tile set](/public/img/Godot/tileset.png)

You can also change the cell quadrant size which is right below the Tile Set option, and it decides how many pixels of an image are going to be in each tile of your game

Now, since this is just for example purposes, I’m going to be using someone else’s artwork, which 
you can find **[Here](/https://anokolisa.itch.io/sidescroller-pixelart-sprites-asset-pack-forest-16x16)**

Once you make a titleset, simply put it into your project folder, and then drag the image from the bottom left of your screen into the “Tiles” box

![tile box](/public/img/Godot/tilesbox.png)

Then you will get this popup and click yes if you want your tiles to be split up automatically (do this assuming you formatted your tileset correctly or are just using the same one I am)

![auto create](/public/img/Godot/autocreate.png)

Now to make sure our player doesn’t fall out of the world we need *physics*, everyone’s favorite

To do this we need to click on our tileset to see expanded options that should look something like this:

![physics](/public/img/Godot/physics.png)

Now, we expand physics layers and click the “+ Add Element” button

You should now see something like this:

![layers](/public/img/Godot/layers.png)

The numbers just should which layers collisions are on, but we’re only going to be working with one layer, so we’ll leave it like this

Just to keep things organized I like to label my layers, I’ll name this ground but this is optional

We still need to actually make the collider for each tile though, so now we have select our tiles by clicking the “select” option  (if you don’t see this, just re-select your tilemap)

After that, just select a tile you want to apply a collider on, and click the “Physics” dropdown

Just click the three dots icon and select “reset to default shape”

![collider](/public/img/Godot/collider.png)

The red shows the collision box, I’m going to shift it slightly using the 4 dots in the corner since there are some transparent pixels in my sprites, but if you want the whole thing to be 

After you’re done adding colliders to each of your tiles, simply go into TileMap mode

Now simply press on your tiles and draw on your tilemap:

![pixel](/public/img/Godot/pixelart.png)

However, when we run, since this is all pixel art, Godot shows it as something really small: 
So now we have to change the project settings

1. Go to Window			
2. Then go to scale and change it to 4 instead of 1
3. Then go to textures				
4. And change it to “nearest”

![settings](/public/img/Godot/settings.png)

This makes it bigger, and since we’re working with pixel art, it automatically look blurry but setting the textures to nearest makes sure it renders it in pixels and doesn’t try to smooth it out

Now we need to actually make a character. We do this by adding a new node called “CharacterBody2D”

![2d body](/public/img/Godot/twodbody.png)

Then we need to add a child node to the CharacterBody2D called CollisionShape2D to define shape of the collision

Then in the inspector we pick a shape for it, usually for most 2D games, you use a capsule collider like this:

![2d shape](/public/img/Godot/2dshape.png)

But if you want to use a rectangle that’s up to you
Now we need to add a sprite, which we can do by searching up “Sprite 2D” and dragging your chosen picture onto it
If your picture is an animation strip, simply change the HFrames to the number of animation frames you have

I have a sprite that looks like this:

![sprite](/public/img/Godot/sprite.png)

So I’ll set HFrames to 4
To cycle through each frame, just increase the “Frame” selector, it’s like an array, first image at 0, last one at frameNumber-1

For reference this is what your left main should look like right now:
![ref](/public/img/Godot/ref.png)

However, our player still doesn’t fall yet, so we need to add a script to it so that we can code in it

We can find this option in the inspector
It will automatically give us this popup:

![script collider](/public/img/Godot/colliderscript.png)

Keep the player template since it will automatically give our player movement and gravity and click create

This will immediately take you to a code inspector, where you can test your game and check the speed of the player and change it

Here’s a list of things it automatically sets up:
- Gravity
- Jumping (space bar)
- Player Movement (arrow keys)

Then add a Camera 2D to the main node and add a RemoteTransform2D node under the player

Then click assign in the inspector of the remote transform 2D node and select the camera

![assign](/public/img/Godot/assign.png)

Now you have a fully functioning platformer!




