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
</style>
