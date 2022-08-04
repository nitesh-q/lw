import React from "react";
import {
  IntegrationList,
  Testimonial,
  Banner,
  Features,
  Header,
  TabComponent,
  Services,
  TrustedMerchants_1,
  CTA_1,
  CaseStudiesSlider,
  VerticallyTabComponent,
  TrustedMerchants_2,
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
  {
    desc: "Customize & Personalize gift card experience with your Picture and Video",
  },
  {
    desc: "Send gift card via Multi-channel like email, Social media, SMS/Text, and Print-at-home.",
  },
];
const REPORT = [
  {
    desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
  {
    desc: "Customer data reporting and analytics based on gift card usage.",
  },
];

const SCHEDULE = [
  { desc: "Out of stock gift card to retain customer" },
  { desc: "Gift card balance reminder email to customer" },
];
const SALE = [
  {
    desc: "Sell and Redeem Physical and Digital (eGift) Card issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed, etc.",
  },
  { desc: "Check balance, Reload Gift card at store and online" },
];
const GIFTCARD_FEATURES = [
  {
    rowClass: "flex-row-reverse",
    img1: Icons.Giftcard_01.default,
    title: "Gift Card Platform key features",
    subTitle: "",
    desc: "",
    list: GIFTCARD,
  },
  {
    img1: Icons.Sale.default,
    title: "Point of Sale",
    subTitle: "",
    desc: "",
    list: SALE,
  },
  {
    rowClass: "flex-row-reverse",
    img1: Icons.Report.default,
    title: "Reporting & Analytics",
    subTitle: "",
    desc: "",
    list: REPORT,
  },
  {
    img1: Icons.Schedule.default,
    title: "Schedule Delivery & Gift card for Out of Stock inventory",
    subTitle: "",
    desc: "",
    list: SCHEDULE,
  },
];

const GiftCard = () => {
  return (
    // <Layout>
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <Banner
        config={BANNERS_CONFIG.GIFTCARD}
        titleClass={`bannerTitle`}
        allService={false}
        bgClass={"bg_banner_2"}
      />
      <TrustedMerchants_2 />

      {/* <TrustedMerchants_1 /> */}

      <Header
        className={"bg_white pt_120 "}
        title={"Gift Card & Platform features."}
        description={"All your gift card needs, covered"}
      />

      {GIFTCARD_FEATURES.map((card) => (
        <Features {...{ ...card }} url="#" />
      ))}

      <Header className={"mt_120"} title={"Additional  key features"} />

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
      <CaseStudiesSlider />
      <Services />
    </Layout>
  );
};
export default GiftCard;
