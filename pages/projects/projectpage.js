import React from "react";
import { AiOutlineCode, AiOutlineDeploymentUnit } from "react-icons/ai";
import { useRouter } from "next/router";

function projectpage() {
  return (
    <div className="project-page-container">
      <div className="description-container">
        <h1></h1>
        <div className="project-info">
          <span>personal</span>
          <span>2021</span>
        </div>
        <div>
          <p>description</p>
        </div>
        <div className="technology-container">
          <div className="technologies-header">
            <AiOutlineCode />
            <h4>technology</h4>
          </div>
          <div className="technologies">{}</div>
        </div>
        <div className="deployment-container">
          <div className="deployment-header">
            <AiOutlineDeploymentUnit />
            <h4>deployment</h4>
          </div>
          <div className="links">
            {}
            {}
          </div>
        </div>
      </div>
      <div className="picture-container">
        <div className="picture"></div>
        <div className="picture"></div>
        <div className="picture"></div>
      </div>
    </div>
  );
}

export default projectpage;

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {},
  };
}
