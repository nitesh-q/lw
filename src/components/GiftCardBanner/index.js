import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import Icons from "../../shared/assets";

class GiftCardBanner extends Component {
  render() {
    return (
      <section className="payment_banner_area">
        <div className="shape one"></div>
        <div className="shape two"></div>
        <div className="container">
          <Reveal effect="fadeInLeft" duration={500}>
            <div
              className="payment_banner_content wow fadeInLeft"
              data-wow-delay="0.4s"
            >
              <h1 className="f_p f_700 f_size_50 w_color">
                Gift Card campaigns<br></br> made super easy
              </h1>
              <p className="w_color f_p f_size_18">
                Ramp up your sales by launching a gift card<br></br> program with ease
                using 99minds. With a simple<br></br> integration that works online and
                offline . Get ready<br></br> to reap various benifits of zero hassle.
              </p>
              <div className="action_btn d-flex align-items-center mt_60">
                <a href=".#" className="btn_hover agency_banner_btn">
                  Get Started for free
                </a>
                <a href=".#" className="agency_banner_btn_two">
                  learn more<i className="ti-arrow-right"></i>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal effect="fadeInLeft" duration={1200}>
          <div
            className="animation_img_two wow fadeInRight"
            data-wow-delay="0.5s"
          >
            <img src={Icons.GiftBanner.default} alt="" />
          </div>
        </Reveal>
        <img className="svg_intro_bottom" src={Icons.Banner1.default} alt="" />
      </section>
    );
  }
}
export default GiftCardBanner;
