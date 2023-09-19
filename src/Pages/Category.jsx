import React from "react";
import HeaderAllPage from "../Components/HeaderAllPage";
import FollowInstaSec from "../Components/FollowInstaSec";
import JweleryCom from "../Components/JweleryCom";

const Category = () => {
  return (
    <div>
      <HeaderAllPage>Category </HeaderAllPage>

      <div className="py-8">
        <div className="d-flex justify-content-center list-unstyled Protfolio-Btn">
          <li> Every Ocian </li>
          <li> Golden Ring </li>
          <li> Precius Metals</li>
          <li> Acient Ocian </li>
          <li> Ring Silver </li>
        </div>
      </div>

      <div className="pb-5">
        <JweleryCom />
      </div>

      <FollowInstaSec />
    </div>
  );
};

export default Category;
