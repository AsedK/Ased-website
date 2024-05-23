import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>
        If you have any questions or want to get in touch, feel free to email
        me.
      </p>
      <a href="mailto:karimased@gmail.com" className="contact-button">
        Email Me
      </a>
    </div>
  );
};

export default ContactSection;
