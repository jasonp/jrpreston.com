---
title: "That's a good feeling"
description: "I wrote this whole thing out, and then I realized it's really just a long-winded, fairly technical version of an \"I did this today, then I did this, then I w..."
pubDate: 2006-05-09
archive: true
tags: [archive]
---

\[ *I wrote this whole thing out, and then I realized it's really just a long-winded, fairly technical version of an "I did this today, then I did this, then I went shopping," post. I'm embarrassed, but I'm posting it anyway. - Ed.* \]

As I [mentioned](http://www.jason-preston.com/index.php/2006/05/07/learn-by-doing/) just a few days ago, I've been in the process of moving the web hosting for Flicker from MediaTemple (where it's always been) to BlueHost, mostly because we get waaaaay more bandwidth.

I also mentioned that I'd never done this before, and that the whole thing was kind of an experiment that I intelligently decided to do just a few days before launch (which is on the 10th).

After I set up the new hosting, the first thing I did was go about trying to transfer everything over to the new servers. In the good old days, this would have been a collection of html files and gif images (which are mercifully beginning to get replaced with jpeg and png).

Thanks to modern web site "technology," however, moving the Flicker site involved getting two separate Wordpress installs, an adserver, and an e-mail list program transferred. This meant moving the files, appropriately changing the configuration details so that they can properly connect to new MySQL databases, and of course, making sure the data from the old databases found its way on to the new ones.

If any part of this process didn't work, well, my backup plan was to re-install the whole site (again) from scratch.

So after I transferred everything over, I checked the root domain by going to the IP address of the new host. You can do this with any new host before the domain name actually begins to send people to the new files, provided you know the right wacky series of numbers. However, the directory structure (i.e. the way all the files are laid out like on a hard drive) isn't accessible that way, so all I could tell is that the main page did indeed display (but not the ads or the main post message).

*No worries*, I thought. I'd just wait for the address to start pointing to the new hosting, and then I'll troubleshoot until I figure out how to get everthing to display properly.

But then 24 hours went by, and the address was still pointing to the old site. I double-checked the MediaTemple web interface to make sure that I changed the nameservers to the new addresses (I had).

After almost 30 hours (it's really supposed to take no longer than 36), I really began to get worried. If anything went wrong with the site transfer...if it didn't change over until after we'd launched...

But I coulnd't find anything wrong with the transfer process...it just didn't appear to have done anything. So on a hunch, I logged in to the new ftp site, and added a little "BH" tag to the bottom of the page, so I could tell if the page I was viewing was hosted on BlueHost or MediaTemple (since they were, in theory, exactly the same, and at the exact same address, there would really be no other way to tell).

It turns out that I stressed out all day for nothing; the switch happened ages ago. It just so happened that I did everything so well that the site didn't go down for a second, and the transition worked so smoothly that I didn't even know it had happened.

But allow me a moment of geek pride -- that's a good feeling.
