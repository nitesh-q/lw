import React from "react";
import Icons from "../../shared/assets";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 200000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const integrations = [
  {
    icon: Icons.BigCommerce.default,
    // title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
  {
    icon: Icons.Kalviyo.default,
    // title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
  {
    icon: Icons.Omnisend.default,
    // title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
  // {
  //   icon: Icons.Kalviyo.default,
  //   // title: "Bits and bobs cup of tea bubble and squeak brolly.",
  // },
];

const IntegrationCard = ({ title, icon }) => {
  return (
    <div className="iitem">
      <div className="studies_item">
        <a href=".#">
          <img src={icon} alt="" />
        </a>
        <div className="text">
          <a href=".#">
            <h4></h4>
          </a>
          <p>
            <a href=".#"></a>
            <a href=".#"></a>
          </p>
        </div>
      </div>
    </div>
  );
};

const Integration = ({ title, description }) => {
  return (
    <section className="case_studies_area sec_pad">
      <div className="container">
        <div className=" case_title text-center">
          <h2
            className=" f_size_30 f_600 t_color3 l_height40 text-center mb_10 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            {title}
          </h2>
          <p>{description}</p>
        </div>

        <Slider {...settings} className="case_studies_slider">
          {integrations.map((i, index) => {
            return (
              <IntegrationCard key={index} title={i.title} icon={i.icon} />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
export default Integration;
