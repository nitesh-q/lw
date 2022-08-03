import React, { useState,useRef } from "react";
import {
  IntegrationList,
  Testimonial,
  TryAction,
  Features,
  Services,
  Banner,
  Partner,
  AppBanner,
  WorkFeatures,
  Header,
  TrustedMerchants_2,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import { TESTIMONIAL_CONFIG, BANNERS_CONFIG } from "../../config";
import Work from "../../components/work";

const BOOST_Loyalty = [
  {
    desc: "Integrate rewards logic with data from your marketing & communication app.",
  },
  {
    desc: "Connect your store to automate and run more personalized loyalty & reward programs.",
  },
];
const CENTRALIZE_DATA = [
  { desc: "Average order value (AOV)" },
  { desc: "Customer lifetime value (CLV)" },
  { desc: "Shopping Cart Abandonment Rate (CAR)" },
  { desc: " Net Promoter Score (NPS)" },
];

const AUTOMATION_FEATURES = [
  {
    img1: Icons.Centralize.default,
    title: "Centralize Data Platform",
    subTitle: "",
    desc: "Connect with Centralize Customer data from across customer touchpoints and the dozens of apps in your Brick & Mortar, eCommerce stack. Create workflow utilizing following key eCommerce customer attributes",
    list: CENTRALIZE_DATA,
  },
  {
    rowClass: "flex-row-reverse",
    img1: Icons.Workflow.default,
    title: "Pre-built Workflow Template",
    subTitle: "",
    desc: "Utilize Average order value (AOV) boost, First Purchase reward,Out of Stock,Punch Card and Refund templates to run your program",
    list: [],
  },
  {
    img1: Icons.AutomationLoyalty.default,
    title: "Boost Loyalty",
    subTitle: "",
    desc: "",
    list: BOOST_Loyalty,
  },
];

// const AUTOMATION_WORK_FEATURES = [
//   {
//     rowClass: "row flex-row-reverse",
//     aClass: "pr_70 pl_70",
//     fImage: Icons.Work1.default,
//     iImg: Icons.icon01.default,
//     fTitle: "Set up Trigger",
//     descriptions:
//       "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
//   },
//   {
//     rowClass: "row agency_featured_item_two",
//     aClass: "pl_100",
//     fImage: Icons.CustomCoupon.default,
//     iImg: Icons.icon02.default,
//     fTitle: "Logic Conditions",
//     descriptions:
//       "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
//   },
//   {
//     rowClass: "row flex-row-reverse",
//     aClass: "pr_70 pl_70",
//     fImage: Icons.RewardCustomer.default,
//     iImg: Icons.icon03.default,
//     ftitle: "Execute Action",
//     descriptions:
//       "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
//   },
// ];

const AUTOMATION_WORK = [
  {
    title: "Set up Trigger",
    subTitle: "TRIGGE",
    desc: "When order status is updated to paid",
  },
  {
    title: "Logic Conditions",
    subTitle: "CONDITIONS ",
    desc: "If total value of order is greater than $50",
  },
  {
    title: "Execute Action",
    subTitle: "ACTION ",
    desc: "Send a text/email message with a discount gift card",
  },
];

const Automation = () => {

  return (
    
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
       <Banner
       config={BANNERS_CONFIG.AUTOMATION}
        titleClass={`bannerTitle`}
        allService={false}
        bgClass={"bg_banner_3"}
        btnClass={"bg_color2 border_btn"}
      />
      <TrustedMerchants_2 bgClass={"bg_color2"} />

      {/* <Partner pClass={"sec_pad pb_0"} oClass={"logo_item_opacity"} /> */}
      <Work config={AUTOMATION_WORK} />
     

      {/* <WorkFeatures
        aClass="agency_featured_area_two"
        data={AUTOMATION_WORK_FEATURES}
        title="How it works"
        dividerImg={Icons.dot.default}
      /> */}
      {/* <Header className={"bg_white"} title={"Features"} description="" />  */}
      {AUTOMATION_FEATURES.map((card, index) => (
        <Features ptClass="pt_0" {...{ ...card }} url="#" key={index} />
      ))}

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <TryAction pClass={"pt_50"} />
      <Services />
    </Layout>
  );
};
export default Automation;
