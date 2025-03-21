import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/Ollie Pets/icon.png";
import banner from "../../../assets/Projects/Page/Ollie Pets/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Ollie Pets/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Ollie Pets/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Ollie Pets/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Ollie Pets/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Ollie Pets/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Ollie Pets/third banner 1.png";
import mobilethirdbanner1 from "../../../assets/Projects/Page/Ollie Pets/mobile third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Ollie Pets/third banner 2.png";

function OlliePets() {
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
                  boxShadow: " 0px 2px 45px 0px rgba(166, 153, 145, 0.65)",
                }}
                alt="Ollie Pets Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Ollie Pets</h2>
              <p>Website Design</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Ollie Pets Banner" />
            <img
              src={mobilebanner}
              className="mobile"
              alt="Ollie Pets Banner"
            />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Ollie Pets is a pet wellness brand that provides freshly
                  cooked, human-grade food customized to each dog's nutritional
                  needs. The brand focuses on health, quality, and convenience,
                  ensuring pets get balanced meals tailored for them. With a
                  subscription-based model, Ollie delivers personalized meal
                  plans straight to pet owners' doors.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Redesigning for Ollie Pets focused on creating a seamless
                  experience for pet owners to access fresh, human-grade pet
                  food. The interface was designed for easy subscription
                  management, personalized meal plans, and effortless ordering.
                  Emphasis was placed on clarity, trust, and engagement,
                  ensuring users understood the benefits of tailored pet
                  nutrition. The final design delivered an intuitive and
                  visually appealing platform that enhances pet wellness and
                  convenience.
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
                <h4>July 2023</h4>
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
                The font sizes in headings and body text lack uniformity,
                affecting readability.
              </li>
              <li className="project-points">
                The website does not immediately feel engaging or appealing as a
                pet food brand.
              </li>
              <li className="project-points">
                Users don’t receive meal suggestions based on their past
                preferences.
              </li>
              <li className="project-points">
                There is no search button to quickly find meals, plans, or
                products.
              </li>
              <li className="project-points">
                Users are unaware of meal customization options and product
                offerings.
              </li>
              <li className="project-points">
                Contact options are hard to find, and there are no engaging
                articles on pet nutrition.
              </li>
            </ul>
            <ul className="project-points-div mobile">
              <li className="project-points">
                The font sizes in headings and body text lack uniformity,
                affecting readability.
              </li>
              <li className="project-points">
                The website does not immediately feel engaging or appealing as a
                pet food brand.
              </li>
              <li className="project-points">
                Users don’t receive meal suggestions based on their past
                preferences.
              </li>

              {!showMore && (
                <button className="primary-button" onClick={toggleShowMore}>
                  See More
                </button>
              )}

              {showMore && (
                <>
                  <li className="project-points">
                    There is no search button to quickly find meals, plans, or
                    products.
                  </li>
                  <li className="project-points">
                    Users are unaware of meal customization options and product
                    offerings.
                  </li>
                  <li className="project-points">
                    Contact options are hard to find, and there are no engaging
                    articles on pet nutrition.
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
                Improve website structure with consistent design, clear fonts,
                and an intuitive search feature for easy meal and product
                discovery.
              </li>
              <li className="project-points">
                Introduce personalized meal recommendations, engaging
                pet-related content, and clear product information to build
                trust.
              </li>
              <li className="project-points">
                Make customer support easily accessible on the landing page and
                ensure users can quickly find details about meal customization.
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
              The journey began with user research to understand pet owners'
              challenges in finding high-quality, tailored pet food. I
              identified pain points like confusing meal customization, lack of
              trust in ingredients, and complex subscription processes. Through
              iterative design, I created a user-friendly interface with smooth
              navigation, meal personalization, and clear communication. The
              final design ensures a seamless, engaging, and trustworthy
              experience for pet owners.
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
          href="https://www.behance.net/gallery/174444103/Pet-Food-Website-Redesign"
          target="_blank"
        >
          Ollie Pets
        </a>
      </div>
    </div>
  );
}

export default OlliePets;
