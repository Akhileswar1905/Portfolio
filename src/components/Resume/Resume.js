import "./Resume.css";
import edu from "../../imgs/icons/edu.png";
import com from "../../imgs/icons/com.png";
import resume from "../../imgs/icons/MyResume.pdf";

const Resume = () => {
  return (
    <>
      <h1 className="heading aboutme">
        <span>Resu</span>me
      </h1>
      <div className="resume">
        <div className="resume-section1">
          <div className="img">
            <img src={edu} alt="" />
          </div>
          <div className="resume-info">
            <p>Intermediate, Narayana Junior College</p>
            <p className="gold">2019 - 2021</p>
          </div>
          <div className="edu-info">
            <div className="resume-info">
              <p>BTech in Computer Science, GRIET</p>
              <p className="gold">2021 - Present</p>
            </div>
          </div>
        </div>
        <div className="resume-section2">
          <div className="img">
            <img src={com} alt="" />
          </div>
          <div className="exp-info">
            <div className="resume-info">
              <p>Web Developer</p>
              <p className="gold">2022 - Present</p>
            </div>
            {/* <div className="resume-info">
              <p>Machine Learning Enginner</p>
              <p className="gold">20xx - 20xx</p>
            </div> */}
          </div>
        </div>
        <div className="load" style={{ display: "none" }}>
          <a className={"resume-btn"} href={resume}>
            Download My Resume
          </a>
        </div>
      </div>
      <div className="down">
        <a className={"resume-btn"} href={resume}>
          Download My Resume
        </a>
      </div>
    </>
  );
};

export default Resume;
