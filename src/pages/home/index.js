import React from "react";
import Fade from "react-reveal/Fade";
import { BannerData, CustomerEngagement } from "../../config/constants";
import Testimonial from "../../components/Testimonial";
import TabComponent from "../../components/TabComponent";
import MarketingAutomation from "../../components/MarketingAutomation";
import TrustedMarchents from "../../components/TrustedMarchents";
import Layout from "../../components/Layout";
import TryAction from "../../components/TryAction";
import { Integration } from "../../components";
import Icons from "../../shared/assets";

const Home = () => (
  <Layout>
    <section className="seo_features_one bg_color sec_pad">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-6">
            <div className="seo_features_img">
              <img src={Icons.FeatureImg.default} alt="features_img" />
            </div>
          </div>
          <div className="col-lg-6">
            <Fade bottom cascade>
              <div className="seo_features_content ">
                <h2>ENGAGE,ACQUIRE & RETAIN CUSTOMERS</h2>
                <h3>
                  with Gift Cards, Store credit,<br></br> Refferral and Loyalty
                  program
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
                    <div className="logo_item " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Icons.Miva.default} alt="" />
                      </a>
                    </div>
                    <div className="logo_item wow " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Icons.Shopify.default} alt="" />
                      </a>
                    </div>
                    <div className="logo_item wow " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Icons.Woo.default} alt="" />
                      </a>
                    </div>
                    <div className="logo_item wow " data-wow-delay="0.1s">
                      <a href=".#">
                        <img src={Icons.Commerce.default} alt="" />
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
    <Integration
      title={"Integrations"}
      description={
        "Empower Your Brick & Click Store With Powerful Integrations"
      }
    />
    <TryAction />
  </Layout>
);
export default Home;
