import React, { Component } from "react";
import Slider from "react-slick";
import Bestop from "../../images/trusted-merchents/bestop.png";

class Testimonial extends Component {
  constructor(props) {
    super();
    this.state = {
      TestimonialConfig: props.TestimonialConfig,
      bgColor: props.bgColor,
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let { TestimonialConfig } = this.state;
    var { bgColor } = this.state;
    return (
      <section className={`agency_testimonial_area ${bgColor}`}>
        <div className="container">
          <h2 className="text-center mb_10">Testimonials</h2>
          <p className="text-center">Hear from our Clients</p>
          <div className="agency_testimonial_info">
            <Slider className="testimonial_slider" {...settings}>
              {TestimonialConfig.Testimonial.map((item) => {
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
                      <h6 className="pr_20 pl_20 mt_20">{item.Name}</h6>
                      <img
                        className="pr_20 pl_20 h_30 mt_20"
                        src={Bestop}
                        alt=""
                      />
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
export default Testimonial;
