import React from "react";
import styles from "../styles/components/ProjectCard.module.scss";
import Image from "next/image";
import Link from "next/link";

function ProjectCard(props) {
  const { id, name, previewImg, description, technologies, github, external } =
    props;
  const listTechs = technologies.map((tech) => <li key={tech}>{tech}</li>);

  return (
    <div className={styles["card-container"]}>
      <div className={styles["image-container"]}>
        <Link href={"/projects/" + id}>
          <a>
            <Image
              src={previewImg}
              alt="Project Preview Picture"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className={styles["info-container"]}>
        <Link href={"/projects/" + id}>
          <a>
            <h1 className={styles["project-title"]}>{name}</h1>
          </a>
        </Link>

        <p className={styles["project-description"]}>{description}</p>
        <ul className={styles["project-tech"]}>{listTechs}</ul>
        <ul className={styles["project-links"]}>
          {github !== "" ? (
            <li className="github">
              <a href={github} target="_blank" rel="noopener noreferrer">
                github
              </a>
            </li>
          ) : null}
          {external !== "" ? (
            <li className="external">
              <a href={external} target="_blank" rel="noopener noreferrer">
                live site
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
