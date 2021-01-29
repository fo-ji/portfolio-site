import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Page: FC = () => {
  return (
    <Layout>
      <h1>HOME</h1>
      <p>Hello, GatsbyJS</p>
      <Link to="/about">About page</Link>
    </Layout>
  )
}

export default Page
