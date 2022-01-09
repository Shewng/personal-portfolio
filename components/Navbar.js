import React from "react";
import { useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import { BsList } from "react-icons/bs";
//import pdf from "../public/resume.pdf";

function Navbar() {
  const [toggler, setToggler] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => setToggler((prev) => !prev); //toggle state for hamburger menu

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

      <div className={styles["links-container"]}>
        <div
          className={`${styles["navbar-links"]} ${toggler ? styles.open : ""}`}
        >
          {/*<hr className={styles.open} />*/}
          <Link href="/">
            <a
              className={router.asPath === "/" ? styles.active : ""}
              onClick={() => toggleNavbar()}
            >
              home
            </a>
          </Link>
          <Link href="/about">
            <a
              className={router.asPath === "/about" ? styles.active : ""}
              onClick={() => toggleNavbar()}
            >
              about
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={router.asPath === "/projects" ? styles.active : ""}
              onClick={() => toggleNavbar()}
            >
              projects
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={router.asPath === "/contact" ? styles.active : ""}
              onClick={() => toggleNavbar()}
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
      </div>
    </nav>
  );
}

export default Navbar;
