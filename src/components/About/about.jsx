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
              I started my journey building modern web applications, focusing on
              seamless user experiences and robust backend systems. Over time,
              my interest expanded beyond traditional software toward systems
              that can reason, adapt, and operate with autonomy. Today, I build
              full stack applications powered by Agentic AI, creating
              intelligent systems where structured logic and AI-driven reasoning
              work together to solve real-world problems.
            </p>
            <p>
              My professional experience includes developing production-ready
              applications as a freelancer and contributing to real-world
              projects in a startup environment. These experiences strengthened
              my ability to translate complex ideas into scalable, maintainable
              solutions.
            </p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src="/assets/img.jpg" alt="Profile" />
        </div>
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
            <IoLogoJavascript size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <IoLogoReact size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <TbBrandNextjs size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <IoLogoNodejs size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <SiExpress size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <SiFastapi size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <IoLogoFirebase size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <SiMongodb size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <SiMysql size={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <img src="/tech/langchain.png" alt="" width={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <img src="/tech/langgraph.png" alt="" width={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <img src="/tech/mcp.png" alt="" width={40} />
          </MotionLi>
          <MotionLi variants={item}>
            <img src="/tech/a2a.svg" alt="" width={40} />
          </MotionLi>
        </MotionUl>
      </div>
    </div>
  );
};

export default About;
