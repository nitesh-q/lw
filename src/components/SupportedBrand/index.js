import React from "react";
import Icons from "../../shared/assets";
const items = [
  { id: 1, image: Icons.Miva.default },
  { id: 2, image: Icons.Shopify.default },
  { id: 3, image: Icons.Woo.default },
  { id: 1, image: Icons.Commerce.default },
];

const SupportedBrand = () => {
  return (
    <div className={`partner_logo_area_four `}>
      <h4 className="f_size_18 f_bold f_p  l_height28 ">We Support</h4>
      <div className="row partner_info">
      {/* {items.map((i, k) => {
          return (
            <div className="logo_item " data-wow-delay="0.1s">
              <img src={i.image} alt={k} />
            </div>
          );
        })} */}
        <div className="logo_item " data-wow-delay="0.1s">
          <img src={Icons.Miva.default} alt="" />
        </div>
        <div className="logo_item wow " data-wow-delay="0.1s">
          <img src={Icons.Shopify.default} alt="" />
        </div>
        <div className="logo_item wow " data-wow-delay="0.1s">
          <img src={Icons.Woo.default} alt="" />
        </div>
        <div className="logo_item wow " data-wow-delay="0.1s">
          <img src={Icons.Commerce.default} alt="" />
        </div>
      </div>
    </div>
  );
};
export default SupportedBrand;
