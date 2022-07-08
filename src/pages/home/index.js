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
  HOMETAB_CONFIG1,
  BANNERS_CONFIG,
  TESTIMONIAL_CONFIG,
  HOMETAB_CONFIG2,
} from "../../config";

const Home = () => (
  <Layout>
    <Banner
      config={BANNERS_CONFIG.HOME}
      supportedBrand={true}
      startedFreeForm={true}
      allService={false}
    />
    <TrustedMerchants />
    <TabComponent
      config={HOMETAB_CONFIG1}
      pClass={"pt_200"}
      rClass={"reduce_height"}
    />
    <Header
      className={"mb_50"}
      title={"Grow your store and drive revenue with Marketing Automation "}
    />
    <TabComponent
      config={HOMETAB_CONFIG2}
      pClass={"pt_0"}
      rClass={"reduce_height"}
    />
    <Testimonial
      title="Testimonials"
      subTitle="Hear from our Clients"
      sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}

      bgColor={`bg_color`}
    />
    <Integration
      title={"Integrations"}
      description={
        "Empower Your Brick & Click Store With Powerful Integrations"
      }
    />
    <TryAction pClass={"pt_0"} />
  </Layout>
);
export default Home;
