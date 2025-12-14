import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Contact/Banner";
import Forms from "./Contact/Forms";
import Marquee from "./Contact/Marquee";
import BackgroundStars from "./Backgroundsars"

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Abhay Nayak | UX Designer</title>
        <meta
          name="description"
          content="Reach out to Abhay Nayak for freelance UX design work, collaborations, or job opportunities."
        />
      </Helmet>
      <BackgroundStars /> 
      <Banner />
      <Forms />
      <Marquee />
    </>
  );
}

export default Contact;
