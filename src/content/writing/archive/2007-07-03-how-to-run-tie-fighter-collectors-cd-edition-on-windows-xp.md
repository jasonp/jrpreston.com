---
title: "How To run TIE Fighter Collector's CD Edition on Windows XP"
description: "I originally wrote this how-to for Flicker Gaming, my now-defunct video game blog. Enjoy. That's right; it's possible. I've seen it. I've done it. And it's e..."
pubDate: 2007-07-03
archive: true
tags: [archive]
---

I originally wrote this how-to for Flicker Gaming, my now-defunct video game blog. Enjoy.  
\*\*\*\*\*\*\*\*\*\*\*\*\*

That's right; it's possible. I've seen it. I've done it.

And it's every bit as glorious as I had hoped.

[Image: TIE Fighter]

It's a great tragedy that the original DOS version of TIE Fighter and its expansions have been largely cut loose by LucasArts, despite the fact that they remain some of the best video game playing ever created. They did release an updated "X-wing Trilogy" edition that bumped up the graphics and the compatibility of the game (to Windows 95), and *that* version will still run on XP if you get [the patch](http://lucasfiles.com/?s=&action=category&id=52), but the game lost a little bit of its heart in the conversion, including the snappy midi-soundtrack that was so phenominal.

I've tried for ages to get TIE Fighter to run on my current computer - I've tried everything short of installing Windows 95, and everything, even boot disks, gave me problems. I'm happy to say, however, that I have finally found the answer.

