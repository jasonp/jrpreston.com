---
title: "\"Error on Last Sync\" solution for Missing Sync for Window Mobile 5"
description: "I've been dealing with a syncing problem between my phone and my Mac for about a month now, and I finally got tired of not having my contacts synced up. I me..."
pubDate: 2007-02-07
archive: true
tags: [archive]
---

I've been dealing with a syncing problem between my phone and my Mac for about a month now, and I finally got tired of not having my contacts synced up. I mean...that's the whole point in the first place.

For a while I've been getting the error message when syncing my Address Book with my phone contacts:

"Error on last syc. See log." and then the log would have some weird memory error message.

So I did some googling and some playing around with my computer and the phone.

I found the solution, more or less on [this forum thread](http://forums.markspace.com/viewtopic.php?p=2811&sid=77ff09f3cd13c0ed57f01d08a041af4e).

>   
> Did you try overwriting your Q with the contacts?
> 
> Before you do anything, I'd backup your Address Book contacts to be safe. (File > Backup Address Book).
> 
> Then, set your Contacts plugin to overwrite and give it a try.

Oddly simple, but it worked. You can use the "settings" button in the main Missing Sync window to "reset sync history" and then simply select "Delete all contacts from \[device name\]." It deleted them all, then shoved 'em back on there. Now I can sync.

Hope this makes the solution easier to find.
