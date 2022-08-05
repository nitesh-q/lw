import React, { Component } from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo/logo.png";
import Logo1 from "../../images/logo/logo1.png";
import Sticky from "react-stickynode";
import {
  ROUTES,
  ROUTES_LABEL,
  CHILDRENS,
  CHILDRENS_CHILD,
  CHILD_ROUTES,
  ADD_DEVIDER_BEFORE,
} from "../../config";

class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className="hamburger-cross">
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <Link className={`navbar-brand pt_0 ${slogo} `} to="/">
                <img src={Logo1} alt="logo1" />
                <img src={Logo} alt="logo" />
              </Link>
              <div
                className={`collapse navbar-collapse justify-content-end `}
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  {Object.keys(ROUTES).map((key, i) => {
                    let _props = { className: "nav-link" };
                    const isChild = !!(CHILDRENS[key] || []).length;
                    if (isChild) {
                      _props = {
                        className: "dropdown-toggle nav-link",
                        "data-bs-toggle": "dropdown",
                      };
                    }

                    return (
                      <>
                        {!!ADD_DEVIDER_BEFORE[key] && (
                          <div className="d-flex align-items-center">
                            <hr className="line_vertical" />
                          </div>
                        )}

                        <li
                          key={i}
                          className={
                            isChild ? "dropdown submenu nav-item" : "nav-item"
                          }
                        >
                          <Link
                            title={ROUTES_LABEL[key]}
                            className="nav-link"
                            to={ROUTES[key]}
                            id={ROUTES_LABEL[key]}
                            {..._props}
                          >
                            {ROUTES_LABEL[key]}

                            {!!CHILDRENS[key].length && (
                              <i className="ti-angle-down icon"></i>
                            )}
                          </Link>

                          <ul
                            role="menu"
                            className="dropdown-menu"
                            aria-labelledby={ROUTES[key]}
                          >
                            {!!CHILDRENS[key].length &&
                              CHILDRENS[key].map((child, index) => {
                                return (
                                  <li key={index} className="nav-item">
                                    <Link
                                      exact
                                      title="Gift Card"
                                      className="nav-link"
                                      to={CHILD_ROUTES[child]}
                                    >
                                      {ROUTES_LABEL[child]}
                                    </Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      </>
                    );
                  })}
                </ul>

                <a
                  className={`btn_get btn_hover demo hide ${hbtnClass}`}
                  href="#get-app"
                >
                  Book a Demo
                </a>
                {/* <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
                  Sign Up
                </a> */}
              </div>
              <div className="demo_btn  ">
                <ul className={` navbar-nav sign_in_bg`}>
                  <li className="nav-item">
                    <a className={`btn_get btn_hover `} href="#get-app">
                      Book a Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
