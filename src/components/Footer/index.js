import React, { Component } from "react";
import { Link } from "gatsby";
import Reveal from "react-reveal/Reveal";

const RevealWrapper = ({ className, children }) => {
  return (
    <Reveal effect="fadeInLeft" duration={500} key={1}>
      <div className={className}>{children}</div>
    </Reveal>
  );
};

const FooterBottom = ({ term, policy, copywrite }) => {
  return (
    <div className="footer_bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-7">
            <p className="mb-0 f_400">{copywrite}</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <ul className="list-unstyled f_menu text-right">
              <li>
                <a href=".#">{term}</a>
              </li>
              <li>
                <a href=".#">{policy}</a>
              </li>
              <li>
                <a href="/sitemap/sitemap-0.xml">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

class Footer extends Component {
  constructor(props) {
    super();
    this.state = {
      footerConfig: props.FooterConfig,
    };
  }

  render() {
    const { footerConfig } = this.state;

    return (
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              {footerConfig.CompanyWidget.map((widget,index) => {
                return (
                  <RevealWrapper key={index} className={"col-lg-3 col-md-6"}>
                    <div
                      className="f_widget company_widget wow fadeInLeft"
                      data-wow-delay="0.2s"
                      
                    >
                      <h3 className="f-title f_600 t_color f_size_18">
                        {widget.title}
                      </h3>
                      <p>{widget.description}</p>
                      <form
                        action="#"
                        className="f_subscribe_two mailchimp"
                        method="post"
                      >
                        <input
                          type="text"
                          name="EMAIL"
                          className="form-control memail"
                          placeholder="Email"
                        />
                        <button
                          className="btn btn_get btn_get_two"
                          type="submit"
                        >
                          Subscribe
                        </button>
                        <p
                          className="mchimp-errmessage"
                          style={{ display: "none" }}
                        ></p>
                        <p
                          className="mchimp-sucmessage"
                          style={{ display: "none" }}
                        ></p>
                      </form>
                    </div>
                  </RevealWrapper>
                );
              })}
              {footerConfig.AboutWidget.map((widget,index) => {
                return (
                  <RevealWrapper  key={index} className={"col-lg-2 col-md-6"}>
                    <div
                      className="f_widget about-widget pl_40 wow fadeInLeft"
                      data-wow-delay="0.4s"
                     
                    >
                      <h3 className="f-title f_600 t_color f_size_18">
                        {widget.title}
                      </h3>
                      <ul className="list-unstyled f_list">
                        {widget.menuItems.map((item,index) => {
                          return (
                            <li key={index}>
                              <Link to="/">{item.text}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </RevealWrapper>
                );
              })}
              {footerConfig.SocialLinks.map((widget,index) => {
                return (
                  <RevealWrapper key={index} className={"col-lg-3 col-md-6"}>
                    <div 
                      className="f_widget social-widget  wow fadeInLeft"
                      data-wow-delay="0.4s"
                    >
                      <h3  className="f-title f_600 t_color f_size_18">
                        {widget.title}
                      </h3>
                      <div className="f_social_icon">
                        {widget.menuItems.map((item,index) => {
                          return (
                            <Link to="/" key={index} >
                              <i  className={item.icon}></i>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </RevealWrapper>
                );
              })}
            </div>
          </div>

          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <FooterBottom
          copywrite={footerConfig.copywrite}
          term={"Term & Conditions"}
          policy={"Privacy Policy"}
        />
      </footer>
    );
  }
}
export default Footer;
