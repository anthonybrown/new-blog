### About this blog ###

This is a project I forked from David Leeuwan. He is an awesome
developer that first developed this and let me hack on it to learn.


Well I spent the day hacking and getting it work (there was a ton of
errors when I fired it up on my machine). So, this is what I have so
far. I still have to write some articles and a few tweaks here and
there, but all in all, it's coming along just fine.

## A big thank you to David! ## 

### Create your own ###

There are a few things you'll need to know when you want to get started with this blog. 

* It's a prototype and not a fully functional blog!
* You'll have to know some basic knowledge of JavaScript
* Articles are written in Markdown

Still up to the task? You'll need to get started by installing [Node](http://nodejs.org). Once you've done that, clone this repo and head over to this folder.

#### 1. Get it running

Once you're ready, fire up a terminal and install all plugins by doing:

```bash
npm install
```

After that, you can simply fire up the blog by doing:

```bash
grunt watch
```

Now it'll open up a browser window, with the blog running.

#### 2. Write articles

So there are two folders. The `/src` folder has all the actuall code in it, which compiles to `/blog`. 
Most of the time you'll have to look into the `/src` folder. Although the articles are positioned in the `/blog` folder for now. Check out `blog/scripts/articles`.

To get started with your own markdown files, just remove mine and make one yourself. You'll notice that Grunt will stop running, because it's missing some files.

Head over to `src/scripts/fixtures/articles.coffee`. In the top you'll need to require the markdown files you've made. Below is the code that makes the chapters. Please note, this is written in CoffeeScript.

Just change that code to whatever works for you. `Open` stands for if the chapter should be open the first time and the `arguments` array are the arguments what are passed by RequireJS.

#### 3. Deploy it

If you'd like to run it on your webserver, you'll only need to use the `/blog` folder for that. If you'd like to minify all the files, use:

```bash
grunt deploy
```

You'll have to include the script yourself in the `index.html` file, instead of the Require file.
