import React from "react";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <AboutMe />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      {/* Add other sections here */}
    </div>
  );
}

export default App;
