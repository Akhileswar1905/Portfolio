import project2 from "../projects/project2.png";
import project3 from "../projects/project3.png";
import project4 from "../projects/project4.png";
import project1 from "../projects/project1.png";
import project5 from "../projects/project5.png";
import project6 from "../projects/project6.png";

import React, { useState, useEffect } from "react";

const Projects = () => {
  var i = 0;
  const [repos, setRepos] = useState([]);
  const images = [project1, project2, project3, project4, project5, project6];

  useEffect(() => {
    fetch("https://api.github.com/users/akhileswar1905/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ul>
      <h2>My Recent Works</h2>
      <p
        style={{ textAlign: "center", marginBottom: "30px", marginTop: "12px" }}
      >
        My projects are showcased below
      </p>
      {/* {(i = 0)} */}
      {repos.map((repo) => {
        if (!repo.homepage) return null;
        i++;
        console.log(repo);

        return (
          <div className="project">
            <img src={images[i - 1]} alt={repo.name} className="left" />
            <h4>{repo.name}</h4>
            <div className="info">
              <p>{repo.description}</p>
            </div>
            <div className="btns">
              <a href={repo.homepage} target={"_blank"} rel="noreferrer">
                <button>Demo</button>
              </a>
              <a href={repo.html_url} target={"_blank"} rel="noreferrer">
                <button>Github</button>
              </a>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default Projects;
