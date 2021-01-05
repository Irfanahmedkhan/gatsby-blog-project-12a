// const dotenv = require ('dotenv')

// if (process.env.NODE_ENV !== 'production') {
//   dotenv.config()
// }


module.exports = {
  siteMetadata: {
    title: `My Coding Journey`,
    author: {
      name: `Irfan Ahmed`,
      summary: `Live & Work in Saudi Arabia / Pakistan.`,
    },
    description: `Contentful Gatsby Blog `,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `irfanahmed`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0y73mzkq256q`,
        accessToken: 'YleeF2_SZkkdyxfCS8JZhIC3vsWChuFlF78iRgE8Rgc'
        // process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    'gatsby-plugin-smoothscroll',
  ],
}
