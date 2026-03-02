/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const designCompetencies = [
  "Product Design",
  "System Thinking",
  "Platform Design",
  "Information Architecture",
  "Interaction Design",
  "Design Systems",
  "Scalable Components",
  "User Research",
  "Journey Mapping",
  "Usability Testing",
  "Wireframing",
  "Prototyping",
  "Design QA",
];

const softSkills = [
  "Design Storytelling",
  "Communication",
  "Cross-Functional Collaboration",
];

const tools = [
  "Figma",
  "Figjam",
  "Figma Make",
  "Balsamiq",
  "Miro",
  "UX Pilot",
  "Design Systems",
  "AI-assisted Design Workflows",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Skill = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() =>
  { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } }, { threshold: 0.2 }); if (sectionRef.current) observer.observe(sectionRef.current); return () => observer.disconnect(); }, []);

  return (
    <div ref={sectionRef} className="skills-section">
      
      <motion.div
        className="projects-heading"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h2 variants={item}>
          Skills That Shape <br /> My Work
        </motion.h2>

        <motion.p variants={item}>
          Where research, design thinking, and execution come together.
        </motion.p>
      </motion.div>

      {/* UX Skills */}
      <div className="skills-block">
        <h4 className="skill-category-title">Design Competencies</h4>

        <div className="industries-list">
          <div className="white-blur">
            <div className="blur-ellips"></div>
          </div>

          {designCompetencies.map((item, idx) => (
            <div
                className={`industry-item fade-delay ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${300 + idx * 80}ms` }}
              >
              <div className="top-orange-blur"></div>
              {item}
              <div className="bottom-purple-blur"></div>
            </div>
          ))}
        </div>
      </div>

      {/* UI Skills */}
      <div className="skills-block">
        <h4 className="skill-category-title">Soft Skills</h4>

        <div className="industries-list">
          {softSkills.map((item, idx) => (
            <div
                className={`industry-item fade-delay ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${300 + idx * 80}ms` }}
              >
              <div className="top-orange-blur"></div>
              {item}
              <div className="bottom-purple-blur"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-block">
        <h4 className="skill-category-title">Design Tools & Methods</h4>

        <div className="industries-list">
          {tools.map((item, idx) => (
            <div
                className={`industry-item fade-delay ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${300 + idx * 80}ms` }}
              >
              <div className="top-orange-blur"></div>
              {item}
              <div className="bottom-purple-blur"></div>
            </div>
          ))}
        </div>
      </div>   


    </div>
  );
};

export default Skill;
