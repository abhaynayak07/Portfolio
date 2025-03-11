import React from "react";
import DesktopBackground from "../../assets/Home/Glimpse/Desktop Background.png";
import MobileBackground from "../../assets/Home/Glimpse/Mobile Background.png";
import CocaCola from "../../assets/Home/Glimpse/CocaCola.jpg";
import CocaColaMobile from "../../assets/Home/Glimpse/CocaCola Mobile.jpg";
import ThumbsUp from "../../assets/Home/Glimpse/ThumbsUp.jpg";
import ThumbsUpMobile from "../../assets/Home/Glimpse/ThumbsUp Mobile.png";
import Pepsi from "../../assets/Home/Glimpse/Pepsi.jpg";
import PepsiMobile from "../../assets/Home/Glimpse/Pepsi Mobile.jpg";
import NiveaMen from "../../assets/Home/Glimpse/NiveaMen.jpg";
import NiveaMenMobile from "../../assets/Home/Glimpse/NiveaMen Mobile.png";
import Fizz from "../../assets/Home/Glimpse/Fizz.jpg";
import FizzMobile from "../../assets/Home/Glimpse/Fizz Mobile.jpg";
import Monster from "../../assets/Home/Glimpse/Monster.png";
import MonsterMobile from "../../assets/Home/Glimpse/Monster Mobile.png";
import Casio from "../../assets/Home/Glimpse/Casio.png";
import CasioMobile from "../../assets/Home/Glimpse/Casio Mobile.png";
import India from "../../assets/Home/Glimpse/India.jpg";
import IndiaMobile from "../../assets/Home/Glimpse/India Mobile.jpg";
import RedBull from "../../assets/Home/Glimpse/RedBull.jpg";

function Glimpse() {
  return (
    <div className="glimpse">
      <img
        className="glimpse-background desktop"
        src={DesktopBackground}
        alt="Background"
      />
      <img
        className="glimpse-background mobile"
        src={MobileBackground}
        alt="Background"
      />
      <div className="glimpse-heading">
        <h2>
          A Glimpse Through <br className="mobile" /> My Lens
        </h2>
        <p className="desktop">
          We create stunning, user-centric websites that inspire and engage.
        </p>
        <p className="mobile">Elevating Brands with Stunning Product Shots</p>
      </div>
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
