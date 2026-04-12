---
title: "A quick How-To: Get your short numerical permalink from Wordpress"
description: "As far as I know, there's no automated process for getting the short, numeric-based permalink for your Wordpresshttp://www.wordpress.org entries, however, si..."
pubDate: 2006-10-27
archive: true
tags: [archive]
---

As far as I know, there's no automated process for getting the short, numeric-based permalink for your [Wordpress](http://www.wordpress.org) entries, however, since it is both *short* and *numeric*, it's really easy to come up with it yourself.

Why do you want it? Well, a lot of the human-friendly (and search-engine friendly) permalinks are really looooooooooong. So if you want to paste a link into an e-mail (or a comment) without wrapping, it's handy to have a little [tinyurl](http://www.tinyurl.com) built into your blog (so you get Google juice).

[Image: wp shortlink]So here's how it works. All of your entries in Wordpress have a unique numerical ID. You can get to this through your back-end, under "Manage" -> "Posts"

Next to each post, on the far left, there's a column called "ID." This is the number you're after. And guess what? They're sequential - so if you can remember what your last post number was, you can skip this step.

Now the short URL follows a particular form, always. And this link is always valid (no matter how you set your long permalinks). It is like this:  
**  
http://www.yoursite.com/?p=\[number\]**

So I can take this long URL (notice how it runs into my sidebar):

http://www.jason-preston.com/index.php/2006/10/27/what-is-rss-good-for-musings-at-the-blog-business-summit/

And make it this url:

http://www.jason-preston.com/?p=874

Voila!
