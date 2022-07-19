import React from "react";

import FeaturesItems from "./FeatureItems";
import Icons from "../../shared/assets";

const WorkFeatures = ({ aClass, data, title }) => {
  return (
    <section className={`agency_featured_area pt_0 ${aClass}`}>
      <div className="container ccontainer">
        <h2
          className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
          {title}
        </h2>
        <div className="features_info">
          <img className="dot_img" src={Icons.dot.default} alt="" />
          {data.map((work,index) => (
            <FeaturesItems {...{ ...work }} key={index} />
          ))}
          <div className="dot middle_dot">
            <span className="dot1"></span>
            <span className="dot2"></span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkFeatures;
