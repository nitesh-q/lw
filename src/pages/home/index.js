import React from "react";
import { useRef } from "react";
import Layout from "../../components/Layout";
import {
  AppBanner,
  Integration,
  Testimonial,
  TrustedMerchants,
  TryAction,
  Header,
  TabComponent,
  SupportedBrand,
  DigitalBanner,
} from "../../components";
import {
  HOME_TAB1_CONFIG,
  BANNERS_CONFIG,
  TESTIMONIAL_CONFIG,
  HOME_TAB2_CONFIG,
} from "../../config";

const Home = () => {
  return (
    <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
      {/* <Banner
      config={BANNERS_CONFIG.HOME}
      supportedBrand={true}
      startedFreeForm={true}
      allService={false}
    /> */}
      {/* <AppBanner
        config={BANNERS_CONFIG.HOME}
        supportedBrand={true}
        startedFreeForm={true}
        allService={false}
    
      /> */}
     
      <DigitalBanner 
         config={BANNERS_CONFIG.HOME} />
      <SupportedBrand  />
      <TrustedMerchants tClass={"top_0"} />
      <TabComponent
        config={HOME_TAB1_CONFIG}
        pClass={"pt_200"}
        rClass={"reduce_height"}
        mClass={"mt_120"}
      />
      <Header
        className={"mb_50"}
        title={"Grow your store and drive revenue with Marketing Automation "}
      />
      <TabComponent
        config={HOME_TAB2_CONFIG}
        pClass={"pt_0"}
        rClass={"reduce_height"}
        icon={true}
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
};
export default Home;
