module.exports = {
  siteMetadata: {
    name: 'Giovanny Albarracín',
    cel: '(+57) 3057837243',
    email: 'albarracingiovanny@gmail.com',
    link: 'about.me/giovannyalbarracin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`
      }
    }

  ],
}
