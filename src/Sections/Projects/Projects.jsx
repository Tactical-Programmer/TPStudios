import styles from "./ProjectsStyles.module.css";
import midnightDrive from "../../assets/Midnight Drive.png";
import demonShurikenMaster from "../../assets/Demon Shuriken Master.png";
import ProjectCard from "../../Common/ProjectCard";
import MiniWebsiteDemonShurikenMaster from "../../MiniWebsites/demon-shuriken-master/DemonShurikenMaster";
import MiniWebsiteMidnightDrive from "../../MiniWebsites/midnight-drive/MidnightDrive";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={midnightDrive}
          h3="Midnight Drive"
          p="Retrowave Music Racing Game"
          miniWebsiteComponent={<MiniWebsiteMidnightDrive />}
        />
        <ProjectCard
          src={demonShurikenMaster}
          h3="Demon Shuriken Master"
          p="Top Down Ninja Shooting Game"
          miniWebsiteComponent={<MiniWebsiteDemonShurikenMaster />}
        />
      </div>
    </section>
  );
}

export default Projects;
