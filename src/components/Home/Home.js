import "./Home.css";
import pic from "../../imgs/icons/ResumePic2.png";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Home = () => {
  return (
    <main className="home">
      <div className="content-box">
        <div className="section1">
          <div className="content">
            <p className="p1">Hi There</p>
            <p className="p2">I am Akhileswar</p>
            <p className="p3">
              I'm always looking for new challenges and opportunities to grow
              both professionally and personally.
            </p>
            <div className="btns-2">
              <NavLink to="/contact" className="btn1">
                Let's Connect
              </NavLink>
              <NavLink className="btn2">Hire Me</NavLink>
            </div>
            <div className="social-media">
              <a href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/Akhileswar1905">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/urs_akhileswar/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="section2">
          <img src={pic} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Home;
