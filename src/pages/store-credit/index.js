import React from "react";
import {
  Testimonial,
  TryAction,
  CrmBanner,
  Features,
  Header,
  Services,
  Partner,
  IntegrationList,
  TrustedMerchants_2,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";
import { TESTIMONIAL_CONFIG, BANNERS_CONFIG } from "../../config";


const RETURN_REFUNDS_LIST=[
  { desc: "Automate store credit for merchandise return using return tools like Novaro etc." },
  { desc: "Add store credit directly in customer wallet." },
];
const TIME_COST_LIST=[
  { desc: "Save time of your customer support team by automating refunds with 99minds store credit and gift certificates." },
  { desc: "Consolidates system data with better Returns & Refunds Reports."},
];
const REWARDS_LIST=[
  {desc:"Reward your customers with Store Credit."},
  {desc:"Convert loyalty points to Store credit and Gift vouchers."}

]
const STORE_CREDIT_FEATURES = [
  {
    rowClass: "flex-row-reverse",
    img1: Icons.Return_Refund_StoreCredit.default,
    title: "Returns & Refunds",
    desc: "",
    subTitle: "",
    list: RETURN_REFUNDS_LIST,
  },
  {
    img1: Icons.Time_Cost_StoreCredit.default,
    title: "Save Time and Cost",
    desc: "",
    subTitle: "",
    list: TIME_COST_LIST,
  },
  {
    rowClass: "flex-row-reverse",
    img1: Icons.Rewards_StoreCredit.default,
    title: "Rewards",
    subTitle: "",
    desc: "",
    list: REWARDS_LIST,
  },
  {
    img1: Icons.Promotional_StoreCredit.default,
    title: "Promotional Store Credit",
    desc: "Entice customer by assigning time sensitive promotional Store Credit to their Account.",
    subTitle: "",
    list: [],
  },
];

const StoreCredit = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      {/* <Banner
        config={BANNERS_CONFIG.DISCOUNTS}
        titleClass={`bannerTitle`}
        sllService={true}
        mClass={"mb_90"}
        wClass={"mw_125"}
      /> */}
      <CrmBanner config={BANNERS_CONFIG.STORE_CREDIT} />
      <TrustedMerchants_2 bgClass={"bg_color2"} />

      {/* <Partner pClass={"sec_pad pb_0"} /> */}
      <Header
        className={"bg_white pt_120"}
        title={"Key features."}
        description={"All your gift card needs, covered"}
      />

      {STORE_CREDIT_FEATURES.map((card) => (
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
      <Services />
    </Layout>
  );
};
export default StoreCredit;
