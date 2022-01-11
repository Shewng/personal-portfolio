import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/pages/Projects.module.scss";
import { projectsList } from "../../data";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <Fade bottom duration={750} distance={"1em"}>
      <div className={styles["projects-container"]}>
        <h3>projects</h3>
        {projectsList.map((project, i) => (
          <Fade duration={250}>
            <div className={styles["project-display"]}>
              <ProjectCard {...project} />
            </div>
          </Fade>
        ))}
      </div>
    </Fade>
  );
};

export default Projects;
