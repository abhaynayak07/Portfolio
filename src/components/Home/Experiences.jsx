import ScrollReveal from "../ScrollReveal"

function Experiences() {
  return (
    <div className="experiences">
      {/* <img className="experiences-background desktop" src={DesktopBackground} />
      <img className="experiences-background mobile " src={MobileBackground} /> */}
    
        <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        I’m a hands-on UX/UI designer who turns ideas into clear, functional, and delightful products. Over the years, I’ve worked across diverse industries from SaaS, travel, fintech, e-commerce, AI, healthcare, and more. Designing for multiple user types, devices, and interactions, including micro-animations.
      </ScrollReveal>
    </div>
  );
}

export default Experiences;
