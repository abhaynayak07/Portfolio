/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import BackgroundStars from "../../Backgroundsars";
import icon from "../../../asset/Projects/Page/Ollie Pets/icon.webp";
import banner from "../../../asset/Projects/Page/Ollie Pets/banner.webp";
import mobilebanner from "../../../asset/Projects/Page/Ollie Pets/mobile banner.webp";
import toolused from "../../../asset/Projects/Page/Ollie Pets/tool used.webp";
import overviewimg from "../../../asset/Projects/Page/Ollie Pets/overview img.webp";
import secondbanner from "../../../asset/Projects/Page/Ollie Pets/second banner.webp";
import mobilesecondbanner from "../../../asset/Projects/Page/Ollie Pets/mobile second banner.webp";
import thirdbanner1 from "../../../asset/Projects/Page/Ollie Pets/third banner 1.webp";
import mobilethirdbanner1 from "../../../asset/Projects/Page/Ollie Pets/mobile third banner 1.webp";
import OllieFullPage from "../../../asset/Projects/Page/Ollie Pets/OllieFullPage.webp"
import thirdbanner2 from "../../../asset/Projects/Page/Ollie Pets/third banner 2.webp";
import OllieBanner from "../../../asset/Projects/Page/Ollie Pets/Ollie Banner.webp"
import OtherProjects from "../../Home/OtherProjects";

function OlliePets() {
  
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
                  boxShadow: " 0px 2px 45px 0px rgba(166, 153, 145, 0.65)",
                }}
                alt="Ollie Pets Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Ollie Pets</h2>
              <div style={{display: "flex", gap: "5px"}}>
                <p>Website Design</p>
                <p>2023</p>
              </div>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Ollie Pets Banner" />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Ollie Pets Banner"
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
                                                  Ollie Pets is a pet wellness brand that provides freshly cooked, human-grade food for dogs. Each meal is customized based on individual nutritional needs and health requirements. The brand focuses on quality, convenience, and long-term pet health. Personalized meal plans are delivered directly to pet owners through a subscription model.
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
                                                <h4>July 2023</h4>
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
      <div className="project-single-banner">
          <img src={OllieFullPage} />
          <img src={OllieBanner} />
      </div>
      
      </motion.div>
      <OtherProjects currentProject="olliepets" />
      </>
  );
}

export default OlliePets;
