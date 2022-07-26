import React from "react";
import Layout from "../../components/Layout";
import {
  Testimonial,
  TryAction,
  Header,
  TabComponent,
  DigitalBanner,
  Partner,
  Services,

  IntegrationList,
} from "../../components";
import {
  HOME_TAB1_CONFIG,
  BANNERS_CONFIG,
  TESTIMONIAL_CONFIG,
  HOME_TAB2_CONFIG,
} from "../../config";
import VerticallyTabComponent from "../../components/VerticallyTabComponent";
import CaseStudiesSlider from "../../components/CaseStudiesSlider";

const Home = () => {
  return (
    <Layout >
      <DigitalBanner config={BANNERS_CONFIG.HOME} />
      <Partner oClass={"logo_item_opacity"} pClass={"sec_pad pb_0"}/>
   

      <TabComponent config={HOME_TAB1_CONFIG} rClass={"reduce_height"} />
      {/* <VerticallyTabComponent config={HOME_TAB1_CONFIG}/> */}
      
      <Header
        className={"mb_50"}
        title={"Grow your store and drive revenue with Marketing Automation "}
      />
      {/* <TabComponent
        config={HOME_TAB2_CONFIG}
        pClass={"pt_0"}
        rClass={"reduce_height"}
        icon={true}
      /> */}
      <VerticallyTabComponent  config={HOME_TAB2_CONFIG} icon={true}  pClass={"pt_0"}/>

      <Testimonial
        title="Testimonials"
        subTitle="Hear from our Clients"
        sliderData={TESTIMONIAL_CONFIG.TESTIMONIAL_SLIDER_DATA}
        bgColor={`bg_color`}
      />
      <IntegrationList
        title={"Integrations"}
        description={
          "Empower Your Brick & Click Store With Powerful Integrations"
        }
      />
      <TryAction />

      <Services />
    </Layout>
  );
};
export default Home;
