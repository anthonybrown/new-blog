### About this blog ###

This is a project I forked from David Leeuwan. He is an awesome
developer that first developed this and let me hack on it to learn.


Well I spent the day hacking and getting it work (there was a ton of
errors when I fired it up on my machine). So, this is what I have so
far. I still have to write some articles and a few tweaks here and
there, but all in all, it's coming along just fine.

## A big thank you to David! 

### Working with CoffeeScript ###

When learning something new, there is nothing better than to build
something like a blog with it!

* First of all, this is a project that I liked and forked to learn from 
* This is the first real project that I will be using CoffeeScript in as
  well as require JS and a few other minor JS libraries
* Articles are written in Markdown

This is a major learning experience for me. I really don't like CS that
much, but so many projects that I like (BatmanJS, Docpad) are written in
it. This project is written in, so I figure just learn CoffeeScript once
and for all and get over the pain of learning it.

This blog is built with my favorite JS framework: Backbone/Marrionett
I absolutely love Backbone. Everyone seems to be using Angular these
days, but I will stick with Backbone for several reasons.

* It has an amazing community
* I understand how it works 100%, there is no `magic` envolved, which I
  love, and it's the first of `fat client` architecture that I learned.
* I feel that Backbone will be around for some time to come so I don't
  have to worry about porting this project to something else.


#### Getting things running 

_This is the original readme that came with the project_

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

You'll have to include the script yourself in the `index.html` file, instead of the Require filei.

### I left the part above in case anyone else wants to fork this and
### learn from it too.

So there is a lot of goodness in this project and I really am digging it
so far. There are some things that need to fixed, I guess I will add
some content for my blog and start fixing things that are'nt working
like they should. Again a big thank you to [ *David
Leeuwem*](http://davidvamleeuwen.nl/)
## You rock dude \m/
