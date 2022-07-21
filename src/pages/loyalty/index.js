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
  Partner,
  IntegrationList,
} from "../../components";
import { TESTIMONIAL_CONFIG, LOYALTY_TABS_CONFIG } from "../../config";

import Icons from "../../shared/assets";

const CUSTOM_LOYALTY_FEATURES_LIST = [
  { desc: "Point Program" },
  { desc: "VIP Tiered Program" },
  { desc: "Cash Back Program" },
  { desc: "Premium Loyalty Program ( Fee-based loyalty program)" },
  { desc: "Hybrid Loyalty Program" },
];
const VIP_TIER_FEATURES_LIST = [
  { desc: "$ Dollar value vs. Points" },
  { desc: "Calendar year vs. Lifetime" },
];

const LOYALTY_REWARD_FEATURES_LIST = [
  { desc: "Free product" },
  { desc: "Amount discount" },
  { desc: "Percentage discount" },
  { desc: "Accelerated points earning" },
];

const LOYALTY_FEATURES = [
  {
    pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.CustomLoyalty.default,
    title: "Custom Loyalty Program",
    subTitle: "Design Loyalty program right for your brand",
    desc: "",
    list: CUSTOM_LOYALTY_FEATURES_LIST,
  },
  {
    ptClass:"pt_0",
    pClass: "pl_70",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.VipTier.default,
    title: "Configure VIP Tiers",
    subTitle: "Set up landmarks to accomplish VIP status",
    desc: "Encourage your customers to attain the next tier with contesting but achievable milestones!",
    list: VIP_TIER_FEATURES_LIST,
  },
  {
    ptClass:"pt_0",
    pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.LoyaltyPoints.default,
    title: "Select activities for earning Points",
    subTitle: "Earning Points for more than just purchases",
    desc: "Choose the terminology that makes sense for you: points, punches, or stars.",
    list: [],
  },
  {
    ptClass:"pt_0",
    pClass: "pl_70",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.LoyaltyReward.default,
    title: "Offer Rewards",
    subTitle: "Customers can redeem points for awesome rewards like:",
    desc: "",
    list: LOYALTY_REWARD_FEATURES_LIST,
  },
];

const Loyalty = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <LoyaltyBanner />

      {/* <TrustedMerchants tClass={"top_0"} /> */}

      <Partner pClass={"sec_pad"} oClass={"logo_item_opacity"} />

      <Header
        className={"bg_white"}
        title={
          "Build an effective Customer loyalty programs right for yor hand "
        }
        description={"All your required key features under one roof"}
      />

      {LOYALTY_FEATURES.map((card) => (
        <Features {...{ ...card }} url="#" />
      ))}

      <Header
        className={"mb_50"}
        title={"Grow your store and drive revenue with Marketing Automation "}
      />

      <TabComponent
        config={LOYALTY_TABS_CONFIG}
        pClass={"pt_0"}
        //   rClass={"reduce_height"}
      />

      <Testimonial
        title="Learn How Customer is using Coupons"
        subTitle="Case Studies Carousel"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <TryAction />
      <Services />
    </Layout>
  );
};
export default Loyalty;
