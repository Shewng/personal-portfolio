import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/pages/Projects.module.scss";
import { projectsList } from "../../data";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <Fade bottom duration={500} distance={"1em"}>
      <div className={styles["projects-container"]}>
        <h3>projects</h3>
        {projectsList.map((project) => (
          <Fade duration={250} key={project.id}>
            <div className={styles["project-display"]}>
              <Link href={"/projects/" + project.id} key={project.id}>
                <a>
                  <ProjectCard {...project} />
                </a>
              </Link>
            </div>
          </Fade>
        ))}
      </div>
    </Fade>
  );
};

export default Projects;
