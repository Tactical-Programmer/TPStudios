import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import youtubeLight from "../../assets/youtube-light.svg";
import youtubeDark from "../../assets/youtube-dark.svg";
import tiktokLight from "../../assets/tiktok-light.svg";
import tiktokDark from "../../assets/tiktok-dark.svg";
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
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={() => {
              playAudio(ThemeChangeAudio);
              toggleTheme();
            }}
          />
          <span className={styles.slider}>
            <span className={styles.iconContainer}>
              <img src={theme === "light" ? sun : moon} alt="Color mode icon" className={styles.icon} />
            </span>
          </span>
        </label>
      </div>
      <div className={styles.info}>
        <h1>
          Anderson
          <br />
          Queiroz
        </h1>
        <h2>Unity Game Developer</h2>
        <p className={styles.description}>
          Making an Awesome Platform Fighting Game with No Ring Outs, using Rollback Netcode!
        </p>
        <span>
          <a href="https://youtube.com/tactical-programmer" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={theme === "light" ?  youtubeDark : youtubeLight} alt="YouTube Icon" />
          </a>
          <a href="https://www.tiktok.com/@tactical_programmer" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={theme === "light" ? tiktokDark : tiktokLight} alt="Tik Tok Icon" />
          </a>
          <a href="https://x.com/TacProgram" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={theme === "light" ? twitterDark : twitterLight} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/Tactical-Programmer" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={theme === "light" ? githubDark : githubLight} alt="GitHub Icon" />
          </a>
          <a href="https://linkedin.com/in/tactical-programmer" target="_blank" onClick={() => playAudio(IconSelectAudio)}>
            <img src={theme === "light" ? linkedinDark : linkedinLight} alt="LinkedIn Icon" />
          </a>
        </span>
        <a href={cv} download>
          <button className="hover" onClick={() => playAudio(ResumeDownloadAudio)}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
