const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

// [TODO]下の実装で動作確認できれば削除

// import type { GatsbyConfig } from 'gatsby'

// const config: GatsbyConfig = {
//   pathPrefix: '/portfolio-site',
//   siteMetadata: {
//     title: 'My blog',
//     author: 'fo-ji',
//     desctiption: "fo-ji's PortfolioSite",
//     user: {
//       qiita: 'fo-ji',
//       github: 'fo-ji',
//     },
//     github: {
//       topic: 'portfolio-site'
//     }
//   },
//   plugins: [
//     `gatsby-plugin-material-ui`,
//     {
//       resolve: 'gatsby-plugin-graphql-codegen',
//       options: {
//         fileName: 'types/graphql-types.d.ts',
//         documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
//       }
//     },
//     {
//       resolve: `gatsby-source-qiita`,
//       options: {
//         accessToken: process.env.QIITA_API_TOKEN,
//         userName: 'fo-ji',
//         fetchPrivate: false,
//       }
//     },
//     {
//       resolve: `gatsby-source-github-api`,
//       options: {
//         token: process.env.GIT_API_TOKEN,
//         graphQLQuery: `
//         query ($q: String="", $nFirst: Int=0) {
//           allGithubData: search(query: $q, type: REPOSITORY, first: $nFirst) {
//             edges {
//               node {
//                 ... on Repository {
//                   id
//                   name
//                   description
//                   url
//                 }
//               }
//             }
//           }
//         }
//         `,
//         variables: {
//           q: `topic:portfolio-site user:fo-ji`,
//           nFirst: 10
//         }
//       }
//     },
//   ]
// }

// export default config

// require('dotenv').config()
// const path = require('path')

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
  ]
}