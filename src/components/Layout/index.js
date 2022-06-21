import  React from "react";
import CustomNavbar from "../CustomNavbar";

const Layout = ({ children,FooterData }) => {
  return (
    <div className="body_wrapper">
       <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn"/>
      {children}
      <FooterTwo FooterData={FooterData}/>
    </div>
  );
};

export default Layout;
