---
title: "How To: Embed video in Wordpress 2.0"
description: "Like so many people, after upgrading to Wordpress 2.0, which is phenominal in almost every other way, I was suddenly unable to use the prepackaged code from ..."
pubDate: 2006-02-12
archive: true
tags: [archive]
---

Like so many people, after upgrading to Wordpress 2.0, which is phenominal in almost every other way, I was suddenly unable to use the prepackaged code from sites like Google Video, YouTube, and iFilm to embed streaming video in my blog.

I don't end up needing to use it that often, so I didn't bother figuring it out until yesterday. The problem seems to be that the new WYSIWYG editor in WP 2.0 prevents certain html tags from getting properly processed, and the \[embed\] tag happens to be one of them.

The answer is surprisingly simple: Turn off the WYSIWYG editor.

As explained [here](http://wordpress.org/development/2005/12/wp2/), the option to switch the editor on and off can be found in the Users -> Profile section (which is not where I would look, but OK).

Turn that off, and paste the embed code directly into the editing window. Want it back on? Turn it back on when you're done.

Also, if you use Audioblog for videoblogging and have problems embedding the Audioblog code into your WP 2.0 posts, it appears to be because the new WP doesn't like \[iframe\] tags. Eric Rice, the mind behind Audioblog, [has posted](http://blog.ericrice.com/blog/_archives/2006/1/19/1715104.html) a quick fix for those who have access to WP-Config.php:

> One fix is to add the following code to the bottom of your wp-config.php:  
> `   // BEGIN FIX TO ENABLE IFRAME POSTING FROM AUDIOBLOG.COM   $allowedposttags["iframe"] = array("src" => array(),   "height" => array(), "width" => array(), "frameborder" => array(),   "scroll" => array(), "scrolling" => array());   // END FIX TO ENABLE IFRAME POSTING FROM AUDIOBLOG.COM`  
>   
> If you don't have access to this file, contact your site's administrator.
