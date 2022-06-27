import React from "react";
import Fade from "react-reveal/Fade";
import feature_img from "../images/home/feature_img.png";

import { BannerData, CustomerEngagement } from "../config/constants";
import Testimonial from "../components/Testimonial";
import TabComponent from "../components/TabComponent";
import MarketingAutomation from "../components/MarketingAutomation";
import BigCommerce from "../images/integrations/BigCommerce.png";
import Kalviyo from "../images/integrations/Kalviyo.png";
import Omnisend from "../images/integrations/Omnisend.png";
import TrustedMarchents from "../components/TrustedMarchents";
import Layout from "../components/Layout";
import TryAction from "../components/TryAction";
import Woo from "../images/trusted-merchents/woo.png";
import Shopify from "../images/trusted-merchents/shopify.png";
import Commerce from "../images/trusted-merchents/commerce.png";
import Miva from "../images/trusted-merchents/miva.png";

const Home = () => (
  <Layout>
    <section className="seo_features_one bg_color sec_pad">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-7">
            <div className="seo_features_img">
              <img className="img-fluid" src={feature_img} alt="features_img" />
            </div>
          </div>
          <div className="col-lg-5">
            <Fade bottom cascade>
              <div className="seo_features_content ">
                <h2>ENGAGE,ACQUIRE & RETAIN CUSTOMERS</h2>
                <p>
                  Enhance your customer's journey with Gift card, In-store
                  credit, and Loyalty programs and inspire them to share their
                  passion for your brand with refferals.
                </p>
                <div className="col-lg-9">
                  <form action="#" className="contact_form_box" method="post">
                    <div className="form-group text_box">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <button className="btn btn_get btn_get_two" type="submit">
                      Get Started for Free
                    </button>
                  </form>
                </div>
                <div className="row mt_15 ">
                  <li className="col "> No Credit Card Reaquired</li>
                  <li className="col"> Free Sign Up</li>
                  <li className="col"> 24/7 Support</li>
                </div>
                <div className={`partner_logo_area_four `}>
                  <h4 className="f_size_18 f_bold f_p  l_height28 ">
                    We Support
                  </h4>
                  <div className="row partner_info">
                    <div className="logo_item " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Miva} alt="" />
                      </a>
                    </div>
                    <div className="logo_item wow " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Shopify} alt="" />
                      </a>
                    </div>
                    <div className="logo_item wow " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Woo} alt="" />
                      </a>
                    </div>
                    <div className="logo_item wow " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Commerce} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
    <TrustedMarchents BannerData={BannerData} bgColor={`bg_color`} />
    <TabComponent data={CustomerEngagement} />
    <MarketingAutomation />
    <Testimonial BannerData={BannerData} bgColor={`bg_color`} />
    {/* ==============integration section============ */}
    <section className="seo_service_area sec_pad">
      <div className="container">
        <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_10">
          Integrations
        </h2>
        <p className="text-center">
          Empower Your Brick & Click Store With Powerful Integrations
        </p>
        <div className="row ">
          <Fade bottom duration={500}>
            <div className="col-lg-4 col-md-6">
              <div className="home_integration_item">
                <a href=".#">
                  <img src={BigCommerce} alt="" />
                </a>
                <p className="text-center mt_20">
                  Bits and bobs cup of tea bubble and squeak brolly.
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={700}>
            <div className="col-lg-4 col-md-6">
              <div className="home_integration_item">
                <a href=".#">
                  <img src={Kalviyo} alt="" />
                </a>
                <p className="text-center mt_20">
                  Bits and bobs cup of tea bubble and squeak brolly.
                </p>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000}>
            <div className="col-lg-4 col-md-6">
              <div className="home_integration_item">
                <a href=".#">
                  <img src={Omnisend} alt="" />
                </a>
                <p className="text-center mt_20">
                  Bits and bobs cup of tea bubble and squeak brolly.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
    <TryAction />
  </Layout>
);
export default Home;
