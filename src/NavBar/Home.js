import github from "../github2.png";
import linkedin from "../linkedin2.png";
import insta from "../instta.png";

const Home = () => {
  return (
    <div className="home">
      <center>
        <h1>Hi There 👋</h1>
        <h1 className="title">I'm Akhileswar Sathivada</h1>
        <p>
          I'm a creative and ambitious individual with a passion for
          problem-solving and learning. I'm always looking for new challenges
          and opportunities to grow both professionally and personally. I'm
          currently pursuing a degree in Computer Science with a focus on
          Machine Learning , Artificial Intelligence and Web Development.
        </p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/akhileswar-sathivada-243b66237/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/Akhileswar1905">
            <img src={github} alt="" />
          </a>
          <a href="https://www.instagram.com/urs_akhileswar/">
            <img src={insta} alt="" />
          </a>
        </div>
      </center>
    </div>
  );
};

export default Home;
