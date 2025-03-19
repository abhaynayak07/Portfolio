import React from "react";
import icon from "../../../assets/Projects/Page/WhatsApp/icon.png";
import banner from "../../../assets/Projects/Page/WhatsApp/banner.png";
import mobilebanner from "../../../assets/Projects/Page/WhatsApp/mobile banner.png";
import toolused from "../../../assets/Projects/Page/WhatsApp/tool used.png";
import overviewimg from "../../../assets/Projects/Page/WhatsApp/overview img.png";
import secondbanner from "../../../assets/Projects/Page/WhatsApp/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/WhatsApp/mobile second banner.png";
import bento11 from "../../../assets/Projects/Page/WhatsApp/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/WhatsApp/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/WhatsApp/bento 1.3.png";
import bento21 from "../../../assets/Projects/Page/WhatsApp/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/WhatsApp/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/WhatsApp/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/WhatsApp/bento 2.4.png";

function WhatsApp() {
  return (
    <div className="pages-container">
      <div className="about-project">
        <div className="project-header">
          <div className="project-header-text-and-icon">
            <div className="project-header-icon">
              <img
                src={icon}
                style={{
                  boxShadow: "0px 2px 45px 0px rgba(65, 196, 82, 0.45",
                }}
                alt="WhatsApp Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>WhatsApp</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img
              src={banner}
              className="desktop"
              alt="WhatsApp Banner"
            />
            <img
              src={mobilebanner}
              className="mobile"
              alt="WhatsApp Banner"
            />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  WhatsApp is a global messaging app that enables secure text,
                  voice, and video communication. It offers features like group
                  chats, media sharing, and end-to-end encryption for privacy.
                  Its simple interface and cross-platform support make it ideal
                  for both personal and business use.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Designing WhatsApp’s UI involved accurately recreating its
                  familiar and intuitive interface, ensuring consistency with
                  the original experience. I focused on replicating the Home
                  Page, Status, Calls, and Text Messaging UIs, maintaining
                  seamless navigation and user-friendly interactions. Attention
                  to detail in spacing, typography, and color ensured a precise
                  match to the real app. The final design successfully mirrored
                  WhatsApp’s functionality and aesthetics, reinforcing ease of
                  use and familiarity.
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
              The journey of designing WhatsApp’s UI started with carefully
              analyzing its structure, layout, and interactions. I recreated the
              Home Page, Status, Calls, and Text Messaging UIs with precision,
              ensuring accuracy in design elements. Every detail, from
              typography to spacing, was meticulously crafted to match the
              original interface. The final design delivered an exact replica,
              maintaining WhatsApp’s seamless and user-friendly experience.
            </p>
          </div>
        </div>
      </div>
      <div className="project-bento">
        <div className="project-bento-container">
          <img src={bento11} />
          <img src={bento12} />
          <img src={bento13} />
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
          <img src={bento23} />
          <img src={bento24} />
        </div>
      </div>
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/179807285/WhatsApp-UIUX-Design"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default WhatsApp;
