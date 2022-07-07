import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import Icons from "../../shared/assets";
import Banner3 from "../../images/loyalty/banner3.svg";
import Banner4 from "../../images/loyalty/banner3(1).svg";

const LoyaltyBanner = () => {
  return (
    <section className="n_hero_banner_area">
      <div className="shape_banners">
        <img
          className="img3 wow fadeIn"
          data-wow-delay="1.5s"
          src={Icons.BannerImg1.default}
        ></img>
      </div>
      <div className="shape_banners_left">
        <img
          className="header-btm-shape wow fadeIn"
          data-wow-delay="1.5s"
          src={Icons.BannerImg2.default}
        ></img>
      </div>
      

      <img className="svg" src={Banner4}></img>
      <img className="svg_two" src={Banner3}></img>

    
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <Reveal bottom cascade>
              <div className="n_hero_content">
                <h2 className="wow fadeInLeft" data-wow-delay="0.2s">
                  Loyalty Programs <br></br> Forge a strong relationship{" "}
                  <br></br>with your customers
                </h2>
                <p data-wow-delay="0.3s">
                  Growth is good, but retention is forever
                </p>
                <div className="action_btn d-flex align-items-center mt_60">
                  <a href=".#" className="btn_hover hero_banner_btn">
                    Get Started for Free
                  </a>
                  <a href=".#" className="hero_banner_btn_two">
                    Learn more
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-7">
            <div className="hero_img w-100">
              <img className="img" src={Icons.LoyaltyBanner1.default} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoyaltyBanner;