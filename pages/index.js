import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import gif from "../public/nightcity.gif";
//import vid from "../public/homevid.mp4";
import { Fade } from "react-awesome-reveal";
import Synopsis from "../components/Synopsis";

export default function Home() {
  return (
    <Fade duration={350} triggerOnce>
      <Head>
        <title>Samuel Wong</title>
        <meta
          name="description"
          content="A personal showcase of work by Samuel Wong"
        />
        <meta name="keywords" content="personal, portfolio, Shwong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="showDesktop">
        <Synopsis />
      </div>
      <div className={styles["image-container"]}>
        {/* <Image
          src={gif}
          alt="Gif of the homepage" 
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        <video preload="" muted autoPlay loop className={styles.video}>
          <source src="/landingshort.mp4" />
        </video>
      </div>
    </Fade>
  );
}
