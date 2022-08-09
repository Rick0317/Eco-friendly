# Ideas
Let's write down ideas in this file

## Browser extension
How do we build a Chrome extension?
- The steps to create a Chrome extension
1. We create a project that consists of html, css, js, ... files that make up of our frontend and backend. 
2. We add "manifest.json" file in which we manage the configuration of our Chrome Extension. 
→ You can find the details about this file here [Manifest.json file](https://developer.chrome.com/docs/extensions/mv3/manifest/)
3. We now add our project as a Chrome extension by changing our setting of extensions to Developer mode,
and add our local file to our set of extensions. 
4. If we want to add it as a public service, we just follow the instruction on the website below.
[Publish Chrome Extensions](https://developer.chrome.com/docs/webstore/register/)
- Development environment

Can we use Next.js framework to create our frontend?
Yew for Rust. 

- Language

Using HTML, CSS, JS to create web applicaiton is common, but JS can consume much energy compared to other language. 
I suggest we try to use Rust with Yew as a framework for it. 
The reason I(Rick) want to try Rust is 1) It is energy efficient compared to other languages. 2) The grammar is different from python, js and so by learning it, I think we can gain great experience.

How do we learn?

I(Rick) think we learn how to code by doing, by which I mean we do not finish tutorials before we create our app, but rather, we use tutorial resources when we face some difficulties.
- Tutorials
Tutorial for Yew: https://yew.rs/docs/tutorial
Tutorial for Rust on YouTube https://youtube.com/playlist?list=PLVvjrrRCBy2JSHf9tGxGKJ-bYAN_uDCUL


- Examples
    - HTML, CSS, JS for beginners: https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/
    - Extension that shows web page performance: https://github.com/micmro/performance-bookmarklet
    - Sample extensions to build: https://github.com/GoogleChrome/chrome-extensions-samples
- Documentation
Documentation for Yew: https://yew.rs/docs/getting-started/introduction

## Data
What data can we get from Chrome?
* Get performance result of loading the webpage
* HTML source codes
* APIs they use
* Memory used by Objects [how to look at the memory section](https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/)
- TODO

What data should we look at?
- TODO

## Processing
How do we process the data?

My rough idea is to get data by APIs and store them temporarily in our temporarliy database, and then, fetch data from the database using some codes.
- TODO

We have to think about the database system and APIs.

How do we present it to the user?

We can present the result of our analysis as the browser extension in the following video
https://gyazo.com/b67d9ed06a8d1111e4bcce6c15b2ec72
- TODO

I think this is the design part and can be passed to the end of our implementation. Our goal is to get data from Webpages and analyzing them.

## Resources
If you find any helpful resources, add it here
- https://developer.chrome.com/docs/extensions/
