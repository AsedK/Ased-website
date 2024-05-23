import React from "react";
import "./EducationSection.css";
import qutLogo from "../ucr logo.png"; 

const EducationSection = () => {
  return (
    <div className="education" id="education">
      <h2>My Education</h2>
      <div className="education-card">
        <img src={qutLogo} alt="University Logo" className="education-logo" />
        <div className="education-details">
          <h3>
            Bachelor of Science in Computer Science with Business Applications
          </h3>
          <p>University of California, Riverside</p>
          <p>Graduated in 2024</p>

          <ul>
            <li>
              Relevant Coursework: Data Structures, Algorithms, Database
              Systems, Computer Networks, Artificial intelligence
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
