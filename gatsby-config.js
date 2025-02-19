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
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,700`,
          `open sans\:400,700`
        ],
        display: "swap",
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
