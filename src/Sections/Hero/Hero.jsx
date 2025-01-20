import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import cv from "../../assets/cv.pdf";
import { useTheme } from "../../Common/ThemeContext";
import ThemeChangeSound from "../../Sounds/Theme-Change.mp3";
import ResumeDownloadSound from "../../Sounds/Resume-Download.mp3";
import IconSelectSound from "../../Sounds/Icon-Select.mp3";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const ThemeChangeAudio = new Audio(ThemeChangeSound);
  ThemeChangeAudio.volume = 0.5;
  const ResumeDownloadAudio = new Audio(ResumeDownloadSound);
  ResumeDownloadAudio.volume = 0.2;
  const IconSelectAudio = new Audio(IconSelectSound);

  const playAudio = (audio) => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Anderson Queiroz, aka, Tactical Programmer"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={() => {
            toggleTheme();
            playAudio(ThemeChangeAudio);
          }}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anderson
          <br />
          Queiroz
        </h1>
        <h2>Unity Game Developer</h2>
        <span>
          <a href="https://x.com/TacProgram" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/Tactical-Programmer" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="https://linkedin.com/in/tactical-programmer" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          An indie game developer with a passion for Videogames.
        </p>
        <a href={cv} download>
          <button className="hover" onClick={() => playAudio(ResumeDownloadAudio)}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
