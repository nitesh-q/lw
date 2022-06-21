import React, { Component } from "react";
import StudySlider from "../components/StudySlider";
import SeoTitle from "../components/Title/SeoTitle";
import Testimonial from "../components/Testimonial/Testimonial";
import cloud from "../images/seo/cloud.png";
import triangle_one from "../images/seo/triangle_one.png";
import logo_01 from "../images/seo/logo_01.png";
import logo_02 from "../images/seo/logo_02.png";
import logo_03 from "../images/seo/logo_03.png";
import logo_04 from "../images/seo/logo_04.png";
import logo_05 from "../images/seo/logo_05.png";
import logo_06 from "../images/seo/logo_06.png";
import logo_07 from "../images/seo/logo_07.png";
import logo_08 from "../images/seo/logo_08.png";
import logo_09 from "../images/seo/logo_09.png";
import Fade from "react-reveal/Fade";

class Subscribe extends Component {
  render() {
    let FooterData = this.props.FooterData;
    return (
      <React.Fragment>
        {/* <section className="seo_subscribe_area">
          <div className="overlay_img"></div>
          <div className="cloud_img">
            <img src={cloud} alt="" />
          </div>
          <div className="container">
            <SeoTitle
              Title="Check your Website’s SEO!"
              TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikeyWhy gormless, pear shaped.!"
            />
            <form action="#" className="row seo_subscribe_form">
                <div className="d-flex col-lg-5 col-md-4 col-sm-2">
              <div className="input-group col-lg-5 col-md-5 col-sm-6">
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Web URL"
                  className="form-control"
                />
              </div>
              <div className="input-group col-lg-5 col-md-4 col-sm-6">
                <input
                  type="email"
                  name="email"
                  id="emails"
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="input-group col-lg-2 col-md-3 col-sm-12">
                <input
                  type="submit"
                  name="submit"
                  value="Check"
                  className="check-btn"
                />
              </div>
              </div>
            </form>
          </div>
        </section>
        <section className="case_studies_area sec_pad">
          <div className="container">
            <SeoTitle
              Title="Our case studies"
              TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!"
            />
            <StudySlider />
          </div>
        </section>
        <section className="seo_fact_area sec_pad">
          <div className="home_bubble">
            <div className="bubble b_one"></div>
            <div className="bubble b_three"></div>
            <div className="bubble b_four"></div>
            <div className="bubble b_six"></div>
            <div
              className="triangle b_eight"
              data-parallax='{"x": 120, "y": -10}'
            >
              <img src={triangle_one} alt="" />
            </div>
          </div>
          <div className="container">
            <SeoTitle Title="Over 1200+ completed work & Still counting." />
            <div className="seo_fact_info">
              <div className="seo_fact_item">
                <div className="text">
                  <div className="counter one">693</div>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="seo_fact_item">
                <div className="text">
                  <div className="counter two">276</div>
                  <p>Projects</p>
                </div>
              </div>
              <div className="seo_fact_item">
                <div className="text">
                  <div className="counter three">102</div>
                  <p>SEO Winners</p>
                </div>
              </div>
              <div className="seo_fact_item last">
                <div className="text">
                  <div className="counter four">93</div>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <Testimonial
          tClass="testimonial_area sec_pad"
          FooterData={FooterData}
        /> */}
        {/* <section className="seo_partner_logo_area sec_pad">
          <div className="container">
            <div className="seo_sec_title text-center mb_70">
              <Fade bottom>
                <h2>
                  Relied on marketers, trusted by engineers,
                  <br /> and beloved by executives, everyw here.
                </h2>
              </Fade>
            </div>
            <div className="partner_logo_area_four">
              <div className="row partner_info">
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_01} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_02} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_03} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_04} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_05} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_06} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_07} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                  <a href=".#">
                    <img src={logo_08} alt="" />
                  </a>
                </div>
                <div className="logo_item">
                 
                    <img src={logo_09} alt="" />
               
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="seo_call_to_action_area sec_pad">
          <div className="container">
            <div className="seo_call_action_text">
              <h2>
               Try 99minds now
              </h2>
              <p>The free demo comes with no commitments <br></br>and no credit card reaquired</p>
              <a href="/" className="about_btn">
                Get Started for free 
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Subscribe;
