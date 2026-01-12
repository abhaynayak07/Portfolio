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
        I’m a UX/UI designer turning complex ideas into clear, intuitive web and mobile products. Over the years, I’ve designed B2B dashboards, SaaS platforms, and consumer-facing apps and websites across fintech, healthcare, e-commerce, travel, and more. My work spans multiple user types, devices, and interactions, delivering solutions that delight users, meet goals and drive measurable impact.
      </ScrollReveal>
    </div>
  );
}

export default Experiences;