[[Image: TIE Fighter]](http://www.jason-preston.com/images/tie2.jpg "TIE Fighter")The miracle answer to all of this is an OpenSource DOS emulation tool called [The VDMSound Project](http://sourceforge.net/projects/vdmsound/). It works with Windows XP (SP2 - not sure about SP1), 2000, and NT, but not Windows 95. Unlike most DOS emulators, this one also includes a complete emulation package for sound - so you don't have to mess with crazy extra configurations just to get some audio going.

Getting TIE Fighter to work with VDMSound was a pretty simple process - we used the TIE Fighter Collector's CD-ROM edition, which is the basic game plus all the expansions, served in classic DOS style. The first thing you need to do is install TIE Fighter, which should go off without any problems even in XP. For us, the autoinstall ran as soon as we stuck the CD in, and we picked the "Maximum Install" (only 90megs) and let the program do it's work.

We did, however, skip the Sound Card configuration at this point.

After you've done that, go ahead and install VDMSound on your computer, then browse to the directory where you installed it. In the VDMSound folder, there should be a file called "autoexec.vdms" that you can open and edit in notepad.

Open the file in Notepad and delete the "REM" before the line about CD drivers, like we have here:

[Image: VDMS Autoexec file]

Now you need to go to your TIE Fighter install directory. The default is usually C:/tiecd/, but it really doesn't matter where you installed the game. Right-click the file called "Tie.exe" and select Properties from the drop-down menu that shows up.

Then select the "Compatibility" tab and click to enable the compatibility options just like we have:

[Image: Properties tab for tie.exe]

Next, do the same for the file "tieauto.exe" in the same directory. After you've done that, right click on Tieauto.exe, and select "Run with VDMS." This should bring up a DOS window and load the TIE Fighter autolaunch program. Select "Install" from the prompt it gives you.

Now select "Set up sound card" from the install menu, and hit "C" for "Custom setup." In the fields available, select the following information:

Sound Card: SoundBlaster Pro  
Port: 220  
IRQ: 7  
DMA Channel: 1  
Stereo Reverse: 0

Then use the "test" options to test both the Sound and the Music. They should work without any problems. Once they do, Quit and Save the configuration. Then quit the installer (not "Play TIE Fighter").

You can now run TIE Fighter from XP by right-clicking on TIE.exe and selecting "run with VDMS." The emulator should automatically recognize USB joysticks, and of course you can always use your mouse.

On some computers, flight will not display properly unless you have it set to 320x200 resolution, which you can do from in-game at any point by hitting escape, then selecting "320X200" under the "Flight Res" option. You may also have to play around with how many other applications are running to get good performance, but on our system it ran fine without really having to shut anything down.

For reference, we ran TIE Fighter on:

3Ghz Pentium 4  
1GB of RAM

So dig out the old disks, dust 'em off, and get set up for some of the best Flight/Space Sim action ever made. And may the force be with you.

\*\*\*\*\*\*\*\*\*

There were also a bazillion comments on the entry, so I've "pasted" them below here, in case they're helpful to people:

\*\*\*\*\*\*\*\*\*

\# Spencer Edit Link May 15th, 2006 at 10:41 am

All hail the man to bring back the greatest flight sim in history. Now if I could just find the disk said man had created for me, then itÃ¢â¬â¢s back to the Emporers inner circle for me. Mwahahahaha!  
\# 2 Duncan Edit Link May 15th, 2006 at 12:01 pm

VDMSound has saved a lot of older DOS games. I love the old adventure and puzzle games, and some of them just need a little help to run on a modern system. Thank goodness there are open source projects like this one!  
\# 3 Mike Edit Link May 15th, 2006 at 1:18 pm

IÃ¢â¬â¢ve had TIE fighter running on XP for a while, I just ran it in windows 95 compatability mode.  
\# 4 Jesse Donat Edit Link May 15th, 2006 at 1:18 pm

I always just use dosbox, a lot less work and works great!  
\# 5 andrewguy9 Edit Link May 15th, 2006 at 1:18 pm

Why has Lucas Arts ignored the best line of games it ever had.  
X-Wing Alliance was the best game iÃ¢â¬â¢ve ever played and no one  
has played it because Lucas Arts didnÃ¢â¬â¢t support it!

Rogue Squadron is not half the game of the origional X-Wing,  
and they keep pushing that crap on consumers. If anyone  
from Lucas Arts is listening, please bring back the X-Wing series.  
\# 6 \[GEEKS ARE SEXY\] Tech. News Edit Link May 15th, 2006 at 1:36 pm

Yeah, these DOS emulators work wonders when it comes to play old games..

IÃ¢â¬â¢m still playing Ultima 7 part I and II using one, and IÃ¢â¬â¢m enjoying every moment of it! These old game donÃ¢â¬â¢t really look all that god, but boy are they fun!  
\# 7 JosiahQ Edit Link May 15th, 2006 at 1:37 pm

Mac OSX anyone?

\*sigh\*

Loved those games; oh so much fun.  
\# 8 mitrebox Edit Link May 15th, 2006 at 2:03 pm

Now if you can just get LA to make a real tie fighter 2. Come on it go like number 12 on PC gamers 100 top games of all time.  
\# 9 Steve Edit Link May 15th, 2006 at 2:39 pm

@JosiahQ

DOSBOX is available for many platforms Ã¢â¬â including Mac OSX. I enjoy playing many classic DOS games, including MOM (Master of Magic), MOO (Master of Orion) and Magic Carpet on my Mac.

Download the latest version from versiontracker.com  
\# 10 Beauxcphus Edit Link May 15th, 2006 at 4:34 pm

YES!!

I lucasarts simply updated XWING with a modern rendering enine, higher res textures and DIDNÃ¢â¬â¢T CHANGE A SINGLE THING ABOUT GAMEPLAY for this whole series - they would have a blockbuster.

I have prayed that they would at least release the game to the open source community just like ID did with Doom, then let the OS folks create an engine to do this.

that would totally rule

\-Beaux  
\# 11 Dave Byer Edit Link May 15th, 2006 at 5:09 pm

Lucasarts has a patch on their website that you can download for both games to get them to run in windows xp without any hassles or fancy workarounds. Maybe you guys should check the manufacturerÃ¢â¬â¢s website once in a while for updates. The patches have been there for at least a year and work great on my machine with SP1. Guess some people just have to do things the hard way.  
\# 12 Jason Edit Link May 15th, 2006 at 8:57 pm

Dave -

If you noticed, I pointed out that LucasArts released a Win95 version of the game, and I even linked to the patch. This is a guide to help people run the original DOS version of the game, with old DOS sound and graphics. To me this version just had more heart.

They did release an updated Ã¢â¬ÅX-wing TrilogyÃ¢â¬Â edition that bumped up the graphics and the compatibility of the game (to Windows 95), and that version will still run on XP if you get the patch, but the game lost a little bit of its heart in the conversion, including the snappy midi-soundtrack that was so phenominal.

I noticed that some people like DosBOX - for me the sound didnÃ¢â¬â¢t work, so I thought this process would be more universal.  
\# 13 web design uk Edit Link May 16th, 2006 at 3:29 am

Oh man this post helped so much!

Keep up the great work!  
\# 14 jaisonline Edit Link May 16th, 2006 at 9:33 am

quick question for all.

my fav pc game of all time is Ã¢â¬Åoldtime baseballÃ¢â¬Â (part of the tony la russa baseball line)  
.  
i remember that like most dos games, usb paddles/joysticks wont work w/ it.

will these dos emulators allow usb paddles to work? my current winxp pc doesnt have the old style game ports on the sound card.

thanks,  
\# 15 Hapa Edit Link May 16th, 2006 at 11:33 am

Tie Fighter Rules!! I love this game, I used to play it for countless hours on my 486 DX4 120.  
\# 16 Cydian Edit Link May 16th, 2006 at 5:54 pm

IÃ¢â¬â¢m following your directions to the letter, but whenever I try to run either TIEAUTO.EXE or TIE.EXE with VDMS, it says, Ã¢â¬ÅAccess is denied.Ã¢â¬Â ItÃ¢â¬â¢ll work if I try to run it without VDMS, but whenever I do it with, I get that error message.

Any ideas as to why would be wonderful.  
\# 17 Booya Edit Link May 16th, 2006 at 7:21 pm

Good Stuff! You might also want to try a program called dosbox. Same idea, DOS emulator which I have used to run a few old games.  
\# 18 Jason Edit Link May 16th, 2006 at 10:15 pm

First off your best bet is to check out the forums at the Sourceforge site for VDMS, but offhand IÃ¢â¬â¢d look through the Autoexec file once more, and also check to see if ANYTHING runs in VDMS, or if itÃ¢â¬â¢s just the TIE programsÃ¢â¬Â¦

Ã¢â¬Â¦also, if TIE Fighter runs anyway, why bother? ;)  
\# 19 nightanolw Edit Link May 18th, 2006 at 10:58 am

Im also in the Access denied boat, this is when i try to run anything with vdms. I can get tie fighter to run without it, but no sound.  
\# 20 Jason Edit Link May 19th, 2006 at 10:14 am

There are some good error support ideas here and elsewhere if you google it. If you keep ketting errors, you can always try getting DosBox to work for you instead!  
\# 21 Hasan CHOP! Edit Link May 19th, 2006 at 10:55 pm

I now have one of my oldest and most cherished games back and working in full force after nearly six years.

THANK YOU for posting this!  
\# 22 Neal Edit Link May 25th, 2006 at 2:33 am

