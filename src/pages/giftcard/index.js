import React from "react";
import {
  IntegrationList,
  Testimonial,
  TryAction,
  Banner,
  TrustedMerchants,
  Features,
  Header,
  TabComponent,
  Partner,
  Services,
  TrustedMerchants_1,
  CTA_1,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  GIFTCARD_TABS_CONFIG,
} from "../../config";

const GIFTCARD = [
  { desc: "100’s of beautiful Gift Cards based on themes" },
  { desc: "Upload your brand design Gift Cards" },
];
const REPORT = [
  {
    desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
  {
    desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
];

const SCHEDULE = [
  { desc: "Schedule Gift card delivery up to 180 days" },
  { desc: "Out of stock gift card to retain customer" },
  { desc: "Gift card balance reminder email to customer" },
  { desc: "Add Promotional fund to existing gift card" },
];
const SALE = [
  { desc: "Reload Gift card @store, @online" },
  { desc: "Add Promotional $ value to Gift card from Admin Panel" },
];
const GIFTCARD_FEATURES = [
  {
    // pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.Giftcard_01.default,
    title: "Gift Card Designs",
    subTitle: "",
    desc: "",
    list: GIFTCARD,
  },
  {
    // ptClass:"pt_0",
    // pClass: "pl_70",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.Report.default,
    title: "First ever",
    subTitle: "",
    desc: "",
    list: REPORT,
  },
  {
    // ptClass:"pt_0",
    // pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.Schedule.default,
    title: "Schedule Delivery & Gift card for Out of Stock inventory",
    subTitle: "",
    desc: "",
    list: SCHEDULE,
  },
  {
    // ptClass:"pt_0",
    // pClass: "pl_70",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.Sale.default,
    title: "Point of Sale",
    subTitle: "",
    desc: "",
    list: SALE,
  },
];

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

      {/* <Partner pClass={"sec_pad"} oClass={"logo_item_opacity"} /> */}
      <TrustedMerchants_1 />

      <Header
        className={"bg_white"}
        title={"Gift Card & Platform features."}
        description={"All your gift card needs, covered"}
      />

      {GIFTCARD_FEATURES.map((card) => (
        <Features {...{ ...card }} url="#" />
      ))}

      <Header className={"mt_120"} title={"Gift Card & Platform features"} />

      <TabComponent config={GIFTCARD_TABS_CONFIG} pClass={"pt_0"} />

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />

      <IntegrationList
        title={"Integrations"}
        description={
          "Empower Your Brick & Click Store With Powerful Integrations"
        }
      />
      {/* <TryAction /> */}
      <CTA_1 />
      <Services />
    </Layout>
  );
};
export default GiftCard;
