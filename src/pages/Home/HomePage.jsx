import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Create Edit Store</h1>
        <p className={css.text}>convenient and safe</p>
        <p className={css.text}>you will dance with joy</p>
      </div>

      <iframe
        className={css.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BbpG0t-bxhA?si=sB2FwXFAFjDbn5KE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
