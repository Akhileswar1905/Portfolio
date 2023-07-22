import "./Projects.css";
import project1 from "./projectImgs/project1-Aniflix.png";
import project2 from "./projectImgs/project2-BlogSpot.png";
import project3 from "./projectImgs/project3-LearnCode.png";
import { FaGithub, FaShare } from "react-icons/fa";

const projects = [
  {
    name: "Aniflix",
    demo: "https://aniflix-v0.vercel.app",
    github: "https://github.com/Akhileswar1905/AniFlix",
    img: project1,
    desc: "Aniflix-fun is a basic front-end web application that utilizes the Kitsu API to retrieve data based on user search inputs. The application features a search bar where users can input the name of their favorite anime and the results will be displayed on the page.",
  },
  {
    name: "BlogSpot",
    demo: "https://blogspot-v0.vercel.app",
    github: "https://github.com/Akhileswar1905/BlogSpot",
    img: project2,
    desc: "BlogSpot is a dynamic MERN Stack website enabling users to post and read thoughts. Share your ideas and explore the posts of others effortlessly. Engage in a vibrant community of writers and readers. ",
  },
  {
    name: "LearnCode",
    demo: "https://learncode-fun.vercel.app",
    github: "https://github.com/Akhileswar1905/LearnCode",
    img: project3,
    desc: "This website is designed to provide resources and tutorials for learning how to code online. It provides a variety of resources such as video tutorials, coding challenges, and articles that can be used to learn coding skills.",
  },
];
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="aboutme">My Work</h1>
      <div className="projects-container  ">
        {projects.map((project) => (
          <div className="project-box">
            {/* <div className="image"> */}
            <img src={project.img} alt={project.name} />
            {/* </div> */}
            <div className="project-info">
              <h4 className="pname">{project.name}</h4>
              <p>{project.desc} </p>
              <div className="btns-3">
                <a href={project.demo} className="btn1">
                  <FaShare />
                </a>
                <a href={project.github} className="btn2">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
