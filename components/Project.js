import React from "react";

function Project(props) {
  const listTech = props.technologies.map((tech, i) => (
    <li key={tech.id}>{tech}</li>
  ));

  return (
    <div>
      <h1>{props.projectName}</h1>
      <p>{props.description}</p>
      <ul>{listTech}</ul>
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
