import styles from "./ScrollToTopStyles.module.css";
import arrowuplight from "./arrow-up-light.png";
import arrowupdark from "./arrow-up-dark.png";
import { useTheme } from "../../Common/ThemeContext";

function ScrollToTopButton() {
  const { theme } = useTheme();
  const arrowup =
  theme === "light" ? arrowuplight : arrowupdark;

  const scrollToTop =()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div>
      <button onClick={scrollToTop} className={styles.container}>
        <img className="hover" src={arrowup} alt="arrow up"/>
      </button>
    </div>
  );
}

export default ScrollToTopButton;
