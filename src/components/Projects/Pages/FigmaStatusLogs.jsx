/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../../../asset/Projects/Page/FigmaStatusLogs/icon.webp";
import banner from "../../../asset/Projects/Page/FigmaStatusLogs/banner.webp";
import mobilebanner from "../../../asset/Projects/Page/FigmaStatusLogs/mobileBanner.webp";
import toolused from "../../../asset/Projects/Page/Save Life/tool used.webp";
import overviewimg from "../../../asset/Projects/Page/FigmaStatusLogs/overviewImg.webp";
import overviewImage1 from "../../../asset/Projects/Page/FigmaStatusLogs/overviewImage1.webp";
import overviewImage2 from "../../../asset/Projects/Page/FigmaStatusLogs/overviewImage2.webp";
import overviewImage3 from "../../../asset/Projects/Page/FigmaStatusLogs/overviewImage3.webp";
import overviewImage4 from "../../../asset/Projects/Page/FigmaStatusLogs/overviewImage4.webp";
import overviewImage5 from "../../../asset/Projects/Page/FigmaStatusLogs/overviewImage5.webp";

import BackgroundStars from "../../Backgroundsars"
import OtherCaseStudies from "../../Home/OtherCaseStudies";
import Rocket from "../../../asset/Projects/Page/Save Life/Rocket-Icon.webp"

