import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";

const ThankYou = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_log" mClass="menu_four" nClass="menu">
        <section className="pricing_area_two sec_pad">
          <div class="sec_title text-center startup_tab_img">
            <div class="row chat_features_content">
              <div class="col-lg-8 offset-lg-2">
                <div class="subscribe_form_info text-center drdt-ignore-dark">
                  <h1 class="f_600 f_size_30 l_height30 t_color3 mb_30 saas_subscribe_color drdt-ignore-dark">
                  Thank you! Your response has been submitted.
                  </h1>
                  <p class="f_400 f_size_16 l_height30 mb-0 text-justify ">
                    Feel free to explore our website for more information about our products and services.
                  </p>

                  <Link to="https://www.99minds.io/blog/" target="_blank">
                    <button
                      class="btn_hover btn_four mt_40 drdt-ignore-dark"
                      type="submit"
                    >
                      Check out our engaging blog!
                    </button>
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};
export default ThankYou;
