import Link from "next/link";
import Image from "next/image";
import Project from "../../components/Project";
import styles from "../../styles/pages/Projects.module.scss";
import placeholder from "../../public/nightcity.gif";

const Projects = () => {
  const nailstyleObj = {
    projectName: "NailStyle",
    description:
      "Nail Salon website application built on the MERN (MongoDB, Express, React, Node.js) stack to learn React and flesh out full stack skillset. Features a simple RESTful API implementation. The app has a terminal for admins to manage customers, employees and appointments, as well as an appointment page for customers.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express",
      "Axios",
      "MongoDB",
      "Heroku",
      "Netlify",
    ],
  };

  const menjiObj = {
    projectName: "MENJI.",
    description:
      "Final project for my Database Management course, mimicking an online eCommerce clothing store. Features a simple RESTful API implementation. Clients can log into their account, browse products, add/remove them from their cart, checkout with personal information and review their orders.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Axios",
      "MongoDB",
      "Mongoose",
    ],
  };

  const portfolioObj = {
    projectName: "Personal Portfolio",
    description:
      "This website was originally envisioned using the JAMstack development architecture, but I decided to keep things simpler and reserve it for another project. I have used plain React, SASS and Javascript for my first website iteration.",
    technologies: ["HTML", "SASS", "JavaScript", "React", "Next.js", "Vercel"],
  };

  const makeappObj = {
    projectName: "MakeApp",
    description:
      "Final project for my iOS development course, mimicking a social media application based on creating makeupp routines. Built on SwiftUI using Firebase’s Cloud Firestore to manage backend infrastructure.",
    technologies: ["Swift", "Firebase"],
  };

  const pvzObj = {
    projectName: "Plants Vs Zombies Clone",
    description:
      "Final project for my Introductory Computer Science course, mimicking the famous Tower Defense game Plants Vs Zombies. I built this project with Object-Orientated principles in mind, utilizing Java’s class structure to create the plants and zombies. With JavaFX’s Scene Builder, I was able to program a game engine that tracked certain states, swaping between different displays when necessary.",
    technologies: ["Java", "JavaFX"],
  };

  const minesweeperObj = {
    projectName: "Minesweeper",
    description:
      "Final project for my Web-Based systems course, mimicking the popular browser game Minesweeper. Built on Javascript and JQuery to learn about front-end development and responsive design. ",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  };

  const smartspaceObj = {
    projectName: "SmartSpace",
    description: "",
    technologies: ["Adobe XD"],
  };

  const chaisweetObj = {
    projectName: "ChaiSweetCookies",
    description:
      "Work-in-progress website built on React for my sister’s small local business. She needed her own site in order to sell, promote and showcase her business in a more professional manner. Informed by her suggestions and other user feedback, I designed and developed the site with the intention of a lighthearted, jovial (comforting, playful, spirited) aesthetic.",
    technologies: [
      "HTML",
      "SCSS",
      "JavaScript",
      "React",
      "Docker",
      "Next.js",
      "Vercel",
    ],
  };

  return (
    <div className={styles["projects-container"]}>
      <h3>projects</h3>
      <Link href="/projects/nailstyle">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="NailStyle Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...nailstyleObj} />
          </div>
        </a>
      </Link>
      <Link href="/projects/menji">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="Menji Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...menjiObj} />
          </div>
        </a>
      </Link>

      <Link href="/projects/portfolio">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="Personal Portfolio Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...portfolioObj} />
          </div>
        </a>
      </Link>

      <Link href="/projects/makeapp">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="MakeApp Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...makeappObj} />
          </div>
        </a>
      </Link>
      <Link href="/projects/pvz">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="PvZ Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...pvzObj} />
          </div>
        </a>
      </Link>
      <Link href="/projects/minesweeper">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="Minesweeper Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...minesweeperObj} />
          </div>
        </a>
      </Link>

      <Link href="/projects/smartspace">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="SmartSpace Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...smartspaceObj} />
          </div>
        </a>
      </Link>

      <Link href="/projects/chaisweetbakery">
        <a className={styles.link}>
          <div className={styles["project-display"]}>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="ChaiSweetBakery Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...chaisweetObj} />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Projects;
