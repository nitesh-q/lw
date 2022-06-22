import React, { Component } from "react";
import studies_img_one from "../images/seo/studies_img_one.jpg";
import studies_img_two from "../images/seo/studies_img_two.jpg";
import studies_img_three from "../images/seo/studies_img_three.jpg";

import Slider from "react-slick/";

class StudySlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 6000*10,
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
    return (
      <React.Fragment>
        <Slider {...settings} className="case_studies_slider">
          <div className="iitem">
            <div className="studies_item">
              <img src={studies_img_one} alt="" />
              <div className="text">
                <a href=".#">
                  <h4>Content Marketing</h4>
                </a>
                <p>
                  <a href=".#">Marketing,</a>
                  <a href=".#">Seo</a>
                </p>
              </div>
            </div>
          </div>
          <div className="iitem">
            <div className="studies_item">
              <img src={studies_img_two} alt="" />
              <div className="text">
                <a href=".#">
                  <h4>Content Marketing</h4>
                </a>
                <p>
                  <a href=".#">Marketing,</a>
                  <a href=".#">Seo</a>
                </p>
              </div>
            </div>
          </div>
          <div className="iitem">
            <div className="studies_item">
              <img src={studies_img_three} alt="" />
              <div className="text">
                <a href=".#">
                  <h4>Content Marketing</h4>
                </a>
                <p>
                  <a href=".#">Marketing,</a>
                  <a href=".#">Seo</a>
                </p>
              </div>
            </div>
          </div>
          <div className="iitem">
            <div className="studies_item">
              <img src={studies_img_three} alt="" />
              <div className="text">
                <a href=".#">
                  <h4>Content Marketing</h4>
                </a>
                <p>
                  <a href=".#">Marketing,</a>
                  <a href=".#">Seo</a>
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </React.Fragment>
    );
  }
}

export default StudySlider;
