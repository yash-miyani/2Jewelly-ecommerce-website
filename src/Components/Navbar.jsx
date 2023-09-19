import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand " to="/">
            <img src="Assets/images/logo.png" alt="logo" width="180" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/about">
                  ABOUT US
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/shop">
                  SHOP
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/blog">
                      BLOG
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/category">
                      CATEGORY
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  aria-current="page"
                  to="/contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <form className="d-flex gap-4">
              <div className="align-self-center fs-4 position-relative">
                <i className="bi bi-cart-fill"></i>
                <span
                  class="position-absolute  start-100 translate-middle text-white border border-light rounded-circle d-flex justify-content-center align-content-center"
                  style={{
                    width: "20px",
                    height: "20px",
                    background: "#ff9f6b",
                    fontSize: "12px",
                    top: "5px",
                  }}
                >
                  0<span class="visually-hidden">New alerts</span>
                </span>
              </div>
              <button className="btn btn-success nav-btn" type="submit">
                SHOP NOW
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
