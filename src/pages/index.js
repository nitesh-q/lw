import * as React from "react";
import ZohoSalesIQ from "../components/ZohoSalesIQ";
import Home from "./home";

const IndexPage = () => {
  return (
    <div>
      <Home />
      {process.env.GATSBY_NODE_ENV === "prod" && <ZohoSalesIQ />}
   </div>
  );
};

export default IndexPage;
