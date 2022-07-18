import React from "react";
import Icons from "../../shared/assets";
const items = [
  { id: 1, image: Icons.Miva.default },
  { id: 2, image: Icons.Shopify.default },
  { id: 3, image: Icons.Woo.default },
  { id: 1, image: Icons.BigCommerce.default },
];

const SupportedBrand = ({ id, pClass, fclass, imgClass }) => {
  return (
    <section id="supportedBrand">
      <div className={`partner_logo_area_four  ${pClass}`}>
        <h3 className={`${fclass} `}>We Support</h3>
        <div className="row  partner_info">
          <div className={`logo_item w_100 ${imgClass} `} data-wow-delay="0.1s">
            <img className="h_18" src={Icons.Miva_Logo.default} alt="" />
            <img className="h_18" src={Icons.Miva.default} alt="" />
          </div>
          <div className={`logo_item w_128 ${imgClass} `} data-wow-delay="0.1s">
            <img className="h_25" src={Icons.BigCommerce_Logo.default} alt="" />
            <img className="h_25" src={Icons.BigCommerce.default} alt="" />
          </div>
          <div
            className={` logo_item w_110 ${imgClass} `}
            data-wow-delay="0.1s"
          >
            <img className="h_25" src={Icons.Shopify_Logo.default} alt="" />
            <img className="h_25" src={Icons.Shopify.default} alt="" />
          </div>
          <div className={`logo_item w_128 ${imgClass}`} data-wow-delay="0.1s">
            <img className="h_25" src={Icons.Woo_Logo.default} alt="" />
            <img className="h_25" src={Icons.Woo.default} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupportedBrand;