I have an old collection of CD Roms, my Girlfriend asked why so many, and I told her that most of them donÃ¢â¬â¢t work anymore. When she suggested Ã¢â¬Åif they donÃ¢â¬â¢t work, why not just throw them out?Ã¢â¬ÂÃ¢â¬Â¦.glad I didnÃ¢â¬â¢t take her suggestion. now, going to try out some OTHER classicsÃ¢â¬Â¦ like Magic Carpet and Privateer.  
\# 23 jamaalP4L Edit Link May 30th, 2006 at 3:27 pm

Wow thx a ton this helped me alot.  
\# 24 Nsan\_ity Edit Link Jun 8th, 2006 at 12:07 pm

So yeah, I tried the VDMSound program, and even tried QFixApp.exe from the Compatabilty Toolkit, and TIE95.exe STILL says I donÃ¢â¬â¢t have a joystick installed. What gives?  
\# 25 Jason Edit Link Jun 8th, 2006 at 1:03 pm

CouldnÃ¢â¬â¢t tell ya - every computer is different. IÃ¢â¬â¢d suggest the VDMSound forums or possibly just googling for answers.

Good luck.  
\# 26 xfactor Edit Link Jun 10th, 2006 at 7:12 pm

DonÃ¢â¬â¢t Bother,  
Just download the file from lucasart.com  
I works perfect.  
\# 27 xfactor Edit Link Jun 10th, 2006 at 7:13 pm

If you need the file to fix this problem you can  
get it from lucasart.com  
Or email me and I will send it to you  
\# 28 Janus3659 Edit Link Jun 27th, 2006 at 9:07 am

Thanks for the help! ItÃ¢â¬â¢s great that they have open source programs like thisÃ¢â¬Â¦

TIE Fighter was one of the best games out there, much less one of the best Star Wars games. Rogue Squadron really doesnÃ¢â¬â¢t even compare. Oh well, at least I can play it again!  
\# 29 jim Edit Link Jun 30th, 2006 at 11:55 am

A little help needed over here..

I have the win 95 compatible tie fighter cd as a rar file, (59MB when extracted), as well as the original msdos tie (13.5MB) but I canÃ¢â¬â¢t install them!

The cd version canÃ¢â¬â¢t find the cd in the drive(tried it with nero imagedrive), and the old version (tried it with vdms)needs to be installed disk by disk(it canÃ¢â¬â¢t find library, needs some PVK files or something).

Is there ANY way I can install ANY of the tie versions?  
Got any ideas? IÃ¢â¬â¢m getting a little desperate here!  
Thanks!  
\# 30 Jason Edit Link Jun 30th, 2006 at 3:57 pm

Well, I think in good conscience I have to point you here:

Ebay sells the CD for approximately $3

I donÃ¢â¬â¢t have much experience with CD images, etc. Your best bet is to shell out a few bucks for a used copy somewhere. If you ask me, itÃ¢â¬â¢s worth it ;)  
\# 31 Lev Edit Link Jul 4th, 2006 at 10:21 pm

Thank you. This article helped me greatly! I loaned my Tie CD out to a friend, but was able to get Xwing to work using your instructions. I donÃ¢â¬â¢t get any audio, but I can get the joystick to work, which makes a worldÃ¢â¬â¢s difference over using the mouse. ;)  
\# 32 ThisGuy Edit Link Jul 6th, 2006 at 8:41 pm

Can someone point me in the right direction to find the correct patch to get Xwing alliance to work on Windows XP? Thanks!  
\# 33 Enner Edit Link Jul 10th, 2006 at 8:29 pm

I am getting an error when I try and run TF through this set up.

I get a Vesa Bios not detected.

Here are my specs whether it has anything to do with it.

P4 HT 3.0E cpu  
Ati Radeon x850 XT AGP  
Samsung monitor on DVI cable  
I just cant seem to get past this error.  
\# 34 Jason Edit Link Jul 11th, 2006 at 2:10 am

I dunno Enner, it sounds like itÃ¢â¬â¢s got nothing to with your hardware.

IÃ¢â¬â¢m no technical expert - you can try the forums as IÃ¢â¬â¢ve suggested above or, if youÃ¢â¬â¢re lucky, someone who actually knows what the Vesa Bios error means will stop by and share their wisdom ;)  
\# 35 Enner Edit Link Jul 11th, 2006 at 6:52 pm

I found the fix for the Vesa Bios not detected error.

You HAVE to install on the C:\\ drive, otherwise you get that error.  
\# 36 Jason Edit Link Jul 11th, 2006 at 6:58 pm

Thanks for letting us know! (and good work ;) )  
\# 37 Brian Edit Link Jul 15th, 2006 at 8:07 pm

No matter what I try, VDM, DOSBOX, I always get the same message. I donÃ¢â¬â¢t have enough EMS memory. How can I fix that?  
\# 38 Debashis Edit Link Jul 20th, 2006 at 11:22 am

This page is a godsend Ã¢â¬Â¦. for years I had this one phrase stuck in my head Ã¢â¬Â¦.

Ã¢â¬ÅDelta 1, incoming missileÃ¢â¬Â

it took 8 years of therapy to forget those words, but brother you have brought it all back Ã¢â¬Â¦ AND I LOVE IT !!!!  
\# 39 Maximus Edit Link Jul 20th, 2006 at 3:12 pm

Ok followed the instructions to get this game working on XP. The sound works on the install, but the game will not boot from the C:\\ drive saying it cannot find the CD rom.

But If I insert the CD it runs ? any ideaÃ¢â¬â¢s ?

