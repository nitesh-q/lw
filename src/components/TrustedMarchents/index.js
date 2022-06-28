import React, { Component } from "react";
import Slider from "react-slick";
import TrustedMarchentsConfig from "../../config/TrustedMarchents.config";


class TrustedMarchents extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: .85,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="erp_testimonial_area slick_pad ">
        <div className="container">
          <h3 className="f_size_20 f_600 t_color4 l_height40 text-center mb_15">
            Trusted by 500+ Marchents
          </h3>
          <div className="row">
            <div className="erp_testimonial_info">
              <Slider className="erp_testimonial_slider" {...settings}>
                {TrustedMarchentsConfig.Marchenct.map((item) => (
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
