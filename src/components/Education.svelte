<script>
  export let education;
  const { name, institution, duration } = education;
</script>

<article>
  <h4>{name}</h4>
  <h5>{institution || ""}</h5>
  <p>{duration}</p>
</article>

<style>
  h4 {
    font-size: 1.8rem;
    margin-bottom: 0;
    color: var(--primary2);
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