Thanks.  
\# 40 Jason Edit Link Jul 20th, 2006 at 3:41 pm

It could be you did the Ã¢â¬ÅpartialÃ¢â¬Â install instead of the Ã¢â¬ÅfullÃ¢â¬Â install, which still leaves files on the CD.

Back in the day 40 megs was a pretty hefty chunk of your hard drive ;)  
\# 41 Maximus Edit Link Jul 21st, 2006 at 5:08 pm

Pritty sure I did a full install twice, but I will do it again to be sure. Thanks for the reply. IÃ¢â¬â¢ll let you know how I get on :)  
\# 42 Maximus Edit Link Jul 21st, 2006 at 5:28 pm

Oh the joy. I messed up on the config. Missed the REM bit in the autoexec.

My GF bought this CD for my birthday as she knew how much joy this game brought me back in the day. This time I will finish the game in hard mode.

Thanks for the website and the tips. Happy hunting Tie pilots, server the empire :D

Thankyou.  
\# 43 Maxs Edit Link Jul 29th, 2006 at 9:54 pm

I have tried everything listed above and one of my XP machines still tells me thereÃ¢â¬â¢s no joystick installed even though itÃ¢â¬â¢s fine and works with other games.. GRRR

IÃ¢â¬â¢ll add to those calling for an exact same type of game as Tie 95 with upodated graphics and at least 100 missions.. I would pay big $$ for it, Tie 95 is still the best space superiority game ever!  
\# 44 Maxs Edit Link Jul 30th, 2006 at 9:50 pm

I hope this will post, itÃ¢â¬â¢s the report I get from the MS FIX-APP program when I try to run Tie 95:

\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
07/30/2006 21:46:44 EmulateHeap 3 - \[NotifyFn\] Win9x heap manager initialized  
07/30/2006 21:46:44 MapMemoryB0000 3 - \[NotifyFn\] Created block at 0xB0000.  
07/30/2006 21:46:46 Win98VersionLie 3 - \[GetVersionExA\] called. return Win98  
07/30/2006 21:46:46 Win95VersionLie 3 - \[GetVersionExA\] Return Win95  
07/30/2006 21:46:47 DisableThemes 1 - \[TurnOffThemes\] Turning off themes  
07/30/2006 21:46:47 Win95VersionLie 3 - \[GetVersion\] Return Win95  
07/30/2006 21:46:47 Win98VersionLie 3 - \[GetVersionExA\] called. return Win98  
07/30/2006 21:46:47 Win95VersionLie 3 - \[GetVersionExA\] Return Win95  
07/30/2006 21:46:47 EmulateCDFS 3 - \[CreateFileA\] Ã¢â¬ÅD:\\ivfiles\\Pasngr.optÃ¢â¬Â: attributes modified for read-only device  
07/30/2006 21:46:48 EmulateJoystick 2 - \[APIHook\_joyGetDevCapsA\] Buffer too small, fixing  
07/30/2006 21:46:48 EmulateJoystick 2 - \[APIHook\_joyGetDevCapsA\] Buffer too small, fixing  
07/30/2006 21:46:48 EmulateJoystick 2 - \[APIHook\_joyGetDevCapsA\] Buffer too small, fixing  
07/30/2006 21:46:48 EmulateJoystick 2 - \[APIHook\_joyGetDevCapsA\] Buffer too small, fixing  
07/30/2006 21:46:48 EmulateJoystick 2 - \[APIHook\_joyGetDevCapsA\] Buffer too small, fixing  
Ã¢â¬Â¦  
07/30/2006 21:46:48 EmulateJoystick 2 - \[APIHook\_joyGetDevCapsA\] Buffer too small, fixing  
Ã¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬â-  
Log Ã¢â¬ÅC:\\WINDOWS\\notepad.exeÃ¢â¬Â  
Ã¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬âÃ¢â¬â-  
\# 45 Jason Edit Link Jul 31st, 2006 at 10:19 am

Eek dude - IÃ¢â¬â¢m going to crop that since thereÃ¢â¬â¢s a lot of the same thing in there.

Contrary to popular opinion I donÃ¢â¬â¢t know tons about hardware and how to go about fixing things like this. Clearly there isnÃ¢â¬â¢t enough Ã¢â¬ÅbufferÃ¢â¬Â for the joystick to work, which suggests to me that the memory allocated (or total available to the emulator) is too small?  
\# 46 Devin Edit Link Aug 1st, 2006 at 11:01 pm

So will this work with the original X-Wing as well? And also, are the X-Wing and Tie Fighter games that come in the X-Wing Trilogy pack the same as the original games, including the old midi music? Or are they like the newer versions that came with the X-Wing vs. Tie Fighter Flight School pack?

I want to be able to play the original X-Wing and Tie Fighter games with their cool midi songs so IÃ¢â¬â¢m just making sure if those are the versions that come in the X-Wing Trilogy.  
\# 47 Jason Edit Link Aug 2nd, 2006 at 11:57 am

According to Wikipedia, what you get in the X-Wing Trilogy pack is the Ã¢â¬ÅenhancedÃ¢â¬Â and Ã¢â¬Ådumbed downÃ¢â¬Â versions of the games. DonÃ¢â¬â¢t know myself from personal experience.

Try e-bay! good luck! (and yes, itÃ¢â¬â¢s just a dos emulator, so it should work with most or all old-school dos games).  
\# 48 Tarzan Edit Link Aug 17th, 2006 at 10:54 pm

