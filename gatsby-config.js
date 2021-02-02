const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

const siteMetadata = {
  title: 'My Portfolio Site',
  author: 'fo-ji',
  desctiption: "fo-ji's PortfolioSite",
  user: {
    github: 'fo-ji',
    qiita: 'fo-ji',
  },
}

module.exports = {
  pathPrefix: '/portfolio-site',
  siteMetadata,
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
      }
    },
    {
      resolve: `gatsby-source-qiita`,
      options: {
        accessToken: process.env.QIITA_API_TOKEN,
        userName: siteMetadata.user.qiita,
        fetchPrivate: false,
      }
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GIT_API_TOKEN,
        "graphQLQuery": `query ($author: String = "", $userFirst: Int = 0) {
          user(login: $author) {
            repositories(first: $userFirst, orderBy: {field: UPDATED_AT, direction: DESC}) {
              edges {
                node {
                  name
                  url
                  updatedAt
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }`,
        "variables": {
          "userFirst": 15,
          "author": "fo-ji"
        }
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'fo-jineer.com',
        hostingWPCOM: false,
        protocol: 'https',
        useACF: false,
        auth: {},
        verboseOutput: false,
        includedRoutes: [
          "**/posts",
        ],
      }
    }
  ]
}