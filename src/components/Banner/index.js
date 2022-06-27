import React from "react";
import Fade from "react-reveal/Fade";
import Icons from "../../shared/assets";



const Banner = () => {
  return (
    <section className="seo_features_one bg_color sec_pad">
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-lg-7 ">
          <div className="seo_features_img">
            <img className="img-fluid" src={Icons.FeatureImg.default} alt="features_img" />
          </div>
        </div>
        <div className="col-lg-5">
          <Fade bottom cascade>
            <div className="seo_features_content ">
              <h2>ENGAGE,ACQUIRE & RETAIN CUSTOMERS</h2>
              <p>
                with Gift Cards, Store credit,<br></br> Refferral and Loyalty
                program
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
                  <button
                    className="btn btn_get btn_get_two mt-3"
                    type="submit"
                  >
                    Get Started for Free
                  </button>
                </form>
              </div>
              <div className="row mt_15 flex ">
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
  );
};

export default Banner;
