import Image from "next/image";
import styles from "../styles/pages/About.module.scss";
import myself from "../public/me.jpg";
import { GoGear } from "react-icons/go";
import { CgIfDesign } from "react-icons/cg";
import { HiCode } from "react-icons/hi";
import { Fade } from "react-reveal";

const About = () => {
  //list of skills
  const devList = [
    "HTML",
    "CSS",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "Next.js",
  ];
  const toolsList = [
    "Git",
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
    "User Testing",
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
    <Fade bottom duration={750} distance={"1em"}>
      <div className={styles["about-container"]}>
        <div className={styles["about-row-container"]}>
          <div className={styles["about-me-container"]}>
            <h3>about me</h3>
            <p>
              Hello, my name is <span>Samuel</span> and I’m a graduated student
              from the University of Calgary with a BSc degree in Computer
              Science. My interests currently lie in web design and Full Stack
              development. I aspire towards a career which allows me to unlock
              my full creative potential, sparking joy to the end users of my
              work and helping people through their problems.
              <br />
              <br />
              I’ve been developing myself as a person outside of my career,
              using a quote as motivation: the more you learn, the easier it is
              to learn more. Introducing new technologies into my work has not
              only made me better developer, but also driven my passions in this
              field even further.
              <br />
              <br />
              Outside of coding, when I'm in the mood for self-development, I'll
              be at the gym, exploring fashion or working on my podcast. If I'm
              burned out, gaming helps me forget about adulting.
            </p>
          </div>

          <div className={styles["image-container"]}>
            <Image
              src={myself}
              alt="An image of myself"
              layout="intrinsic"
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
  );
};

export default About;
