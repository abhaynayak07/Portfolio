import React from "react";
import icon from "../../../assets/Projects/Page/Urban Monkey/icon.png";
import banner from "../../../assets/Projects/Page/Urban Monkey/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Urban Monkey/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Urban Monkey/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Urban Monkey/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Urban Monkey/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Urban Monkey/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Urban Monkey/third banner 1.png";
import mobilethirdbanner1 from "../../../assets/Projects/Page/Urban Monkey/mobile third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Urban Monkey/third banner 2.png";

function UrbanMonkey() {
  return (
    <div className="pages-container">
      <div className="about-project">
        <div className="project-header">
          <div className="project-header-text-and-icon">
            <div className="project-header-icon">
              <img
                src={icon}
                style={{
                  boxShadow: "  0px 2px 45px 0px rgba(255, 255, 255, 0.45)",
                }}
                alt="Urban Monkey Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Urban Monkey</h2>
              <p>Website Design</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Urban Monkey Banner" />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Urban Monkey Banner"
            />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Urban Monkey, a dynamic fashion website, curates a bold and
                  eclectic collection that captures the spirit of urban
                  lifestyle. With a curated collection of bold and expressive
                  accessories, from statement sunglasses to trendy hats, Urban
                  Monkey empowers individuals to embrace their unique style,
                  ensuring that every purchase is a step towards urban fashion
                  self-expression.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Redesigning Urban Monkey focused on improving the landing page
                  for better user experience and brand identity. I enhanced
                  navigation, visuals, and performance to create a seamless
                  shopping journey. Stronger CTAs and intuitive flow boosted
                  engagement and conversions. The final design delivered a
                  stylish, high-performing, and user-friendly website.
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
                <h4>November 2023</h4>
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
                Design an engaging landing page that instantly conveys Urban
                Monkey’s streetwear identity and unique offerings.
              </li>
              <li className="project-points">
                Ensure intuitive navigation with visually appealing sections
                that drive users to explore products effortlessly.
              </li>
              <li className="project-points">
                Optimize the layout with strong CTAs, fast-loading visuals, and
                a smooth user flow to boost engagement and sales.
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
              The journey of redesigning Urban Monkey began with analyzing user
              behavior to identify pain points in navigation and engagement. I
              focused on enhancing the landing page to better reflect the
              brand’s streetwear identity. Iterative design improvements ensured
              a seamless shopping experience with clear CTAs and intuitive flow.
              Performance optimization, including faster load times and mobile
              responsiveness, was a key priority.
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
          href="https://www.behance.net/gallery/184248049/Ecommerce-Fashion-Website-Redesign"
          target="_blank"
        >
          Urban Monkey
        </a>
      </div>
    </div>
  );
}

export default UrbanMonkey;
