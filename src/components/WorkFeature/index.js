import React, { Component } from "react";

import FeaturesItems from "./FeatureItems";
import Icons from "../../shared/assets";

const WorkFeatures = ({ aClass, data,title }) => {
  return (
    <section className={`agency_featured_area bg_color ${aClass}`}>
      <div className="container">
        <h2
          className="f_size_30 f_600 t_color3 l_height40 text-center wow fadeInUp"
          data-wow-delay="0.3s"
        >
         {title}
        </h2>
        <div className="features_info">
          <img className="dot_img" src={Icons.dot.default} alt="" />
          {data.map((work) => (
            <FeaturesItems {...{ ...work }} />
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
