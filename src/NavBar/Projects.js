import project1 from "../project1.png";
import project2 from "../project2.png";
import project3 from "../project3.png";
import React, { useState, useEffect } from "react";

const Projects = () => {
  var i = 0;
  const [repos, setRepos] = useState([]);
  const images = [{ 1: project1 }, { 2: project2 }, { 3: project3 }];
  useEffect(() => {
    fetch("https://api.github.com/users/akhileswar1905/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <ul>
      {repos.map((repo) => {
        if (!repo.homepage) return null;
        i++;
        console.log(images[i - 1][i]);

        return (
          <div className="project">
            <img src={images[i - 1][i]} alt={repo.name} className="left" />
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
