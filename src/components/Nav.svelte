<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0;
    color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    width: 33%;
    text-align: center;
  }

  .selected {
    border-bottom: solid 2px var(--secondary1);
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li><a class:selected="{segment === undefined}" href=".">home</a></li>
    <li><a class:selected='{segment === "resume"}' href="resume">résumé</a></li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a rel="prefetch" class:selected='{segment === "blog"}' href="blog"
        >blog</a
      >
    </li>
  </ul>
</nav>
