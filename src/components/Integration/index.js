import React from "react";
import Icons from "../../shared/assets";
import Fade from "react-reveal/Fade";

const integrations = [
  {
    icon: Icons.BigCommerce.default,
    title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
  {
    icon: Icons.Kalviyo.default,
    title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
  {
    icon: Icons.Omnisend.default,
    title: "Bits and bobs cup of tea bubble and squeak brolly.",
  },
];

const IntegrationCard = ({title, icon}) => {
  return (<> 
    <Fade bottom duration={500}>
      <div className="col-lg-4 col-md-6 space">
        <div className="home_integration_item">
          <a href=".#">
            <img src={icon } alt="" />
          </a>
          <h6 className="text-center mt_20">{title}</h6>
        </div>
      </div>
    </Fade>
    </>

  );
};

const Integration = ({ title, description }) => {
  return (
    <section className="seo_service_area sec_pad">
      <div className="container">
        <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_10">
          {title}
        </h2>
        <p className="text-center f_500">{description}</p>
        <div className="row ">
          {integrations.map((i) => {return(
            <IntegrationCard title={i.title} icon={i.icon} />
          )})}
        </div>
      </div>
    </section>
  );
};

export default Integration;
