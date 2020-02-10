export default `
<p><img src="https://www.pfmp.com/resources/img/services/complexity-management_02.jpg" alt="Complex cables" /></p> <blockquote>   <p>Relying on complex tools to manage and build your system is going to hurt the end users. […] "If you try to hide the complexity of the system, you'll end up with a more complex system". Layers of abstraction that serve to hide internals are never a good thing. Instead, the internals should be designed in a way such that they NEED no hiding. — Aaron Griffin (Arch Linux Maintainer)</p> </blockquote> <p>I may not yet be the greyest beard, but I have journeyed through my fair share of text editors. From the lofty refactors of IntelliJ, through the barren Vim lands, and over the misty mountains of VS Code. But it is in the remote Kakoune plains that I found my peace.</p> <p>What’s a <em>Kakoune</em>, you say? Well, I’m glad you asked! It’s the best thing since sliced bread. It’s a Piet Mondrian painting masquerading as software. It’s… the dumbest code editor I know of. It’s the <strong>UNIX philosophy</strong> at its finest.</p> <blockquote>   <p>Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.</p> </blockquote> <p>You see, Kakoune doesn’t overstep its bounds. It’s a code editor, and nothing else. Kakoune is the chef’s knife that slices, dices, chops and minces your code.</p> <p>But Kakoune doesn’t have tabs or even a scripting language. For that, you can use tmux and shell scripts, respectively.</p> <p>Wherever it made sense to use the platform, Kakoune did. The end result is that not only do you learn Kakoune, you also gain an understanding for the entire UNIX ecosystem lying underneath.</p> <h2 id="designingforprogrammers">Designing for programmers</h2> <h2 id="rubyrailsandrage">Ruby, Rails, and Rage</h2> <blockquote>   <p>If you try to hide the complexity of the system, you'll end up with a more complex system.   Instead, the internals should be designed in a way such that they NEED no hiding.</p> </blockquote> <p>This week, as I was learning Ruby on Rails, I found myself pondering these words of wisdom once again. Every decision felt arbitrary (<em>it was</em>). Was I learning to program a web server, or was I only learning some magic incantations (<em>I was</em>)</p> <p><em>Wait, should that be <code>:user</code> or <code>:users</code>??</em> Oh, don’t worry about it.</p> <p><em>Wait, where is that variable coming from??</em> Oh, don’t worry about it. </p> <p><em>Wait, is that thing a method or a variable??</em> Oh, don’t worry about it.</p> <p><em>Wait, how do I even add a static page without changing 5 different files??</em>  … … … ¯\<em>(°◞౪◟°)</em>/¯</p> <p><em>Wait, WTF is CoffeeScript doing here!?</em> … … … ¯\<em>(´◉◞౪◟◉)</em>/¯</p> <p>After a week, writing Rails code still feels like  No, I <em>don’t</em> think we should rewrite every web server in existence in Assembly. Yes, I <em>do</em> think Rails has its use cases. If you’re an agency churning out websites by the dozen, Rails might very well be the best choice for you. But if you’re planning for the long term, please do learn how to write a web server, not the <em>abstraction</em> of one. Don’t just learn ActiveRecord, learn about databases.</p> <h2 id="fightingtheframework">Fighting the Framework</h2> <blockquote>   <p>You are what you code. - Me</p> </blockquote> <p>Programming is the art of breaking large problems into smaller, more manageable parts. The tools we use to solve those problems end up reflecting on the solutions we choose. <a href="https://en.wikipedia.org/wiki/Unix_philosophy">Small, flexible tools</a> will produce small, flexible software. Large, monolithic tools will beget large, monolithic software. Consider this a miniature form of <a href="https://en.wikipedia.org/wiki/Conway%27s_law">Conway’s Law</a>.</p> <p>Large frameworks like Rails aren’t dangerous simply because they abstract over their problem. They are dangerous because they abstract over so many different things at the same time.</p> <p>Next time you find yourself drooling over a new shiny framework, please ask yourself: </p> <ul> <li>What’s the likelihood of this abstraction still being relevant in 2 years? 5 years? 10 years?</li> <li>What is this code hiding from me? Will it come back to haunt me?</li> <li>Will it play nice with the rest of my toolkit?</li> <li>Is this something I could reasonably code myself?</li> </ul> <p>Why do we trade our LEGO bricks for Playmobils? Why do we give up our home-cooked code for heat-and-serve copy-pastas?</p>
`;
