import React from "react";
import {
  Integration,
  Testimonial,
  TryAction,
  Banner,
  TrustedMarchents,
  Features,
} from "../../components";
import Layout from "../../components/Layout";
import TestimonialConfig from "../../config/testimonial.config";
import BannerConfig from "../../config/Banner.config";
import Icons from "../../shared/assets";

const report = [
  {
    id: 1,
    desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
  {
    id: 2,
    desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
  },
];

const schedule = [
  {
    id: 1,
    desc: "Schedule Gift card delivery up to 180 days",
  },
  {
    id: 2,
    desc: "Out of stock gift card to retain customer",
  },
  {
    id: 3,
    desc: "Gift card balance reminder email to customer",
  },
  {
    id: 4,
    desc: "Add Promotional fund to existing gift card",
  },
];
const sale = [
  { id: 1, desc: "Reload Gift card @store, @online" },
  { id: 2, desc: "Add Promotional $ value to Gift card from Admin Panel" },
];
const GiftCard = () => {
  return (
    <Layout>
      <Banner
        BannerConfig={BannerConfig.GiftCard}
        bannerTitle={`bannerTitle`}
      />
      <TrustedMarchents />
      <section className="security_integration_area chat_integration_area pb_0">
        <div className="container">
          <div className="chat_title text-center">
            <h2 className="wow fadeInUp">
              <span>Gift Card & Platform features. </span>
            </h2>
            <p>All your gift card needs, covered</p>
          </div>
        </div>
      </section>
      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Ellipse_01.default}
        img2={Icons.Giftcard_01.default}
        img1Class={`chat_two_right`}
        img2Class={`chat_one_right`}
        title="Gift Card Designs"
        desc={report}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Ellipse_02.default}
        img2={Icons.Report.default}
        img1Class={`chat_two_left`}
        img2Class={`chat_one_left`}
        title="First ever"
        desc={report}
        url="#"
      />
      <Features
        ptClass="pt_0"
        rowClass="flex-row-reverse"
        pClass="pr_70"
        col1="col-lg-6 offset-lg-1"
        col2="col-lg-5"
        img1={Icons.Ellipse_01.default}
        img2={Icons.Giftcard_01.default}
        img1Class={`chat_two_right`}
        img2Class={`chat_one_right`}
        title="Schedule Delivery & Gift card for Out of Stock inventory"
        desc={schedule}
        url="#"
      />
      <Features
        ptClass="pt_0"
        pClass="pl_70"
        col1="col-lg-6"
        col2="col-lg-5 offset-lg-1"
        img1={Icons.Ellipse_02.default}
        img2={Icons.Report.default}
        img1Class={`chat_two_left`}
        img2Class={`chat_one_left`}
        title="Point of Sale"
        desc={sale}
        url="#"
      />
      <Testimonial TestimonialConfig={TestimonialConfig} bgColor={`bg_color`} />
      <Integration />
      <TryAction />
    </Layout>
  );
};
export default GiftCard;
