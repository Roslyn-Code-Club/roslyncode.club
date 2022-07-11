---
title: Random Movie Generator
year: 2021
draft: false
lang: py
slug: randommoviegen
number: 6
---

## Workshop 6: Random Movie Generator 

In this workshop we will be using python to create a Random Movie Generator.  We will once again be importing BeautifulSoup! The goal of this project is to suggest a random movie along with its summary and basic information  If you have seen it before, the program should give you a new movie to watch.  If you have not seen it before, the program should tell you to “enjoy the movie!”

### Step 1: Set up Python File with Beautiful Soup, Requests, and Random
Like previous workshops, we will need to import Beautiful soup and Requests packages
```python
import requests
from bs4 import BeautifulSoup
```
Additionally, import the random module
```python
import random
```

### Step 2: Get the Movie Title
In order to recommend a movie title, you first must extract the names of movies from a web page! Start off with the function
```python
def get_movies(url):
```
We will later assign the value url with the url of your selected web page.  For now just leave it as is.  Next, you will want to code for the body of your function.  You will want to select the page to request your information from

```python
    page = requests.get(url)
    soup = BeautifulSoup(page.text, 'html.parser')
    movies = soup.find_all("td", class_="titleColumn")
    random.shuffle(movies)
    return movies
```
Now that this is completed, you should be able to extract the movie titles from your selected website

### Step 3: Get the Movie Summary
Inspecting the imdb website, you will find that the summary is placed within a div named “summary_text”

Create the `def get_summary(url):` function.
Return the cleaned up contents of the “summary_text” div 

```python
def get_summary(url):
	movie_page = requests.get(url)
	soup = BeautifulSoup(movie_page.text, 'html.parser')
	return soup.find("div", class_="summary_text").contents[0].strip()
```

### Step 4: Get the Movie Information
Rather than continually rewrite the same information, you must create the function below to extract certain information from the website that you will be using throughout your code
```python
def get_movie_info(movie):
title = movie.a.contents[0]
year = movie.span.contents[0]
url = 'http://www.imdb.com' + movie.a['href']
return title, year, url
```

### Step 5: Get the User Input
Create the `def get_user_yn(message):` to ask the user for a yes or no input.

```python
def get_user_yn(message):
	while True:
    	answer = input(message).upper() #displays the message and uses the console to let user type input
    	if answer in ('Y', 'N'):
        	return answer == 'Y'
    	print("Invalid input. Please enter a Y or a N. ")
```

### Step 6: Putting it all together
Create a `def movie_picker():` function that calls the functions you created in the previous steps.
Next, create a loop that goes through every movie on the imdb top charts ('http://www.imdb.com/chart/top')
For every movie, pull the movie info and the summary with the `get_movie_info(movie)` function and `get_summary(url)` function. 
Print these to the console.
Finally, call `get_user_yn(message)` and `print(“Enjoy the Movie!”)` and break if the answer is ‘N’.
Otherwise, recommend another movie.
```python
def movie_picker():
	for movie in get_movies('http://www.imdb.com/chart/top'):
    	# Parse the movie's url and pull the summary from the details page
    	title, year, url = get_movie_info(movie)
    	summary = get_summary(url)
    	print(title, year)
    	print(summary)
    	if not get_user_yn("Have you already watched this movie? Enter Y or N. : "):
        	print("Enjoy the movie!")
        	break
```


### Step 7: Final Step
Now that you created the `def movie_picker():` function, you have to call it in order for your code to properly execute.  Just call the function as your last line and you are all set!

```python
movie_picker()
```