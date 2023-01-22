import resume from "../Resume.jpg";
import resumepdf from "../MyResume.pdf";
const Resume = () => {
  return (
    <div className="resume-layout">
      <img src={resume} alt="" className="resume" />
      <a href={resumepdf} target={"_blank"}>
        <button>Download My Resume</button>
      </a>
    </div>
  );
};

export default Resume;
