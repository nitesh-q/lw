import React from "react";
import Icons from "../../shared/assets";
import Fade from "react-reveal/Fade";

const integrations = [
  {
    icon: Icons.Woo.default,
    title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
  {
    icon: Icons.BigCommerce.default,
    title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
  {
    icon: Icons.Kalviyo.default,
    title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
];

const IntegrationCard = (icon, title) => {
  return (
    <Fade bottom duration={500}>
      <div className="col-lg-4 col-md-6">
        <div className="home_integration_item">
          <a href=".#">
            <img src={{ icon }} alt="" />
          </a>
          <p className="text-center mt_20">{title}</p>
        </div>
      </div>
    </Fade>
  );
};

const Integration = ({ title, description }) => {
  return (
    <section className="seo_service_area sec_pad">
      <div className="container">
        <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_10">
          {title}
        </h2>
        <p className="text-center">{description}</p>
        <div className="row ">
          {integrations.map((i) => {
            return <IntegrationCard title={i.title} icon={i.icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Integration;
