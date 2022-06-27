import React from "react";
import Fade from "react-reveal/Fade";
import feature_img from "../images/home/feature_img.png";
import OnBoarding from "../images/home/onboarding.png";
import CrossSell from "../images/home/crosssell.png";
import Upsell from "../images/home/upsell.png";
import Refund from "../images/home/refund.png";
import Reward from "../images/home/reward.png";

import Partner_01 from "../images/home3/logo_01.png";

const MarketingAutomation = () => {
  return (
    <section className="developer_product_area pt_0">
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
                        <div className="col-lg-7 h_400 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={Reward} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Refer a Friend</h2>
                              <p>
                                Boost yo organic seles by adding a customer
                                refferal program to your eCommerce store
                              </p>
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
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_400 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={OnBoarding} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>New User Signup</h2>
                              <p>
                                When someone creates a new account, trigger a
                                one-time discount email immeadiately after
                                completion of the Sign-up form
                              </p>

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
                  id="upsell"
                  role="tabpanel"
                  aria-labelledby="upsell-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_400 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={Upsell} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Sell more products</h2>
                              <p>
                                Based on Customer's Order data, Send Promotional
                                Store Credit to Customer{" "}
                              </p>

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
                  id="crosssell"
                  role="tabpanel"
                  aria-labelledby="crosssell-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_400 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={CrossSell} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Sell more related products</h2>
                              <p>
                                Send Coupons/Gift card specific to relevent
                                product in the order for future purchase
                              </p>
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
                  id="refund"
                  role="tabpanel"
                  aria-labelledby="refund-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_400 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={Refund} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Use Store credit to refund customer</h2>
                              <p>
                                Issue store credit/gift card as refund after
                                goods return
                              </p>
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
                  id="reward"
                  role="tabpanel"
                  aria-labelledby="reward-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_400 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={Reward} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Use reward to nurture customers</h2>
                              <p>
                                Reward users with store credit/gift card after
                                reaching order count threshold
                              </p>
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
                  id="retain"
                  role="tabpanel"
                  aria-labelledby="retain-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_400 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={Reward} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Use reward to retain customers</h2>
                              <p>
                                Automatically trigger a retention campaign when
                                users meet segment conditions such as inactive
                                or canceled
                              </p>

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MarketingAutomation;
