module.exports = {
  siteMetadata: {
    name: 'Giovanny Albarracín',
    image: 'https://pbs.twimg.com/profile_images/1015086152410333184/TFfYe743_400x400.jpg',
    cel: '(+57) 3006038271',
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
