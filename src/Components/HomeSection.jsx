import { Link } from "react-router-dom";

import React from "react";

export const HomeHeader = () => {
  return (
    <>
      <div style={{ paddingTop: "100px", background: "#ff9f6b" }}>
        <div className="py-5">
          <div className="container py-5 home-header">
            <div className="row">
              <div
                className="col-lg-6 col-sm-6 col-12 align-self-center"
                data-aos="fade-right"
              >
                <h1>Sparkle That Brings The Luxury In You</h1>
                <div className="my-3">
                  <button className="btn btn-success">View More</button>
                </div>
                <div>
                  <img
                    src="Assets/images/home1.png"
                    alt="home1"
                    className="w-100"
                  />
                </div>
              </div>
              <div
                className="col-lg-6 col-sm-6 col-12 pt-5"
                data-aos="fade-left"
              >
                <img
                  src="Assets/images/home2.png"
                  alt="home2"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#fff3ed" }} className="py-5">
          <div className=" container py-5" data-aos="fade-up">
            <h2 className="py-5 text-center home-header-h2 lh-base">
              All Of Our Jewellery Is Handmade With Fairmined Gold In Our
              Workshop In France
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export const TrandingCollection = () => {
  return (
    <div>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12 align-self-center">
            <img
              src="Assets/images/tranding-col1.png"
              alt="tranding"
              className="w-100"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <img
                src="Assets/images/tranding-col2.png"
                alt="tranding"
                className="w-100"
              />
            </div>

            <div className="text-center mt-3">
              <h2>Bangle crystals knots</h2>
              <p style={{ color: "#ff9f6b" }}> $500.00 USD</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12 align-self-center">
            <img
              src="Assets/images/tranding-col3.png"
              alt="tranding"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CategoreyHome = () => {
  return (
    <div className="py-8 categorey-home" data-aos="fade-up">
      <div className="container text-center">
        <h2 className="mb-5 mt-5">Shop By Category</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <Link
            className=" position-relative"
            to="/category"
            data-aos="fade-up"
          >
            Every Occesion ,
            <span className="categoryHome-img">
              <img src="Assets/images/CategoryHome1.png" alt="ocian" />
            </span>
          </Link>
          <Link className="position-relative" to="/category" data-aos="fade-up">
            Golden Ring ,
            <span className="categoryHome-img">
              <img src="Assets/images/CategoryHome2.png" alt="ocian" />
            </span>
          </Link>
          <Link className="position-relative" to="/category" data-aos="fade-up">
            Precius Metals ,
            <span className="categoryHome-img">
              <img src="Assets/images/CategoryHome3.png" alt="ocian" />
            </span>
          </Link>
          <Link className="position-relative" to="/category" data-aos="fade-up">
            Anciant Occesion,
            <span className="categoryHome-img">
              <img src="Assets/images/CategoryHome4.png" alt="ocian" />
            </span>
          </Link>
          <Link className="position-relative" to="/category" data-aos="fade-up">
            Ring In Sliver
            <span className="categoryHome-img">
              <img src="Assets/images/CategoryHome5.png" alt="ocian" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
