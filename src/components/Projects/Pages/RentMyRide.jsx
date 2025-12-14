/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import icon from "../../../asset/Projects/Page/Rent My Ride/icon.webp";
import banner from "../../../asset/Projects/Page/Rent My Ride/banner.webp";
import mobilebanner from "../../../asset/Projects/Page/Rent My Ride/mobile banner.webp";
import toolused from "../../../asset/Projects/Page/Rent My Ride/tool used.webp";
import overviewimg from "../../../asset/Projects/Page/Rent My Ride/overview img.webp";
import bento12 from "../../../asset/Projects/Page/Rent My Ride/bento 1.2.webp";
import bento11 from "../../../asset/Projects/Page/Rent My Ride/bento 1.1.webp";
import bento13 from "../../../asset/Projects/Page/Rent My Ride/bento 1.3.webp";
import bento14 from "../../../asset/Projects/Page/Rent My Ride/bento 1.4.webp";
import bento21 from "../../../asset/Projects/Page/Rent My Ride/bento 2.1.webp";
import bento22 from "../../../asset/Projects/Page/Rent My Ride/bento 2.2.webp";
import bento23 from "../../../asset/Projects/Page/Rent My Ride/bento 2.3.webp";
import bento24 from "../../../asset/Projects/Page/Rent My Ride/bento 2.4.webp";
import bento25 from "../../../asset/Projects/Page/Rent My Ride/bento 2.5.webp";
import BackgroundStars from "../../Backgroundsars"
import OtherProjects from "../..//Home/OtherProjects";

function RentMyRide() {
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
                  boxShadow: " 0px 2px 45px 0px rgba(255, 89, 36, 0.45)",
                }}
                alt="Rent My Ride Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Rent My Ride</h2>
              <div style={{display: "flex", gap: "5px"}}>
                <p>Mobile Application</p>
                <p>2023</p>
              </div>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Rent My Ride Banner" />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Rent My Ride Banner"
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
                                                  Rent My Ride is a reliable and user-friendly vehicle rental app serving users across India nationwide. It enables easy access to rental vehicles with a smooth and hassle-free booking experience. The app prioritizes timely assistance during breakdowns or unexpected issues on the road. This ensures a comfortable, safe, and worry-free journey for customers.
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
                                                <h4>October 2023</h4>
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
          <img src={bento13} />
          <img src={bento14} />
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
          <img src={bento23} />
          <img src={bento24} />
          <img src={bento25} />
        </div>
      </div>
      </motion.div>
      <OtherProjects currentProject="rentmyride" />
      </>
  );
}

export default RentMyRide;
