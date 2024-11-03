import styles from "./styles.module.css";
import Line from "../Line/line";
import Card from "./components/Card";
import work from "./data";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>My Experience</h1>
          <Line />
          <div className={styles.work}>
            {work.map((job, index) => (
              <Card key={index} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
