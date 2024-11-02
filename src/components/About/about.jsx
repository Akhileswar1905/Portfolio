import { MotionDiv } from "../motionComponents/motionComponents";
import styles from "./styles.module.css";

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

            <MotionDiv
              initial={{
                width: 0,
              }}
              whileInView={{
                width: "90%",
                transition: {
                  duration: 1,
                },
              }}
              viewport={{
                once: true,
              }}
              style={{
                height: "1px",
                backgroundColor: "#fff",
              }}
            ></MotionDiv>
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
            <p>
              I enjoy working with a variety of technologies, and my current
              tech stack includes:
            </p>
            <ul>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js 14</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>FastAPI</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Google Firebase</li>
            </ul>
          </div>
        </div>
        <div className={styles.imgContainer}></div>
      </MotionDiv>
    </div>
  );
};

export default About;
