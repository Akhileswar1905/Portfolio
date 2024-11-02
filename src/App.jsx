import About from "./components/About/about";
// import Experience from "./components/Experience/experience";
import Home from "./components/Home/home";
// import Projects from "./components/Projects/projects";
import styles from "./App.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import {
  MotionDiv,
  MotionNav,
} from "./components/motionComponents/motionComponents";
import { useState } from "react";
function App() {
  document.title = "Akhileswar | Portfolio";

  const [show, setShow] = useState(false);

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

        {/* DropDown of Links */}
        <MotionDiv variants={item} className={styles.dropdown}>
          <MotionDiv variants={item} className={styles.menu}>
            {!show ? (
              <BiMenuAltRight
                size={32}
                className={styles.icon}
                onClick={() => {
                  setShow(!show);
                }}
              />
            ) : (
              <BiMenuAltLeft
                size={32}
                className={styles.icon}
                onClick={() => {
                  setShow(!show);
                }}
              />
            )}
          </MotionDiv>
          {show && (
            <div
              variants={item}
              className={styles.dropdownContent}
              style={{
                display: show ? "block" : "none",
              }}
            >
              <div variants={item} className={styles.dropdownLink}>
                About
              </div>
              <div variants={item} className={styles.dropdownLink}>
                Experience
              </div>
              <div variants={item} className={styles.dropdownLink}>
                Projects
              </div>
              <div variants={item} className={styles.dropdownLink}>
                Contact
              </div>
            </div>
          )}
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
        <About />
      </MotionDiv>
    </MotionDiv>
  );
}

export default App;
