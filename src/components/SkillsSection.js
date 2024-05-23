import React from "react";
import "./SkillsSection.css";

import awsLogo from "../pic/awslogo.png";
import cppLogo from "../pic/c++.png";
import dataLogo from "../pic/data.png";
import gitLogo from "../pic/github.png";
import nodeLogo from "../pic/node.png";
import pythonLogo from "../pic/python.png";
import reactLogo from "../pic/react.png";
import javaLogo from "../pic/java.png";

const skills = [
  { name: "AWS", logo: awsLogo },
  { name: "C++", logo: cppLogo },
  { name: "Java", logo: javaLogo },
  { name: "Python", logo: pythonLogo },
  { name: "React", logo: reactLogo },
  { name: "Git", logo: gitLogo },
  { name: "Node.js", logo: nodeLogo },
];

const SkillsSection = () => {
  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill" key={skill.name}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
