import React from "react";
import {
  Testimonial,
  TryAction,
  Banner,
  Features,
  Header,
  TabComponent,
  Services,
  IntegrationList,
  Partner,
  WorkFeatures,
  VerticallyTabComponent,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  REFERRAL_TAB_CONFIG,
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
    fimage: Icons.Work1.default,
    iImg: Icons.icon01.default,
    ftitle: "Customize Referral Widget & Web page",
    descriptions:
      "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
  },
  {
    rowClass: "row agency_featured_item_two",
    aClass: "pl_100",
    fimage: Icons.Work1.default,
    iImg: Icons.icon02.default,
    ftitle: "Create Social Sharing & Referral link",
    descriptions:
      "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
  },
  {
    rowClass: "row flex-row-reverse",
    aClass: "pr_70 pl_70",
    fimage: Icons.Work1.default,
    iImg: Icons.icon03.default,
    ftitle: "Reward your customers the way they want",
    descriptions:
      "Why I say old chap that is spiffing bodge, blag pardon me buggered mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy. Starkers dropped a clanger lurgy is cack excuse my French what a plonker blower.!",
  },
  {
    rowClass: "row agency_featured_item_two",
    aClass: "pl_100",
    fimage: Icons.Work1.default,
    iImg: Icons.icon04.default,
    ftitle: "Promote",
    descriptions: "Send announcement Email or SMS Text to your Customer",
  },
];

const Referral = () => {
  return (
    <Layout>
      <Banner
        config={BANNERS_CONFIG.REFERRAL}
        titleClass={`bannerTitle`}
        sllService={true}
        mClass={"mb_90"}
        wClass={"mw_125"}
      />
      {/* <TrustedMerchants /> */}
      <Partner pClass={"sec_pad pb_0"} />

      <Header
        className={"bg_white mt_125"}
        title={"Key features."}
        description={"All your gift card needs, covered"}
      />
      <WorkFeatures
        aClass="agency_featured_area_two"
        data={REFERRAL_FEATURES}
        title="How it works"
        dividerImg={Icons.divider_1.default}
      />
      {/* {REFERRAL_FEATURES.map((card,index) => (
        <Features {...{ ...card }} url="#" key={index} />
      ))} */}

      <Header
        className={"mt_120"}
        title={"Your One-Stop Destination"}
        description="To create and manage all your Gift Card Campaigns"
      />
      <TabComponent config={REFERRAL_TAB_CONFIG} pClass={"pt_0"} />
      {/* <VerticallyTabComponent config={REFERRAL_TAB_CONFIG} pClass={"pt_0"} /> */}

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
