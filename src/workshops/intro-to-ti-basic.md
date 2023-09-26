---
title: Introduction to Ti Basic
year: 2023
draft: false
category: other
number: 2
---

## Workshop 2: Intro to Ti Basic

Today we will be learning about how to code on your very own calculator! 

### Making a New Program

To start a program simply press:
**prgm &rarr; new &rarr; create program**

### Variables

Each number variable can only be one character long and must be either a letter or the theta symbol

This means that you can only have 27 variables that contain numbers in a program

String variables (text) can only be called **Str(1-9) or Str0**, meaning there are only 10 variables that can hold strings (ex: Str1, Str2, Str3 …) To find these characters go Vars->Option 7

Lists are technically a type of variable, but also you can have a ***“real”*** variable and a ***“list”*** variable with the same name in Ti-Basic so I’ll save them for later for both your and my sanity

Declaring variables examples:

```json
0→A
A+1→A
```
> This assign the variable “A” a value of zero, and then increments it by one

```json
"Hello"→Str1
Str1+" World"→Str1
```
> Assigns “Str1” to “Hello”, then changes it to “Hello World”


**Important** - ***The sto→ key is right above the on key and it’s the arrow symbol that allows you to store your value inside a variable***


### Input

Input
```json
Input “Input Please: “, A
```

For Strings
```json
Input “Input Please: “, Str1
```

After Running your calulator should say: **Input Please:**

The program will stop once the user puts a value (number or otherwise)

> Side Note: If you input a string but you assign it to a number variable, it won’t result in an error, but the number will have the value of 0

To get the option of using Input, when you’re editing your program, you press the **prgm button**, then go to **“I/O”** tab, and then select **input**

If you type **“INPUT”** with your alpha key you **WILL** get an error

### Output

```json
Disp "Hello World"
```

This displays your given text on either the very left or right side of the screen on a new line. Why the left OR the right? I do not know and I have put 2 hours down the drain trying to find a reason, so go figure 

```json
Output(R, C, "Text")
```

The output function takes three parameters, Row, Column, and Text. Colored Ti-84’s have 10 rows and 26 columns. Top left is 1,1

### Logic and Loops

**If Statements**
```json
If condition
Then
…
End
```

For conditions, you have to go press **2nd &rarr; Math** and then put the conditions like **<, >, or =**

Now there isn’t technically booleans that you can assign to variables, but you can achieve the same effect just using numbers
A number with a value of 0 evaluates to false and any other value evaluates to true


#### Lbl & Goto

You make a label called something, then you call **Goto** the name of that label, your program will go back to where your label is

Labels can be a whole **TWO** characters long (wow), you can also have a variable and a label of the same name and your code still works!

Ex w/Label & Goto
```json
0→X
Lbl ST
If X<5
Then
X+1→X
Goto ST
End
Disp X
```

This essentially does what a for loop would do, if the variable, X, is lower than 5 keep incrementing at until it equals 5, then display X


#### While Loops 

```json
While condition
...
End
```

#### For Loops
```json
For(I, 1, A, 1)
...
End
```

> For (New Variable, New Variable Initializer Value, Less than or Equal to this Number/Variable, New Variable goes up by this amount each time loop repeats)

So the for loop I wrote in the example would look like this in java:

```java
for(int i = 1; i<=a; i++){
//Code Here
}
```

### Lists

Lists are mean, bad, and I hate them. It’s totally not because it took me 3 hours to figure out how to save a game

You can use the normal lists (L1, L2, L3, L4) for your program (which is quite useful in Stat) but you can also make your own, sectioned off lists of your choice

Lists can be a whole **FIVE** characters long, and each list can store up to 999 variables (only numbers though, use String wisely)


You can put multiple variables in a list like this

```json
{5,6,7,1,2,3,4}→L1
```

This stores those numbers into L1, then to call each individual number, you just put what number of the list it’s in
```json
L1(3)
```

This would then return the value of 7

You can also make variables and Lists of the same name
```json
5→A
{6,7,8,9}→A
Disp A
Disp ⌊A
Disp ⌊A(4)
```

This would display:
> 5 <br>
> {6 7 8 9} <br>
> 9

You can find the **⌊** by going to **2nd &rarr; Stat** and scrolling to the **“OPS”** tab and it’s the last option
You can also append new items to a list by setting a value to and index 1 more than the list length

```json
{1,2,3}→A
4→⌊A(4)
```

Also, if you attach a value to a commonly used variable like Theta or X or L1, they will still be changed even **AFTER** the program is run, so if you’re messing with that stuff, I’d recommend doing a **memory clear** before a test. You can do this by pressing **2nd &rarr; ”+”** button, then **RAM clear**. You can do a full memory clear too, but that would delete your save data from games in your archived data too

### Saving

I’m going to be honest with this one, I don’t completely understand this either, but I’ll try my best, for more info go to this [Ti Basic](http://tibasicdev.wikidot.com/saving#:~:text=First%2C%20use%20the%20syntax%20%7Bvalue,will%20be%20overwritten%20and%20replaced.)

So to save things just into Ram (temporary storage) (will be deleted if your teacher requires you to clear your ram before a test) you can just save it to a list and it will stay there after the program terminates


The preferred way, though (apparently), is to add the list to the Calculator’s archive
Ex:
```json
Archive ⌊A
```

You can put the Archive command by pressing **2nd &rarr; ”+” button &rarr; Option 5**

**Important** - ***Don’t archive List 1-6, make sure you make your own list since other programs can’t access a list if it’s archived***

Then to use it when you start the program, you don’t UnArchive it, otherwise it gives you an error if the list doesn’t already exist, so you use

**SetUpEditor (Stat &rarr; Option 5)**
```json
SetUpEditor LIST
If not(dim(⌊List))
Then
{--List Numbers--}→LIST
--Initalize variables to default values here
Else
⌊LIST(1)→X
⌊LIST(2)→Y
⌊LIST(3)→Z
---Initalize whatever other variables you stored---
End
```

Explanation: **dim(LIST)** gives the length of the list, if it already exists we presume the length is greater than zero, and remember, a number with a value of zero evaluates to false

To get the **“dim”** expression press **2nd &rarr; Stat &rarr; OPS &rarr; Option 3**


### Quality of Life

**ClrHome (pgrm &rarr; Option 1)** clears the home screen

Putting **“** literally just a single quote with no spaces at the end of the program gets rid of the **“done”** message when your program terminates

Using everything we learned we can now make a basic clicker that saves:
```json
CLRHOME
SetUpEditor SAVE
If not(dim(⌊SAVE))
Then
{0}→SAVE
0→X
Else
⌊SAVE(1)→X
End
Disp X
While 1
Pause 
X+1→X
UnArchive ⌊SAVE
X→⌊SAVE(1)
Archive ⌊SAVE
ClrHome
Disp X
End
```

Also this does run an infinite loop, so to terminate the program you have to power off your calculator (:/ I tried, okay)


### Additional Help 

For more help you can visit: 

1. Ti Basic Programming Course &rarr; [Ti Basic](https://www.youtube.com/watch?v=flXI07A497I&list=PLLEIJPZzZdY1hxnh2k9SL1aEM4aoG80SV)





