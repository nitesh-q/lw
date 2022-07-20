import React from "react";

const CAMPAIGN_DETAILS = [
    {
      title: "2 months",
      description: "Campaign Length",
    },
    {
      title: "7.6x Upsell",
      description: "On orders with Credit",
    },
    {
      title: "9% Increase",
      description: "In AOV",
    },
    {
      title: "1 Active",
      description: " Omnichannel Store",
      descriptionTwo: "Credit Rewards Program",
    },
  ];

const DarkBannerFooter = () => {
  return (
    <section className="fun_fact_footer_area dk_bg_two pb_50">
      <div className="container">
        <div className="">
          <h4 className="w_color f_p f_700 mb_40 text-center">
            Campaign Details
          </h4>
          <ul>
            {CAMPAIGN_DETAILS.map((details, index) => {
              return (
                <li key={index}>
                  <h3>{details.title}</h3>
                  <p className="mb-0 d_p_color">
                    {details.description}
                    <br /> {details.descriptionTwo}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DarkBannerFooter;
