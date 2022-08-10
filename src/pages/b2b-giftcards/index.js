import React from "react";
import {
  Services,
  IntegrationList,
  IconTabComponent,
  CTA,
  BannerV1,
  TrustedMerchantsV2,
} from "../../components";
import Layout from "../../components/Layout";
import { BANNERS_CONFIG, B2B_TABS_CONFIG } from "../../config";



const B2BGIFTCARDS = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <BannerV1
        config={BANNERS_CONFIG.B2B}
        titleClass={`bannerTitle`}
        allService={true}
        mClass={"mb_90"}
        wClass={"img_width_950"}
      />
      <TrustedMerchantsV2 />
      <IconTabComponent config={B2B_TABS_CONFIG} />
      <IntegrationList />

      <CTA />
      <Services />
    </Layout>
  );
};
export default B2BGIFTCARDS;
