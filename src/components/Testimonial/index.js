import React from "react";
import Slider from "react-slick";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 30000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

/**
 * Testimonial data
 * @param {*} param0
 * @returns
 */
const Testimonial = ({ sliderData, bgColor, title, subTitle }) => {
  return (
    <section className={`agency_testimonial_area sec_pad mb_70 ${bgColor}`}>
      <div className="container">
        <h2 className="f_size_30 f_600 t_color3 l_height40 text-center ">
          Testimonial
        </h2>
        <p className="text-center" >Hear from our Clients</p>
        <div className="agency_testimonial_info">
          <Slider className="testimonial_slider" {...settings}>
            {sliderData.map((item) => {
              return (
                <div
                  className="testimonial_item text-center left"
                  key={item.id}
                >
                  <div className="author_img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="author_description">
                    <h4 className="f_500 t_color3 f_size_18">
                      {item.Name}
                    </h4>
                  </div>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
