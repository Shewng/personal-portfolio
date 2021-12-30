import Link from "next/link";
import Project from "../../components/Project";

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

  return (
    <div>
      <h1>projects</h1>
      <Link href="/projects/nailstyle">
        <a>
          <Project
            projectName={nailstyleObj.projectName}
            description={nailstyleObj.description}
            technologies={nailstyleObj.technologies}
          />
        </a>
      </Link>
      <Link href="/projects/menji">
        <a>
          <Project
            projectName={menjiObj.projectName}
            description={menjiObj.description}
            technologies={menjiObj.technologies}
          />
        </a>
      </Link>
      {/**
      <Link href="/projects/portfolio">
        <a>
          <Project projectName="Personal Portfolio" />
        </a>
      </Link>
      <Link href="/projects/makeapp">
        <a>
          <Project projectName="MakeApp" />
        </a>
      </Link>
      <Link href="/projects/pvzremake">
        <a>
          <Project projectName="Plants vs Zombies Remake" />
        </a>
      </Link>
      <Link href="/projects/minesweeper">
        <a>
          <Project projectName="Minesweeper" />
        </a>
      </Link>
      <Link href="/projects/smartspace">
        <a>
          <Project projectName="Smartspace" />
        </a>
      </Link>
      <Link href="/projects/chaisweetbakery">
        <a>
          <Project projectName="ChaiSweetBakery" />
        </a>
      </Link>
       */}
    </div>
  );
};

export default Projects;
