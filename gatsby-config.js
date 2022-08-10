// require("dotenv").config({
//   path: path.resolve(__dirname, '../.env'),
// });
require("dotenv").config({ path: "./.env" });

module.exports = {
  siteMetadata: {
    siteUrl: `https://99minds-gatsby.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-native-lazy-load`,
            options: {
              loading: "lazy", // "lazy" | "eager" | "auto"
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-source-custom-api`,
    //   options: {
    //     NODE_ENV: process.env.GATSBY_NODE_ENV,
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon/logo.png",
      },
    },
  ],
};
