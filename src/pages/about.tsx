import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'

const Page: FC = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>プロフィールページ</p>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </Layout>
  )
}

export default Page
