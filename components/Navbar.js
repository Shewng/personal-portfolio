import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import { BsList, BsX } from "react-icons/bs";
import { projectsList } from "../data";
import Synopsis from "./Synopsis";
//import pdf from "../public/resume.pdf";

function Navbar() {
  const [active, setActive] = useState(false);

  const router = useRouter();

  const list = projectsList.map((project) => {
    return project.route;
  });

  const toggleNavbar = () => setActive((prev) => !prev); //toggle state for hamburger menu
  const closeNavbar = () => setActive((prev) => (prev = false)); //clicking links in the nav (e.g. home)

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
        {active ? (
          <BsX
            size={30}
            className={styles["nav-dropdown"]}
            onClick={() => toggleNavbar()}
          />
        ) : (
          <BsList
            size={30}
            className={styles["nav-dropdown"]}
            onClick={() => toggleNavbar()}
          />
        )}
      </div>

      <div className={`${styles["navbar-links"]} ${active ? styles.open : ""}`}>
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
              <Link href={"/projects/" + project.id} key={project.id}>
                <a
                  className={
                    router.asPath === "/projects/" + project.id
                      ? styles.active
                      : ""
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
        <hr className={styles["synopsis-line"]} />
      </div>
    </nav>
  );
}

export default Navbar;
