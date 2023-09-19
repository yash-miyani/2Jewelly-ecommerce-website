import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fff3ed" }}>
        <div className="container py-8 px-5 px-md-0">
          <div className="row footer-sec">
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12"
              data-aos="fade-up"
            >
              <div>
                <img src="Assets/images/logo.png" alt="logo" width="180" />
              </div>
              <p className="mt-3">
                It is designed to be worn as an embellishment or decoration,
                often with cultural or symbolic.
              </p>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12 pt-3 pt-md-0"
              data-aos="fade-up"
            >
              <h2>Pages</h2>
              <div className="text-capitalize mt-3">
                <p>home 2</p>
                <p>About us</p>
                <p>blog</p>
                <p>contact</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12 pt-3 pt-md-0"
              data-aos="fade-up"
            >
              <h2>Categories</h2>
              <div className="text-capitalize mt-3">
                <p>Necklaces</p>
                <p>Bracelets</p>
                <p>Earrings</p>
                <p>Rings</p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-12 pt-3 pt-md-0"
              data-aos="fade-up"
            >
              <h2>You Need Help</h2>
              <div className="text-capitalize mt-3">
                <p>
                  <i className="bi bi-phone"></i> +1800-001-658
                </p>
                <p>
                  <i className="bi bi-envelope-fill"></i> peacefulqode@gmail.com
                </p>
                <p>
                  <i className="bi bi-geo-alt"></i> webflow, shop no.24 Fifth
                  st., USA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </>
  );
};

export default Footer;

const SubFooter = () => {
  return (
    <div
      style={{ backgroundColor: "#212121" }}
      className="py-1 pt-4 text-white text-center subFooter-sec"
    >
      <p>
        &copy; Powered by <Link to="https://webflow.com/">Webflow</Link> created
        by
        <Link to="https://peacefulqode.com/"> PeacefulQode</Link>.
      </p>
    </div>
  );
};
