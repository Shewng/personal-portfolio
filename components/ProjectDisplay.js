import React from "react";
import Image from "next/image";
import { AiOutlineCode, AiOutlineDeploymentUnit } from "react-icons/ai";
import styles from "../styles/components/ProjectDisplay.module.scss";

function ProjectDisplay(props) {
  const {
    name,
    longDescription,
    type,
    year,
    technologies,
    images,
    github,
    external,
  } = props;
  console.log("tech2: " + technologies);

  const listTechs = technologies.map((tech) => <li key={tech}>{tech}</li>);

  return (
    <div className={styles["project-page-container"]}>
      <div className={styles["description-container"]}>
        <h3>{name}</h3>
        <div className={styles["project-tags"]}>
          <span>{type}</span>
          <span>{year}</span>
        </div>
        <div className={styles["description"]}>
          <p>{longDescription}</p>
        </div>
        <div className={styles["details-container"]}>
          <div className={styles["header"]}>
            <AiOutlineCode className={styles.icon} />
            <h4>technology used</h4>
          </div>
          <ul className={styles["technologies"]}>{listTechs}</ul>
        </div>
        <div className={styles["details-container"]}>
          <div className={styles["header"]}>
            <AiOutlineDeploymentUnit className={styles.icon} />
            <h4>deployment</h4>
          </div>
          <ul className={styles["links"]}>
            <li className="github">
              {github !== "" ? (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  github
                </a>
              ) : null}
            </li>
            <li className={styles["external"]}>
              {external !== "" ? (
                <a href={external} target="_blank" rel="noopener noreferrer">
                  live site
                </a>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["picture-container"]}>
        <div className={styles["image-container"]}>
          <Image
            src={images[0]}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src={images[1]}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles["image-container"]}>
          <Image
            src={images[2]}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
