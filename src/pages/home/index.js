import React from "react";
import Layout from "../../components/Layout";
import {
  Banner,
  Integration,
  Testimonial,
  TrustedMerchants,
  TryAction,
  Header,
  TabComponent,
} from "../../components";
import {
  HomeTabConfig1,
  BannerConfig,
  TestimonialConfig,
  HomeTabConfig2,
} from "../../config";

const Home = () => (
  <Layout>
    <Banner
      BannerConfig={BannerConfig.Home}
      Supported={true}
      StartedFreeForm={true}
      AllService={false}
    />
    <TrustedMerchants />
    <TabComponent Tab={HomeTabConfig1} pClass={"pt_200"} rClass={"reduce_height"} />
    <Header
      title={"Grow your store and drive revenue with Marketing Automation "}
    />
    <TabComponent Tab={HomeTabConfig2} pClass={"pt_0"} rClass={"reduce_height"} />
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
