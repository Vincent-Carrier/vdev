<style>
  h1,
  h2,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin-top: 40%;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  div {
    background-image: url("/profile.jpg");
    background-size: cover;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    margin: 3em;
    transform: rotate(-10deg);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1);
  }

  section {
    display: flex;
  }
</style>

<svelte:head>
  <title>Vincent Carrier - Web Developer</title>
</svelte:head>

<section>
  <div></div>
  <header>
    <h1>Vincent Carrier</h1>
    <h2>Web Developer</h2>
  </header>
</section>
