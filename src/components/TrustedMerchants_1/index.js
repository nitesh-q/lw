import React from "react";
import leaf1 from "../../images/home-security/leaf_clients2.png";
import leaf2 from "../../images/home-security/leaf_clients1.png";
import { MERCHANTS_CONFIG } from "../../config";

const TrustedMerchants_1 = () => {
  return (
    <section className="security_customers_logo_area">
      <div className="container">
        <div className="hosting_title analytices_title text-center">
          <h2 className="wow fadeInUp">
            <span>Our Clients. </span>World-class protection
          </h2>
          {/* <p className="wow fadeInUp" data-wow-delay="0.3s">
            Naff pukka zonked squiffy quaint knees up cup of tea Oxford the BBC
            bloke ummm I'm telling, argy-bargy show off show off pick your nose
            and blow off hanky.!
          </p> */}
        </div>
        <div className="security_inner ">
          <img
            className="p_absoulte security_leaf_left wow fadeInDown"
            data-wow-delay="0.8s"
            src={leaf1}
            alt=""
          />
          <img
            className="p_absoulte security_leaf_right wow fadeInDown"
            data-wow-delay="0.8s"
            src={leaf2}
            alt=""
          />
          <div className="row">
            {MERCHANTS_CONFIG.MERCHANTS.map((item, index) => (
              <div className="col-lg-3 col-sm-4 col-6" key={index}>
                <a
                  href="/#"
                  className="analytices_logo wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <img src={item.image} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="d-flex justify-content-center">
          <div className="action_btn d-flex align-items-center mt_60">
            <a
              href="/#"
              className="agency_banner_btn_two wow fadeInLeft"
              data-wow-delay="0.7s"
            >
              View customer stories
            </a>
            <a
              href="/#"
              className="btn btn_get btn_get_two fadeInLeft ml_40"
              data-wow-delay="0.5s"
            >
              Get Started for Free
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default TrustedMerchants_1;
