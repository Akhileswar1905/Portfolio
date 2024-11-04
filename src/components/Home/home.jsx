import styles from "./styles.module.css";
import {
  MotionDiv,
  MotionButton,
  MotionH1,
  MotionP,
} from "../motionComponents/motionComponents";

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
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

const Home = ({contactRef}) => {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <MotionDiv
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.texts}
        >
          <MotionP variants={item} className={styles.greetings}>
            Hi There, I am
          </MotionP>
          <MotionH1 variants={item} className={styles.name}>
            Akhileswar
          </MotionH1>
          <MotionH1 variants={item} className={styles.role}>
            <span>Full stack developer:</span> Bridging design and
            functionality.
          </MotionH1>
          <MotionP variants={item} className={styles.desc}>
            I am a passionate full stack developer with expertise in building
            dynamic web applications. Proficient in both front-end and back-end
            technologies, I thrive on creating seamless user experiences and
            robust server-side solutions. With a keen eye for design and a
            commitment to clean, efficient code, I aim to deliver innovative
            solutions that meet client needs and drive business success. Always
            eager to learn and grow, I embrace new challenges and technologies
            to stay at the forefront of the industry.{" "}
          </MotionP>
          <MotionButton variants={item} className={styles.cta}
            onClick={() => {
              scrollToSection(contactRef);
            }}
            >
            Let&apos;s Connect
          </MotionButton>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Home;
