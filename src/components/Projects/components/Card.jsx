import styles from "./styles.module.css";

const Card = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={project.image} alt={project.title} />
        <div className={styles.info}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
