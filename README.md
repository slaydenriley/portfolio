<div align="center">
<h1>Riley Slayden Portfolio 👨‍💻</h1>
<p>This is my final portfolio project for Flatiron School. For my portfolio, I created, well, my portfolio! This is a website to feature my own work and blog posts.</p>
<img max-height: 90% width="100%" src="./portfolio.gif" alt="Music Market gif">
<hr/>
<p>
  Explore:
  <a href="https://www.youtube.com/watch?v=6UhS9__NFjQ&t=3s&ab_channel=RileySlayden">VIDEO DEMO</a> | <a href="https://www.rileyslayden.com">LIVE SITE</a>
  </p>
</div>

## Overview

Well, this is finally it. After a year and a half of hacking away at Flatiron’s online self-paced software engineering course, I’ve finished my last project. The crux of the course. A “magnum opus.” The most frustrating, bug-ridden $%#$@#….well, never mind. I DID IT!

## Inspiration

For my final project, I decided to build something that would help kickstart my career in web development. Using a Rails API backend and React + Redux on the frontend, I created my very own portfolio website to showcase my previous work at Flatiron, my blog posts, and my future work as a developer.

That’s right, my portfolio project is a portfolio. 🤯

## Challenges

There were several significant challenges I faced during this project. The first had to do with getting the Rails sessions cookie working with the frontend. I discovered that my problem came from the JS fetch requests I was using on the frontend. Initially, I wasn't including credentials. Once I added credentials into the fetch requests, my Rails session persisted. Yay!

The second large challenge I faced was implementing a rich text editor into the project. I wanted to be able to style my posts before posting, rather than having basic bland text, or trying to hard-style after posting. I first tried using Facebook's Draft JS editor, but quickly found that to be difficult due the sheer amount of options it gave me, along with poor documentation. Sometimes, too much customizability is a curse.

Finally, I stumbled across Quill, a rich-text editor that fit seamlessly into React. It was fairly basic, but gave me options to edit the theme and toolbar. It worked perfectly for what I was trying to do. Quill essentially coverts HTML into a string which is saved to the database. When retrieving the HTML string, I used React/JS to remove the string and set innerHTML of my post container. Bingo!

## The Backend

On the backend, you'll find Ruby on Rails. This app requires Ruby 3.0.0 and Rails 6. To get this running locally:

* ```fork https://github.com/slaydenriley/portfolio & clone```
* ```cd portfolio/backend from your local directory```
* ```bundle install```
* ```rake db:migrate```
* ```rake db:seed```
* ```rails s```

## The Frontend

On the frontend, you'll find React + Redux.

* ```cd portfolio/frontend from your local directory```
* ```npm start```
* ```open browser to localhost:3000```

## To Read More...

Please visit https://www.rileyslayden.com/posts/3 to read more about this project.
