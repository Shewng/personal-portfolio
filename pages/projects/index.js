import Link from "next/link";
import Image from "next/image";
import Project from "../../components/Project";
import styles from "../../styles/pages/Projects.module.scss";
import placeholder from "../../public/nightcity.gif";

const Projects = () => {
  const projectsList = [
    {
      projectName: "NailStyle",
      projectRoute: "/projects/nailstyle",
      projectImage: "",
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
      links: ["https://github.com/Shewng/NailStyle", "https://hxnails.ca"],
    },
    {
      projectName: "MENJI.",
      projectRoute: "/projects/menji",
      projectImage: "",
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
      links: ["https://github.com/Shewng/Menji", ""],
    },
    {
      projectName: "Personal Portfolio",
      projectRoute: "/projects/portfolio",
      projectImage: "",
      description:
        "This website was originally envisioned using the JAMstack development architecture, but I decided to keep things simpler and reserve it for another project. I have used plain React, SASS and Javascript for my first website iteration.",
      technologies: [
        "HTML",
        "SASS",
        "JavaScript",
        "React",
        "Next.js",
        "Vercel",
      ],
      links: ["https://github.com/Shewng/personal-portfolio", ""],
    },
    {
      projectName: "MakeApp",
      projectRoute: "/projects/makeapp",
      projectImage: "",
      description:
        "Final project for my iOS development course, mimicking a social media application based on creating makeupp routines. Built on SwiftUI using Firebase’s Cloud Firestore to manage backend infrastructure.",
      technologies: ["Swift", "Firebase"],
      links: ["https://github.com/Shewng/makeup", ""],
    },
    {
      projectName: "Plants Vs Zombies Clone",
      projectRoute: "/projects/pvz",
      projectImage: "",
      description:
        "Final project for my Introductory Computer Science course, mimicking the famous Tower Defense game Plants Vs Zombies. I built this project with Object-Orientated principles in mind, utilizing Java’s class structure to create the plants and zombies. With JavaFX’s Scene Builder, I was able to program a game engine that tracked certain states, swaping between different displays when necessary.",
      technologies: ["Java", "JavaFX"],
      links: ["https://github.com/Shewng/pvz-ms-remake", ""],
    },
    {
      projectName: "Laser Unlock",
      projectRoute: "/projects/laserunlock",
      projectImage: "",
      description:
        "Phone application that re-envisions our phone-unlock methods from the traditional slide-to-unlock and pin/password. Using Android Studio’s sensor framework, I created minigame that mimics a cat trying to catch a laser. In order to unlock your phone, the cat must catch the laser 3 times in the correct positions.",
      technologies: ["Java", "Android Studio"],
      links: ["https://github.com/Shewng/Cat-and-Laser", ""],
    },
    {
      projectName: "Minesweeper",
      projectRoute: "/projects/minesweeper",
      projectImage: "",
      description:
        "Final project for my Web-Based systems course, mimicking the popular browser game Minesweeper. Built on Javascript and JQuery to learn about front-end development and responsive design. ",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
      links: ["", ""],
    },
    {
      projectName: "SmartSpace",
      projectRoute: "/projects/smartspace",
      projectImage: "",
      description: "",
      technologies: ["Adobe XD"],
      links: ["", ""],
    },
    {
      projectName: "ChaiSweetBakery",
      projectRoute: "/projects/chaisweetbakery",
      projectImage: "",
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
      links: ["", ""],
    },
  ];

  return (
    <div className={styles["projects-container"]}>
      <h3>projects</h3>
      {projectsList.map((project) => (
        <div className={styles["project-display"]}>
          <div className={styles["image-container"]}>
            <Link href={project.projectRoute}>
              <a className={styles.link}>
                <Image
                  src={placeholder}
                  alt="Project Picture"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          </div>
          <Project {...project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
