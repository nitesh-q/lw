import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FOOTER_CONFIG } from "../../config";
import "../../assets/themify-icon/themify-icons.css";
import "../../assets/simple-line-icon/simple-line-icons.css";
import "../../assets/font-awesome/css/all.css";
import "../../assets/elagent/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/main.css";
import "../../assets/responsive.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js";

const Layout = ({ children, slogo, mClass, nClass }) => {
  return (
    <div className="body_wrapper">
      <Navbar
        cClass="ccontainer p0"
        hbtnClass="new_btn"
        mClass={mClass}
        slogo={slogo}
        nClass={nClass}
      />
      {children}
      <Footer config={FOOTER_CONFIG} />
    </div>
  );
};

export default Layout;
