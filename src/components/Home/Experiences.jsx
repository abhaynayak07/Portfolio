import ScrollReveal from "../ScrollReveal"
// import DesktopBackground from "../../assets/Home/Experiences/Desktop Background.webp";
// import MobileBackground from "../../assets/Home/Experiences/Mobile Background.webp";

function Experiences() {
  return (
    <div className="experiences">
      {/* <img className="experiences-background desktop" src={DesktopBackground} />
      <img className="experiences-background mobile " src={MobileBackground} /> */}
      <div className="white-blur-exp">
          <div className="blur-ellips-exp"></div>
        </div>
    
        <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
I'm a UX/UI and Visual Designer with 3 years of experience designing B2B Saas, admin panels, transactional platforms, and responsive web products. I focus on simplifying complex workflows, improving system usability, and designing interfaces that support operational clarity. I’ve worked on data-heavy dashboards, admin tools, and user-facing platforms across web and mobile.

I collaborate closely with product, engineering, and business teams to translate requirements into scalable, usable design solutions.
      </ScrollReveal>
    </div>
  );
}

export default Experiences;
