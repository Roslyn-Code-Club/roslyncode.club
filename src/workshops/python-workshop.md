---
title: Python Workshop
year: 2019
draft: false
category: py
number: 2
---

### 1. Sign in on [repl.it](https://repl.it)

- Create a new repl
- Select Python for the language and name the Repl "Python Workshop"

### 2. Create a file called helloWorld.py

- To start our workshop we will simply print the phrase "hello world"
- To do this you must type `print()`, and put hello world, in quotations, in the parenthesis
- After doing this just press run and see if it worked

## Variables
---
### Creating String Variables

1.  Create a name for your variable
2.  Assign the variable a string value, in this case we will assign it the value of `"hello world"`

```python
variable = "hello world"
```

3. To use this variable, simply type print(variable), press run, and it should show hello world

### Creating Number Variables

1. Just like for string variables you must come up with a variable name, the only difference is that you have to assign the variable a numerical value

```python
number = 5
```

2. To check to see if this works type `print(number)` and see if it prints 5

## Basic Operations
---
#### Python allows the use of all basic operations, such as addition, subtraction, division and multiplication

1.  Try typing in any calculation and then pressing run

## Using mathematical operations with variables
---
#### Python also allows you to use numerical variables to perform basic mathematical operations

1. Create two variables and assign them a numerical value
2. Then try to perform a operation with these variables

```python
num1 = 7
num2 = 6
print(num1*num2) //should print 42
```

## User input with string values
---
#### User input allows you to assign variables with values that the user selects
To use user input with string values you must type:

```python
variable = input(“whats your name? “)
```

This will put a message on the screen that says “Whats your name?” and then allows the user to type their name. It then then assigns the name to the variable.

To print the name just type `print(variable)`

## User input with integer values
---
#### Using user input with integer values will be very helpful when trying to make calculators
To do this you have to type:
```python
num = int(input("enter a number: "))
print(num)
```

This will ask the user to “enter a number” then will print that number.

## If Statements
---
#### If statements allow the computer to carry out certain commands if certain conditional statements are true
For example:
```python
variable = int(input(“enter a number: “))
if variable < 7:
print(variable)
```

This would print the value of variable if it is less than 7

## Now try building something on your own!