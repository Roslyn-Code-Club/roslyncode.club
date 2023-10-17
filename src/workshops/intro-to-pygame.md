---
title: Introduction to Pygame 
year: 2023
draft: false
category: python 
number: 3
---

## Intro to Pygame 

For PyGame you need a basic understanding of Python already, and if you don’t I recommend this **[Guide](https://www.w3schools.com/python/default.asp)** to get started

### Basic Window

```Python
windowName = pygame.display.set_mode((windowLength, windowHeight)) 
#Displays window with specified length and height
```

### Loading Sprites

```python
sprite = pygame.image.load("sprite image.png") 
#path of were the sprite image is stored
sprite = pygame.transform.scale(sprite, (length,height)) 
#Rescale image to fit screen size
```

Now to actually display the sprites we use the **.blit** command (this should be in you’re While True loop)

```python
windowName.blit(sprite, (spriteX, spriteY))
```

### Adding Text

```python
font = pygame.font.Font(None, 50) 
#If you want a specifc font, just get .ttf file and put the file path for the in quotes just like an image
text = font.render("Hello World", False, "White") 
#Second Parameter is Anti-Analisasing aka if you want the font to be smooth
```

### Input 

First, this step is optional but you won’t have to write **pygame.(Key)** every single time if you include this

```python
from pygame.locals import (
    K_UP,
    K_DOWN,
    K_LEFT,
    K_RIGHT,
    K_ESCAPE,
    KEYDOWN,
  KEYUP,
    QUIT,
)
```
There are two if statements that you really need to use (also remember all of this should be in a while True loop)

```python
for event in pygame.event.get():
    if event.type == KEYDOWN:
    # Sets speed based on key, btw it uses ARROW keys
      if event.key == K_DOWN:
          print("Key Down")
  # User let up on a key
    elif event.type == pygame.KEYUP:
      # If it is an arrow key, reset speed back to zero
      if event.key == K_Down:
	print("Key Pressed")
```

When your **down key** is pressed, first it is registered as going ***“down”*** and then once your key is released it is registered as going ***“up”***
Since it only runs on **KeyDown** and **KeyUp**, we only move every time we push the button down not when we hold it down
To circumvent this, we set a speed for the sprite and then add the speed to the coordinate every frame. So instead of m/s in physics we are setting the **pixel/frame**
In all, it will look something like this:

```python 
for event in pygame.event.get():
    if event.type == KEYDOWN:
    # Sets speed based on key, btw it uses ARROW keys
      if event.key == K_DOWN:
          speedY = 2 
          #Remember, positive Y means down with this coordinate system
  # User let up on a key
    elif event.type == pygame.KEYUP:
      # If it is an arrow key, reset speed back to zero
      if event.key == K_Down:
	speedY = 0 #Resets speed to zero
spriteY += speedY
```

So now our sprite will move down while we hold down the key too!

### Capping Framerate

Why would we do this? Higher frames means better gameplay, right? Well, usually, yeah, but in this case we tied how fast our player moves based on the frame rate. Which is not good practice but I literally can’t find anything else to make player movement consistent between different systems, so you’ll just have to deal with it

```python
#Outside of the Loop
clock = pygame.time.Clock()
#Inside of the loop
clock.tick(60) 
#Caps frame rate at 60, you want to do 120, go for it, but you need to make sure basically all systems can achieve this framerate otherwise the movement of the player will be inconsistent
```

### Collisions

Pygame doesn’t really have a collision detection system. A lot of things say it does, but I can’t get it to work, so I might just be stupid. But, not to fear, I made a collision detection function from scratch. (It’s just box (not even rectangle) collisions, sorry)

```python
# ox1 - object 1 x pos, oy1 - object 1 y pos, oS1 - size of object 1
def collided(ox1, oy1, ox2, oy2, oS1, oS2):
  return (((ox1 > ox2 and ox1 < (ox2 + oS2)) or ((ox1 + oS1) > ox2 and (ox1 + oS1) < (ox2 + oS2)))) and ((oy1 > oy2 and oy1 < (oy2 + oS2)) or ((oy1 + oS1) > oy2 and (oy1 + oS1) < (oy2 + oS2)))
```

With this you should start to have the basics of a game!


### Additional Help

If you still need help on today's lesson you can visit Nevilles pygame demo or watch the tutorial video linked below
1. Nevilles Pygame Project &rarr; [Repl.it](https://replit.com/@NevillePethani/Pygame-Demo?v=1)
2. Pygame Tutorial Video &rarr; [Tutorial](https://www.youtube.com/watch?v=AY9MnQ4x3zk)




