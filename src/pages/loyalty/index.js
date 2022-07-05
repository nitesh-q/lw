import React from "react";
import Layout from "../../components/Layout";
import { Banner, TrustedMerchants, Header, Features, Testimonial, TryAction, Services } from "../../components";
import {BannerConfig,TestimonialConfig} from "../../config";
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
const loyaltyReward = [];

const Loyalty = () => {
  return (
    <Layout>
      <Banner
        BannerConfig={BannerConfig.Loyalty}
        TitleClass={`bannerTitle`}
        AllService={true}
        mClass={"mb_90"}
        // wClass={"mw_125"}
      />
      <TrustedMerchants />
      <Header
        className={"bg_white mt_125"}
        title={
          "The features you need to build an effective loyalty programs right for your brand"
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
        desc="Design Loyalty program right for your brand"
        desc1={customLoyalty}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.VipTier.default}
        title="VIP Tiers"
        desc="Set up milestones to achieve VIP status Push your customers to reach the next VIP tier with challenging but achievable milestones!"
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
        title="Loyalty Points"
        desc="Earning Points for more than just purchases Customize loyalty widget and web page design as per your brand."
        desc1={loyaltyPoints}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.LoyaltyReward.default}
        title="Point of Sale"
        desc={`Customize Reward widget and web page design as per your brand’s color, theme, etc.Customers can redeem points for awesome rewards like: Free product Amount discount Percentage discount Accelerated points earning`}
        desc1={loyaltyReward}
        url="#"
      />
      <Testimonial TestimonialConfig={TestimonialConfig} bgColor={`bg_color`} />
      <TryAction />
      <Services />
    </Layout>
  );
};
export default Loyalty;
