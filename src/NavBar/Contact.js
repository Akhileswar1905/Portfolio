import github from "../github2.png";
import linkedin from "../linkedin2.png";
import insta from "../instta.png";

const Contact = () => {
  return (
    <div className="contact-layout">
      <h1>My Contact Info</h1>
      <p>
        My Email : <span>akhileswarsathivada@gmail.com</span>{" "}
      </p>

      <center>
        <h1>Find Me on</h1>
        <div className="icons">
          <a href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/">
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

export default Contact;
