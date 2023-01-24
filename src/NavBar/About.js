import html from "../html.png";
import css from "../css.png";
import js from "../js.png";
import react from "../react.png";
import py from "../python.png";
import pylib from "../pylib.png";
import java from "../Java.png";
import c from "../c.png";
const About = () => {
  return (
    <section className="about-section">
      <h1>Intro</h1>
      <div className="intro">
        <p>
          Hi Everyone, I am <span>Akhileswar Sathivada</span> from{" "}
          <span>Hyderabad</span>
        </p>
        <p>
          I am a Tech Geek pursuring Computer Science with specialization in
          AIML in GRIET, Hyderabad.
        </p>
        <p>
          Apart from coding, I love to watch anime and spend time with my family
        </p>
        <p className="quote">
          "When You Forget About The Outcomes, You Become Unstoppable"
          <br />
          -Akhileswar
        </p>
      </div>

      <h1>Skills</h1>
      <div className="skills">
        <div className="layout">
          <img src={html} alt="" />
          <div className="box">
            <p>Proficiency</p>
            <p className="level">85%</p>
          </div>
        </div>

        <div className="layout">
          <img src={css} alt="" />
          <div className="box">
            <p>Proficiency</p>
            <p className="level">85%</p>
          </div>
        </div>

        <div className="layout">
          <img src={js} alt="" />

          <div className="box">
            <p>Proficiency</p>
            <p className="level">70%</p>
          </div>
        </div>

        <div className="layout">
          <img src={react} alt="" />

          <div className="box">
            <p>Proficiency</p>
            <p className="level">60%</p>
          </div>
        </div>

        <div className="layout">
          <img src={py} alt="" />

          <div className="box">
            <p>Proficiency</p>
            <p className="level">90%</p>
          </div>
        </div>
        <div className="layout">
          <img src={pylib} alt="" />

          <div className="box">
            <p>Proficiency</p>
            <p className="level">60%</p>
          </div>
        </div>

        <div className="layout">
          <img src={java} alt="" />

          <div className="box">
            <p>Proficiency</p>
            <p className="level">70%</p>
          </div>
        </div>

        <div className="layout">
          <img src={c} alt="" />

          <div className="box">
            <p>Proficiency</p>
            <p className="level">87%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
