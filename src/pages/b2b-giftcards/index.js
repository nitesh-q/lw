import React from "react";
import {
  Services,
  IntegrationList,
  Partner,
  IconTabComponent,
  CTA,
  Banner_1,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import { BANNERS_CONFIG, B2B_TABS_CONFIG } from "../../config";

const REFERRAL_FEATURES = [
  {
    rowClass: "flex-row-reverse",
    img1: Icons.Work1.default,
    title: "Online and in-store integrations",
    desc: "Forget gift cards that work only online or offline. With 99minds, create campaigns that work absolutely everywhere.",
    subTitle: "",
    list: [],
  },
  {
  
    img1: Icons.CustomCoupon.default,
    title: "Point of Sale (POS) Agnostic redemption",
    desc: "Send and redeem physical and eGift cards issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed etc.",
    subTitle: "",
    list: [],
  },
  {
    
    rowClass: "flex-row-reverse",
    img1: Icons.RewardCustomer.default,
    title: "Multi-Currency Gift Cards",
    subTitle: "",
    desc: "Track coupon usage using coupons transactions associated with Customer & Order ID",
    list: [],
  },
];

const B2BGIFTCARDS = () => {
  return (
    <Layout>
      <Banner_1
        config={BANNERS_CONFIG.B2B}
        titleClass={`bannerTitle`}
        allService={true}
        mClass={"mb_90"}
        wClass={"mw_125"}
      />

      <Partner pClass={"sec_pad pb_0"} />
      <IconTabComponent config={B2B_TABS_CONFIG} />
      {/* <Header
        className={"bg_white mt_125"}
        title={"Key features."}
        description={"All your gift card needs, covered"}
      /> */}

      {/* {REFERRAL_FEATURES.map((card) => (
        <Features  {...{ ...card }} url="#" />
      ))} */}

      {/* <Header
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
      /> */}
      <IntegrationList />

      <CTA />
      <Services />
    </Layout>
  );
};
export default B2BGIFTCARDS;
