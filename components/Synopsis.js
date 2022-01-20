import React from "react";
import styles from "../styles/components/Synopsis.module.scss";
import { Fade } from "react-reveal";
function Synopsis() {
  return (
    <Fade bottom duration={750} distance={"1em"}>
      <div className={styles["synopsis-container"]}>
        <span>Samuel Wong :</span>
        <p>
          Web developer and UX enthusiast. Passionate about creating complete
          and coherent user experiences using enticing and innovative design
          principles.
        </p>
      </div>
    </Fade>
  );
}

export default Synopsis;
