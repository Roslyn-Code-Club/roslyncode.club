---
title: Introduction to Lua
year: 2023
draft: false
category: lua
number: 1
---

## Workshop 1: Intro to Lua

Today we will learn about Lua. It is mainly used by game programmers due to its quick learning curve. 

### Variables

Data Types: 

> 1. number - no differentiation between floats, booleans or integers
> 2. Boolean - true/false
> 3. String - text, always surrounded by quotes ex: “Hello World”
> 4. Function - method (yes variables can be assigned the value of functions and is used pretty regularly)
> 5. Tables - a list or array of items, it’s mutable (add and remove stuff to it) and you can store multiple data types in one list


You don’t need to assign data types in lua and can assign any value to any type of variable. This is completely fine in lua and doesn’t result in an error

Example: 
```lua
x = 50
x = “Hello”
```

### The Concept of Nil

Nil is similar to null, in that it doesn’t represent a number, it just represents the absence of a value that is supposed to be there.
Where they differ, however, is that assigning nil to value completely deletes that variable from memory

If you say

```lua
x = nil
```

Then the value x is completely deleted from memory and the variable itself is deleted, which is not the case in java when you assign it a variable the value of null

### String Concatenation

Just put two periods to concatenate strings
```lua
print("The number is " .. 5)
```

***
### Object Oriented Programming 
**(You might wanna sit down for this)**

A “class” like in java doesn’t exist, however you can achieve the same effect with lists containing functions

```lua
function dogClass(name)
    -- public variables
    doggyBreed = "Golden Retriever"
    return{
        -- instance variables
        doggyName = name, -- always remember comma since it's in a list
        getName = function(self)
            return self.doggyName
        end,
        getBreed = function(self)
            return doggyBreed
        end,
        changeBreed = function(self, newBreed)
            doggyBreed = newBreed
        end,
        changeName = function(self, newName)
            self.doggyName = newName
        end
       
    }
end
```

We pass in **“self”** meaning this instance, and all instance variables must have a **“self”** before them while in the functions or else you will be referencing a different variable entirely

This means you could have an instance variable in the return and then a separate instance variable within the function your making with the same name and not have any conflicts. Now how do we actually use this and assign a variable to be this type of object?

Well, it’s pretty simple

```lua
    self.doggy1 = dogClass("Piper")
    self.doggy2 = dogClass("Lucky")
    print("Dog 1: " .. self.doggy1:getName())
    print("Dog 1: " .. self.doggy1:getBreed())
    print("Dog 2: " .. self.doggy2:getName())
    print("Dog 2: " .. self.doggy2:getBreed())
    print()
    self.doggy1:changeBreed("Husky")
    print("Dog 1: " .. self.doggy1:getName())
    print("Dog 1: " .. self.doggy1:getBreed())
    print("Dog 2: " .. self.doggy2:getName())
    print("Dog 2: " .. self.doggy2:getBreed())
    print()
    self.doggy1:changeName("Puddles")
    print("Dog 1: " .. self.doggy1:getName())
    print("Dog 1: " .. self.doggy1:getBreed())
    print("Dog 2: " .. self.doggy2:getName())
    print("Dog 2: " .. self.doggy2:getBreed())
    print()
```

When we call a method, we need to use a colon which automatically passes in the **“self”** for all of our functions, another way to call a function would be to say

```lua 
self.doggy1.changeName(self.doggy1, "Puddles")
```

And after we call all of this code, this is the result:

> Dog 1: Piper <br>
> Dog 1: Golden Retriever <br>
> Dog 2: Lucky <br>
> Dog 2: Golden Retriever

> Dog 1: Piper <br>
> Dog 1: Husky <br>
> Dog 2: Lucky <br>
> Dog 2: Husky

> Dog 1: Puddles <br>
> Dog 1: Husky <br>
> Dog 2: Lucky <br>
> Dog 2: Husky

<br>

### Additional Help 

For more help you can visit: 

1. Lua's Website &rarr; [Lua](https://www.lua.org/)
2. Math Syntax &rarr; [Math Library](https://www.tutorialspoint.com/lua/lua_math_library.htm)