Best regards to avtor!  
My OLD Tie is flying again.I only have a problem with resolution.It only works properly in low res.I have Radeon 9800 pro.Any solutions?PLEASE, HELP!!!!!!  
\# 49 Gavin Edit Link Aug 26th, 2006 at 5:36 am

Me to on the resolution problem. I have Radeon Xpress 200M.  
I have a widescreen monitor is this the problem? This link on Gamespot implies this res problem is universal:  
http://uk.gamespot.com/pc/sim/tiefightercollectorscdrom/player\_review.html?mode=reader&id=300026

Please no I am so close!  
\# 50 Gavin Edit Link Aug 26th, 2006 at 7:00 am

guys definitive way to run in hi res:

http://www.wikitechia.org/index.php/TIE\_Fighter:\_CollectorÃ¢â¬â¢s\_CDROM

phew!  
\# 51 Gavin Edit Link Aug 26th, 2006 at 7:02 am

sorry that should be

http://www.wikitechia.org/wiki/TIE\_Fighter:\_CollectorÃ¢â¬â¢s\_CDROM  
\# 52 Gavin Edit Link Aug 26th, 2006 at 7:02 am

sorry ignore those (problem with apostrophe in link) go to www.wikitechia.org and search for tie fighter  
\# 53 gramic Edit Link Aug 29th, 2006 at 10:01 am

Instead Ã¢â¬ÅTIEAUTO.EXEÃ¢â¬Â there is Ã¢â¬ÅTIESTART.EXEÃ¢â¬Â installed in main directory. I canÃ¢â¬â¢t set up a sound card like advised. What should I do??  
\# 54 Julian Edit Link Sep 30th, 2006 at 3:23 pm

IÃ¢â¬â¢m still having problem with the game saying that i have no joystick installed.  
\# 55 Leif Edit Link Oct 3rd, 2006 at 11:02 am

Whenever I try to install the game it says it is starting the install program and then goes to a black screen and I canÃ¢â¬â¢t do anything but ctrl alt del out of it :(  
\# 56 Jason Edit Link Oct 4th, 2006 at 1:29 pm

ThatÃ¢â¬â¢s weird. I think a lot of problems happen when people use burned CDs for some reason.  
\# 57 Leif Edit Link Oct 6th, 2006 at 1:42 pm

Hmm, well i went and just got the Windows 95 collectors one with Xwing and Tie fighter Collectors and stuff, but after i installed it it wouldnt let me run it cause it says i need DirectX5.2 -\_- dont think imma roll it back..  
\# 58 Leif Edit Link Oct 7th, 2006 at 7:29 am

and the patch times out when i try to download it! woe is me  
\# 59 Musica latina Edit Link Oct 10th, 2006 at 11:28 pm

\[URL\]http://www.musica-latina.anticoit.org\[/URL\]  
\# 60 Dead-Eye Edit Link Oct 14th, 2006 at 7:31 am

cool it works. I played the original Tie Fighter so far with DosBox but it was very slow (even cycled up) so I had to turn details very low ;)

Now this emulator allows me to play the SVGA Version with new missions, IÃ¢â¬â¢m glad that it works. But now the sound is somehow very slow. What can I do about that?  
\# 61 Azzurra Edit Link Nov 5th, 2006 at 1:01 am

Buon luogo, congratulazioni, il mio amico!  
\# 62 Charlie Six Edit Link Nov 18th, 2006 at 4:55 pm

Woot! I canÃ¢â¬â¢t believe I can play TIe Fighter again! Sweet!

Playing this makes me wish Lucasarts would remake TIE Fighter for a handheld system like the Nintendo DS. That would be so awesome :)  
\# 63 Metzger Edit Link Nov 20th, 2006 at 6:08 am

if this page donÃ¢â¬â¢t help use Dosbox to play Tie fighter cd.  
install dosbox (download from the main page) to make this dos emu run faster edit the Dosbox.conf using the notepad and replace the txt to thisÃ¢â¬Â¦. use copy and paste and save the fileÃ¢â¬Â¦

\[sdl\]  
\# fullscreen Ã¢â¬â Start dosbox directly in fullscreen.  
\# fulldouble Ã¢â¬â Use double buffering in fullscreen.  
\# fullresolution Ã¢â¬â What resolution to use for fullscreen: original or fixed size (e.g. 1024Ãâ768).  
\# windowresolution Ã¢â¬â Scale the window to this size IF the output device supports hardware scaling.  
\# output Ã¢â¬â What to use for output: surface,overlay,opengl,openglnb,ddraw.  
\# autolock Ã¢â¬â Mouse will automatically lock, if you click on the screen.  
\# sensitiviy Ã¢â¬â Mouse sensitivity.  
\# waitonerror Ã¢â¬â Wait before closing the console if dosbox has an error.  
\# priority Ã¢â¬â Priority levels for dosbox: lowest,lower,normal,higher,highest.  
\# Second entry behind the comma is for when dosbox is not focused/minimized.  
\# mapperfile Ã¢â¬â File used to load/save the key/event mappings from.  
\# usescancodes Ã¢â¬â Avoid usage of symkeys, might not work on all operating systems.

fullscreen=false  
fulldouble=true  
fullresolution=original  
windowresolution=original  
output=ddraw  
autolock=true  
sensitivity=180  
waitonerror=true  
priority=highest,normal  
mapperfile=mapper.txt  
usescancodes=true

\[dosbox\]  
\# language Ã¢â¬â Select another language file.  
\# memsize Ã¢â¬â Amount of memory dosbox has in megabytes.  
\# machine Ã¢â¬â The type of machine tries to emulate:hercules,cga,tandy,pcjr,vga.  
\# captures Ã¢â¬â Directory where things like wave,midi,screenshot get captured.

