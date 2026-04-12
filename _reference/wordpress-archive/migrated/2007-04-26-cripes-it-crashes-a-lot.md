---
title: "Cripes it crashes a lot"
description: "I don't know what it is that I'm doing that makes OSX hate me so much, but this laptop crashes ALL THE FREAKING TIME. It just crashed for the second time tod..."
pubDate: 2007-04-26
archive: true
tags: [archive]
---

I don't know what it is that I'm doing that makes OSX hate me so much, but this laptop crashes ALL THE FREAKING TIME.

It just crashed for the second time today. The first time it crashed after I clicked on a link from Google. The second time it crashed when I left it alone in the other room for a while. It gave me this indecipherable info:

> panic(cpu 0 caller 0x001A429B): Unresolved kernel trap (CPU 0, Type 14=page fault), registers:  
> CR0: 0x8001003b, CR2: 0xaedac033, CR3: 0x00dd0000, CR4: 0x000006e0  
> EAX: 0xaedac003, EBX: 0x80000003, ECX: 0x38911578, EDX: 0x09b5d3f0  
> CR2: 0xaedac033, EBP: 0x1401bd28, ESI: 0x389093f0, EDI: 0x1249b308  
> EFL: 0x00010202, EIP: 0x00a09c84, CS: 0x00000008, DS: 0x00000010
> 
> Backtrace, Format - Frame : Return Address (4 potential args on stack)  
> 0x1401bae8 : 0x128d08 (0x3cb134 0x1401bb0c 0x131de5 0x0)  
> 0x1401bb28 : 0x1a429b (0x3d0e4c 0x0 0xe 0x3d0670)  
> 0x1401bc38 : 0x19ada4 (0x1401bc50 0x25ad0e00 0x1 0x1)  
> 0x1401bd28 : 0x9e37f4 (0x125cd004 0x389093f0 0x9b5d3f0 0xaedac003)  
> 0x1401bf08 : 0x39a463 (0x1249b308 0x29bd800 0x1 0x26a6cec)  
> 0x1401bf58 : 0x399635 (0x29bd800 0x135eb4 0x0 0x26a6cec)  
> 0x1401bf88 : 0x39936b (0x29c8840 0x0 0xac1007 0x0)  
> 0x1401bfc8 : 0x19ac1c (0x29c8840 0x0 0x10 0x0) Backtrace terminated-invalid frame pointer 0x0  
> Kernel loadable modules in backtrace (with dependencies):  
> com.apple.driver.AirPortAtheros(211.2)@0x9b5000  
> dependency: com.apple.iokit.IONetworkingFamily(1.5.1)@0x6bf000  
> dependency: com.apple.iokit.IOPCIFamily(2.2)@0x582000  
> dependency: com.apple.iokit.IO80211Family(140.4)@0x999000
> 
> Kernel version:  
> Darwin Kernel Version 8.9.1: Thu Feb 22 20:55:00 PST 2007; root:xnu-792.18.15~1/RELEASE\_I386

Woohoo, uncrashable mac!
