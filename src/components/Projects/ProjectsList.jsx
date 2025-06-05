import React from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Projects/ProjectsList/Desktop Background.png";
import MobileBackground from "../../assets/Projects/ProjectsList/Mobile Background.png";
import SchoolMate from "../../assets/Projects/ProjectsList/School Mate.png";
import SchoolMateGlow from "../../assets/Projects/ProjectsList/School Mate Background Glow.png";
import QEasy from "../../assets/Projects/ProjectsList/Q Easy.png";
import QEasyGlow from "../../assets/Projects/ProjectsList/Q Easy Background Glow.png";
import GoogleClassroom from "../../assets/Projects/ProjectsList/Google Classroom.png";
import GoogleClassroomBackgroundGlow from "../../assets/Projects/ProjectsList/Google Classroom Background Glow.png";
import RentMyRide from "../../assets/Projects/ProjectsList/Rent My Ride.png";
import RentMyRideBackgroundGlow from "../../assets/Projects/ProjectsList/Rent My Ride Background Glow.png";
import KITE from "../../assets/Projects/ProjectsList/KITE.png";
import KITEBackgroundGlow from "../../assets/Projects/ProjectsList/KITE Background Glow.png";
import CanvasCode from "../../assets/Projects/ProjectsList/Canvas & Code.png";
import CanvasCodeBackgroundGlow from "../../assets/Projects/ProjectsList/Canvas & Code Background Glow.png";
import OlliePets from "../../assets/Projects/ProjectsList/Ollie Pets.png";
import OlliePetsBackgroundGlow from "../../assets/Projects/ProjectsList/Ollie Pets Background Glow.png";
import AarogyaGuru from "../../assets/Projects/ProjectsList/Aarogya Guru.png";
import AarogyaGuruBackgroundGlow from "../../assets/Projects/ProjectsList/Aarogya Guru Background Glow.png";
import WhatsApp from "../../assets/Projects/ProjectsList/WhatsApp.png";
import WhatsAppBackgroundGlow from "../../assets/Projects/ProjectsList/WhatsApp Background Glow.png";
import YouTube from "../../assets/Projects/ProjectsList/YouTube.png";
import YouTubeBackgroundGlow from "../../assets/Projects/ProjectsList/YouTube Background Glow.png";
import UrbanMonkey from "../../assets/Projects/ProjectsList/Urban Monkey.png";
import UrbanMonkeyBackgroundGlow from "../../assets/Projects/ProjectsList/Urban Monkey Background Glow.png";
import Coolzee from "../../assets/Projects/ProjectsList/Coolzee.png";
import CoolzeeBackgroundGlow from "../../assets/Projects/ProjectsList/Coolzee Background Glow.png";

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
          <h2>All Projects</h2>
          <p>
            We create stunning, user-centric websites <br className="mobile" />{" "}
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
        <Link className="projects-set" to="/projects/rent_my_ride">
          <div className="projects-set-img">
            <img src={RentMyRide} className="main-img" />
            <img src={RentMyRideBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Rent My Ride</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/kite_by_zerodha">
          <div className="projects-set-img">
            <img src={KITE} className="main-img" />
            <img src={KITEBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Kite by Zerodha</h3>
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
        <Link className="projects-set" to="/projects/whatsApp">
          <div className="projects-set-img">
            <img src={WhatsApp} className="main-img" />
            <img src={WhatsAppBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>WhatsApp</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/youtube">
          <div className="projects-set-img">
            <img src={YouTube} className="main-img" />
            <img src={YouTubeBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>YouTube</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/urban_monkey">
          <div className="projects-set-img">
            <img src={UrbanMonkey} className="main-img" />
            <img src={UrbanMonkeyBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Website Design</p>
            <section>
              <h3>Urban Monkey</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/coolzee">
          <div className="projects-set-img">
            <img src={Coolzee} className="main-img" />
            <img src={CoolzeeBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Coolzee</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
