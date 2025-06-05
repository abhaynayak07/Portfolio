import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/Aarogya Guru/icon.png";
import banner from "../../../assets/Projects/Page/Aarogya Guru/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Aarogya Guru/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Aarogya Guru/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Aarogya Guru/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Aarogya Guru/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Aarogya Guru/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Aarogya Guru/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Aarogya Guru/third banner 2.png";
import bento11 from "../../../assets/Projects/Page/Aarogya Guru/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/Aarogya Guru/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/Aarogya Guru/bento 1.3.png";
import bento14 from "../../../assets/Projects/Page/Aarogya Guru/bento 1.4.png";
import bento15 from "../../../assets/Projects/Page/Aarogya Guru/bento 1.5.png";
import bento16 from "../../../assets/Projects/Page/Aarogya Guru/bento 1.6.png";
import bento21 from "../../../assets/Projects/Page/Aarogya Guru/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Aarogya Guru/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/Aarogya Guru/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/Aarogya Guru/bento 2.4.png";
import bento25 from "../../../assets/Projects/Page/Aarogya Guru/bento 2.5.png";
import bento26 from "../../../assets/Projects/Page/Aarogya Guru/bento 2.6.png";
import bento27 from "../../../assets/Projects/Page/Aarogya Guru/bento 2.7.png";

function AarogyaGuru() {
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
                  boxShadow: " 0px 2px 45px 0px rgba(115, 49, 255, 0.45)",
                }}
                alt="Aarogya Guru Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Aarogya Guru</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Aarogya Guru Banner" />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Aarogya Guru Banner"
            />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Aarogya Guru is a health appointment app that simplifies
                  scheduling with healthcare professionals. It eliminates the
                  hassle of managing appointments, ensuring a seamless
                  experience. Whether for a routine check-up or a specific
                  concern, the user-friendly interface offers convenience. The
                  app empowers individuals to take control of their health with
                  ease.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Designing Aarogya Guru helped me understand the importance of
                  simplifying healthcare access through intuitive digital
                  solutions. I focused on building a user-friendly interface
                  that makes appointment booking seamless, especially for users
                  in semi-urban and rural areas. The process deepened my insight
                  into the real-life pain points people face in scheduling
                  doctor visits. Overall, it reinforced how thoughtful design
                  can bridge gaps in essential services like healthcare.
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
                <h4>August 2023</h4>
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
                In India, booking doctor appointments is difficult due to low
                awareness and a chaotic process.
              </li>
              <li className="project-points">
                Patients frequently experience long wait times when seeking a
                doctor's consultation during each of their visits
              </li>
              <li className="project-points">
                The patients will be apprehensive about misplacing their medical
                records.
              </li>
              <li className="project-points">
                At times, recalling the prescribed medications can be
                challenging in case the prescription is misplaced.
              </li>
              <li className="project-points">
                Many people may lack knowledge about the most qualified doctor
                in their area who can effectively treat their illness.
              </li>
              <li className="project-points">
                Given the diversity of India, there is a possibility of a
                communication gap when scheduling appointments via phone calls.
              </li>
            </ul>
            <ul className="project-points-div mobile">
              <li className="project-points">
                In India, booking doctor appointments is difficult due to low
                awareness and a chaotic process.
              </li>
              <li className="project-points">
                Patients frequently experience long wait times when seeking a
                doctor's consultation during each of their visits
              </li>
              <li className="project-points">
                The patients will be apprehensive about misplacing their medical
                records.
              </li>

              {!showMore && (
                <button className="primary-button" onClick={toggleShowMore}>
                  See More
                </button>
              )}

              {showMore && (
                <>
                  <li className="project-points">
                    At times, recalling the prescribed medications can be
                    challenging in case the prescription is misplaced.
                  </li>
                  <li className="project-points">
                    Many people may lack knowledge about the most qualified
                    doctor in their area who can effectively treat their
                    illness.
                  </li>
                  <li className="project-points">
                    Given the diversity of India, there is a possibility of a
                    communication gap when scheduling appointments via phone
                    calls.
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
                Ensure a hassle-free and intuitive scheduling process for users
                to connect with healthcare professionals effortlessly.
              </li>
              <li className="project-points">
                Design a user-friendly interface that allows individuals to
                book, manage, and track appointments with ease.
              </li>
              <li className="project-points">
                Eliminate chaos and difficulties, encouraging more people to
                seek timely medical care.
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
              The design journey of Aarogya Guru began with research to address
              challenges in booking doctor appointments. I identified key pain
              points and ideated solutions to enhance accessibility and ease of
              use. Low-fidelity wireframes were created and refined through
              rapid iterations. Over 15 days, I designed a seamless,
              user-friendly platform for stress-free appointment booking. The
              final app empowers users to manage their healthcare effortlessly.
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
          href="https://www.behance.net/gallery/183650451/Health-Appointment-App-UIUX-Design"
          target="_blank"
        >
          Aarogya Guru
        </a>
      </div>
    </div>
  );
}

export default AarogyaGuru;
