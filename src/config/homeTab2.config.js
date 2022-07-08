import Icons from "../shared/assets";

export const HOMETAB_CONFIG2 = {
  HEAD: [{ Title: "" }],
  PANNEL_DATA: [
    {
      id: "refferal1",
      label: "Refferral",
      selected: "true",
      image: Icons.Reward.default,
      title: "Refer a Friend",
      subTitle: "",
      description1:
        " Boost yo organic seles by adding a customer refferal program to your eCommerce store",
      description2: "",
      list: [
        // {
        //     id: 1,
        //     title: "",
        //     description: "",
        //   },
      ],
    },
    {
      id: "onboarding",
      label: "Onboarding",
      selected: "false",
      image: Icons.OnBoarding.default,
      title: "New User Signup",
      subTitle: "",
      description1:
        "  When someone creates a new account, trigger a one-time discount email immeadiately after completion of the Sign-up form",
      description2: "",
      list: [
        // {
        //   id: 1,
        //   title: "",
        //   description: "",
        // },
      ],
    },
    {
      id: "upsell",
      label: "Upsell",
      selected: "false",
      image: Icons.Upsell.default,
      title: "Sell more products",
      subTitle: "",
      description1:
        "Based on Customer's Order data, Send Promotional Store Credit to Customer",
      description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
    },

    {
      id: "crosssell",
      label: "Cross Sell",
      image: Icons.CrossSell.default,
      title: "Sell more related products",
      subTitle: "",
      description1:
        "Send Coupons/Gift card specific to relevent product in the order for future purchase",
      description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
    },
    {
      id: "refund",
      label: "Refund",
      image: Icons.Refund.default,
      title: "Use Store credit to refund customer",
      subTitle: "",
      description1: "Issue store credit/gift card as refund after goods return",
      description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
    },

    {
      id: "reward",
      label: "Reward",
      selected: "false",
      image: Icons.Reward.default,
      title: "Use reward to nurture customers",
      subTitle: "",
      description1:
        " Reward users with store credit/gift card after reaching order count threshold",
      description2: "",
      list: [
        // { id: 1, title: "", description: "" },
      ],
    },
    {
      id: "retain",
      label: "Retain",
      selected: "false",
      image: Icons.Reward.default,
      title: "Use reward to retain customers",
      subTitle: "",
      description1:
        "  Automatically trigger a retention campaign when users meet segment conditions such as inactive or canceled",
      description2: "",
      list: [
        // {
        //   id: 1,
        //   title: "",
        //   description: " ",
        // },
      ],
    },
  ],
};
