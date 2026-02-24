
import Banner from "./Projects/Banner";
import Marquee from "./Home/Marquee";
import ProjectsList from "./Projects/ProjectsList";
import { Helmet } from "react-helmet-async";
import OtherProjects from "./Home/OtherProjects";
import Story from "./Home/Story";
import BackgroundStars from "./Backgroundsars"
import Industries from "./Home/Industries";
import Skill from "../components/Home/Skill";
import Glimpse from "./Home/Glimpse";
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
      <BackgroundStars />
      <Banner />
      <ProjectsList />
      {/* <Industries />
      <Marquee />
      <OtherProjects /> */}
      <Skill />
      <Glimpse />
      <Story />
      </>
   
  );
}

export default Projects;
