import React from "react";
import styles from "../styles/components/Synopsis.module.scss";

function Synopsis() {
  return (
    <div className={styles["synopsis-container"]}>
      <span>Samuel Wong :</span>
      <p>
        Web developer and UX enthusiast. Passionate about creating complete and
        coherent user experiences using enticing and innovative design
        principles.
      </p>
    </div>
  );
}

export default Synopsis;
