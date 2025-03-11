import React, { useState, useEffect } from "react";
import DesktopBackground from "../../assets/Home/Banner/Desktop Banner Background.png";
import MobileBackground from "../../assets/Home/Banner/Mobile Banner Background.png";
import OpenToWork from "../OpenToWork";

function Banner() {
  const words = ["Websites", "Applications", "Responsive", "Interfaces"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-banner">
      <img
        className="home-banner-background desktop"
        src={DesktopBackground}
        alt="Background"
      />
      <img
        className="home-banner-background mobile"
        src={MobileBackground}
        alt="Background"
      />
      <div className="home-banner-container">
        <OpenToWork />
        <div className="home-banner-container-main">
          <section>
            <p>Hi, I’m Abhay!</p>
            <div className="home-banner-scroll-text">
              <h1>
                I Design <br className="mobile"/>  Stunning <span>{words[currentWordIndex]}</span>
              </h1>
            </div>
          </section>
          <p>
            A Junior UX Designer currently working in <br /> Koios Studios
            Bengaluru, India
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
