import React from "react";
import { SupportedBrand, startedFreeForm } from "../../components";
import { Reveal } from "react-reveal";
import StartedFreeForm from "../StartedFreeForm";
import CTAService from "../Services/CTAService";



const Banner = ({
  config,
  supportedBrand,
  startedFreeForm,
  titleClass,
  allService,
  mClass,
  wClass
}) => {
  return (
    <section className="seo_features_one bg_color sec_pad">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-7 ">
            {config.map((i, index) => {
              return (
                <Reveal effect="fadeInRight" duration={3000}>
                  <div className="seo_features_img">
                    <img
                      className={`img-fluid ${wClass}`}
                      key={index}
                      src={i.image}
                      alt={i.id}
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
          <div className="col-lg-5">
          <Reveal bottom cascade>
              <div className="seo_features_content ">
                {config.map((i, index) => {
                  return (
                    <>
                      <h2 key={index}>
                        {i.title}
                        <br/>
                        <span>
                        {i.subTitle}
                        </span>
                      </h2>
                      <p>{i.description}</p>
                    </>
                  );
                })}

                <div className="col-lg-9">
                  {startedFreeForm ? (
                    <StartedFreeForm />
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
                        Learn more
                      </a>
                    </div>
                  )}
                </div>
               <CTAService allService={allService}/> 
                <SupportedBrand    pClass={"partner_white_logo_area_four"} /> 
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
