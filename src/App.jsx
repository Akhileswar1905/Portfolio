// import About from "./components/About/about";
// import Experience from "./components/Experience/experience";
import Home from "./components/Home/home";
// import Projects from "./components/Projects/projects";
import styles from "./App.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import {
  MotionDiv,
  MotionNav,
} from "./components/motionComponents/motionComponents";
function App() {
  document.title = "Akhileswar | Portfolio";

  const container = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <MotionDiv
      variants={container}
      initial="hidden"
      animate="visible"
      className={styles.main}
    >
      <MotionNav variants={item} className={styles.nav}>
        <MotionDiv variants={item} className={styles.logo}>
          A.
        </MotionDiv>
        <MotionDiv variants={item} className={styles.links}>
          <MotionDiv variants={item} className={styles.link}>
            About
          </MotionDiv>
          <MotionDiv variants={item} className={styles.link}>
            Experience
          </MotionDiv>
          <MotionDiv variants={item} className={styles.link}>
            Projects
          </MotionDiv>
          <MotionDiv variants={item} className={styles.link}>
            Contact
          </MotionDiv>
        </MotionDiv>
      </MotionNav>
      <MotionDiv variants={item} className={styles.overlay}>
        <MotionDiv variants={item} className={styles.line}></MotionDiv>
        <MotionDiv variants={item} className={styles.icons}>
          <a href="#" target="_blank">
            <IoLogoGithub />
          </a>
          <a href="#" target="_blank">
            <IoLogoLinkedin />
          </a>
          <a href="#" target="_blank">
            <IoLogoInstagram />
          </a>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv variants={item} className={styles.content}>
        <Home />
      </MotionDiv>
    </MotionDiv>
  );
}

export default App;
