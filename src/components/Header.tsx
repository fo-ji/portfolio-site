import React from 'react'
import type { FC } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import type { HeaderComponentQuery } from '../../types/graphql-types'

const Header: FC = () => {
  const data = useStaticQuery<HeaderComponentQuery>(graphql`
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
        <Link to="/">{data.site?.siteMetadata?.title ?? '(無題)'}</Link>
      </h1>
    </header>
  )
}

export default Header
