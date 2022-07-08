import Icons from "../shared/assets";

export const RELOAD_LIST = [
  {
    id: 1,
    title: "",
    description: " Reload Gift card @store, @online",
  },
  {
    id: 2,
    title: "",
    description: "Add Promotional $ value to Gift card from Admin Panel",
  },
];

export const UPLOAD_PHOTO_LIST = [
  {
    id: 1,
    title: "",
    description: " Reload Gift card @store, @online",
  },
  {
    id: 2,
    title: "",
    description: "Add Promotional $ value to Gift card from Admin Panel",
  },
];

export const SKU_LIST = [
  {
    id: 1,
    title: "",
    description: " Reload Gift card @store, @online",
  },
  {
    id: 2,
    title: "",
    description: "Add Promotional $ value to Gift card from Admin Panel",
  },
];

export const MOBILE_WALLET_LIST = [
  {
    id: 1,
    title: "",
    description: " Reload Gift card @store, @online",
  },
  {
    id: 2,
    title: "",
    description: "Add Promotional $ value to Gift card from Admin Panel",
  },
];

export const MIGRATION_LIST = [
  {
    id: 1,
    title: "",
    description: " Reload Gift card @store, @online",
  },
  {
    id: 2,
    title: "",
    description: "Add Promotional $ value to Gift card from Admin Panel",
  },
];

export const GIFTCARD_TABS_CONFIG = {
  HEAD: [{ Title: "" }],
  PANNEL_DATA: [
    {
      id: "reload",
      label: "Reload/Top Up",
      selected: "true",
      image: Icons.Reload.default,
      title: "Reload/Top Up Gift Card ",
      description1: "",
      description2: "",
      list: RELOAD_LIST,
    },
    {
      id: "uploadPhoto",
      label: "Upload Photo & Video ",
      selected: "false",
      image: Icons.Upload.default,
      title: "Upload Photo & Video",
      description1: "",
      description2: "",
      list: UPLOAD_PHOTO_LIST,
    },
    {
      id: "sku",
      label: "SKU Based Gift Card",
      selected: "false",
      image: Icons.Reload.default,
      title: "SKU Based Gift Card",
      subTitle: "",
      description1: "",
      description2: "",
      list: SKU_LIST,
    },

    {
      id: "mobile",
      label: "Mobile Wallet Pass",
      image: Icons.Reload.default,
      title: "Mobile Wallet Pass",
      description1: "  ",
      description2: "",
      list: MOBILE_WALLET_LIST,
    },
    {
      id: "migration",
      label: "Gift Card Migration",
      image: Icons.Reload.default,
      title: "Gift Card Migration",
      subTitle: "",
      description1: "",
      description2: "",
      list: MIGRATION_LIST,
    },
  ],
};

export const GIFTCARD_FEATURES_CONFIG = {
  GIFTCARD: [
    {
      id: 1,
      desc: "100’s of beautiful Gift Cards based on themes",
    },
    {
      id: 2,
      desc: "Upload your brand design Gift Cards",
    },
  ],
  REPORT: [
    {
      id: 1,
      desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
    },
    {
      id: 2,
      desc: "Gift card life-cycle management, tracking, and visibility from issuance to order level redemption",
    },
  ],

  SCHEDULE: [
    {
      id: 1,
      desc: "Schedule Gift card delivery up to 180 days",
    },
    {
      id: 2,
      desc: "Out of stock gift card to retain customer",
    },
    {
      id: 3,
      desc: "Gift card balance reminder email to customer",
    },
    {
      id: 4,
      desc: "Add Promotional fund to existing gift card",
    },
  ],
  SALE: [
    {
      id: 1,
      desc: "Reload Gift card @store, @online",
    },
    {
      id: 2,
      desc: "Add Promotional $ value to Gift card from Admin Panel",
    },
  ],
};
