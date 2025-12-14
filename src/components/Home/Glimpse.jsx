/* eslint-disable no-unused-vars */
import CocaCola from "../../asset/Home/Glimpse/CocaCola.webp";
import CocaColaMobile from "../../asset/Home/Glimpse/CocaCola Mobile.webp";
import ThumbsUp from "../../asset/Home/Glimpse/ThumbsUp.webp";
import ThumbsUpMobile from "../../asset/Home/Glimpse/ThumbsUp Mobile.webp";
import Pepsi from "../../asset/Home/Glimpse/Pepsi.webp";
import PepsiMobile from "../../asset/Home/Glimpse/Pepsi Mobile.webp";
import NiveaMen from "../../asset/Home/Glimpse/NiveaMen.webp";
import NiveaMenMobile from "../../asset/Home/Glimpse/NiveaMen Mobile.webp";
import Fizz from "../../asset/Home/Glimpse/Fizz.webp";
import FizzMobile from "../../asset/Home/Glimpse/Fizz Mobile.webp";
import Monster from "../../asset/Home/Glimpse/Monster.webp";
import MonsterMobile from "../../asset/Home/Glimpse/Monster Mobile.webp";
import Casio from "../../asset/Home/Glimpse/Casio.webp";
import CasioMobile from "../../asset/Home/Glimpse/Casio Mobile.webp";
import India from "../../asset/Home/Glimpse/India.webp";
import IndiaMobile from "../../asset/Home/Glimpse/India Mobile.webp";
import RedBull from "../../asset/Home/Glimpse/RedBull.webp";
import GalleryBackgroundBlur from "../../asset/Home/Glimpse/GalleryBackgroundBlur.webp";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};


function Glimpse() {
  return (
    <div className="glimpse">
      <img className="glimpse-background desktop" src={GalleryBackgroundBlur} alt="Background" />
      <img className="glimpse-background mobile" src={GalleryBackgroundBlur} alt="Background" />

      <motion.div
        className="glimpse-heading"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.h2 variants={item}>
          A Glimpse Through <br className="mobile" /> My Lens
        </motion.h2>

        <motion.p className="desktop" variants={item}>
          We create stunning, user-centric websites that inspire and engage.
        </motion.p>

        <motion.p className="mobile" variants={item}>
          Elevating Brands with Stunning Product Shots
        </motion.p>
      </motion.div>
      <div className="glimpse-container">
        <section className="desktop">
          <div className="glimpse-set box-1">
            <img src={NiveaMen} />
          </div>
          <div className="glimpse-set box-4">
            <img src={ThumbsUp} />
          </div>
          <div className="glimpse-set box-7">
            <img src={Casio} />
          </div>
        </section>
        <section className="desktop">
          <div className="glimpse-set box-2">
            <img src={CocaCola} />
          </div>
          <div className="glimpse-set box-5">
            <img src={Fizz} />
          </div>
          <div className="glimpse-set box-8">
            <img src={India} />
          </div>
        </section>
        <section className="desktop">
          <div className="glimpse-set box-3">
            <img src={Pepsi} />
          </div>
          <div className="glimpse-set box-6">
            <img src={Monster} />
          </div>
          <div className="glimpse-set box-9">
            <img src={RedBull} />
          </div>
        </section>

        <section className="mobile">
          <div className="glimpse-set box-2">
            <img src={NiveaMenMobile} />
          </div>
          <div className="glimpse-set box-5">
            <img src={ThumbsUpMobile} />
          </div>
          <div className="glimpse-set box-8">
            <img src={PepsiMobile} />
          </div>
          <div className="glimpse-set box-8">
            <img src={IndiaMobile} />
          </div>
        </section>
        <section className="mobile">
          <div className="glimpse-set box-3">
            <img src={CocaColaMobile} />
          </div>
          <div className="glimpse-set box-6">
            <img src={MonsterMobile} />
          </div>
          <div className="glimpse-set box-9">
            <img src={CasioMobile} />
          </div>
          <div className="glimpse-set box-9">
            <img src={FizzMobile} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Glimpse;
