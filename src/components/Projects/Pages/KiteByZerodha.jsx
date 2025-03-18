import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/Kite By Zerodha/icon.png";
import banner from "../../../assets/Projects/Page/Kite By Zerodha/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Kite By Zerodha/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Kite By Zerodha/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Kite By Zerodha/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Kite By Zerodha/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Kite By Zerodha/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Kite By Zerodha/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Kite By Zerodha/third banner 2.png";
import bento11 from "../../../assets/Projects/Page/Kite By Zerodha/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/Kite By Zerodha/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/Kite By Zerodha/bento 1.3.png";
import bento14 from "../../../assets/Projects/Page/Kite By Zerodha/bento 1.4.png";
import bento15 from "../../../assets/Projects/Page/Kite By Zerodha/bento 1.5.png";
import bento16 from "../../../assets/Projects/Page/Kite By Zerodha/bento 1.6.png";
import bento21 from "../../../assets/Projects/Page/Kite By Zerodha/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Kite By Zerodha/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/Kite By Zerodha/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/Kite By Zerodha/bento 2.4.png";
import bento25 from "../../../assets/Projects/Page/Kite By Zerodha/bento 2.5.png";
import bento26 from "../../../assets/Projects/Page/Kite By Zerodha/bento 2.6.png";
import bento27 from "../../../assets/Projects/Page/Kite By Zerodha/bento 2.7.png";

function KiteByZerodha() {
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
                  boxShadow: " 0px 2px 45px 0px rgba(246, 70, 26, 0.45)",
                }}
                alt="Kite By Zerodha Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Kite by Zerodha</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img
              src={banner}
              className="desktop"
              alt="Kite By Zerodha Banner"
            />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Kite By Zerodha Banner"
            />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Kite is an online trading platform that allows users to trade
                  in various financial instruments such as stocks, commodities,
                  and derivatives on Indian stock exchanges. The platform
                  provides real-time market data, advanced charting tools,
                  portfolio tracking, order placement, and other trading-related
                  features.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Redesigning Kite by Zerodha focused on improving clarity,
                  navigation, and overall user experience. Users can now
                  effortlessly explore the company’s offerings and track their
                  documentation process with ease. The clear distinction between
                  ETFs and stocks, along with categorized sections, enhances
                  investment understanding. Quick access to various sectors and
                  top performers supports informed decision-making. The
                  introduction of the 'PLANS' feature empowers users to invest
                  strategically in key life stages like education and health,
                  making the app more valuable and user-friendly.
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
                No introduction page to highlight the company’s offerings and
                unique advantages over competitors.
              </li>
              <li className="project-points">
                No notification icon to track the performance of purchased
                stocks (rising or declining).
              </li>
              <li className="project-points">
                The landing page shows only five stock companies, making it
                difficult for beginners to explore and trade efficiently.
              </li>
              <li className="project-points">
                Users must search manually to compare stock performance, as
                there's no easy way to discover top-performing companies.
              </li>
              <li className="project-points">
                Gold ETFs and stocks are mixed, with no separate sections to
                distinguish between them.
              </li>
              <li className="project-points">
                The search bar lacks a voice assistant for quick, hands-free
                searches.
              </li>
              <li className="project-points">
                No option to add or link a new bank account within the app.
              </li>
              <li className="project-points">
                Users cannot track their submitted application after completing
                the documentation process.
              </li>
              <li className="project-points">
                The absence of company logos makes it harder for users to
                recognize and differentiate stocks.
              </li>
            </ul>
            <ul className="project-points-div mobile">
              <li className="project-points">
                No introduction page to highlight the company’s offerings and
                unique advantages over competitors.
              </li>
              <li className="project-points">
                No notification icon to track the performance of purchased
                stocks (rising or declining).
              </li>
              <li className="project-points">
                The landing page shows only five stock companies, making it
                difficult for beginners to explore and trade efficiently.
              </li>

              {!showMore && (
                <button className="primary-button" onClick={toggleShowMore}>
                  See More
                </button>
              )}

              {showMore && (
                <>
                  <li className="project-points">
                    Users must search manually to compare stock performance, as
                    there's no easy way to discover top-performing companies.
                  </li>
                  <li className="project-points">
                    Gold ETFs and stocks are mixed, with no separate sections to
                    distinguish between them.
                  </li>
                  <li className="project-points">
                    The search bar lacks a voice assistant for quick, hands-free
                    searches.
                  </li>
                  <li className="project-points">
                    No option to add or link a new bank account within the app.
                  </li>
                  <li className="project-points">
                    Users cannot track their submitted application after
                    completing the documentation process.
                  </li>
                  <li className="project-points">
                    The absence of company logos makes it harder for users to
                    recognize and differentiate stocks.
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
                Simplifying the experience for beginner and intermediate
                investors/traders.
              </li>
              <li className="project-points">
                Ensuring a clean, user-friendly interface while keeping users
                informed about trending stocks in India.
              </li>
              <li className="project-points">
                Making the app more interactive and encouraging users to invest
                with confidence.
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
              The redesign of Kite by Zerodha began with in-depth research to
              identify user pain points like complex navigation, unclear
              ETF-stock distinction, and limited stock discovery. Using design
              thinking, I developed low-fidelity wireframes to improve clarity
              and accessibility. Iterative testing and feedback refined the UI,
              enhancing navigation and simplifying the documentation process.
              Key additions included categorized investment sections, better
              stock tracking, and improved user engagement tools. The final
              design delivered a seamless, intuitive, and efficient trading
              experience for all users.
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
          href="https://www.behance.net/gallery/178312221/Stocks-App-UIUX-Redesign-Case-Study"
          target="_blank"
        >
          Kite By Zerodha
        </a>
      </div>
    </div>
  );
}

export default KiteByZerodha;
