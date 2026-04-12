---
title: "PHPList doesn't work with GoDaddy? Try using SMTP"
description: "I sent out the first e-mail on the Official Eat Sleep Publish E-mail Listhttp://eatsleeppublish.com/lists/?p=subscribe&id=1 today, which means that everyone ..."
pubDate: 2008-09-23
archive: true
tags: [archive]
---

I sent out the first e-mail on the [Official Eat Sleep Publish E-mail List](http://eatsleeppublish.com/lists/?p=subscribe&id=1) today, which means that everyone on that list just got a full copy of the recording I made at The Pitch last week, but it also means that I managed to get PHPlist installed and working on my GoDaddy Virtual Dedicated server.

Unlike other hosting solutions I've used, GoDaddy goes a bit out of the way to make sure that you don't set up a massive spam machine on their servers (this is probably a good thing). I haven't gotten anywhere near to hitting it yet, but there's a 1,000 e-mail "transaction" limit per day, and scripts aren't allowed to run for more than about 360 seconds.

Additionally, GoDaddy disables things like the PHP send mail function and doesn't let PHP make directories writeable (which means you can't upload huge lists of e-mails, you have to enter them manually).

That means that if you're sending large batches, you'd be better off just using a paid system.

But if you're doing small potatoes like I am, PHPList will work just fine on GoDaddy. You just need to tell it to send e-mail via SMTP instead of the PHP send mail function.

To do that, just find the following code in your config.php file:

> `# To use a SMTP please give your server hostname here, leave it blank to use the standard   # PHP mail() command.   define("PHPMAILERHOST",'');`
> 
> `# if you want to use smtp authentication when sending the email uncomment the following   # two lines and set the username and password to be the correct ones   #$phpmailer_smtpuser = 'smtpuser';   #$phpmailer_smtppassword = 'smtppassword';`

and put in your SMTP info. This is generally just the regular login info for any one of your SMTP e-mail accounts.

So your mailerhost is probably something like "mail.domain.com" and your user is "user@domain.com" and I have no idea what your password is.

After that, PHPList should start sending mail just fine. It did for me.
