import React, { useState, useEffect } from "react";
import DesktopBackground from "../../assets/Projects/Banner/Desktop Banner Background.png";
import OpenToWork from "../OpenToWork";

function Banner() {
  const words = ["Passion", "Purpose", "Vision", "Impact"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-banner project-banner">
      <img
        className="home-banner-background"
        src={DesktopBackground}
        alt="Background"
      />
      <div className="home-banner-container">
        <OpenToWork />
        <div className="home-banner-container-main">
          <section>
            <p>My Projects</p>
            <div className="home-banner-scroll-text">
              <h1>
                Fueling Creativity Into <span>{words[currentWordIndex]}</span>
              </h1>
            </div>
          </section>
          <p>
            My journey as a UX designer, focused on transforming complex <br />
            challenges into intuitive, user-centered solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
