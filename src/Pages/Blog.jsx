import React from "react";
import BlogPost from "../Components/BlogPost";
import HeaderAllPage from "../Components/HeaderAllPage";
import Heading from "../Components/Heading";

const Blog = () => {
  return (
    <div>
      <HeaderAllPage>Blog </HeaderAllPage>

      <div className="py-8">
        <Heading>Recent Posts</Heading>
        <BlogPost css="col-lg-6 col-md-6 col-sm-12 col-12 mt-5" />
      </div>
    </div>
  );
};

export default Blog;
