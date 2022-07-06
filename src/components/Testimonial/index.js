import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonial = ({TestimonialConfig,bgColor,title,subTitle}) => {
 

    return (
      <section className={`agency_testimonial_area ${bgColor}`}>
        <div className="container">
          <h2 className="text-center mb_10">{title}</h2>
          <p className="text-center">{subTitle}</p>
          <div className="agency_testimonial_info">
            <Slider className="testimonial_slider" {...settings}>
              {TestimonialConfig.Testimonial.map((item,index) => {
                return (
                  <div
                    className="testimonial_item text-center left"
                    key={index}
                  >
                    <div className="author_img">
                      <img src={item.image} alt="author_01" />
                    </div>
                    <div className="mt_15">
                      <p className="pr_20 pl_20">{item.description}</p>
                      <h6 className="pr_20 pl_20 mt_20">{item.Name}</h6>
                      <img
                        className="pr_20 pl_20 h_30 mt_20"
                        src={item.company}
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
export default Testimonial;
