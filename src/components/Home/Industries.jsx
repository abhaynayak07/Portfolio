/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import "./Industrees.css";
import { motion } from "framer-motion";

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


const Industries = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const industries = [
    "SaaS Dashboards", "E-Commerce", "Food & Delivery", "Hospitality",
    "E-Learning", "Fitness & Lifestyle", "Health Care", "Waste Management",
    "Finance", "Entertainment", "Travel & Tourism", "Bookings & Payments",
    "Automobiles", "Agriculture & Farm", "Industrial Tools",
  ];

  return (
    <div
      ref={sectionRef}
      className={`industries-wrapper fade-section ${isVisible ? "visible" : ""}`}
    >
      {/* <img className="industries-stars-bg" src={BackgroundStars} alt="Background" /> */}

      <motion.div
        variants={container}
        initial="hidden"
              animate={isVisible ? "show" : "hidden"}
              viewport={{ once: false }} 
      >
        <motion.h2 className="industries-title fade-delay" variants={item}>
          Industries & Projects
        </motion.h2>

        <motion.h2
          className="industries-title fade-delay"
          style={{ marginTop: 4 }}
          variants={item}
        >
          I've Shaped
        </motion.h2>

        <motion.p className="industries-subtext fade-delay" variants={item}>
          A mix of UX strategy, UI craft, and visual design expertise shaping every
          project.
        </motion.p>
      </motion.div>

      <div
        className={`industries-list fade-delay ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "300ms" }}
      >
        <div className="white-blur">
          <div className="blur-ellips"></div>
        </div>

        {industries.map((item, idx) => (
          <div
            key={idx}
            className={`industry-item fade-delay ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${400 + idx * 40}ms` }}
          >
            <div className="top-orange-blur"></div>
            {item}
            <div className="bottom-purple-blur"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
