module.exports = {
  siteMetadata: {
    title: "Hoop West 2019",
    author: "Remi Nelson",
    description: "Fan made responsive schedule for hoop west 2019"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Hoop West 2019',
        short_name: 'Hoop West',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/pic03.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
