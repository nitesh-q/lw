import React from "react";
import CustomNavbar from "../CustomNavbar";
import Footer from "../Footer/Footer";
import FooterConfig from "../../config/footer.config";

const Layout = ({ children }) => {
  return (
    <div className="body_wrapper">
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
      {children}
      <Footer FooterConfig={FooterConfig} />
    </div>
  );
};

export default Layout;
