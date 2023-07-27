import React, { Component } from "react";

import logo from "/src/images/logo/99minds-logo.png";

class LeadForm extends Component {
  render() {
    // const {name, email, subject, message, emailStatus} = this.state;
    return (
      <section className="contact_info_area sec_pad bg_color">
        <div className="container">
          <div className="sign_info">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6 text_box text-center">
                <img className="mb_40 w-30" src={logo} />
                <h2 className="f_p f_size_22 t_color3 f_600 l_height28 mb_40">
                  EMPOWER YOUR BUSINESS WITH 99MINDS
                </h2>
                <label class="f_p text_c f_400 l_height28 mb_40">
                  Trusted by over 1000 businesses. Discover the secret to
                  successful marketing automation with 99minds. We empower
                  retail businesses to harness the potential of gift cards,
                  driving customer retention, loyalty, and reducing returns.
                </label>
                <div>
                <iframe 
                  width="120%"
                  height="630px"
                  src="https://crm.zoho.in/crm/WebFormServeServlet?rid=205c1cfe70d4992dc2177093cc20262a2be02ea8811f8fa1a04f7843a2afd3cagid71ea9139e1fbbeb931227dbcd956ad07d28dee89c93511d9e2b4e07614183e7a"
                ></iframe>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LeadForm;
