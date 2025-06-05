import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Projects/Desktop Background.png";
import MobileBackground from "../../assets/Home/Projects/Mobile Background.png";
import SchoolMate from "../../assets/Home/Projects/School Mate.png";
import SchoolMateGlow from "../../assets/Home/Projects/School Mate Background Glow.png";
import QEasy from "../../assets/Home/Projects/Q Easy.png";
import QEasyGlow from "../../assets/Home/Projects/Q Easy Background Glow.png";
import GoogleClassroom from "../../assets/Home/Projects/Google Classroom.png";
import GoogleClassroomBackgroundGlow from "../../assets/Home/Projects/Google Classroom Background Glow.png";
import CanvasCode from "../../assets/Home/Projects/Canvas & Code.png";
import CanvasCodeBackgroundGlow from "../../assets/Home/Projects/Canvas & Code Background Glow.png";
import OlliePets from "../../assets/Home/Projects/Ollie Pets.png";
import OlliePetsBackgroundGlow from "../../assets/Home/Projects/Ollie Pets Background Glow.png";
import AarogyaGuru from "../../assets/Home/Projects/Aarogya Guru.png";
import AarogyaGuruBackgroundGlow from "../../assets/Home/Projects/Aarogya Guru Background Glow.png";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-heading">
        <img
          className="projects-heading-background desktop"
          src={DesktopBackground}
        />
        <img
          className="projects-heading-background mobile"
          src={MobileBackground}
        />
        <div className="projects-heading-text">
          <h2>Recent Projects</h2>
          <p>
            Creating stunning, user-centric websites <br className="mobile" />{" "}
            that inspire and <br className="desktop" /> engage.
          </p>
        </div>
      </div>
      <div className="projects-container">
         <Link className="projects-set" to="/projects/school_mate">
                  <div className="projects-set-img">
                    <img src={SchoolMate} className="main-img" />
                    <img src={SchoolMateGlow} className="glow-img" />
                  </div>
                  <div className="projects-set-text">
                    <p>Mobile Application</p>
                    <section>
                      <h3>School Mate</h3>
                      <sub>2025</sub>
                    </section>
                  </div>
                </Link>
                <Link className="projects-set" to="/projects/q_easy">
                  <div className="projects-set-img">
                    <img src={QEasy} className="main-img" />
                    <img src={QEasyGlow} className="glow-img" />
                  </div>
                  <div className="projects-set-text">
                    <p>Mobile Application</p>
                    <section>
                      <h3>Q Easy</h3>
                      <sub>2025</sub>
                    </section>
                  </div>
                </Link>
        <Link className="projects-set" to="/projects/google_classroom">
          <div className="projects-set-img">
            <img src={GoogleClassroom} className="main-img" />
            <img src={GoogleClassroomBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Google Classroom</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/canvas_and_code">
          <div className="projects-set-img">
            <img src={CanvasCode} className="main-img" />
            <img src={CanvasCodeBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Website Design</p>
            <section>
              <h3>Canvas & Code</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/ollie_pets">
          <div className="projects-set-img">
            <img src={OlliePets} className="main-img" />
            <img src={OlliePetsBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Website Design</p>
            <section>
              <h3>Ollie Pets</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/aarogya_guru">
          <div className="projects-set-img">
            <img src={AarogyaGuru} className="main-img" />
            <img src={AarogyaGuruBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Aarogya Guru</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
      </div>
      <Link to="/projects" className="primary-button">
        View More
      </Link>
    </div>
  );
}

export default Projects;
