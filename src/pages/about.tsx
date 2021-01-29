import React, { FC } from 'react'
import { Link } from 'gatsby'

const Page: FC = () => {
  return (
    <>
      <h1>About</h1>
      <p>プロフィールページ</p>
      <Link to="/">Home</Link>
    </>
  )
}

export default Page
