/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import OtherProjectsBackground from "../../asset/Home/OtherProjects/OtherProjectHeaderBackground.webp";
import YouTube from "../../asset/Projects/ProjectsList/YouTube.webp";
import YouTubeBackgroundGlow from "../../asset/Projects/ProjectsList/YouTube Background Glow.webp";
import { Link } from "react-router-dom";
import CanvasCode from "../../asset/Home/Projects/Canvas & Code.webp";
import CanvasCodeBackgroundGlow from "../../asset/Home/Projects/Canvas & Code Background Glow.webp";
import OlliePets from "../../asset/Home/Projects/Ollie Pets.webp";
import OlliePetsBackgroundGlow from "../../asset/Home/Projects/Ollie Pets Background Glow.webp";
import OtherProjectsMobileBackground from "../../asset/Home/OtherProjects/OtherProjectsobileBackground.webp";
import ArrowFwd from "../../asset/Home/OtherProjects/arrow_forward.webp";
import ArrowBwd from "../../asset/Home/OtherProjects/arrow_backward.webp";
import RentMyRide from "../../asset/Projects/ProjectsList/Rent My Ride.webp";
import RentMyRideBackgroundGlow from "../../asset/Projects/ProjectsList/Rent My Ride Background Glow.webp";
import WhatsApp from "../../asset/Projects/ProjectsList/WhatsApp.webp";
import WhatsAppBackgroundGlow from "../../asset/Projects/ProjectsList/WhatsApp Background Glow.webp";
import UrbanMonkey from "../../asset/Projects/ProjectsList/Urban Monkey.webp";
import UrbanMonkeyBackgroundGlow from "../../asset/Projects/ProjectsList/Urban Monkey Background Glow.webp";
import Coolzee from "../../asset/Projects/ProjectsList/Coolzee.webp";
import CoolzeeBackgroundGlow from "../../asset/Projects/ProjectsList/Coolzee Background Glow.webp";

const OtherProjects = ({ currentProject }) => {

  const projects = [
  {
    id: "rentmyride",
    link: "/projects/rent_my_ride",
    title: "Rent My Ride",
    year: "2023",
    type: "Mobile Application",
    img: RentMyRide,
    glow: RentMyRideBackgroundGlow,
  },
  {
    id: "canvasandcode",
    link: "/projects/canvas_and_code",
    title: "Canvas & Code",
    year: "2023",
    type: "Website Design",
    img: CanvasCode,
    glow: CanvasCodeBackgroundGlow,
  },
  {
    id: "olliepets",
    link: "/projects/ollie_pets",
    title: "Ollie Pets",
    year: "2023",
    type: "Website Design",
    img: OlliePets,
    glow: OlliePetsBackgroundGlow,
  },
  {
    id: "youtube",
    link: "/projects/youtube",
    title: "YouTube",
    year: "2023",
    type: "Mobile Application",
    img: YouTube,
    glow: YouTubeBackgroundGlow,
  },
  {
    id: "whatsapp",
    link: "/projects/whatsApp",
    title: "WhatsApp",
    year: "2023",
    type: "Mobile Application",
    img: WhatsApp,
    glow: WhatsAppBackgroundGlow,
  },
  {
    id: "urbanmonkey",
    link: "/projects/urban_monkey",
    title: "Urban Monkey",
    year: "2023",
    type: "Website Design",
    img: UrbanMonkey,
    glow: UrbanMonkeyBackgroundGlow,
  },
  {
    id: "coolzee",
    link: "/projects/coolzee",
    title: "Coolzee",
    year: "2023",
    type: "Mobile Application",
    img: Coolzee,
    glow: CoolzeeBackgroundGlow,
  },
  ];
  
  const filteredProjects = projects.filter(
  (project) => project.id !== currentProject
);

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } };
  const item = { hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } } };

  const scroll = (amount) => {
    const el = document.getElementById("carousel");
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="other-projects">
      {/* <img className="home-banner-background-stars" src={SkillStarBackground} alt="Background" /> */}

      <div className="projects-heading">
        <img className="other-projects-heading-background desktop" src={OtherProjectsBackground} alt="" />
        <img className="other-projects-heading-background mobile" src={OtherProjectsMobileBackground} alt="" />

        <motion.div className="other-projects-heading-text" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
          <motion.h2 variants={item}>Other Projects</motion.h2>
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
  );
};

export default OtherProjects;
