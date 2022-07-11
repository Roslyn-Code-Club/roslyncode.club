---
title: Episode Ratings Heatmap
year: 2021
draft: false
lang: py
slug: episoderating
number: 10
---

## Workshop 10: Episode Ratings Heatmap

![Heatmap](https://github.com/RoslynCodeClub/clubwebsite/raw/master/workshops/2020-21/Episode%20Ratings%20Heatmap/readme/Episode%20Ratings%20Heatmap.png)

### Step 1:

In this workshop, we will take the csv data of episode ratings from Workshop 9 and create a scatter plot and a heatmap of this information.

First, import the packages you need: pandas, matplotlib and seaborn. Seaborn is a package that can be used to create heatmaps.

```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
```

### Step 2: Making the DataFrame

Now that you have imported the necessary packages, you must proceed to create a DataFrame. A DataFrame is one of the most used panda objects and essentially sorts the data into a spreadsheet. We must use the pandas package to properly define it:

```python
df = pd.read_csv('Community_Episodes_IMDb_Ratings.csv')
```

You then will want to set up a print statement so you can print certain commands to the console and follow your code properly

```python
print(df.head())
```

You then will want to assign the DataFrame with parameters season and episode_number equal to DataFrame with the parameters season and epiosde_number.astype

.astype will cast a pandas object to a specified data type

```python
df[['season','episode_number']] = df[['season','episode_number']].astype(str)
```

You will then want to print the following statements to the console in order to check your code and be following it properly

```python
print(df.info())
print(df.describe())
print(df.groupby('season').describe())
print(df.sort_values('rating').head(10))
print(df.sort_values('rating',ascending=False).head(10))
print(df.groupby('season').mean()['rating'])
```

You will then want to style your graph and structure it properly. You can design aspects of it by writing

```python
sns.set(font_scale=1.5,font='sans-serif',style='whitegrid')
plt.figure(figsize=(12,12))
sns.scatterplot(x=df.rating,y=df.total_votes,alpha=0.5,s=100)

plt.savefig('Episode Ratings Scatterplot.png',dpi=200)
```

### Step 3: Heatmap

Before you create the heatmap, you need to prepare the data and put it in the right format.
First, add a 0 before each single digit so that all the values have two digits in order to be sorted properly.

```python
df['episode_number'] = df['episode_number'].apply(lambda num: num.zfill(2)
```

Now, these episodes can be put in a pivot table. The index will be the seasons, the columns will be the episode numbers, and the values in the table will be the IMDb ratings.

```python
df_heat = pd.pivot_table(data=df,index=['season'],columns=['episode_number'],values=['rating'])
```

Next, get the episode numbers as strings and put them into a list and assign them as our x-axis tick values using `set_xticklabels()`

```python
episodenum = [*range(1,26)]
episodenum = [str(x) for x in episodenum]
```

For the y-axis, get the seasons as strings and put them in a list for y-tick values.

```python
seasonticks = [*range(1,7)]
seasonticks = ['Season '+str(x) for x in seasonticks]
```

Then, set the plot font and style:

```python
sns.set_theme(font_scale=3,font='sans-serif',style='whitegrid')
plt.figure(figsize=(30,14))
fg = sns.heatmap(df_heat,cmap='coolwarm_r', cbar_kws={'orientation': 'horizontal', 'label': 'IMDb Rating'}, square=True)
```

Next you must take the x-axis ticks and move them to the top while formatting them properly. You are going to want to use fg in order to target the heatmap

```python
fg.xaxis.tick_top()
fg.set_xticklabels(episodenum,fontsize=30)
fg.set_yticklabels(seasonticks, rotation=360, horizontalalignment='right',fontsize=30)
```

As for the y tick labels, you add space between them and the heat map

```python
fg.tick_params(axis='y', which='major', pad=25)
fg.set_ylabel('')
fg.set_xlabel('')
fg.set_title('Community Episodes',fontname='sans-serif',fontsize=100,pad=100)
```

Lastly, in order to save the figure and process it properly, you must write

```python
fig = fg.get_figure()
fig.savefig('Episode Ratings Heatmap.png',dpi=200)
```
