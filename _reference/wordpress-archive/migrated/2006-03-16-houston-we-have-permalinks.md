---
title: "Houston, we have PERMALINKS"
description: "Thanks to a little encouragement from Corvushttp://blog.pjsattic.com/corvus/, I went ahead and screwed around with files that can permanently delete the inte..."
pubDate: 2006-03-16
archive: true
tags: [archive]
---

Thanks to a little encouragement from [Corvus](http://blog.pjsattic.com/corvus/), I went ahead and screwed around with files that can permanently delete the internet in order to create pretty looking permalinks here.

After spending a good bit of time trying to figure out why WP couldn't modify my .htaccess file (and why I couldn't find it), I realized I didn't *have* one yet. So I created it.

Then I read a little bit more in the Wordpress Codex on the [Permalinks](http://codex.wordpress.org/Using_Permalinks) entry and realized that for certain servers getting permalinks to work was just living hell. I figured that mine was probably one of those.

But I kept digging through the page, and I found a little bit of hope in this:

> For permalinks in general, you must use mod\_rewrite, and IIS (common on Windows servers) does not support mod\_rewrite. If you are using Apache 2.0.54, on Windows, mod\_rewrite may work. If you put a filename at the beginning, WordPress will attempt to use that to pass the arguments and bypass the necessity for mod\_rewrite.
> 
> /index.php/%year%/%monthnum%/%day%/%postname%/  
> If you use this option, you can ignore the rewrite rules (that is, you can ignore .htaccess).
> 
> This option may not always work, especially in cases of WordPress running on IIS 6. To make this option work on IIS, add these 2 lines to a php.ini file and store that file in your webroot:  
> cgi.fix\_pathinfo = 1  
> cgi.force\_redirect = 0

Now, if you know me at all you'll know that I didn't even bother to check what server software I'm running, if mod\_rewrite was enabled, or anything. I fixated on: "that is, you can ignore .htaccess," realizing this was probably my one hope.

Well, I created the dumb .ini file and you know what? It worked.

So if anyone else running Wordpress on CrystalTech is having fun with permalinks, I suggest you try that little cheat. It works like a charm.

Of course, it destroyed the link to my picture on the sidebar in any of the static pages, but that's a problem for another day. I'm off to dinner.
