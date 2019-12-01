module.exports = {
  siteMetadata: {
    title: `Disney World Height Calculator`,
    description: `Height Calculator for Walt Disney World Rides. Enter your party's heights to find out which rides are available to ride.`,
    author: `Dennis Glasberg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-16503259-3`,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `disney-height-requirements`,
        short_name: `disney-height-requirements`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'elrawqlj',
        dataset: 'production',
      },
    },
  ],
};
