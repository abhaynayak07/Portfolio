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
        Product Designer with experience working across end-to-end design processes from user research and journey mapping to interaction design and quality execution. I collaborate closely with engineers and product teams to design scalable, system-driven solutions for complex problems. My work focuses on clarity, usability, and measurable outcomes, balancing user needs with technical and business constraints.
      </ScrollReveal>
    </div>
  );
}

export default Experiences;
