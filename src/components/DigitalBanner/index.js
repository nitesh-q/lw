import React from "react";
import Reveal from "react-reveal";
import Icons from "../../shared/assets";
import { BANNERS_CONFIG } from "../../config";
import StartedFreeFrom from "../StartedFreeForm";
import scrollTo from "gatsby-plugin-smoothscroll";
import CTAService from "../Services/CTAService";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 20000,
  slidesToShow: 2,
  slidesToScroll: 1,
  // responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
};
const AppBanner = ({
  config,
  supportedBrand,
  startedFreeForm,
  titleClass,
  allService,
  mClass,
  wClass,
}) => {
  return (
    <section className="app_hero_banner_area" id="home">
      <div class="app_hero_banner_shap "></div>
      <div class="round_shap one"></div>
      <div class="round_shap two "></div>
      <div class="round_shap three "></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <Reveal bottom cascade>
            <div className="app_hero_banner_content">
              <h2>Engage,Acquire & Retain Customers</h2>
              <p>
                Enrich your Customer Journey with a Gift Card, Store Credit, and
                Loyalty Program. Empower them to share your brand experience
                with Refferrals
              </p>
            </div>
                <div className="col-lg-12">
                  <StartedFreeFrom btnClass={"bg_white t_color1"} />
                </div>
                <CTAService allService ={false}/>    
            </Reveal>
          </div>
        </div>
        {/* <div  className="container custom_container p0">
                <div  className="app_screen_info">
                    <Slider  className="app_screenshot_slider" {...settings}>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="#"  className="image-link"><img src={Icons.video1.default} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="#"  className="image-link"><img src={Icons.video2.default} alt=""/></a>
                            </div>
                        </div>
                        <div  className="item">
                            <div  className="screenshot_img">
                                <a href="#"  className="image-link"><img src={Icons.video1.default} alt=""/></a>
                            </div>
                        </div>
                      
                    </Slider>
                </div>
            </div> */}
      </div>
    </section>
  );
};

export default AppBanner;