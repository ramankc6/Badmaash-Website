# Badmaash-Website
For technical round of Snap Engineering Academy

## Context
This is my second ever individual webdev project. Before this I had never used an API. I am so color blind so the design was a little difficult to get right.

## Resources Used
- HTML/CSS/JS documentation
- SvelteKit documentation
- Figma
- CoolorHunt

## Features
- [x] A landing page with a navigation bar
- [x] A menu section that allows the user to flip through the different menu catagories
- [x] A gallery section with images from the restaurants instagram
- [x] A contact section with a fully funtional form that allows the user to send a message to the restaurant
- [x] A loading screen that shows the user the progress of the website loading
- [x] A navigation bar that changes color based on the background
- [x] A responsive design that works on all screen sizes
- [x] Page anchors that allow the user to navigate through the website
- [x] When you hover over a menu item, it shows you a picture of the item
- [x] Shows if the restaurant is open or closed
- [x] Shows how long until the restaurant opens or closes
- [x] An interactive map that shows the location of the restaurant
- [x] A link to set up reservations at the retaurant

## Limitations
- When on PC, the menu image changes on hover, but when on mobile, the menu image changes on click. This is because onHover is not very user friendly on mobile.
- The time until closing is a bit buggy depending on the browser but it's accurate most of the time. The time also only updates when the page is refreshed.
- The website doesn't work great on Firefox because of some CSS issues. It works perfectly on Safari and Chrome though.
- Its a big buggy when you switch to mobile view on a PC. However, tt fixed itself when you refresh the page and works perfectly on mobile.


## Try It Out!

[Here](https://main--fancy-horse-590526.netlify.app) is a link to the website.\
\
The code for the home page is in the 'src/routes/home/' folder and the code for the loading page is in the 'src/routes/+page.svelte' file.




## Developer Log
### Day 1
I just got the prompt and I am really excited! Firstly I needed to find a business in LA. For this I choose a retaurant called Badmaash. 
It’s a Canadian-Panjabi fusion place owned by a family of Indian immigrants. The reason I picked it is cause it’s a success story of POC immigrants moving to the US and finding success and as a first gen immigrant that was really inspiring.\
\
I started by making a planning board. There were a list of features that were requires and a list of features that were optional. We were adviced to pick 3 from the optional list. Since I wanted to really challenge myself as a developer during this project and show off what I can do, I decided to try to impliment every since optional feature. I also made a list of technologies that I would need to use to complete the project. I decided to use Svelte as my framework because that is what I am most familiar with.\
\
This is what the planning board looked like:\
![PlanningBoard](/static/planningBoard.jpeg?raw=true "Planning Board")

### Day 2

I want split this project into 3 parts. Design, Code and Test. Today was the first design day. I started by contacting the owners of the restaurant to understand the "vibe" that the restaurant has. I got a chance to talk to the owner and he told me that the restaurant is very causal but also very classy. He also told me that the restaurant is very family friendly and that they have a lot of kids that come in. He also told me about the history behind the restaurant and gruelling journey of taking a risk and gambling on yourself to achive the American dream. I was genuinely really touched by this and was more excited than ever to get started on this project!\
\
I realized that my biggest weakness was design since I am color blind and I have a hard time picking out colors that look good together. I decided to use a color palette generator to help me with this. I found a really good one called [CoolorHunt](https://colorhunt.co/). I also decided to create the design on Figma before developing it so that I could keep my code base organized.\
\
My first itteration was admittedly really bad. No matter what, I was not able to make it look very visually apealing. I then decided to first put my focus on funtionality and then go back and make it look better. This allowed me to make more steady progress.
\
This is what it looked like after the first itteration:\
\
![FirstItteration](/static/firstFigmaItteration.png?raw=true "First Figma Itteration")

This is what it looked like after I went back and make it look better:\
\
![SecondItteration](/static/secondFigmaItteration.png?raw=true "Second Figma Itteration")

I think what really helped me was creating a Pinterest board of websites that I liked and then using that as a reference. I also used a lot of the design principles that I learned from watching YouTube videos.\
\
I can't want to start coding tomorrow!


### Day 3
Okay so to get started on development, I decided to use SvelteKit. SvelteKit basically just sets up a Svelte environment for me.\
\
I made the landing page first and then ran into an issue. Svelte was having alot of trouble switching between pages. So instead I decided to have a "loading page" and then the enitre website would be on one page. It will be easy to navigate through the website using the navigation bar and page ancors\
\
I made it a point to comment as much as possible to have devider. This later proved really helpful when I was trying to debug.\
\
I had to redo the design ALOT of times. Everything that seemed to look good before just on my Figma just didn't look good on the website. I had to redo the design atleast 5 times. Though most of the sections are kind of similar, I completly redid the menu section. I think it was worth it though because I am really happy with how it turned out. Instead of "onHover" I decided to let the user swipe though the different menu catagories\
\
I have only used HTML and CSS so far. I wanted to get the design done before I started using JavaScript. I am going to start using JavaScript tomorrow. I have so many ideas of cool annimations and features I want to add but it's going to be a race against time to get it done.\
\
[Here](https://www.youtube.com/watch?v=pXit3cEKdjQ) is a video of the website about half way though the redesign.\
\
[Here](https://youtu.be/VVVx523iWxY) is a video of the website after most of the redesign. I don't know if this will reseble the final product at the end but I am proud of it.

### Day 4 - 6
I haven't updated this log in a while because I have been working on this project pretty much non-stop for the last couple days. A few things have changed since the last time I updated this log.\
\
Firstly I redid the design alot. I think I redid it atleast 10 times. I am really happy with how it turned out though. I think it looks really good. I wanted to make sure this left a good impression on the Snap recruiting team.\
\
I added a loading screen that I think looks pretty cool. It has a loading loading percentage that fills up and then the website loads. I also made it so that the nav bar changes colors based on the background using a scroll JavaScript function.\
\
I completly redid the menu section. I made it so that the user can flip through all the menu options and when the user hovers over one, it shares an image of that menu item. I think this is a really cool feature because it shows off every dish individually.\
\
I also made the website mobile responsive. It doesn't look as good on mobile but it doesn't look awkward. All the PC features also work on mobile. The only difference is that the menu image changes on tap and not on hover. I did think becasue hovering is super buggy on mobile.\
\
I also added a map under the restaurant's address. I think this is a really cool feature because it allows the user to see where the restaurant is located. This was my first time using APIs so I really struggled with it. I endded up accedently posting my API key to the public repo 3 different times. I fixed it by changing the key and rebasing my repo (which is also something new I learned).\
\
Another really cool feature I added was text that says if the restaurant is open or closed. It also shows how many minutes/hours until the restaurant opens/closes. I think this is a really cool feature because it allows the user to know if the restaurant is open or not without having to call them.\
\
Lastly, a feature that I sadly couldn't implement was a fully functional contact form. Well technically, I was able to implement it but for some reason it wouldn't work unless my API key was public. I tried using gitignore and a .env file but for some reason it was having trouble reading the .env file. For fear of my API key being abused, I left the feature out. I did end up accidently posting the password to my email but I rebased the repo right away and changed my password\
\
I used Netlify to host my website since GitHub pages isn't great with Svelte.\
\
[This](https://youtu.be/H4I5EPYaVC0) is what it looked like about half way though the redesign and the JS implimentation.\
\
I am now going to work on adding more to the readme and cleaning up my code so it looks presentable.\
\
<b>Update:<b> I figured out the form using Netlify. It is a fully functioning contact form now!