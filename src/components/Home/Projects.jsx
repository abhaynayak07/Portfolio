/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SchoolMate from "../../asset/Home/Projects/School Mate.webp";
import SchoolMateGlow from "../../asset/Home/Projects/School Mate Background Glow.webp";
import QEasy from "../../asset/Home/Projects/Q Easy.webp";
import QEasyGlow from "../../asset/Home/Projects/Q Easy Background Glow.webp";
import GoogleClassroom from "../../asset/Home/Projects/Google Classroom.webp";
import GoogleClassroomBackgroundGlow from "../../asset/Home/Projects/Google Classroom Background Glow.webp";
import CanvasCode from "../../asset/Home/Projects/Canvas & Code.webp";
import CanvasCodeBackgroundGlow from "../../asset/Home/Projects/Canvas & Code Background Glow.webp";
import OlliePets from "../../asset/Home/Projects/Ollie Pets.webp";
import OlliePetsBackgroundGlow from "../../asset/Home/Projects/Ollie Pets Background Glow.webp";
import AarogyaGuru from "../../asset/Home/Projects/Aarogya Guru.webp";
import AarogyaGuruBackgroundGlow from "../../asset/Home/Projects/Aarogya Guru Background Glow.webp";
import SaveLife from "../../asset/Projects/ProjectsList/Save Life.webp";
import SaveLifeBackgroundGlow from "../../asset/Projects/ProjectsList/Save Life Background Glow.webp";
import MobileProjectBackground from "../../asset/Home/Projects/MobileProjectBackground.webp"
import DesktopProjectFade from "../../asset/Home/Projects/DesktopProjectFade.webp"
import DesktopProjectVector from "../../asset/Home/Projects/DesktopProjectVector.webp"
import MobileProjectVector from "../../asset/Home/Projects/MobileProjectVector.webp"
import MobileProjectBlur from "../../asset/Home/Projects/MobileProjectBlur.webp"
import { motion } from "framer-motion";

