import React from "react";
import Image from "next/image";
import { AiOutlineCode, AiOutlineDeploymentUnit } from "react-icons/ai";
import styles from "../styles/components/ProjectDisplay.module.scss";
import { Fade } from "react-reveal";

function ProjectDisplay(props) {
  const {
    name,
    longDescription,
    type,
    year,
    technologies,
    desktopImgs,
    mobileImgs,
    github,
    external,
  } = props;

  const listDesktopImgs = desktopImgs?.map((img, i) =>
    img !== "" ? (
      <div className={`${styles["desktop-pic"]} ${styles.image}`} key={i}>
        <Image
          src={img}
          alt="Project Image"
          width={100}
          height={75}
          layout="responsive"
          sizes="100vw"
        />
      </div>
    ) : null
  );

  const listMobileImgs = mobileImgs?.map((img, i) =>
    img !== "" ? (
      <div className={`${styles["mobile-pic"]} ${styles.image}`} key={i}>
        <Image
          src={img}
          alt="Project Image"
          width={240}
          height={500}
          layout="intrinsic"
        />
      </div>
    ) : null
  );

  // const listDesktopImgs = () => {
  //   const desktopList =
  //     desktopImgs.length > 0 // check if no pics first
  //       ? desktopImgs.map((img, i) => {
  //           <div className={styles["image-container"]} key={i}>
  //             <Image
  //               src={img}
  //               alt="Project Image"
  //               layout="fill"
  //               sizes="50vw"
  //               objectFit="contain"
  //             />
  //           </div>;
  //         })
  //       : null;
  //   return desktopList;
  // };

  // const listMobileImgs = () => {
  //   const mobileList =
  //     mobileImgs.length > 0 // check if no pics first
  //       ? mobileImgs.map((img, i) => {
  //           <div className={styles["image-container"]} key={i}>
  //             <Image
  //               src={img}
  //               alt="Project Image"
  //               layout="fill"
  //               sizes="50vw"
  //               objectFit="contain"
  //             />
  //           </div>;
  //         })
  //       : null;
  //   return mobileList;
  // };

  const listTechs = technologies.map((tech) => <li key={tech}>{tech}</li>);

  return (
    <Fade bottom duration={500} distance={"1em"}>
      <div className={styles["project-page-container"]}>
        <div className={styles["description-container"]}>
          <h3>{name}</h3>
          <div className={styles["project-tags"]}>
            <span>{type}</span>
            <span>{year}</span>
          </div>
          <div className={styles["description"]}>
            <p>{longDescription}</p>
          </div>
          <div className={styles["details-container"]}>
            <div className={styles["header"]}>
              <AiOutlineCode className={styles.icon} />
              <h4>technology used</h4>
            </div>
            <ul className={styles["technologies"]}>{listTechs}</ul>
          </div>
          <div className={styles["details-container"]}>
            <div className={styles["header"]}>
              <AiOutlineDeploymentUnit className={styles.icon} />
              <h4>deployment</h4>
            </div>
            <ul className={styles["links"]}>
              <li className="github">
                {github !== "" ? (
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    github
                  </a>
                ) : null}
              </li>
              <li className={styles["external"]}>
                {external !== "" ? (
                  <a href={external} target="_blank" rel="noopener noreferrer">
                    live site
                  </a>
                ) : null}
              </li>
            </ul>
          </div>
          <div className={styles["picture-container"]}>
            <div className={styles["desktop-pic-container"]}>
              {listDesktopImgs}
            </div>
            <div className={styles["mobile-pic-container"]}>
              {listMobileImgs}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default ProjectDisplay;
