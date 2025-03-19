import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/Coolzee/icon.png";
import banner from "../../../assets/Projects/Page/Coolzee/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Coolzee/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Coolzee/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Coolzee/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Coolzee/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Coolzee/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Coolzee/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Coolzee/third banner 2.png";
import bento11 from "../../../assets/Projects/Page/Coolzee/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/Coolzee/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/Coolzee/bento 1.3.png";
import bento14 from "../../../assets/Projects/Page/Coolzee/bento 1.4.png";
import bento15 from "../../../assets/Projects/Page/Coolzee/bento 1.5.png";
import bento21 from "../../../assets/Projects/Page/Coolzee/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Coolzee/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/Coolzee/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/Coolzee/bento 2.4.png";
import bento25 from "../../../assets/Projects/Page/Coolzee/bento 2.5.png";
import bento26 from "../../../assets/Projects/Page/Coolzee/bento 2.6.png";

function Coolzee() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="pages-container">
      <div className="about-project">
        <div className="project-header">
          <div className="project-header-text-and-icon">
            <div className="project-header-icon">
              <img
                src={icon}
                style={{
                  boxShadow: " 0px 2px 45px 0px rgba(37, 203, 255, 0.45)",
                }}
                alt="Coolzee Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Coolzee</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img
              src={banner}
              className="desktop"
              alt="Coolzee Banner"
            />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Coolzee Banner"
            />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Coolzee is a smart home application designed to provide
                  seamless control over home automation devices. It enables
                  users to manage lighting, security, temperature, and
                  appliances remotely through an intuitive interface.The app
                  ensures a connected and effortless smart home experience for
                  users.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Designing Coolzee was my first portfolio project and I focused
                  on providing seamless smart home control for fans and other
                  appliances. The app allows users to remotely adjust fan speed,
                  turn devices on/off, and set timers effortlessly. It
                  eliminates the hassle of physically accessing switches,
                  ensuring convenience and energy efficiency. Additional
                  features like LED light control, auto mode, and repair booking
                  enhance the user experience. The final design delivers a
                  smart, intuitive, and user-friendly home automation solution.
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
                <h4>May 2023</h4>
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
            <h3>Problem Statement</h3>
            <ul className="project-points-div desktop">
              <li className="project-points">
                Physically getting up to adjust the fan speed or turn it off is
                inconvenient.
              </li>
              <li className="project-points">
                Forgetting to turn off fans when leaving home leads to
                unnecessary electricity usage.
              </li>
              <li className="project-points">
                No option to schedule automatic fan control for better energy
                efficiency.
              </li>
              <li className="project-points">
                Lack of remote access to check the fan status from anywhere.
              </li>
              <li className="project-points">
                No integrated system for tracking electricity usage and saving
                energy.
              </li>
              <li className="project-points">
                Difficulty in finding reliable electricians for fan repairs.
              </li>
            </ul>
            <ul className="project-points-div mobile">
              <li className="project-points">
                Physically getting up to adjust the fan speed or turn it off is
                inconvenient.
              </li>
              <li className="project-points">
                Forgetting to turn off fans when leaving home leads to
                unnecessary electricity usage.
              </li>
              <li className="project-points">
                No option to schedule automatic fan control for better energy
                efficiency.
              </li>

              {!showMore && (
                <button className="primary-button" onClick={toggleShowMore}>
                  See More
                </button>
              )}

              {showMore && (
                <>
                  <li className="project-points">
                    Lack of remote access to check the fan status from anywhere.
                  </li>
                  <li className="project-points">
                    No integrated system for tracking electricity usage and
                    saving energy.
                  </li>
                  <li className="project-points">
                    Difficulty in finding reliable electricians for fan repairs.
                  </li>
                  <button className="primary-button" onClick={toggleShowMore}>
                    See Less
                  </button>
                </>
              )}
            </ul>
          </div>

          <div className="project-points-container">
            <h3>Goals</h3>
            <ul className="project-points-div">
              <li className="project-points">
                Allow users to control their fans and appliances remotely
                through the app.
              </li>
              <li className="project-points">
                Introduce auto mode and electricity-saving features to optimize
                usage.
              </li>
              <li className="project-points">
                Enable easy booking of electricians and offer discounts for fan
                repairs.
              </li>
            </ul>
          </div>
          <div className="project-third-banner">
            <img src={thirdbanner1} />
            <img src={thirdbanner2} />
          </div>
          <div className="project-journey">
            <h3>The Journey</h3>
            <p>
              The journey of designing Coolzee started with researching user
              challenges in managing home appliances. I identified key pain
              points like manual control inconvenience, energy wastage, and
              repair difficulties. Through ideation and iterations, I designed
              an intuitive interface with remote access, automation, and service
              booking. The final product ensures a smart, seamless, and
              energy-efficient home experience for users.
            </p>
          </div>
        </div>
      </div>
      <div className="project-bento">
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
      </div>
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/171755141/Coolzee-Smart-home-application-UI-design"
          target="_blank"
        >
          Coolzee
        </a>
      </div>
    </div>
  );
}

export default Coolzee;
