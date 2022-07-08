import React from "react";
import {
  Integration,
  Testimonial,
  TryAction,
  Banner,
  TrustedMerchants,
  Features,
  Header,
  TabComponent,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  GIFTCARD_TABS_CONFIG,
  GIFTCARD_FEATURES_CONFIG,
} from "../../config";

const GiftCard = () => {
  return (
    <Layout>
      <Banner
        config={BANNERS_CONFIG.GIFTCARD}
        titleClass={`bannerTitle`}
        allService={true}
        mClass={"mb_90"}
        wClass={"mw_125"}
      />

      <TrustedMerchants />

      <Header
        className={"bg_white mt_125"}
        title={"Gift Card & Platform features."}
        description={"All your gift card needs, covered"}
      />
      <Features
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Giftcard_01.default}
        title="Gift Card Designs"
        list={GIFTCARD_FEATURES_CONFIG.GIFTCARD}
        url="#"
      />
      <Features
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Report.default}
        title="First ever"
        list={GIFTCARD_FEATURES_CONFIG.REPORT}
        url="#"
      />
      <Features
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Schedule.default}
        title="Schedule Delivery & Gift card for Out of Stock inventory"
        list={GIFTCARD_FEATURES_CONFIG.SCHEDULE}
        url="#"
      />
      <Features
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Sale.default}
        title="Point of Sale"
        list={GIFTCARD_FEATURES_CONFIG.SALE}
        url="#"
      />
      <Header className={"mt_120"} title={"Gift Card & Platform features"} />
      <TabComponent config={GIFTCARD_TABS_CONFIG} pClass={"pt_0"} />

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />

      <Integration
        title={"Integrations"}
        description={
          "Empower Your Brick & Click Store With Powerful Integrations"
        }
      />
      <TryAction pClass={"pt_0"} />
    </Layout>
  );
};
export default GiftCard;
