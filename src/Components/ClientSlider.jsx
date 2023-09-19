import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "../ui/Data";

const ClientSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="container" data-aos="fade-up">
      <Slider {...settings}>
        {SliderData.map((item, index) => {
          return (
            <div className="text-center" key={index}>
              <div className=" text-warning fs-3 gap-2 d-flex justify-content-center">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <h3 className="mt-2">" {item.title} "</h3>
              <p className="fs-5">{item.text}</p>
              <img
                src={item.img}
                alt={item.name}
                width="100"
                className="m-auto"
              />
              <h2 className="fs-3 mt-3 mb-0">{item.name}</h2>
              <p className="fs-5">{item.postion}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ClientSlider;
