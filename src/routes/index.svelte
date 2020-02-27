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
    font-size: 1.2em;
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
    background-size: cover;
    width: calc(3vw + 256px);
    height: calc(3vw + 256px);
    border-radius: 100%;
    margin: 3em;
    box-shadow: -2px 2px 7px 4px rgba(0, 0, 0, 0.1);
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

  section {
    width: 100vw;
    padding: 1em 3em;
  }

  section:nth-child(even) {
    background-color: var(--secondary2);
    color: white;
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
    <h2>Web Developer</h2>
  </header>
  <div class="hero-img" />
</section>
<section>
  <div class="text-block">
    <h3>Welcome to my website!</h3>
    <p>It's pretty empty in here... for now</p>
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
