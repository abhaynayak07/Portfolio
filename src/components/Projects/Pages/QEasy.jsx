import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/Q Easy/icon.png";
import banner from "../../../assets/Projects/Page/Q Easy/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Q Easy/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Q Easy/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Q Easy/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Q Easy/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Q Easy/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Q Easy/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Q Easy/third banner 2.png";
import bento11 from "../../../assets/Projects/Page/Q Easy/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/Q Easy/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/Q Easy/bento 1.3.png";
import bento21 from "../../../assets/Projects/Page/Q Easy/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Q Easy/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/Q Easy/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/Q Easy/bento 2.4.png";

function QEasy() {
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
                  boxShadow: "0px 2px 45px 0px #3F51B5",
                }}
                alt="Q Easy Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Q Easy</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Q Easy Banner" />
            <img src={mobilebanner} className="mobile" alt="Q Easy Banner" />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Q Easy is a queue management solution designed to solve the
                  problem of long queues in Indian public spaces like government
                  offices, hospitals, post offices, and railway stations. The
                  app enables users to book digital tokens remotely and view
                  real-time updates on queue position and estimated wait time.
                  Special provisions are made for senior citizens, pregnant
                  women, and those with disabilities.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Key takeaways from this project include understanding that
                  real UX impact comes from solving everyday user frustrations,
                  not just visual polish. I learned how small, thoughtful
                  features like reminders and token sharing can significantly
                  improve accessibility. Designing for inclusivity, like
                  prioritizing seniors or pregnant users adds real value. Most
                  importantly, I realized that empathetic design can bridge the
                  gap between public systems and people’s real needs.
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
                Senior citizens, pregnant women, and differently-abled
                individuals struggled to stand in lines for hours.
              </li>
              <li className="project-points">
                Working individuals often lost half or full days just waiting
                for their turn in government offices or hospitals.
              </li>
              <li className="project-points">
                No proper token or digital tracking system existed in many
                public places.
              </li>
              <li className="project-points">
                People had to physically be present early, even if their turn
                was hours later, fearing they'd miss it.
              </li>
              <li className="project-points">
                There was no system to book or track a token for family members
                or friends remotely.
              </li>
              <li className="project-points">
                People had no idea how many were ahead or how long they'd need
                to wait.
              </li>
            </ul>
            <ul className="project-points-div mobile">
              <li className="project-points">
                Senior citizens, pregnant women, and differently-abled
                individuals struggled to stand in lines for hours.
              </li>
              <li className="project-points">
                Working individuals often lost half or full days just waiting
                for their turn in government offices or hospitals.
              </li>
              <li className="project-points">
                No proper token or digital tracking system existed in many
                public places.
              </li>

              {!showMore && (
                <button className="primary-button" onClick={toggleShowMore}>
                  See More
                </button>
              )}

              {showMore && (
                <>
                  <li className="project-points">
                    People had to physically be present early, even if their
                    turn was hours later, fearing they'd miss it.
                  </li>
                  <li className="project-points">
                    There was no system to book or track a token for family
                    members or friends remotely.
                  </li>
                  <li className="project-points">
                    People had no idea how many were ahead or how long they'd
                    need to wait.
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
                Enabled remote token booking with real-time queue updates.
              </li>
              <li className="project-points">
                Designed an inclusive flow for special-priority users.
              </li>
              <li className="project-points">
                Introduced smart reminders and a share token feature to simplify
                planning.
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
              Journey began with observing the struggles people face in long
              queues at government offices and public places in India. I focused
              on identifying pain points, especially for those with physical
              limitations or time constraints. Through iterative wireframing and
              feedback, I crafted a user flow that felt simple yet powerful.
              This project reminded me how meaningful design emerges when
              empathy meets functionality.
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
          href="https://www.behance.net/gallery/226091977/QEasy-Digital-Queue-Management-App"
          target="_blank"
        >
          Q Easy
        </a>
      </div>
    </div>
  );
}

export default QEasy;
