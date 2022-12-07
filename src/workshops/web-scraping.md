---
title: Web Scraping
year: 2020
draft: false
category: py
number: 4
---

## Workshop 4: Web Scraping

We’ll be learning how to use Python to [scrape the web](https://en.wikipedia.org/wiki/Web_scraping)

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

Then you can choose a website to request HTML from:

```python
# Collect and parse from our club website
page = requests.get(“https://rhscode.tech/”) #change this to a different website you like
soup = BeautifulSoup(page.text, 'html.parser')
```

### Step 3: Extracting Page Title

Now you want to extract the page title from the website you selected. In order to do so, you must use BeautifulSoup to store the title of this page in a variable called page_title:

```python
page_title = soup.title.text
```

Now that this data was extracted, you must print it out in order to view the collected data:

```python
print(page_title)
```

### Step 4: Extracting the head and body

It is equally easy to extract out certain sections too.

You saw that you have to call .text on these to get the string, but you can print them without calling .text too, and it will give you the full markup.

```python
import requests
from bs4 import BeautifulSoup

# Make a request
page = requests.get(“https://rhscode.tech/”)
soup = BeautifulSoup(page.content, 'html.parser')

# Extract title of page
page_title = soup.title

# Extract body of page
page_body = soup.body

# Extract head of page
page_head = soup.head

# print the result
print(page_title, page_head)
```

### Step 5: Selecting elements with BeautifulSoup

Once you have the soup object, you can work with .select on it which is a CSS selector inside BeautifulSoup.

```python
import requests
from bs4 import BeautifulSoup

# Make a request
page = requests.get(“https://rhscode.tech/”)
soup = BeautifulSoup(page.content, 'html.parser')

# Extract title of page
page_title = soup.title

# Extract body of page
page_body = soup.body

# Extract head of page
page_head = soup.head

# print the result
print(page_title, page_head)

# Extract first <h1>(...)</h1> text
first_h1 = soup.select('h1')[0].text #index 0
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
Import smtplib
```

### Step 7 Writing the send mail function

Create a `python send_mail()` function and add the line
`python server = smtplib.SMTP('smtp.gmail.com',587)`
To establish a connection between the program and gmail servers
Below add the line
`python server.ehlo`
This is a command sent by an email server to identify itself when connecting to another email

Then write
`python server.starttls` to encrypt the messages
Then call `python server.ehlo` one more time

### Step 8 Setting up gmail

In order for the program to send emails, enable two-step verification on your gmail account. You can do this by going [here](https://www.google.com/landing/2step/)
Click get started and login to enable it.
Now, you can enable different application passwords by going to [Google App Passwords](http://myaccount.google.com/apppasswords)
Click App Passwords
Then, generate a new password for email on windows computer applications (select mac if you are on mac)
![](workshops/2020-21/Price Tracker/readme/screenshot1_18.png)
A window should pop up that looks like this:
![](workshops/2020-21/Price Tracker/readme/screenshot1_18(2).png)
Save this password for the next step

To login, use the `python .login()` function to login.
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
`python print(‘Email has been sent!’)`
Finally, close the server connection
`python server.quit()`

Inside of check_price(), call the send_mail() function inside of the if statement so that the email will be sent if the price drops below the threshold you set.

### Additional: Check the price every x time.

It’s not good practice to keep checking the price constantly, so make the program run check_price() once a day.

Use the time package to do this.
