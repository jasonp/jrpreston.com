---
title: "Poor Man's Cron Solution"
description: "Some of the things you want to do when building a web app are surprisingly complex to set up. I've been using Heroku for hosting while teaching myself to bui..."
pubDate: 2011-06-28
archive: true
tags: [archive]
---

Some of the things you want to do when building a web app are surprisingly complex to set up. I've been using Heroku for hosting while teaching myself to build apps in Ruby on Rails, because everyone I talked to pretty much recommended it.

It's a great system, it takes all the "sysadmin" level stuff mostly out of the picture for me, and it even makes things like sending e-mail from an app relatively straightforward. But if you want to execute a process every half hour? Tough luck.

So my solution is to use my media center PC (hooked up to my TV, and rarely, if ever, turned off) as a poor man's cron. I used Windows Task Scheduler to launch chrome and load the URL, once every half hour. We'll see how it works. I still need to remember go downstairs and close the tabs ;)
