import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import placeholder from "../public/nightcity.gif";

function Project(props) {
  const { name, description, technologies, github, external } = props;
  const listTechs = technologies.map((tech) => <li key={tech}>{tech}</li>);

  return (
    <div className={styles["card-container"]}>
      <div className={styles["image-container"]}>
        <Link href={"/projects/projectpage"}>
          <a>
            <Image
              src={placeholder}
              alt="Project Picture"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className={styles["info-container"]}>
        <Link href="/projects/projectpage">
          <a>
            <h1 className={styles["project-title"]}>{name}</h1>
          </a>
        </Link>
        <p className={styles["project-description"]}>{description}</p>
        <ul className={styles["project-tech"]}>{listTechs}</ul>
        <ul className={styles["project-links"]}>
          <li className="github">
            {github !== "" ? (
              <a href={github} target="_blank" rel="noopener noreferrer">
                github
              </a>
            ) : null}
          </li>
          <li className="external">
            {external !== "" ? (
              <a href={external} target="_blank" rel="noopener noreferrer">
                live site
              </a>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
