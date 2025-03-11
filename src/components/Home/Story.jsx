import React from "react";
import Trailer from "../../assets/Home/Story/Teaser.mp4";
import Img1 from "../../assets/Home/Story/Img1.png";
import Img2 from "../../assets/Home/Story/Img2.png";
import Img3 from "../../assets/Home/Story/Img3.png";
import Img4 from "../../assets/Home/Story/Img4.png";

function Story() {
  return (
    <div className="home-story">
      <div className="heading">
        <h2>
          Sacred Rituals,
          <br /> Enduring Stories
        </h2>
        <p>
          The Heartbeat of Culture, Passed Down <br className="mobile" />{" "}
          Through Generations
        </p>
      </div>
      <div className="home-story-container">
        <video src={Trailer} muted autoPlay loop />
        <div className="project-journey">
          <h3>Aarbhata</h3>
          <p>
            ‘Aarbhata' is a short documentary about a native tiger dance,
            capturing deep faith and belief behind the sacred ritual where
            participants symbolically embody tigers through body painting for a
            dedicated two-day worship honoring Lord Shri Krishna in Udupi
            (Karnataka, India)
          </p>
        </div>
        <div className="home-story-img">
          <section>
            <img src={Img1} />
            <img src={Img2} />
          </section>
          <section>
            <img src={Img3} />
            <img src={Img4} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Story;
