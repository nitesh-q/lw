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
  TrustedMerchants_2,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import { BANNERS_CONFIG, TESTIMONIAL_CONFIG } from "../../config";

const COUPON_FEATURES = [
  {
    rowClass: "flex-row-reverse",
    img1: Icons.AdvancedCoupon.default,
    title: "Advanced coupon marketing software",
    subTitle: "",
    desc: "",
    list: [
      { desc: "Efficiently create millions of randomly generated coupons." },
      { desc: "Set expiry dates and link customer IDs to single coupons." },
    ],
  },
  {
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
    rowClass: "flex-row-reverse",
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
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu" >
      <CouponBanner config={BANNERS_CONFIG.COUPONS} />
      <TrustedMerchants_2 />

      <Header
        className={"bg_white pt_120 "}
        title={"Key features."}
        description={"All your coupon needs, covered"}
      />
      {COUPON_FEATURES.map((card) => (
        <Features {...{ ...card }} url="#" />
      ))}
      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList />
      <TryAction />
      {/* <CaseStudiesSlider /> */}
      <Services />
    </Layout>
  );
};
export default Coupons;
