import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FooterConfig from "../../config/footer.config";


const Layout = ({ children }) => {
  return (
    <div className="body_wrapper">
      <Navbar cClass="custom_container p0" hbtnClass="new_btn" />
      {children}
      <Footer FooterConfig={FooterConfig} />
    </div>
  );
};

export default Layout;
