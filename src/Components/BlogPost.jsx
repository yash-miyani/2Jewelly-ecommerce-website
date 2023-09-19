import React from "react";
import { BlogPostData } from "../ui/Data";

const BlogPost = ({ css, pNone, lastNoSlice }) => {
  return (
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-center">
        {BlogPostData.slice(0, lastNoSlice).map((item, index) => {
          return (
            <div key={index} className={`${css} blogPost-sec`}>
              <div className="overflow-hidden">
                <img src={item.img} alt={item.title} height="350" />
              </div>
              <div className="mt-3">
                <span
                  className="btn text-capitalize text-white me-3 fs-5"
                  style={{ background: "#ff9f6b" }}
                >
                  mar 1, 2023
                </span>
                <span className="fs-5">1 min</span>
              </div>
              <h3 className="mt-4 fs-2">{item.title}</h3>
              <p style={{ fontSize: "18px" }} className={pNone}>
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPost;
