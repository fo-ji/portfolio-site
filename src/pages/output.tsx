import React from 'react'
import type { FC } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import QiitaItems, { Post as QiitaPost } from '../components/QiitaItems'
import GithubRepos, { Repo } from '../components/GithubRepos'
import WordpressItems, { Post as WordpressPost } from '../components/WordpressItems'

type User = {
  qiita: string
  github: string
}

type OutputIndexProps = {
  data: {
    allQiitaPost: {
      edges: QiitaPost[]
    }
    allGithubData: {
      edges: [
        {
          node: {
            data: {
              user: {
                repositories: {
                  edges: Repo[]
                }
              }
            }
          }
        }
      ]
    }
    allWordpressPost: {
      edges: WordpressPost[]
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
  const gitRepos = data.allGithubData.edges[0].node.data.user.repositories.edges
  const wordpressPosts = data.allWordpressPost.edges
  const { user } = data.site.siteMetadata

  return (
    <Layout>
      {qiitaPosts && qiitaPosts.length > 0 && <QiitaItems posts={qiitaPosts} user={user.qiita} />}
      {gitRepos && gitRepos.length > 0 && <GithubRepos gitRepos={gitRepos} user={user.github} />}
      {wordpressPosts && wordpressPosts.length > 0 && <WordpressItems posts={wordpressPosts} />}
    </Layout>
  )
}

export default Page

export const query = graphql`
  query {
    site {
      siteMetadata {
        user {
          qiita
          github
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
    allGithubData {
      edges {
        node {
          data {
            user {
              repositories {
                edges {
                  node {
                    name
                    updatedAt
                    url
                    primaryLanguage {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          date
          link
        }
      }
    }
  }
`
