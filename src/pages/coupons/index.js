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
  TestimonialConfig,
  BANNERS_CONFIG,
  GiftCardConfig,
  TESTIMONIAL_CONFIG,
} from "../../config";

const couponMarkting = [];
const customCoupons = [];
const customerReward = [];

const GiftCard = () => {
  return (
    <Layout>
      <Banner
        config={BANNERS_CONFIG.COUPONS}
        titleClass={`bannerTitle`}
        allService={true}
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
        title="Advanced coupon marketing software"
        subTitle=""
        desc="Efficiently create millions of randomly generated coupons. Set expiry dates and link customer IDs to single coupons."
        list={couponMarkting}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Work2.default}
        title="Custom-made coupons"
        desc="SKU-based Coupon Category based coupon BOGO Coupon"
        list={customCoupons}
        url="#"
      />
      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        img1={Icons.Work3.default}
        col2="col-lg-5"
        title="Reward your customers the way they want"
        subTitle=""
        desc="Track coupon usage using coupons transactions associated with Customer & Order ID"
        list={customerReward}
        url="#"
      />
      {/* <Header className={"mt_120"} title={"Gift Card & Platform features"} /> */}
      {/* <TabComponent Tab={GiftCardConfig} pClass={"pt_0"} /> */}
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
export default GiftCard;
