import React from "react";
import Title from "../Common/Title";
import Fade from "react-reveal/Fade";

const Service = () => {
  return (
    <React.Fragment>
      <section className="seo_service_area sec_pad">
        <div className="container">
          <Title
            Title="How does it work?"
            TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!"
          />
          <div className="row seo_service_info">
            <Fade bottom duration={500}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  {/* <img src={require('../../img/seo/icon1.png')} alt=""/> */}
                  <a href=".#">
                    <h4>Interchange fees</h4>
                  </a>
                  <p>
                    Oxford I don't want no agro naff sloshed. I bite your arm
                    off mush hunky-dory nice one ummm I'm telling lurgy we.!
                  </p>

                  <a href=".#">
                    <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </Fade>
            <Fade bottom duration={700}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  {/* <img src={require("../../img/seo/icon2.png")} alt="" /> */}
                  <a href=".#">
                    <h4>Our Corporate</h4>
                  </a>
                  <p>
                    Oxford I don't want no agro naff sloshed. I bite your arm
                    off mush hunky-dory nice one ummm I'm telling lurgy we.!
                  </p>

                  <a href=".#">
                    <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </Fade>
            <Fade bottom duration={1000}>
              <div className="col-lg-4 col-md-6">
                <div className="seo_service_item">
                  {/* <img src={require("../../img/seo/icon5.png")} alt="" /> */}
                  <a href=".#">
                    <h4>European Regulation</h4>
                  </a>
                  <p>
                    Oxford I don't want no agro naff sloshed. I bite your arm
                    off mush hunky-dory nice one ummm I'm telling lurgy we.!
                  </p>
                  <a href=".#">
                   Learn More <i className="arrow_right"></i>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Service;
