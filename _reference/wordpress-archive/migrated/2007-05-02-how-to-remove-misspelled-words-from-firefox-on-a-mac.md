---
title: "How To: Remove misspelled words from Firefox on a Mac"
description: "I noticed that the tutorials for doing this are all for the PC version of Firefox, which is wonderful and useful, but the file path doesn't line up for the M..."
pubDate: 2007-05-02
archive: true
tags: [archive]
---

I noticed that the tutorials for doing this are all for the PC version of Firefox, which is wonderful and useful, but the file path doesn't line up for the Mac.

Turns out, though, that everything else is correct. So if you use a mac and you accidentally added "desparate" to the dictionary, here's how you clear it out. First, close Firefox. The changes won't stick if FF is running.

The use spotlight to find "persdict.dat" - just type in persdict, hit show all results, then right click (ctrl-click) the file and hit "show in finder."

Now open the .dat file using a text editor (TextEdit should work, I use Smultron whenever possible), and just delete the misspelled word. Save it. Exit. Re-open Firefox, and you're good to go.
