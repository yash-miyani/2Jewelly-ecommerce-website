import React from "react";
import Heading from "../Components/Heading";
import JweleryCom from "../Components/JweleryCom";
import HeaderAllPage from "../Components/HeaderAllPage";
import FollowInstaSec from "../Components/FollowInstaSec";

const Shop = () => {
  return (
    <div>
      <HeaderAllPage>Shop </HeaderAllPage>

      <div className="text-center py-8">
        <Heading>Our Jewellery Selection</Heading>
        <JweleryCom first="0" last="8" />
      </div>

      <FollowInstaSec />
    </div>
  );
};

export default Shop;
