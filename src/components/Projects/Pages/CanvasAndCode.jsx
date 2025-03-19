import React from "react";
import icon from "../../../assets/Projects/Page/Canvas And Code/icon.png";
import banner from "../../../assets/Projects/Page/Canvas And Code/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Canvas And Code/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Canvas And Code/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Canvas And Code/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Canvas And Code/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Canvas And Code/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Canvas And Code/third banner 1.png";
import mobilethirdbanner1 from "../../../assets/Projects/Page/Canvas And Code/mobile third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Canvas And Code/third banner 2.png";

function CanvasAndCode() {
  return (
    <div className="pages-container">
      <div className="about-project">
        <div className="project-header">
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
              <p>Website Design</p>
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
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Canvas and Code is a design and coding agency dedicated to
                  crafting innovative digital solutions, offering tailored web
                  design and development services that bring client visions to
                  life.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Designing for Canvas and Code focused on creating a seamless
                  blend of design and technology to deliver innovative digital
                  solutions. I ensured an intuitive user experience that
                  highlights their expertise in web design and development. The
                  website was optimized for clarity, engagement, and strong
                  brand storytelling. The final design effectively showcases
                  their ability to turn client visions into reality through
                  tailored digital experiences.
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
                <h4>October 2024</h4>
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

          <div className="project-points-container">
            <h3>Goals</h3>
            <ul className="project-points-div">
              <li className="project-points">
                Design an intuitive and engaging platform that highlights Canvas
                and Code’s expertise in web design and development.
              </li>
              <li className="project-points">
                Create a visually compelling website that reflects their
                innovative approach and commitment to digital solutions.
              </li>
              <li className="project-points">
                Ensure fast load times, smooth navigation, and clear messaging
                to attract and retain clients.
              </li>
            </ul>
          </div>
          <div className="project-second-banner">
            <img src={thirdbanner1} className="desktop" />
            <img src={mobilethirdbanner1} className="mobile" />
          </div>
          <div className="project-journey">
            <h3>The Journey</h3>
            <p>
              The journey of designing for Canvas and Code began with
              understanding their vision of blending design and development
              seamlessly. I focused on creating a user-friendly experience that
              highlights their expertise in crafting digital solutions. Through
              iterative design improvements, I refined navigation, layout, and
              brand storytelling. Optimizing performance and engagement ensured
              a smooth and compelling user journey. The final design effectively
              showcases their ability to transform client ideas into reality.
            </p>
          </div>
        </div>
      </div>
      <div className="project-second-banner">
        <img src={thirdbanner2} />
      </div>
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/210955561/Canvas-Code-Web-Design"
          target="_blank"
        >
          Canvas & Code
        </a>
      </div>
    </div>
  );
}

export default CanvasAndCode;
