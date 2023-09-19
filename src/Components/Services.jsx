import React from "react";
import { servicesData } from "../ui/Data";

const Services = ({ first, last }) => {
  let items;

  const dataItem = servicesData.slice(first, last);

  items = dataItem.map((item, index) => {
    return (
      <div
        key={index}
        className="col-lg-3 col-md-4 col-sm-6 col-12 m-auto text-center mt-sm-0 mt-4"
      >
        <div>
          <img src={item.img} alt={item.name} width="100" />
        </div>
        <div className="mt-3">
          <h2 className="fs-4">{item.name}</h2>
          <p className="fs-5">{item.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container" data-aos="fade-up">
      <div className="row">{items}</div>
    </div>
  );
};

export default Services;
