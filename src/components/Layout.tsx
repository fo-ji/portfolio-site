import React from 'react'
import type { FC } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../assets/reset.css'

import { MuiThemeProvider } from '@material-ui/core'
import { theme } from '../assets/theme'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  section: {
    minHeight: 'calc(100vh - 128px)',
  },
})

const Layout: FC = ({ children }) => {
  const classes = useStyles()

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <section className={classes.section}>{children}</section>
        <Footer />
      </div>
    </MuiThemeProvider>
  )
}

export default Layout
