import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/School Mate/icon.png";
import banner from "../../../assets/Projects/Page/School Mate/banner.png";
import mobilebanner from "../../../assets/Projects/Page/School Mate/mobile banner.png";
import toolused from "../../../assets/Projects/Page/School Mate/tool used.png";
import overviewimg from "../../../assets/Projects/Page/School Mate/overview img.png";
import secondbanner from "../../../assets/Projects/Page/School Mate/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/School Mate/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/School Mate/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/School Mate/third banner 2.png";
import bento11 from "../../../assets/Projects/Page/School Mate/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/School Mate/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/School Mate/bento 1.3.png";
import bento14 from "../../../assets/Projects/Page/School Mate/bento 1.4.png";
import bento15 from "../../../assets/Projects/Page/School Mate/bento 1.5.png";
import bento16 from "../../../assets/Projects/Page/School Mate/bento 1.6.png";
import bento21 from "../../../assets/Projects/Page/School Mate/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/School Mate/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/School Mate/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/School Mate/bento 2.4.png";
import bento25 from "../../../assets/Projects/Page/School Mate/bento 2.5.png";
import bento26 from "../../../assets/Projects/Page/School Mate/bento 2.6.png";
import bento27 from "../../../assets/Projects/Page/School Mate/bento 2.7.png";

function SchoolMate() {
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
                  boxShadow: " 0px 2px 45px 0px rgba(229, 208, 17, 0.45)",
                }}
                alt="School Mate Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>School Mate</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="School Mate Banner" />
            <img
              src={mobilebanner}
              className="mobile"
              alt="School Mate Banner"
            />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  The School Bus Tracker App is a real-time safety solution
                  designed for parents to stay informed and reassured about
                  their child’s journey to and from school. It helps parents
                  track boarding and drop-off activity through smart ID scans,
                  provides timely notifications, supports multi-child
                  management, and is available in multiple Indian languages to
                  ensure inclusivity across regions.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  The School Bus Tracker App ensures child safety by sending
                  real-time updates to parents when their child boards or exits
                  the bus using a smart ID scan system. It supports families
                  with more than one child, allowing parents to switch between
                  profiles seamlessly. With built-in regional language support,
                  the app is accessible and user-friendly for parents across all
                  regions of India. It also allows parents to modify pickup or
                  drop-off plans directly within the app, adding flexibility to
                  daily routines. Overall, the app addresses real concerns
                  around delays, traffic, and safety, offering peace of mind
                  through a simple and intuitive interface.
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
                <h4>May 2025</h4>
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
                Lack of real-time updates on whether the child has safely
                boarded or reached school/home.
              </li>
              <li className="project-points">
                Parental anxiety due to traffic delays, late departures, or
                unexpected school bus issues.
              </li>
              <li className="project-points">
                No centralized system to manage pickup/drop for multiple
                children in different classes or routes.
              </li>
              <li className="project-points">
                Limited accessibility for parents who are not comfortable with
                English-only apps.
              </li>
              <li className="project-points">
                Inability to notify schools or drivers about last-minute
                pickup/drop modifications.
              </li>
              <li className="project-points">
                Growing safety concerns due to rising crimes and incidents
                during school commutes.
              </li>
            </ul>
            <ul className="project-points-div mobile">
              <li className="project-points">
                Lack of real-time updates on whether the child has safely
                boarded or reached school/home.
              </li>
              <li className="project-points">
                Parental anxiety due to traffic delays, late departures, or
                unexpected school bus issues.
              </li>
              <li className="project-points">
                No centralized system to manage pickup/drop for multiple
                children in different classes or routes.
              </li>

              {!showMore && (
                <button className="primary-button" onClick={toggleShowMore}>
                  See More
                </button>
              )}

              {showMore && (
                <>
                  <li className="project-points">
                    Limited accessibility for parents who are not comfortable
                    with English-only apps.
                  </li>
                  <li className="project-points">
                    Inability to notify schools or drivers about last-minute
                    pickup/drop modifications.
                  </li>
                  <li className="project-points">
                    Growing safety concerns due to rising crimes and incidents
                    during school commutes.
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
                To build trust and transparency between parents and schools
                through timely status updates.
              </li>
              <li className="project-points">
                To provide a simple, multilingual, and intuitive experience for
                parents across India.
              </li>
              <li className="project-points">
                To offer real-world safety solutions that give parents peace of
                mind, every day.
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
              Designing the School Mate app began with understanding the
              everyday anxieties parents face regarding their child's school
              commute. Through user research, I discovered that simple, timely
              confirmations mattered more than full GPS tracking. I crafted a
              solution with ID-based boarding updates, multi-child management,
              and regional language support. The goal was to create a trusted,
              intuitive, and scalable safety tool for every parent in India.
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
          <img src={bento16} />
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
          <img src={bento23} />
          <img src={bento24} />
          <img src={bento25} />
          <img src={bento26} />
          <img src={bento27} />
        </div>
      </div>
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/226624971/School-Bus-Tracker-App"
          target="_blank"
        >
          School Mate
        </a>
      </div>
    </div>
  );
}

export default SchoolMate;
