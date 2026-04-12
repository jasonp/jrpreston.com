---
title: "Learning about CSS"
description: "I recently picked up a copy of Eric Meyer'shttp://www.meyerweb.com CSS: The Definitive Guidehttp://www.amazon.com/CSS-Definitive-Guide-Eric-Meyer/dp/05965273..."
pubDate: 2008-02-29
archive: true
tags: [archive]
---

I recently picked up a copy of [Eric Meyer's](http://www.meyerweb.com) [CSS: The Definitive Guide](http://www.amazon.com/CSS-Definitive-Guide-Eric-Meyer/dp/0596527330/ref=pd_bbs_sr_1?ie=UTF8&s=books&qid=1204332008&sr=8-1), in order to edumicate myself semi-officially in the mysterious ways of CSS.

As I do with most things, I've been teaching myself CSS by dissecting the work of others, examining it, and then like a giant with a teacup, carefully destroying it. I figured it was about time I learn some of the actual rules.

I've gone through the first two chapters so far, and OH BOY do I know jack shit about CSS.

For example, in CSS you do things like this:

`#monkey {color: blue; margin-left: 10px; margin-top: 10px;}`

As far as I knew, this meant that any div with the property `id="monkey"` would have blue text, and 10px margins on the top and left.

In most browsers, that is actually the case. What I didn't know is that "id" is supposed to be *unique*. In other words, the style applies to the first instance, but not to subsequent instances (most browsers ignore this -- how was I to know?)

I also didn't know that `#monkey` is shorthand for `*#monkey`, which means "anything with id='monkey'." So it could be a div, an em, practically anything (but only the first instance).

Basically I had no concept of selectors. Now it's time to figure out what else I have no concept of.

On the other hand, I'm having a lot of fun learning this new stuff, and I'm excited to put it to use. I think I did a decent job of styling the new [Sentimine](http://www.sentimine.com) portal page. Next stop: fixing all my errant legacy wordpress theme code throughout all of our blogs!
