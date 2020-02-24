# Pipe dreams: The Timeless Beauty of UNIX Pipes

Did you ever wish your codebase looked a bit less like this…
[Tangled mess of cables](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn6.dissolve.com%2Fp%2FD1024_104_568%2FD1024_104_568_1200.jpg&f=1&nofb=1)
…and a bit more like this?
[Railway tracks](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.reckontalk.com%2Fwp-content%2Fuploads%2F2016%2F04%2Findian-railway-system-2.jpg&f=1&nofb=1)

I know I do. And when that happens, I recall the warmth and fuzziness of laying down a few UNIX pipes next to each other. If you don’t know already, UNIX pipes are the spindly bars which sparkle the shell scripts you steal from StackOverflow. 

## What’s in a pipe?

Pipes feed the output of one command into the input of the next one, in such a way that they can be gracefully chained together. Here’s a relatively straightforward example I came up with:

`$ ps -a | awk '$3 > 1 && NR > 1 {print $1}' | xargs kill`

Not withstanding the cryptic invocations such as `ps -a` and `xargs kill`, pipes are delightfully easy to read. Let’s break it down, step by step.

Kicking off the chain, I list my running processes with `ps -a`, making use of `head -n 5` to only display the first five lines.

```
$ ps -a | head -n 5
  PID TTY           TIME CMD
28415 ttys000    0:00.01 (bash)
28418 ttys000    0:00.00 (bash)
29434 ttys000    0:00.00 /bin/bash /Users/vincent/.local/bin/k src/components/Nav.svelte
29442 ttys000    0:00.20 kak -c vdev src/components/Nav.svelte
```

We can use `awk` to refine our selection. Let us keep only the processes that have been running for more than an hour.
```
$ ps -a | awk '$3 > 1'
  PID TTY           TIME CMD
69952 ttys000    3:06.11 kak -d -s vdev
60843 ttys003    6:31.51 lazygit
```

Time to zero in on our prey: process IDs.
```
$ ps -a | awk '$3 > 1 && NR > 1 {print $1}'
69952
60843
```

Now we can go for the `kill` Careful, this command will shutdown any user process that has been running for over an hour. **You have been warned.** This works because `xargs` feeds each line of input as an argument to `kill`.

```
$ ps -a | awk '$3 > 1 && NR > 1 {print $1}' | xargs kill
```

Hopefully you’re still with me at this point. Don’t worry if you didn’t understand every single bit of UNIX voodoo in there. Notice how we were able to get quick textual feedback at every step. This is a fortunate side-effect of what is commonly referred to as the *UNIX philosophy*:

> Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.

## Source Code Novels

What would that program sound like if we tried to describe it to someone?

> First, I display a detailed list of user processes. Then I keep only the IDs those that have been running for over an hour. Then I shutdown those processes.

One paragraph. Three sentences. *Not bad.*

Let us now transform our humble program into the next great object-oriented best-seller. I hope you’ve got some loose RAM sticks lying around, cause we’re going to write in the *purest* object-oriented language other, the one and only Java.


```
// When it comes to folders, better safe than sorry!
// src/main/java/com/acmecorp/processkiller/managers/processes/ProcessesManager.java

public class ProcessesManager {
	ProcessesManager() {
		// Implementation left as an exercise to the reader
	}
	
	// Let us not forget about factory functions!
	public static create() {
		// …
	}
	
	public ArrayList<Process> userProcesses() {
		// …
	}
}
```

```
// src/main/java/com/acmecorp/processkiller/terminators/processes/ProcessTerminator.java

// Single Responsibility Principle is very Important
public class ProcessTerminator {
	ProcessTerminator() {
		// …
	}
	
	// Let us not forget about factory functions!
	public static create() {
		// …
	}
	
	public void terminate(Process process) {
		// …
	}
}
```

As you can see, *ProcessesManager* is proud and noble man and will not be summoned in just any manner.

```
// src/main/java/com/acmecorp/processkiller/main.java

// Don't forget to import our dependencies!
import com.acmecorp.processkiller.managers.processes.ProcessesManager;
import com.acmecorp.processkiller.terminators.processes.ProcessTerminator;
import com.acmecorp.processkiller.beans.Process;

public static class OldProcessTerminator {
	public static void main(String[] args) {
		ProcessesManager processesManager = ProcessesManager.create();
		ArrayList<Process> userProcesses = processesManager.userProcesses();
		
		// We shouldn't instantiate a proces terminator unless we need to
		ProcessTerminator processTerminator = null;
		for (Process process : userProcesses) {
			// Convert from milliseconds
			int hours = process.getTime() / (1000 * 60 * 60);
			if (hours >= 1) {
				if (processTerminator == null) {
					processTerminator = ProcessTerminator.create();
				}
				processTerminator.terminate(process);
			}
		}
	}
}
```

Now, *that’s* what I call a novel! Surely it belongs among the Austens and Dickens of this world. And yes, I might have exaggerated on the amount of verbosity. But not much. In reality, this kind of code is more akin to the script of Pulp Fiction than anything else. After two puzzling hours of back and forth, you *might* be able to piece everything back together. But that’s only if you manage to decode the program logic from the heavy amounts of ceremony and so-called “good practices”.

## Your codebase makes me fat

It’s so easy to waste entire days just hopping around a codebase like that, trying to piece together how all those *Manager* classes relate to each other. I remember coming back home from days like these, absolutely exhausted. In all likeliness, I’d order pizza. I’d become irritated and asocial. Because these codebases aren’t simply tedious to work with, [they’re a moral hazard](https://seriouspony.com/blog/2013/7/24/your-app-makes-me-fat).

No matter the amount of tests written, no matter how good the documentation, convoluted code is a public health danger. Spare yourself, spare your children. *Do not feed it.*




## Somewhere Over the Monad

It doesn’t have to be like this. Some languages, like F#, demand explicit file ordering, so that you always know your place inside the program. In fact, 


