import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div>
        <h1 className={css.title}>Create Edit Store</h1>
        <p className={css.text}>
          This site helps you to create and save phone numbers of your friends,
          acquaintances and clients. To get started, you need to first register
          and then log in to your account. Then you have the opportunity to
          create a contact and his phone number. They will be saved and you can
          delete them. Thanks to registration, your contacts will be protected.
          Good luck!
        </p>
        {/* <p className={css.text}>you will dance with joy</p> */}
      </div>

      <img src="/public/cont.png" alt="contacts" />

      {/* <iframe
        className={css.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BbpG0t-bxhA?si=sB2FwXFAFjDbn5KE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}
