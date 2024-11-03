import { MotionDiv } from "../motionComponents/motionComponents";
import styles from "./styles.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Contact = () => {
  return (
    <MotionDiv
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <MotionDiv className={styles.wrapper} variants={item}>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Me</h1>
          <div className={styles.body}>
            <p>
              Whether you’re looking to collaborate on an exciting project, need
              technical advice, or just want to connect, I’d love to hear from
              you. Reach out and let’s create something extraordinary together!
            </p>
            <a href="mailto:akhileswarsathivada@gmail.com">Message Me</a>
          </div>
        </div>
      </MotionDiv>
      <MotionDiv
        variants={item}
        className={styles.footer}
        style={{ position: "absolute", bottom: 0 }}
      >
        <div className={styles.social}>
          <a
            href="https://github.com/Akhileswar1905"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/urs_akhileswar/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram size={24} />
          </a>
        </div>
        <small>
          Designed and Developed by{" "}
          <span>
            <a href="https://github.com/Akhileswar1905">Akhileswar</a>
          </span>
        </small>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Contact;
