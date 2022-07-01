import React from "react";

const Header = ({ title }) => {
  return (
    <section className="erp_action_area mb_50">
      <div className="container ">
        <div className="row align-items-center">
          <h2 className="f_size_30 f_600 t_color3 l_height40 text-center l_sapcing1 ">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};
export default Header;
