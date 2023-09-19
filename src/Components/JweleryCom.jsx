import React from "react";
import { shopingData } from "../ui/Data";

const JweleryCom = ({ first, last }) => {
  let items;

  const data = shopingData.slice(first, last);
  items = data.map((item) => {
    return (
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-12 px-5 px-sm-3"
        key={item.key}
      >
        <div className="shopingCard">
          <div className=" position-relative overflow-hidden">
            <img src={item.img} alt={item.name} className="w-100" />

            <div class="marquee-container-tb marquee-top position-absolute">
              <MarqueeText />
            </div>

            <div class="marquee-container-tb marquee-botoom position-absolute">
              <MarqueeText />
            </div>

            <div class="marquee-container-lr marquee-right position-absolute">
              <MarqueeText />
            </div>

            <div class="marquee-container-lr marquee-left position-absolute">
              <MarqueeText />
            </div>
          </div>

          <div className=" text-center mt-3">
            <h2 className="fs-4">{item.name}</h2>
            <p style={{ color: "#ff9f6b" }}> $ {item.price} USD</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-center">{items}</div>
    </div>
  );
};

export default JweleryCom;

const MarqueeText = () => {
  return (
    <>
      <span>Buy now</span>
      <span>Buy now</span>
      <span>Buy now</span>
      <span>Buy now</span>
      <span>Buy now</span>
      <span>Buy now</span>
    </>
  );
};
