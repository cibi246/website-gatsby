/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Manivannan Baskaran`,
    author: `Manivannan Baskaran`,
    firstName: `Manivannan`,
    lastName: `B.`,
    description: `Software Engineering Projects`,
    occupation: `Software Engineer`,
    keywords: [
      'Manivannan',
      'Baskaran',
      'Personal',
      'Blog',
      'Resume',
      'Projects',
      'Work',
    ],
    image: {},
    siteUrl: `http://localhost:8001`,
    unemployed: true,
    designations: [
      `Software Engineer`,
      `Tech Content Creator`,
      `JavaScript Enthusiast`,
      `Mentor`,
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stacy's Personal Site`,
        short_name: `Stacy K.`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/src/images/icon-small.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Raleway:300,400'],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
