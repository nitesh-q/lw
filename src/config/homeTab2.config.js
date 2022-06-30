import Icons from "../shared/assets";

export default {
  Head: [{ Title: "" }],
  Pannel: [
    {
      id: "refferal1",
      label: "Refferral",
      selected: "true",
      image: Icons.Reward.default,
      title: "Refer a Friend",
      title2: "",
      description1:
        " Boost yo organic seles by adding a customer refferal program to your eCommerce store",
      description2: "",
      subTitle: [
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
      title2: "",
      description1:
        "  When someone creates a new account, trigger a one-time discount email immeadiately after completion of the Sign-up form",
      description2: "",
      subTitle: [
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
      title2: "",
      description1:
        "Based on Customer's Order data, Send Promotional Store Credit to Customer",
      description2: "",
      subTitle: [
        // { id: 1, title: "", description: "" },
      ],
    },

    {
      id: "crosssell",
      label: "Cross Sell",
      image: Icons.CrossSell.default,
      title: "Sell more related products",
      title2: "",
      description1:
        "Send Coupons/Gift card specific to relevent product in the order for future purchase",
      description2: "",
      subTitle: [
        // { id: 1, title: "", description: "" },
      ],
    },
    {
      id: "refund",
      label: "Refund",
      image: Icons.Refund.default,
      title: "Use Store credit to refund customer",
      title2: "",
      description1: "Issue store credit/gift card as refund after goods return",
      description2: "",
      subTitle: [
        // { id: 1, title: "", description: "" },
      ],
    },

    {
      id: "reward",
      label: "Reward",
      selected: "false",
      image: Icons.Reward.default,
      title: "Use reward to nurture customers",
      title2: "",
      description1:
        " Reward users with store credit/gift card after reaching order count threshold",
      description2: "",
      subTitle: [
        // { id: 1, title: "", description: "" },
      ],
    },
    {
      id: "retain",
      label: "Retain",
      selected: "false",
      image: Icons.Reward.default,
      title: "Use reward to retain customers",
      title2: "",
      description1:
        "  Automatically trigger a retention campaign when users meet segment conditions such as inactive or canceled",
      description2: "",
      subTitle: [
        // {
        //   id: 1,
        //   title: "",
        //   description: " ",
        // },
      ],
    },
  ],
};
