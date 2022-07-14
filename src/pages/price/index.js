import React from "react";
import Layout from "../../components/Layout";
// import CustomNavbar from "../components/CustomNavbar";
import { Breadcrumb } from "../../components";
import Icons from "../../shared/assets";
import SequrityPrice from "../../components/Common/PriceList";
// import SequrityPrice from "../components/Features/SecurityPrice";
// import FooterTwo from "../components/Footer/FooterTwo";
// import FooterData from "../components/Footer/FooterData";

const Price = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb breadcrumbClass="breadcrumb_area" imgName={Icons.BREADCRUMB.default} Ptitle="Pricing Plan" Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"/>
            <SequrityPrice />
      </Layout>
    </div>
  );
};
export default Price;
