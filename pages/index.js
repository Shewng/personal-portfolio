import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import gif from "../public/nightcity.gif";
import { Fade } from "react-reveal";

export default function Home() {
  return (
    <Fade bottom duration={500} distance={"1em"}>
      <Head>
        <title>Shwong</title>
        <meta name="description" content="Homepage for The Shwong" />
        <meta name="keywords" content="shwong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles["image-container"]}>
        <Image
          src={gif}
          alt="Gif of the homepage"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </Fade>
  );
}
