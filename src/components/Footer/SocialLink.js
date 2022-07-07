import React from "react";
import { Link } from "gatsby";

/**
 * Social links
 * @param {*} param0
 * @returns
 */
const SocialLink = ({ title, items }) => {
  return (
    <div
      className="f_widget social-widget  wow fadeInLeft"
      data-wow-delay="0.4s"
    >
      <h3 className="f-title f_600 t_color f_size_18">{title}</h3>
      <div className="f_social_icon">
        {items.map((item, index) => {
          return (
            <Link to="/" key={index}>
              <i className={item.icon}></i>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLink;
