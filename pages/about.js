import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/About.module.scss";
import myself from "../public/me.jpg";
import { GoGear } from "react-icons/go";
import { CgIfDesign } from "react-icons/cg";
import { HiCode } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

const About = () => {
  //list of skills
  const devList = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Next.js",
    "Java",
  ];
  const toolsList = [
    "GitHub",
    "MongoDB",
    "Heroku",
    "Vercel",
    "Postman",
    "VSCode",
  ];
  const designList = [
    "Figma",
    "Responsive Web Design",
    "Prototyping",
    "Wireframing",
  ];

  //mapping out the lists
  const devComponents = devList.map((skill) => (
    <li key={skill} className={styles.skill}>
      {skill}
    </li>
  ));
  const toolComponents = toolsList.map((skill) => (
    <li key={skill} className={styles.skill}>
      {skill}
    </li>
  ));
  const designComponents = designList.map((skill) => (
    <li key={skill} className={styles.skill}>
      {skill}
    </li>
  ));

  return (
    <>
      <Head>
        <title>About | Shwong</title>
        <meta name="description" content="About The Shwong" />
        <meta name="keywords" content="shwong" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fade duration={350} triggerOnce>
        <div className={styles["about-container"]}>
          <h3>about me</h3>
          <div className={styles["about-row-container"]}>
            <div className={styles["about-me-container"]}>
              <p>
                Hello, my name is{" "}
                <span className={styles.span1}>Samuel (Sam for short)</span> and
                I&#39;m a graduated student from the University of Calgary with
                a BSc degree in Computer Science. My interests currently lie in
                web design and Full Stack development. I aspire towards a career
                which allows me to unlock my full creative potential, sparking
                joy to the end users of my work and helping people through their
                problems.
                <br />
                <br />
                I&#39;ve been developing myself as a person inside and outside
                of my career, using a quote as motivation:{" "}
                <span className={styles.span2}>
                  The more you learn, the easier it is to learn more.
                </span>{" "}
                Introducing new technologies into my work has not only improved
                my skills as a developer, but also driven my passions in this
                field even further. With every new project, the development
                process becomes more efficient, things make more sense and my
                productivity increases. Most importantly, I&#39;m enjoying the
                process and having fun, creating a snowball-effect that keeps
                rolling and rolling!
                <br />
                <br />
                When I&#39;m in the mood for some self improvement outside of
                coding, I hop between my various interests. Exploring fashion,
                looking up graphic design/art inspiration, researching
                investments and crypto, or working on my (hopefully soon)
                podcast are just a couple things I spend my time on. If I&#39;m
                burned out, I&#39;ll be at the gym for a mental break or gaming
                on my PC with friends.
              </p>
            </div>

            <div className={styles["image-container"]}>
              <Image
                src={myself}
                alt="An image of myself"
                width={385}
                height={500}
                layout="responsive"
                objectFit="cover"
                quality={100}
              />
            </div>
          </div>

          <div className={styles["skillset-container"]}>
            <h3>skillset</h3>

            <div className={styles["skills-container"]}>
              <div className={styles["skills-column"]}>
                <div className={styles["skill-header"]}>
                  <HiCode className={styles.icon} />
                  <h4>development</h4>
                </div>
                <ul>{devComponents}</ul> {/* list skills */}
              </div>

              <div className={styles["skills-column"]}>
                <div className={styles["skill-header"]}>
                  <GoGear className={styles.icon} />
                  <h4>tools</h4>
                </div>
                <ul>{toolComponents}</ul> {/* list skills */}
              </div>

              <div className={styles["skills-column"]}>
                <div className={styles["skill-header"]}>
                  <CgIfDesign className={styles.icon} />
                  <h4>design</h4>
                </div>
                <ul>{designComponents}</ul> {/* list skills */}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default About;
