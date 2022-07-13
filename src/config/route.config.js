export const ROUTES = {
  HOME: "/home",
  PRODUCTS: "./",
  INTEGRATION: "./",
  RESOURCES: "./",
  DEVELOPERS: "./",
  SIGN_IN: "/",
};

export const ROUTES_LABEL = {
  HOME: "Home",
  PRODUCTS: "Products",
  INTEGRATION: "Integration",
  RESOURCES: "Resouces",
  DEVELOPERS: "Developers",
  SIGN_IN: "Sign In",
  GIFTCARD: "Gift Card",
  LOYALTY: "Loyalty",
  COUPONS: "Coupons",
  REFERRAL: "Referral Program",
  AUTOMATION: "Automation",
  B2B_GIFTCARDS: "B2b Gift Cards",
  INTEGRATION_1: "Integration 1",
  INTEGRATION_2: "Integration 2",
  INTEGRATION_3: "Integration 3",
  INTEGRATION_4: "Integration 4",
  RESOURCES_1: "Resources 1",
  RESOURCES_2: "Resources 2",
  DEVELOPERS_1: "Developers 1",
  DEVELOPERS_2: "Developers 2",
};

export const CHILD_ROUTES = {
  GIFTCARD: "/giftcard",
  LOYALTY: "/loyalty",
  COUPONS: "/coupons",
  REFERRAL: "/referral",
  AUTOMATION: "/automation",
  B2B_GIFTCARDS: "/b2bGiftcards",
  RESOURCES_1: "/giftcard",
  RESOURCES_2: "/giftcard",
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
  ],
  INTEGRATION: [
    "INTEGRATION_1",
    "INTEGRATION_2",
    "INTEGRATION_3",
    "INTEGRATION_4",
  ],
  RESOURCES: ["RESOURCES_1", "RESOURCES_2"],
  DEVELOPERS: ["DEVELOPERS_1", "DEVELOPERS_2"],
  SIGN_IN: [],
};

export const ADD_DEVIDER_BEFORE = { SIGN_IN: true };
