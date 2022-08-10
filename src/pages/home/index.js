import React from "react";
import Layout from "../../components/Layout";
import {
  Testimonial,
  TryAction,
  Header,
  TabComponent,
  DigitalBanner,
  Services,
  IntegrationList,
  TrustedMerchantsV2,
  VerticallyTabComponent,
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
      <DigitalBanner config={BANNERS_CONFIG.HOME} allService={false} />
      <TrustedMerchantsV2 bgClass={"bg_black"} />
      {/* <Partner oClass={"logo_item_opacity"} pClass={"sec_pad pb_0"}/> */}

      <TabComponent config={HOME_TAB1_CONFIG} rClass={"reduce_height"} />
      <Header
        className={"mb_50"}
        title={"Grow your store and drive revenue with Marketing Automation "}
      />
      <VerticallyTabComponent
        config={HOME_TAB2_CONFIG}
        icon={true}
        pClass={"pt_0"}
      />

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
