import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";
import styles from "../../styles/pages/Projects.module.scss";
import { projectsList } from "../../data";
import { Fade } from "react-reveal";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Shwong</title>
        <meta name="description" content="Project's for The Shwong" />
        <meta name="keywords" content="shwong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fade bottom duration={500} distance={"1em"} delay={150}>
        <div className={styles["projects-container"]}>
          <h3>projects</h3>
          {projectsList.map((project) => (
            <Fade duration={250} key={project.id}>
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
