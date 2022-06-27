import React from "react";
import Fade from "react-reveal/Fade";
import Giftcard_img from "../images/home/giftcard.png";
import StoreCredit_img from "../images/home/store.png";
import Automation_img from "../images/home/automation.png";
import Loyalty_img from "../images/home/loyalty.png";
import Refferal_img from "../images/home/refferal.png";
import Coupons_img from "../images/home/coupon.png";
import Wallet_img from "../images/home/wallet.png";

const TabComponent = ({ data }) => {
  return (
    <section className="developer_product_area sec_pad">
      <div className="container">
        {data.Head.map((item) => (
          <h1 className="text-center mb_50">{item.Title}</h1>
        ))}

        <div className="row">
          <div className="col-lg-12 d-flex align-items-center">
            <div className="developer_product_content">
              <ul
                className="nav nav-tabs develor_tab mb-30 border_none"
                id="myTab1"
                role="tablist"
              >
                {data.List.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a
                      className={`nav-link ${index === 0 ? "active" : ""}`}
                      data-tab={`${item.id}-tab`}
                      id={`${item.id}-tab`}
                      data-bs-toggle="tab"
                      href={`#${item.id}`}
                      role="tab"
                      aria-controls={item.id}
                      aria-selected={item.selected}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {/* {data.List.map((item) => (
              <div className="tab-content developer_tab_content">
              
                  <div
                    className="tab-pane fade show active"
                    id={item.id}
                    role="tabpanel"
                    aria-labelledby={`${item.id}-tab`}
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
                                <h2>{item.label}</h2>
                                <ul>
                                  <li>
                                    Sell:{" "}
                                    <span>
                                      eGift (Digital) & Physical Gift card
                                      online, and in-store{" "}
                                    </span>
                                  </li>
                                  <li>
                                    Omnichannel:{" "}
                                    <span>
                                      eGift (Digital) & Physical Gift card
                                      online, and in-store{" "}
                                    </span>
                                  </li>
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
                
              </div>
              ))} */}
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
                        <div className="col-lg-7 h_500 reduce_height">
                          <div className="customer_engagement_img">
                            <img src={Giftcard_img} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5 ">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Gift Cards</h2>
                              <ul>
                                <li>
                                  Sell :
                                  <span>
                                    {" "}
                                    eGift (Digital) & Physical Gift card online,
                                    and in-store{" "}
                                  </span>
                                </li>
                                <li>
                                  Omnichannel :
                                  <span>
                                    {" "}
                                    eGift (Digital) & Physical Gift card online,
                                    and in-store{" "}
                                  </span>
                                </li>
                                <li>
                                  eGift Card :
                                  <span>
                                    {" "}
                                    Customer can send gift card via email,
                                    Social media, SMS/Text, and Print-at-home.
                                  </span>
                                </li>
                                <li>
                                  Physical Gift Card :
                                  <span>
                                    {" "}
                                    We offer Print-on-demand physical gift card
                                    and fulfilment/shipping services.
                                  </span>
                                </li>
                                <li>
                                  Schedule :
                                  <span>
                                    {" "}
                                    Out of Stock Gift card & Schedule delivery
                                    for future occasion
                                  </span>
                                </li>
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
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_500 reduce_250px">
                          <div className="customer_engagement_img">
                            <img src={StoreCredit_img} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Store Credit</h2>
                              <h6>
                                Offering your customers’ store credit can be a
                                great way of improving customer retention.
                                Merchant can use Store credit:
                              </h6>
                              <ul>
                                <li>
                                  <span>
                                    To refund a customer for their returns
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    To offer cashback on customers spending
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    To reward customers for their business
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    To encourage sales during specific periods
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    To offer compensation for a poor experience
                                  </span>
                                </li>
                              </ul>
                              <h6>
                                In 99minds, Store credit can be quickly added to
                                customer accounts from the control panel and
                                automation using workflow engine.
                              </h6>

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
                  id="automation"
                  role="tabpanel"
                  aria-labelledby="automation-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_500 reduce_250px">
                          <div className="customer_engagement_img">
                            <img src={Automation_img} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Automation</h2>
                              <h6>
                                For ecommerce/retailers brands, Customer
                                acquisition & retention automation enables you
                                to focus on acquiring new customers, and retain
                                customers using:
                              </h6>
                              <ul>
                                <li>
                                  <span>Pre-built workflow template</span>
                                </li>
                                <li>
                                  <span>Loyalty points & Rewards</span>
                                </li>
                                <li>
                                  <span>Upsell using Gift Card</span>
                                </li>
                                <li>
                                  <span>Store credit as Refunds.</span>
                                </li>
                                <li>
                                  <span>Adding unique Promo codes/Coupon</span>
                                </li>
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
                  id="coupons"
                  role="tabpanel"
                  aria-labelledby="coupons-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_500 reduce_250px">
                          <div className="customer_engagement_img">
                            <img src={Coupons_img} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Coupons</h2>
                              <h3>Robust coupon creation</h3>
                              <h6>
                                Generate millions of unique coupons in a few
                                clicks, set rules, coupon lengths, etc.
                              </h6>
                              <ul>
                                <li>
                                  <span>Bulk Coupons Generation</span>
                                </li>
                                <li>
                                  <span>Dynamic Coupons</span>
                                </li>
                                <li>
                                  <span>Unique Coupon code</span>
                                </li>
                                <li>
                                  <span>Promo Codees.</span>
                                </li>
                                <li>
                                  <span>SKU Based Coupon</span>
                                </li>
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
                  id="loyalty"
                  role="tabpanel"
                  aria-labelledby="loyalty-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_500 reduce_250px">
                          <div className="customer_engagement_img">
                            <img src={Loyalty_img} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Loyalty</h2>
                              <h6>
                                Reward your customers for purchases and other
                                actions with points which can be redeemed for
                                discounts.
                              </h6>
                              <ul>
                                <li>
                                  <span>VIP tiers</span>
                                </li>
                                <li>
                                  <span>Point Program</span>
                                </li>
                                <li>
                                  <span>Cash Back Loyalty Programs</span>
                                </li>
                                <li>
                                  <span>Punch card Program</span>
                                </li>
                                <li>
                                  <span>Premium Loyalty Program</span>
                                </li>
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
                  id="wallet"
                  role="tabpanel"
                  aria-labelledby="wallet-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-7 h_500 reduce_250px">
                          <div className="customer_engagement_img">
                            <img src={Wallet_img} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Wallet & Mobile Pass</h2>
                              <h6>
                                Empower customers to store gift cards, loyalty
                                points, coupons,store credit.
                              </h6>
                              <ul>
                                <li>
                                  <span>
                                    Digital Loyalty Card & Gift Card compatible
                                    with Apple & Google Wallet
                                  </span>
                                </li>
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
                  id="refferal"
                  role="tabpanel"
                  aria-labelledby="refferal-tab"
                >
                  <section className="customer_engagement_one">
                    <div className="container">
                      <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                          <div className="customer_engagement_img">
                            <img src={Refferal_img} alt="features_img" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <Fade bottom cascade>
                            <div className="customer_engagement_content ">
                              <h2>Referral</h2>
                              <h6>
                                Boost your organic sales by adding a customer
                                referral program to your eCommerce store
                              </h6>
                              <ul>
                                <li>
                                  <span>Customizable Widget</span>
                                </li>
                                <li>
                                  <span>Branded Template experience</span>
                                </li>
                                <li>
                                  <span>Social Sharing link</span>
                                </li>
                                <li>
                                  <span>Referral link</span>
                                </li>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TabComponent;
