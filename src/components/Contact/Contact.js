import "./Contact.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import phone from "../../imgs/icons/phone.png";
import msg from "../../imgs/icons/msg.png";
import share from "../../imgs/icons/share.png";
const Contact = () => {
  return (
    <>
      <h1 className="heading aboutme">
        <span>Conta</span>ct Me
      </h1>
      <div className="main">
        <div className="contact">
          <div className="contact-box">
            <div className="img">
              <img className="image" src={msg} alt="email" />
            </div>
            <div className="contact-info">
              <div className="gold">Email</div>
              <div>akhileswarsathivada@gmail.com</div>
            </div>
          </div>
          <div className="contact-box">
            <div className="img">
              <img className="image" src={phone} alt="phone" />
            </div>
            <div className="contact-info">
              <div className="gold">Phone Number</div>
              <div>7075971917</div>
            </div>
          </div>
          <div className="contact-box">
            <div className="img">
              <img className="image" src={share} alt="social" />
            </div>
            <div className="contact-info">
              <div className="gold">Social Media</div>
              <div className="socialMedia">
                <a href="https://www.linkedin.com/in/sathivada-akhileswar-243b66237/">
                  <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/Akhileswar1905">
                  <FaGithub className="icon" />
                </a>
                <a href="https://www.instagram.com/urs_akhileswar/">
                  <FaInstagram className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
