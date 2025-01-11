import styles from "./ProjectsStyles.module.css";
import midnightDrive from "../../assets/Midnight Drive.png";
import demonShurikenMaster from "../../assets/Demon Shuriken Master.png";
import ProjectCard from "../../Common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={midnightDrive}
          link={"#"}
          h3="Midnight Drive"
          p="Retrowave Music Racing Game"
        />
        <ProjectCard
          src={demonShurikenMaster}
          link={"#"}
          h3="Demon Shuriken Master"
          p="Top Down ninja Shooting Game"
        />
      </div>
    </section>
  );
}

export default Projects;
