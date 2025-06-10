import React from "react";
import Banner from "./Projects/Banner";
import Marquee from "./Home/Marquee";
import ProjectsList from "./Projects/ProjectsList";
import { Helmet } from "react-helmet-async";

function Projects() {
  return (
    <>
      <Helmet>
        <title>UX Design Case Studies | Abhay Nayak</title>
        <meta
          name="description"
          content="Explore a curated list of UX design projects by Abhay Nayak, showcasing real-world problem solving, wireframes, and user research."
        />
      </Helmet>
      <Banner />
      <Marquee />
      <ProjectsList />
    </>
  );
}

export default Projects;
