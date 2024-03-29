---
title: Pygame Pt. 2
year: 2023
draft: false
category: py 
number: 4
---

## Pygame Part 2

Last time, we went over the basics of pygame, which you can check out in the previous lesson. Today we will continue our pygame adventure, as we learn how to add buttons and animations! 

### Buttons

Pygame doesn’t have in-built buttons, so once again, I made a button to check if your button was pressed

```python
def buttonPressed(mousePos, buttonX, buttonY, buttonWidth, buttonHeight):
    return mousePos[0]>buttonX and mousePos[1]>buttonY and mousePos[0]<buttonX+buttonWidth and mousePos[1]<buttonY+buttonHeight
```

Here’s an example in a while True loop

```python
elif event.type == pygame.MOUSEBUTTONDOWN:
    mouse = pygame.mouse.get_pos()
    if buttonPressed(mouse, storyButtonX, storyButtonY, buttonWidth, buttonHeight):
        gameState = 1
```

Essentially what this function does is it checks when you click on your mouse, does you mouse position fall within the button box. If you have a circular button, use a rectangle hitbox, otherwise you have to make it yourself.


### Animation

For animation, you can’t just put in a gif or video, you have to separate it into separate images, one for each frame of your animation

Now this depends on your framerate, which you can check in your loop and should look something like this:

```python
fpsClock.tick(60)
```

The 60 means 60 frames per second, so if your animation is 60 frames per second, you can just say

```python
if fpsCounter<animationFrames:
	screen.blit(animation[fpsCounter], (x, y))
fpsCounter+=1
```

Otherwise you’ll have to do something like this

```python
#At very top of code
import math
#In while True loop
if math.floor(fpsCounter/frameRate)<animationFrames:
	screen.blit(animation[math.floor(fpsCounter/frameRate)], (x, y))
fpsCounter+=1
```

The code above works for any framerate, for example if we have a 60 frames per second menu and a 15 frames per second animation, it would only change the animation image once every 4 frames


### Outlining Text

Follow the link below
[Pygame Text](https://www.pygame.org/pcr/hollow_outline/index.php)


### Additional Help

If you still need help on today's lesson you can visit Nevilles pygame demo or watch the tutorial video linked below
1. Nevilles Pygame Project &rarr; [Repl.it](https://replit.com/@NevillePethani/Pygame-Demo?v=1)
2. Pygame Tutorial Video &rarr; [Tutorial](https://www.youtube.com/watch?v=AY9MnQ4x3zk)

