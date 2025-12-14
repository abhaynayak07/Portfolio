import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ArrowForward from "../../asset/Home/OtherProjects/arrow_forward.webp";
import ArrowBackward from "../../asset/Home/OtherProjects/arrow_backward.webp";
import LoopBackground from "../../asset/Home/Loop/LoopBackground.webp";
import Kite from "../../asset/Home/Marquee/HomeLoop/Kite.webp";
import Arogya from "../../asset/Home/Marquee/HomeLoop/ArogyaGuru.webp";
import Canvas from "../../asset/Home/Marquee/HomeLoop/CanvasAndCode.webp";
import Coolze from "../../asset/Home/Marquee/HomeLoop/Coolze.webp";
import Classroom from "../../asset/Home/Marquee/HomeLoop/GoogleClassroom.webp";
import OliePets from "../../asset/Home/Marquee/HomeLoop/OliePets.webp";
import Qeasy from "../../asset/Home/Marquee/HomeLoop/Qeasy.webp";
import SaveLife from "../../asset/Home/Marquee/HomeLoop/Save.webp";
import SchoolMate from "../../asset/Home/Marquee/HomeLoop/ScoolMate.webp";
import Urban from "../../asset/Home/Marquee/HomeLoop/UrbanMonkey.webp";
import Whatsapp from "../../asset/Home/Marquee/HomeLoop/Whatsapp.webp";
import Youtube from "../../asset/Home/Marquee/HomeLoop/Youtube.webp";

const Loop = () => {
  const slides = [
    { title: "Save Life", subtitle: "Mobile Application, 2025", img: SaveLife },
    { title: "School Mate", subtitle: "Mobile Application, 2025", img: SchoolMate },
    { title: "Q Easy", subtitle: "Mobile Application, 2025", img: Qeasy },
    { title: "Arogya Guru", subtitle: "Mobile Application, 2025", img: Arogya },
    { title: "Kite By Zeroda", subtitle: "Mobile Application, 2023", img: Kite },
    { title: "Classroom", subtitle: "Mobile Application, 2023", img: Classroom },
    { title: "Whatsapp", subtitle: "Mobile Application, 2023", img: Whatsapp },
    { title: "Youtube", subtitle: "Mobile Application, 2023", img: Youtube },
    { title: "Coolze", subtitle: "Mobile Application, 2023", img: Coolze },
    { title: "Urban Monkey", subtitle: "Website Design, 2023", img: Urban },
    { title: "Canvas & Code", subtitle: "Website Design, 2024", img: Canvas },
    { title: "Ollie pets", subtitle: "Website Design, 2023", img: OliePets },
  ];

  const [[index, direction], setPage] = React.useState([0, 0]);

  const nextSlide = () => {
    setPage(([prevIndex]) => [
      (prevIndex + 1) % slides.length,
      1,
    ]);
  };

  const prevSlide = () => {
    setPage(([prevIndex]) => [
      (prevIndex - 1 + slides.length) % slides.length,
      -1,
    ]);
  };

  // === Scroll animation setup ===
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.4], [40, 0]);

  // Carousel directional variants (unchanged)
  const imageVariants = {
    enter: (dir) => ({
      x: dir === 1 ? 150 : -150,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir === 1 ? -150 : 150,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.45, ease: "easeIn" },
    }),
  };

  return (
    <section ref={sectionRef} className="loop-scroll-container">
      {/* Sticky Background */}
      <motion.img
        src={LoopBackground}
        className="loop-bg-img"
        alt="Background"
        style={{ opacity: bgOpacity }}
      />

      {/* Sticky Content */}
      <div className="loop-sticky-wrapper">
        <motion.div
          className="loop-inner-content"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="top-row">
            <h1 className="loop-heading">
              Where Vision Meets <br />
              Action & Ideas <br />
              Take Shape
            </h1>

            <p className="loop-caption">
              Every project reflects research, creativity, and precision,
              turning ideas into products that truly make an impact.
            </p>
          </div>

          <div className="carousel-section">
            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={index}
                  src={slides[index].img}
                  alt="slide"
                  className="carousel-img"
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                />
              </AnimatePresence>
            </div>

            <div className="title-row">
              <button onClick={prevSlide} className="arrow-btn small-btn">
                <img src={ArrowBackward} alt="" />
              </button>

              <div className="title-block">
                <h3 className="slide-title">{slides[index].title}</h3>
                <p className="slide-sub">{slides[index].subtitle}</p>
              </div>

              <button onClick={nextSlide} className="arrow-btn small-btn">
                <img src={ArrowForward} alt="" />
              </button>
            </div>

            <p className="scroll-text">
              Keep sliding.
              <br />
              You never know <br className="desktop"/> what you'll discover next.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Loop;
