![Complex cables](https://www.pfmp.com/resources/img/services/complexity-management_02.jpg)

> Relying on complex tools to manage and build your system is going to hurt the end users. [...] "If you try to hide the complexity of the system, you'll end up with a more complex system". Layers of abstraction that serve to hide internals are never a good thing. Instead, the internals should be designed in a way such that they NEED no hiding. — Aaron Griffin (Arch Linux Maintainer)

I may not yet be the greyest beard, but I have journeyed through my fair share of text editors. From the lofty refactors of IntelliJ, through the barren Vim lands, and over the misty mountains of VS Code. But it is in the remote Kakoune plains that I found my peace.

What’s a *Kakoune*, you say? Well, I’m glad you asked! It’s the best thing since sliced bread. It’s a Piet Mondrian painting masquerading as software. It’s... the dumbest code editor I know of. It’s the **UNIX philosophy** at its finest.

> Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.

You see, Kakoune doesn’t overstep its bounds. It’s a code editor, and nothing else. Kakoune is the chef’s knife that slices, dices, chops and minces your code.

But Kakoune doesn’t have tabs or even a scripting language. For that, you can use tmux and shell scripts, respectively.

Wherever it made sense to use the platform, Kakoune did. The end result is that not only do you learn Kakoune, you also gain an understanding for the entire UNIX ecosystem lying underneath.

## Designing for programmers



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

> You are what you code

Programming is the art of breaking large problems into smaller, more manageable parts. The tools we use to solve those problems end up reflecting on the solutions we choose. [Small, flexible tools](https://en.wikipedia.org/wiki/Unix_philosophy) will produce small, flexible software. Large, monolithic tools will beget large, monolithic software. Consider this a miniature form of [Conway’s Law](https://en.wikipedia.org/wiki/Conway%27s_law).

Large frameworks like Rails aren’t dangerous simply because they abstract over their problem. They are dangerous because they abstract over so many different things at the same time.

Next time you find yourself drooling over a new shiny framework, please ask yourself: 
- What’s the likelihood of this abstraction still being relevant in 2 years? 5 years? 10 years?
- What is this code hiding from me? Will it come back to haunt me?
- Will it play nice with the rest of my toolkit?
- Is this something I could reasonably code myself?

Why do we trade our LEGO bricks for Playmobils? Why do we give up our home-cooked code for heat-and-serve copy-pastas?