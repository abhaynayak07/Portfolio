/* eslint-disable no-unused-vars */
import React from "react";
import Trailer from "../../asset/Home/Story/Teaser.mp4";
import Img1 from "../../asset/Home/Story/Img1.webp";
import Img2 from "../../asset/Home/Story/Img2.webp";
import Img3 from "../../asset/Home/Story/Img3.webp";
import Img4 from "../../asset/Home/Story/Img4.webp";
import Img1Mobile from "../../asset/Home/Story/Img1 Mobile.webp";
import Img2Mobile from "../../asset/Home/Story/Img2 Mobile.webp";
import Img3Mobile from "../../asset/Home/Story/Img3 Mobile.webp";
import Img4Mobile from "../../asset/Home/Story/Img4 Mobile.webp";
import { motion } from "framer-motion";

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

function Story() {
  return (
    <div className="home-story">
      <motion.div
        className="heading"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.h2
           variants={item}
        >
          Sacred Rituals,
          <br /> Enduring Stories
        </motion.h2>

        <motion.p
           variants={item}
        >
          The Heartbeat of Culture, Passed Down <br className="mobile" /> Through
          Generations
        </motion.p>
      </motion.div>
      <div className="home-story-container">
        <div className="home-story-video">
          <video src={Trailer} muted autoPlay loop playsInline />
          <section>
            <h3>Aarbhata</h3>
            <p>A Film by Abhay Nayak</p>
          </section>
        </div>
        <p className="home-story-para">
          ‘Aarbhata' is a short documentary about a native tiger dance,
          capturing deep faith and belief behind the sacred ritual where
          participants symbolically embody tigers through body painting for a
          dedicated two-day worship honoring Lord Shri Krishna in Udupi
          (Karnataka, India)
        </p>
        <div className="home-story-img">
          <section>
            <img src={Img1} className="desktop" />
            <img src={Img2} className="desktop" />
            <img src={Img1Mobile} className="mobile" />
            <img src={Img2Mobile} className="mobile" />
          </section>
          <section>
            <img src={Img3} className="desktop" />
            <img src={Img4} className="desktop" />
            <img src={Img3Mobile} className="mobile" />
            <img src={Img4Mobile} className="mobile" />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Story;
