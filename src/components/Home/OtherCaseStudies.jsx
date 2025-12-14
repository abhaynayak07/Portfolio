/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import OtherProjectsBackground from "../../asset/Home/OtherProjects/OtherProjectHeaderBackground.webp";
import { Link } from "react-router-dom";
import SchoolMate from "../../asset/Projects/ProjectsList/School Mate.webp";
import SchoolMateGlow from "../../asset/Projects/ProjectsList/School Mate Background Glow.webp";
import KITE from "../../asset/Projects/ProjectsList/KITE.webp";
import KITEBackgroundGlow from "../../asset/Projects/ProjectsList/KITE Background Glow.webp";
import AarogyaGuru from "../../asset/Projects/ProjectsList/Aarogya Guru.webp";
import AarogyaGuruBackgroundGlow from "../../asset/Projects/ProjectsList/Aarogya Guru Background Glow.webp";
import SaveLife from "../../asset/Projects/ProjectsList/Save Life.webp";
import SaveLifeBackgroundGlow from "../../asset/Projects/ProjectsList/Save Life Background Glow.webp";
import QEasy from "../../asset/Home/Projects/Q Easy.webp";
import QEasyGlow from "../../asset/Home/Projects/Q Easy Background Glow.webp";
import GoogleClassroom from "../../asset/Home/Projects/Google Classroom.webp";
import GoogleClassroomBackgroundGlow from "../../asset/Home/Projects/Google Classroom Background Glow.webp";
import OtherProjectsMobileBackground from "../../asset/Home/OtherProjects/OtherProjectsobileBackground.webp";
import ArrowFwd from "../../asset/Home/OtherProjects/arrow_forward.webp";
import ArrowBwd from "../../asset/Home/OtherProjects/arrow_backward.webp";
const OtherCaseStudies = ({ currentProject }) => {
    const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } };
    const item = { hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } } };

    const scroll = (amount) => {
        const el = document.getElementById("carousel");
        el.scrollBy({ left: amount, behavior: "smooth" });
    };

    const projects = [
    {
        id: "savelife",
        link: "/projects/save_life",
        title: "Save Life",
        year: "2025",
        type: "Mobile Application",
        img: SaveLife,
        glow: SaveLifeBackgroundGlow,
    },
    {
        id: "schoolmate",
        link: "/projects/school_mate",
        title: "School Mate",
        year: "2025",
        type: "Mobile Application",
        img: SchoolMate,
        glow: SchoolMateGlow,
    },
    {
        id: "qeasy",
        link: "/projects/q_easy",
        title: "Q Easy",
        year: "2025",
        type: "Mobile Application",
        img: QEasy,
        glow: QEasyGlow,
    },
    {
        id: "googleclassroom",
        link: "/projects/google_classroom",
        title: "Google Classroom",
        year: "2023",
        type: "Mobile Application",
        img: GoogleClassroom,
        glow: GoogleClassroomBackgroundGlow,
    },
    {
        id: "aarogyaguru",
        link: "/projects/aarogya_guru",
        title: "Aarogya Guru",
        year: "2023",
        type: "Mobile Application",
        img: AarogyaGuru,
        glow: AarogyaGuruBackgroundGlow,
    },
    {
        id: "kite",
        link: "/projects/kite_by_zerodha",
        title: "Kite by Zerodha",
        year: "2023",
        type: "Mobile Application",
        img: KITE,
        glow: KITEBackgroundGlow,
    },
    ];

    const filteredProjects = projects.filter(
        (project) => project.id !== currentProject
    );

  return (
    <div className="other-projects">
      {/* <img className="home-banner-background-stars" src={SkillStarBackground} alt="Background" /> */}

      <div className="projects-heading">
        <img className="other-projects-heading-background desktop" src={OtherProjectsBackground} alt="" />
        <img className="other-projects-heading-background mobile" src={OtherProjectsMobileBackground} alt="" />

        <motion.div className="other-projects-heading-text" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
          <motion.h2 variants={item}>Other Case Studies</motion.h2>
          <motion.p variants={item}>Additional work highlighting my range across <br className="mobile" /> UX, UI, and visual design.</motion.p>
        </motion.div>
      </div>

      <div className="showcase-carousel-wrapper">
        <button className="carousel-btn prev" onClick={() => scroll(-400)}><img src={ArrowBwd} alt="Previous" /></button>
        <button className="carousel-btn next" onClick={() => scroll(400)}><img src={ArrowFwd} alt="Next" /></button>

        <div className="showcase-carousel" id="carousel">
          <div style={{ minWidth: "400px" }}></div>

          {filteredProjects.map((project) => (
            <Link className="showcase-card" to={project.link} key={project.id}>
                <div className="showcase-img">
                <img src={project.img} className="main-img" />
                <img src={project.glow} className="glow-img" />
                </div>

                <div className="showcase-info">
                <p>{project.type}</p>
                <section>
                    <h3>{project.title}</h3>
                    <sub>{project.year}</sub>
                </section>
                </div>
            </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default OtherCaseStudies
