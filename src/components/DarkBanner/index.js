import React from "react";
import Image1 from "../../images/home6/trust_img2.png";

const POSTS = [
  {
    id: 1,
    time: "7",
    timeT: "M+",
    description: "Users",
    descriptionTwo: "trust our tools",
  },
  {
    id: 2,
    time: "100",
    timeT: "K",
    description: "Join",
    descriptionTwo: "every month",
  },
];
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
const DarkBanner = () => {
  return (
    <section className="fun_fact_area dk_bg_two">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-7 col-md-6">
            <div className="fact_author_img text-right">
              <div className="square_box box_three"></div>
              <div className="square_box box_four"></div>
              <img
                className="wow fadeInUp"
                data-wow-delay="0.4s"
                src={Image1}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="fun_fact_content">
              <h1 className="w_color f_p f_700 mb_20">Trusted</h1>
              <p className="f_400 d_p_color f_size_15 l_height28 mb_40">
                Why I say old chap that is spiffing barney, nancy boy bleeder
                chimney pot Richard cheers the little rotter so I said, easy
                peasy buggered blower bevvy A bit of how's your father he nicked
                it arse over tit.{" "}
              </p>
              <div className="d-flex">
                {POSTS.map((post) => (
                  <div className="fact_item" key={post.id}>
                    <h1 className="w_color">
                      <span>{post.time}</span>
                      {post.timeT}
                    </h1>
                    <p className="mb-0 d_p_color">
                      {post.description}
                      <br />
                      {post.descriptionTwo}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <div className="row mt_50">
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
          {/* <div className="col-lg-3 w_color f_p f_700 mb_20 text-center">
            dfd
          </div>
          <div className="col-lg-3 w_color f_p f_700 mb_20 text-center">
            dfs
          </div>
          <div className="col-lg-3 w_color f_p f_700 mb_20 text-center">
            dfds
          </div>
          <div className="col-lg-3 w_color f_p f_700 mb_20 text-center">
            dgs
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default DarkBanner;
