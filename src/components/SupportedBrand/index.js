import React from "react";
import Icons from "../../shared/assets";
const items = [
  { id: 1, image: Icons.Miva.default },
  { id: 2, image: Icons.Shopify.default },
  { id: 3, image: Icons.Woo.default },
  { id: 1, image: Icons.Commerce.default },
];

const SupportedBrand = ({ id }) => {
  return (
    <section id="supportedBrand">
      <div className="container">
        <div
          className={`partner_logo_area_four d-flex flex-column align-items-center `}
        >
          <h3 className="f_size_20 f_600 t_color5 l_height40 text-center mb_40">
            We Support
          </h3>
          <div className="row  partner_info">
            {/* {items.map((i, k) => {
          return (
            <div className="logo_item " data-wow-delay="0.1s">
              <img src={i.image} alt={k} />
            </div>
          );
        })} */}
            <div className="logo_item w_100 " data-wow-delay="0.1s">
              <img className="h_18" src={Icons.Miva.default} alt="" />
            </div>
            <div className="logo_item w_128 " data-wow-delay="0.1s">
              <img className="h_25" src={Icons.Commerce.default} alt="" />
            </div>
            <div className="logo_item w_110 " data-wow-delay="0.1s">
              <img className="h_25" src={Icons.Shopify.default} alt="" />
            </div>
            <div className="logo_item w_110 " data-wow-delay="0.1s">
              <img className="h_25" src={Icons.Woo.default} alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupportedBrand;
