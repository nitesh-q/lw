import  React from "react";
import CustomNavbar from "../CustomNavbar";
import Footer from "../Footer/Footer";
import { FooterData } from "../../config/constants";

const Layout = ({ children }) => {
  return (
    <div className="body_wrapper">
       <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
      {children}
      <Footer FooterData={FooterData}/>
    </div>
  );
};

export default Layout;
