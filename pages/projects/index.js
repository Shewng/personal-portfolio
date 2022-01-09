import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/pages/Projects.module.scss";
import { projectsList } from "../../data";

const Projects = () => {
  return (
    <div className={styles["projects-container"]}>
      <h3>projects</h3>
      {projectsList.map((project, i) => (
        <div className={styles["project-display"]}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
