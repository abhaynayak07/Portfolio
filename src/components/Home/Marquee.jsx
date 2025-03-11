import React from "react";
import DesktopBackground from "../../assets/Home/Marquee/Desktop Background.png";
import GoogleClassroom from "../../assets/Home/Marquee/Google Classroom.png";
import Ollie from "../../assets/Home/Marquee/Ollie.png";
import Whatsapp from "../../assets/Home/Marquee/Whatsapp.png";
import KITE from "../../assets/Home/Marquee/KITE.png";
import Cricbuzz from "../../assets/Home/Marquee/Cricbuzz.png";
import URBANMoneky from "../../assets/Home/Marquee/URBAN Moneky.png";
import Youtube from "../../assets/Home/Marquee/Youtube.png";

function Marquee() {
  return (
    <div className="home-marquee">
      <img
        className="home-marquee-background"
        src={DesktopBackground}
        alt="Background"
      />
      <h2>Redesign Concepts</h2>
      <div className="home-marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-marquee">
            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />

            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />

            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />

            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />
          </div>
        </div>
        <div className="home-marquee-dark left"></div>
        <div className="home-marquee-dark right"></div>
      </div>
    </div>
  );
}

export default Marquee;