language=  
machine=vga  
captures=capture  
memsize=32

\[render\]  
\# frameskip Ã¢â¬â How many frames dosbox skips before drawing one.  
\# aspect Ã¢â¬â Do aspect correction, if your output method doesnÃ¢â¬â¢t support scaling this can slow things down!.  
\# scaler Ã¢â¬â Scaler used to enlarge/enhance low resolution modes.  
\# Supported are none,normal2x,normal3x,advmame2x,advmame3x,advinterp2x,advinterp3x,tv2x,tv3x,rgb2x,rgb3x,scan2x,scan3x.

frameskip=0  
aspect=false  
scaler=normal2x

\[cpu\]  
\# core Ã¢â¬â CPU Core used in emulation: simple,normal,full,dynamic.  
\# cycles Ã¢â¬â Amount of instructions dosbox tries to emulate each millisecond.  
\# Setting this higher than your machine can handle is bad!  
\# You can also let DOSBox guess the correct value by setting it to auto.  
\# Please note that this guessing feature is still experimental.  
\# cycleup Ã¢â¬â Amount of cycles to increase/decrease with keycombo.  
\# cycledown Setting it lower than 100 will be a percentage.

core=normal  
cycles=9000  
cycleup=100  
cycledown=100

\[mixer\]  
\# nosound Ã¢â¬â Enable silent mode, sound is still emulated though.  
\# rate Ã¢â¬â Mixer sample rate, setting any devices higher than this will  
\# probably lower their sound quality.  
\# blocksize Ã¢â¬â Mixer block size, larger blocks might help sound stuttering  
\# but sound will also be more lagged.  
\# prebuffer Ã¢â¬â How many milliseconds of data to keep on top of the blocksize.

nosound=false  
rate=44100  
blocksize=2048  
prebuffer=10

\[midi\]  
\# mpu401 Ã¢â¬â Type of MPU-401 to emulate: none, uart or intelligent.  
\# device Ã¢â¬â Device that will receive the MIDI data from MPU-401.  
\# This can be default,alsa,oss,win32,coreaudio,none.  
\# config Ã¢â¬â Special configuration options for the device. In Windows put  
\# the id of the device you want to use. See README for details.

mpu401=intelligent  
device=default  
config=

\[sblaster\]  
\# sbtype Ã¢â¬â Type of sblaster to emulate:none,sb1,sb2,sbpro1,sbpro2,sb16.  
\# sbbase,irq,dma,hdma Ã¢â¬â The IO/IRQ/DMA/High DMA address of the soundblaster.  
\# mixer Ã¢â¬â Allow the soundblaster mixer to modify the dosbox mixer.  
\# oplmode Ã¢â¬â Type of OPL emulation: auto,cms,opl2,dualopl2,opl3.  
\# On auto the mode is determined by sblaster type.  
\# All OPL modes are Ã¢â¬ËAdlibÃ¢â¬â¢, except for CMS.  
\# oplrate Ã¢â¬â Sample rate of OPL music emulation.

sbtype=sb16  
sbbase=220  
irq=7  
dma=1  
hdma=5  
mixer=true  
oplmode=auto  
oplrate=44100

\[gus\]  
\# gus Ã¢â¬â Enable the Gravis Ultrasound emulation.  
\# gusbase,irq1,irq2,dma1,dma2 Ã¢â¬â The IO/IRQ/DMA addresses of the  
\# Gravis Ultrasound. (Same IRQÃ¢â¬â¢s and DMAÃ¢â¬â¢s are OK.)  
\# gusrate Ã¢â¬â Sample rate of Ultrasound emulation.  
\# ultradir Ã¢â¬â Path to Ultrasound directory. In this directory  
\# there should be a MIDI directory that contains  
\# the patch files for GUS playback. Patch sets used  
\# with Timidity should work fine.

gus=true  
gusrate=22050  
gusbase=240  
irq1=5  
irq2=5  
dma1=3  
dma2=3  
ultradir=C:\\ULTRASND

\[speaker\]  
\# pcspeaker Ã¢â¬â Enable PC-Speaker emulation.  
\# pcrate Ã¢â¬â Sample rate of the PC-Speaker sound generation.  
\# tandy Ã¢â¬â Enable Tandy Sound System emulation (off,on,auto).  
\# For auto Tandysound emulation is present only if machine is set to tandy.  
\# tandyrate Ã¢â¬â Sample rate of the Tandy 3-Voice generation.  
\# disney Ã¢â¬â Enable Disney Sound Source emulation.

pcspeaker=true  
pcrate=22050  
tandy=auto  
tandyrate=22050  
disney=true

\[bios\]  
\# joysticktype Ã¢â¬â Type of joystick to emulate: none, 2axis, 4axis,  
\# fcs (Thrustmaster) ,ch (CH Flightstick).  
\# none disables joystick emulation.  
\# 2axis is the default and supports two joysticks.

joysticktype=none

\[serial\]  
\# serial1-4 Ã¢â¬â set type of device connected to com port.  
\# Can be disabled, dummy, modem, directserial.  
\# Additional parameters must be in the same line in the form of  
\# parameter:value. Parameters for all types are irq, startbps, bytesize,  
\# stopbits, parity (all optional).  
\# for directserial: realport (required).  
\# for modem: listenport (optional).  
\# Example: serial1=modem listenport:5000

