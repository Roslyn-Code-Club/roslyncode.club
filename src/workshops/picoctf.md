---
title: picoCTF
year: 2022
draft: false
lang: ctf
slug: picoctf
number: 3
---

## Workshop 3: picoCTF

This is Stanley again. So last workshop, we went over Cyberstart America and the general concept of CTFs. For this workshop, we'll be exploring picoCTF and it's platform as well as trying a problem.

### Getting Started with picoCTF
picoCTF is a cybersecurity competeton organized by Carnegie Mellon University to promote education for cybersecurity. [You can sign up here](https://picoctf.org/), and once you're done with that, we can proceed to exploring the platform.

Once you log in, you will see the Practice and Compete tabs at the top. Compete tabs will display all competitions, current and past. In the practice tab, you can find problems from previous competitions to practice yourself.

### Let's try one!
- Click the Practice Tab at the top
- Scroll down and click "Web Exploitation"
- Select the problem "where are the robots" and try it!


### Did you solve it?
You may have gotten stuck, but don't worry! Experience plays a big role in being able to solve certain problems, so once you encounter this, you'll know a similar question when you see it.

- First thing to note is that the title and description may provide hints to the approach for the problem. In this case, you can see the title is called "where are the robots" and the description mentions robots.
- Since this falls under "Web Exploitation", we should be thinking about the term "robots" as a web developer.
    - The first thing that comes to my mind is a "robots.txt" file. This file is typically added to the root directory of a website to instruct crawlers (such as Google's search engine) on what is OK and not OK to index.
- Since a robots.txt file must be in the root directory for it to function properly, we can just append "robots.txt" to the end of our URL. This should look like this:
```
https://jupiter.challenges.picoctf.org/problem/60915/robots.txt
```

Once we enter this in our search bar, we can see the following text:
```
User-agent: *
Disallow: /8028f.html
```

- The user agent specifies what browser can crawl the website. In this case, we see "*", which means "all". This is essentially saying "any browser is fine".
- However, what we're more interested about is the Disallow. We can see that it is referring to a particular page. We can take this and append it to our base URL and see what is there.

Your URL should look like this:
```
https://jupiter.challenges.picoctf.org/problem/60915/8028f.html
```

- Once we visit the URL, we can see that there is text that says "Guess you found the robots" along with the flag in red text. We found it!

Our "flag" is the following:
```javascript
picoCTF{ca1cu1at1ng_Mach1n3s_8028f}
```

Congratulations! You've solved your first CTF problem! I highly encourage you to try out more problems beyond the category of just web exploitation.