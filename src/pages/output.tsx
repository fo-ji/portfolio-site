import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import QiitaItems, { Post as QiitaPost } from '../components/QiitaItems'

type User = {
  qiita: string
}

type OutputIndexProps = {
  data: {
    allQiitaPost: {
      edges: QiitaPost[]
    }
    site: {
      siteMetadata: {
        user: User
      }
    }
  }
}

const Page: FC<OutputIndexProps> = ({ data }) => {
  const qiitaPosts = data.allQiitaPost.edges
  const { user } = data.site.siteMetadata

  return <Layout>{qiitaPosts && qiitaPosts.length > 0 && <QiitaItems posts={qiitaPosts} user={user.qiita} />}</Layout>
}

export default Page

export const query = graphql`
  query {
    site {
      siteMetadata {
        user {
          qiita
        }
      }
    }
    allQiitaPost {
      edges {
        node {
          id
          title
          url
          created_at
        }
      }
    }
  }
`
