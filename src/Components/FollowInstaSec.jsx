import React from "react";
import { Link } from "react-router-dom";

const FollowInstaSec = () => {
  return (
    <div style={{ backgroundColor: "#ff9f6b" }} className="py-8">
      <div className="container py-5 insta-sec" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 px-5 px-sm-0">
            <h2 className="text-white mb-5">Follow Us In Instagram</h2>
            <Link to="https://www.instagram.com/peacefulqode/" target="_blank">
              <div className="insta-sec-img position-relative">
                <img
                  src="Assets/images/insta1.png"
                  alt="insta1"
                  className="img-fluid "
                />
                <div className="position-absolute top-50 start-50  translate-middle fs-1 text-white ">
                  <i class="bi bi-instagram"></i>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-12 align-self-center mt-5 mt-sm-0 text-center">
            <Link to="https://www.instagram.com/peacefulqode/" target="_blank">
              <div className="insta-sec-img position-relative mt-5 mt-md-0 ">
                <img
                  src="Assets/images/insta2.png"
                  alt="insta2"
                  className="img-fluid"
                />
                <div className="position-absolute top-50 start-50  translate-middle fs-1 text-white ">
                  <i class="bi bi-instagram"></i>
                </div>
              </div>
            </Link>
          </div>
          <div className=" col-lg-5 col-md-5 col-sm-12 col-12  mt-5 mt-md-0 px-5 px-sm-0">
            <Link to="https://www.instagram.com/peacefulqode/" target="_blank">
              <div className="insta-sec-img position-relative">
                <img
                  src="Assets/images/insta3.png"
                  alt="insta3"
                  className="img-fluid"
                />
                <div className="position-absolute top-50 start-50  translate-middle fs-1 text-white ">
                  <i class="bi bi-instagram"></i>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowInstaSec;
