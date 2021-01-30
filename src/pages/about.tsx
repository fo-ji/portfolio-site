import React from 'react'
import type { FC } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'
import type { AboutPageQuery } from '../../types/graphql-types'

interface PageProps {
  data: AboutPageQuery
}

const Page: FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <h1>About {data.site?.siteMetadata?.title ?? '(無題)'}</h1>
      <p>プロフィールページ</p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
