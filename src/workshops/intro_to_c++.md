---
title: Introduction to C++
year: 2023
draft: false
category: cpp
number: 5
---


# Intro to C++

## What is C++?

C++ is a versatile programming language with a rich set of features that make it suitable for a wide range of applications. It is known for its efficiency, performance, and flexibility. Understanding C++ is crucial for anyone looking to delve into microcontroller programming, game development, networking, and more! 

Many of you will find it fairly easy to learn, as it is similar to Java in many aspects!

## Your First C++ Program

Let's start with a simple "Hello, World!" program in C++ to get you familiar with the basics.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```
**Explanation:**
- `#include <iostream>`: This line includes the Input/Output Stream Library for basic input and output operations.
- `int main()`: Every C++ program must have a `main` function, and the execution starts from here.
- `std::cout << "Hello, World!" << std::endl;`: This line prints "Hello, World!" to the console.
- You can also simply state **using namespace std;** at the top instead of constantly saying "std::". However, for large projects try to avoid it and stick to the classic **std::** 

## Variables and Data Types

In C++, variables are used to store data. You need to declare the type of the variable before using it. Common data types include `int`, `float`, `double`, and `char`.

```cpp
#include <iostream>
using namespace std; 
int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';

    cout << "Age: " << age <<"\n";
    cout << "Height: " << height << " feet" <<endl;
    cout << "Grade: " << grade <<endl;

    return 0;

    // endl or \n means new line
}
```

## Control Flow Statements

C++ supports various control flow statements like `if`, `else`, `for`, and `while`. 

```cpp
#include <iostream>
using namespace std; 

int main() {
    int num = 7;

    if (num % 2 == 0) {
        cout << num << " is even." <<endl;
    } else {
        cout << num << " is odd." <<endl;
    }

    for (int i = 1; i <= 5; ++i) {
        cout << i << " ";
    }
    cout <<endl;

    return 0;
}
```

## Functions

Functions allow you to break down your code into manageable pieces. In C++, you define a function using the `function_type function_name(parameters)` syntax.

```cpp
#include <iostream>
using namespace std; 

// Function declaration
int add(int a, int b);

int main() {
    int result = add(3, 4);
    cout << "Sum: " << result <<endl;

    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}
```

This is only an introductory lesson for C++, but next week we'll dive deeper into how to handle exceptions, object oriented programming (oop), pointers and more! 
