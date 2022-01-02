import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";
import gif from "../public/nightcity.gif";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shwong</title>
        <meta name="description" content="Homepage for The Shwong" />
        <meta name="keywords" content="shwong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles["home-container"]}>
        <Image src={gif} alt="Gif of the homepage" width={800} height={1200} />
      </div>
    </>
  );
}