serial1=dummy  
serial2=dummy  
serial3=disabled  
serial4=disabled

\[dos\]  
\# xms Ã¢â¬â Enable XMS support.  
\# ems Ã¢â¬â Enable EMS support.  
\# umb Ã¢â¬â Enable UMB support (false,true,max).

xms=true  
ems=false  
umb=false

\[ipx\]  
\# ipx Ã¢â¬â Enable ipx over UDP/IP emulation.

ipx=false

\[autoexec\]  
\# Lines in this section will be run at startup.  
mixer fm 350  
\# 64 Lucas2600b Edit Link Nov 25th, 2006 at 3:34 pm

This is a great tutorial! for us budget PC gamers with old computers (AMD Duron 1300, 512 megs of DDR ram, WinXP w/ SP2) VDMsound works much better than DOS Box. I tried DOS Box a few months ago and it ran way too slow. I do have the disk version of X-wing, and the newer Win95 version and I do like the old one much better. With this configuration IÃ¢â¬â¢ve got Rebel Assault 1, X-wing (disk version), and Tie Fighter Collectors CD-Rom (DOS) to work perfectly with joystick support. Thank you so much!  
\# 65 Tuomaa Edit Link Nov 28th, 2006 at 5:51 pm

I couldnÃ¢â¬â¢t get anything to run with VDMSound, I always ended up in an unrespoding black screen and had to terminate the process. Based on a bit of searching, IÃ¢â¬â¢m guessing this is due to my video card not supporting VESA properly (donÃ¢â¬â¢t quote me though). VDMSoundÃ¢â¬â¢s Ã¢â¬Åadd basic VESA supportÃ¢â¬Â switch didnÃ¢â¬â¢t help either.

I had tried DOSBox before, and like many of you, had found it way too slow in 640Ãâ480. The config posted by Metzger above didnÃ¢â¬â¢t seem to do anything for me, but I experimented with a few settings and eventually actually managed to get it working smoothly!

So, just in case this might help one or two people, hereÃ¢â¬â¢s what I changed in my dosbox.conf:  
\* under \[sdl\] I set Ã¢â¬Åoutput=ddrawÃ¢â¬Â  
\* under \[cpu\] I set Ã¢â¬Åcore=dynamicÃ¢â¬Â and Ã¢â¬Åcycles=autoÃ¢â¬Â  
By far the most important of those settings was Ã¢â¬Åcore=dynamicÃ¢â¬Â, it allowed for several times more cycles before my processor use got to 100%. Good cycle value changes with the situation, though (in flight, during cutscenes, in menus, being paused etc.), so having Ã¢â¬Åcycles=autoÃ¢â¬Â helps a lot too. And Ã¢â¬Åoutput=ddrawÃ¢â¬Â Ã¢â¬Â¦ well, youÃ¢â¬â¢d think using directd3d would be wise, but I didnÃ¢â¬â¢t really check how useful it was in addition to the other two :)

Oh and this is with DOSBox 0.65 and a 2.0 ghz Athlon.

Now I only need a better joystick and some skeelz, some of those bonus goals are darn difficult!  
\# 66 Jason Edit Link Nov 29th, 2006 at 5:26 pm

Yeah, sounds like DOSBOX is a good alternate for people with faster machines who canÃ¢â¬â¢t get it going well in VDMSound (or only in lo-res mode).  
\# 67 Ignatius Edit Link Dec 17th, 2006 at 4:03 am

Hi Jason, unfortunatelly after executing the tieauto.exe file , and the previous steps, and after selecting the Ã¢â¬Åset up sound cardÃ¢â¬Â option, it doesnÃ¢â¬â¢t appear the setup sound display, instead of it I have seen a blackscreen without any option to choose. Then, I must close the window with alt-f4 command.

Could you help me?

Thank you.

Ignatius.  
\# 68 dime275 Edit Link Dec 17th, 2006 at 4:10 pm

I have sound. The only problem is when i get to game play, the picture is scattered. Help me O B 1, yourÃ¢â¬â¢re my only hope.  
\# 69 Charles Edit Link Dec 25th, 2006 at 7:23 pm

i got it running but the game crashes with a high pitched sound playing. i setup all the sound card just like they had it, and it will play for a few min but then crash. i have a soundblaster live audigy 4. help.  
\# 70 dime275 Edit Link Dec 26th, 2006 at 6:05 pm

Sorry Charles these people are rude and i hate them  
\# 71 Pablo Edit Link Dec 28th, 2006 at 11:14 am

