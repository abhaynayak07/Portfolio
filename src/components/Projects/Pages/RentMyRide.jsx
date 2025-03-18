import React from "react";
import { Link } from "react-router-dom";
import icon from "../../../assets/Projects/Page/Rent My Ride/icon.png";
import banner from "../../../assets/Projects/Page/Rent My Ride/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Rent My Ride/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Rent My Ride/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Rent My Ride/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Rent My Ride/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Rent My Ride/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Rent My Ride/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Rent My Ride/third banner 2.png";
import bento12 from "../../../assets/Projects/Page/Rent My Ride/bento 1.2.png";
import bento11 from "../../../assets/Projects/Page/Rent My Ride/bento 1.1.png";
import bento13 from "../../../assets/Projects/Page/Rent My Ride/bento 1.3.png";
import bento14 from "../../../assets/Projects/Page/Rent My Ride/bento 1.4.png";
import bento21 from "../../../assets/Projects/Page/Rent My Ride/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Rent My Ride/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/Rent My Ride/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/Rent My Ride/bento 2.4.png";
import bento25 from "../../../assets/Projects/Page/Rent My Ride/bento 2.5.png";

function RentMyRide() {
  return (
    <div className="pages-container">
      <div className="about-project">
        <div className="project-header">
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
              <p>Mobile Application</p>
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
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Rent My Ride stands out as a reliable and user-friendly
                  vehicle rental app, serving millions of users across India.
                  With its commitment to timely assistance in case of breakdowns
                  or other issues, it ensures that customers can enjoy a
                  comfortable and worry-free ride.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Designing "Rent My Ride" was a deep dive into understanding
                  user needs for seamless vehicle rentals across India. I
                  focused on crafting an intuitive user experience that
                  simplifies the booking process. Through this project, I
                  learned valuable insights about user behavior, accessibility,
                  and optimizing navigation for convenience. Balancing
                  functionality with a clean, engaging design was a key
                  challenge.
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
                <h4>October 2023</h4>
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
                Ensure a hassle-free and intuitive process for users to rent
                vehicles quickly and efficiently across India.
              </li>
              <li className="project-points">
                Create an engaging and accessible interface that caters to
                diverse user needs
              </li>
              <li className="project-points">
                Build a secure platform with verified listings, clear pricing,
                and a smooth rental experience
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
              The journey of designing Rent My Ride started with in-depth user
              research to understand rental challenges in India. I identified
              pain points like complex booking, unclear pricing, and trust
              issues. Using design thinking, I created low-fidelity wireframes
              and refined them through iterations and feedback. The
              high-fidelity prototype ensured an intuitive and seamless booking
              experience. The final product delivered a user-friendly,
              efficient, and reliable rental platform.
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
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
          <img src={bento23} />
          <img src={bento24} />
          <img src={bento25} />
        </div>
      </div>
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/182024727/Booking-App-UIUX-Design"
          target="_blank"
        >
          Rent My Ride
        </a>
      </div>
    </div>
  );
}

export default RentMyRide;
