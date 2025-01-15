import { useState, useEffect } from "react";
import styles from "./ScrollToTopStyles.module.css";
import arrowuplight from "./arrow-up-light.png";
import arrowupdark from "./arrow-up-dark.png";
import { useTheme } from "../../Common/ThemeContext";

function ScrollToTopButton() {
  const { theme } = useTheme();
  const arrowup = theme === "light" ? arrowuplight : arrowupdark;

  const [isVisible, setIsVisible] = useState(false);
  const [scrollThreshold, setScrollThreshold] = useState(200); // Default threshold

  // Function to dynamically set the threshold based on media queries
  const updateScrollThreshold = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setScrollThreshold(100); // Mobile devices
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
      setScrollThreshold(150); // Tablets
    } else {
      setScrollThreshold(200); // Desktops
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    setIsVisible(window.scrollY > scrollThreshold); // Show button if scrolled more than the threshold
  };

  useEffect(() => {
    // Update threshold on component mount and on window resize
    updateScrollThreshold();
    window.addEventListener("resize", updateScrollThreshold);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateScrollThreshold);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`${styles.container} ${isVisible ? styles.visible : ""}`}
      >
        <img src={arrowup} alt="arrow up" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;