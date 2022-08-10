import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

const UsePageTracking = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(process.env.GATSBY_APP_GA_MEASUREMENT_ID);
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname + window.location.search,
      });
    }
  }, [initialized]);

  return null;
};

export default UsePageTracking;
