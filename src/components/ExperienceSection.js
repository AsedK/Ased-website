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
import AI from "../pic/AI.png";
import TS from "../pic/TS.png";
import GenbaiL from "../pic/genbaiL.png";


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
        {/* New Genbai.ai Experience testing*/}
        <div className="experience-card">
          <div className="card-header">
            <img
              src={GenbaiL}
              alt="non-fungibletax.com"
              className="company-logo"
            />
            <div className="card-title">
              <h3>Software Developer</h3>
              <a
                href="https://genbai.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="company"
              >
                Genbai.ai
              </a>
              <p className="date">March 2024 – Present | Remote</p>
            </div>
          </div>
          <p className="card-description">
            • Assisted lead developer in the process of a Kanban board
            application with AI integration, focusing on front-end enhancements
            and ensuring that the design and functionality aligned with the
            application’s goals.
            <br />
            • Contributed to the design and implementation of the AI-driven
            feature HIRO AI assistant, focusing on enhancing user interaction
            and project management within the Genbai app. Utilized natural
            language processing (NLP) and machine learning algorithms,
            integrated via RESTful APIs, to interpret user inputs, provide
            contextual guidance, and generate dynamic project management
            insights.
            <br />
            • Achieved a 50% reduction in AI response time and a 30% increase in
            processing efficiency, resulting in a 60% adoption rate among users.
            The HIRO AI assistant has been selected as a featured innovation and
            will be showcased at the Global AI Summit in Riyadh 2024.
            <br />• Created and implemented new front-end solutions using React
            and TypeScript, leading to improved user interaction and a more
            consistent design across the application. Additionally, utilized
            Docker and PG Admin to manage backend data effectively, ensuring
            seamless integration and enhancing the application’s overall
            performance resulting in a 40% increase in front-end load
            performance and a 20% decrease in API response times.
          </p>
          <div className="tech-stack">
            <img src={reactLogo} alt="React.js" title="React.js" />
            <img src={nodeLogo} alt="Node.js" title="Node.js" />
            <img src={TS} alt="type script" title="AWS" />
            <img src={AI} alt="AWS" title="AWS" />
          </div>
        </div>

        {/* Existing Experience Content */}
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
              <p className="date">June 2023 – September 2023 | Remote</p>
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
