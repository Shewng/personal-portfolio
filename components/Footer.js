import React from "react";
import styles from "../styles/components/Footer.module.scss";
import Socialmedia from "./Socialmedia";
import Router, { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <>
      {router.asPath === "/contact" ? (
        <footer className={styles.footer}>
          <span></span>
          <div className={styles.copyright}>© 2021 Samuel Wong</div>
        </footer>
      ) : (
        <footer className={styles.footer}>
          <Socialmedia />
          <div className={styles.copyright}>© 2021 Samuel Wong</div>
        </footer>
      )}
    </>
  );
}

export default Footer;
