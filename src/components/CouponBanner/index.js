import React from "react";
import SupportedBrand from "../SupportedBrand";
import image from "../../images/erp-home/erp_dashboard.jpg";

const CouponBanner = ({ config }) => {
  return (
    <section className="support_home_area ">
      <div className="banner_top">
        <div className="section_container">
          <div className="row">
            <div className="col-md-12 text-center">
              {config.map((item, index) => {
                return (
                  <>
                    <h2 className=" wow fadeInUp" data-wow-delay="0.3s">
                      {item.title}
                      <span>{item.subTitle}</span>
                    </h2>
                    <p
                      className="f_size_18 l_height30 wow fadeInUp"
                      data-wow-delay="0.5s"
                    >
                      {item.description}
                    </p>
                  </>
                );
              })}

              <form
                className="mailchimp wow fadeInUp"
                data-wow-delay="0.6s"
                method="post"
              >
                <div className="input-group subcribes">
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="saasland@gmail.com"
                  />
                  <button
                    className="btn btn_submit f_size_15 f_500"
                    type="submit"
                  >
                    Get Started
                  </button>
                </div>
              </form>
              <SupportedBrand pClass={"pb_0"} />
            </div>
          </div>
          <div className="row">
          {config.map((i,index) => {
            return (
              <div className="col-xl-12">
              <div
                className="support_home_img wow fadeInUp"
                data-wow-delay="0.9s"
                key={index}
              >
                <img className="img img-fluid" src={i.image} alt="" />
              </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default CouponBanner;
