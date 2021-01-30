import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'My blog',
    author: 'fo-ji',
    desctiption: 'Example blog using Gatsbyjs',
    email: 'test@example.com'
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.d.ts',
        documentPaths: ['src/**/*.{ts,tsx}', 'gatsby-*.ts']
      }
    }
  ]
}

export default config
