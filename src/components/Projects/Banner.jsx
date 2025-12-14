import BackgroundLines from "../../asset/Home/Banner/BackgrounLines.webp";
import MobileBackgroundLines from "../../asset/Home/Banner/MobileBackgroundLines.webp";
import BackgroundStars from "../../asset/Home/Banner/BackgroundStars.webp";
import OpenToWork from "../OpenToWork";
import BannerBackground from "../../asset/Home/Banner/BannerBackground.webp";
import ArrowForward from "../../asset/Home/Banner/arrow-forward.svg";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Banner() {
  // Parent stagger container
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  // Child animation (fade + move up + blur)
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
      {/* <img className="home-banner-background-stars" src={BackgroundStars} alt="Background" /> */}
      <img className="home-banner-background desktop" src={BackgroundLines} alt="Background" />
      <img className="home-banner-background-mob mobile" src={MobileBackgroundLines} alt="Background" />
      <img className="blur-background" src={BannerBackground} alt="Banner Blur Background" />

      <div className="home-banner-container">

        {/* Badge Animation */}
        <motion.div variants={item}>
          <OpenToWork />
        </motion.div>

        <div className="home-banner-container-main">
          <section>

            {/* Heading Animation */}
            <motion.div className="home-banner-scroll-text" variants={item}>
              <h1>
                Experience the Impact of <br /> Thoughtful Design.
              </h1>
            </motion.div>

            {/* Description Animation */}
            <motion.p className="footer-tagline" variants={item}>
              Work grounded in insight, guided by process, and elevated<br className="desktop" />through design.
            </motion.p>
          </section>

          {/* Button Animation */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="" className="home-case-btn hide">
              view case studies <img src={ArrowForward} alt="arrow" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
