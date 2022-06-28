import React from "react";
import { BannerData, CustomerEngagement } from "../../config/constants";
import TabComponent from "../../components/TabComponent";
import MarketingAutomation from "../../components/MarketingAutomation";
import Layout from "../../components/Layout";
import {
  Banner,
  Integration,
  Testimonial,
  TrustedMarchents,
  TryAction,
} from "../../components";
import TestimonialConfig from "../../config/testimonial.config";
import BannerConfig from "../../config/Banner.config";

const Home = () => (
  <Layout>
    <Banner
      BannerConfig={BannerConfig.Home}
      Supported={true}
      StartedFreeForm={true}
    />
    <TrustedMarchents />
    <TabComponent data={CustomerEngagement} />
    <MarketingAutomation />
    <Testimonial TestimonialConfig={TestimonialConfig} bgColor={`bg_color`} />
    <Integration
      title={"Integrations"}
      description={
        "Empower Your Brick & Click Store With Powerful Integrations"
      }
    />
    <TryAction />
  </Layout>
);
export default Home;
