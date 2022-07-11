import React from "react";
import Reveal from "react-reveal";
import Icons from "../../shared/assets";
import { BANNERS_CONFIG } from "../../config";
import StartedFreeFrom from "../StartedFreeForm";
import scrollTo from "gatsby-plugin-smoothscroll";
const AppBanner = ({
  config,
  supportedBrand,
  startedFreeForm,
  titleClass,
  allService,
  mClass,
  wClass,
}) => {
  // function smoothScroll(target) {
  //   const { top } = target.getBoundingClientRect();
  //   window.scrollTo({
  //     top: top + window.pageYOffset,
  //     behavior: "smooth",
  //   });
  // }
  return (
    <section className="app_banner_area" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <Reveal bottom cascade>
              <div className="app_banner_contentmt mt_40">
                {config.map((i) => {
                  return (
                    <>
                      <h2
                        className="f_p f_700 f_size_50 w_color mb_20 wow fadeInLeft"
                        data-wow-delay="0.2s"
                      >
                        {i.title}
                      </h2>
                      <p
                        className="f_400 f_size_18 l_height30 w_color wow fadeInLeft"
                        data-wow-delay="0.3s"
                      >
                        {i.description}
                      </p>
                    </>
                  );
                })}
                <div className="col-lg-12">
                  <StartedFreeFrom btnClass={"bg_white t_color1"} />
                </div>
                <div className="col-lg-12">
                  <div className={`row mt_15 flex ${mClass} `}>
                    <li className="col "> No Credit Card Required</li>
                    {allService ? (
                      <>
                        <li className="col"> Free Sign Up</li>
                        <li className="col"> 24/7 Support</li>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="scroll_btn">
                  <button
                    className="scroll_up_btn"
                    onClick={() => scrollTo("#supportedBrand")}
                  >
                    <i className="ti-arrow-down"></i>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-7">
            <Reveal effect="fadeInRight" duration={3000}>
              <div className="app_img">
                <img
                  className="img-fluid"
                  src={Icons.HomeBanner.default}
                  alt=""
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
