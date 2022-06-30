import React from "react";
import MarketingAutomation from "../../components/MarketingAutomation";
import Layout from "../../components/Layout";
import {
  Banner,
  Integration,
  Testimonial,
  TrustedMarchents,
  TryAction,
  Header,
  TabComponent,
} from "../../components";
import { HomeTabConfig1,BannerConfig,TestimonialConfig } from "../../config";

const Home = () => (
  <Layout>
    <Banner
      BannerConfig={BannerConfig.Home}
      Supported={true}
      StartedFreeForm={true}
      AllService={false}
    />
    <TrustedMarchents />
    <TabComponent Tab={HomeTabConfig1} pClass={"pt_200"} />
    <Header
      title={"Grow your store and drive revenue with Marketing Automation "}
    />
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
