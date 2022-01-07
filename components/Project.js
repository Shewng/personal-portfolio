import React from "react";
import styles from "../styles/components/Project.module.scss";
import Image from "next/image";
import Link from "next/link";

function Project(props) {
  const { projectName, description, technologies, links } = props;
  const listTechs = technologies.map((tech) => <li key={tech}>{tech}</li>);

  return (
    <div className={styles["project-container"]}>
      <Link href="/projects/nailstyle">
        <a>
          <h1 className={styles["project-title"]}>{projectName}</h1>
        </a>
      </Link>
      <p className={styles["project-description"]}>{description}</p>
      <ul className={styles["project-tech"]}>{listTechs}</ul>
      <ul className={styles["project-links"]}>
        <li className="github">
          {links[0] !== "" ? (
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              github
            </a>
          ) : null}
        </li>
        <li className="external">
          {links[1] !== "" ? (
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              live site
            </a>
          ) : null}
        </li>
      </ul>
    </div>
  );
}

export default Project;
