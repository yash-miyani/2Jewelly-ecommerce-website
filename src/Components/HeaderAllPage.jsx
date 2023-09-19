import React from "react";

const HeaderAllPage = ({ children }) => {
  return (
    <div className="header-bg d-flex justify-content-center align-items-center">
      <div data-aos="fade-up">
        <h2
          className="text-white text-capitalize"
          style={{ fontSize: "62px", fontWeight: "600px" }}
        >
          {children}
        </h2>
      </div>
    </div>
  );
};

export default HeaderAllPage;
