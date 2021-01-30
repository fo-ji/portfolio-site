import React from 'react'
import type { FC } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header: FC = () => {
  const data = useStaticQuery(graphql`
    query HeaderComponent {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <h1>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
    </header>
  )
}

export default Header
