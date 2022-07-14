import Icons from "../shared/assets";


export const BULK_GIFTCARD_LIST = [
  {
    title: "",
    description:
      " Generate gift cards numbers for printing physical plastic gift card",
  },
  {
    title: "",
    description: "Generate gift cards numbers for Corporate Gifting",
  },
];

export const MIGRATION_LIST = [
  {
    title: "",
    description:
      "Import existing gift cards | voucher | Certificates balance into 99minds.",
  },
  {
    title: "",
    description:
      "Seamless migration from existing gift card processor to 99minds",
  },
];

export const MULTICURRENCY_LIST = [
  {
    title: "",
    description:
      " Supports 100+ currencies, including USD, CAD, EUR, GBP, KRW, JPY, CNY & many more!",
  },
];

export const MULTI_STORE_LIST = [
  {
    title: "",
    description: "Gift card can be redeemed at multiple locations",
  },
];

export const RETURN_REFUND_LIST = [
  {
    title: "",
    description:
      " Gift card can be issue for merchandise return. Gift card amount can be updated on merchandise return bought on gift card.",
  },
];
export const WALLET_LIST = [
  {
    title: "",
    description: " Gift card can be store in digital wallet.",
  },
  {
    title: "",
    description:
      " Intuitive iOS / Android mobile wallet pass allows for a frictionless consumer experience at checkout in-store and online.",
  },
];

export const GIFTCARD_TABS_CONFIG = {
  HEAD: [{ Title: "" }],
  PANNEL_DATA: [
    {
      id: "bulk_gift_card",
      label: "Bulk Gift Card ",
      selected: "true",
      image: Icons.Reload.default,
      title: "Bulk Gift Card ",
      description1: "",
      description2: "",
      list: BULK_GIFTCARD_LIST,
     
    },
    {
      id: "migration",
      label: "Migration",
      selected: "false",
      image: Icons.Upload.default,
      title: "Migration",
      description1: "",
      description2: "",
      list: MIGRATION_LIST,
    },
    {
      id: "multicurrency",
      label: "Multicurrency",
      selected: "false",
      image: Icons.Reload.default,
      title: "Multicurrency",
      subTitle: "",
      description1: "",
      description2: "",
      list: MULTICURRENCY_LIST,
    },

    {
      id: "multi-Store",
      label: "Multi-Store",
      image: Icons.Reload.default,
      title: "Multi-Store",
      description1: "  ",
      description2: "",
      list: MULTI_STORE_LIST,
    },
    {
      id: "return_refund",
      label: "Return & Refund",
      image: Icons.Reload.default,
      title: "Return & Refund",
      subTitle: "",
      description1: "",
      description2: "",
      list: RETURN_REFUND_LIST,
    },
    {
      id: "Wallet",
      label: "Wallet",
      image: Icons.Reload.default,
      title: "Wallet",
      subTitle: "",
      description1: "",
      description2: "",
      list: WALLET_LIST,
    },
  ],
};
