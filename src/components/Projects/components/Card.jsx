import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";
import { MotionDiv } from "../../motionComponents/motionComponents";
import styles from "./styles.module.css";

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
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Card = ({ project }) => {
  return (
    <MotionDiv
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className={styles.container}
    >
      <MotionDiv className={styles.card} variants={item}>
        <div className={styles.imgContainer}>
          <img src={project.image} alt={project.title} />
        </div>
        <div className={styles.info}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className={styles.techStack}>
            {project.techStack.map((tech, index) => (
              <li key={index}>
                <small className={styles.tech}>{tech}</small>
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <a href={project.github} target="_blank" rel="noreferrer">
              <IoLogoGithub size={24} />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <IoLinkOutline size={24} />
            </a>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Card;
