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
import { TestimonialConfig, BannerConfig,} from "../../config";
import { GIFTCARD_CONFIG } from "../../config/giftcardTab.config";

const giftcard = [
  {
    id: 1,
    desc: "100’s of beautiful Gift Cards based on themes",
  },
  {
    id: 2,
    desc: "Upload your brand design Gift Cards",
  },
];
const report = [
  {
    id: 1,
    desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
  {
    id: 2,
    desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
];

const schedule = [
  {
    id: 1,
    desc: "Schedule Gift card delivery up to 180 days",
  },
  {
    id: 2,
    desc: "Out of stock gift card to retain customer",
  },
  {
    id: 3,
    desc: "Gift card balance reminder email to customer",
  },
  {
    id: 4,
    desc: "Add Promotional fund to existing gift card",
  },
];
const sale = [
  { id: 1, desc: "Reload Gift card @store, @online" },
  { id: 2, desc: "Add Promotional $ value to Gift card from Admin Panel" },
];
const GiftCard = () => {
  return (
    <Layout>
      <Banner
        BannerConfig={BannerConfig.GIFTCARD}
        TitleClass={`bannerTitle`}
        AllService={true}
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
        desc1={giftcard}
        url="#"
      />
      <Features
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Report.default}
        title="First ever"
        desc1={report}
        url="#"
      />
      <Features
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Schedule.default}
        title="Schedule Delivery & Gift card for Out of Stock inventory"
        desc1={schedule}
        url="#"
      />
      <Features
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Sale.default}
        title="Point of Sale"
        desc1={sale}
        url="#"
      />
      <Header className={"mt_120"} title={"Gift Card & Platform features"} />
      <TabComponent config={GIFTCARD_CONFIG} pClass={"pt_0"} />

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TestimonialConfig.TESTIMONIAL_SLIDER_DATA}
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
