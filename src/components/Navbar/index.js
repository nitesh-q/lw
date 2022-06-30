import React, { Component } from "react";
import { Link } from "gatsby";
import AppLogo from "../../images/logo/logo.png";
import Sticky from "react-stickynode";

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
              <Link className="navbar-brand pt_0" to="/">
                <img src={AppLogo} alt="logo" />
              </Link>
              <div
                className={`collapse navbar-collapse justify-content-end `}
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item">
                    <Link title="home" className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                      role="button"
                      id="navbarDropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Products
                      <i className="ti-angle-down icon"></i>
                    </Link>
                    <ul
                      role="menu"
                      className=" dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li className="nav-item">
                        <Link
                          exact
                          title="Service"
                          className="nav-link"
                          to="/giftcard"
                        >
                          Gift Card
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          exact
                          title="Service Details"
                          className="nav-link"
                          to="/ServiceDetails"
                        >
                          Product-2
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
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to="#"
                    >
                      Resources<i className="ti-angle-down icon"></i>
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <Link
                          title="Portfolio 2"
                          className="nav-link"
                          to="/Portfolio-2col"
                        >
                          Resources-1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          title="Portfolio 3"
                          className="nav-link"
                          to="/Portfolio-3col"
                        >
                          Resources-2
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          title="Portfolio Fullwidth"
                          className="nav-link"
                          to="/Portfolio-fullwidth-4col"
                        >
                          Resources-3
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          title="PortfolioSingle"
                          className="nav-link"
                          to="/PortfolioSingle"
                        >
                          Resources-4
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href=".#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Developers<i className="ti-angle-down icon"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link to="/Bloglist" className="nav-link">
                          Developer-1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/BlogGridPage" className="nav-link">
                          Developer-2
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/BlogSingle" className="nav-link">
                          Developer-3
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <div className="d-flex align-items-center">
                    <hr className="line_vertical" />
                  </div>
                  <li className="nav-item hide">
                    <Link title="Pricing" className="nav-link" to="/Contact">
                      Sign In
                    </Link>
                  </li>
                </ul>
                <a className={`btn_get btn_hover demo hide`} href="#get-app">
                 Book a Demo
                </a>
                <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
                  Sign Up
                </a>
                
              </div>
              <div className="demo_btn  ">
                <ul className={` navbar-nav sign_in_bg`}>
                  <li className="nav-item">
                    <a
                      className={`btn_get btn_hover `}
                      href="#get-app"
                    >
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
