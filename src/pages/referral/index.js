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

const couponMarkting = [];
const customCoupons = [];
const customerReward = [];

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
      <TrustedMerchants />

      <Header
        className={"bg_white mt_125"}
        title={"Key features."}
        description={"All your gift card needs, covered"}
      />
      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Work1.default}
        title="Online and in-store integrations"
        subTitle=""
        desc="Forget gift cards that work only online or offline. With 99minds, create campaigns that work absolutely everywhere."
        list={couponMarkting}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Work2.default}
        title="Point of Sale (POS) Agnostic redemption"
        desc="Send and redeem physical and eGift cards issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed etc."
        list={customCoupons}
        url="#"
      />
      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Work3.default}
        title="Multi-Currency Gift Cards"
        subTitle=""
        desc="Track coupon usage using coupons transactions associated with Customer & Order ID"
        list={customerReward}
        url="#"
      />

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
      <TryAction />
      <Services />
    </Layout>
  );
};
export default Referral;
