import React from "react";
import Layout from "../../components/Layout";
import {
  TrustedMerchants,
  Header,
  Features,
  Testimonial,
  TryAction,
  Services,
  LoyaltyBanner,
  TabComponent,
} from "../../components";
import { BannerConfig, TestimonialConfig, LoyaltyConfig } from "../../config";
import Icons from "../../shared/assets";

const customLoyalty = [
  {
    id: 1,
    desc: "Point Program",
  },
  {
    id: 2,
    desc: "VIP Tiered Program",
  },
  {
    id: 3,
    desc: "Cash Back Program",
  },
  {
    id: 4,
    desc: "Premium Loyalty Program ( Fee-based loyalty program)",
  },
  {
    id: 5,
    desc: "Hybrid Loyalty Program",
  },
];
const vipTier = [
  { id: 1, desc: "$ Dollar value vs. Points" },
  { id: 2, desc: "Calendar year vs. Lifetime" },
];
const loyaltyPoints = [];
const loyaltyReward = [
  { id: 1, desc: "Free product" },
  { id: 2, desc: "Amount discount" },
  { id: 3, desc: "Percentage discount" },
  { id: 4, desc: "Accelerated points earning" },
];

const Loyalty = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <LoyaltyBanner />
      <TrustedMerchants />
      <Header
        className={"bg_white mt_125"}
        title={
          "Build an effective Customer loyalty programs right for yor hand "
        }
        description={"All your required key features under one roof"}
      />

      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.CustomLoyalty.default}
        title="Custom Loyalty Program"
        subTitle="Design Loyalty program right for your brand"
        desc1={customLoyalty}
        url="#"
      />

      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.VipTier.default}
        title="Configure VIP Tiers"
        subTitle="Set up landmarks to accomplish VIP status"
        desc="Encourage your customers to attain the next tier with contesting but achievable milestones!"
        desc1={vipTier}
        url="#"
      />

      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.LoyaltyPoints.default}
        title="Select activities for earning Points"
        subTitle="Earning Points for more than just purchases"
        desc="Choose the terminology that makes sense for you: points, punches, or stars."
        desc1={loyaltyPoints}
        url="#"
      />

      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.LoyaltyReward.default}
        title="Offer Rewards"
        subTitle="Customers can redeem points for awesome rewards like:"
        desc1={loyaltyReward}
        url="#"
      />

      <Header
        className={"mb_50"}
        title={"Grow your store and drive revenue with Marketing Automation "}
      />

      <TabComponent
        Tab={LoyaltyConfig}
        pClass={"pt_0"}
        //   rClass={"reduce_height"}
      />

      <Testimonial
        title="Learn How Customer is using Coupons"
        subTitle="Case Studies Carousel"
        sliderData={TestimonialConfig.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <TryAction />
      <Services />
    </Layout>
  );
};
export default Loyalty;
