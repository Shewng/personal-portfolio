import React from "react";
import Link from "next/link";
import styles from "../styles/components/Navbar.module.scss";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <h1>Shwong</h1>
          </a>
        </Link>
      </div>
      <div className={styles["navbar-links"]}>
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
        <Link href="/projects">
          <a>projects</a>
        </Link>
        <Link href="/contact">
          <a>contact</a>
        </Link>
        <Link href="/resume">
          <a>resume</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
