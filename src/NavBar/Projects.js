import project1 from "../LearnCode.png";
import project2 from "../project2.png";

const Projects = () => {
  return (
    <div className="lay">
      <h1>Projects</h1>
      <div className="projects-layout">
        <div className="project p-1">
          <img src={project1} alt="" className="left" />
          <h4>LearnCode</h4>
          <div className="info">
            <p>
              This website is designed to provide resources and tutorials for
              learning how to code online. It provides a variety of resources
              such as video tutorials, coding challenges, and articles that can
              be used to learn coding skills. Additionally, the website also
              provides links to coding bootcamps, online courses, and other
              online learning resources.
            </p>
          </div>
          <div className="btns">
            <a
              href={"https://learncode-fun.vercel.app/"}
              target={"_blank"}
              rel="noreferrer"
            >
              <button>Demo</button>
            </a>
            <a
              href={"https://github.com/Akhileswar1905/LearnCode"}
              target={"_blank"}
              rel="noreferrer"
            >
              <button>Github</button>
            </a>
          </div>
        </div>

        <div className="project p-2">
          <img src={project2} alt="" className="right" />
          <h4>Music Player</h4>
          <div className="info">
            <p>
              This project is a music player created using HTML, CSS, and
              JavaScript. It allows users to play, pause, and stop their
              favorite music tracks.
            </p>
          </div>
          <div className="btns">
            <a
              href={"https://musicplayer-akhileswar.vercel.app"}
              target={"_blank"}
              rel="noreferrer"
            >
              <button>Demo</button>
            </a>
            <a
              href={"https://github.com/Akhileswar1905/MusicPlayer"}
              target={"_blank"}
              rel="noreferrer"
            >
              <button>Github</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
