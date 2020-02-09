<script>
  export let project;
  const { name, subtitle, description, github } = project;

  function playVideo(e) { e.target.play() }
</script>


<article>
  <h4>
    <a href={`https://github.com/Vincent-Carrier/${github}`}>{name}</a>
  </h4>
  <h5>{subtitle}</h5>
  <p>{description}</p>
  <video on:click={playVideo} preload="auto" mute>
    <source src={`demos/${github}.webm`} type="video/webm">
    <source src={`demos/${github}.mp4`} type="video/mp4">
  </video>
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
    box-shadow: 8px 8px 32px -5px rgba(0,0,0,0.13);
    transition: width 0.2s ease-out;
  }

  video:hover {
    cursor: pointer;
    max-width: 710px;
    width: 82%;
    box-shadow: 4px 4px 16px -5px rgba(0,0,0,0.23);
    transition: width 0.2s ease-in;
  }
</style>


