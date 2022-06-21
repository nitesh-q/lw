import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import home_chat from "../images/mega-menu-img/home-chat.jpg";
import home_track from "../images/mega-menu-img/home-track.jpg";
import home_event from "../images/mega-menu-img/home-event.jpg";
import home12 from "../images/mega-menu-img/home12.jpg";
import erp from "../images/mega-menu-img/erp.jpg";
import hosting from "../images/mega-menu-img/hosting.jpg";
import home_security from "../images/mega-menu-img/home-security.jpg";
import support from "../images/mega-menu-img/home-security.jpg";
import Prototyping_Tool from "../images/mega-menu-img/Prototyping_Tool.jpg";
import home3 from "../images/mega-menu-img/home3.jpg"
import home4 from "../images/mega-menu-img/home4.jpg"
import home11 from "../images/mega-menu-img/home11.jpg";
import home14 from "../images/mega-menu-img/home14.jpg";
import home15 from "../images/mega-menu-img/home15.jpg";
import home16 from "../images/mega-menu-img/home16.jpg";



import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo} `} to="/">
                <img src={logo} alt="logo" />
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
                      Service
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
                     Resources
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
                   Developers
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
