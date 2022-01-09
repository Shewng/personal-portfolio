import styles from "../styles/pages/Contact.module.scss";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <h3>contact</h3>
      <p>
        Fancy a quick chat or message? Want to get to know me more? Have a job
        opportunity or potential idea? Get in touch with my channels of contact
        below.
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
  );
};

export default Contact;
