[[[

Angle on this story is: the world is dangerous and insecure, and you're asking for it if you don't have a basic layer of understanding about how code works. It's like being able to see the matrix. Walking around without it is like walking around in NYC in the late 80s with cash hanging out of your pockets. 

]]]




# Seeing the Matrix: Why It's Important For Everyone To Understand Code

I have a programmable Harmony TV remote at home that controls almost everything related to watching the big screen: the TV itself, the receiver that operates the sound system, and the Apple TV. It's organized by what you want to do, so for example you'd press the "Apple TV" button and it will turn on the TV, set it to the right video input (not the Xbox, not the antenna...), and turn the speakers on. 

It does those things by pretending, in sequence, that it the remote that came with each device: first it pretends to be the TV remote, and turns it on and send the infared (IR) signal that sets it to the right input. Then it sends the signal for the receiver, turning it on, and setting it to the right input. Then it wakes up the Apple TV, and sets the navigation buttons on the remote to produce the right IR signals to run the little black device from Apple. 

If you understand that process, then it's pretty easy to understand how to use the remote and how to fix it when something goes a little bit awry. Let's say everything turns on but the TV isn't set to the right input -- OK, that's easy, just toggle the selector on the TV to the right input, and you're good to go. It's probably because you waved the remote in the middle of it's sequence of IR signals. 

If you don't understand how the remote works, it's pretty hard to decipher what might have gone wrong. The magical device that turns everything on... didn't work! What next? And why didn't it work? It feels like a punishment given randomly by the universe to frustrated and tired people who just want to watch **West World**. 

I think most of the world has a similar relationship to the rest of the technology that surrounds us. The smartphone and the smart home. The car, the web sites you use, your email. These increasingly complex systems work hard to present a simple interface -- the "one button" approach to watching TV -- and they do it remarkably well. 

Most of the time it works without issue. But sometimes it doesn't. And worse, sometimes people take advantage of our ignorance to steal our information, our credit cards, read our email, or take our identity. 

* * *

I've worked in a startup environment for pretty much my whole career, but I only really became an entrepreneur when I co-founded [Dent](http://original.dentthefuture.com) in 2013. A few years before starting Dent, I realized that it would be a lot easier to try out my own ideas if I learend to do some programming myself. So I set out to teach myself [Ruby on Rails](http://rubyonrails.org/). 

Ruby on Rails combines two concepts: Ruby is a programming language, and Rails is a "framework," which can be thought of as a bunch of common tools that have already been written in Ruby, so you don't have to re-write them. In fact one of the main rallying cries they repeat in a lot of rails tutorials is to keep your code "DRY," which stands for "Don't Repeat Yourself."

* * * 

Let's take one specific example of how the world makes more sense when you have a basic understanding of code. Suppose you've gone to log in at a web service that you haven't used in a while, and you're not entirely sure what your username and password is. 

So you type in your normal username and take a guess at your password. Sure enough, the login fail, and the web service presents you with this frustrating error:

"Your username or password is incorrect."

What's going on here? Why not just tell you __which__ part is wrong? Did you get the right username? If not, there's little point in trying a different password. 

A little insight into how most login procedures work will go a long way in answering this question. So let's dive into it. 

Typically, when you're creating a web service, you'll be writing code that talks back and forth with something called a database. A database is most often understood as a set of tables, much like Excel spreadsheets, where each row in the sheet is an "item" in the database. 

So a web service with user accounts might create a table (spreadsheet) called "users" in their database, and give it some column names, like this:

Users
---------------------------
email address |  password  
---------------------------

Then whenever a new user is created, the code will add a row to the table which stores both an email address and a password, so that the web service has access to that information. 

Of course, it's a massively bad idea to store a user's password in the database as plain text, just the way the user writes it into the password field. Why? Because then anyone with access to the databse, which might include happy employees, disgruntled employees, or even successful hackers, would be able to see and understand each user's password! It would look like this:

Users
---------------------------------
email address     |  password  
---------------------------------
sally@example.com |  do0rKnob!
---------------------------------

So what good developers do is they __encrypt__ the user's password before they store it in the row in the database. That means that the same row as above, would look like this instead:

Users
---------------------------------
email address     |  password  
---------------------------------
sally@example.com |  0ce632cf52970cba463309cab0f2799fee6546e0646c5f9104b18670e9693a6b
---------------------------------

Text that is encrypted in this way has two important properties: first, it __cannot be reversed__, so once "do0rKnob!" becomes this long string of numbers and letters, there is no going backwards! This is why it is secure: no one can see the encrypted string and from it determine the original password. 

The second important property is that the string "do0rKnob!" -- when encrypted -- will __always produce the same result__. This means that the web service actually does not ever need to know your password! When you type in your password to log in, they encrypt what you've typed, and compare that string to the one they've stored in the users table in their database. If the string is the same: voila! you are logged in. If not, then you have entered an incorrect password and an error should be returned. 

But why don't they know if the problem is with the email address (username) or the password?

Here's where it's good to understand how code works. When writing code, you need to tell the computer exactly what to do in every circumstance. The computer has no imagination, and will not generalize on it's own, nor will in just "fill in around the edges," as would even the dullest human. 

So when you want to write code that checks for correct logins, it will use some version of an "IF / THEN" function, which tells the computer what to do in a series of circumstances. The computer -- in this case the web service -- will check each of these circumstances __in order__ and execute the instructions it finds in that place. 

It might look something like this, though I've converted the "code" to look a little bit more like english:

if !user_logged_in? 
	log_in_user(username, password)
end

def log_in_user(username, password)
	user = User.find_by_username(username)
		if user.password == encrypt(password)
			log_in!
		else
		  error: "username or password incorrect"
		end
	end
end




...

At this point, I am sure you are thinking: this is a totally inapporpriate amount of effort just to understand one silly error message. But not so! There's far more at stake than an error message!


* * *

There's a remarkable affinity between programming and other forms of art. Whenever someone tells me they're considering learning to code, I pull up a copy of [The Mythical Man Month](https://en.wikipedia.org/wiki/The_Mythical_Man-Month "The Mythical Man Month"), which is one of the seminal works on computer engineering, and begin to quote from a section near the beginning titled "The Joys of the Craft":

> 

>

I am always struck by the poetic beauty of this description. 

Technology and code have become intimidating to most people. Often enough it's a bit like bragging for a writer, or a musician, or even an MBA to proclaim their ignorance on the subject. 

But code is far less intimidating than it seems, even for people with a background in liberal arts. This is good, because understanding how programming works will explain, at a basic level, a huge part of our world: why the airport kiosk is appears slow, why your digital photo frame keeps powering off, etc. 
 