import React from "react";
import { SupportedBrand, StartedFreeButton} from "../../components";
import { Reveal } from "react-reveal";
import CTAService from "../Services/CTAService";

const Banner = ({
  config,
  supportedBrand,
  titleClass,
  allService,
  mClass,
  wClass,
}) => {
  return (
    <section className="seo_features_one bg_color sec_pad banner_top">
      <div className="container ccontainer">
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
                      loading="lazy"
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
                        <br />
                        <span>{i.subTitle}</span>
                      </h2>
                      <p>{i.description}</p>
                    </>
                  );
                })}

                <div className="col-lg-9">
                  <StartedFreeButton />
                </div>
                <CTAService allService={allService} />
                <SupportedBrand pClass={"partner_white_logo_area_four"} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
