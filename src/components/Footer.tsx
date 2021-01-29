import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; fo-ji</p>
      <ul>
        <li>
          <Link to="/">fo-ji portfolio site</Link>
        </li>
        <li>
          <a href="mailto:test@example.com">Contact</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
