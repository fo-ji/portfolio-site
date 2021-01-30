import React from 'react'
import type { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import { MuiThemeProvider } from '@material-ui/core'
import { theme } from '../assets/theme'
import '../assets/reset.css'

const Layout: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <section>{children}</section>
        <Footer />
      </div>
    </MuiThemeProvider>
  )
}

export default Layout
