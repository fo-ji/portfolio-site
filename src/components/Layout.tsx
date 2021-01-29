import React from 'react'
import type { FC } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  )
}

export default Layout
