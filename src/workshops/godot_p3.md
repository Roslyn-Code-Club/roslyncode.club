---
title: Godot Pt. 3
year: 2023
draft: false
category: godot
number: 9
---

Hey everyone! Last time we went over aesthetics and how to get time involved into our games. Today we'll be going over had to get **collectables** to further round out and complete our game. As always if you ever need to remind yourself go back to previous lessons to freshen up your memory. 

# Collectables and Sub Scenes 

To begin add an Area2D Node to your scene, this will allow use to detec collisions between the collectables and other sprites 
Then simply add a Sprite child beneath the Area2D

![Sprite_Child](https://raw.githubusercontent.com/Roslyn-Code-Club/roslyncode.club/main/public/img/Godot/spritechild.png)

You can make the sprite whatever you like
Then add a CollisionShape2D

Then right click your Area2D node and click on “Save Branch As Scene”

![Branch](https://raw.githubusercontent.com/Roslyn-Code-Club/roslyncode.club/main/public/img/Godot/branch.png)

Then save the scene somewhere in your project, most likely you will have multiple subscenes in your game so I would make a separate folder for them

After you saved your subscene, simply go into that subscene folder and drag and drop it onto the window

After you’ve done that we need to make the detection system, so we first need to open up the subscene, we do that by clicking the little clapperboard icon

![coin](https://raw.githubusercontent.com/Roslyn-Code-Club/roslyncode.club/main/public/img/Godot/coin.png)

Then right click your Area2D Node and make a script

![script](https://raw.githubusercontent.com/Roslyn-Code-Club/roslyncode.club/main/public/img/Godot/script.png)


You can delete all the initial functions besides the statement “extends Area2D”
Then in the inspector on the right, switch the tab to “Node” and then double click on “body_entered”

It will then prompt you to connect it and hit the button that says “Connect”

Then in the function all you need to write is:

```json
func_on_body_entered(body):
    if(body.name=="Player"):
        queue_free() #deletes coin instance
```

Then add a blank Node (In your full scene, not this subscene) and call it GameManager

Then remove all the code it gives you besides the “extends Node” at the top
Then add a coin variable counter and make a function that increases your variable by a certain amount, like so

```json
extends Node

var coins = 0

func addCoins(coinAmount):
    coins+=coinAmount
```

Then right click the game manager and click “% Access as Unique Name”

Now go back to your coins script and add: 

```json
extends Area2D
@onready var game_manager = %GameManager
```

Then in your _on_body_entered function add this: 

```json
func _on_body_enetered(body):
    if(body.name=="Player"):
        queue_free() #deletes coin instance
        game_manager.addCoins(randi_range(1,3)); #Gives the player a random amount of coins from 1 - 3
```

This will increase the value of the coin counter randomly from 1 to 3, if you want it to be a set amount feel free to do so but I like making everything in my games luck based

Then to actually make the counter show we need to make a Coin counter

We do this by making a “Canvas Layer”

Then going and adding a “Label” underneath it

Then all you need to do is go back in the GameManager script, connect the label and then set the text to the number of coins you have

```json
var coins = 0
@onready var coinText = $"../CanvasLayer/Panel/Label" #I am too lazy to make a #name for this, so sue me 

func addCoins(coinAmount):
    coins+=coinAmount
    coinText.text = "Coins: "+str(coins)
```

Then you're done, you have a game with working movement, collisions, and collectables!

