import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Services, TryAction } from "../../components";
import Icons from "../../shared/assets";
import LeadForm from "../../components/Common/LeadForm";

const form = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Form"
          Pdescription=""
        />
        <LeadForm />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default form;
