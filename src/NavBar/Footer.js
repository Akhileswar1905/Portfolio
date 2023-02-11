import github from "../github2.png";
import linkedin from "../linkedin2.png";
import insta from "../instta.png";
const Footer = () => {
  let date = new Date();
  return (
    <footer>
      <div>
        <span>Developed By Akhileswar</span>
      </div>
      <div>
        <span>Copywrite © {date.getFullYear()} Akhileswar</span>
      </div>
      <div className="icon">
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
    </footer>
  );
};

export default Footer;
