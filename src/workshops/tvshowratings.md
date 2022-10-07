---
title: TV Show Ratings
year: 2020
draft: false
lang: py
slug: tvshowratings
number: 7
---

## Workshop 7: TV Show Ratings

In this workshop we will be using python to scrape Episode Ratings from imdb.  We will once again be importing BeautifulSoup! The goal of this project is to get the season number, episode number, title, airdate, rating, total votes, and description for each episode in a TV Show to use for analysis in a future workshop.

### Step 1: Set up Python File with Beautiful Soup and Requests
Like previous workshops, we will need to import Beautiful soup and Requests packages
```python
import requests
from bs4 import BeautifulSoup
```
Additionally, import: 
```python
from requests import get
```
Next assign your variable url with the website you are targeting.  Also set the variables response, html_soup, and community_episodes equal to what is below 

```python
url = 'https://www.imdb.com/title/tt1439629/episodes?season=1'
response = get(url)
html_soup = BeautifulSoup(response.text, 'html.parser')
community_episodes = []
```

### Step 2: Loop Through The Seasons
Create a loop that starts from 1 and goes to the total number of seasons in your show. Community has 6 seasons, so the loop should look like this: 
```python
for sn in range(1,6):
```
Then, request from the server the content of the web page by using get(), and store the server’s response in the variable response. 
```python
response = get('https://www.imdb.com/title/tt1439629/episodes?season=' + str(sn))
```
By adding the str(sn) to the end of the url, you can now go through all of the seasons pages.

Then, parse the content of the request with beautiful soup.
```python
	page_html = BeautifulSoup(response.text, 'html.parser')
```
Afterwards, select all of the episode containers from the season’s page. As you can see below, the information we need is in 
```html
<div class="info" ...> </div>
```
![Image](https://github.com/RoslynCodeClub/clubwebsite/raw/master/workshops/2020-21/TV%20Show%20Ratings/readme/community%20html%20image.png)

Create and populate the episode_containers list with all of the ‘info’ containers

```python
	episode_containers = page_html.find_all('div', class_ = 'info')
```

### Step 3: Loop Through Each Episode in a Season
Now that you have the variable episode_containers, you are going to want to loop through it to look at each element.  You can do so with a for each loop.

```python
for episodes in episode_containers:
```
Next, you want to assign values to the season, episode number, and title

```python
season = sn
episode_number = episodes.meta['content']
title = episodes.a['title']
```
You then use .find when assigning your variables values in order to “find” what you are looking for 
 
```python
airdate = episodes.find('div', class_='airdate').text.strip()
           rating = episodes.find('span', class_='ipl-rating-star__rating').text
           total_votes = episodes.find('span', class_='ipl-rating-star__total-votes').text
           desc = episodes.find('div', class_='item_description').text.strip()
```
You then want to compile the data for that given episode and compile everything you just defined
 
```python
episode_data = [season, episode_number, title, airdate, rating, total_votes, desc]
```
Lastly, you want to append this data into the empty array for community_episodes
 
```python
community_episodes.append(episode_data)
```

### Step 4: Print the information
Finally, print the information.
You can format it more clearly by using the * before the list name and using a newline as the separator so each entry gets printed onto a different line.
```python
print(*community_episodes, sep = "\n")
```
We will make use of the information in the list in a future workshop.