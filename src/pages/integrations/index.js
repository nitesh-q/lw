import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Services, TryAction } from "../../components";
import Icons from "../../shared/assets";
import IntegrationGrid from "../../components/IntegrationGrid";

const AllIntegrations = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Integrations"
          Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
        />
        <IntegrationGrid />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default AllIntegrations;
