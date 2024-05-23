import React, { useEffect, useRef, useState } from "react";
import "./ExperienceSection.css";
import nonFungibleTaxLogo from "../nftax.png"; 
import sharperMindsLogo from "../pic/SM.png"; 
import awsLogo from "../pic/awslogo.png"; 
import reactLogo from "../pic/react.png";
import nodeLogo from "../pic/node.png"; 
import cppLogo from "../pic/c++.png"; 
import dataLogo from "../pic/data.png"; 
import pythonLogo from "../pic/python.png"; 

const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`experience ${inView ? "in-view" : ""}`}
      id="experience"
      ref={sectionRef}
    >
      <h2>My Experience</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <div className="card-header">
            <img
              src={nonFungibleTaxLogo}
              alt="non-fungibletax.com"
              className="company-logo"
            />
            <div className="card-title">
              <h3>Full-Stack Software Engineer Intern</h3>
              <a
                href="https://non-fungibletax.com"
                target="_blank"
                rel="noopener noreferrer"
                className="company"
              >
                non-fungibletax
              </a>
              <p className="date">June 2023 – September 2023 | Virtual</p>
            </div>
          </div>
          <p className="card-description">
            Collaborated with a team at an online tax firm to develop a web app
            for automated tax calculations of stock, crypto, and NFT holdings.
            Designed and implemented the signup process and integrated payment
            methods for user convenience. Constructed a flexible payment plan
            system and ensured its smooth communication with the user interface.
            Established a database to maintain records of user purchases and
            corresponding payment plans.
          </p>
          <div className="tech-stack">
            <img src={awsLogo} alt="AWS" title="AWS" />
            <img src={reactLogo} alt="React.js" title="React.js" />
            <img src={nodeLogo} alt="Node.js" title="Node.js" />
          </div>
        </div>
        <div className="experience-card">
          <div className="card-header">
            <img
              src={sharperMindsLogo}
              alt="Sharper Minds Academics"
              className="company-logo"
            />
            <div className="card-title">
              <h3>Computer Science Tutor</h3>
              <a
                href="https://sharpermindsacademics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="company"
              >
                Sharper Minds Academics
              </a>
              <p className="date">August 2022 – Present | Virtual</p>
            </div>
          </div>
          <p className="card-description">
            Developing and delivering lesson plans for introductory computer
            science concepts, including data structures, algorithms, and
            object-oriented programming. Creating and maintaining course
            materials, including slides, handouts, and programming exercises, to
            support student learning and engagement.
          </p>
          <div className="tech-stack">
            <img src={cppLogo} alt="C++" title="C++" />
            <img src={dataLogo} alt="Data" title="Data" />
            <img src={pythonLogo} alt="Python" title="Python" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
