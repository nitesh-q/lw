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
  Partner,
  AppBanner,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  GIFTCARD_TABS_CONFIG,
} from "../../config";
import Work from "../../components/work";
import WorkFeatures from "../../components/WorkFeature";

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

const AUTOMATION_WORK_FEATURES = [
  {
    rowClass: "row flex-row-reverse",
    aClass: "pr_70 pl_70",
    fimage: Icons.Work1.default,
    iImg: Icons.icon01.default,
    ftitle: "Set up Trigger",
    descriptions:
      "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
  },
  {
    rowClass: "row agency_featured_item_two",
    aClass: "pl_100",
    fimage: Icons.CustomCoupon.default,
    iImg: Icons.icon02.default,
    ftitle: "Logic Conditions",
    descriptions:
      "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
  },
  {
    rowClass: "row flex-row-reverse",
    aClass: "pr_70 pl_70",
    fimage: Icons.RewardCustomer.default,
    iImg: Icons.icon03.default,
    ftitle: "Execute Action",
    descriptions:
      "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
  },
];

const Automation = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      {/* <Banner
        config={BANNERS_CONFIG.AUTOMATION}
        titleClass={`bannerTitle`}
        allService={true}
        mClass={"mb_90"}
      /> */}
      <AppBanner  allService={true} config={BANNERS_CONFIG.AUTOMATION}/>

      <Partner pClass={"sec_pad"} oClass={"logo_item_opacity"} />

      <WorkFeatures
        aClass="agency_featured_area_two"
        data={AUTOMATION_WORK_FEATURES}
        title="How it works"
      />

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
