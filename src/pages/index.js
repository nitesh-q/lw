import * as React from "react";
import UsePageTracking from "../components/PageTracking";
import ZohoSalesIQ from "../components/ZohoSalesIQ";
import Home from "./home";

const IndexPage = () => {
  return (
    <div>
      <Home />
      {process.env.GATSBY_NODE_ENV === "prod" ? (
        <>
          <ZohoSalesIQ /> <UsePageTracking />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default IndexPage;
