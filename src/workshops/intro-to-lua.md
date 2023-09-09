---
title: Introduction to Lua
year: 2023
draft: false
category: js
number: 1
---

## Workshop 1: Intro to Lua

Today we will learn about Lua. It is mainly used by game programmers due to its quick learning curve. 

If you are using multiple Lua files for a game, which you most likely will do, you must have a require statement for each file in the main.lua file

```lua
Example:
main.lua
player.lua
conf.lua
```


The main heading would be: 
```lua
require("player")
```


If you need to any more love2D specific functions, please reference [Love 2D](https://love2d.org/wiki/love)
