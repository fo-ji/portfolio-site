import React from 'react'
import type { FC } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FooterComponentQuery } from '../../types/graphql-types'

const Footer: FC = () => {
  const data = useStaticQuery<FooterComponentQuery>(graphql`
    query FooterComponent {
      site {
        siteMetadata {
          author
          email
        }
      }
    }
  `)

  return (
    <footer>
      <p>&copy; {data.site?.siteMetadata?.author ?? '(著者未設定)'}</p>
      <ul>
        <li>
          <Link to="/">fo-ji portfolio site</Link>
        </li>
        <li>
          <a href={`mailto:${data.site?.siteMetadata?.email ?? ''}`}>Contact</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