Sorry i hva a problem i tried VDM soundf and i have installed the DOSBOX but nothing works it\`s still apperas the message Ã¢â¬Åyo haven\`t enought EMS memory 2000 reuired, please help\`i tried everything and i can\`t play this great game!Ã¢â¬Â!!

when i execute de dosbox it apperas a windows in black (like in dos) whit the drive Z: and i cant put CÃâ or anything but the way the files of lucas art doent work at al  
\# 72 dime275 Edit Link Dec 29th, 2006 at 6:26 pm

PABLO, right click on start go to explore ,tiecd, right click tieauto,run w/vdm sound.  
I have no ems memory on. try to config and poke around.  
Does your gameplay work, is it scattered like mine??? Please reply  
\# 73 Ben Rowe Edit Link Jan 5th, 2007 at 6:39 pm

Man, I LOVE this! Thank the Force someone found a way to make this WORK! TIE Fighter was my all time favourite SW game, definitely better than X-Wing! We all know the EmpireÃ¢â¬â¢s where itÃ¢â¬â¢s at! THANK YOU for letting me play this!!! (funny thing: I was already using VDMS so I could play Dark Forces, it just wouldnÃ¢â¬â¢t work with TIEÃ¢â¬Â¦but nowÃ¢â¬Â¦!!!!!) Thank You!!!  
\# 74 David Edit Link Jan 12th, 2007 at 9:04 pm

Has anyone gotten error 3 when selecting TIE.exe Ã¢â¬ÅRun with VDMSÃ¢â¬Â? The computer takes me into a DOS screen, tells me error 3 which is when it detects no CD in my CD drive. I have the CD in my drive, so I have no clue what to do.  
\# 75 DanFun64 Edit Link Jan 18th, 2007 at 5:10 pm

I have never played the game. What is it like? I got some advice for you guys. Windows users: If you canÃ¢â¬â¢t use the VDMSound configuration (I myself canÃ¢â¬â¢t run the (Better than Windows port) dos version of the fangame Sonic :P rogect Mettrex I get an Error when I try to load it. Needs a temp file) use the dosbox configuration below:  
Users other then windows: VDMSound has no other port then a windows port. USE DOSBOX! Good greaf! http://www.wikitechia.org/index.php/TIE\_Fighter:\_CollectorÃ¢â¬â¢s\_CDROM  
Good Luck!  
\# 76 Wulfgard Martel Edit Link Jan 19th, 2007 at 10:07 pm

SWEEEET!!

IÃ¢â¬â¢ve been wanting something like this for ages. The old games had a story, authenticity, and heart that the new flashier games just seem to lack.

Now its time to get in character.

Die! You rebel scum.  
\# 77 jabbrwokk Edit Link Jan 22nd, 2007 at 4:04 pm

Tried VDMSound as recommended by the article and it worked perfectly! Thank you. It took no time at all for me to get right back into the game again, after a 10-year hiatus, I remembered where all the commands were and everything. And IÃ¢â¬â¢m well on my way to becoming an EmperorÃ¢â¬â¢s Hand again.  
But there is one small thing Ã¢â¬â whenever the game tries to access the audio off the CD (the new content in the collectorÃ¢â¬â¢s CD) the drive spins up, causing the game to pause, and the sound can be a bit choppy when itÃ¢â¬â¢s first accessing the drive. Is there any way to copy the voices folder to the game directory, and edit a config file so it looks for that data on the hard drive instead of the CD? IÃ¢â¬â¢ve poked around the configuration files but none of them seem to be readable in a text editor. Suggestions?  
\# 78 purchase fioricet Edit Link Jan 26th, 2007 at 10:13 pm

purchase fioricet .  
\# 79 Jon Edit Link Jan 28th, 2007 at 9:11 pm

Wow, I got this working in 640Ãâ480 using VDMSound following the instructions exactly, but I have a widescreen monitor and it stretches the image to fill the screen. Anyone else have that problem?  
\# 80 fioricet fioricet Edit Link Feb 3rd, 2007 at 4:12 am

fioricet .  
\# 81 ethop Edit Link Feb 8th, 2007 at 9:04 am

if you want play your old TF  
with great graphic

http://www.darksaber.gaylenol.com/crafttftc.htm  
\# 82 futurepacker Edit Link Feb 27th, 2007 at 10:31 pm

when i put the tie cd in the auto play dose not work what do i do help me please i have xp sp2  
\# 83 Nate Edit Link Mar 3rd, 2007 at 3:05 pm

I have the same problem as you FUTUREPACKER, after I click Ã¢â¬ÅInstall Tie-FighterÃ¢â¬Â from the launcher, nothing really happensÃ¢â¬Â¦  
\# 84 Rene Edit Link Mar 8th, 2007 at 6:59 pm

Hi, I have it working in VDMS mode, but only in 320Ãâ200 resolution. In 640Ãâ480 the graphics are corrupted. I have working dosbox in 640Ãâ480, but the sound and game play are not as smooth. Anyway to achieve this? i have a ati mobility Radeon 9600.  
Would appreciate any help soon as the girlfriend is away for the week - more spare time than normal.  
\# 85 Kate Edit Link Mar 15th, 2007 at 4:48 pm

I did what was said but when I go to run TIE Fighter it says Error #3. Something about the CD isnÃ¢â¬â¢t in the drive but it is. Help!  
\# 86 Will Edit Link Mar 24th, 2007 at 7:24 am

iÃ¢â¬â¢ve tried lots of things, but it doesnÃ¢â¬â¢t even load the install program. help me please, i love this game so much. i have a Dimension 3100c with integrated everything (lol)  
iÃ¢â¬â¢ve tried using DosBox, but it just seems to freeze when i start the installerÃ¢â¬Â¦  
\# 87 Francesco Edit Link Mar 27th, 2007 at 11:51 am

I also have the same problem of Kate: ERROR #3, like the cd drive is not loaded. How is it possible? Someone help us!!!!!!!!!!!!!!!!!!!!!! It got stuck at the last stepÃ¢â¬Â¦.  
\# 88 NFoB Edit Link Mar 29th, 2007 at 11:12 am

IÃ¢â¬â¢m using it and itÃ¢â¬â¢s working great but every time I try to reload warheads the game shuts down. Anyone know how to stop it?  
\# 89 Will Edit Link Mar 30th, 2007 at 4:39 pm

the Article at wikitechia worked for me: here it isÃ¢â¬Â¦.

http://www.wikitechia.org/index.php/TIE\_Fighter:\_CollectorÃ¢â¬â¢s\_CDROM

Hopefully itÃ¢â¬â¢ll work for you too
