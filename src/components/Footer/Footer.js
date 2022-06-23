import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import AppLogo from "../../images/logo/logo.png";
import ServicesWidget from "./FooterWidget/ServicesWidget";
import IndustriesWidget from "./FooterWidget/IndustriesWidget";
import AboutWidget from "./FooterWidget/AboutWidget";
class Footer extends Component {
  render() {
    var { fClass } = this.props;
    let FooterData = this.props.FooterData;
    return (
      <footer className={`footer_area footer_area_four f_bg ${fClass}`}>
        <div className="footer_top">
          <div className="container">
            <p className="mb-0 f_400 pb-5">{FooterData.FooterHeader}</p>

            <div className="row pt-2">
              {FooterData.CompanyWidget.map((widget) => {
                return (
                  <Reveal effect="fadeInUp" key={widget.id}>
                    <div className="col-lg-3 col-md-6">
                      <div
                        className="f_widget company_widget wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        <a href="index.html" className="f-logo">
                          <img className="app_logo" src={AppLogo} alt="" />
                        </a>
                        <div className="widget-wrap">
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Email:</span>{" "}
                            <a
                              href="mailto:saasland@gmail.com"
                              className="f_400"
                            >
                              support@99minds.com
                            </a>
                          </p>
                          <p className="f_400 f_p f_size_15 mb-0 l_height34">
                            <span>Phone:</span>{" "}
                            <a href="tel:948256347968" className="f_400">
                              +948 256 347 968
                            </a>
                          </p>
                        </div>
                        <form
                          action="#"
                          className="f_subscribe mailchimp"
                          method="post"
                        >
                          <input
                            type="text"
                            name="EMAIL"
                            className="form-control memail"
                            placeholder="Email"
                          />
                          <button className="btn btn-submit" type="submit">
                            <i className="ti-arrow-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
              <ServicesWidget ftitle="Services" FooterData={FooterData} />
              <IndustriesWidget ftitle="Industries" FooterData={FooterData} />
              <AboutWidget ftitle="About Us" FooterData={FooterData} />
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-sm-6">
                <p className="mb-0 f_size_15 f_400">{FooterData.copywrite}</p>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-6">
                <div className="f_social_icon_two text-center">
                  {FooterData.socialIcon.map((item) => {
                    return (
                      <a href="/" key={item.id}>
                        <i className={item.icon}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <ul className="list-unstyled f_menu text-right">
                  <li>
                    <a href=".#">Terms of Use</a>
                  </li>
                  <li>
                    <a href=".#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
