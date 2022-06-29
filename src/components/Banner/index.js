import React from "react";
import Fade from "react-reveal/Fade";
import Icons from "../../shared/assets";
import { SupportedBrand, StartedFree } from "../../components";
import { Reveal } from "react-reveal";

const Banner = ({ BannerConfig, Supported, StartedFreeForm, bannerTitle,AllService,mClass }) => {
  return (
    <section className="seo_features_one bg_color sec_pad">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-7 ">
            {BannerConfig.map((i) => {
              return (
                <Reveal effect="fadeInRight" duration={2000}>
                  <div className="seo_features_img">
                    <img
                      className="img-fluid"
                      src={i.image}
                      alt="features_img"
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="col-lg-5">
            <Fade bottom cascade>
              <div className="seo_features_content ">
                {BannerConfig.map((i) => {
                  return (
                    <>
                      <h2 className={`${bannerTitle}`}>{i.title}</h2>
                      <h2>{i.subTitle}</h2>
                      <p>{i.description}</p>
                    </>
                  );
                })}

                <div className="col-lg-9">
                  {StartedFreeForm ? (
                    <StartedFree />
                  ) : (
                    <div className="action_btn d-flex align-items-center mt_60">
                      <a
                        href="/#"
                        className="btn btn_get btn_get_two fadeInLeft"
                        data-wow-delay="0.5s"
                      >
                        Get Started for Free
                      </a>
                      <a
                        href="/#"
                        className="agency_banner_btn_two wow fadeInLeft"
                        data-wow-delay="0.7s"
                      >
                        learn more
                      </a>
                    </div>
                  )}
                </div>
                <div className={`row mt_15 flex ${mClass} `}>
                  <li className="col "> No Credit Card Reaquired</li>
                  {AllService ? (
                    <>
                      <li className="col"> Free Sign Up</li>
                      <li className="col"> 24/7 Support</li>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {Supported ? <SupportedBrand /> : ""}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;