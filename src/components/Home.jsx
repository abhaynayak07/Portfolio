import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import Marquee from "./Home/Marquee";
import Experiences from "./Home/Experiences";
import Projects from "./Home/Projects";
import Glimpse from "./Home/Glimpse";
import Story from "./Home/Story";

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
      <Banner />
      <Marquee />
      <Experiences />
      <Projects />
      <Glimpse />
      <Story />
    </>
  );
}

export default Home;
