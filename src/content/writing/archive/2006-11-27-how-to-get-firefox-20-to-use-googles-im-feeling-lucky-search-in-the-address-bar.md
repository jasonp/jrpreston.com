---
title: "How to get Firefox 2.0 to use Google's \"I'm Feeling Lucky\" search in the address bar"
description: "I've complained beforehttp://www.jason-preston.com/index.php/2006/11/15/feeling-lucky-in-firefox-2/ about how Firefox 2.0http://www.getfirefox.com, while bet..."
pubDate: 2006-11-27
archive: true
tags: [archive]
---

I've [complained before](http://www.jason-preston.com/index.php/2006/11/15/feeling-lucky-in-firefox-2/) about how [Firefox 2.0](http://www.getfirefox.com), while better in almost every way than its previous versions, took out the default for one of my favorite features: anything you type into the search bar that isn't a web address used to get plugged into Google's "I'm feeling lucky" search.

It turns out that this feature isn't *gone* per-se, but disabled. By default, Firefox 2 will do its best to turn anything typed into the address bar into a valid address. If it can't, it pops up an error.

If that suits you, no worries. If you want the Google search back, the fix is simple.

Open a new tab in firefox and type "about:config" into the address bar. This brings up a page of properties and a "filter" box.

In the filter box, type "keyword." This should get you down to two entires. Make sure the the "keyword.enabled" one says, respectively, "default / boolean / true."

Then, double click on the "keyword.URL" entry, and replace the default string with this one:

> http://www.google.com/search?btnI=I'm Feeling Lucky&ie=UTF-8&oe=UTF-8&q=

Now you're all done. Close the tab and get lucky.

PS. If you've been getting the error "This URL is not valid and cannot be loaded" whenever you type in anything with a space in it, as I was, you probably have the Tabbrowser Preferences add-on enabled. Disabling it should let you go back to the feeling lucky search - don't know why.
