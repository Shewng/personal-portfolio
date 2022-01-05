import React from "react";
import styles from "../styles/components/Project.module.scss";

function Project({ projectName, description, technologies }) {
  console.log("tech: " + technologies);
  console.log("desc: " + description);

  console.log("name: " + projectName);
  const listTech = technologies.map((tech, i) => <li key={tech}>{tech}</li>);

  return (
    <div className={styles["project-container"]}>
      <h1 className={styles["project-title"]}>{projectName}</h1>
      <p className={styles["project-description"]}>{description}</p>
      <ul className={styles["project-tech"]}>{listTech}</ul>
      {/**
      <div>
        {props.technologies.map((tech) => {
          <p>tech.name</p>;
          console.log("tech: " + tech.name);
        })}
      </div>
       */}
    </div>
  );
}

export default Project;
