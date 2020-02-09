# Magic-Driven Development

![Complex cables](https://www.pfmp.com/resources/img/services/complexity-management_02.jpg)

> Relying on complex tools to manage and build your system is going to hurt the end users. [...] "If you try to hide the complexity of the system, you'll end up with a more complex system". Layers of abstraction that serve to hide internals are never a good thing. Instead, the internals should be designed in a way such that they NEED no hiding. — Aaron Griffin (Arch Linux Maintainer)

I remember trying out [Spacemacs](https://www.spacemacs.org) a few months ago. It seemed like a great text editor at the time, with a ton of great functionality built-in. Fuzzy search, Orgs mode, Vim keybindings, a Git client... heck, even a mail client! It felt like you could live your entire life inside this program.

> [Emacs is a great operating system](https://wiki.c2.com/?EmacsAsOperatingSystem), it just lacks a decent text editor - Someone on the Internet

![Rude Goldberg Machine](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fep60qmdjq8-flywheel.netdna-ssl.com%2Fwp-content%2Fuploads%2F2014%2F08%2Frube.png&f=1&nofb=1)

...I gave up after a week. The moment I tried to tweak something just a little bit, flip a switch, move a lever, everything promptly broke down. The smallest amount of customization proved a daunting task. [A lesson had been learned](https://en.wikipedia.org/wiki/Law_of_conservation_of_complexity).

## Designing for programmers

If anybody deserves the title of “Father of UX”, it’s probably [Larry Tesler](https://en.wikipedia.org/wiki/Larry_Tesler). During his work at Xerox PARC and Apple, Tesler argued strongly for the use of modeless editors, as opposed to the popular paradigm of the time: modal editors. 

![Larry’s License Plate](https://66.media.tumblr.com/3d0029ebbacde1c59fc1dfa474096dd4/tumblr_n158sp91W21qz4leio1_1280.png)
*Larry Tesler’s license plate*

Modal editors, such as Vim, require you to switch frequently between different states (or *modes*) of operation, which specialize in different tasks. For example, Vim gives you the *normal* mode where the *H J K L* keys take on the role of the arrow keys. You can delete with *D*, copy with *Y* and paste with *P*. If you want to insert text, you need to enter the *insert* mode with the *I* key. When you’re done, you can come back to *normal* mode with the *Escape* key. All this switching back and forth makes for a steep learning curve for the end user, which is why most people will choose Notepad over Vim.

*Programmers aren’t most people.* Programmers *enjoy* this kind of complexity. They do not see the cliff in front of them, but dream of the view from the top.

## Ruby, Rails, and Rage

> If you try to hide the complexity of the system, you'll end up with a more complex system.
> Instead, the internals should be designed in a way such that they NEED no hiding.

This week, as I was learning Ruby on Rails, I found myself pondering these words of wisdom once again. Every decision felt arbitrary (*it was*). Was I learning to program a web server, or was I only learning some magic incantations (*I was*)

*Wait, should that be `:user` or `:users`??* Oh, don’t worry about it.

*Wait, where is that variable coming from??* Oh, don’t worry about it. 

*Wait, is that thing a method or a variable??* Oh, don’t worry about it.

*Wait, how do I even add a static page without changing 5 different files??*  ...
... ... ¯\\_(°◞౪◟°)_/¯

*Wait, WTF is CoffeeScript doing here!?* ...
... ... ¯\\_(´◉◞౪◟◉)_/¯

After a week, writing Rails code still feels like 
No, I *don’t* think we should rewrite every web server in existence in Assembly. Yes, I *do* think Rails has its use cases. If you’re an agency churning out websites by the dozen, Rails might very well be the best choice for you. But if you’re planning for the long term, please do learn how to write a web server, not the *abstraction* of one. Don’t just learn ActiveRecord, learn about databases.

## Fighting the Framework

> You are what you code. - Me

Programming is the art of breaking large problems into smaller, more manageable parts. The tools we use to solve those problems end up reflecting on the solutions we choose. [Small, flexible tools](https://en.wikipedia.org/wiki/Unix_philosophy) will produce small, flexible software. Large, monolithic tools will beget large, monolithic software. Consider this a miniature form of [Conway’s Law](https://en.wikipedia.org/wiki/Conway%27s_law).

Next time you find yourself drooling over a new shiny framework, please ask yourself: 
- What’s the likelihood of this abstraction still being relevant in 2 years? 5 years? 10 years?
- What is this code hiding from me? Will it come back to haunt me?
- Will it play nice with the rest of my toolkit?
- Is this something I could reasonably code myself?


There is no such thing as magic and never will be. But LEGOs come pretty darn close.