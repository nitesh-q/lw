import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, FAQ, Services, TryAction } from "../../components";
import Icons from "../../shared/assets";
import CaseStudyGrid from "../../components/CaseStudyGird";

const CaseStudies = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Customer Stories"
          Pdescription="See how others are building their brands, and learn how to follow in their footsteps."
        />
        <CaseStudyGrid />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default CaseStudies;
