import React, { FC } from 'react'
import { Link } from 'gatsby'

const Page: FC = () => {
  return (
    <>
      <h1>HOME</h1>
      <p>Hello, GatsbyJS</p>
      <Link to="/about">About page</Link>
    </>
  )
}

export default Page