function FigmaStatusLogs() {
  const [activeTab, setActiveTab] = useState(0);

  const roles = [
    "UX Research",
    "UX Flow",
    "Journey Mapping",
    "Wireframing",
    "Rapid Prototype",
    "Design Thinking",
    "Design Systems",
    "Usability Test",
    "User Centric",
    "System Thinking",
    "Interaction Design",
    "Wireframes",
  ];

  const tabs = [
    "OVERVIEW",
    "RESEARCH & DATA",
    "USER FRICTIONS",
    "ROADMAP",
    "METRICS & OUTCOMES",
    "KEY TAKEAWAYS",
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
                  boxShadow: "0px 2px 45px 0px #0089E4",
                }}
                alt="Save Life Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Figma Status & Logs</h2>
              <div style={{display: "flex", gap: "5px"}}>
                <p>Website Design</p>
                <p>2026</p>
              </div>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Save Life Banner" />
            <img src={mobilebanner} className="mobile" alt="Save Life Banner" />
          </div>
        </motion.div>
        
        <motion.div className="project-sections-container" variants={itemVariants}>
          <div className="project-overview">
            <div className="tab-line"></div>
            <div className="project-tabs">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`tab-item ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {activeTab === index && (
                    <motion.span 
                      className="tab-dot"
                      layoutId="tab-dot"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  {tab}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="project-overview-content"
                variants={contentVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {activeTab === 0 && (
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
                            Figma is a drawing tool. It has never been a communication tool. The layer between what a
                            designer intended and what a developer builds simply does not exist inside it and every
                            team in the world is duct-taping Slack, Confluence, Jira, Notion and WhatsApp chats together to fill a gap that
                            should not exist in the first place.
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
                        <h4>February 2026 </h4>
                      </div>
                      <div className="project-overview-img">
                        <img src={overviewimg} />
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 1 && (
                  <motion.div 
                    className="research-data-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {/* LEFT GRID SECTION */}
                    <motion.div className="research-grid" variants={itemVariants}>
                      {/* CARD 1 */}
                      <div className="project-overview-set">
                        <h3>DESIGN–DEVELOPMENT HANDOFF DATA</h3>
                        <div className="bar-group">
                          {[
                            { width: "52%", label: "52%", text: "Hard to identify build-ready frames quickly" },
                            { width: "31%", label: "31%", text: "Context spread across multiple external tools" },
                            { width: "17%", label: "17%", text: "Behaviour unclear beyond static visual screens" }
                          ].map((bar, idx) => (
                            <motion.div 
                              key={idx} 
                              className="bar"
                              variants={itemVariants}
                            >
                              <div className="bar-fill">
                                <motion.div 
                                  className="fill" 
                                  initial={{ width: 0 }}
                                  animate={{ width: bar.width }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                />
                              </div>
                              <div className="bar-label-group">
                                <span className="bar-label">{bar.label}</span>
                                <p>{bar.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CARD 2 */}
                      <div className="project-overview-set">
                        <h3>USER BEHAVIOURS IDENTIFIED </h3>
                        <div className="insight-list">
                          {[
                            { title: "Status Guessing", text: "Developers infer readiness from frame names" },
                            { title: "Intent Loss", text: "Design reasoning disappears after handoff completion" },
                            { title: "Spec Fragmentation", text: "Behaviour and data live outside figma files" },
                            { title: "Late Discovery", text: "Edge cases surface during QA not earlier" }
                          ].map((insight, idx) => (
                            <motion.div 
                              key={idx} 
                              className="insight-card"
                              variants={itemVariants}
                            >
                              <h4>{insight.title}</h4>
                              <p>{insight.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* RIGHT GRID SECTION */}
                    <motion.div className="research-grid" variants={itemVariants}>
                      {/* CARD 3 */}
                      <div className="project-overview-set">
                        <h3>ROLE DEPENDENCY</h3>
                        <div className="bar-group">
                          {[
                            { width: "41%", label: "41%", text: "Slack messages for design clarification" },
                            { width: "27%", label: "27%", text: "Calls to designers during dev" },
                            { width: "18%", label: "18%", text: "Personal notes kept outside Figma" },
                            { width: "14%", label: "14%", text: "Comments revisited after sprint" }
                          ].map((bar, idx) => (
                            <motion.div 
                              key={idx} 
                              className="bar"
                              variants={itemVariants}
                            >
                              <div className="bar-fill">
                                <motion.div 
                                  className="fill" 
                                  initial={{ width: 0 }}
                                  animate={{ width: bar.width }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                />
                              </div>
                              <div className="bar-label-group">
                                <span className="bar-label">{bar.label}</span>
                                <p>{bar.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CARD 4 */}  
                      <div className="project-overview-set">
                        <h3>OPERATIONAL GAPS</h3>
                        <div className="bar-group">
                          {[
                            { width: "46%", label: "46%", text: "No visibility into real design progress" },
                            { width: "28%", label: "28%", text: "Blocked work discovered too late" }
                          ].map((bar, idx) => (
                            <motion.div 
                              key={idx} 
                              className="bar"
                              variants={itemVariants}
                            >
                              <div className="bar-fill">
                                <motion.div 
                                  className="fill" 
                                  initial={{ width: 0 }}
                                  animate={{ width: bar.width }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                />
                              </div>
                              <div className="bar-label-group">
                                <span className="bar-label">{bar.label}</span>
                                <p>{bar.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 2 && (
                  <motion.div
                    className="research-data-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {/* LEFT GRID SECTION */}
                    <motion.div className="research-grid" variants={itemVariants}>
                      <div className="project-overview-set">
                        <h3>HIGH IMPACT</h3>
                        <p>
                          Design teams lacked a single in-file source of truth for handoff readiness, leading to developer guessing, repeated clarification calls, rework during sprints, and growing frustration across designers, developers, and PMs when behavioural decisions, edge cases, and build expectations are not visible inside the design file itself.
                        </p>
                      </div>

                      {/* CARD 2 */}
                      <div className="project-overview-set">
                        <h3>What’s broken in the current system</h3>

                        <div className="insight-list">
                          {[
                            { title: "No Readiness Signal", text: "No clear indicator for build-ready designs" },
                            { title: "Context Not Attached", text: "Design intent lives outside the file" },
                            { title: "Late Discovery", text: "Edge cases found during QA stages" },
                            { title: "Fragmented Workflow", text: "Status tracked in external tools" }
                          ].map((insight, idx) => (
                            <motion.div
                              key={idx}
                              className="insight-card"                 
                              variants={itemVariants}
                            >
                              <h4>{insight.title}</h4> 
                              <p>{insight.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* RIGHT GRID SECTION */}
                    <motion.div className="research-grid" variants={itemVariants}>
                      {/* CARD 3 */}
                      <div className="project-overview-set">
                        <h3>EMOTIONAL BARIERS</h3>

                        <div className="bar-group">
                          {[
                            { width: "40%", label: "40%", text: "Stress During Sprint Kickoff" },
                            { width: "31%", label: "31%", text: "Fear of building wrong" },
                            { width: "18%", label: "18%", text: "Frustration with repeated explanations" },
                            { width: "11%", label: "11%", text: "Low Confidence in Specs" }
                          ].map((bar, idx) => (
                            <motion.div
                              key={idx}
                              className="bar"
                              variants={itemVariants}
                            >
                              <div className="bar-fill">
                                <motion.div
                                  className="fill"
                                  initial={{ width: 0 }}
                                  animate={{ width: bar.width }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                />
                              </div>
                              <div className="bar-label-group">
                                <span className="bar-label">{bar.label}</span>
                                <p>{bar.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CARD 4 */}
                      <div className="project-overview-set">
                        <h3>PAIN POINTS IDENTIFIED</h3>

                        <div className="bar-group">
                          {[
                            { width: "51%", label: "51%", text: "Unclear which designs to build" },
                            { width: "49%", label: "49%", text: "Rework due to missing context" }
                          ].map((bar, idx) => (
                            <motion.div
                              key={idx}
                              className="bar"
                              variants={itemVariants}
                            >
                              <div className="bar-fill">
                                <motion.div
                                  className="fill"
                                  initial={{ width: 0 }}
                                  animate={{ width: bar.width }}
                                  transition={{ duration: 1, delay: idx * 0.1 }}
                                />
                              </div>
                              <div className="bar-label-group">
                                <span className="bar-label">{bar.label}</span>
                                <p>{bar.text}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 3 && (
                  <motion.div 
                    className="timeline-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {[
                      { title: "Discovery & UX Research", days: "11 days" },
                      { title: "Journey Maps & Affinity  Mapping", days: "3 days" },
                      { title: "Ideation, System Thining  & User Flows", days: "5 days" },
                      { title: "Interaction Design", days: "3 days" },
                      { title: "Wireframes", days: "7 days" },
                      { title: "Interface Design", days: "7 days" }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        className="timeline-card"
                        variants={itemVariants}
                      >
                        <p className="title">{item.title}</p>
                        <p className="days">{item.days}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 4 && (
                  <motion.div
                    className="results-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {/* Row 1 */}
                    <motion.div className="row-split" variants={itemVariants}>
                      <div className="project-overview-set big-card">
                        <h3>KEY EXPERIENCE OUTCOMES</h3>
                        <p>
                           After introducing an in-file status system and component-level logs, teams gained clarity on what was ready to build, reduced dependency on Slack, confluenece, notions, WhatsApp chats and phone calls, preserved design intent across sprints, and enabled developers to build complex behaviour correctly the first time with fewer interruptions. 
                        </p>
                      </div>

                      <div className="project-overview-set small-card">
                        <div className="heading-wrapper">
                          <h3>USER PERFORMANCE</h3>
                          <div className="comparision-container">
                            <div className="before-dot"></div>
                            <p>Before</p>
                          </div>
                          <div className="comparision-container">
                            <div className="after-dot"></div>
                            <p>After</p>
                          </div>
                        </div>
                        <div className="chart-container">
                          {[
                            { before: 54, after: 143, label: "Confidence" },
                            { before: 32, after: 130, label: "User Satisfaction" },
                            { before: 60, after: 121, label: "Trust in Specs" }
                          ].map((chart, idx) => (
                            <motion.div
                              key={idx}
                              className="chart-item"
                              variants={itemVariants}
                            >
                              <div className="bar-chart-container">
                                <div className="bar-container">
                                  <motion.div
                                    className="before-bar"
                                    initial={{ height: 0 }}
                                    animate={{ height: chart.before }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                  />
                                </div>
                                <div className="bar-container">
                                  <motion.div
                                    className="after-bar"
                                    initial={{ height: 0 }}
                                    animate={{ height: chart.after }}
                                    transition={{ duration: 1, delay: idx * 0.2 + 0.1 }}
                                  />
                                </div>
                              </div>
                              <p>{chart.label}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div className="row-split" variants={itemVariants}>
                      <div className="project-overview-set small-card">
                        <div className="heading-wrapper">
                          <h3>METRICS</h3>
                          <div className="comparision-container">
                            <div className="before-dot"></div>
                            <p>Before</p>
                          </div>
                          <div className="comparision-container">
                            <div className="after-dot"></div>
                            <p>After</p>
                          </div>
                        </div>
                        <div className="metrics-chart-container">
                          {[
                            { before: 165, after: 62, change: "-48%", label: "Clarify Time" },
                            { before: 186, after: 38, change: "-59%", label: "Rework Frequency" },
                            { before: 73, after: 195, change: "+40%", isFaster: true, label: "Build Accuracy" }
                          ].map((metric, idx) => (
                            <motion.div
                              key={idx}
                              className="line-chart-container"
                              variants={itemVariants}
                            >
                              <label>{metric.label}</label>
                              <div className="line-chart-progress">
                                <div className="line-chart">
                                  <motion.div
                                    className="before-line-bar"
                                    initial={{ width: 0 }}
                                    animate={{ width: metric.before }}
                                    transition={{ duration: 1, delay: idx * 0.2 }}
                                  />
                                  <motion.div
                                    className="after-line-bar"
                                    initial={{ width: 0 }}
                                    animate={{ width: metric.after }}
                                    transition={{ duration: 1, delay: idx * 0.2 + 0.1 }}
                                  />
                                </div>
                                <div className={`numarical-stats ${metric.isFaster ? 'with-tag' : ''}`}>
                                  {metric.change}
                                  {metric.isFaster && <p>Faster</p>}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="project-overview-set big-card qualiotative">
                        <h3>QUALITATIVE DATA</h3>

                        <div className="insight-list">
                          {[
                            { title: "Faster Development", text: "Less time spent on brainstorming and clarification calls" },
                            { title: "Improved Visibility", text: "Clear readiness and progress signals" },
                            { title: "Reduced Dependency", text: "Less reliance on Slack, Notion and calls" },
                            { title: "Confidence", text: "Higher trust in design documentation" }
                          ].map((insight, idx) => (
                            <motion.div
                              key={idx}
                              className="insight-card"
                              variants={itemVariants}
                            >
                              <h4>{insight.title}</h4>
                              <p>{insight.text}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 5 && (
                  <motion.div 
                    className="feature-wrapper"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <div className="feature-grid">
                      <motion.div 
                        className="feature-highlights card-hero"
                        variants={itemVariants}
                      >
                        <div className="layer-blur"></div>
                        <h3>FEATURE HIGHLIGHTS</h3>
                        <p>Previously, teams relied on Slack, Notion, and Jira to compensate for missing handoff context inside Figma. The new system embeds workflow status, behavioural intent, and technical requirements directly into the design file, enabling cleaner collaboration, fewer interruptions, and predictable handoffs across team sizes.</p>
                      </motion.div>

                      {[
                        { title: "Status Layer", text: "Clear multi-state workflow across pages" },
                        { title: "Logs System", text: "Behaviour and data documented spatially" },
                        { title: "Developer Mode View", text: "Build-ready frames surfaced without noise" },
                        { title: "B2B Edge Cases", text: "Role rules and errors defined early" },
                        { title: "Permission Model", text: "Clear ownership across multiple roles" },
                        { title: "Scalable by Default", text: "Works for small and large teams" }
                      ].map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className={`feature-card ${idx < 3 ? 'card-top-right' : ''}`}
                          variants={itemVariants}
                        >
                          <span className="feature-icon">
                            <img src={Rocket} alt="rocket icon" />
                          </span>
                          <div>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="svg-wrapper">
                      <div className="blur-component"></div>
                      <svg width="150" height="150" viewBox="0 0 103 94" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M50.8486 75.4907L35.2314 71.0161L35.8652 68.9741L35.8857 68.9077L35.8877 68.8374L36.2441 53.8608L35.2812 53.6577C35.2774 53.6648 35.2666 53.6844 35.2451 53.7192C35.2146 53.7688 35.1719 53.8339 35.1172 53.9146C35.0076 54.0761 34.8585 54.2873 34.6787 54.5347C34.4992 54.7817 34.2913 55.0619 34.0674 55.3618L33.3574 56.3052C31.8213 58.3286 29.7273 59.8531 27.3369 60.6909L26.8545 60.8491C24.8984 61.4491 22.5818 62.1688 20.7305 62.769C19.8053 63.069 18.9922 63.3408 18.3975 63.5532C18.1511 63.6412 17.9377 63.7204 17.7676 63.7886L13.5674 56.3833L25.4141 51.0825L25.5801 51.0083L25.6602 50.8433L31.2578 39.2466H31.2588L31.2617 39.2388C32.3298 36.9303 33.9492 34.9531 35.9492 33.4644C37.0422 32.6508 38.2449 31.9817 39.5352 31.4849L40.0938 31.2827L44.4258 29.8062L50.8486 27.6167V75.4907Z" fill="#161616" stroke="#CACACA"/> <path d="M6.96729 52.646C7.28959 52.5539 7.63503 52.6713 7.83447 52.9409L7.87646 52.9966L7.93213 53.0396L12.4302 56.5034L14.5278 62.7642L11.0776 64.4077L11.0737 64.4097C9.14824 65.3478 6.85312 65.0874 5.18701 63.7417L2.29053 61.4009C1.13776 60.4696 0.875325 58.818 1.68311 57.5757L3.27393 55.1284C3.60539 54.6189 4.28078 54.4819 4.78076 54.8003L4.87842 54.8696C4.93169 54.9122 4.98594 55.0079 5.01221 55.1802C5.03851 55.3531 5.021 55.5438 4.96631 55.7437L3.99561 58.1255C3.72733 58.784 4.38708 59.4415 5.04541 59.1675L7.63135 58.0903L7.64307 58.0854L7.65381 58.0806C7.90575 57.9608 8.24854 57.7901 8.49072 57.5396C8.61918 57.4066 8.73732 57.2343 8.79248 57.0171C8.84883 56.7949 8.82917 56.5657 8.74658 56.3423L8.71436 56.2563L8.65381 56.187L6.40869 53.6196C6.30095 53.2027 6.54367 52.7671 6.96729 52.646Z" fill="#161616" stroke="#CACACA"/> <path d="M16.8105 64.1313L6.74805 67.6655L6.71777 67.6763L6.69043 67.6899C5.46655 68.3007 4.03122 68.24 2.87598 67.5571L2.64844 67.4126L2.63965 67.4067L2.44629 67.2661L2.44043 67.2622L2.43457 67.2573L0.865234 66.1382C0.347296 65.7297 0.386268 64.9302 0.944336 64.5747L0.949219 64.5718L12.6846 56.9106L16.8105 64.1313Z" fill="#161616" stroke="#CACACA"/> <path d="M7.31517 64.3193L1.00732 66.8229" stroke="#CACACA" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M3.06445 62.5552L6.08002 61.1821" stroke="#CACACA" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M60.5029 17.2148C61.0058 15.6639 62.5062 14.8256 63.8096 15.248C65.1127 15.6705 65.8358 17.2296 65.333 18.7803C64.8302 20.3309 63.3296 21.1695 62.0264 20.7471C60.7232 20.3247 60.0003 18.7654 60.5029 17.2148Z" fill="#1E1E1E" stroke="#CACACA" stroke-width="0.6"/> <path d="M63.9873 18.0827C63.9873 18.8113 63.3968 19.4018 62.6682 19.4018C61.9396 19.4018 61.3491 18.8113 61.3491 18.0827C61.3491 17.3542 61.9396 16.7637 62.6682 16.7637C63.3968 16.7637 63.9873 17.3542 63.9873 18.0827Z" fill="#1E1E1E" stroke="#CACACA" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M37.7856 16.979C38.2885 15.4281 39.789 14.5898 41.0923 15.0122C42.3954 15.4347 43.1185 16.9938 42.6157 18.5444C42.1129 20.0951 40.6124 20.9336 39.3091 20.5112C38.006 20.0888 37.283 18.5296 37.7856 16.979Z" fill="#1E1E1E" stroke="#CACACA" stroke-width="0.6"/> <path d="M41.27 17.8469C41.27 18.5755 40.6795 19.166 39.9509 19.166C39.2223 19.166 38.6318 18.5755 38.6318 17.8469C38.6318 17.1183 39.2223 16.5278 39.9509 16.5278C40.6795 16.5278 41.27 17.1183 41.27 17.8469Z" fill="#1E1E1E" stroke="#CACACA" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M67.3364 53.6558C67.328 53.6392 67.3198 53.6221 67.3091 53.606C67.251 53.5186 67.1766 53.4666 67.1177 53.437C67.0609 53.4085 67.0105 53.3956 66.978 53.3901C66.9606 53.3872 66.9444 53.3862 66.9312 53.3853C66.9246 53.3848 66.9184 53.3845 66.9126 53.3843C66.9096 53.3842 66.9066 53.3833 66.9038 53.3833L67.2007 53.3843L67.3394 53.6548C67.3961 53.7651 67.6246 54.0981 67.9897 54.5991C68.342 55.0824 68.7934 55.6843 69.2642 56.3052C70.9027 58.4634 73.1765 60.054 75.7671 60.8491C77.7232 61.4491 80.0398 62.1688 81.8911 62.769C82.8162 63.069 83.6294 63.3408 84.2241 63.5532C84.4701 63.6411 84.683 63.7205 84.853 63.7886L89.0532 56.3833L77.2075 51.0825L77.0415 51.0083L76.9614 50.8433L71.3638 39.2466L71.3599 39.2388C70.2695 36.8802 68.6028 34.869 66.5435 33.3657L66.0815 33.0435C64.9889 32.3106 63.7962 31.7154 62.5278 31.2827L51.7759 27.6167V75.4907L67.3892 71.0161L66.7563 68.9741L66.7358 68.9077L66.7339 68.8374L66.3774 53.8608L67.2261 53.7124M67.3364 53.6558L67.2261 53.7124M67.3364 53.6558C67.3382 53.6592 67.3406 53.6621 67.3423 53.6655C67.3446 53.6711 67.3484 53.6799 67.3521 53.6909L67.2261 53.7124M67.3364 53.6558L67.2261 53.7124" fill="#161616" stroke="#CACACA"/> <path d="M55.9912 27.8784V31.6138C55.9912 31.7422 55.9321 31.9064 55.7402 32.1011C55.5462 32.2977 55.2409 32.4975 54.8242 32.6763C53.9917 33.0333 52.8058 33.2671 51.4697 33.2671C50.1354 33.2671 48.9512 33.0333 48.1191 32.6763C47.7022 32.4974 47.3962 32.2979 47.2021 32.1011C47.0103 31.9064 46.9521 31.7421 46.9521 31.6138V27.8784H55.9912Z" stroke="#CACACA"/> <path d="M49.9785 5.60352H53.1064C53.4798 5.60353 53.8471 5.63255 54.2031 5.6875H54.2041C57.6995 6.21458 60.3789 9.23275 60.3789 12.876V19.8652C60.3787 24.014 57.018 27.374 52.8691 27.374H50.2148C46.0662 27.3738 42.7063 24.0139 42.7061 19.8652V12.876C42.7061 8.85892 45.9615 5.60352 49.9785 5.60352Z" stroke="#CACACA" stroke-width="0.5"/> <path d="M48.5841 15.2412C48.5841 16.1382 47.857 16.8653 46.96 16.8653C46.063 16.8653 45.3359 16.1382 45.3359 15.2412" stroke="#EDEDED" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M58.1613 15.2412C58.1613 16.1382 57.4342 16.8653 56.5372 16.8653C55.6402 16.8653 54.9131 16.1382 54.9131 15.2412" stroke="#EDEDED" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M54.3343 20.7744C54.3343 21.6714 52.4396 22.3985 51.5426 22.3985C50.6456 22.3985 48.9614 21.6714 48.9614 20.7744" stroke="#EDEDED" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M15.8921 66.0596C16.1858 66.0596 16.4817 66.0759 16.7759 66.1113L29.0327 67.5869L25.4702 81.8818L14.9976 80.5723C10.949 80.0642 8.13324 76.344 8.68604 72.3525L8.75049 71.9648C9.41686 68.5019 12.4483 66.0597 15.8921 66.0596Z" fill="#161616" stroke="#CACACA"/> <path d="M86.7856 66.0596C90.1219 66.0597 93.0711 68.3518 93.8579 71.6436L93.9272 71.9648C94.7248 76.0999 91.8568 80.0478 87.6772 80.5723L78.1577 81.7627L73.0298 67.6611L85.9019 66.1113C86.196 66.0759 86.492 66.0596 86.7856 66.0596Z" stroke="#CACACA"/> <path d="M47.7568 69.8447C49.8376 70.0967 51.941 70.1284 54.0273 69.9395L54.9199 69.8447L72.0098 67.7842L77.1387 81.8896L51.8838 85.0508L51.8398 83.9492L50.8398 83.9482L50.793 85.0508L26.4697 82.0068L30.0322 67.708L47.7568 69.8447Z" fill="#161616" stroke="#CACACA"/> <path d="M43.5845 1.88232H44.8755L44.5942 11.4448V11.4526C44.5942 11.8764 44.4969 12.123 44.3638 12.2993C44.2218 12.4871 44.0238 12.6185 43.7593 12.7925C43.5031 12.9609 43.1999 13.1611 42.9233 13.4771C42.6755 13.7602 42.4556 14.1284 42.2925 14.6401L41.8149 14.6011V3.65186C41.8149 2.6746 42.6072 1.88232 43.5845 1.88232Z" fill="#161616" stroke="#CACACA" stroke-width="0.5"/> <path d="M58.4717 10.9185L58.1582 1.88232H59.4482C60.4255 1.88232 61.2178 2.6746 61.2178 3.65186V14.6206L60.8525 14.6577C60.7946 14.0847 60.6339 13.6513 60.4092 13.3052C60.1534 12.9112 59.8269 12.6472 59.5283 12.4263C59.2189 12.1973 58.9636 12.0281 58.7715 11.8022C58.5933 11.5927 58.4718 11.3335 58.4717 10.9272V10.9185Z" fill="#161616" stroke="#CACACA" stroke-width="0.5"/> <path d="M44.8721 0.25H58.1709C59.101 0.250197 59.8525 1.00248 59.8525 1.93262V1.97656L59.8682 2.01758V2.01953C59.8687 2.02113 59.8699 2.02396 59.8711 2.02734C59.8735 2.03406 59.8772 2.04421 59.8818 2.05762C59.8913 2.0848 59.9056 2.12584 59.9229 2.17773C59.9574 2.28154 60.0052 2.43142 60.0586 2.61328C60.1657 2.97815 60.2931 3.4694 60.3779 3.98047C60.4633 4.49494 60.5024 5.0129 60.4424 5.4375C60.3817 5.86652 60.2298 6.14278 59.9873 6.26953C55.3828 8.66396 51.1517 8.66343 48.0703 8.06543C46.5287 7.76625 45.2752 7.31763 44.4082 6.94434C43.9748 6.75774 43.6382 6.59005 43.4111 6.46973C43.3185 6.42061 43.2448 6.37808 43.1895 6.34668V1.93262C43.1895 1.88262 43.1923 1.83234 43.1973 1.78223V1.7793C43.2735 0.920922 43.9953 0.25 44.8721 0.25Z" fill="#161616" stroke="#CACACA" stroke-width="0.5"/> <path d="M95.5332 52.6206L95.6553 52.646C96.0789 52.7671 96.3208 53.2027 96.2129 53.6196L93.9688 56.187L93.9082 56.2563L93.876 56.3423C93.7934 56.5657 93.7747 56.7949 93.8311 57.0171C93.8863 57.2344 94.0043 57.4066 94.1328 57.5396C94.375 57.79 94.7169 57.9608 94.9688 58.0806L94.9795 58.0854L94.9912 58.0903L97.5771 59.1675C98.1944 59.4246 98.8133 58.8625 98.667 58.2485L98.627 58.1255L97.6553 55.7437C97.6007 55.5439 97.5841 55.353 97.6104 55.1802C97.6366 55.0079 97.6909 54.9122 97.7441 54.8696C98.25 54.4648 98.995 54.585 99.3486 55.1284L100.939 57.5757C101.747 58.8179 101.486 60.4696 100.333 61.4009L97.4355 63.7417C95.7695 65.0874 93.4743 65.3478 91.5488 64.4097L91.5449 64.4077L88.0938 62.7632L90.1914 56.5034L94.6904 53.0396L94.7461 52.9966L94.7881 52.9409C94.9625 52.7052 95.2485 52.5852 95.5332 52.6206Z" fill="#161616" stroke="#CACACA"/> <path d="M101.674 64.5708V64.5718L101.678 64.5737C102.236 64.9305 102.274 65.7307 101.754 66.1392L100.189 67.2583L100.18 67.2642L100.172 67.271C98.958 68.2154 97.309 68.3779 95.9331 67.6899L95.9058 67.6763L95.8755 67.6655L85.8091 64.1313L89.937 56.9106L101.674 64.5708Z" fill="#161616" stroke="#CACACA"/> <path d="M95.3066 64.3193L101.614 66.8229" stroke="#CACACA" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M99.5576 62.5552L96.542 61.1821" stroke="#CACACA" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M72.3444 67.2409C72.3444 67.2409 61.1969 71.0998 51.9906 71.3391C42.7871 71.5785 29.6548 67.1592 29.6548 67.1592L47.8165 69.3484C50.1546 69.6315 52.5218 69.6315 54.8599 69.3484L72.3444 67.2409Z" fill="#EA4D13"/> <path d="M67.0398 81.5864L50.5863 81.6168L47.9937 92.3699L55.7913 93.806C61.3408 94.828 66.8261 91.7295 68.8148 86.4485L69.3764 84.9572C69.9911 83.3255 68.7833 81.5832 67.0398 81.5864Z" fill="#161616"/> <path d="M15.7896 65.9941C16.5442 65.9941 17.3071 66.1109 18.0601 66.3584L46.1733 80.0273V80.0283L50.0054 81.8877L49.9839 81.9795L47.6362 91.7188L47.3999 91.6387H47.3989L31.4087 86.2412L13.4595 80.1816C9.46919 78.835 7.45102 74.3933 9.05713 70.501C10.2126 67.7072 12.9161 65.9943 15.7896 65.9941Z" fill="#161616" stroke="#CACACA"/> <path d="M84.6099 66.3604C88.2321 65.1685 92.1625 66.973 93.6187 70.5C95.2259 74.3932 93.2067 78.8342 89.2163 80.1816L55.0405 91.7197L52.6704 81.8896L84.6099 66.3604Z" fill="#161616" stroke="#CACACA"/> <path d="M32.2168 80.0488L46.2773 80.0771L49.8926 81.833L49.9551 82.0957L47.6826 91.5215L47.2744 91.5967L31.5889 86.3018C31.2795 85.7595 31.0075 85.1886 30.7832 84.5898L30.7822 84.5879L30.1787 82.9893C29.6592 81.6101 30.6308 80.1413 32.0752 80.0527L32.2168 80.0488Z" fill="#161616" stroke="#CACACA"/> <path d="M35.6357 82.0864L51.6963 82.1157L54.0732 91.9731L46.7949 93.314C41.4834 94.2921 36.2335 91.3264 34.3301 86.272L33.7676 84.7808C33.2762 83.4766 34.2419 82.0839 35.6357 82.0864Z" fill="#161616" stroke="#CACACA"/> <path d="M67.2109 33.8838C68.8402 35.2181 70.1878 36.8868 71.1484 38.8008L71.3594 39.2393L71.3633 39.2471L76.9619 50.8438L77.041 51.0078L77.208 51.083L89.0527 56.3838L84.8525 63.79C84.6826 63.722 84.4704 63.6415 84.2246 63.5537C83.6299 63.3413 82.8167 63.0695 81.8916 62.7695C80.9658 62.4693 79.9234 62.1396 78.8682 61.8096L75.7666 60.8496C73.1758 60.0544 70.9022 58.4632 69.2637 56.3047H69.2627C68.7922 55.6841 68.3423 55.0826 67.9902 54.5996C67.6644 54.1526 67.4485 53.839 67.3652 53.6982C66.2141 47.8368 66.5412 40.2876 67.001 35.7158L67.0947 34.8418C67.134 34.4979 67.1724 34.1777 67.2109 33.8838Z" stroke="#CACACA"/> <path d="M35.4385 33.8848C35.4958 34.3201 35.5557 34.8116 35.6113 35.3506V35.3516C36.0912 39.8794 36.4664 47.6819 35.2842 53.7002C35.2 53.842 34.9852 54.1549 34.6611 54.5996C34.3089 55.0828 33.8575 55.6838 33.3867 56.3047C31.8505 58.3283 29.7568 59.8535 27.3662 60.6914L26.8838 60.8496C24.9276 61.4496 22.6111 62.1692 20.7598 62.7695C19.8346 63.0695 19.0215 63.3413 18.4268 63.5537C18.1804 63.6417 17.967 63.7209 17.7969 63.7891L14.0068 57.1055L13.5967 56.3838L25.4434 51.083L25.6094 51.0078L25.6895 50.8438L31.2871 39.2471H31.2881L31.291 39.2393C32.2606 37.1419 33.6866 35.3199 35.4385 33.8848ZM35.7549 53.8037V53.8799L35.7559 53.8809V53.8037H35.7549Z" stroke="#CACACA"/> <path d="M17.1714 64.2573L17.1763 64.2671L6.83057 67.9009L6.81592 67.9067L6.80225 67.9136C5.56333 68.5318 4.12089 68.5007 2.92529 67.8687L16.0776 62.5786L17.1714 64.2573Z" fill="#161616" stroke="#CACACA" stroke-width="0.5"/> <path d="M99.687 67.8687C98.4915 68.5004 97.0497 68.5317 95.811 67.9136L95.7974 67.9067L95.7827 67.9009L85.436 64.2671L85.4419 64.2573L86.5347 62.5786L99.687 67.8687Z" stroke="#CACACA" stroke-width="0.5"/> <path d="M48.2797 12.4292H45.6313" stroke="#EDEDED" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M57.787 12.4292H55.1387" stroke="#EDEDED" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round"/> <path d="M44.8721 0.25H56.4287C56.0995 0.991339 55.3573 1.50664 54.4961 1.50684H43.2451C43.4329 0.783183 44.0906 0.25 44.8721 0.25Z" fill="#161616" stroke="#CACACA" stroke-width="0.5"/> </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
        </motion.div>
        
        <div className="project-bento-container with-background">
          <img src={overviewImage1} />
          <img src={overviewImage2} />
          <img src={overviewImage3} />
        </div>

        <div className="project-bento-container with-background">
          <img src={overviewImage4} />
        </div>

        <div className="project-bento-container with-background">
          <div className="inner-container">
            <h3 className="inner-header">Research Approach</h3>
            <p className="inner-content">
              Before opening Figma, I spent two full weeks in pure discovery. The goal was not to validate a solution it was to
              deeply understand the problem from three completely different perspectives:
              <br/>1. the designer who creates,
              <br/>2. the developer who builds, and
              <br/>3. the PM who tracks.
            </p>
            <p className="inner-content">
              Each role experiences the handoff gap differently. Each has different pain, different workarounds, and a different definition of what a good handoff looks like.
            </p>
          </div>
          <div className="inner-container">
            <h3 className="inner-header">What NEW features HAVE BEEN addED</h3>
            <img className="inner-image" src={overviewImage5} />
          </div>
        </div>
      
      {/* <div className="project-bento">
        
        <div className="project-bento-container">
          <img src={bento11} />
          <img src={bento12} />
          <img src={bento13} />
          <img src={bento14} />
          <img src={bento15} />
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
          <img src={bento23} />
          <img src={bento24} />
          <img src={bento25} />
          <img src={bento26} />
        </div>
      </div> */}
      
      </motion.div>
      <OtherCaseStudies currentProject="savelife" />
      </>
  );
}

export default FigmaStatusLogs;