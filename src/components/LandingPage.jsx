import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import SkillSection from "./SkillSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";
import "./LandingPage.scss";

const sectionIds = ["home", "about", "work", "contact"];
const nextSectionMap = {
  home: "about",
  about: "work",
  work: "contact",
  contact: "home"
};

const LandingPage = () => {
  const [navBarColor] = useState("black");
  const [currentPage, setCurrentPage] = useState("about");

  const scrollToSection = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll detection to track which section is visible
  useEffect(() => {
    const handleScroll = () => {
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setCurrentPage(nextSectionMap[id]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`main-container ${navBarColor}`}>
      <NavBar
        className=""
        bgColor={navBarColor}
        currentPage={currentPage}
        onNavClick={scrollToSection}
      />
      <div className="content-list">
        <HomePage id="home" />
        <SkillSection id="about" />
        <WorkSection id="work" />
        <ContactSection id="contact" />
      </div>
    </div>
  );
};

export default LandingPage;
