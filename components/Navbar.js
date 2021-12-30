import React from "react";
import Link from "next/link";

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
    </nav>
  );
}

export default Navbar;
