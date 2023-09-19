import React from "react";
import HeaderAllPage from "../Components/HeaderAllPage";
import FollowInstaSec from "../Components/FollowInstaSec";
import {
  AboutBgVideoSec2,
  AboutSec1,
  AboutSec2,
} from "../Components/AboutSection";
import Services from "../Components/Services";
import Heading from "../Components/Heading";

const About = () => {
  return (
    <div className=" overflow-hidden">
      <HeaderAllPage> About us </HeaderAllPage>

      <AboutSec1 />

      <div className="py-8" style={{ backgroundColor: "#fff3ed" }}>
        <Heading>Our Services Section</Heading>
        <Services first="3" last="8" />
      </div>

      <div>
        <AboutBgVideoSec2 />
      </div>

      <div className="py-8">
        <AboutSec2
          title="Dissent Bracelet"
          img="Assets/images/Aboutsec2.png"
          btnText="read more"
        />

        <AboutSec2
          order1="order-1"
          title="Pearl Band Pendent"
          img="Assets/images/Aboutsec3.png"
          btnText="our product"
        />
      </div>

      <FollowInstaSec />
    </div>
  );
};

export default About;
