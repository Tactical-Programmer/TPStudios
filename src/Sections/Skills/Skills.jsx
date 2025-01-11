import styles from "./SkillsStyles.module.css";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../Common/SkillList";
import { useTheme } from "../../Common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <h2>Game Development</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Game Design" />
        <SkillList src={checkMarkIcon} skill="Unity3D" />
        <SkillList src={checkMarkIcon} skill=" 3D Animation" />
        <SkillList src={checkMarkIcon} skill=" 3D Modelling" />
      </div>
      <h2>Programming</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <h2>Web Development</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <h2>Low Code / No Code</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PowerApps" />
        <SkillList src={checkMarkIcon} skill="Power Automate" />
        <SkillList src={checkMarkIcon} skill="Dataverse" />
      </div>
      <h2>Video / Photo Editing</h2>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Sony Vegas" />
        <SkillList src={checkMarkIcon} skill="DaVinci Resolve" />
        <SkillList src={checkMarkIcon} skill="Photoshop" />
      </div>
    </section>
  );
}

export default Skills;
