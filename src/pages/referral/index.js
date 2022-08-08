import React from "react";
import {
  Testimonial,
  TryAction,
  Banner,
  Services,
  IntegrationList,
  WorkFeatures,
  TrustedMerchantsV2,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
} from "../../config";

// const REFERRAL_FEATURES = [
//   {
//     // pClass: "pr_70",
//     rowClass: "flex-row-reverse",
//     col1: "col-lg-7",
//     col2: "col-lg-5",
//     img1: Icons.Work1.default,
//     title: "Online and in-store integrations",
//     desc: "Forget gift cards that work only online or offline. With 99minds, create campaigns that work absolutely everywhere.",
//     subTitle: "",
//     list: [],
//   },
//   {
//     // ptClass:"pt_0",
//     // pClass: "pl_70",
//     col1: "col-lg-7",
//     col2: "col-lg-5",
//     img1: Icons.CustomCoupon.default,
//     title: "Point of Sale (POS) Agnostic redemption",
//     desc: "Send and redeem physical and eGift cards issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed etc.",
//     subTitle: "",
//     list: [],
//   },
//   {
//     // ptClass:"pt_0",
//     // pClass: "pr_70",
//     rowClass: "flex-row-reverse",
//     col1: "col-lg-7",
//     col2: "col-lg-5",
//     img1: Icons.RewardCustomer.default,
//     title: "Multi-Currency Gift Cards",
//     subTitle: "",
//     desc: "Track coupon usage using coupons transactions associated with Customer & Order ID",
//     list: [],
//   },
// ];

const REFERRAL_FEATURES = [
  {
    rowClass: "row flex-row-reverse",
    aClass: "pr_70 pl_70",
    fImage: Icons.Referral_Widget.default,
    iImg: Icons.icon01.default,
    fTitle: "Customize Referral Widget & Web page",
    descriptions: "",
  },
  {
    rowClass: "row agency_featured_item_two",
    aClass: "pl_100",
    fImage: Icons.Social_Sharing.default,
    iImg: Icons.icon02.default,
    fTitle: "Create Social Sharing & Referral link",
    descriptions:
      "Send and redeem physical and eGift cards issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed etc.",
  },
  {
    rowClass: "row flex-row-reverse",
    aClass: "pr_70 pl_70",
    fImage: Icons.Reward_Referral.default,
    iImg: Icons.icon03.default,
    fTitle: "Reward your customers the way they want",
    descriptions: "",
  },
  {
    rowClass: "row agency_featured_item_two",
    aClass: "pl_100",
    fImage: Icons.Promote_Referral.default,
    iImg: Icons.icon04.default,
    fTitle: "Promote",
    descriptions: "Send announcement Email or SMS Text to your Customer",
  },
];

const Referral = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      <Banner
        config={BANNERS_CONFIG.REFERRAL}
        allService={false}
        bgClass={"bg_BannerV1"}
      />
      <TrustedMerchantsV2 />

      {/* <Partner pClass={"sec_pad "} /> */}
      <WorkFeatures
        aClass="agency_featured_area_two"
        data={REFERRAL_FEATURES}
        title="Key Features"
        dividerImg={Icons.divider_1.default}
      />
      {/* {REFERRAL_FEATURES.map((card,index) => (
        <Features {...{ ...card }} url="#" key={index} />
      ))} */}

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <TryAction />
      <Services />
    </Layout>
  );
};
export default Referral;
