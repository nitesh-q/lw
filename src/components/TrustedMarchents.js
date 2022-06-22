import React, { Component } from "react";
import Slider from "react-slick";


class TrustedMarchents extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let BannerData = this.props.BannerData;
    var { bgColor } = this.props;
    return (
      <section className={`agency_testimonial_area sec_pad ${bgColor}`}>
        <div className="container  pad">
          <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_10">
            Testimonials
          </h2>
          <p className="text-center">Hear from our Clients</p>
          <div className="agency_testimonial_info">
            <Slider className="testimonial_slider" {...settings}>
              {BannerData.AgencyTestimonial.map((item) => {
                return (
                  <div
                    className="testimonial_item text-center left"
                    key={item.id}
                  >
                    <div className="author_img">
                      <img src={item.image} alt="author_01" />
                    </div>
                    <div className="mt_15">
                      <p className="pr_20 pl_20">{item.description}</p>
                      <h6 className="pr_20 pl_20">{item.Name}</h6>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
export default TrustedMarchents;
