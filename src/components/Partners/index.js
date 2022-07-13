import React, { Component } from "react";
import { Fade } from "react-reveal";
import logo1 from "../../images/home3/logo_01.png"
import logo2 from "../../images/home3/logo_02.png"
import logo3 from "../../images/home3/logo_03.png"
import logo4 from "../../images/home3/logo_04.png"
import { MERCHANTS_CONFIG } from "../../config";




const Partner = ({ pClass, pClasst,oClass }) => {
  return (
    <section className={`seo_partner_logo_area ${pClass}`}>
    <div className="container">
      <div className="seo_sec_title text-center mb_70">
        <Fade bottom>
          <h2>Trusted by 500+ Merchants
          </h2>
        </Fade>
      </div>
        <div className={`partner_logo_area_four ${pClasst}`}>
          <div className="row partner_info justify-content-center">
          {MERCHANTS_CONFIG.MERCHANTS.map((item, index) => (
            <div className="logo_item wow fadeInLeft mb_0 mr_0" data-wow-delay="0.1s">
              <a href=".#">
                <img className={oClass} src={item.image} alt="" />
              </a>
            </div>
    ))}
           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
