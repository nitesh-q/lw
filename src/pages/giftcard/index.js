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
import { TestimonialConfig, BannerConfig, GiftCardConfig } from "../../config";


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
    // <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
    <Layout >
      <Banner
        BannerConfig={BannerConfig.GiftCard}
        bannerTitle={`bannerTitle`}
        AllService={true}
        mClass={"mb_90"}
        wClass={"mw_125"}
      />
      {/* <GiftCardBanner /> */}
      <TrustedMerchants />
     
      <Header
      className={"bg_white mt_125"}
       title={"Gift Card & Platform features."}
       description={"All your gift card needs, covered"}
     />
      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Giftcard_01.default}
        title="Gift Card Designs"
        desc={report}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Report.default}
        title="First ever"
        desc={report}
        url="#"
      />
      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Schedule.default}
        title="Schedule Delivery & Gift card for Out of Stock inventory"
        desc={schedule}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Sale.default}
        title="Point of Sale"
        desc={sale}
        url="#"
      />
       <Header
       
      title={"Gift Card & Platform features"}
    />
    <TabComponent Tab={GiftCardConfig} pClass={"pt_0"} />
      <Testimonial TestimonialConfig={TestimonialConfig} bgColor={`bg_color`} />
      <Integration
        title={"Integrations"}
        description={
          "Empower Your Brick & Click Store With Powerful Integrations"
        }
      />
      <TryAction />
    </Layout>
  );
};
export default GiftCard;
