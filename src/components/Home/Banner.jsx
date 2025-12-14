import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import BackgroundLines from "../../asset/Home/Banner/BackgrounLines.webp";
import OpenToWork from "../OpenToWork";
import MobileBackgroundLines from "../../asset/Home/Banner/MobileBackgroundLines.webp";
import ArrowForward from "../../asset/Home/Banner/arrow-forward.svg";
import BannerBackground from "../../asset/Home/Banner/BannerBackground.webp";

export default function Banner() {
  // Parent stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  // Child reveal animation
  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="home-banner"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* <img className="home-banner-background-stars" src={BackgroundStars} alt="bg" /> */}
      <img className="home-banner-background desktop" src={BackgroundLines} alt="bg" />
      <img className="home-banner-background mobile" src={MobileBackgroundLines} alt="bg" />
      <img className="blur-background" src={BannerBackground} alt="blur" />

      <div className="home-banner-container">
        {/* #1 Open To Work Badge Animation */}
        <motion.div variants={item}>
          <OpenToWork />
        </motion.div>

        <div className="home-banner-container-main">
          <section>
            {/* #2 Heading Animation */}
            <motion.div className="home-banner-scroll-text" variants={item}>
              <h1>
                Where Research & Design <br /> Create Impact.
              </h1>
            </motion.div>

            {/* #3 Description Animation */}
            <motion.p className="footer-tagline" variants={item}>
              UX/UI & Visual Designer focused on turning complex
              challenges into simple, impactful experiences.
            </motion.p>
          </section>

          {/* #4 Button Animation */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="projects" className="home-case-btn">
              View Case Studies <img src={ArrowForward} alt="arrow" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
