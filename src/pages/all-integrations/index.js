import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Services, TryAction, ContactForm } from "../../components";
import Icons from "../../shared/assets";

const AllIntegrations = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="All Integrations"
          Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
        />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default AllIntegrations;
