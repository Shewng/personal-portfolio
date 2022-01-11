import React from "react";
import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import { BsList } from "react-icons/bs";
import { projectsList } from "../data";
//import pdf from "../public/resume.pdf";

function Navbar() {
  const [toggler, setToggler] = useState(false);
  const router = useRouter();
  const list = projectsList.map((project) => {
    return project.route;
  });
  console.log(list);

  const toggleNavbar = () => setToggler((prev) => !prev); //toggle state for hamburger menu
  const closeNavbar = () => setToggler((prev) => (prev = false));

  useEffect(() => {
    if (router.asPath === "/" || "/about" || "/contact" ? styles.off : "") {
    }
  }, [router.asPath]);

  return (
    <nav className={styles.navbar}>
      <div className={styles["top-nav"]}>
        <div className={styles["logo"]}>
          <Link href="/">
            <a>
              <span>Shwong</span>
            </a>
          </Link>
        </div>
        <div className={styles["nav-dropdown"]} onClick={() => toggleNavbar()}>
          <BsList size={30} />
        </div>
      </div>

      <div
        className={`${styles["navbar-links"]} ${toggler ? styles.open : ""}`}
      >
        {/*<hr className={styles.open} />*/}
        <Link href="/">
          <a
            className={router.asPath === "/" ? styles.active : ""}
            onClick={() => closeNavbar()}
          >
            home
          </a>
        </Link>
        <Link href="/about">
          <a
            className={router.asPath === "/about" ? styles.active : ""}
            onClick={() => closeNavbar()}
          >
            about
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={
              router.asPath !== "/" &&
              router.asPath !== "/about" &&
              router.asPath !== "/contact"
                ? styles.active
                : ""
            }
            onClick={() => closeNavbar()}
          >
            projects
          </a>
        </Link>

        <div
          className={`${styles["inner-nav-projects"]} ${
            router.asPath !== "/" &&
            router.asPath !== "/about" &&
            router.asPath !== "/contact"
              ? styles.on
              : ""
          }`}
        >
          <hr className={styles.line2} />
          <hr className={styles.line1} />
          <ul>
            {projectsList.map((project) => (
              <Link href={project.route}>
                <a
                  className={
                    router.asPath === project.route ? styles.active : ""
                  }
                  onClick={() => closeNavbar()}
                >
                  <li className="inner-project">{project.name}</li>
                </a>
              </Link>
            ))}
          </ul>
          <hr className={styles.line1} />
        </div>

        <Link href="/contact">
          <a
            className={router.asPath === "/contact" ? styles.active : ""}
            onClick={() => closeNavbar()}
          >
            contact
          </a>
        </Link>
        <Link href="/resume">
          <a href="" target="_blank" rel="noopener noreferrer">
            resume
          </a>
        </Link>
      </div>
      <hr className={styles["synopsis-line"]} />
    </nav>
  );
}

export default Navbar;
