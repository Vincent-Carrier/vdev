<script>
  export let experience;
  const { company, title, description, website, duration } = experience;
</script>

<article>
  <h4>
    <a href="{website}">{company}</a>
  </h4>
  <h5>{title}</h5>
  <p>{description}</p>
</article>

<style>
  h4 {
    font-size: 1.8rem;
    margin-bottom: 0;
  }

  h5 {
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 400;
    color: var(--secondary1);
    margin-top: 0.4rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.2rem;
    margin-top: 0.9rem;
  }

  video {
    margin: 0 auto;
    min-width: 300px;
    max-width: 700px;
    width: 80%;
    display: block;
    border-radius: 12px;
    border: 4px solid white;
    margin-bottom: 4rem;
    box-shadow: 8px 8px 32px -5px rgba(0, 0, 0, 0.13);
    transition: box-shadow 0.1s ease-out;
  }

  video:hover {
    cursor: pointer;
    box-shadow: 4px 4px 16px -5px rgba(0, 0, 0, 0.23);
    transition: box-shadow 0.3s ease-in;
  }
</style>
