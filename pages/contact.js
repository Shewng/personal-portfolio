import styles from "../styles/pages/Contact.module.scss";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <Fade bottom duration={500} distance={"1em"}>
      <div className={styles["contact-container"]}>
        <h3>contact</h3>
        <p className={styles.message}>
          Fancy a quick chat or message? Want to get to know me more? Have a job
          opportunity or potential idea? Get in touch with my channels of
          contact below.
        </p>
        <div className={styles["social-media"]}>
          <a
            href="mailto:samuelw098@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shewng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Shewng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
