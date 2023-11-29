---
title: C++ Pt. 2
year: 2023
draft: false
category: cpp
number: 6
---

# Intermediate C++ Concepts

Last week we got into the basics of C++ (really similar to java)! Today, let's delve into some intermediate C++ concepts. In this lesson, we'll cover topics such as classes and objects, pointers and memory management, and file I/O. 


## 1. **Classes and Objects:**
   - **Class Declaration:**

   ```cpp
   // Class declaration
   class Car {
   public:
       // Member variables
       string make;
       string model;
       int year;

       // Member functions
       void displayInfo();
   };
   ```

   - **Class Definition and Member Function Implementation:**
    Member functions are basically the equivalent of java methods. They are associated with either a class or object, as they aim to retrieve, change, or set a value. 

   ```cpp
   // Class definition and member function implementation
   void Car::displayInfo() {
       cout << "Make: " << make << ", Model: " << model << ", Year: " << year << endl;
   }

   int main() {
       // Creating objects of the class
       Car myCar;
       myCar.make = "Toyota";
       myCar.model = "Camry";
       myCar.year = 2022;

       // Accessing member functions
       myCar.displayInfo();

       // Explore constructors, destructors, and access specifiers.
       return 0;
   }
   ```

#### 2. **Pointers and Memory Management:**
   - **Pointer Declaration and Initialization:**

   ```cpp
   int main() {
       // Pointer declaration and initialization
       int* ptr = nullptr;
       int num = 42;
       ptr = &num;

       // Accessing value through pointer
       cout << "Value of num: " << *ptr << endl;

       // Explore dynamic memory allocation with new and delete.
       return 0;
   }
   ```

#### 3. **File I/O:**
   - **Reading from a File:**

   ```cpp
   int main() {
       // Reading from a file
       ifstream inputFile("example.txt");

       if (inputFile.is_open()) {
           string line;
           while (getline(inputFile, line)) {
               cout << line << endl;
           }
           inputFile.close();
       } else {
           cout << "Unable to open file." << endl;
       }

       // Explore writing to a file and other file operations.
       return 0;
   }
   ```

#### 4. **Exception Handling:**
   - **Try-Catch Blocks:**

   ```cpp
   int main() {
       try {
           // Code that may throw an exception
           int result = 10 / 0;
       } catch (const exception& e) {
           // Handle the exception
           cerr << "Exception caught: " << e.what() << endl;
       }

       // Explore different types of exceptions and custom exception classes.
       return 0;
   }
   ```

#### 5. **Templates:**

Templates are similar to functions however they aren't exactly the same. Whereas, a function is used to work with particular data, templates are used for more general purposes, as they can support multiple different types. This leads them to be highly reusable, as they provide a lot of flexibility.
   - **Function Templates:**

   ```cpp
   // Function template
   template<typename T>
   T add(T a, T b) {
       return a + b;
   }

   int main() {
       // Using function template
       int sumInt = add(3, 4);
       double sumDouble = add(3.5, 4.2);

       // Explore class templates and template specialization.
       return 0;
   }
   ```

#### 6. **STL (Standard Template Library):**
   - **Vectors:**

   ```cpp
   #include <vector>

   int main() {
       // Using vectors
       vector<int> numbers = {1, 2, 3, 4, 5};

       // Iterating through a vector
       for (const auto& num : numbers) {
           cout << num << " ";
       }

       // Explore other STL containers and algorithms.
       return 0;
   }
   ```

This lesson covers some intermediate C++ concepts, providing a foundation for more advanced programming. Practice these concepts through coding exercises and explore additional features of the C++ language to deepen your understanding.

In our next meeting we will go over leet code, how to approach the problems, and its use in the real world!