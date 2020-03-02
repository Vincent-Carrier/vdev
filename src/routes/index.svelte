<style>
  h1,
  h2 {
    text-align: center;
    margin: 0 4px;
  }

  h1 {
    font-size: calc(2vw + 2.4em);
    font-weight: 700;
    font-style: italic;
  }

  h1 span {
    font-weight: 400;
  }

  p {
    font-size: 1.3em;
  }

  @media (max-width: 780px) {
    section {
      flex-direction: column-reverse;
    }
  }

  h2 {
    color: var(--secondary1);
    font-size: calc(2em + 1vw);
    font-weight: 300;
  }

  h3 {
    font-size: 2.1em;
    text-align: right;
  }

  .hero-img {
    background-image: url("/profile.jpg");
    flex-shrink: 0;
    background-size: cover;
    width: calc(4vw + 256px);
    height: calc(4vw + 256px);
    border-radius: 100%;
    margin: 1.5em 3em;
    box-shadow: -2px 2px 20px 4px rgba(0, 0, 0, 0.1);
  }

  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-block {
    max-width: 56em;
    margin: 0 auto;
  }

  .icons {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .icons img {
    width: 3em;
    margin: 0 0.8em;
    filter: invert(1);
  }

  section {
    width: 100vw;
    padding: 1em 3em;
  }

  section:nth-child(even) {
    background-color: var(--primary2);
    color: var(--light1);
  }

  section:nth-child(even) p {
    text-align: right;
  }

  section:nth-child(even) h3 {
    text-align: left;
  }
</style>

<svelte:head>
  <title>Vincent Carrier - Web Developer</title>
</svelte:head>

<section class="hero">
  <header>
    <h1>Vincent <span>Carrier</span></h1>
    <h2>Full-Stack Web Developer</h2>
  </header>
  <div class="hero-img" />
</section>
<section>
  <div class="text-block">
    <h3>Welcome to my website!</h3>
    <p>Feel free to contact me via email / LinkedIn. Or have a look at my GitHub!</p>
    <div class="icons">
      <a href="https://github.com/Vincent-Carrier"><img src="github-brands.svg" alt="GitHub"></a>
      <a href="https://www.linkedin.com/in/vincent-carrier-23830a12b/"><img src="linkedin-brands.svg" alt="LinkedIn"></a>
      <a href="mailto:vincent@android-montreal.com"><img src="paper-plane-solid.svg" alt="Email"></a>
  </div>
</section>
<section>
  <div class="text-block">
    <h3>Proudly built with Svelte & Sapper</h3>
    <p>
      You can find all the source code for this website
      <a href="https://github.com/Vincent-Carrier/vdev">here</a>.
    </p>
  </div>
</section>
