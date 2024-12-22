import { MotionDiv } from "../../motionComponents/motionComponents";
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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Card = ({ job }) => {
  return (
    <MotionDiv
      className={styles.container}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <MotionDiv className={styles.card} variants={item}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={job.logo} alt="company" />
          </div>
          <div className={styles.text}>
            <header>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <small>{job.date}</small>
            </header>
            <div className={styles.body}>
              <p>{job.description}</p>
            </div>
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default Card;
