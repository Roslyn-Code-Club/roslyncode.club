---
title: Visualizing Episode Ratings
year: 2020
draft: false
category: py
number: 9
---
## Workshop 9: Visualizing Episode Ratings

### Step 1: 
In this workshop, we will take the data we scraped from Workshop 7 and create a dataframe and a csv file using the techniques we learned in the previous workshop.

First, recall your code from workshop 7, and add the import pandas statement to the header.
```python
from bs4 import BeautifulSoup
from requests import get
# NEW
import pandas as pd 

url = 'https://www.imdb.com/title/tt1439629/episodes?season=1'
response = get(url)
html_soup = BeautifulSoup(response.text, 'html.parser')
community_episodes = []

# For every season in the series--
for sn in range(1,7): #you can change this depending on the show
	# Request from the server the content of the web page by using get(), and store the server’s response in the variable response
	response = get('https://www.imdb.com/title/tt1439629/episodes?season=' + str(sn))

	# Parse the content of the request with BeautifulSoup
	page_html = BeautifulSoup(response.text, 'html.parser')

	# Select all the episode containers from the season's page
	episode_containers = page_html.find_all('div', class_ = 'info')

	# For each episode in each season
	for episodes in episode_containers:
        	# Get the info of each episode on the page
        	season = sn
        	episode_number = episodes.meta['content']
        	title = episodes.a['title']
        	airdate = episodes.find('div', class_='airdate').text.strip()
        	rating = episodes.find('span', class_='ipl-rating-star__rating').text
        	total_votes = episodes.find('span', class_='ipl-rating-star__total-votes').text
        	desc = episodes.find('div', class_='item_description').text.strip()
        	# Compiling the episode info
        	episode_data = [season, episode_number, title, airdate, rating, total_votes, desc]

        	# Append the episode info to the complete dataset
        	community_episodes.append(episode_data)
```


### Step 2: Making the DataFrame
Your code above will be a list that we now have to convert into a pandas DataFrame.  A DataFrame is one of the most used panda objects and essentially sorts the data into a spreadsheet.  In order to create this, we must write out: 

```python
community_episodes = pd.DataFrame(community_episodes, columns = ['season', 'episode_number', 'title', 'airdate', 'rating', 'total_votes', 'desc'])
print(community_episodes.head())
```

### Step 3: Data Cleaning
Create a function that removes the commas and parentheses from the `total_votes` entires so that they can be converted into integer values. This uses the `replace()` function to replace the commas and parentheses with empty strings.
```python
def remove_str(votes):
	for r in ((',',''), ('(',''),(')','')):
    	votes = votes.replace(*r)
   	 
	return votes
```
Implement the remove_str() function by taking and replacing the strings in `total_votes`, then converting them to integers using `as_type()`
```python
community_episodes['total_votes'] = community_episodes.total_votes.apply(remove_str).astype(int)
```




### Step 4: Making Rating Numeric
Since you do not want your rating to be stored as a string, you will need to make the episode rating numeric.  This is done with `.astype(float)` below: 
```python
community_episodes['rating'] = community_episodes.rating.astype(float)
```
 
### Step 5: Converting Airdate from String to Datetime
In a similar fashion, make the data organized and finalize it for visualization and analysis by converting the airdate to datetime format.
```python
community_episodes['airdate'] = pd.to_datetime(community_episodes.airdate)
print(community_episodes.info())
```
 
### Step 6: Saving The Data
Now that we have written out all of our code, we must save it to a csv file so it can be processed properly later.
```python
community_episodes.to_csv('Community_Episodes_IMDb_Ratings.csv',index=False)
```