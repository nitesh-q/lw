import React from "react";
import CloudImage from "../../images/seo/cloud.png";
const CTA_1 = () => {
  return (
    <section className="seo_subscribe_area">
      <div className="overlay_img"></div>
      <div className="cloud_img">
        <img src={CloudImage} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6  ">
            <div className="try_call_action_text">
              <h2>Try 99minds now</h2>
              <p>
                The free demo comes with no commitments <br></br>and no credit
                card required
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row w-100 try_action_service">
              <div className="col">
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
              <div className="col-lg-5 action_about_btn_col">
                <a href="/" className="about_btn">
                  Get Started for free
                </a>
              </div>
            </div>

            <div className="row w-100 service ">
              <li className="col "> No Credit Card Required</li>
              <li className="col"> Free Sign Up</li>
              <li className="col"> 24/7 Support</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA_1;