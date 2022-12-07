---
title: Web Scraping Store Prices
year: 2020
draft: false
category: py
number: 5
---

## Workshop 5: Web Scraping Store Prices

We’ll be learning how to apply what we learned about Web Scraping from our last lesson in the real world! For prices on Lululemon (or any website of your choosing) you will use web scraping to track when an item drops down to your ideal price. When your item’s price drops to that amount, you will receive an email.

### Step 1: Setting up Repl

Before we begin coding, you must set up a text editor. We recommend using repl.it

If you do not have an account already, register

Once you are logged in, create a new repl with the language “python”

You are now ready to begin coding!

### Step 2: Setting up the Python File

In order for the program to get the information from a website, it needs to request the code from the server.
To do this, import the request package and the BeautifulSoup Package:

```python
import requests
from bs4 import BeautifulSoup
```

Then you can choose a website with the product to request from:

```python
# Collect and parse from lululemon website
page = requests.get(“https://shop.lululemon.com/p/womens-outerwear/All-Yours-Crew/_/prod9370045?color=46793”)
soup = BeautifulSoup(page.text, 'html.parser')
```

### Step 3: Extracting Page Title

Next, inspect your website's code by right clicking your mouse and selecting inspect. See which elements have the title and price because these will be the elements you target.
![Image](<https://github.com/RoslynCodeClub/clubwebsite/raw/master/workshops/2020-21/Price%20Tracker/readme/screenshot1_13(2).png>)
![Image](<https://github.com/RoslynCodeClub/clubwebsite/raw/master/workshops/2020-21/Price%20Tracker/readme/screenshot1_13(4).png>)

The title has the h1 tag with class name "pdp-title" and the price has the span tag with class name "price-1SDQy price"

### Step 4: Locating Title and Price

Once you are inspecting your code, use the find function to locate the title and and price using the tags you found in step 3.

```python
title = soup.find("h1", {"class": "pdp-title"}).getText()
price = soup.find("span",{"class": "price-1SDQy price"}).getText()
```

### Step 5: Converting the Price

Converting the price is the last step to extracting this information. The first index must be 1 rather than 0 since you are skipping the dollar sign on the website. The last index is regarding how many digits you have

You lastly have to print the converted price in order to see the information you just extracted

```python
converted_price = float(price[1:4])
print(converted_price)
```

### Step 6: Configuring the email

First, wrap the code above inside of a function like so:

```python
def check_price():
  URL = "https://shop.lululemon.com/p/womens-outerwear/All-Yours-Crew/_/prod9370045?color=46793"
  page = requests.get(URL)
  soup = BeautifulSoup(page.content, 'html.parser')
  result = soup.find("h1", {"class": "pdp-title"}).getText()
  price = soup.find("span",{"class": "price-1SDQy price"}).getText()
  converted_price = float(price[1:4])
  if(converted_price < 100.00):
	send_mail()

  print(converted_price)

```

Then, import the smtplib package under your previous imports (a mail protocol)

```python
import smtplib
```

### Step 7 Writing the send mail function

Create the function:

```python
send_mail()
```

And add the line:

```python
server = smtplib.SMTP('smtp.gmail.com',587)
```

To establish a connection between the program and gmail servers
Below add the line

```python
server.ehlo
```

This is a command sent by an email server to identify itself when connecting to another email

Then write

```python
server.starttls
```

to encrypt the messages
Then call

```python
server.ehlo
```

one more time

### Step 8 Setting up gmail

In order for the program to send emails, enable two-step verification on your gmail account. You can do this by going [here](https://www.google.com/landing/2step/)
Click get started and login to enable it.
Now, you can enable different application passwords by going to [Google App Passwords](http://myaccount.google.com/apppasswords)
Click App Passwords
Then, generate a new password for email on windows computer applications (select mac if you are on mac)
![Image](https://github.com/RoslynCodeClub/clubwebsite/raw/master/workshops/2020-21/Price%20Tracker/readme/screenshot1_18.png)

Then, a window should pop up with the password and make sure you save it.

![Image](<https://github.com/RoslynCodeClub/clubwebsite/raw/master/workshops/2020-21/Price%20Tracker/readme/screenshot1_18(2).png>)

To login, use the function below to login:

```python
.login()
```

The first parameter should be your email and the second parameter should be the password that is generated from the previous step

Now you want to actually set up your email
Add the lines

```python
subject = ‘Price fell down’
body = ‘Check the Lululemon link https://shop.lululemon.com/p/womens-outerwear/All-Yours-Crew/_/prod9370045?color=46793’
msg = f”Subject: {subject}\n\n{body}
```

The f above means you can interprelate the subject by just adding subject. The body added after creating two new lines is to add the actual message.

Lastly you want to send the actual email. The first line must be the email must be who it is from, the second line must be the email who it is to, and then the third line will hold your actual message. Add the line

```python
server.sendmail(
	"example@gmail.com",
	"exampleTwo@yahoo.com",
	msg
  )
```

Then print that the email has been sent

```python
print(‘Email has been sent!’)
```

Finally, close the server connection

```python
server.quit()
```

Inside of check_price(), call the send_mail() function inside of the if statement so that the email will be sent if the price drops below the threshold you set.

### Additional: Check the price every x time.

It’s not good practice to keep checking the price constantly, so make the program run check_price() once a day.

Use the time package to do this.
