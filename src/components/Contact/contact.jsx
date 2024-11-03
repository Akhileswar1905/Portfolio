import { MotionDiv } from "../motionComponents/motionComponents";
import styles from "./styles.module.css";

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
