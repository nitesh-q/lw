import React from 'react';
import Fade from "react-reveal/Fade";
import feature_img from "../images/home/feature_img.png";
import Giftcard_img from "../images/home/giftcard.png";
import Partner_01 from "../images/home3/logo_01.png";

const CustomerEngagement =()=>{
    return(
        <section className="developer_product_area sec_pad">
        <div className="container">
          <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_50">
            Customer Engagement & Retention Platform
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
                      id="giftcard-tab"
                      data-bs-toggle="tab"
                      href="#giftcard"
                      role="tab"
                      aria-controls=" giftcard"
                      aria-selected="true"
                    >
                      Gift Card
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_two"
                      id="storecredit-tab"
                      data-bs-toggle="tab"
                      href="#storecredit"
                      role="tab"
                      aria-controls="storecredit"
                      aria-selected="false"
                    >
                      Store Credit
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_three"
                      data-bs-toggle="tab"
                      id="loyalty-tab"
                      href="#loyalty"
                      role="tab"
                      aria-controls="loyalty"
                      aria-selected="true"
                    >
                      Loyalty
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="refferal-tab"
                      data-bs-toggle="tab"
                      href="#refferal"
                      role="tab"
                      aria-controls="refferal"
                      aria-selected="false"
                    >
                      Refferral
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="automation-tab"
                      data-bs-toggle="tab"
                      href="#automation"
                      role="tab"
                      aria-controls="automation"
                      aria-selected="false"
                    >
                      Automation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="coupons-tab"
                      data-bs-toggle="tab"
                      href="#coupons"
                      role="tab"
                      aria-controls="coupons"
                      aria-selected="false"
                    >
                      Coupons
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-tab="tab_four"
                      id="wallet-tab"
                      data-bs-toggle="tab"
                      href="#wallet"
                      role="tab"
                      aria-controls="wallet"
                      aria-selected="false"
                    >
                      Wallet & Moblie Pass
                    </a>
                  </li>
                </ul>
                <div className="tab-content developer_tab_content">
                  <div
                    className="tab-pane fade show active"
                    id="giftcard"
                    role="tabpanel"
                    aria-labelledby="giftcard-tab"
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
                    id="storecredit"
                    role="tabpanel"
                    aria-labelledby="storecredit-tab"
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
                    id="loyalty"
                    role="tabpanel"
                    aria-labelledby="loyalty-tab"
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
                    id="refferal"
                    role="tabpanel"
                    aria-labelledby="refferal-tab"
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
                    id="automation"
                    role="tabpanel"
                    aria-labelledby="automation-tab"
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
                    id="coupons"
                    role="tabpanel"
                    aria-labelledby="coupons-tab"
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
                    id="wallet"
                    role="tabpanel"
                    aria-labelledby="wallet-tab"
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
export default CustomerEngagement;