<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    padding: 0;
    display: flex;
    justify-content: stretch;
  }

  .selected {
    border-bottom: solid 2px var(--secondary1);
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    font-size: 1em;
    flex-grow: 1;
    text-align: center;
  }
</style>

<nav>
  <a class:selected="{segment === undefined}" href=".">home</a>
  <a class:selected='{segment === "resume"}' href="resume">résumé</a>

  <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
  <a rel="prefetch" class:selected='{segment === "blog"}' href="blog">blog</a>
</nav>
