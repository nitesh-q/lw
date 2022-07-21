import React from "react";
import {
  Testimonial,
  TryAction,
  Banner,
  TrustedMerchants,
  Features,
  Header,
  TabComponent,
  Services,
  Partner,
  IntegrationList
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import {
  TESTIMONIAL_CONFIG,
  BANNERS_CONFIG,
  GIFTCARD_TABS_CONFIG,
} from "../../config";

const REFERRAL_FEATURES = [
  {
    // pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.Work1.default,
    title: "Online and in-store integrations",
    desc: "Forget gift cards that work only online or offline. With 99minds, create campaigns that work absolutely everywhere.",
    subTitle: "",
    list: [],
  },
  {
    // ptClass:"pt_0",
    // pClass: "pl_70",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.CustomCoupon.default,
    title: "Point of Sale (POS) Agnostic redemption",
    desc: "Send and redeem physical and eGift cards issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed etc.",
    subTitle: "",
    list: [],
  },
  {
    // ptClass:"pt_0",
    // pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.RewardCustomer.default,
    title: "Multi-Currency Gift Cards",
    subTitle: "",
    desc: "Track coupon usage using coupons transactions associated with Customer & Order ID",
    list: [],
  },
];

const StoreCredit = () => {
  return (
    <Layout>
      <Banner
        config={BANNERS_CONFIG.DISCOUNTS}
        titleClass={`bannerTitle`}
        sllService={true}
        mClass={"mb_90"}
        wClass={"mw_125"}
      />
     <Partner pClass={"sec_pad pb_0"} />
      <Header
        className={"bg_white mt_125"}
        title={"Key features."}
        description={"All your gift card needs, covered"}
      />

      {REFERRAL_FEATURES.map((card) => (
        <Features  {...{ ...card }} url="#" />
      ))}

      <Header
        className={"mt_120"}
        title={"Your One-Stop Destination"}
        description="To create and manage all your Gift Card Campaigns"
      />
      <TabComponent config={GIFTCARD_TABS_CONFIG} pClass={"pt_0"} />
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
export default StoreCredit;
