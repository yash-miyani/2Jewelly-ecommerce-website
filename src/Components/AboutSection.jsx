import React from "react";
import { Link } from "react-router-dom";

export const AboutSec1 = () => {
  return (
    <div className="py-8" style={{ background: "#fff3ed" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 align-self-center"
            data-aos="fade-right"
          >
            <div className="about-sec1">
              <h2>Perfect Match For Every Occasion</h2>
              <p className="mb-4 mt-2">
                Jewellery can be worn for various occasions, such as weddings,
                parties, formal events, or even for everyday wear. They can be
                given as gifts to mark special occasions, such as birthdays,
                anniversaries, or graduations.
              </p>

              <div className="row">
                <div className="col-lg-4 col-4">
                  <h3 className="fs-1">85%</h3>
                  <h4 className="fs-6">Handcrafted Item</h4>
                </div>
                <div className="col-lg-4 col-4">
                  <h3 className="fs-1">1.2m</h3>
                  <h4 className="fs-6">Happy Clients</h4>
                </div>
                <div className="col-lg-4 col-4">
                  <h3 className="fs-1">100%</h3>
                  <h4 className="fs-6">Our Sevices</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12"
            data-aos="fade-left"
          >
            <img
              src="Assets/images/aboutsec1.png"
              alt="about"
              className=" img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const AboutBgVideoSec2 = () => {
  return (
    <div className="AboutBg-videoImg d-flex justify-content-center align-items-center ">
      <Link
        className="about-bg-i"
        to="https://www.youtube.com/watch?v=R5jNn7a2YdI&ab_channel=Ornamentss"
        target="_blank"
      >
        <i class="bi bi-play-fill"></i>
      </Link>
    </div>
  );
};

export const AboutSec2 = ({ order1, title, img, btnText }) => {
  return (
    <div>
      <div className=" container mb-5">
        <div className="row">
          <div
            className={`col-lg-6 col-md-6 col-sm-12 col-12 my-5 my-md-0 ${order1}`}
            data-aos={order1 ? "fade-left" : "fade-right"}
          >
            <img src={img} alt="about" className="img-fluid" />
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 col-12 align-self-center"
            data-aos={order1 ? "fade-right" : "fade-left"}
          >
            <div>
              <h2 className="fs-1">{title}</h2>
              <p>
                Jewellery can be worn for various occasions, such as weddings,
                parties, formal events, or even for everyday wear. They can be
                given as gifts to mark special occasions, such as birthdays,
                anniversaries, or graduations.
              </p>

              <button
                className="py-3 px-4 text-uppercase border-0 text-white about-btn"
                style={{ background: "#ff9f6b" }}
              >
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
