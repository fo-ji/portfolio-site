import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

const Header: FC = () => {
  return (
    <header>
      <h1>
        <Link to="/">fo-ji portfolio site</Link>
      </h1>
    </header>
  )
}

export default Header
