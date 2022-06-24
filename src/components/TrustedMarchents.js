import React, { Component } from "react";
import Slider from "react-slick";
import Sectitle from "./Title/Sectitle";
import Pinstrips from "../images/trusted-merchents/pinstrip.png";
import Besttop from "../images/trusted-merchents/bestop.png";
import Cornor from "../images/trusted-merchents/cornor.png";
import Cariloha from "../images/trusted-merchents/cariloha.png";
import fylnn from "../images/trusted-merchents/fylnn.png";

const items = [
  {
    id: 1,
    image: Pinstrips,
  },
  {
    id: 2,
    image: Besttop,
  },
  {
    id: 3,
    image: Cariloha,
  },
  {
    id: 4,
    image: Cornor,
  },
  {
    id: 5,
    image: fylnn,
  },
  {
    id: 6,
    image: Besttop,
  },
];

class TrustedMarchents extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 200000,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
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
          breakpoint: 600,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: .9,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="erp_testimonial_area slick_pad ">
        <div className="container">
          <h3 className="f_size_20 f_600 t_color4 l_height40 text-center">
            Trusted by 500+ Marchents
          </h3>
          <div className="row">
            <div className="erp_testimonial_info">
              <Slider className="erp_testimonial_slider" {...settings}>
                {items.map((item) => (
                  <div className="erp_testimonial_item">
                    <div className="media">
                      <div className="media-body">
                        <img src={item.image} alt={item.id} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default TrustedMarchents;
