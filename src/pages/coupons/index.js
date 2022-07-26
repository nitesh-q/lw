import React from "react";
import {
  Testimonial,
  TryAction,
  Banner,
  TrustedMerchants,
  Features,
  Header,
  Services,
  CouponWork,
  IntegrationList,
  CouponBanner,
  CaseStudiesSlider,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import { BANNERS_CONFIG, TESTIMONIAL_CONFIG } from "../../config";

const COUPON_FEATURES = [
  {
    // pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.Work1.default,
    title: "Advanced coupon marketing software",
    subTitle: "",
    desc: "",
    list: [
      { desc: "Efficiently create millions of randomly generated coupons." },
      { desc: "Set expiry dates and link customer IDs to single coupons." },
    ],
  },
  {
    // ptClass:"pt_0",
    // pClass: "pl_70",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.CustomCoupon.default,
    title: "Custom-made coupons",
    subTitle: "",
    desc: "",
    list: [
      { desc: "SKU-based" },
      { desc: "Coupon Category based coupon" },
      { desc: "BOGO Coupon" },
    ],
  },
  {
    // ptClass:"pt_0",
    // pClass: "pr_70",
    rowClass: "flex-row-reverse",
    col1: "col-lg-7",
    col2: "col-lg-5",
    img1: Icons.RewardCustomer.default,
    title: "Reward your customers the way they want",
    subTitle: "",
    desc: "",
    list: [
      {
        desc: "Track coupon usage using coupons transactions associated with Customer & Order ID",
      },
    ],
  },
];

const Coupons = () => {
  return (
    <Layout>
      <CouponBanner config={BANNERS_CONFIG.COUPONS} />

      <Header
        className={"bg_white mt_220"}
        title={"Key features."}
        description={"All your gift card needs, covered"}
      />
      {COUPON_FEATURES.map((card) => (
        <Features  {...{ ...card }} url="#" />
      ))}
      <CouponWork />

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <TryAction />
      <CaseStudiesSlider />
      <Services />
    </Layout>
  );
};
export default Coupons;
