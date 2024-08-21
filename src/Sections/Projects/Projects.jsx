import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../Common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link={"https://github.com/Ade-mir/company-landing-page-2"}
          h3="Viberr"
          p="Streaming App"
        />
        <ProjectCard
          src={viberr}
          link={"https://github.com/Ade-mir/company-landing-page-2"}
          h3="Viberr"
          p="Streaming App"
        />
      </div>
    </section>
  );
}

export default Projects;
