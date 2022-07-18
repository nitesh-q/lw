
import React from "react";
import Icons from "../../shared/assets";

const integrations = [
  {
    icon: Icons.BigCommerce_1.default,
  },
  {
    icon: Icons.Klaviyo_1.default,
  },
  {
    icon: Icons.Omnisend_1.default,
  },
  {
    icon: Icons.Vend.default,
  },
  {
    icon: Icons.Heartland.default,
  },
  {
    icon: Icons.Hike.default,
  },
  {
    icon: Icons.Sendgrid.default,
  },
  {
    icon: Icons.Stripe.default,
  },
  {
    icon: Icons.WooCommerce.default,
  },
  {
    icon: Icons.ActiveCampaign.default,
  },
  {
    icon: Icons.Retail_Pro.default,
  },
  {
    icon: Icons.Awsses.default,
  },
  {
    icon: Icons.mailgun.default,
  },

];
const Integration = () => {
  return (
    <section className="security_integration_area">
      <div className="container">
        <div className="hosting_title  text-center">
          <h2 className="wow fadeInUp">Integrations</h2>
          <p>Empower Your Brick & Click Store With Powerful Integrations</p>
        </div>
        <div className="row">
          {integrations.map((i, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <a href="/#" className="s_integration_item">
                  <img src={i.icon} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Integration;
