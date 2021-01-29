import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button'

const Page: FC = () => {
  return (
    <Layout>
      <h1>HOME</h1>
      <p>Hello, GatsbyJS</p>
      <Link to="/about">
        <Button>About page</Button>
      </Link>
    </Layout>
  )
}

export default Page
