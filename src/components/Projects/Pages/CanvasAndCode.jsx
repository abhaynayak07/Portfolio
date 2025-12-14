/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import BackgroundStars from "../../Backgroundsars";
import icon from "../../../asset/Projects/Page/Canvas And Code/icon.webp";
import banner from "../../../asset/Projects/Page/Canvas And Code/banner.webp";
import mobilebanner from "../../../asset/Projects/Page/Canvas And Code/mobile banner.webp";
import toolused from "../../../asset/Projects/Page/Canvas And Code/tool used.webp";
import overviewimg from "../../../asset/Projects/Page/Canvas And Code/overview img.webp";
import secondbanner from "../../../asset/Projects/Page/Canvas And Code/second banner.webp";
import mobilesecondbanner from "../../../asset/Projects/Page/Canvas And Code/mobile second banner.webp";
import thirdbanner1 from "../../../asset/Projects/Page/Canvas And Code/third banner 1.webp";
import mobilethirdbanner1 from "../../../asset/Projects/Page/Canvas And Code/mobile third banner 1.webp";
import thirdbanner2 from "../../../asset/Projects/Page/Canvas And Code/third banner 2.webp";
import OtherProjects from "../../Home/OtherProjects";

function CanvasAndCode() {
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
  
    // Animation variants
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
                  boxShadow: " 0px 2px 45px 0px rgba(234, 92, 6, 0.45)",
                }}
                alt="Canvas & Code Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Canvas & Code</h2>
              <div style={{display: "flex", gap: "5px"}}>
                <p>Website Design</p>
                <p>2024</p>
              </div>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Canvas & Code Banner" />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Canvas & Code Banner"
            />
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
                                                  Canvas and Code is a design and development agency focused on creating innovative digital solutions. The studio crafts visually compelling and technically strong digital experiences for brands. It offers tailored web design and development services aligned with client goals. Each project brings ideas to life with clarity, creativity, and precision.
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
                                                <h4>October 2024</h4>
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
      <div className="project-second-banner">
        <img src={thirdbanner2} />
      </div>
      
      </motion.div>
      <OtherProjects currentProject="canvasandcode" />
    </>
  );
}

export default CanvasAndCode;
