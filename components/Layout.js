import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Synopsis from "./Synopsis";
import styles from "../styles/components/Layout.module.scss";
import { Fade } from "react-reveal";

const Layout = ({ children }) => {
  const router = useRouter(); //get the current route/path from /pages

  return (
    <>
      <Head>
        <title>{children.type.name} | The Shwong</title>
        <meta name="description" content="Homepage for The Shwong" />
        <meta name="keywords" content="shwong" />
        <link rel="icon" href="/../favicon.ico" />
      </Head>

      <div className={styles["master-container"]}>
        <div className={styles["row-container"]}>
          <div className={styles["navbar-container"]}>
            <Navbar />
            {/**only display synopsis if we are on home*/}
            {router.asPath === "/" ? (
              <>
                <Fade duration={100}>
                  <Synopsis />
                </Fade>
              </>
            ) : (
              ""
            )}
          </div>

          <div className={styles["content-container"]}>{children}</div>
        </div>

        <div className={styles["footer-container"]}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
