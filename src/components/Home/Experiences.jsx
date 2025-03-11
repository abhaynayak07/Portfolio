import React from "react";
import DesktopBackground from "../../assets/Home/Experiences/Desktop Background.png";
import MobileBackground from "../../assets/Home/Experiences/Mobile Background.png";

function Experiences() {
  return (
    <div className="experiences">
      <img className="experiences-background desktop" src={DesktopBackground} />
      <img className="experiences-background mobile " src={MobileBackground} />
      <p>
        UX Designer with over a year of experience turning user problems
        <br className="desktop" />
        into intuitive solutions, crafting seamless experiences{" "}
        <br className="desktop" /> for multiple clients across diverse
        industries.
      </p>
    </div>
  );
}

export default Experiences;
