/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require("./config/siteMetaData")

module.exports = {
  /* Your site config here */

  siteMetadata,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mailgo",
    //"gatsby-plugin-sitemap",
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `GatsbyJS`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `#a2466c`,
    //     display: `standalone`,
    //     //icon in 512x512px png
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-nprogress`,
    //   options: {
    //     color: `tomato`,
    //     showSpinner: false,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //   },
    // },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, "500", "700"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["**/styles.js"],
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
