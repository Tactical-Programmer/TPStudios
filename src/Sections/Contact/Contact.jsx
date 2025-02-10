import styles from "./ContactStyles.module.css";
import ContactSubmitSound from "../../Sounds/Contact-Submit.mp3";

function Contact() {
  const ContactSubmitAudio = new Audio(ContactSubmitSound);
  ContactSubmitAudio.volume = 0.3;

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" method="post">
        <div className={styles.formGroup}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          />
        </div>
        <input className="hover btn" type="submit" value="Submit" onClick={() => ContactSubmitAudio.play()}/>
      </form>
    </section>
  );
}

export default Contact;
