<script>
  import Project from "../components/Project.svelte";
  import Experience from "../components/Experience.svelte";
  import Education from "../components/Education.svelte";

  let projects = [
    {
      name: "ThirdWheel",
      subtitle: "Find the perfect match. Or make it.",
      description: `A single-page app that lets you play Cupid.
      It's like Tinder but without all the swiping! Built with React,
      Socket.io, Sass, Node, Express and PostgreSQL.`,
      github: "thirdwheel"
    },
    {
      name: "Scheduler",
      subtitle: "Because agreeing on time is always awkward",
      description: `A single-page app where students can schedule
      interviews with their teachers. Built with React and tested
      with Storybook, Jest and Cypress.`,
      github: "scheduler2"
    },
    {
      name: "MySpaces",
      subtitle: "It's like Wikipedia but for places",
      description: `A website where users can share their favorite
      locations with others and receive contributions from others.
      Built with Node, PostgreSQL, Leaflet.js and jQuery.`,
      github: "MySpaces"
    },
    {
      name: "Tweeter",
      subtitle: "The greatest Twitter clone the world has ever seen",
      description: "Made with jQuery and lots of duck tape.",
      github: "tweeter"
    },
    {
      name: "TinyApp",
      subtitle: `A web app that lets you shorten URLs, so they're
      easier to share on Tweeter`,
      description: "Built with Node, Bootstrap, EJS and love.",
      github: "tinyapp"
    },
    {
      name: "GoChess",
      subtitle: "Play chess from your command-line",
      description: `I've written half a dozen chess apps like this one because
      this is how I like to learn new languages. This is how I learned to write
      Rust, F#, Ruby, Swift and C# (among others).`,
      github: "gochess",
      screenshot: true
    }
  ];

  let educations = [
    {
      name: "Full-Stack Web Dev Bootcamp",
      institution: "Lighthouse Labs",
      duration: "Graduated Feb. 2020"
    },
    {
      name: "Self-directed learning",
      duration: "Jan. 2017 - Dec. 2018"
    },
    {
      name: "Arts & Science Degree",
      institution: "Cegep de Rimouski",
      duration: "Graduated May 2016"
    }
  ];

  let experiences = [
    {
      company: "Omnigate Systems",
      title: "Java Developer",
      description:
        "Implemented new features, participated in design decisions, maintained and improved legacy code",
      website: "https://www.omnigate.com",
      duration: "Jan. 2019 - Jun. 2019"
    }
  ];
</script>

<svelte:head>
  <title>Vincent Carrier - Résumé</title>
</svelte:head>

<article>
  <h1>Vincent <span>Carrier</span></h1>
  <address>
    <a href="mailto:vincent@android-montreal.com">vincent@android-montreal.com</a> ·
    <a href="+15145717839">(514) 571-7839</a> ·
    <a href="https://github.com/Vincent-Carrier">GitHub</a> ·
    <a href="https://www.linkedin.com/in/vincent-carrier-23830a12b/"
      >LinkedIn</a
    >
  </address>
  <p>
    I'm a Montreal-based full-stack web developer on a mission to automate everything.
    After a brief detour through the world of economics, I found my true passion
    in coding. When I'm not churning out 1s & 0s, you can find me meditating
    atop a mountain, somewhere along the St-Lawrence River.
  </p>

  <h2>Projects</h2>
  {#each projects as project}
  <Project {project} />
  {/each}

  <h2>Experience</h2>
  {#each experiences as experience}
  <Experience {experience} />
  {/each}

  <h2>Education</h2>
  {#each educations as education}
  <Education {education} />
  {/each}
</article>

<style>
  h1 {
    font-size: 2.7em;
    text-align: center;
    font-style: italic;
    margin-bottom: 0.2em;
  }

  p {
    font-size: 1.3em;
    margin-bottom: 3em;
  }

  address {
    text-align: center;
  }

  address * {
    color: var(--secondary1);
    font-size: 1.3em;
  }

  h1 span {
    font-weight: 400;
  }

  article {
    max-width: 800px;
    padding: 0 2em;
    margin: 0 auto;
    padding-bottom: 8em;
  }

  h2 {
    font-size: 2.2em;
    margin-bottom: -.8em;
  }
</style>
