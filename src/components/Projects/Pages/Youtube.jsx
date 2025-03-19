import React from "react";
import icon from "../../../assets/Projects/Page/Youtube/icon.png";
import banner from "../../../assets/Projects/Page/Youtube/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Youtube/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Youtube/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Youtube/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Youtube/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Youtube/mobile second banner.png";
import bento11 from "../../../assets/Projects/Page/Youtube/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/Youtube/bento 1.2.png";
import bento21 from "../../../assets/Projects/Page/Youtube/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Youtube/bento 2.2.png";

function Youtube() {
  return (
    <div className="pages-container">
      <div className="about-project">
        <div className="project-header">
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
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Youtube Banner" />
            <img src={mobilebanner} className="mobile" alt="Youtube Banner" />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  YouTube is a global video-sharing platform that allows users
                  to watch, upload, and share content across various genres. It
                  offers features like subscriptions, recommendations, live
                  streaming, and monetization for creators. With its
                  user-friendly interface and vast content library, YouTube
                  serves as a primary hub for entertainment, education, and
                  information.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Designing YouTube’s UI involved accurately replicating the
                  Home Page, Search Page, and Video Playing Page with precise
                  attention to detail. I ensured consistency in layout,
                  typography, colors, and spacing to match the real platform.
                  Navigation and user interactions were carefully structured to
                  maintain YouTube’s intuitive experience. The final design
                  successfully mirrored the original interface, delivering a
                  seamless and familiar user journey.
                </p>
              </div>
            </div>
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Tool Used</h3>
                <div className="tool-used">
                  <img src={toolused} />
                  <section>
                    <h4>Figma</h4>
                    <p>Design Tool</p>
                  </section>
                </div>
              </div>
              <div className="project-overview-set">
                <h3>Timeline</h3>
                <h4>September 2023</h4>
              </div>
              <div className="project-overview-img">
                <img src={overviewimg} />
              </div>
            </div>
          </div>
          <div className="project-second-banner">
            <img src={secondbanner} className="desktop" />
            <img src={mobilesecondbanner} className="mobile" />
          </div>

          <div className="project-journey">
            <h3>The Journey</h3>
            <p>
              The journey of designing YouTube’s UI began with analyzing its
              structure, layout, and interactive elements. I meticulously
              recreated the Home Page, Search Page, and Video Playing Page,
              ensuring accuracy in every detail. Spacing, typography, and colors
              were carefully matched to maintain the platform’s authentic look
              and feel. The final design delivered an exact replica, preserving
              YouTube’s seamless and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
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
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/179600083/YouTube-UIUX-Design"
          target="_blank"
        >
          Youtube
        </a>
      </div>
    </div>
  );
}

export default Youtube;
