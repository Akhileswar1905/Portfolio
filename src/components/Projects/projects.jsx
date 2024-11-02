import Line from "../Line/line";
import Card from "./components/Card";
import styles from "./styles.module.css";
import projects from "./data";
const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>Projects</h1>
          <Line />
        </div>
        <div className={styles.projects}>
          <Card project={projects[0]} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
