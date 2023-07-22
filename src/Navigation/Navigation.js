import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Navigation = () => {
  const [classList, setclassList] = useState("dropdown");
  const func = () => {
    if (classList === "dropdown") {
      setclassList("dropdown open");
    } else {
      setclassList("dropdown");
    }
  };
  // const bars = document.querySelectorAll(".icon");

  return (
    <header>
      <div className="navbar">
        <div className="name">
          <Link to={"/"}>Akhil.</Link>
        </div>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About Me</NavLink>
          <NavLink to="projects">My Projects</NavLink>
          <NavLink to="resume">Resume</NavLink>
        </div>
        <div className="connect">
          <NavLink to="contact">Let's Connect</NavLink>
        </div>
        <div className="bars">
          <FaBars className="icon" onClick={func} />
        </div>
      </div>

      <div className={classList}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About Me</NavLink>
        <NavLink to="projects">My Projects</NavLink>
        <NavLink to="resume">Resume</NavLink>
        <NavLink className={"connect-btn"} to="contact">
          Let's Connect
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
