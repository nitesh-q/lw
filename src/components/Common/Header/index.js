import React from "react";

const Header = ({ title,description,className }) => {
  return (
    <section className={`erp_action_area  ${className}`}>
      <div className="container ">
        <div className="row align-items-center">
          <h2>
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
export default Header;
