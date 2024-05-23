import React from "react";
import "./HeroSection.css";
import profilePic from "./pic/ased.JPG";
import githubIcon from "./pic/github.png";
import linkedinIcon from "./pic/link.png";
import resumeIcon from "./resume.png"; 
import resume from "./Ased_karim_Resume.pdf"; 

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <h1>Ased Karim</h1>

      <div className="hero-links">
        <a
          href="https://github.com/AsedK"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          <img src={githubIcon} alt="GitHub" className="button-icon" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ased-karim/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="button-icon" />{" "}
          LinkedIn
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          <img src={resumeIcon} alt="Resume" className="button-icon" /> Resume
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
