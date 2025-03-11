import React from "react";
import icon from "../../../assets/Projects/Page/Google Classroom/icon.png";
import banner from "../../../assets/Projects/Page/Google Classroom/banner.png";
import toolused from "../../../assets/Projects/Page/Google Classroom/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Google Classroom/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Google Classroom/second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Google Classroom/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Google Classroom/third banner 2.png";
import bento11 from "../../../assets/Projects/Page/Google Classroom/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/Google Classroom/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/Google Classroom/bento 1.3.png";
import bento14 from "../../../assets/Projects/Page/Google Classroom/bento 1.4.png";
import bento15 from "../../../assets/Projects/Page/Google Classroom/bento 1.5.png";
import bento21 from "../../../assets/Projects/Page/Google Classroom/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Google Classroom/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/Google Classroom/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/Google Classroom/bento 2.4.png";
import bento25 from "../../../assets/Projects/Page/Google Classroom/bento 2.5.png";
import bento26 from "../../../assets/Projects/Page/Google Classroom/bento 2.6.png";

function GoogleClassroom() {
  return (
    <div className="pages-container">
      <div className="about-project">
        <div className="project-header">
          <div className="project-header-text-and-icon">
            <div className="project-header-icon">
              <img
                src={icon}
                style={{
                  boxShadow: " 0px 2px 45px 0px rgba(25, 161, 95, 0.45)",
                }}
                alt="Google Classroom Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Google Classroom</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} alt="Google Classroom Banner" />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  Google Classroom is a free blended learning platform developed
                  by Google for educational institutions that aims to simplify
                  creating, distributing, and grading assignments. The primary
                  purpose of Google Classroom is to streamline the process of
                  sharing files between teachers and students.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  I redesigned Google Classroom with a fresh, modern look,
                  enhancing usability and engagement. I integrated a seamless
                  chat and call feature for direct student-lecturer interaction.
                  Score tests and assignment rankings were introduced to gamify
                  the learning experience. The UI was revamped for a cleaner,
                  more intuitive navigation system. I focused on improving
                  accessibility and real-time collaboration for students. The
                  entire redesign was completed within a week, ensuring
                  efficiency and innovation.
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
            <img src={secondbanner} />
          </div>
          <div className="project-points-container">
            <h3>Problem Statement</h3>
            <ul className="project-points-div">
              <li className="project-points">
                Do not get to know about the due date of assignments.
              </li>
              <li className="project-points">
                No notification bell/icon to notify about the due date of
                assignments or the class tests.
              </li>
              <li className="project-points">
                No navigation bar or search button.
              </li>
              <li className="project-points">
                Less interactive to those students who are physically challenged
                with no voice control
              </li>
              <li className="project-points">
                Virtual classes create a gap where students hesitate to clear
                doubts with teachers.
              </li>
              <li className="project-points">
                Some students may lack a Google account or use a parent's,
                altering their usernames.
              </li>
              <li className="project-points">
                Having multiple teachers for the same subject can confuse
                students about assignments, and notes.
              </li>
              <li className="project-points">
                There is no seriousness among students when the assignment is
                submitted virtually.
              </li>
              <li className="project-points">
                It becomes difficult for the students to remember the dates for
                the assignment due or class test.
              </li>
            </ul>
          </div>
          <div className="project-points-container">
            <h3>Goals</h3>
            <ul className="project-points-div">
              <li className="project-points">
                Providing users a neat and easy to understand concept including
                interacting with the teachers and visually appealing design.
              </li>
              <li className="project-points">
                Making the class more interactive ensures students find learning
                enjoyable and engaging.
              </li>
              <li className="project-points">
                Designed with a mobile-first approach for students aged 10 to
                24.
              </li>
            </ul>
          </div>
          <div className="project-third-banner">
            <img src={thirdbanner1} />
            <img src={thirdbanner2} />
          </div>
          <div className="project-journey">
            <h3>The Journey</h3>
            <p>
              The journey of designing Classroom began with in-depth user
              research to understand student and teacher needs. I applied design
              thinking to identify pain points and ideate effective solutions.
              Moving from low-fidelity to high-fidelity wireframes, I ensured a
              seamless user experience through rapid iterations.The final design
              brought an intuitive, engaging, and efficient learning environment
              to life.
            </p>
          </div>
        </div>
      </div>
      <div className="project-bento">
        <div className="project-bento-container">
          <img src={bento11} />
          <img src={bento12} />
          <img src={bento13} />
          <img src={bento14} />
          <img src={bento15} />
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
          <img src={bento23} />
          <img src={bento24} />
          <img src={bento25} />
          <img src={bento26} />
        </div>
      </div>
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/176667599/Google-Classroom-UIUX-Redesign-Case-Study"
          target="_blank"
        >
          Google Classroom
        </a>
      </div>
    </div>
  );
}

export default GoogleClassroom;
