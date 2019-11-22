module.exports = {
  siteMetadata: {
    title: `Disney World Height Calculator`,
    description: ``,
    author: `Dennis Glasberg`,
  },
  plugins: [
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
        icon: `src/images/gatsby-icon.png`,
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
