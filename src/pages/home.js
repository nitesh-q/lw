import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Fade from "react-reveal/Fade";
import feature_img from "../images/home/feature_img.png";
import Partner_01 from "../images/home3/logo_01.png";
import Footer from "../components/Footer/Footer";
import { FooterData, BannerData } from "../config/constants";
import Testimonial from "../components/Testimonial";
import CustomerEngagement from "../components/CustomerEngagement";
import MarketingAutomation from "../components/MarketingAutomation";
import StudySlider from "../components/StudySlider";
import BigCommerce from "../images/integrations/BigCommerce.png";
import Kalviyo from "../images/integrations/Kalviyo.png";
import Omnisend from "../images/integrations/Omnisend.png";
import TrustedMarchents from "../components/TrustedMarchents";
;

const Home = () => (
  <div className="body_wrapper">
    <React.Fragment>
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
      <section className="seo_features_one sec_pad">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6">
              <div className="seo_features_img">
                <img src={feature_img} alt="features_img" />
              </div>
            </div>
            <div className="col-lg-6">
              <Fade bottom cascade>
                <div className="seo_features_content ">
                  <h2>ENGAGE,ACQUIRE & RETAIN CUSTOMERS</h2>
                  <h3>
                    with Gift Cards, Store credit,<br></br> Refferral and
                    Loyalty program
                  </h3>
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
                      <button
                        className="btn btn_get btn_get_two mt-3"
                        type="submit"
                      >
                        Get Started for Free
                      </button>
                    </form>
                  </div>
                  <div className={`partner_logo_area_four `}>
                    <h4 className="f_size_18 f_bold f_p  l_height28 ">
                      We Support
                    </h4>
                    <div className="row partner_info">
                      <div
                        className="logo_item wow fadeInLeft"
                        data-wow-delay="0.1s"
                      >
                        <a href=".#">
                          <img src={Partner_01} alt="" />
                        </a>
                      </div>
                      <div
                        className="logo_item wow fadeInLeft"
                        data-wow-delay="0.1s"
                      >
                        <a href=".#">
                          <img src={Partner_01} alt="" />
                        </a>
                      </div>
                      <div
                        className="logo_item wow fadeInLeft"
                        data-wow-delay="0.1s"
                      >
                        <a href=".#">
                          <img src={Partner_01} alt="" />
                        </a>
                      </div>
                      <div
                        className="logo_item wow fadeInLeft"
                        data-wow-delay="0.1s"
                      >
                        <a href=".#">
                          <img src={Partner_01} alt="" />
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
     <TrustedMarchents  BannerData={BannerData} bgColor={`bg_color`} />
      <CustomerEngagement />
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
      <section className=" sec_pad">
        <div className="container try_call_to_action_area">
          <div className="row w-100">
            <div className="col-lg-6">
              <div className="try_call_action_text">
                <h2>Try 99minds now</h2>
                <p>
                  The free demo comes with no commitments <br></br>and no credit
                  card reaquired
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <form action="#" className="contact_form_box" method="post">
                <div className="form-group text_box">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-3">
              <a href="/" className="about_btn">
                Get Started for free
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer FooterData={FooterData} />
    </React.Fragment>
  </div>
);
export default Home;
