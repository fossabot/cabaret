module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description: 'Gatsby starter for bootstrap a blog',
    siteUrl: 'http://example.com',
    launchDate: '2018-10-1',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-000000-01' }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`roboto\:400,400i,500,700`]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#9D7CBF',
        showSpinner: false,
      },
    },
    'gatsby-plugin-react-next',
    'gatsby-plugin-lodash',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
  ],
};
