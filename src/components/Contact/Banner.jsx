import React, { useState, useEffect } from "react";
import DesktopBackground from "../../assets/Contact/Banner/Desktop Banner Background.png";
import OpenToWork from "../OpenToWork";

function Banner() {
  const words = ["Create", "Innovate", "Design", "Elevate"];
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
            <p>Contact</p>
            <div className="home-banner-scroll-text">
              <h1>
                Lets Connect &<span>{words[currentWordIndex]}</span>
              </h1>
            </div>
          </section>
          <p>
            Got an idea? Reach out, and let’s bring your vision to life with{" "}
            <br /> creativity and purpose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
