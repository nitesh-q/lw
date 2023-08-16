import React, { Fragment } from "react";
import Layout from "../../components/Layout";
import LoyaltyWidget from "../../components/LoyaltyWidget";

const index = () => {
  return (
    <>
            <Layout slogo="sticky_logo" mClass="menu_four" nClass="w_menu">
                <LoyaltyWidget/>
                {/* this is code here */}
            </Layout>
       
    </>
  )
}

export default index



