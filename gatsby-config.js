module.exports = {
  siteMetadata: {
    title: 'Cabare Club',
    siteUrl: 'https://cabareclub.com.br',
    launchDate: '2018-10-1',
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-purify-css',
    'gatsby-plugin-react-next',
    'gatsby-plugin-lodash',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto', 'Lato', 'Oswald']
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#9D7CBF',
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-000000-01' }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: 'gatsby-plugin-favicon',
    //   options: {
    //     logo: './src/assets/images/logo.png',
    //     injectHTML: true,
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: false,
    //       coast: false,
    //       favicons: true,
    //       firefox: true,
    //       twitter: false,
    //       yandex: false,
    //       windows: false,
    //     }
    //   }
    // },
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
    }
  ],
};
