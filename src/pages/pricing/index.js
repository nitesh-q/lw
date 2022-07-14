import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Services, TryAction } from "../../components";
import Icons from "../../shared/assets";
import SequrityPrice from "../../components/Common/PriceList";

const Price = () => {
  return (
    <div className="body_wrapper">
      <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
        <Breadcrumb
          breadcrumbClass="breadcrumb_area"
          imgName={Icons.BREADCRUMB.default}
          Ptitle="Pricing Plan"
          Pdescription="Why I say old chap that is spiffing off his nut arse pear shaped plastered Jeffrey bodge barney some dodgy.!!"
        />
        <SequrityPrice />
        <TryAction />
        <Services />
      </Layout>
    </div>
  );
};
export default Price;
