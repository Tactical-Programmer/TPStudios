import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import githubIcon from "../../assets/github-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import cv from "../../assets/cv.pdf";

function Hero() {
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
          <a href="x.com/TacProgram" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="github.com/Tactical-Programmer" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
          <a href="linkedin.com/in/tactical-programmer" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p>An indie game developer with a passion for Videogames.</p>
        <a href={cv} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
