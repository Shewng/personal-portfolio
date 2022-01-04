import Image from "next/image";
import styles from "../styles/pages/About.module.scss";
import myself from "../public/me.jpg";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-row-container"]}>
        <h3>about me</h3>
        <p>
          Hello, my name is <span>Samuel</span> and I’m a graduated student from
          the University of Calgary with a BSc degree in Computer Science. My
          interests currently lie in web design and Full Stack development. I
          aspire towards a career which allows me to unlock my full creative
          potential, sparking joy to the end users of my work and helping people
          through their problems.
          <br />
          <br />
          I’ve been developing myself as a person outside of my career, using a
          quote as motivation: the more you learn, the easier it is to learn
          more. Introducing new technologies into my work has not only made me
          better developer, but also driven my passions in this field even
          further.
          <br />
          <br />
          Outside of coding, when I'm in the mood for self-development, I'll be
          at the gym, exploring fashion or working on my podcast. If I'm burned
          out, gaming helps me forget about adulting.
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
  );
};

export default About;
