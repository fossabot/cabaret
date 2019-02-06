require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Cabare Club',
    siteUrl: 'https://cabareclub.com.br',
    launchDate: process.env.APP_LAUNCH_DATE,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-lodash',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'profiles',
        path: `${__dirname}/profiles/`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Montserrat', 'Playfair Display', 'Oswald'],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#E82D42',
        // showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.APP_GA_ID || 'UA-000000-01',
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: `https://www.example.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cabare Club',
        short_name: 'Cabare',
        start_url: '/',
        background_color: '#1a191f',
        theme_color: '#E82D42',
        display: 'standalone',
        orientation: 'portrait',
        icon: './src/assets/images/logo.png', // This path is relative to the root of the site.
      },
    },
  ],
}
