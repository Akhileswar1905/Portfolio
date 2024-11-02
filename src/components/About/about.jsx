import {
  MotionDiv,
  MotionLi,
  MotionUl,
} from "../motionComponents/motionComponents";
import Line from "../Line/line";
import styles from "./styles.module.css";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoFirebase,
} from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql, SiFastapi } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const About = () => {
  return (
    <div className={styles.container}>
      <MotionDiv
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{
          once: true,
        }}
        className={styles.wrapper}
      >
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <h1 className={styles.heading}>About Me</h1>
            <Line />
          </div>
          <div className={styles.desc}>
            <p>
              Hello! My name is Akhileswar Sathivada, and I’m passionate about
              creating applications that live on the internet. My journey into
              web development began in 2022 when I was eager to build something
              unique and impactful. I wanted to stand out from the crowd, and
              that desire sparked my fascination with coding and design.
            </p>
            <p>
              Since then, I’ve gained valuable experience working as a
              <span> Freelancer</span>, where I developed a{" "}
              <span>Mobile app</span> and
              <span> Dashboard</span> for a company called{" "}
              <span> MK Logistics</span>. Currently, I’m honing my skills as an
              intern at <span>Gen Alpha Digital</span>, a startup where I’m
              involved in building the company’s <span>Portfolio project</span>.
            </p>
          </div>
        </div>
        <div className={styles.imgContainer}></div>
      </MotionDiv>
      <div className={styles.tech}>
        <p>
          I enjoy working with a variety of technologies, and my current tech
          stack includes:
        </p>
        <MotionUl
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <MotionLi variants={item}>
            <IoLogoJavascript />
          </MotionLi>
          <MotionLi variants={item}>
            <IoLogoReact />
          </MotionLi>
          <MotionLi variants={item}>
            <TbBrandNextjs />
          </MotionLi>
          <MotionLi variants={item}>
            <IoLogoNodejs />
          </MotionLi>
          <MotionLi variants={item}>
            <SiExpress />
          </MotionLi>
          <MotionLi variants={item}>
            <SiFastapi />
          </MotionLi>
          <MotionLi variants={item}>
            <IoLogoFirebase />
          </MotionLi>
          <MotionLi variants={item}>
            <SiMongodb />
          </MotionLi>
          <MotionLi variants={item}>
            <SiMysql />
          </MotionLi>
        </MotionUl>
      </div>
    </div>
  );
};

export default About;
