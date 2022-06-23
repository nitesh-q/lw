import React, { Component } from "react";
import { Link } from "gatsby";
import AppLogo from "../images/logo/logo.png";
import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className="navbar-logo" to="/">
                <img className="app_logo" src={AppLogo} alt="logo" />
              </Link>
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

              <div
                className={`collapse navbar-collapse justify-content-end `}
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item">
                    <Link title="Pricing" className="nav-link" to="/Contact">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Service<i className="ti-angle-down"></i>
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <Link
                          exact
                          title="Service"
                          className="nav-link"
                          to="/Service"
                        >
                          Product
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/ServiceDetails"
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link title="Pricing" className="nav-link" to="/Contact">
                      Integrations
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to="#"
                    >
                      Resources<i className="ti-angle-down"></i>
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <Link
                          title="Portfolio 2"
                          className="nav-link"
                          to="/Portfolio-2col"
                        >
                          Portfolio 2col
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          title="Portfolio 3"
                          className="nav-link"
                          to="/Portfolio-3col"
                        >
                          Portfolio 3col
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          title="Portfolio Fullwidth"
                          className="nav-link"
                          to="/Portfolio-fullwidth-4col"
                        >
                          Portfolio fullwidth
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          title="PortfolioSingle"
                          className="nav-link"
                          to="/PortfolioSingle"
                        >
                          Portfolio Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href=".#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Developers<i className="ti-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/Bloglist" className="nav-link">
                          Blog List
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/BlogGridPage" className="nav-link">
                          Blog Grid
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/BlogSingle" className="nav-link">
                          Blog Single
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <div className="d-flex align-items-center">
                    <hr className="line_vertical" />
                  </div>
                  <li className="nav-item">
                    <Link title="Pricing" className="nav-link" to="/Contact">
                      Sign In
                    </Link>
                  </li>
                </ul>
                <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
                  Book a Demo
                </a>
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    );
  }
}

export default CustomNavbar;
