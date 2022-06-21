import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Fade from "react-reveal/Fade";
import feature_img from "../images/home/feature_img.png";
import features_img_two from "../images/seo/features_img_two.png";

import Footer from "../components/Footer/Footer";
import { FooterData } from "../helpers/constants";
import Portfoliofull4col from "../components/Portfoliofull4col";

const Home = () => (
  <div className="body_wrapper">
    <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
    {/* <Portfoliofull4col/> */}
    <React.Fragment>
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
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="seo_features_one sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="seo_features_img seo_features_img_two">
                <div className="round_circle"></div>
                <div className="round_circle two"></div>
                <img src={features_img_two} alt="features_img_two" />
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <Fade bottom cascade>
                <div className="seo_features_content">
                  <h2 className="wow fadeInUp">
                    Get tips & tricks on how to skyrocket your sales.
                  </h2>
                  <h6 className="wow fadeInUp">
                    What a plonker bamboozled so I said say what a load of
                    rubbish owt to do with me haggle.
                  </h6>
                  <p className="wow fadeInUp">
                    Cheeky bugger gosh codswallop chap bamboozled blatant
                    cracking goal brown bread, pear shaped cor blimey guvnor
                    easy peasy lemon squeezy hotpot spiffing good time, chancer
                    a spend a penny spiffing I don't want no agro tinkety tonk
                    old fruit.
                  </p>
                  <a
                    href=".#"
                    className="seo_btn seo_btn_one btn_hover wow fadeInUp"
                  >
                    Learn More
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <section className="seo_call_to_action_area sec_pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="seo_call_action_text">
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
    </React.Fragment>

    <Footer FooterData={FooterData} />
  </div>
);
export default Home;
