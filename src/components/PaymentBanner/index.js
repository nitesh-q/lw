import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import StartedFreeButton from "../StartedFreeButton";
import CTAService from "../Services/CTAService";
import SupportedBrand from "../SupportedBrand";
import Svg from "../../images/home9/shape.png";

class PaymentBanner extends Component {
  render() {
    return (
      <section className="payment_banner_area banner_top">
        <div className="shape one"></div>
        <div className="shape two"></div>
        <div className="container ccontainer">
          <div className="row">
            <div className="col-lg-5">
              <Reveal effect="fadeInLeft" duration={500}>
                <div
                  className="payment_banner_content wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  <h2 className="">
                    Referral Programs <br />
                    made super easy
                  </h2>
                  <p className="">
                    Ramp us your sales by launching a gift card program with
                    ease using 99minds. With a simple integration that works
                    online an offline. Get ready to reap various benifits of
                    zero hassle
                  </p>
                  {/* <div className="action_btn d-flex align-items-center mt_60">
                <a href=".#" className="btn_hover agency_banner_btn">
                  Sign Up for Free
                </a>
                <a href=".#" className="agency_banner_btn_two">
                  Find Out More<i className="ti-arrow-right"></i>
                </a>
              </div>
            </div>  */}
                  <div className="col-lg-12">
                    <StartedFreeButton btnClass={"bg_white t_color1"} />
                  </div>
                  <CTAService allService={false} />
                  <SupportedBrand
                    pClass={"partner_white_logo_area_four"}
                    fclass={"w_color mb_25"}
                    imgClass={"partner_img "}
                  />
                </div>
              </Reveal>
            </div>
            <div className="col-lg-7">
              <Reveal effect="fadeInLeft" duration={1200}>
                <div
                  className="animation_img_two wow fadeInRight"
                  data-wow-delay="0.5s"
                >
                  {/* <img src={require("../../img/home9/mac.png")} alt="" /> */}
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <img className="svg_intro_bottom" src={Svg} alt="" />
      </section>
    );
  }
}
export default PaymentBanner;
