import React from "react";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-cards">
        <div className="projects-card">
          <h3>Analyzing the Housing Crisis in California</h3>
          <p className="date">May 2023 | Tableau</p>
          <p>
            Conducted comprehensive analysis on housing affordability in
            California by utilizing five data sets and visualizing the data
            using Tableau. Investigated trends and patterns in housing prices,
            income levels, and tax rates to analyze factors contributing to the
            housing crisis and assess the impact of rising housing costs on
            today’s population compared to 50+ years ago. Collaborated with a
            team to unveil significant housing affordability challenges: Average
            house prices increased by over 1,150% while income rose by only 373%
            over the past few decades, resulting in houses being 7.5 times the
            median salary and extended saving time for down payments.
          </p>
        </div>
        <div className="projects-card">
          <h3>Task Scheduler</h3>
          <p className="date">June 2022 | C++</p>
          <p>
            Led a scrum team as a Scrum Master and successfully developed a task
            scheduler to improve daily task management and organization.
            Crafted, created, and executed a customized user interface for the
            front-end, resulting in a streamlined and user-friendly experience.
            Applied advanced programming techniques, including the use of nodes
            and pointers, to successfully resolve memory leak issues and
            optimize program performance.
          </p>
          <a
            href="https://github.com/AsedK/Task-scheduler"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
