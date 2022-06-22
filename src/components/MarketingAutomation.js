import React from 'react';
import Fade from "react-reveal/Fade";
import feature_img from "../images/home/feature_img.png";
import Giftcard_img from "../images/home/giftcard.png";
import Partner_01 from "../images/home3/logo_01.png";

const MarketingAutomation =()=>{
    return(
        <section className="developer_product_area">
        <div className="container">
          <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_50">
         Grew your store and drive revenue with Marketing Automation
          </h2>

          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <div className="developer_product_content">
                <ul
                  className="nav nav-tabs develor_tab mb-30 border_none"
                  id="myTab2"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-tab="tab_one"
                      id="refferal1-tab"
                      data-bs-toggle="tab"
                      href="#refferal1"
                      role="tab"
                      aria-controls=" refferal1"
                      aria-selected="true"
                    >
                      Refferral
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_two"
                      id="onboarding-tab"
                      data-bs-toggle="tab"
                      href="#onboarding"
                      role="tab"
                      aria-controls="onboarding"
                      aria-selected="false"
                    >
                      Onboarding
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_three"
                      data-bs-toggle="tab"
                      id="upsell-tab"
                      href="#upsell"
                      role="tab"
                      aria-controls="upsell"
                      aria-selected="true"
                    >
                     Upsell
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="crosssell-tab"
                      data-bs-toggle="tab"
                      href="#crosssell"
                      role="tab"
                      aria-controls="crosssell"
                      aria-selected="false"
                    >
                     Cross Sell
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="refund-tab"
                      data-bs-toggle="tab"
                      href="#refund"
                      role="tab"
                      aria-controls="refund"
                      aria-selected="false"
                    >
                     Refund
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="reward-tab"
                      data-bs-toggle="tab"
                      href="#reward"
                      role="tab"
                      aria-controls="reward"
                      aria-selected="false"
                    >
                     Reward
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="retain-tab"
                      data-bs-toggle="tab"
                      href="#retain"
                      role="tab"
                      aria-controls="retain"
                      aria-selected="false"
                    >
                    Retain
                    </a>
                  </li>
                </ul>
                <div className="tab-content developer_tab_content">
                  <div
                    className="tab-pane fade show active"
                    id="refferal1"
                    role="tabpanel"
                    aria-labelledby="refferal1-tab"
                  >
                    <section className="customer_engagement_one">
                      <div className="container">
                        <div className="row flex-row-reverse">
                          <div className="col-lg-6">
                            <div className="customer_engagement_img">
                              <img src={Giftcard_img} alt="features_img" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <Fade bottom cascade>
                              <div className="customer_engagement_content ">
                                <h2>Gift Cards</h2>
                                <ul >
                                  <li >Sell: <span>eGift (Digital) & Physical Gift card online, and in-store </span></li>
                                  <li>Omnichannel: <span>eGift (Digital) & Physical Gift card online, and in-store </span></li>
                                  <li>eGift Card</li>
                                </ul>

                                <div className="col-lg-9">
                                  <button
                                    className="btn btn_get btn_get_two mt-3"
                                    type="submit"
                                  >
                                    Get Started for Free
                                  </button>
                                </div>
                              </div>
                            </Fade>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="onboarding"
                    role="tabpanel"
                    aria-labelledby="onboarding-tab"
                  >
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
                                <h2>Store Credit</h2>
                              
                                <div className="col-lg-9">
                                  <form
                                    action="#"
                                    className="contact_form_box"
                                    method="post"
                                  >
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
                  </div>
                  <div
                    className="tab-pane fade"
                    id="upsell"
                    role="tabpanel"
                    aria-labelledby="upsell-tab"
                  >
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
                                <h2>Loyalty</h2>
                                
                                <div className="col-lg-9">
                                  <form
                                    action="#"
                                    className="contact_form_box"
                                    method="post"
                                  >
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
                  </div>
                  <div
                    className="tab-pane fade"
                    id="crosssell"
                    role="tabpanel"
                    aria-labelledby="crosssell-tab"
                  >
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
                                <h2>Refferal</h2>
                               
                                <div className="col-lg-9">
                                  <form
                                    action="#"
                                    className="contact_form_box"
                                    method="post"
                                  >
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
                  </div>
                  <div
                    className="tab-pane fade"
                    id="refund"
                    role="tabpanel"
                    aria-labelledby="refund-tab"
                  >
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
                                <h2>Automation</h2>
                              
                                <div className="col-lg-9">
                                  <form
                                    action="#"
                                    className="contact_form_box"
                                    method="post"
                                  >
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
                  </div>
                  <div
                    className="tab-pane fade"
                    id="reward"
                    role="tabpanel"
                    aria-labelledby="reward-tab"
                  >
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
                                <h2>Coupons</h2>
                             
                                <div className="col-lg-9">
                                  <form
                                    action="#"
                                    className="contact_form_box"
                                    method="post"
                                  >
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
                  </div>
                  <div
                    className="tab-pane fade"
                    id="retain"
                    role="tabpanel"
                    aria-labelledby="retain-tab"
                  >
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
                                <h2>Wallet</h2>
                              
                                <div className="col-lg-9">
                                  <form
                                    action="#"
                                    className="contact_form_box"
                                    method="post"
                                  >
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default MarketingAutomation;