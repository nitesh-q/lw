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
  Services,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  GIFTCARD_TABS_CONFIG,
} from "../../config";
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
    pClass: "pl_70",
    col1: "col-lg-6",
    col2: "col-lg-5 offset-lg-1",
    img1: Icons.Centralize.default,
    title: "Centralize Data Platform",
    subTitle: "",
    desc: "Connect with Centralize Customer data from across customer touchpoints and the dozens of apps in your Brick & Mortar, eCommerce stack. Create workflow utilizing following key eCommerce customer attributes",
    list: CENTRALIZE_DATA,
  },
  {
    pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-6 offset-lg-1",
    col2: "col-lg-5",
    img1: Icons.Workflow.default,
    title: "Pre-built Workflow Template",
    subTitle: "",
    desc: "Utilize Average order value (AOV) boost, First Purchase reward,Out of Stock,Punch Card and Refund templates to run your program",
    list: [],
  },
  {
    pClass: "pl_70",
    col1: "col-lg-6",
    col2: "col-lg-5 offset-lg-1",
    img1: Icons.AutomationLoyalty.default,
    title: "Boost Loyalty",
    subTitle: "",
    desc: "",
    list: BOOST_Loyalty,
  },
];

const Automation = () => {
  return (
    <Layout>
      <Banner
        config={BANNERS_CONFIG.AUTOMATION}
        titleClass={`bannerTitle`}
        allService={true}
        mClass={"mb_90"}
      />

      <TrustedMerchants />
      <Work />

      {AUTOMATION_FEATURES.map((card) => (
        <Features ptClass="pt_0" {...{ ...card }} url="#" />
      ))}

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <TryAction pClass={"pt_50"} />
      <Services />
    </Layout>
  );
};
export default Automation;