function Projects() {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // For stagger animation timings
  const delay = (i) => ({ transitionDelay: `${200 + i * 120}ms` });

  const projectData = [
    {
      link: "/projects/save_life",
      img: SaveLife,
      glow: SaveLifeBackgroundGlow,
      title: "Save Life",
      sub: "2025",
      tag: "Mobile Application",
    },
    {
      link: "/projects/school_mate",
      img: SchoolMate,
      glow: SchoolMateGlow,
      title: "School Mate",
      sub: "2025",
      tag: "Mobile Application",
    },
    {
      link: "/projects/q_easy",
      img: QEasy,
      glow: QEasyGlow,
      title: "Q Easy",
      sub: "2025",
      tag: "Mobile Application",
    },
    {
      link: "/projects/google_classroom",
      img: GoogleClassroom,
      glow: GoogleClassroomBackgroundGlow,
      title: "Google Classroom",
      sub: "2023",
      tag: "Mobile Application",
      hideOnMobile: true,
    },
    {
      link: "/projects/canvas_and_code",
      img: CanvasCode,
      glow: CanvasCodeBackgroundGlow,
      title: "Canvas & Code",
      sub: "2023",
      tag: "Website Design",
      hideOnMobile: true,
    },
    {
      link: "/projects/ollie_pets",
      img: OlliePets,
      glow: OlliePetsBackgroundGlow,
      title: "Ollie Pets",
      sub: "2023",
      tag: "Website Design",
      hideOnMobile: true,
    },
    {
      link: "/projects/aarogya_guru",
      img: AarogyaGuru,
      glow: AarogyaGuruBackgroundGlow,
      title: "Aarogya Guru",
      sub: "2023",
      tag: "Mobile Application",
      hideOnMobile: true,
    },
  ];

  return (
    <div ref={sectionRef} className={`projects  ${visible ? "visible" : ""}`}>
      <div className="projects-heading">
  {/* Background & Vectors */}
  <img className="projects-heading-blur desktop" src={DesktopProjectFade} />
  <img className="projects-heading-vector desktop" src={DesktopProjectVector} />
  <img className="mobile-projects-heading-blur mobile" src={MobileProjectBlur} />
  <img className="mobile-projects-heading-vector mobile" src={MobileProjectVector} />

  {/* --- DESKTOP SVG ANIMATION --- */}
  <motion.svg
    className="top-line desktop"
    width="517"
    height="517"
    viewBox="0 0 517 517"
    fill="none"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.circle
      cx="258.5"
      cy="258.5"
      r="258"
      stroke="url(#paint0_linear_539_4408)"
      strokeOpacity="0.55"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    />
    <defs>
      <linearGradient id="paint0_linear_539_4408" x1="258.5" y1="0" x2="258.5" y2="517"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#CCCCCC" />
        <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
      </linearGradient>
    </defs>
  </motion.svg>

  <motion.svg
    className="bottom-line desktop"
    width="322"
    height="322"
    viewBox="0 0 322 322"
    fill="none"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.circle
      cx="161"
      cy="161"
      r="160.5"
      stroke="url(#paint0_linear_539_4409)"
      strokeOpacity="0.55"
      strokeWidth="1"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
    />
    <defs>
      <linearGradient id="paint0_linear_539_4409" x1="161" y1="0" x2="161" y2="264.5"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#CCCCCC" />
        <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
      </linearGradient>
    </defs>
  </motion.svg>

  {/* --- MOBILE SVG ANIMATION --- */}
  <motion.svg
    className="mobile-top-line mobile"
    width="316"
    height="316"
    viewBox="0 0 316 316"
    fill="none"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.circle
      cx="158"
      cy="158"
      r="157.5"
      stroke="url(#paint0_linear_733_6435)"
      strokeOpacity="0.55"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    />
    <defs>
      <linearGradient id="paint0_linear_733_6435" x1="158" y1="0" x2="158" y2="316"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#8D8D8D" />
        <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
      </linearGradient>
    </defs>
  </motion.svg>

  <motion.svg
    className="mobile-bottom-line mobile"
    width="197"
    height="196"
    viewBox="0 0 197 196"
    fill="none"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.path
      d="M98.5 0.5C152.626 0.5 196.5 44.1546 196.5 98C196.5 151.845 152.626 195.5 98.5 195.5C44.3737 195.5 0.5 151.845 0.5 98C0.5 44.1546 44.3737 0.5 98.5 0.5Z"
      stroke="url(#paint0_linear_733_6436)"
      strokeOpacity="0.55"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
    />
    <defs>
      <linearGradient id="paint0_linear_733_6436" x1="98.5" y1="0" x2="98.5" y2="196"
        gradientUnits="userSpaceOnUse">
        <stop stopColor="#8D8D8D" />
        <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
      </linearGradient>
    </defs>
  </motion.svg>

  {/* --- HEADING TEXT --- */}
  <div className="projects-heading-text">
    <motion.h2
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      Recent <br className="mobile" /> Case Studies
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      viewport={{ once: true }}
    >
      Creating stunning, user-centric websites <br className="mobile" /> that
      inspire and <br className="desktop" /> engage.
    </motion.p>
  </div>
</div>


      <div className="projects-container">
        {projectData.map((p, i) => (
          <Link
            key={i}
            to={p.link}
            className={`projects-set fade-item ${visible ? "visible" : ""} ${
              p.hideOnMobile ? "desktop" : ""
            }`}
            style={delay(i)}
          >
            <div className="projects-set-img">
              <img src={p.img} className="main-img" />
              <img src={p.glow} className="glow-img" />
            </div>

            <div className="projects-set-text">
              <p>{p.tag}</p>
              <section>
                <h3>{p.title}</h3>
                <sub>{p.sub}</sub>
              </section>
            </div>
          </Link>
        ))}
      </div>

      <div className={`view-more-wrapper fade-item ${visible ? "visible" : ""}`}
           style={{ transitionDelay: "1200ms" }}>
        <Link to="/projects" className="case-btn">View More</Link>
      </div>
    </div>
  );
}

export default Projects;
