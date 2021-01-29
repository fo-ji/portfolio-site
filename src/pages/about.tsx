import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const Page: FC = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>プロフィールページ</p>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default Page
