import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <div id="footer" className={styles.container}>
      <p>
        &copy; 2025 Tactical Programmer Studios. <br />
        All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
