import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5bychmk",
        "template_1lyhena",
        form.current,
        "84cx9MgwDw9L1-9-k"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail}>
        <h1 className="aboutme">Contact Form</h1>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          required
          name="user_name"
        />
        <input
          type="text"
          className="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          className="phone"
          placeholder="Your Phone number"
          name="phone_number"
          required
        />

        <textarea
          className="msg"
          placeholder="How can I help you"
          rows="5"
          name="message"
          required
        ></textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
