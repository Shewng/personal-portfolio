import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <div className="copyright">© 2021 Samuel Wong</div>
        <div className="social-media">
          <a>
            <AiOutlineMail />
          </a>
          <a>
            <AiFillLinkedin />
          </a>
          <a>
            <AiFillGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
