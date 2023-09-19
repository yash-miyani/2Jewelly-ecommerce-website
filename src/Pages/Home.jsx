import React from "react";
import {
  HomeHeader,
  TrandingCollection,
  CategoreyHome,
} from "../Components/HomeSection";
import JweleryCom from "../Components/JweleryCom";
import Heading from "../Components/Heading";
import Services from "../Components/Services";
import ClientSlider from "../Components/ClientSlider";
import BlogPost from "../Components/BlogPost";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="py-8">
        <Heading>Our Jewellery Selection</Heading>
        <JweleryCom first="0" last="4" />
      </div>

      <div className="py-8" style={{ backgroundColor: "#fff3ed" }}>
        <Heading>Our Trending Collection</Heading>
        <TrandingCollection />
      </div>

      <CategoreyHome />

      <div className="py-8" style={{ backgroundColor: "#fff3ed" }}>
        <Heading>Our Services Section</Heading>
        <Services first="0" last="3" />
      </div>

      <div className="py-8">
        <Heading>Our Jewellery Selection</Heading>
        <JweleryCom first="4" last="8" />
      </div>

      <div style={{ backgroundColor: "#ff9f6b" }} className="py-8 text-white">
        <Heading>Our Happy Clients</Heading>
        <ClientSlider />
      </div>

      <div className="py-8">
        <BlogPost
          css="col-lg-4 col-md-6 col-sm-12 col-12 mt-5"
          pNone="d-none"
          lastNoSlice="3"
        />
      </div>
    </>
  );
};

export default Home;
