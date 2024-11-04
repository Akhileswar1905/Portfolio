import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Home from "./components/Home/home";
import Projects from "./components/Projects/projects";
import styles from "./App.module.css";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import {
  MotionDiv,
  MotionNav,
} from "./components/motionComponents/motionComponents";
import { useState, useRef } from "react";
import Contact from "./components/Contact/contact";

function App() {
  document.title = "Akhileswar | Portfolio";

  const [show, setShow] = useState(false);

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

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
          <MotionDiv
            variants={item}
            className={styles.link}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </MotionDiv>
          <MotionDiv
            variants={item}
            className={styles.link}
            onClick={() => scrollToSection(projectsRef)}
          >
            Projects
          </MotionDiv>
          <MotionDiv
            variants={item}
            className={styles.link}
            onClick={() => scrollToSection(experienceRef)}
          >
            Experience
          </MotionDiv>
          <MotionDiv
            variants={item}
            className={styles.link}
            onClick={() => scrollToSection(contactRef)}
          >
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
                onClick={() => setShow(!show)}
              />
            ) : (
              <BiMenuAltLeft
                size={32}
                className={styles.icon}
                onClick={() => setShow(!show)}
              />
            )}
          </MotionDiv>
        </MotionDiv>
      </MotionNav>

      <MotionDiv variants={item} className={styles.overlay}>
        <MotionDiv variants={item} className={styles.line}></MotionDiv>
        <MotionDiv variants={item} className={styles.icons}>
          <a
            href="https://github.com/Akhileswar1905"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://www.instagram.com/urs_akhileswar/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoInstagram />
          </a>
        </MotionDiv>
      </MotionDiv>
      <MotionDiv variants={item} className={styles.content}>
        <div ref={homeRef}>
          <Home contactRef = {contactRef}/>
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </MotionDiv>

      {show && (
        <div className={styles.dropdownContent}>
          <div
            className={styles.dropdownLink}
            onClick={() => {
              scrollToSection(aboutRef);
              setShow(!show);
            }}
          >
            About
          </div>
          <div
            className={styles.dropdownLink}
            onClick={() => {
              scrollToSection(experienceRef);
              setShow(!show);
            }}
          >
            Experience
          </div>
          <div
            className={styles.dropdownLink}
            onClick={() => {
              scrollToSection(projectsRef);
              setShow(!show);
            }}
          >
            Projects
          </div>
          <div
            className={styles.dropdownLink}
            onClick={() => {
              scrollToSection(contactRef);
              setShow(!show);
            }}
          >
            Contact
          </div>
        </div>
      )}
    </MotionDiv>
  );
}

export default App;
