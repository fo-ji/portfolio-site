const env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`}); 

import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  pathPrefix: '/portfolio-site',
  siteMetadata: {
    title: 'My blog',
    author: 'fo-ji',
    desctiption: "fo-ji's PortfolioSite",
    user: {
      qiita: 'fo-ji'
    }
  },
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
        userName: 'fo-ji',
        fetchPrivate: false,
      }
    },
  ]
}

export default config
