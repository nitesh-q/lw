import React from "react";
import { Integration, Testimonial, TryAction } from "../../components";
import Layout from "../../components/Layout";
import TestimonialConfig from "../../config/testimonial.config";



const GiftCard = () =>{
    return(
        <Layout>
            <Testimonial TestimonialConfig={TestimonialConfig}  bgColor={`bg_color`} />
            <Integration />
            <TryAction />

        </Layout>
    )
}
export default GiftCard;