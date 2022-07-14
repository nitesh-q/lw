import React from "react";
import { Fade } from "react-reveal";
import { MERCHANTS_CONFIG } from "../../config";

const Partner = ({ pClass, pClasst, oClass }) => {
  return (
    <section className={`seo_partner_logo_area ${pClass}`}>
      <div className="container">
        <div className="seo_sec_title text-center mb_10">
          <Fade bottom>
            <h2>Trusted by 500+ Merchants</h2>
          </Fade>
        </div>
        <div className={`partner_logo_area_four ${pClasst}`}>
          <div className="row partner_info justify-content-center">
            {MERCHANTS_CONFIG.MERCHANTS.map((item, index) => (
              <div
                className="logo_item wow fadeInLeft mb_0 mr_0"
                data-wow-delay="0.1s"
              >
                <img className={oClass} src={item.image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;