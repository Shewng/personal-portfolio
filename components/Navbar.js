import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";
import { BsList } from "react-icons/bs";

function Navbar() {
  const [toggler, setToggler] = useState(false);

  const toggleNavbar = () => setToggler((prev) => !prev);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["top-nav"]}>
        <div className={styles["logo"]}>
          <Link href="/">
            <a>
              <span>Shwong</span>
            </a>
          </Link>
        </div>
        <div className={styles["nav-dropdown"]} onClick={() => toggleNavbar()}>
          <BsList size={35} />
        </div>
      </div>

      <div className={styles["links-container"]}>
        <div
          className={`${styles["navbar-links"]} ${
            toggler ? styles["open"] : ""
          }`}
        >
          <Link href="/">
            <a onClick={() => toggleNavbar()}>home</a>
          </Link>
          <Link href="/about">
            <a onClick={() => toggleNavbar()}>about</a>
          </Link>
          <Link href="/projects">
            <a onClick={() => toggleNavbar()}>projects</a>
          </Link>
          <Link href="/contact">
            <a onClick={() => toggleNavbar()}>contact</a>
          </Link>
          <Link href="/resume">
            <a>resume</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
