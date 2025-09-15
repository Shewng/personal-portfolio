import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/pages/Projects.module.scss";
import { projectsList } from "../../data";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Shwong</title>
        <meta name="description" content="Project's for The Shwong" />
        <meta name="keywords" content="shwong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fade duration={500} triggerOnce>
        <div className={styles["projects-container"]}>
          <h3>projects</h3>
          {projectsList.map((project) => (
            <Fade duration={350} triggerOnce key={project.id}>
              <div className={styles["project-display"]}>
                <ProjectCard {...project} />
              </div>
            </Fade>
          ))}
        </div>
      </Fade>
    </>
  );
};

export default Projects;
