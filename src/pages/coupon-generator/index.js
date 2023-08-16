import React, { Fragment } from "react";
import {
    SeoHead,
} from "../../components";
import Layout from "../../components/Layout";
import Icons from "../../shared/assets";

import {
    GIFTCARD_SEO_HEAD,
} from "../../config";
import CouponGeneratorv1 from "../../components/CouponGenerator";


const GIFTCARD = [
    { description: "100’s of beautiful Gift Cards based on themes" },
    { description: "Upload your brand design Gift Cards" },
    {
        description:
            "Customize & Personalize gift card experience with your Picture and Video",
    },
    {
        description:
            "Send gift card via Multi-channel like email, Social media, SMS/Text, and Print-at-home.",
    },
];
const REPORT = [
    {
        description:
            "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
    },
    {
        description:
            "Customer data reporting and analytics based on gift card usage.",
    },
];

const SCHEDULE = [
    { description: "Out of stock gift card to retain customer" },
    { description: "Gift card balance reminder email to customer" },
];
const SALE = [
    {
        description:
            "Sell and Redeem Physical and Digital (eGift) Card issued by any POS like Square, Shopkeep, Vend, Revel, Poynt, Lightspeed, etc.",
    },
    { description: "Check balance, Reload Gift card at store and online" },
];
const GIFTCARD_FEATURES = [
    {
        image: Icons.Giftcard_01.default,
        title: "Gift Card Platform key features",
        subTitle: "",
        desc: "",
        list: GIFTCARD,
    },
    {
        rowClass: "flex-row-reverse",
        image: Icons.Sale.default,
        title: "Point of Sale",
        subTitle: "",
        desc: "",
        list: SALE,
    },
    {
        image: Icons.Report.default,
        title: "Reporting & Analytics",
        subTitle: "",
        desc: "",
        list: REPORT,
    },
    {
        rowClass: "flex-row-reverse",
        image: Icons.Schedule.default,
        title: "Schedule Delivery & Gift card for Out of Stock inventory",
        subTitle: "",
        desc: "",
        list: SCHEDULE,
    },
];

const CouponGenerator = () => {
    return (
        <Fragment>
            <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
                <CouponGeneratorv1 />
                {/* this is code here */}
            </Layout>
        </Fragment>
    );
};

export const Head = () => {
    return GIFTCARD_SEO_HEAD.map((data, index) => (
        <SeoHead {...{ ...data }} key={index} />
    ));
};

export default CouponGenerator;