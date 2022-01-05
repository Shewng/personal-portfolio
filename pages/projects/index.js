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
    description: "",
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
      <div className={styles["project-display"]}>
        <Link href="/projects/nailstyle">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="NailStyle Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...nailstyleObj} />
          </a>
        </Link>
      </div>
      <div className={styles["project-display"]}>
        <Link href="/projects/menji">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="Menji Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...menjiObj} />
          </a>
        </Link>
      </div>

      <div className={styles["project-display"]}>
        <Link href="/projects/portfolio">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="Personal Portfolio Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...portfolioObj} />
          </a>
        </Link>
      </div>

      <div className={styles["project-display"]}>
        <Link href="/projects/makeapp">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="MakeApp Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...makeappObj} />
          </a>
        </Link>
      </div>
      <div className={styles["project-display"]}>
        <Link href="/projects/pvz">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="PvZ Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...pvzObj} />
          </a>
        </Link>
      </div>
      <div className={styles["project-display"]}>
        <Link href="/projects/minesweeper">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="Minesweeper Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...minesweeperObj} />
          </a>
        </Link>
      </div>
      <div className={styles["project-display"]}>
        <Link href="/projects/smartspace">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="SmartSpace Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...smartspaceObj} />
          </a>
        </Link>
      </div>
      <div className={styles["project-display"]}>
        <Link href="/projects/chaisweetbakery">
          <a>
            <div className={styles["image-container"]}>
              <Image
                src={placeholder}
                alt="ChaiSweetBakery Picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Project {...chaisweetObj} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
