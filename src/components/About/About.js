import Skills from "../Skills/Skills";
import pic from "../../imgs/icons/ResumePic.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-section1">
        <img src={pic} alt="" className="pic" />
      </div>
      <div className="about-section2">
        <h1 className="aboutme">About Me</h1>
        <div className="context">
          <h3>Hi There 👋</h3>
          <p>
            I am Akhileswar Sathivada I'm a creative and ambitious individual
            with a passion for problem-solving and learning.
          </p>
          <p>
            I'm currently pursuing a degree in Computer Science with a focus on
            Machine Learning , Artificial Intelligence and Web Development.
          </p>
          <div className="skills-tab">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
