import React, { Component } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Sticky from "react-stickynode";

class CustomNavbar extends Component {
  render() {
    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
                <StaticImage src="../img/logo2.png" alt="" />
                <StaticImage src="../img/logo.png" alt="logo" />
              </Link>
              <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                    <Link
                      to="./"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Home
                    </Link>
                    <div className="mega_menu_inner">
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <ul className="dropdown-menu scroll">
                            <li className="nav-item">
                              <Link to="/Home-chat" exact className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src={require("../img/mega-menu-img/home-chat.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Hoeme Chat</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Home-Tracking" exact className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src={require("../img/mega-menu-img/home-track.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Home Tracking</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Home-event" exact className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src={require("../img/mega-menu-img/home-event.jpg")}
                                    alt="Event"
                                  />
                                </span>
                                <span className="text">Home Event</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Home-cloud" exact className="item">
                                <span className="img">
                                  <span className="rebon_tap">New</span>
                                  <img
                                    src={require("../img/mega-menu-img/home12.jpg")}
                                    alt="cloud"
                                  />
                                </span>
                                <span className="text">Cloud Based Saas</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Home-ERP" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/erp.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Hoeme ERP</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/HomeHosting" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/hosting.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Hoeme Hosting</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/HomeSecurity" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/home-security.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Hoeme Security</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/home-support" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/support.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Hoeme Support</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Landing" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/home14.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">
                                  App Landing (One Page)
                                </span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/Prototyping_Tool.jpg")}
                                    alt="Prototyping Tool"
                                  />
                                </span>
                                <span className="text">Prototyping Tool</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                to="/Payment-processing"
                                exact
                                className="item"
                              >
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/home16.jpg")}
                                    alt=""
                                  />
                                </span>
                                <span className="text">Payment Processing</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Startup" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/home15.jpg")}
                                    alt=""
                                  />
                                </span>
                                <span className="text">Startup</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Digital-marketing" className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/home11.jpg")}
                                    alt="Digital Marketing"
                                  />
                                </span>
                                <span className="text">Digital Marketing</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/HR-Management" className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/home4.jpg")}
                                    alt="HR Management"
                                  />
                                </span>
                                <span className="text">HR Management</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link to="/Home-CRM" exact className="item">
                                <span className="img">
                                  <img
                                    src={require("../img/mega-menu-img/home3.jpg")}
                                    alt="CRM Software"
                                  />
                                </span>
                                <span className="text">CRM Software</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
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
                          Service
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
                      Pages
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <Link
                          exact
                          title="About"
                          className="nav-link"
                          to="/About"
                        >
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          exact
                          title="Process"
                          className="nav-link"
                          to="/Process"
                        >
                          Process
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          exact
                          title="Team"
                          className="nav-link"
                          to="/Team"
                        >
                          Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          exact
                          title="Price"
                          className="nav-link"
                          to="/Price"
                        >
                          Price
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link exact title="Faq" className="nav-link" to="/Faq">
                          Faq
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          exact
                          title="SignIn"
                          className="nav-link"
                          to="/SignIn"
                        >
                          Sign In
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          exact
                          title="SignUp"
                          className="nav-link"
                          to="/SignUp"
                        >
                          Sign Up
                        </Link>
                      </li>
                    </ul>
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
                      Portfolio
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
                      Blog
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
                      Contact
                    </Link>
                  </li>
                </ul>
                <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">
                  Get Started
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
