---
title: "We have color!"
description: "...in the entry headers. I complained recently about how it was impossiblehttp://www.jason-preston.com/index.php/2006/04/11/things-that-are-apparently-imposs..."
pubDate: 2006-04-17
archive: true
tags: [archive]
---

...in the entry headers.

I complained recently about how it was [impossible](http://www.jason-preston.com/index.php/2006/04/11/things-that-are-apparently-impossible/) to color the entry headers when using K2 with Wordpress, but after hours of weeding around, I stumbled upon the solution, hidden ->[here](http://getk2.com/forum/showthread.php?t=791&highlight=color+entry)<- within the K2 forums.

The solution is fairly simple. Since K2 apparently decides to ignore whatever color coding you set for the entry headers in your stylesheets, you have to add an extra section that looks like this:

`.primary h3 a{   color: #000066; !important }`

And that'll do yeh.
