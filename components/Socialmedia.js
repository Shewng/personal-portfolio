import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from "../styles/components/Socialmedia.module.scss";

function Socialmedia() {
  return (
    <div className={styles["social-media"]}>
      <a
        href="mailto:samuelw098@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineMail size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/shewng"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size={20} />
      </a>
      <a
        href="https://github.com/Shewng"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size={20} />
      </a>
    </div>
  );
}

export default Socialmedia;
