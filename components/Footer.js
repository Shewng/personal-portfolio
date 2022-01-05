import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styles from "../styles/components/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["social-media"]}>
        <a href="mailto:samuelw098@gmail.com">
          <AiOutlineMail size={20} />
        </a>
        <a href="https://www.linkedin.com/in/shewng">
          <AiFillLinkedin size={20} />
        </a>
        <a href="https://github.com/Shewng">
          <AiFillGithub size={20} />
        </a>
      </div>
      <div className={styles.copyright}>© 2021 Samuel Wong</div>
    </footer>
  );
}

export default Footer;
