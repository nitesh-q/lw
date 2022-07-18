import React from "react";
import Layout from "../../components/Layout";
import {
  Breadcrumb,
  CaseStudies,
  DarkBanner,
  Services,
  Stories,
  TryAction,
} from "../../components";
import Icons from "../../shared/assets";

const CaseStudy = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <DarkBanner
          Ptitle="Case Study"
          Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
        />
        {/* <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Case Study"
          Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
        /> */}
        <CaseStudies />
        {/* <Stories /> */}
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default CaseStudy;
