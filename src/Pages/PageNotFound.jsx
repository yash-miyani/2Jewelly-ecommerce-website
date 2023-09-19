import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="PageNotFound-sec">
      <div className="d-flex h-100 py-8 align-items-center justify-content-center flex-column">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>The page you're looking for doesn't exist.</p>
        <Link to="/">
          <button
            className="btn px-5 py-3 fs-5 text-uppercase text-white rounded-0 mt-4"
            style={{ background: "#ff9f6b" }}
          >
            back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
