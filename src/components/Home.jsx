import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Experiences from "./Home/Experiences";
import Projects from "./Home/Projects";
import Glimpse from "./Home/Glimpse";
import Story from "./Home/Story";
import Industries from "./Home/Industries";
import OtherProjects from "./Home/OtherProjects";
import Skills from "./Home/Skills";
import Skill from "./Home/Skill";
import Loop from "../components/Home/Loop"
import BackgroundStars from "./Backgroundsars"
import GlobeExperiance from "./GlobeExperiance"

function Home() {
  return (
    <>
      <Helmet>
        <title>Abhay Nayak | UX Designer Portfolio</title>
        <meta
          name="description"
          content="I’m Abhay Nayak, a UX Designer passionate about building meaningful and intuitive user experiences. Explore my portfolio and UX case studies."
        />
      </Helmet>
      <BackgroundStars /> 
      <Banner />
      <Projects />
      <Experiences />
      <GlobeExperiance />
      <Skill/>
      {/* <Skills /> */}
      {/* <Marquee /> */}
      {/* <OtherProjects /> */}
      {/* <Industries />
      <Loop /> */}
      <Glimpse />
      <Story />
    </>
  );
}

export default Home;
