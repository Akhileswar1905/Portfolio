import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="progress">
        <div className="circular_progress p1">
          <span>90%</span>
          <p>Java</p>
        </div>
        <div className="circular_progress p2">
          <span>75%</span>
          <p>Python</p>
        </div>
        <div className="circular_progress p3">
          <span>70%</span>
          <p>C language</p>
        </div>
        <div className="circular_progress p4">
          <span>85%</span>
          <p>Frontend Development</p>
        </div>
        <div className="circular_progress p5">
          <span>60%</span>
          <p>Backend Development</p>
        </div>
        <div className="circular_progress p6">
          <span>50%</span>
          <p>DSA</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
