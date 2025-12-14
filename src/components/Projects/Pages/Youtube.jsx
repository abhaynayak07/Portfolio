/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import BackgroundStars from "../../Backgroundsars";
import icon from "../../../asset/Projects/Page/Youtube/icon.webp";
import banner from "../../../asset/Projects/Page/Youtube/banner.webp";
import mobilebanner from "../../../asset/Projects/Page/Youtube/mobile banner.webp";
import toolused from "../../../asset/Projects/Page/Youtube/tool used.webp";
import overviewimg from "../../../asset/Projects/Page/Youtube/overview img.webp";
import secondbanner from "../../../asset/Projects/Page/Youtube/second banner.webp";
import mobilesecondbanner from "../../../asset/Projects/Page/Youtube/mobile second banner.webp";
import bento11 from "../../../asset/Projects/Page/Youtube/bento 1.1.webp";
import bento12 from "../../../asset/Projects/Page/Youtube/bento 1.2.webp";
import bento21 from "../../../asset/Projects/Page/Youtube/bento 2.1.webp";
import bento22 from "../../../asset/Projects/Page/Youtube/bento 2.2.webp";
import OtherProjects from "../../Home/OtherProjects";

function Youtube() {
  const roles = [
      "UX Research",
      "UX Flow",
      "Wireframing",
      "Rapid Prototyping",
      "Design Thinking",
      "Design Systems",
      "components",
      "Interface Design",
      "Visual Design",
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.25 },
      },
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" },
      },
    };
  
    const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      },
      exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
      }
  };

  return (
    <>
    <motion.div 
         className="pages-container"
         initial="hidden"
         animate="show"
         variants={containerVariants}
       >
         <BackgroundStars />
         <motion.div className="about-project" variants={itemVariants}>
           <motion.div className="project-header" variants={itemVariants}>
          <div className="project-header-text-and-icon">
            <div className="project-header-icon">
              <img
                src={icon}
                style={{
                  boxShadow: "0px 2px 45px 0px rgba(255, 0, 0, 0.45)",
                }}
                alt="Youtube Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>YouTube</h2>
              <div style={{display: "flex", gap: "5px"}}>
                <p>Mobile Application</p>
                <p>2023</p>
              </div>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Youtube Banner" />
            <img src={mobilebanner} className="mobile" alt="Youtube Banner" />
          </div>
        </motion.div>
        <motion.div className="project-sections-container" variants={itemVariants}>
                          <div className="project-overview">
                                          
                                
                                            <AnimatePresence mode="wait">
                                              <motion.div
                                                className="project-overview-content"
                                                variants={contentVariants}
                                                initial="hidden"
                                                animate="show"
                                                exit="exit"
                                              >
                                                  <motion.div 
                                                    className="overview-content"
                                                    variants={containerVariants}
                                                    initial="hidden"
                                                    animate="show"
                                                  >
                                                    <motion.div className="project-overview-container" variants={itemVariants}>
                                                      <div className="project-overview-set">
                                                        <h3>PROJECT OVERVIEW</h3>
                                                        <p>
                                                          YouTube is a global video-sharing platform that allows users to watch, upload, and share content across various genres. It offers features like subscriptions, recommendations, live streaming, and monetization for creators. With its user-friendly interface and vast content library, YouTube serves as a primary hub for entertainment, education, and information.
                                                        </p>
                                                      </div>
                                                      <div className="project-overview-set">
                                                        <h3>MY ROLE</h3>
                                                        <div className="role-list-container">
                                                          {roles.map((item, idx) => (
                                                            <motion.div 
                                                              key={idx} 
                                                              className="industry-item"
                                                              variants={itemVariants}
                                                            >
                                                              <div className="top-orange-blur"></div>
                                                              {item}
                                                              <div className="bottom-purple-blur"></div>
                                                            </motion.div>
                                                          ))}
                                                        </div>
                                                      </div>
                                                    </motion.div>
                                                    <motion.div className="project-overview-container" variants={itemVariants}>
                                                      <div className="project-overview-set">
                                                        <h3>TOOL USED</h3>
                                                        <div className="tool-used">
                                                          <img src={toolused} />
                                                          <section>
                                                            <h4>Figma</h4>
                                                            <p>Design Tool</p>
                                                          </section>
                                                        </div>
                                                      </div>
                                                      <div className="project-overview-set">
                                                        <h3>TIMELINE</h3>
                                                        <h4>September 2023</h4>
                                                      </div>
                                                      <div className="project-overview-img">
                                                        <img src={overviewimg} />
                                                      </div>
                                                    </motion.div>
                                                  </motion.div>
                                
                                              </motion.div>
                                            </AnimatePresence>
                                          </div>
                        </motion.div>
      </motion.div>
      <div className="project-bento">
        <div className="project-bento-container">
          <img src={bento11} />
          <img src={bento12} />
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
        </div>
      </div>
      
      </motion.div>
      <OtherProjects currentProject="youtube" />
      </>
  );
}

export default Youtube;
