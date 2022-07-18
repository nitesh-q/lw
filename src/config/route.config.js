export const ROUTES = {
  HOME: "/home",
  PRODUCTS: "./",
  INTEGRATION: "./",
  PRICE: "/pricing",
  CASE_STUDY: "/case-study",
  SIGN_IN: "/",
};

export const ROUTES_LABEL = {
  HOME: "Home",
  PRODUCTS: "Products",
  INTEGRATION: "Integration",
  PRICE: "Pricing",
  CASE_STUDY: "Case Study",
  SIGN_IN: "Sign In",
  GIFTCARD: "Gift Card",
  LOYALTY: "Loyalty",
  COUPONS: "Coupons",
  REFERRAL: "Referral Program",
  AUTOMATION: "Automated Workflows",
  B2B_GIFTCARDS: "B2b Gift Cards",
  STORE_CREDIT: "Store Credit",
  INTEGRATION_1: "Integration 1",
  INTEGRATION_2: "Integration 2",
  INTEGRATION_3: "Integration 3",
  INTEGRATION_4: "Integration 4",
  INTEGRATION_4: "Integration 4",
  ALL_INTEGRATIONS: "All Intrgrations",
  DEVELOPERS_1: "Developers 1",
  DEVELOPERS_2: "Developers 2",
};

export const CHILD_ROUTES = {
  GIFTCARD: "/giftcard",
  LOYALTY: "/loyalty",
  COUPONS: "/coupons",
  REFERRAL: "/referral",
  AUTOMATION: "/automated-workflows",
  B2B_GIFTCARDS: "/b2b-giftcards",
  STORE_CREDIT: "/store-credit",
  ALL_INTEGRATIONS: "/integrations",
  DEVELOPERS_1: "/giftcard",
  DEVELOPERS_2: "/giftcard",
};

export const CHILDRENS = {
  HOME: [],
  PRODUCTS: [
    "GIFTCARD",
    "LOYALTY",
    "COUPONS",
    "REFERRAL",
    "AUTOMATION",
    "B2B_GIFTCARDS",
    "STORE_CREDIT",
  ],
  INTEGRATION: [
    "INTEGRATION_1",
    "INTEGRATION_2",
    "INTEGRATION_3",
    "INTEGRATION_4",
    "ALL_INTEGRATIONS",
  ],
  PRICE: [],
  CASE_STUDY: [],
  SIGN_IN: [],
};

export const ADD_DEVIDER_BEFORE = { SIGN_IN: true };
