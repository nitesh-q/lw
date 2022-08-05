import React from "react";
import Icons from "../../shared/assets";

const LOGO = [
  {
    image: Icons.Pinstrips_1.default,
  },
  {
    image: Icons.Besttop_1.default,
  },
  {
    image: Icons.Corner_1.default,
  },
  {
    image: Icons.Cariloha_1.default,
  },

  {
    image: Icons.Fylnn_1.default,
  },
];

const TrustedMerchants_2 = ({bgClass}) => {
  return (
    <section className={`trusted_merchnants_area ${bgClass}`}>
      <div className="container-sm container-xl">
        <div>
          <h2>Trusted by 500+ Merchnats</h2>
        </div>
        <div className="row">
        <div className="img">
          {LOGO.map((i, index) => {
            return(<img className="img-fluid" src={i.image} />) 
          })}
        </div>
      </div>
      </div>
    </section>
  );
};
export default TrustedMerchants_2;
