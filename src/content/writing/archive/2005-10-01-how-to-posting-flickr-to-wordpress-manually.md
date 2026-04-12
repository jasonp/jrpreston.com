---
title: "How To: Posting FlickR to WordPress Manually"
description: "This is the first of a series I'd like to start on this blog. The How-To articles will focus on things that I tend to do that might seem a bit tricky to some..."
pubDate: 2005-10-01
archive: true
tags: [archive]
---

This is the first of a series I'd like to start on this blog. The How-To articles will focus on things that I tend to do that might seem a bit tricky to someone less web-minded.

I'm going to go ahead and run a how-to on this despite the fact that I haven't gotten it perfect yet. It's tricky enough that someone might actually know *more* than me, and I might learn something from it.

The reason I like to use FlickR when posting images instead of the WordPress file-upload, image posting utilities, and plugins is that posting a link to a photo on FlickR will also send people to my complete album, and they can then easily browse through the other photos I've taken but haven't necessarily posted individually.

First, you should upload your photo to FlickR, tag, and label it however you'd like. Once you've done that, open the "[Your Photos](http://www.flickr.com/photos/jasonp107/)" page in a new window or tab; this is where you'll get the thumbnail for posting.

Find the image you'd like to post, and right click on it. If you're using [Firefox](http://www.mozilla.org/products/firefox/), the line you want is "copy link location." If you're using IE (and why?), the option is "copy shortcut."

Now it's time to build the link within the post. The FlickR [terms of use](http://www.flickr.com/terms.gne) actually specify that you must link back when posting a photo externally, so don't skip this step. You need to enter some html where you'd like the picture to be, and it should look like this:  

>   
> 
> ```
> 
> ```
> 
> [  
> ](http://www.flickr.com/photos/jasonp107/47131685/)

[  
](http://www.flickr.com/photos/jasonp107/47131685/)[The part in quotes should be the location you just copied from FlickR. That basically means that whatever follows is going to be a link to the address you've put in there. Now the link itself is going to be the thumbnail, and we need to copy that adress, too.](http://www.flickr.com/photos/jasonp107/47131685/)

[On the FlickR page, right click on the thumbnail again, but this time select "copy image location," or in IE, you'll have to click "properties" and copy the contents of the "adress" section. Make sure you get all of it.](http://www.flickr.com/photos/jasonp107/47131685/)

[Now, let's finish up the image code:](http://www.flickr.com/photos/jasonp107/47131685/)  

>   
> 
> ```
> 
> ```
> 
>   

  
Okay, that's a lot, so let's go through it.  

  
-   **align="left"** sets the image to the left side so that text can wrap around it. If you don't want to have text wrapping around the image, leave this part out.
  
-   **hspace="10"** creates some space around the image, so that the text wrapping around it doesn't ride right up against it. Again, if you're not wrapping text, you can leave this part out.
  
-   The **src=** is going to be the part you just copied, and it's the thumbnail image that will be shown in your blog. Don't forget to close the link tab by adding the "/a" at the end of it all, otherwise you may end up with one large link that doesn't work ;)
  

  
If I pasted the code I've created into my blog, the image will be aligned [Image removed]  
on the left side, and I'm free to wrap my text around it with a description. In this case I've picked a picture of my friend Mike lining up a pool shot during one of our games at the East Slope Pub, which is an easy walk from where I'm living here on campus.

Unfortunatley, I haven't yet figured out how to add a border to the pictures I post, so everything looks a little cut and dry when you do it this way. I'll probably experiment with building tables around them next, but as far as I can tell none of the "border" options work within the img tab in a wordpress post, despite the fact they work fine in a regular html document.

In the meantime, enjoy.
